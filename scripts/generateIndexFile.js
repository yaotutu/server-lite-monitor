const fs = require("fs");
const path = require("path");
const generateIndexList = ["app/components/base","app/components/size-2x2","app/components/size-4*4"]

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

  // 生成注释，告知用户这个文件是自动生成的，不需要手动维护
  const headerComment = `
  // This file is auto-generated by a script.
  // Do not manually edit or maintain this file.
  `;

  // 过滤并生成导出语句
  const exports = files
    .filter((file) => file.endsWith(".jsx") || file.endsWith(".tsx"))
    .map((file) => {
      const componentName = path.basename(file, path.extname(file));
      return `export * from './${componentName}';`;
    });

  // 指定 index.ts 的路径
  const indexPath = path.join(folderPath, "index.ts");

  // 将注释和导出的语句写入 index.ts 文件
  const fileContent = [headerComment.trim(), ...exports].join("\n");

  fs.writeFileSync(indexPath, fileContent);

  console.log(`Index file generated successfully at: ${indexPath}`);
}

generateIndexList.forEach((folder) => {
  generateIndexFile(folder);
});

