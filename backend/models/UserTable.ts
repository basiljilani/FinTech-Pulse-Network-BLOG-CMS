import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand, QueryCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.USER_TABLE_NAME || 'Users';

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  role: 'admin' | 'editor' | 'author';
  createdAt: string;
}

export const UserTable = {
  async create(user: Omit<User, 'id' | 'createdAt'>) {
    const now = new Date().toISOString();
    const id = `USER#${user.email}`;
    
    const command = new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        PK: id,
        SK: id,
        ...user,
        id,
        createdAt: now,
      },
    });

    await docClient.send(command);
    return { ...user, id, createdAt: now };
  },

  async getByEmail(email: string) {
    const id = `USER#${email}`;
    const command = new GetCommand({
      TableName: TABLE_NAME,
      Key: {
        PK: id,
        SK: id,
      },
    });

    const response = await docClient.send(command);
    return response.Item as User | undefined;
  },

  async getByRole(role: string) {
    const command = new QueryCommand({
      TableName: TABLE_NAME,
      IndexName: 'RoleIndex',
      KeyConditionExpression: 'role = :role',
      ExpressionAttributeValues: {
        ':role': role,
      },
    });

    const response = await docClient.send(command);
    return response.Items as User[];
  },

  async delete(email: string) {
    const id = `USER#${email}`;
    const command = new DeleteCommand({
      TableName: TABLE_NAME,
      Key: {
        PK: id,
        SK: id,
      },
    });

    await docClient.send(command);
  }
};
