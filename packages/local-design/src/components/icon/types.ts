import type { SxProp } from '@wanteddev/wds-engine';
import type { CSSProperties } from 'react';

export type IconProps = {
  /** Foundation icon name in kebab-case, e.g. `star-fill` → `IconStarFill` from `@wanteddev/wds-icon`. */
  name: string;
  /** Rendered width and height. Defaults to `1em` (the foundation icon default). */
  size?: CSSProperties['width'];
  sx?: SxProp;
};
