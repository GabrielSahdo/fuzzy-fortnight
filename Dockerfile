FROM oven/bun as development
WORKDIR /src
ADD package.json /src
RUN bun install
ADD . /src
CMD bun run start