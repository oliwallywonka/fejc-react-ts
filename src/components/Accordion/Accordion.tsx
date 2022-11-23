import { FC, PropsWithChildren, ReactNode } from 'react';
import { PropsWithClassName } from '../../types';

export type AccordionProps = PropsWithChildren & PropsWithClassName & {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  expanded?: boolean;
  onChange?: (expanded: boolean) => void;
};

export const Accordion: FC<AccordionProps> = ({
  title,
  icon,
  expanded,
  subtitle,
  children,
  className,
  onChange
}) => {
  return (
    <>
      <span>Accordion!</span>
      {children}
    </>
  );
};
