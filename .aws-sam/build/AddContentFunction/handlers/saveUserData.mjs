import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const { email, name } = body;
        
        // Get user ID from Cognito authorizer
        const userId = event.requestContext.authorizer.claims.sub;

        const params = {
            TableName: process.env.TABLE_NAME,
            Item: {
                UserID: userId,
                email: email,
                name: name,
                createdAt: new Date().toISOString()
            }
        };

        await ddbDocClient.send(new PutCommand(params));

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://fintechpulse.net',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({
                message: "User data saved successfully!",
                userId: userId
            })
        };
    } catch (error) {
        console.error("Error saving user data:", error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': 'https://fintechpulse.net',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({ message: "Internal server error" })
        };
    }
};