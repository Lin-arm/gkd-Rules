import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 1,
      name: '视频页-分享-复制链接-x掉',
      desc: '已复制-x掉',
      rules: [
        {
          matches: [
            '[text^="链接已复制"] + ImageView[vid="m5e"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22944102',
            'https://i.gkd.li/i/22945101',
          ],
          activityIds: [
            'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
            'com.ss.android.ugc.aweme.main.MainActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '视频页-青少年弹窗-x掉',
      desc: '启动时的青少年弹窗-关闭',
      rules: [
        {
          anyMatches: [
            '[text="青少年模式"] < * + [desc="关闭"][visibleToUser=true]',
            '[text="青少年模式"] +3 * > [text="关闭"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/23427881'],
          activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '🤳看广告-已看完-退出',
      desc: '已成功领取奖励',
      rules: [
        {
          matches: [
            '[text="广告"] +(1,3) [text^="领取成功，关闭"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23394121',
            'https://i.gkd.li/i/23562150',
          ],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '🤳看广告-退出弹窗-再看',
      desc: '再看一个',
      rules: [
        {
          matches: [
            '[text^="再看一个"] +(6,13) [text="领取奖励"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23394181',
            'https://i.gkd.li/i/23562162',
          ],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '🤳看广告-误入app下载页-返回',
      desc: '点击返回',
      rules: [
        {
          matches: ['[vid="iv_back"][desc="返回"][visibleToUser=true]'],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/23394270'],
          activityIds: [
            'com.bytedance.ies.android.rifle.container.RifleContainerActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '🤳看广告-弹窗-评价收金币',
      desc: '累计获得奖励弹窗-点击评价',
      rules: [
        {
          matches: [
            '[text="恭喜累计获得奖励"] +3 [text="评价并收下金币"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/23394382'],
          activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
        },
      ],
    },
  ],
});
