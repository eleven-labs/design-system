export type PolymorphicProps<C extends React.ElementType> = {
  as?: C;
} & React.ComponentPropsWithoutRef<C>;
