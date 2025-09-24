const express = require('express');
const { ToolsService, tool } = require('@optimizely-opal/opal-tools-sdk');

const app = express();
const toolsService = new ToolsService(app);

// Middleware to parse JSON requests
app.use(express.json());

@tool({
  name: 'bonuly_point_calculator',
  description: 'Returns the name Jon',
  parameters: {
    type: 'object',
    properties: {},
    required: []
  }
})
async function bonulyPointCalculator() {
  return { name: 'Jon' };
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Bonuly Point Calculator is running' });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bonuly Point Calculator is running on port ${PORT}`);
  console.log(`Discovery endpoint: http://localhost:${PORT}/discovery`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
