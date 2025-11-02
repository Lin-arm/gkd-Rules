import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '🧩抖快-启动页AD-跳过',
      desc: '小程序-抖快工具(无水印下载视频)',
      rules: [
        {
          matches: ['TextView[text="跳过"][visibleToUser=true]'],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22950301',
          activityIds: '.plugin.appbrand.ui.AppBrandUI00',
        },
      ],
    },
    {
      key: 2,
      name: '🧩抖快-广告弹窗-x掉',
      desc: '小程序',
      rules: [
        {
          matches: [
            'FrameLayout[index=parent.childCount.minus(1)] >3 ImageView[width>=80][width<=99][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22944255',
            'https://i.gkd.li/i/22947362',
          ],
          activityIds: '.plugin.appbrand.ui.AppBrandUI00',
        },
      ],
    },
    {
      key: 3,
      name: '🧩抖快-剪贴板弹窗-解析',
      desc: '检测到链接地址-解析',
      rules: [
        {
          matches: [
            'Button[text="解析"][vid="mm_alert_ok_btn"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22944723',
          activityIds: '.plugin.appbrand.ui.AppBrandUI00',
        },
      ],
    },
    {
      key: 4,
      name: '🧩抖快-看完30s视频广告-x掉',
      desc: '出现 已完成-x掉',
      rules: [
        {
          matches: ['[desc^="已完成"] -2 ImageView[visibleToUser=true]'],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22947257',
          activityIds:
            '.plugin.sns.ad.landingpage.ui.activity.DynamicCanvasPageUI',
        },
      ],
    },
  ],
});
