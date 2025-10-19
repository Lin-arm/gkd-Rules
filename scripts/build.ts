import { updateDist } from '@gkd-kit/tools';
import { updateReadMeMd } from './updateReadMeMd';
import subscription from './check';

await updateDist(subscription);

await updateReadMeMd();
//执行本脚本命令： pnpm exec tsx scripts/build.ts
