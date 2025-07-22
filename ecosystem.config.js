module.exports = {
  apps: [
    {
      name: 'ecofilesystem',
      script: 'npx',
      args: 'serve -s dist -l 3000',
      cwd: '/opt/ecofilesystem',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: '/opt/ecofilesystem/logs/err.log',
      out_file: '/opt/ecofilesystem/logs/out.log',
      log_file: '/opt/ecofilesystem/logs/combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      // Health monitoring
      min_uptime: '10s',
      max_restarts: 10,
      // Advanced PM2 features
      instance_var: 'INSTANCE_ID',
      exec_mode: 'fork',
      // Auto-restart conditions
      restart_delay: 4000,
      // Graceful shutdown
      kill_timeout: 5000,
      listen_timeout: 3000,
      shutdown_with_message: true,
      // Monitoring
      pmx: true,
      // Log rotation
      log_file: '/opt/ecofilesystem/logs/app.log',
      max_size: '10M',
      retain: '7',
      compress: true,
      // Environment specific settings
      node_args: '--max-old-space-size=1024'
    }
  ],

  deploy: {
    production: {
      user: 'ec2-user',
      host: ['your-ec2-instance-ip'],
      ref: 'origin/main',
      repo: 'your-repository-url',
      path: '/opt/ecofilesystem',
      'pre-deploy-local': '',
      'post-deploy': 'npm install --production && npm run build && pm2 reload ecosystem.config.js --env production && pm2 save',
      'pre-setup': 'mkdir -p /opt/ecofilesystem/logs'
    }
  }
};