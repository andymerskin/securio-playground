import tw, { css } from 'twin.macro';
import { IncidentsChart } from './IncidentsChart';
import { Logo } from './Logo';
import { NavigationAccount } from './NavigationAccount';
import { NavigationTabs } from './NavigationTabs';

const flex2Css = css`
  flex: 2 2 auto;
`;

export const App = () => {
  return (
    <div>
      <header tw="
        flex
        items-center
        h-12
        px-5
        shadow
        bg-white
      ">
        <div tw="flex-1">
          <Logo />
        </div>
        <div tw="flex justify-center items-center" css={flex2Css}>
          <NavigationTabs tabs={[
            {
              label: 'Incidents',
            },
            {
              label: 'Directory',
            },
            {
              label: 'Courses',
            },
          ]} />
        </div>
        <div tw="flex justify-end items-center flex-1">
          <NavigationAccount />
        </div>
      </header>

      <div tw="container mx-auto px-5 sm:pt-8 pt-8">
        <IncidentsChart css={tw`pb-40`} />
      </div>

      <footer tw="fixed inset-x-0 bottom-0 p-5 text-blueGray-500">
        <div><strong>securio</strong> - Securing Your Security™</div>
        <div>© {new Date().getFullYear()} Andy Merskin</div>
      </footer>
    </div>
  )
};
