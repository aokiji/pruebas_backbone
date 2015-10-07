FROM fedora
RUN dnf makecache -y
RUN dnf install perl-Starman -y
RUN dnf install perl-Server-Starter-start_server perl-Net-Server-SS-PreFork -y
EXPOSE 80 443
CMD /usr/bin/start_server --port 80 -- /usr/bin/starman /var/www/app.psgi
