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
            ? 'bg-orange-400 shadow-lg shadow-orange-500/50'
            : ''
        } w-100p rounded-8 flex items-center p-12 text-14 text-white duration-200 hover:bg-orange-300/90 hover:shadow-lg hover:shadow-orange-400/50`}
      >
        <Icon color={'white'} size={24} />
        <p className={'ml-10'}>{name}</p>
      </Link>
    </>
  );
};