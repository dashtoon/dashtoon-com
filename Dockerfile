# Base image
FROM node:19-alpine as build-env

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Build app
RUN npm build

# Stage 2 - Create the run-time image
FROM nginx:stable
COPY --from=build-env /app/build /usr/share/nginx/html
COPY --from=build-env /app/nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose the port the app will listen on
EXPOSE 8080
