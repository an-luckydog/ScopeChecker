$gwx_XC_55=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_55 || [];
function gz$gwx_XC_55_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_55_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_55_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_55_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'popupBoxShow']])
Z([3,'popup-box-component'])
Z([a,[3,'--z-index: '],[[7],[3,'zIndex']],[3,';']])
Z([3,'cover'])
Z([3,'onAnimationend'])
Z([3,'popup-box custom-class'])
Z([[7],[3,'customStyle']])
Z([[2,'&&'],[[7],[3,'showClose']],[[2,'==='],[[7],[3,'closeType']],[1,'top']]])
Z([[2,'&&'],[[7],[3,'showClose']],[[2,'==='],[[7],[3,'closeType']],[1,'bottom']]])
Z([[2,'&&'],[[7],[3,'showClose']],[[2,'==='],[[7],[3,'closeType']],[1,'lower-bottom']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_55_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_55_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_55=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_55=true;
var x=['./components/PopupBox/PopupBox.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_55_1()
var eVG=_v()
_(r,eVG)
if(_oz(z,0,e,s,gg)){eVG.wxVkey=1
var bWG=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var xYG=_n('slot')
_rz(z,xYG,'name',3,e,s,gg)
_(bWG,xYG)
var oZG=_mz(z,'view',['bindanimationend',4,'class',1,'style',2],[],e,s,gg)
var f1G=_v()
_(oZG,f1G)
if(_oz(z,7,e,s,gg)){f1G.wxVkey=1
}
var c2G=_v()
_(oZG,c2G)
if(_oz(z,8,e,s,gg)){c2G.wxVkey=1
}
var h3G=_n('slot')
_(oZG,h3G)
f1G.wxXCkey=1
c2G.wxXCkey=1
_(bWG,oZG)
var oXG=_v()
_(bWG,oXG)
if(_oz(z,9,e,s,gg)){oXG.wxVkey=1
}
oXG.wxXCkey=1
_(eVG,bWG)
}
eVG.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_55";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_55();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/PopupBox/PopupBox.wxml'] = [$gwx_XC_55, './components/PopupBox/PopupBox.wxml'];else __wxAppCode__['components/PopupBox/PopupBox.wxml'] = $gwx_XC_55( './components/PopupBox/PopupBox.wxml' );
	;__wxRoute = "components/PopupBox/PopupBox";__wxRouteBegin = true;__wxAppCurrentFile__="components/PopupBox/PopupBox.js";define("components/PopupBox/PopupBox.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({options:{multipleSlots:!0},data:{popupBoxShow:!1},externalClasses:["custom-class"],properties:{showClose:{type:Boolean,value:!0},disableClose:{type:Boolean,value:!1},id:{type:String,value:"default"},closeType:{type:String,value:"top"},customStyle:{type:String,value:""},customCoverStyle:{type:String,value:""},relative:{type:String,value:".card-list"},zIndex:{type:Number,value:9999}},methods:{onAnimationend:function(){this.triggerEvent("scaleEnd")},_hide:function(e){this.properties.disableClose?this.triggerEvent("popupboxhidecapture",{id:this.properties.id},{bubbles:!0,composed:!0}):this.data.popupBoxShow&&this.hide(e)},hide:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.data.popupBoxShow&&(this.setData({popupBoxShow:!1,animate:!1}),this.triggerEvent("popupboxhide",{id:this.properties.id,from:e.target?"element":"program"},{bubbles:!0,composed:!0}))},show:function(){this.data.popupBoxShow||(this.setData({popupBoxShow:!0}),this.triggerEvent("popupboxshow",{id:this.properties.id},{bubbles:!0,composed:!0}))}}});
},{isPage:false,isComponent:true,currentFile:'components/PopupBox/PopupBox.js'});require("components/PopupBox/PopupBox.js");