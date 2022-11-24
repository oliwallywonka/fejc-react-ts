import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PropsWithClassName } from '../../types';
import { IconPainting } from '../IconPainting/IconPainting';

export type AccordionProps = PropsWithChildren & PropsWithClassName & {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  expanded?: boolean;
  setExpanded?: any;
  expandedId?: number;
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
      <div className='bg-white font-bold rounded'>

        <motion.header
          initial={false}
        >
          <div className='flex justify-between items-center p-3'>
            <div className='flex items-center'>
              <div className='mr-3 ml-1'>
                { icon }
              </div>
              <div>
                <h4> { title.length > 21 ? `${title.slice(0, 22)}...` : title } </h4>
                <p className='font-light'> { subtitle } </p>
              </div>
            </div>
            <span className='pr-1' style={{
              background: 'url("src/resources/ArrowIcon.svg")',
              backgroundRepeat: 'no-repeat',
              display: '',
              height: 25,
              width: 25,
              transform: `rotate(${expanded? '180deg': '0'})`
            }}> </span> 
          </div>

        </motion.header>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.section
              key='content'
              initial='collapsed'
              animate='open'
              exit='collapsed'
              variants={{
                open: { opacity: 1, height: 'auto'},
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <section className='p-5'>

                <span>Accordion!</span>
                <span>Accordion!</span>
                <span>Accordion!</span>
                <span>Accordion!</span>
                <span>Accordion!</span>
                {children}
              </section>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
