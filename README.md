## SmartMonitor - IoT Dashboard

A modern, responsive IoT dashboard for monitoring energy consumption and device metrics in real-time.

### Features

- **Authentication**
  - Email/Password login
  - Social authentication (Google, GitHub, Apple)
  - Password recovery
  - User registration
  - Persistent sessions
  
- **Dashboard**
  - Real-time energy monitoring
  - Power distribution analytics
  - Cost analysis
  - Voltage and frequency tracking
  - Alarm management
  - Weekly usage patterns

- **Technical Stack**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Lucide Icons
  - React Router
  - Context API for state management
  - Recharts for data visualization

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Default Credentials

- Email: user@elevatics.ai
- Password: password

### Development

The project uses:
- Vite for fast development and building
- ESLint for code quality
- TypeScript for type safety
- Tailwind CSS for styling
- React Router for navigation
- Context API for state management

### Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React Context providers
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── types/         # TypeScript type definitions
└── utils/         # Helper functions
```

### Authentication Flow

1. User attempts to access protected route
2. Check for existing session
3. Redirect to login if no session exists
4. After successful authentication:
   - Store auth token
   - Update user context
   - Redirect to requested page

### Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Open pull request