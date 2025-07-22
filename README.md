# EcoFilesystem

> **Nature's Digital Hierarchy** - An interactive web application that visualizes forest ecosystems through hierarchical structures, making complex ecological relationships accessible and understandable.

![EcoFilesystem Screenshot](https://via.placeholder.com/800x400/22c55e/ffffff?text=EcoFilesystem+Preview)

## 🌟 Overview

EcoFilesystem is a modern React application that represents forest ecosystems as interactive file-like hierarchical structures. Users can explore different forest layers, from entire ecosystems down to individual organisms, understanding the complex relationships that sustain our natural world.

### ✨ Key Features

- **🌲 Hierarchical Visualization**: Navigate forest ecosystems through intuitive tree-like structures
- **🍃 Interactive Ecosystem Map**: Explore different forest layers with dynamic diagrams
- **💚 Health Monitoring**: Track ecosystem component health with visual indicators
- **🔍 Advanced Search & Filtering**: Find specific species, characteristics, or habitats
- **📱 Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful nature-inspired design with smooth animations

## 🚀 Quick Start

### Prerequisites

Before running this application, ensure you have Node.js installed on your system.

#### Installing Node.js

**Method 1: Using Node Version Manager (NVM) - Recommended**

1. **Install NVM:**
   ```bash
   # On macOS/Linux
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   
   # On Windows, use nvm-windows:
   # Download and install from: https://github.com/coreybutler/nvm-windows/releases
   ```

2. **Restart your terminal or run:**
   ```bash
   source ~/.bashrc
   ```

3. **Install the latest LTS version of Node.js:**
   ```bash
   nvm install --lts
   nvm use --lts
   ```

4. **Verify installation:**
   ```bash
   node --version
   npm --version
   ```

**Method 2: Direct Installation**

Visit [Node.js official website](https://nodejs.org/) and download the LTS version for your operating system.

### Running the Application

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd EcoFilesystem
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

The application will automatically reload when you make changes to the source code.

### Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Building for Production

To create a production-ready build:

```bash
# Install dependencies (if not already done)
npm install

# Create production build
npm run build

# The built files will be in the 'dist' directory
```

To preview the production build locally:

```bash
npm run preview
```

## 🔧 Port Configuration

The application runs on **port 3000** by default. 

### Troubleshooting Port Conflicts

If port 3000 is already in use, you'll see an error like:
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solutions:**

1. **Kill the process using port 3000:**
   ```bash
   # On macOS/Linux
   lsof -ti:3000 | xargs kill -9
   
   # On Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID_NUMBER> /F
   ```

2. **Use a different port:**
   ```bash
   # Method 1: Set PORT environment variable
   PORT=3001 npm run dev
   
   # Method 2: Modify vite.config.ts
   # Change the server.port value to your desired port
   ```

3. **Check what's using the port:**
   ```bash
   # On macOS/Linux
   lsof -i :3000
   
   # On Windows
   netstat -ano | findstr :3000
   ```

## 🏛️ Project Structure

```
EcoFilesystem/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Shadcn/ui components
│   │   ├── EcosystemTree.tsx
│   │   ├── EcosystemDiagram.tsx
│   │   └── Header.tsx
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── EcosystemExplorer.tsx
│   │   ├── About.tsx
│   │   └── Index.tsx
│   ├── utils/             # Utility functions and data
│   │   └── ecosystemData.ts
│   ├── lib/               # Library functions
│   ├── hooks/             # Custom React hooks
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and design system
├── bitbucket-pipelines.yml # CI/CD pipeline configuration
├── ecosystem.config.js     # PM2 ecosystem configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite build configuration
```

## 🛠️ Technology Stack

- **⚛️ React 18** - Modern React with hooks and functional components
- **📘 TypeScript** - Type-safe development for better reliability
- **⚡ Vite** - Fast build tool and development server
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧩 Shadcn/ui** - Accessible and customizable UI components
- **🚦 React Router DOM** - Client-side routing
- **🔍 Lucide React** - Beautiful and consistent icons
- **🔄 TanStack Query** - Data fetching and state management

## 🌍 Ecosystem Data Structure

The application uses a hierarchical data structure to represent forest ecosystems:

```typescript
interface EcosystemNode {
  id: string;
  name: string;
  type: 'ecosystem' | 'habitat' | 'species' | 'individual';
  icon: string;
  description: string;
  children?: EcosystemNode[];
  health: 'excellent' | 'good' | 'moderate' | 'poor';
  population?: number;
  characteristics?: string[];
}
```

### Sample Data Hierarchy:
```
🌲 Temperate Forest Ecosystem
├── 🌳 Canopy Layer
│   ├── 🌳 Oak Grove (45 individuals)
│   └── 🍁 Sugar Maple Stand (32 individuals)
├── 🌿 Understory Layer
│   ├── 🌸 Flowering Dogwood (28 individuals)
│   └── 🌰 Hazelnut Shrubs (67 individuals)
└── 🍄 Forest Floor
    ├── 🌿 Christmas Fern Colony (156 individuals)
    └── 🍄 Mycorrhizal Network
```

## 🚀 Deployment

### AWS EC2 Deployment with Bitbucket Pipelines

This project includes automated deployment to AWS EC2 using Bitbucket Pipelines.

#### Required Bitbucket Variables

Set up the following environment variables in your Bitbucket repository settings:

- `AWS_ACCESS_KEY_ID` - Your AWS access key
- `AWS_SECRET_ACCESS_KEY` - Your AWS secret key
- `AWS_REGION` - AWS region (e.g., us-east-1)
- `EC2_INSTANCE_ID` - Your EC2 instance ID

#### EC2 Instance Setup

Your EC2 instance should have:
1. **Node.js and npm** installed
2. **PM2** installed globally: `npm install -g pm2`
3. **Git** installed for repository access
4. **AWS CLI** configured for SSM access
5. **Proper security groups** allowing HTTP/HTTPS traffic

#### Deployment Process

The Bitbucket Pipeline:
1. Builds the React application
2. Creates a deployment package
3. Uploads artifacts to AWS
4. Uses AWS SSM to send commands to EC2
5. Downloads and extracts the build
6. Restarts the application using PM2

#### Manual Deployment

If you prefer manual deployment:

```bash
# On your EC2 instance
git clone <your-repo-url>
cd EcoFilesystem
npm install
npm run build

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 🤝 Contributing

We welcome contributions to EcoFilesystem! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and add tests if applicable
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Add TypeScript types for new components and functions
- Test your changes on different screen sizes
- Update documentation for significant changes
- Ensure all lint checks pass before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌱 Environmental Impact

EcoFilesystem aims to promote environmental awareness and education. By making forest ecosystem data accessible and engaging, we hope to inspire conservation efforts and environmental stewardship.

### Learn More About Forest Conservation

- [World Wildlife Fund - Forests](https://www.worldwildlife.org/habitats/forests)
- [National Geographic - Forest Conservation](https://www.nationalgeographic.org/encyclopedia/forest/)
- [UN Environment Programme - Forests](https://www.unep.org/explore-topics/forests)

## 🔗 Links

- **Live Demo**: [EcoFilesystem App](https://your-domain.com)
- **Documentation**: [Project Wiki](https://github.com/your-repo/wiki)
- **Bug Reports**: [GitHub Issues](https://github.com/your-repo/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/your-repo/discussions)

---

**Made with 💚 for the planet** - Together, we can better understand and protect our natural world through technology.
