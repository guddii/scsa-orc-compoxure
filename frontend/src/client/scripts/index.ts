import { MessagingSystemFactory, SecurityChecks } from "@scsa/messaging";

import { cfg } from "../../config";
import { App } from "../../../../../iframe/frontend/src/client/scripts/App";

const securityChecks = new SecurityChecks(cfg.endpoints());
const messaging = MessagingSystemFactory.create({ security: securityChecks });
new App(messaging);
