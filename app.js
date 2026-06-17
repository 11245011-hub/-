// 萬家香早餐店 - 菜單與購物車系統

// 1. 菜單資料庫
const MENU_ITEMS = [
  // 經典吐司與漢堡
  {
    id: 'tb_1',
    name: '招牌肉蛋吐司',
    price: 55,
    description: '特選溫體豬里肌肉經獨門醬汁醃製，配上現煎荷包蛋與炭烤香味吐司。',
    category: 'toast_burger',
    tags: ['hot', 'recommend'],
    customType: 'toast',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><rect x="25" y="25" width="50" height="50" rx="10" fill="#f4b251"/><path d="M25 45 C25 45, 50 35, 75 45 L75 55 C75 55, 50 65, 25 55 Z" fill="#b06d28"/><circle cx="50" cy="50" r="12" fill="#ffd000"/><circle cx="53" cy="52" r="6" fill="#ffffff" opacity="0.3"/></svg>`
  },
  {
    id: 'tb_2',
    name: '花生醬培根牛肉堡',
    price: 85,
    description: '厚實手打牛肉排與焦脆培根，淋上帶顆粒的香濃濃郁花生醬，口感層次豐富。',
    category: 'toast_burger',
    tags: ['hot'],
    customType: 'burger',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><path d="M20 50 C20 30, 80 30, 80 50 Z" fill="#d79e5f"/><rect x="18" y="50" width="64" height="6" rx="3" fill="#8d5b27"/><rect x="15" y="56" width="70" height="8" rx="4" fill="#a03020"/><rect x="20" y="64" width="60" height="8" rx="4" fill="#d79e5f"/></svg>`
  },
  {
    id: 'tb_3',
    name: '雙層起司薯餅塔吐司',
    price: 70,
    description: '金黃酥脆薯餅以雙層起司包裹入蛋，夾進軟嫩吐司中，起司控絕對不能錯過。',
    category: 'toast_burger',
    tags: ['new'],
    customType: 'toast',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><rect x="25" y="25" width="50" height="50" rx="10" fill="#f4b251"/><rect x="28" y="35" width="44" height="20" rx="4" fill="#ffb300"/><rect x="30" y="40" width="40" height="8" rx="2" fill="#e0a000"/></svg>`
  },
  {
    id: 'tb_4',
    name: '鮮蔬吉士蛋吐司',
    price: 45,
    description: '新鮮生菜、番茄切片與濃郁起司，搭配香煎滑蛋，清爽又富含營養的晨光好選擇。',
    category: 'toast_burger',
    tags: [],
    customType: 'toast',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><rect x="25" y="25" width="50" height="50" rx="10" fill="#f4b251"/><path d="M22 40 C30 35, 45 45, 78 40" stroke="#4caf50" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="50" cy="50" r="10" fill="#ffeb3b"/></svg>`
  },

  // 招牌蛋餅
  {
    id: 'ec_1',
    name: '古早味粉漿蛋餅 (原味)',
    price: 35,
    description: '傳承古法手工調製粉漿，現點現煎，外皮微酥香脆，內裡軟Q濕潤，搭配蔥花蛋香氣四溢。',
    category: 'egg_crepe',
    tags: ['recommend'],
    customType: 'egg_crepe',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><path d="M20 50 C20 30, 80 30, 80 50 C80 70, 20 70, 20 50" fill="#f6d394" stroke="#d4ab55" stroke-width="4"/><path d="M25 45 C35 40, 65 40, 75 45" stroke="#ffffff" stroke-width="3" fill="none"/></svg>`
  },
  {
    id: 'ec_2',
    name: '爆漿起司肉鬆蛋餅',
    price: 55,
    description: '香脆蛋餅內夾入滿滿的優質肉鬆與雙色牽絲起司，鹹甜交織，欲罷不能。',
    category: 'egg_crepe',
    tags: ['hot'],
    customType: 'egg_crepe',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><path d="M20 50 C20 30, 80 30, 80 50 C80 70, 20 70, 20 50" fill="#f6d394" stroke="#d4ab55" stroke-width="4"/><path d="M30 45 L70 45" stroke="#ff9800" stroke-width="8" stroke-linecap="round"/></svg>`
  },
  {
    id: 'ec_3',
    name: '塔香皮蛋肉醬蛋餅',
    price: 65,
    description: '經典九層塔與特製皮蛋碎、肉醬在熱鐵板上翻炒，夾入蛋餅中，台式創意的絕妙美味。',
    category: 'egg_crepe',
    tags: ['new', 'recommend'],
    customType: 'egg_crepe',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><path d="M20 50 C20 30, 80 30, 80 50 C80 70, 20 70, 20 50" fill="#f6d394" stroke="#d4ab55" stroke-width="4"/><circle cx="50" cy="50" r="12" fill="#2c3e50"/><circle cx="45" cy="45" r="4" fill="#16a085"/></svg>`
  },

  // 晨光中式點心
  {
    id: 'cd_1',
    name: '金黃煎蘿蔔糕',
    price: 35,
    description: '外皮煎至焦香金黃，內部軟嫩多汁，吃得到蘿蔔絲與臘肉香氣，沾上蒜蓉醬最對味。',
    category: 'chinese_dimsum',
    tags: ['hot'],
    customType: 'chinese_dimsum',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><rect x="25" y="25" width="50" height="40" rx="4" fill="#faf6f0" stroke="#dcd6d0" stroke-width="4"/><line x1="25" y1="45" x2="75" y2="45" stroke="#e67e22" stroke-width="3"/></svg>`
  },
  {
    id: 'cd_2',
    name: '酥炸地瓜QQ球 (8顆)',
    price: 30,
    description: '選用在地黃金地瓜，油炸至外殼酥脆，內心Q彈有嚼勁，早餐的最佳甜點點綴。',
    category: 'chinese_dimsum',
    tags: ['new'],
    customType: 'normal',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><circle cx="40" cy="40" r="14" fill="#f39c12"/><circle cx="62" cy="55" r="12" fill="#e67e22"/><circle cx="40" cy="65" r="10" fill="#f1c40f"/></svg>`
  },
  {
    id: 'cd_3',
    name: '現烤香酥燒餅油條',
    price: 45,
    description: '老麵發酵的香酥燒餅，夾上每日現炸的酥脆油條，傳統中式早餐的完美寫照。',
    category: 'chinese_dimsum',
    tags: [],
    customType: 'chinese_dimsum',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><rect x="30" y="20" width="40" height="60" rx="6" fill="#f5d6a8" transform="rotate(-15 50 50)"/><rect x="42" y="10" width="16" height="80" rx="3" fill="#e29a3b" transform="rotate(15 50 50)"/></svg>`
  },

  // 鐵板麵與湯品
  {
    id: 'in_1',
    name: '黑胡椒鐵板麵 (附蛋)',
    price: 60,
    description: '熱氣騰騰的鐵板麵澆上香辣黑胡椒醬，附上一顆完美半熟蛋，元氣滿滿的早餐主食。',
    category: 'iron_noodles',
    tags: ['hot'],
    customType: 'iron_noodles',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><circle cx="50" cy="50" r="38" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="4"/><path d="M30 45 Q40 30, 50 45 T70 45" fill="none" stroke="#e67e22" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="50" r="10" fill="#f1c40f"/></svg>`
  },
  {
    id: 'in_2',
    name: '川味宮保雞丁麵 (附蛋)',
    price: 70,
    description: '微辣宮保雞丁醬融合鮮嫩雞肉丁，與鐵板麵一起翻炒，香辣開胃，適合愛吃辣的你。',
    category: 'iron_noodles',
    tags: ['recommend'],
    customType: 'iron_noodles',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><circle cx="50" cy="50" r="38" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="4"/><path d="M30 45 Q40 30, 50 45 T70 45" fill="none" stroke="#d35400" stroke-width="5" stroke-linecap="round"/><circle cx="35" cy="40" r="6" fill="#c0392b"/></svg>`
  },

  // 經典飲品
  {
    id: 'dr_1',
    name: '招牌非基改豆漿',
    price: 25,
    description: '選用非基因改造黃豆，每日清晨新鮮研磨熬煮，口感香濃滑順，營養又健康。',
    category: 'drinks',
    tags: ['recommend'],
    customType: 'drinks',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><path d="M35 30 L65 30 L60 80 L40 80 Z" fill="#ffffff" stroke="#bdc3c7" stroke-width="4"/><path d="M60 40 L70 45 L70 65 L60 60" fill="none" stroke="#bdc3c7" stroke-width="4"/><path d="M32 30 C32 30, 50 35, 68 30" stroke="#f1c40f" stroke-width="4" fill="none"/></svg>`
  },
  {
    id: 'dr_2',
    name: '古早味決明子紅茶',
    price: 25,
    description: '帶有淡淡決明子茶香的傳統台灣紅茶，微甜不澀，冰涼消暑。',
    category: 'drinks',
    tags: [],
    customType: 'drinks',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><path d="M35 30 L65 30 L60 80 L40 80 Z" fill="#784212" stroke="#4e2c0e" stroke-width="4"/><path d="M60 40 L70 45 L70 65 L60 60" fill="none" stroke="#4e2c0e" stroke-width="4"/><line x1="50" y1="20" x2="62" y2="40" stroke="#e74c3c" stroke-width="4" stroke-linecap="round"/></svg>`
  },
  {
    id: 'dr_3',
    name: '萬家香特調奶茶',
    price: 30,
    description: '經典紅茶基底與濃郁奶香完美調配，早餐店最靈魂的經典滋味。',
    category: 'drinks',
    tags: ['hot'],
    customType: 'drinks',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><path d="M35 30 L65 30 L60 80 L40 80 Z" fill="#eed9c4" stroke="#d5bfa7" stroke-width="4"/><path d="M60 40 L70 45 L70 65 L60 60" fill="none" stroke="#d5bfa7" stroke-width="4"/></svg>`
  },
  {
    id: 'dr_4',
    name: '小農鮮奶茶',
    price: 45,
    description: '嚴選在地小農優質鮮乳與醇厚紅茶融合，乳香悠長，順口不膩。',
    category: 'drinks',
    tags: ['new'],
    customType: 'drinks',
    icon: `<svg viewBox="0 0 100 100" class="food-icon"><path d="M35 30 L65 30 L60 80 L40 80 Z" fill="#ffffff" stroke="#3498db" stroke-width="4"/><path d="M35 45 C45 40, 55 50, 65 45 L60 80 L40 80 Z" fill="#eed9c4" opacity="0.6"/></svg>`
  }
];

// 2. 客製化選項設定
const CUSTOMIZATION_SCHEMAS = {
  toast: {
    addons: [
      { name: '加現煎荷包蛋', price: 10, value: 'egg' },
      { name: '加熔岩起司片', price: 10, value: 'cheese' },
      { name: '加黃金泡菜', price: 15, value: 'kimchi' }
    ],
    radios: [
      {
        title: '吐司處理',
        name: 'crust',
        options: [
          { name: '去邊（軟嫩口感）', price: 0, default: true },
          { name: '留邊（帶有嚼勁）', price: 0 }
        ]
      },
      {
        title: '特製醬料',
        name: 'sauce',
        options: [
          { name: '特調美乃滋', price: 0, default: true },
          { name: '顆粒花生醬', price: 5 },
          { name: '不加任何醬料', price: 0 }
        ]
      }
    ]
  },
  burger: {
    addons: [
      { name: '加現煎荷包蛋', price: 10, value: 'egg' },
      { name: '加熔岩起司片', price: 10, value: 'cheese' },
      { name: '加手打牛肉排', price: 40, value: 'beef' }
    ],
    radios: [
      {
        title: '特製醬料',
        name: 'sauce',
        options: [
          { name: '顆粒花生醬', price: 0, default: true },
          { name: '美式漢堡醬', price: 0 },
          { name: '不加任何醬料', price: 0 }
        ]
      }
    ]
  },
  egg_crepe: {
    addons: [
      { name: '加熔岩起司片', price: 10, value: 'cheese' },
      { name: '加雙倍蔥花', price: 5, value: 'scallion' },
      { name: '加香脆薯餅', price: 15, value: 'hashbrown' }
    ],
    radios: [
      {
        title: '佐料沾醬',
        name: 'sauce',
        options: [
          { name: '招牌蒜蓉油膏', price: 0, default: true },
          { name: '古早味甜辣醬', price: 0 },
          { name: '不需要任何醬料', price: 0 }
        ]
      },
      {
        title: '辣度選擇',
        name: 'spicy',
        options: [
          { name: '完全不辣', price: 0, default: true },
          { name: '特製小辣', price: 0 },
          { name: '噴火大辣', price: 0 }
        ]
      }
    ]
  },
  chinese_dimsum: {
    addons: [
      { name: '加現煎荷包蛋', price: 10, value: 'egg' }
    ],
    radios: [
      {
        title: '佐料沾醬',
        name: 'sauce',
        options: [
          { name: '招牌蒜蓉油膏', price: 0, default: true },
          { name: '古早味甜辣醬', price: 0 },
          { name: '不沾醬', price: 0 }
        ]
      },
      {
        title: '辣度選擇',
        name: 'spicy',
        options: [
          { name: '不辣', price: 0, default: true },
          { name: '加辣', price: 0 }
        ]
      }
    ]
  },
  iron_noodles: {
    addons: [
      { name: '加點一顆蛋', price: 10, value: 'extra_egg' },
      { name: '加香煎厚豬排', price: 30, value: 'pork' }
    ],
    radios: [
      {
        title: '熟度選擇 (蛋)',
        name: 'egg_style',
        options: [
          { name: '邪惡半熟蛋（會流汁）', price: 0, default: true },
          { name: '全熟荷包蛋', price: 0 }
        ]
      },
      {
        title: '辣度調整',
        name: 'spicy',
        options: [
          { name: '原汁風味（不辣）', price: 0, default: true },
          { name: '微辣（開胃）', price: 0 },
          { name: '大辣（過癮）', price: 0 }
        ]
      }
    ]
  },
  drinks: {
    addons: [
      { name: '升級大杯 (700ml)', price: 10, value: 'large' }
    ],
    radios: [
      {
        title: '冰量選擇',
        name: 'ice',
        options: [
          { name: '正常冰', price: 0 },
          { name: '少冰', price: 0 },
          { name: '微冰', price: 0 },
          { name: '去冰', price: 0, default: true },
          { name: '溫飲', price: 0 },
          { name: '熱飲', price: 0 }
        ]
      },
      {
        title: '甜度選擇',
        name: 'sugar',
        options: [
          { name: '正常糖', price: 0 },
          { name: '半糖', price: 0 },
          { name: '微糖', price: 0, default: true },
          { name: '無糖', price: 0 }
        ]
      }
    ]
  },
  normal: {
    addons: [],
    radios: []
  }
};

// 3. 系統狀態 (State)
let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let activeCustomizingItem = null;

// 4. 初始化
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  renderCategoryTabs();
  renderMenuItems();
  updateCartUI();
  setupEventListeners();
});

// 5. 載入與儲存 LocalStorage
function saveCartToStorage() {
  localStorage.setItem('wjx_breakfast_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
  const saved = localStorage.getItem('wjx_breakfast_cart');
  if (saved) {
    try {
      cart = JSON.parse(saved);
    } catch (e) {
      cart = [];
    }
  }
}

// 6. 渲染分類標籤
function renderCategoryTabs() {
  const categories = [
    { id: 'all', name: '全部美味' },
    { id: 'egg_crepe', name: '招牌粉漿蛋餅' },
    { id: 'toast_burger', name: '經典吐司/漢堡' },
    { id: 'chinese_dimsum', name: '晨光中式點心' },
    { id: 'iron_noodles', name: '鐵板麵/湯品' },
    { id: 'drinks', name: '經典系列飲品' }
  ];

  const container = document.getElementById('categoryTabs');
  if (!container) return;

  container.innerHTML = categories.map(cat => `
    <button class="category-tab ${currentCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  // 綁定點擊事件
  container.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      container.querySelector('.category-tab.active')?.classList.remove('active');
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderMenuItems();
    });
  });
}

