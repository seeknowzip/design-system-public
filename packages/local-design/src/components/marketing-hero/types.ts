import type { WithSxProps } from '@wanteddev/wds-engine';
import type { ReactNode } from 'react';

export type MarketingHeroProps = WithSxProps<{
  /** Short context above the title. */
  eyebrow?: ReactNode;
  /** The page's primary claim. */
  title: ReactNode;
  /** Supporting explanation. */
  description?: ReactNode;
  /** Primary and optional secondary actions. */
  actions?: ReactNode;
  /** Photo, video, or product media supporting the claim. */
  media?: ReactNode;
  /** Surface treatment with semantic foundation colors. */
  tone?: 'normal' | 'alternative' | 'inverse';
}>;
