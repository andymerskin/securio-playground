import 'twin.macro';
import { CodeIcon } from '@heroicons/react/solid';
import { linkCss } from './styles';

export const Footer = () => {
  return (
    <footer tw="
      fixed
      inset-x-0
      bottom-0
      flex
      justify-between
      items-center
      px-5
      py-5
      text-blueGray-500
      bg-blueGray-200
    ">
      <div>
        <div><strong>securio</strong> - Securing Your Security™</div>
        <div tw="text-sm">
          A fun UI / data visualization exercise
        </div>
        <div tw="mt-2 text-sm">
          <a href="https://github.com/docmars/securio-playground" css={linkCss}>
            <span tw="inline-flex items-center space-x-1">
              <CodeIcon tw="h-5" />
              <span>View on GitHub</span>
            </span>
          </a>
        </div>
      </div>
      <div>© {new Date().getFullYear()} Andy Merskin</div>
    </footer>
  )
};

