$gwx_XC_115=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_115 || [];
function gz$gwx_XC_115_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_115_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_115_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_115_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_115_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_115_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_115=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_115=true;
var x=['./titian-mp/RAW/textarea/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_115_1()
var o2DB=_v()
_(r,o2DB)
if(_oz(z,0,e,s,gg)){o2DB.wxVkey=1
}
o2DB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_115";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_115();	if (__vd_version_info__.delayedGwx) __wxAppCode__['titian-mp/RAW/textarea/index.wxml'] = [$gwx_XC_115, './titian-mp/RAW/textarea/index.wxml'];else __wxAppCode__['titian-mp/RAW/textarea/index.wxml'] = $gwx_XC_115( './titian-mp/RAW/textarea/index.wxml' );
	;__wxRoute = "titian-mp/RAW/textarea/index";__wxRouteBegin = true;__wxAppCurrentFile__="titian-mp/RAW/textarea/index.js";define("titian-mp/RAW/textarea/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../titan.bootstrap.js");var e,t=global.bc("platform","titian-mp");(0,((e=require("../common/basic/BasicComponent"))&&e.__esModule?e:{default:e}).default)({relations:{"../auto-complete/index":{type:"ancestor"}},externalClasses:["textarea-class"],properties:{extStyle:String,value:String,placeholder:String,placeholderStyle:String,disabled:Boolean,maxlength:{type:Number,value:140},autoFocus:Boolean,focus:Boolean,autoHeight:Boolean,fixed:Boolean,cursorSpacing:{type:Number,value:0},cursor:Number,showConfirmBar:Boolean,selectionStart:{type:Number,value:-1},selectionEnd:{type:Number,value:-1},adjustPosition:{type:Boolean,value:!0},holdKeyboard:Boolean,disableDefaultPadding:{type:Boolean,value:!0},confirmType:{type:String,value:""},confirmHold:Boolean,showCount:{type:Boolean,value:!1}},data:{count:0,textareaHeight:0,initialValue:""},observers:{value:function(e){var t=0;e&&(t=this.data.maxlength>0?Math.min(e.length,this.data.maxlength):e.length),this.setData({count:t})}},methods:{onInput:function(e){var t=e.detail.value.length,a=this.data.maxlength>0?Math.min(t,this.data.maxlength):t;this.setData({count:a,value:e.detail.value}),this.triggerEvent("input",e.detail)},onFocus:function(e){this.setData({initialValue:e.detail.value}),this.triggerEvent("focus",e.detail)},onBlur:function(e){this.triggerEvent("blur",e.detail),e.detail.value!==this.data.initialValue&&this.triggerEvent("lazy-change",e.detail)},onConfirm:function(e){this.triggerEvent("confirm",e.detail)},onKeyboardheightchange:function(e){this.triggerEvent("keyboardheightchange",e.detail)},onLinechange:function(e){this.triggerEvent("linechange",e.detail)}}}),global.ec(t);
},{isPage:false,isComponent:true,currentFile:'titian-mp/RAW/textarea/index.js'});require("titian-mp/RAW/textarea/index.js");