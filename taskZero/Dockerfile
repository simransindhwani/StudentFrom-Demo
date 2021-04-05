#Stage 1
FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i npm@latest -g
RUN /usr/bin/npm install
RUN node_modules/@angular/cli/bin/ng build
COPY . .
RUN npm run build


#Stage 2
FROM nginx:1.13.12-alpine
COPY --from=node /usr/src/app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
