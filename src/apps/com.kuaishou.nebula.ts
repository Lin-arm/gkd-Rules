import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 1,
      name: '启动页-视频广告页-返回',
      desc: 'app跳转ks时出现',
      rules: [
        {
          matches: 'ImageView[vid="left_btn"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22658635',
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        },
      ],
    },
    {
      key: 2,
      name: '📺视频页-好评弹窗-x掉',
      desc: '点击x掉',
      rules: [
        {
          matches:
            'ScrollView[vid="body"] -2 ImageView[vid="close"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22851896',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
        },
      ],
    },
    {
      key: 3,
      name: '📺视频页-xx-不感兴趣',
      desc: '①快手热榜 ②每日打卡',
      rules: [
        {
          matches:
            '[text="上滑继续观看视频"] - ImageView < * -(1,2) * >2 TextView[text="不感兴趣"]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22901405',
            'https://i.gkd.li/i/22981911',
          ],
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
        },
      ],
    },
    {
      key: 4,
      name: '📺视频页-长按直播-不感兴趣',
      desc: '点击不感兴趣',
      rules: [
        {
          actionCd: 2000,
          matchDelay: 1700,
          matches: '[text^="不感兴趣" && vid="item_title"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22908240',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
        },
      ],
    },
    {
      key: 5,
      name: '任务页-弹窗-X掉',
      desc: '添加组件,去绑卡,邀好友 弹窗',
      activityIds: [
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
        'com.yxcorp.gifshow.HomeActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            '[text^="添加组件" || text^="限时邀" || text^="去分享视频"] <<(2,3) * - [text=""][childCount=1] > Image',
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22671674',
            'https://i.gkd.li/i/22907854',
            'https://i.gkd.li/i/22850433',
            'https://i.gkd.li/i/23300823',
          ],
        },
        {
          key: 2,
          anyMatches: [
            '[text="去绑卡"] -7 * < * - [text=""][childCount=1] > Image',
            '[text="去绑卡"] <7 * - * < * - [text=""][childCount=1] > Image',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22672698',
            'https://i.gkd.li/i/23468984',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '任务页-打卡弹窗-X掉',
      desc: '①每日打卡弹窗 ②退出',
      enable: false,
      rules: [
        {
          key: 1,
          matches: [
            '[text="huge_sign_marketing_popup"] < * - [text=""][childCount=1] > Image',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22672607',
            'https://i.gkd.li/i/22871818',
            'https://i.gkd.li/i/22691430',
          ],
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
          ],
        },
        {
          key: 2,
          actionMaximum: 3,
          actionCd: 5000,
          matchDelay: 1000,
          action: 'back',
          matches: [
            '[text^="完成365天打卡"] - * <<2 * - * >3 [text="更多"] < * - * >3 Image',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22702263',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 7,
      name: '逛街-退出弹窗-放弃',
      desc: '点击返回',
      rules: [
        {
          matches:
            '[text="继续浏览可获得奖励"] +3 [text="放弃"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22658647',
          activityIds: 'com.yxcorp.gifshow.ad.rn.AdKwaiRnActivity',
        },
      ],
    },
    {
      key: 8,
      name: '📘小说-领奖',
      desc: '①领奖 ②X掉弹窗',
      rules: [
        {
          key: 1,
          actionDelay: 500,
          matches:
            '[text="立即领取"][id$="task_item_button"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22658578',
          activityIds: 'com.kuaishou.novel.home.NovelHomeActivity',
        },
        {
          key: 2,
          matches:
            '[text="恭喜你获得"] - [vid="dialog_close"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22672261',
          activityIds: 'com.kuaishou.novel.home.NovelHomeActivity',
        },
      ],
    },
    {
      key: 9,
      name: '🤳看广告-已看完-退出',
      desc: '已成功领取奖励',
      rules: [
        {
          actionDelay: 1500,
          matches: [
            '[text^="已成功"] + [id="com.kuaishou.nebula.commercial_neo:id/video_countdown_end_icon"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22658960',
            'https://i.gkd.li/i/22662987',
            'https://i.gkd.li/i/23211038',
          ],
          activityIds: [
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.plugin.search.SearchActivity',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '🤳看广告-退出弹窗-下载领奖-放弃',
      desc: '弹窗-下载并体验20秒-放弃奖励',
      rules: [
        {
          actionDelay: 1500,
          matches: [
            '[text^="下载并体验"] < * +2 * > [text="放弃奖励"][id$="award_video_close_dialog_abandon_button"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22882796',
          activityIds: [
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
            'com.yxcorp.plugin.search.SearchActivity',
          ],
        },
      ],
    },
    {
      key: 1001,
      name: '🤳看广告-额外获取xx金币',
      desc: '点击额外获取xx金币(跳转app)',
      enable: false,
      rules: [
        {
          actionDelay: 1500,
          matches: [
            '[vid="ad_download_text"][text^="点击额外获取" || text^="i 打开并体验"][text$="金币"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23392746',
            'https://i.gkd.li/i/23476308',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23392869',
          activityIds: [
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
            'com.yxcorp.plugin.search.SearchActivity',
          ],
        },
      ],
    },
    {
      key: 1002,
      name: '🤳看广告-误入拼多多页-返回',
      desc: '点击返回',
      rules: [
        {
          matches: [
            '[vid="title_tv"][text="登录" || text="拼多多" || text="支付宝"] + [vid="left_btn"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23421971',
          activityIds: 'com.yxcorp.gifshow.ad.webview.AdYodaActivity',
        },
      ],
    },
    {
      key: 1003,
      name: '🤳看广告-误入xx下载页-返回键',
      desc: '按下返回键',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
          matches: ['[text^="下载" && text$="立得奖励"][visibleToUser=true]'],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23431442',
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
        },
      ],
    },
    {
      key: 11,
      name: '🤳任务页-自动看广告',
      desc: '任务列表-3.5秒点进去看广告',
      rules: [
        {
          actionCd: 10000,
          matchDelay: 3500,
          anyMatches: [
            '[text="看广告得金币"] < * + * > [text="领福利"][visibleToUser=true]',
            '[text="看广告得金币"] < * + [text="领福利"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22883404',
            'https://i.gkd.li/i/22882988',
            'https://i.gkd.li/i/22907324',
          ],
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
          ],
        },
      ],
    },
    {
      key: 1101,
      name: '🤳任务页-自动开宝箱',
      desc: '任务列表-开宝箱-进去看广告',
      rules: [
        {
          matchDelay: 500,
          actionMaximum: 3,
          resetMatch: 'match',
          anyMatches: [
            '[text^="点可领"][text$="金币"][visibleToUser=true]',
            '[text="开宝箱奖励已到账"] +4 [text^="去看广告得"][text$="金币"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/23427892',
            'https://i.gkd.li/i/23427912',
          ],
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '🤳看广告-退出弹窗-再看',
      desc: '再看一个',
      rules: [
        {
          matches:
            '[text^="再看一个"] +3 [text="领取奖励"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22661727',
            'https://i.gkd.li/i/22672886',
            'https://i.gkd.li/i/22673069',
          ],
          activityIds: [
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '🤳看广告-惊喜弹窗-x掉',
      desc: '下方 惊喜红包弹窗-x掉(❗误触)',
      enable: false,
      rules: [
        {
          actionMaximum: 1,
          matches: [
            '@ImageView < [desc="close_view"] <2 [desc="container_view"] <<3 [id="com.kuaishou.nebula.commercial_neo:id/award_video_card_container"]',
          ],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/23213280'],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23450320',
          activityIds: [
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '📡直播间-退出弹窗-退出',
      desc: '退出直播间',
      rules: [
        {
          matches: 'TextView[text^="退出"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22658742',
            'https://i.gkd.li/i/22781433',
            'https://i.gkd.li/i/22782772',
            'https://i.gkd.li/i/22984063',
            'https://i.gkd.li/i/22700047',
            'https://i.gkd.li/i/23210943',
          ],
          activityIds: [
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
            'com.kuaishou.live.core.basic.activity.LivePlayActivity',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '📡直播间-看完-返回键',
      desc: '直播记时结束->已领取(金币)->退出', // ❗若不生效,注意Animator缩放动画时长不能设为0
      rules: [
        {
          action: 'back',
          actionCd: 3000,
          matches: 'TextView[text="已领取"][vid="neo_count_down_text"]',
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/22705740'],
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
      ],
    },
    {
      key: 16,
      name: '📡直播间-中途结束-返回键',
      desc: '①返回键 ②弹窗放弃',
      rules: [
        {
          key: 1,
          action: 'back',
          actionCd: 15000,
          matches: ['[text="直播已结束"][visibleToUser=true]'],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23006131',
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
        {
          key: 2,
          matches: ['[text="换一个"] -2 [text="放弃奖励"][visibleToUser=true]'],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23421843',
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
      ],
    },
    {
      key: 17,
      name: '📡直播间-红包弹窗-x掉',
      desc: '①天降红包 ②团购红包 ③主播新人券 ④双11券',
      rules: [
        {
          key: 1,
          matches: [
            'FrameLayout[vid="krn_content_container"] >(4,5,6,7,8) @ImageView[width=104][height=104 || height=103][visibleToUser=true] < [index=parent.childCount.minus(1)]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22660173',
            'https://i.gkd.li/i/22699956',
            'https://i.gkd.li/i/22705915',
            'https://i.gkd.li/i/22781366',
            'https://i.gkd.li/i/23011158',
            'https://i.gkd.li/i/23141501',
            'https://i.gkd.li/i/23141694',
            'https://i.gkd.li/i/23143270',
            'https://i.gkd.li/i/23290583',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/22988215',
          activityIds: [
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
            'com.kuaishou.live.core.basic.activity.LivePlayActivity',
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '📡直播间-主播争霸赛-返回键',
      desc: '弹窗-返回键',
      enable: false,
      rules: [
        {
          action: 'back',
          actionCd: 2000,
          matches: [
            '[text^="助力主播登榜"]',
            '[text="黑马榜"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22982128',
          activityIds: [
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
            'com.kuaishou.live.core.basic.activity.LivePlayActivity',
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '📡直播间-关注弹窗-x',
      desc: '①x掉 ②返回键',
      activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
      rules: [
        {
          key: 1,
          matches:
            '[text="立即关注"] -3 [id$="anchor_close"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22659582',
        },
        {
          key: 2,
          action: 'back',
          actionCd: 2000,
          matches: '[text$="看了这么久，帮我点个关注吧！"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23300455',
        },
        {
          key: 3,
          action: 'back',
          actionCd: 2000,
          matches:
            '[id="com.kuaishou.nebula.live_audience_plugin:id/live_profile_bottom_bar_container"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23542497',
        },
      ],
    },
    {
      key: 20,
      name: '📡直播间-招工弹窗-x',
      desc: 'x掉',
      rules: [
        {
          matches: [
            '@ImageView[visibleToUser=true] < * - [text$="为您推荐优选职位"]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23211116',
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        },
      ],
    },
    {
      key: 21,
      name: '📡直播间-预约直播弹窗-x',
      desc: 'x掉',
      rules: [
        {
          matches: [
            '@ImageView[width=52][height=52] <<2 * <2 * <2 * < [vid="krn_content_container"]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23235749',
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        },
      ],
    },
    {
      key: 2101,
      name: '📡直播间-右侧边栏-关闭',
      desc: '关闭',
      rules: [
        {
          matches: [
            '[vid="photo_feed_side_bar_close_view"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23300668',
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        },
      ],
    },
    {
      key: 22,
      name: '📡直播间-清晰度-高清',
      desc: '设清晰度为 流畅or高清',
      rules: [
        {
          matches: [
            '[index=parent.childCount.minus(2)] > [text="流畅" || text="高清"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22660590',
            'https://i.gkd.li/i/22705855',
            'https://i.gkd.li/i/22705866',
          ],
          activityIds: [
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
            'com.kuaishou.live.core.basic.activity.LivePlayActivity',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '🦆养鸭-弹窗',
      desc: '①明天来喂鸭 ②继续喂养 ③饲料雨End ④抓鸭签到, ⑤抓鸭签到返回键',
      rules: [
        {
          key: 1,
          matches: [
            'Button[text="明天来喂鸭" || text="继续喂养" || text="愉快收下" || text^="领今日奖励"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22672386',
            'https://i.gkd.li/i/22691480',
            'https://i.gkd.li/i/22907925',
            'https://i.gkd.li/i/22783039',
            'https://i.gkd.li/i/23422233',
          ],
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
        {
          key: 4,
          action: 'back',
          actionCd: 3000,
          matches:
            'Button[text^="待领取" || text^="已领取"][visibleToUser=true]',
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22783122',
            'https://i.gkd.li/i/23141489',
            'https://i.gkd.li/i/23422249',
          ],
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 24,
      name: '🦆养鸭-今日签到弹窗',
      desc: '①立即签到 ②x掉',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          actionMaximum: 1,
          matches: [
            '[text="签到提醒"] < * - [text="立即签到"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22871644',
        },
        {
          key: 2,
          matches: [
            '[text^="明日签到" || text^="恭喜获得"] <<3 * - * < * - * > Image[width=76 || width=77][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22871789',
            'https://i.gkd.li/i/23427798',
            'https://i.gkd.li/i/23542661',
          ],
        },
      ],
    },
    {
      key: 25,
      name: '🦆养鸭-领饲料球',
      desc: '领饲料球',
      rules: [
        {
          matchDelay: 3000,
          actionMaximum: 1,
          matches: [
            '[text="可领取" || text="已结束"] - * > [text$="粒"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22883176',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 26,
      name: '🦆养鸭-自动喂鸭',
      desc: '6秒点一次喂鸭',
      enable: false,
      rules: [
        {
          actionMaximum: 120,
          matchDelay: 5000,
          actionCd: 6000,
          matches: [
            '[text="赚饲料"][visibleToUser=false]',
            '[text!="签到提醒"][text!="连签大奖"][text.length=4][visibleToUser=true]',
            'View[id="foodBottomIcon"] < * + [visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22908125',
            'https://i.gkd.li/i/23381066',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/22850836',
            'https://i.gkd.li/i/23433012', // 误触页(快手)
          ],
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 27,
      name: '🦆养鸭-赚饲料-任务',
      desc: '①领奖 ②去搜索or观看 ③误进商品页-返回',
      rules: [
        {
          key: 1,
          actionDelay: 2500,
          matches: [
            '[text$="3次" || text^="搜索并" || text="看精彩广告"] <<2 * + [text="领奖励" || text="去搜索" || text="去观看"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22850836',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
        {
          key: 2,
          matches: 'ImageView[id$="back_btn_trans"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22658642',
          activityIds: [
            'com.kuaishou.merchant.transaction.detail.detailv2.MerchantDetailV2Activity',
          ],
        },
      ],
    },
    {
      key: 28,
      name: '🦆养鸭-搜索-31秒返回',
      desc: '等31秒后点击返回',
      actionDelay: 31000,
      rules: [
        {
          matches: [
            'FrameLayout[vid="kem_activity_task_pendant"] >2 ImageView[vid="pendant_bg"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22850681',
          activityIds: 'com.yxcorp.plugin.search.SearchActivity',
        },
      ],
    },
    {
      key: 29,
      name: '🔍搜索页-自动点击搜索',
      desc: '1.5秒后点击搜索',
      actionMaximum: 1,
      actionDelay: 1500,
      actionCd: 4000,
      rules: [
        {
          matches: [
            '[text="搜索"][vid="right_button" || vid="right_tv"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22702438',
            'https://i.gkd.li/i/23381126',
          ],
          activityIds: 'com.yxcorp.plugin.search.SearchActivity',
        },
      ],
    },
    {
      key: 30,
      name: '🎮小游戏-退出弹窗-x掉',
      desc: '弹窗->点击 知道了',
      activityIds: [
        'com.kwai.frog.game.engine.adapter.engine.base.KRT11Activity',
        'com.kwai.frog.game.engine.adapter.engine.base.KRT12Activity',
      ],
      rules: [
        {
          key: 1,
          matches: 'TextView[text="知道了"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22864991',
            'https://i.gkd.li/i/22865094',
          ],
        },
        {
          key: 2,
          matches: '[text="以后再说"][visibleToUser=true]',
          fastQuery: true,
        },
      ],
    },
    {
      key: 31,
      name: '🎮小游戏-退出-返回',
      desc: '点击 < ',
      rules: [
        {
          matches: '[text="我的小游戏"] - * >3 ImageView[visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22865063',
          activityIds:
            'com.yxcorp.gifshow.minigame.sogame.home.SoGameNewListActivity',
        },
      ],
    },
    {
      key: 32,
      name: '🎮小游戏-获取用户资料弹窗-允许',
      desc: '点击允许',
      rules: [
        {
          matches: [
            '[vid="button_layout" || vid="bottom"] > [text="允许"][vid="confirm_btn" || vid="grant"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22865118',
            'https://i.gkd.li/i/22865162',
            'https://i.gkd.li/i/23381220',
          ],
          activityIds: 'com.yxcorp.login.authorization.AuthActivity',
        },
      ],
    },
    {
      key: 33,
      name: '去金币购-签到',
      desc: '点击今日签到',
      rules: [
        {
          matches:
            'TextView[text="今日签到"][index=parent.childCount.minus(1)][visibleToUser=true]',
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22865238',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23380995',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 34,
      name: '睡觉-领补贴',
      desc: '点击看广告领补贴',
      rules: [
        {
          matchDelay: 1000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            '[text$="领睡觉补贴" || text$="领起床补贴"][visibleToUser=true]',
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/23290616',
            'https://i.gkd.li/i/23290617',
          ],
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 35,
      name: '走路赚金币-领金币',
      desc: '点击领取xxx金币',
      rules: [
        {
          matchDelay: 1000,
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[text="今日步数"] < * <4 * + * >2 Button[text^="领取"][text$="金币"][visibleToUser=true]',
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23381371',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 36,
      name: '饭点-领补贴',
      desc: '①饭补 ②弹窗 ③待补签 ④左下角看广告',
      rules: [
        {
          actionCd: 5000,
          anyMatches: [
            '[text="看广告领饭补"][visibleToUser=true]',
            '[text="看视频最高可得"] +2 [text="金币"][visibleToUser=true]',
            '[text^="+" || text$="金币"] + [text$="待补签"][visibleToUser=true]',
            '[text="领金币"] <3 * + @TextView[text="看广告"] + Image',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23381525',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
  ],
});
