import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: '🌲🐤小组件弹窗-x掉',
      desc: '恭喜获得小组件优先体验权',
      rules: [
        {
          matches: [
            '[text="恭喜获得小组件优先体验权"] - * > Image[visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22923315',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 6,
      name: '🌲🐤-逛街-已完成-返回键',
      desc: '已完成逛15s街任务->按下返回键',
      rules: [
        {
          action: 'back',
          matchDelay: 300,
          actionCd: 5000,
          matches: [
            '[text="森林市集" || text="一起逛街咯"] + * > [text="已完成 可领奖励"][visibleToUser=true]',
          ],
          fastQuery: false,
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
      key: 2,
      name: '🐤养鸡-收麦子弹窗-x掉',
      desc: '好友来串门种了xx g麦子',
      rules: [
        {
          matches: ['[text^="七天内不收取"] + TextView[visibleToUser=true]'],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22923502',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 3,
      name: '🐤养鸡-好友-种麦子-确认',
      desc: '去好友家种麦子-自动确认',
      rules: [
        {
          actionCd: 200,
          matches: [
            '[text="为好友小鸡种一块麦田"] +4 [text="确认"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22973904',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 4,
      name: '🐤养鸡-乐园🎈-开宝箱',
      desc: '乐园弹窗->点击 开宝箱',
      rules: [
        {
          actionCd: 3000,
          matches: [
            '[text="恭喜获得奖励"] +(2,3) [text^="立即开宝箱"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22983795',
            'https://i.gkd.li/i/22984046',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 5,
      name: '🐤养鸡-乐园🎈-已开宝箱-x掉',
      desc: '点击 x掉',
      rules: [
        {
          actionCd: 3000,
          matches: ['[text="立即兑换奖励"] + [text=""][visibleToUser=true]'],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22983810',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 501,
      name: '🐤养鸡-做美食-食材店-领取',
      desc: '爱心食材店 ①领10g食材 ②返回键',
      rules: [
        {
          key: 1,
          matches: '[text="领10g食材"][visibleToUser=true]',
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23450712',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
        {
          key: 2,
          action: 'back',
          matches:
            '[text="领取每日限量食材"] + [text="已领取"][visibleToUser=true]',
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23450722',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 7,
      name: '🐤养鸡-抽抽乐🎰-饲料换机会-确认',
      desc: '90g饲料换机会 弹窗->点击确认',
      rules: [
        {
          matches: [
            '[text^="消耗90g饲料"] + * > [text="确认兑换"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23238643',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 8,
      name: '🐤养鸡-抽抽乐🎰-抽中弹窗-知道啦',
      desc: '弹窗恭喜抽中->点击 知道啦',
      rules: [
        {
          matches: [
            'Dialog >3 [text="知道啦"][index=parent.childCount.minus(2)][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22974073',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 9,
      name: '🐤养鸡-家庭👪-早安-弹窗确认',
      desc: '点击 确认发送',
      rules: [
        {
          matches: [
            '[text="亲密度+1"] + [text="确认发送"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22938526',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 10,
      name: '🐤养鸡-家庭👪-成功道早安弹窗-x掉',
      desc: '点击 x掉',
      rules: [
        {
          matches: ['[text$="传话内容"] < * +2 TextView[visibleToUser=true]'],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22938583',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 11,
      name: '🐤养鸡-家庭👪-顶梁柱弹窗-确认',
      desc: '点击 确认',
      rules: [
        {
          matches: [
            '[text$="安排你的小鸡干活了"] -2 * > [text="确认"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22961775',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 12,
      name: '🐤养鸡-家庭👪-去捐步',
      desc: '运动做公益(抽屉)->去捐步',
      rules: [
        {
          matches: [
            'View[index=parent.childCount.minus(1)] > [text="去捐步数"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22939273',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 13,
      name: '🐤养鸡-家庭👪-捐步',
      desc: '点击 立即捐步',
      rules: [
        {
          actionCd: 3000,
          matches: [
            '[text^="今日可兑换公益金还剩"] - Button[text="立即捐步"][visibleToUser=true]',
          ],
          fastQuery: false, // 用 true 真机不触发
          snapshotUrls: 'https://i.gkd.li/i/22931136',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 14,
      name: '🐤养鸡-家庭👪-捐步-返回键',
      desc: '捐步成功->弹窗->按下返回键', // ❌zfb_10.7.16.8000暂不生效
      rules: [
        {
          key: 1,
          action: 'back',
          matches: ['[text="行走捐"]', '[text="知道了"][visibleToUser=true]'],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22931262',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
        {
          key: 2,
          preKeys: [1],
          matchDelay: 500,
          matches: [
            '[text="今日已完成捐步"]',
            '[text="一起运动做公益"] +2 [text="关闭"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/23381801',
            'https://i.gkd.li/i/23414325',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 15,
      name: '🐤养鸡-领饲料-已满-知道了',
      desc: '饲料袋已满 弹窗->点击知道了',
      rules: [
        {
          matches:
            '[text="去帮好友喂食"] + [text="知道了"][visibleToUser=true]',
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/23238168',
            'https://i.gkd.li/i/23414417',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 16,
      name: '🌲森林-寻宝🎁-帮ta助力',
      desc: '弹窗-帮ta助力',
      rules: [
        {
          matches: [
            '[text^="好友"] +2 TextView[text="帮ta助力"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22941634',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 17,
      name: '🌲森林-寻宝🎁-助力成功-x掉',
      desc: '弹窗-x掉',
      rules: [
        {
          matches: [
            '[text="送你1次抽奖机会"] - [text="助力成功"] - * < * + TextView[visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22938650',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 18,
      name: '🌲森林-寻宝🎁-已完成任务-自动领取',
      desc: '①已邀助力 ②已逛市集 ③已兑换机会 ④已玩游戏',
      rules: [
        {
          actionCd: 1500,
          matches: [
            '[text^="邀请好友" || text^="去森林市集" || text^="消耗活力值" || text^="玩一玩" || text$="限定装扮" || text^="去看视频" || text*="故宫"] < * + * > [text="领取"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22950418',
            'https://i.gkd.li/i/23013833',
            'https://i.gkd.li/i/23236056',
            'https://i.gkd.li/i/23239118',
            'https://i.gkd.li/i/23290903',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 19,
      name: '🌲森林-寻宝🎁-自动签到',
      desc: '寻宝-点击签到',
      rules: [
        {
          matches: [
            '[text="每日签到"] < * + * > [text="签到"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23013576',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 20,
      name: '🌲森林-寻宝🎁-弹窗-确认兑换',
      desc: '活力值兑换抽奖机会->确认',
      rules: [
        {
          matches: [
            '[text$="兑1次抽奖机会"] < * + * > [text="确认兑换"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23013746',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 21,
      name: '🌲森林-寻宝🎁-自动抽奖',
      desc: '寻宝->点击立即抽奖',
      enable: false,
      rules: [
        {
          actionCd: 1200,
          matches: [
            '[text="次机会"] - [text!="0"] - [text="还有"] - [text=""][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22983825',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 22,
      name: '🌲森林-寻宝🎁抽奖弹窗-再抽or知道了',
      desc: '抽奖->弹窗->点击 再抽or知道了',
      rules: [
        {
          matches: [
            '[text^="感谢你拯救了过期" || text^="恭喜获得"] +(2,3) View > TextView[text=""][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/22981776',
            'https://i.gkd.li/i/22981779',
            'https://i.gkd.li/i/22981791',
            // 排除 text^="感谢你" 误触页: https://i.gkd.li/i/23064639
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 23,
      name: '🌲森林-活力值奖励-立即领取',
      desc: '已完成活力值任务->立即领取',
      rules: [
        {
          matches: [
            '[text$="活力值"] + * > [text="立即领取"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22987992',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 24,
      name: '🌲森林-真爱树-攒能量',
      desc: '真爱树弹窗->点击攒能量',
      rules: [
        {
          actionMaximum: 1,
          matches: [
            '[text="攒能量不影响排行榜"] -2 [text="攒能量"][visibleToUser=true]',
          ],
          fastQuery: false,
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
      key: 25,
      name: '🌲森林-好友页-浇水弹窗-送给ta',
      desc: '自动确认浇水(⚠❗开启前请先设好浇多少g)',
      enable: false,
      rules: [
        {
          matches: [
            '[text^="提醒TA来收"] + [text="浇水送祝福"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22973598',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 26,
      name: '🌲森林-集市-完成任务-领取',
      desc: '天猫集市任务-领15g能量(❗需开shizuku强制点击)',
      rules: [
        {
          action: 'clickNode',
          matches: [
            '[text="天猫森林集市"]',
            '@[text="15g"] <2 * + [text="可领取"]',
          ],
          fastQuery: false,
          snapshotUrls: ['https://i.gkd.li/i/23413420'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 27,
      name: '🌲森林-集市-弹窗-x掉',
      desc: '①首购红包 ②膨胀红包',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          matches: [
            '[text="天猫森林集市"]',
            '[text="点击领取"] <7 * + TextView[text=""][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23394640',
        },
        {
          key: 2,
          matches: [
            '[text="天猫森林集市"]',
            '[text="立即膨胀"] + * > Image[text=""][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23394780',
        },
      ],
    },
    {
      key: 28,
      name: '⛪新村-加速任务-已完成-自动领取',
      desc: '该任务已完成->点击 去领取',
      rules: [
        {
          matches: [
            '[text^="+"][text$="/时"] + [text$="领取"][visibleToUser=true]',
          ],
          fastQuery: false,
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
      key: 29,
      name: '🌾农场-施肥-丰收礼包-领取',
      desc: '施肥n次领肥料->待领取弹窗->点击 领取',
      rules: [
        {
          anyMatches: [
            '[text="丰收礼包待领取"] +3 [text="立即领取"][visibleToUser=true]',
            '[text="立即领肥"][visibleToUser=true]',
          ],
          fastQuery: false,
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
      key: 30,
      name: '🌾农场-丰收礼包已领取-x掉',
      desc: 'x掉弹窗',
      rules: [
        {
          matches: [
            '[text="丰收礼包已领取"] +(4,5) [text="关闭"][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/23014209',
            'https://i.gkd.li/i/23440721',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 31,
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
      key: 32,
      name: '🙋‍♂️扫码加好友-辅助①',
      desc: '扫出森林主页->点击 加好友',
      enable: false,
      rules: [
        {
          key: 1,
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
          matchDelay: 1000,
          matches: [
            '[text$="的蚂蚁森林"][id$="textView_title"]',
            'Button + Button[text=""][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23279949',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 33,
      name: '🙋‍♂️扫码加好友-辅助② (❗概率误触)',
      desc: '进用户主页->点击 加好友,②返回键',
      enable: false,
      rules: [
        {
          key: 1,
          actionCd: 1500,
          actionMaximum: 2,
          resetMatch: 'match',
          matches: [
            'ViewGroup[childCount=7] > ViewGroup[index=parent.childCount.minus(1)] > View[visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: ['https://i.gkd.li/i/23280044'],
          activityIds:
            'com.alipay.android.phone.xriver.bundlex.CSGAPushActivity',
        },
        {
          key: 2,
          preKeys: [1],
          action: 'back',
          matchDelay: 500,
          matches: [
            'ViewGroup[childCount>=7] > ViewGroup[index=parent.childCount.minus(1)] > View[visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23280202', // 含免验证直接通过的,按返回键
          activityIds:
            'com.alipay.android.phone.xriver.bundlex.CSGAPushActivity',
        },
      ],
    },
    {
      key: 34,
      name: '🙋‍♂️扫码加好友-辅助③',
      desc: '①x掉捎话弹窗 ②返回键',
      enable: false,
      activityIds: [
        'com.alipay.mobile.socialcontactsdk.contact.ui.FriendVerifyNewActivity_',
        'com.alipay.android.phone.xriver.bundlex.CSGAPushActivity',
      ],
      rules: [
        {
          key: 1,
          matches: [
            '[text="给Ta捎句话吧"] - * > [id$="closeButton"] > [text=""][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/23280089',
            'https://i.gkd.li/i/23280173',
          ],
        },
        {
          key: 2,
          preKeys: [1],
          action: 'back',
          matchDelay: 500,
          matches: [
            'ViewGroup[childCount>=7] > ViewGroup[index=parent.childCount.minus(1)] > View[visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23280150',
        },
      ],
    },
  ],
});
