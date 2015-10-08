FROM fedora
RUN dnf makecache -y
RUN dnf install perl-Starman -y
RUN dnf install perl-Server-Starter-start_server perl-Net-Server-SS-PreFork -y
RUN dnf install perl-Dancer2 -y
RUN dnf install nginx -y
RUN dnf install supervisor -y
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./supervisord.conf /etc/supervisor.d/web-app.ini
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor.d/web-app.ini"] 
