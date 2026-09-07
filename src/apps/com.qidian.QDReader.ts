import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 1,
      name: '📆每日福利-看完广告-知道了',
      desc: '点击[知道了]',
      rules: [
        {
          matches: 'TextView[text="知道了"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22909666', //422
            'https://i.gkd.li/i/24339296', //428
            'https://i.gkd.li/i/29213021', //428 书粉节活动
          ],
          activityIds: '.ui.activity.QDBrowserActivity',
        },
      ],
    },
    {
      key: 2,
      name: '📆每日福利-自动去看广告',
      desc: '点击[去完成](❗配合QD模块用)',
      enable: false,
      rules: [
        {
          actionCd: 1700, // 配合QD模块,免看广告领奖励 使用
          // excludeMatches: '[text*="验证"][focusable=true][visibleToUser=true]', // 排除验证弹窗(遇则停)
          // matches: '[id="video"] >(1,2) [text="去完成"][visibleToUser=true]',
          matches:
            'WebView[!((getChild(childCount.minus(1)).id*="tcaptcha" && getChild(childCount.minus(1)).visibleToUser=true) || getChild(childCount.minus(2)).id*="tcaptcha")] >2 [id="video"] >(1,2) [text="去完成"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23290942', // 422
            'https://i.gkd.li/i/23565148', // 422 有隐藏的验证弹窗 [id*="tcaptcha"][visibleToUser=false]
            'https://i.gkd.li/i/23561866', // 420
            'https://i.gkd.li/i/23561912', // 428
            'https://i.gkd.li/i/26500210', // 422 [text="去完成"]被遮挡,但是[clickable=true]
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23562885', // 加 [id="video"] 限制
            'https://i.gkd.li/i/23610102', // 422 验证弹窗
            'https://i.gkd.li/i/26336514', // 428 验证弹窗 (个别手机出了验证弹窗还继续点击[去完成])
          ],
          activityIds: '.ui.activity.QDBrowserActivity',
        },
      ],
    },
    {
      key: 3,
      name: '📆每日福利-自动抽奖',
      desc: '点击 抽奖(❗配合QD模块用)(起点422)',
      enable: false,
      activityIds: '.ui.activity.QDBrowserActivity',
      rules: [
        {
          key: 1,
          name: '①去抽奖',
          actionDelay: 5000, // 先留5秒给 书粉节 弹窗
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[text^="抽奖机会" || text="做任务可抽奖"][text!$="×0"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24421774', //422
            'https://i.gkd.li/i/24426825', //422 签到详情页
            'https://i.gkd.li/i/29213168', //428
            // 'https://i.gkd.li/i/23561866', //420
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24426902', //抽奖机会 ×0
        },
        {
          key: 2,
          name: '②弹窗-抽奖',
          actionCd: 1500,
          matches:
            '[text="福利中心" || text="签到详情"] >n [text="抽奖" || text$="抽奖机会+1"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24369418', //做任务抽奖机会+1
            'https://i.gkd.li/i/24426793', //抽奖
          ],
        },
        {
          key: 3,
          name: '③抽完奖-x掉',
          matches:
            '[text^="明"][text$="再来"] +3 [clickable=true][childCount=1][index=parent.childCount.minus(1)]',
          snapshotUrls: [
            'https://i.gkd.li/i/24369440', //明天再来
            'https://i.gkd.li/i/26273751', //明日再来
          ],
        },
      ],
    },
    {
      key: 301,
      name: '📆每日福利-周日碎片兑换',
      desc: '自动兑换20点章节卡 (起点422)',
      enable: false,
      activityIds: '.ui.activity.QDBrowserActivity',
      rules: [
        {
          key: 1,
          actionMaximum: 1,
          name: '①弹窗-30张碎片兑换',
          matches: '[text="30张碎片兑换"] + [text="兑换"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24421862', //422
          ],
        },
        {
          key: 2,
          preKeys: [1],
          name: '②弹窗-确认兑换',
          matches: '[text="取消"] + [text="兑换"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24421890',
        },
        {
          key: 3,
          preKeys: [1, 2],
          name: '③兑换完-x掉',
          matches: [
            '[text="15张碎片兑换"] + [text="碎片不足"]',
            '[text="兑换章节卡"] - [text=""][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24421899',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动[领积分]',
      desc: '📆每日福利页-点击[领积分]',
      order: 2,
      rules: [
        {
          actionCd: 2000, //太快容易导致退出福利中心
          actionDelay: 100,
          activityIds: '.ui.activity.QDBrowserActivity',
          matches: '[id="read"] >(1,2) [text="领积分"]',
          snapshotUrls: 'https://i.gkd.li/i/24100818',
        },
      ],
    },
    {
      key: 401,
      name: '功能类-退出阅读后去领积分',
      desc: '配合 自动[领积分] 规则使用',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      scopeKeys: 17, // 关联 key17 功能类-听书自动设置定时, 防止被其前置条件的触发记录顶掉,导致无法触发第二段
      activityIds: '.ui.activity.MainGroupActivity', //首页
      rules: [
        {
          key: 10,
          name: '①在阅读页停留5秒以上',
          action: 'none',
          actionDelay: 5000, //起码停留5秒
          resetMatch: 'match',
          activityIds: '.ui.activity.QDReaderActivity', //正文阅读页
          matches: '[vid="qd_reader_layoutRoot"]',
          snapshotUrls: 'https://i.gkd.li/i/30867948',
        },

        // 第二段
        // 满足领积分的时间梯度: 5, 15, 30, 60, 120 分钟
        {
          key: 20,
          preKeys: [1, 10], // 其中 key1 是 key17 内的子规则
          name: '②阅读时长5~14分钟',
          action: 'none',
          matches:
            '[text="分钟"] - [vid="tvTipNum"][text.toInt()>4 && text.toInt()<15]',
        },
        {
          key: 21,
          preKeys: [1, 10],
          name: '②阅读时长15~29分钟',
          action: 'none',
          matches:
            '[text="分钟"] - [vid="tvTipNum"][text.toInt()>14 && text.toInt()<30]',
        },
        {
          key: 22,
          preKeys: [1, 10],
          name: '②阅读时长30~59分钟',
          action: 'none',
          matches:
            '[text="分钟"] - [vid="tvTipNum"][text.toInt()>29 && text.toInt()<60]',
          snapshotUrls: 'https://i.gkd.li/i/30868046', // 第二段 全都参考该快照
        },
        {
          key: 23,
          preKeys: [1, 10],
          name: '②阅读时长60~119分钟',
          action: 'none',
          matches:
            '[text="分钟"] - [vid="tvTipNum"][text.toInt()>59 && text.toInt()<120]',
        },
        {
          key: 24,
          preKeys: [1, 10],
          name: '②阅读时长大于119分钟',
          action: 'none',
          matches: '[text="分钟"] - [vid="tvTipNum"][text.toInt()>119]',
        },

        // 第三段
        {
          key: 30,
          preKeys: [20, 21, 22, 23, 24],
          name: '③进入每日福利页',
          resetMatch: 'match',
          matches: '@[vid="btnCheckIn"] >2 [text="领福利" || text="签到"]',
          snapshotUrls: 'https://i.gkd.li/i/22634962',
        },
      ],
    },
    {
      key: 501,
      name: '🧧发现-自动进[红包广场]',
      desc: '点击[红包广场](❗用前请到开发者选项关闭那3个动画)',
      enable: false,
      rules: [
        {
          actionCd: 200,
          matches:
            '@[clickable=true][childCount>1] > [text="红包广场"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24399266', //起点422
          excludeSnapshotUrls: 'https://i.gkd.li/i/24993575', // 书架页-弹窗 [childCount>1]
          exampleUrls: 'https://e.gkd.li/885c5353-7a7f-4fd7-beb6-69203de19522',
          activityIds: '.ui.activity.MainGroupActivity',
        },
      ],
    },
    {
      key: 5,
      name: '🧧发现-红包广场-抢月包',
      desc: '点击1次[抢],章节卡的不抢,也许关了这条规则用手抢更好',
      enable: false,
      rules: [
        {
          key: 1,
          order: -2,
          fastQuery: true,
          matchRoot: true,
          forcedTime: 600000, // 主动查询10分钟
          actionMaximum: 1,
          activityIds: [
            '.flutter.HongBaoSquareActivity',
            '.ui.activity.MainGroupActivity',
          ],
          matches:
            '@ImageView[desc$="点\\n抢"][clickable=true] <6 View <n ScrollView <3 View[childCount=3] <4 View[childCount=4] < [childCount=1] < [childCount=1] < [childCount=1] < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/23291716', //起点422
          excludeSnapshotUrls: 'https://i.gkd.li/i/30651882', //起点428 已抢完
        },
      ],
    },
    // {
    //   key: 6,
    //   name: '🐞发现-红包广场-抢月包(测试)',
    //   desc: '点击 已抢完 (测试用,真抢时请关闭)',
    //   enable: false,
    //   fastQuery: true,
    //   matchRoot: true,
    //   rules: [
    //     {
    //       key: 0,
    //       name: '初进Activity时间点🔴🟡🟢',
    //       action: 'none',
    //       actionMaximum: 1,
    //       matches: '[parent=null]', // 根节点
    //     },
    //     {
    //       key: 1,
    //       actionCd: 300,
    //       actionMaximum: 3,
    //       matches:
    //         '@ImageView[desc$="点\\n已抢完"][clickable=true] <6 View <n ScrollView <3 View[childCount=3] <4 View[childCount=4] <<5 [id="android:id/content"]',
    //       snapshotUrls: 'https://i.gkd.li/i/24323139',
    //       exampleUrls: 'https://e.gkd.li/4b8f7243-aff9-42d3-bfdf-772c1088e7c2',
    //       activityIds: [
    //         '.ui.activity.MainGroupActivity',
    //         '.flutter.HongBaoSquareActivity',
    //       ],
    //     },
    //   ],
    // },
    {
      key: 7,
      name: '🧧抢月包-弹窗-投月票',
      desc: '弹窗-点击 开',
      enable: false,
      rules: [
        {
          order: -2,
          actionCd: 100,
          actionDelay: 120, //加个延时,点太快了可能不妥
          excludeMatches: '[text*="验证"][focusable=true][visibleToUser=true]', // 排除验证弹窗
          matches:
            '@[clickable=true] > [vid="getHongbaoTv"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23299140',
          exampleUrls: 'https://e.gkd.li/fe7ebb16-94e5-436d-8998-ed76a7cbd65e',
          // excludeSnapshotUrls: [
          //   'https://i.gkd.li/i/23562885',
          //   'https://i.gkd.li/i/23610102', // 422 验证弹窗
          // ],
          activityIds: [
            '.ui.activity.MainGroupActivity',
            '.flutter.HongBaoSquareActivity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '🧧抢月包-已抢完弹窗-x掉',
      desc: '弹窗-已抢完-x掉',
      enable: false,
      rules: [
        {
          order: -2,
          actionCd: 100,
          fastQuery: true,
          matches: '@[vid="btnHongbaoClose"] - * >2 [text="已抢完"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23291755', //A
            'https://i.gkd.li/i/28931164', //B
          ],
          exampleUrls: 'https://e.gkd.li/2ed31c5e-f498-4903-a781-58a1e885de69',
          activityIds: [
            '.ui.activity.MainGroupActivity', //A
            '.flutter.HongBaoSquareActivity', //B
          ],
        },
      ],
    },
    {
      key: 9,
      name: '📖阅读页-任务弹窗-放弃',
      desc: '退出阅读时弹窗-不领任务',
      rules: [
        {
          matches: '[vid="btnLeave"][text="急迫离开"][clickable=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24338232', //阅读满30秒,领取2点章节卡
          activityIds: '.ui.activity.QDReaderActivity',
        },
      ],
    },
    {
      key: 10,
      name: '📚书架-开更新提醒-x掉',
      desc: '小横幅广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.MainGroupActivity',
          matches: 'ImageView < [vid="ivUpdateNoticeClose"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24913610',
        },
      ],
    },
    {
      key: 11,
      name: '🎁投月票后开宝箱-确认',
      desc: '弹窗-确认',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.QDBrowserActivity',
          matches:
            '@Button[text="确认"][clickable=true] <3 View < View <2 View <4 WebView[text="月票"] <<3 [vid="webViewContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/24993649',
          exampleUrls: 'https://e.gkd.li/a2c614a5-94ee-4cc6-a18a-9c913fb57562',
        },
      ],
    },
    {
      key: 15,
      name: '功能类-自动[签到]并跳转[福利中心]',
      desc: '①点击[签到] ②进福利中心(❗配合QD模块用)',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.ui.activity.MainGroupActivity',
      rules: [
        {
          key: 1,
          name: '①点击[签到]',
          actionDelay: 500, //防止节点未更新而导致误触
          excludeMatches: '[vid="tvTipNum"][text="--"][visibleToUser=true]',
          matches: '@[vid="btnCheckIn"] >2 [text="签到"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22634962',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23211622', // 未加载完?
        },
        {
          key: 2,
          preKeys: [1],
          name: '②点击[领福利]',
          matches: '@[vid="btnCheckIn"] >2 [text="领福利"]',
          snapshotUrls: 'https://i.gkd.li/i/23210761', // 已签到, 点击[领福利]
        },
      ],
    },
    {
      key: 16,
      name: '功能类-订阅至最新章后自动[返回]',
      desc: '返回小说正文页 (对于自定义订阅不可用)',
      fastQuery: true,
      activityIds: [
        '.ui.activity.QDDirectoryActivity',
        '.ui.activity.SplashActivity',
        '.ui.activity.QDReaderActivity',
      ],
      rules: [
        {
          key: 1,
          name: '①未订最新章-待后续',
          action: 'none',
          actionMaximum: 1, //不点击,防止触发记录过多
          matches: '[text^="订阅后续付费章"]',
          snapshotUrls: 'https://i.gkd.li/i/26221300',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②已订最新章-返回键',
          action: 'back',
          matches: '[text="已订阅至最新章节"]',
          snapshotUrls: [
            'https://i.gkd.li/i/26220488',
            'https://i.gkd.li/i/27051045',
            'https://i.gkd.li/i/27156111', // 小说正文页
          ],
          exampleUrls: 'https://e.gkd.li/40df3df2-a5a5-4044-bf82-8622396bf39a',
        },
        {
          key: 3,
          preKeys: [2],
          name: '③退出目录',
          matches:
            '@[vid="btnBack"][clickable=true] + * >6 [vid="layoutTitle"][text="目录"]',
          snapshotUrls: 'https://i.gkd.li/i/26221238',
        },
      ],
    },
    {
      key: 17,
      name: '功能类-听书自动设置定时',
      desc: '①出现听书按钮 ②点击[定时] ③启用[上次定时] ④[返回]阅读界面',
      enable: false,
      fastQuery: true,
      // actionMaximum: 1,
      actionCd: 10000,
      activityIds: '.ui.modules.listening.playpage.AudioPlayActivity',
      rules: [
        {
          key: 1,
          name: '①前置条件-出现听书按钮',
          action: 'none', // 无操作,仅作为前置条件
          activityIds: '.ui.activity.QDReaderActivity',
          matches: '[vid="ivAudioB"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/31701983',
          excludeSnapshotUrls: 'https://i.gkd.li/i/31702630', //正在听书
          exampleUrls: 'https://e.gkd.li/b4a630f5-af25-4825-8529-7047d7fbd3ea',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②点击[定时]',
          actionDelay: 500,
          matches: '@[clickable=true] > [vid="tvTime"][text="定时"]',
          snapshotUrls: 'https://i.gkd.li/i/31701986',
          excludeSnapshotUrls: 'https://i.gkd.li/i/31701990', //已设有定时
          exampleUrls: 'https://e.gkd.li/dee13020-74f1-44a5-9e6d-9b7ba67b0cd1',
        },
        {
          key: 3,
          preKeys: [2],
          name: '③启用[上次定时]',
          matches:
            '@[vid="closeAlarmSwitch"][checked=false] -2 [text="上次定时"]',
          snapshotUrls: 'https://i.gkd.li/i/31701988', //未启用, [checked=false]
          excludeSnapshotUrls: 'https://i.gkd.li/i/31703060', // 已启用, [checked=true]
          exampleUrls: 'https://e.gkd.li/f3790038-189b-4336-a511-08f0dbe51007',
        },
        {
          key: 4,
          preKeys: [3],
          name: '④[返回]阅读界面',
          action: 'back',
          actionDelay: 500,
          matches: '[parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/31701990',
        },
      ],
    },
    {
      key: 18,
      name: '功能类-自动[投推荐票]给《观山！》',
      desc: '(⚠️可复制到本地修改key11自定义书名) ①点击[更多] ②点击[投推荐票] ③选择[全部] ④点击[投票]',
      enable: false,
      fastQuery: true,
      order: 3,
      matchDelay: 5000, //延迟5秒匹配,等其他自动签到啥的规则先执行
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.ui.activity.MainGroupActivity',
      rules: [
        {
          key: 0,
          name: '前置条件-阅读小于5分钟', //其实应该限制每天只触发1次的,但gkd没这个功能
          action: 'none',
          actionDelay: 500,
          matches:
            '[vid="tvTipStart"][text="今日暂无阅读时长" || parent.getChild(1).text.toInt()<5]',
          snapshotUrls: [
            'https://i.gkd.li/i/31865741', // 无阅读时长
            'https://i.gkd.li/i/31865742', // 3分钟
          ],
        },
        // {
        //   key: 10,
        //   preKeys: [0],
        //   name: '①点击第一本[更多]',
        //   matches: '[vid="cv_content"][index=0] >2 [vid="ivMore"][visibleToUser=true]', //或者仅置顶1本书,就用这个
        //   snapshotUrls: [
        //     'https://i.gkd.li/i/31840578',
        //     'https://i.gkd.li/i/31840584',
        //   ],
        // },
        {
          key: 11,
          preKeys: [0],
          name: '①点击指定书名的[更多]',
          actionMaximumKey: 10,
          matches:
            '@[vid="ivMore"] <<n [vid="cv_content"] >(1,3) [vid="tvBookName"][text="观山！"]', //自定义仅需修改书名即可,当前为《观山！》
          snapshotUrls: [
            'https://i.gkd.li/i/31840578', // 图墙模式书架
            'https://i.gkd.li/i/31840584', // 列表模式书架
          ],
        },

        // 第二段
        {
          key: 20,
          preKeys: [10, 11],
          name: '②点击[投推荐票]',
          matches:
            '@[clickable=true] > [vid="bubbleTj"] + [text="投推荐票"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/31840586',
        },
        {
          key: 21,
          preKeys: [10, 11],
          name: '②已无推荐票-按[返回键]',
          action: 'back',
          actionDelay: 1500, // ⚠️必须等节点加载完
          actionMaximumKey: 20,
          matches: '[vid="ivTjp"] + [text="投推荐票"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/31841241',
        },

        // 第三段
        {
          key: 30,
          preKeys: [20],
          name: '③选择[全部]',
          matches: '@[clickable=true] >2 [text="全部"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/31840589',
        },

        // 第四段
        {
          key: 40,
          preKeys: [30],
          name: '④点击[投票]',
          matches:
            '@[clickable=true] >2 [text^="投"][text$="票"][visibleToUser=true][index=0]',
          snapshotUrls: 'https://i.gkd.li/i/31840591',
        },
      ],
    },
    {
      key: 19,
      name: '功能类-书友圈帖子自动点赞+回复😍😋😎',
      desc: '(混今日贡献点用) 进帖子后, ①点[赞] ②点击[回复框] ③点击工具栏[表情] ④依次点击3种[表情] ⑤[发表]评论 ⑥[退出]帖子',
      enable: false,
      fastQuery: true,
      actionCd: 5000,
      actionDelay: 300, // 别操作太快
      actionMaximum: 1,
      resetMatch: 'match',
      activityIds: [
        '.ui.activity.CirclePostCommentDeliverActivity',
        '.ui.activity.CirclePostDetailActivity',
      ],
      rules: [
        {
          key: 10,
          name: '①点击[赞]',
          matches: '@[vid="layoutLike"][index=3] >2 [vid="favorCount"]',
          snapshotUrls: 'https://i.gkd.li/i/31912200',
        },
        {
          key: 20,
          preKeys: [10],
          name: '②点击[回复框]',
          actionDelay: 500, // 要等key10 点击完
          matches: '[vid="layoutBottomInput"]',
          snapshotUrls: 'https://i.gkd.li/i/31912200',
        },
        {
          key: 30,
          preKeys: [20],
          name: '③点击工具栏[表情]',
          matches: '[vid="emoji_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/31912202',
        },
        {
          key: 40,
          preKeys: [30],
          name: '④点击[表情2]😍',
          matches:
            '@[clickable=true][index=1] > [vid="emoji_image"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/31912203',
        },
        {
          key: 41, //快照参考 key40 的
          preKeys: [40],
          name: '④点击[表情17]😋',
          matches:
            '@[clickable=true][index=16] > [vid="emoji_image"][visibleToUser=true]',
        },
        {
          key: 42, //快照参考 key40 的
          preKeys: [41],
          name: '④点击[表情4]😎',
          matches:
            '@[clickable=true][index=3] > [vid="emoji_image"][visibleToUser=true]',
        },
        {
          key: 50,
          preKeys: [42],
          name: '⑤点击[发表]评论',
          matches: '[text="发表评论"] +n [text="发表"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/31912204',
        },
        {
          key: 60,
          preKeys: [50],
          name: '⑥点击[退出]帖子详情',
          matches:
            '@[vid="mFollowBackIv"] + [visibleToUser=true] >2 [text="帖子详情"]',
          snapshotUrls: 'https://i.gkd.li/i/31912206',
        },
      ],
    },
  ],
});
