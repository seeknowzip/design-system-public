import { forwardRef } from 'react';
import { Box, FlexBox, Typography } from '@wanteddev/wds';

import {
  marketingHeroActionsStyle,
  marketingHeroCopyStyle,
  marketingHeroInnerStyle,
  marketingHeroMediaStyle,
  marketingHeroStyle,
} from './style';

import type { DefaultComponentPropsInternal } from '@wanteddev/wds-engine';
import type { MarketingHeroProps } from './types';

const MarketingHero = forwardRef<
  HTMLElement,
  DefaultComponentPropsInternal<MarketingHeroProps, 'section'>
>(
  (
    { eyebrow, title, description, actions, media, tone = 'normal', ...props },
    ref,
  ) => {
    const inverse = tone === 'inverse';

    return (
      <Box
        as="section"
        ref={ref}
        {...props}
        sx={[marketingHeroStyle({ tone }), props.sx]}
      >
        <FlexBox flexDirection="column" gap="40px" sx={marketingHeroInnerStyle}>
          <FlexBox
            flexDirection="column"
            gap="20px"
            sx={marketingHeroCopyStyle}
          >
            {eyebrow ? (
              <Typography
                variant="label1"
                weight="bold"
                color={
                  inverse
                    ? 'semantic.inverse.primary'
                    : 'semantic.primary.normal'
                }
              >
                {eyebrow}
              </Typography>
            ) : null}
            <Typography
              as="h1"
              variant="title1"
              weight="bold"
              sm={{ variant: 'display3' }}
              lg={{ variant: 'display2' }}
              color={
                inverse ? 'semantic.inverse.label' : 'semantic.label.normal'
              }
            >
              {title}
            </Typography>
            {description ? (
              <Typography
                as="p"
                variant="body1-reading"
                weight="regular"
                color={
                  inverse
                    ? 'semantic.inverse.label'
                    : 'semantic.label.alternative'
                }
              >
                {description}
              </Typography>
            ) : null}
            {actions ? (
              <FlexBox gap="12px" sx={marketingHeroActionsStyle}>
                {actions}
              </FlexBox>
            ) : null}
          </FlexBox>
          {media ? <Box sx={marketingHeroMediaStyle}>{media}</Box> : null}
        </FlexBox>
      </Box>
    );
  },
);

MarketingHero.displayName = 'MarketingHero';

export { MarketingHero };
export type { MarketingHeroProps };
