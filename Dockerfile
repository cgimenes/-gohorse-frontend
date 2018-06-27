FROM nginx:alpine

COPY build/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY dist/ /opt/gohorse/frontend

