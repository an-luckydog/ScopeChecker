$gwx_XC_137=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_137 || [];
function gz$gwx_XC_137_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_137_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_137_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_137_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'removed']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_137_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_137_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_137=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_137=true;
var x=['./pages/index/components/toast_bubble/toast_bubble.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_137_1()
var cY8=_v()
_(r,cY8)
if(_oz(z,0,e,s,gg)){cY8.wxVkey=1
}
cY8.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_137";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_137();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/components/toast_bubble/toast_bubble.wxml'] = [$gwx_XC_137, './pages/index/components/toast_bubble/toast_bubble.wxml'];else __wxAppCode__['pages/index/components/toast_bubble/toast_bubble.wxml'] = $gwx_XC_137( './pages/index/components/toast_bubble/toast_bubble.wxml' );
	;__wxRoute = "pages/index/components/toast_bubble/toast_bubble";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/components/toast_bubble/toast_bubble.js";define("pages/index/components/toast_bubble/toast_bubble.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{textList:{type:Array,default:""}},data:{shouldShow:!1,selfList:[],currentShowing:"",removed:!1},methods:{oneSlice:function(){var t=this,e=this.data.selfList[0];0!==this.data.selfList.length?(this.setData({removed:!1}),this.data.selfList.shift(),this.setData({selfList:this.data.selfList,currentShowing:e},(function(){t.setData({shouldShow:!0})})),setTimeout((function(){t.setData({shouldShow:!1})}),2800),setTimeout((function(){t.oneSlice()}),4100)):this.setData({removed:!0})}},observers:{textList:function(t){t&&t.length&&(this.setData({selfList:t}),this.oneSlice())}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/components/toast_bubble/toast_bubble.js'});require("pages/index/components/toast_bubble/toast_bubble.js");