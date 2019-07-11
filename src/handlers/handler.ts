import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getHtml } from '../client/getHtml';

module.exports.testPage = async (): Promise<APIGatewayProxyResult> => {
    const response = {
        statusCode: 200,
        body: getHtml(),
        headers: {
            'content-type': 'text/html; charset=utf-8'
        }
    };

    return response;
};