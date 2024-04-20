$gwx_XC_18=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_18 || [];
function gz$gwx_XC_18_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[8],'g',[[2,'!'],[[7],[3,'$primaryNoDone']]]],[[8],'l',[[2,'&&'],[[2,'!'],[[7],[3,'disableCMSMarketingModal']]],[[2,'!'],[[7],[3,'$cmsMarketingModalDisabled']]]]]],[[8],'m',[[7],[3,'$marketingModalNoBelongToPage']]]],[[8],'e',[[2,'!'],[1,0]]]],[[8],'f',[[2,'!'],[1,0]]]],[[8],'j',[[2,'!'],[1,0]]]],[[8],'t',[[2,'!'],[1,0]]]],[[8],'u',[[2,'!'],[1,0]]]])
Z([3,'titan-one-component'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_18=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_18=true;
var x=['./cms/RAW/pages/transform/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_18_1()
var tCD=_mz(z,'titan-one-component',['d',0,'id',1,'s',1],[],e,s,gg)
_(r,tCD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_18";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_18();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms/RAW/pages/transform/index.wxml'] = [$gwx_XC_18, './cms/RAW/pages/transform/index.wxml'];else __wxAppCode__['cms/RAW/pages/transform/index.wxml'] = $gwx_XC_18( './cms/RAW/pages/transform/index.wxml' );
	;__wxRoute = "cms/RAW/pages/transform/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms/RAW/pages/transform/index.js";define("cms/RAW/pages/transform/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/typeof");require("../../titan.bootstrap.js"),global.beginDefinePage=!0;var a=global.bc("platform","cms"),t=require("../../titan-scoped-env.js"),i=require("../../index"),n=o(require("../../utils/request")),r=o(require("../../utils/request2")),l=require("../../utils/util");function o(e){return e&&e.__esModule?e:{default:e}}t.Page({$cmsNotRecommendVid:!0,isJSON:function(a){try{if("object"==e(JSON.parse(a)))return!0}catch(e){}return!1},onLoad:function(e){var a,o,u=this;if(null===(a=t.titan)||void 0===a||a.stamp("CMS:二维码中转页:OnLoad"),e.scene)null===(o=t.titan)||void 0===o||o.stamp("CMS:二维码中转页:解析参数:开始"),r.default.post("/mall/navigation/page/explainShortCode",{queryParameter:{shortCode:e.scene}},{weimobOS:!1}).then((function(a){var r;if(null===(r=t.titan)||void 0===r||r.stamp("CMS:二维码中转页:解析参数:结束"),"0"===a.errcode)if(u.isJSON(a.data.url)){var o=JSON.parse(a.data.url);if(o.api){var d;null===(d=t.titan)||void 0===d||d.stamp("CMS:二维码中转页:二次解析:开始");var s=o.api;"/ec/mgr/guide/getGuideWechatAppQrCodeUrl"==s&&(s="/mall/guide/app/getGuideWechatAppQrCodeUrl"),n.default.post(s,o.params,{weimobOS:!1}).then((function(e){var a,n;null===(a=t.titan)||void 0===a||a.stamp("CMS:二维码中转页:二次解析:结束");var r=(0,l.getSwapUrl)(e.data);null===(n=t.titan)||void 0===n||n.stamp("CMS:二维码中转页:跳出"),i.CMS.navigator({url:r,mode:"reLaunch"})}))}else"Recommendation"===o.appid?n.default.post("/interactive/qianxi/lcode/shareTicketExport/getOldShareTicketRecord",{pid:o.pid||"",ticketList:[e.scene]},{weimobOS:!1}).then((function(e){var a,n;if(null===(a=t.titan)||void 0===a||a.stamp("CMS:二维码中转页:二次解析:结束"),null!=e&&null!==(n=e.data)&&void 0!==n&&n.url){var r,o=(0,l.getSwapUrl)(e.data.url);null===(r=t.titan)||void 0===r||r.stamp("CMS:二维码中转页:跳出"),i.CMS.navigator({url:o,mode:"reLaunch"})}else i.CMS.navigator({url:"/cms_design/index",mode:"reLaunch"})})).catch((function(){i.CMS.navigator({url:"/cms_design/index",mode:"reLaunch"})})):i.CMS.navigator({url:"/cms_design/index",mode:"reLaunch"})}else{var c,p=(0,l.getSwapUrl)(a.data.url);null===(c=t.titan)||void 0===c||c.stamp("CMS:二维码中转页:跳出"),i.CMS.navigator({url:p,mode:"reLaunch"})}}));else if(e.url){var d,s=(0,l.getSwapUrl)(decodeURIComponent(e.url));null===(d=t.titan)||void 0===d||d.stamp("CMS:二维码中转页:跳出"),i.CMS.navigator({url:s,mode:"reLaunch"})}else{var c;null===(c=t.titan)||void 0===c||c.stamp("CMS:二维码中转页:异常"),t.wx.showModal({title:"提示",content:"页面参数错误",showCancel:!1,confirmText:"确定",success:function(e){i.CMS.navigator({url:"/cms_design/index",mode:"reLaunch"})}})}}}),global.ec(a),global.beginDefinePage=!1;
},{isPage:false,isComponent:true,currentFile:'cms/RAW/pages/transform/index.js'});require("cms/RAW/pages/transform/index.js");