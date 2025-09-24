import express, { Request, Response } from 'express'
import { ToolsService, tool } from '@optimizely-opal/opal-tools-sdk'
import serverless from 'serverless-http'

const app = express()
app.use(express.json())

@tool({
  name: 'bonus_point_calculator',
  description: 'Returns the name Jon',
  parameters: []
})
class BonusPointCalculator {
  async execute(): Promise<{ name: string }> {
    return { name: 'Jon' }
  }
}

// Register Opal tools with Express
new ToolsService(app)

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Bonus Point Calculator is running' })
})

export const handler = serverless(app)
