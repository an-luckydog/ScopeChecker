$gwx_XC_14=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_14 || [];
function gz$gwx_XC_14_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_14=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_14=true;
var x=['./pages/figure/figure.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_14_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_14";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_14();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/figure/figure.wxml'] = [$gwx_XC_14, './pages/figure/figure.wxml'];else __wxAppCode__['pages/figure/figure.wxml'] = $gwx_XC_14( './pages/figure/figure.wxml' );
	;__wxRoute = "pages/figure/figure";__wxRouteBegin = true;__wxAppCurrentFile__="pages/figure/figure.js";define("pages/figure/figure.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Page({data:{height:"",weight:"",show:!1,res:{img:"",msg:"",ideal:"",bmi:""}},onShareAppMessage:function(){},height:function(i){this.setData({height:i.detail.value})},weight:function(i){this.setData({weight:i.detail.value})},getdata:function(i){wx.showLoading({title:"计算中"});var e=this.data.height,a=this.data.weight;if(""==e||""==a)return wx.showToast({title:"请输入身高体重",icon:"none",image:"../../images/error.png",duration:2e3}),!1;if(isNaN(e)||isNaN(a))wx.showToast({title:"请正确输入！",icon:"none",image:"../../images/error.png",duration:2e3});else{var t=.9*(e-100),s=a/(e/100*(e/100));s<18.5?this.setData({show:!0,res:{img:"../../images/bq4.png",msg:"你的体重太轻,要多吃点哟!",ideal:t,bmi:s}}):s>=18.5&&s<25?this.setData({show:!0,res:{img:"../../images/bq1.png",msg:"亲,你的体重正常,要继续保持哟",ideal:t,bmi:s}}):s>=25&&s<30?this.setData({show:!0,res:{img:"../../images/bq3.png",msg:"亲,您的体重过重,要减肥了!",ideal:t,bmi:s}}):this.setData({show:!0,res:{img:"../../images/bq2.png",msg:"亲,你确实要减肥了!",ideal:t,bmi:s}}),wx.hideLoading()}}});
},{isPage:true,isComponent:true,currentFile:'pages/figure/figure.js'});require("pages/figure/figure.js");