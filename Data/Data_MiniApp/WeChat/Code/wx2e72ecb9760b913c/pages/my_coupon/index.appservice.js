$gwx_XC_159=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_159 || [];
function gz$gwx_XC_159_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_159_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_159_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_159_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'noData']])
Z([[7],[3,'coupons']])
Z([3,'id'])
Z([[7],[3,'item']])
Z([1,true])
Z([3,''])
Z([[7],[3,'shareShow']])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_159_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_159_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_159=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_159=true;
var x=['./pages/my_coupon/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_159_1()
var cSDB=_n('view')
_rz(z,cSDB,'class',0,e,s,gg)
var oTDB=_v()
_(cSDB,oTDB)
if(_oz(z,1,e,s,gg)){oTDB.wxVkey=1
}
var lUDB=_v()
_(cSDB,lUDB)
var aVDB=function(eXDB,tWDB,bYDB,gg){
var x1DB=_mz(z,'coupon-item',['couponInfo',4,'isShow',1],[],eXDB,tWDB,gg)
_(bYDB,x1DB)
return bYDB
}
lUDB.wxXCkey=4
_2z(z,2,aVDB,e,s,gg,lUDB,'item','index','id')
oTDB.wxXCkey=1
_(r,cSDB)
var o2DB=_mz(z,'cy-modal',['btnText',6,'show',1,'title',2],[],e,s,gg)
_(r,o2DB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_159";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_159();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my_coupon/index.wxml'] = [$gwx_XC_159, './pages/my_coupon/index.wxml'];else __wxAppCode__['pages/my_coupon/index.wxml'] = $gwx_XC_159( './pages/my_coupon/index.wxml' );
	;__wxRoute = "pages/my_coupon/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/my_coupon/index.js";define("pages/my_coupon/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/toConsumableArray"),a=getApp(),t=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),o=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,i=t.baseUrl+"/api/v7/coupon/my/",s=t.baseUrl+"/cooperation/wap/weixin_mini/coupon_prolong/";Page({data:{coupons:[],page:1,hasMore:!1,noData:!1,shareShow:!1},onShow:function(){this.getCoupon()},getCoupon:function(){var t=this,o=this.data,s=o.coupons,n=void 0===s?[]:s,r=o.page,u=void 0===r?1:r;wx.request({url:i,method:"GET",data:{page:t.data.page},header:{"Content-Type":"application/json",Cookie:a.globalData.sessionid},success:function(a){console.log("res",a);var o=(a.data.coupons||[]).map((function(e){var a="元",t=e.max_discount_yuan;"percent_discount"==e.discount_type&&(a="折",t=10*e.percent_discount_rate);var o=String(t).split(".");return{id:e.id,title:e.title||"",description:e.description||"",focusPrice:o[0],tipsPrice:o.length>1?".".concat(o[1].substring(0,2)):"",unit:a,expireDate:e.expire_date||"",isSelected:!1,isValid:e.is_valid,isExpired:e.is_expired,isUsed:e.is_used,doctorId:e.doctor_id||null,forward:e.forward,forwardValue:e.forward_value}}));n=1===u?o:[].concat(e(n),e(o)),t.setData({coupons:n,noData:!n.length&&1===t.data.page,hasMore:a.data.has_more_page||!1})}})},onReachBottom:function(){this.data.hasMore&&(this.data.page+=1,this.getCoupon())},showModal:function(e){var a=e.target.dataset.id;this.setData({couponId:a,shareShow:!0})},onShareAppMessage:function(e){var t=this;return"menu"==e.from?{title:"这个小程序你迟早用得上，赶快收藏吧。",path:"/pages/index/index",imageUrl:"https://static.chunyuyisheng.com/@/media/images/2018/04/18/6d12/c0aa79f332a0_w696_h556_.png"}:(this.setData({shareShow:!1}),{title:"这个小程序你迟早用得上，赶快收藏吧。",imageUrl:"https://static.chunyuyisheng.com/@/media/images/2018/04/18/6d12/c0aa79f332a0_w696_h556_.png",success:function(e){wx.request({url:s,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:a.globalData.sessionid},method:"POST",data:o({coupon_id:t.data.couponId}),success:function(e){t.getCoupon()},error:function(){}})},fail:function(e){}})}});
},{isPage:true,isComponent:true,currentFile:'pages/my_coupon/index.js'});require("pages/my_coupon/index.js");