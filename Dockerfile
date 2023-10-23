FROM oven/bun

WORKDIR /usr/src/app

ARG DB_HOST
ARG DB_USER
ARG DB_PASSWORD

COPY . .

WORKDIR /usr/src/app/server

RUN bun install

ENV NODE_ENV="production"
ENV DB_HOST=$DB_HOST
ENV DB_USER=$DB_USER
ENV DB_PASSWORD=$DB_PASSWORD

EXPOSE 7000

CMD [ "bun", "start"]