import { forwardRef } from 'react';
import { FlexBox, Typography } from '@wanteddev/wds';

import {
  statRowItemStyle,
  statRowLabelStyle,
  statRowNoteStyle,
  statRowStyle,
  statRowValueStyle,
} from './style';

import type { DefaultComponentPropsInternal } from '@wanteddev/wds-engine';
import type { StatRowProps } from './types';

const StatRow = forwardRef<
  HTMLDListElement,
  DefaultComponentPropsInternal<StatRowProps, 'dl'>
>(({ items, ...props }, ref) => {
  return (
    <FlexBox
      as="dl"
      ref={ref}
      data-count={items.length}
      {...props}
      sx={[statRowStyle, props.sx]}
    >
      {items.map((item) => (
        <FlexBox
          as="div"
          key={item.id}
          flexDirection="column"
          gap="8px"
          sx={statRowItemStyle}
        >
          <Typography
            as="dt"
            variant="body2"
            weight="medium"
            color="semantic.label.alternative"
            sx={statRowLabelStyle}
          >
            {item.label}
          </Typography>
          <Typography
            as="dd"
            variant="title1"
            weight="bold"
            sx={statRowValueStyle}
          >
            {item.value}
          </Typography>
          {item.note ? (
            <Typography
              as="dd"
              variant="caption1"
              weight="regular"
              color="semantic.label.assistive"
              sx={statRowNoteStyle}
            >
              {item.note}
            </Typography>
          ) : null}
        </FlexBox>
      ))}
    </FlexBox>
  );
});

StatRow.displayName = 'StatRow';

export { StatRow };
export type { StatRowItem, StatRowProps } from './types';
