## Manual Installation
    - Install node js locall
    - Clone the repo
    - Install dependancies npm install
    - Start db locally
        - docker run -e POSTGRESS_PASSWORD=secreat -d -p 5432:5432 postgres
    - Change the .env file and update the connection string
    - npx prisma migrate dev
    - npx prisma generate 
    - npm run buld
    - npm run start 

## Docker Installation 
    - Install docker
    - Start a network `docker network create user_project`
    - Start Postgress
        - docker run --network user_project -e POSTGRESS_PASSWORD=kedar -d -p 5432:5432 postgres
    - Build Docker Image - `docker build --network=host -t user-project .`
    - Start the image - `docker run -e DATABASE_URL="postgresql://kedar:kedar@localhost:5432/mydb --network user_project -p 3000:3000 user-project"
## Docker Compose
    - Install docker ,docker-compose
    - Run `docker compose up`