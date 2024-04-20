$gwx_XC_57=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_57 || [];
function gz$gwx_XC_57_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_57_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'images-x '],[[2,'?:'],[[7],[3,'rect']],[1,'rect'],[1,'square']]])
Z([[2,'==='],[[6],[[7],[3,'prizeImages']],[3,'length']],[1,1]])
Z([[2,'>'],[[6],[[7],[3,'prizeImages']],[3,'length']],[1,1]])
Z([[7],[3,'prizeImages']])
Z([3,'index'])
Z([[7],[3,'item']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_57_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_57=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_57=true;
var x=['./components/PrizeImages/PrizeImages.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_57_1()
var l7G=_n('view')
_rz(z,l7G,'class',0,e,s,gg)
var a8G=_v()
_(l7G,a8G)
if(_oz(z,1,e,s,gg)){a8G.wxVkey=1
}
else if(_oz(z,2,e,s,gg)){a8G.wxVkey=2
var t9G=_v()
_(a8G,t9G)
var e0G=function(oBH,bAH,xCH,gg){
var fEH=_v()
_(xCH,fEH)
if(_oz(z,5,oBH,bAH,gg)){fEH.wxVkey=1
}
fEH.wxXCkey=1
return xCH
}
t9G.wxXCkey=2
_2z(z,3,e0G,e,s,gg,t9G,'item','index','index')
}
else{a8G.wxVkey=3
}
a8G.wxXCkey=1
_(r,l7G)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_57";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_57();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/PrizeImages/PrizeImages.wxml'] = [$gwx_XC_57, './components/PrizeImages/PrizeImages.wxml'];else __wxAppCode__['components/PrizeImages/PrizeImages.wxml'] = $gwx_XC_57( './components/PrizeImages/PrizeImages.wxml' );
	;__wxRoute = "components/PrizeImages/PrizeImages";__wxRouteBegin = true;__wxAppCurrentFile__="components/PrizeImages/PrizeImages.js";define("components/PrizeImages/PrizeImages.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@/constant"),t=require("@utils/prize");Component({properties:{prizeImages:Array,autoplay:{type:Boolean,value:!0},interval:{type:Number,value:3e3},item:Object},observers:{item:function(e){this.setData({defaultImage:(0,t.getDefaultPizeImage)(e),rect:"party"===(null==e?void 0:e.draw_type)})}},data:{defaultImage:e.DEFAULT_IMAGE_NORMAL,rect:!1}});
},{isPage:false,isComponent:true,currentFile:'components/PrizeImages/PrizeImages.js'});require("components/PrizeImages/PrizeImages.js");