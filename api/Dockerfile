FROM node:21-alpine as base

WORKDIR /api
COPY package*.json ./
ENV PORT=5000
EXPOSE 5000


FROM base as prod
ENV NODE_ENV=production

RUN addgroup api && adduser -S -G api api

USER api
WORKDIR /api

USER root
RUN chown -R app:app .

USER api

RUN npm ci

COPY . .

ENV DATABASE_URL="postgres://postgres:Databasepassword1@db:5432/postgres"

RUN npx prisma generate

CMD [ "npm", "run", "prod" ]

FROM base as dev

ENV NODE_ENV=development
RUN npm i
COPY . .
CMD [ "npm", "run", "dev" ]
