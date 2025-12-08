// @ts-nocheck

// Move buildSlider function outside the IIFE to make it globally accessible
function buildSlider(id, slidesHtml, visible) {
  var dots = '<div class="flex justify-center gap-2 mt-2" data-slider-dots></div>';
  var track = '<div class="relative w-full overflow-hidden" style="touch-action: pan-y"><div class="flex" data-slider-track>' + slidesHtml.join('') + '</div></div>';
  return '<section data-slider id="' + id + '" data-visible="' + (visible || 1) + '" class="w-full">' + track + dots + '</section>';
}

// Also move svg function outside the IIFE
function svg(name, cls) {
  var icons = {
    search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M10 3a7 7 0 015.657 11.314l4.514 4.514-1.414 1.414-4.514-4.514A7 7 0 1110 3zm0 2a5 5 0 100 10 5 5 0 000-10z"/></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M12 3l9 8-1.5 1.8L18 10.5V20H6v-9.5L4.5 12.8 3 11z"/></svg>',
    grid: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 8v-8h8v8h-8z"/></svg>',
    cart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M7 18a2 2 0 110 4 2 2 0 010-4zm10 0a2 2 0 110 4 2 2 0 010-4zM6 5h14l-1.5 8H8.4l-.7 3H20v2H6.8L5 6H3V4h3l.7 1z"/></svg>',
    user: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-9 9c0-4.418 4.03-8 9-8s9 3.582 9 8v1H3v-1z"/></svg>',
    heart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 016.5 4c1.74 0 3.41.81 4.5 2.09A6 6 0 0115.5 4 4.5 4.5 0 0120 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
    chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M9 4l8 8-8 8-1.414-1.414L14.172 12 7.586 5.414z"/></svg>',
    award: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M17 4a2 2 0 012 2v4.126A6 6 0 0118 12c0 2.193 1.136 4.12 2.852 5.215L17 20.561 13.148 17.215A5.977 5.977 0 0112 18a5.977 5.977 0 01-1.148-.785L7 20.561 3.148 17.215A6 6 0 014 10.126V6a2 2 0 012-2h10zM7 6H5v4.126c0 .746.212 1.443.582 2.033L7 13.157V6zm10 0h-2v7.157l1.418-1.05c.37-.59.582-1.287.582-2.033V6z"/></svg>',
    tag: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M10 3l9 8-7 7-9-8V3h7zm-2 4a2 2 0 100 4 2 2 0 000-4z"/></svg>',
    fire: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M12 23a7.5 7.5 0 01-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14 1 0 2.5 0 5-2.47.27.773.5 1.604.5 2.47A7.5 7.5 0 0112 23z"/></svg>',
    chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M15 4l-8 8 8 8 1.414-1.414L9.828 12l6.586-6.586z"/></svg>',
    chat: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M4 4h16v12H7l-3 3V4z"/></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>',
    filter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
    share: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M18 8a3 3 0 10-2.816-4H15a3 3 0 100 6c.546 0 1.056-.146 1.5-.4l-7.1 3.55A3 3 0 006 13a3 3 0 102.816 4H9a3 3 0 100-6c-.546 0-1.056.146-1.5.4l7.1-3.55A3 3 0 0018 8z"/></svg>',
    truck: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M3 6h11v8h2.5l2-3H21V9h-3l-2-3H14V4H3v2zm3 9a2 2 0 114 0 2 2 0 01-4 0zm9 0a2 2 0 114 0 2 2 0 01-4 0z"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="' + cls + '"><path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"/></svg>'
  };
  return icons[name] || '';
}

// Make them available globally
window.buildSlider = buildSlider;
window.svg = svg;

function formatViewerCount(count) {
  var n = typeof count === 'string' ? parseFloat(String(count).replace(/k/i, '')) : Number(count);
  if (!isFinite(n)) n = 0;
  var s = n.toFixed(2).replace(/\.?0+$/, '');
  return s + 'K viewers';
}

window.formatViewerCount = formatViewerCount;

