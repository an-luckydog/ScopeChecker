$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];
function gz$gwx_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'checkList']])
Z([3,'label'])
Z([3,'handleCheck'])
Z([3,'chk-group-item'])
Z([[6],[[7],[3,'item']],[3,'disabled']])
Z([[6],[[7],[3,'item']],[3,'checked']])
Z([[6],[[7],[3,'item']],[3,'label']])
Z([[2,'?:'],[[7],[3,'multiple']],[1,'checkbox'],[1,'radio']])
Z([[7],[3,'index']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./components/form-box/checkbox-group/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
var xAC=_v()
_(r,xAC)
var oBC=function(cDC,fCC,hEC,gg){
var cGC=_mz(z,'chkBox',['bindcheckevent',2,'class',1,'disabled',2,'isChecked',3,'label',4,'type',5,'value',6],[],cDC,fCC,gg)
_(hEC,cGC)
return hEC
}
xAC.wxXCkey=4
_2z(z,0,oBC,e,s,gg,xAC,'item','index','label')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_10";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/form-box/checkbox-group/index.wxml'] = [$gwx_XC_10, './components/form-box/checkbox-group/index.wxml'];else __wxAppCode__['components/form-box/checkbox-group/index.wxml'] = $gwx_XC_10( './components/form-box/checkbox-group/index.wxml' );
	;__wxRoute = "components/form-box/checkbox-group/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/form-box/checkbox-group/index.js";define("components/form-box/checkbox-group/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/defineProperty"),t=require("../../../@babel/runtime/helpers/toConsumableArray");Component({properties:{checkList:{type:Array,value:[]},multiple:{type:Boolean,value:!0}},data:{groupResult:[],prevCheckIndex:""},attached:function(){var e=this.data,c=e.checkList;if(!e.multiple){var h="",a=t(c);a.forEach((function(e,t){e.checked&&(h&&(a[h].checked=!1),h=t)})),this.setData({prevCheckIndex:h,checkList:a}),this.checkChange()}},methods:{handleCheck:function(e){var t=e.detail,c=(t.label,t.value),h=t.checked,a=this.data,i=a.multiple,n=a.prevCheckIndex;h?(i||""===n||this.setSingleCheck(n,!1),this.setData({prevCheckIndex:c}),this.setSingleCheck(c,!0)):(this.setData({prevCheckIndex:""}),this.setSingleCheck(c,!1)),this.checkChange()},setSingleCheck:function(t,c){this.setData(e({},"checkList[".concat(t,"].checked"),c))},checkChange:function(){var e=this.data,t=e.checkList,c=e.multiple,h=t.filter((function(e){return e.checked}));if(c){var a=h.map((function(e){return e.value}));this.triggerEvent("change",{value:a})}else this.triggerEvent("change",{value:h.length?h[0].value:""})}}});
},{isPage:false,isComponent:true,currentFile:'components/form-box/checkbox-group/index.js'});require("components/form-box/checkbox-group/index.js");