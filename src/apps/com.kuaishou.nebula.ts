import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 0,
      name: '📢说明',
      desc: '(点击查看详情) 目前在用的快极版本有两个: 🔸v13.2.10.9610 🔸v12.8.20.8680 ,如果你用其他版本的快极,估计有些规则不生效,如遇失效或误触请截取快照拿到github反馈',
      enable: false,
      rules: [],
    },
    {
      key: 1,
      name: '启动页-视频广告页-返回',
      desc: 'app跳转ks时出现(❗有误触)',
      enable: false,
      rules: [
        {
          actionMaximum: 1,
          matchTime: 3500,
          resetMatch: 'app',
          matches: 'ImageView[vid="left_btn"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22658635',
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        },
      ],
    },
    {
      key: 101,
      name: '启动页-365天打卡-返回键', // zfb新村跳转快极时出现
      desc: '重选商品(弹窗)-返回键',
      rules: [
        {
          action: 'back',
          actionCd: 2000,
          excludeMatches: '[text="任务中心"]',
          matches:
            '[text^="完成365天打卡" || text="重新选择商品"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23606935',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
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
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          ],
        },
      ],
    },
    {
      key: 401,
      name: '📺❗脚本刷视频-误入页面-返回键',
      desc: '仅在用脚本自动刷视频时打开,其余时间🈲用',
      enable: false,
      fastQuery: true,
      priorityTime: 5000,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 1,
          action: 'back',
          matches: [
            '[vid="profile_feed_title" || vid="share_panel" || vid="tab_text" && text*="评论" || vid="webView"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23777346', //视频页-她的作品(右侧边栏)
            'https://i.gkd.li/i/23777882', //视频页-分享(下方弹窗)
            'https://i.gkd.li/i/23777756', //视频页-评论区
            'https://i.gkd.li/i/22883404', //其他 webView (任务中心)
          ],
        },
        {
          key: 2,
          action: 'back',
          matches:
            '@SlidingPaneLayout[childCount=1] < [vid="home_activity_root"]',
          snapshotUrls: 'https://i.gkd.li/i/23778737', //视频页-左边工具栏
          excludeSnapshotUrls: 'https://i.gkd.li/i/23778837', //正常刷视频页  [childCount=2]
        },
        {
          key: 444, //进入非视频页,直接返回
          action: 'back',
          matches: '[id="android:id/content"][visibleToUser=true]',
          excludeActivityIds: 'com.yxcorp.gifshow.HomeActivity',
          activityIds: [],
        },
      ],
    },
    {
      key: 5,
      name: '任务页-弹窗-X掉',
      desc: '添加组件,去绑卡,邀好友 弹窗',
      activityIds: [
        'com.yxcorp.gifshow.HomeActivity', // A
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
      ],
      rules: [
        {
          key: 1,
          excludeMatches: '[text^="去看广告得"] -4 [text="开宝箱奖励已到账"]',
          matches: [
            '[text="任务中心"]',
            '[text=""][clickable=false][childCount=1] > Image[width>=76 && width<=80][height>=74 && height<=80][clickable=true]',
          ],
          // fastQuery: false,  // false为默认,不必写
          snapshotUrls: [
            'https://i.gkd.li/i/23468984', //去绑卡 A
            'https://i.gkd.li/i/22672607', //每日打卡 A
            'https://i.gkd.li/i/23574778', //瓜分百亿金币 A
            'https://i.gkd.li/i/23749900', //开宝箱奖励已到账-看视频 A
            'https://i.gkd.li/i/22907854', //限时邀好友 B
            'https://i.gkd.li/i/23300823', //去分享视频 B
            'https://i.gkd.li/i/22671674', //添加组件 C
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23427912',
        },
        {
          key: 2,
          matches:
            '[text^="任务完成奖励"] -2 [width>=76 && width<=87][height>=74 && height<=88][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23588323', //看视频赚金币 领奖弹窗
            // 'https://i.gkd.li/i/23606147', //快手的
          ],
        },
      ],
    },
    {
      key: 501,
      name: '任务页-刷视频赚金币-领取',
      desc: '有待领金币-立即领取',
      enable: false,
      rules: [
        {
          matchDelay: 2500,
          matches:
            '[text^="待领"][text$="金币"] +2 TextView[text="立即领取"][index=2]',
          snapshotUrls: 'https://i.gkd.li/i/23907888',
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity', // A
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
          ],
        },
      ],
    },
    {
      key: 502,
      name: '❗网络错误-点击重试',
      desc: '任务页加载出错',
      rules: [
        {
          actionCd: 3500,
          matches: '[vid="retry_btn"][text="点击重试"][clickable=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23907716',
          activityIds:
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
        },
      ],
    },
    {
      key: 8,
      name: '📘小说-领奖',
      desc: '①领奖 ②X掉弹窗',
      fastQuery: true,
      activityIds: 'com.kuaishou.novel.home.NovelHomeActivity',
      rules: [
        {
          key: 1,
          actionDelay: 500,
          matches:
            '[text="立即领取"][id$="task_item_button"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22658578',
        },
        {
          key: 2,
          matches:
            '[text="恭喜你获得"] - [vid="dialog_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22672261',
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
          forcedTime: 31000, // 防睡死不触发(test)
          matches: [
            '@[id$="video_countdown_end_icon"] - [text^="已成功"][visibleToUser=true]',
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
          excludeMatches: '[vid="ad_download_text"][text^="i 下载"]',
          anyMatches: [
            '[vid="ad_download_text"][text^="点击额外获取" || text^="i 打开并体验"][text$="金币"][visibleToUser=true]',
            '[text^="打开并体验" && text$="额外得" || text="点击额外获取"]', //13.2.10.9610
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23392746', //12.8.20.8680
            'https://i.gkd.li/i/23476308', //12.8.20.8680
            'https://i.gkd.li/i/23588212', //13.2.10.9610
            'https://i.gkd.li/i/23654193', //13.2.10.9610
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
      name: '🤳看广告-误入xx页-返回',
      desc: '点击返回',
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.ad.webview.AdYodaActivity',
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      ],
      rules: [
        {
          key: 1,
          matchDelay: 3500,
          matches: [
            '[vid="title_tv"][text="登录" || text="拼多多" || text="支付宝" || text="正在打开..."]',
            '[vid="left_btn"][clickable=true][visibleToUser=true]', //返回
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23421971',
            'https://i.gkd.li/i/23764542',
          ],
        },
        {
          key: 2, //等待时间过长(9秒), 直接返回
          matchDelay: 3500,
          actionDelay: 9000,
          matches: '[vid="left_btn"][clickable=true][visibleToUser=true]', //返回
          snapshotUrls: 'https://i.gkd.li/i/23908857',
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
          matches:
            '@[text="看广告得金币"][left=165][visibleToUser=true] +3 [text^="单日最高"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22883404',
            'https://i.gkd.li/i/22882988',
            'https://i.gkd.li/i/22907324',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23585391',
            'https://i.gkd.li/i/23642264', //未加载完成?
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
      desc: '①开宝箱 ②(弹窗)去看广告',
      activityIds: [
        'com.yxcorp.gifshow.HomeActivity',
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      ],
      rules: [
        {
          key: 1,
          matches: '[text^="点可领"][text$="金币"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23427892',
        },
        {
          key: 2,
          // preKeys: [1],
          // matchDelay: 3500,
          matches:
            '[text^="去看广告得"][text$="金币"][focusable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23427912',
        },
      ],
    },
    {
      key: 1102,
      name: '🤳看广告-点1次静音',
      desc: 'app内切换界面后重置',
      enable: false,
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[id="com.kuaishou.nebula.commercial_neo:id/award_video_operate_audio_btn"][clickable=true][focusable=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23213280',
          activityIds: [
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.plugin.search.SearchActivity',
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
      desc: '下方 惊喜红包弹窗-x掉',
      enable: false,
      rules: [
        {
          actionMaximum: 1,
          excludeMatches:
            '([vid="ad_download_progress_click_progress"]) || ([text^="已成功"])',
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
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
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
          key: 1,
          action: 'back',
          actionCd: 3000,
          matches: 'TextView[text="已领取"][vid="neo_count_down_text"]',
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/22705740'],
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
        {
          key: 2, // 去金币购 看的3次直播
          action: 'none',
          matches: '[vid="pendant_task_status"][text$="00:01"]', // 倒计时01秒
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23750524',
            'https://i.gkd.li/i/23823031',
          ],
          activityIds: [
            'com.kuaishou.live.core.basic.activity.LivePlayActivity',
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
          ],
        },
        {
          key: 3,
          preKeys: [2],
          actionDelay: 1500,
          action: 'back',
          matches: '[vid="live_play_root_container"]',
          fastQuery: true,
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
          snapshotUrls: 'https://i.gkd.li/i/23006131',
        },
        {
          key: 2,
          matches: ['[text="换一个"] -2 [text="放弃奖励"][visibleToUser=true]'],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23421843',
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
            'FrameLayout[vid="krn_content_container"] >(4,5,6,7,8,9) @ImageView[width=104][height=104 || height=103][visibleToUser=true] < [index=parent.childCount.minus(1)]',
          ],
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
            'https://i.gkd.li/i/23906987', // >9
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/22988215', //  < [index=parent.childCount.minus(1)]
        },
        {
          key: 2,
          matches:
            '[vid="red_packet_container_view"] +2 ImageView[vid="close_view"][clickable=true][focusable=true]',
          // snapshotUrls: 'https://i.gkd.li/i/23654976', // (参考快手)口令红包 未中奖
        },
      ],
    },
    {
      key: 18,
      name: '📡直播间-主播争霸赛-返回键',
      desc: '弹窗-返回键',
      enable: false,
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
          action: 'back',
          actionCd: 2000,
          matches: [
            '[text^="助力主播登榜"]',
            '[text="黑马榜"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22982128',
        },
      ],
    },
    {
      key: 19,
      name: '📡直播间-关注弹窗-x',
      desc: '①x掉 ②返回键',
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
          matches:
            '@ImageView[visibleToUser=true] < * - [text$="为您推荐优选职位"]',
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
          matches:
            '[vid="photo_feed_side_bar_close_view"][clickable=true][focusable=true][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23300668',
        },
      ],
    },
    {
      key: 22,
      name: '📡直播间-清晰度-高清',
      desc: '设清晰度为 流畅or高清',
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
          actionMaximum: 1,
          resetMatch: 'match',
          excludeMatches:
            '@[clickable=true][focusable=true] > [text="流畅" || text="高清"]', //已经是'高清'
          matches:
            '@[clickable=true][focusable=true] > [text="清晰度" || text="自动"]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23607208',
            'https://i.gkd.li/i/23642513',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23908016',
        },
        {
          key: 2,
          preKeys: [1],
          matches:
            '[index=parent.childCount.minus(2)] > [text="流畅" || text="高清"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22660590',
            'https://i.gkd.li/i/22705855',
            'https://i.gkd.li/i/22705866',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '🦆养鸭-弹窗',
      desc: '①明天来喂鸭 ②继续喂养 ③饲料雨End ④抓鸭签到, ⑤抓鸭签到返回键',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          matches: [
            'Button[text="明天来喂鸭" || text="继续喂养" || text="愉快收下" || text^="领今日奖励"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22672386',
            'https://i.gkd.li/i/22691480',
            'https://i.gkd.li/i/22907925',
            'https://i.gkd.li/i/22783039',
            'https://i.gkd.li/i/23422233',
          ],
        },
        {
          key: 4,
          action: 'back',
          matches:
            'Button[text^="待领取" || text^="已领取"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22783122',
            'https://i.gkd.li/i/23141489',
            'https://i.gkd.li/i/23422249',
          ],
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
          matches:
            '[text="签到提醒"] < * - [text="立即签到"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22871644',
        },
        {
          key: 2,
          preKeys: [1],
          matches: [
            'Image[width=76 || width=77][height=77 || height=78][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22871789',
            'https://i.gkd.li/i/23427798',
            'https://i.gkd.li/i/23542661',
            'https://i.gkd.li/i/23642766',
          ],
        },
      ],
    },
    {
      key: 25,
      name: '🦆养鸭-领饲料球',
      desc: '①领饲料球 ②x掉',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          matchDelay: 3000,
          actionMaximum: 1,
          resetMatch: 'match',
          excludeMatches:
            '[text="赚饲料" || text="签到提醒"][visibleToUser=true]',
          matches:
            '[text="可领取" || text="已结束"] - * >(1,2) [text$="粒"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22883176',
            'https://i.gkd.li/i/23750724',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23695360',
        },
        {
          key: 2,
          preKeys: [1], // 必须限制,否则误触
          matches: 'Image[text=""][width=77 || height=77][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23567580',
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
          actionCd: 6000,
          excludeMatches:
            '[text="赚饲料" || text="签到提醒"][visibleToUser=true]',
          matches: 'View[id="foodBottomIcon"] < * + [visibleToUser=true]',
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
      desc: '①领奖 ②去搜索or观看',
      rules: [
        {
          key: 1,
          matchDelay: 500,
          forcedTime: 5000,
          matches: [
            '[text$="3次" || text^="搜索并" || text="看精彩广告"] <<2 * + [text="领奖励" || text="去搜索" || text="去观看"][left>781][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23558181',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23558030', // [left=781]
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
        {
          key: 4, // ④误进直播间-返回键
          preKeys: [1],
          action: 'back',
          matches:
            '[id="com.kuaishou.nebula.live_audience_plugin:id/live_slide_container"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23561481',
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
          snapshotUrls: [
            'https://i.gkd.li/i/23689726',
            'https://i.gkd.li/i/23748508',
          ],
        },
        {
          key: 2,
          preKeys: [1],
          actionDelay: 1500,
          action: 'back',
          matches:
            '[vid="kem_activity_task_pendant"] >2 [vid="pendant_bg"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22850681',
        },
        {
          key: 3,
          preKeys: [2],
          action: 'back',
          matchDelay: 200,
          matches: '[text="搜索"][vid="right_button" || vid="right_tv"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22702438',
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
      name: '去金币购-签到💰',
      desc: '点击今日签到',
      rules: [
        {
          matches:
            'TextView[text="今日签到"][index=parent.childCount.minus(1)][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22865238',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23380995',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 7,
      name: '逛街赚金币-自动领💰,退',
      desc: '①领金币(需冻结ks) ③返回键 ④弹窗-放弃',
      activityIds: 'com.yxcorp.gifshow.ad.rn.AdKwaiRnActivity',
      fastQuery: true,
      rules: [
        {
          key: 1,
          actionDelay: 1500,
          matches:
            '@[text^="+"][text$="0"] + [text="打开快手"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23582148',
        },
        {
          key: 2,
          preKeys: [1], // 先点key1,再点key2 就会领两样金币
          matches:
            '@[text^="+"][text$="0"] + [text="点击领取"][visibleToUser=true]',
          // snapshotUrls: 'https://i.gkd.li/i/23582148',
        },
        {
          key: 3,
          preKeys: [2],
          action: 'back',
          excludeMatches: '@[text!="+10"] + [text="浏览领取"]', // 若是10金币,直接退出
          matches: '[text="明天签到"]',
          snapshotUrls: 'https://i.gkd.li/i/23582306',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23689548', // 120金币
        },
        {
          key: 4,
          matches:
            '[text="继续浏览可获得奖励"] +3 [text="放弃"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22658647',
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
          snapshotUrls: [
            'https://i.gkd.li/i/23290616',
            'https://i.gkd.li/i/23290617',
          ],
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 3501,
      name: '浏览ks商城30s后-领金币',
      desc: '点击去领取',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 1,
          // excludeMatches: '[text="任务中心"]',
          matches: [
            '[vid="textView"][desc="商城"][visibleToUser=true]',
            '[text="去领取"][clickable=false][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23655591',
            'https://i.gkd.li/i/23655619',
            'https://i.gkd.li/i/23749982', //含 [text="任务中心"]
          ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/23658912',
        },
        {
          key: 2,
          preKeys: [1],
          matches: [
            '[text="已完成"]',
            'ViewGroup > ImageView[width=94][height=93 || height=94][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23655648',
            'https://i.gkd.li/i/23689450',
          ],
        },
      ],
    },
    {
      key: 35,
      name: '🚶‍♂️走路赚金币-领金币',
      desc: '点击领取xxx金币',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          matchDelay: 1000,
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[text="今日步数"] < * <4 * + * >2 Button[text^="领取"][text$="金币"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23381371',
        },
        {
          key: 2, // 弹窗,点击开心收下(坐标)
          preKeys: [1],
          matchDelay: 1000,
          position: {
            left: 'width * 0.4945',
            top: 'width * 1.3142',
          },
          matches: '[text="今日步数"]',
          snapshotUrls: 'https://i.gkd.li/i/23907270',
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
          snapshotUrls: 'https://i.gkd.li/i/23381525',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
  ],
});
