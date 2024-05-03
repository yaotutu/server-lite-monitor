"use server";
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file"; // 导入日志轮转插件
import path from "path"; // 用于构建文件路径
import fs from "fs"; // 用于检查目录是否存在

// 确保日志文件夹存在
const logDir = path.join(process.cwd(), 'logs'); // 项目根目录的 logs 文件夹

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir); // 创建文件夹，如果不存在
}

// 创建 logger 实例
const logger = winston.createLogger({
  level: "info", // 默认日志级别
  format: winston.format.json(), // 使用 JSON 格式
  defaultMeta: { service: "user-service" }, // 元数据
  transports: [
    new winston.transports.Console(), // 控制台输出

    // 所有日志，包含错误级别，按天轮转，保留 7 天
    new DailyRotateFile({
      filename: path.join(logDir, "all-logs-%DATE%.log"), // 按日期命名
      datePattern: "YYYY-MM-DD", // 日期格式
      level: "info", // 记录 info 及以上级别的日志
      maxFiles: "7d", // 保留 7 天的日志
    }),

    // 错误级别日志，单独按天轮转，保留 30 天
    new DailyRotateFile({
      filename: path.join(logDir, "error-logs-%DATE%.log"),
      datePattern: "YYYY-MM-DD", // 日期格式
      level: "error", // 仅记录错误级别的日志
      maxFiles: "30d", // 保留 30 天的日志
    }),
  ],
});

// 记录初始化日志
logger.info("Logger initialized");

export async function getLogger() {
  return logger; // 返回 logger 实例
}