// 7. 渲染菜單列表
function renderMenuItems() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  // 過濾餐點
  const filtered = MENU_ITEMS.filter(item => {
    const matchCategory = currentCategory === 'all' || item.category === currentCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;">🍳</div>
        <p>沒有找到符合條件的美味餐點，換個關鍵字試試吧！</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const tagsHTML = item.tags.map(tag => {
      let tagClass = 'tag-recommend';
      let tagText = '推薦';
      if (tag === 'hot') { tagClass = 'tag-hot'; tagText = '人氣'; }
      if (tag === 'new') { tagClass = 'tag-new'; tagText = '新品'; }
      return `<span class="menu-tag ${tagClass}">${tagText}</span>`;
    }).join('');

    return `
      <div class="menu-card" data-id="${item.id}">
        <div class="menu-card-image-wrapper">
          ${item.icon}
          <div class="menu-card-tags">${tagsHTML}</div>
        </div>
        <div class="menu-card-content">
          <h3 class="menu-card-title">${item.name}</h3>
          <p class="menu-card-desc">${item.description}</p>
          <div class="menu-card-footer">
            <span class="menu-card-price">${item.price}</span>
            <button class="add-to-cart-btn" onclick="handleAddToCartClick('${item.id}')" aria-label="加入購物車">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 8. 處理點擊「加入購物車」
window.handleAddToCartClick = function(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const schema = CUSTOMIZATION_SCHEMAS[item.customType || 'normal'];

  // 如果沒有可選的客製化項目，直接免彈窗加入購物車
  if (schema.addons.length === 0 && schema.radios.length === 0) {
    addDirectToCart(item);
  } else {
    // 否則，打開客製化彈窗
    openCustomizationModal(item, schema);
  }
};

// 9. 直接加入購物車（無客製化餐點）
function addDirectToCart(item) {
  const existingIndex = cart.findIndex(c => c.id === item.id && (!c.customs || c.customs.length === 0));

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      basePrice: item.price,
      price: item.price,
      quantity: 1,
      customs: [],
      customKey: `${item.id}-plain`
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`已將 ${item.name} 加入購物車`);
}

// 10. 開啟客製化彈窗
function openCustomizationModal(item, schema) {
  activeCustomizingItem = { ...item, schema };
  
  const modal = document.getElementById('customizationModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalForm = document.getElementById('customizationForm');
  const modalHeaderIcon = document.getElementById('modalHeaderIcon');

  if (!modal || !modalForm) return;

  modalTitle.textContent = item.name;
  modalDesc.textContent = item.description;
  
  // 載入該餐點的 SVG 圖示
  if (modalHeaderIcon) {
    modalHeaderIcon.innerHTML = item.icon;
  }

  let formHTML = '';

  // 10.1 渲染 Radio 單選選項
  if (schema.radios && schema.radios.length > 0) {
    schema.radios.forEach((group, groupIdx) => {
      formHTML += `
        <div class="custom-section">
          <div class="custom-section-title">
            <span>${group.title}</span>
            <span class="custom-required">必選</span>
          </div>
          <div class="custom-options-grid">
      `;
      group.options.forEach((opt, optIdx) => {
        const isChecked = opt.default ? 'checked' : '';
        const optId = `radio_${groupIdx}_${optIdx}`;
        formHTML += `
          <label class="custom-option-label" for="${optId}">
            <div class="custom-option-details">
              <input type="radio" id="${optId}" name="${group.name}" value="${opt.name}" data-price="${opt.price}" ${isChecked} class="custom-option-input" onchange="recalculateModalPrice()">
              <span class="custom-option-control-indicator"></span>
              <span>${opt.name}</span>
            </div>
            ${opt.price > 0 ? `<span class="option-price-tag">${opt.price}</span>` : ''}
          </label>
        `;
      });
      formHTML += `</div></div>`;
    });
  }

  // 10.2 渲染 Checkbox 複選項目
  if (schema.addons && schema.addons.length > 0) {
    formHTML += `
      <div class="custom-section">
        <div class="custom-section-title">
          <span>美味加購</span>
        </div>
        <div class="custom-options-grid">
    `;
    schema.addons.forEach((addon, idx) => {
      const addonId = `addon_${idx}`;
      formHTML += `
        <label class="custom-option-label" for="${addonId}">
          <div class="custom-option-details">
            <input type="checkbox" id="${addonId}" name="addons" value="${addon.name}" data-price="${addon.price}" class="custom-option-input" onchange="recalculateModalPrice()">
            <span class="custom-option-control-indicator"></span>
            <span>${addon.name}</span>
          </div>
          <span class="option-price-tag">${addon.price}</span>
        </label>
      `;
    });
    formHTML += `</div></div>`;
  }

  modalForm.innerHTML = formHTML;
  recalculateModalPrice();
  
  modal.classList.add('active');
}

// 11. 關閉客製化彈窗
window.closeCustomizationModal = function() {
  const modal = document.getElementById('customizationModal');
  modal?.classList.remove('active');
  activeCustomizingItem = null;
};

// 12. 即時計算彈窗內客製化後的單價
window.recalculateModalPrice = function() {
  if (!activeCustomizingItem) return;

  let totalPrice = activeCustomizingItem.price;

  // 計算選中的單選加價
  const radios = document.querySelectorAll('#customizationForm input[type="radio"]:checked');
  radios.forEach(radio => {
    totalPrice += parseFloat(radio.dataset.price || 0);
  });

  // 計算選中的複選加價
  const checkboxes = document.querySelectorAll('#customizationForm input[type="checkbox"]:checked');
  checkboxes.forEach(cb => {
    totalPrice += parseFloat(cb.dataset.price || 0);
  });

  const priceEl = document.getElementById('modalTotalPrice');
  if (priceEl) {
    priceEl.textContent = totalPrice;
  }
};

// 13. 確認加購（將客製化後的餐點加入購物車）
window.submitCustomizedItem = function() {
  if (!activeCustomizingItem) return;

  const item = activeCustomizingItem;
  let finalPrice = item.price;
  const customs = [];
  const customKeys = [];

  // 單選
  const radios = document.querySelectorAll('#customizationForm input[type="radio"]:checked');
  radios.forEach(radio => {
    const price = parseFloat(radio.dataset.price || 0);
    finalPrice += price;
    customs.push(radio.value + (price > 0 ? `(+$${price})` : ''));
    customKeys.push(radio.value);
  });

  // 複選
  const checkboxes = document.querySelectorAll('#customizationForm input[type="checkbox"]:checked');
  checkboxes.forEach(cb => {
    const price = parseFloat(cb.dataset.price || 0);
    finalPrice += price;
    customs.push(cb.value + `(+$${price})`);
    customKeys.push(cb.value);
  });

  // 建立唯一的 key 用以區分相同商品但不同客製化的項目
  customKeys.sort();
  const customKey = `${item.id}-${customKeys.join('|')}`;

  const existingIndex = cart.findIndex(c => c.customKey === customKey);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      basePrice: item.price,
      price: finalPrice,
      quantity: 1,
      customs: customs,
      customKey: customKey
    });
  }

  saveCartToStorage();
  updateCartUI();
  closeCustomizationModal();
  showToast(`已將客製化 ${item.name} 加入購物車`);
};

// 14. 購物車操作（增加、減少、刪除、清空）
window.updateQuantity = function(customKey, change) {
  const idx = cart.findIndex(c => c.customKey === customKey);
  if (idx === -1) return;

  cart[idx].quantity += change;

  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1);
  }

  saveCartToStorage();
  updateCartUI();
};

window.removeCartItem = function(customKey) {
  const idx = cart.findIndex(c => c.customKey === customKey);
  if (idx === -1) return;

  const name = cart[idx].name;
  cart.splice(idx, 1);

  saveCartToStorage();
  updateCartUI();
  showToast(`已移除購物車中的 ${name}`);
};

window.clearCart = function() {
  if (cart.length === 0) return;
  
  if (confirm('確定要清空購物車嗎？')) {
    cart = [];
    saveCartToStorage();
    updateCartUI();
    showToast('購物車已清空');
  }
};

// 15. 更新購物車 UI
function updateCartUI() {
  const listContainers = document.querySelectorAll('.cart-items-list');
  const countBadges = document.querySelectorAll('.cart-count-badge, .floating-cart-badge');
  const totalValEls = document.querySelectorAll('.cart-total-val');
  const checkoutBtns = document.querySelectorAll('.cart-checkout-btn');

  // 計算總數與總金額
  const totalCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  // 更新徽章數字
  countBadges.forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });

  // 更新結算按鈕狀態
  checkoutBtns.forEach(btn => {
    btn.disabled = totalCount === 0;
  });

  // 更新總金額
  totalValEls.forEach(el => {
    el.textContent = `$${totalPrice}`;
  });

  // 渲染清單
  listContainers.forEach(container => {
    if (!container) return;

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">🛒</div>
          <p>購物車空空如也<br>點擊上方加號開始點餐吧！</p>
        </div>
      `;
      return;
    }

    container.innerHTML = cart.map(item => {
      const customsDesc = item.customs.length > 0 ? item.customs.join(', ') : '無客製化選項';
      return `
        <div class="cart-item">
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            <p class="cart-item-customs">${customsDesc}</p>
            <span class="cart-item-price">$${item.price}</span>
          </div>
          <div class="cart-item-controls">
            <button class="cart-item-remove-btn" onclick="removeCartItem('${item.customKey}')" aria-label="刪除">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
            <div class="quantity-control">
              <button class="qty-btn" onclick="updateQuantity('${item.customKey}', -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity('${item.customKey}', 1)">+</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  });
}

// 16. 顯示吐司通知 (Toast Notification)
function showToast(message) {
  // 檢查是否已有 toast-container
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = `
      position: fixed;
      bottom: 90px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
    `;
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: rgba(44, 37, 32, 0.95);
    color: #ffffff;
    padding: 0.8rem 1.6rem;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
  `;
  toast.textContent = message;
  container.appendChild(toast);

  // 動態滑入
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 10);

  // 3秒後滑出並移除
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}

// 17. 模擬結帳送出訂單
window.checkoutOrder = function() {
  if (cart.length === 0) return;

  const receiptModal = document.getElementById('receiptModal');
  const receiptItems = document.getElementById('receiptItems');
  const receiptTotal = document.getElementById('receiptTotal');
  const receiptNumber = document.getElementById('receiptNumber');
  
  if (!receiptModal || !receiptItems || !receiptTotal || !receiptNumber) return;

  // 17.1 渲染收據明細
  const totalCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  receiptItems.innerHTML = cart.map(item => `
    <div class="receipt-row">
      <span>${item.name} x${item.quantity}</span>
      <span>$${item.price * item.quantity}</span>
    </div>
  `).join('');

  receiptTotal.innerHTML = `
    <span>共 ${totalCount} 項餐點，總計</span>
    <span>$${totalPrice}</span>
  `;

  // 17.2 產生隨機取餐編號
  const timestamp = Date.now().toString().slice(-4);
  const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
  const orderNo = `${randomLetter}-${timestamp}`;
  receiptNumber.textContent = orderNo;

  // 關閉手機版購物車抽屜 (如果處於開啟狀態)
  closeMobileCart();

  // 打開收據彈窗
  receiptModal.classList.add('active');

  // 清空購物車
  cart = [];
  saveCartToStorage();
  updateCartUI();
};

window.closeReceiptModal = function() {
  const receiptModal = document.getElementById('receiptModal');
  receiptModal?.classList.remove('active');
};

// 18. 手機版購物車抽屜控制
window.toggleMobileCart = function() {
  const sidebar = document.getElementById('cartSidebar');
  if (!sidebar) return;

  if (sidebar.classList.contains('mobile-active')) {
    closeMobileCart();
  } else {
    // 建立一個透明的背景遮罩，點擊可以關閉購物車
    let overlay = document.getElementById('mobileCartOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'mobileCartOverlay';
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        z-index: 100;
        animation: fadeIn 0.3s ease;
      `;
      overlay.addEventListener('click', closeMobileCart);
      document.body.appendChild(overlay);
    }
    sidebar.classList.add('mobile-active');
  }
};

function closeMobileCart() {
  const sidebar = document.getElementById('cartSidebar');
  sidebar?.classList.remove('mobile-active');
  document.getElementById('mobileCartOverlay')?.remove();
}

// 19. 設定事件監聽器
function setupEventListeners() {
  // 關鍵字搜尋監聽
  const searchInput = document.getElementById('searchInput');
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderMenuItems();
  });

  // 點擊 Modal 外部關閉
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeCustomizationModal();
        closeReceiptModal();
      }
    });
  });
}
