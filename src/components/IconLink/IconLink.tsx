import { To } from '@remix-run/router/history';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface IconLinkProps {
  icon: string;
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
          src={`https://www.artic.edu/iiif/2/${icon}/full/150,/0/default.png`} 
          className='object-none pt-2 px-2' style={{ height: '130px', width: '130px'}}/>
        <Link className='py-4 px-1 font-light text-xs' style={{ color: '#F2ADAD', textAlign: 'center'}} to={to}>{label}</Link>
      </div>
    </>
  );
};

