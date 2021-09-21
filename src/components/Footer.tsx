import 'twin.macro';

export const Footer = () => {
  return (
    <footer tw="fixed inset-x-0 bottom-0 p-5 text-blueGray-500">
      <div><strong>securio</strong> - Securing Your Security™</div>
      <div>© {new Date().getFullYear()} Andy Merskin</div>
    </footer>
  )
};

