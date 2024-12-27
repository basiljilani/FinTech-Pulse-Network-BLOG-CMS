import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
}

const MarketTicker: React.FC = () => {
  // Simulated market data
  const [marketData] = useState<MarketData[]>([
    { symbol: 'BTC', price: 43779.00, change: 1.55 },
    { symbol: 'ETH', price: 2286.27, change: 0.11 },
    { symbol: 'AAPL', price: 195.89, change: 0.78 },
    { symbol: 'GOOGL', price: 141.49, change: -0.25 },
    { symbol: 'MSFT', price: 374.58, change: 1.02 },
    { symbol: 'AMZN', price: 153.42, change: 0.91 },
    { symbol: 'S&P 500', price: 4754.63, change: 0.45 },
    { symbol: 'NASDAQ', price: 14897.24, change: 0.61 }
  ]);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => (prev + 1) % marketData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [marketData.length]);

  return (
    <div className="w-full overflow-hidden py-3 bg-gray-900/80 backdrop-blur-sm">
      <div className="relative flex items-center">
        <motion.div
          className="flex space-x-8 whitespace-nowrap px-4"
          animate={{
            x: `-${offset * 200}px`
          }}
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
        >
          {marketData.map((item, index) => (
            <div
              key={`${item.symbol}-${index}`}
              className="inline-flex items-center space-x-2"
            >
              <span className="text-gray-300 font-medium">{item.symbol}</span>
              <span className="text-white font-semibold">
                ${item.price.toLocaleString()}
              </span>
              <div
                className={`flex items-center ${
                  item.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {item.change >= 0 ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                <span className="font-medium">
                  {Math.abs(item.change).toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarketTicker;
