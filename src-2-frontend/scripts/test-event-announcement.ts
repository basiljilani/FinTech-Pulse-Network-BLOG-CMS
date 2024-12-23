import { announceEvent } from '../lib/community-events';

// Announce a test event
const announceTestEvent = async () => {
  try {
    await announceEvent({
      title: 'Launch Day: FinTech Pulse Network Community',
      date: new Date('2024-01-10T16:00:00Z'),
      description: `🚀 Join us for the official launch of our FinTech Pulse Network community! 

We'll be covering:
• Platform introduction and features
• Upcoming events and initiatives
• Community guidelines and roles
• Q&A session

Don't miss this opportunity to be part of our growing community from day one!`,
      type: 'webinar',
      speakers: [
        'Basil Jilani - Founder, FinTech Pulse Network',
        'Community Management Team'
      ],
      registrationLink: 'https://fintech-pulse.network/launch-event'
    });
    console.log('Event announced successfully!');
  } catch (error) {
    console.error('Error announcing event:', error);
  }
};

announceTestEvent();
