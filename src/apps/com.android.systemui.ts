import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.systemui',
  name: '系统界面',
  groups: [
    {
      key: 1,
      name: '功能类-允许(自动精灵)获取屏幕内容',
      desc: '点击[允许]',
      rules: [
        {
          matches: [
            '[text*="自动精灵"][text*="屏幕" || text*="内容"]',
            '[text="立即开始" || text="允许"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23381954', //小米📱
            'https://i.gkd.li/i/23382378', //华为📱
          ],
          activityIds: '.media.MediaProjectionPermissionActivity',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-允许(GKD)获取屏幕内容', //一些华为机型的GKD截屏服务会经常失效,需要重新授权才能截快照
      desc: '(华为📱)点击[允许]',
      rules: [
        {
          matches: [
            '[text*="GKD"][text*="屏幕" || text*="内容"]',
            '[text="立即开始" || text="允许"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23415064', // Android 10
            'https://i.gkd.li/i/25325310', // HarmonyOS 3
          ],
          exampleUrls: 'https://e.gkd.li/48af0969-567d-4db3-8853-2addfdff0b30',
          activityIds: '.media.MediaProjectionPermissionActivity',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-允许(瞬译)获取屏幕内容',
      desc: '点击[允许]',
      rules: [
        {
          matches: [
            '[text*="瞬译"][text*="屏幕" || text*="内容"]',
            '[text="立即开始" || text="允许"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24421941',
          activityIds: '.media.MediaProjectionPermissionActivity',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-插USB后用于xxx-返回键',
      desc: '(真我📱)按下[返回键]',
      enable: false,
      rules: [
        {
          action: 'back',
          matches: '[text="USB 用于"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23823175',
            'https://i.gkd.li/i/23574876',
            'https://i.gkd.li/i/25253449', //无界面id
          ],
          exampleUrls: 'https://e.gkd.li/656c282c-b047-4e71-8f6d-17ee7c36d9d7',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-允许这台计算机进行USB调试',
      desc: '点击 ①✅一律允许 ②确定',
      enable: false,
      fastQuery: true,
      // activityIds: [
      //   '.usb.HwUsbDebuggingActivity', //华为
      //   '.usb.UsbDebuggingActivity',   //小米
      // ],
      rules: [
        {
          key: 1,
          matches:
            '[text$="这台计算机进行调试"][clickable=true][checked=false]',
          exampleUrls: 'https://e.gkd.li/124fdf00-8901-463e-bb0b-ed6e8aadf3f7',
          snapshotUrls: [
            'https://i.gkd.li/i/25254577', //真我📱 无界面id
            'https://i.gkd.li/i/25256690', //华为📱
            'https://i.gkd.li/i/25256846', //红米📱 [checked=true]是选中状态
            'https://i.gkd.li/i/25257004', //小米📱
          ],
        },
        {
          key: 2,
          preKeys: [1],
          matches: '[text="允许" || text="确定"][clickable=true]',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-允许通过此wifi进行无线调试',
      desc: '点击 ①✅始终允许 ②允许',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 1,
          matches:
            '[text$="通过此网络进行调试"][clickable=true][checked=false]',
          exampleUrls: 'https://e.gkd.li/7e2c5172-1b35-4ddf-8a4c-b19d25330d64',
          snapshotUrls: 'https://i.gkd.li/i/25256451', //真我📱 无界面id
        },
        {
          key: 2,
          preKeys: [1],
          matches: '[text="允许" || text="确定"][clickable=true]',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-自动[右滑]清掉通话录音通知',
      desc: '(⚠️仅适配 MIUI 13) 下拉通知栏后[右滑]清掉该通知',
      enable: false,
      rules: [
        {
          fastQuery: true,
          actionDelay: 1000, //等界面稳定
          actionMaximum: 1,
          resetMatch: 'app',
          swipeArg: {
            //从左往右滑动
            start: {
              left: 'width * 0.2',
              top: 'height * 0.5',
            },
            end: {
              left: 'width * 0.8',
              top: 'height * 0.5',
            },
            duration: 200,
          },
          matches:
            '[text$="通话录音已完成"] <2 LinearLayout <2 FrameLayout < [vid="expanded"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/35028500',
          exampleUrls: 'https://e.gkd.li/82046735-3d9d-4470-b8a5-e8b0f0402735',
        },
      ],
    },
  ],
});
