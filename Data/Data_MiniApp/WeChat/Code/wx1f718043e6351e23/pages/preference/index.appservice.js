$gwx_XC_116=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_116 || [];
function gz$gwx_XC_116_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_116_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_116_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_116_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'行业偏好'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_116_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_116_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_116=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_116=true;
var x=['./pages/preference/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_116_1()
var eLIB=_mz(z,'header',['onlyTitle',0,'title',1],[],e,s,gg)
_(r,eLIB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_116";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_116();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/preference/index.wxml'] = [$gwx_XC_116, './pages/preference/index.wxml'];else __wxAppCode__['pages/preference/index.wxml'] = $gwx_XC_116( './pages/preference/index.wxml' );
	;__wxRoute = "pages/preference/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/preference/index.js";define("pages/preference/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp();Page({data:{list:[],checkboxIndex:[],allChecked:!1,shareImg:""},onLoad:function(e){},onReady:function(){},onShow:function(){var t=this;e.loginCallback().then((function(n){t.getData(),e.QD.track("contentView",{menu:"其他",name_of_page:"设置感兴趣行业页"})}))},onHide:function(){},onUnload:function(){wx.getStorageSync("setInterestIndustry")||wx.setStorageSync("setInterestIndustry",!0)},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{imageUrl:this.data.shareImg}},getData:function(){var t=this;e.API.getIndustryLike().then((function(e){0==e.code&&t.setData({list:e.content})}))},checkboxChangeAll:function(e){var t=this.data.list,n=[];if(this.data.allChecked)for(var a=0,o=t.length;a<o;++a)t[a].checked=!1;else for(var c=0,s=t.length;c<s;++c)t[c].checked=!0,n.push(t[c].id);console.log(this.data.allChecked,t,n),this.setData({allChecked:!this.data.allChecked,list:t,checkboxIndex:n})},checkboxChange:function(e){console.log("checkbox发生change事件，携带value值为：",e.detail.value);for(var t=this.data.list,n=e.detail.value,a=0,o=t.length;a<o;++a){t[a].checked=!1;for(var c=0,s=n.length;c<s;++c)if(t[a].id===Number(n[c])){t[a].checked=!0;break}}t.length==n.length?this.setData({allChecked:!0}):this.setData({allChecked:!1}),this.setData({list:t,checkboxIndex:e.detail.value})},skipButton:function(){e.API.setIndustry([-1]).then((function(e){})),wx.navigateBack({delta:1})},confirmButton:function(){console.log(this.data.checkboxIndex),0!=this.data.checkboxIndex.length?(wx.setStorageSync("setInterestIndustry",!0),e.API.setIndustry(this.data.checkboxIndex).then((function(e){console.log(e),0==e.code&&wx.switchTab({url:"/pages/index/index"})}))):wx.showToast({title:"请选择您感兴趣的行业",icon:"none"})}});
},{isPage:true,isComponent:true,currentFile:'pages/preference/index.js'});require("pages/preference/index.js");