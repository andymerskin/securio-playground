import 'twin.macro';
import { UserCircleIcon } from '@heroicons/react/solid';

export const NavigationAccount = () => {
  return (
    <div tw="
      inline-flex
      items-center
      py-1
      px-3
      space-x-2
      whitespace-nowrap
      rounded-lg
      cursor-pointer
      border
      border-transparent
      hover:bg-blueGray-100
      hover:border-blueGray-200
      active:bg-blueGray-200
      active:border-blueGray-300
      select-none
      transition
    ">
      <span>Welcome, Jim!</span>
      <UserCircleIcon tw="h-8 text-gray-700" />
    </div>
  )
};
