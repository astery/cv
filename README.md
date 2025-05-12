Resume generator
====
Simple HTML resume template with considerations for PDF printing

## How to use

1. Fork repository
2. Enable [github pages](https://github.com/sitek94/vite-deploy-demo?tab=readme-ov-file#enable-github-pages)
3. Update `index.json` and `index.pug` for your needs
4. Update `vite.config.mjs` `base` param if your repository name differs from `cv`
4. Push changes to master and wait for github actions apply
5. Open `<github_name>.github.io/cv/` in chrome (firefox does not put text into document), press `ctrl+p` to open print dialog, choose `Save as PDF`, check `Backround graphics` box in `More settings` (that embeds html fonts into pdf) and press `Save`

**Enjoy your html resume in pdf format**
