const API_URL = import.meta.env.VITE_API_ENDPOINT;

async function getAuthHeader(token: string): Promise<Record<string, string>> {
  try {
    if (!token) {
      throw new Error('Authorization token is missing.');
    }
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  } catch (error) {
    console.error('Error getting auth header:', error);
    return { 'Content-Type': 'application/json' };
  }
}

export const api = {
  async get(endpoint: string, token: string) {
    try {
      const headers = await getAuthHeader(token);
      const response = await fetch(`${API_URL}${endpoint}`, {
        headers,
      });
      if (!response.ok) {
        throw new Error(`GET request failed with status ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error(`GET request failed for endpoint ${endpoint}:`, error);
      throw error;
    }
  },

  async post(endpoint: string, data: any, token: string) {
    try {
      const headers = await getAuthHeader(token);
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(
          errorBody?.message || `POST request failed with status ${response.status}`
        );
      }
      return response.json();
    } catch (error) {
      console.error(`POST request failed for endpoint ${endpoint}:`, error);
      throw error;
    }
  },
};

// This specific function is exported for saving user data
export async function saveUserData(data: { email: string }, token: string) {
  return api.post('/userdata', data, token);
}
