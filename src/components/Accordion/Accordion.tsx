import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PropsWithClassName } from '../../types';
import { IconPainting } from '../IconPainting/IconPainting';
import { notifyManager } from '@tanstack/react-query';

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
  onChange = () => {}
}) => {
  const [open, setOpen] = useState(expanded);
  return (
    <>
    <div className='grid'>

      <div className='py-3 bg-white font-bold rounded self-center' style={{
        justifySelf: 'center',
        width: expanded || open ? '100%' : '95%',
        boxShadow: expanded || open ?'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px': ''
      }}>
        <motion.header
          initial={false}
        >
          <div className='flex justify-between items-center p-3'>
            <div className='flex items-center'>
              <div className='mr-3 ml-1' style={{ minWidth: icon? '40px' : '0px'}}>
                { icon }
              </div>
              <div>
                <h4> { title.length > 21 ? `${title.slice(0, 22)}...` : title } </h4>
                <p className='font-light' style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}> { subtitle } </p>
              </div>
            </div>
            <img
              onClick={() => {
                setOpen(!open); 
                onChange(!expanded!); 
              }} 
              src='src/resources/ArrowIcon.svg'
              className='pr-1' 
              style={{
                objectPosition: 'center',
                display: 'block',
                alignSelf: 'center',
                height: 25,
                width: 25,
                transform: `rotate(${expanded || open? '0': '180deg'})`
              }}
            />
          </div>

        </motion.header>
        <AnimatePresence initial={false}>
          {(expanded || open) && (
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
                {children}
              </section>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
    </>
  );
};
