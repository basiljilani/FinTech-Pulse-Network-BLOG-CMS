import { type ResourcesConfig } from '@aws-amplify/core';

export const cognitoConfig = {
  Cognito: {
    userPoolId: process.env.VITE_USER_POOL_ID ?? '',
    userPoolClientId: process.env.VITE_USER_POOL_WEB_CLIENT_ID ?? '',
    loginWith: {
      oauth: {
        domain: process.env.VITE_COGNITO_DOMAIN ?? '',
        scopes: ['email', 'profile', 'openid'],
        redirectSignIn: [process.env.VITE_REDIRECT_SIGN_IN ?? ''],
        redirectSignOut: [process.env.VITE_REDIRECT_SIGN_OUT ?? ''],
        responseType: 'code'
      }
    }
  }
} satisfies ResourcesConfig['Auth'];