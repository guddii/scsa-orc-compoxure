import { MessagingSystemFactory, SecurityChecks } from "@scsa/messaging";

import { cfg } from "../../config";
import { App } from "./App";

const securityChecks = new SecurityChecks(cfg.endpoints());
const messaging = MessagingSystemFactory.create({ security: securityChecks });
new App(messaging);
