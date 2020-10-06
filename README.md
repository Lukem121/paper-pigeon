# Installation
```console
npm i paper-pigeon
```
## [Live Demo](https://paper-pigeon-demo.vercel.app/)
# Discord Usage
```js
import { Discord } from 'paper-pigeon';

const send = new Discord("WEBHOOK_URL");
send.message("Starting server!");
send.success("Data loaded from API");
send.error("Failed to load resource");
```
# Get Discord Webhook URL
Open Discord -> Integrations -> Create Webhook -> Copy Webhook URL

# Slack Usage
```js
import { Slack } from 'paper-pigeon';

const send = new Slack("WEBHOOK_URL");
send.message("Starting server!");
send.success("Data loaded from API");
send.error("Failed to load resource");
```
# Get Slack Webhook URL
[Create Slack App](https://api.slack.com/apps?new_app=1) -> Add incoming webhooks feature -> Activate Webhook -> Add new webhook -> Copy webhook URL

# Demo
[Live Demo](https://paper-pigeon-demo.vercel.app/)

![demo](https://user-images.githubusercontent.com/30378184/95209529-5c735e00-07e2-11eb-9724-e5a49b1e8585.jpg)
