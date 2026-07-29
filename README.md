# 康雨霏 Eva Kang · 中文个人求职网站

这是一个面向商业分析、数据与 AI 产品、数据治理岗位的中文个人求职网站。内容以 TypeScript 数据文件维护，前端采用 React + Vite + TypeScript，使用 Tailwind CSS、Lucide React 和 Framer Motion 构建，适合直接部署到 GitHub Pages。

## 技术栈

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Framer Motion（轻量进入动画与返回顶部动画）
- GitHub Actions + GitHub Pages

## 本地运行

需要 Node.js 20 或更高版本。

```bash
npm install
npm run dev
```

开发服务器启动后，打开终端中显示的本地地址。构建与预览：

```bash
npm run build
npm run preview
```

## GitHub Pages 部署

1. 创建 GitHub 仓库。仓库可以是 `username.github.io`，也可以是普通的 `repository-name`。
2. 将本项目推送到仓库的 `main` 分支。
3. 进入仓库 Settings → Pages。
4. 将 Source 设置为 **GitHub Actions**。
5. 等待 Actions 中的 **Deploy to GitHub Pages** 完成。
6. 访问 `https://username.github.io/` 或 `https://username.github.io/repository-name/`。

`vite.config.ts` 会读取 GitHub Actions 的 `GITHUB_REPOSITORY`，自动为用户主页仓库使用 `/`，为普通项目仓库使用 `/repository-name/`，因此 CSS、JS、图片、favicon 和简历链接都能使用正确的 base 路径。

页面加载时会根据当前实际地址写入 canonical，并将 Open Graph / Twitter 图片转换为带正确仓库 base 的绝对地址。这样同一份代码可部署在不同账号或仓库，无需环境变量；如需在静态抓取阶段固定 canonical，可在 `index.html` 额外添加正式站点 URL。

## 替换个人素材

真实素材缺失不会阻塞构建，组件会显示有明确说明的占位区域。

- 个人职业照：将真实文件放入 `public/images/profile/eva-kang.jpg`。
- 学校和公司 Logo：按 `public/images/logos/README.md` 中的文件名替换。
- 项目截图：按 `public/images/projects/README.md` 中的文件名替换。
- PDF 简历：将真实文件放入 `public/resume/kang-yufei-resume.pdf`。
- 社交分享封面：替换 `public/images/og/og-cover.png`；当前提供的是品牌化占位图。

页面不会生成或填充虚构的真人照片、学校 Logo、公司 Logo、手机号或社交链接。

## 修改文案与邮箱

主要内容集中在 `src/data/`：

- `profile.ts`：姓名、邮箱、求职方向、关于我与亮点数字。
- `education.ts`：教育经历。
- `projects.ts`：重点项目、指标、成果与截图。
- `internships.ts`：实习经历。
- `entrepreneurship.ts`：创业经历。
- `skills.ts`：技能分组。

修改 `profile.ts` 中的 `email` 后，Hero 联系按钮、页脚、复制邮箱和 mailto 会同步更新。

## 修改配色

核心颜色集中在 `tailwind.config.js`，包括 `lavender`、`cream`、`sky`、`primary`、`ink` 等。页面基础背景和系统字体栈在 `src/index.css` 中维护。

## 项目目录

```text
src/
  components/
    layout/       Header、Footer、Container、SectionHeading
    ui/           Button、Tag、图片降级、Toast、Reveal、返回顶部
    sections/     Hero、About、Education、Projects、Internships 等
  data/          可维护的中文内容与类型
  hooks/         滚动区域识别、减少动态效果
  utils/         GitHub Pages 资源路径工具
public/          favicon、简历与图片资源占位说明
.github/         GitHub Pages 自动部署工作流
```

## 常见资源路径问题

- 普通项目仓库部署后资源 404：确认 Actions 使用了最新构建，且没有手动覆盖 `base`；`vite.config.ts` 会根据 `GITHUB_REPOSITORY` 自动处理。
- 图片占位没有消失：检查文件是否放在 `public/` 对应目录，以及文件名和大小写是否完全一致。
- 简历点击后 404：将真实 PDF 命名为 `kang-yufei-resume.pdf` 并放在 `public/resume/`。
- 修改后页面没有更新：等待 Pages workflow 完成，并进行一次硬刷新。

## 许可证与素材

本项目代码可按个人需要修改。请仅放入本人拥有或明确获授权使用的照片、Logo、截图和简历文件。
