$gwx_XC_162=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_162 || [];
function gz$gwx_XC_162_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_162_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_162_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_162_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'couponList']],[3,'length']])
Z([[7],[3,'couponList']])
Z([3,'index'])
Z([3,'clickToUseCoupon'])
Z([3,'coupon-item'])
Z([[6],[[7],[3,'item']],[3,'cy_redirect']])
Z([[6],[[7],[3,'item']],[3,'status']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'not_used']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'used']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'expire']])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'not_received']],[[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'cancelled']]])
Z([[7],[3,'isNotNewUser']])
Z([3,'confirmEventHandler'])
Z([3,'我知道了'])
Z([3,'仅限新用户领取优惠券呦'])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_162_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_162_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_162=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_162=true;
var x=['./pages/new_user_welfare/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_162_1()
var lMEB=_v()
_(r,lMEB)
if(_oz(z,0,e,s,gg)){lMEB.wxVkey=1
var tOEB=_v()
_(lMEB,tOEB)
var ePEB=function(oREB,bQEB,xSEB,gg){
var fUEB=_mz(z,'view',['bind:tap',3,'class',1,'data-cy_redirect',2,'data-status',3],[],oREB,bQEB,gg)
var cVEB=_v()
_(fUEB,cVEB)
if(_oz(z,7,oREB,bQEB,gg)){cVEB.wxVkey=1
}
var hWEB=_v()
_(fUEB,hWEB)
if(_oz(z,8,oREB,bQEB,gg)){hWEB.wxVkey=1
}
var oXEB=_v()
_(fUEB,oXEB)
if(_oz(z,9,oREB,bQEB,gg)){oXEB.wxVkey=1
}
var cYEB=_v()
_(fUEB,cYEB)
if(_oz(z,10,oREB,bQEB,gg)){cYEB.wxVkey=1
}
cVEB.wxXCkey=1
hWEB.wxXCkey=1
oXEB.wxXCkey=1
cYEB.wxXCkey=1
_(xSEB,fUEB)
return xSEB
}
tOEB.wxXCkey=2
_2z(z,1,ePEB,e,s,gg,tOEB,'item','index','index')
}
var aNEB=_v()
_(r,aNEB)
if(_oz(z,11,e,s,gg)){aNEB.wxVkey=1
var oZEB=_mz(z,'cy-dialog',['bind:onTouchConfirm',12,'confirmText',1,'content',2,'isShowCancelBtn',3],[],e,s,gg)
_(aNEB,oZEB)
}
lMEB.wxXCkey=1
aNEB.wxXCkey=1
aNEB.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_162";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_162();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/new_user_welfare/index.wxml'] = [$gwx_XC_162, './pages/new_user_welfare/index.wxml'];else __wxAppCode__['pages/new_user_welfare/index.wxml'] = $gwx_XC_162( './pages/new_user_welfare/index.wxml' );
	;__wxRoute = "pages/new_user_welfare/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/new_user_welfare/index.js";define("pages/new_user_welfare/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../@babel/runtime/regenerator")),n=require("../../@babel/runtime/helpers/asyncToGenerator"),a=require("../../43A2F676829A079C25C49E711B4C7B70.js"),i=e(require("../../7C7490B0829A079C1A12F8B759DC7B70.js")),r=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,s=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").wxShowLoading,o=require("../../FE1120A4829A079C987748A30A3D7B70.js"),u=o.saveSubscribeMessage,c=o.subscribeBtnShow,l=o.subscribeMessage,g=o.changeIsSubscribeConsultMessageValue,d=o.jumpToTargetPage,p=["4ztYTNvm4EoxrjJDNY5z395PKDiNoB9zQGRHUrUKIr4"],f=getApp();Page({data:{majorBusinessList:[{image:"https://staff.chunyu.mobi/@/media/images/2023/03/15/e8b4/0c28041319c2_w509_h465_.png",cy_redirect:{target_scheme:"".concat(r,"/v-m-c-live/live/collection"),target_type:"html"}},{image:"https://staff.chunyu.mobi/@/media/images/2023/03/15/cc82/393a90f7358e_w509_h465_.png",cy_redirect:{target_scheme:"".concat(r,"/v-m-community/square"),target_type:"html"}}],couponList:[],weixinLink:{},assistantLink:{},isLogin:!1,isNotNewUser:!1},onShow:function(){this.afterLoginToGetDetail(),c(p,g)},afterLoginToGetDetail:function(){var e=this;return n(t.default.mark((function n(){return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.data.isLogin){t.next=4;break}return t.next=3,(0,a.manualLogin)();case 3:e.setData({isLogin:!0});case 4:e.getPageDetail();case 5:case"end":return t.stop()}}),n)})))()},getPageDetail:function(){var e=this;s("加载中"),(0,i.default)("/events/new_user_welfare/user_welfare_info/").then((function(t){var n=t.coupon_list,a=void 0===n?[]:n,i=t.weixin_link,r=t.assistant_link,s=t.is_new_user;e.setData({isNotNewUser:!s,couponList:a,weixinLink:i,assistantLink:r}),wx.hideLoading()})).catch((function(e){var t,n;wx.hideLoading(),wx.showToast({icon:"none",title:(null==e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.error_msg)||"获取福利页面详情失败",duration:1500})}))},clickToUseCoupon:function(e){var a=this;return n(t.default.mark((function n(){var i,r,s,o,c,g;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=f.globalData.isSubscribeConsultMessage,s=(null===(i=e.currentTarget)||void 0===i?void 0:i.dataset)||{},o=s.status,c=s.cy_redirect,"not_used"===o){t.next=4;break}return t.abrupt("return");case 4:if(r){t.next=19;break}return t.prev=5,t.next=8,l(p);case 8:g=t.sent,u(p,g),a.jumpToCanUseCouponPage(c),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(5),a.jumpToCanUseCouponPage(c),console.log("订阅消息失败",t.t0);case 17:t.next=20;break;case 19:a.jumpToCanUseCouponPage(c);case 20:case"end":return t.stop()}}),n,null,[[5,13]])})))()},jumpToCanUseCouponPage:function(e){d(e)},jumpToCmsContentPage:function(e){var t,n,a=(null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.redirect)||{};d(a)},confirmEventHandler:function(){wx.switchTab({url:"/pages/index/index"})}});
},{isPage:true,isComponent:true,currentFile:'pages/new_user_welfare/index.js'});require("pages/new_user_welfare/index.js");