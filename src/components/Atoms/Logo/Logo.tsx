import * as React from 'react';

import { Box, Icons, Text } from '@/components';
import { MarginSystemProps, PolymorphicProps } from '@/types';

export type LogoProps = Omit<PolymorphicProps<'div'>, 'color'> & MarginSystemProps;

export const Logo: React.FC<LogoProps> = ({
    as = 'div',
    ...boxProps
}) => (
    <Box as={as} {...boxProps}>
        <Icons.Logo width="45px" height="45px" />
        <Text as="span">Eleven Labs</Text>
    </Box>
)
