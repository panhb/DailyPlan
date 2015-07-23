# Dockerfile to create a docker image
# Base image
FROM node

# Add files to the image
RUN mkdir -p /opt/nodejs
ADD . /opt/nodejs
WORKDIR /opt/nodejs

# Install the dependencies modules
RUN npm install

# Expose environment variables
ENV MONGO_IP **LinkMe**
ENV MONGO_PORT **LinkMe**
ENV MONGO_DATABASE plan
ENV MONGO_USER **ChangeMe**
ENV MONGO_PASSWORD **ChangeMe**

# Expose the container port
EXPOSE 3000

ENTRYPOINT ["node", "app.js"]