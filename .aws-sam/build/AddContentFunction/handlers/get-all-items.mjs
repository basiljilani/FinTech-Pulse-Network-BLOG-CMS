import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    try {
        const params = {
            TableName: process.env.TABLE_NAME
        };

        const data = await ddbDocClient.send(new ScanCommand(params));
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://fintechpulse.net',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(data.Items)
        };
    } catch (err) {
        console.error("Error", err);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': 'https://fintechpulse.net',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({ message: "Error fetching items" })
        };
    }
};