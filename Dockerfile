# Base image
FROM node:18
WORKDIR /api/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "node", "dist/main.js" ]
EXPOSE 3000/tcp
