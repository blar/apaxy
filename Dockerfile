FROM alpine:3.6
MAINTAINER Inti Gabriel <inti.gabriel+github@intigabriel.de>

EXPOSE 80

COPY content /
RUN apaxy-setup

CMD ["httpd", "-DFOREGROUND"]
