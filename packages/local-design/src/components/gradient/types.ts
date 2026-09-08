import type { WithSxProps } from '@wanteddev/wds-engine';
import type { CSSProperties } from 'react';

export type GradientProps = WithSxProps<{
  /** Edge the scrim is strongest at. `bottom` suits a caption sitting at the bottom of a card. */
  direction?: 'bottom' | 'top' | 'left' | 'right';
  /** Tint color. Omit for the photographic black scrim; pass a color to use the ramp as a mask over that color. */
  color?: CSSProperties['color'];
  /** Overall opacity of the scrim. */
  opacity?: number;
  /** Band thickness along `direction` (height for top/bottom, width for left/right). */
  size?: CSSProperties['height'];
  /** Border radius applied to the band. */
  radius?: CSSProperties['borderRadius'];
}>;
