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
Z([[7],[3,'b']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_9=true;
var x=['./components/navbar/navbar.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_9_1()
var fKB=_v()
_(r,fKB)
if(_oz(z,0,e,s,gg)){fKB.wxVkey=1
}
fKB.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/navbar/navbar.wxml'] = [$gwx_XC_9, './components/navbar/navbar.wxml'];else __wxAppCode__['components/navbar/navbar.wxml'] = $gwx_XC_9( './components/navbar/navbar.wxml' );
	;__wxRoute = "components/navbar/navbar";__wxRouteBegin = true;__wxAppCurrentFile__="components/navbar/navbar.js";define("components/navbar/navbar.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../common/vendor.js"),t=require("../../common/assets.js"),n=e.defineComponent({__name:"navbar",props:{bgColor:{default:"#F5F5F5"},icon:{type:Boolean,default:!1},title:{default:"玩鸭拍照"},textSize:null,custom_back:{default:""}},emits:["backPage"],setup:function(n,a){var o=a.emit,r=n,u=e.ref(0),i=e.ref(0),s=e.ref(0),c=e.index.getMenuButtonBoundingClientRect();e.index.getSystemInfo({success:function(t){var n=c.height+2*(c.top-t.statusBarHeight);s.value=n,i.value=t.statusBarHeight,u.value=t.statusBarHeight+s.value,e.index.setStorageSync("wanya_height",u.value)},fail:function(e){}});var f=function(){if(r.custom_back)r.custom_back();else{var t=getCurrentPages();o("backPage"),t.length>1&&e.index.navigateBack()}};return function(a,o){return e.e({a:e.unref(i)+"px",b:n.icon},n.icon?{c:t._imports_0$5,d:e.o(f)}:{},{e:e.t(n.title),f:n.textSize+"rpx",g:e.unref(s)+"px",h:e.unref(u)+"px",i:n.bgColor})}}}),a=e._export_sfc(n,[["__scopeId","data-v-566e7979"]]);wx.createComponent(a);
},{isPage:false,isComponent:true,currentFile:'components/navbar/navbar.js'});require("components/navbar/navbar.js");