import Justdial from '.justdial';
import justdial from './justdial';

export default {
  title: 'Components/justdial',
  component: justdial,
};

const Template = (args) => <justdial {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
