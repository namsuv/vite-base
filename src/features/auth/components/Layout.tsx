import * as React from 'react';

import logo from '@/assets/logo.svg';
import { Head } from '@/components/Head';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      {/* <Head title={title} /> */}
      <div className='absolute inset-0'>
        <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center'>
          <Link
            to={'/'}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'self-start -mt-20'
            )}>
            <ChevronLeft className='mr-2 h-4 w-4' />
            Home</Link>

          {children}
        </div>
      </div>
    </>
  );
};
