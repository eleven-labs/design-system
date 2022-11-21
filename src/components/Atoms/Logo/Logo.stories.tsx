import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Logo } from '@/components';
import { marginSystemProps } from '@/constants';

export default {
    title: 'Components/Atoms/Logo',
    component: Logo,
    argTypes: {
        ...marginSystemProps,
    },
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Overview = Template.bind({});
