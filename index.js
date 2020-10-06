export class Discord {
    constructor(webhook) {
      this.webhook = webhook;
      this.xhr = new XMLHttpRequest();
    }
    success(msg) {
        this.xhr.open("POST", this.webhook, true);
        this.xhr.setRequestHeader('Content-Type', 'application/json');
        this.xhr.send(JSON.stringify({
            content: msg,
            username: "Pigeon: Success",
            avatar_url:"https://user-images.githubusercontent.com/30378184/95204502-1a471e00-07dc-11eb-9f40-ec39076cce1f.jpg"
        }));
    };
    error(msg) {
        this.xhr.open("POST", this.webhook, true);
        this.xhr.setRequestHeader('Content-Type', 'application/json');
        this.xhr.send(JSON.stringify({
            content: msg,
            username: "Pigeon: Error",
            avatar_url:"https://user-images.githubusercontent.com/30378184/95203862-3a2a1200-07db-11eb-9992-605c2a8c75d5.jpg"
        }));
    };
    message(msg) {
        this.xhr.open("POST", this.webhook, true);
        this.xhr.setRequestHeader('Content-Type', 'application/json');
        this.xhr.send(JSON.stringify({
            content: msg,
            username: "Pigeon",
            avatar_url:"https://user-images.githubusercontent.com/30378184/95204787-7742d400-07dc-11eb-9271-2e5a92a34fcc.jpg"
        }));
    };
}
export class Slack {
    constructor(webhook) {
      this.webhook = webhook;
      this.xhr = new XMLHttpRequest();
    }
    success(msg) {
        this.xhr.open("POST", this.webhook, true);
        // this.xhr.setRequestHeader('Content-Type', 'application/json');
        this.xhr.send(JSON.stringify({
            
            type: "section",
            text: {
                type: "mrkdwn",
                text: "*Success* 🥳: " + msg
            }
            
        }));
    };
    error(msg) {
        this.xhr.open("POST", this.webhook, true);
        // this.xhr.setRequestHeader('Content-Type', 'application/json');
        this.xhr.send(JSON.stringify({
                
            type: "section",
            text: {
                type: "mrkdwn",
                text: "*Error* 😢: " + msg
            }
                
        }));
    };
    message(msg) {
        this.xhr.open("POST", this.webhook, true);
        // this.xhr.setRequestHeader('Content-Type', 'application/json');
        this.xhr.send(JSON.stringify({
                
            type: "section",
            text: {
                type: "mrkdwn",
                text: msg
            }
                
        }));
    };
}