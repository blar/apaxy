FROM alpine:3.6

EXPOSE 80

COPY content /
RUN apaxy-setup

CMD ["httpd", "-DFOREGROUND"]
