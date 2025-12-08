// @ts-nocheck
window.url=function(){
    try{
        var u=new URL(location.href);
        var p=u.pathname;
        if(p.endsWith('/')) p=p.slice(0,-1);
        var i=p.lastIndexOf('/');
        var base=p.substring(0,i>0?i:0);
        return u.origin+base
    }catch(e){
        return (location.origin||'')
    }};
    window.windows=window.windows||{};
    window.windows.url=window.url;
    
window.AppConfig=(function(){
    return {
        appName:'Live Shopping',
        appBaseUrl:window.windows.url(),
        storage:{
            cartKey:'me_cart',
            wishlistKey:'me_wishlist',
            tokenKey:'me_token'
        },
        theme:{
            primaryStart:'#7c3aed',
            primaryEnd:'#ec4899',
            text:'#ec4899',
            hoverStart:'#6d28d9',
            hoverEnd:'#db2777',
            accent:'#db2777'
        },
        ui:{
            toastDuration:2500,
            modalBackdrop:'bg-black/40'
        },
        flags:{
            debug:true
        }
    }
})();

(function(){
    var t=window.AppConfig.theme;
    function hexToRgb(h){h=h.replace('#','');if(h.length===3){h=h.split('').map(function(c){return c+c}).join('')}var r=parseInt(h.substring(0,2),16);var g=parseInt(h.substring(2,4),16);var b=parseInt(h.substring(4,6),16);return [r,g,b]}
    var rgb=hexToRgb(t.text).join(' ');
    var css='\n.bg-brand{background:linear-gradient(135deg,'+t.primaryStart+','+t.primaryEnd+')}\n.text-brand{color:'+t.text+'}\n.hover\\:bg-brandDark:hover{background:linear-gradient(135deg,'+t.hoverStart+','+t.hoverEnd+')}\n.hover\\:text-brandDark:hover{color:'+t.accent+'}\n.from-brand\\/10{--tw-gradient-from: rgb('+rgb+' / 0.1) var(--tw-gradient-from-position); --tw-gradient-to: rgb('+rgb+' / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);}';
    var el=document.createElement('style');el.setAttribute('data-theme','app');el.innerHTML=css;document.head.appendChild(el);
})();

window.APIConfig=(function(){
    return {
        baseUrl:'http://localhost/liveshopping',
        namespace:'/wp-json/ecommerce-master/v1',
        endpoints:{
            products:'/products',
            productById:'/products/:id',
            productsFeatured:'/products/featured',
            productsByCategory:'/products/category/:slug',
            productsSearch:'/products/search',
            productsCategories:'/products/categories',
            reviewsByProduct:'/reviews/product/:id',
            authLogin:'/auth/login',
            authRegister:'/auth/register',
            authProfile:'/auth/profile',
            authLogout:'/auth/logout',
            authValidateToken:'/auth/validate-token',
            wishlist:'/wishlist',
            wishlistAdd:'/wishlist/add',
            wishlistRemove:'/wishlist/remove',
            wishlistClear:'/wishlist/clear',
            wishlistCheck:'/wishlist/check/:id',
            wishlistMoveToCart:'/wishlist/move-to-cart/:id',
            reviewsAdd:'/reviews/add',
            reviewsUser:'/reviews/user',
            reviewsUpdate:'/reviews/update/:id',
            reviewsDelete:'/reviews/delete/:id',
            addresses:'/addresses',
            addressesAdd:'/addresses/add',
            addressesUpdate:'/addresses/update',
            addressesDelete:'/addresses/delete',
            addressesSetDefault:'/addresses/set-default',
            productsUpdate:'/products/update/:id',
            ordersCreate:'/orders/create',
            orders:'/orders',
            orderById:'/orders/:id',
            ordersCancel:'/orders/cancel',
            ordersTracking:'/orders/tracking/:id',
            ordersStatuses:'/orders/statuses',
            cart:'/cart',
            cartAdd:'/cart/add',
            cartUpdate:'/cart/update',
            cartRemove:'/cart/remove',
            cartClear:'/cart/clear',
            cartCount:'/cart/count'
        }
    }
})();

