const works = [
  {
    id: "modeling-01",
    category: "modeling",
    title: "耳机结构建模",
    tag: "建模",
    image: "./assets/portfolio/modeling-01.png",
    summary: "线框、白模与产品结构展示，适合呈现3D建模的准确度和结构理解。",
    keywords: "建模 3D Rhino C4D 产品模型 白模 线框 耳机",
    tools: ["Rhino", "C4D", "结构"],
    points: ["产品比例与结构准确", "适合后续渲染和详情页场景", "可替换为真实建模线框图"]
  },
  {
    id: "modeling-02",
    category: "modeling",
    title: "小家电白模",
    tag: "建模",
    image: "./assets/portfolio/modeling-02.png",
    summary: "小家电外观白模展示，突出硬表面造型、转角和细节结构。",
    keywords: "建模 小家电 白模 产品结构 C4D Rhino",
    tools: ["白模", "硬表面", "比例"],
    points: ["适合展示造型能力", "可补充结构拆解图", "后续替换为真实产品模型"]
  },
  {
    id: "modeling-03",
    category: "modeling",
    title: "户外配件建模",
    tag: "建模",
    image: "./assets/portfolio/modeling-03.png",
    summary: "户外配件模块建模展示，适合放孔位、模块拆解和结构细节。",
    keywords: "建模 户外 配件 模块 孔位 结构",
    tools: ["模块", "细节", "结构"],
    points: ["硬表面造型清晰", "模块细节适合详情页扩展", "可替换为真实配件建模"]
  },
  {
    id: "rendering-01",
    category: "rendering",
    title: "耳机渲染表现",
    tag: "渲染",
    image: "./assets/portfolio/rendering-01.png",
    summary: "耳机产品渲染，突出材质、灯光、构图和科技感产品质感。",
    keywords: "渲染 KeyShot OC 耳机 材质 灯光 产品质感",
    tools: ["KeyShot", "OC", "灯光"],
    points: ["材质和灯光表现稳定", "突出产品卖点与质感", "适合主图、场景图和详情页使用"]
  },
  {
    id: "rendering-02",
    category: "rendering",
    title: "美妆产品渲染",
    tag: "渲染",
    image: "./assets/portfolio/rendering-02.png",
    summary: "美妆瓶器渲染示例，强调玻璃、高光、金属和柔和商业氛围。",
    keywords: "渲染 美妆 瓶器 材质 高光 商业",
    tools: ["材质", "高光", "场景"],
    points: ["适合美妆类目作品", "展示材质控制", "可替换为真实产品渲染"]
  },
  {
    id: "rendering-03",
    category: "rendering",
    title: "数码配件场景",
    tag: "渲染",
    image: "./assets/portfolio/rendering-03.png",
    summary: "数码配件场景渲染，适合展示科技类产品场景图和氛围表达。",
    keywords: "渲染 数码 配件 场景 科技 氛围",
    tools: ["场景", "科技感", "产品图"],
    points: ["场景氛围统一", "产品层次清楚", "适合活动图和主图延展"]
  },
  {
    id: "detail-01",
    category: "detail",
    title: "详情页长图",
    tag: "详情页",
    image: "./assets/portfolio/detail-01.png",
    summary: "卖点拆解、功能说明和场景结构，展示详情页长图的整体节奏。",
    keywords: "详情页 卖点 长图 参数 页面 描述",
    tools: ["详情", "卖点", "页面"],
    points: ["首屏卖点清晰", "功能、场景、参数层级完整", "适合替换真实长图切片"]
  },
  {
    id: "detail-02",
    category: "detail",
    title: "功能卖点页",
    tag: "详情页",
    image: "./assets/portfolio/detail-02.png",
    summary: "功能卖点模块化展示，用于表达产品核心功能和购买理由。",
    keywords: "详情页 功能 卖点 信息层级 模块",
    tools: ["模块", "信息层级", "功能"],
    points: ["模块信息易读", "适合电商详情中段", "可替换为真实卖点模块"]
  },
  {
    id: "detail-03",
    category: "detail",
    title: "移动端详情",
    tag: "详情页",
    image: "./assets/portfolio/detail-03.png",
    summary: "适配手机端浏览的详情页结构，强调移动端阅读节奏。",
    keywords: "详情页 移动端 手机 页面 电商",
    tools: ["移动端", "长图", "排版"],
    points: ["移动端节奏清楚", "卖点与图像结合", "适合后期放真实手机端长图"]
  },
  {
    id: "amazon-01",
    category: "amazon",
    title: "Amazon主图",
    tag: "亚马逊",
    image: "./assets/portfolio/amazon-01.png",
    summary: "亚马逊主图和功能信息组合，强调规范、清晰和购买决策效率。",
    keywords: "亚马逊 Amazon 主图 功能图 跨境",
    tools: ["Amazon", "主图", "功能"],
    points: ["平台规范清晰", "信息表达直接", "适合放白底图和功能图"]
  },
  {
    id: "amazon-02",
    category: "amazon",
    title: "A+页面模块",
    tag: "亚马逊",
    image: "./assets/portfolio/amazon-02.png",
    summary: "跨境A+页面模块示例，适合展示产品优势和场景信息。",
    keywords: "Amazon A+ 页面 跨境 模块",
    tools: ["A+", "跨境", "模块"],
    points: ["跨境表达更直接", "卖点图文结合", "后续替换真实A+页面"]
  },
  {
    id: "amazon-03",
    category: "amazon",
    title: "参数对比图",
    tag: "亚马逊",
    image: "./assets/portfolio/amazon-03.png",
    summary: "尺寸、功能、场景说明组合，适合亚马逊购买决策页面。",
    keywords: "亚马逊 参数 对比 尺寸 功能",
    tools: ["参数", "对比", "尺寸"],
    points: ["信息层级清晰", "适合跨境详情图", "可替换真实参数对比"]
  },
  {
    id: "campaign-01",
    category: "campaign",
    title: "618活动视觉",
    tag: "活动图",
    image: "./assets/portfolio/campaign-01.png",
    summary: "618活动主视觉示例，展示大促氛围、产品主体和促销信息层级。",
    keywords: "活动图 618 大促 banner 促销",
    tools: ["618", "主KV", "Banner"],
    points: ["主题氛围明确", "促销信息层级清楚", "适合首页和广告位延展"]
  },
  {
    id: "campaign-02",
    category: "campaign",
    title: "双11大促",
    tag: "活动图",
    image: "./assets/portfolio/campaign-02.png",
    summary: "双11大促视觉示例，适合放店铺首页、活动页和推广图。",
    keywords: "双11 活动 大促 首页 专题",
    tools: ["双11", "首页", "专题"],
    points: ["大促识别强", "视觉冲击适中", "后续替换真实双11页面"]
  },
  {
    id: "campaign-03",
    category: "campaign",
    title: "品牌日KV",
    tag: "活动图",
    image: "./assets/portfolio/campaign-03.png",
    summary: "品牌日活动主视觉，偏科技感和品牌调性表达。",
    keywords: "品牌日 活动 KV 科技 banner",
    tools: ["品牌日", "KV", "科技"],
    points: ["品牌氛围统一", "适合店铺视觉头图", "可替换真实品牌日作品"]
  },
  {
    id: "main-image-01",
    category: "main-image",
    title: "耳机主图",
    tag: "主图",
    image: "./assets/portfolio/main-image-01.png",
    summary: "电商主图示例，强调产品主体、卖点标签和平台留白。",
    keywords: "主图 耳机 电商 主K 产品精修",
    tools: ["主图", "精修", "卖点"],
    points: ["产品主体突出", "卖点表达清晰", "适合替换真实产品主图"]
  },
  {
    id: "main-image-02",
    category: "main-image",
    title: "小家电主图",
    tag: "主图",
    image: "./assets/portfolio/main-image-02.png",
    summary: "小家电主图结构示例，突出产品干净度和购买信息。",
    keywords: "主图 小家电 电商 产品 合成",
    tools: ["小家电", "主图", "合成"],
    points: ["产品干净清楚", "信息不拥挤", "可替换真实小家电主图"]
  },
  {
    id: "main-image-03",
    category: "main-image",
    title: "组合主图",
    tag: "主图",
    image: "./assets/portfolio/main-image-03.png",
    summary: "套装组合主图示例，适合展示产品组合、功能和场景卖点。",
    keywords: "主图 组合 套装 卖点 电商",
    tools: ["组合", "套装", "平台"],
    points: ["组合关系清楚", "卖点表达集中", "后续替换真实套装图"]
  },
  {
    id: "aigc-01",
    category: "aigc",
    title: "AI场景探索",
    tag: "AIGC",
    image: "./assets/portfolio/aigc-01.png",
    summary: "AIGC辅助场景探索，用于快速建立产品氛围和视觉方向。",
    keywords: "AIGC AI 场景 背景 创意",
    tools: ["AIGC", "场景", "创意"],
    points: ["快速生成视觉方向", "用于背景、场景和创意探索", "可与最终商业图并排展示"]
  },
  {
    id: "aigc-02",
    category: "aigc",
    title: "概念背景生成",
    tag: "AIGC",
    image: "./assets/portfolio/aigc-02.png",
    summary: "AI概念背景和产品氛围示例，适合前期视觉提案。",
    keywords: "AIGC 背景 产品 氛围 提案",
    tools: ["背景", "概念", "提案"],
    points: ["适合前期方案探索", "辅助主图和活动图构思", "后续替换真实AI作品"]
  },
  {
    id: "aigc-03",
    category: "aigc",
    title: "创意合成参考",
    tag: "AIGC",
    image: "./assets/portfolio/aigc-03.png",
    summary: "AIGC创意合成参考，用于快速探索主图构图和氛围。",
    keywords: "AIGC 合成 主图 创意 参考",
    tools: ["合成", "主图", "参考"],
    points: ["构图方向明确", "适合转化为商业成稿", "可替换真实创意过程图"]
  }
];

