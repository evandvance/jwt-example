FROM node:21-alpine as base
WORKDIR /frontend
COPY ./package*.json .
EXPOSE 3000

FROM base as prod
ENV NODE_ENV=production

RUN addgroup frontend && adduser -S -G frontend frontend

USER frontend
WORKDIR /frontend

USER root
RUN chown -R frontend:frontend . 

USER frontend
RUN npm ci
COPY . .
RUN npm run build
CMD [ "npm", "run", "preview" ]


FROM base as dev

ENV NODE_ENV=development
WORKDIR /frontend
RUN npm i
COPY . .
CMD [ "npm", "run", "dev" ]