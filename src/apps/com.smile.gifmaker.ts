import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: 0,
      name: '📢说明',
      desc: '(点击查看详情) 目前在用的快手版本: 🔸v12.10.10.39116 ,大部分规则都是从`快手极速版`那里搬过来的,如遇失效或误触请截取快照拿到github反馈',
      enable: false,
      rules: [],
    },
    {
      key: 4,
      name: '📺视频页-长按直播or广告-不感兴趣',
      desc: '点击不感兴趣',
      rules: [
        {
          actionCd: 2000,
          matchDelay: 1700,
          matches: '[text^="不感兴趣" && vid="item_title"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23386995',
            'https://i.gkd.li/i/23567782',
          ],
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '任务页-弹窗-X掉',
      desc: '添加组件,去绑卡,邀好友,看视频 弹窗',
      activityIds: [
        'com.yxcorp.gifshow.HomeActivity', // A
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
      ],
      rules: [
        {
          key: 1,
          excludeMatches: '[text="开宝箱奖励已到账"]',
          matches: [
            '[text="任务中心"]',
            '[text=""][clickable=false][childCount=1] > Image[width>=76 && width<=80][height>=74 && height<=80][clickable=true]',
          ],
          // snapshotUrls: [                  //参考快极的,注释掉
          //   'https://i.gkd.li/i/23468984', //去绑卡 A
          //   'https://i.gkd.li/i/22672607', //每日打卡 A
          //   'https://i.gkd.li/i/23574778', //瓜分百亿金币 A
          //   'https://i.gkd.li/i/22907854', //限时邀好友 B
          //   'https://i.gkd.li/i/23300823', //去分享视频 B
          //   'https://i.gkd.li/i/22671674', //添加组件 C
          // ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/23427912',
        },
        {
          key: 2,
          matches:
            '[text^="任务完成奖励"] -2 [width>=76 && width<=87][height>=74 && height<=88][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23606147', //看视频赚金币 领奖弹窗
        },
        {
          key: 3,
          matches: [
            '[text="任务中心"]',
            '[text=""][width=118][height=118][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23606310', //继续看视频赚更多(弹窗)
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
            '@[id$="video_countdown_end_icon"] - [text^="已成功"][visibleToUser=true]',
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
      activityIds: 'com.yxcorp.gifshow.ad.webview.AdYodaActivity',
      rules: [
        {
          key: 1,
          matches: [
            '[vid="title_tv"][text="登录" || text="拼多多" || text="支付宝" || text="渠道五"] + [vid="left_btn"][clickable=true][focusable=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23439913',
            'https://i.gkd.li/i/23439943',
            'https://i.gkd.li/i/23748402', //渠道五
          ],
        },
        {
          key: 2,
          matches: [
            '@[text="应用介绍" || text="快手极速版"] -n * <<4 [vid="webView"]',
            '[vid="left_btn"][clickable=true][focusable=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23689657',
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
      fastQuery: true,
      rules: [
        {
          key: 1,
          action: 'back',
          actionCd: 3000,
          matches: 'TextView[text="已领取"][vid="neo_count_down_text"]',
          snapshotUrls: ['https://i.gkd.li/i/23386908'],
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
        {
          key: 2, // 去金币购 看的3次直播
          action: 'none',
          matches: '[vid="pendant_task_status"][text$="00:01"]', // 倒计时01秒
          snapshotUrls: 'https://i.gkd.li/i/23790334',
          activityIds: [
            'com.kuaishou.live.core.basic.activity.LivePlayActivity',
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
          ],
        },
        {
          key: 3,
          preKeys: [2],
          actionDelay: 1100,
          action: 'back',
          matches: '[vid="live_play_root_container"]',
          activityIds: [
            'com.kuaishou.live.core.basic.activity.LivePlayActivity',
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '📡直播间-中途结束-返回键',
      desc: '①返回键 ②弹窗放弃',
      activityIds: [
        'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
        'com.kuaishou.live.core.basic.activity.LivePlayActivity',
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
      ],
      rules: [
        {
          key: 1,
          action: 'back',
          actionCd: 15000,
          matches: ['[text="直播已结束"][visibleToUser=true]'],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23748189',
        },
        {
          key: 2,
          matches: ['[text="换一个"] -2 [text="放弃奖励"][visibleToUser=true]'],
          fastQuery: true,
        },
      ],
    },
    {
      key: 17,
      name: '📡直播间-红包弹窗-x掉',
      desc: '①天降红包 ②团购红包 ③主播新人券 ④双11券',
      activityIds: [
        'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        'com.kuaishou.live.core.basic.activity.LivePlayActivity',
        'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
      ],
      rules: [
        {
          key: 1,
          matches: [
            'FrameLayout[vid="krn_content_container"] >(4,5,6,7,8) @ImageView[width=104][height=104 || height=103][visibleToUser=true] < [index=parent.childCount.minus(1)]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23450509',
            'https://i.gkd.li/i/23450530',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/22988215', // 误触(参考快极)
        },
        {
          key: 2,
          matches:
            '[vid="red_packet_container_view"] +2 ImageView[vid="close_view"][clickable=true][focusable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23654976', // 口令红包 未中奖
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
      key: 20,
      name: '📡直播间-招工弹窗-x',
      desc: 'x掉',
      rules: [
        {
          matches:
            '@ImageView[visibleToUser=true] < * - [text$="为您推荐优选职位"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23567767',
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
          snapshotUrls: 'https://i.gkd.li/i/23419216',
        },
        {
          key: 4,
          action: 'back',
          actionCd: 3000,
          matches:
            'Button[text="待领取" || text="已领取"][height!=64][visibleToUser=true]',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23452401', // 误触页
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
          snapshotUrls: 'https://i.gkd.li/i/23433226',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
        {
          key: 2,
          matches: [
            '[text^="明日签到"] <<3 * - * < * - * > Image[width=76 || width=77][visibleToUser=true]',
          ],
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
          matchDelay: 4000,
          actionCd: 6000,
          excludeMatches:
            '[text="赚饲料" || text="签到提醒"][visibleToUser=true]',
          matches: 'View[id="foodBottomIcon"] < * + [visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23419014',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23433012', // 误触页2
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 27,
      name: '🦆养鸭-赚饲料-任务',
      desc: '①领奖 ②去搜索or观看',
      rules: [
        {
          key: 1,
          actionDelay: 500,
          matches: [
            '[text$="3次" || text^="搜索并" || text="看精彩广告"] <<2 * + [text="领奖励" || text="去搜索" || text="去观看"][left>782][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23452441',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23563084', // [left=782]
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
        {
          key: 3, // ③误进商品页-返回
          matches: 'ImageView[id$="back_btn_trans"][visibleToUser=true]',
          fastQuery: true,
          activityIds:
            'com.kuaishou.merchant.transaction.detail.detailv2.MerchantDetailV2Activity',
        },
        {
          key: 4, // ④误进直播间-关闭
          preKeys: [1],
          matches:
            '[id="com.kuaishou.nebula.live_audience_plugin:id/live_close_place_holder"]',
          fastQuery: true,
          activityIds:
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
        },
      ],
    },
    {
      key: 28,
      name: '🔍搜索-倒计时结束-返回x2',
      desc: '按返回键2次',
      activityIds: 'com.yxcorp.plugin.search.SearchActivity',
      rules: [
        {
          key: 1,
          action: 'none',
          matches: '[vid="pendant_task_status"][text$=":01"]', // 倒计时01秒
          fastQuery: true,
          // snapshotUrls: 'https://i.gkd.li/i/23689726',  // 参考快极
        },
        {
          key: 2,
          preKeys: [1],
          actionDelay: 1500,
          action: 'back',
          matches:
            '[vid="kem_activity_task_pendant"] >2 [vid="pendant_bg"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23452718',
        },
        {
          key: 3,
          preKeys: [2],
          action: 'back',
          matchDelay: 200,
          matches: '[text="搜索"][vid="right_button" || vid="right_tv"]',
          fastQuery: true,
          // snapshotUrls: 'https://i.gkd.li/i/22702438',
        },
      ],
    },
    {
      key: 29,
      name: '🔍搜索页-自动点击搜索',
      desc: '1.5秒后点击搜索',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          actionDelay: 1500,
          actionCd: 4000,
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
      name: '去金币购-签到💰',
      desc: '点击今日签到',
      rules: [
        {
          matches:
            'TextView[text="今日签到"][index=parent.childCount.minus(1)][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23420512',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23380995', // 参考快极误触页
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 7,
      name: '逛街赚金币-自动领💰,退',
      desc: '①领金币 ③返回键 ④弹窗-放弃',
      activityIds: 'com.yxcorp.gifshow.ad.rn.AdKwaiRnActivity',
      rules: [
        {
          key: 1,
          matches:
            '@[text^="+"][text$="0"] + [text="打开快手"][visibleToUser=true]',
          fastQuery: true,
          // snapshotUrls: 'https://i.gkd.li/i/23582148',  //参考快极
        },
        {
          key: 2,
          preKeys: [1], // 先点key1,再点key2 就会领两样金币
          matches:
            '@[text^="+"][text$="0"] + [text="点击领取"][visibleToUser=true]',
          fastQuery: true,
        },
        {
          key: 3,
          action: 'back',
          excludeMatches: '@[text!="+10"] + [text="浏览领取"]', // 若是10金币,直接退出
          matches: '[text="明天签到"]',
          fastQuery: true,
          // snapshotUrls: 'https://i.gkd.li/i/23582306',
        },
        {
          key: 4,
          matches:
            '[text="继续浏览可获得奖励"] +3 [text="放弃"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23382590',
        },
      ],
    },
    {
      key: 34,
      name: '💤睡觉-领补贴',
      desc: '点击看广告领补贴',
      rules: [
        {
          matchDelay: 1000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            '[text$="领睡觉补贴" || text$="领起床补贴"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23420482',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 35,
      name: '🚶‍♂️走路赚金币-领金币',
      desc: '点击领取xxx金币',
      rules: [
        {
          matchDelay: 1000,
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[text="今日步数"] < * <4 * + * >2 Button[text^="领取"][text$="金币"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23382648',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 36,
      name: '🍚饭点-领补贴',
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
