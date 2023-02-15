import * as React from "react";
import { SVGProps } from "react";
const SvgArrowBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M19 11.125H8.351l4.891-4.891L12 5l-7 7 7 7 1.234-1.234-4.883-4.891H19v-1.75Z"
    />
  </svg>
);
export default SvgArrowBack;
