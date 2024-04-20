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
Z([[7],[3,'a']])
Z([3,'privacy-content'])
Z([[7],[3,'e']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_38_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_38=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_38=true;
var x=['./components/kdcs/zec-privacy/zec-privacy.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_38_1()
var bGI=_v()
_(r,bGI)
if(_oz(z,0,e,s,gg)){bGI.wxVkey=1
var oHI=_n('view')
_rz(z,oHI,'class',1,e,s,gg)
var oJI=_n('slot')
_(oHI,oJI)
var xII=_v()
_(oHI,xII)
if(_oz(z,2,e,s,gg)){xII.wxVkey=1
}
xII.wxXCkey=1
_(bGI,oHI)
}
bGI.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_38();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/kdcs/zec-privacy/zec-privacy.wxml'] = [$gwx_XC_38, './components/kdcs/zec-privacy/zec-privacy.wxml'];else __wxAppCode__['components/kdcs/zec-privacy/zec-privacy.wxml'] = $gwx_XC_38( './components/kdcs/zec-privacy/zec-privacy.wxml' );
	;__wxRoute = "components/kdcs/zec-privacy/zec-privacy";__wxRouteBegin = true;__wxAppCurrentFile__="components/kdcs/zec-privacy/zec-privacy.js";define("components/kdcs/zec-privacy/zec-privacy.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../common/vendor.js");require("../../../consts.js");var n={data:function(){return{show:!1}},props:{title:{type:String,default:"温馨提示"},confirmBtnTxt:{type:String,default:"知道了"},concalBtnTxt:{type:String,default:"拒绝"}},methods:{handleAgreePrivacyAuthorization:function(t){this.setData({show:!1}),this.$emit("alertConfirm")},toAgreement:function(){t.index.openPrivacyContract({success:function(){},fail:function(){},complete:function(){}})},cancelAction:function(){this.setData({show:!1}),this.$emit("alertCancel")},confirmAction:function(){this.show=!1,this.$emit("alertConfirm")},open:function(){this.show=!0},check:function(){},disagree:function(){console.log("占位：函数 disagree 未声明")}},created:function(){}},e=t._export_sfc(n,[["render",function(n,e,o,i,r,c){return t.e({a:r.show},r.show?t.e({b:t.t(o.title),c:t.o((function(){return c.toAgreement&&c.toAgreement.apply(c,arguments)})),d:t.o((function(){return c.disagree&&c.disagree.apply(c,arguments)})),e:o.concalBtnTxt},(o.concalBtnTxt,{}),{f:t.o((function(){return c.handleAgreePrivacyAuthorization&&c.handleAgreePrivacyAuthorization.apply(c,arguments)})),g:t.o((function(){return c.confirmAction&&c.confirmAction.apply(c,arguments)}))}):{})}]]);wx.createComponent(e);
},{isPage:false,isComponent:true,currentFile:'components/kdcs/zec-privacy/zec-privacy.js'});require("components/kdcs/zec-privacy/zec-privacy.js");