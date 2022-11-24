import { FC } from 'react';
import Accordion from '../../components/Accordion';
import { IconPainting } from '../../components/IconPainting/IconPainting';

export const Home: FC = () => {
  return (
    <div className="page">
      <h2 className="title-2">
        Mr. Van G
      </h2>
      <Accordion title='Painting and Sculpture' icon={<IconPainting/>}></Accordion>
    </div>
  );
};
