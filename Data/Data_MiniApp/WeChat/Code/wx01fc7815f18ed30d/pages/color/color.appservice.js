$gwx_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];
function gz$gwx_XC_9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_9=true;
var x=['./pages/color/color.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_9_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_9";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/color/color.wxml'] = [$gwx_XC_9, './pages/color/color.wxml'];else __wxAppCode__['pages/color/color.wxml'] = $gwx_XC_9( './pages/color/color.wxml' );
	;__wxRoute = "pages/color/color";__wxRouteBegin = true;__wxAppCurrentFile__="pages/color/color.js";define("pages/color/color.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Page({data:{rvalue:0,gvalue:0,bvalue:0,color16:"000000",colors:"#000000"},changered:function(t){var a=t.detail.value.toString(16),e=this.data.gvalue.toString(16),l=this.data.bvalue.toString(16);(a+"").length<2&&(a="0"+a),(e+"").length<2&&(e="0"+e),(l+"").length<2&&(l="0"+l),this.setData({rvalue:t.detail.value,colors:"#"+a+e+l,color16:a+e+l})},changegreen:function(t){var a=this.data.rvalue.toString(16),e=t.detail.value.toString(16),l=this.data.bvalue.toString(16);(a+"").length<2&&(a="0"+a),(e+"").length<2&&(e="0"+e),(l+"").length<2&&(l="0"+l),this.setData({gvalue:t.detail.value,colors:"#"+a+e+l,color16:a+e+l})},changeblue:function(t){var a=this.data.rvalue.toString(16),e=this.data.gvalue.toString(16),l=t.detail.value.toString(16);(a+"").length<2&&(a="0"+a),(e+"").length<2&&(e="0"+e),(l+"").length<2&&(l="0"+l),this.setData({bvalue:t.detail.value,colors:"#"+a+e+l,color16:a+e+l})},inputcolor:function(t){if("#"==t.detail.value.substr(0,1)&&7==t.detail.value.length){var a=t.detail.value.slice(1,3),e=t.detail.value.slice(3,5),l=t.detail.value.slice(5,7);try{a=parseInt(a,16),e=parseInt(e,16),l=parseInt(l,16),this.setData({rvalue:a,gvalue:e,bvalue:l,colors:t.detail.value})}catch(t){}}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/color/color.js'});require("pages/color/color.js");