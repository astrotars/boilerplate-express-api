# use latest version of node
FROM mhart/alpine-node:latest

# set working directory
WORKDIR /dist

# bundle source code
COPY . .

# expose port 3000
EXPOSE 3000

# start app with yarn
CMD ["yarn", "start"]
