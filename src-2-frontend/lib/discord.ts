interface DiscordWebhookMessage {
  content?: string;
  username?: string;
  avatar_url?: string;
  embeds?: Array<{
    title?: string;
    description?: string;
    url?: string;
    color?: number;
    fields?: Array<{
      name: string;
      value: string;
      inline?: boolean;
    }>;
    thumbnail?: {
      url: string;
    };
    image?: {
      url: string;
    };
    timestamp?: string;
  }>;
}

export const sendDiscordMessage = async (message: DiscordWebhookMessage) => {
  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error('Discord webhook URL not configured');
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`Failed to send Discord message: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error('Error sending Discord message:', error);
    throw error;
  }
}

// Utility functions for common message types
export const sendNewBlogPostAnnouncement = async (
  title: string,
  description: string,
  url: string,
  imageUrl?: string
) => {
  return sendDiscordMessage({
    embeds: [{
      title: '📝 New Blog Post Published!',
      description: `**${title}**\n\n${description}`,
      url,
      color: 0x00ff00, // Green color
      thumbnail: imageUrl ? { url: imageUrl } : undefined,
      timestamp: new Date().toISOString(),
    }]
  });
};

export const sendMarketUpdate = async (
  market: string,
  change: string,
  analysis: string
) => {
  return sendDiscordMessage({
    embeds: [{
      title: '📊 Market Update',
      fields: [
        {
          name: 'Market',
          value: market,
          inline: true
        },
        {
          name: 'Change',
          value: change,
          inline: true
        },
        {
          name: 'Analysis',
          value: analysis
        }
      ],
      color: 0x0099ff, // Blue color
      timestamp: new Date().toISOString(),
    }]
  });
};

export const sendCommunityAlert = async (
  title: string,
  message: string,
  priority: 'low' | 'medium' | 'high' = 'medium'
) => {
  const colors = {
    low: 0x00ff00,    // Green
    medium: 0xffff00,  // Yellow
    high: 0xff0000     // Red
  };

  return sendDiscordMessage({
    embeds: [{
      title: `🔔 ${title}`,
      description: message,
      color: colors[priority],
      timestamp: new Date().toISOString(),
    }]
  });
};
