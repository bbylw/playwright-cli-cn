import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';

const zhCN = {
  'Search(search dialog)': '搜索文档',
  'Search(search trigger)': '搜索',
  'Open Search(search trigger)(aria-label)': '打开搜索',
  'Close Search(search dialog)(aria-label)': '关闭搜索',
  'No results found(search dialog)': '未找到结果',
  'Search failed(search dialog)': '搜索失败',
  'Search failed, showing results for {query}(search dialog)': '搜索失败，显示 {query} 的结果',
  'On this page(table of contents)': '本页目录',
  'No Headings(table of contents)': '无标题',
  'Table of Contents(inline table of contents)': '目录',
  'Next Page(pagination)': '下一页',
  'Previous Page(pagination)': '上一页',
  'Edit on GitHub(edit page)': '在 GitHub 上编辑',
  'Copy Markdown(page actions)': '复制 Markdown',
  'Copied Markdown(page actions)': '已复制 Markdown',
  'View as Markdown(page actions)': '查看 Markdown',
  'Open(page actions)': '打开',
  'Options(aria-label)': '选项',
  'Open in GitHub(page actions)': '在 GitHub 中打开',
  'Open in ChatGPT(page actions)': '在 ChatGPT 中打开',
  'Open in Claude(page actions)': '在 Claude 中打开',
  'Open in Cursor(page actions)': '在 Cursor 中打开',
  'Copy Text(code block)(aria-label)': '复制文本',
  'Copied Text(code block)(aria-label)': '已复制文本',
  'Copy Anchor Link(heading anchor)(aria-label)': '复制锚点链接',
  'Copied Anchor Link(heading anchor)(aria-label)': '已复制锚点链接',
  'Collapse Sidebar(sidebar)(aria-label)': '折叠侧边栏',
  'Close Sidebar(sidebar)(aria-label)': '关闭侧边栏',
  'Open Sidebar(sidebar)(aria-label)': '打开侧边栏',
  'Hide Sidebar(sidebar)': '隐藏侧边栏',
  'Show Sidebar(sidebar)': '显示侧边栏',
  'Skip to Content(skip link)': '跳转到主要内容',
  'Toggle Menu(home layout header)(aria-label)': '切换菜单',
  'Toggle Theme(theme switcher)(aria-label)': '切换主题',
  'Theme(site menu)': '主题',
  'Light(theme switcher)(aria-label)': '浅色',
  'Dark(theme switcher)(aria-label)': '深色',
  'System(theme switcher)(aria-label)': '跟随系统',
  'Last updated on(page footer)': '最后更新于',
  'Page Not Found(404 not found page)': '页面不存在',
  'Back to Home(404 not found page)': '返回首页',
  'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 not found page)':
    '您访问的页面可能已被删除、更名或暂时不可用。',
  'Choose a language(language switcher)': '选择语言',
  'Language(language switcher)': '语言',
} satisfies Record<string, string>;

export const metadata: Metadata = {
  title: {
    default: 'Playwright CLI 中文文档',
    template: '%s | Playwright CLI',
  },
  description:
    'Playwright CLI 中文文档：面向现代编码代理的浏览器自动化 CLI，比 MCP 更节省 token，支持 Skills、会话管理与可视化仪表板。',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230a0a0a'/%3E%3Cpath d='M8 10l6 6-6 6' stroke='%23c41e3a' stroke-width='3' fill='none'/%3E%3Crect x='17' y='20' width='8' height='3' fill='%23fafaf8'/%3E%3C/svg%3E",
  },
  openGraph: {
    title: 'Playwright CLI 中文文档',
    description:
      '面向现代编码代理的浏览器自动化 CLI，比 MCP 更节省 token，支持 Skills、会话管理与可视化仪表板。',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider i18n={{ locale: 'zh-CN', translations: zhCN }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}