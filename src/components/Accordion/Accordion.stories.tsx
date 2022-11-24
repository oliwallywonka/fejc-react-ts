import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconPainting } from '../IconPainting/IconPainting';
import { Accordion } from './Accordion';

const defaultStorySettings: ComponentMeta<typeof Accordion> = {
  title: 'Ch Components/Accordion/Overview',
  component: Accordion,
  argTypes: {
    title: {
      description: 'The title to be displayed in the accordion header.',
      control: 'text',
      defaultValue: 'Title'
    },
    subtitle: {
      description: 'The subtitle to be displayed in the accordion header.',
      control: 'text',
      defaultValue: undefined
    },
    icon: {
      description: 'The icon url to be displayed in the accordion header. If undefined or not retrievable, it is not displayed in the view.',
      control: 'text',
      defaultValue: 'https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/200,/0/default.png'
    },
    expanded: {
      description: 'Toggle whether the accordion should render expanded or collapsed.',
      control: 'boolean',
      defaultValue: false
    }
  },
  args: {
    title: 'Accordion title',
    children: <span>Accordion content</span>
  }
};

export default defaultStorySettings;

const Template: ComponentStory<typeof Accordion> = (props) => {
  return (
    <div className="w-full max-w-[600px]">
      <Accordion {...props} icon={ <IconPainting/> }/>
    </div>
  );
};

export const OverviewStory = Template.bind({});
OverviewStory.storyName = 'Overview';
