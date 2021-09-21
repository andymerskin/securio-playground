import tw, { css } from 'twin.macro';

export const linkCss = css`
  ${tw`
    text-blue-500
    cursor-pointer
    hover:underline
  `};

  * {
    ${tw`hover:underline`};
  }
`;
