import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';

export interface AuthUser {
  email: string;
  name: string;
  role: string;
}

export const AuthService = {
  async signUp(email: string, password: string, name: string) {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
          'custom:role': 'author', // default role
        },
      });
      return user;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  },

  async signIn(email: string, password: string): Promise<AuthUser> {
    try {
      const user = await Auth.signIn(email, password);
      const attributes = await this.getCurrentUserAttributes();
      return {
        email: attributes.email,
        name: attributes.name,
        role: attributes['custom:role'],
      };
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  },

  async signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  },

  async getCurrentUser(): Promise<CognitoUser | null> {
    try {
      return await Auth.currentAuthenticatedUser();
    } catch {
      return null;
    }
  },

  async getCurrentUserAttributes(): Promise<any> {
    const user = await this.getCurrentUser();
    if (!user) return null;
    
    const attributes = await Auth.userAttributes(user);
    return attributes.reduce((acc: any, attr) => {
      acc[attr.Name] = attr.Value;
      return acc;
    }, {});
  },

  async isAuthenticated(): Promise<boolean> {
    try {
      await Auth.currentAuthenticatedUser();
      return true;
    } catch {
      return false;
    }
  },

  async updateUserAttributes(attributes: { [key: string]: string }) {
    try {
      const user = await this.getCurrentUser();
      if (!user) throw new Error('No authenticated user');
      
      await Auth.updateUserAttributes(user, attributes);
    } catch (error) {
      console.error('Error updating user attributes:', error);
      throw error;
    }
  },
};
