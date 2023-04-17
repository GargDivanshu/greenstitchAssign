## This app is built on MongoDB and NextJS 

The data of the charts come from DB and is fetched via API built. 

The data is stored in two different ways, one is 'data' and the other is 'byType'. 

## data-
It shows the pollution in the units of Ton to users

## byType-
It shows the data of pollution along the period of 6 Months (in the form of array) and also has percentage wise data of different metrics like Spinning, Transortation etc

## Features
- Data is completely powered by DB
- The sidebar has clickable options which show sub-options present within button like for Dashboard we have Record, Report, Analyse & Return.
- The notification icon in Navbar has Ping animation.
- Charts used have tooltip helping user to gain better insight
- The pollution chart showing data in Metric tons will show the data in RED, GRAY, GREEN, color depending upon the net change in the data as compared to previous datapoint, which can be later on calculated from the algorithm which Company wants


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
