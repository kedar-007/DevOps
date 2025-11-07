FROM node:20-alpine
WORKDIR /app
COPY ./package.json ./package.json 
COPY ./package-lock.json ./package-lock.json
RUN npm install
COPY . .
ENV DATABASE_URL=postgresql://kedar:kedar@localhost:5432/mydb
RUN npx prisma migrate dev
RUN npx prisma generate
RUN npx run build
CMD [ "npm", "start" ]