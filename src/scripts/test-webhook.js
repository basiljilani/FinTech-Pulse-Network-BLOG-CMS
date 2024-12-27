import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: resolve(__dirname, '../../.env') });

const webhookUrl = process.env.VITE_DISCORD_WEBHOOK_URL;

const testEvent = {
  embeds: [{
    title: '🚀 Launch Day: FinTech Pulse Network Community',
    description: `Join us for the official launch of our FinTech Pulse Network community! 

We'll be covering:
• Platform introduction and features
• Upcoming events and initiatives
• Community guidelines and roles
• Q&A session

Don't miss this opportunity to be part of our growing community from day one!`,
    color: 0x5865F2,
    fields: [
      {
        name: '📅 Date & Time',
        value: new Date('2024-01-10T16:00:00Z').toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        }),
        inline: false
      },
      {
        name: '👥 Featured Speakers',
        value: '• Basil Jilani - Founder, FinTech Pulse Network\n• Community Management Team',
        inline: false
      },
      {
        name: '🔗 Registration',
        value: '[Click here to register](https://fintech-pulse.network/launch-event)',
        inline: false
      }
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: 'FinTech Pulse Network Community'
    }
  }]
};

try {
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testEvent),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  console.log('Event announced successfully! 🎉');
} catch (error) {
  console.error('Error announcing event:', error);
}
