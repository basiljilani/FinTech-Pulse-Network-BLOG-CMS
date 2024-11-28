import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  aws_project_region: 'us-east-1',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_wQTMfca1S',
  aws_user_pools_web_client_id: '4puir1cbm18ldl5u0nv0dv58ja',
  aws_cognito_identity_pool_id: 'us-east-1:dc62c1ec-6596-46f1-8957-598b734e74cc',
  aws_mandatory_sign_in: 'enable',
  oauth: {
    domain: 'fintechpulse.net',
    redirectSignIn: 'https://fintechpulse.net/callback',
    redirectSignOut: 'https://fintechpulse.net/logout',
    responseType: 'code'
  },
  API: {
    endpoints: [
      {
        name: 'FintechPulseAPI',
        endpoint: 'https://3yrsi6xom0.execute-api.us-east-1.amazonaws.com/dev'
      }
    ]
  }
};

Amplify.configure(amplifyConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)