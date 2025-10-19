import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: 'Subscription',
  version: 1,
  author: 'Lin-arm',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/Lin-arm/GKD_Subscription-X',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
