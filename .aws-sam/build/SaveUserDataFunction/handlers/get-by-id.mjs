import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    try {
        const id = event.pathParameters.id;

        const params = {
            TableName: process.env.TABLE_NAME,
            Key: { UserID: id }
        };

        const data = await ddbDocClient.send(new GetCommand(params));
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://fintechpulse.net',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(data.Item)
        };
    } catch (err) {
        console.error("Error", err);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': 'https://fintechpulse.net',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({ message: "Error fetching item" })
        };
    }
};