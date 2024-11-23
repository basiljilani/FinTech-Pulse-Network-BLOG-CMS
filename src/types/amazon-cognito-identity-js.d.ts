declare module 'amazon-cognito-identity-js' {
    export class CognitoUserPool {
      constructor(data: {
        UserPoolId: string;
        ClientId: string;
      });
      signUp(
        username: string,
        password: string,
        attributeList: { Name: string; Value: string }[],
        validationData: any[],
        callback: (err: Error | null, result: any) => void
      ): void;
      getCurrentUser(): CognitoUser | null;
    }
  
    export class CognitoUser {
      constructor(data: { Username: string; Pool: CognitoUserPool });
      authenticateUser(
        authDetails: AuthenticationDetails,
        callbacks: {
          onSuccess: (session: any) => void;
          onFailure: (err: any) => void;
        }
      ): void;
      signOut(): void;
    }
  
    export class AuthenticationDetails {
      constructor(data: { Username: string; Password: string });
    }
  }
  