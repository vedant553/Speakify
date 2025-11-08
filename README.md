# Speakify: Voice-Powered Task Management

Speakify is a modern task management application that allows you to manage your tasks using natural voice commands. Built with cutting-edge web technologies, Speakify makes task management as easy as having a conversation.

### Live Demo Link 1: https://speakifyy.vercel.app/
### Live Demo Link 2: https://speakifyy.netlify.app/

## Key Features

- **Voice Task Management**: Add, complete, or delete tasks using natural voice commands
- **Smart Organization**: Automatically categorize tasks (work, personal, health, shopping, learning) and prioritize (high, medium, low)
- **Privacy Focused**: All voice processing happens locally in your browser - your data never leaves your device
- **Cross-Platform**: Works seamlessly on desktop and mobile browsers that support the Web Speech API
- **Beautiful UI**: Modern, accessible interface with dark/light mode support

## Technologies Used

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Voice Processing**: Web Speech API
- **Routing**: React Router
- **State Management**: React Hooks

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/speakify.git
   ```
2. Navigate to the project directory:
   ```bash
   cd speakify
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
```bash
npm run dev
```
Open your browser and visit `http://localhost:8080`

### Building for Production
```bash
npm run build
```

## How to Use
1. **Click the microphone button** to start voice input
2. **Speak naturally** to manage tasks:
   - "Add high priority work task: finish report due tomorrow"
   - "Complete 'buy groceries'"
   - "Show me all health tasks"
3. **Organize tasks** using category filters and search

## Browser Support
Speakify works best on modern browsers with Web Speech API support:
- Chrome (recommended)
- Edge
- Safari 14.1+
- Opera

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
