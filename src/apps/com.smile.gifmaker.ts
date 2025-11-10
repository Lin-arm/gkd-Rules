import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
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
          snapshotUrls: 'https://i.gkd.li/i/23386995',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
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
          snapshotUrls: 'https://i.gkd.li/i/23382590',
          activityIds: 'com.yxcorp.gifshow.ad.rn.AdKwaiRnActivity',
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
            '[text^="已成功"] + [id="com.smile.gifmaker.commercial_neo:id/video_countdown_end_icon"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/23382541'],
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
          snapshotUrls: 'https://i.gkd.li/i/23387069',
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
            '[vid="ad_download_text"][text^="点击额外获取"][text$="金币"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/23394927'],
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
          snapshotUrls: [
            'https://i.gkd.li/i/23439913',
            'https://i.gkd.li/i/23439943',
          ],
          activityIds: 'com.yxcorp.gifshow.ad.webview.AdYodaActivity',
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
          snapshotUrls: 'https://i.gkd.li/i/23420409',
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
          actionCd: 10000,
          anyMatches: [
            '[text^="点可领"][text$="金币"][visibleToUser=true]',
            '[text="开宝箱奖励已到账"] +4 [text^="去看广告得"][text$="金币"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: ['https://i.gkd.li/i/23420409'],
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
          snapshotUrls: ['https://i.gkd.li/i/23382561'],
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
          snapshotUrls: ['https://i.gkd.li/i/23395007'],
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
          snapshotUrls: ['https://i.gkd.li/i/23386908'],
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
          matches: [
            'FrameLayout[vid="krn_content_container"] >(4,5,6,7,8) @ImageView[width=104][height=104 || height=103][visibleToUser=true] < [index=parent.childCount.minus(1)]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/23450509',
            'https://i.gkd.li/i/23450530',
            // 已排除误触(参考快极) https://i.gkd.li/i/22988215
          ],
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
      key: 19,
      name: '📡直播间-关注弹窗-x',
      desc: '①x掉 ②返回键',
      rules: [
        {
          key: 1,
          matches: [
            '[text="立即关注"] -3 [id$="anchor_close"][visibleToUser=true]',
          ],
          fastQuery: true,
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        },
        {
          key: 2,
          action: 'back',
          actionCd: 2000,
          matches: [
            '[text$="看了这么久，帮我点个关注吧！"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23383026',
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
          snapshotUrls: 'https://i.gkd.li/i/23382944',
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
          snapshotUrls: ['https://i.gkd.li/i/23383071'],
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
      activityIds: ['com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity'],
      rules: [
        {
          key: 1,
          matches: [
            'Button[text="明天来喂鸭" || text="继续喂养" || text="愉快收下" || text="领今日奖励"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23419216',
        },
        {
          key: 4,
          action: 'back',
          actionCd: 3000,
          matches: 'Button[text="待领取" || text="已领取"][visibleToUser=true]',
          fastQuery: false,
        },
      ],
    },
    {
      key: 24,
      name: '🦆养鸭-今日签到弹窗',
      desc: '①立即签到 ②x掉',
      rules: [
        {
          key: 1,
          actionMaximum: 1,
          matches: [
            '[text="签到提醒"] < * - [text="立即签到"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23433226',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
        {
          key: 2,
          matches: [
            '[text^="明日签到"] <<3 * - * < * - * > Image[width=76 || width=77][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23433012',
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
            'https://i.gkd.li/i/23419014',
            // 误触页2 https://i.gkd.li/i/23433012
          ],
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
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
          snapshotUrls: 'https://i.gkd.li/i/23419424',
          activityIds: 'com.yxcorp.plugin.search.SearchActivity',
        },
      ],
    },
    {
      key: 30,
      name: '🎮小游戏-退出弹窗-x掉',
      desc: '弹窗->点击 ①知道了 ②以后再说',
      rules: [
        {
          anyMatches: [
            'TextView[text="知道了"][visibleToUser=true]',
            '[text="以后再说"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23382865',
            'https://i.gkd.li/i/23419122',
          ],
          activityIds: [
            'com.kwai.frog.game.engine.adapter.engine.base.KRT11Activity',
            'com.kwai.frog.game.engine.adapter.engine.base.KRT12Activity',
          ],
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
          snapshotUrls: ['https://i.gkd.li/i/23382908'],
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
          snapshotUrls: [
            'https://i.gkd.li/i/23420512',
            // 参考快极误触页 https://i.gkd.li/i/23380995
          ],
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
          snapshotUrls: 'https://i.gkd.li/i/23420482',
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
          snapshotUrls: 'https://i.gkd.li/i/23382648',
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
          snapshotUrls: [
            'https://i.gkd.li/i/23382637',
            'https://i.gkd.li/i/23382759',
          ],
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
  ],
});
