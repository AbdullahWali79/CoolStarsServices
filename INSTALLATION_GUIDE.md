# CoolStar Appliance Repair Service - Installation Guide

## Prerequisites

### 1. Install Node.js
- Download Node.js from [https://nodejs.org/](https://nodejs.org/)
- Choose the LTS (Long Term Support) version
- Run the installer and follow the setup wizard
- Verify installation by opening a new terminal/command prompt and running:
  ```bash
  node --version
  npm --version
  ```

## Project Setup

### 1. Navigate to the project directory
```bash
cd my-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open your browser
The application will be available at `http://localhost:5173` (or the port shown in the terminal)

## Project Features

This is an **Appliance Repair Service Booking Platform** with the following features:

- **Home Page**: Company overview and services
- **Service Categories**: 
  - Air Conditioner repair
  - LED TV repair
  - Washing Machine repair
  - Fridge & Dispenser repair
  - Other Electronics repair
  - Kitchen Hood repair
- **Service Provider Directory**: Browse all technicians
- **Appointment Booking**: Book repair appointments
- **My Appointments**: View booked appointments
- **About Us**: Company information
- **Contact**: Contact details and location map

## Technical Stack

- **Frontend**: React 19 with modern hooks
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: React Context API

## Troubleshooting

If you encounter any issues:

1. **Node.js not found**: Make sure Node.js is properly installed and added to PATH
2. **Port already in use**: The development server will automatically try the next available port
3. **Dependencies issues**: Delete `node_modules` folder and run `npm install` again

## Build for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` folder.
