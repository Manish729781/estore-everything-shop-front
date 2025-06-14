
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface LanguageOption {
  flag: string;
  language: string;
  code: string;
}

interface LanguageContextType {
  selectedLanguage: LanguageOption;
  setSelectedLanguage: (language: LanguageOption) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<string, string>> = {
  'HI': {
    // Navigation
    'nav.home': 'होम',
    'nav.products': 'उत्पाद',
    'nav.collection': 'संग्रह',
    'nav.featured': 'फीचर्ड',
    'nav.blog': 'ब्लॉग',
    'search.placeholder': 'उत्पाद खोजें...',
    
    // Hero Section
    'hero.title': 'स्टाइल की खोज करें',
    'hero.subtitle': 'नवीनतम फैशन ट्रेंड्स',
    'hero.cta': 'अभी खरीदारी करें',
    
    // Categories
    'categories.title': 'श्रेणियां',
    'categories.mens': 'पुरुषों के कपड़े',
    'categories.womens': 'महिलाओं के कपड़े',
    'categories.accessories': 'एक्सेसरीज',
    
    // Product
    'product.addToCart': 'कार्ट में जोड़ें',
    'product.buyNow': 'अभी खरीदें',
    'product.price': 'कीमत',
    'product.description': 'विवरण',
    'product.chooseColor': 'रंग चुनें',
    'product.selectSize': 'साइज़ चुनें',
    'product.quantity': 'मात्रा',
    'product.share': 'शेयर करें',
    'product.inStock': '12 स्टॉक में',
    'product.outOfStock': 'स्टॉक में नहीं',
    'product.securePayment': 'सुरक्षित भुगतान',
    'product.freeShipping': 'मुफ्त एक्सप्रेस शिपिंग*',
    'product.delivery': 'डिलीवरी 2-5 दिन',
    
    // Products Page
    'products.allProducts': 'सभी उत्पाद',
    'products.of': 'का',
    'products.results': 'परिणाम',
    'products.page': 'पेज',
    'products.sortBy': 'द्वारा क्रमबद्ध करें',
    'products.relevance': 'प्रासंगिकता',
    'products.priceLowToHigh': 'कीमत: कम से अधिक',
    'products.priceHighToLow': 'कीमत: अधिक से कम',
    'products.newestFirst': 'पहले नवीनतम',
    'products.availability': 'उपलब्धता',
    'products.inStock': 'स्टॉक में',
    'products.outOfStock': 'स्टॉक में नहीं',
    'products.productType': 'उत्पाद प्रकार',
    'products.size': 'साइज़',
    'products.clearAll': 'सभी साफ़ करें',
    'products.noProducts': 'कोई उत्पाद नहीं मिला',
    'products.tryAdjusting': 'अपनी खोज या फ़िल्टर को समायोजित करने का प्रयास करें',
    
    // Search
    'search.search': 'खोज',
    'search.searchingFor': 'खोज रहे हैं',
    'search.resultsFound': 'परिणाम मिले',
    
    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफल',
  },
  'EN': {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.collection': 'Collection',
    'nav.featured': 'Featured',
    'nav.blog': 'Blog',
    'search.placeholder': 'Search products...',
    
    // Hero Section
    'hero.title': 'Discover Style',
    'hero.subtitle': 'Latest Fashion Trends',
    'hero.cta': 'Shop Now',
    
    // Categories
    'categories.title': 'Categories',
    'categories.mens': 'Men\'s Clothing',
    'categories.womens': 'Women\'s Clothing',
    'categories.accessories': 'Accessories',
    
    // Product
    'product.addToCart': 'Add to Cart',
    'product.buyNow': 'Buy Now',
    'product.price': 'Price',
    'product.description': 'Description',
    'product.chooseColor': 'Choose Colour',
    'product.selectSize': 'Select Size',
    'product.quantity': 'Quantity',
    'product.share': 'Share',
    'product.inStock': '12 In Stock',
    'product.outOfStock': 'Out of Stock',
    'product.securePayment': 'Secure payment',
    'product.freeShipping': 'Free Express Shipping*',
    'product.delivery': 'Delivery 2-5 days',
    
    // Products Page
    'products.allProducts': 'All Products',
    'products.of': 'of',
    'products.results': 'results',
    'products.page': 'Page',
    'products.sortBy': 'Sort By',
    'products.relevance': 'Relevance',
    'products.priceLowToHigh': 'Price: Low to High',
    'products.priceHighToLow': 'Price: High to Low',
    'products.newestFirst': 'Newest First',
    'products.availability': 'Availability',
    'products.inStock': 'In Stock',
    'products.outOfStock': 'Out Of Stock',
    'products.productType': 'Product type',
    'products.size': 'Size',
    'products.clearAll': 'Clear All',
    'products.noProducts': 'No products found',
    'products.tryAdjusting': 'Try adjusting your search or filters',
    
    // Search
    'search.search': 'Search',
    'search.searchingFor': 'Searching for',
    'search.resultsFound': 'results found',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  },
  'ES': {
    // Navigation
    'nav.home': 'Inicio',
    'nav.products': 'Productos',
    'nav.collection': 'Colección',
    'nav.featured': 'Destacados',
    'nav.blog': 'Blog',
    'search.placeholder': 'Buscar productos...',
    
    // Hero Section
    'hero.title': 'Descubre Estilo',
    'hero.subtitle': 'Últimas Tendencias de Moda',
    'hero.cta': 'Comprar Ahora',
    
    // Categories
    'categories.title': 'Categorías',
    'categories.mens': 'Ropa de Hombre',
    'categories.womens': 'Ropa de Mujer',
    'categories.accessories': 'Accesorios',
    
    // Product
    'product.addToCart': 'Añadir al Carrito',
    'product.buyNow': 'Comprar Ahora',
    'product.price': 'Precio',
    'product.description': 'Descripción',
    'product.chooseColor': 'Elegir Color',
    'product.selectSize': 'Seleccionar Talla',
    'product.quantity': 'Cantidad',
    'product.share': 'Compartir',
    'product.inStock': '12 En Stock',
    'product.outOfStock': 'Agotado',
    'product.securePayment': 'Pago seguro',
    'product.freeShipping': 'Envío Express Gratis*',
    'product.delivery': 'Entrega 2-5 días',
    
    // Products Page
    'products.allProducts': 'Todos los Productos',
    'products.of': 'de',
    'products.results': 'resultados',
    'products.page': 'Página',
    'products.sortBy': 'Ordenar Por',
    'products.relevance': 'Relevancia',
    'products.priceLowToHigh': 'Precio: Menor a Mayor',
    'products.priceHighToLow': 'Precio: Mayor a Menor',
    'products.newestFirst': 'Más Nuevos Primero',
    'products.availability': 'Disponibilidad',
    'products.inStock': 'En Stock',
    'products.outOfStock': 'Agotado',
    'products.productType': 'Tipo de producto',
    'products.size': 'Talla',
    'products.clearAll': 'Limpiar Todo',
    'products.noProducts': 'No se encontraron productos',
    'products.tryAdjusting': 'Intenta ajustar tu búsqueda o filtros',
    
    // Search
    'search.search': 'Buscar',
    'search.searchingFor': 'Buscando',
    'search.resultsFound': 'resultados encontrados',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.success': 'Éxito',
  },
  'FR': {
    // Navigation
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.collection': 'Collection',
    'nav.featured': 'En vedette',
    'nav.blog': 'Blog',
    'search.placeholder': 'Rechercher des produits...',
    
    // Hero Section
    'hero.title': 'Découvrez le Style',
    'hero.subtitle': 'Dernières Tendances Mode',
    'hero.cta': 'Acheter Maintenant',
    
    // Categories
    'categories.title': 'Catégories',
    'categories.mens': 'Vêtements Homme',
    'categories.womens': 'Vêtements Femme',
    'categories.accessories': 'Accessoires',
    
    // Product
    'product.addToCart': 'Ajouter au Panier',
    'product.buyNow': 'Acheter Maintenant',
    'product.price': 'Prix',
    'product.description': 'Description',
    'product.chooseColor': 'Choisir la Couleur',
    'product.selectSize': 'Sélectionner la Taille',
    'product.quantity': 'Quantité',
    'product.share': 'Partager',
    'product.inStock': '12 En Stock',
    'product.outOfStock': 'Rupture de Stock',
    'product.securePayment': 'Paiement sécurisé',
    'product.freeShipping': 'Livraison Express Gratuite*',
    'product.delivery': 'Livraison 2-5 jours',
    
    // Products Page
    'products.allProducts': 'Tous les Produits',
    'products.of': 'de',
    'products.results': 'résultats',
    'products.page': 'Page',
    'products.sortBy': 'Trier Par',
    'products.relevance': 'Pertinence',
    'products.priceLowToHigh': 'Prix: Croissant',
    'products.priceHighToLow': 'Prix: Décroissant',
    'products.newestFirst': 'Plus Récents',
    'products.availability': 'Disponibilité',
    'products.inStock': 'En Stock',
    'products.outOfStock': 'Rupture de Stock',
    'products.productType': 'Type de produit',
    'products.size': 'Taille',
    'products.clearAll': 'Tout Effacer',
    'products.noProducts': 'Aucun produit trouvé',
    'products.tryAdjusting': 'Essayez d\'ajuster votre recherche ou vos filtres',
    
    // Search
    'search.search': 'Rechercher',
    'search.searchingFor': 'Recherche de',
    'search.resultsFound': 'résultats trouvés',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
  },
  'DE': {
    // Navigation
    'nav.home': 'Startseite',
    'nav.products': 'Produkte',
    'nav.collection': 'Kollektion',
    'nav.featured': 'Empfohlen',
    'nav.blog': 'Blog',
    'search.placeholder': 'Produkte suchen...',
    
    // Hero Section
    'hero.title': 'Stil Entdecken',
    'hero.subtitle': 'Neueste Modetrends',
    'hero.cta': 'Jetzt Einkaufen',
    
    // Categories
    'categories.title': 'Kategorien',
    'categories.mens': 'Herrenbekleidung',
    'categories.womens': 'Damenbekleidung',
    'categories.accessories': 'Accessoires',
    
    // Product
    'product.addToCart': 'In den Warenkorb',
    'product.buyNow': 'Jetzt Kaufen',
    'product.price': 'Preis',
    'product.description': 'Beschreibung',
    'product.chooseColor': 'Farbe Wählen',
    'product.selectSize': 'Größe Wählen',
    'product.quantity': 'Menge',
    'product.share': 'Teilen',
    'product.inStock': '12 Auf Lager',
    'product.outOfStock': 'Nicht Verfügbar',
    'product.securePayment': 'Sichere Zahlung',
    'product.freeShipping': 'Kostenloser Express-Versand*',
    'product.delivery': 'Lieferung 2-5 Tage',
    
    // Products Page
    'products.allProducts': 'Alle Produkte',
    'products.of': 'von',
    'products.results': 'Ergebnisse',
    'products.page': 'Seite',
    'products.sortBy': 'Sortieren Nach',
    'products.relevance': 'Relevanz',
    'products.priceLowToHigh': 'Preis: Niedrig bis Hoch',
    'products.priceHighToLow': 'Preis: Hoch bis Niedrig',
    'products.newestFirst': 'Neueste Zuerst',
    'products.availability': 'Verfügbarkeit',
    'products.inStock': 'Auf Lager',
    'products.outOfStock': 'Nicht Verfügbar',
    'products.productType': 'Produkttyp',
    'products.size': 'Größe',
    'products.clearAll': 'Alle Löschen',
    'products.noProducts': 'Keine Produkte gefunden',
    'products.tryAdjusting': 'Versuchen Sie, Ihre Suche oder Filter anzupassen',
    
    // Search
    'search.search': 'Suchen',
    'search.searchingFor': 'Suche nach',
    'search.resultsFound': 'Ergebnisse gefunden',
    
    // Common
    'common.loading': 'Laden...',
    'common.error': 'Fehler',
    'common.success': 'Erfolg',
  },
  'ZH': {
    // Navigation
    'nav.home': '首页',
    'nav.products': '产品',
    'nav.collection': '收藏',
    'nav.featured': '精选',
    'nav.blog': '博客',
    'search.placeholder': '搜索产品...',
    
    // Hero Section
    'hero.title': '发现风格',
    'hero.subtitle': '最新时尚趋势',
    'hero.cta': '立即购买',
    
    // Categories
    'categories.title': '分类',
    'categories.mens': '男装',
    'categories.womens': '女装',
    'categories.accessories': '配饰',
    
    // Product
    'product.addToCart': '加入购物车',
    'product.buyNow': '立即购买',
    'product.price': '价格',
    'product.description': '描述',
    'product.chooseColor': '选择颜色',
    'product.selectSize': '选择尺寸',
    'product.quantity': '数量',
    'product.share': '分享',
    'product.inStock': '12件现货',
    'product.outOfStock': '缺货',
    'product.securePayment': '安全支付',
    'product.freeShipping': '免费快递*',
    'product.delivery': '2-5天送达',
    
    // Products Page
    'products.allProducts': '所有产品',
    'products.of': '的',
    'products.results': '结果',
    'products.page': '第',
    'products.sortBy': '排序',
    'products.relevance': '相关性',
    'products.priceLowToHigh': '价格：从低到高',
    'products.priceHighToLow': '价格：从高到低',
    'products.newestFirst': '最新优先',
    'products.availability': '可用性',
    'products.inStock': '现货',
    'products.outOfStock': '缺货',
    'products.productType': '产品类型',
    'products.size': '尺寸',
    'products.clearAll': '清除全部',
    'products.noProducts': '未找到产品',
    'products.tryAdjusting': '尝试调整您的搜索或筛选条件',
    
    // Search
    'search.search': '搜索',
    'search.searchingFor': '搜索',
    'search.resultsFound': '个结果',
    
    // Common
    'common.loading': '加载中...',
    'common.error': '错误',
    'common.success': '成功',
  },
  'JA': {
    // Navigation
    'nav.home': 'ホーム',
    'nav.products': '商品',
    'nav.collection': 'コレクション',
    'nav.featured': '注目',
    'nav.blog': 'ブログ',
    'search.placeholder': '商品を検索...',
    
    // Hero Section
    'hero.title': 'スタイルを発見',
    'hero.subtitle': '最新ファッショントレンド',
    'hero.cta': '今すぐ購入',
    
    // Categories
    'categories.title': 'カテゴリー',
    'categories.mens': 'メンズ服',
    'categories.womens': 'レディース服',
    'categories.accessories': 'アクセサリー',
    
    // Product
    'product.addToCart': 'カートに追加',
    'product.buyNow': '今すぐ購入',
    'product.price': '価格',
    'product.description': '説明',
    'product.chooseColor': '色を選択',
    'product.selectSize': 'サイズを選択',
    'product.quantity': '数量',
    'product.share': '共有',
    'product.inStock': '在庫12個',
    'product.outOfStock': '在庫切れ',
    'product.securePayment': '安全な支払い',
    'product.freeShipping': '無料エクスプレス配送*',
    'product.delivery': '配送2-5日',
    
    // Products Page
    'products.allProducts': 'すべての商品',
    'products.of': 'の',
    'products.results': '結果',
    'products.page': 'ページ',
    'products.sortBy': '並び順',
    'products.relevance': '関連性',
    'products.priceLowToHigh': '価格：安い順',
    'products.priceHighToLow': '価格：高い順',
    'products.newestFirst': '新着順',
    'products.availability': '在庫状況',
    'products.inStock': '在庫あり',
    'products.outOfStock': '在庫切れ',
    'products.productType': '商品タイプ',
    'products.size': 'サイズ',
    'products.clearAll': 'すべてクリア',
    'products.noProducts': '商品が見つかりません',
    'products.tryAdjusting': '検索条件やフィルターを調整してください',
    
    // Search
    'search.search': '検索',
    'search.searchingFor': '検索中',
    'search.resultsFound': '件の結果',
    
    // Common
    'common.loading': '読み込み中...',
    'common.error': 'エラー',
    'common.success': '成功',
  },
  'AR': {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.collection': 'المجموعة',
    'nav.featured': 'المميز',
    'nav.blog': 'المدونة',
    'search.placeholder': 'البحث عن المنتجات...',
    
    // Hero Section
    'hero.title': 'اكتشف الأناقة',
    'hero.subtitle': 'أحدث اتجاهات الموضة',
    'hero.cta': 'تسوق الآن',
    
    // Categories
    'categories.title': 'الفئات',
    'categories.mens': 'ملابس رجالية',
    'categories.womens': 'ملابس نسائية',
    'categories.accessories': 'الإكسسوارات',
    
    // Product
    'product.addToCart': 'أضف إلى السلة',
    'product.buyNow': 'اشتر الآن',
    'product.price': 'السعر',
    'product.description': 'الوصف',
    'product.chooseColor': 'اختر اللون',
    'product.selectSize': 'اختر المقاس',
    'product.quantity': 'الكمية',
    'product.share': 'مشاركة',
    'product.inStock': '12 متوفر',
    'product.outOfStock': 'نفدت الكمية',
    'product.securePayment': 'دفع آمن',
    'product.freeShipping': 'شحن سريع مجاني*',
    'product.delivery': 'التوصيل 2-5 أيام',
    
    // Products Page
    'products.allProducts': 'جميع المنتجات',
    'products.of': 'من',
    'products.results': 'نتائج',
    'products.page': 'صفحة',
    'products.sortBy': 'ترتيب حسب',
    'products.relevance': 'الصلة',
    'products.priceLowToHigh': 'السعر: من الأقل للأعلى',
    'products.priceHighToLow': 'السعر: من الأعلى للأقل',
    'products.newestFirst': 'الأحدث أولاً',
    'products.availability': 'التوفر',
    'products.inStock': 'متوفر',
    'products.outOfStock': 'نفدت الكمية',
    'products.productType': 'نوع المنتج',
    'products.size': 'المقاس',
    'products.clearAll': 'مسح الكل',
    'products.noProducts': 'لم يتم العثور على منتجات',
    'products.tryAdjusting': 'حاول تعديل البحث أو المرشحات',
    
    // Search
    'search.search': 'بحث',
    'search.searchingFor': 'البحث عن',
    'search.resultsFound': 'نتيجة موجودة',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجح',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>({
    flag: '🇺🇸',
    language: 'English',
    code: 'EN'
  });

  const t = (key: string): string => {
    return translations[selectedLanguage.code]?.[key] || translations['EN'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
