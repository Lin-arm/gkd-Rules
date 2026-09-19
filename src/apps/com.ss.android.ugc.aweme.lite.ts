import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 103,
      name: '功能类-复制分享链接后[返回]',
      desc: '已复制-点击[x]掉',
      rules: [
        {
          name: '①点击[x]掉',
          fastQuery: true,
          forcedTime: 3600000, // 1小时内主动查询，避免睡死
          matches:
            '@ImageView[clickable=true] - [text^="链接已复制" || text^="链接复制成功"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22944102',
            'https://i.gkd.li/i/25076821',
            'https://i.gkd.li/i/27101825',
            'https://i.gkd.li/i/30147372',
            'https://i.gkd.li/i/32419317', // 链接复制成功
          ],
          exampleUrls: 'https://e.gkd.li/4466ef1e-e38f-4d1c-b548-7d0585c4d79d',
          activityIds: [
            'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
            'com.ss.android.ugc.aweme.main.MainActivity',
            'com.ss.android.ugc.aweme.detail.ultra.ui.UltraDetailActivity',
            'com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '🤳看广告-已看完-[退出]',
      desc: '已成功领取奖励',
      fastQuery: true,
      actionDelay: 1000,
      activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
      rules: [
        {
          key: 1,
          name: '①点击[关闭]',
          matches:
            '[text="广告"] +(1,3) [text^="领取成功，关闭"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23394121', // v31.5.0
            'https://i.gkd.li/i/23562150', // v31.5.0
          ],
          exampleUrls: 'https://e.gkd.li/493ef811-814f-4ada-a11b-41249743fbd0',
        },
        {
          key: 2,
          name: '②点击[关闭]',
          matches:
            'ImageView < @[desc^="领取成功，关闭"][height>10] <n ViewGroup[childCount>3] < * < * < * < * < * < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/25285401', // v37.7.0
        },
        {
          key: 3,
          name: '③点击坐标[关闭]',
          actionCd: 3500, // 等待 key4-2 触发点击[领取奖励]
          position: {
            left: 'width * 0.5',
            top: 'width * 0.1231',
          },
          matches:
            'ImageView < @[desc^="领取成功，关闭"] <2 * < * <2 [childCount=2] < [height=0] <3 FrameLayout[childCount>3] < * < * < * < * < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/27102387', // v37.7.0 [height=0]
        },
        {
          key: 4,
          activityIds:
            'com.tt.miniapphost.placeholder.MiniAppChildProcessMultiInsActivity',
          matches:
            'ImageView < @[desc^="领取成功，关闭"][height>10] <n ViewGroup[childCount>3]',
          snapshotUrls: 'https://i.gkd.li/i/30539818',
        },
      ],
    },
    {
      key: 4,
      name: '🤳看广告-弹窗-再看一个',
      desc: '点击[领取奖励]',
      activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
      rules: [
        {
          key: 1,
          name: '①点击[领取奖励]',
          fastQuery: true,
          matches:
            '[text^="再看一个"] +(6,13) [text="领取奖励"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23394181',
            'https://i.gkd.li/i/23562162', // v31.5.0
          ],
          exampleUrls: 'https://e.gkd.li/32505f12-f430-49dc-b711-fed907d2be35',
        },
        {
          key: 2,
          name: '②点击[领取奖励]',
          matches:
            '@[desc="领取奖励"] < * < [childCount=2] -2 [desc^="再看一个"]',
          snapshotUrls: [
            'https://i.gkd.li/i/27102618',
            'https://i.gkd.li/i/27102723',
            // 'https://i.gkd.li/i/25285457',   // v37.7.0 无直接节点,失效
          ],
        },
      ],
    },
    {
      key: 5,
      name: '🤳看广告-[退出]app下载页',
      desc: '点击左上角[返回]',
      rules: [
        {
          fastQuery: true,
          matches:
            '[vid="iv_back"][desc="返回"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23394270',
            'https://i.gkd.li/i/25285191',
          ],
          exampleUrls: 'https://e.gkd.li/69f32350-a10d-4b2a-a336-68312401c605',
          activityIds: [
            'com.bytedance.ies.android.rifle.container.RifleContainerActivity',
            'com.bytedance.android.sif.container.SifContainerActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '🤳看广告-弹窗-评价收金币',
      desc: '累计获得奖励弹窗-点击[评价]',
      fastQuery: true,
      activityIds: [
        'com.ss.android.ugc.aweme.main.MainActivity',
        'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
      ],
      rules: [
        {
          key: 1,
          matches: '[text="评价并收下金币"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23394382',
          exampleUrls: 'https://e.gkd.li/a4e9803f-9935-4fc7-8977-5b855120046c',
        },
        {
          key: 2,
          matches:
            '@[visibleToUser=true] - [desc="金币"] <3 [childCount=4] <<n [vid="action_bar_root"]',
          snapshotUrls: 'https://i.gkd.li/i/25285568',
        },
        {
          key: 3,
          position: {
            left: 'width * -0.7125',
            top: 'width * 3.0750',
          },
          matches:
            '@[desc="金币"] <3 [childCount=3] <<n [vid="action_bar_root"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30538833',
            'https://i.gkd.li/i/30539315',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '其它-提示无HMS-确定',
      desc: '(华为📱)卸载HMS Core,进抖音会提示',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.huawei.hms.activity.BridgeActivity',
          matches: ['[text*="HMS Core"]', '[text="OK"][clickable=true]'],
          exampleUrls: 'https://e.gkd.li/e42e3f30-1b91-40fc-b2f1-c8425fa215f1',
          snapshotUrls: 'https://i.gkd.li/i/25325208',
        },
      ],
    },
    {
      key: 13,
      name: '功能类-刷到推广视频时[上滑]',
      desc: '广告/应用/购物/小游戏/咨询/预约/子薇剧场 等推广视频',
      enable: false,
      rules: [
        {
          fastQuery: true,
          actionCd: 300,
          actionDelay: 200, //刷视频时,让下一个视频完整显示才触发[上滑]
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds: [
            'com.ss.android.ugc.aweme.main.MainActivity',
            'com.ss.android.ugc.aweme.detail.ultra.ui.UltraDetailActivity',
            'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
          ],
          matches:
            '([text$="广告 展开" || text$="广告 收起"][vid="desc"][visibleToUser=true]) || ([text="应用" || text="购物" || text="小游戏" || text="咨询" || text="子薇剧场" || text="预约"][text.length<6][index=1][visibleToUser=true])',
          snapshotUrls: [
            'https://i.gkd.li/i/29214101', // [text$="广告 展开"][vid="desc"]
            'https://i.gkd.li/i/29579093', // [text$="广告 展开"][vid="desc"]
            'https://i.gkd.li/i/29686900', // [text$="广告 收起"][vid="desc"]

            // 选择器参数大部分参考以下抖音快照:
            // 'https://i.gkd.li/i/21142589', //应用
            // 'https://i.gkd.li/i/21142249', //购物
            // 'https://i.gkd.li/i/25355868', //咨询
            // 'https://i.gkd.li/i/21523849', //子薇剧场
            // 'https://i.gkd.li/i/21725628', //小游戏
            // 'https://i.gkd.li/i/21765934', //预约
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/29686899', // [text*="广告"][vid="desc"] 误触
            'https://i.gkd.li/i/30647148', //游戏
          ],
        },
      ],
    },
  ],
});
