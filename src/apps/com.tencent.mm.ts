import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '分段广告-朋友圈广告',
      desc: '⚠️概率误触,子key1误触会按[返回键]',
      enable: false,
      activityIds: [
        '.plugin.sns.ui.SnsTimeLineUI',
        '.plugin.sns.ui.improve.ImproveSnsTimelineUI',
        '.plugin.profile.ui.ContactInfoUI',
      ],
      rules: [
        {
          key: 0,
          name: '①点击[广告]',
          fastQuery: true,
          matches:
            '@LinearLayout[clickable=true] > [text="广告" || text="廣告" || text="Sponsored"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13000395',
            'https://i.gkd.li/i/12905837',
            'https://i.gkd.li/i/13791200',
            'https://i.gkd.li/i/16568338',
          ],
        },
        {
          key: 1,
          name: '①坐标点击[广告]',
          fastQuery: true,
          actionCd: 300,
          actionDelay: 100,
          position: {
            left: 'width * 0.9223',
            top: 'height * 0.5',
          },
          anyMatches: [
            '@LinearLayout >2 [text="广告"][visibleToUser=false]',
            '[index=parent.childCount.minus(1)] >5 [getChild(0).desc$="的头像"] >2 LinearLayout[childCount=2][getChild(0).getChild(0).text!=null][getChild(1).visibleToUser=false]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14783802',
            'https://i.gkd.li/i/15531539',

            'https://i.gkd.li/i/19665911',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/19717709', // 加 [getChild(0).getChild(0).text!=null] 排除误触评论区
            'https://i.gkd.li/i/27969204', // [index=parent.childCount.minus(1)] 排除误触评论区后还继续误触
          ],
        },
        {
          key: 2,
          name: '①单击[广告]', // 子key 的 name 不能相同啊, check 检查会报错, 直接复制进GKD里又可以....
          matches:
            '[getChild(0).desc$="的头像"] >2 [childCount=2] > LinearLayout[text=null][clickable=true][childCount=0][index=1]',
          snapshotUrls: [
            'https://i.gkd.li/i/14647413',
            'https://i.gkd.li/i/19633571',
          ],
        },

        // 预留key
        // 第二段
        {
          preKeys: [0, 1, 2],
          key: 25,
          name: '②点击[关闭]',
          fastQuery: true,
          anyMatches: [
            '[text^="关闭" || text*="Close" || text="關閉此廣告"][clickable=true][visibleToUser=true]', //1
            '@LinearLayout[clickable=true] > [text="关闭该广告" || text*="Close"][visibleToUser=true]', //2
            '@LinearLayout[index=1][clickable=true] <2 * < * - [text*="广告"]', //3
            '@[text="关闭该广告"] -2 [text^="对这条广告不感兴趣"][visibleToUser=true]', //4
          ],
          snapshotUrls: [
            //1
            'https://i.gkd.li/i/13926578',
            'https://i.gkd.li/i/15531274',
            'https://i.gkd.li/i/14207480',
            'https://i.gkd.li/i/15137016',
            'https://i.gkd.li/i/13791202',
            //2
            'https://i.gkd.li/i/14783820',
            'https://i.gkd.li/i/15284966',
            //3
            'https://i.gkd.li/i/14647839',
            'https://i.gkd.li/i/19666176',
            //4
            'https://i.gkd.li/i/19633486',
          ],
        },

        // 预留key
        // 第三段
        {
          preKeys: [25],
          key: 50,
          name: '③点击[关闭]',
          matches:
            '[text="直接关闭" || text="Close" || text="关闭广告"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12663984',
            'https://i.gkd.li/i/12905846',
            'https://i.gkd.li/i/14647940',
            'https://i.gkd.li/i/14783534',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/28927197', // [text="关闭该广告"] , 这是第二段的,用[text*="关闭"]会点击错
        },

        // 预留key
        // 第四段
        {
          preKeys: [50],
          key: 75,
          name: '④点击[确认]',
          fastQuery: true,
          matches:
            '@[text="确认"][visibleToUser=true] -2 [text="不感兴趣原因"]',
          snapshotUrls: 'https://i.gkd.li/i/14647940',
        },

        // 第五段: 误触后的操作
        {
          key: 100,
          preKeys: [1], // 子key1 用坐标点击容易误触
          name: '⑤误触后-按[返回键]', // 进入其它界面时按下[返回键]
          action: 'back',
          fastQuery: true,
          matchRoot: true,
          actionDelay: 50,
          excludeActivityIds: [
            // 这是正常朋友圈的 ActivityId, 排除
            '.plugin.sns.ui.SnsTimeLineUI',
            '.plugin.sns.ui.improve.ImproveSnsTimelineUI',
            '.plugin.profile.ui.ContactInfoUI',
          ],
          activityIds: [], // 匹配其它因误触而进入的界面
          matches: '[parent=null]',
        },
        {
          key: 101,
          preKeys: [1],
          name: '⑤误触右上角-点击[取消]',
          fastQuery: true,
          matches: '@LinearLayout[clickable=true] > [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/27366025', // 误触右上角发朋友圈
        },
      ],
    },
    {
      key: 1,
      name: '🧩小程序-开屏广告-跳过',
      desc: '点击[跳过]',
      rules: [
        {
          actionCd: 200,
          fastQuery: true,
          matches: 'TextView[text="跳过"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22950301',
            'https://i.gkd.li/i/32969391',
            'https://i.gkd.li/i/12785183',
          ],
          activityIds: [
            '.plugin.appbrand.ui.AppBrandUI', //掐头去尾 通配
            '.plugin.appbrand.ui.AppBrandPluginUI',
            '.plugin.appbrand.launching.AppBrandLaunchProxyUI',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '🧩小程序-广告弹窗-x掉',
      desc: '点击[x]',
      rules: [
        {
          actionCd: 300,
          actionDelay: 300, // 太早易误触
          fastQuery: true,
          excludeMatches: '[text="跳过"][visibleToUser=true]', // 防止提前触发
          matches:
            '@ImageView[width<130] < FrameLayout < FrameLayout <2 [index=parent.childCount.minus(1)] - FrameLayout >4 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22944255', //抖快工具
            'https://i.gkd.li/i/22947362', //抖快工具
            'https://i.gkd.li/i/13459614', //提瓦特小助手
          ],
          exampleUrls: 'https://e.gkd.li/af240f53-8ce0-466c-b9b2-39054c78159a',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16958795',
          activityIds: '.plugin.appbrand.ui.AppBrandUI',
        },
      ],
    },
    {
      key: 3,
      name: '🧩小程序-看完30s广告-x掉',
      desc: '①已完成 ②已获得',
      fastQuery: true,
      forcedTime: 60000, // 60秒内一直主动参与屏幕查询
      rules: [
        {
          key: 1,
          name: '①已完成-x掉',
          matchRoot: true,
          matches:
            '[desc^="已完成"] -(1,2) @ImageView[width<100][visibleToUser=true] <n View[childCount>5] <<(6,7) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22947257',
            'https://i.gkd.li/i/24450981', //七猫免费小说
            'https://i.gkd.li/i/26452506', //七猫免费小说2
          ],
          exampleUrls: 'https://e.gkd.li/fb891df0-5e38-433f-8920-7389dd522800',
          activityIds: [
            '.plugin.sns.ad.landingpage.ui.activity.DynamicCanvasPageUI',
            '.plugin.appbrand.ui.AppBrandUI',
          ],
        },
        {
          key: 2,
          name: '②已获得奖励-x掉',
          matches: [
            'TextView[text="已获得奖励"]',
            '@LinearLayout[clickable=true][index=0] +(1,2) TextView[text=" "]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24204085', //视频号广告
            'https://i.gkd.li/i/29969182',
          ],
          exampleUrls: 'https://e.gkd.li/4da635f3-e7fc-411d-a56c-0564cd8c4031',
          activityIds: '.plugin.finder.ui.FinderShareFeedRelUI',
        },
        {
          key: 3,
          name: '③已获得奖励-关闭',
          matches:
            '@[text="关闭"] <<3 [index=parent.childCount.minus(1)] - FrameLayout >3 [text="已获得奖励"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24545151', //微粒贷
            'https://i.gkd.li/i/30338756', //小游戏
            'https://i.gkd.li/i/30339852', //小游戏  ⚠️在该小游戏界面已禁止使用无障碍模拟点击了, 无论 clickNode 还是 clickCenter 都不生效
          ],
          exampleUrls: 'https://e.gkd.li/1ec650be-9fa6-413f-88a5-f8118e836fa6',
          activityIds: [
            '.plugin.appbrand.ui.AppBrandUI',
            '.plugin.appbrand.ui.AppBrandPluginUI',
          ],
        },
        {
          key: 4,
          name: '④直播-已获得奖励-x掉',
          activityIds:
            '.plugin.finder.feed.ui.FinderLiveVisitorWithoutAffinityUI',
          matches:
            '@[desc="关闭直播按钮"][clickable=true] <n [index=0] + ViewGroup >2 [text="已获得奖励"]',
          snapshotUrls: 'https://i.gkd.li/i/25095057',
          exampleUrls: 'https://e.gkd.li/00a82942-dca2-4bca-8c85-2ac094a993c5',
        },
        {
          key: 5,
          name: '⑤已获得奖励-按[返回键]',
          action: 'back', //子key3不生效时的补救
          actionDelay: 500,
          matches:
            '@[text="已获得奖励"] < [childCount=1] + [visibleToUser=true] >2 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30339852', //小游戏
            'https://i.gkd.li/i/30341286', //小游戏  bug-小游戏界面变换未能识别
            'https://i.gkd.li/i/30388374', //小游戏 试玩已结束
          ],
          activityIds: [
            '.plugin.appbrand.ui.AppBrandUI',
            '.plugin.appbrand.ui.AppBrandPluginUI',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '🧩抖快-剪贴板弹窗-自动解析',
      desc: '检测到链接地址-点击[解析]',
      rules: [
        {
          fastQuery: true,
          matches: 'Button[text="解析"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/22944723',
          exampleUrls: 'https://e.gkd.li/c0c83143-c492-4d1a-ad91-5f8bd15b4775',
          activityIds: '.plugin.appbrand.ui.AppBrandUI',
        },
      ],
    },
    {
      key: 402,
      name: '🧩抖快-消息提示-确定',
      desc: '弹窗-点击[确定/看广告/重试]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.plugin.appbrand.ui.AppBrandUI',
          matches:
            '@[text="确定" || text="看广告" || text="重试"] <(2,3) LinearLayout < [visibleToUser=true] - LinearLayout >4 [text^="每日需看一次" || text^="积分+" || text*="中途退出无效" || text$="成功" || text^="网络不稳定"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30343698', //每日需看一次
            'https://i.gkd.li/i/30343700', //积分+
            'https://i.gkd.li/i/30343701', //中途退出无效
            'https://i.gkd.li/i/30504898', // [看广告]
            'https://i.gkd.li/i/31181913', //保存成功
            'https://i.gkd.li/i/31182295', //网络不稳定 [重试]
            'https://i.gkd.li/i/31452091', //下载成功
          ],
          exampleUrls: 'https://e.gkd.li/c7c015e5-3835-4912-b611-a9db72784168',
        },
      ],
    },
    {
      key: 401,
      name: '功能类-长按后[保存图片]',
      desc: '🧩抖快小程序内',
      rules: [
        {
          fastQuery: true,
          forcedTime: 60000, // v8.0.74 版微信,第一次长按图片,大概率不触发
          activityIds: '.plugin.subapp.ui.gallery.GestureGalleryUI',
          matches: '@[clickable=true] >(3,4) [text="保存图片"]',
          snapshotUrls: [
            'https://i.gkd.li/i/26482711',
            'https://i.gkd.li/i/29510014',
          ],
          exampleUrls: 'https://e.gkd.li/d12cb1fe-0e43-4851-af8b-d9ff15d856a0',
        },
      ],
    },
    {
      key: 403,
      name: '局部广告-小程序内悬浮窗',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.plugin.appbrand.ui.AppBrandUI',
          matches:
            '@ImageView[width<68 && height<68] < [childCount=1] < [visibleToUser=true] <3 [width>200 && width<530][childCount=3] >3 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/31455873',
            'https://i.gkd.li/i/31866200',
          ],
          exampleUrls: 'https://e.gkd.li/4de902d8-d5ae-49c5-914f-90098f265674',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-自动抢红包🧧',
      desc: '需进聊天界面才会点击别人发的[红包],蹲抢之前建议进开发者选项关闭那3个动画',
      fastQuery: true,
      actionCd: 500,
      order: -11, // 比其它例如开屏广告(-10)优先匹配
      rules: [
        {
          key: 1,
          name: '①点击[红包]',
          activityIds: [
            '.ui.LauncherUI',
            '.ui.chatting.variants.ChattingMainUI',
          ],
          matches:
            'LinearLayout[childCount=1] >2 @FrameLayout[clickable=true] >2 LinearLayout[getChild(1).childCount=1] +(1,2) RelativeLayout > [text="微信红包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18134826',
            'https://i.gkd.li/i/24347101',
            'https://i.gkd.li/i/26586606',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18134823', // 自己发的， LinearLayout[childCount=1] 区分
            'https://i.gkd.li/i/18134833', // 已领取的， getChild(1).childCount=1 区分
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '②点击[开]红包',
          matchRoot: true,
          activityIds: '.plugin.luckymoney.ui.LuckyMoney',
          matches:
            '@Button[desc="开" || desc="開"] -(2,3) LinearLayout >2 [text$="红包" || text$="紅包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18134828',
            'https://i.gkd.li/i/21177180',
            'https://i.gkd.li/i/25901145',
            'https://i.gkd.li/i/25315061', //zh_TW
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/12567698', // 金币动画的快照
        },
        {
          preKeys: [1, 2],
          name: '③从红包结算界面[返回]',
          activityIds: '.plugin.luckymoney.ui.LuckyMoney',
          matches:
            '@ImageView[desc="返回"] +n LinearLayout >8 [text$="红包" || text$="紅包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18134829',
            'https://i.gkd.li/i/18135031',
            'https://i.gkd.li/i/23825631',
            'https://i.gkd.li/i/24414957',
            'https://i.gkd.li/i/25315062', //zh_TW
          ],
        },
      ],
    },
    {
      key: 45,
      name: '分段广告-视频号评论区内广告',
      desc: '⚠️有概率误触',
      fastQuery: true,
      activityIds: [
        '.plugin.finder.ui.FinderShareFeedRelUI',
        '.plugin.finder.ui.FinderHomeAffinityUI',
      ],
      rules: [
        {
          key: 1,
          name: '①点击[广告](上面的)',
          matches: [
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)][top>getPrev(4).bottom] -n ImageView[desc="头像"] <<3 FrameLayout[index<parent.childCount.minus(1)] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
            // [top>getPrev(4).bottom] 用于避免评论区顶部的遮挡[广告], 在上滑浏览评论时, [广告]可能会被遮挡在顶部
            // FrameLayout[index<parent.childCount.minus(1)] 整个广告框不是末尾节点, 如此应该可让后续坐标点击时 ②[关闭该广告]、③[直接关闭] 出现在 ①[广告] 的下方, 而不是出现在上方
            // 后续第二段、第三段的相对坐标用的都是第一段的选择器
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24834498',
            'https://i.gkd.li/i/24834499',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/24835207', // 输入法遮挡 [visibleToUser=true]
          ],
        },
        {
          key: 2,
          name: '①点击[广告](下面的)',
          matches: [
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)] -n ImageView[desc="头像"] <<3 FrameLayout[index=parent.childCount.minus(1)] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
            // FrameLayout[index=parent.childCount.minus(1)] 整个广告框属于末尾节点, 如此可让 ②[关闭该广告]、③[直接关闭] 出现在 ①[广告] 的上方
          ],
          snapshotUrls: ['https://i.gkd.li/i/24834498'],
        },

        // 第二段
        {
          key: 25,
          preKeys: [1, 2],
          name: '②点击下方的[关闭该广告]的坐标',
          position: {
            //点击出现在[广告]下方的[关闭该广告]
            left: 'width * -0.7469',
            top: 'width * 2.4259',
          },
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)][top>getPrev(4).bottom] -n ImageView[desc="头像"] <<3 FrameLayout[index<parent.childCount.minus(1)] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          snapshotUrls: ['https://i.gkd.li/i/24834568'],
        },
        {
          key: 26,
          preKeys: [1, 2],
          name: '②点击上方的[关闭该广告]的坐标',
          position: {
            //点击出现在[广告]上方的[关闭该广告]
            left: 'width * -0.7469',
            top: 'width * -1.2901',
          },
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)] -n ImageView[desc="头像"] <<3 FrameLayout[index=parent.childCount.minus(1)] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          snapshotUrls: [
            'https://i.gkd.li/i/25476021',
            'https://i.gkd.li/i/24835410',
          ],
        },

        // 第三段
        {
          key: 50,
          preKeys: [25, 26],
          name: '③点击下方[直接关闭]的坐标',
          position: {
            //点击出现在[广告]下方的[直接关闭]
            left: 'width * 0.1296',
            top: 'width * 1.1728',
          },
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)][top>getPrev(4).bottom] -n ImageView[desc="头像"] <<3 FrameLayout[index<parent.childCount.minus(1)] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          snapshotUrls: ['https://i.gkd.li/i/24834571'],
        },
        {
          key: 51,
          preKeys: [25, 26],
          name: '③点击上方的[直接关闭]的坐标',
          position: {
            //点击出现在[广告]上方的[直接关闭]
            left: 'width * 0.1296',
            top: 'width * -2.5247',
          },
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)] -n ImageView[desc="头像"] <<3 FrameLayout[index=parent.childCount.minus(1)] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          snapshotUrls: ['https://i.gkd.li/i/25476022'],
        },

        // 第四段: 因误触出现的页面-返回
        {
          key: 100,
          preKeys: [1, 2, 25, 26, 50, 51],
          name: '④误触-返回评论区',
          // action: 'back',
          anyMatches: [
            '[vid="actionbar_up_indicator"][clickable=true]',
            '@ImageView[clickable=true] <2 FrameLayout[childCount=2] <<3 [id="android:id/content"]',
            '@ImageView[clickable=true][desc="返回"] <<6 FrameLayout <2 LinearLayout <<6 [id="android:id/content"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24836217', // 未加载完'反馈问题'页面的过渡页
            'https://i.gkd.li/i/24834641', // '反馈问题'页
            'https://i.gkd.li/i/24836811', // '了解详情'页
            'https://i.gkd.li/i/25476791', // '下载'页
            'https://i.gkd.li/i/25477084', // '搜索'页
          ],
          activityIds: [
            '.plugin.webview.ui.tools.MMWebViewUI',
            '.plugin.sns.ad.landingpage.ui.activity.HalfScreenVangoghPageUI',
            '.ui.halfscreen.HalfScreenTransparentActivity',
          ],
        },
        {
          key: 101,
          preKeys: [1, 2, 25, 26, 50, 51],
          name: '④误触输入框-返回键',
          action: 'back',
          matches:
            '[desc="表情"] - @RecyclerView <<3 FrameLayout <2 LinearLayout < FrameLayout <2 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          snapshotUrls: 'https://i.gkd.li/i/24835207', // 出现输入法
        },
      ],
    },
    {
      key: 46,
      name: '功能类-自动拨打1次视频通话',
      desc: '(⚠️慎用)依次点击 ①右下角⊕号 ②视频通话 ③选择视频通话',
      // actionMaximum: 1,
      resetMatch: 'app',
      enable: false,
      activityIds: ['.ui.chatting.ChattingUI', '.ui.LauncherUI'],
      rules: [
        {
          key: 1,
          name: '①点击右下角⊕号',
          actionMaximum: 1,
          matches: '[desc^="更多功能按钮"][clickable=true][bottom>2000]',
          snapshotUrls: 'https://i.gkd.li/i/25118402',
        },
        {
          key: 2,
          // preKeys: [1],
          name: '②视频通话',
          fastQuery: true,
          actionMaximum: 2, //有些系统(OnePlus Android 16)第1次点击不生效
          actionDelay: 1500,
          matches:
            '@[clickable=true] >3 [getChild(0).name$="ImageView"] + [text="视频通话"]',
          snapshotUrls: [
            'https://i.gkd.li/i/25118465',
            'https://i.gkd.li/i/25118742',
          ],
        },
        {
          key: 3,
          preKeys: [2],
          name: '③选择视频通话',
          actionMaximum: 1,
          fastQuery: true,
          actionDelay: 500,
          matches:
            '@[clickable=true] > [getChild(0).name$="ImageView"] >2 [text="视频通话"]',
          snapshotUrls: 'https://i.gkd.li/i/25118447',
        },
      ],
    },
  ],
});
