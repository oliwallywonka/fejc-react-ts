import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { PropsWithClassName } from '../../types';

export type PhoneScreenProps = PropsWithClassName;

export const PhoneScreen: FC<PhoneScreenProps> = ({
  className
}) => {
  return (
    <div
      className={`${className} w-[360px] h-[640px] border-gray-200 shadow-xl rounded-md bg-gray-200 overflow-hidden`}
    >
      <Outlet/>
    </div>
  );
};
