import { tool, ParameterType, ToolsService } from "@optimizely-opal/opal-tools-sdk";
import cors from "cors";
import express from "express";
import { Handler } from '@netlify/functions';
const serverless = require('serverless-http');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/public', express.static('public'));

// Wrap the Express app with serverless-http for Netlify Functions
const handler: Handler = serverless(app);
export { handler };
// Create Tools Service
const toolsService = new ToolsService(app);

async function bonuslyPointCalculator() {
  return {
    name: 'Jon'
  };
}

tool({
  name: 'bonus_point_calculator',
  description: 'Returns a string',
  parameters: [] as { name: string; description: string; type: ParameterType; required: boolean }[]
})(bonuslyPointCalculator);

// Export the Express app for serverless environments
export { app };

// Start the server only when running locally (not in serverless environments)
if (process.env.NODE_ENV !== 'production' || process.env.NETLIFY !== 'true') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Discovery endpoint: http://localhost:${PORT}/discovery`);
  });
}
