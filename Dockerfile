FROM oven/bun
WORKDIR /src
ADD package.json /src
RUN bun install
ADD . /src