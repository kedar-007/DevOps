# Use Node 20 Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the project
COPY . .
# Set DATABASE_URL for runtime (Docker Compose service name 'db')
ENV DATABASE_URL=postgresql://kedar:kedar@db:5432/mydb
RUN DATABASE_URL=$DATABASE_URL npx prisma migrate dev

# Generate Prisma client
RUN npx prisma generate

# Build TypeScript project
RUN npm run build


# Expose the port
EXPOSE 3000


# Run migrations and start the app at runtime
CMD ["npm","start"]
