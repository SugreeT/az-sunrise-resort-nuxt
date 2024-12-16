# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Build the application for production
RUN npm run build

# Expose the port Nuxt.js will run on
EXPOSE 3000

# Start the Nuxt.js application
CMD ["npm", "run", "start"]
