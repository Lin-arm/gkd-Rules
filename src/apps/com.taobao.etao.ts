import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.etao',
  name: '一淘',
  groups: [
    {
      key: 2,
      name: '功能类-自动[签到]',
      desc: '签到领钱页-点击[签到]',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          actionCd: 2000,
          matches:
            '[text="签到"] - @View[childCount=3][getChild(0).name$="Image"] <<(30-n) [desc="WVUCWebView"] <<(10-n) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30633488',
            'https://i.gkd.li/i/30633316',
            'https://i.gkd.li/i/30690113',
            'https://i.gkd.li/i/30861226',
          ],
          exampleUrls: 'https://e.gkd.li/c996b5fb-58f5-46f1-9070-49af596e6afb',
          activityIds: [
            'com.taobao.sns.activity.ISWebViewActivity',
            'com.taobao.sns.tms.CommonTMSActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动跳转其他app',
      desc: '弹窗-点击[打开]',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          forcedTime: 10000,
          matches:
            '@[text="打开"] <2 [childCount=2] < ScrollView - FrameLayout >3 [text^="正在离开一淘"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23239468',
            'https://i.gkd.li/i/30633516',
          ],
          exampleUrls: 'https://e.gkd.li/1ccc4813-4a29-4d47-98e8-5f1a1699fc93',
          activityIds: [
            'com.taobao.sns.activity.ISWebViewActivity',
            'com.taobao.sns.tms.CommonTMSActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动[领取]奖励',
      desc: '签到领钱页-已做任务->点击[领取]',
      actionCd: 1500,
      activityIds: [
        'com.taobao.sns.activity.ISWebViewActivity',
        'com.taobao.sns.tms.CommonTMSActivity',
      ],
      rules: [
        {
          key: 1,
          matches: '@[text="领取"] - View >2 [text="现金"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/30634063',
            'https://i.gkd.li/i/30861239',
          ],
          exampleUrls: 'https://e.gkd.li/afb9bd2b-9b3d-45b5-933a-e10b0e6cc639',
        },
        {
          key: 2,
          actionMaximum: 2,
          matches:
            '@View -2 [text="恭喜你！可以领取现金啦"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23213435',
        },
      ],
    },
    {
      key: 5,
      name: '其它-[退出]中转页',
      desc: '在别的 界面/app 做完任务后切回一淘中转页',
      fastQuery: true,
      matchTime: 2000,
      resetMatch: 'app',
      activityIds: [
        'com.taobao.sns.activity.ISWebViewActivity',
        'com.taobao.sns.tms.CommonTMSActivity',
      ],
      rules: [
        {
          key: 1,
          matches: '@[desc="返回"] + LinearLayout > [vid="tvTitle"]',
          snapshotUrls: [
            'https://i.gkd.li/i/29088626',
            'https://i.gkd.li/i/30633611',
          ],
          exampleUrls: 'https://e.gkd.li/dcd95b76-aed7-453d-88cd-b794e949dbf2',
        },
        {
          key: 2,
          matches:
            '@[clickable=true] < [childCount=1] + * > [vid="tv_title_bar_title"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30166993',
            'https://i.gkd.li/i/30646378',
          ],
        },
      ],
    },
  ],
});
