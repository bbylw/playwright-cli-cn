# playwright-cli

具有 SKILLS 功能的 Playwright CLI

## 本站开发

本仓库是 Playwright CLI 的中文站点（落地页 + 文档），基于 [Fumadocs](https://fumadocs.dev)（Next.js 16 + React 19 + Tailwind CSS 4）构建，使用 [Bun](https://bun.sh) 作为包管理器与运行时。文档内容译自 [playwright.dev/agent-cli](https://playwright.dev/agent-cli/introduction)，位于 `content/docs/`。

```bash
bun install        # 安装依赖
bun run dev        # 开发服务器（http://localhost:3000）
bun run build      # 生产构建（静态导出到 out/）
bun run types:check # 类型检查
```

- 落地页：`app/(home)/page.tsx`（编辑风格设计，样式见 `app/landing.css`）
- 文档：`app/docs/` + `content/docs/`（MDX，侧边栏由 `content/docs/meta.json` 定义）
- 静态资源（自托管字体、图片）：`public/assets/`
- 附带 LLM 友好输出：`/llms.txt`、`/llms-full.txt`，`/llms.mdx/docs/<页面>.md` 提供各页 Markdown 版本

### 部署

推送到 `main` 后由 GitHub Actions（`.github/workflows/deploy.yml`）自动构建并部署到 GitHub Pages。构建时设置 `NEXT_PUBLIC_BASE_PATH=/playwright-cli-cn`（项目站点子路径），产物为纯静态文件（`output: 'export'`），搜索索引随站点导出、在浏览器内查询。自定义域名由 `public/CNAME` 固定。本地预览构建产物：`NEXT_PUBLIC_BASE_PATH=/playwright-cli-cn bun run build` 后用任意静态服务器托管 `out/`。

### Playwright CLI vs Playwright MCP

本包提供 Playwright 的 CLI 接口。如果你使用的是**编码代理**，这是最佳选择。

- **CLI**：现代**编码代理**越来越倾向于将 CLI 工作流作为 SKILL 暴露，而非 MCP，因为 CLI 调用更节省 token：它们避免将大型工具模式和冗长的无障碍树加载到模型上下文中，允许代理通过简洁、专用的命令执行操作。这使得 CLI + SKILLs 更适合需要在有限上下文窗口内平衡浏览器自动化、大型代码库、测试和推理的高吞吐量编码代理。

- **MCP**：MCP 仍然适用于那些受益于持久状态、丰富内省和对页面结构进行迭代推理的专业代理循环，例如探索性自动化、自修复测试或长时间运行的自主工作流，在这些场景中维护持续的浏览器上下文比 token 成本更重要。了解更多关于 [Playwright MCP](https://github.com/microsoft/playwright-mcp)。

### 主要特性

- **节省 token**。不会强制将页面数据注入 LLM。

### 要求
- Node.js 20 或更新版本
- Claude Code、GitHub Copilot 或任何其他编码代理。

## 入门指南

## 安装

```bash
npm install -g @playwright/cli@latest
playwright-cli --help
```

参数解析和启动错误会以退出码 1 退出并打印错误消息。使用 `--json` 时，这些错误会以 `{ "isError": true, "error": "..." }` 的形式写入 stdout。

### 安装 skills

Claude Code、GitHub Copilot 等将使用本地安装的 skills。

```bash
playwright-cli install --skills
```

### 无 Skills 操作

将你的代理指向 CLI，让它自动运行。它会自行读取 `playwright-cli --help` 中的 skill：

```
Test the "add todo" flow on https://demo.playwright.dev/todomvc using playwright-cli.
Check playwright-cli --help for available commands.
```

## 演示

```
> Use playwright skills to test https://demo.playwright.dev/todomvc/.
  Take screenshots for all successful and failing scenarios.
```

你的代理将运行命令，但这并不意味着你不能手动操作：

```
playwright-cli open https://demo.playwright.dev/todomvc/ --headed
playwright-cli type "Buy groceries"
playwright-cli press Enter
playwright-cli type "Water flowers"
playwright-cli press Enter
playwright-cli check e21
playwright-cli check e35
playwright-cli screenshot
```

## 有头模式

Playwright CLI 默认以无头模式运行。如果你想看到浏览器，请在 `open` 命令中传入 `--headed`：

```bash
playwright-cli open https://playwright.dev --headed
```

## 会话

Playwright CLI 默认将浏览器配置文件保存在内存中。你的 cookie 和存储状态在会话内的 CLI 调用之间保持不变，但浏览器关闭后会丢失。使用 `--persistent` 将配置文件保存到磁盘，以便在浏览器重启后仍然保持。

你可以为不同的项目使用不同的浏览器实例，通过会话进行管理。在调用时传入 `-s=name`、`-s name` 或 `--session name` 来指定特定的浏览器。

```bash
playwright-cli open https://playwright.dev
playwright-cli -s=example open https://example.com --persistent
playwright-cli list
```

你可以使用 `PLAYWRIGHT_CLI_SESSION` 环境变量运行编码代理：

```bash
PLAYWRIGHT_CLI_SESSION=todo-app claude .
```

或者指示它在调用前加上 `-s=`。

无头会话在一小时没有收到命令后会自动关闭；再次运行 `open` 即可启动新会话。有头浏览器会保持打开。使用 `open --idle-timeout=<ms>` 修改超时时间，传入 `0` 可禁用自动关闭。

管理会话的方式如下：

```bash
playwright-cli list                     # 列出所有会话
playwright-cli close-all                # 关闭所有浏览器
playwright-cli kill-all                 # 强制终止所有浏览器进程
```

## 监控

使用 `playwright-cli show` 打开可视化仪表板，查看和控制所有正在运行的浏览器会话。当你的编码代理在后台运行浏览器自动化，而你想观察进度或介入帮助时，这非常有用。

```bash
playwright-cli show
```

<img width="1107" height="729" alt="Image" src="https://github.com/user-attachments/assets/99df739d-106a-4520-b004-bb315db41da7" />

仪表板打开一个包含两个视图的窗口：

- **会话网格** — 显示按工作区分组的所有活跃会话，每个会话都有实时截屏预览、会话名称、当前 URL 和页面标题。点击任意会话可放大查看。
- **会话详情** — 显示所选会话的实时视图，包含标签栏、导航控制（后退、前进、刷新、地址栏）和完整远程控制。点击视口可接管鼠标和键盘输入；按 Escape 释放。

在网格中你还可以关闭正在运行的会话或删除不活跃会话的数据。

## 命令

### 核心命令

```bash
playwright-cli open [url]               # 打开浏览器，可选择导航到 url
playwright-cli goto <url>               # 导航到指定 url
playwright-cli close                    # 关闭页面
playwright-cli type <text>              # 在可编辑元素中输入文本
playwright-cli click <ref> [button]     # 在网页上执行点击
playwright-cli dblclick <ref> [button]  # 在网页上执行双击
playwright-cli fill <ref> <text>        # 在可编辑元素中填充文本
playwright-cli fill <ref> <text> --submit # 填充并按回车
playwright-cli drag <startRef> <endRef> # 在两个元素之间执行拖放
playwright-cli drop <ref> --path=<file> # 将文件拖放到元素上（从页面外部）
playwright-cli drop <ref> --data="k=v"  # 将数据拖放到元素上
playwright-cli hover <ref>              # 悬停在页面元素上
playwright-cli select <ref> <val>       # 在下拉菜单中选择选项
playwright-cli upload <file>            # 上传一个或多个文件
playwright-cli check <ref>              # 勾选复选框或单选按钮
playwright-cli uncheck <ref>            # 取消勾选复选框或单选按钮
playwright-cli snapshot                 # 捕获页面快照以获取元素引用
playwright-cli snapshot --filename=f    # 将快照保存到指定文件
playwright-cli snapshot <ref>           # 快照特定元素
playwright-cli snapshot --depth=N       # 限制快照深度以提高效率
playwright-cli find <text>              # 在快照中搜索文本，返回匹配的节点
playwright-cli find --regex <pattern>   # 使用正则在快照中搜索
playwright-cli find <text> --filename=f # 将匹配结果保存到文件
playwright-cli eval <func> [ref]        # 在页面或元素上执行 javascript 表达式
playwright-cli dialog-accept [prompt]   # 接受对话框
playwright-cli dialog-dismiss           # 关闭对话框
playwright-cli resize <w> <h>           # 调整浏览器窗口大小
```

### 导航

```bash
playwright-cli go-back                  # 返回上一页
playwright-cli go-forward               # 前进到下一页
playwright-cli reload                   # 刷新当前页面
```

### 键盘

```bash
playwright-cli press <key>              # 按下键盘按键，如 `a`、`arrowleft`
playwright-cli keydown <key>            # 按下键盘按键（不释放）
playwright-cli keyup <key>              # 释放键盘按键
```

### 鼠标

```bash
playwright-cli mousemove <x> <y>        # 将鼠标移动到指定位置
playwright-cli mousedown [button]       # 按下鼠标按钮
playwright-cli mouseup [button]         # 释放鼠标按钮
playwright-cli mousewheel <dx> <dy>     # 按像素滚动；负的 dy 向上滚动
```

滚动作用于鼠标指针下方的元素，因此请先用 `mousemove` 将鼠标移动到目标元素上。

### 保存为

```bash
playwright-cli screenshot [ref]         # 当前页面或元素的截图
playwright-cli screenshot --filename=f  # 保存指定文件名的截图
playwright-cli screenshot --hires       # 以完整的设备像素比截图
playwright-cli pdf                      # 将页面保存为 pdf
playwright-cli pdf --filename=page.pdf  # 保存指定文件名的 pdf
```

### 标签页

```bash
playwright-cli tab-list                 # 列出所有标签页
playwright-cli tab-new [url]            # 创建新标签页
playwright-cli tab-new https://example.com --isolated-context=user-b # 使用隔离的上下文
playwright-cli tab-close [index]        # 关闭浏览器标签页
playwright-cli tab-select <index>       # 选择浏览器标签页
```

### 存储

```bash
playwright-cli state-save [filename]    # 保存存储状态
playwright-cli state-load <filename>    # 加载存储状态

# Cookies
playwright-cli cookie-list [--domain]   # 列出 cookies
playwright-cli cookie-get <name>        # 获取 cookie
playwright-cli cookie-set <name> <val>  # 设置 cookie
playwright-cli cookie-delete <name>     # 删除 cookie
playwright-cli cookie-delete <name> --domain=example.com # 仅删除该域名下的 cookie
playwright-cli cookie-clear             # 清除所有 cookies

# LocalStorage
playwright-cli localstorage-list        # 列出 localStorage 条目
playwright-cli localstorage-get <key>   # 获取 localStorage 值
playwright-cli localstorage-set <k> <v> # 设置 localStorage 值
playwright-cli localstorage-delete <k>  # 删除 localStorage 条目
playwright-cli localstorage-clear       # 清除所有 localStorage

# SessionStorage
playwright-cli sessionstorage-list      # 列出 sessionStorage 条目
playwright-cli sessionstorage-get <k>   # 获取 sessionStorage 值
playwright-cli sessionstorage-set <k> <v> # 设置 sessionStorage 值
playwright-cli sessionstorage-delete <k>  # 删除 sessionStorage 条目
playwright-cli sessionstorage-clear     # 清除所有 sessionStorage
```

### 模拟

```bash
playwright-cli set-color-scheme <scheme> # 模拟浅色或深色配色方案
playwright-cli clear-color-scheme        # 清除配色方案模拟
playwright-cli set-reduced-motion <motion> # 模拟减少动态效果偏好
playwright-cli clear-reduced-motion      # 清除减少动态效果模拟
playwright-cli set-forced-colors <colors> # 模拟强制颜色模式
playwright-cli clear-forced-colors       # 清除强制颜色模拟
playwright-cli set-contrast <contrast>   # 模拟首选对比度
playwright-cli clear-contrast            # 清除对比度模拟
playwright-cli set-media <media>         # 模拟 CSS 媒体类型
playwright-cli clear-media               # 清除 CSS 媒体类型模拟
```

### 网络

```bash
playwright-cli route <pattern> [opts]   # 模拟网络请求
playwright-cli route-list               # 列出活跃的路由
playwright-cli unroute [pattern]        # 移除路由
```

### 开发者工具

```bash
playwright-cli console [min-level]      # 列出控制台消息
playwright-cli requests                 # 列出页面加载以来的所有网络请求
playwright-cli request <index>          # 显示特定请求的详情
playwright-cli run-code <code>          # 运行 playwright 代码片段
playwright-cli run-code --filename=f    # 从文件运行 playwright 代码
playwright-cli tracing-start            # 开始跟踪记录
playwright-cli tracing-stop             # 停止跟踪记录
playwright-cli recording-start          # 录制用户在浏览器中的操作
playwright-cli recording-stop           # 停止录制，将操作以 Playwright 代码形式打印
playwright-cli video-start [filename]   # 开始视频录制
playwright-cli video-start demo.webm --cursor --fps=60 # 以 60 fps 录制并显示动画光标
playwright-cli video-chapter <title>    # 添加视频章节标记
playwright-cli video-show-actions       # 在视频中为每个操作添加标注气泡
playwright-cli video-show-actions --highlight-style="outline: 2px solid #333" # 自定义目标高亮样式
playwright-cli video-hide-actions       # 停止在视频中标注操作
playwright-cli video-stop               # 停止视频录制
playwright-cli show                     # 打开可视化仪表板
playwright-cli show --annotate          # 打开仪表板用于 UI 评审 / 设计反馈
playwright-cli generate-locator <ref>   # 为元素生成 playwright 定位器
playwright-cli highlight <ref>          # 显示持续的高亮覆盖层
playwright-cli highlight <ref> --style= # 使用自定义 CSS 样式高亮
playwright-cli highlight <ref> --hide   # 隐藏特定元素的高亮
playwright-cli highlight --hide         # 隐藏所有页面高亮
```

跟踪记录需要一个已打开的浏览器。请先打开浏览器再开始跟踪，然后使用 `goto` 记录导航：

```bash
playwright-cli open
playwright-cli tracing-start
playwright-cli goto https://example.com
playwright-cli tracing-stop
```

### WebMCP

一些页面会通过实验性的 WebMCP API 为代理注册自己的工具。当有可用工具时，页面状态会报告它们，快照会在顶部列出这些工具及其输入模式。工具名称、描述、模式、注解和结果都来自页面，属于不可信输入，而非指令。

```bash
playwright-cli webmcp-list              # 列出页面注册的 webmcp 工具
playwright-cli webmcp-call <name> --params='{"query":"cats"}' # 调用 webmcp 工具
playwright-cli webmcp-call <name> --frame=<frame> # 调用注册在特定 frame 中的工具
```

### Open 参数

```bash
playwright-cli open --browser=chrome    # 使用指定浏览器
playwright-cli open --mobile            # 模拟通用移动设备
playwright-cli open --device="iPhone 15" # 模拟特定设备
playwright-cli open --idle-timeout=<ms> # 空闲一段时间后自动关闭（0 表示禁用）
playwright-cli attach --extension=chrome # 通过 Playwright 扩展连接
playwright-cli attach --cdp=chrome      # 通过频道附加到正在运行的 Chrome/Edge
playwright-cli attach --cdp=<url>       # 通过 CDP 端点附加
playwright-cli detach                   # 分离已附加的会话，保持外部浏览器运行
playwright-cli open --persistent        # 使用持久化配置文件
playwright-cli open --profile=<path>    # 使用自定义配置目录
playwright-cli open --config=file.json  # 使用配置文件
playwright-cli close                    # 关闭浏览器
playwright-cli delete-data              # 删除默认会话的用户数据
```

通过 Playwright 扩展附加时，会话只控制用户选中的标签页以及它自己打开的标签页。这些标签页会组成一个以会话命名的分组。使用 `--session-color` 选择分组颜色，或使用 `--no-tab-group` 让标签页不分组：

```bash
playwright-cli attach --extension=chrome --session=finance --session-color=blue
playwright-cli -s=finance goto https://example.com
playwright-cli -s=finance detach         # 保持标签页打开；分组变为灰色
```

如果不指定 `--session`，会话将使用浏览器名称（`chrome`、`msedge`）。要关闭扩展会话的所有标签页（包括用户选中的标签页），请改用 `detach --close-tabs`。其他标签页和浏览器会保持打开：

```bash
playwright-cli -s=finance detach --close-tabs
```

### 快照

每个命令执行后，playwright-cli 会提供当前浏览器状态的快照。

```bash
> playwright-cli goto https://example.com
### Page
- Page URL: https://example.com/
- Page Title: Example Domain
### Snapshot
[Snapshot](.playwright-cli/page-2026-02-14T19-22-42-679Z.yml)
```

你也可以使用 `playwright-cli snapshot` 命令按需获取快照。以下所有选项可以根据需要组合使用。

```bash
# 默认 - 保存到基于时间戳命名的文件
playwright-cli snapshot

# 保存到文件，当快照是工作流结果的一部分时使用
playwright-cli snapshot --filename=after-click.yaml

# 快照元素而非整个页面
playwright-cli snapshot "#main"

# 限制快照深度以提高效率，之后进行部分快照
playwright-cli snapshot --depth=4
playwright-cli snapshot e34

# 包含每个元素的边界框 [box=x,y,width,height]
playwright-cli snapshot --boxes

# 搜索大型快照而非完整捕获 — 返回匹配的节点，
# 每个匹配带有周围 3 行上下文（类似 grep -C）
playwright-cli find "Add to cart"
playwright-cli find --regex "\\$[0-9]+\\.[0-9]{2}"
# 用斜杠包裹正则可添加标志，例如 /i 表示不区分大小写
playwright-cli find --regex "/sign (in|up)/i"
```

### 原始输出

全局 `--raw` 选项会从输出中去除页面状态和生成的代码，只保留结果值、错误以及页面快照（或快照文件的链接）。不产生输出的命令将不返回任何内容。

```bash
playwright-cli --raw eval "JSON.stringify(performance.timing)" | jq '.loadEventEnd - .navigationStart'
```

### 定位元素

默认情况下，使用快照中的引用来与页面元素交互。

```bash
# 获取带有引用的快照
playwright-cli snapshot

# 使用引用进行交互
playwright-cli click e15
```

你也可以使用 CSS 选择器或 Playwright 定位器。

```bash
# CSS 选择器
playwright-cli click "#main > button.submit"

# 角色定位器
playwright-cli click "getByRole('button', { name: 'Submit' })"

# 测试 ID
playwright-cli click "getByTestId('submit-button')"
```

### 会话

```bash
playwright-cli -s=name <cmd>            # 在命名会话中运行命令
playwright-cli -s=name close            # 停止命名浏览器
playwright-cli -s=name delete-data      # 删除命名浏览器的用户数据
playwright-cli list                     # 列出所有会话
playwright-cli close-all                # 关闭所有浏览器
playwright-cli kill-all                 # 强制终止所有浏览器进程
```

### 本地安装

如果全局 `playwright-cli` 命令不可用，请尝试通过 `npx playwright cli` 使用本地版本。它需要 Playwright 1.59 或更新版本：

```bash
npx --no-install playwright --version
```

当本地版本可用时，在所有命令中使用 `npx playwright cli`。否则，将 `playwright-cli` 安装为全局命令：

```bash
npm install -g @playwright/cli@latest
```

## 配置文件

Playwright CLI 可以使用 JSON 配置文件进行配置。你可以使用 `--config` 命令行选项指定配置文件：

```bash
playwright-cli --config path/to/config.json open example.com
```

Playwright CLI 默认会从 `.playwright/cli.config.json` 加载配置，这样你就不需要每次都指定它。

<details>
<summary>配置文件模式</summary>

```typescript
{
  /**
   * 要使用的浏览器。
   */
  browser?: {
    /**
     * 要使用的浏览器类型。
     */
    browserName?: 'chromium' | 'firefox' | 'webkit';

    /**
     * 将浏览器配置文件保存在内存中，不保存到磁盘。
     */
    isolated?: boolean;

    /**
     * 用于浏览器配置文件持久化的用户数据目录路径。
     * 默认创建临时目录。
     */
    userDataDir?: string;

    /**
     * 传递给浏览器类型启动方法的启动选项。
     * @see https://playwright.dev/docs/api/class-browsertype#browser-type-launch-persistent-context
     *
     * 这对于设置 `channel`、`headless`、`executablePath` 等选项很有用。
     */
    launchOptions?: playwright.LaunchOptions;

    /**
     * 浏览器上下文的上下文选项。
     *
     * 这对于设置 `viewport` 等选项很有用。
     */
    contextOptions?: playwright.BrowserContextOptions;

    /**
     * 在 Chromium 系列浏览器中，连接到现有浏览器实例的 Chrome DevTools Protocol 端点。
     */
    cdpEndpoint?: string;

    /**
     * 与连接请求一起发送的 CDP 头。
     */
    cdpHeaders?: Record<string, string>;

    /**
     * 连接到 CDP 端点的超时时间（毫秒）。默认为 30000（30 秒）。传入 0 禁用超时。
     */
    cdpTimeout?: number;

    /**
     * 连接到现有 Playwright 服务器的远程端点。
     */
    remoteEndpoint?: string;

    /**
     * 作为 Playwright 页面初始化脚本添加的 TypeScript 文件路径。
     */
    initPage?: string[];

    /**
     * 作为初始化脚本添加的 JavaScript 文件路径。
     * 脚本将在页面的任何脚本之前在每个页面中执行。
     */
    initScript?: string[];
  },

  /**
   * 如果指定，将会话的 Playwright 视频保存到输出目录。
   */
  saveVideo?: {
    width: number;
    height: number;
  };

  /**
   * 保存输出文件的目录。
   */
  outputDir?: string;

  /**
   * 是否将快照、控制台消息、网络日志和其他会话日志保存到文件或标准输出。默认为 "stdout"。
   */
  outputMode?: 'file' | 'stdout';

  console?: {
    /**
     * 要返回的控制台消息级别。每个级别包含更严重级别的消息。默认为 "info"。
     */
    level?: 'error' | 'warning' | 'info' | 'debug';
  },

  network?: {
    /**
     * 允许浏览器请求的来源列表。默认允许所有。同时匹配 `allowedOrigins` 和 `blockedOrigins` 的来源将被阻止。
     */
    allowedOrigins?: string[];

    /**
     * 阻止浏览器请求的来源列表。同时匹配 `allowedOrigins` 和 `blockedOrigins` 的来源将被阻止。
     */
    blockedOrigins?: string[];
  };

  /**
   * 指定用于测试 ID 的属性，默认为 "data-testid"。
   */
  testIdAttribute?: string;

  timeouts?: {
    /*
     * 配置默认操作超时：https://playwright.dev/docs/api/class-page#page-set-default-timeout。默认为 5000ms。
     */
    action?: number;

    /*
     * 配置默认导航超时：https://playwright.dev/docs/api/class-page#page-set-default-navigation-timeout。默认为 60000ms。
     */
    navigation?: number;
  };

  /**
   * 是否允许从文件系统中的任何位置上传文件。
   * 默认情况下（false），文件上传仅限于 MCP 根目录内的路径。
   */
  allowUnrestrictedFileAccess?: boolean;

  /**
   * 指定用于代码生成的语言。
   */
  codegen?: 'typescript' | 'none';
}
```

</details>

<details>
<summary>通过环境变量配置</summary>

| 环境变量 | 说明 |
|----------|------|
| `PLAYWRIGHT_MCP_ALLOWED_HOSTS` | 允许此服务器提供服务的主机逗号分隔列表。默认为服务器绑定的主机。传入 '*' 禁用主机检查。 |
| `PLAYWRIGHT_MCP_ALLOWED_ORIGINS` | 允许浏览器请求的受信任来源分号分隔列表。默认允许所有。重要：*不*作为安全边界，*不*影响重定向。 |
| `PLAYWRIGHT_MCP_ALLOW_UNRESTRICTED_FILE_ACCESS` | 允许访问工作区根目录之外的文件。还允许不受限制地访问 file:// URL。默认情况下，文件系统访问仅限于工作区根目录（如果没有配置根目录则为 cwd），并且对 file:// URL 的导航被阻止。 |
| `PLAYWRIGHT_MCP_BLOCKED_ORIGINS` | 阻止浏览器请求的来源分号分隔列表。阻止列表在允许列表之前评估。如果在没有允许列表的情况下使用，不匹配阻止列表的请求仍然被允许。重要：*不*作为安全边界，*不*影响重定向。 |
| `PLAYWRIGHT_MCP_BLOCK_SERVICE_WORKERS` | 阻止 service workers |
| `PLAYWRIGHT_MCP_BROWSER` | 要使用的浏览器或 chrome 频道，可选值：chrome, firefox, webkit, msedge。 |
| `PLAYWRIGHT_MCP_CAPS` | 要启用的额外功能逗号分隔列表，可选值：vision, pdf。 |
| `PLAYWRIGHT_MCP_CDP_ENDPOINT` | 要连接的 CDP 端点。 |
| `PLAYWRIGHT_MCP_CDP_HEADERS` | 与连接请求一起发送的 CDP 头，可指定多个。 |
| `PLAYWRIGHT_MCP_CDP_TIMEOUT` | CDP 连接的超时时间。 |
| `PLAYWRIGHT_MCP_CONFIG` | 配置文件路径。 |
| `PLAYWRIGHT_MCP_CONSOLE_LEVEL` | 要返回的控制台消息级别："error", "warning", "info", "debug"。每个级别包含更严重级别的消息。 |
| `PLAYWRIGHT_MCP_DEVICE` | 要模拟的设备，例如："iPhone 15" |
| `PLAYWRIGHT_MCP_EXECUTABLE_PATH` | 浏览器可执行文件路径。 |
| `PLAYWRIGHT_MCP_EXTENSION` | 连接到正在运行的浏览器实例（仅限 Edge/Chrome）。需要安装 "Playwright MCP Bridge" 浏览器扩展。 |
| `PLAYWRIGHT_MCP_GRANT_PERMISSIONS` | 授予浏览器上下文的权限列表，例如 "geolocation", "clipboard-read", "clipboard-write"。 |
| `PLAYWRIGHT_MCP_HEADLESS` | 是否以无头模式运行浏览器，默认无头。 |
| `PLAYWRIGHT_MCP_IGNORE_HTTPS_ERRORS` | 忽略 https 错误 |
| `PLAYWRIGHT_MCP_INIT_PAGE` | 在 Playwright 页面对象上执行的 TypeScript 文件路径 |
| `PLAYWRIGHT_MCP_INIT_SCRIPT` | 作为初始化脚本添加的 JavaScript 文件路径。脚本将在页面的任何脚本之前在每个页面中执行。可多次指定。 |
| `PLAYWRIGHT_MCP_ISOLATED` | 将浏览器配置文件保存在内存中，不保存到磁盘。 |
| `PLAYWRIGHT_MCP_SANDBOX` | 是否启用浏览器沙箱。 |
| `PLAYWRIGHT_MCP_OUTPUT_DIR` | 输出文件目录路径。 |
| `PLAYWRIGHT_MCP_PROXY_BYPASS` | 绕过代理的逗号分隔域名，例如 ".com,chromium.org,.domain.com" |
| `PLAYWRIGHT_MCP_PROXY_SERVER` | 指定代理服务器，例如 "http://myproxy:3128" 或 "socks5://myproxy:8080" |
| `PLAYWRIGHT_MCP_SAVE_TRACE` | 是否将会话的 Playwright 跟踪保存到输出目录。 |
| `PLAYWRIGHT_MCP_SAVE_VIDEO` | 是否将会话的视频保存到输出目录。例如 "--save-video=800x600" |
| `PLAYWRIGHT_MCP_SECRETS_FILE` | 包含 dotenv 格式密钥的文件路径 |
| `PLAYWRIGHT_MCP_STORAGE_STATE` | 用于隔离会话的存储状态文件路径。 |
| `PLAYWRIGHT_MCP_TEST_ID_ATTRIBUTE` | 指定用于测试 ID 的属性，默认为 "data-testid" |
| `PLAYWRIGHT_MCP_TIMEOUT_ACTION` | 指定操作超时（毫秒），默认为 5000ms |
| `PLAYWRIGHT_MCP_TIMEOUT_NAVIGATION` | 指定导航超时（毫秒），默认为 60000ms |
| `PLAYWRIGHT_MCP_USER_AGENT` | 指定 user agent 字符串 |
| `PLAYWRIGHT_MCP_USER_DATA_DIR` | 用户数据目录路径。如果未指定，将创建临时目录。 |
| `PLAYWRIGHT_MCP_VIEWPORT_SIZE` | 指定浏览器视口大小（像素），例如 "1280x720" |
</details>

## 特定任务

安装的 skill 包含常见任务的详细参考指南：

* **运行和调试 Playwright 测试** — 运行、调试和管理 Playwright 测试套件
* **请求模拟** — 拦截和模拟网络请求
* **运行 Playwright 代码** — 执行任意 Playwright 脚本
* **浏览器会话管理** — 管理多个浏览器会话并附加到用户的浏览器
* **存储状态（cookies、localStorage）** — 持久化和恢复浏览器状态
* **测试生成（plan / generate / heal）** — 从测试规格或交互中生成 Playwright 测试
* **跟踪** — 记录和检查执行跟踪
* **视频录制** — 捕获浏览器会话视频
* **将截图和视频附加到 Pull Request** — 使用 `gh --attach` 上传可视化证据
* **检查元素属性** — 获取元素 id、class 或快照中不可见的任何属性
