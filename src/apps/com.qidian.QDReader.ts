import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 1,
      name: '📆每日福利-看完广告-知道了',
      desc: '点击知道了',
      rules: [
        {
          matches: 'TextView[text="知道了"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22909666', //422
            'https://i.gkd.li/i/24339296', //428
          ],
          activityIds: '.ui.activity.QDBrowserActivity',
        },
      ],
    },
    {
      key: 2,
      name: '📆每日福利-自动看广告',
      desc: '点击去完成(❗配合QD模块用)',
      enable: false,
      rules: [
        {
          actionCd: 1700, // 配合QD模块,免看广告领奖励 使用
          excludeMatches: '[text*="验证"][focusable=true][visibleToUser=true]', // 排除验证弹窗(遇则停)
          matches: '[id="video"] >(1,2) [text="去完成"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23290942', // 422
            'https://i.gkd.li/i/23565148', // 422
            'https://i.gkd.li/i/23561866', // 420
            'https://i.gkd.li/i/23561912', // 428
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23562885',
            'https://i.gkd.li/i/23610102', // 422 验证弹窗
          ],
          activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
        },
      ],
    },
    {
      key: 3,
      name: '📆每日福利-自动抽奖',
      desc: '点击 抽奖(❗配合QD模块用)',
      enable: false,
      order: 2,
      activityIds: '.ui.activity.QDBrowserActivity',
      rules: [
        {
          key: 1,
          name: '去抽奖',
          matches: '[text="抽奖机会 ×1"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24369707',
        },
        {
          key: 2,
          name: '弹窗-抽奖',
          actionCd: 1500,
          matches:
            '[text="福利中心"] >n [text="抽奖" || text$="抽奖机会+1"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24369401', //抽奖
            'https://i.gkd.li/i/24369418', //做任务抽奖机会+1
          ],
        },
        {
          key: 3,
          name: '抽完奖-x掉',
          matches:
            '[text="明天再来"] +3 [clickable=true][childCount=1][index=parent.childCount.minus(1)]',
          snapshotUrls: 'https://i.gkd.li/i/24369440',
        },
      ],
    },
    {
      key: 4,
      name: '📆每日福利-阅读得积分-领取',
      desc: '点击领积分(❗遮挡可开shizuku强制点击)',
      activityIds: '.ui.activity.QDBrowserActivity',
      rules: [
        {
          key: 1,
          action: 'clickNode', //配合shizuku,挡住也能点击
          matches: '[id="read"] >(1,2) [text="领积分"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24100818',
        },
        {
          key: 2,
          matches: '[id="read"] >(1,2) [text="领积分"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 501,
      name: '🧧发现-自动进红包广场',
      desc: '点击 红包广场(❗用前请到开发者选项关闭那3个动画)',
      enable: false,
      rules: [
        {
          actionCd: 200,
          matches: '@[clickable=true] > [text="红包广场"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24399266', //起点422
          activityIds: '.ui.activity.MainGroupActivity',
        },
      ],
    },
    {
      key: 5,
      name: '🧧发现-红包广场-抢月包',
      desc: '点击 抢(章节卡不抢)', // 若是手动从红包广场进来, activity没变, 此规则可能不触发. 需手动下拉刷新, 或通过gkd自动进红包广场.
      enable: false,
      actionCd: 200,
      activityIds: [
        '.ui.activity.MainGroupActivity',
        '.flutter.HongBaoSquareActivity',
      ],
      rules: [
        {
          key: 1, //先抢点币过10万的
          matches:
            'ImageView[desc$="万\\n点\\n抢"][desc.length=7][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23291716', //起点422
        },
        {
          key: 2,
          matches: 'ImageView[desc$="万\\n点\\n抢"][visibleToUser=true]',
        },
        {
          key: 3,
          matches: 'ImageView[desc$="点\\n抢"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 6,
      name: '🐞发现-红包广场-抢月包(测试)',
      desc: '点击 已抢完 (测试用,真抢时请关闭)',
      enable: false,
      rules: [
        {
          actionCd: 300,
          actionMaximum: 3,
          matches:
            'ImageView[desc$="点\\n已抢完"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24323139',
          activityIds: [
            '.ui.activity.MainGroupActivity',
            '.flutter.HongBaoSquareActivity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '🧧抢月包-投月票',
      desc: '弹窗-点击 开',
      enable: false,
      rules: [
        {
          actionCd: 100,
          actionDelay: 120, //加个延时,点太快了可能不妥
          excludeMatches: '[text*="验证"][focusable=true][visibleToUser=true]', // 排除验证弹窗
          matches: [
            '@[clickable=true] > [vid="getHongbaoTv"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23299140',
          // excludeSnapshotUrls: [
          //   'https://i.gkd.li/i/23562885',
          //   'https://i.gkd.li/i/23610102', // 422 验证弹窗
          // ],
          activityIds: [
            '.ui.activity.MainGroupActivity',
            '.flutter.HongBaoSquareActivity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '🧧抢月包-已抢完弹窗-x掉',
      desc: '弹窗-已抢完-x掉',
      enable: false,
      rules: [
        {
          actionCd: 100,
          matches: [
            '[text="已抢完"]',
            '[vid="btnHongbaoClose"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23291755',
          activityIds: [
            'com.qidian.QDReader.ui.activity.MainGroupActivity',
            '.flutter.HongBaoSquareActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '📖阅读页-任务弹窗-放弃',
      desc: '退出时弹窗-不领任务',
      rules: [
        {
          matches: '[vid="btnLeave"][text="急迫离开"][clickable=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24338232', //阅读满30秒,领取2点章节卡
          activityIds: '.ui.activity.QDReaderActivity',
        },
      ],
    },
  ],
});
