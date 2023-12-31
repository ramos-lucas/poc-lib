import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBell = ({
  title = "SvgBell",
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
      d="M11.935 3a5.728 5.728 0 0 1 5.728 5.728c0 2.373.428 4.156 1.127 5.439.235.43.48.765.72 1.018l.061.063.1.095.064.056.018.013c.647.431.38 1.416-.359 1.494l-.095.005H4.57c-.776 0-1.1-.967-.53-1.442l.095-.07.065-.056.1-.095.06-.063c.24-.253.486-.589.72-1.018.665-1.219 1.084-2.889 1.124-5.087l.003-.352A5.728 5.728 0 0 1 11.935 3Zm0 1.637A4.092 4.092 0 0 0 7.847 8.55l-.004.177c0 2.64-.493 4.692-1.327 6.223l-.113.2-.075.124H17.54l-.074-.123-.113-.201c-.795-1.458-1.28-3.39-1.325-5.85l-.003-.373-.004-.177a4.092 4.092 0 0 0-4.087-3.914Zm1.826 14.021a.819.819 0 0 0-1.066.218l-.106.16a.819.819 0 0 1-1.309 0l-.106-.16a.819.819 0 0 0-1.363.9 2.455 2.455 0 0 0 4.247 0 .818.818 0 0 0-.297-1.118Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBell;
