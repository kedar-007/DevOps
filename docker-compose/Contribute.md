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
- Start a new network `docker network create user_project`
- Start postgres
    - docker run --network user_project -e POSTGRES_PASSWORD=kedar -d -p 5432:5432 postgress
- Build the image - `docker build  --network user_project -t user_project.`
- Start the image - `docker run --network user_project -p 300:300 user_preoject`

## Docker compose installation steps
- Install docker,docker-compose
- Run `docker-compose up`