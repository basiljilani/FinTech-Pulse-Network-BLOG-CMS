import { sendDiscordMessage } from './discord';

export interface CommunityEvent {
  title: string;
  date: Date;
  description: string;
  type: 'webinar' | 'ama' | 'workshop' | 'networking' | 'other';
  speakers?: string[];
  registrationLink?: string;
}

const eventEmojis = {
  webinar: '🎥',
  ama: '🎤',
  workshop: '💡',
  networking: '🤝',
  other: '📅'
};

export const announceEvent = async (event: CommunityEvent) => {
  const eventDate = event.date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  const fields = [
    {
      name: '📅 Date & Time',
      value: eventDate,
      inline: false
    }
  ];

  if (event.speakers && event.speakers.length > 0) {
    fields.push({
      name: '👥 Featured Speakers',
      value: event.speakers.map(speaker => `• ${speaker}`).join('\n'),
      inline: false
    });
  }

  if (event.registrationLink) {
    fields.push({
      name: '🔗 Registration',
      value: `[Click here to register](${event.registrationLink})`,
      inline: false
    });
  }

  return sendDiscordMessage({
    embeds: [{
      title: `${eventEmojis[event.type]} ${event.title}`,
      description: event.description,
      color: 0x5865F2, // Discord blue
      fields,
      timestamp: new Date().toISOString()
    }]
  });
};

// Example usage:
export const announceUpcomingEvents = async () => {
  // Webinar announcement
  await announceEvent({
    title: 'DeFi Market Analysis & Trends 2024',
    date: new Date('2024-01-15T18:00:00Z'),
    description: 'Join us for an in-depth analysis of DeFi market trends and predictions for 2024. Our expert panel will discuss emerging protocols, market opportunities, and risk management strategies.',
    type: 'webinar',
    speakers: [
      'Sarah Chen - DeFi Research Lead',
      'Michael Rodriguez - Market Analyst'
    ],
    registrationLink: 'https://fintech-pulse.network/events/defi-trends-2024'
  });

  // AMA Session
  await announceEvent({
    title: 'Ask Me Anything: Crypto Trading Strategies',
    date: new Date('2024-01-20T15:00:00Z'),
    description: 'Get your trading questions answered by our expert traders. Topics include technical analysis, risk management, and market psychology.',
    type: 'ama',
    speakers: ['Alex Thompson - Senior Crypto Trader'],
    registrationLink: 'https://fintech-pulse.network/events/trading-ama'
  });
};
