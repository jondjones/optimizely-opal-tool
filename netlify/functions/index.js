const express = require('express');
const { OpalTool, ParameterType } = require('@optimizely-opal/opal-tools-sdk');

class BonulyPointCalculator extends OpalTool {
  constructor() {
    super({
      name: 'Bonuly Point Calculator',
      description: 'A simple tool that returns the name "Jon".',
      version: '1.0.0',
      basePath: '/bonuly-point-calculator',
    });
    
    // Register the tool function
    this.registerTool({
      name: 'getName',
      description: 'Returns the name "Jon".',
      parameters: [],
      handler: this.getName.bind(this)
    });
  }

  async getName() {
    return { name: 'Jon' };
  }
}

const app = express();
const toolInstance = new BonulyPointCalculator();

app.use(toolInstance.router);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Bonuly Point Calculator is running' });
});

// Export the Express app for Netlify Functions
exports.handler = app;
