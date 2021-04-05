#Stage 1
FROM node:8.11.2-alphine as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i npm@latest -g
RUN npm install
COPY . .
RUN npm run build


#Stage 2
FROM nginx:1.13.12-alphine
COPY --from=node /usr/src/app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
