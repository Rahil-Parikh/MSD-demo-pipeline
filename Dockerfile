# pull the base image
FROM node:alpine

LABEL version="1.0"
LABEL description="This is the base docker image for the sample frontend react app."
LABEL maintainer = "rahil.parikh@somaiya.edu"

# set the working direction
WORKDIR /home/parikh/Projects/sample-react

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /node_modules/.bin:$PATH

# install app dependencies

COPY ["package.json", "package-lock.json", "./"]

# RUN npm config set unsafe-perm true

RUN npm install --production 
# add app
COPY . .

EXPOSE 4200

# start app
CMD ["npm", "start"]