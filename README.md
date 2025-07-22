# Facility Management System

> **Comprehensive Digital Infrastructure** - A modern React application for managing facility assets, work orders, maintenance schedules, and reporting in an intuitive and efficient interface.

![Facility Management System Screenshot](https://via.placeholder.com/800x400/3b82f6/ffffff?text=Facility+Management+System)

## 🌟 Overview

The Facility Management System is a modern React application designed to streamline facility operations through comprehensive asset tracking, work order management, preventive maintenance scheduling, and detailed reporting capabilities.

### ✨ Key Features

- **🏢 Asset Management**: Track and monitor all facility assets with detailed information
- **📋 Work Order System**: Create, assign, and track maintenance and repair tasks
- **🔧 Maintenance Scheduling**: Automated preventive maintenance scheduling and reminders
- **📊 Advanced Reporting**: Comprehensive analytics and performance reporting
- **📱 Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean, professional interface with intuitive navigation

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
   cd facility-management-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser and navigate to:**
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
facility-management-system/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Shadcn/ui components
│   │   ├── AppSidebar.tsx # Main navigation sidebar
│   │   └── Header.tsx     # Application header
│   ├── pages/             # Page components
│   │   ├── Dashboard.tsx  # Main dashboard
│   │   ├── Assets.tsx     # Asset management
│   │   ├── WorkOrders.tsx # Work order management
│   │   ├── Maintenance.tsx # Maintenance scheduling
│   │   ├── Reports.tsx    # Reporting and analytics
│   │   └── Settings.tsx   # System settings
│   ├── lib/               # Library functions
│   ├── hooks/             # Custom React hooks
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and design system
├── .env.example           # Environment variables template
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

## 🏢 Application Features

### Dashboard
- Real-time system overview with key metrics
- Recent work orders and maintenance tasks
- Asset health monitoring
- Quick access to critical functions

### Asset Management
- Comprehensive asset tracking and cataloging
- Location-based organization
- Maintenance history and scheduling
- Performance monitoring and reporting

### Work Order System
- Create, assign, and track maintenance tasks
- Priority-based task management
- Status tracking and completion verification
- Integration with asset management

### Maintenance Scheduling
- Automated preventive maintenance planning
- Customizable maintenance intervals
- Resource allocation and scheduling
- Compliance tracking and reporting

### Reporting & Analytics
- Performance metrics and KPIs
- Cost analysis and budget tracking
- Compliance and safety reporting
- Customizable report generation

## 🚀 Deployment

### AWS EC2 Deployment with Bitbucket Pipelines

This project includes automated deployment to AWS EC2 using Bitbucket Pipelines and AWS SSM.

#### Required Bitbucket Variables

Set up the following environment variables in your Bitbucket repository settings:

- `AWS_ACCESS_KEY_ID` - Your AWS access key
- `AWS_SECRET_ACCESS_KEY` - Your AWS secret key
- `AWS_REGION` - AWS region (e.g., us-east-1)
- `EC2_INSTANCE_ID` - Your EC2 instance ID

#### EC2 Instance Setup

Your Ubuntu-based EC2 instance should have:
1. **Node.js 18+** and npm installed
2. **PM2** installed globally: `npm install -g pm2`
3. **AWS CLI** configured for SSM access
4. **SSM Agent** installed and running
5. **Security groups** allowing HTTP traffic on port 3000
6. **IAM role** with SSM permissions attached to the instance

#### Deployment Process

The Bitbucket Pipeline automatically:
1. Installs dependencies and runs lint checks
2. Builds the React application (`npm run build`)
3. Creates a compressed tarball of the build directory
4. Uploads artifacts to S3
5. Uses AWS SSM to send deployment commands to EC2
6. Downloads and extracts the new build
7. Restarts the application using PM2 as `facility-frontend`

#### Manual Deployment

For manual deployment on your EC2 instance:

```bash
# Clone and setup
git clone <your-repo-url>
cd facility-management-system
npm install

# Build the application
npm run build

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Check status
pm2 status
```

#### AWS SSM Deployment Command Example

For manual deployment via AWS CLI:

```bash
# Deploy specific build tarball
aws ssm send-command \
  --instance-ids i-1234567890abcdef0 \
  --document-name "AWS-RunShellScript" \
  --comment "Deploy Facility Management System" \
  --parameters 'commands=[
    "cd /opt/facility-management",
    "pm2 stop facility-frontend || echo \"App not running\"",
    "sudo rm -rf backup/ && sudo mkdir -p backup/",
    "sudo mv build/ backup/ 2>/dev/null || echo \"No previous build\"",
    "aws s3 cp s3://your-bucket/builds/facility-management-123.tar.gz ./",
    "sudo tar -xzf facility-management-123.tar.gz",
    "sudo chown -R ubuntu:ubuntu build/",
    "pm2 start ecosystem.config.js || pm2 restart facility-frontend",
    "pm2 save",
    "pm2 status"
  ]' \
  --region us-east-1
```

## 🤝 Contributing

We welcome contributions to the Facility Management System! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and add tests if applicable
4. **Commit your changes**: `git commit -m 'Add facility management feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Add TypeScript types for new components and functions
- Test your changes on different screen sizes
- Update documentation for significant changes
- Ensure all lint checks pass before submitting
- Follow the existing design system and UI patterns

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏗️ Infrastructure Benefits

The Facility Management System helps organizations optimize their infrastructure management, reduce operational costs, and improve safety compliance. By digitalizing facility operations, organizations can achieve better resource utilization and predictive maintenance capabilities.

### Key Benefits

- **Cost Reduction**: Optimize maintenance schedules and reduce emergency repairs
- **Improved Safety**: Track compliance and ensure timely safety inspections
- **Asset Optimization**: Maximize asset lifespan through preventive maintenance
- **Data-Driven Decisions**: Leverage analytics for strategic facility planning

## 🔗 Links

- **Live Demo**: [Facility Management System](https://your-domain.com)
- **Documentation**: [Project Wiki](https://github.com/your-repo/wiki)
- **Bug Reports**: [GitHub Issues](https://github.com/your-repo/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/your-repo/discussions)

---

**Made with 🏢 for better infrastructure management** - Streamlining facility operations through modern technology and intelligent automation.
