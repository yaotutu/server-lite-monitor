# 使用Node.js官方提供的镜像作为基础镜像
FROM node:lts-alpine

# 安装pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 安装Git
RUN apk update && apk add --no-cache git

# 从GitHub克隆代码到容器中
RUN git clone https://github.com/yaotutu/dash-board .

# 切换到合适的分支
# RUN git checkout <branch-name>

# 安装项目的依赖包
RUN pnpm install

# 构建项目
RUN pnpm run build

# 监听3000端口
EXPOSE 3000

# 运行项目
CMD ["pnpm", "start"]

