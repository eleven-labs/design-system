import './ProgressBar.scss';

import React from 'react';

import { Box } from '@/components';
import { marginSystemProps } from '@/constants';
import { omitSystemProps } from '@/helpers/systemPropsHelper';
import { MarginSystemProps, PolymorphicProps } from '@/types';

export interface ProgressBarProps extends Omit<PolymorphicProps<'progress'>, 'as'>, MarginSystemProps {}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, max = 100, ...boxProps }) => {
  const progressProps = omitSystemProps({
    props: boxProps,
    systemPropNames: Object.keys(marginSystemProps),
  });
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `.progress-bar::before { width: ${value}% }` }} />
      <Box {...boxProps} className="progress-bar">
        <progress {...progressProps} value={value} max={max}>
          {value}%
        </progress>
      </Box>
    </>
  );
};
