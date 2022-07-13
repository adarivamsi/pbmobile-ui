#stage 1
FROM node:16.13.2-alpine as node
LABEL author="Vamsi Charan Adari"
RUN mkdir -p /pb-mobile
WORKDIR /pb-mobile
COPY package.json /pb-mobile
RUN npm install
COPY . /pb-mobile
RUN npm run build

#stage 2
RUN export VERSION=$(npm run version)

#stage 3
FROM nginx:latest
COPY --from=node /pb-mobile/dist/pbmobile-ui /usr/share/nginx/html
EXPOSE 4200:80
