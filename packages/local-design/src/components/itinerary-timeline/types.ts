import type { WithSxProps } from '@wanteddev/wds-engine';
import type { ReactNode } from 'react';

/** Marker color encodes what kind of stop this is. */
export type ItineraryStopKind = 'game' | 'place' | 'stay' | 'food';

export type ItineraryStop = {
  /** Stable key for the stop. */
  id: string;
  /** Marker number. Defaults to the 1-based position within the day. */
  index?: number;
  /** Stop kind that colors the rail marker. Defaults to `place`. */
  kind?: ItineraryStopKind;
  /** Time or time range displayed under the marker. */
  time?: string;
  /** Stop title, or a fully composed stop body. */
  title: ReactNode;
  /** Factual supporting information. */
  description?: ReactNode;
  /** Optional compact factual status. */
  status?: ReactNode;
};

export type ItineraryDay = {
  /** Stable key for the day group. */
  id: string;
  /** Day label such as Day 1. */
  label: ReactNode;
  /** Optional calendar date. */
  date?: ReactNode;
  /** Ordered stops. */
  stops: Array<ItineraryStop>;
  /** Optional content under the day's stops, aligned with the stop cards. */
  footer?: ReactNode;
};

export type ItineraryTimelineProps = WithSxProps<{
  /** Ordered day groups. */
  days: Array<ItineraryDay>;
  /** Called when an interactive stop is selected. */
  onSelectStop?: (stop: ItineraryStop) => void;
}>;
