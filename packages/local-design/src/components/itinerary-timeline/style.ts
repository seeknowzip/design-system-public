import { respondMore } from '@wanteddev/wds';
import { css } from '@wanteddev/wds-engine';

import type { Theme } from '@wanteddev/wds-engine';
import type { ItineraryStopKind } from './types';

const RAIL_WIDTH = 56;
const RAIL_WIDTH_WIDE = 64;
const MARKER_SIZE = 28;

export const itineraryTimelineStyle = css`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const itineraryDayStyle = css`
  margin: 0;
  padding: 0;
`;

export const itineraryStopListStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const itineraryStopRowStyle = css`
  display: flex;
  align-items: stretch;
  gap: 12px;
  min-width: 0;
`;

/* The rail keeps the marker and time in one column. The route line is drawn in
   two pieces so it never runs behind the time label: ::before joins the row top
   to the marker centre (continuing the previous stop), and a flex filler runs
   from under the time to the row bottom (towards the next stop). */
export const itineraryRailStyle = (theme: Theme) => css`
  position: relative;
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  width: ${RAIL_WIDTH}px;
  padding-top: 4px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: ${4 + MARKER_SIZE / 2}px;
    margin-left: -1px;
    background-color: ${theme.semantic.line.normal.alternative};
  }

  li:first-of-type > * > &::before {
    display: none;
  }

  ${respondMore(theme.breakpoint.sm)} {
    width: ${RAIL_WIDTH_WIDE}px;
  }
`;

export const itineraryRailLineStyle = (theme: Theme) => css`
  flex: 1 1 auto;
  width: 2px;
  min-height: 8px;
  margin-top: 6px;
  background-color: ${theme.semantic.line.normal.alternative};

  li:last-of-type > * > * > & {
    visibility: hidden;
  }
`;

const markerColor = (theme: Theme, kind: ItineraryStopKind) => {
  switch (kind) {
    case 'game':
      return theme.semantic.primary.normal;
    case 'food':
      return theme.semantic.status.negative;
    case 'stay':
      return theme.semantic.accent.background.cyan;
    case 'place':
    default:
      return theme.semantic.accent.background.violet;
  }
};

export const itineraryMarkerStyle =
  ({ kind }: { kind: ItineraryStopKind }) =>
  (theme: Theme) => css`
    position: relative;
    width: ${MARKER_SIZE}px;
    height: ${MARKER_SIZE}px;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: ${markerColor(theme, kind)};
    color: ${theme.semantic.static.white};
  `;

export const itineraryTimeStyle = css`
  position: relative;
  margin-top: 4px;
  text-align: center;
  white-space: nowrap;
`;

export const itineraryStopStyle = (theme: Theme) => css`
  position: relative;
  flex: 1;
  width: auto;
  min-width: 0;
  margin: 0 0 8px;
  padding: 16px;
  border: 0;
  border-radius: 14px;
  background-color: ${theme.semantic.background.elevated.normal};
  box-shadow: inset 0 0 0 1px ${theme.semantic.line.normal.alternative};
  color: ${theme.semantic.label.normal};
  font: inherit;
  text-align: left;
`;

export const itineraryStopButtonStyle = (theme: Theme) => css`
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${theme.semantic.primary.normal};
    outline-offset: 2px;
  }
`;

export const itineraryStopContentStyle = css`
  min-width: 0;
`;

/* A composed title body must span the card, so its own trailing controls sit flush right. */
export const itineraryTitleStyle = css`
  flex: 1 1 auto;
  min-width: 0;
`;

export const itineraryFooterStyle = (theme: Theme) => css`
  padding-left: ${RAIL_WIDTH + 12}px;

  ${respondMore(theme.breakpoint.sm)} {
    padding-left: ${RAIL_WIDTH_WIDE + 12}px;
  }
`;
