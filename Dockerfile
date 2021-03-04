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
COPY --from=build-env /opt/app/build /var/www
COPY --from=build-env /opt/app/envsubt.sh /etc/nginx/templates/envsubt.sh
COPY --from=build-env /opt/app/default.conf /etc/nginx/templates/default.conf.template
WORKDIR /var/www

RUN apk add --no-cache bash

ENV PORT=80

CMD ["/bin/sh", "-c", "/etc/nginx/templates/envsubt.sh && nginx -g \"daemon off;\""]
