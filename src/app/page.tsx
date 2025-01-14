import Link from 'next/link';
import clsx from 'clsx';
import MagicButton from './components/magic-button';

export default function Home() {
  return (
    <main className={'flex flex-col gap-x-3'}>
      <h1 className={clsx('text-xl')}>Home page</h1>
      <Link className={'font-bold'} href={'/dashboard'}>
        Dashboard
      </Link>
      <Link className={'font-bold'} href={'/companies'}>
        Companies
      </Link>
      <MagicButton />
    </main>
  );
}
