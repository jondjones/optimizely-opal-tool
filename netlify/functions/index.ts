import { tool, ParameterType, ToolsService } from "@optimizely-opal/opal-tools-sdk";
import cors from "cors";
import express from "express";
import { Handler } from '@netlify/functions';
const serverless = require('serverless-http');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

const handler: Handler = serverless(app);
export { handler };

const toolsService = new ToolsService(app);

async function bonuslyPointCalculator() {
  return {
    name: 'Jon J is the winner!'
  };
}

tool({
  name: 'bonus_point_calculator',
  description: 'Picks a random name out of a hat',
  parameters: [] as { name: string; description: string; type: ParameterType; required: boolean }[]
})(bonuslyPointCalculator);


if (process.env.NODE_ENV !== 'production' || process.env.NETLIFY !== 'true') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Discovery endpoint: http://localhost:${PORT}/discovery`);
  });
}

// Export the Express app for serverless environments
export { app };
