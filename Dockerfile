# Step 1: Build the React app
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the app for production
RUN npm run build


# Expose port 3000 
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
