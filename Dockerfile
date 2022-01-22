#stage 1
FROM node:16.13.2-alpine as node
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

#stage 2
FROM nginx:latest
COPY --from=node /app/dist/pnmobile-ui /usr/share/nginx/html
EXPOSE 4200:80
