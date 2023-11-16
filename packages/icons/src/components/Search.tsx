import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSearch = ({
  title = "SvgSearch",
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.1 3a8.1 8.1 0 1 0 5.056 14.429l3.308 3.307.084.075a.9.9 0 0 0 1.188-1.347l-3.307-3.308A8.1 8.1 0 0 0 11.1 3Zm4.537 12.47a6.3 6.3 0 1 0-.166.166.911.911 0 0 1 .166-.165Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch;
