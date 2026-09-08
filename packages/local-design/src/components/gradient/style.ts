import { css } from '@wanteddev/wds-engine';

import type { GradientProps } from './types';

/**
 * 16-stop eased ramp. A two-stop linear gradient bands across a photo; these
 * stops keep the fade smooth. Transcribed verbatim from the legacy scrim.
 */
export const GRADIENT_STOPS =
  'rgba(0,0,0,1) 0%, rgba(0,0,0,0.9792) 4.7%, rgba(0,0,0,0.956) 8.9%, rgba(0,0,0,0.9296) 12.8%, rgba(0,0,0,0.8989) 16.56%, rgba(0,0,0,0.863) 20.37%, rgba(0,0,0,0.8208) 24.4%, rgba(0,0,0,0.7714) 28.83%, rgba(0,0,0,0.7139) 33.84%, rgba(0,0,0,0.6472) 39.6%, rgba(0,0,0,0.5704) 46.3%, rgba(0,0,0,0.4824) 54.1%, rgba(0,0,0,0.3824) 63.2%, rgba(0,0,0,0.2693) 73.76%, rgba(0,0,0,0.1422) 85.97%, rgba(0,0,0,0) 100%';

const ANGLE: Record<NonNullable<GradientProps['direction']>, number> = {
  bottom: 0,
  top: 180,
  right: 270,
  left: 90,
};

export const gradientStyle = ({
  direction = 'bottom',
  color,
  opacity = 1,
  size = '100%',
  radius,
}: GradientProps) => {
  const ramp = `linear-gradient(${ANGLE[direction]}deg, ${GRADIENT_STOPS})`;
  const vertical = direction === 'bottom' || direction === 'top';

  return css`
    position: absolute;
    pointer-events: none;
    opacity: ${opacity};
    border-radius: ${radius === undefined ? 'initial' : radius};
    ${vertical
      ? `left: 0; right: 0; ${direction}: 0; height: ${typeof size === 'number' ? `${size}px` : size};`
      : `top: 0; bottom: 0; ${direction}: 0; width: ${typeof size === 'number' ? `${size}px` : size};`}
    ${color
      ? `background: ${color}; mask-image: ${ramp}; -webkit-mask-image: ${ramp};`
      : `background-image: ${ramp};`}
  `;
};
