# Stage 1: Build the application
FROM node:18 AS builder
WORKDIR /main
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the mainlication for production
FROM node:18 AS production
WORKDIR /main
COPY --from=builder /main ./
EXPOSE 3001
CMD ["npm", "run", "start:prod"]

# Stage 3: Development environment
FROM node:18 AS development
WORKDIR /main
COPY package*.json ./
RUN npm install -g @nestjs/cli
RUN npm install --legacy-peer-deps
COPY . .
CMD ["npm", "run", "start:dev"]