;(function(){
  var state={
    route:'home',
    query:{},
    cart:load(AppConfig.storage.cartKey)||[],
    wishlist:load(AppConfig.storage.wishlistKey)||[],
    loading:true,
    data:{
      allProducts:[],
      featuredProducts:[],
      flashSale:[],
      specialOffers:[]
    },
    categories:[],
    tags:[],
    attributes:[],
    brands:['Nike', 'Adidas', 'Apple', 'Samsung', 'Sony', 'Gucci', 'Louis Vuitton', 'Zara', 'H&M', 'Levi\'s', 'Puma', 'Reebok', 'Under Armour', 'Dell', 'HP', 'LG'],
    productsPager:{page:1,perPage:50,loadingMore:false,hasMore:true},
    filterPanelOpen: false,
    productQty: 1,
    productColor: '',
    productSize: '',
    productImageIndex: 0,
    relatedProducts: {},
    relatedLoading: {},
    cartRelatedProducts: [],
    cartRelatedLoading: false,
    user: null,
    ordersCount: 0,
    reviewsCount: 0,
    addressesCount: 0,
    vouchersCount: 0,
    notificationsCount: 0
  };
  
  function load(k){
    try{
      var v=localStorage.getItem(k);
      return v?JSON.parse(v):null;
    }catch(e){
      return null;
    }
  }
  
  function save(k,v){
    try{
      localStorage.setItem(k,JSON.stringify(v))
    }catch(e){}
  }
  
  var scrollTimer=null;
  
  function shell(){
    var header = `
      <header class="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div class="flex items-center justify-between px-4 py-3">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-brand"></div>
            <span class="font-semibold">${AppConfig.appName}</span>
          </div>
          <button id="searchBtn" class="p-2 text-gray-700">${svg('search','w-6 h-6')}</button>
        </div>
        <div class="px-4 pb-3 hidden" id="searchContainer">
          <form id="searchForm" class="flex items-center gap-2">
            <input id="searchInput" type="text" class="flex-1 rounded-xl border border-gray-300 px-3 py-2" placeholder="Search products"/>
            <button class="px-3 py-2 rounded-xl bg-brand text-white">Search</button>
          </form>
        </div>
      </header>`;
    
    var footer = `
      <nav id="bottomNav" class="fixed bottom-0 inset-x-0 z-30 bg-white border-t border-gray-200">
        <div class="relative">
          <div class="grid grid-cols-4 text-xs">
            <a href="#home" data-tab="home" class="flex flex-col items-center py-2 text-gray-600">${svg('home','w-6 h-6')}<span>Home</span></a>
            <a href="#chat" data-tab="chat" class="flex flex-col items-center py-2 text-gray-600">${svg('chat','w-6 h-6')}<span>Chat</span></a>
            <a href="#cart" data-tab="cart" class="flex flex-col items-center py-2 text-gray-600 relative">
              ${svg('cart','w-6 h-6')}
              <span>Cart</span>
              ${(state.cartCount||0) > 0 ? `<span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">${state.cartCount}</span>` : ''}
            </a>
            <a href="#profile" data-tab="profile" class="flex flex-col items-center py-2 text-gray-600">${svg('user','w-6 h-6')}<span>Profile</span></a>
          </div>
          <button id="fabBtn" class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full text-white shadow-lg flex items-center justify-center bg-brand">${svg('plus','w-6 h-6')}</button>
        </div>
      </nav>`;
    
    var modal = `
      <div id="modal" class="fixed inset-0 hidden items-center justify-center z-50 p-4">
        <div class="absolute inset-0 ${AppConfig.ui.modalBackdrop}"></div>
        <div class="relative bg-white rounded-xl w-full max-w-sm max-h-[90vh] overflow-y-auto">
          <div class="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 class="font-semibold">Quick View</h3>
            <button id="modalClose" class="p-2">✕</button>
          </div>
          <div id="modalBody" class="p-4"></div>
        </div>
      </div>`;
    
    var toast = `<div id="toast" class="fixed bottom-24 left-1/2 -translate-x-1/2 hidden z-50 max-w-[90vw]"></div>`;
    
    // Filter Panel Overlay
    var filterPanel = `
      <div id="filterOverlay" class="fixed inset-0 z-40 hidden bg-black/50"></div>
      <div id="filterPanel" class="fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform -translate-x-full transition-transform duration-300">
        <div class="h-full flex flex-col">
          <div class="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 class="font-semibold text-lg">Filters</h3>
            <button id="closeFilterPanel" class="p-2 hover:bg-gray-100 rounded-lg">
              ${svg('x', 'w-5 h-5')}
            </button>
          </div>
          <div class="flex-1 overflow-y-auto p-4" id="filterContent">
            <!-- Filter content will be loaded here -->
          </div>
          <div class="p-4 border-t border-gray-200 bg-white">
            <div class="flex gap-2">
              <button id="clearFilters" class="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Clear All
              </button>
              <button id="applyFilters" class="flex-1 px-4 py-2.5 bg-brand text-white rounded-lg hover:bg-brandDark transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>`;
    
    return header + '<main id="content" class="pb-20 relative"></main>' + footer + modal + toast + filterPanel;
  }
  
  function formatProductData(product) {
    var raw = (product.images && product.images.main && product.images.main.src) || 
              product.image || 
              (Array.isArray(product.images) && product.images[0] && product.images[0].src) || 
              product.thumb || 
              product.featured_image;
    
    var img = raw ? Assets.api(raw) : Assets.local('assets/img/placeholder.png');
    var title = product.name || product.title || product.product_name || '';
    var price = product.price || product.sale_price || '';
    var regularPrice = product.regular_price || '';
    var discount = '';
    
    var rn = parseFloat(regularPrice);
    var sn = parseFloat(price);
    
    if (!isNaN(rn) && !isNaN(sn) && rn > sn) {
      discount = Math.round(((rn - sn) / rn) * 100) + '% OFF';
    }
    
    var rating = parseFloat(product.average_rating || product.rating || 0);
    var stock = product.stock_quantity || 0;
    var stockStatus = product.stock_status || 'instock';
    var inStock = stockStatus === 'instock' && stock > 0;
    var categories = (product.categories || []).map(function(c) { return c.name; }).join(', ');
    var featured = product.featured || false;
    var tags = (product.tags || []).map(function(t) { return t.name; });
    var brand = product.brand || product.manufacturer || '';
    var attributes = (product.attributes || []).map(function(a){
      var name = a.name || a.attribute || '';
      var options = Array.isArray(a.options) ? a.options : (a.option ? [a.option] : []);
      return { name: name, options: options };
    });
    
    var imagesArr = [];
    if (Array.isArray(product.images)) {
      imagesArr = product.images.map(function(i){
        var s = i && (i.src || i.url || i.image);
        return s ? Assets.api(s) : null;
      }).filter(Boolean);
    }
    if (!imagesArr.length && product.gallery_images && Array.isArray(product.gallery_images)) {
      imagesArr = product.gallery_images.map(function(s){ return s ? Assets.api(s) : null; }).filter(Boolean);
    }
    if (!imagesArr.length) {
      imagesArr = [img, Assets.local('assets/img/10.jpeg'), Assets.local('assets/img/11.jpeg'), Assets.local('assets/img/12.jpeg')];
    }

    return {
      id: product.id,
      img: img,
      images: imagesArr,
      title: title,
      price: price ? '$' + parseFloat(price).toFixed(2) : '',
      originalPrice: regularPrice ? '$' + parseFloat(regularPrice).toFixed(2) : '',
      discount: discount,
      rating: rating,
      stock: stock,
      inStock: inStock,
      categories: categories,
      brand: brand,
      featured: featured,
      tags: tags,
      attributes: attributes,
      description: product.description || '',
      shortDescription: product.short_description || ''
    };
  }
  
  function buildCardItems(list, visible, isSpecialOffer = false) {
    var w = (100 / (visible || 3));
    return list.map(function(p){
      if (isSpecialOffer) {
        return `<div class="shrink-0 px-1 sm:px-2" style="width:${w}%">${specialOfferCard(p)}</div>`;
      }
      return `<div class="shrink-0 px-1 sm:px-2" style="width:${w}%">${productCard(p)}</div>`;
    });
  }

  function buildFilterPanel() {
    var currentQuery = state.query || {};
    var categories = state.categories || [];
    var tags = state.tags || [];
    var attributes = state.attributes || [];
    var brands = state.brands || [];
    
    // Get selected values
    var selectedCategories = (currentQuery.cat || '').split(',').filter(Boolean);
    var selectedTags = (currentQuery.tags || '').split(',').filter(Boolean);
    var selectedAttributes = (currentQuery.attrs || '').split(',').filter(Boolean);
    var selectedBrands = (currentQuery.brands || '').split(',').filter(Boolean);
    var minPrice = currentQuery.min || '';
    var maxPrice = currentQuery.max || '';
    
    // Get product price range
    var allProducts = state.data.allProducts || [];
    var prices = allProducts.map(function(p) {
      return parseFloat(p.price.replace('$', '')) || 0;
    }).filter(function(p) { return p > 0; });
    
    var minProductPrice = prices.length > 0 ? Math.min(...prices) : 0;
    var maxProductPrice = prices.length > 0 ? Math.max(...prices) : 1000;
    
    // Generate category checkboxes (show 5 initially with scroll)
    var categoryHtml = `
      <div class="mb-6">
        <div class="flex items-center justify-between mb-3">
          <h4 class="font-semibold text-gray-700">Categories</h4>
          <span class="text-xs text-gray-500">${categories.length} total</span>
        </div>
        <div class="max-h-48 overflow-y-auto pr-2 space-y-2" id="categoriesScroll">
          ${categories.slice(0, 10).map(function(category) {
            var slug = category.slug || category.name.toLowerCase().replace(/\s+/g, '-');
            var isChecked = selectedCategories.includes(slug);
            return `
            <label class="flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded cursor-pointer">
              <input type="checkbox" name="category" value="${slug}" ${isChecked ? 'checked' : ''} 
                     class="rounded border-gray-300 text-brand focus:ring-brand">
              <span class="text-sm">${category.name}</span>
            </label>`;
          }).join('')}
          ${categories.length > 10 ? `
          <div class="text-center pt-2">
            <span class="text-xs text-gray-500">Scroll for more categories</span>
          </div>
          ` : ''}
        </div>
      </div>`;
    
    // Generate brand checkboxes (show 5 initially with scroll)
    var brandHtml = `
      <div class="mb-6">
        <div class="flex items-center justify-between mb-3">
          <h4 class="font-semibold text-gray-700">Brands</h4>
          <span class="text-xs text-gray-500">${brands.length} total</span>
        </div>
        <div class="max-h-48 overflow-y-auto pr-2 space-y-2" id="brandsScroll">
          ${brands.slice(0, 10).map(function(brand) {
            var slug = brand.toLowerCase().replace(/\s+/g, '-');
            var isChecked = selectedBrands.includes(slug);
            return `
            <label class="flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded cursor-pointer">
              <input type="checkbox" name="brand" value="${slug}" ${isChecked ? 'checked' : ''} 
                     class="rounded border-gray-300 text-brand focus:ring-brand">
              <span class="text-sm">${brand}</span>
            </label>`;
          }).join('')}
          ${brands.length > 10 ? `
          <div class="text-center pt-2">
            <span class="text-xs text-gray-500">Scroll for more brands</span>
          </div>
          ` : ''}
        </div>
      </div>`;
    
    // Generate tags checkboxes
    var tagsHtml = tags.length > 0 ? `
      <div class="mb-6">
        <div class="flex items-center justify-between mb-3">
          <h4 class="font-semibold text-gray-700">Tags</h4>
          <span class="text-xs text-gray-500">${tags.length} total</span>
        </div>
        <div class="flex flex-wrap gap-2">
          ${tags.map(function(tag) {
            var slug = tag.toLowerCase().replace(/\s+/g, '-');
            var isChecked = selectedTags.includes(slug);
            return `
            <label class="inline-flex items-center">
              <input type="checkbox" name="tag" value="${slug}" ${isChecked ? 'checked' : ''} 
                     class="hidden">
              <span class="px-3 py-1.5 rounded-full text-xs ${isChecked ? 'bg-brand text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} cursor-pointer transition-colors">
                ${tag}
              </span>
            </label>`;
          }).join('')}
        </div>
      </div>
    ` : '';
    
    // Generate attributes checkboxes
    var attributesHtml = attributes.length > 0 ? `
      <div class="mb-6">
        <div class="flex items-center justify-between mb-3">
          <h4 class="font-semibold text-gray-700">Attributes</h4>
          <span class="text-xs text-gray-500">${attributes.length} total</span>
        </div>
        <div class="flex flex-wrap gap-2">
          ${attributes.map(function(attr) {
            var slug = attr.toLowerCase().replace(/\s+/g, '-');
            var isChecked = selectedAttributes.includes(slug);
            return `
            <label class="inline-flex items-center">
              <input type="checkbox" name="attribute" value="${slug}" ${isChecked ? 'checked' : ''} 
                     class="hidden">
              <span class="px-3 py-1.5 rounded-full text-xs ${isChecked ? 'bg-brand text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} cursor-pointer transition-colors">
                ${attr}
              </span>
            </label>`;
          }).join('')}
        </div>
      </div>
    ` : '';
    
    // Price range
    var priceHtml = `
      <div class="mb-6">
        <h4 class="font-semibold text-gray-700 mb-3">Price Range</h4>
        <div class="space-y-4">
          <div class="flex items-center justify-between gap-4">
            <div class="flex-1">
              <label class="block text-xs text-gray-500 mb-1">Min Price ($)</label>
              <input type="number" id="filterMinPrice" min="0" max="${maxProductPrice}" 
                     value="${minPrice || minProductPrice}" 
                     class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
            </div>
            <div class="flex-1">
              <label class="block text-xs text-gray-500 mb-1">Max Price ($)</label>
              <input type="number" id="filterMaxPrice" min="0" max="${maxProductPrice}" 
                     value="${maxPrice || maxProductPrice}" 
                     class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
            </div>
          </div>
          <div class="pt-2">
            <input type="range" id="priceRange" min="${minProductPrice}" max="${maxProductPrice}" 
                   value="${maxPrice || maxProductPrice}" step="10"
                   class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
          </div>
        </div>
      </div>`;
    
    // Rating filter
    var ratingHtml = `
      <div class="mb-6">
        <h4 class="font-semibold text-gray-700 mb-3">Minimum Rating</h4>
        <div class="flex items-center flex-wrap gap-2">
          ${[4, 3, 2, 1].map(function(rating) {
            var isSelected = currentQuery.minRating === rating.toString();
            return `
            <button type="button" data-rating="${rating}" 
                    class="flex items-center gap-1 px-3 py-1.5 rounded-lg ${isSelected ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors">
              ${svg('star', 'w-4 h-4 text-yellow-400')}
              <span class="text-sm">${rating}+</span>
            </button>`;
          }).join('')}
          <button type="button" data-rating="0" 
                  class="px-3 py-1.5 text-sm rounded-lg ${!currentQuery.minRating ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors">
            Any
          </button>
        </div>
      </div>`;
    
    // Stock status
    var stockHtml = `
      <div class="mb-6">
        <h4 class="font-semibold text-gray-700 mb-3">Stock Status</h4>
        <div class="flex flex-wrap gap-2">
          <label class="inline-flex items-center">
            <input type="checkbox" name="stock" value="in-stock" ${currentQuery.stock === 'in-stock' ? 'checked' : ''} 
                   class="hidden">
            <span class="px-3 py-1.5 rounded-full text-xs ${currentQuery.stock === 'in-stock' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} cursor-pointer transition-colors">
              In Stock
            </span>
          </label>
          <label class="inline-flex items-center">
            <input type="checkbox" name="stock" value="out-of-stock" ${currentQuery.stock === 'out-of-stock' ? 'checked' : ''} 
                   class="hidden">
            <span class="px-3 py-1.5 rounded-full text-xs ${currentQuery.stock === 'out-of-stock' ? 'bg-red-100 text-red-700 border border-red-300' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} cursor-pointer transition-colors">
              Out of Stock
            </span>
          </label>
        </div>
      </div>`;
    
    return categoryHtml + brandHtml + priceHtml + ratingHtml + stockHtml + tagsHtml + attributesHtml;
  }
  
  function openFilterPanel() {
    $('#filterOverlay').removeClass('hidden');
    $('#filterPanel').removeClass('-translate-x-full');
    state.filterPanelOpen = true;
    // Update filter content
    $('#filterContent').html(buildFilterPanel());
  }
  
  function closeFilterPanel() {
    $('#filterOverlay').addClass('hidden');
    $('#filterPanel').addClass('-translate-x-full');
    state.filterPanelOpen = false;
  }
  
  function applyFilters() {
    var selectedCategories = [];
    $('#filterContent input[name="category"]:checked').each(function() {
      selectedCategories.push($(this).val());
    });
    
    var selectedTags = [];
    $('#filterContent input[name="tag"]:checked').each(function() {
      selectedTags.push($(this).val());
    });
    
    var selectedAttributes = [];
    $('#filterContent input[name="attribute"]:checked').each(function() {
      selectedAttributes.push($(this).val());
    });
    
    var selectedBrands = [];
    $('#filterContent input[name="brand"]:checked').each(function() {
      selectedBrands.push($(this).val());
    });
    
    var minPrice = $('#filterMinPrice').val() || '';
    var maxPrice = $('#filterMaxPrice').val() || '';
    var minRating = $('#filterContent [data-rating].bg-yellow-100').attr('data-rating') || '';
    var stockStatus = $('#filterContent input[name="stock"]:checked').val() || '';
    
    // Build query object
    var query = {};
    if (selectedCategories.length > 0) query.cat = selectedCategories.join(',');
    if (selectedTags.length > 0) query.tags = selectedTags.join(',');
    if (selectedAttributes.length > 0) query.attrs = selectedAttributes.join(',');
    if (selectedBrands.length > 0) query.brands = selectedBrands.join(',');
    if (minPrice) query.min = minPrice;
    if (maxPrice) query.max = maxPrice;
    if (minRating) query.minRating = minRating;
    if (stockStatus) query.stock = stockStatus;
    
    // Convert to query string
    var qs = Object.keys(query).filter(function(k) { 
      return query[k] !== '' && query[k] !== undefined; 
    }).map(function(k) { 
      return k + '=' + encodeURIComponent(query[k]); 
    }).join('&');
    
    closeFilterPanel();
    location.hash = 'products' + (qs ? '?' + qs : '');
  }
  
  function clearFilters() {
    $('#filterContent input[type="checkbox"]').prop('checked', false);
    $('#filterContent input[type="number"]').val('');
    $('#filterContent [data-rating]').removeClass('bg-yellow-100 text-yellow-700 border border-yellow-300').addClass('bg-gray-100 text-gray-700 hover:bg-gray-200');
    $('#filterContent [data-rating="0"]').removeClass('bg-gray-100 text-gray-700').addClass('bg-gray-200 text-gray-800');
  }
  
  function initSlider($root, isCategorySlider = false) {
    // ... (keep the existing initSlider function as is) ...
    var $viewport = $root.find('.overflow-hidden');
    var $track = $root.find('[data-slider-track]');
    var $slides = $track.children();
    var visible = parseInt($root.attr('data-visible') || '1', 10);
    
    if ($slides.length <= visible) {
      $root.find('[data-slider-dots]').hide();
      return;
    }
    
    if (isCategorySlider) {
      // Simple slider for categories - no infinite loop
      var count = $slides.length;
      var index = 0;
      var pages = Math.max(1, Math.ceil(count / visible));
      var $dots = $root.find('[data-slider-dots]');
      
      $dots.html(new Array(pages).fill(0).map(function(_, i) {
        return '<button data-dot="' + i + '" class="w-2 h-2 rounded-full bg-gray-400 ' + (i === 0 ? 'opacity-100' : 'opacity-40') + '"></button>';
      }).join(''));
      
      function applyTransform() {
        var w = $viewport.innerWidth() / visible;
        $track.css('transform', 'translateX(-' + (index * w) + 'px)');
      }
      
      function goTo(i) {
        index = Math.max(0, Math.min(count - visible, i));
        $track.css('transition', 'transform 400ms ease-out');
        applyTransform();
        updateDots();
      }
      
      function updateDots() {
        var page = Math.floor(index / visible);
        $dots.children().each(function(d) {
          $(this).toggleClass('opacity-100', d === page).toggleClass('opacity-40', d !== page);
        });
      }
      
      $dots.on('click', '[data-dot]', function() {
        var page = parseInt($(this).attr('data-dot'), 10);
        goTo(page * visible);
      });
      
      var dragging = false;
      var startX = 0;
      var baseX = 0;
      
      function viewportWidth() {
        return $viewport.innerWidth() / visible;
      }
      
      $viewport.on('pointerdown', function(e) {
        e.preventDefault();
        dragging = true;
        startX = e.clientX || e.touches[0].clientX;
        $track.css('transition', 'none');
        var w = viewportWidth();
        baseX = -index * w;
        try {
          $viewport.get(0).setPointerCapture(e.pointerId);
        } catch (_) {}
      });
      
      $viewport.on('pointermove touchmove', function(e) {
        if (!dragging) return;
        var clientX = e.clientX || (e.touches && e.touches[0].clientX);
        if (!clientX) return;
        var dx = clientX - startX;
        $track.css('transform', 'translateX(' + (baseX + dx) + 'px)');
      });
      
      function endDrag(e) {
        if (!dragging) return;
        dragging = false;
        var clientX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
        if (!clientX) return;
        var dx = clientX - startX;
        var w = viewportWidth();
        
        if (dx < -w * 0.3 && index < count - visible) {
          goTo(index + visible);
        } else if (dx > w * 0.3 && index > 0) {
          goTo(index - visible);
        } else {
          $track.css('transition', 'transform 300ms ease');
          applyTransform();
        }
        
        try {
          $viewport.get(0).releasePointerCapture(e.pointerId);
        } catch (_) {}
      }
      
      $viewport.on('pointerup touchend', endDrag);
      $viewport.on('pointercancel touchcancel', endDrag);
      
      $(window).on('resize', function() {
        $track.css('transition', 'none');
        applyTransform();
      });
      
      applyTransform();
      updateDots();
      
    } else {
      // Original infinite loop slider for other sections
      var firstClones = $slides.slice(0, visible).clone();
      var lastClones = $slides.slice($slides.length - visible).clone();
      $track.prepend(lastClones);
      $track.append(firstClones);
      $slides = $track.children();
      
      var count = $slides.length;
      var realCount = count - (visible * 2);
      var index = visible;
      var pages = Math.max(1, Math.ceil(realCount / visible));
      var $dots = $root.find('[data-slider-dots]');
      
      $dots.html(new Array(pages).fill(0).map(function(_, i) {
        return '<button data-dot="' + i + '" class="w-2 h-2 rounded-full bg-gray-400 ' + (i === 0 ? 'opacity-100' : 'opacity-40') + '"></button>';
      }).join(''));
      
      function currentPage() {
        var t = index - visible;
        if (t < 0) t += realCount;
        return Math.floor(t / visible);
      }
      
      function updateDots() {
        var page = currentPage();
        $dots.children().each(function(d) {
          $(this).toggleClass('opacity-100', d === page).toggleClass('opacity-40', d !== page);
        });
      }
      
      function applyTransform() {
        var w = $viewport.innerWidth() / visible;
        $track.css('transform', 'translateX(-' + (index * w) + 'px)');
      }
      
      function goTo(i) {
        index = Math.max(0, Math.min(count - 1, i));
        $track.css('transition', 'transform 400ms ease-out');
        applyTransform();
        updateDots();
      }
      
      $track.on('transitionend', function() {
        if (index >= visible + realCount) {
          index = index - realCount;
          $track.css('transition', 'none');
          applyTransform();
          updateDots();
        } else if (index < visible) {
          index = index + realCount;
          $track.css('transition', 'none');
          applyTransform();
          updateDots();
        }
      });
      
      $dots.on('click', '[data-dot]', function() {
        var page = parseInt($(this).attr('data-dot'), 10);
        goTo(visible + (page * visible));
      });
      
      var dragging = false;
      var startX = 0;
      var baseX = 0;
      
      function viewportWidth() {
        return $viewport.innerWidth() / visible;
      }
      
      $viewport.on('pointerdown', function(e) {
        e.preventDefault();
        dragging = true;
        startX = e.clientX || e.touches[0].clientX;
        $track.css('transition', 'none');
        var w = viewportWidth();
        baseX = -index * w;
        try {
          $viewport.get(0).setPointerCapture(e.pointerId);
        } catch (_) {}
      });
      
      $viewport.on('pointermove touchmove', function(e) {
        if (!dragging) return;
        var clientX = e.clientX || (e.touches && e.touches[0].clientX);
        if (!clientX) return;
        var dx = clientX - startX;
        $track.css('transform', 'translateX(' + (baseX + dx) + 'px)');
      });
      
      function endDrag(e) {
        if (!dragging) return;
        dragging = false;
        var clientX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
        if (!clientX) return;
        var dx = clientX - startX;
        var w = viewportWidth();
        
        if (dx < -w * 0.3) {
          goTo(index + visible);
        } else if (dx > w * 0.3) {
          goTo(index - visible);
        } else {
          $track.css('transition', 'transform 300ms ease');
          applyTransform();
        }
        
        try {
          $viewport.get(0).releasePointerCapture(e.pointerId);
        } catch (_) {}
      }
      
      $viewport.on('pointerup touchend', endDrag);
      $viewport.on('pointercancel touchcancel', endDrag);
      
      $(window).on('resize', function() {
        $track.css('transition', 'none');
        applyTransform();
      });
      
      applyTransform();
      updateDots();
    }
  }
  
  function toast(type, msg) {
    var el = $('#toast');
    var cls = type === 'success' ? 'bg-success text-white' : 'bg-error text-white';
    el.attr('class', 'fixed bottom-24 left-1/2 -translate-x-1/2 rounded-xl px-4 py-2 shadow ' + cls);
    el.text(msg);
    el.removeClass('hidden');
    setTimeout(function() {
      el.addClass('hidden');
    }, AppConfig.ui.toastDuration);
  }
  
  function modal(html) {
    $('#modalBody').html(html);
    $('#modal').removeClass('hidden').addClass('flex');
  }
  
  function closeModal() {
    $('#modal').addClass('hidden').removeClass('flex');
  }
  function gotoProfile(){
    location.hash='profile';
    try { route(); } catch(_) {}
  }
  
  function route() {
    var hash = location.hash.replace('#', '');
    if (!hash) hash = 'home';
    var q = {};
    if (hash.indexOf('?') > -1) {
      var parts = hash.split('?');
      hash = parts[0];
      parts[1].split('&').forEach(function(p) {
        var kv = p.split('=');
        q[kv[0]] = decodeURIComponent(kv[1] || '');
      });
    }
    state.route = hash;
    state.query = q;
    var tkn=null;try{var t1=localStorage.getItem('X-Auth-Token');var t=t1||localStorage.getItem(AppConfig.storage.tokenKey);if(t){try{tkn=JSON.parse(t)}catch(_){tkn=t}}}catch(e){}
    if (state.route === 'profile' && !tkn) {
      state.route = 'login';
    }
    if (state.route === 'profile' && tkn) {
      API.authProfile()
        .done(function(res){
          var u = (res && res.data) || res || {};
          state.user = {
            id: u.id,
            username: u.username,
            email: u.email,
            display_name: u.display_name || (u.first_name && u.last_name ? (u.first_name + ' ' + u.last_name) : (u.username || '')),
            first_name: u.first_name,
            last_name: u.last_name
          };
          render();
        });
      API.orders()
        .done(function(res){
          var items = (res && res.data && res.data.orders) || (res && res.orders) || (Array.isArray(res) ? res : []);
          state.ordersCount = Array.isArray(items) ? items.length : (res && typeof res.count==='number' ? res.count : 0);
          render();
        });
      API.reviewsUser()
        .done(function(res){
          var items = (res && res.data && res.data.reviews) || (res && res.reviews) || (Array.isArray(res) ? res : []);
          state.reviewsCount = Array.isArray(items) ? items.length : (res && typeof res.count==='number' ? res.count : 0);
          render();
        });
      API.addresses()
        .done(function(res){
          var items = (res && res.data && res.data.addresses) || (res && res.addresses) || (Array.isArray(res) ? res : []);
          state.addressesCount = Array.isArray(items) ? items.length : (res && typeof res.count==='number' ? res.count : 0);
          render();
        });
      API.getWishlist()
        .done(function(res){
          var raw = (res && res.wishlist) || (res && res.data && res.data.wishlist) || [];
          var ids = Array.isArray(raw) ? raw.map(function(x){ return typeof x==='object' ? (x.id||x.product_id) : parseInt(x,10); }).filter(function(x){ return !isNaN(x); }) : [];
          state.serverWishlistIds = ids;
          render();
        });
      state.vouchersCount = state.vouchersCount || 3;
      state.notificationsCount = state.notificationsCount || 5;
    }
    if (state.route === 'product') {
      state.productQty = 1;
      state.productImageIndex = 0;
      var pid = parseInt(state.query.id || '0', 10);
      if (pid) fetchRelatedProducts(pid);
    }
    if (state.route === 'cart') {
      fetchCartRelatedProducts();
      API.cart()
        .done(function(res){
          var items = (res && res.items) || (res && res.data && res.data.items) || [];
          state.cartServer = { items: items };
          var count = Array.isArray(items) ? items.reduce(function(s,i){ return s + (parseInt(i.quantity,10)||0); }, 0) : 0;
          state.cartCount = count;
          render();
        })
        .fail(function(){ state.cartServer = { items: [] }; state.cartCount = 0; render(); });
    }
    if (state.route === 'orders') {
      API.orders()
        .done(function(res){
          var items = (res && res.data && res.data.orders) || (res && res.orders) || (Array.isArray(res) ? res : []);
          state.ordersList = Array.isArray(items) ? items : [];
          render();
        })
        .fail(function(){ state.ordersList = []; render(); });
    }
    if (state.route === 'chat') {
      if (!Array.isArray(state.chatThreads) || !state.chatThreads.length) {
        state.chatThreads=[
          {id:1,name:'Sara Turqi',role:'sellers',verified:true,online:true,grad:['from-pink-400','to-orange-400'],last:{text:'Thank you for your order! Your bag will be ...',time:'10:30 AM',unread:2}},
          {id:2,name:'Beauty Zone Store',role:'sellers',online:false,grad:['from-blue-400','to-indigo-400'],last:{text:'Hi! Is this item still available?',time:'Yesterday',unread:0}},
          {id:3,name:'Customer Support',role:'support',online:false,grad:['from-green-400','to-emerald-400'],last:{text:'Your ticket has been resolved. Thank you!',time:'2 days ago',unread:0}},
          {id:4,name:"Maria's Fashion",role:'sellers',online:false,grad:['from-red-400','to-rose-400'],last:{text:'📷 Photo',time:'3 days ago',unread:1}}
        ];
      }
      state.chatTab=state.chatTab||'All';
      render();
    }
    if (state.route === 'chatSingle') {
      var tid=parseInt(state.query.id||'0',10);
      state.chatMessages=state.chatMessages||{};
      if (!Array.isArray(state.chatMessages[tid])) {
        state.chatMessages[tid]=[
          {from:'other',text:"Absolutely! 🧧 Once you complete the order, we'll ship it today and you'll receive it within 2-3 business days.",time:'9:37 AM'},
          {from:'me',text:'Great! Just placed the order 🎉',time:'9:40 AM'},
          {from:'other',text:"Thank you for your order! Your bag will be shipped today 🎉 You'll receive a tracking number shortly!",time:'10:30 AM'},
          {from:'me',text:'Hello! I saw your live stream yesterday. The bag looked amazing!',time:'9:32 AM'}
        ];
      }
      render();
    }
    if (state.route === 'addresses') {
      API.addresses()
        .done(function(res){
          var raw = (res && res.data) || res || {};
          var arr = (raw && raw.addresses && Array.isArray(raw.addresses)) ? raw.addresses : (Array.isArray(res) ? res : []);
          var hasObj = raw && (raw.billing || raw.shipping);
          if (hasObj) {
            state.addressesData = {
              billing: raw.billing || {},
              shipping: raw.shipping || {},
              default_billing: raw.default_billing || '',
              default_shipping: raw.default_shipping || ''
            };
            state.addressesList = [];
            state.addressesCount = ((raw.billing && Object.keys(raw.billing).length) ? 1 : 0) + ((raw.shipping && Object.keys(raw.shipping).length) ? 1 : 0);
          } else {
            var b = (arr.find(function(x){ return (x.type||'').toLowerCase()==='billing'; }) || {});
            var s = (arr.find(function(x){ return (x.type||'').toLowerCase()==='shipping'; }) || {});
            state.addressesData = {
              billing: b,
              shipping: s,
              default_billing: b && b.is_default ? 'billing' : '',
              default_shipping: s && s.is_default ? 'shipping' : ''
            };
            state.addressesList = Array.isArray(arr) ? arr : [];
            state.addressesCount = Array.isArray(arr) ? arr.length : 0;
          }
          render();
        })
        .fail(function(){ state.addressesData = { billing:{}, shipping:{}, default_billing:'', default_shipping:'' }; state.addressesList = []; render(); });
    }
    if (state.route === 'wishlist') {
      API.getWishlist()
        .done(function(res){
          state.serverWishlist = res || {};
          render();
        })
        .fail(function(){ state.serverWishlist = { wishlist: [] }; render(); });
    }
    if (state.route === 'reviews') {
      API.reviewsUser()
        .done(function(res){
          var items = (res && res.data && res.data.reviews) || (res && res.reviews) || (Array.isArray(res) ? res : []);
          state.reviewsList = Array.isArray(items) ? items : [];
          render();
        })
        .fail(function(){ state.reviewsList = []; render(); });
    }
    render();
  }
  
  function loadDataFromAPI() {
    state.loading = true;
    API.getProducts({ per_page: state.productsPager.perPage, page: 1 })
      .done(function(res) {
        var items = [];
        if (res && res.data && res.data.products) { items = res.data.products; }
        else if (res && res.products) { items = res.products; }
        else if (Array.isArray(res)) { items = res; }
        else if (res && Array.isArray(res.data)) { items = res.data; }
        
        var all = items.map(formatProductData);
        state.data.allProducts = all;
        state.productsPager.page = 1;
        state.productsPager.hasMore = items.length >= state.productsPager.perPage;
        
        // Extract tags
        var tagSet = {};
        all.forEach(function(p){ 
          (p.tags||[]).forEach(function(t){ 
            if(t) tagSet[t]=true; 
          }); 
        });
        state.tags = Object.keys(tagSet);
        
        // Extract attributes
        var attrSet = {};
        all.forEach(function(p){ 
          (p.attributes||[]).forEach(function(a){ 
            if(a.name) attrSet[a.name]=true; 
          }); 
        });
        state.attributes = Object.keys(attrSet);
        
        // Extract brands from products
        var brandSet = {};
        all.forEach(function(p){ 
          if(p.brand) brandSet[p.brand]=true; 
        });
        // Merge with existing brands
        Object.keys(brandSet).forEach(function(brand) {
          if(state.brands.indexOf(brand) === -1) {
            state.brands.push(brand);
          }
        });
        
        state.data.flashSale = all.filter(function(p){return p.discount && p.discount.includes('OFF')}).slice(0,20);
        state.data.featuredProducts = all.filter(function(p){return p.featured || p.rating >= 4.5}).slice(0,20);
        state.data.specialOffers = all.filter(function(p){return p.discount && parseInt(p.discount) >= 30}).slice(0,6);
        state.loading = false;
        if (state.route === 'home' || state.route === 'products') render();
      })
      .fail(function(xhr, status, error) {
        console.error('Failed to load products:', error);
        state.loading = false;
        state.data.allProducts = [];
        state.data.flashSale = [];
        state.data.featuredProducts = [];
        state.data.specialOffers = [];
        render();
      });
    
    API.getCategories()
      .done(function(res){
        var items=[];
        if(Array.isArray(res)) items=res;
        else if(res && Array.isArray(res.data)) items=res.data;
        else if(res && res.data && Array.isArray(res.data.categories)) items=res.data.categories;
        else if(res && Array.isArray(res.categories)) items=res.categories;
        var cats=items.map(function(c){
          var name=c.name||c.title||c.category_name||'';
          var slug=c.slug|| (name? name.toLowerCase().replace(/\s+/g,'-'): '');
          return {name:name,slug:slug};
        }).filter(function(c){return c.name});
        state.categories=cats;
        window.categories=cats;
        if (state.route === 'home' || state.route === 'products') render();
      })
      .fail(function(){
        state.categories=[];
        window.categories=[];
      });
    
    function dedupeAppend(existing, incoming){
      var map = {}; existing.forEach(function(p){ map[p.id]=true; });
      incoming.forEach(function(p){ if(!map[p.id]) existing.push(p); });
      return existing;
    }
    
    window.loadMoreProducts = function(){
      if(state.productsPager.loadingMore || !state.productsPager.hasMore || state.route!=='products') return;
      state.productsPager.loadingMore = true;
      API.getProducts({ per_page: state.productsPager.perPage, page: state.productsPager.page + 1 })
        .done(function(res){
          var items=[];
          if (res && res.data && res.data.products) { items = res.data.products; }
          else if (res && res.products) { items = res.products; }
          else if (Array.isArray(res)) { items = res; }
          else if (res && Array.isArray(res.data)) { items = res.data; }
          var more = items.map(formatProductData);
          state.data.allProducts = dedupeAppend(state.data.allProducts || [], more);
          state.productsPager.page += 1;
          state.productsPager.hasMore = items.length >= state.productsPager.perPage;
          state.productsPager.loadingMore = false;
          if (state.route === 'products') render();
        })
        .fail(function(){
          state.productsPager.loadingMore = false;
          state.productsPager.hasMore = false;
        });
    };
  }
  
  function fetchRelatedProducts(id){
    var p = (state.data.allProducts || []).find(function(x){ return x.id === id; });
    if (!p) { state.relatedProducts[id] = []; return; }
    var names = (p.categories || '').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
    var slugs = names.map(function(n){
      var m = (state.categories || []).find(function(c){ return (c.name||'').toLowerCase() === n.toLowerCase(); });
      return m ? m.slug : n.toLowerCase().replace(/\s+/g,'-');
    }).filter(Boolean);
    var slug = slugs[0] || '';
    if (!slug) { state.relatedProducts[id] = []; return; }
    if (state.relatedLoading[id]) return;
    state.relatedLoading[id] = true;
    API.getProductsByCategory(slug, { per_page: 20 })
      .done(function(res){
        var items = [];
        if (res && res.data && res.data.products) { items = res.data.products; }
        else if (res && res.products) { items = res.products; }
        else if (Array.isArray(res)) { items = res; }
        else if (res && Array.isArray(res.data)) { items = res.data; }
        var list = items.map(formatProductData).filter(function(x){ return x.id !== id; });
        var map = {}; var dedup = [];
        list.forEach(function(x){ if(!map[x.id]){ map[x.id]=true; dedup.push(x); } });
        state.relatedProducts[id] = dedup.slice(0,20);
      })
      .fail(function(){
        state.relatedProducts[id] = [];
      })
      .always(function(){
        state.relatedLoading[id] = false;
        if (state.route === 'product' && parseInt(state.query.id || '0', 10) === id) render();
      });
  }
  
  function fetchCartRelatedProducts(){
    var all = state.data.allProducts || [];
    var ids = state.cart.slice(0);
    if (!ids.length) { state.cartRelatedProducts = []; return; }
    var first = all.find(function(p){ return p && ids.indexOf(p.id) > -1; });
    if (!first) { state.cartRelatedProducts = []; return; }
    var names = (first.categories || '').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
    var slugs = names.map(function(n){
      var m = (state.categories || []).find(function(c){ return (c.name||'').toLowerCase() === n.toLowerCase(); });
      return m ? m.slug : n.toLowerCase().replace(/\s+/g,'-');
    }).filter(Boolean);
    var slug = slugs[0] || '';
    if (!slug) { state.cartRelatedProducts = []; return; }
    if (state.cartRelatedLoading) return;
    state.cartRelatedLoading = true;
    API.getProductsByCategory(slug, { per_page: 20 })
      .done(function(res){
        var items = [];
        if (res && res.data && res.data.products) { items = res.data.products; }
        else if (res && res.products) { items = res.products; }
        else if (Array.isArray(res)) { items = res; }
        else if (res && Array.isArray(res.data)) { items = res.data; }
        var list = items.map(formatProductData).filter(function(x){ return ids.indexOf(x.id) === -1; });
        var map = {}; var dedup = [];
        list.forEach(function(x){ if(!map[x.id]){ map[x.id]=true; dedup.push(x); } });
        state.cartRelatedProducts = dedup.slice(0,20);
      })
      .fail(function(){
        state.cartRelatedProducts = [];
      })
      .always(function(){
        state.cartRelatedLoading = false;
        if (state.route === 'cart') render();
      });
  }
  
  function productCard(p) {
    var wl = (state.serverWishlistIds || []).some(function(x){ return x === p.id; }) || state.wishlist.some(function(x) { return x === p.id; });
    var stockBadge = '';
    
    if (!p.inStock) {
      stockBadge = '<span class="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded bg-gray-500 text-white">Out of Stock</span>';
    } else if (p.stock < 10 && p.stock > 0) {
      stockBadge = '<span class="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded bg-orange-500 text-white">Low Stock</span>';
    }
    
    return `
      <div class="rounded-xl border border-gray-200 overflow-hidden bg-white flex flex-col gap-2 h-full hover:shadow-md transition-shadow">
        <a href="#product?id=${p.id}" class="block relative">
          <img src="${p.img}" alt="${p.title}" class="w-full h-40 sm:h-48 object-cover" loading="lazy"/>
          ${p.discount ? `<span class="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded bg-red-500 text-white">${p.discount}</span>` : ''}
          ${p.featured ? `<span class="absolute top-10 left-2 text-[10px] px-2 py-0.5 rounded bg-purple-500 text-white flex items-center gap-1">${svg('award', 'w-3 h-3')} Featured</span>` : ''}
          ${stockBadge}
          <button data-like="${p.id}" class="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors">
            ${svg('heart', 'w-5 h-5 ' + (wl ? 'text-red-500 fill-red-500' : 'text-gray-700'))}
          </button>
        </a>
        <div class="px-3 pb-3 pt-2 flex flex-col flex-1">
          <a href="#product?id=${p.id}" class="block">
            <div class="text-sm font-medium line-clamp-2 min-h-[2.5rem]">${p.title}</div>
            <div class="text-xs text-gray-500 mt-1 truncate">${p.categories}</div>
            ${p.brand ? `<div class="text-xs text-gray-400 mt-0.5">${p.brand}</div>` : ''}
            <div class="flex items-center justify-between mt-2">
              <div class="flex items-center gap-2">
                <span class="font-semibold text-base">${p.price}</span>
                ${p.originalPrice && p.price !== p.originalPrice ? 
                  `<span class="text-xs text-gray-400 line-through">${p.originalPrice}</span>` : ''}
              </div>
              <div class="flex items-center gap-1 text-xs text-gray-600">
                ${svg('star', 'w-4 h-4 text-yellow-400')}
                <span>${p.rating.toFixed(1) || '0.0'}</span>
              </div>
            </div>
          </a>
          <button data-add="${p.id}" 
                  class="mt-3 w-full px-4 py-2 rounded-lg bg-brand text-white hover:bg-brandDark transition-colors ${!p.inStock ? 'opacity-50 cursor-not-allowed' : ''}"
                  ${!p.inStock ? 'disabled' : ''}>
            ${p.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>`;
  }
  
  function specialOfferCard(p) {
    var wl = state.wishlist.some(function(x) { return x === p.id; });
    var discountPercentage = p.discount ? parseInt(p.discount) : 0;
    
    return `
      <div class="rounded-2xl border border-gray-200 overflow-hidden bg-white flex flex-col h-full hover:shadow-lg transition-all duration-300">
        <a href="#product?id=${p.id}" class="block relative">
          <img src="${p.img}" alt="${p.title}" class="w-full h-48 object-cover" loading="lazy"/>
          <div class="absolute top-3 left-3">
            <div class="px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
              ${discountPercentage}% OFF
            </div>
          </div>
          <div class="absolute top-3 right-3">
            <button data-like="${p.id}" class="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-md">
              ${svg('heart', 'w-5 h-5 ' + (wl ? 'text-red-500 fill-red-500' : 'text-gray-700'))}
            </button>
          </div>
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div class="text-white font-semibold text-sm line-clamp-1">${p.title}</div>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-white text-lg font-bold">${p.price}</span>
              <span class="text-white/80 text-sm line-through">${p.originalPrice}</span>
            </div>
          </div>
        </a>
        <div class="p-4 flex-1">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-1 text-xs text-gray-600">
              ${svg('star', 'w-4 h-4 text-yellow-400')}
              <span>${p.rating.toFixed(1)}</span>
              <span class="text-gray-400 mx-1">•</span>
              <span class="${p.inStock ? 'text-green-600' : 'text-red-600'}">
                ${p.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            <div class="flex items-center gap-1 text-xs text-blue-600">
              ${svg('tag', 'w-3 h-3')}
              <span>Special</span>
            </div>
          </div>
          <button data-add="${p.id}" 
                  class="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:from-orange-600 hover:to-red-600 transition-all ${!p.inStock ? 'opacity-50 cursor-not-allowed' : ''}"
                  ${!p.inStock ? 'disabled' : ''}>
            ${p.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>`;
  }
  
  function skeletonCards(n){
    var items=new Array(n).fill(0).map(function(){
      return '<div class="rounded-xl border border-gray-200 bg-white p-2 animate-pulse">\
        <div class="w-full h-40 bg-gray-200 rounded"></div>\
        <div class="mt-2 h-3 bg-gray-200 rounded"></div>\
        <div class="mt-2 h-3 bg-gray-200 rounded w-2/3"></div>\
      </div>'
    }).join('');
    return '<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">'+items+'</div>'
  }
  
  function home() {
    var f20 = state.data.flashSale.slice(0, 20);
    var feat20 = state.data.featuredProducts.slice(0, 20);
    var specialOffers = state.data.specialOffers.slice(0, 6);
    var flashSlider = f20.length > 2 ? buildSlider('flashSaleSlider', buildCardItems(f20, 2), 2) : '';
    var featuredSlider = feat20.length > 2 ? buildSlider('featuredSlider', buildCardItems(feat20, 2), 2) : '';
    var specialOffersSlider = specialOffers.length > 0 ? buildSlider('specialOffersSlider', buildCardItems(specialOffers, 2, true), 1) : '';
    return `
      <div class="min-h-screen">
        ${heroBanner()}
        ${categoryChips()}
        ${state.loading ? `
          <section class="px-4 py-4">${skeletonCards(8)}</section>
        ` : ''}
        ${!state.loading && f20.length > 2 ? `
        <section class="py-4">
          ${flashSaleHeader()}
          ${flashSlider}
        </section>
        ` : ''}
        ${!state.loading && feat20.length > 2 ? `
        <section class="py-4">
          ${featuredProductsHeader()}
          ${featuredSlider}
        </section>
        ` : ''}
        ${!state.loading && specialOffers.length > 0 ? `
        <section class="py-4">
          ${specialOffersHeader()}
          ${specialOffersSlider}
        </section>
        ` : ''}
        ${storiesSlider()}
        ${liveGrid()}
      </div>`;
  }
  
  function products() {
    var q = (state.query.q || '').toLowerCase();
    var filter = state.query.filter || '';
    var cat = (state.query.cat || '').toLowerCase();
    var min = parseFloat(state.query.min || '');
    var max = parseFloat(state.query.max || '');
    var tagsSel = (state.query.tags || '').split(',').filter(Boolean);
    var sort = state.query.sort || '';
    var attrsSel = (state.query.attrs || '').split(',').filter(Boolean);
    var brandsSel = (state.query.brands || '').split(',').filter(Boolean);
    var minRating = parseFloat(state.query.minRating || '0');
    var stockFilter = state.query.stock || '';
    var list = state.data.allProducts || [];
    
    // Apply filters
    if (q) {
      list = list.filter(function(p) {
        return p.title.toLowerCase().includes(q) || 
               (p.categories && p.categories.toLowerCase().includes(q)) ||
               (p.brand && p.brand.toLowerCase().includes(q));
      });
    } else if (filter === 'featured') {
      list = list.filter(function(p) {
        return p.featured;
      });
    } else if (filter === 'trending') {
      list = list.filter(function(p) {
        return p.rating >= 4.0;
      });
    } else if (filter === 'special') {
      list = list.filter(function(p) {
        return p.discount && parseInt(p.discount) >= 30;
      });
    }
    
    // Category filter
    if (cat && cat !== 'all') {
      var cats = cat.split(',');
      list = list.filter(function(p) {
        var productCats = (p.categories || '').toLowerCase();
        return cats.some(function(c) {
          return productCats.includes(c);
        });
      });
    }
    
    // Price filter
    if (!isNaN(min)) {
      list = list.filter(function(p){ 
        var n = parseFloat((p.price||'').replace('$',''))||0; 
        return n >= min; 
      });
    }
    if (!isNaN(max)) {
      list = list.filter(function(p){ 
        var n = parseFloat((p.price||'').replace('$',''))||0; 
        return n <= max; 
      });
    }
    
    // Tags filter
    if (tagsSel.length) {
      list = list.filter(function(p){ 
        var t = p.tags || []; 
        return tagsSel.every(function(x){ 
          var tagSlug = x.toLowerCase().replace(/\s+/g, '-');
          return t.some(function(tag) {
            return tag.toLowerCase().replace(/\s+/g, '-') === tagSlug;
          });
        }); 
      });
    }
    
    // Attributes filter
    if (attrsSel.length) {
      list = list.filter(function(p){ 
        var a = (p.attributes||[]).map(function(x){ 
          return x.name.toLowerCase().replace(/\s+/g, '-'); 
        }); 
        return attrsSel.every(function(x){ 
          return a.indexOf(x) > -1; 
        }); 
      });
    }
    
    // Brands filter
    if (brandsSel.length) {
      list = list.filter(function(p){ 
        if (!p.brand) return false;
        var brandSlug = p.brand.toLowerCase().replace(/\s+/g, '-');
        return brandsSel.includes(brandSlug);
      });
    }
    
    // Rating filter
    if (minRating > 0) {
      list = list.filter(function(p){ 
        return p.rating >= minRating; 
      });
    }
    
    // Stock filter
    if (stockFilter === 'in-stock') {
      list = list.filter(function(p){ 
        return p.inStock; 
      });
    } else if (stockFilter === 'out-of-stock') {
      list = list.filter(function(p){ 
        return !p.inStock; 
      });
    }
    
    // Sort
    if (sort) {
      if (sort === 'price-asc') list = list.slice().sort(function(a,b){return (parseFloat(a.price.replace('$',''))||0)-(parseFloat(b.price.replace('$',''))||0)});
      else if (sort === 'price-desc') list = list.slice().sort(function(a,b){return (parseFloat(b.price.replace('$',''))||0)-(parseFloat(a.price.replace('$',''))||0)});
      else if (sort === 'rating-desc') list = list.slice().sort(function(a,b){return (b.rating||0)-(a.rating||0)});
      else if (sort === 'rating-asc') list = list.slice().sort(function(a,b){return (a.rating||0)-(b.rating||0)});
    }
    
    if (state.loading) {
      return `
      <div class="px-4 py-3">${skeletonCards(8)}</div>`;
    }
    
    // Build active filters display
    var activeFilters = [];
    if (cat) activeFilters.push({ type: 'Category', value: cat });
    if (min || max) activeFilters.push({ type: 'Price', value: (min ? '$' + min : '') + (min && max ? ' - ' : '') + (max ? '$' + max : '') });
    if (tagsSel.length) activeFilters.push({ type: 'Tags', value: tagsSel.length + ' selected' });
    if (attrsSel.length) activeFilters.push({ type: 'Attributes', value: attrsSel.length + ' selected' });
    if (brandsSel.length) activeFilters.push({ type: 'Brands', value: brandsSel.length + ' selected' });
    if (minRating > 0) activeFilters.push({ type: 'Rating', value: minRating + '+ stars' });
    if (stockFilter) activeFilters.push({ type: 'Stock', value: stockFilter === 'in-stock' ? 'In Stock' : 'Out of Stock' });
    
    var activeFiltersHtml = activeFilters.length > 0 ? `
      <div class="px-4 py-2 bg-gray-50 border-b">
        <div class="flex items-center flex-wrap gap-2">
          <span class="text-sm text-gray-600">Active filters:</span>
          ${activeFilters.map(function(filter) {
            return `<span class="px-2 py-1 bg-white border border-gray-300 rounded text-xs">${filter.type}: ${filter.value}</span>`;
          }).join('')}
          ${activeFilters.length > 0 ? `
          <button id="clearAllFilters" class="ml-2 text-sm text-red-500 hover:text-red-700">
            Clear All
          </button>
          ` : ''}
        </div>
      </div>
    ` : '';
    
    if (!list.length) {
      return `
      <div class="px-4 py-6 text-center">
        <div class="text-sm text-gray-600 mb-2">Showing ${list.length} of ${(state.data.allProducts || []).length} products</div>
        <div class="text-gray-500 mb-4">No products found</div>
        <button id="clearAllFiltersBtn" class="px-4 py-2 rounded-xl bg-gray-200 text-gray-700 mr-2">Clear Filters</button>
        <a href="#home" class="px-4 py-2 rounded-xl bg-brand text-white">Continue Shopping</a>
      </div>`;
    }
    
    // Products page header with filter button
    var headerHtml = `
      <div class="px-4 py-3 border-b border-gray-200 bg-white sticky top-14 z-20">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button id="openFilterPanel" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
              ${svg('filter', 'w-5 h-5')}
              <span class="text-sm font-medium">Filters</span>
              ${activeFilters.length > 0 ? `<span class="w-5 h-5 rounded-full bg-brand text-white text-xs flex items-center justify-center">${activeFilters.length}</span>` : ''}
            </button>
            <div class="text-sm text-gray-600 hidden sm:block">Showing ${list.length} of ${(state.data.allProducts || []).length} products</div>
          </div>
          <div class="flex items-center gap-2">
            <select id="sortSelect" class="rounded-lg border border-gray-300 px-3 py-2 text-sm">
              <option value="">Sort By</option>
              <option value="price-asc" ${sort==='price-asc'?'selected':''}>Price: Low to High</option>
              <option value="price-desc" ${sort==='price-desc'?'selected':''}>Price: High to Low</option>
              <option value="rating-desc" ${sort==='rating-desc'?'selected':''}>Rating: High to Low</option>
              <option value="rating-asc" ${sort==='rating-asc'?'selected':''}>Rating: Low to High</option>
              <option value="name-asc" ${sort==='name-asc'?'selected':''}>Name: A-Z</option>
              <option value="name-desc" ${sort==='name-desc'?'selected':''}>Name: Z-A</option>
            </select>
          </div>
        </div>
      </div>
    `;
    
    return headerHtml + activeFiltersHtml + `
      <div class="px-4 py-3">
        ${q ? `<div class="mb-4 text-sm text-gray-600">Search results for: "${q}"</div>` : ''}
        ${filter ? `<div class="mb-4 text-sm text-gray-600 capitalize">${filter} products</div>` : ''}
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          ${list.map(p => productCard(p)).join('')}
        </div>
        ${state.productsPager.loadingMore ? `<div class="py-4">${skeletonCards(4)}</div>` : ''}
      </div>`;
  }
  
  // ... (rest of the functions remain the same: product(), cart(), profile(), wishlist(), orders(), chat(), render()) ...
  function product() {
    var id = parseInt(state.query.id || '0', 10);
    var p = (state.data.allProducts || []).find(function(x) { return x.id === id; });
    
    if (!p) {
      return `
      <div class="px-4 py-6 text-center">
        <div class="text-gray-500 mb-4">Product not found</div>
        <a href="#products" class="px-4 py-2 rounded-xl bg-brand text-white">Browse Products</a>
      </div>`;
    }
    
    var reviewsCount = p.reviewsCount || 0;
    var colors = (p.colors && p.colors.length ? p.colors : ['#000000','#ffffff','#3b82f6','#ef4444']);
    var sizes = (p.sizes && p.sizes.length ? p.sizes : ['Small','Medium','Large','X-Large']);
    var selectedColor = state.productColor || colors[0];
    var selectedSize = state.productSize || sizes[0];
    var qty = state.productQty || 1;
    var sku = p.sku || ('SKU' + String(p.id));
    var namesForSlugs = (p.categories || '').split(',').map(function(s){return s.trim();}).filter(Boolean);
    var slugsForProduct = namesForSlugs.map(function(n){ var m=(state.categories||[]).find(function(c){return (c.name||'').toLowerCase()===n.toLowerCase()}); return m?m.slug:n.toLowerCase().replace(/\s+/g,'-'); }).filter(Boolean);
    var firstSlug = slugsForProduct[0] || '';
    var related = (state.relatedProducts && state.relatedProducts[p.id]) || [];
    return `
    <div class="max-w-4xl mx-auto">
      <div class="px-4 py-2 text-sm text-gray-600">
        <a href="#home" class="hover:text-brand">Home</a>
        <span class="mx-1">/</span>
        <a href="#products" class="hover:text-brand">Products</a>
        <span class="mx-1">/</span>
        <span class="text-gray-800">${p.title}</span>
      </div>
      <div class="md:flex md:gap-6">
        <div class="md:w-1/2">
          <div class="sticky top-20">
            <div class="flex gap-3">
              <div class="hidden sm:flex flex-col gap-2">
                ${(p.images||[p.img]).slice(0,6).map(function(src,idx){
                  var active = (idx === (state.productImageIndex||0));
                  var cls = active ? 'ring-2 ring-brand' : 'ring-1 ring-gray-200';
                  return `<button data-p-img-index="${idx}" class="block rounded-xl overflow-hidden ${cls}"><img src="${src}" class="w-14 h-14 object-cover"/></button>`;
                }).join('')}
              </div>
              <div class="relative flex-1 h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-gray-200 bg-white">
                <img src="${(p.images||[p.img])[state.productImageIndex||0]}" alt="${p.title}" class="w-full h-full object-contain"/>
                <div class="absolute top-3 right-3 flex items-center gap-2">
                  <button data-like="${p.id}" class="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow">${svg('heart','w-5 h-5')}</button>
                  <button id="pdShare" class="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow">${svg('share','w-5 h-5')}</button>
                </div>
                ${p.discount ? `<span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-500 text-white text-xs">${p.discount}</span>` : ''}
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-4 py-3">
          <div class="text-xs text-gray-500 mb-2">Accessories</div>
          <h1 class="text-2xl font-bold mb-1">${p.title}</h1>
          <div class="flex items-center gap-2 mb-3">
            ${svg('star', 'w-5 h-5 text-yellow-400')}
            <span class="font-medium">${p.rating.toFixed(1)}</span>
            <span class="text-gray-500">(${reviewsCount} reviews)</span>
          </div>
          <div class="text-3xl font-bold mb-2">${p.price}</div>
          ${p.originalPrice && p.price !== p.originalPrice ? `<div class="text-gray-400 mb-3">MSRP: <span class="line-through">${p.originalPrice}</span></div>` : ''}
          <div class="mb-4">
            <button id="readMoreToggle" class="text-brand text-sm">Read More</button>
            <div id="readMoreText" class="text-sm text-gray-700 mt-2 hidden">${p.shortDescription || p.description || ''}</div>
          </div>
          <div class="mb-4">
            <div class="text-sm font-semibold mb-2">Features</div>
            <div class="flex items-center gap-2 text-sm text-green-600">
              <span>High-quality wireless headphones pro designed for optimal performance and durability.</span>
            </div>
          </div>
          <div class="mb-4">
            <div class="text-sm font-semibold mb-2">Size</div>
            <div class="flex flex-wrap gap-2">
              ${sizes.map(function(s){
                var active = s===selectedSize;
                return `<button data-size="${s}" class="px-3 py-1 rounded-lg border ${active?'border-brand text-brand':'border-gray-300 text-gray-700'}">${s}</button>`;
              }).join('')}
            </div>
          </div>
          <div class="mb-4">
            <div class="text-sm font-semibold mb-2">Color</div>
            <div class="flex items-center gap-3">
              ${colors.map(function(c){
                var active = c===selectedColor;
                var ring = active ? 'ring-2 ring-brand' : 'ring-1 ring-gray-300';
                return `<button data-color="${c}" class="w-7 h-7 rounded-full border ${ring}" style="background:${c}"></button>`;
              }).join('')}
            </div>
          </div>
          <div class="mb-4">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-sm font-semibold">Quantity</div>
                <div class="mt-2 flex items-center gap-2">
                  <button id="qtyMinus" class="w-8 h-8 rounded-full border flex items-center justify-center">−</button>
                  <span id="qtyVal" class="w-8 text-center">${qty}</span>
                  <button id="qtyPlus" class="w-8 h-8 rounded-full border flex items-center justify-center">+</button>
                </div>
              </div>
              <div class="text-right">
                <div class="text-green-600 text-sm">${p.inStock ? (p.stock>0? p.stock + ' in stock':'In Stock') : 'Out of Stock'}</div>
                <div class="text-sm text-gray-600">SKU: ${sku}</div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="text-sm font-semibold mb-2">Shipping Information</div>
            <div class="space-y-2 text-sm text-gray-700">
              <div class="flex items-center gap-2">${svg('tag','w-4 h-4 text-brand')}<span>Free shipping on orders over $50</span></div>
              <div class="flex items-center gap-2">${svg('tag','w-4 h-4 text-brand')}<span>Delivery in 2-3 business days</span></div>
              <div class="flex items-center gap-2">${svg('tag','w-4 h-4 text-brand')}<span>30-day money back guarantee</span></div>
            </div>
          </div>
          <div class="flex gap-3">
            <button id="pdBuyNow" data-id="${p.id}" class="flex-1 px-6 py-3 rounded-xl bg-success text-white hover:bg-green-600">Buy Now</button>
            <button id="pdAddToCart" data-id="${p.id}" class="flex-1 px-6 py-3 rounded-xl bg-brand text-white hover:bg-brandDark ${!p.inStock ? 'opacity-50 cursor-not-allowed' : ''}" ${!p.inStock ? 'disabled' : ''}>Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="mt-6 border-t">
        <div class="flex items-center gap-6 px-4 pt-3 text-sm">
          <button data-p-tab="desc" class="pb-2 border-b-2 border-brand text-brand">Description</button>
          <button data-p-tab="reviews" class="pb-2 border-b-2 border-transparent text-gray-700">Reviews (${reviewsCount})</button>
          <button data-p-tab="shipping" class="pb-2 border-b-2 border-transparent text-gray-700">Shipping</button>
        </div>
        <div id="pTab_desc" class="px-4 py-3">
          <div class="text-gray-700">${p.description || 'No description available.'}</div>
          <div class="mt-4">
            <div class="text-sm font-semibold mb-1">Specifications</div>
            <div class="text-sm text-gray-700">User Group: 160, 169, 163, 170, 162</div>
          </div>
        </div>
        <div id="pTab_reviews" class="px-4 py-3 hidden">
          <div class="text-gray-600">No reviews yet</div>
        </div>
        <div id="pTab_shipping" class="px-4 py-3 hidden">
          <div class="text-sm font-semibold mb-2">Free Shipping</div>
          <div class="text-sm text-gray-700 mb-3">On all orders over $50</div>
          <div class="text-sm font-semibold mb-2">Standard Shipping</div>
          <div class="text-sm text-gray-700 mb-3">$5.99 (3-5 business days)</div>
          <div class="text-sm font-semibold mb-2">Express Shipping</div>
          <div class="text-sm text-gray-700 mb-3">$12.99 (1-2 business days)</div>
          <div class="text-sm font-semibold mb-2">Returns</div>
          <div class="text-sm text-gray-700 mb-3">30-day return policy. Items must be unused with tags attached.</div>
          <div class="text-sm font-semibold mb-2">Warranty</div>
          <div class="text-sm text-gray-700">1-year manufacturer warranty included</div>
        </div>
      </div>
    </div>
    ${related.length ? `
    <section class="py-4">
      ${relatedProductsHeader(firstSlug)}
      ${buildSlider('relatedSlider_'+p.id, buildCardItems(related.slice(0,20), 2), 2)}
    </section>` : ''}
    `;
  }
  
  function cart() {
    var server = state.cartServer || {};
    var items = (server.items || []).map(function(i){
      var priceNum = parseFloat(i.price || i.line_total || i.total || 0);
      var qty = parseInt(i.quantity,10) || 1;
      var title = i.name || i.product_name || '';
      var rawImg = i.medium_image || i.image_medium || (i.images && i.images.medium && (i.images.medium.src || i.images.medium)) || i.image || (Array.isArray(i.images) ? i.images[0] : '') || '';
      var img = rawImg ? Assets.api(rawImg) : Assets.local('assets/img/placeholder.png');
      var key = i.cart_item_key || i.key || '';
      var priceDisp = priceNum ? ('$' + priceNum.toFixed(2)) : (i.price || '');
      return { title:title, img:img, priceNum:priceNum, price:priceDisp, quantity:qty, key:key };
    });
    if (!items.length) {
      return `
      <div class="px-4 py-6 text-center">
        <div class="text-gray-500 mb-4">Your cart is empty</div>
        <a href="#home" class="px-4 py-2 rounded-xl bg-brand text-white">Start Shopping</a>
      </div>`;
    }
    var total = items.reduce(function(sum, item){ return sum + (item.priceNum * item.quantity); }, 0);
    var list = items.map(function(p){
      return `
      <div class="flex items-center gap-3 p-3 border-b border-gray-200">
        <img src="${p.img}" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg" alt="${p.title}"/>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium truncate">${p.title}</div>
          <div class="text-sm font-semibold">${p.price}</div>
          <div class="flex items-center gap-3 mt-2">
            <div class="flex items-center gap-2">
              <button data-update-key="${p.key}" data-qty="${p.quantity}" data-action="decrease" class="w-6 h-6 rounded-full border flex items-center justify-center">−</button>
              <span class="w-8 text-center" data-current-qty="${p.quantity}">${p.quantity}</span>
              <button data-update-key="${p.key}" data-qty="${p.quantity}" data-action="increase" class="w-6 h-6 rounded-full border flex items-center justify-center">+</button>
            </div>
            <button data-remove-key="${p.key}" class="text-sm text-red-500 hover:text-red-700">Remove</button>
          </div>
        </div>
        <div class="text-sm font-semibold">$${(p.priceNum * p.quantity).toFixed(2)}</div>
      </div>`;
    }).join('');
    
    var firstSlug = '';
    var relatedCart = state.cartRelatedProducts || [];
    return `
    <div>
      <div class="px-4 py-3 border-b border-gray-200">
        <h2 class="text-lg font-semibold">Shopping Cart</h2>
      </div>
      
      ${list}
      
      <div class="p-4 border-t border-gray-200">
        <div class="max-w-md mx-auto">
          <div class="rounded-2xl border border-gray-200 bg-white p-4">
            <div class="text-base font-semibold mb-3">Order Summary</div>
            <div class="flex items-center justify-between text-sm mb-2">
              <span>Subtotal (${items.reduce(function(s,i){return s+i.quantity},0)} item${items.reduce(function(s,i){return s+i.quantity},0)>1?'s':''})</span>
              <span class="font-medium">$${total.toFixed(2)}</span>
            </div>
            <div class="flex items-center justify-between text-sm mb-2">
              <span>Shipping</span>
              <span class="text-green-600 font-medium">FREE</span>
            </div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm">Total</span>
              <span class="text-2xl font-bold">$${total.toFixed(2)}</span>
            </div>
            <button id="checkout" class="w-full px-4 py-3 rounded-xl bg-brand text-white hover:bg-brandDark transition-colors flex items-center justify-center gap-2">
              ${svg('cart','w-5 h-5')}<span>Checkout (${items.reduce(function(s,i){return s+i.quantity},0)})</span>
            </button>
            <div class="mt-4 space-y-2 text-sm text-gray-700">
              <div class="flex items-center gap-2">${svg('truck','w-4 h-4 text-brand')}<span>Free shipping on orders over $50</span></div>
              <div class="flex items-center gap-2">${svg('tag','w-4 h-4 text-brand')}<span>30-day return policy</span></div>
              <div class="flex items-center gap-2">${svg('shield','w-4 h-4 text-brand')}<span>Secure checkout</span></div>
            </div>
          </div>
          <a href="#home" class="block text-center mt-4 text-brand hover:text-brandDark">Continue Shopping</a>
        </div>
      </div>
      ${relatedCart.length ? `
      <section class="py-4">
        ${relatedProductsHeader(firstSlug)}
        ${buildSlider('cartRelatedSlider', buildCardItems(relatedCart.slice(0,20), 2), 2)}
      </section>` : ''}
    </div>`;
  }
  
  function profile() {
    var name = (state.user && (state.user.display_name || (state.user.first_name && state.user.last_name ? (state.user.first_name + ' ' + state.user.last_name) : state.user.username))) || 'Guest User';
    var email = (state.user && state.user.email) || '';
    var avatarUrl = (state.user && state.user.avatarUrl) || '';
    return `
    <div class="px-4 py-3">
      <div class="flex items-center justify-between mb-3">
        <div class="text-lg font-semibold">Profile</div>
        <button id="profileSettings" class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">${svg('settings','w-5 h-5')}</button>
      </div>
      <div class="rounded-2xl p-5 bg-gradient-to-r from-brand/10 to-pink-50">
        <div class="flex items-center gap-4">
          <div class="relative">
            ${avatarUrl ? `<img src="${avatarUrl}" alt="Avatar" class="w-16 h-16 rounded-full object-cover"/>` : `<div class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-semibold">${(name||'U').charAt(0)}</div>`}
            <button id="editAvatar" class="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white text-gray-700 shadow flex items-center justify-center">${svg('camera','w-4 h-4')}</button>
          </div>
          <div class="flex-1">
            <div class="text-base font-semibold">${name}</div>
            ${email ? `<div class="text-sm text-gray-500">${email}</div>` : `<div class="text-sm text-gray-500">Welcome to Live Shopping</div>`}
            <button id="editProfile" class="mt-3 px-3 py-1.5 rounded-lg border border-gray-300 text-sm hover:bg-gray-50">Edit Profile</button>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-3 mt-5">
          <div class="rounded-xl bg-white p-3 text-center border border-gray-200">
            <div class="text-xl font-bold">${state.ordersCount}</div>
            <div class="text-xs text-gray-600">ORDERS</div>
          </div>
          <div class="rounded-xl bg-white p-3 text-center border border-gray-200">
            <div class="text-xl font-bold">${state.wishlist.length}</div>
            <div class="text-xs text-gray-600">WISHLIST</div>
          </div>
          <div class="rounded-xl bg-white p-3 text-center border border-gray-200">
            <div class="text-xl font-bold">${state.reviewsCount}</div>
            <div class="text-xs text-gray-600">REVIEWS</div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="text-xs font-semibold text-gray-500 mb-2">ACCOUNT</div>
        <div class="rounded-2xl overflow-hidden border border-gray-200 bg-white">
          <a id="navOrders" href="#orders" class="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">${svg('list','w-5 h-5')}</div>
              <div>
                <div class="text-sm font-medium">My Orders</div>
                <div class="text-xs text-gray-500">Track, return or buy again</div>
              </div>
            </div>
            <div class="text-gray-400">${svg('chevronRight','w-5 h-5')}</div>
          </a>
          <a id="navAddresses" href="#" class="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">${svg('map','w-5 h-5')}</div>
              <div>
                <div class="text-sm font-medium">Shipping Addresses</div>
                <div class="text-xs text-gray-500">${state.addressesCount} addresses</div>
              </div>
            </div>
            <div class="text-gray-400">${svg('chevronRight','w-5 h-5')}</div>
          </a>
          <a id="navPayments" href="#" class="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">${svg('card','w-5 h-5')}</div>
              <div>
                <div class="text-sm font-medium">Payment Methods</div>
                <div class="text-xs text-gray-500">Manage your cards</div>
              </div>
            </div>
            <div class="text-gray-400">${svg('chevronRight','w-5 h-5')}</div>
          </a>
          <a id="navWishlist" href="#wishlist" class="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">${svg('heart','w-5 h-5')}</div>
              <div>
                <div class="text-sm font-medium">Wishlist</div>
                <div class="text-xs text-gray-500">${state.wishlist.length} items saved</div>
              </div>
            </div>
            <div class="text-gray-400">${svg('chevronRight','w-5 h-5')}</div>
          </a>
        </div>
      </div>

      <div class="mt-6">
        <div class="text-xs font-semibold text-gray-500 mb-2">SHOPPING</div>
        <div class="rounded-2xl overflow-hidden border border-gray-200 bg-white">
          <a id="navNotifications" href="#" class="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center">${svg('bell','w-5 h-5')}</div>
              <div>
                <div class="text-sm font-medium">Notifications</div>
                <div class="text-xs text-gray-500">Manage notification settings</div>
              </div>
            </div>
            <div class="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">${state.notificationsCount}</div>
          </a>
          <a id="navReviews" href="#" class="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">${svg('star','w-5 h-5')}</div>
              <div>
                <div class="text-sm font-medium">My Reviews</div>
                <div class="text-xs text-gray-500">${state.reviewsCount} reviews written</div>
              </div>
            </div>
            <div class="text-gray-400">${svg('chevronRight','w-5 h-5')}</div>
          </a>
        </div>
      </div>

      <div class="mt-6">
        <div class="text-xs font-semibold text-gray-500 mb-2">SUPPORT</div>
        <div class="rounded-2xl overflow-hidden border border-gray-200 bg-white">
          <a id="navHelp" href="#" class="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">${svg('help','w-5 h-5')}</div>
              <div>
                <div class="text-sm font-medium">Help Center</div>
                <div class="text-xs text-gray-500">FAQs and support</div>
              </div>
            </div>
            <div class="text-gray-400">${svg('chevronRight','w-5 h-5')}</div>
          </a>
          <a id="navAbout" href="#" class="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">${svg('info','w-5 h-5')}</div>
              <div>
                <div class="text-sm font-medium">About</div>
                <div class="text-xs text-gray-500">App info and policies</div>
              </div>
            </div>
            <div class="text-gray-400">${svg('chevronRight','w-5 h-5')}</div>
          </a>
          <a id="navInvite" href="#" class="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center">${svg('users','w-5 h-5')}</div>
              <div>
                <div class="text-sm font-medium">Invite Friends</div>
                <div class="text-xs text-gray-500">Get $10 for each referral</div>
              </div>
            </div>
            <div class="text-gray-400">${svg('chevronRight','w-5 h-5')}</div>
          </a>
        </div>
        <button id="logoutBtn" class="w-full mt-4 px-4 py-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100">Log Out</button>
      </div>
    </div>`;
  }
  
  function wishlist() {
    var all = state.data.allProducts || [];
    var server = state.serverWishlist || {};
    var raw = Array.isArray(server) ? server : (server.wishlist || server.items || (server.data && server.data.wishlist) || []);
    var items = (raw || []).map(function(x){
      if (typeof x === 'number' || typeof x === 'string') {
        return all.find(function(p){ return p.id === parseInt(x,10); });
      }
      return formatProductData(x);
    }).filter(Boolean);
    items = items.map(function(p, i){
      var r = (raw || [])[i];
      var t = (r && (r.thumbnail || (r.images && r.images.thumbnail && r.images.thumbnail.src) || r.thumb)) || '';
      if (t) {
        return Object.assign({}, p, { img: Assets.api(t) });
      }
      return p;
    });
    if (!items.length) {
      return `
      <div class="px-4 py-6 text-center">
        <div class="text-gray-500 mb-4">Your wishlist is empty</div>
        <a href="#home" class="px-4 py-2 rounded-xl bg-brand text-white">Browse Products</a>
      </div>`;
    }
    return `
    <div class="px-4 py-3">
      <h2 class="text-lg font-semibold mb-4">My Wishlist</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        ${items.map(function(p){ return productCard(p); }).join('')}
      </div>
    </div>`;
  }
  
  function orders() {
    var items = state.ordersList || [];
    if (!items.length) {
      return `
      <div class="px-4 py-6">
        <h2 class="text-lg font-semibold mb-4">My Orders</h2>
        <div class="text-center text-gray-500 py-8">No orders yet</div>
        <a href="#home" class="block text-center px-4 py-2 rounded-xl bg-brand text-white">Start Shopping</a>
      </div>`;
    }
    return `
    <div class="px-4 py-6">
      <h2 class="text-lg font-semibold mb-4">My Orders</h2>
      <div class="space-y-3">
        ${items.map(function(o){
          var id = o.id || o.order_id || '';
          var status = o.status || (o.order_status || '').toString();
          var total = (o.total || o.order_total || '').toString();
          return `
          <div class="rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-between">
            <div>
              <div class="text-sm font-semibold">Order #${id}</div>
              <div class="text-xs text-gray-500">${status}</div>
            </div>
            <div class="text-sm font-semibold">${total}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }
  function reviews(){
    var items = state.reviewsList || [];
    if (!items.length) {
      return `
      <div class="px-4 py-6">
        <h2 class="text-lg font-semibold mb-4">My Reviews</h2>
        <div class="text-center text-gray-500 py-8">No reviews found</div>
        <a href="#home" class="block text-center px-4 py-2 rounded-xl bg-brand text-white">Browse Products</a>
      </div>`;
    }
    return `
    <div class="px-4 py-6">
      <h2 class="text-lg font-semibold mb-4">My Reviews</h2>
      <div class="space-y-3">
        ${items.map(function(r){
          var title = (r.product_name || (r.product && r.product.name) || r.product || '');
          var rating = parseFloat(r.rating || r.rating_value || 0) || 0;
          var text = (r.review || r.content || r.comment || '').toString();
          var date = (r.date || r.created_at || '').toString();
          return `
          <div class="rounded-xl border border-gray-200 bg-white p-4">
            <div class="flex items-center justify-between">
              <div class="text-sm font-semibold">${title}</div>
              <div class="flex items-center gap-1 text-xs text-gray-600">${svg('star','w-4 h-4 text-yellow-400')}<span>${rating.toFixed(1)}</span></div>
            </div>
            ${text ? `<div class="text-xs text-gray-700 mt-2">${text}</div>` : ''}
            ${date ? `<div class="text-[11px] text-gray-400 mt-2">${date}</div>` : ''}
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }
  function notifications(){
    var items = state.notifications || [];
    if (!Array.isArray(items) || !items.length) {
      return `
      <div class="px-4 py-6">
        <h2 class="text-lg font-semibold mb-4">Notifications</h2>
        <div class="text-center text-gray-500 py-8">No notifications</div>
      </div>`;
    }
    return `
    <div class="px-4 py-6">
      <h2 class="text-lg font-semibold mb-4">Notifications</h2>
      <div class="space-y-3">
        ${items.map(function(n){
          var title = (n.title || '').toString();
          var message = (n.message || '').toString();
          var time = (n.time || '').toString();
          return `
          <div class="rounded-xl border border-gray-200 bg-white p-4">
            <div class="text-sm font-semibold">${title}</div>
            ${message ? `<div class="text-xs text-gray-700 mt-1">${message}</div>` : ''}
            ${time ? `<div class="text-[11px] text-gray-400 mt-2">${time}</div>` : ''}
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }
  function help(){
    var faqs=[
      {q:'How do I track my order?',a:'Open Orders to view each order timeline with live updates. You will receive push-style alerts for key milestones like confirmed, packed, dispatched, out for delivery, and delivered. Tap an order to see courier details and real-time tracking. If tracking stalls for 24 hours, use Contact Support from the order page to escalate.'},
      {q:'What are the shipping options?',a:'Choose Standard or Expedited shipping at checkout. We automatically surface the fastest option for your address and items. For eligible locations, same-day delivery appears during peak hours. Shipping fees are clearly shown before payment. Combine items to save on shipping where possible.'},
      {q:'How do returns work?',a:'Start a return from Orders within 30 days. Choose pickup or drop-off. Return labels and QR codes are generated instantly. Refunds are processed within 3–5 business days after inspection. For size exchanges, instant swap may be available with doorstep pickup and re-delivery.'},
      {q:'Which payment methods are accepted?',a:'We accept major cards, wallets, and Cash on Delivery where available. Save your preferred method in Payments under Profile. For cards, we tokenize securely and never store full card details. Failed payments can be retried without losing your cart.'},
      {q:'How do I apply vouchers or coupons?',a:'Enter codes at checkout under Vouchers. Eligible codes apply automatically from your saved offers. Stacking rules and expiry dates are shown inline. If a code fails, check minimum order value, category restrictions, or expiry.'},
      {q:'How can I update my address?',a:'Manage addresses under Profile → Addresses. Add, edit, set default billing or shipping, and mark preferred delivery instructions. Smart suggestions help autofill city and postcode. You can set different defaults for billing and shipping.'},
      {q:'How do I manage my wishlist?',a:'Tap the heart to add or remove products. Wishlist syncs across devices. We show availability and price drops. On the Wishlist page, thumbnails load fast for quicker browsing. You can move items from wishlist to cart with one tap.'},
      {q:'Is my data secure?',a:'We use HTTPS end-to-end, token-based authentication, and industry-standard encryption. Sensitive operations require re-authentication. You can view session history and revoke devices from Profile → Settings. We never sell personal data.'},
      {q:'How do I contact support?',a:'Open Help Center → Contact Support. Choose chat or email. For order issues, contact from the order detail page to auto-attach context. Typical response times are under 10 minutes for chat and under 24 hours for email.'},
      {q:'Can I get notifications for deals?',a:'Enable Notifications under Profile. Choose categories you care about and quiet hours. We send smart alerts for price drops on wishlist items, restocks, and personalized deals.'}
    ];
    return `
    <div class="px-4 py-6">
      <h2 class="text-lg font-semibold mb-4">Help Center</h2>
      <div class="rounded-xl border border-gray-200 bg-white p-4">
        <div class="text-sm font-semibold mb-2">FAQs</div>
        <div class="divide-y divide-gray-200" id="faqList">
          ${faqs.map(function(f,idx){
            var open=idx===0;
            var style=open?"max-height:1000px;opacity:1;overflow:hidden;transition:max-height 300ms ease, opacity 300ms ease;":"max-height:0;opacity:0;overflow:hidden;transition:max-height 300ms ease, opacity 300ms ease;";
            return `
            <div class="faq-item py-2">
              <button data-faq-toggle data-faq-id="${idx}" class="w-full flex items-center justify-between text-left">
                <span class="text-sm font-medium">${f.q}</span>
                <span data-faq-icon class="transition-transform ${open?'rotate-90':''}">${svg('chevronRight','w-5 h-5 text-gray-400')}</span>
              </button>
              <div id="faq-${idx}" data-faq-body class="mt-2 text-xs text-gray-600" style="${style}">${f.a}</div>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>`;
  }
  function about(){
    return `
    <div class="px-4 py-6">
      <h2 class="text-lg font-semibold mb-2">About</h2>
      <div class="rounded-xl border border-gray-200 bg-white p-4">
        <div class="text-sm">${AppConfig.appName}</div>
        <div class="text-xs text-gray-500 mt-1">Shop Live, Shop Smart</div>
      </div>
    </div>`;
  }

 function addresses(){
   var d = state.addressesData || {};
   var billing = d.billing || {};
   var shipping = d.shipping || {};
   var defBill = d.default_billing || '';
   var defShip = d.default_shipping || '';
  function card(a,type){
    var name = ((a.first_name||'') + ' ' + (a.last_name||'')).trim() || (a.company||'');
    var line1 = a.address_1 || '';
    var line2 = a.address_2 || '';
    var city = a.city || '';
    var state = a.state || '';
    var postcode = a.postcode || '';
    var country = a.country || '';
    var phone = a.phone || '';
    var email = a.email || '';
    var isDefault = (type==='billing' && defBill==='billing') || (type==='shipping' && defShip==='shipping');
    var typeLabel = (type==='billing' ? 'BILLING' : 'SHIPPING');
    var badgeCls = type==='billing' ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white';
    return `
      <div class="relative rounded-xl border border-gray-200 bg-white p-4 pt-8">
        <span class="absolute top-3 left-3 text-[10px] px-2 py-0.5 rounded ${badgeCls} shadow-sm">${typeLabel}</span>
        <div class="flex items-start justify-between">
          <div>
            <div class="text-sm font-semibold">${name||type.toUpperCase()}</div>
            <div class="text-xs text-gray-600">${line1}</div>
            ${line2?`<div class="text-xs text-gray-600">${line2}</div>`:''}
            <div class="text-xs text-gray-500">${city} ${state} ${postcode}</div>
            <div class="text-xs text-gray-500">${country}</div>
            ${phone?`<div class="text-xs text-gray-500">${phone}</div>`:''}
            ${email?`<div class="text-xs text-gray-500">${email}</div>`:''}
          </div>
          <div class="text-right">
            ${isDefault?`<span class="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Default</span>`:''}
          </div>
        </div>
        <div class="flex items-center gap-2 mt-3">
          <button data-edit-address="${type}" class="px-3 py-1.5 rounded-lg border border-gray-300 text-sm">Edit</button>
          <button data-set-default="${type}" class="px-3 py-1.5 rounded-lg bg-brand text-white text-sm">Set Default</button>
        </div>
      </div>`;
  }
   return `
   <div class="px-4 py-6">
     <div class="flex items-center justify-between mb-4">
       <h2 class="text-lg font-semibold">Addresses</h2>
       <button id="addAddress" class="px-3 py-2 rounded-lg bg-brand text-white text-sm">Add Address</button>
     </div>
     <div class="grid grid-cols-1 gap-3">
       ${Object.keys(billing).length ? card(billing,'billing') : `<div class="rounded-xl border border-gray-200 bg-white p-4"><div class="text-sm">No billing address</div><div class="mt-2"><button data-edit-address="billing" class="px-3 py-1.5 rounded-lg border border-gray-300 text-sm">Add Billing</button></div></div>`}
       ${Object.keys(shipping).length ? card(shipping,'shipping') : `<div class="rounded-xl border border-gray-200 bg-white p-4"><div class="text-sm">No shipping address</div><div class="mt-2"><button data-edit-address="shipping" class="px-3 py-1.5 rounded-lg border border-gray-300 text-sm">Add Shipping</button></div></div>`}
     </div>
   </div>`;
 }

function chat(){
  var threads=state.chatThreads||[];
  var tab=(state.chatTab||'All').toLowerCase();
  var list=threads.filter(function(t){
    if(tab==='all') return true;
    if(tab==='unread') return (t.last&&t.last.unread)>0;
    return (t.role||'').toLowerCase()===tab;
  });
  var tabs=['All','Sellers','Customers','Support','Unread'];
  return `
  <div class="px-4 py-3">
    <div class="flex items-center justify-between mb-3">
      <div class="text-lg font-semibold">Messages</div>
      <button id="chatCompose" class="w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center">${svg('plus','w-5 h-5')}</button>
    </div>
    <div class="relative mb-3">
      <input id="chatSearch" type="text" class="w-full rounded-xl border border-gray-300 pl-9 pr-3 py-2" placeholder="Search messages"/>
      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">${svg('search','w-4 h-4')}</span>
    </div>
    <div class="flex items-center gap-2 mb-3 overflow-x-auto">
      ${tabs.map(function(t){var active=t.toLowerCase()===tab;var cls=active?'bg-brand text-white':'bg-gray-100 text-gray-700 hover:bg-gray-200';return `<button data-chat-tab="${t}" class="px-3 py-1.5 rounded-full text-sm ${cls}">${t}</button>`}).join('')}
    </div>
    <div class="rounded-2xl overflow-hidden border border-gray-200 bg-white divide-y">
      ${list.map(function(t){
        var grd=t.grad||['from-pink-400','to-orange-400'];
        var unread=(t.last&&t.last.unread)||0;
        var time=(t.last&&t.last.time)||'';
        var preview=(t.last&&t.last.text)||'';
        return `
        <a href="#" data-thread-id="${t.id}" class="block px-4 py-3 hover:bg-gray-50">
          <div class="flex items-start gap-3">
            <div class="relative">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br ${grd[0]} ${grd[1]}"></div>
              ${t.online?`<span class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>`:''}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <div class="text-sm font-medium">${t.name}${t.verified?'<span class="text-green-600">✓</span>':''}</div>
                <div class="text-xs text-gray-500">${time}</div>
              </div>
              <div class="flex items-center justify-between mt-0.5">
                <div class="text-xs text-gray-500 line-clamp-1">${preview}</div>
                ${unread?`<div class="ml-2 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-600">${unread}</div>`:''}
              </div>
            </div>
          </div>
        </a>`;
      }).join('')}
    </div>
  </div>`;
}

function chatSingle(){
  var tid=parseInt(state.query.id||'0',10);
  var t=(state.chatThreads||[]).find(function(x){return x.id===tid})||{name:'Conversation'};
  var msgs=(state.chatMessages&&state.chatMessages[tid])||[];
  return `
  <div class="px-4 py-3">
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-3">
        <button id="chatBack" class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">${svg('chevronLeft','w-5 h-5')}</button>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-orange-400"></div>
          <div>
            <div class="text-base font-semibold">${t.name} <span class="text-green-600">${t.verified?'✓':''}</span></div>
            <div class="text-xs text-green-600">Active now</div>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button class="p-2 rounded-full bg-gray-100">⋯</button>
      </div>
    </div>
    <div class="flex items-center gap-2 mb-3 overflow-x-auto">
      ${['Hello','Track my order','Ask a question'].map(function(q){return `<button data-chat-quick="${q}" class="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-gray-200">${q}</button>`}).join('')}
    </div>
    <div id="chatView" class="space-y-3 min-h-[60vh] pb-24">
      ${msgs.map(function(m){
        var mine=m.from==='me';
        var align=mine?'justify-end':'justify-start';
        var bubble=mine?'bg-brand text-white':'bg-white text-gray-800';
        var shadow=mine?'':'shadow-sm border border-gray-200';
        return `
        <div class="flex ${align} gap-2">
          ${mine?'':`<div class="w-6 h-6 rounded-full bg-blue-200"></div>`}
          <div class="max-w-[75%] px-4 py-2 rounded-2xl ${bubble} ${shadow}">
            <div class="text-sm">${m.text}</div>
            <div class="text-[11px] opacity-80 mt-1">${m.time||''}</div>
          </div>
        </div>`;
      }).join('')}
    </div>
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div class="px-4 py-3 flex items-center gap-2">
        <button id="chatAttach" class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">📎</button>
        <button id="chatPhoto" class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">📷</button>
        <input id="chatInput" type="text" class="flex-1 rounded-full border border-gray-300 px-4 py-2" placeholder="Type a message..."/>
        <button id="chatSend" class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white flex items-center justify-center">➤</button>
      </div>
    </div>
  </div>`;
}
 
function login(){
  return `
  <div class="px-4 py-6 max-w-md mx-auto">
    <div class="rounded-2xl border border-gray-200 bg-white p-4">
      <h2 class="text-lg font-semibold mb-4">Sign In</h2>
      <form id="loginForm" class="space-y-3">
        <div>
          <label class="text-sm text-gray-700">Email or Username</label>
          <input id="loginIdentifier" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="you@example.com or yourusername" required/>
        </div>
        <div>
          <label class="text-sm text-gray-700">Password</label>
          <input id="loginPassword" type="password" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="••••••••" required/>
        </div>
        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2">
            <input id="loginRemember" type="checkbox" class="rounded border-gray-300"/>
            <span>Remember me</span>
          </label>
          <a href="#" id="loginForgot" class="text-brand">Forgot password?</a>
        </div>
        <button type="submit" class="w-full px-4 py-3 rounded-xl bg-brand text-white hover:bg-brandDark">Sign In</button>
      </form>
      <div class="text-center text-sm mt-3">Don't have an account? <a href="#" id="loginSignup" class="text-brand">Sign up</a></div>
    </div>
  </div>`
 }
  
  function render() {
    var out = '';
    
  switch(state.route) {
      case 'home':
        out = home();
        break;
      case 'products':
        out = products();
        break;
      case 'chat':
        out = chat();
        break;
      case 'chatSingle':
        out = chatSingle();
        break;
      case 'login':
        out = login();
        break;
      case 'register':
        out = register();
        break;
      case 'product':
        out = product();
        break;
      case 'cart':
        out = cart();
        break;
      case 'profile':
        out = profile();
        break;
      case 'wishlist':
        out = wishlist();
        break;
      case 'orders':
        out = orders();
        break;
      case 'reviews':
        out = reviews();
        break;
      case 'help':
        out = help();
        break;
      case 'about':
        out = about();
        break;
      case 'notifications':
        out = notifications();
        break;
      case 'addresses':
        out = addresses();
        break;
      default:
        out = home();
    }
  
  $('#content').html(out);
    $('#bottomNav [data-tab]').each(function(){
      var tab=$(this).attr('data-tab');
      var active=(tab===state.route);
      $(this).toggleClass('text-brand',active).toggleClass('text-gray-600',!active).toggleClass('font-medium',active);
    });
    
  setTimeout(function() {
    $('[data-slider]').each(function() {
      var $this = $(this);
      var id = $this.attr('id');
      if (id === 'categoriesSlider') {
        initSlider($this, true);
      } else {
        initSlider($this, false);
      }
    });
    if(state.route==='chatSingle'){var el=document.getElementById('chatView');if(el){el.scrollTop=el.scrollHeight}}
  }, 100);
  }
  
  function bind() {
    // Toggle search
    $(document).on('click', '#searchBtn', function() {
      $('#searchContainer').toggleClass('hidden');
      if (!$('#searchContainer').hasClass('hidden')) {
        $('#searchInput').focus();
      }
    });
    
    // Search form
    $(document).on('submit', '#searchForm', function(e) {
      e.preventDefault();
      var q = $('#searchInput').val() || '';
      if (q.trim()) {
        location.hash = 'products?q=' + encodeURIComponent(q.trim());
      }
      $('#searchContainer').addClass('hidden');
    });
    
    // Like button (server wishlist)
    $(document).on('click', '[data-like]', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var id = parseInt($(this).attr('data-like'), 10);
      var liked = (state.serverWishlistIds || []).indexOf(id) > -1;
      var req = liked ? API.removeWishlist(id) : API.addWishlist(id);
      req.done(function(){
          API.getWishlist().done(function(res){
            var raw = (res && res.wishlist) || (res && res.data && res.data.wishlist) || [];
            var ids = Array.isArray(raw) ? raw.map(function(x){ return typeof x==='object' ? (x.id||x.product_id) : parseInt(x,10); }).filter(function(x){ return !isNaN(x); }) : [];
            state.serverWishlistIds = ids;
            toast('success', liked ? 'Removed from wishlist' : 'Added to wishlist');
            render();
          });
        })
        .fail(function(){ toast('error','Wishlist update failed'); });
    });
    
    // Add to cart (server cart)
    $(document).on('click', '[data-add]', function(e) {
      e.stopPropagation();
      var id = parseInt($(this).attr('data-add'), 10);
      var product = (state.data.allProducts || []).find(function(p) { return p.id === id; });
      if (!product || !product.inStock) { toast('error','Product is out of stock'); return; }
      API.cartAdd(id,1)
        .done(function(){
          API.cart().done(function(res){
            var items = (res && res.items) || (res && res.data && res.data.items) || [];
            state.cartServer = { items: items };
            state.cartCount = items.reduce(function(s,i){ return s + (parseInt(i.quantity,10)||0); }, 0);
            toast('success','Added to cart');
            render();
          });
        })
        .fail(function(){ toast('error','Failed to add to cart'); });
    });
    
    // Remove from cart (server cart)
    $(document).on('click', '[data-remove-key]', function() {
      var key = $(this).attr('data-remove-key');
      API.cartRemove(key)
        .done(function(){
          API.cart().done(function(res){
            var items = (res && res.items) || (res && res.data && res.data.items) || [];
            state.cartServer = { items: items };
            state.cartCount = items.reduce(function(s,i){ return s + (parseInt(i.quantity,10)||0); }, 0);
            toast('success','Removed from cart');
            render();
          });
        })
        .fail(function(){ toast('error','Failed to remove from cart'); });
    });
    
    // Update cart quantity (server cart)
    $(document).on('click', '[data-update-key]', function() {
      var key = $(this).attr('data-update-key');
      var action = $(this).attr('data-action');
      var curr = parseInt($(this).attr('data-qty'),10) || 1;
      var next = action==='increase' ? (curr+1) : Math.max(1,curr-1);
      API.cartUpdate({cart_item_key:key, quantity:next})
        .done(function(){
          API.cart().done(function(res){
            var items = (res && res.items) || (res && res.data && res.data.items) || [];
            state.cartServer = { items: items };
            state.cartCount = items.reduce(function(s,i){ return s + (parseInt(i.quantity,10)||0); }, 0);
            render();
          });
        })
        .fail(function(){ toast('error','Failed to update cart'); });
    });
    
    // Checkout
    $(document).on('click', '#checkout', function() {
      if (!state.cart.length) {
        toast('error', 'Cart is empty');
        return;
      }
      
      modal(`
        <div class="text-center p-4">
          <div class="text-lg font-semibold mb-2">Confirm Checkout</div>
          <div class="text-sm text-gray-500 mb-4">Proceed with payment for ${state.cart.length} item(s)</div>
          <div class="flex gap-2">
            <button id="confirmCheckout" class="flex-1 px-4 py-2 rounded-xl bg-brand text-white hover:bg-brandDark">
              Confirm
            </button>
            <button id="modalClose" class="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </div>
      `);
    });
    
    // Modal close
    $(document).on('click', '#modalClose', closeModal);
    $(document).on('click', '#modal .bg-black', function(e) {
      if (e.target === this) closeModal();
    });
    
    // Confirm checkout
    $(document).on('click', '#confirmCheckout', function() {
      closeModal();
      API.cartClear()
        .done(function(){
          state.cartServer = { items: [] };
          state.cartCount = 0;
          toast('success','Order placed successfully!');
          location.hash = 'orders';
        })
        .fail(function(){ toast('error','Failed to clear cart'); });
    });
    
    // Logout
    $(document).on('click', '#logoutBtn', function() {
      modal(`
        <div class="text-center p-4">
          <div class="text-lg font-semibold mb-2">Logout</div>
          <div class="text-sm text-gray-500 mb-4">Are you sure you want to logout?</div>
          <div class="flex gap-2">
            <button id="confirmLogout" class="flex-1 px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600">
              Logout
            </button>
            <button id="modalClose" class="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </div>
      `);
    });
    
    $(document).on('click', '#confirmLogout', function() {
      closeModal();
      localStorage.removeItem('X-Auth-Token');
      localStorage.removeItem('token-expires');
      localStorage.removeItem(AppConfig.storage.tokenKey);
      localStorage.removeItem(AppConfig.storage.cartKey);
      localStorage.removeItem(AppConfig.storage.wishlistKey);
      state.cart = [];
      state.wishlist = [];
      toast('success', 'Logged out successfully');
      location.hash = 'home';
    });
    $(document).on('click','#addAddress',function(e){
      e.preventDefault();
      var type='billing';
      modal(`
        <div class="p-4">
          <div class="text-lg font-semibold mb-2">Add Address</div>
          <div class="space-y-3">
            <div>
              <label class="text-sm text-gray-700">Type</label>
              <select id="addrType" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2">
                <option value="billing">Billing</option>
                <option value="shipping">Shipping</option>
              </select>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm text-gray-700">First Name</label>
                <input id="addrFirstName" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="First name"/>
              </div>
              <div>
                <label class="text-sm text-gray-700">Last Name</label>
                <input id="addrLastName" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="Last name"/>
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-700">Company</label>
              <input id="addrCompany" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="Company"/>
            </div>
            <div>
              <label class="text-sm text-gray-700">Address Line 1</label>
              <input id="addrAddress1" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="Street address"/>
            </div>
            <div>
              <label class="text-sm text-gray-700">Address Line 2</label>
              <input id="addrAddress2" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="Apartment, suite, etc."/>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm text-gray-700">City</label>
                <input id="addrCity" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="City"/>
              </div>
              <div>
                <label class="text-sm text-gray-700">State</label>
                <input id="addrState" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="State"/>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm text-gray-700">Postcode</label>
                <input id="addrPostcode" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="Postcode"/>
              </div>
              <div>
                <label class="text-sm text-gray-700">Country</label>
                <input id="addrCountry" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="Country"/>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm text-gray-700">Email</label>
                <input id="addrEmail" type="email" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="you@example.com"/>
              </div>
              <div>
                <label class="text-sm text-gray-700">Phone</label>
                <input id="addrPhone" type="tel" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="+1 234 567 8900"/>
              </div>
            </div>
            <label class="inline-flex items-center gap-2 text-sm">
              <input id="addrDefault" type="checkbox" class="rounded border-gray-300"/>
              <span>Set as default</span>
            </label>
            <div class="flex gap-2 pt-2">
              <button id="modalClose" class="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50">Cancel</button>
              <button id="saveAddress" class="flex-1 px-4 py-2 rounded-xl bg-brand text-white hover:bg-brandDark">Save</button>
            </div>
          </div>
        </div>
      `);
    });
    $(document).on('click','#saveAddress',function(){
      var type=($('#addrType').val()||'').toString();
      var body={
        type:type||'billing',
        first_name:($('#addrFirstName').val()||'').toString(),
        last_name:($('#addrLastName').val()||'').toString(),
        company:($('#addrCompany').val()||'').toString(),
        address_1:($('#addrAddress1').val()||'').toString(),
        address_2:($('#addrAddress2').val()||'').toString(),
        city:($('#addrCity').val()||'').toString(),
        state:($('#addrState').val()||'').toString(),
        postcode:($('#addrPostcode').val()||'').toString(),
        country:($('#addrCountry').val()||'').toString(),
        email:($('#addrEmail').val()||'').toString(),
        phone:($('#addrPhone').val()||'').toString(),
        is_default:$('#addrDefault').prop('checked')===true
      };
      API.addressesAdd(body)
        .done(function(){
          API.addresses().done(function(res){
            var raw=(res&&res.data)||res||{};
            var arr=(raw&&raw.addresses&&Array.isArray(raw.addresses))?raw.addresses:(Array.isArray(res)?res:[]);
            var hasObj=raw&&(raw.billing||raw.shipping);
            if(hasObj){
              state.addressesData={billing:raw.billing||{},shipping:raw.shipping||{},default_billing:raw.default_billing||'',default_shipping:raw.default_shipping||''};
              state.addressesCount=((raw.billing&&Object.keys(raw.billing).length)?1:0)+((raw.shipping&&Object.keys(raw.shipping).length)?1:0);
            }else{
              var b=(arr.find(function(x){return (x.type||'').toLowerCase()==='billing';})||{});
              var s=(arr.find(function(x){return (x.type||'').toLowerCase()==='shipping';})||{});
              state.addressesData={billing:b,shipping:s,default_billing:b&&b.is_default?'billing':'',default_shipping:s&&s.is_default?'shipping':''};
              state.addressesCount=Array.isArray(arr)?arr.length:0;
            }
            toast('success','Address saved');
            closeModal();
            render();
          });
        })
        .fail(function(){ toast('error','Failed to save address'); });
    });
    $(document).on('click','[data-edit-address]',function(){
      var type=$(this).attr('data-edit-address');
      var a=(state.addressesData&&state.addressesData[type])||{};
      modal(`
        <div class="p-4">
          <div class="text-lg font-semibold mb-2">Edit ${type.charAt(0).toUpperCase()+type.slice(1)} Address</div>
          <div class="space-y-3">
            <div>
              <label class="text-sm text-gray-700">Type</label>
              <select id="addrTypeEdit" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2">
                <option value="billing" ${type==='billing'?'selected':''}>Billing</option>
                <option value="shipping" ${type==='shipping'?'selected':''}>Shipping</option>
              </select>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm text-gray-700">First Name</label>
                <input id="addrFirstNameEdit" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${(a.first_name||'')}"/>
              </div>
              <div>
                <label class="text-sm text-gray-700">Last Name</label>
                <input id="addrLastNameEdit" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${(a.last_name||'')}"/>
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-700">Company</label>
              <input id="addrCompanyEdit" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${(a.company||'')}"/>
            </div>
            <div>
              <label class="text-sm text-gray-700">Address Line 1</label>
              <input id="addrAddress1Edit" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${(a.address_1||'')}"/>
            </div>
            <div>
              <label class="text-sm text-gray-700">Address Line 2</label>
              <input id="addrAddress2Edit" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${(a.address_2||'')}"/>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm text-gray-700">City</label>
                <input id="addrCityEdit" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${(a.city||'')}"/>
              </div>
              <div>
                <label class="text-sm text-gray-700">State</label>
                <input id="addrStateEdit" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${(a.state||'')}"/>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm text-gray-700">Postcode</label>
                <input id="addrPostcodeEdit" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${(a.postcode||'')}"/>
              </div>
              <div>
                <label class="text-sm text-gray-700">Country</label>
                <input id="addrCountryEdit" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${(a.country||'')}"/>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm text-gray-700">Email</label>
                <input id="addrEmailEdit" type="email" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${(a.email||'')}"/>
              </div>
              <div>
                <label class="text-sm text-gray-700">Phone</label>
                <input id="addrPhoneEdit" type="tel" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${(a.phone||'')}"/>
              </div>
            </div>
            <label class="inline-flex items-center gap-2 text-sm">
              <input id="addrDefaultEdit" type="checkbox" class="rounded border-gray-300" ${((type==='billing' && (state.addressesData&&state.addressesData.default_billing==='billing'))||(type==='shipping' && (state.addressesData&&state.addressesData.default_shipping==='shipping'))) ? 'checked' : ''}/>
              <span>Set as default</span>
            </label>
            <div class="flex gap-2 pt-2">
              <button id="modalClose" class="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50">Cancel</button>
              <button id="updateAddress" data-type="${type}" class="flex-1 px-4 py-2 rounded-xl bg-brand text-white hover:bg-brandDark">Update</button>
            </div>
          </div>
        </div>
      `);
    });
    $(document).on('click','#updateAddress',function(){
      var type=($(this).attr('data-type')||'').toString();
      var body={
        type:($('#addrTypeEdit').val()||type||'billing').toString(),
        first_name:($('#addrFirstNameEdit').val()||'').toString(),
        last_name:($('#addrLastNameEdit').val()||'').toString(),
        company:($('#addrCompanyEdit').val()||'').toString(),
        address_1:($('#addrAddress1Edit').val()||'').toString(),
        address_2:($('#addrAddress2Edit').val()||'').toString(),
        city:($('#addrCityEdit').val()||'').toString(),
        state:($('#addrStateEdit').val()||'').toString(),
        postcode:($('#addrPostcodeEdit').val()||'').toString(),
        country:($('#addrCountryEdit').val()||'').toString(),
        email:($('#addrEmailEdit').val()||'').toString(),
        phone:($('#addrPhoneEdit').val()||'').toString(),
        is_default:$('#addrDefaultEdit').prop('checked')===true
      };
      API.addressesUpdate(body)
        .done(function(){
          API.addresses().done(function(res){
            var raw=(res&&res.data)||res||{};
            var arr=(raw&&raw.addresses&&Array.isArray(raw.addresses))?raw.addresses:(Array.isArray(res)?res:[]);
            var hasObj=raw&&(raw.billing||raw.shipping);
            if(hasObj){
              state.addressesData={billing:raw.billing||{},shipping:raw.shipping||{},default_billing:raw.default_billing||'',default_shipping:raw.default_shipping||''};
              state.addressesCount=((raw.billing&&Object.keys(raw.billing).length)?1:0)+((raw.shipping&&Object.keys(raw.shipping).length)?1:0);
            }else{
              var b=(arr.find(function(x){return (x.type||'').toLowerCase()==='billing';})||{});
              var s=(arr.find(function(x){return (x.type||'').toLowerCase()==='shipping';})||{});
              state.addressesData={billing:b,shipping:s,default_billing:b&&b.is_default?'billing':'',default_shipping:s&&s.is_default?'shipping':''};
              state.addressesCount=Array.isArray(arr)?arr.length:0;
            }
            toast('success','Address updated');
            closeModal();
            render();
          });
        })
        .fail(function(){ toast('error','Failed to update address'); });
    });
    $(document).on('click','[data-set-default]',function(){
      var type=$(this).attr('data-set-default');
      API.addressesSetDefault({type:type})
        .done(function(){
          API.addresses().done(function(res){
            var raw=(res&&res.data)||res||{};
            var arr=(raw&&raw.addresses&&Array.isArray(raw.addresses))?raw.addresses:(Array.isArray(res)?res:[]);
            var hasObj=raw&&(raw.billing||raw.shipping);
            if(hasObj){
              state.addressesData={billing:raw.billing||{},shipping:raw.shipping||{},default_billing:raw.default_billing||'',default_shipping:raw.default_shipping||''};
              state.addressesCount=((raw.billing&&Object.keys(raw.billing).length)?1:0)+((raw.shipping&&Object.keys(raw.shipping).length)?1:0);
            }else{
              var b=(arr.find(function(x){return (x.type||'').toLowerCase()==='billing';})||{});
              var s=(arr.find(function(x){return (x.type||'').toLowerCase()==='shipping';})||{});
              state.addressesData={billing:b,shipping:s,default_billing:b&&b.is_default?'billing':'',default_shipping:s&&s.is_default?'shipping':''};
              state.addressesCount=Array.isArray(arr)?arr.length:0;
            }
            toast('success','Default address updated');
            render();
          });
        })
        .fail(function(){ toast('error','Failed to set default'); });
    });
    
    // Keyboard shortcuts
    $(document).on('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
        $('#searchContainer').addClass('hidden');
        if (state.filterPanelOpen) {
          closeFilterPanel();
        }
      }
    });
    $(document).on('click','#fabBtn',function(){
      modal(`
        <div class="p-4 text-center">
          <div class="text-lg font-semibold mb-2">Quick Action</div>
          <div class="text-sm text-gray-500 mb-4">Choose an action</div>
          <div class="grid grid-cols-2 gap-2">
            <a href="#products" class="px-4 py-3 rounded-xl bg-brand text-white">Browse</a>
            <a href="#chat" class="px-4 py-3 rounded-xl bg-brand text-white">Chat</a>
          </div>
        </div>
      `);
    });
    
    $(document).on('submit','#loginForm',function(e){
      e.preventDefault();
      var identifier=$('#loginIdentifier').val()||'';
      var password=$('#loginPassword').val()||'';
      var remember=$('#loginRemember').prop('checked');
      if(!identifier || !password){toast('error','Enter email/username and password');return}
      var payload={password:password,remember:remember};
      if(identifier.indexOf('@')>-1){payload.email=identifier}else{payload.username=identifier}
      API.authLogin(payload)
        .done(function(res){
          var token=(res&&res.session_token)||(res&&res.token)||((res&&res.data&&res.data.session_token)||(res&&res.data&&res.data.token))||(res&&res.access_token)||'';
          if(token){
            try{localStorage.setItem('X-Auth-Token',JSON.stringify(token));localStorage.setItem(AppConfig.storage.tokenKey,JSON.stringify(token));}catch(e){}
            var u=(res&&res.data)||res||{};
            try{if(u && u.token_expires!==undefined) localStorage.setItem('token-expires',JSON.stringify(u.token_expires))}catch(e){}
            state.user={
              id:u.id,
              username:u.username,
              email:u.email,
              display_name:u.display_name||(u.first_name&&u.last_name?(u.first_name+' '+u.last_name):(u.username||'')),
              first_name:u.first_name,
              last_name:u.last_name
            };
            toast('success','Signed in');
            gotoProfile();
          }else{
            toast('error','Invalid credentials');
          }
        })
        .fail(function(){toast('error','Login failed')});
    });
    $(document).on('click','#loginForgot',function(e){e.preventDefault();toast('success','Check your email to reset password')});
    $(document).on('click','#loginSignup',function(e){e.preventDefault();location.hash='register'});
    $(document).on('submit','#registerForm',function(e){
      e.preventDefault();
      var first=$('#regFirstName').val()||'';
      var last=$('#regLastName').val()||'';
      var username=$('#regUsername').val()||'';
      var email=$('#regEmail').val()||'';
      var pass=$('#regPassword').val()||'';
      var pass2=$('#regPassword2').val()||'';
      if(!first||!last||!username||!email||!pass||!pass2){toast('error','Fill all fields');return}
      if(pass!==pass2){toast('error','Passwords do not match');return}
      API.authRegister({first_name:first,last_name:last,username:username,email:email,password:pass})
        .done(function(res){
          var token=(res&&res.session_token)||(res&&res.token)||((res&&res.data&&res.data.session_token)||(res&&res.data&&res.data.token))||(res&&res.access_token)||'';
          if(token){
            try{localStorage.setItem('X-Auth-Token',JSON.stringify(token));localStorage.setItem(AppConfig.storage.tokenKey,JSON.stringify(token));}catch(e){}
            var u=(res&&res.data)||res||{};
            try{if(u && u.token_expires!==undefined) localStorage.setItem('token-expires',JSON.stringify(u.token_expires))}catch(e){}
            state.user={
              id:u.id,
              username:u.username,
              email:u.email,
              display_name:u.display_name||(u.first_name&&u.last_name?(u.first_name+' '+u.last_name):(u.username||'')),
              first_name:u.first_name,
              last_name:u.last_name
            };
            toast('success','Account created');
            gotoProfile();
          }else{
            var identifier=username||email;
            var payload={password:pass,remember:true};
            if(identifier.indexOf('@')>-1){payload.email=identifier}else{payload.username=identifier}
            API.authLogin(payload)
              .done(function(res2){
                var token2=(res2&&res2.session_token)||(res2&&res2.token)||((res2&&res2.data&&res2.data.session_token)||(res2&&res2.data&&res2.data.token))||(res2&&res2.access_token)||'';
                if(token2){
                  try{localStorage.setItem('X-Auth-Token',JSON.stringify(token2));localStorage.setItem(AppConfig.storage.tokenKey,JSON.stringify(token2));}catch(e){}
                  var u2=(res2&&res2.data)||res2||{};
                  try{if(u2 && u2.token_expires!==undefined) localStorage.setItem('token-expires',JSON.stringify(u2.token_expires))}catch(e){}
                  state.user={
                    id:u2.id,
                    username:u2.username,
                    email:u2.email,
                    display_name:u2.display_name||(u2.first_name&&u2.last_name?(u2.first_name+' '+u2.last_name):(u2.username||'')),
                    first_name:u2.first_name,
                    last_name:u2.last_name
                  };
                  toast('success','Account created');
                  gotoProfile();
                }else{
                  toast('success','Account created');
                  location.hash='login';
                }
              })
              .fail(function(){toast('success','Account created');location.hash='login'});
          }
        })
        .fail(function(){toast('error','Registration failed')});
    });
    $(document).on('click','#registerLoginLink',function(e){e.preventDefault();location.hash='login'});
    $(document).on('click','#editProfile',function(e){
      e.preventDefault();
      var name=(state.user && (state.user.display_name||''))||'';
      var email=(state.user && state.user.email)||'';
      var phone=(state.user && state.user.phone)||'';
      var img=(state.user && state.user.avatarUrl)||'';
      modal(`
        <div class="p-4">
          <div class="text-lg font-semibold mb-2">Edit Profile</div>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                ${img ? `<img id="editPhotoPreview" src="${img}" class="w-full h-full object-cover"/>` : `<span class="text-gray-500 text-sm">${(name||'U').charAt(0)}</span>`}
              </div>
              <label class="px-3 py-2 rounded-lg border border-gray-300 text-sm cursor-pointer">
                <input id="editPhoto" type="file" accept="image/*" class="hidden"/>
                Change Photo
              </label>
            </div>
            <div>
              <label class="text-sm text-gray-700">Full Name</label>
              <input id="editFullName" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${name}" placeholder="John Doe"/>
            </div>
            <div>
              <label class="text-sm text-gray-700">Email</label>
              <input id="editEmail" type="email" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${email}" placeholder="john.doe@example.com"/>
            </div>
            <div>
              <label class="text-sm text-gray-700">Phone</label>
              <input id="editPhone" type="tel" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" value="${phone}" placeholder="+1 234 567 8900"/>
            </div>
            <div class="flex gap-2 pt-2">
              <button id="modalClose" class="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50">Cancel</button>
              <button id="saveProfile" class="flex-1 px-4 py-2 rounded-xl bg-brand text-white hover:bg-brandDark">Save</button>
            </div>
          </div>
        </div>
      `);
    });
    $(document).on('change','#editPhoto',function(){
      var file=this.files && this.files[0];
      if(!file) return;
      var reader=new FileReader();
      reader.onload=function(e){$('#editPhotoPreview').attr('src',e.target.result);state._pendingAvatarData=e.target.result;};
      reader.readAsDataURL(file);
    });
    $(document).on('click','#saveProfile',function(){
      var full=($('#editFullName').val()||'').toString();
      var email=($('#editEmail').val()||'').toString();
      var phone=($('#editPhone').val()||'').toString();
      var parts=full.trim().split(/\s+/);
      var first=parts[0]||'';
      var last=parts.slice(1).join(' ')||'';
      API.authProfileUpdate({first_name:first,last_name:last,display_name:full,billing:{phone:phone}})
        .done(function(){
          state.user=state.user||{};
          if(full) state.user.display_name=full;
          if(email) state.user.email=email;
          state.user.phone=phone;
          if(state._pendingAvatarData){state.user.avatarUrl=state._pendingAvatarData;state._pendingAvatarData=null;}
          toast('success','Profile updated');
          closeModal();
          render();
        })
        .fail(function(){toast('error','Failed to update profile')});
    });
    $(document).on('click','#editAvatar',function(e){e.preventDefault();$('#editProfile').trigger('click');setTimeout(function(){var el=$('#editPhoto');if(el.length) el.trigger('click');},150)});
    $(document).on('click','#profileSettings',function(e){e.preventDefault();toast('success','Settings coming soon')});
    $(document).on('click','#navAddresses',function(e){e.preventDefault();location.hash='addresses'});
    $(document).on('click','#navPayments',function(e){
      e.preventDefault();
      var saved=null;try{saved=JSON.parse(localStorage.getItem(AppConfig.storage.paymentKey)||'null')}catch(_){saved=null}
      var method=(saved && saved.method)||'card';
      var card=(saved && saved.card)||{};
      modal(`
        <div class="p-4">
          <div class="text-lg font-semibold mb-2">Payment Methods</div>
          <div class="space-y-3">
            <label class="flex items-center gap-2"><input type="radio" name="payMethod" value="card" ${method==='card'?'checked':''} class="rounded border-gray-300"/><span>Credit/Debit Card</span></label>
            <label class="flex items-center gap-2"><input type="radio" name="payMethod" value="cod" ${method==='cod'?'checked':''} class="rounded border-gray-300"/><span>Cash on Delivery</span></label>
            <label class="flex items-center gap-2"><input type="radio" name="payMethod" value="paypal" ${method==='paypal'?'checked':''} class="rounded border-gray-300"/><span>PayPal</span></label>
            <div id="cardFields" class="${method==='card'?'':'hidden'} space-y-2 pt-2">
              <input id="cardNumber" type="text" class="w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="Card Number" value="${card.number||''}"/>
              <input id="cardName" type="text" class="w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="Name on Card" value="${card.name||''}"/>
              <div class="grid grid-cols-2 gap-2">
                <input id="cardExpiry" type="text" class="w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="MM/YY" value="${card.expiry||''}"/>
                <input id="cardCvv" type="password" class="w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="CVV" value="${card.cvv||''}"/>
              </div>
            </div>
            <div class="flex gap-2 pt-2">
              <button id="modalClose" class="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50">Cancel</button>
              <button id="savePayment" class="flex-1 px-4 py-2 rounded-xl bg-brand text-white hover:bg-brandDark">Save</button>
            </div>
          </div>
        </div>
      `);
    });
    $(document).on('change','input[name="payMethod"]',function(){
      var v=$(this).val();
      $('#cardFields').toggleClass('hidden',v!=='card');
    });
    $(document).on('click','#savePayment',function(){
      var method=$('input[name="payMethod"]:checked').val()||'card';
      var payload={method:method};
      if(method==='card'){
        payload.card={
          number:($('#cardNumber').val()||'').toString(),
          name:($('#cardName').val()||'').toString(),
          expiry:($('#cardExpiry').val()||'').toString(),
          cvv:($('#cardCvv').val()||'').toString()
        };
      }
      try{localStorage.setItem(AppConfig.storage.paymentKey,JSON.stringify(payload))}catch(_){}
      state.paymentMethod=payload;
      toast('success','Payment method saved');
      closeModal();
    });
    $(document).on('click','#navVouchers',function(e){e.preventDefault();toast('success','Vouchers & offers coming soon')});
    $(document).on('click','#navNotifications',function(e){e.preventDefault();location.hash='notifications'});
    $(document).on('click','#navReviews',function(e){e.preventDefault();location.hash='reviews'});
    $(document).on('click','#navHelp',function(e){e.preventDefault();location.hash='help'});
    $(document).on('click','#navAbout',function(e){e.preventDefault();location.hash='about'});
    $(document).on('click','#navInvite',function(e){
      e.preventDefault();
      var url=location.href;
      var title='Join me on '+AppConfig.appName;
      var text='Check out this app';
      if(navigator.share){navigator.share({title:title,text:text,url:url}).catch(function(){})}
      else{try{navigator.clipboard.writeText(url);toast('success','Link copied')}catch(_){toast('success','Share this link: '+url)}}
    });
    $(document).on('click','[data-thread-id]',function(e){e.preventDefault();var id=parseInt($(this).attr('data-thread-id'),10)||0;if(id) location.hash='chatSingle?id='+id});
    $(document).on('click','[data-chat-tab]',function(){state.chatTab=$(this).attr('data-chat-tab');render()});
    $(document).on('click','#chatBack',function(e){e.preventDefault();location.hash='chat'});
    $(document).on('click','[data-chat-quick]',function(e){e.preventDefault();var txt=$(this).attr('data-chat-quick');if(txt==='Track my order'){$('#chatInput').val('Track my order').focus();return;}var tid=parseInt((state.query&&state.query.id)||'0',10);state.chatMessages=state.chatMessages||{};state.chatMessages[tid]=(state.chatMessages[tid]||[]).concat([{from:'me',text:txt,time:new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}]);render();setTimeout(function(){var reply={from:'other',text:'Thanks! We\'ll get back to you shortly.',time:new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})};state.chatMessages[tid]=(state.chatMessages[tid]||[]).concat([reply]);render()},800)});
    $(document).on('click','#chatSend',function(){var tid=parseInt((state.query&&state.query.id)||'0',10);var val=$('#chatInput').val()||'';if(!val.trim()) return;state.chatMessages=state.chatMessages||{};state.chatMessages[tid]=(state.chatMessages[tid]||[]).concat([{from:'me',text:val.trim(),time:new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}]);$('#chatInput').val('');render();setTimeout(function(){var reply={from:'other',text:'Got it! We\'ll reply shortly.',time:new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})};state.chatMessages[tid]=(state.chatMessages[tid]||[]).concat([reply]);render()},900)});
    $(document).on('keydown','#chatInput',function(e){if(e.key==='Enter'){e.preventDefault();$('#chatSend').trigger('click')}});
    $(document).on('click','#chatAttach',function(){toast('success','Attachment added (demo)')});
    $(document).on('click','#chatPhoto',function(){var tid=parseInt((state.query&&state.query.id)||'0',10);state.chatMessages=state.chatMessages||{};state.chatMessages[tid]=(state.chatMessages[tid]||[]).concat([{from:'me',text:'📷 Photo',time:new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}]);render();});
  $(document).on('click','[data-faq-toggle]',function(){
      var id=$(this).attr('data-faq-id');
      var body=$('#faq-'+id);
      var icon=$(this).find('[data-faq-icon]');
      $('#faqList [data-faq-body]').each(function(){
        $(this).css({maxHeight:'0px',opacity:'0'});
      });
      $('#faqList [data-faq-icon]').removeClass('rotate-90');
      var h=body.get(0).scrollHeight;
      body.css({maxHeight:h+'px',opacity:'1'});
      icon.addClass('rotate-90');
    });
    
    // Scroll event for infinite loading
    $(window).on('scroll', function() {
      if (scrollTimer) return;
      scrollTimer = setTimeout(function() {
        scrollTimer = null;
        var nearBottom = (window.scrollY + window.innerHeight + 200) >= document.body.scrollHeight;
        if (nearBottom && typeof window.loadMoreProducts === 'function') {
          window.loadMoreProducts();
        }
      }, 150);
    });
    
    // Sort select
    $(document).on('change', '#sortSelect', function() {
      var v = $(this).val() || '';
      var q = $.extend({}, state.query, { sort: v });
      var qs = Object.keys(q).filter(function(k) { return q[k] !== '' }).map(function(k) { 
        return k + '=' + encodeURIComponent(q[k]); 
      }).join('&');
      location.hash = 'products' + (qs ? '?' + qs : '');
    });
    
    // Open filter panel
    $(document).on('click', '#openFilterPanel', openFilterPanel);
    
    // Close filter panel
    $(document).on('click', '#closeFilterPanel, #filterOverlay', closeFilterPanel);
    
    // Apply filters
    $(document).on('click', '#applyFilters', applyFilters);
    
    // Clear filters in panel
    $(document).on('click', '#clearFilters', clearFilters);
    
    // Clear all filters from products page
    $(document).on('click', '#clearAllFilters, #clearAllFiltersBtn', function() {
      location.hash = 'products';
    });
    
    // Rating filter in panel
    $(document).on('click', '#filterContent [data-rating]', function() {
      var rating = $(this).attr('data-rating');
      $('#filterContent [data-rating]').removeClass('bg-yellow-100 text-yellow-700 border border-yellow-300')
                                       .addClass('bg-gray-100 text-gray-700 hover:bg-gray-200');
      if (rating === '0') {
        $(this).removeClass('bg-gray-100 text-gray-700').addClass('bg-gray-200 text-gray-800');
      } else {
        $(this).removeClass('bg-gray-100 text-gray-700 hover:bg-gray-200')
               .addClass('bg-yellow-100 text-yellow-700 border border-yellow-300');
      }
    });
    
    // Tag/Attribute/Brand click in panel
    $(document).on('click', '#filterContent .bg-gray-100, #filterContent .bg-green-100, #filterContent .bg-red-100', function() {
      var checkbox = $(this).siblings('input[type="checkbox"]');
      checkbox.prop('checked', !checkbox.prop('checked'));
      if (checkbox.prop('checked')) {
        if ($(this).hasClass('bg-gray-100')) {
          $(this).removeClass('bg-gray-100 text-gray-700 hover:bg-gray-200')
                 .addClass('bg-brand text-white');
        } else if ($(this).hasClass('bg-green-100')) {
          $(this).removeClass('bg-green-100 text-green-700 hover:bg-gray-200')
                 .addClass('bg-green-500 text-white');
        } else if ($(this).hasClass('bg-red-100')) {
          $(this).removeClass('bg-red-100 text-red-700 hover:bg-gray-200')
                 .addClass('bg-red-500 text-white');
        }
      } else {
        if ($(this).hasClass('bg-brand')) {
          $(this).removeClass('bg-brand text-white')
                 .addClass('bg-gray-100 text-gray-700 hover:bg-gray-200');
        } else if ($(this).hasClass('bg-green-500')) {
          $(this).removeClass('bg-green-500 text-white')
                 .addClass('bg-green-100 text-green-700 hover:bg-gray-200');
        } else if ($(this).hasClass('bg-red-500')) {
          $(this).removeClass('bg-red-500 text-white')
                 .addClass('bg-red-100 text-red-700 hover:bg-gray-200');
        }
      }
    });
    
    // Price range slider
    $(document).on('input', '#priceRange', function() {
      $('#filterMaxPrice').val($(this).val());
    });
    
    $(document).on('input', '#filterMinPrice, #filterMaxPrice', function() {
      var min = $('#filterMinPrice').val();
      var max = $('#filterMaxPrice').val();
      if (max) {
        $('#priceRange').val(max);
      }
    });
    
    // Category click (from category chips)
    $(document).on('click', '[data-cat]', function() {
      var cat = $(this).attr('data-cat') || '';
      if (!cat || cat.toLowerCase() === 'all') {
        location.hash = 'products';
      } else {
        location.hash = 'products?cat=' + encodeURIComponent(cat);
      }
    });

    $(document).on('click', '[data-p-tab]', function() {
      var t = $(this).attr('data-p-tab');
      $('#pTab_desc, #pTab_reviews, #pTab_shipping').addClass('hidden');
      $('#pTab_' + t).removeClass('hidden');
      $('[data-p-tab]').removeClass('text-brand border-b-2 border-brand').addClass('text-gray-700 border-b-2 border-transparent');
      $(this).removeClass('text-gray-700 border-transparent').addClass('text-brand border-b-2 border-brand');
    });
    $(document).on('click', '#readMoreToggle', function(){
      $('#readMoreText').toggleClass('hidden');
    });
    $(document).on('click', '#qtyMinus', function(){
      var v = (state.productQty || 1) - 1; if (v < 1) v = 1; state.productQty = v; render();
    });
    $(document).on('click', '#qtyPlus', function(){
      var v = (state.productQty || 1) + 1; state.productQty = v; render();
    });
    $(document).on('click', '[data-size]', function(){
      state.productSize = $(this).attr('data-size'); render();
    });
    $(document).on('click', '[data-color]', function(){
      state.productColor = $(this).attr('data-color'); render();
    });
    $(document).on('click', '#pdAddToCart', function(){
      var id = parseInt($(this).attr('data-id'), 10);
      var q = state.productQty || 1;
      for (var i = 0; i < q; i++) {
        state.cart.push(id);
      }
      save(AppConfig.storage.cartKey, state.cart);
      toast('success', 'Added to cart');
      render();
    });
    $(document).on('click', '#pdBuyNow', function(){
      var id = parseInt($(this).attr('data-id'), 10);
      var q = state.productQty || 1;
      for (var i = 0; i < q; i++) {
        state.cart.push(id);
      }
      save(AppConfig.storage.cartKey, state.cart);
      location.hash = 'cart';
    });
    $(document).on('click', '#pdShare', function(){
      var url = location.href;
      var title = 'Check out this product';
      if (navigator.share) {
        navigator.share({ title: title, url: url }).catch(function(){});
      } else {
        try {
          navigator.clipboard.writeText(url);
          toast('success','Link copied');
        } catch(_) {
          toast('success','Share this link: ' + url);
        }
      }
    });
  }
  
  function showSplashOnce(next){
    var key='me_splash_shown';
    var shown=localStorage.getItem(key);
    if(shown==='1'){next();return}
    var html='\n      <div id="splash" class="fixed inset-0 z-[100] flex items-center justify-center text-white" style="background:linear-gradient(160deg,#6d28d9,#ec4899)">\n        <div class="w-11/12 max-w-sm text-center">\n          <div class="mx-auto w-20 h-20 rounded-2xl bg-white/90 flex items-center justify-center">'+svg('cart','w-10 h-10 text-pink-600')+'</div>\n          <div class="mt-4 text-2xl font-bold">'+AppConfig.appName+'</div>\n          <div class="text-sm mt-1 opacity-90">Shop Live, Shop Smart</div>\n          <div class="mt-4 flex items-center justify-center gap-2">\n            <span class="w-2 h-2 rounded-full bg-white/80 animate-pulse"></span>\n            <span class="w-2 h-2 rounded-full bg-white/80 animate-pulse"></span>\n            <span class="w-2 h-2 rounded-full bg-white/80 animate-pulse"></span>\n          </div>\n          <div class="mt-2 text-xs opacity-90">Loading your experience...</div>\n          <div class="mt-3 h-1 w-full bg-white/30 rounded"><div id="splashBar" class="h-1 bg-white rounded" style="width:0%"></div></div>\n        </div>\n      </div>';
    var $el=$(html).appendTo('body');
    var $bar=$el.find('#splashBar');
    var p=0;var t=setInterval(function(){p+=8;if(p>=100){p=100;clearInterval(t);setTimeout(function(){localStorage.setItem(key,'1');$el.remove();next()},250)}$bar.css('width',p+'%')},80)
  }

  function start() {
    showSplashOnce(function(){
      $('#app').html(shell());
      bind();
      loadDataFromAPI();
      route();
      $(window).on('hashchange', route);
    });
  }
  
  $(start);
})();

// UI Components - These functions use buildSlider so they must come after it's defined
function heroBanner() {
  return `
  <section class="px-4 pt-3">
    <div class="rounded-2xl p-5 text-white overflow-hidden relative" style="background: linear-gradient(135deg, #7c3aed, #ec4899)">
      <div class="relative z-10">
        <div class="text-xl font-semibold">Live Shopping Experience</div>
        <div class="text-sm mt-2 opacity-90">Discover amazing products with live demonstrations from top creators</div>
        <div class="mt-4">
          <a href="#live" class="inline-block px-5 py-2.5 rounded-xl bg-white text-pink-600 font-medium hover:bg-gray-50 transition-colors">
            Start Watching
          </a>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-x-8 translate-y-8"></div>
      <div class="absolute top-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-6 -translate-y-6"></div>
    </div>
  </section>`;
}
 
function register(){
  return `
  <div class="px-4 py-6 max-w-md mx-auto">
    <div class="rounded-2xl border border-gray-200 bg-white p-4">
      <h2 class="text-lg font-semibold mb-4">Create Account</h2>
      <form id="registerForm" class="space-y-3">
        <div>
          <label class="text-sm text-gray-700">First Name</label>
          <input id="regFirstName" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="First name" required/>
        </div>
        <div>
          <label class="text-sm text-gray-700">Last Name</label>
          <input id="regLastName" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="Last name" required/>
        </div>
        <div>
          <label class="text-sm text-gray-700">Username</label>
          <input id="regUsername" type="text" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="yourusername" required/>
        </div>
        <div>
          <label class="text-sm text-gray-700">Email Address</label>
          <input id="regEmail" type="email" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="you@example.com" required/>
        </div>
        <div>
          <label class="text-sm text-gray-700">Password</label>
          <input id="regPassword" type="password" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="••••••••" required/>
        </div>
        <div>
          <label class="text-sm text-gray-700">Confirm Password</label>
          <input id="regPassword2" type="password" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="••••••••" required/>
        </div>
        <button type="submit" class="w-full px-4 py-3 rounded-xl bg-brand text-white hover:bg-brandDark">Create Account</button>
      </form>
      <div class="text-center text-sm mt-3">Already have an account? <a href="#" id="registerLoginLink" class="text-brand">Sign in</a></div>
    </div>
  </div>`
}

function categoryChips() {
  var qs = (location.hash.split('?')[1] || '').split('&').reduce(function(acc,p){var kv=p.split('=');if(kv[0]) acc[kv[0]]=decodeURIComponent(kv[1]||'');return acc},{})
  var activeCat = (qs.cat || 'All').toLowerCase();
  var list = Array.isArray(window.categories) ? window.categories.slice(0) : [];
  var cats = [{ name: 'All' }].concat(list);
  var items = cats.map(function(c, i) {
    var name = c.name || 'All';
    var active = (name.toLowerCase() === activeCat) || (activeCat === 'all' && i === 0);
    var cls = active ? 'bg-brand text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    return `
    <div class="shrink-0 px-1" style="width: ${100 / 4}%">
      <div data-cat="${name}" class="flex flex-col items-center justify-center px-2 py-4 rounded-xl ${cls} transition-colors cursor-pointer">
        <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1">
          <span class="text-sm">${name.charAt(0)}</span>
        </div>
        <div class="text-xs text-center truncate w-full">${name}</div>
      </div>
    </div>`;
  });
  
  var head = `
  <div class="px-4 pt-3 flex items-center justify-between">
    <div class="text-sm font-semibold">CATEGORIES</div>
    <a href="#products" class="text-brand text-sm">View All</a>
  </div>`;
  
  return head + buildSlider('categoriesSlider', items, 4);
}

function flashSaleHeader() {
  return `
  <div class="px-4 flex items-center justify-between mb-3">
    <div class="flex items-center gap-2">
      <span class="text-lg font-semibold">Flash Sale</span>
      <span class="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600 flex items-center gap-1">
        ${svg('fire', 'w-3 h-3')} HOT
      </span>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-1">
        <div class="w-6 h-6 rounded bg-gray-800 text-white flex items-center justify-center text-xs">02</div>
        <span class="text-gray-500">:</span>
        <div class="w-6 h-6 rounded bg-gray-800 text-white flex items-center justify-center text-xs">15</div>
        <span class="text-gray-500">:</span>
        <div class="w-6 h-6 rounded bg-gray-800 text-white flex items-center justify-center text-xs">38</div>
      </div>
      <a href="#products?filter=flash" class="text-brand text-sm">View All</a>
    </div>
  </div>`;
}

function featuredProductsHeader() {
  return `
  <div class="px-4 flex items-center justify-between mb-3">
    <div class="flex items-center gap-2">
      <span class="text-lg font-semibold">Featured Products</span>
      <span class="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-600 flex items-center gap-1">
        ${svg('award', 'w-3 h-3')} PREMIUM
      </span>
    </div>
    <div class="flex items-center gap-3">
      <div class="text-sm text-gray-500">Top Rated</div>
      <a href="#products?filter=featured" class="text-brand text-sm">View All</a>
    </div>
  </div>`;
}

function specialOffersHeader() {
  return `
  <div class="px-4 flex items-center justify-between mb-3">
    <div class="flex items-center gap-2">
      <span class="text-lg font-semibold">Special Offers</span>
      <span class="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 flex items-center gap-1">
        ${svg('tag', 'w-3 h-3')} EXCLUSIVE
      </span>
    </div>
    <div class="flex items-center gap-3">
      <div class="text-sm text-gray-500">Limited Time</div>
      <a href="#products?filter=special" class="text-brand text-sm">See All</a>
    </div>
  </div>`;
}

function relatedProductsHeader(slug) {
  return `
  <div class="px-4 flex items-center justify-between mb-3">
    <span class="text-lg font-semibold">Related Products</span>
    ${slug ? `<a href="#products?cat=${encodeURIComponent(slug)}" class="text-brand text-sm">See All</a>` : ''}
  </div>`;
}

function storiesSlider() {
  var imgs = ['assets/img/10.jpeg', 'assets/img/11.jpeg', 'assets/img/12.jpeg', 'assets/img/13.jpeg', 'assets/img/14.jpeg', 'assets/img/15.jpeg'];
  
  var plus = `
  <div class="shrink-0 px-2" style="width: 20%">
    <div class="w-16 h-16 rounded-full border-2 border-dashed border-pink-500 flex items-center justify-center mx-auto">
      <span class="text-pink-600 text-2xl">+</span>
    </div>
    <div class="text-center text-xs mt-2">You</div>
  </div>`;
  
  var slides = imgs.map(function(src, i) {
    return `
    <div class="shrink-0 px-2" style="width: 20%">
      <div class="relative mx-auto w-16 h-16">
        <img src="${Assets.local(src)}" class="w-16 h-16 rounded-full object-cover border-2 border-pink-500"/>
        <span class="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-red-600 text-white">Live</span>
      </div>
      <div class="text-center text-xs mt-2 truncate">Creator ${i + 1}</div>
    </div>`;
  });
  
  var head = `
  <div class="px-4 pt-3 flex items-center justify-between">
    <div class="text-sm font-semibold">LIVE STREAMS</div>
    <a href="#live" class="text-brand text-sm">View All</a>
  </div>`;
  
  return head + '<section class="px-4 py-2">' + buildSlider('storiesSlider', [plus].concat(slides), 5) + '</section>';
}

function liveGrid() {
  var imgs = ['assets/img/01.jpeg', 'assets/img/02.jpeg', 'assets/img/03.jpeg', 'assets/img/04.jpeg', 'assets/img/05.jpeg', 'assets/img/06.jpeg'];
  
  var cards = imgs.map(function(src, i) {
    return `
    <div class="rounded-xl overflow-hidden shadow border border-gray-200 hover:shadow-md transition-shadow">
      <div class="relative">
        <img src="${Assets.local(src)}" class="w-full h-40 object-cover" loading="lazy"/>
        <span class="absolute top-2 left-2 text-xs px-2 py-0.5 rounded bg-red-600 text-white">Live</span>
        <span class="absolute top-2 right-2 text-xs px-2 py-0.5 rounded bg-black/60 text-white">
          ${formatViewerCount((i + 1) * 1.2)}
        </span>
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
          <div class="text-white text-sm font-medium">Creator ${i + 1}</div>
          <div class="text-white/80 text-xs">Live Product Demo</div>
        </div>
      </div>
    </div>`;
  }).join('');
  
  return `
  <section class="px-4 py-3">
    <div class="flex items-center justify-between mb-3">
      <div class="text-sm font-semibold">TRENDING LIVE</div>
      <a href="#live-all" class="text-brand text-sm">View All</a>
    </div>
    <div class="grid grid-cols-2 gap-3">
      ${cards}
    </div>
  </section>`;
}
