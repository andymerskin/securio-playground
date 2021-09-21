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
  )
}
