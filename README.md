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
<BrowserRouter basename="/facility">
```

## Update `vite.config.ts`

```ts
export default defineConfig(({ mode }) => ({
  base: "/facility/",
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
pm2 start ecosystem.config.cjs
pm2 save


---

Now your React frontend is ready for deployment under `http://localhost/facility` path.

```


