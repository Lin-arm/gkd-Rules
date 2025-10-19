import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 1,
      name: '快手极速版 to 京东',
      desc: '点击跳转回快极',
      rules: [
        {
          actionDelay: 1500,
          matches: [
            'ImageView[vid="alc"] + TextView[text="快手极速版"][vid="ald"]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22872007',
            'https://i.gkd.li/i/22939003',
            'https://i.gkd.li/i/22938990',
          ],
          activityIds: [
            'com.jd.lib.babel.view.activity.BabelActivity',
            'com.jd.lib.productdetail.ProductDetailPopActivity',
            '.WebActivity',
          ],
        },
      ],
    },
  ],
});
