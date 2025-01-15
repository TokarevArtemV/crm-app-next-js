'use client';

export interface LoadingComponentProps {}

export default function LoadingComponent({}: LoadingComponentProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <p className="font-medium text-lg text-center">Loading...</p>
    </div>
  );
}
