FROM alpine:latest

RUN apk update
RUN apk upgrade
RUN apk add git npm
   
RUN git clone https://github.com/SergioEstebanP/dummy-rest-api.git
WORKDIR dummy-rest-api
RUN npm install express

ENTRYPOINT node dummyServer.js

EXPOSE 80



