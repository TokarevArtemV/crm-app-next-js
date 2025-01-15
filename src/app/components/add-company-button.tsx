'use client';

import React, { useState } from 'react';
import Button from './button';
import { useRouter } from 'next/navigation';

const AddCompanyButton = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
};

export default AddCompanyButton;
