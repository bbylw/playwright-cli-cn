import type { Metadata } from 'next';
import { preload } from 'react-dom';
import Link from 'next/link';
import { LandingEffects } from '@/components/landing-effects';

export const metadata: Metadata = {
  title: {
    absolute: 'Playwright CLI — 具有 SKILLS 功能的 Playwright CLI',
  },
  description:
    'Playwright CLI 中文文档：面向现代编码代理的浏览器自动化 CLI，比 MCP 更节省 token，支持 Skills、会话管理与可视化仪表板。',
};

// Syntax-highlighted config sample, kept as static HTML.
const configJsonHtml = `<code>{
  <span class="text-accent">"browser"</span>: {
    <span class="text-accent">"browserName"</span>: <span class="text-paper">"chromium"</span>,
    <span class="text-accent">"headless"</span>: <span class="text-accent">false</span>,
    <span class="text-accent">"launchOptions"</span>: {
      <span class="text-accent">"slowMo"</span>: <span class="text-paper">100</span>
    },
    <span class="text-accent">"contextOptions"</span>: {
      <span class="text-accent">"viewport"</span>: {
        <span class="text-accent">"width"</span>: <span class="text-paper">1280</span>,
        <span class="text-accent">"height"</span>: <span class="text-paper">720</span>
      }
    }
  },
  <span class="text-accent">"outputDir"</span>: <span class="text-paper">"./output"</span>,
  <span class="text-accent">"console"</span>: {
    <span class="text-accent">"level"</span>: <span class="text-paper">"info"</span>
  },
  <span class="text-accent">"timeouts"</span>: {
    <span class="text-accent">"action"</span>: <span class="text-paper">5000</span>,
    <span class="text-accent">"navigation"</span>: <span class="text-paper">60000</span>
  }
}</code>`;

