# Selected latest LTS as "slim"
FROM node:12.14-slim AS base
RUN rm -rf /opt/yarn-* \
    && rm -f /usr/local/bin/yarn \
    && rm -f /usr/local/bin/yarnpkg
ENV NODE=ENV=production
ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
EXPOSE 3000
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package.json package-lock*.json ./
RUN npm ci --only=production && npm cache clean --force


# ---
# docker run --rm -p 9229:9229 game-db:0.1.0-dev
FROM base AS dev
ENV NODE_ENV=development
ENV PATH=/app/node_modules/.bin:$PATH
RUN npm install --only=development
EXPOSE 9229
ENTRYPOINT []
CMD ["nodemon", "--inspect=0.0.0.0:9229", "./bin/app.js"]


# ---
FROM base AS source
COPY --chown=node:node . .


# ---
# docker build -t game-db:0.1.0-test --target test .
FROM source AS test
ENV NODE_ENV=development
ENV PATH=/app/node_modules/.bin:$PATH
COPY --from=dev /app/node_modules /app/node_modules
RUN eslint .
RUN npm test
CMD ["npm", "run", "test"]


# ---
# @see https://github.com/aquasecurity/microscanner#registering-for-a-token
# docker build -t game-db:0.1.0-audit --target audit --build-arg=token=<TOKEN> --no-cache .
# FROM test as audit
# USER root
# RUN npm audit --audit-level critical
# ARG MICROSCANNER_TOKEN
# ADD https://get.aquasec.com/microscanner /
# RUN chmod +x /microscanner
# RUN /microscanner $MICROSCANNER_TOKEN --continue-on-failure


# ---
# Production as default
# docker build -t game-db:0.1.0 .
# docker run --rm -p 3000:3000 game-db:0.1.0
FROM source AS prod
ENTRYPOINT ["/tini", "--"]
CMD ["node", "./bin/app.js"]
