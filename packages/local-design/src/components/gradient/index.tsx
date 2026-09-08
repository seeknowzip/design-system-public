import { forwardRef } from 'react';
import { Box } from '@wanteddev/wds-engine';

import { GRADIENT_STOPS, gradientStyle } from './style';

import type { DefaultComponentPropsInternal } from '@wanteddev/wds-engine';
import type { GradientProps } from './types';

/**
 * Scrim that keeps text legible over imagery. Place it as an absolutely
 * positioned child of a ratio-locked media box, sized to the band the text
 * occupies rather than the whole image.
 */
const Gradient = forwardRef<
  HTMLSpanElement,
  DefaultComponentPropsInternal<GradientProps, 'span'>
>(({ direction, color, opacity, size, radius, ...props }, ref) => {
  return (
    <Box
      as="span"
      ref={ref}
      aria-hidden
      {...props}
      sx={[
        gradientStyle({ direction, color, opacity, size, radius }),
        props.sx,
      ]}
    />
  );
});

Gradient.displayName = 'Gradient';

export { Gradient, GRADIENT_STOPS };
export type { GradientProps };
