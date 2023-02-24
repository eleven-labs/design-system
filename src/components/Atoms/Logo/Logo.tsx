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

export const Logo = forwardRef<LogoProps, 'div'>(({ name, size = '10rem', ...props }, ref) => {
  const Svg = (Svgs as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>)['Logo'];
  return (
    <Flex {...props} ref={ref} justifyContent="center" alignItems="center" style={{ fontSize: size }}>
      <Svg height="1em" />
      {name === 'blog' ? (
        <Box ml="m" style={{ lineHeight: 1, fontSize: '1ex' }}>
          <Text fontWeight="medium">Eleven Labs</Text>
          <Text fontWeight="bold">Le blog</Text>
        </Box>
      ) : (
        <Text ml="m" fontWeight="medium" style={{ lineHeight: 1, fontSize: '1.5ex' }}>
          Eleven Labs
        </Text>
      )}
    </Flex>
  );
});
