const fs = require("fs");
const path = require("path");
const generateIndexList = ["app/components/base"];

function generateIndexFile(relativePath) {
  // 从当前工作目录获取绝对路径
  const folderPath = path.resolve(process.cwd(), relativePath);

  // 检查指定的文件夹是否存在
  if (!fs.existsSync(folderPath)) {
    console.error(`Folder not found: ${folderPath}`);
    return;
  }

  // 读取文件夹中的文件
  const files = fs.readdirSync(folderPath);

  // 过滤出需要导出的文件（只选取 .jsx 或 .tsx 文件）
  const exports = files
    .filter((file) => file.endsWith(".jsx") || file.endsWith(".tsx"))
    .map((file) => {
      const componentName = path.basename(file, path.extname(file));
      return `export * from './${componentName}';`;
    });

  // 指定 index.js 的路径
  const indexPath = path.join(folderPath, "index.ts");

  // 将导出的语句写入 index.js 文件
  fs.writeFileSync(indexPath, exports.join("\n"));

  console.log(`Index file generated successfully at: ${indexPath}`);
}

generateIndexList.forEach((folder) => {
  generateIndexFile(folder);
});
