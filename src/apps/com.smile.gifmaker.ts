import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: 0,
      name: '📢说明',
      desc: '(点击查看详情) 目前在用的快手版本: 🔸v14.7.20.49696  🔸v12.10.10.39116 ,大部分规则都是从`快手极速版`那里搬过来的,如遇失效或误触请截取快照拿到github反馈.🟢相关脚本已在自动精灵app上传,请到脚本市场搜`🐦快手_自动刷视频`',
      enable: false,
      rules: [],
    },
    {
      key: 1,
      name: '📺视频页-长按直播-不感兴趣该内容',
      desc: '点击[不感兴趣该内容]',
      rules: [
        {
          fastQuery: true,
          matches:
            '@[clickable=true] >(2,3) [vid="item_title"][text="不感兴趣该内容"]',
          snapshotUrls: 'https://i.gkd.li/i/23386995',
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          ],
        },
      ],
    },
    {
      key: 101,
      name: '📺视频页-长按视频-不感兴趣',
      desc: '点击[不感兴趣]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matches:
            '@[clickable=true] >(2,3) [vid="item_title"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/23567782',
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '🐦脚本刷视频(辅助)-保持在刷视频页',
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
            '[vid="design_bottom_sheet" || (vid="tab_text" && text*="评论") || vid="profile_feed_title" || vid="kcube_tab_strip" || vid="user_name_info_layout" || (vid="tabs" && getChild(0).getChild(0).desc="消息") || vid="webView"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25143290', //视频页-分享(下方弹窗)
            'https://i.gkd.li/i/25143296', //视频页-评论区
            'https://i.gkd.li/i/25143327', //视频页-她的作品(右侧边栏)
            'https://i.gkd.li/i/25143392', //首页-顶部频道栏
            'https://i.gkd.li/i/25143478', //我-用户资料
            'https://i.gkd.li/i/25143535', //消息页
            // 'https://i.gkd.li/i/22883404', //(参考快极)其他 webView (任务中心)
          ],
        },
        {
          key: 2,
          name: '②左边工具栏-返回键',
          action: 'back',
          matches:
            '@SlidingPaneLayout[childCount=1] < [vid="home_activity_root"]',
          snapshotUrls: 'https://i.gkd.li/i/25143446', //视频页-左边工具栏
          excludeSnapshotUrls: 'https://i.gkd.li/i/25143448', //正常刷视频页  [childCount=2]
        },
        {
          key: 3,
          name: '③误进横屏-返回键',
          action: 'back',
          matches: '[parent=null][width>height]',
          snapshotUrls: 'https://i.gkd.li/i/25143597', //进入横屏
        },
        {
          key: 444, //进入非视频页,直接返回
          name: '④进入非视频界面-返回键',
          action: 'back',
          matches: '[parent=null]',
          excludeActivityIds: 'com.yxcorp.gifshow.HomeActivity',
          activityIds: [],
        },
      ],
    },
    {
      key: 3,
      name: '🐦脚本刷广告(辅助)-保持在刷广告相关页', //从隔壁'快极'复制过来的
      desc: '⚠️①重启自进任务中心 ②误进与看广告无关页会返回',
      enable: false,
      fastQuery: true,
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', //子规则里出现最多的界面id
      rules: [
        {
          key: 1,
          matches: '[vid="redFloat"][clickable=true]', //视频页-点击红包浮窗 (配合脚本重启快极后用)
          // snapshotUrls: 'https://i.gkd.li/i/23989148',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
        },
        {
          key: 2,
          matches: [
            '[vid="nasa_groot_view_pager"]',
            '[id="android:id/content"] >5 ImageView + ViewGroup[width>120 && width<140][height>120 && height<140]',
          ],
          // snapshotUrls: [
          //   'https://i.gkd.li/i/24164538',
          //   'https://i.gkd.li/i/24194816',
          // ],
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
        },

        // 以下为自动看广告时,误入其他页面后用的返回键
        {
          key: 11,
          action: 'back',
          matches: '[text="赚饲料"]',
          fastQuery: false, //这条子规则内禁用快查询,否则真机不生效
          // snapshotUrls: 'https://i.gkd.li/i/22908125', //养鸭
        },
        {
          key: 12,
          action: 'back',
          matches: '[text="现金明细"]',
          // snapshotUrls: 'https://i.gkd.li/i/24337097', //我的收益页
        },
        {
          key: 13,
          action: 'back',
          matches: 'WebView[text="快手App邀请好友"]',
          // snapshotUrls: 'https://i.gkd.li/i/24431766', //邀请好友
        },
        {
          key: 14,
          matches:
            'Image - [text="金币游乐园"] - @[clickable=true][getChild(0).name$="Image"] <<3 View <2 View <<3 WebView[text="活动中心"] <<2 [vid="webView"]',
          // snapshotUrls: 'https://i.gkd.li/i/24694311', //小游戏乐园
        },
        {
          key: 15,
          matches:
            '@[text$="瓜分大额奖池"] <2 View < View <2 View <<2 WebView <<2 [vid="webView"]',
          // snapshotUrls: 'https://i.gkd.li/i/25004213', //瓜分百亿金币(3天挑战)
        },
        {
          key: 52,
          action: 'back',
          matches: '[vid="tab_text"][text^="作品"]',
          // snapshotUrls: 'https://i.gkd.li/i/24336755', //直播-用户主页
          activityIds:
            'com.yxcorp.gifshow.profile.activity.UserProfileActivity',
        },
        {
          key: 53,
          activityIds: 'com.kwai.frog.game.engine.adapter.engine.base.',
          matches:
            '[id="com.smile.gifmaker.minigame:id/v_more_view_close_and_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25016961', //小游戏-x掉
        },
        {
          key: 54,
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          matches: [
            '[vid="text"][text="发条有爱评论~"]',
            '@[vid="left_btn"][desc="返回"][clickable=true] + [desc="查找"] + [vid="filter_btn_layout"]',
          ],
          // snapshotUrls: 'https://i.gkd.li/i/24992396', //视频广告页
        },
      ],
    },
    {
      key: 4,
      name: '⛳任务页-弹窗-X掉',
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
      key: 5,
      name: '⛳任务页-刷视频赚金币-领取',
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
            '[text$="金币立即领取"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24102971',
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity', // A
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
          ],
        },
      ],
    },
    {
      key: 6,
      name: '❗网络错误-点击重试',
      desc: '任务页加载出错',
      rules: [
        {
          actionCd: 3500,
          matches: '[vid="retry_btn"][text="点击重试"][clickable=true]',
          fastQuery: true,
          // snapshotUrls: 'https://i.gkd.li/i/23907716',
          activityIds:
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
        },
      ],
    },

    {
      key: 7,
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
          forcedTime: 60000,
          matches:
            '@[id$="video_countdown_end_icon"] - [text^="已成功"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23382541',
        },
        {
          key: 2,
          matches: [
            '[vid="ad_download_text"][text="立即下载"]',
            '[id="com.kuaishou.nebula.commercial_neo:id/video_close_icon"][clickable=true]',
          ],
          // snapshotUrls: 'https://i.gkd.li/i/24279152',
        },
        {
          key: 3,
          name: '③出现弹窗阻碍_x掉',
          matches: 'ImageView + ImageView[vid="close"]',
          // snapshotUrls: [
          //   'https://i.gkd.li/i/29641806',
          //   'https://i.gkd.li/i/29736686',
          // ],
        },
      ],
    },
    {
      key: 8,
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
          snapshotUrls: 'https://i.gkd.li/i/23387069',
        },
        {
          key: 2,
          name: '②x掉需下载app的任务',
          forcedTime: 3600000,
          matches:
            '@[clickable=true][desc="close_view"] +2 [text^="下载并体验"]',
          // snapshotUrls: 'https://i.gkd.li/i/27400869',
        },
        {
          key: 3,
          name: '③点击[额外]获取金币',
          actionCd: 14500,
          resetMatch: 'app', // 对 actionCd 也生效
          matches:
            '@[clickable=true] >(1,2,3) [text*="额外"][!(text*="下载" || text*="付费" || text*="买入" || text*="订购")]',
          snapshotUrls: 'https://i.gkd.li/i/23394927',
        },
      ],
    },
    {
      key: 9,
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
          snapshotUrls: 'https://i.gkd.li/i/32434117',
        },
        {
          key: 2,
          name: '②确认退出',
          matches:
            'ImageView < @[desc="close_view"] + [visibleToUser=true] > [text="1金币"]',
          snapshotUrls: 'https://i.gkd.li/i/32434121',
        },
      ],
    },
    {
      key: 10,
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
          name: '①刚切回快极app-返回键',
          matchTime: 3000, // 刚刚切回快手app的3秒内有效
          actionDelay: 500,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            '[vid="title_root"] > [vid="left_btn"][desc="返回"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23439913',
            'https://i.gkd.li/i/23439943',
            'https://i.gkd.li/i/23748402', //渠道五
            'https://i.gkd.li/i/25017254', //气象通
            'https://i.gkd.li/i/25017298', //广告平台
            'https://i.gkd.li/i/25069169', //腾讯优量汇
            'https://i.gkd.li/i/25069229',
            'https://i.gkd.li/i/25077842', //集惠购
          ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/26376188', //加 [desc="返回"] 排除, GKD捉不到 activityId 时会误触
        },
        {
          key: 2,
          name: '②待4.5秒后-返回键',
          matchDelay: 3000,
          actionDelay: 4500,
          matches:
            '[vid="title_root"] > [vid="left_btn"][desc="返回"][clickable=true][visibleToUser=true]', //返回
          snapshotUrls: [
            'https://i.gkd.li/i/25018347', // ksH5
            'https://i.gkd.li/i/23689657',
            'https://i.gkd.li/i/25017691', //应用名称：趣享天天
            'https://i.gkd.li/i/25017117', //未加载
          ],
        },
        {
          key: 3,
          name: '③xx下载页-返回键',
          action: 'back',
          actionDelay: 1000,
          matches:
            '[text^="下载" && text$="立得奖励" || text="快影" || text="券和福利" || text*="喜番"][visibleToUser=true]',
          // snapshotUrls: [
          //   'https://i.gkd.li/i/23431442',
          //   'https://i.gkd.li/i/24352704', //快影
          //   'https://i.gkd.li/i/25002586', //ks年货节
          //   'https://i.gkd.li/i/30867792', //喜番
          // ],
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
        },
        {
          key: 5,
          name: '⑤领限时福利',
          matches:
            '@Button[text="立即打开"][clickable=true] -n [text="限时福利"] <<2 WebView <<2 [vid="webView"] - * > [vid="title_tv"][text^="限时福利"]',
          snapshotUrls: 'https://i.gkd.li/i/25017444',
        },
      ],
    },
    {
      key: 11,
      name: '🤳看广告-自动看广告',
      desc: '点击[领福利]',
      rules: [
        {
          actionCd: 10000,
          matchDelay: 3500,
          forcedTime: 15000,
          matches:
            '@[clickable=true] - * > [text^="单日最高" || getChild(0).text^="单日最高"] -n [visibleToUser=true][text="看广告得金币"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23420409',
            'https://i.gkd.li/i/32434026',
          ],
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
            'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity',
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
            'com.kuaishou.growth.pendant.coin.task.widget.click.GrowthKSYodaWebViewActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '🤳看广告-自动开宝箱',
      desc: '任务列表-开宝箱-进去看广告',
      activityIds: [
        'com.yxcorp.gifshow.HomeActivity',
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity',
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
        'com.kuaishou.growth.pendant.coin.task.widget.click.GrowthKSYodaWebViewActivity',
      ],
      rules: [
        {
          key: 1,
          name: '①开宝箱',
          forcedTime: 30000,
          matches:
            'Button[clickable=true][text^="点可领" || text^="点击领"][text$="金币"][parent.getChild(0).name$="Image"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23420409',
            'https://i.gkd.li/i/32434026',
          ],
        },
        {
          key: 2,
          name: '②(弹窗)去看广告',
          matches: 'Button[clickable=true][text^="去看广告得"][text$="金币"]',
        },
      ],
    },
    {
      key: 14,
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
          snapshotUrls: 'https://i.gkd.li/i/23382561',
        },
        {
          key: 2,
          forcedTime: 3600000,
          matches:
            '[getChild(0).text*="再看1个"] + * > @[clickable=true] > [text^="领取"][text$="奖励"]',
          snapshotUrls: 'https://i.gkd.li/i/31460712',
        },
      ],
    },
    {
      key: 15,
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
          snapshotUrls: ['https://i.gkd.li/i/23395007'],
        },
        {
          key: 2,
          name: '②直播中途结束-返回键',
          action: 'back',
          actionCd: 15000,
          matches:
            '[text="直播已结束" || text^="直播涉及违规"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23748189',
            // 'https://i.gkd.li/i/24337020', //违规被关
          ],
        },
        {
          key: 3,
          name: '③直播中途结束-弹窗放弃',
          matches: '[text="换一个"] -2 [text="放弃奖励"][visibleToUser=true]',
          // snapshotUrls: 'https://i.gkd.li/i/23421843',
        },
      ],
    },
    {
      key: 16,
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
          snapshotUrls: ['https://i.gkd.li/i/23386908'],
        },
        {
          key: 2, // 去金币购 看的3次直播
          action: 'none',
          matches: '[vid="pendant_task_status"][text$="00:01"]', // 倒计时01秒
          snapshotUrls: 'https://i.gkd.li/i/23790334',
        },
        {
          key: 3,
          preKeys: [2],
          actionDelay: 1100,
          action: 'back',
          matches: '[vid="live_play_root_container"]',
        },
      ],
    },
    {
      key: 17,
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
          // snapshotUrls: 'https://i.gkd.li/i/22982128',
        },
        {
          key: 2,
          name: '②主播拍了拍我-返回',
          action: 'back',
          matches: '[text^="主播拍了拍我"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24127641',
        },
        {
          key: 3,
          name: '③招工弹窗-x',
          matches: 'ImageView < @[clickable=true] - [text$="为您推荐优选职位"]',
          snapshotUrls: 'https://i.gkd.li/i/23567767',
        },
        {
          key: 4,
          name: '④预约直播弹窗-x',
          matches:
            'ImageView[width<80][height<80][visibleToUser=true] <<2 @[clickable=true] <2 * <2 * < [vid="krn_content_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23382944',
        },
        {
          key: 5,
          name: '⑤右侧边栏-关闭',
          matches:
            '[vid="photo_feed_side_bar_close_view"][clickable=true][visibleToUser=true]',
          // snapshotUrls: 'https://i.gkd.li/i/23300668',
        },
        {
          key: 6,
          name: '⑥邀请加入语音派对-x',
          matches:
            '[id="com.smile.gifmaker.live_audience_plugin:id/live_voice_party_audience_being_invited_bottom_panel_close"][clickable=true]',
          // snapshotUrls: 'https://i.gkd.li/i/24203582',
        },
        {
          key: 7,
          name: '⑦商品列表',
          action: 'back',
          matches:
            '@[clickable=true][focusable=true] >(1,2) [text="订单" || text="购物车"][visibleToUser=true]',
          // snapshotUrls: [
          //   'https://i.gkd.li/i/24352654',
          //   'https://i.gkd.li/i/24352662',
          // ],
        },
        {
          key: 8,
          name: '⑧送票助我上人气榜',
          action: 'back',
          matches:
            '[focusable=true][top>2000][index=parent.childCount.minus(1)] > [text^="点击免费送出"]',
          // snapshotUrls: 'https://i.gkd.li/i/24455158',
        },
        {
          key: 9,
          name: '⑨今日榜单弹窗-x掉',
          matches:
            'ImageView <<2 @[clickable=true] - ViewGroup >4 [text="查看今日榜单"]',
          // snapshotUrls: 'https://i.gkd.li/i/24926207',
        },
        {
          key: 10,
          name: '10.邀关注-x掉',
          matches:
            '@ImageView[id$="anchor_close"][clickable=true] +n [text="立即关注"]',
          // snapshotUrls: 'https://i.gkd.li/i/22659582',
        },
        {
          key: 11,
          name: '11.久看邀关注-返回键',
          action: 'back',
          actionCd: 2000,
          matches: '[text$="看了这么久，帮我点个关注吧！"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23383026',
        },
        {
          key: 12,
          name: '12.出半个主播主页-返回键',
          action: 'back',
          actionCd: 2000,
          matches:
            '[text="主页"] +2 [clickable=true] > [text="关注"][visibleToUser=true]',
          // snapshotUrls: 'https://i.gkd.li/i/23542497',
        },
      ],
    },
    {
      key: 18,
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
            // 'FrameLayout[vid="krn_content_container"] >(4,5,6,7,8,9) @ImageView[width>94 && width<106][height>94 && height<106][visibleToUser=true] < [index=parent.childCount.minus(1)]',
            '[index=parent.childCount.minus(1)] > @ImageView[width>94 && width<106][height>94 && height<106][top>1000 && top<1800] <<n [vid="krn_content_container"]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23450509',
            'https://i.gkd.li/i/23450530',
            'https://i.gkd.li/i/24352825', //跨年团购节
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
      key: 23,
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
          // snapshotUrls: [
          //   'https://i.gkd.li/i/23607208',
          //   'https://i.gkd.li/i/23642513',
          // ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/23908016',
        },
        {
          key: 2,
          preKeys: [1],
          matches:
            '@[index=parent.childCount.minus(2)][clickable=true] > [text="流畅" || text="高清"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23383071',
        },
      ],
    },
    {
      key: 24,
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
            'https://i.gkd.li/i/23433226', //每日签到
            'https://i.gkd.li/i/23419216', //继续喂
            // 'https://i.gkd.li/i/24163296', //明天来喂鸭 无法点击
            'https://i.gkd.li/i/24415468', //饲料雨收获(翻10倍)
          ],
        },
        {
          key: 2, //每日签到-已签到-x掉
          preKeys: [1],
          matches:
            'Image[width=76 || width=77][height=77 || height=78][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23433012',
        },
        {
          key: 6, //抓鸭签到返回
          action: 'back',
          matches:
            'Button[text="待领取" || text="已领取"][height!=64][visibleToUser=true]',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23452401', // 误触页
        },
      ],
    },
    {
      key: 25,
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
          // snapshotUrls: [
          //   'https://i.gkd.li/i/22883176',
          //   'https://i.gkd.li/i/23750724',
          // ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/24415454', //饲料雨来袭
            'https://i.gkd.li/i/24415468', //饲料雨收获
          ],
        },
        {
          key: 2,
          preKeys: [1], // 必须限制,否则误触
          excludeMatches:
            '[text="赚饲料" || text="签到提醒" || text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"][visibleToUser=true]',
          matches: 'Image[text=""][width=77 || height=77][clickable=true]',
          // snapshotUrls: 'https://i.gkd.li/i/23567580',
        },
        {
          key: 3,
          name: '③6秒喂1次鸭',
          actionMaximum: 120,
          matchDelay: 2000,
          actionCd: 6000,
          excludeMatches:
            '[text="赚饲料" || text="签到提醒" || text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"][visibleToUser=true]',
          matches:
            '[id="app"][parent.childCount=1] >(6,7,8) View[id="foodBottomIcon"] < * + [visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23419014',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23433012',
            'https://i.gkd.li/i/24078870', //饲料雨(快极)  [id="app"][parent.childCount=1]
          ],
        },
      ],
    },
    {
      key: 26,
      name: '🦆养鸭-赚饲料-任务',
      desc: '①去签到 ②领奖or去搜索or观看',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①去签到',
          excludeMatches:
            '[text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"][visibleToUser=true]', //饲料雨
          matches: 'Button[text="去签到"][left>782][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24083685',
        },
        {
          key: 2,
          name: '②领奖or去搜索or观看',
          matchDelay: 500,
          forcedTime: 5000,
          excludeMatches:
            '[text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"][visibleToUser=true]', //饲料雨
          matches: [
            '[text$="3次" || text^="搜索并" || text="看精彩广告"] <<2 * + [text="领奖励" || text="去搜索" || text="去观看"][left>782][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23452441',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23563084', // [left=782]
        },
        {
          key: 3,
          preKeys: [2],
          name: '③误进直播间-返回键',
          action: 'back',
          matches:
            '[id="com.smile.gifmaker.live_audience_plugin:id/live_slide_container"]',
          fastQuery: true,
          // snapshotUrls: 'https://i.gkd.li/i/23561481', //快极
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
          snapshotUrls: 'https://i.gkd.li/i/24123496',
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
      ],
    },
    {
      key: 27,
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
      key: 28,
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
      key: 29,
      name: '🔍搜索页-开定位-以后再说',
      desc: '弹窗开定位-以后再说',
      rules: [
        {
          matches: [
            '[vid="title"][text="开启定位服务"]',
            '[vid="negative"][text="以后再说"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23907535',
          activityIds: 'com.yxcorp.plugin.search.SearchActivity',
        },
      ],
    },
    {
      key: 30,
      name: '🎮小游戏-退出弹窗-x掉',
      desc: '弹窗->点击 ①知道了 ②以后再说',
      fastQuery: true,
      activityIds: 'com.kwai.frog.game.engine.adapter.engine.base.', //小游戏Activity前缀
      rules: [
        {
          key: 1,
          matches:
            '@[clickable=true] >(1,2) TextView[text="知道了"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23382865',
            'https://i.gkd.li/i/23419122',
          ],
        },
        {
          key: 2,
          matches: '[text="以后再说"][visibleToUser=true]',
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
          // snapshotUrls: 'https://i.gkd.li/i/22865063',
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
      key: 34,
      name: '逛街赚金币-自动领💰,退',
      desc: '①领金币(需冻结快极) ③返回键 ④弹窗-放弃',
      fastQuery: true,
      activityIds: 'com.yxcorp.gifshow.ad.rn.AdKwaiRnActivity',
      rules: [
        {
          key: 1,
          name: '①点击打开快极',
          actionDelay: 1500,
          matches:
            '@[text^="+"][text$="0"] + [text="打开极速版"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24353048',
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
          name: '③返回键',
          action: 'back',
          actionMaximum: 2,
          actionCd: 2500,
          resetMatch: 'app',
          excludeMatches: '@[text!="+10"] + [text="浏览领取"]', // 若是10金币,直接退出
          matches: '[text="明天签到"]',
          // snapshotUrls: 'https://i.gkd.li/i/23582306',
        },
        {
          key: 4,
          name: '④退出(弹窗)-放弃',
          matches:
            '[text="继续浏览可获得奖励"] +3 [text="放弃"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23382590',
        },
      ],
    },
    {
      key: 35,
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
            'https://i.gkd.li/i/23420482', //看广告领睡觉补贴
            'https://i.gkd.li/i/25074684', //开始睡觉
          ],
        },
        {
          key: 2,
          action: 'back',
          actionDelay: 700,
          matches: '[text="已入睡" || text="已起床"][index=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/25127852', //已入睡
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/25116719', //任务列表页 [index=1]
        },
      ],
    },
    {
      key: 36,
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
          snapshotUrls: 'https://i.gkd.li/i/23382648',
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
          // snapshotUrls: 'https://i.gkd.li/i/23907270',
        },
      ],
    },
    {
      key: 37,
      name: '🍚饭点-领补贴',
      desc: '①饭补 ②弹窗 ③待补签 ④左下角看广告',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①中部-领饭补',
          matches:
            '[text="看广告领饭补" || text="领取饭补"] <2 [clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23382637',
            'https://i.gkd.li/i/25069440',
          ],
        },
        {
          key: 2,
          name: '②弹窗',
          matches:
            '@[clickable=true][index=parent.childCount.minus(2)] > [text="看视频最高可得" || text="看广告最多再得"] +2 [text="金币"]',
          snapshotUrls: 'https://i.gkd.li/i/23382759',
        },
        {
          key: 3,
          name: '③上部-待补签',
          matches:
            '[text^="+"][text$="金币"] + [text$="待补签"][clickable=true]',
        },
        {
          key: 4,
          name: '④左下角-看广告',
          actionCd: 5000,
          matches:
            '@[clickable=true][left=0] > TextView[text="看广告"][top>1800]',
        },
        {
          key: 5,
          name: '⑤弹窗-x掉',
          matches:
            '@[clickable=true] - [index=parent.childCount.minus(2)][getChild(0).text="看视频 赚更多"] -n [text^="恭喜获得"][text$="补贴"]',
          snapshotUrls: 'https://i.gkd.li/i/25074259',
        },
      ],
    },
    {
      key: 38,
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
          // snapshotUrls: 'https://i.gkd.li/i/23910599',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②确认拉黑',
          matches: '[vid="positive"][text="确认拉黑"][clickable=true]',
          // snapshotUrls: 'https://i.gkd.li/i/23910626',
        },
        {
          key: 3,
          preKeys: [2],
          name: '③已拉黑-返回',
          action: 'back',
          matches: '[vid="tv_empty_desc"][text="已拉黑"]',
          // snapshotUrls: 'https://i.gkd.li/i/23910639',
        },
      ],
    },
  ],
});
