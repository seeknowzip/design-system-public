import { respondMore } from '@wanteddev/wds';
import { css } from '@wanteddev/wds-engine';

import type { Theme } from '@wanteddev/wds-engine';

/* Column count follows the item count so a 3-metric row does not leave a
   fourth empty column (the last cell used to stretch past its divider). */
export const statRowStyle = (theme: Theme) => css`
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid ${theme.semantic.line.normal.neutral};
  border-bottom: 1px solid ${theme.semantic.line.normal.neutral};

  ${respondMore(theme.breakpoint.sm)} {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    &[data-count='3'] {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  ${respondMore(theme.breakpoint.lg)} {
    grid-template-columns: repeat(4, minmax(0, 1fr));

    &[data-count='2'] {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &[data-count='3'] {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;

export const statRowItemStyle = (theme: Theme) => css`
  min-width: 0;
  padding: 24px 0;
  border-bottom: 1px solid ${theme.semantic.line.normal.alternative};

  &:last-child {
    border-bottom: 0;
  }

  ${respondMore(theme.breakpoint.sm)} {
    padding: 32px 24px;
    border-bottom: 0;
    border-right: 1px solid ${theme.semantic.line.normal.alternative};

    &:nth-of-type(2n),
    [data-count='3'] > &:nth-of-type(3n) {
      border-right: 0;
    }

    [data-count='3'] > &:nth-of-type(2n) {
      border-right: 1px solid ${theme.semantic.line.normal.alternative};
    }

    &:last-child {
      border-right: 0;
    }
  }

  ${respondMore(theme.breakpoint.lg)} {
    &:nth-of-type(2n) {
      border-right: 1px solid ${theme.semantic.line.normal.alternative};
    }

    [data-count='2'] > &:nth-of-type(2n),
    [data-count='3'] > &:nth-of-type(3n),
    &:nth-of-type(4n),
    &:last-child {
      border-right: 0;
    }
  }
`;

export const statRowValueStyle = css`
  order: 1;
  margin: 0;
  font-variant-numeric: tabular-nums;
`;

export const statRowLabelStyle = css`
  order: 2;
  margin: 0;
`;

export const statRowNoteStyle = css`
  order: 3;
  margin: 0;
`;
