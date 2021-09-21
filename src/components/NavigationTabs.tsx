import { useState } from 'react';
import tw, { styled } from 'twin.macro';

const Tab = styled.div<{
  active?: boolean;
}>`
  ${tw`
    inline-flex
    px-5
    py-1
    text-sm
    uppercase
    tracking-widest
    whitespace-nowrap
    rounded-full
    cursor-pointer
    select-none
  `}

  ${props => props.active
    ? tw`
      bg-blueGray-300
      text-blueGray-900
      font-bold
    `
    : tw`
      hover:bg-blueGray-100
    `};
`;

type Props = {
  tabs: Array<{
    label: string
  }>
};

export const NavigationTabs = ({tabs}: Props) => {
  const [activeTab, setActive] = useState(tabs[0].label);

  return (
    <div tw="inline-flex items-center space-x-3">
      {tabs.map(tab => (
        <div tw="w-32" key={tab.label}>
          <Tab
            active={activeTab === tab.label}
            onClick={() => setActive(tab.label)}>
            {tab.label}
          </Tab>
        </div>
      ))}
      
    </div>
  )
};
