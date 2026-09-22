import { defineGkdApp } from '@gkd-kit/define';

export const NO_FAST_QUERY = 2; // 不支持快速查寻的

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '📢说明',
      desc: '(点击查看详情) 🔵目前在本人用的支付宝版本有一个: 🔸v10.8.56.2300 ,如果你用其他版本的支付宝,估计有些规则不生效,如遇失效或误触请截取快照拿到github反馈. 🔵另外,这些规则大都是在模块(芝麻糊、芝麻粒-tk等)不做这些任务的时候,用gkd来减少手动操作的,如果模块能做的任务,请关掉这些任务对应的gkd规则,开多了会费电. ',
      enable: false,
      rules: [
        {
          // snapshotUrls: [     //临时存放一些快照
          //   'https://i.gkd.li/i/24279063', // zfb滑块拼图验证
          //   'https://i.gkd.li/i/24279064', // zfb滑块拼图验证2(淘宝)
          //   'https://i.gkd.li/i/27058649', // zfb森林集市-验证-[带蜜蜂的T恤]
          // ],
        },
      ],
    },
    {
      key: 1,
      name: '🌲🐤小组件弹窗-x掉',
      desc: '恭喜获得小组件优先体验权',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          matches:
            '[text="恭喜获得小组件优先体验权"] - @View[getChild(0).name$="Image"] < [childCount>3] < * < * < * < WebView <2 FrameLayout[desc.length>20] < * < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/30858145',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 2,
      name: '🌲🐤弹窗-[确认兑换]物品',
      desc: '用 ①活力值 ②乐园币 ③🐤抽抽乐2 兑换物品; 碎片不足/达上限时[x]掉',
      enable: false,
      fastQuery: true,
      forcedTime: 60000,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①确认兑换',
          matchRoot: true,
          matches:
            '@Button[text="确认兑换"] <(5,6) View[childCount>4] <<(2,4) View[index=parent.childCount.minus(1)] <n View < WebView[text*="兑换" || text="乐园集市"] <<4 [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24100272', //森林活力值兑换物品
            'https://i.gkd.li/i/24100284', //小鸡乐园币兑换物品
            'https://i.gkd.li/i/24100291', //小鸡抽抽乐2兑换物品
          ],
        },
        {
          key: 2,
          name: '②碎片不足/达上限',
          action: 'clickNode',
          matches: [
            '[text="兑换装扮"]',
            '@TextView[width<107] < [childCount=3] >3 [index=0][text="兑换次数达上限" || text^="碎片不足"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/30867525',
            'https://i.gkd.li/i/30867553',
          ],
        },
      ],
    },
    {
      key: 202,
      name: '🌲🐤-抽抽乐[确认兑换]抽奖机会',
      desc: '用 ①活力值 ②饲料 兑换抽奖机会',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          forcedTime: 60000,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '@Button[text="确认兑换"] <(1,2) View <n View[childCount>2] <<(3,4) View[index=parent.childCount.minus(1)] <n View[parent.name$="WebView"] <<5 [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30858317', //森林 用活力值兑换
            'https://i.gkd.li/i/30858318', //庄园 用饲料兑换
          ],
        },
      ],
    },
    {
      key: 5,
      name: '🐤养鸡-好友-种麦子-确认',
      desc: '去好友家种麦子-自动确认',
      enable: false,
      order: NO_FAST_QUERY,
      rules: [
        {
          actionCd: 200,
          matches:
            '@[text="确认"][clickable=true] -4 [text="为好友小鸡种一块麦田"]',
          snapshotUrls: 'https://i.gkd.li/i/30858365',
          exampleUrls: 'https://e.gkd.li/b094f34c-bff0-4a6c-97b9-56194041e52a',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 6,
      name: '🐤养鸡-乐园🎈-开宝箱',
      desc: '乐园弹窗->点击 ①开宝箱 ②x掉',
      fastQuery: true,
      matchRoot: true,
      forcedTime: 60000,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①开宝箱',
          actionDelay: 500, // 太早点击无效
          matches:
            '@Button[text^="立即" || text="开心收下"][clickable=true] -(2,3) [text="恭喜获得奖励"] < * < View[index=parent.childCount.minus(1)] <n [childCount>3] < WebView[text="蚂蚁庄园"] < * <2 * - RelativeLayout >3 [text="松开刷新"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22983795',
            'https://i.gkd.li/i/22984046',
            'https://i.gkd.li/i/25063088', //开心收下
          ],
          exampleUrls: 'https://e.gkd.li/2aba7cd2-b61d-4bb7-bf23-a912fce34fdc',
        },
        {
          key: 2,
          name: '②立即兑换奖励-x掉',
          preKeys: [1],
          matches:
            '@TextView[width<110] <3 View -2 [text*="恭喜"] < View < View <n View < View < View[index=parent.childCount.minus(1)] <n [childCount>3] < WebView[text="蚂蚁庄园"] < * <2 * - RelativeLayout >3 [text="松开刷新"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22983810',
            'https://i.gkd.li/i/27383968',
          ],
        },
        {
          key: 3,
          name: '③限定活动-x掉',
          preKeys: [1, 2],
          matches:
            '@TextView[index=parent.childCount.minus(1)] -n [text="活动剩余时间"] <2 View[childCount>5] < View < View < View[index=parent.childCount.minus(1)] <n [childCount>3] < WebView[text="蚂蚁庄园"] < * <2 * - RelativeLayout >3 [text="松开刷新"]',
          snapshotUrls: 'https://i.gkd.li/i/26679805',
        },
      ],
    },
    {
      key: 11,
      name: '🐤养鸡-家庭👪-弹窗-确认',
      desc: '①早安 ③顶梁柱or请客 ④喂食 ⑤睡觉',
      enable: false,
      order: NO_FAST_QUERY,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①道早安',
          matches: '[text="亲密度+1"] + [text="确认发送"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22938526',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②早安传话-x掉',
          matches:
            '@TextView[width<110] -2 * > [text$="传话内容"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22938583',
        },
        {
          key: 3,
          name: '③顶梁柱or请客',
          order: 1,
          fastQuery: true,
          matchRoot: true,
          matches:
            '@[getChild(0).text="确认"] -n [text$="小鸡去干活" || text$="请客吃饭"] <<(3,4) View <3 [childCount=4] <<5 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22961775',
            'https://i.gkd.li/i/23762991',
            'https://i.gkd.li/i/30167528',
          ],
        },
        {
          key: 4,
          name: '④喂食',
          matches:
            '@Button[text^="确认"][clickable=true] -4 [text="的小鸡喂食"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23762732',
            'https://i.gkd.li/i/23978998',
          ],
        },
        {
          key: 5,
          name: '⑤去睡觉',
          matches:
            '[text="去睡觉"] <n @[clickable.or(visibleToUser)=true] -n [text="让小鸡睡觉"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23762886',
            'https://i.gkd.li/i/25470516', // clickable=false
            // 'https://i.gkd.li/i/27058785', // 错位,点击失效
          ],
        },
      ],
    },
    {
      key: 12,
      name: '🐤养鸡-家庭👪-去捐步',
      desc: '①去捐步 ②立即捐步 ③知道了(返回键) ④x掉',
      order: NO_FAST_QUERY,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①去捐步',
          actionMaximum: 1, // 易误触key4
          resetMatch: 'match',
          actionDelay: 300,
          excludeMatches: '[text="今日已完成捐步"]',
          matches:
            'View[index=parent.childCount.minus(1)] > [text="去捐步数"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22939273',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23381801',
        },
        {
          key: 2,
          name: '②立即捐步',
          // actionCd: 3000,  //有时候不生效
          actionMaximum: 1, //易重复点击 key2
          resetMatch: 'match',
          matches:
            '[text^="今日可兑换公益金还剩"] - Button[clickable=true][text*="立即捐步"]',
          snapshotUrls: [
            'https://i.gkd.li/i/32519584',
            'https://i.gkd.li/i/32519415',
          ],
        },
        {
          key: 3,
          preKeys: [2],
          name: '③(弹窗)知道了-返回键',
          action: 'back',
          actionDelay: 500,
          matches: '[text="行走捐" || text="支付宝公益"][id$="textView_title"]',
          fastQuery: true,
          order: 1,
          snapshotUrls: [
            'https://i.gkd.li/i/22931262',
            'https://i.gkd.li/i/23978873', // key2 双击了才会进的页面
            'https://i.gkd.li/i/32519619',
          ],
        },
        {
          key: 4,
          name: '④x掉',
          preKeys: [2, 3],
          matchDelay: 700,
          matches:
            '[text="一起运动做公益"] +2 [text="关闭"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23381801',
            'https://i.gkd.li/i/23414325',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '🐤养鸡-领饲料-已满-知道了',
      desc: '饲料袋已满 弹窗->点击知道了',
      rules: [
        {
          actionCd: 500,
          actionDelay: 300, // 有个弹窗动画耗时
          forcedTime: 30000,
          fastQuery: true,
          matchRoot: true,
          matches:
            '[text="饲料袋已满" || getChild(0).text="饲料袋已满"] +(1,2,3) @[index=parent.childCount.minus(1)][text="知道了" || text="确认"] <n [childCount>3] <<(3,4) View[index=parent.childCount.minus(1)] <n [childCount>3] < WebView[text="蚂蚁庄园"] < * <2 FrameLayout - RelativeLayout >3 [text="松开刷新"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23238168',
            'https://i.gkd.li/i/23414417',
            'https://i.gkd.li/i/23567547',
            'https://i.gkd.li/i/30867462',
            'https://i.gkd.li/i/30872261',
          ],
          exampleUrls: 'https://e.gkd.li/3f69adda-7804-41a9-8a70-099e2c7acbd6',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 1301,
      name: '🐤养鸡-弹窗-x掉',
      desc: '①家具上新 ②活动弹窗',
      fastQuery: true,
      matchRoot: true,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①家具上新啦-x掉',
          matches:
            '@Button[text="关闭"][clickable=true] -n * <<3 [index=parent.childCount.minus(2)] -n * <<3 WebView <<3 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24821875',
            'https://i.gkd.li/i/24963478',
            'https://i.gkd.li/i/26524139', //限时活动弹窗 攒亲密度得奖励
          ],
        },
        {
          key: 2,
          name: '②活动弹窗-x掉',
          matches:
            '@Button[text="关闭"][clickable=true] <2 View[childCount=2] <<7 WebView[text="蚂蚁庄园"] < * <2 FrameLayout - RelativeLayout >3 [text="松开刷新"]',
          snapshotUrls: [
            'https://i.gkd.li/i/26524387', //新款小盲盒
            'https://i.gkd.li/i/26527688', //助力圆梦活动
          ],
        },
      ],
    },
    {
      key: 21,
      name: '🌲森林-真爱树-攒能量',
      desc: '真爱树弹窗->点击[攒能量](仅1次)',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          fastQuery: true,
          matchRoot: true,
          matches:
            '[text="攒能量不影响排行榜"] -2 @[text="攒能量"][clickable=true] -n TextView <<(4,5) [index=parent.childCount.minus(1)] -n View <<2 WebView <<4 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22988030',
            'https://i.gkd.li/i/23393231',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 22,
      name: '🌲森林-好友页-浇水弹窗-送给ta',
      desc: '自动确认浇水(⚠️开启前请先设好浇多少g)',
      enable: false,
      order: NO_FAST_QUERY,
      rules: [
        {
          actionCd: 50,
          matches: 'Button[text="浇水送祝福"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22973598',
            'https://i.gkd.li/i/24337752',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 23,
      name: '🌲森林-集市-完成任务-领取',
      desc: '天猫集市任务-领15g能量',
      enable: false,
      rules: [
        {
          actionCd: 200, // 有时需第2次点击才成功[领取]
          action: 'clickNode',
          fastQuery: true,
          matchRoot: true,
          forcedTime: 60000,
          matches:
            ' [text="可领取"] - @[getChild(0).name$="Image"][getChild(1).text="15g"] <3 View < * < View <2 View < View <2 View < * < * < WebView <2 FrameLayout <2 [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23413420',
            'https://i.gkd.li/i/27151345', // 无 [text="松开刷新"] 快查节点
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 24,
      name: '🌲森林-集市-弹窗-x掉',
      desc: '①首购红包 ②膨胀红包 ③专享补贴,添加首页 ④天猫年货节',
      fastQuery: true,
      order: NO_FAST_QUERY,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①首购红包-x掉',
          matches: [
            '[text="天猫森林集市"]',
            '[text="点击领取"] <7 * + TextView[visibleToUser=true][text=""]', //无快查
          ],
          snapshotUrls: 'https://i.gkd.li/i/23394640',
        },
        {
          key: 2,
          name: '②膨胀红包-x掉',
          matches: [
            '[text="天猫森林集市"]',
            '[text="立即膨胀"] + * > Image[visibleToUser=true][text=""]', //无快查
          ],
          snapshotUrls: 'https://i.gkd.li/i/23394780',
        },
        {
          key: 3,
          name: '③专享补贴or添加首页-放弃',
          order: 1,
          matches:
            '@TextView[index=parent.childCount.minus(2)][text$="放弃"] <n [childCount>4] <<(1,4) View <2 [childCount>1] < WebView < * <2 FrameLayout <2 [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          // ' [text$="可用" || text="后失效" || text^="限时" || text="限今日" || text="当天有效"] +(1,2) TextView[index=parent.childCount.minus(2)][text$="放弃"]', //无快查
          snapshotUrls: [
            'https://i.gkd.li/i/24157391', //专享补贴
            'https://i.gkd.li/i/24278961', //添加小程序到首页 (若用快速查询则真机不生效)
            'https://i.gkd.li/i/24913115', //添加小程序到首页2
            'https://i.gkd.li/i/25063019', //天猫小程序入群福利
            'https://i.gkd.li/i/25470291', //天猫小程序
            'https://i.gkd.li/i/27156727', //天猫小程序2 (无 [text="松开刷新"] 快查节点)
          ],
        },
        {
          key: 4,
          name: '④天猫年货节-x掉',
          matches: [
            '[text="天猫森林集市"]',
            '@TextView[top>1500][width>100 && width<116] - * > [index=parent.childCount.minus(1)][text$="领取"]', //无快查
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24544970',
            'https://i.gkd.li/i/28906162',
          ],
        },
        {
          key: 5,
          name: '⑤天猫小程序-x掉',
          order: 1,
          matches:
            '@TextView[text=""][width<138][visibleToUser=true] - View[getChild(0).getChild(0).name$="Image"] <<(4,5) WebView <2 FrameLayout <2 [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24728626',
            'https://i.gkd.li/i/24728870',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/26556897', //小鸡家庭页误触, [width<138] 排除
        },
      ],
    },
    {
      key: 2401,
      name: '🌲森林-弹窗-x掉',
      desc: '①能量攻略 ②新抽抽乐 ③活力值助力 ④种第1棵树 ⑤证书 ⑥真爱奖励',
      fastQuery: true,
      matchRoot: true,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①能量攻略or新抽抽乐-x掉',
          matches:
            '@TextView[index=parent.childCount.minus(1)][text=""][index>1] -n * <<(4,5) View[index=parent.childCount.minus(1)] <n WebView[text="蚂蚁森林"] <<4 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24739341', //2026能量攻略
            'https://i.gkd.li/i/24742469', //新抽抽乐
            // 'https://i.gkd.li/i/24813156', //活力值助力来晚啦 误触 [index>1]
          ],
        },
        {
          key: 3,
          name: '③助力成功or种第1棵树-x掉',
          matches:
            '@Button[text="关闭弹窗"][clickable=true] -n [name$="View"][text.length>2] <<(3,4) View[index=parent.childCount.minus(1)] <n WebView[text="蚂蚁森林"] <<4 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24742272', //活力值助力成功
            'https://i.gkd.li/i/24813156', //活力值助力来晚啦
            'https://i.gkd.li/i/24861484', //种下xxxx第一棵树
            'https://i.gkd.li/i/25060919', //种下2026年第一棵杨柴
            'https://i.gkd.li/i/25368019', //爱，种在这里
            'https://i.gkd.li/i/27059396', //十年树木，向善而行
            'https://i.gkd.li/i/27383864', //鄂尔多斯沙柳返场
            'https://i.gkd.li/i/28912057', //六五环境日，共建美丽海滩
          ],
        },
        {
          key: 5,
          name: '⑤证书-x掉',
          order: NO_FAST_QUERY,
          fastQuery: false,
          matchRoot: false,
          matches:
            '[text="查看证书"] < * + @Button[text^="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24989781',
        },
        {
          key: 6,
          name: '⑥真爱树奖励-x掉',
          matches:
            '@TextView[index=parent.childCount.minus(1)][text=""][index>1] -n TextView[text$="天"] <<5 View <4 WebView <<4 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24989885',
            'https://i.gkd.li/i/26525679',
          ],
        },
        {
          key: 7,
          name: '⑦组队种树弹窗-x掉',
          matches:
            '@Button[text^="关闭"][clickable=true] <2 View <<3 View <4 View < WebView[text="蚂蚁森林"] <<4 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/25001437',
        },
        {
          key: 8,
          name: '⑧参与pk赛弹窗-x掉',
          matches:
            '@Button[text^="关闭"][clickable=true][index=parent.childCount.minus(1)] <n View <3 View <<2 View <4 WebView[text="蚂蚁森林"] <<4 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/25210236',
        },
      ],
    },
    {
      key: 25,
      name: '⛪新村-任务已完成-自动领取',
      desc: '该任务已完成->点击[领取]',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          forcedTime: 30000,
          matches:
            '@Button[text$="领取"][clickable=true] <n [childCount>3] <n View[index=parent.childCount.minus(1)] <n Dialog < * < * <3 * < WebView[text="蚂蚁新村"] < WebView <2 * < [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          // '@Button[text$="领取"][clickable=true] <n [childCount>3] <n View[index=parent.childCount.minus(1)] <n Dialog <<6 WebView[text="蚂蚁新村"] <<4 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',    //用了 << 在GKD会提示缓慢查询
          snapshotUrls: [
            'https://i.gkd.li/i/24956311',
            'https://i.gkd.li/i/24956360',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 2501,
      name: '⛪新村-成功出摊-返回',
      desc: '随机摆摊成功-返回新村',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          forcedTime: 30000,
          matches:
            '@Button[text="返回新村"][clickable=true] < [index=parent.childCount.minus(1)] <n [childCount>9] <<(3,4) View <2 WebView[text="蚂蚁新村"] <<4 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24142230',
            'https://i.gkd.li/i/24957008',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 27,
      name: '🌾农场-施肥-丰收礼包-领取',
      desc: '①点击[立即领肥] ②弹窗-点击[立即领取]',
      fastQuery: true,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①点击[立即领肥]',
          actionCd: 2000,
          matches:
            '@Button[text="立即领肥"] <<7 [getChild(0).text="任务列表"] <2 View[childCount=7][!(parent.parent.getChild(1).visibleToUser=true)][parent.parent.parent.childCount=1] <<(6,7) FrameLayout - * >3 [text="松开刷新"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23440796',
            'https://i.gkd.li/i/27554121',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23014157', // 有弹窗 [!(parent.parent.getChild(1).visibleToUser=true)]
            'https://i.gkd.li/i/27581874', // 加 [parent.parent.parent.childCount=1] 排除
          ],
        },
        {
          key: 2,
          name: '②弹窗-点击[立即领取]',
          matches:
            '@Button[text="立即领取"] <4 View < View < View < View <(2,3) View < WebView < WebView <2 FrameLayout - * >3 [text="松开刷新"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23014157',
            'https://i.gkd.li/i/27581874',
          ],
        },
      ],
    },
    {
      key: 28,
      name: '🌾农场-弹窗-x掉',
      desc: '①丰收礼包 ②恭喜获得 ③去快手 ④小游戏',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '@Button[text="关闭"][clickable=true] <n View < View < View < View <2 View < WebView[!(text="蚂蚁森林")] < WebView <2 FrameLayout - * >3 [text="松开刷新"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23014209',
            'https://i.gkd.li/i/23440721',
            'https://i.gkd.li/i/23548285',
            'https://i.gkd.li/i/23979020', //还差n次领丰收礼包
            'https://i.gkd.li/i/24142169', //恭喜获得滴滴打车券
            'https://i.gkd.li/i/23550292', //去快手逛逛再得肥+1200
            'https://i.gkd.li/i/23557965', //去快手逛逛再得肥+1200
            'https://i.gkd.li/i/24203073', //去玩小游戏赚取海量肥料
            'https://i.gkd.li/i/26184579', //玩游戏领支付红包
            'https://i.gkd.li/i/27582147', // [visibleToUser=false]
          ],
        },
      ],
    },
    {
      key: 2801,
      name: '🐟福气鱼塘-自动[再钓一次]',
      desc: '弹窗-点击[再钓一次]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '@Button[text*="再钓" || text$="收下"] < View <(3,4) Dialog < View < View < View <2 [childCount>1] < WebView <<(3,4) [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/27361306', // 再钓一次 <<4
            'https://i.gkd.li/i/27361308', // 开心收下
            'https://i.gkd.li/i/27361734', // 再钓一次 <<3
            'https://i.gkd.li/i/31866485', // 再钓一次
          ],
        },
      ],
    },
    {
      key: 29,
      name: '🎮小游戏-申请发消息-取消',
      desc: '①保持以上选择 ②点击[取消] ③直接拒绝',
      fastQuery: true,
      forcedTime: 10000,
      activityIds: [
        'com.alipay.android.phone.messageboxstatic.extension.ProcessTransActivity',
        'com.alipay.android.phone.mbox.biz.legacy.sbs.', // 通配
      ],
      rules: [
        {
          key: 1,
          name: '①保持以上选择-✅',
          matches:
            '@CheckBox[clickable=true][checked=false] + [text$="不再询问"]',
          snapshotUrls: 'https://i.gkd.li/i/30813082', // 未选中
          excludeSnapshotUrls: 'https://i.gkd.li/i/30813136', // [checked=true] 已选中
          exampleUrls: 'https://e.gkd.li/d0e5b909-7d7d-4fcb-9368-631e50d020d6',
        },
        {
          key: 2,
          name: '②取消',
          actionDelay: 200,
          matches:
            '[text="发送一次以下消息"] +n * > Button[text="取消"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/30813029',
            'https://i.gkd.li/i/30813030',
          ],
        },
        {
          key: 3,
          name: '③直接拒绝',
          matches:
            '[text="发送以下消息"] +n * > [text$="不再询问"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/30812967',
            'https://i.gkd.li/i/30812716',
          ],
        },
      ],
    },
    {
      key: 30,
      name: '🎮小游戏-弹窗',
      desc: '①限时活动弹窗or小浮窗-x掉 ③游戏更新-确定',
      fastQuery: true,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$',
      rules: [
        {
          key: 1,
          name: '①限时活动弹窗or小浮窗-x掉',
          actionCd: 500,
          matchRoot: true,
          forcedTime: 3500,
          matches:
            '@TextView[id=null][clickable=true][(width>75 && width<85 && height>75 && height<85) || (width>30 && width<40 && height>30 && height<40)] <<8 WebView <<4 FrameLayout[id=null] <(1,2) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24094533', //大弹窗
            'https://i.gkd.li/i/24094570', //小浮窗
          ],
          excludeActivityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          excludeSnapshotUrls: 'https://i.gkd.li/i/24961422', //误触 淘宝闪购界面
        },
        {
          key: 3,
          name: '③游戏更新-确定',
          matches: [
            '[text^="游戏有新版本"]',
            'Button[text="确定"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24822192',
        },
      ],
    },
    {
      key: 31,
      name: '🙋‍♂️扫森林码加好友-辅助①',
      desc: '扫出森林主页->点击 加好友',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: '①扫码界面',
          action: 'none', // 前置条件，防 key 2 误触
          matches:
            '[text="扫码"][id$="scan_bottom_view_text"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23393349',
          activityIds: 'com.alipay.mobile.scan.as.main.MainCaptureActivity',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②用户森林主页-加好友',
          matchDelay: 1000,
          matches: [
            '[text$="的蚂蚁森林"][id$="textView_title"]',
            'Button + Button[text="" || text="加好友"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23279949',
            'https://i.gkd.li/i/24278939', // pk好友
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 32,
      name: '🙋‍♂️加好友-辅助②',
      desc: '点击 ①加好友 ②x掉捎话弹窗 ③返回键',
      fastQuery: true,
      enable: false,
      activityIds: [
        'com.alipay.android.phone.xriver.bundlex.CSGAPushActivity', //A
        'com.alipay.mobile.socialcontactsdk.contact.ui.FriendVerifyNewActivity_', //B
        'com.alipay.mobile.socialcontactsdk.contact.ui.FriendVerifyNewUIActivity_', //C
      ],
      rules: [
        {
          key: 1,
          name: '①用户主页-加好友',
          actionCd: 1500,
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '@View < [childCount=1] <7 [childCount=7] <2 FrameLayout[childCount=2] < ViewGroup <2 FrameLayout[childCount=2] <<6 [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/23280044', //A
        },
        {
          key: 2,
          name: '②x掉捎话弹窗',
          actionCd: 1500,
          matches:
            '[text*="给Ta捎句话吧"] - * > @[clickable=true] > [text=""]',
          snapshotUrls: [
            'https://i.gkd.li/i/23280089', //B
            'https://i.gkd.li/i/23280173', //A
            'https://i.gkd.li/i/25126700', //C 直接再用户森林页,点击加好友就出现的
            'https://i.gkd.li/i/27250498', //C
          ],
        },
        {
          key: 3,
          preKeys: [1, 2],
          name: '③加好友后-返回键',
          action: 'back',
          actionDelay: 500,
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '@View < [childCount=1] <8 [childCount=8] <2 FrameLayout[childCount=2] < ViewGroup <2 FrameLayout[childCount=2] <<6 [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/23280202', //A 含免验证直接通过的
        },
        {
          key: 4,
          name: '④误进发红包页-返回键',
          action: 'back',
          matches: '[text="发红包"][id$="title_bar_title"]',
          snapshotUrls: 'https://i.gkd.li/i/24288073',
          activityIds:
            'com.alipay.android.phone.discovery.envelope.cube.UnifyFormCubeActivity',
        },
      ],
    },
    {
      key: 33,
      name: '首页-弹窗-x掉',
      desc: '同步名下其他账号银行卡',
      order: NO_FAST_QUERY,
      rules: [
        {
          // matchRoot: true,
          matches:
            '@View[width>100 && width<114][height>100 && height<114][left>450][top>1400]',
          // '@View[width>100 && width<114][height>100 && height<114][left>450][top>1400] < ViewGroup[index=parent.childCount.minus(1)] <2 ViewGroup <<5 [id="android:id/content"]',
          // fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24447913',
          exampleUrls: 'https://e.gkd.li/87040b65-05e5-4ecc-8109-9a8a158af9b3',
          activityIds: '.AlipayLogin',
        },
      ],
    },
    {
      key: 34,
      name: '弹窗-当前应用要打开zfb',
      desc: '点击 打开',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.mobile.quinox.SchemeLauncherActivity',
          matches:
            '[text="当前应用要打开“支付宝”"] <<2 * + * >2 [text="打开"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/30860663',
          exampleUrls: 'https://e.gkd.li/316db821-2d79-48cc-844f-55e6a19ce532',
        },
      ],
    },
    {
      key: 35,
      name: '功能类-转账完自动[回首页]',
      desc: '转账成功后点击右上角[回首页]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: ['[text="转账成功"]', '[text="回首页"][clickable=true]'],
          snapshotUrls: 'https://i.gkd.li/i/26331129',
        },
      ],
    },
    {
      key: 37,
      name: '其它-[退出]中转页',
      desc: '在别的 界面/app 做完任务后切回支付宝中转页',
      fastQuery: true,
      actionCd: 300,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '①正在跳转页-点击[返回]',
          matchTime: 3000, // 3秒后休眠 (key1 有时连点三四次都不响应)
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
            'com.alipay.mobile.wallet.promo.ui.page.AppDetailsActivity',
          ],
          matches:
            '@[desc="返回"] + RelativeLayout >(1,5) [text="正在跳转" || text^="闲鱼" || text="薅羊毛赚话费"]',
          snapshotUrls: [
            'https://i.gkd.li/i/26655913', // 淘宝
            'https://i.gkd.li/i/26737562', // 一淘
            'https://i.gkd.li/i/26738164', // 闲鱼
            'https://i.gkd.li/i/26833985', // 淘宝
            'https://i.gkd.li/i/28634806', // 闲鱼
          ],
          exampleUrls: 'https://e.gkd.li/3020bb78-324e-46f6-8d32-60296ea83d4b',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②接着[返回]',
          activityIds:
            'com.alipay.mobile.wallet.promo.ui.page.AppDetailsActivity',
          matches:
            '@[desc="返回"] + RelativeLayout > [text^="https:"][text.length>50]',
          snapshotUrls: 'https://i.gkd.li/i/26656358',
          exampleUrls: 'https://e.gkd.li/9d52454c-fed8-410a-97cf-af95583b773b',
        },

        // 蚂蚁新村任务: 【限时】去游戏中心抢金条
        {
          key: 3,
          name: '③小游戏页-等30秒',
          action: 'none',
          matchRoot: true,
          actionMaximum: 1,
          actionDelay: 5000, // 至少在目标Activity待够5秒,防止抖动
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite', // 通配
          matches: '[parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/27359421',
        },
        {
          key: 4,
          preKeys: [3],
          name: '④游戏福利节-点击[返回]',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: '@[desc="返回"] + RelativeLayout >(1,5) [text="游戏福利节"]',
          snapshotUrls: 'https://i.gkd.li/i/27359350',
        },
      ],
    },
    {
      key: 38,
      name: '功能类-无法访问时点击[返回]',
      desc: '(主动查询5分钟) 访问被拒绝/人气太旺啦',
      enable: false,
      rules: [
        {
          fastQuery: true,
          forcedTime: 300000, //主动查询5分钟
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
            '.AlipayLogin',
            'com.alipay.android.phone.wallet.blessingcard_receive.biz.activity.ReceiveDialogActivity',
            'com.alipay.android.living.activity.LivingDetailActivity',
            'com.alipay.android.phone.xriver.bundlex.CSGAPushActivity',
          ],
          matches:
            '[text="访问被拒绝" || text^="人气太旺啦"] -2 RelativeLayout >3 @[clickable=true][desc="返回"] > [text=""]',
          exampleUrls: 'https://e.gkd.li/c1ddb8bf-084b-4109-b777-96c02858d266',
          snapshotUrls: [
            'https://i.gkd.li/i/23096790',
            'https://i.gkd.li/i/23549719',
            'https://i.gkd.li/i/30167342',
            'https://i.gkd.li/i/25199767',
            'https://i.gkd.li/i/25485052',
            'https://i.gkd.li/i/31456112',
          ],
        },
      ],
    },
  ],
});
