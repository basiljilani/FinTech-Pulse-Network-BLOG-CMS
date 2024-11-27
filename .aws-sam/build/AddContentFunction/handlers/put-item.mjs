import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    try {
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

        await ddbDocClient.send(new PutCommand(params));
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://fintechpulse.net',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({
                message: "Item added successfully",
                id: id
            })
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