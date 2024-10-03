# Weather Dashboard React Application

This project is a weather dashboard built with React, utilizing the OpenWeather API to display current weather information and forecasts.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 12.0 or later)
- npm (usually comes with Node.js)

## Installation

1. Clone the repo
2. Navigate to the project directory: `cd weather-dashboard-react`
3. Install the dependencies: `npm install`

## Setting up OpenWeather API

To use this application, you'll need an API key from OpenWeather. Follow these steps to obtain one:

1. Go to OpenWeather and sign up for an account if you don't have one.
2. After logging in, go to your "API keys" tab.
3. Generate a new API key if you don't already have one.
4. Copy your API key; you'll need it for the next step.

## Configuration

In the project root directory, create a file named `.env`.
Add the following line to the .env file, replacing YOUR_API_KEY with the API key you obtained from OpenWeather:
`VITE_WEATHER_API_KEY=YOUR_API_KEY`

after that it's all set to run the application `npm run dev`

## Features

- Current weather display for a specified location
- 5-day forecast
- Temperature, humidity, wind speed, and more weather details
- Responsive design for desktop and mobile devices

**Note: Some more components and fixes are coming.**