window.Assets=(function(){
    var AppConf=window.AppConfig; var APIConf=window.APIConfig;
    function isAbs(u){return /^https?:\/\//.test(u)||/^\/\//.test(u)}
    function join(base,path){if(!path) return base; if(path.startsWith('/')) return base+path; if(path.startsWith('./')) path=path.slice(2); return base+'/'+path}
    return {
        local:function(path){var p=(path||'').toString(); if(isAbs(p)) return p; return join(AppConf.appBaseUrl,p)},
        api:function(path){var p=(path||'').toString(); if(isAbs(p)) return p; return join(APIConf.baseUrl,p)}
    }
})();

window.API=(function(){
    var AppConf=window.AppConfig; var APIConf=window.APIConfig;
    function build(endpoint,params,query){var url=APIConf.baseUrl+APIConf.namespace+endpoint;if(params){Object.keys(params).forEach(function(k){url=url.replace(':'+k,encodeURIComponent(params[k]))})}if(query){var qs=Object.keys(query).filter(function(k){return query[k]!==undefined&&query[k]!==null&&query[k]!==''}).map(function(k){return encodeURIComponent(k)+'='+encodeURIComponent(query[k])}).join('&');if(qs) url+=('?'+qs)}return url}
    function token(){
        try{
            var t1=localStorage.getItem('X-Auth-Token');
            if(t1){return JSON.parse(t1)}
            var t=localStorage.getItem(AppConf.storage.tokenKey);
            return t?JSON.parse(t):null
        }catch(e){return null}
    }
    function req(method,endpoint,opt){opt=opt||{};var url=build(endpoint,opt.params,opt.query);var headers={'Content-Type':'application/json','Accept':'application/json'};var t=token();if(t) headers['X-Auth-Token']=t;return $.ajax({method:method,url:url,headers:headers,data:opt.body?JSON.stringify(opt.body):null})}
    function get(endpoint,opt){return req('GET',endpoint,opt)}
    function post(endpoint,opt){return req('POST',endpoint,opt)}
    function put(endpoint,opt){return req('PUT',endpoint,opt)}
    function del(endpoint,opt){return req('DELETE',endpoint,opt)}
    return {
        getProducts:function(q){return get(APIConf.endpoints.products,{query:q})},
        getProductById:function(id){return get(APIConf.endpoints.productById,{params:{id:id}})},
        getFeaturedProducts:function(q){return get(APIConf.endpoints.productsFeatured,{query:q})},
        getProductsByCategory:function(slug,q){return get(APIConf.endpoints.productsByCategory,{params:{slug:slug},query:q})},
        searchProducts:function(q){return get(APIConf.endpoints.productsSearch,{query:q})},
        getCategories:function(){return get(APIConf.endpoints.productsCategories)},
        getReviewsByProduct:function(id){return get(APIConf.endpoints.reviewsByProduct,{params:{id:id}})},
        authRegister:function(body){return post(APIConf.endpoints.authRegister,{body:body})},
        authLogin:function(body){return post(APIConf.endpoints.authLogin,{body:body})},
        authProfile:function(){return get(APIConf.endpoints.authProfile)},
        authLogout:function(){return post(APIConf.endpoints.authLogout)},
        authValidateToken:function(){return get(APIConf.endpoints.authValidateToken)},
        getWishlist:function(){return get(APIConf.endpoints.wishlist)},
        addWishlist:function(id){return post(APIConf.endpoints.wishlistAdd,{body:{id:id}})},
        removeWishlist:function(id){return post(APIConf.endpoints.wishlistRemove,{body:{id:id}})},
        clearWishlist:function(){return post(APIConf.endpoints.wishlistClear)},
        checkWishlist:function(id){return get(APIConf.endpoints.wishlistCheck,{params:{id:id}})},
        moveWishlistToCart:function(id){return post(APIConf.endpoints.wishlistMoveToCart,{params:{id:id}})},
        reviewsAdd:function(body){return post(APIConf.endpoints.reviewsAdd,{body:body})},
        reviewsUser:function(){return get(APIConf.endpoints.reviewsUser)},
        reviewsUpdate:function(id,body){return put(APIConf.endpoints.reviewsUpdate,{params:{id:id},body:body})},
        reviewsDelete:function(id){return del(APIConf.endpoints.reviewsDelete,{params:{id:id}})},
        addresses:function(){return get(APIConf.endpoints.addresses)},
        addressesAdd:function(body){return post(APIConf.endpoints.addressesAdd,{body:body})},
        addressesUpdate:function(body){return put(APIConf.endpoints.addressesUpdate,{body:body})},
        addressesDelete:function(body){return del(APIConf.endpoints.addressesDelete,{body:body})},
        addressesSetDefault:function(body){return post(APIConf.endpoints.addressesSetDefault,{body:body})},
        productsUpdate:function(id,body){return put(APIConf.endpoints.productsUpdate,{params:{id:id},body:body})},
        ordersCreate:function(body){return post(APIConf.endpoints.ordersCreate,{body:body})},
        orders:function(){return get(APIConf.endpoints.orders)},
        orderById:function(id){return get(APIConf.endpoints.orderById,{params:{id:id}})},
        ordersCancel:function(body){return post(APIConf.endpoints.ordersCancel,{body:body})},
        ordersTracking:function(id){return get(APIConf.endpoints.ordersTracking,{params:{id:id}})},
        ordersStatuses:function(){return get(APIConf.endpoints.ordersStatuses)},
        cart:function(){return get(APIConf.endpoints.cart)},
        cartAdd:function(id){return post(APIConf.endpoints.cartAdd,{body:{id:id}})},
        cartUpdate:function(body){return put(APIConf.endpoints.cartUpdate,{body:body})},
        cartRemove:function(id){return post(APIConf.endpoints.cartRemove,{body:{id:id}})},
        cartClear:function(){return post(APIConf.endpoints.cartClear)},
        cartCount:function(){return get(APIConf.endpoints.cartCount)}
    }
})();
