import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Button, ForceTheme } from '@wanteddev/wds';
import { axe } from 'vitest-axe';

import { Gradient } from './gradient';
import { Icon } from './icon';
import { ItineraryTimeline } from './itinerary-timeline';
import { MarketingHero } from './marketing-hero';
import { StatRow } from './stat-row';

describe('Local extensions', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders MarketingHero accessibly in a dark theme', async () => {
    const { container } = render(
      <ForceTheme theme="dark">
        <MarketingHero
          eyebrow="Demo event"
          title="팀 일정의 기준을 한눈에 확인하세요"
          description="확정된 일정과 조건을 순서대로 안내해요."
          actions={<Button>상담 요청하기</Button>}
        />
      </ForceTheme>,
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '팀 일정의 기준을 한눈에 확인하세요',
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders StatRow as an accessible description list', async () => {
    const { container } = render(
      <StatRow
        items={[{ id: 'teams', value: '12', label: '참여 팀', note: '예시' }]}
      />,
    );

    expect(screen.getByText('참여 팀').tagName).toBe('DT');
    expect(screen.getByText('12').tagName).toBe('DD');
    expect(await axe(container)).toHaveNoViolations();
  });

  it('keeps an informational itinerary non-interactive and accessible', async () => {
    const { container } = render(
      <ItineraryTimeline
        days={[
          {
            id: 'day-1',
            label: '1일차',
            stops: [
              {
                id: 'gym',
                time: '10:00',
                title: '체육관',
                description: '경기 일정',
              },
            ],
          },
        ]}
      />,
    );

    expect(screen.queryByRole('button', { name: /체육관/ })).toBeNull();
    expect(screen.getByText('체육관')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });

  it('uses buttons only when itinerary stops are interactive', async () => {
    const handleSelect = vi.fn();

    const { container } = render(
      <ItineraryTimeline
        days={[
          {
            id: 'day-1',
            label: '1일차',
            stops: [
              {
                id: 'gym',
                time: '10:00',
                title: '체육관',
                description: '경기 일정',
              },
            ],
          },
        ]}
        onSelectStop={handleSelect}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /체육관/ }));
    expect(handleSelect).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'gym' }),
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('resolves foundation icons by kebab-case name and renders nothing for unknown names', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(
      <>
        <Icon name="star-fill" size={44} data-testid="star" />
        <Icon name="no-such-icon" data-testid="missing" />
      </>,
    );

    const star = container.querySelector('svg');
    expect(star).not.toBeNull();
    expect(star).toHaveAttribute('width', '44');
    expect(star).toHaveAttribute('height', '44');
    expect(screen.queryByTestId('missing')).toBeNull();
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });

  it('renders Gradient as a decorative, non-interactive scrim', async () => {
    const { container } = render(
      <div style={{ position: 'relative' }}>
        <Gradient direction="bottom" size={120} data-testid="scrim" />
      </div>,
    );

    const scrim = screen.getByTestId('scrim');
    expect(scrim).toHaveAttribute('aria-hidden', 'true');
    expect(scrim).toHaveStyle({ position: 'absolute', pointerEvents: 'none' });
    expect(await axe(container)).toHaveNoViolations();
  });
});
