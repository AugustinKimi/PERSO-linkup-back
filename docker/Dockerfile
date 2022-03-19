FROM node:17-alpine3.14
# Create app directory
WORKDIR /cloud-app

# Bundle app source
COPY . /cloud-app

RUN npm install

CMD [ "npm", "start" ]