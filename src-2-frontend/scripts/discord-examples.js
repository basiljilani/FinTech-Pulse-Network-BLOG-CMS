import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: resolve(__dirname, '../../.env') });

const webhookUrl = process.env.VITE_DISCORD_WEBHOOK_URL;

// Market Update Example
const sendMarketUpdate = async () => {
  const marketUpdate = {
    embeds: [{
      title: '📊 Daily Market Update',
      description: 'Key market movements and analysis for today',
      color: 0x00ff00, // Green color
      fields: [
        {
          name: 'Bitcoin (BTC)',
          value: '▲ $42,500 (+5.2%)',
          inline: true
        },
        {
          name: 'Ethereum (ETH)',
          value: '▲ $2,250 (+3.8%)',
          inline: true
        },
        {
          name: 'Market Sentiment',
          value: '🟢 Bullish',
          inline: true
        },
        {
          name: '📈 Key Insights',
          value: '• BTC broke major resistance at $42,000\n• ETH showing strong momentum\n• DeFi TVL up 12% this week',
        }
      ],
      thumbnail: {
        url: 'https://example.com/chart.png' // You can add a chart image here
      },
      timestamp: new Date().toISOString()
    }]
  };

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(marketUpdate)
  });
};

// Educational Content Example
const sendEducationalContent = async () => {
  const educationalPost = {
    embeds: [{
      title: '📚 Learning Series: Understanding DeFi',
      description: 'Today\'s topic: Automated Market Makers (AMMs)',
      color: 0x9B59B6, // Purple color
      fields: [
        {
          name: '🎯 What are AMMs?',
          value: 'Automated Market Makers are smart contracts that create liquidity pools of tokens, enabling decentralized trading.'
        },
        {
          name: '💡 Key Concepts',
          value: '• Liquidity Pools\n• Constant Product Formula\n• Impermanent Loss\n• Slippage'
        },
        {
          name: '📖 Further Reading',
          value: '[Click here for detailed guide](https://docs.fintech-pulse.network/defi/amm)'
        }
      ],
      image: {
        url: 'https://example.com/amm-diagram.png' // Add an educational diagram
      }
    }]
  };

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(educationalPost)
  });
};

// Community Poll Example
const sendCommunityPoll = async () => {
  const poll = {
    content: '🗳️ **Community Poll**\n\nWhat topic would you like to see covered in our next educational series?',
    embeds: [{
      description: 'React with the corresponding emoji to vote:',
      color: 0x3498DB, // Blue color
      fields: [
        {
          name: '1️⃣ Technical Analysis',
          value: 'Learn to read charts and identify patterns',
          inline: false
        },
        {
          name: '2️⃣ DeFi Strategies',
          value: 'Deep dive into yield farming and liquidity provision',
          inline: false
        },
        {
          name: '3️⃣ Blockchain Development',
          value: 'Smart contract development and Web3 integration',
          inline: false
        },
        {
          name: '4️⃣ Risk Management',
          value: 'Portfolio management and risk mitigation strategies',
          inline: false
        }
      ],
      footer: {
        text: 'Poll ends in 48 hours'
      }
    }]
  };

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(poll)
  });
};

// Run examples
console.log('Sending market update...');
await sendMarketUpdate();
console.log('Market update sent! ✅');

console.log('Sending educational content...');
await sendEducationalContent();
console.log('Educational content sent! ✅');

console.log('Sending community poll...');
await sendCommunityPoll();
console.log('Community poll sent! ✅');
