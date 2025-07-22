Here is your `README.md` file content based exactly on your setup instructions:

````markdown
# Facility Management UI Deployment

## Prerequisites

- Ubuntu Server
- Node.js (LTS)
- Nginx
- PM2

## Setup Instructions

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts
node --version
npm --version
sudo apt install nginx -y
````

## Clone the Repository

```bash
cd /var/www/
sudo git clone https://github.com/Immanuel1424/nature-explorer-ui.git
sudo mv nature-explorer-ui/ facility-management
sudo chown -R ubuntu:ubuntu facility-management/
cd facility-management/
```

## Update PM2 Ecosystem Config

```bash
mv ecosystem.config.js ecosystem.config.cjs
vim ecosystem.config.cjs
```

Update the following fields:

```js
args: 'serve -s dist -l 3000',  //change build to dist
cwd: '/var/www/facility-management', //update the project path

// Update the log path 
error_file: '/var/log/facility-management/logs/err.log',
out_file: '/var/log/facility-management/logs/out.log',
log_file: '/var/log/facility-management/logs/combined.log',
```

## Create Log Directory

```bash
sudo mkdir -p /var/log/facility-management/logs
sudo chown -R ubuntu:ubuntu /var/log/facility-management/logs
```

## Update `package.json`

Set the preview command:

```json
"scripts": {
  "start": "vite preview --port 3000"
}
```

## Update `<BrowserRouter>`

In `src/App.tsx`, set the base path:

```tsx
<BrowserRouter basename="/facman">
```

## Update `vite.config.ts`

```ts
export default defineConfig(({ mode }) => ({
  base: "/facman/",
  server: {
    host: "::",
    port: 8080,
  }
}))
```

## Install Dependencies

```bash
npm install -g serve
npm install
npm install -g pm2
```

---

Now your React frontend is ready for deployment under `/facman` path.

```

Let me know if you'd like to generate and save this file automatically.
```


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
