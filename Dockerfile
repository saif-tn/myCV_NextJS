FROM node:lts as dependencies
WORKDIR /saif_cv_project
COPY package.json ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /saif_cv_project
COPY . .
COPY --from=dependencies /saif_cv_project/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /saif_cv_project
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /saif_cv_project/public ./public
COPY --from=builder /saif_cv_project/.next ./.next
COPY --from=builder /saif_cv_project/node_modules ./node_modules
COPY --from=builder /saif_cv_project/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]
