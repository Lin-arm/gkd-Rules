import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 0,
      name: '📢说明',
      desc: '(点击查看详情) 目前在用的快极版本有两个: 🔸v13.2.10.9610 🔸v12.8.20.8680 ,如果你用其他版本的快极,估计有些规则不生效,如遇失效或误触请截取快照拿到github反馈. 🟢相关脚本已在自动精灵app上传,请到脚本市场搜`🦜快极_自动刷视频`',
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
      key: 2,
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
      key: 3,
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
      key: 4,
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
      key: 5,
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
      key: 6,
      name: '🦜脚本刷视频-误入页面-返回键', //保持在刷视频页
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
      key: 7,
      name: '🦜脚本刷广告-进任务中心',
      desc: '仅在用脚本自动看广告时打开,其余时间🈲用',
      enable: false,
      fastQuery: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 1,
          matches: '[vid="redFloat"][clickable=true]', //视频页-点击红包浮窗 (配合脚本重启快极后用)
          snapshotUrls: 'https://i.gkd.li/i/23989148',
        },
        {
          key: 2,
          matches: [
            '[vid="nasa_groot_view_pager"]',
            '[id="android:id/content"] >5 ImageView + ViewGroup[width>120 && width<140][height>120 && height<140]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24164538',
            'https://i.gkd.li/i/24194816',
          ],
        },

        // 以下为自动看广告时,误入其他页面后用的返回键
        {
          key: 11,
          action: 'back',
          matches: '[text="推荐小说"][id$="book_module_title"]',
          snapshotUrls: 'https://i.gkd.li/i/22658578', //小说
          activityIds: 'com.kuaishou.novel.home.NovelHomeActivity',
        },
        {
          key: 12,
          action: 'back',
          matches: '[text="赚饲料"]',
          fastQuery: false, //这条子规则内禁用快查询,否则真机不生效
          snapshotUrls: 'https://i.gkd.li/i/22908125', //养鸭
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
        {
          key: 13,
          action: 'back',
          matches: '[vid="tab_text"][text^="作品"]',
          snapshotUrls: 'https://i.gkd.li/i/24336755', //直播-用户主页
          activityIds:
            'com.yxcorp.gifshow.profile.activity.UserProfileActivity',
        },
        {
          key: 14,
          action: 'back',
          matches: '[text="现金明细"]',
          snapshotUrls: 'https://i.gkd.li/i/24337097', //我的收益页
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
        {
          key: 15,
          action: 'back',
          matches: 'WebView[text="快手App邀请好友"]',
          snapshotUrls: 'https://i.gkd.li/i/24431766', //邀请好友
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 8,
      name: '任务页-弹窗-X掉',
      desc: '组件,绑卡,邀好友,瓜分,...',
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
        {
          key: 3,
          matches: [
            '[childCount=1] > ImageView[width>95 && width<106][height>95 && height<106][top>300][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24352727', //A 2025年度回忆
            'https://i.gkd.li/i/24352736', //A h5回测dtk
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24357473', //视频页 top>300
        },
      ],
    },
    {
      key: 9,
      name: '任务页-刷视频赚金币-领取',
      desc: '有待领金币-立即领取',
      enable: false,
      rules: [
        {
          actionMaximum: 3,
          resetMatch: 'match',
          matchDelay: 2500,
          anyMatches: [
            '[text^="待领"][text$="金币"] +2 TextView[text="立即领取"][index=2]',
            '[text^="待领"][text$="金币立即领取"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23907888',
            'https://i.gkd.li/i/23979731',
          ],
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity', // A
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
          ],
        },
      ],
    },
    {
      key: 10,
      name: '❗网络错误-点击重试',
      desc: '任务页加载出错',
      rules: [
        {
          actionCd: 3500,
          matches:
            '[vid="retry_btn" && text="点击重试" || text^="点我刷新"][clickable=true]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/24195125',
            'https://i.gkd.li/i/23907716',
            'https://i.gkd.li/i/24337119', //任务页-列表空白-点我刷新
          ],
          activityIds: [
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '📘小说-领奖',
      desc: '①领奖 ②X掉弹窗',
      fastQuery: true,
      activityIds: 'com.kuaishou.novel.home.NovelHomeActivity',
      rules: [
        {
          key: 1,
          actionDelay: 700,
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
      key: 12,
      name: '🤳看广告-已看完-退出',
      desc: '已成功领取奖励',
      activityIds: [
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
        'com.yxcorp.plugin.search.SearchActivity',
      ],
      rules: [
        {
          key: 1,
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
        },
        {
          key: 2,
          matches: [
            '[vid="ad_download_text"][text="立即下载"]',
            '[id="com.kuaishou.nebula.commercial_neo:id/video_close_icon"][clickable=true][focusable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24279152',
        },
      ],
    },
    {
      key: 13,
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
      key: 14,
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
      key: 15,
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
        {
          key: 3,
          name: 'xx下载页-返回键',
          action: 'back',
          actionDelay: 1000,
          matches:
            '[text^="下载" && text$="立得奖励" || text="快影"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23431442',
            'https://i.gkd.li/i/24352704', //快影
          ],
          activityIds: ['com.kwai.kds.krn.api.page.KwaiRnActivity'],
        },
      ],
    },
    {
      key: 17,
      name: '🤳看广告-自动看广告',
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
      key: 18,
      name: '🤳看广告-自动开宝箱',
      desc: '①开宝箱 ②(弹窗)去看广告',
      activityIds: [
        'com.yxcorp.gifshow.HomeActivity',
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      ],
      rules: [
        {
          key: 1,
          name: '①开宝箱',
          matches: '[text^="点可领"][text$="金币"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23427892',
        },
        {
          key: 2,
          name: '②(弹窗)去看广告',
          // preKeys: [1],
          // matchDelay: 3500,
          matches:
            '[text^="去看广告得"][text$="金币"][focusable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23427912',
        },
      ],
    },
    {
      key: 19,
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
      key: 20,
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
      key: 21,
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
      key: 22,
      name: '📡直播间-退出弹窗-退出',
      desc: '退出直播间',
      fastQuery: true,
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
          matches: 'TextView[text^="退出"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22658742',
            'https://i.gkd.li/i/22781433',
            'https://i.gkd.li/i/22782772',
            'https://i.gkd.li/i/22984063',
            'https://i.gkd.li/i/22700047',
            'https://i.gkd.li/i/23210943',
          ],
        },
        {
          key: 2,
          name: '②直播中途结束-返回键',
          action: 'back',
          actionCd: 15000,
          matches:
            '[text="直播已结束" || text^="直播涉及违规"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23006131',
            'https://i.gkd.li/i/24337020', //违规被关
          ],
        },
        {
          key: 3,
          name: '③直播中途结束-弹窗放弃',
          matches: '[text="换一个"] -2 [text="放弃奖励"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23421843',
        },
      ],
    },
    {
      key: 23,
      name: '📡直播间-看完-返回键',
      desc: '直播记时结束->已领取(金币)->退出', // ❗若不生效,注意Animator缩放动画时长不能设为0
      fastQuery: true,
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
          actionCd: 3000,
          matchTime: 65000, //65秒后休眠
          matches: 'TextView[text="已领取"][vid="neo_count_down_text"]',
          snapshotUrls: ['https://i.gkd.li/i/22705740'],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24432424', //逛街领金币-直播 82秒会出现一次"已领取"
        },
        {
          key: 2, // 去金币购 看的3次直播
          action: 'none',
          matches: '[vid="pendant_task_status"][text$="00:01"]', // 倒计时01秒
          snapshotUrls: [
            'https://i.gkd.li/i/23750524',
            'https://i.gkd.li/i/23823031',
          ],
        },
        {
          key: 3,
          preKeys: [2],
          actionDelay: 2500,
          action: 'back',
          matches: '[vid="live_play_root_container"]',
        },
      ],
    },
    {
      key: 24,
      name: '📡直播间-关注弹窗-x',
      desc: '①x掉 ②返回键',
      fastQuery: true,
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
          snapshotUrls: 'https://i.gkd.li/i/22659582',
        },
        {
          key: 2,
          action: 'back',
          actionCd: 2000,
          matches: '[text$="看了这么久，帮我点个关注吧！"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23300455',
        },
        {
          key: 3,
          action: 'back',
          actionCd: 2000,
          matches:
            '[id="com.kuaishou.nebula.live_audience_plugin:id/live_profile_bottom_bar_container"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23542497',
        },
      ],
    },
    {
      key: 25,
      name: '📡直播间-红包弹窗-x掉',
      desc: '①天降红包 ②团购红包 ③主播新人券 ④双11券',
      activityIds: [
        'com.yxcorp.gifshow.detail.PhotoDetailActivity', //A
        'com.kuaishou.live.core.basic.activity.LivePlayActivity', //B
        'com.kuaishou.live.core.basic.activity.LiveSlideActivity', //C
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity', //D
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2', //E
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', //F
      ],
      rules: [
        {
          key: 1,
          matches: [
            // 'FrameLayout[vid="krn_content_container"] >(4,5,6,7,8,9) @ImageView[width>94 && width<106][height>94 && height<106][visibleToUser=true] < [index=parent.childCount.minus(1)]',
            '[index=parent.childCount.minus(1)] > @ImageView[width>94 && width<106][height>94 && height<106][top>1000 && top<1800] <<n [vid="krn_content_container"]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22699956', //A 团购红包
            'https://i.gkd.li/i/22781366', //B 天降红包
            'https://i.gkd.li/i/23011158', //F 主播新人券
            'https://i.gkd.li/i/23143270', //E 主播新人券
            'https://i.gkd.li/i/23290583', //A 获得直播惊喜券(双11)
            'https://i.gkd.li/i/23906987', //C >9 直播惊喜券
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/22988215', //  < [index=parent.childCount.minus(1)]
        },
        {
          key: 2,
          matches:
            '[id$="red_packet_container_view"] +2 ImageView[vid="close_view"][clickable=true][focusable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24337184', //口令红包 未中奖
        },
      ],
    },
    {
      key: 26,
      name: '📡直播间-弹窗',
      desc: '①主播争霸赛 ②拍了拍我 ③招工 ④预约直播 ⑤右侧边栏 ⑥邀加语音聊天',
      enable: false,
      fastQuery: true,
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
          name: '①主播争霸赛-返回',
          action: 'back',
          actionCd: 2000,
          matches: [
            '[text^="助力主播登榜"]',
            '[text="黑马榜"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22982128',
        },
        {
          key: 2,
          name: '②主播拍了拍我-返回',
          action: 'back',
          matches: '[text^="主播拍了拍我"][visibleToUser=true]',
          // snapshotUrls: 'https://i.gkd.li/i/24127641', //参考快手
        },
        {
          key: 3,
          name: '③招工弹窗-x',
          matches:
            '@ImageView[visibleToUser=true] < * - [text$="为您推荐优选职位"]',
          snapshotUrls: 'https://i.gkd.li/i/23211116',
        },
        {
          key: 4,
          name: '④预约直播弹窗-x',
          matches:
            '@ImageView[width=52][height=52] <<2 * <2 * <2 * < [vid="krn_content_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23235749',
        },
        {
          key: 5,
          name: '⑤右侧边栏-关闭',
          matches:
            '[vid="photo_feed_side_bar_close_view"][clickable=true][focusable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23300668',
        },
        {
          key: 6,
          name: '⑥邀请加入语音派对-x',
          matches:
            '[id="com.kuaishou.nebula.live_audience_plugin:id/live_voice_party_audience_being_invited_bottom_panel_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24203582',
        },
        {
          key: 7,
          name: '⑦商品列表',
          action: 'back',
          matches:
            '@[clickable=true][focusable=true] >(1,2) [text="订单" || text="购物车"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24352654',
            'https://i.gkd.li/i/24352662',
          ],
        },
      ],
    },
    {
      key: 31,
      name: '📡直播间-清晰度-高清',
      desc: '设清晰度为 流畅or高清',
      fastQuery: true,
      matchRoot: true,
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
          snapshotUrls: [
            'https://i.gkd.li/i/23607208', //清晰度
            'https://i.gkd.li/i/23642513', //自动
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23908016',
        },
        {
          key: 2,
          preKeys: [1],
          matches:
            '@[index=parent.childCount.minus(2)][clickable=true] > [text="流畅" || text="高清"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22705855',
        },
      ],
    },
    {
      key: 32,
      name: '🦆养鸭-弹窗',
      desc: '①签到 ②明天来喂鸭 ③继续喂养 ④饲料雨End, ⑤抓鸭签到 ⑥抓鸭签到返回键',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          excludeMatches:
            '[text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0)][visibleToUser=true]', //饲料雨
          matches: [
            'Button[text="立即签到" || text="明天来喂鸭" || text^="继续喂" || text="愉快收下" || text^="领今日奖励" || text="看广告翻10倍"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22871644', //每日签到
            'https://i.gkd.li/i/22672386',
            'https://i.gkd.li/i/22691480',
            'https://i.gkd.li/i/22907925', //饲料雨End
            'https://i.gkd.li/i/24448092', //饲料雨End 翻10倍
            'https://i.gkd.li/i/22783039', //抓鸭签到
            'https://i.gkd.li/i/23422233', //抓鸭签到
            'https://i.gkd.li/i/24035024', //继续喂鸭
          ],
        },
        {
          key: 2, //每日签到-已签到-x掉
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
        {
          key: 6, //抓鸭签到返回
          action: 'back',
          excludeMatches: '[text="今日步数"]',
          matches:
            'Button[text^="待领取" || text^="已领取"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22783122',
            'https://i.gkd.li/i/23141489',
            'https://i.gkd.li/i/23422249',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24194609',
        },
      ],
    },
    // {
    //   key: 24,
    //   name: '🦆养鸭-饲料雨(test)',
    //   desc: '每晚8~10点',
    //   rules: [
    //     {
    //       actionCd: 150,  //真机测试1秒左右才点击1次😢
    //       position: {     //往下偏移
    //         left: 'width * 0.5000',
    //         top: 'width * 2.0000',  //上下范围大概 1.6~2.4 倍
    //       },
    //       matches: 'Image[text="饲料"][width>=159 && width<=163]',
    //       snapshotUrls: 'https://i.gkd.li/i/24078870',
    //       activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
    //     },
    //   ],
    // },
    {
      key: 33,
      name: '🦆养鸭-自动喂鸭',
      desc: '①领饲料球 ③6秒喂1次鸭',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①领饲料球',
          matchDelay: 3000,
          actionMaximum: 1,
          resetMatch: 'match',
          excludeMatches:
            '[text="赚饲料" || text="签到提醒" || text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"][visibleToUser=true]',
          matches:
            '[id="app"][parent.childCount=1] >(7,8,9) [text="可领取" || text="已结束"] - * >(1,2) [text$="粒"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22883176',
            'https://i.gkd.li/i/23750724',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23695360', //出任务列表
        },
        {
          key: 2,
          preKeys: [1], // 必须限制,否则误触
          matches: 'Image[text=""][width=77 || height=77][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23567580',
        },
        {
          key: 3,
          name: '③6秒喂1次鸭',
          actionMaximum: 120,
          actionCd: 6000,
          excludeMatches:
            '[text="赚饲料" || text="签到提醒" || text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"][visibleToUser=true]',
          // matches: 'View[id="foodBottomIcon"] < * + [visibleToUser=true]',
          matches:
            '[id="app"][parent.childCount=1] >(6,7,8) View[id="foodBottomIcon"] < * + [visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22908125',
            'https://i.gkd.li/i/23381066',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/22850836',
            'https://i.gkd.li/i/23433012', // 误触页(快手)
            'https://i.gkd.li/i/24102410', //饲料雨即将来袭 去弹窗用 [id="app"][parent.childCount=1]
            'https://i.gkd.li/i/24078870', //饲料雨
            'https://i.gkd.li/i/22907925', //饲料雨End
          ],
        },
      ],
    },
    {
      key: 34,
      name: '🦆养鸭-赚饲料-任务',
      desc: '①去签到 ②领奖or去搜索or观看',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①去签到',
          excludeMatches:
            '[text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"][visibleToUser=true]', //饲料雨
          matches: 'Button[text="去签到"][left>781][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24035851',
        },
        {
          key: 2,
          name: '②领奖or去搜索or观看',
          matchDelay: 500,
          forcedTime: 5000,
          excludeMatches:
            '[text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"][visibleToUser=true]', //饲料雨
          matches: [
            '[text$="3次" || text^="搜索并" || text="看精彩广告"] <<2 * + [text="领奖励" || text="去搜索" || text="去观看"][left>781][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23558181',
            // 'https://i.gkd.li/i/24279125', //未生效
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23558030', // [left=781]
        },
        {
          key: 3,
          preKeys: [2],
          name: '③误进直播间-返回键',
          action: 'back',
          matches:
            '[id="com.kuaishou.nebula.live_audience_plugin:id/live_slide_container"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23561481',
          activityIds: [
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
          ],
        },
        {
          key: 4,
          preKeys: [2],
          name: '④误进看视频页-返回键',
          action: 'back',
          matches: '[vid="nasa_slide_play_view_pager_layout"]',
          fastQuery: true,
          // snapshotUrls: 'https://i.gkd.li/i/24123496', //快手
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
      ],
    },
    {
      key: 35,
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
      key: 36,
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
      key: 37,
      name: '🔍搜索页-开定位-以后再说',
      desc: '弹窗开定位-以后再说',
      rules: [
        {
          matches: [
            '[vid="title"][text="开启定位服务"]',
            '[vid="negative"][text="以后再说"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23979856',
          activityIds: 'com.yxcorp.plugin.search.SearchActivity',
        },
      ],
    },
    {
      key: 38,
      name: '🎮小游戏-退出弹窗-x掉',
      desc: '弹窗->点击 知道了',
      fastQuery: true,
      activityIds: 'com.kwai.frog.game.engine.adapter.engine.base.', //小游戏Activity前缀
      rules: [
        {
          key: 1,
          matches:
            '@[clickable=true] >(1,2) TextView[text="知道了"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22864991',
            'https://i.gkd.li/i/22865094',
          ],
        },
        {
          key: 2,
          matches: '[text="以后再说"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 39,
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
      key: 40,
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
      key: 41,
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
      key: 42,
      name: '逛街赚金币-自动领💰,退',
      desc: '①领金币(❗需冻结ks) ③返回键 ④弹窗-放弃',
      activityIds: 'com.yxcorp.gifshow.ad.rn.AdKwaiRnActivity',
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: '①点击打开快手',
          actionDelay: 1500,
          matches:
            '@[text^="+"][text$="0"] + [text="打开快手"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23582148',
        },
        {
          key: 2,
          preKeys: [1], // 先点key1,再点key2 就会领两样金币
          name: '②点击签到',
          matches:
            '@[text^="+"][text$="0"] + [text="点击领取"][visibleToUser=true]',
        },
        {
          key: 3,
          // preKeys: [2],
          name: '③返回键',
          action: 'back',
          actionMaximum: 2,
          actionCd: 2500,
          resetMatch: 'app',
          excludeMatches: '@[text!="+10"] + [text="浏览领取"]', // 若是10金币,直接退出
          matches: '[text="明天签到"]',
          snapshotUrls: 'https://i.gkd.li/i/23582306',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23689548', // 120金币
        },
        {
          key: 4,
          name: '④退出(弹窗)-放弃',
          matches:
            '[text="继续浏览可获得奖励"] +3 [text="放弃"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22658647',
        },
      ],
    },
    {
      key: 43,
      name: '💤睡觉-领补贴',
      desc: '点击看广告领补贴',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          matchDelay: 1000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            '[text$="领睡觉补贴" || text$="领起床补贴"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23290616',
            'https://i.gkd.li/i/23290617',
          ],
        },
        {
          key: 2,
          action: 'back',
          actionDelay: 1500,
          matches: '[text="已入睡" || text="已起床"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24368949', //已入睡
            'https://i.gkd.li/i/24309580', //已起床
          ],
        },
      ],
    },
    {
      key: 44,
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
      key: 45,
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
          actionDelay: 2500,
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
      key: 46,
      name: '🍚饭点-领补贴',
      desc: '①饭补 ②弹窗 ③待补签 ④左下角看广告',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①中部-领饭补',
          matches:
            '[text="看广告领饭补" || text^="领取饭补" && text$="金币"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/24454732'],
        },
        {
          key: 2,
          name: '②弹窗',
          matches:
            '@[clickable=true][index=parent.childCount.minus(2)] > [text="看视频最高可得" || text="看广告最多再得"] +2 [text="金币"]',
          snapshotUrls: 'https://i.gkd.li/i/24455031',
        },
        {
          key: 3,
          name: '③上部-待补签',
          matches:
            '[text^="+" && text$="金币"] + [text$="待补签"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23381525',
        },
        {
          key: 4,
          name: '④左下角-看广告',
          matches:
            '@[clickable=true][left=0] > TextView[text="看广告"][top>1800]',
        },
      ],
    },
    {
      key: 47,
      name: '🧍‍♂️用户资料页-拉黑',
      desc: '❗①弹窗拉黑 ②确认 ③已拉黑-返回', //遇到广告用户,或者ks偷偷给你关注的广告用户,可以拉黑
      enable: false,
      fastQuery: true,
      activityIds: 'com.yxcorp.gifshow.profile.activity.UserProfileActivity',
      rules: [
        {
          key: 1,
          name: '①弹窗拉黑',
          matches: '[vid="bottom_operation_item_text"][text="拉黑"]',
          snapshotUrls: 'https://i.gkd.li/i/23910599',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②确认拉黑',
          matches: '[vid="positive"][text="确认拉黑"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23910626',
        },
        {
          key: 3,
          preKeys: [2],
          name: '③已拉黑-返回',
          action: 'back',
          matches: '[vid="tv_empty_desc"][text="已拉黑"]',
          snapshotUrls: 'https://i.gkd.li/i/23910639',
        },
      ],
    },
  ],
});
