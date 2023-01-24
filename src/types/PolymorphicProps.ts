import * as React from 'react';

export type PolymorphicProps<C extends React.ElementType> = {
  as?: C;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;
