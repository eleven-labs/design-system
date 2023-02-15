import * as React from "react";
import { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.445 16.463a2.172 2.172 0 0 1 0-3.069l1.98-1.98-.94-.94-1.98 1.98a3.501 3.501 0 0 0 4.949 4.95l1.98-1.98-.94-.94-1.98 1.98a2.172 2.172 0 0 1-3.07 0Zm2.524-1.534 3.96-3.96-.99-.99-3.96 3.96.99.99Zm1.485-7.425-1.98 1.98.94.94 1.98-1.98a2.172 2.172 0 0 1 3.07 0 2.172 2.172 0 0 1 0 3.07l-1.98 1.98.94.94 1.98-1.98a3.501 3.501 0 0 0 0-4.95 3.501 3.501 0 0 0-4.95 0Z"
    />
  </svg>
);
export default SvgLink;