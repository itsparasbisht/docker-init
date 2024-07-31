# Stage 1: Build Stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Production Stage
FROM httpd:latest

# Copy built assets from the builder stage to the Apache server's directory
COPY --from=builder /app/dist /usr/local/apache2/htdocs/

EXPOSE 80