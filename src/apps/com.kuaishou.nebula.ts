import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 0,
      name: '📢说明',
      desc: '(点击查看详情) 目前在用的快极版本有三个: 🔸v14.4.20.11461 🔸v13.2.10.9610 🔸v12.8.20.8680 ,如果你用其他版本的快极,估计有些规则不生效,如遇失效或误触请截取快照拿到github反馈. 🟢相关脚本已在自动精灵app上传,请到脚本市场搜`🦜快极_自动刷视频`',
      enable: false,
      rules: [
        // snapshotUrls: 'https://i.gkd.li/i/24078870', //养鸭-饲料雨
      ],
    },
    {
      key: 1,
      name: '功能类-自动[退出]视频广告页',
      desc: 'app跳转ks时出现',
      enable: false,
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          matchTime: 3500,
          resetMatch: 'app',
          matches: [
            '[vid="comment_button"] - [vid="like_button"]',
            'ImageView[vid="left_btn"][desc="返回"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22658635',
          exampleUrls: 'https://e.gkd.li/40f503eb-07fe-4b1c-b0b0-2ce4ecd18355',
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        },
      ],
    },
    {
      key: 2,
      name: '跳转ks时进打卡页-[返回]',
      desc: '按[返回键]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          order: -1,
          action: 'back',
          matchTime: 8000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
          matches: '[vid="swipe"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28906258', // 空白过程页
            'https://i.gkd.li/i/28906264', // 每日打卡页
          ],
          exampleUrls: 'https://e.gkd.li/ee42d957-3d0b-4a1e-9068-0362999d20c7',
        },
      ],
    },
    {
      key: 3,
      name: '📺视频页-刷到直播时[上滑]',
      desc: '从GKD_v1.12.0 版本开始才支持[滑动]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          actionCd: 300,
          actionDelay: 200, //完整直播显示需要时间
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
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches:
            '[vid="layout_root_hot_live_play" || text="直播中" || text="直播卖货"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/29029433',
            'https://i.gkd.li/i/29211656',
            'https://i.gkd.li/i/30167631',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '📺视频页-[不感兴趣]这些活动',
      desc: '①快手热榜 ②每日打卡 ③签到',
      rules: [
        {
          fastQuery: true,
          matches: [
            '[text="上滑继续观看视频"]',
            '(@[clickable=true] > [text="不感兴趣"]) || ([text="不感兴趣"][clickable=true])',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22901405', //快手热榜
            'https://i.gkd.li/i/22981911', //每日打卡
            'https://i.gkd.li/i/25210377', //签到
          ],
          exampleUrls: 'https://e.gkd.li/9c4705ce-76d3-4f76-9d4d-2da8771820c0',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
        },
      ],
    },
    {
      key: 5,
      name: '📺视频页-长按直播-不感兴趣该内容',
      desc: '点击[不感兴趣该内容]',
      rules: [
        {
          // matchDelay: 1700,
          fastQuery: true,
          matches:
            '@[clickable=true] >(2,3) [vid="item_title"][text="不感兴趣该内容"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22908240',
            'https://i.gkd.li/i/25071696',
          ],
          exampleUrls: 'https://e.gkd.li/7277dc82-6626-44c8-a84d-f2b03de97252',
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          ],
        },
      ],
    },
    {
      key: 501,
      name: '📺视频页-长按视频-不感兴趣',
      desc: '点击[不感兴趣]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matches:
            '@[clickable=true] >(2,3) [vid="item_title"][text="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/27c8efcd-9cb8-42ae-85fa-14fa5d67a972',
          snapshotUrls: 'https://i.gkd.li/i/25071878',
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '🦜脚本刷视频(辅助)-保持在刷视频页',
      desc: '⚠️误进评论区,直播间,任务中心等-->返回键',
      enable: false,
      fastQuery: true,
      priorityTime: 5000,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 1,
          action: 'back',
          matches: [
            '[vid="design_bottom_sheet" || (vid="tab_text" && text*="评论") || vid="profile_feed_title" || vid="find_friend_btn" || vid="webView"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23777882', //视频页-分享(下方弹窗)
            'https://i.gkd.li/i/23777756', //视频页-评论区
            'https://i.gkd.li/i/23777346', //视频页-她的作品(右侧边栏)
            // 'https://i.gkd.li/i/25071878', //长按视频
            'https://i.gkd.li/i/25146300', //朋友-动态页
            'https://i.gkd.li/i/22883404', //其他 webView (任务中心)
          ],
        },
        {
          key: 2,
          name: '②左边工具栏-返回键',
          action: 'back',
          matches:
            '@SlidingPaneLayout[childCount=1] < [vid="home_activity_root"]',
          snapshotUrls: 'https://i.gkd.li/i/23778737', //视频页-左边工具栏
          excludeSnapshotUrls: 'https://i.gkd.li/i/23778837', //正常刷视频页  [childCount=2]
        },
        {
          key: 3,
          name: '③误进横屏-返回键',
          action: 'back',
          matches: '[parent=null][width>height]',
          // snapshotUrls: 'https://i.gkd.li/i/25143597', //(参考快手)进入横屏
        },
        {
          key: 4,
          name: '④误进[我]页-点击[首页]',
          matches: [
            '[vid="user_name_info_layout"][visibleToUser=true]',
            '@[clickable=true] >3 [text="首页"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25144133',
        },
        {
          key: 5,
          name: '⑤从[关注]页-点击[发现]',
          actionCd: 5000, //有时在[发现]页也刷到已关注的人的视频, cd长一点, 触发记录少一点
          matches: [
            '[vid="follow_avatar_view"] +(1,2) [vid="follow_button"][childCount=0][visibleToUser=true]',
            '@[clickable=true] > [vid="textView"][desc="发现"]',
          ],
          snapshotUrls: [
            //在刷[关注]页的视频
            'https://i.gkd.li/i/25148876',
            'https://i.gkd.li/i/27245691',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/25148885', //在刷[发现]页的视频 [childCount=1]
        },
        {
          key: 444, //进入非视频页,直接返回
          name: '⑥进入非视频界面-返回键',
          action: 'back',
          matches: '[parent=null]', //所有界面都存在的 根节点
          excludeActivityIds: 'com.yxcorp.gifshow.HomeActivity',
          activityIds: [],
        },
      ],
    },
    {
      key: 7,
      name: '🦜脚本刷广告(辅助)-保持在刷广告相关页',
      desc: '⚠️①重启自进任务中心 ②误进与看广告无关页会返回',
      enable: false,
      fastQuery: true,
      forcedTime: 10000,
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', //子规则里出现最多的界面id
      rules: [
        {
          key: 1,
          name: '①视频页-点击红包浮窗',
          matches: '[vid="redFloat"][clickable=true]', //视频页-点击红包浮窗 (配合脚本重启快极后用)
          snapshotUrls: 'https://i.gkd.li/i/23989148',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
        },
        {
          key: 2,
          name: '②视频页-点击红包浮窗坐标',
          action: 'clickCenter',
          matches:
            '@[clickable=true][visibleToUser=true] -(1,2) [vid="home_activity_root"] >n [vid="nasa_groot_view_pager"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24164538',
            'https://i.gkd.li/i/24194816',
            'https://i.gkd.li/i/27251344', // clickNode 点击不生效
          ],
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
        },

        // 以下为自动看广告时,误入其他页面后用的返回键
        {
          key: 11,
          action: 'back',
          matches: '[text="赚饲料"]',
          fastQuery: false, //这条子规则内禁用快查询,否则真机不生效
          snapshotUrls: 'https://i.gkd.li/i/22908125', //养鸭
        },
        {
          key: 12,
          action: 'back',
          matches: '@[text="我的收益"] <2 View <<5 WebView <<2 [vid="webView"]',
          snapshotUrls: 'https://i.gkd.li/i/24337097', //我的收益页
        },
        {
          key: 13,
          action: 'back',
          matches: '@[text="快手App邀请好友"] < WebView < [vid="webView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24431766', //邀请好友
            'https://i.gkd.li/i/30634720',
          ],
        },
        {
          key: 14,
          matches:
            'Image - [text="金币游乐园"] - @[clickable=true][getChild(0).name$="Image"] <<3 View <2 View <<3 WebView[text="活动中心"] <<2 [vid="webView"]',
          snapshotUrls: 'https://i.gkd.li/i/24694311', //小游戏乐园
        },
        {
          key: 15,
          fastQuery: false,
          matches: 'Button[text="狠心离开"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25098334', //小游戏乐园-离开
        },
        {
          key: 16,
          action: 'back',
          matches:
            '@[text$="瓜分大额奖池"] <2 View < View <2 View < * < WebView < * < [vid="webView"]',
          snapshotUrls: 'https://i.gkd.li/i/25004213', //瓜分百亿金币(3天挑战)
        },
        {
          key: 17,
          action: 'back',
          matches:
            '@View[text^="App版本过低"] <3 View < * < * < WebView < * < [vid="webView"]',
          snapshotUrls: 'https://i.gkd.li/i/25285773', //版本过低
        },
        {
          key: 18,
          matches:
            '[text="签到日历"] - @View[clickable=true][getChild(0).name$="Image"] <<5 WebView <<2 [vid="webView"]',
          snapshotUrls: 'https://i.gkd.li/i/25730030', //签到日历
        },
        {
          key: 19,
          action: 'back',
          matches:
            '@[text*="天打卡任务"] < View < View <2 View <<8 [vid="webView"]',
          snapshotUrls: 'https://i.gkd.li/i/23606935', //365天打卡
        },

        // 以下为其它界面id的
        {
          key: 51,
          action: 'back',
          matches: '[text="推荐小说"][id$="book_module_title"]',
          snapshotUrls: 'https://i.gkd.li/i/22658578', //小说
          activityIds: 'com.kuaishou.novel.home.NovelHomeActivity',
        },
        {
          key: 52,
          action: 'back',
          matches: '[vid="tab_text"][text^="作品"]',
          snapshotUrls: 'https://i.gkd.li/i/24336755', //直播-用户主页
          activityIds:
            'com.yxcorp.gifshow.profile.activity.UserProfileActivity',
        },
        {
          key: 53,
          activityIds: 'com.kwai.frog.game.engine.adapter.engine.base.',
          matches:
            '[id="com.kuaishou.nebula.minigame:id/v_more_view_close_and_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24694286', //小游戏-x掉
        },
        {
          key: 54,
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          matches: [
            '[vid="text"][text="发条有爱评论~"]',
            '[vid="front_top_view"] >2 [vid="left_btn"][desc="返回"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24992396', //视频广告页
            'https://i.gkd.li/i/25996122',
          ],
        },
        {
          key: 55,
          action: 'back',
          matches: '[text*="APP版本过低"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25341424', //版本过低
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
        },
        {
          key: 56,
          action: 'back',
          activityIds: 'com.kwai.kds.krn.api.page.tabs.KrnMultiTabActivity',
          matches: [
            '[text="观看记录"]',
            '[text="当前热播"]',
            '[text="重磅推荐"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25995937', //快手短剧
        },
        {
          key: 57,
          activityIds:
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
          matches: '[text^="谢谢参与"] + [text="知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/26160549', //谢谢参与，下次再试试吧
        },
      ],
    },
    {
      key: 8,
      name: '⛳任务页-弹窗-X掉',
      desc: '组件,绑卡,邀好友,瓜分,...',
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.HomeActivity', // A
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
        'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity', // D
        'com.kwai.kds.krn.api.page.KwaiRnActivity', //E
      ],
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[id=null][width>95 && width<106][height>95 && height<106][top>300 && top<1000][visibleToUser=true] < [childCount=1] < * < ViewGroup <2 ViewGroup <2 ViewGroup <2 ViewGroup <3 FrameLayout < [vid="krn_content_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24352727', //A 2025年度回忆
            'https://i.gkd.li/i/24352736', //A h5回测dtk
            'https://i.gkd.li/i/30646832',
            'https://i.gkd.li/i/31457739', //E
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/24357473', //视频页 top>300
            'https://i.gkd.li/i/24642377', //视频页 top<1000
            'https://i.gkd.li/i/25144133', //我-用户信息页 [id=null]
          ],
        },
        {
          key: 1,
          position: {
            left: 'width * 1.0276',
            top: 'width * -0.06',
          },
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
          matches:
            '@[childCount=4][height>width && height<1300] >3 [text="限时邀1位好友立得现金"]',
          snapshotUrls: 'https://i.gkd.li/i/31456749',
        },
        {
          key: 2,
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
          matches:
            'ImageView < * < @[clickable=true] - [height>500 && height<1600] > [text="任务完成奖励"]',
          snapshotUrls: 'https://i.gkd.li/i/31457089',
        },
        {
          key: 3,
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
          matches:
            'ImageView < * < @[clickable=true] +(1,2) [height>500 && height<1600] >(1,2) [text="上周收益" || text="金币已到账"]',
          snapshotUrls: [
            'https://i.gkd.li/i/31458494',
            'https://i.gkd.li/i/31458801',
          ],
        },
        {
          key: 4,
          name: '点击[离开]',
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
          matches:
            '@[text="离开"] < ViewGroup[childCount=1] -n [visibleToUser=true] > [text="真的要离开吗"]',
          snapshotUrls: 'https://i.gkd.li/i/31462077',
        },
        {
          key: 10,
          order: 2, //迟点匹配,让key18 任务页-自动开宝箱 先
          matches:
            '@[name$="Image" || name$="View"][clickable=true][width>70 && width<90] <<(2,3,4,5) [index=parent.childCount.minus(1) || index=parent.childCount.minus(2)][childCount<3] -n [name$="View"] <<(1,2) WebView[getChild(0).getChild(1).getChild(1).text="任务中心"] < * < [vid="webView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23468984', //去绑卡 A
            'https://i.gkd.li/i/22672607', //每日打卡 A
            'https://i.gkd.li/i/23574778', //瓜分百亿金币 A
            'https://i.gkd.li/i/23749900', //开宝箱奖励已到账-看视频 A
            'https://i.gkd.li/i/23588323', //看视频赚金币 领奖弹窗 A
            'https://i.gkd.li/i/22907854', //限时邀好友 B
            'https://i.gkd.li/i/23300823', //去分享视频 B
            'https://i.gkd.li/i/25729758', //助力口令已复制 B
            'https://i.gkd.li/i/22671674', //添加组件 C
            'https://i.gkd.li/i/24743239', //瓜分百亿金币 D
            'https://i.gkd.li/i/28634992', //今日xx金币已到账 D
            'https://i.gkd.li/i/29050019', //添加组件 金币领取不怕忘 D
            // 'https://i.gkd.li/i/25996072', //瓜分百亿金币 D    * <<(2,3,5)  的 5
            // 'https://i.gkd.li/i/25996219', //看视频赚金币 领奖弹窗 B
          ],
          excludeSnapshotUrls: [
            // 'https://i.gkd.li/i/22871644', //养鸭 签到弹窗
            // 'https://i.gkd.li/i/24448092', //养鸭 饲料雨End 翻10倍

            // 'https://i.gkd.li/i/23427912', //开宝箱-弹窗去看广告
            'https://i.gkd.li/i/22907925', //养鸭 饲料雨End 愉快收下
          ],
        },
      ],
    },
    {
      key: 9,
      name: '⛳任务页-刷视频赚金币-领取',
      desc: '有待领金币-立即领取',
      enable: false,
      matchDelay: 2500,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'match',
      activityIds: [
        'com.yxcorp.gifshow.HomeActivity', // A
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
        'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity', // D
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
          matches:
            '[text="领金币"] < @[clickable=true] -n [text*="待领"][text*="金币"]',
          snapshotUrls: 'https://i.gkd.li/i/31456916',
        },
        {
          key: 1,
          matches: '@[clickable=true] >(1,2) [text^="待领"][text*="金币"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23907888',
            'https://i.gkd.li/i/23979731',
          ],
        },
        {
          key: 2,
          matches:
            '@[text="领金币"][clickable=true] < View -n [text*="待领"][text*="金币"]',
          snapshotUrls: 'https://i.gkd.li/i/30633247',
        },
      ],
    },
    {
      key: 10,
      name: '⛳任务页-❗网络错误',
      desc: '任务页加载出错 点击[重试/刷新]',
      fastQuery: true,
      actionMaximum: 2, // 仅重试2次
      activityIds: [
        'com.yxcorp.gifshow.ad.webview.AdYodaActivity',
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
        'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity',
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
      ],
      rules: [
        {
          key: 1,
          actionCd: 1500,
          matches:
            '[vid="retry_btn" && text="点击重试" || text^="点我刷新"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24994235',
            'https://i.gkd.li/i/24195125',
            'https://i.gkd.li/i/23907716',
            'https://i.gkd.li/i/24337119', //任务页-列表空白-点我刷新
            'https://i.gkd.li/i/24963623',
            'https://i.gkd.li/i/30649294',
          ],
        },
        {
          key: 2,
          matches: [
            '[text="网络设置方法"]',
            '[vid="positive"][text="知道了"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24963673',
        },
      ],
    },
    {
      key: 12,
      name: '🤳看广告-已看完-退出',
      desc: '已成功领取奖励',
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
        'com.yxcorp.plugin.search.SearchActivity',
      ],
      rules: [
        {
          key: 1,
          actionDelay: 1500,
          forcedTime: 60000, // 60秒内一直主动参与屏幕查询
          matches:
            '@[id$="video_countdown_end_icon"] - [text^="已成功"][visibleToUser=true]',
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
            '[id="com.kuaishou.nebula.commercial_neo:id/video_close_icon"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24279152',
        },
        {
          key: 3,
          name: '③出现弹窗阻碍_x掉',
          matches: 'ImageView + ImageView[vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/29641806',
            'https://i.gkd.li/i/29736686',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '🤳看广告-额外获取xx金币',
      desc: '含跳转app,不含下载app',
      enable: false,
      fastQuery: true,
      actionDelay: 1500,
      activityIds: [
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
        'com.yxcorp.plugin.search.SearchActivity',
      ],
      rules: [
        {
          key: 1,
          name: '①[放弃]需下载app的任务',
          matches:
            '[text^="下载并体验"] < * +2 * > [text="放弃奖励"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/22882796', // key3 也能匹配, 故调换位置让 key1 先匹配
        },
        {
          key: 2,
          name: '②x掉需下载app的任务',
          forcedTime: 3600000,
          matches:
            '@[clickable=true][desc="close_view"] +2 [text^="下载并体验"]',
          snapshotUrls: 'https://i.gkd.li/i/27400869',
        },
        {
          key: 3,
          name: '③点击[额外]获取金币',
          action: 'clickCenter', // v14.3.30.11384 版不响应 clickNode 事件
          actionCd: 14500,
          resetMatch: 'app', // 对 actionCd 也生效
          matches:
            '@[clickable=true] >(1,2,3) [text*="额外"][!(text*="下载" || text*="付费" || text*="买入" || text*="订购")]',
          snapshotUrls: [
            'https://i.gkd.li/i/23392746', // 点击额外获取90金币
            'https://i.gkd.li/i/23476308', // i 打开并体验20秒 额外领100金币
            'https://i.gkd.li/i/23588212', // 打开并体验 20 秒 额外得
            'https://i.gkd.li/i/23654193', // 点击额外获取
            'https://i.gkd.li/i/27400979', // 领取额外金币 (弹窗)
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/22658960', // 不可单单用 [vid="ad_download_text"] , 换用 [text*="额外"]  排除
            'https://i.gkd.li/i/23392869', // 下载
            'https://i.gkd.li/i/27516606', // 付费
            'https://i.gkd.li/i/27841529', // 买入
            'https://i.gkd.li/i/28912195', // 订购
          ],
        },
      ],
    },
    {
      key: 13,
      name: '🤳看广告-黑了就不看',
      desc: '只可领1金币时直接退出',
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
        'com.yxcorp.plugin.search.SearchActivity',
      ],
      rules: [
        {
          key: 1,
          name: '①可领1金币-点击x掉',
          matches:
            '@ImageView[clickable=true][width<84] - [text$="可领取1金币"]',
          snapshotUrls: 'https://i.gkd.li/i/30872378',
        },
        {
          key: 2,
          name: '②确认退出',
          matches:
            'ImageView < @[desc="close_view"] + [visibleToUser=true] > [text="1金币"]',
          snapshotUrls: 'https://i.gkd.li/i/30872380',
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
        'com.yxcorp.gifshow.ad.tachikoma.page.AdMKPageActivity',
        'com.yxcorp.gifshow.ad.award.flow.AwardFeedFlowActivity',
      ],
      rules: [
        {
          key: 1,
          name: '①刚切回快极app-返回键',
          matchTime: 3000, // 刚刚切回快极app的3秒内有效
          actionDelay: 500,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            '[vid="title_root"] > [vid="left_btn"][desc="返回"][clickable=true][visibleToUser=true]', //返回
          snapshotUrls: [
            'https://i.gkd.li/i/23908857', // 无 [vid="title_tv"]
            'https://i.gkd.li/i/23421971', //拼多多
            'https://i.gkd.li/i/23764542', //正在打开...
            'https://i.gkd.li/i/25070194', //落茄香腾 A
            'https://i.gkd.li/i/25070202', //落茄香腾 B
            'https://i.gkd.li/i/27516409',
            'https://i.gkd.li/i/30147714', //看直播领金币
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/26376188', //加 [desc="返回"] 排除, GKD捉不到 activityId 时会误触
        },
        {
          key: 2,
          name: '②待4.5秒后-返回键',
          matchDelay: 3000,
          actionDelay: 4500,
          matches:
            '[vid="title_root"] > [vid="left_btn"][desc="返回"][clickable=true][visibleToUser=true]', //返回
        },
        {
          key: 3,
          name: '③xx下载页-返回键',
          action: 'back',
          actionDelay: 1000,
          matches:
            '[text^="下载" && text$="立得奖励" || text="快影" || text="券和福利" || text*="喜番"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23431442',
            'https://i.gkd.li/i/24352704', //快影
            'https://i.gkd.li/i/25002586', //ks年货节
            'https://i.gkd.li/i/30867792', //喜番
          ],
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
        },
        {
          key: 4,
          name: '④下载apk页-x掉',
          activityIds: 'com.yxcorp.gifshow.ad.webview.AdYodaActivity',
          matches: '[text="立即下载"] - LinearLayout >2 [vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/26678104',
        },
        {
          key: 5,
          name: '⑤微粒贷-[忍痛离开]',
          activityIds: 'com.yxcorp.gifshow.ad.webview.AdYodaActivity',
          matches: 'Button[text="忍痛离开"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/28906209',
        },
        {
          key: 6,
          preKeys: [1, 2],
          name: '⑥[仍要退出]看直播领金币页',
          activityIds: 'com.yxcorp.gifshow.ad.award.flow.AwardFeedFlowActivity',
          matches: '[text="仍要退出"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/30147716',
        },
        {
          key: 7,
          action: 'back',
          activityIds:
            'com.kuaishou.commercial.novel.home.read.AdNovelReadActivity',
          matches:
            '[id="com.kuaishou.nebula.commercial_novel:id/book_read_view"]',
          snapshotUrls: 'https://i.gkd.li/i/30867756',
        },
        {
          key: 8,
          preKeys: [7],
          activityIds:
            'com.kuaishou.commercial.novel.home.read.AdNovelReadActivity',
          matches: '[text="直接退出"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/30867757',
        },
      ],
    },
    {
      key: 17,
      name: '🤳任务页-自动去看广告',
      desc: '点击[领福利]',
      forcedTime: 15000,
      actionCd: 10000,
      matchDelay: 3500,
      activityIds: [
        'com.yxcorp.gifshow.HomeActivity', // A
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
        'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity', // D
      ],
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
          matches:
            '[text="看广告得金币"] +n [text^="单日最高" || desc^="单日最高"] +n @[clickable=true] >2 [text="领福利"]',
          snapshotUrls: [
            'https://i.gkd.li/i/31456916',
            'https://i.gkd.li/i/31866045',
          ],
        },
        {
          key: 2,
          matches:
            '@[clickable=true] - * > [text^="单日最高" || getChild(0).text^="单日最高"] -n [visibleToUser=true][text="看广告得金币"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22883404', // A
            'https://i.gkd.li/i/22882988', // C
            'https://i.gkd.li/i/22907324', // B
            'https://i.gkd.li/i/32433082', // D
            'https://i.gkd.li/i/32433125', // D
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23585391', //倒计时结束继续领金币
            'https://i.gkd.li/i/23642264', //未加载完成? [clickable=true]
          ],
        },
      ],
    },
    {
      key: 18,
      name: '🤳任务页-自动开宝箱',
      desc: '①开宝箱 ②(弹窗)去看广告',
      order: -1,
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.HomeActivity', // A
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
        'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity', // D
      ],
      rules: [
        {
          key: 1,
          name: '①开宝箱',
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
          matches: '@[clickable=true] > [text^="点可领"][text$="金币"]',
          snapshotUrls: 'https://i.gkd.li/i/31456916',
        },
        {
          key: 2,
          name: '①开宝箱2',
          forcedTime: 30000,
          matchRoot: true,
          matches:
            '@Button[text^="点可领" || text^="点击领"][text$="金币"][clickable=true][parent.getChild(0).name$="Image"] <<n [index=parent.childCount.minus(1)][id=null] <n [index>=parent.childCount.minus(2)][childCount>3] <n View <<3 [vid="webView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23427892',
            'https://i.gkd.li/i/25236905',
            'https://i.gkd.li/i/27550426',
            'https://i.gkd.li/i/29641467',
            'https://i.gkd.li/i/32433125', // 点击领
          ],
        },
        {
          key: 20,
          name: '②(弹窗)去看广告',
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
          matches: '@[clickable=true] > [text^="去看广告得"][text$="金币"]',
          snapshotUrls: 'https://i.gkd.li/i/31459437',
        },
        {
          key: 21,
          name: '②(弹窗)去看广告2',
          matches: 'Button[clickable=true][text^="去看广告得"][text$="金币"]',
          snapshotUrls: 'https://i.gkd.li/i/23427912',
        },
      ],
    },
    {
      key: 20,
      name: '🤳看广告-自动再看1个',
      desc: '弹窗-点击[领取奖励]',
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
      ],
      rules: [
        {
          key: 1,
          matches:
            '[text^="再看一个"] +3 [text="领取奖励"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22661727',
            'https://i.gkd.li/i/22672886',
            'https://i.gkd.li/i/22673069',
          ],
        },
        {
          key: 2,
          forcedTime: 3600000,
          matches:
            '[getChild(0).text*="再看1个"] + * > @[clickable=true] > [text^="领取"][text$="奖励"]',
          snapshotUrls: [
            'https://i.gkd.li/i/27396623',
            'https://i.gkd.li/i/27407109', // 该规则在直播界面容易睡死
            'https://i.gkd.li/i/28312221', // 明天再看1个广告
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
          fastQuery: true,
          actionMaximum: 1,
          excludeMatches:
            '([vid="ad_download_progress_click_progress"]) || ([text^="已成功"])',
          matches:
            'ImageView < @[clickable=true][desc="close_view"] <2 [desc="container_view"] < * < * < [id="com.kuaishou.nebula.commercial_neo:id/award_video_card_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23213280',
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
      name: '📡直播间-确认[退出]直播',
      desc: '①点击[退出] ②直播中途结束-[返回键] ③点击[放弃]',
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
          name: '①点击[退出]',
          matches:
            '@[clickable=true][childCount=1] > [text^="退出"][text.length<8]',
          snapshotUrls: [
            'https://i.gkd.li/i/22658742',
            'https://i.gkd.li/i/22781433',
            'https://i.gkd.li/i/22782772',
            'https://i.gkd.li/i/22984063',
            'https://i.gkd.li/i/22700047',
            'https://i.gkd.li/i/23210943',
          ],
          exampleUrls: 'https://e.gkd.li/12150536-d5e6-41ad-971d-b9a2d2e38810',
        },
        {
          key: 2,
          name: '②直播中途结束-[返回键]',
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
          name: '③直播中途结束-点击[放弃]',
          matches: '[text="换一个"] -2 [text^="放弃"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23421843',
          exampleUrls: 'https://e.gkd.li/acad22ef-8fc1-441e-af46-677b52402d14',
        },
      ],
    },
    {
      key: 23,
      name: '📡直播间-看完-返回键',
      desc: '①出现[已领取] ②出现[倒计时 00:01] ③延时2s按[返回键]', // ❗若不生效,注意Animator缩放动画时长不能设为0
      fastQuery: true,
      matchRoot: true,
      actionCd: 20000, //太短易重复触发
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
          name: '①条件-出现[已领取]',
          action: 'none',
          // matchTime: 65000, //65秒后休眠
          matches: 'TextView[text="已领取"][vid="neo_count_down_text"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22705740',
            'https://i.gkd.li/i/29052399',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24432424', //逛街领金币-直播 82秒会出现一次"已领取"
        },
        {
          key: 2, // 去金币购 看的3次直播
          name: '②条件-出现[倒计时 00:01]',
          action: 'none',
          matches: '[text^="倒计时"][text$="00:01"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23750524', // [text="倒计时 00:54"]
            'https://i.gkd.li/i/23823031', // [text="倒计时 00:40"]
          ],
        },
        {
          key: 10,
          preKeys: [1, 2],
          name: '③延时2s按[返回键]',
          actionDelay: 2000,
          action: 'back',
          matches: '[vid="live_play_root_container"]',
        },
      ],
    },
    {
      key: 2301,
      name: '📡直播间-已可领奖励时退出',
      desc: '(⚠️闲时勿用,影响正常看直播) 不存在任务倒计时的4s后,点击[右上角x]掉直播',
      fastQuery: true,
      enable: false,
      rules: [
        {
          key: 1,
          name: '①点击[x]掉直播间',
          actionCd: 20000,
          actionDelay: 4000,
          excludeAllMatches:
            '[vid="neo_count_down_text" || vid="pendant_bg"][text!="已领取"]', //不存在这些节点时, x掉直播
          matches:
            '[id="com.kuaishou.nebula.live_audience_plugin:id/live_close_place_holder"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22705740', // [text="已领取"] ,可退出直播
            'https://i.gkd.li/i/29052399', // [text="已领取"] ,可退出直播

            'https://i.gkd.li/i/30160760',
            'https://i.gkd.li/i/30160769',
            'https://i.gkd.li/i/30350840', //倒计时控件会右移隐藏起来,导致规则触发,需要子key2补救
            'https://i.gkd.li/i/30867817', //刚进直播间,加载太慢了...
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/30160761', // [vid="neo_count_down_text"] ,计时未结束
            'https://i.gkd.li/i/30160768', // [vid="pendant_bg"] ,计时未结束
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
        {
          key: 2,
          preKeys: [1],
          name: '②点击[继续观看]',
          activityIds: [
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
          ],
          matches: '@[clickable=true] > [text="继续观看"]',
          snapshotUrls: 'https://i.gkd.li/i/30350838',
        },
      ],
    },
    {
      key: 24,
      name: '📡直播间-弹窗',
      desc: '①②按[返回键] ③④⑥[x]掉 ④预约直播 ⑤右侧边栏 ⑥今日榜单',
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
          name: '①按[返回键]',
          action: 'back',
          actionCd: 2000,
          matches:
            '[vid="krn_content_container" || id$="ultron_container"] >n [text="黑马榜" || text^="主播拍了拍我" || text$="助我上榜" || (text*="看了这么久" && text*="关注") || ((text="订单" || text="购物车") && parent.childCount=2)][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22982128', // 主播争霸赛
            // 'https://i.gkd.li/i/24127641', // (参考快手) 主播拍了拍我
            'https://i.gkd.li/i/24455158', // 助我上榜
            'https://i.gkd.li/i/23300455', // 久看邀关注
            'https://i.gkd.li/i/24352654', // 商品列表1  id$="ultron_container"  购物车
            'https://i.gkd.li/i/24352662', // 商品列表2  订单
          ],
        },
        {
          key: 2,
          name: '②出半个主播主页-[返回键]',
          action: 'back',
          actionCd: 2000,
          matches:
            '[id$="live_profile_bottom_bar_container" || id$="live_profile_bottom_container"] >(3,6) [text="关注"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23542497',
            'https://i.gkd.li/i/25075124',
            'https://i.gkd.li/i/27550556',
          ],
        },
        {
          key: 3,
          name: '③弹窗-x掉',
          matches:
            '@[clickable=true][width<140][height<140] +n [text*="立刻投递" || text*="意向城市" || text="立即关注" || text*="接受邀请"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23211116', // 招工
            'https://i.gkd.li/i/26160402', // 意向城市
            'https://i.gkd.li/i/22659582', // 邀关注
            'https://i.gkd.li/i/24203582', // 邀请加入语音派对
          ],
        },
        {
          key: 4,
          name: '④预约直播弹窗-x',
          matches:
            'ImageView[width<80][height<80][visibleToUser=true] < * < @[clickable=true] <2 * <2 * < [vid="krn_content_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23235749',
        },
        {
          key: 5,
          name: '⑤右侧边栏-关闭',
          matches: '[vid="photo_feed_side_bar_close_view"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23300668',
        },
        {
          key: 6,
          name: '⑥今日榜单弹窗-x掉',
          matches:
            'ImageView < * < @[clickable=true] - ViewGroup >4 [text="查看今日榜单"]',
          snapshotUrls: 'https://i.gkd.li/i/24926207',
        },
        {
          key: 7,
          name: '⑦优惠弹窗-x掉',
          matches:
            '@[clickable=true][width<140][height<140] +n ViewGroup > [text="放弃优惠"]',
          snapshotUrls: 'https://i.gkd.li/i/29512188',
        },
        {
          key: 8,
          name: '⑧送礼弹窗-[返回键]',
          action: 'back',
          excludeMatches: '[vid="swipe"][visibleToUser=true]',
          matches:
            '@[vid="webView"][visibleToUser=true] -2 [vid="webview_overlay"]',
          snapshotUrls: 'https://i.gkd.li/i/29973172',
          excludeSnapshotUrls: 'https://i.gkd.li/i/32452124',
        },
      ],
    },
    {
      key: 25,
      name: '📡直播间-红包弹窗-x掉',
      desc: '①天降红包 ②团购红包 ③主播新人券 ④双11券',
      fastQuery: true,
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
          matches:
            'ImageView[width>84 && width<124][height>84 && height<124] <<2 @[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] <<n [childCount>1] < [vid="krn_content_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22699956', //A 团购红包
            'https://i.gkd.li/i/22781366', //B 天降红包
            'https://i.gkd.li/i/23011158', //F 主播新人券
            'https://i.gkd.li/i/23143270', //E 主播新人券
            'https://i.gkd.li/i/23290583', //A 获得直播惊喜券(双11)
            'https://i.gkd.li/i/23906987', //C 直播惊喜券       @ 排除 [visibleToUser=false] 伪节点
            'https://i.gkd.li/i/24862649', //A 年货节直播惊喜券  @ [visibleToUser=false]
          ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/22988215', // 旧选择器才误触,目前已解决
        },
        {
          key: 2,
          matches:
            '[id$="red_packet_container_view"] +2 ImageView[vid="close_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24337184', //口令红包 未中奖
        },
      ],
    },
    {
      key: 31,
      name: '📡直播间-自动调低画质',
      desc: '设清晰度为[流畅/高清]',
      fastQuery: true,
      actionMaximum: 1,
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
          name: '①点击右下角[更多]',
          matchDelay: 8000, // 初进直播间,缓几秒加载节点,可能还有红包弹窗啥的
          resetMatch: 'app',
          matches: '@[clickable=true] > [vid="live_bottom_bar_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/22705740',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②已是高清-按[返回键]',
          action: 'back',
          matches:
            '@[clickable=true] >(1,2) [text="流畅" || text="高清"][index=0]',
          snapshotUrls: 'https://i.gkd.li/i/23908016', //已经是'高清'
        },
        {
          key: 3,
          preKeys: [1],
          name: '③不存在调画质-按[返回键]',
          action: 'back',
          actionDelay: 1500,
          excludeMatches:
            '@[clickable=true] >(1,2) [text="清晰度" || text="自动"]',
          matches:
            '[vid="live_bottom_bar_recycle_view"][visibleToUser=true || childCount<2]',
          snapshotUrls: [
            'https://i.gkd.li/i/27384944', //没有设置清晰度的选项
            'https://i.gkd.li/i/30747799', //卡住,未能显示
          ],
        },
        {
          key: 4,
          name: '④点击[清晰度]',
          resetMatch: 'match',
          // excludeMatches: '@[clickable=true] >(1,2) [text="流畅" || text="高清"][index=0]', // 前面子key2 已有
          matches: '@[clickable=true] >(1,2) [text="清晰度" || text="自动"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23607208', //清晰度
            'https://i.gkd.li/i/23642513', //自动
            'https://i.gkd.li/i/27304171', //自动
          ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/23908016', //已经是'高清'
        },
        {
          key: 5,
          preKeys: [4],
          name: '⑤选择[流畅/高清]',
          matches:
            '@[index=parent.childCount.minus(2)][clickable=true] > [text="流畅" || text="高清"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22705855',
        },
        {
          key: 6,
          name: '⑥等太久-[返回键]',
          action: 'back',
          actionDelay: 5000,
          matches:
            '[id$="live_audience_quality_recycler_view"] - [text="选择清晰度"]',
          snapshotUrls: 'https://i.gkd.li/i/27397036', // 已选择[流畅/高清]
        },
      ],
    },
    {
      key: 32,
      name: '🦆养鸭-弹窗',
      desc: '①点击[翻10倍/签到] ②直接x掉 ③抓鸭签到 ④抓鸭签到-[返回键]',
      fastQuery: true,
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①点击[翻10倍/签到]',
          forcedTime: 3600000,
          matches:
            '@Button[(text*="翻" && text*="倍") || text="立即签到"] <n View[index=parent.childCount.minus(1)] <n View <2 View <2 View[getChild(0).id="app"] < WebView < WebView < [vid="webView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24448092', //饲料雨End 翻10倍
            'https://i.gkd.li/i/22871644', //今日签到
            'https://i.gkd.li/i/28514093', //饲料雨End 翻5倍
          ],
        },
        {
          key: 2,
          name: '②直接x掉',
          forcedTime: 3600000,
          matches:
            '@Image[clickable=true][width<107 && height<107] < View < View <2 View <2 View[getChild(0).id="app"] < WebView < WebView < [vid="webView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22672386', //明天来喂鸭
            'https://i.gkd.li/i/22691480', //继续喂养
            'https://i.gkd.li/i/24035024', //继续喂鸭
            'https://i.gkd.li/i/22907925', //饲料雨End 愉快收下
            'https://i.gkd.li/i/23567580', //看广告加速领饲料球

            // 今日已成功签到
            'https://i.gkd.li/i/22871789',
            'https://i.gkd.li/i/23427798',
            'https://i.gkd.li/i/23542661',
            'https://i.gkd.li/i/23642766',
          ],
        },
        {
          key: 3,
          name: '③抓鸭签到',
          matches:
            '@Button[text^="领今日奖励"] <5 View <4 View <3 View <2 View <2 [text="签到领奖励"] <4 [parent.id="app"][parent.parent.childCount=1] <<5 [vid="webView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22783039', //抓鸭签到 领今日奖励
            'https://i.gkd.li/i/23422233', //抓鸭签到
          ],
        },
        {
          key: 4,
          preKeys: [3],
          name: '④抓鸭签到-[返回键]',
          action: 'back',
          matches: '[parent=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/22783122', //待领取
            'https://i.gkd.li/i/23141489', //已领取
            'https://i.gkd.li/i/23422249', //待领取x2
          ],
        },
      ],
    },
    {
      key: 33,
      name: '🦆养鸭-自动喂鸭',
      desc: '①领饲料球 ③6秒喂1次鸭',
      fastQuery: true,
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①领饲料球',
          actionDelay: 2500,
          actionMaximum: 1,
          resetMatch: 'match',
          // excludeMatches: '[visibleToUser=true][text="赚饲料" || text="签到提醒" || text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"]',
          matches:
            '@View[id="foodItem"][getChild(0).getChild(1).text="可领取"] <n View <2 View[id="bubbleContainer"][parent.getChild(1).visibleToUser=false] <<3 [id="app"][parent.childCount=1] <<4 [vid="webView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22883176',
            'https://i.gkd.li/i/23750724',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23695360', // 已显示任务列表, 用 [id="bubbleContainer"][parent.getChild(1).visibleToUser=false] 排除
            'https://i.gkd.li/i/24102410', // 饲料雨即将来袭 去弹窗用 [id="app"][parent.childCount=1]
            'https://i.gkd.li/i/24078870', // 饲料雨
            'https://i.gkd.li/i/22907925', // 饲料雨End
          ],
        },
        {
          key: 3,
          name: '③6秒喂1次鸭',
          actionMaximum: 120,
          resetMatch: 'app',
          actionCd: 6000,
          matches:
            '[getChild(0).id="foodBottomIcon"] <(2,3) @[clickable=true] <2 View <4 View[id="bubbleContainer"][parent.getChild(1).visibleToUser=false] <<3 [id="app"][parent.childCount=1] <<4 [vid="webView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23750724',
            'https://i.gkd.li/i/23381066',
          ],
        },
      ],
    },
    {
      key: 34,
      name: '🦆养鸭-赚饲料-任务',
      desc: '①去签到/领奖励/去搜索/去观看',
      fastQuery: true,
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①去签到or领奖or去搜索or观看',
          matches:
            '[text="今日签到" || text$="奖励(3/3)" || text^="搜索并" || text="看精彩广告"] <<(6-n) * + @Button[clickable=true] <3 [childCount=3][visibleToUser=true] <n [id="taskPanelScrollBox"] <2 [childCount=2] <4 [visibleToUser=true] - [id="bubbleContainer"] <<3 [id="app"][parent.childCount=1] <<4 [vid="webView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24035851', // 去签到
            'https://i.gkd.li/i/23558181', // 领奖励/去搜索/去观看
            'https://i.gkd.li/i/24279125', // 给鸭鸭喂食3次 (任务已完成但节点未更新)
            'https://i.gkd.li/i/27479616', // 收定时奖励3次 (任务已完成但节点未更新)
          ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/23558030', // (旧) 被遮挡的匹配节点 [left=781]
        },
        {
          key: 3,
          preKeys: [1],
          name: '③误进直播间-返回键',
          action: 'back',
          matches:
            '[id="com.kuaishou.nebula.live_audience_plugin:id/live_slide_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23561481',
          activityIds:
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
        },
        {
          key: 4,
          preKeys: [1],
          name: '④误进看视频页-返回键',
          action: 'back',
          matches: '[vid="nasa_slide_play_view_pager_layout"]',
          // snapshotUrls: 'https://i.gkd.li/i/24123496', //快手
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        },
      ],
    },
    {
      key: 3501,
      name: '🔍任务页-搜索赚金币',
      desc: '点击[去搜索]',
      enable: false,
      actionCd: 15000,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
          matches:
            '[text="搜索赚金币" || text^="搜索浏览"] +n @[clickable=true] >2 [text="去搜索"]',
          snapshotUrls: 'https://i.gkd.li/i/31456916',
        },
        {
          key: 2,
          matches:
            '@[text="去搜索"][clickable=true] - [childCount<6] > [text="搜索赚金币" || text^="搜索浏览"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24992823',
            'https://i.gkd.li/i/30748333',
            'https://i.gkd.li/i/32433125',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/30772120', // 有倒计时, [childCount=8]
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity', // A
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
            'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity', // D
          ],
        },
      ],
    },
    {
      key: 35,
      name: '🔍搜索-倒计时结束后[返回]',
      desc: '退出搜索页',
      fastQuery: true,
      activityIds: 'com.yxcorp.plugin.search.SearchActivity',
      rules: [
        {
          key: 1,
          name: '①任务1s后结束',
          action: 'none',
          forcedTime: 35000, // 需主动检测
          matches:
            '([text.substring(7).toInt()<3] -(1,2) [vid="pendant_bg"]) || ([childCount=1] > [vid="pendant_bg"])', // 倒计时剩1秒
          snapshotUrls: [
            'https://i.gkd.li/i/23689726', // 养鸭任务
            'https://i.gkd.li/i/23748508', // 金币任务
            'https://i.gkd.li/i/22850681', // 养鸭任务 倒计时结束
            'https://i.gkd.li/i/31611768', // 养鸭任务 , [text="倒计时 00:00"] 且该节点无快查
          ],
        },
        {
          key: 2,
          preKeys: [1],
          name: '②按[返回键]',
          action: 'back',
          actionDelay: 2500, // 需大于2秒
          matches: '[text="搜索"]',
          snapshotUrls: 'https://i.gkd.li/i/22850681', // 第1次返回
        },
        {
          key: 3,
          preKeys: [2, 3], // 偶尔会有输入法,需再点一次返回
          name: '③再按[返回键]',
          action: 'back',
          actionCd: 100,
          actionDelay: 150,
          matches: '[text="搜索"]',
          snapshotUrls: 'https://i.gkd.li/i/22702438', // 第2次返回
        },
      ],
    },
    {
      key: 36,
      name: '🔍搜索页-自动[搜索]',
      desc: '进页面1.5秒后点击[搜索]',
      rules: [
        {
          fastQuery: true,
          actionCd: 4000,
          actionDelay: 1500,
          forcedTime: 3500, // v14.3.30.11384 版易睡死
          actionMaximum: 1,
          resetMatch: 'match',
          matches: [
            '[vid="tab_text"][text="搜索发现"]',
            '[text="搜索"][vid="right_button" || vid="right_tv"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22702438',
            'https://i.gkd.li/i/23381126',
            'https://i.gkd.li/i/28311953',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23748508', // 已在搜索结果页面
          activityIds: 'com.yxcorp.plugin.search.SearchActivity',
        },
      ],
    },
    {
      key: 37,
      name: '权限提示-定位权限',
      desc: '拒绝',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matches:
            '[text*="定位" || text*="位置"] +2 [vid="button"] >2 [vid="negative"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23979856',
            'https://i.gkd.li/i/30646715',
          ],
          activityIds: [
            'com.yxcorp.plugin.search.SearchActivity',
            'com.yxcorp.gifshow.ad.webview.AdYodaActivity',
          ],
        },
      ],
    },
    {
      key: 3701,
      name: '权限提示-存储权限',
      desc: '拒绝',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matches:
            '[text*="存储"] +2 [vid="button"] >2 [vid="negative"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/27940438',
          activityIds: [
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
          ],
        },
      ],
    },
    {
      key: 38,
      name: '功能来-确认[退出]小游戏',
      desc: '弹窗-点击[知道了/以后再说/退出游戏]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.kwai.frog.game.engine.adapter.engine.base.', //小游戏Activity前缀
          matches:
            '@[clickable=true] >(1,2) TextView[text="知道了" || text="以后再说" || text="退出游戏"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22864991', //知道了
            'https://i.gkd.li/i/22865094', //知道了
            'https://i.gkd.li/i/28516366', //退出游戏
          ],
          exampleUrls: 'https://e.gkd.li/c154d3c1-d139-4fd6-8a43-fb69df2c26a0',
        },
      ],
    },
    {
      key: 39,
      name: '功能类-[退出]我的小游戏页',
      desc: '点击左上角 < ',
      rules: [
        {
          fastQuery: true,
          matches:
            'ImageView < * < @[clickable=true] < * + [text="我的小游戏"]',
          snapshotUrls: 'https://i.gkd.li/i/22865063',
          exampleUrls: 'https://e.gkd.li/f37af09c-4c41-405c-9e2b-1c2d5a3fafb7',
          activityIds:
            'com.yxcorp.gifshow.minigame.sogame.home.SoGameNewListActivity',
        },
      ],
    },
    {
      key: 40,
      name: '权限提示-[允许]获取用户资料',
      desc: '🎮小游戏弹窗-点击[允许]',
      rules: [
        {
          fastQuery: true,
          forcedTime: 10000,
          matches:
            '[text*="头像" || text*="当前账号"] +n [childCount=2] > [text="允许"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/31611140',
            'https://i.gkd.li/i/31611153',
            'https://i.gkd.li/i/31611168',
          ],
          exampleUrls: 'https://e.gkd.li/68ef9b55-60a5-4849-8b6d-76eb9360583a',
          activityIds: 'com.yxcorp.login.authorization.AuthActivity',
        },
      ],
    },
    {
      key: 1101,
      name: '📘小说-领奖',
      desc: '①领奖 ②X掉弹窗',
      fastQuery: true,
      activityIds: 'com.kuaishou.novel.home.NovelHomeActivity',
      rules: [
        {
          key: 1,
          // actionDelay: 700,
          actionCd: 3500,
          matches:
            '@[clickable=true] > [text="立即领取"][id$="task_item_button"]',
          snapshotUrls: 'https://i.gkd.li/i/22658578',
        },
        {
          key: 2,
          matches: '[text="恭喜你获得"] - [vid="dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/22672261',
        },
      ],
    },
    {
      key: 1102,
      name: '📘小说-开启自动阅读',
      desc: '点击 ①设置 ②开启自动阅读',
      fastQuery: true,
      activityIds: 'com.kuaishou.novel.home.read.ReaderActivityV2',
      rules: [
        {
          key: 1,
          name: '①设置',
          actionCd: 10000,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + [text="设置"]',
          snapshotUrls: 'https://i.gkd.li/i/24738219',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②开启自动阅读',
          matches: '[text="开启自动阅读"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24738167',
        },
      ],
    },
    {
      key: 1103,
      name: '📘小说-阅读页-广告-x掉',
      desc: '下方局部广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.kuaishou.novel.home.read.ReaderActivityV2',
          matches:
            '@ImageView[clickable=true] < * < * -2 [childCount=2] >2 [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24738559', //立即下载
            'https://i.gkd.li/i/24760376', //立即打开
            'https://i.gkd.li/i/24994337', //去逛逛
            'https://i.gkd.li/i/26160311', //免费观看
            'https://i.gkd.li/i/26677074', //继续看
            'https://i.gkd.li/i/26748106', //私信咨询
          ],
          exampleUrls: 'https://e.gkd.li/93dbd857-9b6f-4b72-9d41-6c275810d1a9',
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
            '@[clickable=true] >2 [text$="领起床补贴" || text$="领睡觉补贴" || text="开始起床" || text="开始睡觉"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23290616', //领起床补贴
            'https://i.gkd.li/i/23290617', //领睡觉补贴
          ],
        },
        {
          key: 2,
          action: 'back',
          actionDelay: 700,
          matches: '[text="已入睡" || text="已起床"][index=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/24368949', //已入睡
            'https://i.gkd.li/i/25098137', //已入睡
            'https://i.gkd.li/i/24309580', //已起床
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24692945', //任务列表页 [index=1]
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
          actionDelay: 2000,
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
      desc: '①[返回键] ②弹窗 ③领饭补 ④左下角看广告',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①加载中-按[返回键]',
          action: 'back',
          actionDelay: 1500,
          fastQuery: true,
          matches: '[text="加载中"]',
          snapshotUrls: 'https://i.gkd.li/i/27516819',
        },
        {
          key: 2,
          name: '②弹窗',
          fastQuery: true,
          matches:
            '@[clickable=true][getChild(0).text^="看广告" || childCount=0] <n View <3 View < [id="app"] < WebView < WebView < [vid="webView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24455031', // 看广告
            'https://i.gkd.li/i/25074585', // x掉
          ],
        },
        {
          key: 3,
          name: '③领饭补',
          matches:
            '[clickable=true][text*="领" && text*="饭补" || getChild(1).text$="领饭补" || text$="待补签"][!(text*="明" || text*="后")]',
          snapshotUrls: [
            'https://i.gkd.li/i/24454732',
            'https://i.gkd.li/i/24673042',
            'https://i.gkd.li/i/27396449', // 适合key 3、4
            'https://i.gkd.li/i/23381525', // 上方-待补签
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/27478766', // !(text*="明")
            'https://i.gkd.li/i/27695066', // !(text*="后")
          ],
        },
        {
          key: 4,
          name: '④左下角-看广告',
          actionCd: 5000,
          matchDelay: 5000,
          matches:
            '@[clickable=true][left=0] > TextView[text="看广告"][top>1800]',
        },
      ],
    },
    {
      key: 47,
      name: '🧍‍♂️用户资料页-拉黑',
      desc: '(⚠️慎用) ①弹窗拉黑 ②确认 ③已拉黑-返回', //遇到广告用户,或者ks偷偷给你关注的广告用户,可以拉黑
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
    {
      key: 4701,
      name: '🧍‍♂️关注列表页-拉黑',
      desc: '(⚠️慎用) ①点击[拉黑] ②[确认拉黑]',
      enable: false,
      fastQuery: true,
      activityIds:
        'com.yxcorp.gifshow.follower.activity.FollowingFriendActivity',
      rules: [
        {
          key: 1,
          name: '①点击[拉黑]',
          matches: '@[clickable=true] > [text="拉黑"]',
          snapshotUrls: 'https://i.gkd.li/i/30547437',
          exampleUrls: 'https://e.gkd.li/8457604e-1630-4938-9e85-4ff5b98c390f',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②点击[确认拉黑]',
          matches: '@[clickable=true] > [text="确认拉黑"]',
          snapshotUrls: 'https://i.gkd.li/i/30547045',
          exampleUrls: 'https://e.gkd.li/13ea12f2-bcb8-4b47-9921-110126fa17a7',
        },
      ],
    },
    {
      key: 48,
      name: '局部广告-提现完-优惠券弹窗',
      desc: '①x掉 ②返回键 ③弹窗-点击[知道了]',
      fastQuery: true,
      activityIds: [
        'com.kwai.kds.krn.api.page.KwaiRnActivity',
        'com.yxcorp.gateway.pay.activity.PayYodaWebViewActivity',
      ],
      rules: [
        {
          key: 1,
          name: '①x掉',
          anyMatches: [
            'ImageView < @[clickable=true][width<134][height<134] <n [childCount>4] > [text="优惠券即将到期" || text*="券待领"]',
            '[text="优惠券即将到期"] - @[name$="View"][clickable=true][width<80] < View <2 View <3 WebView < * < * < [vid="web_view_container"]',
          ],
          exampleUrls: 'https://e.gkd.li/a5083e28-4cf6-454a-b37f-12cc06781c9a',
          snapshotUrls: [
            'https://i.gkd.li/i/26527978',
            'https://i.gkd.li/i/32433266', // 券待领

            'https://i.gkd.li/i/25730266',
            'https://i.gkd.li/i/26159736',
          ],
        },
        {
          key: 2,
          preKeys: [1],
          name: '②返回键',
          action: 'back',
          actionDelay: 200,
          matches: '[parent=null]',
        },
        {
          key: 3,
          // preKeys: [1,2],
          name: '③弹窗-点击[知道了]',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
          matches:
            '@[text="知道了"][clickable=true] -n [name$="View"] < * < [index=parent.childCount.minus(1)] <6 WebView < * < [vid="webView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/25730402',
            'https://i.gkd.li/i/25996186',
            'https://i.gkd.li/i/26159607',
          ],
        },
      ],
    },
  ],
});
