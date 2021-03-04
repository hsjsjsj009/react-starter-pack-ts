# build stage
FROM node:lts-alpine as build-env
ENV NODE_ENV=production
RUN \ 
  apk update && \
  apk add git gcc g++

ADD . /opt/app
WORKDIR /opt/app

RUN \
  yarn install && \
  yarn add @types/react-router-dom @types/react-redux @types/styled-components -D && \
  yarn build

FROM nginx:alpine
RUN apk add --no-cache bash
COPY --from=build-env /opt/app/build /var/www
COPY --from=build-env /opt/app/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www
EXPOSE 80 5000
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]
