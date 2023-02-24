import './Logo.scss';

import * as React from 'react';

import { Box, Flex, Svgs, Text } from '@/components';
import { forwardRef } from '@/helpers/systemPropsHelper';
import { AsProps, ColorSystemProps, LogoNameType, MarginSystemProps } from '@/types';

export type LogoProps = AsProps<'div'> &
  MarginSystemProps &
  Pick<ColorSystemProps, 'color'> & {
    name: LogoNameType;
    size?: string | number;
  };

export const Logo = forwardRef<LogoProps, 'div'>(({ name, size = '10rem', ...props }, ref) => (
  <Flex {...props} ref={ref} justifyContent="center" alignItems="center" className="logo" style={{ fontSize: size }}>
    <Svgs.Logo height="1em" />
    {name === 'blog' ? (
      <Box ml="m" className="logo__blog">
        <Text fontWeight="medium">Eleven Labs</Text>
        <Text fontWeight="bold">Le blog</Text>
      </Box>
    ) : (
      <Text ml="m" fontWeight="medium" className="logo__website">
        Eleven Labs
      </Text>
    )}
  </Flex>
));
