// Import the AWS SDK
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Export the handler function
exports.handler = async (event) => {
    try {
        // Parse the incoming event's body (assuming it's JSON formatted)
        const body = JSON.parse(event.body);
        const { email, name } = body;

        // Define the parameters to save data into the DynamoDB table
        const params = {
            TableName: process.env.TABLE_NAME, // Environment variable for table name
            Item: {
                email: email, // Partition key
                name: name,   // Additional data
            },
        };

        // Save the item into DynamoDB
        await dynamoDB.put(params).promise();

        // Return a success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "User data saved successfully!" }),
        };
    } catch (error) {
        // Log the error and return an internal server error response
        console.error("Error saving user data:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }
};
