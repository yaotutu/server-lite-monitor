# 使用 Node.js 官方镜像作为基础镜像
FROM node:20

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml 文件到容器中
COPY package.json pnpm-lock.yaml ./

# 安装 pnpm
RUN npm install -g pnpm

# 安装项目依赖
RUN pnpm install

# 复制项目文件到容器中
COPY . .

# 构建 Next.js 应用
RUN pnpm run build

# 暴露容器的端口，根据你的 Next.js 项目配置的端口进行修改
EXPOSE 3000

# 运行 Next.js 应用
CMD ["pnpm", "start"]
