$gwx_XC_136=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_136 || [];
function gz$gwx_XC_136_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_136_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_136_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_136_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shouldShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_136_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_136_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_136=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_136=true;
var x=['./pages/index/components/image_mask/image_mask.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_136_1()
var hW8=_v()
_(r,hW8)
if(_oz(z,0,e,s,gg)){hW8.wxVkey=1
}
hW8.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_136";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_136();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/components/image_mask/image_mask.wxml'] = [$gwx_XC_136, './pages/index/components/image_mask/image_mask.wxml'];else __wxAppCode__['pages/index/components/image_mask/image_mask.wxml'] = $gwx_XC_136( './pages/index/components/image_mask/image_mask.wxml' );
	;__wxRoute = "pages/index/components/image_mask/image_mask";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/components/image_mask/image_mask.js";define("pages/index/components/image_mask/image_mask.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/regenerator")),a=require("../../../../@babel/runtime/helpers/asyncToGenerator"),t=getApp(),i=require("../../../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl+"/events/new_user_welfare/close_homepage_toast/";Component({properties:{url:{type:String,default:""},imgUrl:{type:String,default:""},adId:{type:String,default:""},adTitle:{type:String,default:""},adType:{type:String,default:""},adCyRedirect:{type:Object,default:{}},adTargetType:{type:String,default:""},adMiniAppId:{type:String,default:""},adWxMiniPage:{type:String,default:""},adJumpThird:{type:Boolean,default:!1}},observers:{"url, imgUrl, adCyRedirect":function(e,a,t){(e&&a||t&&t.target_scheme&&a)&&this.setData({shouldShow:!0})}},data:{shouldShow:!1},methods:{closeMask:function(){if("new_user_welfare"===this.data.adType)return this.notificationCloseMask(),void this.setData({shouldShow:!1});var e={app:"weixin_mini",ad_id:this.data.adId,ad_position:"AD首页弹窗关闭",ad_title:this.data.adTitle};t.sensors.track("AdClick",e),this.setData({shouldShow:!1})},toAdsUrl:function(){var i=this;return a(e.default.mark((function a(){var r;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new_user_welfare"===i.data.adType?(t.sensors.track("AppClick",{page_readable_name:"春雨首页",app:"weixin_mini",click_position:"新用户弹窗"}),i.triggerEvent("jumpPageEvent",i.data.adCyRedirect),i.closeMask()):(r={app:"weixin_mini",ad_id:i.data.adId,ad_position:"AD首页弹窗点击",ad_title:i.data.adTitle},t.sensors.track("AdClick",r),"wx_mini"===i.data.adTargetType?i.data.adJumpThird?wx.navigateToMiniProgram({appId:i.data.adMiniAppId,path:i.data.adWxMiniPage}):wx.navigateTo({url:i.data.adWxMiniPage}):wx.navigateTo({url:"/pages/h5_webview/index?url=".concat(encodeURIComponent(i.data.url))}),i.closeMask());case 1:case"end":return e.stop()}}),a)})))()},notificationCloseMask:function(){wx.request({url:i,method:"POST",header:{Cookie:t.globalData.sessionid},error:function(e){console.log("通知服务器关闭新用户弹窗发送错误")}})}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/components/image_mask/image_mask.js'});require("pages/index/components/image_mask/image_mask.js");