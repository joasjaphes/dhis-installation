FROM nginx:latest
RUN rm /usr/share/nginx/html/*
COPY app/jostano-web /usr/share/nginx/html