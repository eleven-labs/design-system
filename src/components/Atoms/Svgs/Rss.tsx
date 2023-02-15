import * as React from "react";
import { SVGProps } from "react";
const SvgRss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.292 18.977a2.259 2.259 0 1 0-.002-4.518 2.259 2.259 0 0 0 .002 4.518Zm5.272-1.107c0 .621.508 1.13 1.13 1.13.62 0 1.128-.509 1.128-1.13 0-4.791-3.895-8.7-8.693-8.7C5.509 9.17 5 9.677 5 10.3c0 .62.508 1.13 1.129 1.13 3.556 0 6.435 2.892 6.435 6.44Z"
    />
    <path
      fill="currentColor"
      d="M17.87 19c.622 0 1.13-.509 1.13-1.13C19 10.774 13.23 5 6.14 5c-.62 0-1.129.508-1.129 1.13 0 .621.508 1.13 1.13 1.13 5.848 0 10.6 4.757 10.6 10.61 0 .621.497 1.13 1.13 1.13Z"
    />
  </svg>
);
export default SvgRss;
