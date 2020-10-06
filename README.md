# Installation
```console
npm i paper-pigeon
```
# Usage
```js
import { Discord } from 'paper-pigeon';

const send = new Discord("WEBHOOK_URL");
send.message("Starting server!");
send.success("Data loaded from API");
send.error("Failed to load resource");
```
# Get Discord Webhook URL
Open Discord -> Integrations -> Create Webhook -> Copy Webhook URL.

# Demo
![demo](https://user-images.githubusercontent.com/30378184/95209529-5c735e00-07e2-11eb-9724-e5a49b1e8585.jpg)
