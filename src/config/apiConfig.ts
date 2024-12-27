// Backend API URL
import { Amplify } from 'aws-amplify';

export const awsConfig = {
  Auth: {
    region: process.env.VITE_AWS_REGION,
    userPoolId: process.env.VITE_USER_POOL_ID,
    userPoolWebClientId: process.env.VITE_USER_POOL_WEB_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: 'api',
        endpoint: process.env.VITE_API_ENDPOINT,
        region: process.env.VITE_AWS_REGION
      },
    ]
  }
};

Amplify.configure(awsConfig);

export const API_URL = process.env.VITE_API_ENDPOINT || '';
