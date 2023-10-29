import pkg from '@azure/functions';
const { AzureFunction, Context, HttpRequest,app } = pkg;
import  openai  from "../../lib/openai";


app.http('getChatGPTSuggestions', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});