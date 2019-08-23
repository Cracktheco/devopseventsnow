FROM launcher.gcr.io/google/nodejs
COPY . /eventservice/
WORKDIR /eventservice
RUN npm install
CMD ["npm", "start"]
