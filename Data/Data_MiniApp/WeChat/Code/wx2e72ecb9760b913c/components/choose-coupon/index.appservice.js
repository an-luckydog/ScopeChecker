$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];
function gz$gwx_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_showCouponPop'])
Z([3,'use-coupon-item'])
Z([[6],[[7],[3,'couponInfo']],[3,'isMax']])
Z([[7],[3,'popShow']])
Z([3,'pop-inner'])
Z([3,'pop-container'])
Z([[2,'!'],[[6],[[7],[3,'selfCoupons']],[3,'length']]])
Z([[7],[3,'selfCoupons']])
Z([3,'id'])
Z([3,'_chooseCoupon'])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'selfCoupons']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./components/choose-coupon/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var hG=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,2,e,s,gg)){oH.wxVkey=1
}
oH.wxXCkey=1
_(r,hG)
var cF=_v()
_(r,cF)
if(_oz(z,3,e,s,gg)){cF.wxVkey=1
var cI=_n('view')
_rz(z,cI,'class',4,e,s,gg)
var lK=_n('view')
_rz(z,lK,'class',5,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,6,e,s,gg)){aL.wxVkey=1
}
else{aL.wxVkey=2
var tM=_v()
_(aL,tM)
var eN=function(oP,bO,xQ,gg){
var fS=_mz(z,'coupon-item',['bind:chooseCoupon',9,'couponInfo',1],[],oP,bO,gg)
_(xQ,fS)
return xQ
}
tM.wxXCkey=4
_2z(z,7,eN,e,s,gg,tM,'item','index','id')
}
aL.wxXCkey=1
aL.wxXCkey=3
_(cI,lK)
var oJ=_v()
_(cI,oJ)
if(_oz(z,11,e,s,gg)){oJ.wxVkey=1
}
oJ.wxXCkey=1
_(cF,cI)
}
cF.wxXCkey=1
cF.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/choose-coupon/index.wxml'] = [$gwx_XC_3, './components/choose-coupon/index.wxml'];else __wxAppCode__['components/choose-coupon/index.wxml'] = $gwx_XC_3( './components/choose-coupon/index.wxml' );
	;__wxRoute = "components/choose-coupon/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/choose-coupon/index.js";define("components/choose-coupon/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var o=require("../../@babel/runtime/helpers/objectSpread2");Component({properties:{couponInfo:{type:Object,value:{id:null,title:"",noCoupon:!0,discountPrice:null,isMax:!1,availableNum:0}},coupons:{type:Array,value:[]}},data:{popShow:!1,selectCouponId:null,selfCoupons:[]},methods:{_showCouponPop:function(){this.copyCoupons(),this.setData({popShow:!0})},_hideCouponPop:function(){this.setData({popShow:!1})},_chooseCoupon:function(o){var e=this.data,t=e.selfCoupons,s=e.selectCouponId;t&&!t.length||this.copyCoupons(),t.forEach((function(e){e.id===o.detail?(e.isSelected=!e.isSelected,s=e.isSelected?o.detail:""):e.isSelected=!1})),this.setData({selfCoupons:t,selectCouponId:s})},_handleSubmit:function(){this.triggerEvent("chooseCoupon",this.data.selectCouponId),this.setData({popShow:!1,selectCouponId:null})},copyCoupons:function(){var e=null;if(Array.isArray(this.data.coupons)){var t=this.data.coupons.map((function(t){return t.isSelected&&(e=t.id),o({},t)}));this.setData({selectCouponId:e,selfCoupons:t})}}}});
},{isPage:false,isComponent:true,currentFile:'components/choose-coupon/index.js'});require("components/choose-coupon/index.js");