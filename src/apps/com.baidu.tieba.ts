import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 17,
      name: '功能类-自动[保存][原图]',
      desc: '长按图片后, ①[查看原图] ②长按屏幕中心(⚠️有概率不生效) ③[保存到相册]',
      enable: false,
      fastQuery: true,
      matchRoot: true,
      forcedTime: 3600000, // 主动查询1小时,否则第二次长按后不会触发
      actionDelay: 100,
      activityIds: '.image.ImageViewerActivity',
      rules: [
        {
          key: 1,
          name: '①点击[查看原图]',
          actionCd: 2500,
          matches: '@[clickable=true] > [text="查看原图"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/34725600',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②长按屏幕中心', // 第2次长按,按下时长低于 610ms 似乎无效？
          action: 'longClick',
          position: {
            x: 'screenWidth/2',
            y: 'screenHeight/2',
          },
          matches:
            '@[id="android:id/content"] >n [text="回复"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/29737932',
        },
        {
          key: 3,
          name: '③点击[保存到相册]',
          activityIds: ['.image.ImageViewerActivity', '.pb.pb.main.PbActivity'],
          excludeMatches: '[text="查看原图"][visibleToUser=true]',
          anyMatches: [
            '@[clickable=true] > [text="保存到相册"]',
            '[text="保存到相册"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/34725662',
            'https://i.gkd.li/i/34725702',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/34725600', //未 查看原图, [index=1]
          exampleUrls: [
            'https://e.gkd.li/2c75f3e1-5643-4c59-afcf-3801a7a21d1b',
            'https://e.gkd.li/e116d58c-ef9e-4df2-8c31-72397388424c',
          ],
        },
      ],
    },
  ],
});
