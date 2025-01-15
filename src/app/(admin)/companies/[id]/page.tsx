'use client';

import { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id})`}</p>
    </div>
  );
}
