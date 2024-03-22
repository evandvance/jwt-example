FROM postgres:16-alpine

COPY ./sql /docker-entrypoint-initd.b

ENV POSTGRES_PASSWORD=Databasepassword1

EXPOSE 5432

CMD [ "postgres" ]