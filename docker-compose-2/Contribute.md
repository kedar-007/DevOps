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








## Docker Compose