export default function HomePage() {
  preload('/assets/playfair-display-latin.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
  preload('/assets/source-sans-3-latin.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });

  return (
    <div id="top" className="landing-root noise-overlay bg-paper text-ink font-sans">
      <a href="#main" className="skip-link font-sans">跳转到主要内容</a>
          <div id="top-sentinel" aria-hidden="true"></div>
          {/* Navigation */}
          <nav aria-label="主导航" className="fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-ink/10">
              <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
                  <a href="#top" className="font-serif text-2xl font-bold tracking-tight">Playwright CLI</a>

                  <ul className="hidden md:flex items-center space-x-12">
                      <li><a href="#features" className="font-sans text-sm font-semibold tracking-widest uppercase line-accent">特性</a></li>
                      <li><a href="#installation" className="font-sans text-sm font-semibold tracking-widest uppercase line-accent">安装</a></li>
                      <li><a href="#commands" className="font-sans text-sm font-semibold tracking-widest uppercase line-accent">命令</a></li>
                      <li><a href="#configuration" className="font-sans text-sm font-semibold tracking-widest uppercase line-accent">配置</a></li>
                      <li><Link href="/docs" className="font-sans text-sm font-semibold tracking-widest uppercase line-accent">文档</Link></li>
                      <li><a href="https://github.com/microsoft/playwright-cli" className="font-sans text-sm font-semibold tracking-widest uppercase bg-ink text-paper px-6 py-3 hover:bg-gray-800 transition-colors duration-300">GitHub</a></li>
                  </ul>

                  <button id="mobile-menu-btn" type="button" className="md:hidden" popoverTarget="mobile-menu" aria-controls="mobile-menu" aria-label="菜单">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                  </button>
              </div>

              {/* Mobile menu (native popover) */}
              <div id="mobile-menu" popover="auto">
                  <ul className="px-8 py-6 space-y-4">
                      <li><a href="#features" className="block font-sans text-sm font-semibold tracking-widest uppercase">特性</a></li>
                      <li><a href="#installation" className="block font-sans text-sm font-semibold tracking-widest uppercase">安装</a></li>
                      <li><a href="#commands" className="block font-sans text-sm font-semibold tracking-widest uppercase">命令</a></li>
                      <li><a href="#configuration" className="block font-sans text-sm font-semibold tracking-widest uppercase">配置</a></li>
                      <li><Link href="/docs" className="block font-sans text-sm font-semibold tracking-widest uppercase">文档</Link></li>
                      <li><a href="https://github.com/microsoft/playwright-cli" className="block font-sans text-sm font-semibold tracking-widest uppercase text-accent">GitHub</a></li>
                  </ul>
              </div>
          </nav>

          <main id="main">
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 px-8">
              <div className="max-w-7xl mx-auto w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                      <div className="lg:col-span-7">
                          <div className="animate-reveal">
                              <span className="font-sans text-sm font-semibold tracking-widest uppercase text-accent mb-8 block">具有 SKILLS 功能</span>

                              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight mb-12 text-balance">
                                  Playwright<br />
                                  <span className="italic font-normal">CLI</span>
                              </h1>

                              <div className="editorial-rule-thick mb-12"></div>

                              <p className="font-sans text-xl md:text-2xl leading-relaxed max-w-xl text-gray-600 mb-12">
                                  现代编码代理的最佳选择。节省 token，避免将大型工具模式和冗长的无障碍树加载到模型上下文中。
                              </p>

                              <div className="flex flex-col sm:flex-row gap-6">
                                  <a href="#installation" className="font-sans text-sm font-semibold tracking-widest uppercase bg-ink text-paper px-10 py-5 hover:bg-gray-800 transition-colors duration-300 inline-flex items-center justify-center">
                                      开始使用
                                      <svg aria-hidden="true" className="w-4 h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                      </svg>
                                  </a>
                                  <a href="#features" className="font-sans text-sm font-semibold tracking-widest uppercase border-2 border-ink px-10 py-5 hover:bg-ink hover:text-paper transition-colors duration-300 inline-flex items-center justify-center">
                                      了解更多
                                  </a>
                              </div>
                          </div>
                      </div>

                      <div className="lg:col-span-5 animate-reveal stagger-2">
                          <div className="code-editorial">
                              <div className="font-sans text-xs text-gray-400 mb-6 tracking-widest uppercase">Terminal</div>
                              <div className="space-y-3">
                                  <div><span className="text-accent">$</span> npm install -g @playwright/cli@latest</div>
                                  <div><span className="text-accent">$</span> playwright-cli --help</div>
                                  <div className="text-gray-500"># 开始浏览器自动化之旅</div>
                                  <div><span className="text-accent">$</span> playwright-cli open https://example.com</div>
                                  <div><span className="text-accent">$</span> playwright-cli snapshot</div>
                                  <div><span className="text-accent">$</span> playwright-cli click e15</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Marquee */}
          <section className="relative py-8 border-y border-ink/10 overflow-hidden bg-ink" aria-label="产品亮点">
              <div id="marquee-track" className="flex w-max animate-marquee whitespace-nowrap">
                  <div className="flex items-center shrink-0">
                      <span className="font-serif text-4xl font-bold italic text-paper mx-8">节省 Token</span>
                      <span className="font-serif text-4xl font-bold italic text-accent mx-8" aria-hidden="true">•</span>
                      <span className="font-serif text-4xl font-bold italic text-paper mx-8">CLI 优先</span>
                      <span className="font-serif text-4xl font-bold italic text-accent mx-8" aria-hidden="true">•</span>
                      <span className="font-serif text-4xl font-bold italic text-paper mx-8">丰富命令</span>
                      <span className="font-serif text-4xl font-bold italic text-accent mx-8" aria-hidden="true">•</span>
                      <span className="font-serif text-4xl font-bold italic text-paper mx-8">会话管理</span>
                      <span className="font-serif text-4xl font-bold italic text-accent mx-8" aria-hidden="true">•</span>
                      <span className="font-serif text-4xl font-bold italic text-paper mx-8">可视化仪表板</span>
                      <span className="font-serif text-4xl font-bold italic text-accent mx-8" aria-hidden="true">•</span>
                      <span className="font-serif text-4xl font-bold italic text-paper mx-8">灵活配置</span>
                      <span className="font-serif text-4xl font-bold italic text-accent mx-8" aria-hidden="true">•</span>
                  </div>
                  <div className="flex items-center shrink-0" aria-hidden="true">
                      <span className="font-serif text-4xl font-bold italic text-paper mx-8">节省 Token</span>
                      <span className="font-serif text-4xl font-bold italic text-accent mx-8">•</span>
                      <span className="font-serif text-4xl font-bold italic text-paper mx-8">CLI 优先</span>
                      <span className="font-serif text-4xl font-bold italic text-accent mx-8">•</span>
                      <span className="font-serif text-4xl font-bold italic text-paper mx-8">丰富命令</span>
                      <span className="font-serif text-4xl font-bold italic text-accent mx-8">•</span>
                      <span className="font-serif text-4xl font-bold italic text-paper mx-8">会话管理</span>
                      <span className="font-serif text-4xl font-bold italic text-accent mx-8">•</span>
                      <span className="font-serif text-4xl font-bold italic text-paper mx-8">可视化仪表板</span>
                      <span className="font-serif text-4xl font-bold italic text-accent mx-8">•</span>
                      <span className="font-serif text-4xl font-bold italic text-paper mx-8">灵活配置</span>
                      <span className="font-serif text-4xl font-bold italic text-accent mx-8">•</span>
                  </div>
              </div>
              <button id="marquee-toggle" type="button" className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-paper/30 bg-ink/80 text-paper hover:bg-gray-800 transition-colors duration-300" aria-label="暂停滚动字幕">
                  <svg className="icon-pause w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M6 4h4v16H6zM14 4h4v16h-4z"></path>
                  </svg>
                  <svg className="icon-play w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z"></path>
                  </svg>
              </button>
          </section>

          {/* Features Section */}
          <section id="features" className="py-32 px-8">
              <div className="max-w-7xl mx-auto">
                  {/* Section Header */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                      <div className="lg:col-span-4 animate-reveal">
                          <span className="font-sans text-sm font-semibold tracking-widest uppercase text-accent mb-6 block">01</span>
                          <h2 className="font-serif text-5xl md:text-6xl font-bold leading-[0.9] tracking-tight">
                              为什么<br />选择
                          </h2>
                      </div>
                      <div className="lg:col-span-8 flex items-end animate-reveal stagger-2">
                          <div>
                              <div className="editorial-rule mb-8"></div>
                              <p className="font-sans text-xl md:text-2xl leading-relaxed text-gray-600 max-w-2xl">
                                  专为现代编码代理设计，提供最高效的浏览器自动化体验。CLI 调用更节省 token，适合高吞吐量编码代理。
                              </p>
                          </div>
                      </div>
                  </div>

                  {/* Features Grid */}
                  <div className="editorial-grid">
                      {/* Feature 1 */}
                      <div className="relative hover-lift animate-reveal stagger-1">
                          <div className="editorial-number">01</div>
                          <div className="relative z-10">
                              <div className="w-16 h-16 border-2 border-ink flex items-center justify-center mb-8">
                                  <svg aria-hidden="true" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                  </svg>
                              </div>
                              <h3 className="font-serif text-3xl font-bold mb-6">节省 Token</h3>
                              <p className="font-sans text-lg leading-relaxed text-gray-600">
                                  不会强制将页面数据注入 LLM。避免将大型工具模式和冗长的无障碍树加载到模型上下文中，允许代理通过简洁、专用的命令执行操作。
                              </p>
                          </div>
                      </div>

                      {/* Feature 2 */}
                      <div className="relative hover-lift animate-reveal stagger-2">
                          <div className="editorial-number">02</div>
                          <div className="relative z-10">
                              <div className="w-16 h-16 border-2 border-ink flex items-center justify-center mb-8">
                                  <svg aria-hidden="true" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                  </svg>
                              </div>
                              <h3 className="font-serif text-3xl font-bold mb-6">CLI 优先</h3>
                              <p className="font-sans text-lg leading-relaxed text-gray-600">
                                  现代编码代理越来越倾向于将 CLI 工作流作为 SKILL 暴露，而非 MCP。CLI 调用更节省 token，适合需要在有限上下文窗口内平衡浏览器自动化的高吞吐量编码代理。
                              </p>
                          </div>
                      </div>

                      {/* Feature 3 */}
                      <div className="relative hover-lift animate-reveal stagger-3">
                          <div className="editorial-number">03</div>
                          <div className="relative z-10">
                              <div className="w-16 h-16 border-2 border-ink flex items-center justify-center mb-8">
                                  <svg aria-hidden="true" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                                  </svg>
                              </div>
                              <h3 className="font-serif text-3xl font-bold mb-6">丰富命令</h3>
                              <p className="font-sans text-lg leading-relaxed text-gray-600">
                                  提供完整的浏览器自动化命令集：导航、交互、快照、存储、网络、开发者工具等，满足所有自动化需求。
                              </p>
                          </div>
                      </div>

                      {/* Feature 4 */}
                      <div className="relative hover-lift animate-reveal stagger-4">
                          <div className="editorial-number">04</div>
                          <div className="relative z-10">
                              <div className="w-16 h-16 border-2 border-ink flex items-center justify-center mb-8">
                                  <svg aria-hidden="true" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                                  </svg>
                              </div>
                              <h3 className="font-serif text-3xl font-bold mb-6">会话管理</h3>
                              <p className="font-sans text-lg leading-relaxed text-gray-600">
                                  支持多个浏览器会话，持久化配置文件，cookie 和存储状态在会话内保持不变，支持命名会话管理。
                              </p>
                          </div>
                      </div>

                      {/* Feature 5 */}
                      <div className="relative hover-lift animate-reveal stagger-5">
                          <div className="editorial-number">05</div>
                          <div className="relative z-10">
                              <div className="w-16 h-16 border-2 border-ink flex items-center justify-center mb-8">
                                  <svg aria-hidden="true" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                  </svg>
                              </div>
                              <h3 className="font-serif text-3xl font-bold mb-6">可视化仪表板</h3>
                              <p className="font-sans text-lg leading-relaxed text-gray-600">
                                  使用 <code className="font-mono text-sm bg-cream px-2 py-1">playwright-cli show</code> 打开可视化仪表板，实时查看和控制所有正在运行的浏览器会话。
                              </p>
                          </div>
                      </div>

                      {/* Feature 6 */}
                      <div className="relative hover-lift animate-reveal">
                          <div className="editorial-number">06</div>
                          <div className="relative z-10">
                              <div className="w-16 h-16 border-2 border-ink flex items-center justify-center mb-8">
                                  <svg aria-hidden="true" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  </svg>
                              </div>
                              <h3 className="font-serif text-3xl font-bold mb-6">灵活配置</h3>
                              <p className="font-sans text-lg leading-relaxed text-gray-600">
                                  支持 JSON 配置文件和环境变量配置，可自定义浏览器类型、启动选项、上下文选项、超时设置等。
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Installation Section */}
          <section id="installation" className="py-32 px-8 bg-ink text-paper">
              <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                      <div className="lg:col-span-5 animate-reveal">
                          <span className="font-sans text-sm font-semibold tracking-widest uppercase text-accent mb-6 block">02</span>
                          <h2 className="font-serif text-5xl md:text-6xl font-bold leading-[0.9] tracking-tight mb-12">
                              快速<br />开始
                          </h2>

                          <div className="space-y-8">
                              <div className="flex items-start">
                                  <span className="font-serif text-4xl font-bold text-accent mr-6 leading-none">1</span>
                                  <div>
                                      <h3 className="font-serif text-xl font-bold mb-2">全局安装</h3>
                                      <p className="font-sans text-gray-400">使用 npm 全局安装 Playwright CLI</p>
                                  </div>
                              </div>

                              <div className="flex items-start">
                                  <span className="font-serif text-4xl font-bold text-accent mr-6 leading-none">2</span>
                                  <div>
                                      <h3 className="font-serif text-xl font-bold mb-2">安装 Skills</h3>
                                      <p className="font-sans text-gray-400">为 Claude Code、GitHub Copilot 等安装本地 skills</p>
                                  </div>
                              </div>

                              <div className="flex items-start">
                                  <span className="font-serif text-4xl font-bold text-accent mr-6 leading-none">3</span>
                                  <div>
                                      <h3 className="font-serif text-xl font-bold mb-2">开始使用</h3>
                                      <p className="font-sans text-gray-400">让代理自动运行或手动执行命令</p>
                                  </div>
                              </div>
                          </div>

                          <div className="mt-12 pt-8 border-t border-paper/10">
                              <h3 className="font-sans text-sm font-semibold tracking-widest uppercase mb-4">系统要求</h3>
                              <ul className="space-y-3 font-sans text-gray-400">
                                  <li className="flex items-center">
                                      <svg aria-hidden="true" className="w-4 h-4 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                      Node.js 20 或更新版本
                                  </li>
                                  <li className="flex items-center">
                                      <svg aria-hidden="true" className="w-4 h-4 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                      Claude Code、GitHub Copilot 或任何其他编码代理
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className="lg:col-span-7 animate-reveal stagger-2">
                          <div className="code-editorial bg-paper/5 border-l-0">
                              <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
                              <div className="font-sans text-xs text-gray-500 mb-8 tracking-widest uppercase">Installation Guide</div>

                              <div className="space-y-8">
                                  <div>
                                      <div className="text-gray-500 mb-2"># 全局安装</div>
                                      <div className="text-paper">npm install -g @playwright/cli@latest</div>
                                  </div>

                                  <div>
                                      <div className="text-gray-500 mb-2"># 查看帮助</div>
                                      <div className="text-paper">playwright-cli --help</div>
                                  </div>

                                  <div>
                                      <div className="text-gray-500 mb-2"># 安装 skills（用于 Claude Code、GitHub Copilot 等）</div>
                                      <div className="text-paper">playwright-cli install --skills</div>
                                  </div>

                                  <div className="pt-6 border-t border-paper/10">
                                      <div className="text-gray-500 mb-2"># 本地安装（如果全局命令不可用，需要 Playwright 1.59+）</div>
                                      <div className="text-paper">npx --no-install playwright --version</div>
                                  </div>

                                  <div>
                                      <div className="text-gray-500 mb-2"># 使用本地版本</div>
                                      <div className="text-paper">npx playwright cli open https://example.com</div>
                                  </div>
                              </div>
                          </div>

                          <div className="mt-8 editorial-aside-accent text-paper">
                              <p className="font-sans text-lg leading-relaxed text-gray-400">
                                  如果全局 <code className="font-mono text-accent">playwright-cli</code> 命令不可用，请尝试通过 <code className="font-mono text-accent">npx playwright cli</code> 使用本地版本（需要 Playwright 1.59 或更新版本）。
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Commands Section */}
          <section id="commands" className="py-32 px-8">
              <div className="max-w-7xl mx-auto">
                  {/* Section Header */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                      <div className="lg:col-span-4 animate-reveal">
                          <span className="font-sans text-sm font-semibold tracking-widest uppercase text-accent mb-6 block">03</span>
                          <h2 className="font-serif text-5xl md:text-6xl font-bold leading-[0.9] tracking-tight">
                              命令<br />参考
                          </h2>
                      </div>
                      <div className="lg:col-span-8 flex items-end animate-reveal stagger-2">
                          <div>
                              <div className="editorial-rule mb-8"></div>
                              <p className="font-sans text-xl md:text-2xl leading-relaxed text-gray-600 max-w-2xl">
                                  提供全面的浏览器自动化命令，覆盖所有使用场景。从核心操作到高级功能，一应俱全。
                              </p>
                          </div>
                      </div>
                  </div>

                  {/* Commands Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink">
                      {/* Core Commands */}
                      <div className="bg-paper p-8 animate-reveal stagger-1">
                          <h3 className="font-serif text-2xl font-bold mb-8 pb-4 border-b-2 border-ink">核心命令</h3>
                          <div className="space-y-4">
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli open [url]</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">打开浏览器，可选择导航到 url</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli goto &lt;url&gt;</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">导航到指定 url</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli click &lt;ref&gt;</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">在网页上执行点击</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli type &lt;text&gt;</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">在可编辑元素中输入文本</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli snapshot</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">捕获页面快照以获取元素引用</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli find &lt;text&gt;</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">在快照中搜索文本，返回匹配的节点</p>
                              </div>
                          </div>
                      </div>

                      {/* Navigation Commands */}
                      <div className="bg-paper p-8 animate-reveal stagger-2">
                          <h3 className="font-serif text-2xl font-bold mb-8 pb-4 border-b-2 border-accent">导航命令</h3>
                          <div className="space-y-4">
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli go-back</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">返回上一页</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli go-forward</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">前进到下一页</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli reload</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">刷新当前页面</p>
                              </div>
                          </div>

                          <h3 className="font-serif text-2xl font-bold mt-12 mb-8 pb-4 border-b-2 border-accent">键盘命令</h3>
                          <div className="space-y-4">
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli press &lt;key&gt;</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">按下键盘按键</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli keydown &lt;key&gt;</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">按下键盘按键（不释放）</p>
                              </div>
                          </div>
                      </div>

                      {/* Storage Commands */}
                      <div className="bg-paper p-8 animate-reveal stagger-3">
                          <h3 className="font-serif text-2xl font-bold mb-8 pb-4 border-b-2 border-ink">存储命令</h3>
                          <div className="space-y-4">
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli state-save</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">保存存储状态</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli cookie-list</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">列出 cookies</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli localstorage-list</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">列出 localStorage 条目</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli sessionstorage-list</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">列出 sessionStorage 条目</p>
                              </div>
                          </div>

                          <h3 className="font-serif text-2xl font-bold mt-12 mb-8 pb-4 border-b-2 border-ink">开发者工具</h3>
                          <div className="space-y-4">
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli console</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">列出控制台消息</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli requests</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">列出所有网络请求</p>
                              </div>
                              <div className="group">
                                  <code className="font-mono text-sm text-accent">playwright-cli show</code>
                                  <p className="font-sans text-sm text-gray-500 mt-1">打开可视化仪表板</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="mt-16 text-center animate-reveal">
                      <Link href="/docs/capabilities" className="font-sans text-sm font-semibold tracking-widest uppercase border-2 border-ink px-10 py-5 hover:bg-ink hover:text-paper transition-colors duration-300 inline-flex items-center">
                          查看完整命令文档
                          <svg aria-hidden="true" className="w-4 h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                          </svg>
                      </Link>
                  </div>
              </div>
          </section>

          {/* Configuration Section */}
          <section id="configuration" className="py-32 px-8 bg-cream">
              <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                      <div className="lg:col-span-5 animate-reveal">
                          <span className="font-sans text-sm font-semibold tracking-widest uppercase text-accent mb-6 block">04</span>
                          <h2 className="font-serif text-5xl md:text-6xl font-bold leading-[0.9] tracking-tight mb-12">
                              灵活<br />配置
                          </h2>

                          <p className="font-sans text-xl leading-relaxed text-gray-600 mb-12">
                              支持 JSON 配置文件和环境变量配置，满足各种定制需求。
                          </p>

                          <div className="space-y-8">
                              <div className="editorial-aside">
                                  <h3 className="font-serif text-xl font-bold mb-3">配置文件</h3>
                                  <p className="font-sans text-gray-600">
                                      使用 <code className="font-mono text-sm bg-paper px-2 py-1">--config</code> 选项指定配置文件，或使用默认配置 <code className="font-mono text-sm bg-paper px-2 py-1">.playwright/cli.config.json</code>
                                  </p>
                              </div>

                              <div className="editorial-aside-accent">
                                  <h3 className="font-serif text-xl font-bold mb-3">环境变量</h3>
                                  <p className="font-sans text-gray-600">
                                      通过环境变量配置浏览器类型、无头模式、视口大小等，无需修改配置文件。
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="lg:col-span-7 animate-reveal stagger-2">
                          <div className="bg-paper p-8 editorial-shadow-lg">
                              <div className="flex items-center justify-between mb-8">
                                  <h3 className="font-serif text-2xl font-bold">配置示例</h3>
                                  <span className="font-mono text-sm text-gray-500">config.json</span>
                              </div>

                              <div className="code-editorial bg-ink">
                                  <pre className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: configJsonHtml }} />
                              </div>

                              <div className="mt-8 pt-8 border-t border-ink/10">
                                  <h4 className="font-sans text-sm font-semibold tracking-widest uppercase mb-4">常用环境变量</h4>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div>
                                          <code className="font-mono text-sm text-accent">PLAYWRIGHT_MCP_BROWSER</code>
                                          <p className="font-sans text-sm text-gray-500 mt-1">浏览器类型</p>
                                      </div>
                                      <div>
                                          <code className="font-mono text-sm text-accent">PLAYWRIGHT_MCP_HEADLESS</code>
                                          <p className="font-sans text-sm text-gray-500 mt-1">无头模式</p>
                                      </div>
                                      <div>
                                          <code className="font-mono text-sm text-accent">PLAYWRIGHT_MCP_VIEWPORT_SIZE</code>
                                          <p className="font-sans text-sm text-gray-500 mt-1">视口大小</p>
                                      </div>
                                      <div>
                                          <code className="font-mono text-sm text-accent">PLAYWRIGHT_MCP_TIMEOUT_ACTION</code>
                                          <p className="font-sans text-sm text-gray-500 mt-1">操作超时</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Demo Section */}
          <section id="demo" className="py-32 px-8">
              <div className="max-w-7xl mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-24 animate-reveal">
                      <span className="font-sans text-sm font-semibold tracking-widest uppercase text-accent mb-6 block">05</span>
                      <h2 className="font-serif text-5xl md:text-6xl font-bold leading-[0.9] tracking-tight mb-8">
                          实际演示
                      </h2>
                      <div className="editorial-rule-accent max-w-xs mx-auto mb-8"></div>
                      <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
                          看看 Playwright CLI 如何在实际场景中工作
                      </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink">
                      {/* Demo 1 */}
                      <div className="bg-paper p-12 animate-reveal stagger-1">
                          <span className="font-sans text-sm font-semibold tracking-widest uppercase text-accent mb-6 block">示例 01</span>
                          <h3 className="font-serif text-3xl font-bold mb-8">测试 Todo 应用</h3>
                          <p className="font-sans text-lg text-gray-600 mb-8 leading-relaxed">
                              使用 Playwright CLI 测试待办事项应用的添加功能
                          </p>

                          <div className="code-editorial bg-ink">
                              <div className="font-sans text-xs text-gray-500 mb-6 tracking-widest uppercase">Demo Commands</div>
                              <div className="space-y-3 text-sm">
                                  <div><span className="text-gray-500"># 打开待办事项应用</span></div>
                                  <div>playwright-cli open https://demo.playwright.dev/todomvc/</div>
                                  <div className="mt-4"><span className="text-gray-500"># 添加待办事项</span></div>
                                  <div>playwright-cli type "Buy groceries"</div>
                                  <div>playwright-cli press Enter</div>
                                  <div>playwright-cli type "Water flowers"</div>
                                  <div>playwright-cli press Enter</div>
                                  <div className="mt-4"><span className="text-gray-500"># 勾选待办事项</span></div>
                                  <div>playwright-cli check e21</div>
                                  <div>playwright-cli check e35</div>
                                  <div className="mt-4"><span className="text-gray-500"># 截图保存</span></div>
                                  <div>playwright-cli screenshot</div>
                              </div>
                          </div>
                      </div>

                      {/* Demo 2 */}
                      <div className="bg-paper p-12 animate-reveal stagger-2">
                          <span className="font-sans text-sm font-semibold tracking-widest uppercase text-accent mb-6 block">示例 02</span>
                          <h3 className="font-serif text-3xl font-bold mb-8">会话管理</h3>
                          <p className="font-sans text-lg text-gray-600 mb-8 leading-relaxed">
                              管理多个浏览器会话，实现持久化配置
                          </p>

                          <div className="code-editorial bg-ink">
                              <div className="font-sans text-xs text-gray-500 mb-6 tracking-widest uppercase">Session Management</div>
                              <div className="space-y-3 text-sm">
                                  <div><span className="text-gray-500"># 打开默认会话</span></div>
                                  <div>playwright-cli open https://playwright.dev</div>
                                  <div className="mt-4"><span className="text-gray-500"># 打开命名会话（持久化）</span></div>
                                  <div>playwright-cli -s=example open https://example.com --persistent</div>
                                  <div className="mt-4"><span className="text-gray-500"># 列出所有会话</span></div>
                                  <div>playwright-cli list</div>
                                  <div className="mt-4"><span className="text-gray-500"># 使用环境变量指定会话</span></div>
                                  <div>PLAYWRIGHT_CLI_SESSION=todo-app claude .</div>
                              </div>
                          </div>

                          <div className="mt-8 editorial-aside">
                              <h4 className="font-serif text-lg font-bold mb-3">会话管理命令</h4>
                              <ul className="font-sans text-gray-600 space-y-2">
                                  <li><code className="font-mono text-sm text-accent">playwright-cli list</code> - 列出所有会话</li>
                                  <li><code className="font-mono text-sm text-accent">playwright-cli close-all</code> - 关闭所有浏览器</li>
                                  <li><code className="font-mono text-sm text-accent">playwright-cli kill-all</code> - 强制终止所有进程</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  {/* Dashboard Preview */}
                  <div className="mt-px animate-reveal">
                      <div className="bg-ink text-paper p-12">
                          <div className="text-center mb-12">
                              <h3 className="font-serif text-3xl font-bold mb-4">可视化仪表板</h3>
                              <p className="font-sans text-gray-400 max-w-2xl mx-auto">
                                  使用 <code className="font-mono text-accent">playwright-cli show</code> 打开可视化仪表板，实时查看和控制所有正在运行的浏览器会话
                              </p>
                          </div>

                          {/* Real Dashboard Image */}
                          <div className="relative mb-12 border border-paper/10 overflow-hidden">
                              <picture>
                                  <source srcSet="/assets/dashboard.avif" type="image/avif" />
                                  <source srcSet="/assets/dashboard.webp" type="image/webp" />
                                  <img
                                      src="/assets/dashboard.webp"
                                      alt="Playwright CLI 可视化仪表板 - 显示多个浏览器会话的实时预览和控制界面"
                                      className="w-full h-auto"
                                      width="1107"
                                      height="729"
                                      loading="lazy"
                                      decoding="async"
                                   />
                              </picture>
                              <div className="absolute inset-0 bg-linear-to-t from-ink/20 to-transparent pointer-events-none"></div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              <div className="border-l-2 border-accent pl-6">
                                  <h4 className="font-serif text-lg font-bold mb-3">会话网格</h4>
                                  <p className="font-sans text-gray-400 text-sm">显示按工作区分组的所有活跃会话，每个会话都有实时截屏预览、会话名称、当前 URL 和页面标题</p>
                              </div>
                              <div className="border-l-2 border-accent pl-6">
                                  <h4 className="font-serif text-lg font-bold mb-3">会话详情</h4>
                                  <p className="font-sans text-gray-400 text-sm">显示所选会话的实时视图，包含标签栏、导航控制（后退、前进、刷新、地址栏）和完整远程控制</p>
                              </div>
                              <div className="border-l-2 border-accent pl-6">
                                  <h4 className="font-serif text-lg font-bold mb-3">远程控制</h4>
                                  <p className="font-sans text-gray-400 text-sm">点击视口可接管鼠标和键盘输入；按 Escape 释放。可在网格中关闭正在运行的会话或删除不活跃会话的数据</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 px-8 bg-ink text-paper">
              <div className="max-w-4xl mx-auto text-center">
                  <div className="animate-reveal">
                      <span className="font-sans text-sm font-semibold tracking-widest uppercase text-accent mb-8 block">准备好开始了吗？</span>

                      <h2 className="font-serif text-5xl md:text-6xl font-bold leading-[0.9] tracking-tight mb-12">
                          立即体验
                      </h2>

                      <div className="editorial-rule-accent max-w-xs mx-auto mb-12"></div>

                      <p className="font-sans text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                          立即安装 Playwright CLI，体验最高效的浏览器自动化工具
                      </p>

                      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                          <a href="https://github.com/microsoft/playwright-cli" className="font-sans text-sm font-semibold tracking-widest uppercase bg-paper text-ink px-10 py-5 hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                              查看 GitHub
                              <svg aria-hidden="true" className="w-4 h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                              </svg>
                          </a>
                          <a href="#installation" className="font-sans text-sm font-semibold tracking-widest uppercase border-2 border-paper px-10 py-5 hover:bg-paper hover:text-ink transition-colors duration-300 inline-flex items-center">
                              安装指南
                          </a>
                      </div>

                      <div className="code-editorial bg-paper/5 border-l-0 max-w-xl mx-auto">
                          <div className="text-sm">
                              <span className="text-accent">$</span> npm install -g @playwright/cli@latest<br />
                              <span className="text-accent">$</span> playwright-cli --help
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          </main>

          {/* Footer */}
          <footer className="py-16 px-8 border-t border-ink/10">
              <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                      <div className="md:col-span-5">
                          <span className="font-serif text-2xl font-bold">Playwright CLI</span>
                          <p className="font-sans text-gray-500 mt-4 max-w-md leading-relaxed">
                              具有 SKILLS 功能的 Playwright CLI。现代编码代理的最佳选择，提供最高效的浏览器自动化体验。
                          </p>
                          <div className="flex space-x-6 mt-8">
                              <a href="https://github.com/microsoft/playwright-cli" aria-label="GitHub 上游仓库" className="text-gray-400 hover:text-ink transition-colors duration-300">
                                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                                  </svg>
                              </a>
                              <a href="https://playwright.dev" aria-label="Playwright 官网" className="text-gray-400 hover:text-ink transition-colors duration-300">
                                  <svg aria-hidden="true" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                  </svg>
                              </a>
                          </div>
                      </div>

                      <div className="md:col-span-3">
                          <h2 className="font-sans text-sm font-semibold tracking-widest uppercase mb-6">文档</h2>
                          <ul className="space-y-4">
                              <li><Link href="/docs/installation" className="font-sans text-gray-500 hover:text-ink transition-colors duration-300">安装指南</Link></li>
                              <li><Link href="/docs/capabilities" className="font-sans text-gray-500 hover:text-ink transition-colors duration-300">命令参考</Link></li>
                              <li><Link href="/docs/configuration" className="font-sans text-gray-500 hover:text-ink transition-colors duration-300">配置选项</Link></li>
                              <li><a href="#demo" className="font-sans text-gray-500 hover:text-ink transition-colors duration-300">演示示例</a></li>
                          </ul>
                      </div>

                      <div className="md:col-span-4">
                          <h2 className="font-sans text-sm font-semibold tracking-widest uppercase mb-6">资源</h2>
                          <ul className="space-y-4">
                              <li><a href="https://github.com/microsoft/playwright-cli" className="font-sans text-gray-500 hover:text-ink transition-colors duration-300">GitHub</a></li>
                              <li><a href="https://playwright.dev" className="font-sans text-gray-500 hover:text-ink transition-colors duration-300">Playwright 文档</a></li>
                              <li><a href="https://github.com/microsoft/playwright-mcp" className="font-sans text-gray-500 hover:text-ink transition-colors duration-300">Playwright MCP</a></li>
                              <li><a href="https://github.com/microsoft/playwright-cli/issues" className="font-sans text-gray-500 hover:text-ink transition-colors duration-300">问题反馈</a></li>
                          </ul>
                      </div>
                  </div>

                  <div className="mt-16 pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center">
                      <p className="font-sans text-sm text-gray-500">
                          © 2026 Playwright CLI. 基于 MIT 许可证开源。
                      </p>
                      <a href="#top" className="font-sans text-sm text-gray-500 hover:text-ink transition-colors duration-300 mt-4 md:mt-0">
                          返回顶部 ↑
                      </a>
                  </div>
              </div>
          </footer>

          {/* Back to Top Button */}
          <a href="#top" id="back-to-top" aria-label="返回顶部" className="fixed bottom-8 right-8 w-12 h-12 bg-ink text-paper flex items-center justify-center transition-opacity duration-300 hover:bg-gray-800 z-50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
          </a>
      <LandingEffects />
    </div>
  );
}
