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
            tokenKey:'me_token',
            paymentKey:'me_payment'
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
            debug:false
        }
    }
})();

(function(){
    var t=window.AppConfig.theme;
    function hexToRgb(h){h=h.replace('#','');if(h.length===3){h=h.split('').map(function(c){return c+c}).join('')}var r=parseInt(h.substring(0,2),16);var g=parseInt(h.substring(2,4),16);var b=parseInt(h.substring(4,6),16);return [r,g,b]}
    var rgb=hexToRgb(t.text).join(' ');
    var css='\n.bg-brand{background:linear-gradient(135deg,'+t.primaryStart+','+t.primaryEnd+')}\n.text-brand{color:'+t.text+'}\n.hover\\:bg-brandDark:hover{background:linear-gradient(135deg,'+t.hoverStart+','+t.hoverEnd+')}\n.hover\\:text-brandDark:hover{color:'+t.accent+'}\n.from-brand\\/10{--tw-gradient-from: rgb('+rgb+' / 0.1) var(--tw-gradient-from-position); --tw-gradient-to: rgb('+rgb+' / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);}\n.no-scrollbar::-webkit-scrollbar{display:none}\n.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}\n.dragging{cursor:grabbing}';
    var el=document.createElement('style');el.setAttribute('data-theme','app');el.innerHTML=css;document.head.appendChild(el);
})();

