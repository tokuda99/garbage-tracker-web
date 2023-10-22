import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons/lib';

type Props = {
  Icon: IconType;
  href: string;
  name: string;
};

export const NavigationItem = ({ Icon, href, name }: Props) => {
  const router = useRouter();
  return (
    <>
      <Link
        href={href}
        className={`${
          router.pathname == href
            ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50'
            : ''
        } w-100p rounded-8 flex items-center p-12 text-14 text-white duration-200 hover:bg-emerald-200/80 hover:shadow-lg hover:shadow-emerald-500/50`}
      >
        <Icon color={'white'} size={24} />
        <p className={'ml-10'}>{name}</p>
      </Link>
    </>
  );
};