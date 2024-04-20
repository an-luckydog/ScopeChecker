$gwx_XC_131=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_131 || [];
function gz$gwx_XC_131_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_131_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_131_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_131_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'transparent'])
Z([3,'#fff'])
Z([3,'position: absolute;'])
Z([3,'light'])
Z([3,'批量领取'])
Z([[7],[3,'getShareParam']])
Z([[7],[3,'showShareMask']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_131_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_131_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_131=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_131=true;
var x=['./modules/mmcover/pages/receiveall/receiveall.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_131_1()
var oL7=_mz(z,'navbar',['backBtnVisible',0,'backgroundColor',1,'frontColor',1,'style',2,'styleName',3,'title',4],[],e,s,gg)
_(r,oL7)
var xM7=_mz(z,'share-mask',['getShareParam',6,'show',1],[],e,s,gg)
_(r,xM7)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_131";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_131();	if (__vd_version_info__.delayedGwx) __wxAppCode__['modules/mmcover/pages/receiveall/receiveall.wxml'] = [$gwx_XC_131, './modules/mmcover/pages/receiveall/receiveall.wxml'];else __wxAppCode__['modules/mmcover/pages/receiveall/receiveall.wxml'] = $gwx_XC_131( './modules/mmcover/pages/receiveall/receiveall.wxml' );
	;__wxRoute = "modules/mmcover/pages/receiveall/receiveall";__wxRouteBegin = true;__wxAppCurrentFile__="modules/mmcover/pages/receiveall/receiveall.js";define("modules/mmcover/pages/receiveall/receiveall.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../@babel/runtime/helpers/Objectvalues");var e=r(require("../../../../@babel/runtime/regenerator")),t=require("../../../../@babel/runtime/helpers/asyncToGenerator"),a=r(require("../../logic/Controller"));function r(e){return e&&e.__esModule?e:{default:e}}var n=wx.getSystemInfoSync().platform;Page({data:{todayNum:0,topThreeList:[],showShareMask:!1,platform:n},onShow:function(){this.getList()},getList:function(){var r=this;return t(e.default.mark((function t(){var n,s,i,o,u,c;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).getTime(),wx.showLoading({title:"加载中"}),e.next=4,a.default.getListDaily({time:n,pageNo:1,pageSize:100});case 4:s=e.sent,i=s.list,o=i.length>99?"99+":i.length,u={},i.forEach((function(e){u[e.brandName]=e.coverImage})),c=Object.values(u),wx.hideLoading(),r.setData({todayNum:o,topThreeList:c.slice(0,3)});case 12:case"end":return e.stop()}}),t)})))()},showShareMaskTap:function(){this.setData({showShareMask:!0})},onShareAppMessage:function(){return{title:"微信红包封面派发中，新年、明星、限定封面全都有",imageUrl:"https://static.img.tai.qq.com/mp/mmcover/redenv-index-share.png?v=2",path:"modules/mmcover/pages/index/index?from=appMessage"}},copyText:function(){wx.setClipboardData({data:"#红包封面",success:function(){wx.showToast({title:"已复制"})}})}});
},{isPage:true,isComponent:true,currentFile:'modules/mmcover/pages/receiveall/receiveall.js'});require("modules/mmcover/pages/receiveall/receiveall.js");