# Use an official Node.js runtime as a base image
FROM node:17-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install
# If you are using yarn, you can use the following line instead:
# RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
#RUN npm run build
# If you are using yarn, you can use the following line instead:
# RUN yarn build

# Expose the port that the app will run on
EXPOSE 3000

# Specify the command to run your application
CMD ["npm", "start"]
# If you are using yarn, you can use the following line instead:
# CMD ["yarn", "start"]
