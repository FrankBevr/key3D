# Docs

These are the docs.

It uses Vitepress.

The deployed docs are avaialbe under
[www.key3d.surge.sh](https://key3d.surge.sh) .

There are 4 folders

- `./Intro` - contains Intro Section
- `./Journey` - contains Journey of Development
- `./Outro` - contains Outro Section
- `./Notes` - contains diverse

### Quickstart

- `npm install`
- `npx vitepress`
- Go to http://localhost:5173

### Contribute

- `gh repo clone FrankBevr/key3d`
- `cd key3d/docs`
- `touch ./Notes/MyContribution.md`
- `echo "This is my Contribution" >> ./Notes/MyContribution.md`
- `./contribute.sh`

- `git status`
- `git add ./Notes/MyContribution.md`
- `git add ./.vitepress/config.ts`
- `git status`
- `git commit -m ":abc: (./docs) add MyContribution.md`
- `git status`
- `gh pr create --title "My Contribution" --body "This is a Pull Request, merge it please"`
- Go to https://github.com/FrankBevr/key3D/pulls to see your Contribution
  pending.
- After merge you see your Contribution under
  `https://key3d.surge.sh/Notes/MyContribution.html`
