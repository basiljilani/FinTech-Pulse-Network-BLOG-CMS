import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: '<Yeu-north-1_n18n0Nw0M>',
  ClientId: '<3h5gg3r2b5hlppe77ogc4nqijg>',
};

const userPool = new CognitoUserPool(poolData);

export function signIn(username: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        resolve(result); // Authentication successful
      },
      onFailure: (err) => {
        reject(err); // Authentication failed
      },
    });
  });
}

export function signUp(username: string, password: string, name: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const attributeList: CognitoUserAttribute[] = [
      new CognitoUserAttribute({ Name: 'name', Value: name }),
    ];

    userPool.signUp(username, password, attributeList, [], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
}
