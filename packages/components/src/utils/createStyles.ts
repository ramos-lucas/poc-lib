import { RuleSet } from 'styled-components';

import { Theme } from '..';

type StyleObject<T extends string | number | symbol> = Record<T, RuleSet>;
type Styles<T> = {
  [K in keyof T]?: T[K] extends boolean
    ? StyleObject<Extract<keyof T, string>>
    : Partial<StyleObject<Extract<T[K], string>>>;
} & StyleObject<'base'>;

export function createStyles<T extends { theme: Theme }>(
  props: T,
  styles: Styles<T>,
): RuleSet[] {
  const myStyles = [];
  const { base, ...restStyles } = styles;

  myStyles.push(base);

  Object.keys(restStyles).reduce((result, current) => {
    const prop = current as keyof T;
    const value = String(props[prop]);

    if (styles[prop] && styles[prop]?.hasOwnProperty(value)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      result.push(styles[prop][value]);
    }

    return result;
  }, myStyles);

  return myStyles;
}
