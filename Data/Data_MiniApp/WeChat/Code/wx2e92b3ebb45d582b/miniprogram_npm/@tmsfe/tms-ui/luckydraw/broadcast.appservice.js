$gwx_XC_31=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_31 || [];
function gz$gwx_XC_31_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'list']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_31=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_31=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/luckydraw/broadcast.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_31_1()
var c3I=_v()
_(r,c3I)
if(_oz(z,0,e,s,gg)){c3I.wxVkey=1
}
c3I.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_31";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_31();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/luckydraw/broadcast.wxml'] = [$gwx_XC_31, './miniprogram_npm/@tmsfe/tms-ui/luckydraw/broadcast.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/luckydraw/broadcast.wxml'] = $gwx_XC_31( './miniprogram_npm/@tmsfe/tms-ui/luckydraw/broadcast.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/luckydraw/broadcast";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/luckydraw/broadcast.js";define("miniprogram_npm/@tmsfe/tms-ui/luckydraw/broadcast.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,e=require("../../../../@babel/runtime/helpers/objectSpread2"),r=require("../../../../@babel/runtime/helpers/slicedToArray"),n=(t=require("./utils"))&&t.__esModule?t:{default:t};Component({properties:{promotionCode:String,num:{type:Number,value:50}},data:{list:[]},lifetimes:{attached:function(){this.loadData()}},methods:{loadData:function(){var t=this,e=this.getUserList(),i=n.default.loadPromotionConf(this.data.promotionCode).then((function(t){return t.prizeList||[]})).catch((function(){return[]}));Promise.all([e,i]).then((function(e){var n=r(e,2),i=n[0],u=n[1],a=t.constructPrizeList(i,u);t.setData({list:a})})).catch((function(){return null}))},getUserList:function(){var t=n.default.getUserList(this.data.num||50).then((function(t){return t.userList})),e=n.default.getLoginInfo().then((function(t){return t.userId})).catch((function(){return""}));return Promise.all([t,e]).then((function(t){var e=r(t,2),n=e[0],i=e[1],u=void 0===i?"":i;return n.filter((function(t){return t.userId!==u}))})).catch((function(){return[]}))},constructPrizeList:function(t,r){var n=0,i=r.map((function(t){return n+=t.rate,e(e({},t),{},{max:n})}));return t.map((function(t){var e,r=(e=Math.random()*~~n,i.find((function(t){return t.max>e}))||{});return{avatar:t.headpic,name:t.name,prizeName:null==r?void 0:r.prize}})).filter((function(t){return t.prizeName}))}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/luckydraw/broadcast.js'});require("miniprogram_npm/@tmsfe/tms-ui/luckydraw/broadcast.js");