import { forwardRef } from 'react';
import { Box, ContentBadge, FlexBox, Typography } from '@wanteddev/wds';

import {
  itineraryDayStyle,
  itineraryFooterStyle,
  itineraryMarkerStyle,
  itineraryRailLineStyle,
  itineraryRailStyle,
  itineraryStopButtonStyle,
  itineraryStopContentStyle,
  itineraryStopListStyle,
  itineraryStopRowStyle,
  itineraryStopStyle,
  itineraryTimeStyle,
  itineraryTimelineStyle,
  itineraryTitleStyle,
} from './style';

import type { DefaultComponentPropsInternal } from '@wanteddev/wds-engine';
import type { ItineraryTimelineProps } from './types';

/**
 * Day-grouped schedule: a numbered marker and time sit on a vertical rail,
 * the stop card sits beside them. Marker color encodes the stop kind.
 */
const ItineraryTimeline = forwardRef<
  HTMLOListElement,
  DefaultComponentPropsInternal<ItineraryTimelineProps, 'ol'>
>(({ days, onSelectStop, ...props }, ref) => {
  const interactive = Boolean(onSelectStop);

  return (
    <FlexBox
      as="ol"
      ref={ref}
      flexDirection="column"
      gap="28px"
      {...props}
      sx={[itineraryTimelineStyle, props.sx]}
    >
      {days.map((day) => (
        <FlexBox
          as="li"
          key={day.id}
          flexDirection="column"
          gap="12px"
          sx={itineraryDayStyle}
        >
          <FlexBox alignItems="baseline" gap="8px">
            <Typography as="h2" variant="heading1" weight="bold">
              {day.label}
            </Typography>
            {day.date ? (
              <Typography
                variant="body2"
                weight="medium"
                color="semantic.label.alternative"
              >
                {day.date}
              </Typography>
            ) : null}
          </FlexBox>
          <Box as="ol" sx={itineraryStopListStyle}>
            {day.stops.map((stop, position) => (
              <Box as="li" key={stop.id}>
                <Box sx={itineraryStopRowStyle}>
                  <Box as="span" sx={itineraryRailStyle}>
                    <FlexBox
                      as="span"
                      alignItems="center"
                      justifyContent="center"
                      sx={itineraryMarkerStyle({ kind: stop.kind ?? 'place' })}
                    >
                      <Typography
                        as="span"
                        variant="label2"
                        weight="bold"
                        color="semantic.static.white"
                      >
                        {stop.index ?? position + 1}
                      </Typography>
                    </FlexBox>
                    {stop.time ? (
                      <Typography
                        as="span"
                        variant="label2"
                        weight="bold"
                        color="semantic.label.assistive"
                        sx={itineraryTimeStyle}
                      >
                        {stop.time}
                      </Typography>
                    ) : null}
                    <Box as="span" aria-hidden sx={itineraryRailLineStyle} />
                  </Box>
                  <FlexBox
                    as={interactive ? 'button' : 'div'}
                    type={interactive ? 'button' : undefined}
                    flexDirection="column"
                    gap="4px"
                    onClick={
                      interactive ? () => onSelectStop?.(stop) : undefined
                    }
                    sx={[
                      itineraryStopStyle,
                      itineraryStopContentStyle,
                      interactive ? itineraryStopButtonStyle : undefined,
                    ]}
                  >
                    <FlexBox alignItems="baseline" gap="8px" flexWrap="wrap">
                      <Typography
                        variant="headline2"
                        weight="bold"
                        sx={itineraryTitleStyle}
                      >
                        {stop.title}
                      </Typography>
                      {stop.status ? (
                        <ContentBadge color="neutral" size="xsmall">
                          {stop.status}
                        </ContentBadge>
                      ) : null}
                    </FlexBox>
                    {stop.description ? (
                      <Typography
                        variant="body2-reading"
                        weight="regular"
                        color="semantic.label.alternative"
                      >
                        {stop.description}
                      </Typography>
                    ) : null}
                  </FlexBox>
                </Box>
              </Box>
            ))}
          </Box>
          {day.footer ? (
            <Box sx={itineraryFooterStyle}>{day.footer}</Box>
          ) : null}
        </FlexBox>
      ))}
    </FlexBox>
  );
});

ItineraryTimeline.displayName = 'ItineraryTimeline';

export { ItineraryTimeline };
export type {
  ItineraryDay,
  ItineraryStop,
  ItineraryStopKind,
  ItineraryTimelineProps,
} from './types';
