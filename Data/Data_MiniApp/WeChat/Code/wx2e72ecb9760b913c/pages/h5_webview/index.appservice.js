$gwx_XC_115=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_115 || [];
function gz$gwx_XC_115_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_115_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_115_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_115_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_115_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_115_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_115=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_115=true;
var x=['./pages/h5_webview/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_115_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_115";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_115();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/h5_webview/index.wxml'] = [$gwx_XC_115, './pages/h5_webview/index.wxml'];else __wxAppCode__['pages/h5_webview/index.wxml'] = $gwx_XC_115( './pages/h5_webview/index.wxml' );
	;__wxRoute = "pages/h5_webview/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/h5_webview/index.js";define("pages/h5_webview/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").getQueryStr,t=getApp(),i=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),a=require("../../92BC1755829A079CF4DA7F52C55D7B70.js"),r=["/partner_volunteer/front/index/?partner=yizhen_kangwangqa"];Page({data:{loading:!0,canUseWebView:wx.canIUse("web-view"),url:"",returnToAllService:0,goodsTitle:"",imageUrl:"",productUrl:"",hospitalTitle:"",hospitalImg:"",hospitalLink:"",shareObj:{},webviewHide:!1,finishedUrl:"",needReresh:"",h5Title:""},getMessage:function(e){console.log(e,"res"),wx.setStorage({key:"h5_to_user_center",data:!0});for(var t=e.detail.data||[],i=0;i<t.length;i++){if("chunyu_mall"===t[i].origin&&(this.data.goodsTitle=t[i].goodsTitle,this.data.imageUrl=t[i].imageUrl,this.data.productUrl=t[i].link),"hospital-list"===t[i].origin&&(this.data.hospitalTitle=t[i].title,this.data.hospitalImg=t[i].img,this.data.hospitalLink=t[i].link),"health-assessment"===t[i].origin){var a=t[i],r=a.title,s=a.img,n=a.link,o=a.origin;this.data.shareObj={title:r,img:s,link:n,origin:o}}if("health-program-daily-task"===t[i].origin&&(this.data.shareObj.isSpecial=t[i].is_special||"",this.data.shareObj.origin=t[i].origin,this.data.shareObj.program_id=t[i].program_id),"device"===t[i].origin){var l=t[i].info,h=void 0===l?{}:l;wx.setStorage({key:"healthHomeEhrId",data:h.ehrId})}if("qingxin-disseminate"===t[i].origin||"common-activity/lottery"===t[i].origin||"vue-m-c-live"===t[i].origin){var d=t[i],c=d.title,g=d.img,u=d.link,v=d.origin;this.data.shareObj={title:c,img:g,link:u,origin:v}}}t.length||(this.shareObj={})},onLoad:function(i){if(i.h5_title&&(this.data.h5Title=i.h5_title),i.scene){console.log(i.scene);var s=decodeURIComponent(decodeURIComponent(i.scene));console.log("-----",s),this.goH5WithScene(s)}else{this.setData({returnToAllService:Number(i.returnToAllService)||0});var n=i.url&&decodeURIComponent(i.url),o=n||t.globalData.webviewUrl;if(o){var l=a.isCyDomain(o),h=a.getQueryStr("device_id",o);if(l&&!h){var d=wx.getStorageSync("open_id")||wx.getStorageSync("device_id")||"";o=/\?/.test(o)?o+"&web_distinct_id="+d:o+"?web_distinct_id="+d}this.setPageUrl(o)}if(n&&n.indexOf("activity_id")>0){var c=e("activity_id",n);wx.setStorage({key:"h5_activity_id",data:c})}}r.forEach((function(e){-1!==decodeURIComponent(i.url).indexOf(e)&&wx.hideShareMenu()}))},onShareAppMessage:function(e){if(console.log("this.data.shareObj",this.data.shareObj),e.webViewUrl.indexOf("v-m-mall")>0){var t={path:"/pages/h5_webview/index?url=".concat(encodeURIComponent(e.webViewUrl))};return this.data.goodsTitle&&(t.title=this.data.goodsTitle),this.data.imageUrl&&(t.imageUrl=this.data.imageUrl),this.data.productUrl&&(t.path="/pages/h5_webview/index?url=".concat(encodeURIComponent(this.data.productUrl))),t}if(e.webViewUrl.indexOf("hospital-list")>0)return{path:"/pages/h5_webview/index?url=".concat(this.data.hospitalLink||encodeURIComponent(e.webViewUrl)),imageUrl:this.data.hospitalImg||"",title:this.data.hospitalTitle||""};if("health-assessment"===this.data.shareObj.origin)return this.setData({url:"".concat(this.data.finishedUrl,"#share")}),{path:"/pages/h5_webview/index?url=".concat(this.data.shareObj.link),imageUrl:this.data.shareObj.img||"",title:this.data.shareObj.title||""};if("health-program-daily-task"===this.data.shareObj.origin){if("true"===this.data.shareObj.isSpecial.toLowerCase()){var a=i.baseUrl+"/product_operation/health_program/".concat(this.data.shareObj.program_id,"/detail/");return console.log(a),{path:"/pages/h5_webview/index?url=".concat(encodeURIComponent(a))}}return{path:"/pages/h5_webview/index?url=".concat(encodeURIComponent(e.webViewUrl))}}return"qingxin-disseminate"===this.data.shareObj.origin||"common-activity/lottery"===this.data.shareObj.origin||"vue-m-c-live"===this.data.shareObj.origin?(this.setData({url:"".concat(this.data.finishedUrl,"#share")}),{path:"/pages/h5_webview/index?url=".concat(this.data.shareObj.link),imageUrl:this.data.shareObj.img||"",title:this.data.shareObj.title||""}):{path:"/pages/h5_webview/index?url=".concat(encodeURIComponent(e.webViewUrl))}},onUnload:function(){this.data.url.includes("third_ai")&&wx.request({url:"https://www.chunyuyisheng.com/third_ai/chat/api/v1/log",method:"POST",data:{event:"chat.pageview.hide",sign:e("sign",this.data.url)}}),1===this.data.returnToAllService&&wx.switchTab({url:"/pages/all_service/index"})},onShow:function(){if(this.data.webviewHide&&(this.data.webviewHide=!1,this.data.finishedUrl)){var t=this.data.finishedUrl,i=e("need_refresh",t);"1"===String(i)&&this.setPageUrl("".concat(t,"&t=").concat((new Date).getTime()))}},onHide:function(){this.data.webviewHide=!0},onLoadSuccess:function(e){var t;this.data.finishedUrl=(null==e||null===(t=e.detail)||void 0===t?void 0:t.src)||"",this.data.h5Title&&wx.setNavigationBarTitle({title:this.data.h5Title})},goH5WithScene:function(e){if(e){var t=a.getQueryStr("t","?".concat(e)),r=a.getQueryStr("url","?".concat(e));if(r){var s=decodeURIComponent(r);this.setPageUrl(s)}else if(t){var n=a.getQueryStr("id",e);switch(t){case"topic":this.setPageUrl("".concat(i.baseUrl,"/v-m-community/topic?topic_id=").concat(n));break;case"post":this.setPageUrl("".concat(i.baseUrl,"/v-m-community/posts-detail?id=").concat(n));break;case"m-live-b":this.setPageUrl("".concat(i.baseUrl,"/v-m-live/live-play/?activity_id=").concat(n,"&from_type=poster"));break;case"m-live-c":this.setPageUrl("".concat(i.baseUrl,"/v-m-c-live/home/?activity_id=").concat(n,"&from_type=poster"));break;case"m-survey-qa":this.setPageUrl("".concat(i.baseUrl,"/events/questionnaire/v_m_survey/question-index-qa?questionnaire_id=").concat(n));break;case"m-survey":this.setPageUrl("".concat(i.baseUrl,"/events/questionnaire/v_m_survey/question-index?questionnaire_id=").concat(n));break;case"m-questionnaire":this.setPageUrl("".concat(i.baseUrl,"/v_m_questionnaire_vue/questionnaire/").concat(n));break;default:console.log("未识别的导航类型")}}}},setPageUrl:function(e){var t=a.setWebviewUrlWithLoginCredentials(e);this.setData({loading:!1,url:t})}});
},{isPage:true,isComponent:true,currentFile:'pages/h5_webview/index.js'});require("pages/h5_webview/index.js");