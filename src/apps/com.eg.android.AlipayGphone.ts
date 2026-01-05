import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '📢说明',
      desc: '(点击查看详情) 🔵目前在用的支付宝版本有两个: 🔸v10.7.76.8100 🔸v10.7.16.8000 ,如果你用其他版本的支付宝,估计有些规则不生效,如遇失效或误触请截取快照拿到github反馈. 🔵另外,这些规则大都是在模块(芝麻糊、芝麻粒-tk等)不做这些任务的时候,用gkd来减少手动操作的,如果模块能做的任务,请关掉这些任务对应的gkd规则,开多了会费电. ',
      enable: false,
      rules: [
        {
          // snapshotUrls: [     //临时存放一些快照
          //   'https://i.gkd.li/i/24279063', //zfb滑块拼图验证
          //   'https://i.gkd.li/i/24279064', //zfb滑块拼图验证2(淘宝)
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
          matches: [
            '[text="恭喜获得小组件优先体验权"] - * > Image[visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22923315',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 2,
      name: '🌲🐤弹窗-确认兑换',
      desc: '①活力值 ②乐园币 ③🐤抽抽乐2',
      enable: false,
      rules: [
        {
          matches:
            '[text="暂不兑换"] + Button[text="确认兑换"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24100272', //森林活力值兑换物品
            'https://i.gkd.li/i/24100284', //小鸡乐园币兑换物品
            'https://i.gkd.li/i/24100291', //小鸡抽抽乐2兑换物品
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23013746', //森林寻宝活力值兑换抽奖机会
            'https://i.gkd.li/i/23238643', //小鸡抽抽乐90g饲料换机会
            'https://i.gkd.li/i/24100558', //会员积分
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 202,
      name: '🌲🐤-抽抽乐-弹窗-确认兑换',
      desc: '①活力值 ②饲料 兑换抽奖机会',
      matchRoot: true,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①用活力值兑换',
          matches:
            '[text$="兑1次抽奖机会"] < * + * > [text="确认兑换"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23013746',
        },
        {
          key: 2,
          name: '②用饲料兑换',
          matches:
            '[text^="消耗90g饲料"] + * > [text="确认兑换"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23238643',
        },
      ],
    },
    {
      key: 3,
      name: '🌲🐤逛街-已完成-返回键',
      desc: '已完成逛15s街任务->按下返回键',
      rules: [
        {
          action: 'back',
          matchRoot: true,
          matchDelay: 300,
          actionCd: 5000,
          matches: [
            '[text="森林市集" || text="一起逛街咯"] + * > [text="已完成 可领奖励"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23238379',
            'https://i.gkd.li/i/23238829',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 4,
      name: '🐤养鸡-收麦子弹窗-x掉',
      desc: '好友来串门种了xx g麦子',
      rules: [
        {
          matches: ['[text^="七天内不收取"] + TextView[visibleToUser=true]'],
          snapshotUrls: 'https://i.gkd.li/i/22923502',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 5,
      name: '🐤养鸡-好友-种麦子-确认',
      desc: '去好友家种麦子-自动确认',
      rules: [
        {
          actionCd: 200,
          matches: [
            '[text="为好友小鸡种一块麦田"] +4 [text="确认"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22973904',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 6,
      name: '🐤养鸡-乐园🎈-开宝箱',
      desc: '乐园弹窗->点击 ①开宝箱 ②x掉',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①开宝箱',
          actionCd: 3000,
          matches:
            '[text="恭喜获得奖励"] +(2,3) [text^="立即开宝箱"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22983795',
            'https://i.gkd.li/i/22984046',
          ],
        },
        {
          key: 2,
          name: '②立即兑换奖励-x掉',
          preKeys: [1],
          matches: '[text="立即兑换奖励"] + [text=""][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22983810',
        },
      ],
    },
    {
      key: 7,
      name: '🐤养鸡-做美食-食材店-领取',
      desc: '爱心食材店 ①领10g食材 ②返回键',
      rules: [
        {
          key: 1,
          name: '①领10g食材',
          matches: '[text="领10g食材"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23450712',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
        {
          key: 2,
          name: '②已领取-返回键',
          action: 'back',
          matches:
            '[text="领取每日限量食材"] + [text="已领取"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23450722',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },

    {
      key: 9,
      name: '🐤养鸡-抽抽乐🎰-抽中弹窗-知道啦',
      desc: '弹窗恭喜抽中->点击 知道啦',
      rules: [
        {
          matches: [
            'Dialog >3 [text="知道啦"][index=parent.childCount.minus(2)][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22974073',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 10,
      name: '🐤养鸡-家庭👪-早安-弹窗确认',
      desc: '点击 ①确认发送 ②x掉',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①确认发送',
          matches: '[text="亲密度+1"] + [text="确认发送"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22938526',
        },
        {
          key: 2,
          name: '②x掉',
          matches: '[text$="传话内容"] < * +2 TextView[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22938583',
        },
      ],
    },
    {
      key: 11,
      name: '🐤养鸡-家庭👪-弹窗-确认',
      desc: '①顶梁柱or请客 ②③喂食 ④睡觉',
      enable: false,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①顶梁柱or请客',
          matches: '[text^="提醒Ta"] -2 * > @[text="确认"] + [text^="亲密度+"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22961775',
            'https://i.gkd.li/i/23762991',
          ],
        },
        {
          key: 2,
          name: '②喂食-亲密度+1',
          matches:
            '[text^="确认"][text$="亲密度+1"][clickable=true][focusable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23762732',
        },
        {
          key: 3,
          name: '③喂食',
          matches:
            '[text$="投喂了你的小鸡哦"] <<2 * +2 [text="确认"][clickable=true][focusable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23978998',
        },
        {
          key: 4, // 睡觉,点不了,用相对坐标
          name: '④去睡觉',
          position: {
            left: 'width * 0.5019',
            top: 'width * 1.2630',
          },
          matches: '[text^="亲密度+"] + [text="去睡觉"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23762886',
        },
      ],
    },
    {
      key: 12,
      name: '🐤养鸡-家庭👪-去捐步',
      desc: '①去捐步 ②立即捐步 ③知道了(返回键) ④x掉',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①去捐步',
          actionMaximum: 1, // 易误触key4
          resetMatch: 'match',
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
            '[text^="今日可兑换公益金还剩"] - Button[text="立即捐步"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22931136',
        },
        {
          key: 3,
          preKeys: [2],
          name: '③(弹窗)知道了-返回键',
          action: 'back',
          actionDelay: 500,
          matches: '[text="行走捐" || text="支付宝公益"][id$="textView_title"]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22931262',
            'https://i.gkd.li/i/23978873', // key2 双击了才会进的页面
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
          matches: [
            '[text="饲料袋已满"]',
            '[text="知道了" || text="确认"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23238168',
            'https://i.gkd.li/i/23414417',
            'https://i.gkd.li/i/23567547',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 14,
      name: '🌲森林-寻宝🎁-帮ta助力',
      desc: '弹窗-①帮ta助力 ②x掉',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '帮ta助力',
          matchRoot: true,
          matches:
            '[text^="好友"] +2 TextView[text="帮ta助力"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22941634',
        },
        {
          key: 2,
          name: '助力成功-x掉',
          matches:
            '[text="送你1次抽奖机会"] - [text="助力成功"] - * < * + TextView[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22938650',
        },
      ],
    },
    {
      key: 15,
      name: '🌲森林-寻宝🎁-已完成任务-自动领取',
      desc: '①签到 ②领取',
      rules: [
        {
          actionCd: 1500,
          matches:
            '[text="抽奖明细"][index=0] +n * >2 Button[text="领取" || text="签到"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23013576', //签到
            'https://i.gkd.li/i/22950418',
            'https://i.gkd.li/i/23548619',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 18,
      name: '🌲森林-寻宝🎁-自动抽奖',
      desc: '寻宝->点击立即抽奖',
      enable: false,
      rules: [
        {
          actionCd: 1200,
          matches:
            '[text="次机会"] - [text!="0"] - [text="还有"] - [text=""][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22983825',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 19,
      name: '🌲森林-寻宝🎁抽奖弹窗-再抽or知道了',
      desc: '抽奖->弹窗->点击 再抽or知道了',
      rules: [
        {
          excludeMatches: 'WebView[text="光盘打卡" || text="蚂蚁庄园"]',
          matches: [
            '[text^="感谢你拯救了过期" || text^="恭喜获得"] +(2,3) View > TextView[text=""][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22981776',
            'https://i.gkd.li/i/22981779',
            'https://i.gkd.li/i/22981791',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23064639', // 排除 text^="感谢你"
            'https://i.gkd.li/i/22983810', // 与 养鸡-乐园-开宝箱 key2 等效了
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 21,
      name: '🌲森林-真爱树-攒能量',
      desc: '真爱树弹窗->点击攒能量',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[text="攒能量不影响排行榜"] -2 [text="攒能量"][clickable=true]',
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
      rules: [
        {
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
      desc: '天猫集市任务-领15g能量(❗需开shizuku强制点击)',
      enable: false,
      rules: [
        {
          action: 'clickNode',
          matches: [
            '[text="天猫森林集市"]',
            '@[text="15g"] <2 * + [text="可领取"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23413420'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 24,
      name: '🌲森林-集市-弹窗-x掉',
      desc: '①首购红包 ②膨胀红包 ③专享补贴 ④添加首页',
      fastQuery: true,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '首购红包-x掉',
          matches: [
            '[text="天猫森林集市"]',
            '[text="点击领取"] <7 * + TextView[text=""][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23394640',
        },
        {
          key: 2,
          name: '膨胀红包-x掉',
          matches: [
            '[text="天猫森林集市"]',
            '[text="立即膨胀"] + * > Image[text=""][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23394780',
        },
        {
          key: 3,
          name: '专享补贴or添加首页-放弃',
          action: 'clickCenter',
          matches: [
            '[text="天猫森林集市"]',
            '[text$="可用" || text="后失效"] + TextView[text="残忍放弃"][index=parent.childCount.minus(2)]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24157391', //专享补贴
            'https://i.gkd.li/i/24278961', //添加小程序到首页 (真机不生效,试试clickCenter坐标点击)
          ],
        },
      ],
    },
    {
      key: 25,
      name: '⛪新村-加速任务-已完成-自动领取',
      desc: '该任务已完成->点击 去领取',
      rules: [
        {
          matchRoot: true,
          matches: [
            '[text^="+"][text$="/时"] + [text$="领取"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22984031',
            'https://i.gkd.li/i/23013871',
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
          matches: [
            'Button[text="返回新村"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/24142230'],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 26,
      name: '⛪新村-解锁新村',
      desc: '①去看看 ②愿意帮助',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '去看看',
          matches:
            'WebView[text="蚂蚁新村"] >(3,4,5) Button[text="去看看"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23978812', //3
            'https://i.gkd.li/i/24033641', //4
          ],
        },
        {
          key: 2,
          name: '我愿意帮助她们',
          preKeys: [1],
          matches: '[text^="本村任务"] +2 [text=""]',
          snapshotUrls: [
            'https://i.gkd.li/i/23978826',
            'https://i.gkd.li/i/24269075',
          ],
        },
      ],
    },
    {
      key: 27,
      name: '🌾农场-施肥-丰收礼包-领取',
      desc: '施肥n次领肥料->待领取弹窗->点击 领取',
      rules: [
        {
          anyMatches: [
            '[text="丰收礼包待领取"] +3 [text="立即领取"][visibleToUser=true]',
            '[text="立即领肥"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23014157',
            'https://i.gkd.li/i/23440796',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 28,
      name: '🌾农场-弹窗-x掉',
      desc: '①丰收礼包 ②恭喜获得 ③去快手 ④小游戏',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①丰收礼包or恭喜获得-x掉',
          matches: [
            '[text*="丰收礼包" || text^="恭喜获得"] +(4,5) [text="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23014209',
            'https://i.gkd.li/i/23440721',
            'https://i.gkd.li/i/23548285',
            'https://i.gkd.li/i/23979020', //还差n次领丰收礼包
            'https://i.gkd.li/i/24142169', //恭喜获得滴滴打车券
          ],
        },
        {
          key: 3,
          name: '③去快手逛逛-x掉',
          matches:
            'Image[width=866] <<2 * + Button[text="关闭"][index=parent.childCount.minus(1)][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23550292', //去快手逛逛再得肥+1200
            'https://i.gkd.li/i/23557965', //去快手逛逛再得肥+1200
          ],
        },
        {
          key: 4,
          name: '④去玩小游戏-x掉',
          matches: [
            '[text^="还差"][text$="次领肥料"]',
            'Image[width=812] + Button[text="关闭"][index=parent.childCount.minus(1)][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24203073', //去玩小游戏赚取海量肥料
        },
      ],
    },
    {
      key: 29,
      name: '🎮小游戏-申请发消息-取消',
      desc: '弹窗-取消',
      rules: [
        {
          matches: [
            'Button[text="取消"][id$="negativeBtn"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22981739',
            'https://i.gkd.li/i/23238549',
          ],
          activityIds: [
            'com.alipay.android.phone.messageboxstatic.extension.ProcessTransActivity',
            'com.alipay.android.phone.mbox.biz.legacy.sbs.ui.MBoxProcessTransActivity',
          ],
        },
      ],
    },
    {
      key: 30,
      name: '🎮小游戏-活动弹窗-x掉',
      desc: 'x掉 ①限时活动弹窗 ②小浮窗',
      rules: [
        {
          actionCd: 500,
          matchRoot: true,
          matches:
            'TextView[text=""][(width>75 && width<85 && height>75 && height<85) || (width>30 && width<40 && height>30 && height<40)]',
          snapshotUrls: [
            'https://i.gkd.li/i/24094533', //大弹窗
            'https://i.gkd.li/i/24094570', //小浮窗
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$',
        },
      ],
    },
    {
      key: 31,
      name: '🙋‍♂️扫码加好友-辅助①',
      desc: '扫出森林主页->点击 加好友',
      enable: false,
      rules: [
        {
          key: 1,
          name: '①扫码界面',
          action: 'none', // 前置条件，防 key 2 误触
          matches:
            '[text="扫码"][id$="scan_bottom_view_text"][visibleToUser=true]',
          fastQuery: true,
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
            'Button + Button[text="" || text="加好友"][visibleToUser=true]',
          ],
          fastQuery: true,
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
      desc: '用户主页-> ①加好友 ②x掉捎话弹窗 ③返回键',
      fastQuery: true,
      enable: false,
      activityIds: [
        'com.alipay.android.phone.xriver.bundlex.CSGAPushActivity', //A
        'com.alipay.mobile.socialcontactsdk.contact.ui.FriendVerifyNewActivity_', //B
      ],
      rules: [
        {
          key: 1,
          name: '①用户主页-加好友',
          actionCd: 1500,
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[childCount=7] > ViewGroup[index=6][index=parent.childCount.minus(1)] > View',
          snapshotUrls: 'https://i.gkd.li/i/23280044', //A
        },
        {
          key: 2,
          name: '②x掉捎话弹窗',
          actionCd: 1500,
          matches:
            '[text="给Ta捎句话吧"] - * > [id$="closeButton"] > [text=""][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23280089', //B
            'https://i.gkd.li/i/23280173', //A
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
            '[childCount>=7] > ViewGroup[index=parent.childCount.minus(1)] > View',
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
  ],
});
