# 以防忘记,记录一下在VScode终端执行的一些命令

# 克隆官方模板
# git clone https://github.com/gkd-kit/subscription-template.git
# cd subscription-template
# npm install






# 检查gkd规则语法
pnpm exec tsx scripts/check.ts
# 生成汇总规则
# pnpm exec tsx scripts/build.ts



# 提交github
git add .
# git add src/apps/com.ss.android.ugc.aweme.lite.ts    # 提交单个文件

git commit -m "v10 更新了啥"
# git commit -m "feat: 全屏广告-提现后-借贷弹窗-x掉"

git push


# 从github拉取并合并
git pull origin main