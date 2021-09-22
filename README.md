![Screen Shot 2021-09-22 at 12 01 00](https://user-images.githubusercontent.com/758090/134397278-640300f0-9f99-4433-b9ef-cb94779163ad.png)

# Securio Playground [![Netlify Status](https://api.netlify.com/api/v1/badges/8a0e4f40-1e34-4874-8c2d-51965aea010e/deploy-status)](https://app.netlify.com/sites/festive-fermat-c91f16/deploys)

> A fake security company delivering all your security needs!

[Live Demo](https://www.andymerskin.com/sites/securio/)

## What's the goal for this?
- ✔️ A playground to visualize sets of data
- ✔️ Experiment with a popular data visualization library (VictoryCharts) with a standard set of charts and enough customization to make a dent.
- ✔️ Another excuse to keep playing with [Tailwind](https://tailwindcss.com/), [twin.macro](https://github.com/ben-rogerson/twin.macro) (CSS-in-JS wrapper for Tailwind), and [Vite](https://vitejs.dev/) -- three of my favorite web technologies that make client-side development a total delight

## What's next?
- [ ] Additional charts to represent aggregates of incident categories
- [ ] Use of a popular data-grid library (AG Grid) to represent the same data in table format, tied to filters as well
- [ ] Filtering of incidents (by category, longer date ranges) that update the chart and table, respectively
- [ ] Mock more data
- [ ] Move mock data to a Netlify function as an API to tie loading states to the UI and handle filtered requests

## How long did this take you to make?
So far, about **7-8 hours** of focused development time, including scaffolding and lots and lots of design tweaks to get things just right.

## Stack
- Vite
- React-TS
- twin-macro (Tailwind CSS) + Emotion
- VictoryCharts (based on D3.js)
