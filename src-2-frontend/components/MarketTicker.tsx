import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
}

const ALPHA_VANTAGE_API_KEY = 'YOUR_API_KEY'; // Replace with your Alpha Vantage API key

const MarketTicker: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const stockSymbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN'];

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true'
        );
        const data = await response.json();
        
        return [
          {
            symbol: 'BTC',
            price: data.bitcoin.usd,
            change: data.bitcoin.usd_24h_change
          },
          {
            symbol: 'ETH',
            price: data.ethereum.usd,
            change: data.ethereum.usd_24h_change
          }
        ];
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        return [];
      }
    };

    const fetchStockData = async (symbol: string) => {
      try {
        // Global Quote endpoint for real-time stock data
        const response = await fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
        );
        const data = await response.json();
        
        if (data['Global Quote']) {
          const quote = data['Global Quote'];
          return {
            symbol,
            price: parseFloat(quote['05. price']),
            change: parseFloat(quote['10. change percent'].replace('%', ''))
          };
        }
        throw new Error('Invalid response format');
      } catch (error) {
        console.error(`Error fetching stock data for ${symbol}:`, error);
        return null;
      }
    };

    const fetchIndexData = async (symbol: string) => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
        );
        const data = await response.json();
        
        if (data['Global Quote']) {
          const quote = data['Global Quote'];
          return {
            symbol: symbol === 'SPY' ? 'S&P 500' : 'NASDAQ',
            price: parseFloat(quote['05. price']),
            change: parseFloat(quote['10. change percent'].replace('%', ''))
          };
        }
        throw new Error('Invalid response format');
      } catch (error) {
        console.error(`Error fetching index data for ${symbol}:`, error);
        return null;
      }
    };

    const updateData = async () => {
      try {
        const cryptoData = await fetchCryptoData();
        
        // Fetch stock data
        const stockPromises = stockSymbols.map(symbol => fetchStockData(symbol));
        const stockData = await Promise.all(stockPromises);
        const validStockData = stockData.filter((data): data is MarketData => data !== null);

        // Fetch index data (SPY for S&P 500 and QQQ for NASDAQ)
        const indexPromises = ['SPY', 'QQQ'].map(symbol => fetchIndexData(symbol));
        const indexData = await Promise.all(indexPromises);
        const validIndexData = indexData.filter((data): data is MarketData => data !== null);

        // Combine all data
        const allData = [...cryptoData, ...validStockData, ...validIndexData];
        
        if (allData.length > 0) {
          setMarketData(allData);
          setError(null);
        } else {
          setError('Unable to fetch market data');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error updating market data:', err);
        setError('Failed to fetch market data');
        setLoading(false);
      }
    };

    updateData();
    const interval = setInterval(updateData, 60000); // Update every minute due to API rate limits

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-gray-900 py-3 overflow-hidden">
        <div className="text-center text-gray-400">Loading market data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-gray-900 py-3 overflow-hidden">
        <div className="text-center text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-900 py-3 overflow-hidden">
      <motion.div
        animate={{ 
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        className="flex space-x-8 whitespace-nowrap"
      >
        {[...marketData, ...marketData].map((item, index) => (
          <div key={index} className="inline-flex items-center space-x-2">
            <span className="text-white font-semibold">{item.symbol}</span>
            <span className="text-gray-300">
              ${item.price.toLocaleString(undefined, { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </span>
            <span
              className={`flex items-center ${
                item.change >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {item.change >= 0 ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {Math.abs(item.change).toFixed(2)}%
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarketTicker;
