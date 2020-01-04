import { ChannelKeys, MessageBroker, MessagingSystem } from "@scsa/messaging";
import "../index.css";

import { App } from "../scripts/App";

class MessageBrokerMessagingSystem extends MessagingSystem {
  public router(): this {
    this.type = ChannelKeys.MessageBroker;
    this.options.router = new MessageBroker();
    return this;
  }
}

const messaging = new MessageBrokerMessagingSystem();
const app = new App(messaging);
