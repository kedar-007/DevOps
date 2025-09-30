FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i typescript

RUN npm install
COPY . .
ENV DATABASE_URL=postgresql://postgres:kedar@localhost:5432/postgres
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["npm","run","dev:docker"]