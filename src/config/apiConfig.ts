// Backend API URL
import { Amplify } from 'aws-amplify';
import { type ResourcesConfig } from '@aws-amplify/core';
import { cognitoConfig } from './cognitoConfig';

const awsConfig: ResourcesConfig = {
  Auth: cognitoConfig,
  API: {
    REST: {
      'api': {
        endpoint: process.env.VITE_API_ENDPOINT ?? '',
        region: process.env.VITE_AWS_REGION ?? '',
      }
    }
  }
};

Amplify.configure(awsConfig);

export const API_URL = process.env.VITE_API_ENDPOINT ?? '';
