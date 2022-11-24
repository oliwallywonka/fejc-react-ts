import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconLink } from './IconLink';


const defaultStorySettings: ComponentMeta<typeof IconLink> = {
  title: 'Ch Components/IconLink/Details',
  component: IconLink,
  args: {
    label: 'Simple Story',
  },
  parameters: {
    controls: {
      disabled: false,
      include: /^expanded$/
    }
  }
};

export default defaultStorySettings;

const Template: ComponentStory<typeof IconLink> = (props) => {
  return (
    <div className='w-full max-w[600px]'>
      <IconLink {...props}/>
    </div>
  );
};

export const SimpleStory = Template.bind({});
SimpleStory.storyName = 'Label';
SimpleStory.args = {};

export const SimpleStoryWithLongLabel = Template.bind({});
SimpleStoryWithLongLabel.storyName = 'Long label';
SimpleStory.args = {
  label: 'This is an example of a long label to test whether the link is displayend appropriately'
}