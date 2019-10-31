FROM node:10-alpine
WORKDIR /app
COPY . .
RUN npm install -g nodemon && npm install
EXPOSE 80
CMD [ "nodemon", "index.js" ]