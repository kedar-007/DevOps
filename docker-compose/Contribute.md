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