const grid = document.querySelector("#portfolioGrid");
const search = document.querySelector("#portfolioSearch");
const tabs = document.querySelectorAll(".tabs button");
const dialog = document.querySelector("#workDialog");
const dialogBody = document.querySelector("#dialogBody");
const closeDialog = document.querySelector(".dialog-close");
const burstLayer = document.querySelector("#cursorBurstLayer");
let activeFilter = "all";

function renderWorks() {
  const query = search.value.trim().toLowerCase();

  grid.innerHTML = works
    .map((work) => {
      const text = `${work.title} ${work.tag} ${work.summary} ${work.keywords} ${work.tools.join(" ")}`.toLowerCase();
      const visible = (activeFilter === "all" || activeFilter === work.category) && (!query || text.includes(query));

      return `
        <article class="portfolio-card" ${visible ? "" : "hidden"} data-id="${work.id}" tabindex="0">
          <div class="thumb">
            <img src="${work.image}" alt="${work.title}" loading="lazy" />
            <span>${work.tag}</span>
          </div>
          <div class="card-body">
            <h3>${work.title}</h3>
            <p>${work.summary}</p>
            <div class="meta">${work.tools.map((tool) => `<span>${tool}</span>`).join("")}</div>
          </div>
        </article>
      `;
    })
    .join("");

  grid.querySelectorAll(".portfolio-card").forEach((card) => {
    card.addEventListener("click", () => openWork(card.dataset.id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openWork(card.dataset.id);
      }
    });
  });
}

