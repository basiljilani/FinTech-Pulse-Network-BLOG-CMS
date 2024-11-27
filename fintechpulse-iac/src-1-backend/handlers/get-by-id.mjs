// put-item.mjs
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }

    const body = JSON.parse(event.body);
    const { id, name } = body;

    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            UserID: id,
            name: name,
            updatedAt: new Date().toISOString()
        }
    };

    try {
        await ddbDocClient.send(new PutCommand(params));
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://fintechpulse.net',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(body)
        };
    } catch (err) {
        console.error("Error", err);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': 'https://fintechpulse.net',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({ message: "Error putting item" })
        };
    }
};