# 以防忘记,记录一下在 VScode 终端执行的一些 git命令记录


# 克隆官方模板仓库
git clone https://github.com/gkd-kit/subscription-template.git
# 进入项目文件夹
cd subscription-template
# 安装依赖
npm install



# 暂存所有改动
git add .
# 暂存指定单个文件
git add src/apps/com.ss.android.ugc.aweme.lite.ts


# 提交commit
git commit -m "feat: 123云盘 局部广告"
git commit -m "perf: 123云盘 减少代码冗余"

# 在commit内关联issue
git commit -m "fix: 123云盘 全屏广告-弹窗广告 (#1788)"
# 同时关闭议题 #1788
git commit -m "fix: 123云盘 全屏广告-弹窗广告 (#1788)
>
> close #1788"
# 后续在github提PR时可填   `resolves #1788` 或  `Relates to #206`   关联issue

# 输入多行提交信息(不写"号,按回车键换行,标题和正文之间留空一行)
git commit -m "perf: 优化
>
> - 将 id 转 vid
> - 去掉 activityIds 包名前缀"

# 打开编辑器写多行
git commit

# Git 提交类型及其含义
# git commit -m "feat: 新功能：给项目增加一个新功能"
# git commit -m "fix: 修复 bug"
# git commit -m "perf: 性能优化：提升代码执行效率"
# git commit -m "docs: 文档更新：如 README、注释等"
# git commit -m "style: 代码风格调整：不影响代码逻辑"
# git commit -m "refactor: 代码重构：不新增功能、不修 bug"
# git commit -m "test: 测试相关：添加或修改测试用例"
# git commit -m "chore: 杂务：如构建工具、依赖更新等"
# git commit -m "ci: CI 配置：如 GitHub Actions 修改"
# git commit -m "revert: 回滚：撤销之前的提交"

# 有多个文件修改时,只提交一个文件报错,用 --no-verify
git commit --no-verify -m "perf: 快极 任务页-搜索赚金币"


# 修改最近一次的提交记录
# 进vim插入模式改
git commit --amend
# 直接快捷修改
git commit --amend -m "fix: 哔哩哔哩 分段广告-视频详情页下方推广 (#40)"

# 查看提交历史
git log --oneline
# 筛选，忽略大小写（匹配 VID/vid/Vid 等），并高亮关键词
git log --oneline | grep -i "vid"
# 显示包含 vid 的提交（带作者、时间、简短信息）
git log --pretty=format:"%h %an %ad %s" --date=short | grep -i "vid"
# 输出该提交的详细细节，然后可以拿完整哈希去github搜commit记录
git show 36feb1815d37f7d62127b861a52cd02d7b3b0551

# 执行撤销 (f8e9d7c)
git revert f8e9d7c
# 按 i 进入插入模式(不需要)
# Esc → :wq → Enter 保存并退出

# 彻底回退到指定commit
git reset --hard f8e9d7c




# 检查gkd规则语法
pnpm exec tsx scripts/check.ts
# 生成汇总规则(建议留到 github-Actions 那里运行'build_release')
# pnpm exec tsx scripts/build.ts


# 从远程 origin 的 main 分支拉取代码，自动执行合并（merge）
# 如果本地和远程存在分叉，会自动生成一条新的「合并提交」
git pull origin main

# 从远程 origin 的 main 分支拉取代码，使用变基（rebase）模式
# 作用：把你本地所有新提交，挪到远程最新提交的后面，提交历史是一条直线，不会产生多余合并节点
# 注意：已经推送到远程公共分支的提交，不要随意rebase
git pull --rebase origin main

# 推送：简化命令
# 当本地分支已经关联对应的远程分支时，可以简写，等价 git push origin 当前分支名
git push

# 将本地 feature-1 分支，推送到远程仓库 origin 的 feature-1 分支
# 常用于新创建、还没有关联远程的本地分支
git push origin feature-1




# 强制同步Fork仓库与上游仓库一致的步骤：
# 1. 克隆你的 Fork（如果还没克隆）
git clone https://github.com/你的用户名/GKD_subscription.git
cd GKD_subscription

# 2. 添加上游仓库
git remote add upstream https://github.com/Lin-arm/GKD_subscription.git

# 3. 获取上游所有更新
git fetch upstream
# 安全把上游 main 合并到你的本地 (变基模式)
git rebase upstream/main
# 把上游分支的PR#42拉取并生成本地分支 pr-42
git fetch upstream pull/42/head:pr-42

# 4. 切换到你的 main 分支, (不要用main分支提交AIsouler/GKD_subscription的PR)
git checkout main
# 将pr-42分支合并到当前分支
git merge pr-42

# 查看本地分支及其最后一次提交信息
git branch -v
# 强制删除分支`feature-1`
git branch -D feature-1

# 从上游最新代码创建第一个功能分支`feature-1`
git checkout -b feature-1 upstream/main


# 5. 强制合并上游更新（这会覆盖你的本地更改）
git reset --hard upstream/main

# 6. 强制推送到你的 Fork
# git push --force origin main
git push --force origin feature-1




# 在分支上改完后,如果要推送到远程分支,需要先拉取远程分支的更新,检查差异,然后再 rebase,最后推送. 下面是具体命令: 
# 先刷新远程引用
git fetch origin

# 然后再检查差异 (docs/refactor-guide 是分支名)
git log --oneline HEAD..origin/docs/refactor-guide

# 然后再 rebase
git rebase origin/docs/refactor-guide

# 最后推送
git push origin docs/refactor-guide



