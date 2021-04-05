
FROM node:6
RUN mkdir -p /app/src/app
WORKDIR /app/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD ["npm", "start"]