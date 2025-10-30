import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.etao',
  name: '一淘',
  groups: [
    {
      key: 3,
      name: 'app跳转-打开',
      desc: '打开xxx应用',
      rules: [
        {
          matches: [
            'Button[id="android:id/button1"][text="打开"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23239468',
          activityIds: ['com.taobao.sns.activity.ISWebViewActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '🧧领取现金奖励',
      desc: '点击领取',
      rules: [
        {
          actionCd: 1500,
          matches: [
            '[text="现金"] - * < * - * < * + [text="领取"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22974322',
          activityIds: 'com.taobao.sns.activity.ISWebViewActivity',
        },
      ],
    },
    {
      key: 5,
      name: '🧧领取现金奖励-下',
      desc: '点击领取',
      rules: [
        {
          actionCd: 1500,
          actionMaximum: 2,
          matches: [
            '@View -2 [text="恭喜你！可以领取现金啦"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23213435',
          activityIds: 'com.taobao.sns.activity.ISWebViewActivity',
        },
      ],
    },
  ],
});
