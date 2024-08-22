import clsx from 'clsx';

import AddCompanyButton from './components/add-company-button';

export default function Home() {
  return (
    <main>
      <h1 className={clsx('text-xl')}>Home page</h1>
      <AddCompanyButton />
    </main>
  );
}
