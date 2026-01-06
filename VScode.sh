# 以防忘记,记录一下在VScode终端执行的一些命令

# 克隆官方模板
# git clone https://github.com/gkd-kit/subscription-template.git
# cd subscription-template
# npm install






# 检查gkd规则语法
pnpm exec tsx scripts/check.ts
# 生成汇总规则(建议留到 github-Actions 那里运行'build_release')
# pnpm exec tsx scripts/build.ts



# 提交github
git add .
# git add src/apps/com.ss.android.ugc.aweme.lite.ts    # 提交单个文件

git commit -m "v10 更新了啥"
# git commit -m "feat: 全屏广告-提现后-借贷弹窗-x掉"

git push
# 推送到指定分支1
git push origin feature-1



# 从github拉取并合并
git pull origin main






# 强制同步Fork仓库与上游仓库一致的步骤：
# 1. 克隆你的 Fork（如果还没克隆）
git clone https://github.com/你的用户名/GKD_subscription.git
cd GKD_subscription

# 2. 添加上游仓库
git remote add upstream https://github.com/AIsouler/GKD_subscription.git

# 3. 获取上游所有更新
git fetch upstream

# 4. 切换到你的 main 分支
git checkout main
# 强制删除分支`feature-1`
# git branch -D feature-1

# 从上游最新代码创建第一个功能分支`feature-1`
# git checkout -b feature-1 upstream/main
# git push origin feature-1


# 5. 强制合并上游更新（这会覆盖你的本地更改）
git reset --hard upstream/main

# 6. 强制推送到你的 Fork
git push --force origin main
# git push --force origin feature-1

