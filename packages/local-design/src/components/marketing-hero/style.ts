import { respondMore } from '@wanteddev/wds';
import { css } from '@wanteddev/wds-engine';

import type { Theme } from '@wanteddev/wds-engine';
import type { MarketingHeroProps } from './types';

export const marketingHeroStyle =
  ({ tone }: Pick<MarketingHeroProps, 'tone'>) =>
  (theme: Theme) => css`
    width: 100%;
    padding: 48px 20px;
    background-color: ${tone === 'inverse'
      ? theme.semantic.inverse.background
      : tone === 'alternative'
        ? theme.semantic.background.normal.alternative
        : theme.semantic.background.normal.normal};
    color: ${tone === 'inverse'
      ? theme.semantic.inverse.label
      : theme.semantic.label.normal};

    ${respondMore(theme.breakpoint.sm)} {
      padding: 80px 32px;
    }
  `;

export const marketingHeroInnerStyle = (theme: Theme) => css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  ${respondMore(theme.breakpoint.md)} {
    flex-direction: row;
    align-items: center;
    gap: 64px;
  }
`;

/* Column layout below md: `flex-basis` would become a fixed height and leave
   empty space under the copy and media, so the row-only sizing lives in the
   md breakpoint. */
export const marketingHeroCopyStyle = (theme: Theme) => css`
  flex: none;
  width: 100%;
  min-width: 0;

  ${respondMore(theme.breakpoint.md)} {
    flex: 1 1 420px;
    width: auto;
  }
`;

export const marketingHeroMediaStyle = (theme: Theme) => css`
  flex: none;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 20px;
  background-color: ${theme.semantic.fill.alternative};

  ${respondMore(theme.breakpoint.md)} {
    flex: 1 1 420px;
    width: auto;
  }
`;

export const marketingHeroActionsStyle = css`
  width: 100%;
  flex-wrap: wrap;
`;
