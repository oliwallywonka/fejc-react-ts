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
    <><Link to={to}>{label}</Link></>
  );
};
