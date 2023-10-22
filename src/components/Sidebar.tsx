import { useState } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { BsGraphUpArrow } from 'react-icons/bs';
import { NavigationItem } from './NavigationItem';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { useIsSidebarOpenState } from '@/recoil/isSidebarOpen/isSidebarOpen';

export const Sidebar = () => {
  const isSidebarOpen = useIsSidebarOpenState();
  return (
    <>
      <nav
        className={`${
          isSidebarOpen ? '' : 'ml-minus-256'
        } w-256 bg-gray-900 p-20 duration-300`}
      >
        <NavigationItem Icon={AiFillDashboard} href={'/'} name={'HOME'} />
        <NavigationItem
          Icon={HiOutlineUserGroup}
          href={'/users'}
          name={'Users'}
        />
        <NavigationItem Icon={BsGraphUpArrow} href={'/sales'} name={'Sales'} />
      </nav>
    </>
  );
};