window.APIConfig=(function(){
    return {
        baseUrl:'http://178.128.112.23',
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
            cartCount:'/cart/count',
            siteInfo:'/site-info',
            messagingConversations:'/messaging/conversations',
            messagingConversationsCreate:'/messaging/conversations',
            messagingMessagesByConversation:'/messaging/conversations/:id/messages',
            messagingMessagesSend:'/messaging/conversations/:id/messages',
            messagingUsers:'/messaging/users'
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
            var t=localStorage.getItem(AppConf.storage.tokenKey);
            return t?JSON.parse(t):null
        }catch(e){return null}
    }
    function cacheKey(method,endpoint,opt){
        opt=opt||{}; var id='list';
        if(opt.params && opt.params.id!==undefined && opt.params.id!==null){ id=String(opt.params.id); }
        else if(opt.params && opt.params.slug!==undefined && opt.params.slug!==null){ id=String(opt.params.slug); }
        else if(opt.query && opt.query.id!==undefined && opt.query.id!==null){ id=String(opt.query.id); }
        else {
            var q=opt.query||{}; var keys=['page','per_page','q','filter','cat','min','max','tags','sort','attrs','brands','minRating','stock'];
            var parts=[]; keys.forEach(function(k){ var v=q[k]; if(v!==undefined && v!==null && v!==''){ parts.push(k+'='+String(v)); }});
            if(parts.length){ id='list|'+parts.join('&'); }
        }
        return method+':'+endpoint+'='+id;
    }
    function readCache(k){
        try{
            var t=token(); var auth=(t?('Bearer '+String(t)):'anon'); var prefix='api_cache_auth:'+auth+':';
            var s=localStorage.getItem(prefix+k); return s?JSON.parse(s):null
        }catch(e){return null}
    }
    function writeCache(k,data){
        try{
            var t=token(); var auth=(t?('Bearer '+String(t)):'anon'); var prefix='api_cache_auth:'+auth+':';
            localStorage.setItem(prefix+k,JSON.stringify(data))
        }catch(e){}
    }
    function invalidateCache(match){
        try{
            for(var i=localStorage.length-1;i>=0;i--){
                var key=localStorage.key(i)||'';
                if(key.indexOf('api_cache_auth:')===0 && key.indexOf(':'+match+'=')>-1){ localStorage.removeItem(key) }
            }
        }catch(e){}
    }
    function req(method,endpoint,opt){opt=opt||{};var url=build(endpoint,opt.params,opt.query);var headers={'Accept':'application/json'};var t=token();if(t){headers['Authorization']='Bearer '+t}var ajaxOpts={method:method,url:url,headers:headers};if(opt.formData){ajaxOpts.data=opt.formData;ajaxOpts.processData=false;ajaxOpts.contentType=false}else if(opt.body){var ct=(opt.contentType||'application/json');headers['Content-Type']=ct;ajaxOpts.data=ct==='application/json'?JSON.stringify(opt.body):opt.body}else{headers['Content-Type']='application/json'}return $.ajax(ajaxOpts)}
    function get(endpoint,opt){opt=opt||{};var k=cacheKey('GET',endpoint,opt);var c=readCache(k);if(c){return $.Deferred().resolve(c).promise()}var jq=req('GET',endpoint,opt);jq.done(function(res){writeCache(k,res)});return jq}
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
        authRegister:function(body){return post(APIConf.endpoints.authRegister,{body:body}).always(function(){invalidateCache(APIConf.endpoints.authProfile)})},
        authLogin:function(body){return post(APIConf.endpoints.authLogin,{body:body}).always(function(){invalidateCache(APIConf.endpoints.authProfile)})},
        authProfile:function(){return get(APIConf.endpoints.authProfile)},
        authProfileUpdate:function(body){return put(APIConf.endpoints.authProfile,{body:body}).always(function(){invalidateCache(APIConf.endpoints.authProfile)})},
        authLogout:function(){return post(APIConf.endpoints.authLogout).always(function(){invalidateCache(APIConf.endpoints.authProfile)})},
        authValidateToken:function(){return get(APIConf.endpoints.authValidateToken)},
        getWishlist:function(){return get(APIConf.endpoints.wishlist)},
        addWishlist:function(id){return post(APIConf.endpoints.wishlistAdd,{body:{product_id:id}}).always(function(){invalidateCache(APIConf.endpoints.wishlist)})},
        removeWishlist:function(id){return del(APIConf.endpoints.wishlistRemove,{body:{product_id:id}}).always(function(){invalidateCache(APIConf.endpoints.wishlist)})},
        clearWishlist:function(){return del(APIConf.endpoints.wishlistClear).always(function(){invalidateCache(APIConf.endpoints.wishlist)})},
        checkWishlist:function(id){return get(APIConf.endpoints.wishlistCheck,{params:{id:id}})},
        moveWishlistToCart:function(id){return post(APIConf.endpoints.wishlistMoveToCart,{params:{id:id}}).always(function(){invalidateCache(APIConf.endpoints.wishlist);invalidateCache(APIConf.endpoints.cart);invalidateCache(APIConf.endpoints.cartCount)})},
        reviewsAdd:function(body){return post(APIConf.endpoints.reviewsAdd,{body:body}).always(function(){invalidateCache(APIConf.endpoints.reviewsUser);invalidateCache('/reviews')})},
        reviewsUser:function(){return get(APIConf.endpoints.reviewsUser)},
        reviewsUpdate:function(id,body){return put(APIConf.endpoints.reviewsUpdate,{params:{id:id},body:body}).always(function(){invalidateCache(APIConf.endpoints.reviewsUser);invalidateCache('/reviews')})},
        reviewsDelete:function(id){return del(APIConf.endpoints.reviewsDelete,{params:{id:id}}).always(function(){invalidateCache(APIConf.endpoints.reviewsUser);invalidateCache('/reviews')})},
        addresses:function(){return get(APIConf.endpoints.addresses)},
        addressesAdd:function(body){return post(APIConf.endpoints.addressesAdd,{body:body}).always(function(){invalidateCache(APIConf.endpoints.addresses)})},
        addressesUpdate:function(body){return put(APIConf.endpoints.addressesUpdate,{body:body}).always(function(){invalidateCache(APIConf.endpoints.addresses)})},
        addressesDelete:function(body){return del(APIConf.endpoints.addressesDelete,{body:body}).always(function(){invalidateCache(APIConf.endpoints.addresses)})},
        addressesSetDefault:function(body){return post(APIConf.endpoints.addressesSetDefault,{body:body}).always(function(){invalidateCache(APIConf.endpoints.addresses)})},
        productsUpdate:function(id,body){return put(APIConf.endpoints.productsUpdate,{params:{id:id},body:body}).always(function(){invalidateCache('/products')})},
        ordersCreate:function(body){return post(APIConf.endpoints.ordersCreate,{body:body}).always(function(){invalidateCache(APIConf.endpoints.orders);invalidateCache(APIConf.endpoints.cart);invalidateCache(APIConf.endpoints.cartCount)})},
        orders:function(){return get(APIConf.endpoints.orders)},
        orderById:function(id){return get(APIConf.endpoints.orderById,{params:{id:id}})},
        ordersCancel:function(body){return post(APIConf.endpoints.ordersCancel,{body:body}).always(function(){invalidateCache(APIConf.endpoints.orders)})},
        ordersTracking:function(id){return get(APIConf.endpoints.ordersTracking,{params:{id:id}})},
        ordersStatuses:function(){return get(APIConf.endpoints.ordersStatuses)},
        cart:function(){return get(APIConf.endpoints.cart)},
        cartAdd:function(productId,quantity){return post(APIConf.endpoints.cartAdd,{body:{product_id:productId,quantity:quantity||1}}).always(function(){invalidateCache(APIConf.endpoints.cart);invalidateCache(APIConf.endpoints.cartCount)})},
        cartUpdate:function(body){return put(APIConf.endpoints.cartUpdate,{body:body}).always(function(){invalidateCache(APIConf.endpoints.cart);invalidateCache(APIConf.endpoints.cartCount)})},
        cartRemove:function(cartItemKey){return del(APIConf.endpoints.cartRemove,{body:{cart_item_key:cartItemKey}}).always(function(){invalidateCache(APIConf.endpoints.cart);invalidateCache(APIConf.endpoints.cartCount)})},
        cartClear:function(){return del(APIConf.endpoints.cartClear).always(function(){invalidateCache(APIConf.endpoints.cart);invalidateCache(APIConf.endpoints.cartCount)})},
        cartCount:function(){return get(APIConf.endpoints.cartCount)}
        ,siteInfo:function(){return get(APIConf.endpoints.siteInfo)}
        ,messagingConversations:function(q){return get(APIConf.endpoints.messagingConversations,{query:q})}
        ,messagingConversationsCreate:function(body){return post(APIConf.endpoints.messagingConversationsCreate,{body:body}).always(function(){invalidateCache(APIConf.endpoints.messagingConversations)})}
        ,messagingMessages:function(id){return get(APIConf.endpoints.messagingMessagesByConversation,{params:{id:id}})}
        ,messagingMessagesSend:function(id,bodyOrForm){if(bodyOrForm instanceof FormData){return post(APIConf.endpoints.messagingMessagesSend,{params:{id:id},formData:bodyOrForm}).always(function(){invalidateCache('/messaging/conversations/'+id+'/messages')})}return post(APIConf.endpoints.messagingMessagesSend,{params:{id:id},body:bodyOrForm}).always(function(){invalidateCache('/messaging/conversations/'+id+'/messages')})}
        ,messagingUsers:function(q){return get(APIConf.endpoints.messagingUsers,{query:q})}
    }
})();
