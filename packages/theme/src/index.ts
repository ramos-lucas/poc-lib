import { border } from "../tokens/borders.json";
import { color } from "../tokens/colors.json";
import { font } from "../tokens/fonts.json";
import { gradient } from "../tokens/gradients.json";
import { measure } from "../tokens/measures.json";
import { radius } from "../tokens/radii.json";
import { shadow } from "../tokens/shadows.json";
import { text } from "../tokens/text.json";
import { typography } from "../tokens/typography.json";

import { css } from "@acme-org/styled-system/css";
import { styled } from "@acme-org/styled-system/jsx";
import "@acme-org/styled-system/styles.css";

export const theme = {
  border,
  color,
  font,
  gradient,
  measure,
  radius,
  shadow,
  text,
  typography,
};

export default theme;
export { css, styled };
