# Development Env

1. Install NodeJS(include NPM) from url: 
https://nodejs.org/dist/v14.15.1/node-v14.15.1-x64.msi
1. Install dependencies: ```npm install```
1. Run the project: ```npm start```
1. Go to http://localhost:3000

# Production Env
```docker build -f Dockerfile -t sample:prod .```
```docker run -it --rm -p 1337:80 sample:prod```

Or Docker Compose: ```docker-compose -f docker-compose.yml up -d --build```