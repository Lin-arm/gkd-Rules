import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: 0,
      name: '📢说明',
      desc: '(点击查看详情) 目前在用的快手版本: 🔸v12.10.10.39116 ,大部分规则都是从`快手极速版`那里搬过来的,如遇失效或误触请截取快照拿到github反馈.🟢相关脚本已在自动精灵app上传,请到脚本市场搜`🐦快手_自动刷视频`',
      enable: false,
      rules: [],
    },
    {
      key: 1,
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
      key: 2,
      name: '📺脚本❗刷视频-误入页面-返回键', //保持在刷视频页
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
          // snapshotUrls: [
          //   'https://i.gkd.li/i/23777346', //视频页-她的作品(右侧边栏)
          //   'https://i.gkd.li/i/23777882', //视频页-分享(下方弹窗)
          //   'https://i.gkd.li/i/23777756', //视频页-评论区
          //   'https://i.gkd.li/i/22883404', //其他 webView (任务中心)
          // ],
        },
        {
          key: 2,
          action: 'back',
          matches:
            '@SlidingPaneLayout[childCount=1] < [vid="home_activity_root"]',
          // snapshotUrls: 'https://i.gkd.li/i/23778737', //视频页-左边工具栏
          // excludeSnapshotUrls: 'https://i.gkd.li/i/23778837', //正常刷视频页  [childCount=2]
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
      key: 3,
      name: '📺脚本❗刷广告-重启快极-进任务中心',
      desc: '仅在用脚本自动看广告时打开,其余时间🈲用',
      enable: false,
      rules: [
        {
          matches: '[vid="redFloat"][clickable=true]', //视频页-点击红包浮窗
          fastQuery: true,
          // snapshotUrls: 'https://i.gkd.li/i/23989148',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
        },
      ],
    },
    {
      key: 4,
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
      rules: [
        {
          actionDelay: 1500,
          forcedTime: 31000,
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
      key: 8,
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
      key: 9,
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
      key: 10,
      name: '🤳看广告-误入xx页-返回',
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
      key: 12,
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
      key: 13,
      name: '🤳看广告-点1次静音',
      desc: 'app内切换界面后重置',
      enable: false,
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[id="com.smile.gifmaker.commercial_neo:id/award_video_operate_audio_btn"][clickable=true][focusable=true]',
          fastQuery: true,
          // snapshotUrls: 'https://i.gkd.li/i/23213280',
          activityIds: [
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.plugin.search.SearchActivity',
          ],
        },
      ],
    },
    {
      key: 14,
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
      key: 15,
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
      key: 16,
      name: '📡直播间-看完-返回键',
      desc: '直播记时结束->已领取(金币)->退出', // ❗若不生效,注意Animator缩放动画时长不能设为0
      fastQuery: true,
      activityIds: [
        'com.kuaishou.live.core.basic.activity.LivePlayActivity',
        'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
      ],
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
            'FrameLayout[vid="krn_content_container"] >(4,5,6,7,8,9) @ImageView[width=104][height=104 || height=103][visibleToUser=true] < [index=parent.childCount.minus(1)]',
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
      key: 1901,
      name: '📡直播间-主播拍了拍我-返回键',
      desc: '按下 返回键',
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
          matches: '[text^="主播拍了拍我"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24127641',
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
          // snapshotUrls: 'https://i.gkd.li/i/23300668',
        },
      ],
    },
    {
      key: 23,
      name: '📡直播间-清晰度-高清',
      desc: '设清晰度为 流畅or高清',
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
            '[index=parent.childCount.minus(2)] > [text="流畅" || text="高清"][visibleToUser=true]',
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
            'Button[text="立即签到" || text="明天来喂鸭" || text^="继续喂" || text="愉快收下" || text^="领今日奖励"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23433226', //每日签到
            'https://i.gkd.li/i/23419216', //继续喂
            // 'https://i.gkd.li/i/24163296', //明天来喂鸭 无法点击
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
          // excludeSnapshotUrls: 'https://i.gkd.li/i/23695360',
        },
        {
          key: 2,
          preKeys: [1], // 必须限制,否则误触
          matches: 'Image[text=""][width=77 || height=77][clickable=true]',
          // snapshotUrls: 'https://i.gkd.li/i/23567580',
        },
        {
          key: 3,
          actionMaximum: 120,
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
          excludeMatches:
            '[text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0)][visibleToUser=true]', //饲料雨
          matches: 'Button[text="去签到"][left>782][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24083685',
        },
        {
          key: 2,
          matchDelay: 500,
          excludeMatches:
            '[text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0)][visibleToUser=true]', //饲料雨
          matches: [
            '[text$="3次" || text^="搜索并" || text="看精彩广告"] <<2 * + [text="领奖励" || text="去搜索" || text="去观看"][left>782][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23452441',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23563084', // [left=782]
        },
        {
          key: 3, // ③误进直播间-返回键
          preKeys: [2],
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
          key: 4, // ④误进看视频页-返回键
          preKeys: [2],
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
          matches: 'TextView[text="知道了"][visibleToUser=true]',
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
      key: 35,
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
    {
      key: 38,
      name: '🧍‍♂️用户资料页-拉黑',
      desc: '❗②弹窗拉黑 ③确认 ④已拉黑-返回', //遇到广告用户,或者ks偷偷给你关注的广告用户,可以拉黑
      enable: false,
      fastQuery: true,
      activityIds: 'com.yxcorp.gifshow.profile.activity.UserProfileActivity',
      rules: [
        {
          key: 2,
          matches: '[vid="bottom_operation_item_text"][text="拉黑"]',
          // snapshotUrls: 'https://i.gkd.li/i/23910599',
        },
        {
          key: 3,
          preKeys: [2],
          matches: '[vid="positive"][text="确认拉黑"][clickable=true]',
          // snapshotUrls: 'https://i.gkd.li/i/23910626',
        },
        {
          key: 4, //已拉黑-返回键
          preKeys: [3],
          action: 'back',
          matches: '[vid="tv_empty_desc"][text="已拉黑"]',
          // snapshotUrls: 'https://i.gkd.li/i/23910639',
        },
      ],
    },
  ],
});
