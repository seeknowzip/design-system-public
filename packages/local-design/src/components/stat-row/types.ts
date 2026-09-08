import type { WithSxProps } from '@wanteddev/wds-engine';
import type { ReactNode } from 'react';

export type StatRowItem = {
  /** Stable key for the metric. */
  id: string;
  /** Sourced value. */
  value: ReactNode;
  /** Metric name. */
  label: ReactNode;
  /** Optional qualifier or source note. */
  note?: ReactNode;
};

export type StatRowProps = WithSxProps<{
  /** Metrics displayed in the row. */
  items: Array<StatRowItem>;
}>;
