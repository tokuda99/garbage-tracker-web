import * as React from 'react';
import Head from 'next/head';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Garbage Tracker</title>
      </Head>
      <div className={'flex min-h-100vh'}>
        <Sidebar />
        <div className={'flex flex-col flex-grow bg-gray-800'}>
          <Header />
          <main className={'bg-gray-600 flex-grow'}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;