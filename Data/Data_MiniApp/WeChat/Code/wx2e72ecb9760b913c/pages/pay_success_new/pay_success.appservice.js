$gwx_XC_168=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_168 || [];
function gz$gwx_XC_168_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_168_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_168_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_168_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_168_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_168_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_168=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_168=true;
var x=['./pages/pay_success_new/pay_success.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_168_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_168";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_168();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/pay_success_new/pay_success.wxml'] = [$gwx_XC_168, './pages/pay_success_new/pay_success.wxml'];else __wxAppCode__['pages/pay_success_new/pay_success.wxml'] = $gwx_XC_168( './pages/pay_success_new/pay_success.wxml' );
	;__wxRoute = "pages/pay_success_new/pay_success";__wxRouteBegin = true;__wxAppCurrentFile__="pages/pay_success_new/pay_success.js";define("pages/pay_success_new/pay_success.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Page({data:{urlData:{serviceCount:2,pageType:""},count:4,typeMap:{normal_service:{titleText:"您已购买成功",firstLine:"您购买的问题已发送给医生",secondLine:"请您在春雨医生“当前咨询”中找到该服务",buttonText:"查看当前咨询",bottomLine:""},fast_phone:{titleText:"您已购买成功",firstLine:"专家助理会在十分钟之内联系您",secondLine:"请您保持电话畅通",buttonText:"5秒后自动返回我的咨询页面",bottomLine:"添加诊前描述，节省您的问诊时间"}},textObj:{titleText:"",firstLine:"",secondLine:"",buttonText:"",bottomLine:""}},onLoad:function(t){this.setData({"urlData.serviceCount":Number(t.service_count||0),"urlData.pageType":t.page_type}),this.makeText()},handleButtonTap:function(){wx.switchTab({url:"/pages/all_service/index"})},makeText:function(){var t=this;if(this.data.textObj=this.data.typeMap[this.data.urlData.pageType],"normal_service"===this.data.urlData.pageType)this.data.textObj.firstLine="您购买的问题已发送给".concat(this.data.urlData.serviceCount,"位医生");else if("fast_phone"===this.data.urlData.pageType)var e=setInterval((function(){t.data.count<=0&&(clearInterval(e),wx.switchTab({url:"/pages/all_service/index"})),t.setData({"textObj.buttonText":"".concat(t.data.count,"秒后自动返回我的咨询页面")}),t.data.count--}),1e3);this.setData({textObj:this.data.textObj})}});
},{isPage:true,isComponent:true,currentFile:'pages/pay_success_new/pay_success.js'});require("pages/pay_success_new/pay_success.js");