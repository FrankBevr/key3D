# Frontend

This folder contains the Frontend

- `cat ./package.json` to see which Frontend Technologies are used.

- `./src/playground` contains some ethers recap
- `./src/views` contains views
- `./src/components` contains components
- `./public` contains static assets
- `./assets` contains dynamic assets

Current issue:

- There is a `.mind` File.
- It loads smoothly on the development server.
- After `npx vite build && cd ./dist/ && surge . demo.key3d.surges.sh` it throws
  that mind file can't be loaded, its gone. Error 410.
- It works with default `card.mind` in dev and production
- It works with feshly compiled assets like `beer.mind` in dev and production.
- It doesn't work with some newly compiled `./mind` files
- No compiler problem. Its md5sum is in ./dist and ./public the same.
- w.i.p.

### Quickstart

1. `npm install`
2. `npm run dev`

Latest deployment visible under http://demo.key3d.surge.sh .
