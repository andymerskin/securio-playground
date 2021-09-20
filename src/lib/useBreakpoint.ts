import { useLayoutEffect, useState } from 'react'
import { theme } from 'twin.macro'

const breakpoints = Object.keys(theme<Record<string, string>>('screens'));
const reversedBreakpoints = [...breakpoints].reverse();

const initialValue = breakpoints.reduce((prev, next) => {
  prev[next] = false;
  return prev;
}, {} as MatchesT);

type BreakpointT = typeof breakpoints[number];
type BreakpointsT = Partial<
  Record<BreakpointT, () => void>
>;
type MatchesT = Record<BreakpointT, boolean>;

export const useBreakpoint = (breakpointFns: BreakpointsT): [
  MatchesT,
  number
] => {
  const [matches, setMatches] = useState(initialValue);
  const [width, setWidth] = useState<number>(0);

  useLayoutEffect(() => {    
    const mediaHandlers: Partial<
      Record<
        BreakpointT,
        {
          media: MediaQueryList,
          handler: (e: MediaQueryListEvent) => void,
        }
      >
    > = {};

    breakpoints.forEach(breakpoint => {
      // Create the query in useLayoutEffect since Next.js doesn't recognize 'matchMedia' during SSR      
      const widthValue = theme<Record<string, string>>('screens')[breakpoint];
      const matchMinWidth = matchMedia(`(min-width: ${widthValue})`);

      // Set initial matches
      setMatches(state => ({
        ...state,
        [breakpoint]: matchMinWidth.matches,
      }));

      // Listen for changes to the query match
      const onChangeMinWidth = (e: MediaQueryListEvent) => {
        setMatches(state => ({
          ...state,
          [breakpoint]: e.matches,
        }));
      };

      matchMinWidth.addEventListener('change', onChangeMinWidth);

      mediaHandlers[breakpoint] = {
        media: matchMinWidth,
        handler: onChangeMinWidth,
      };
    });

    // Cleanup listener on unmount
    return () => {
      for (const breakpoint in mediaHandlers) {
        const entry = mediaHandlers[breakpoint as BreakpointT];
        entry?.media.removeEventListener('change', entry.handler);
      }
    }
  }, []);

  useLayoutEffect(() => {
    const setWidthValue = (breakpoint: BreakpointT) => {
      const widthValue = theme<Record<string, string>>('screens')[breakpoint];
      setWidth(parseInt(widthValue));
    };

    // Set hook's width value when any breakpoint is hit
    for (const index in reversedBreakpoints) {
      const breakpoint = reversedBreakpoints[index];

      if (matches[breakpoint as BreakpointT]) {
        setWidthValue(breakpoint);
        break;
      } else {
        setWidthValue(reversedBreakpoints[reversedBreakpoints.length - 1]);
      }
    }

    const breakpointFnsKeys = Object.keys(breakpointFns);
    for (const index in breakpointFnsKeys) {      
      const breakpoint = breakpointFnsKeys[index];
      
      if (matches[breakpoint]) {
        // Fire breakpoint handlers passed into hook
        breakpointFns?.[breakpoint]?.();
        break;
      } else {       
        breakpointFns?.['default']?.();
      }
    }
  }, [matches]);

  return [matches, width];
}