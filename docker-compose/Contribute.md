## Manual Installation
- install node js locally
- clone the repo
- install the all dependancies (npm install)
- Start the db locally
    - docker run -e POSTGRES_PASSWORD=kedar -d -p 5432:5432 postgres
    - Go to neon.tech and get yourself a new db
- change the .env file and update the db crendentials
- npx prisma migrate dev
- npx prisma generate
- npm run build
- npn run start

## Docker installation
- Install Docker
- Create a Network - `docker network create user_project`
- Start postgres
    - docker run --network user_project --name postgres -e POSTGRES_PASSWORD=kedar -d -p 5432:5432 postgress
- Build the image - `docker build --network=host -t user_project.`
- Start the image - `docker run -e  DATABASE_URL=postgresql://postgres:kedar@postgres:5432/postgres --network user_project -p 3000:3000 user_app`

## Docker compose installation steps
- Install docker,docker-compose
- Run `docker-compose up`