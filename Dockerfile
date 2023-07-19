FROM oven/bun as development
WORKDIR /src
ADD . /src
RUN bun install
CMD bun run start