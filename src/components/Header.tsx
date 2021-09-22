import { css } from "twin.macro";
import { Logo } from "./Logo"
import { NavigationAccount } from "./NavigationAccount"
import { NavigationTabs } from "./NavigationTabs"

const flex2Css = css`
  flex: 2 2 auto;
`;

export const Header = () => {
  return (
    <header tw="
      fixed
      inset-x-0
      top-0
      flex
      items-center
      h-12
      px-5
      shadow
      bg-white
      z-50
    ">
      <div tw="flex-1 flex-shrink-0">
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
      <div tw="flex justify-end items-center flex-1 flex-shrink-0">
        <NavigationAccount />
      </div>
    </header>
  )
}
