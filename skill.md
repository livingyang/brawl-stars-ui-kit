skill_meta:
  skill_id: game_fixed_canvas_vue3_storybook_gen
  version: 1.3
  purpose: 自动生成 Vue3 + TS + Storybook10 游戏UI组件工程代码
  target_scene: Web游戏UI、像素固定分辨率可视化界面、H5游戏组件库、大屏监控面板
  base_render_principle: 全局基准画布根容器 + 整体scale等比Letterbox信箱缩放，内部组件绝对像素定位，完全抛弃 flex/百分比/vw/vh 流式布局
  target_stack: Vue3 + <script setup> + TypeScript 5 + Storybook 10 (Vite构建器)
  design_base_resolution: 1920×1080（可自定义覆盖）
  output_content:
    1. 全局基准画布根容器组件 GameCanvas.vue
    2. 通用游戏UI基础面板 GameUiPanel.vue（强制绝对像素定位）
    3. 组合式缩放钩子 useGameCanvasScale.ts
    4. 全局基准分辨率TS配置与坐标类型定义
    5. .stories.ts 组件预览模板（兼容Storybook10 CSF3全新API）
    6. 游戏专用视口配置文件 viewports.ts（新增1080P/2K/4K/16:10/21:9多分辨率）
    7. 布局JSON自动转Vue组件模板工具逻辑
  storybook10_special_adapt:
    - 遵循 Storybook10 Vite 官方配置规范，参考中文官方Viewport文档 https://storybook.org.cn/docs/essentials/viewport
    - 自定义游戏桌面视口集合：1080P、2K、4K、16:10笔记本、21:9带鱼屏
    - viewports 完整自定义配置，支持全局/组件/单故事三级覆盖
    - 全局 decorators 自动注入 GameCanvas 基准画布，无需手动包裹
    - iframe 视口全屏 layout:fullscreen、禁用滚动，模拟游戏全屏渲染
  official_ref_docs:
    - https://storybook.org.cn/docs/essentials/viewport
    - https://storybook.js.org/docs/10/get-started/frameworks/vue3-vite
    - https://storybook.js.org/docs/10/writing-stories/decorators
  强制编译约束
    - 所有业务 UI 组件的 Story 自动注入 GameCanvas 全局装饰器；
    - 子组件样式禁止使用 % / vw / vh / em / flex:1 / grid 自动均分；
    - 所有面板尺寸、坐标仅支持传入数字像素（基于 1920×1080 基准画布）；
    - 画布外层容器强制 overflow: hidden，杜绝滚动条破坏游戏渲染逻辑；