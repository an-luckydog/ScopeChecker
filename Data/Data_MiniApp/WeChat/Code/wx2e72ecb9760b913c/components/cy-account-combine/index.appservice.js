$gwx_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];
function gz$gwx_XC_6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'hideMask'])
Z([3,'cy-modal-mask'])
Z([[7],[3,'tipShow']])
Z([3,'cy-modal-tips-wrap margin-top-class'])
Z([[7],[3,'title']])
Z([3,'content'])
Z(z[6])
Z([[7],[3,'btnText']])
Z([3,'custom-button'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_6=true;
var x=['./components/cy-account-combine/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_6_1()
var o4=_v()
_(r,o4)
if(_oz(z,0,e,s,gg)){o4.wxVkey=1
var x5=_mz(z,'view',['catchtap',1,'class',1],[],e,s,gg)
var o6=_v()
_(x5,o6)
if(_oz(z,3,e,s,gg)){o6.wxVkey=1
var f7=_n('view')
_rz(z,f7,'class',4,e,s,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,5,e,s,gg)){c8.wxVkey=1
}
var o0=_mz(z,'slot',['id',6,'name',1],[],e,s,gg)
_(f7,o0)
var h9=_v()
_(f7,h9)
if(_oz(z,8,e,s,gg)){h9.wxVkey=1
}
else{h9.wxVkey=2
var cAB=_n('slot')
_rz(z,cAB,'name',9,e,s,gg)
_(h9,cAB)
}
c8.wxXCkey=1
h9.wxXCkey=1
_(o6,f7)
}
o6.wxXCkey=1
_(o4,x5)
}
o4.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_6";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cy-account-combine/index.wxml'] = [$gwx_XC_6, './components/cy-account-combine/index.wxml'];else __wxAppCode__['components/cy-account-combine/index.wxml'] = $gwx_XC_6( './components/cy-account-combine/index.wxml' );
	;__wxRoute = "components/cy-account-combine/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/cy-account-combine/index.js";define("components/cy-account-combine/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({externalClasses:["margin-top-class"],options:{multipleSlots:!0,addGlobalClass:!0},properties:{title:String,content:String,icon:String,show:Boolean,maskClose:{type:Boolean,value:!0},btnClose:{type:Boolean,value:!0},btnText:{type:String,value:"确定"}},data:{tipShow:!0,maskShow:!0},attached:function(){},moved:function(){},detached:function(){},methods:{hideMask:function(t){this.properties.maskClose&&t.target.id===t.currentTarget.id&&this.setData({show:!0})},_confirmEvent:function(t){this.triggerEvent("confirmEvent"),this.properties.btnClose&&this.setData({show:!1})}}});
},{isPage:false,isComponent:true,currentFile:'components/cy-account-combine/index.js'});require("components/cy-account-combine/index.js");