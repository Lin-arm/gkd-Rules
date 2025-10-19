import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.etao',
  name: '一淘',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: [
            'LinearLayout[childCount=2] > @RelativeLayout[clickable=true][childCount=1] > ImageView[childCount=0]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12739581',
            'https://i.gkd.li/i/13670025',
          ],
          activityIds: [
            'com.taobao.etao.app.home.view.NewHomeActivity',
            'com.taobao.etao.app.homev4.HomeV4Activity',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="一淘-首页红包升级-2312wf"] >5 View[childCount=3] > View[index=0][visibleToUser=true]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/14622468'],
          exampleUrls: [
            'https://m.gkd.li/57941037/db5c7761-3a8b-4bc6-a61c-65dd30f61b9f',
          ],
          activityIds: ['com.taobao.etao.app.homev4.HomeV4Activity'],
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: [
            '[text^="打开消息通知"] + [text="去开启"] + ImageView[clickable=true]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/12684278'],
          activityIds: ['com.taobao.sns.app.message.MessageActivity'],
        },
        {
          key: 1,
          matches: [
            '[text^="打开消息通知"] + FrameLayout > [text="去开启"] < FrameLayout + ImageView[clickable=true]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/12684351'],
          activityIds: ['.mine.MetaXMineActivity'],
        },
      ],
    },
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
          snapshotUrls: ['https://i.gkd.li/i/22974322'],
          activityIds: ['com.taobao.sns.activity.ISWebViewActivity'],
        },
      ],
    },
  ],
});
