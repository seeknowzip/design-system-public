import { forwardRef } from 'react';
import * as icons from '@wanteddev/wds-icon';

import type {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import type { SxProp } from '@wanteddev/wds-engine';
import type { IconProps } from './types';

const toExportName = (name: string) =>
  `Icon${name
    .split('-')
    .filter(Boolean)
    .map((part) => part[0]!.toUpperCase() + part.slice(1))
    .join('')}`;

type FoundationIcon = ForwardRefExoticComponent<
  ComponentPropsWithoutRef<'svg'> & {
    sx?: SxProp;
  } & RefAttributes<SVGSVGElement>
>;

const registry = icons as unknown as Record<string, FoundationIcon | undefined>;

const warned = new Set<string>();

/**
 * Name-addressed access to the foundation icon set, for surfaces that bind
 * components by string (Claude Code Design `x-import`, content templates).
 * Application code imports the icon component directly instead.
 * An unregistered name renders nothing and warns once.
 */
const Icon = forwardRef<
  SVGSVGElement,
  IconProps & Omit<ComponentPropsWithoutRef<'svg'>, 'name'>
>(({ name, size = '1em', ...props }, ref) => {
  const Component = registry[toExportName(name)];

  if (!Component) {
    if (!warned.has(name)) {
      warned.add(name);
      console.warn(`@local/design Icon: no foundation icon named "${name}"`);
    }
    return null;
  }

  return <Component ref={ref} width={size} height={size} {...props} />;
});

Icon.displayName = 'Icon';

export { Icon };
export type { IconProps };
