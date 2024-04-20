$gwx_XC_183=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_183 || [];
function gz$gwx_XC_183_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_183_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_183_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_183_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_183_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_183_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_183=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_183=true;
var x=['./pages/qa_im/components/link_notice_user/link_notice_user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_183_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_183";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_183();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/qa_im/components/link_notice_user/link_notice_user.wxml'] = [$gwx_XC_183, './pages/qa_im/components/link_notice_user/link_notice_user.wxml'];else __wxAppCode__['pages/qa_im/components/link_notice_user/link_notice_user.wxml'] = $gwx_XC_183( './pages/qa_im/components/link_notice_user/link_notice_user.wxml' );
	;__wxRoute = "pages/qa_im/components/link_notice_user/link_notice_user";__wxRouteBegin = true;__wxAppCurrentFile__="pages/qa_im/components/link_notice_user/link_notice_user.js";define("pages/qa_im/components/link_notice_user/link_notice_user.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../@babel/runtime/helpers/interopRequireDefault"),i=t(require("../../../../81E76856829A079CE7810051D30C7B70.js")),a=t(require("../../../../04A0CE03829A079C62C6A60426FB7B70.js")),e=getApp();Component({properties:{itemData:{type:Object,value:{}},doctorId:{type:String,value:""}},data:{navigatingUrl:"",navigatingMap:i.default,htmlSnip:""},lifetimes:{attached:function(){this.generatingNavigatingUrl(),this.convertingTextNode()}},observers:{itemData:function(){this.generatingNavigatingUrl(),this.convertingTextNode()}},methods:{navigating:function(){var t=this;this.data.navigatingUrl.includes("pages/tel_inquiry/index")?(e.sensors.track("AppClick",{app:"weixin_mini",click_position:"电话咨询系统消息",page_readable_name:"QA详情页",click_position_value:this.data.htmlSnip}),(0,a.default)(this.data.doctorId).then((function(i){var a=i.doctor_detail.service_list.filter((function(t){return"inquiry"===t.service_type}))[0];a&&a.price>=0?wx.navigateTo({url:t.data.navigatingUrl}):wx.showToast({title:"当前暂未开通电话咨询服务",icon:"none",duration:2e3})}))):wx.navigateTo({url:this.data.navigatingUrl})},generatingNavigatingUrl:function(){var t=this.data.navigatingMap[this.data.itemData.target],i="",a=this.data.itemData.param;for(var e in a)i=i+e+"="+a[e]+"&";var n="".concat(t,"?").concat(i,"&");this.setData({navigatingUrl:n})},convertingTextNode:function(){this.setData({htmlSnip:this.data.itemData.text})}}});
},{isPage:false,isComponent:true,currentFile:'pages/qa_im/components/link_notice_user/link_notice_user.js'});require("pages/qa_im/components/link_notice_user/link_notice_user.js");