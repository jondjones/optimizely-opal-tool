# Bonuly Point Calculator

A simple Optimizely Opal tool that returns the name "Jon". This tool is designed to be hosted on Netlify and integrated with Optimizely Opal.

## Features

- Simple Opal tool that returns `{ name: "Jon" }`
- Compatible with Optimizely Opal Tools SDK
- Ready for Netlify deployment
- Health check endpoint included

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm start
   ```

3. Test the tool:
   - Discovery endpoint: `http://localhost:3000/discovery`
   - Health check: `http://localhost:3000/health`

## Deployment to Netlify

### Method 1: Direct Git Deployment

1. Push your code to a Git repository (GitHub, GitLab, etc.)

2. Connect your repository to Netlify:
   - Go to [Netlify](https://www.netlify.com/)
   - Click "New site from Git"
   - Connect your repository
   - Netlify will automatically detect the build settings from `netlify.toml`

3. Your tool will be available at: `https://your-site-name.netlify.app`

### Method 2: Manual Deployment

1. Build the project:
   ```bash
   npm install
   ```

2. Deploy the `netlify/functions` directory to Netlify Functions

## Registering with Optimizely Opal

After deployment:

1. Get your Netlify site URL (e.g., `https://your-site-name.netlify.app`)

2. In your Optimizely Opal account:
   - Navigate to **Tools > Registries**
   - Click **Add tool registry**
   - Enter a **Registry Name** (e.g., "Bonuly Point Calculator")
   - Enter the **Discovery URL**: `https://your-site-name.netlify.app/discovery`
   - Click **Save**

## Tool Details

- **Tool Name**: `bonuly_point_calculator`
- **Description**: Returns the name Jon
- **Parameters**: None required
- **Response**: `{ "name": "Jon" }`

## Project Structure

```
├── package.json              # Dependencies and scripts
├── index.js                  # Main application (for local development)
├── netlify.toml             # Netlify configuration
├── netlify/
│   └── functions/
│       └── index.js         # Netlify Functions entry point
└── README.md                # This file
```

## Testing

You can test the tool locally by running:

```bash
curl http://localhost:3000/discovery
```

This should return the tool's discovery information in JSON format.

## Requirements

- Node.js 14.0.0 or higher
- Optimizely Opal account
- Netlify account (for hosting)