function setFilter(filter) {
  activeFilter = filter;
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === filter));
  renderWorks();
}

function openWork(id) {
  const work = works.find((item) => item.id === id);
  if (!work) return;

  dialogBody.innerHTML = `
    <div class="dialog-media">
      <img src="${work.image}" alt="${work.title}" />
    </div>
    <div class="dialog-content">
      <small>${work.tag}</small>
      <h3>${work.title}</h3>
      <p>${work.summary}</p>
      <ul>${work.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    </div>
  `;
  dialog.showModal();
}

function createBurst(x, y) {
  if (!burstLayer) return;
  const colors = ["#5be2ff", "#ffffff", "#596cff", "#4df3b5"];
  const count = 12;
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.35;
    const distance = 28 + Math.random() * 34;
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    spark.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    spark.style.setProperty("--spark-color", colors[i % colors.length]);
    burstLayer.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove(), { once: true });
    window.setTimeout(() => spark.remove(), 900);
  }
}

tabs.forEach((tab) => tab.addEventListener("click", () => setFilter(tab.dataset.filter)));
search.addEventListener("input", renderWorks);
closeDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener("pointerdown", (event) => {
  const isPlainClick = event.button === 0 && event.pointerType !== "touch" && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
  if (isPlainClick) createBurst(event.clientX, event.clientY);
});

renderWorks();
