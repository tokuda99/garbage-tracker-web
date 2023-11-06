import { useState } from 'react';
import { NavigationItem } from './NavigationItem';
import { AiFillHome, AiFillSetting, AiFillMail } from 'react-icons/ai';
import { FaStamp } from 'react-icons/fa';
import { RiFileHistoryFill } from 'react-icons/ri'
import { IoMdContact } from 'react-icons/io';
import { MdContactSupport } from 'react-icons/md';

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
        <NavigationItem Icon={AiFillHome} href={'/'} name={'HOME'} />
        <NavigationItem Icon={IoMdContact} href={'/user'} name={'User'}/>
        <NavigationItem Icon={FaStamp} href={'/stamp'} name={'Stamp'} />
        <NavigationItem Icon={RiFileHistoryFill} href={'/log'} name={'Log'} />
        <NavigationItem Icon={AiFillSetting} href={'/setting'} name={'Setting'} />
        <NavigationItem Icon={MdContactSupport} href={'/help'} name={'Help'} />
        <NavigationItem Icon={AiFillMail} href={'/contact'} name={'Contact'} />

      </nav>
    </>
  );
};