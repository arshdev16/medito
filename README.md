# H1 Single page fundraiser for medito

Here is the guide to setup things

## H2 To Change data

### H3 FAQ

To change the FAQ questions, go to `src/lib/data.ts` and edit all the questions there

### H3 Rewards

To change the rewards, go to `src/lib/data.ts`, and edit all the rewards there

### H2 Fetching donations

To connect to your database and fetch the recent donations, go to `/src/data-access/index.ts` and fetch there

## H2

steps to deply on cloudflare pages

1. Clone the repo
2. go to cloudflare pages dashboard and create a new website
3. select framework preset as `Next(Static generation)`
4. set environment varibales and deploy(Be sure to make a `NODE_VERSION` environment variable and set it to `20.10.0`)
5. Deploy
