import { To } from '@remix-run/router/history';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface IconLinkProps {
  icon: ReactNode;
  label: string;
  to: To;
}

export const IconLink: FC<IconLinkProps> = ({
  icon,
  label,
  to
}) => {
  return (
    <>
      <div className='flex flex-col items-center rounded-lg bg-black' >
        <img 
          src=" https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/500,/0/default.png" 
          className='object-none pt-5 px-5' />
        <Link className='py-4 px-3' style={{ color: '#F2ADAD', textAlign: 'center'}} to={to}>{label}</Link>
      </div>
    </>
  );
};

