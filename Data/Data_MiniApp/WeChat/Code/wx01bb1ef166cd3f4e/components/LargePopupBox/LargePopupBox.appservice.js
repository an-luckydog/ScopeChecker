$gwx_XC_38=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_38 || [];
function gz$gwx_XC_38_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_38_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'popup-box'])
Z([[7],[3,'contentStyle']])
Z([[7],[3,'showClose']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_38_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_38=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_38=true;
var x=['./components/LargePopupBox/LargePopupBox.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_38_1()
var bKE=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oLE=_v()
_(bKE,oLE)
if(_oz(z,2,e,s,gg)){oLE.wxVkey=1
}
var xME=_n('slot')
_(bKE,xME)
oLE.wxXCkey=1
_(r,bKE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_38";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_38();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/LargePopupBox/LargePopupBox.wxml'] = [$gwx_XC_38, './components/LargePopupBox/LargePopupBox.wxml'];else __wxAppCode__['components/LargePopupBox/LargePopupBox.wxml'] = $gwx_XC_38( './components/LargePopupBox/LargePopupBox.wxml' );
	;__wxRoute = "components/LargePopupBox/LargePopupBox";__wxRouteBegin = true;__wxAppCurrentFile__="components/LargePopupBox/LargePopupBox.js";define("components/LargePopupBox/LargePopupBox.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("@mina-modules/system-info"),e=(0,t.getSysInfo)(),o=(e.windowWidth-10)/271,i=(e.screenHeight-22-65)/o;(0,t.getSysInfo)().IPX&&(i=(e.screenHeight-22-85)/o);var n=Math.ceil((i-2-70)*o),p=e.windowWidth-20;Component({data:{popupBoxShow:!1,contentStyle:"width: ".concat(p,"px; height: ").concat(n,"px;"),scrollStyle:"height: ".concat(n-32,"px"),animate:!1},properties:{showClose:{type:Boolean,value:!0},id:{type:String,value:"default"},padding:{type:Number,value:10,observer:function(t){this.setData({contentStyle:"width: ".concat(e.windowWidth-2*t,"px; height: ").concat(n,"px; left: ").concat(t,"px;")})}}},methods:{touchmove:function(){return!0},hide:function(){this.properties.disableClose||this.data.popupBoxShow&&(this.setData({popupBoxShow:!1,animate:!1}),this.triggerEvent("popupboxhide",{id:this.properties.id},{bubbles:!0,composed:!0}))},show:function(){var t=this;this.data.popupBoxShow||(this.setData({popupBoxShow:!0},(function(){setTimeout((function(){t.setData({animate:!0})}),20)})),this.triggerEvent("popupboxshow",{id:this.properties.id},{bubbles:!0,composed:!0}))}}});
},{isPage:false,isComponent:true,currentFile:'components/LargePopupBox/LargePopupBox.js'});require("components/LargePopupBox/LargePopupBox.js");