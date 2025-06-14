
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
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجح',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>({
    flag: '🇮🇳',
    language: 'Hindi',
    code: 'HI'
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
