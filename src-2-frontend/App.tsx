import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authenticator, ThemeProvider, Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const theme = {
  name: 'fintech-theme',
  tokens: {
    colors: {
      brand: {
        primary: {
          10: '#1e40af', // Darker blue
          80: '#3b82f6', // Light blue
          100: '#1d4ed8' // Medium blue
        }
      },
      background: {
        primary: '#ffffff',
        secondary: '#f8fafc'
      }
    },
    components: {
      authenticator: {
        router: {
          borderWidth: '0'
        },
        container: {
          boxShadow: 'none'
        }
      },
      button: {
        primary: {
          backgroundColor: '#3b82f6',
          _hover: {
            backgroundColor: '#1d4ed8'
          }
        }
      },
      fieldcontrol: {
        _focus: {
          borderColor: '#3b82f6'
        }
      }
    }
  }
};

const components = {
  Header() {
    return (
      <div className="flex flex-col items-center py-8">
        <Image
          src="/logo.png"
          alt="FinTech Pulse"
          className="h-12 w-auto"
        />
        <h1 className="text-2xl font-bold text-blue-600 mt-4">FinTech Pulse</h1>
        <p className="text-gray-600">Welcome to the future of financial insights</p>
      </div>
    );
  },
  Footer() {
    return (
      <div className="flex justify-center py-4 text-sm text-gray-500">
        <p>© 2024 FinTech Pulse. All rights reserved.</p>
      </div>
    );
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Authenticator components={components}>
        {({ signOut, user }) => (
          <BrowserRouter>
            {/* Your existing routes */}
          </BrowserRouter>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}

export default App;