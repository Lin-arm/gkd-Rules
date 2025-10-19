import subscription from '../src/subscription';
import { checkSubscription, checkApiVersion } from '@gkd-kit/tools';

await checkApiVersion();

checkSubscription(subscription);

export default subscription;

//执行本脚本命令： pnpm exec tsx scripts/check.ts
