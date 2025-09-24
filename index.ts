import express, { Request, Response } from 'express'
import { ToolsService, tool } from '@optimizely-opal/opal-tools-sdk'

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

const toolsService = new ToolsService(app)

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Bonus Point Calculator is running' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Discovery endpoint: http://localhost:${PORT}/discovery`)
  console.log(`Health check: http://localhost:${PORT}/health`)
})
