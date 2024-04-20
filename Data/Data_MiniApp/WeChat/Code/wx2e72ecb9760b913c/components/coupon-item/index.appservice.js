$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_chooseCoupon'])
Z([a,[3,'coupon-item-components '],[[2,'?:'],[[2,'!'],[[6],[[7],[3,'couponInfo']],[3,'isValid']]],[1,'invalid-coupon'],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'couponInfo']],[3,'isUnavailable']],[1,'unavailable'],[1,'']]])
Z([[2,'!'],[[7],[3,'isShow']]])
Z([[6],[[7],[3,'couponInfo']],[3,'isSelected']])
Z([[2,'||'],[[2,'||'],[[6],[[7],[3,'couponInfo']],[3,'doctorId']],[[2,'==='],[[6],[[7],[3,'couponInfo']],[3,'forward']],[1,'find_doctor']]],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'couponInfo']],[3,'forward']],[1,'url']],[[6],[[7],[3,'couponInfo']],[3,'forwardValue']]]])
Z([[6],[[7],[3,'couponInfo']],[3,'reason']])
Z([[6],[[7],[3,'couponInfo']],[3,'isUsed']])
Z([[6],[[7],[3,'couponInfo']],[3,'isExpired']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./components/coupon-item/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var cW=_mz(z,'view',['catchtap',0,'class',1],[],e,s,gg)
var oX=_v()
_(cW,oX)
if(_oz(z,2,e,s,gg)){oX.wxVkey=1
var e2=_v()
_(oX,e2)
if(_oz(z,3,e,s,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
}
else if(_oz(z,4,e,s,gg)){oX.wxVkey=2
}
var lY=_v()
_(cW,lY)
if(_oz(z,5,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(cW,aZ)
if(_oz(z,6,e,s,gg)){aZ.wxVkey=1
}
var t1=_v()
_(cW,t1)
if(_oz(z,7,e,s,gg)){t1.wxVkey=1
}
oX.wxXCkey=1
lY.wxXCkey=1
aZ.wxXCkey=1
t1.wxXCkey=1
_(r,cW)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/coupon-item/index.wxml'] = [$gwx_XC_5, './components/coupon-item/index.wxml'];else __wxAppCode__['components/coupon-item/index.wxml'] = $gwx_XC_5( './components/coupon-item/index.wxml' );
	;__wxRoute = "components/coupon-item/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/coupon-item/index.js";define("components/coupon-item/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var o=getApp();Component({properties:{isShow:{type:Boolean,value:!1},couponInfo:{type:Object,value:{id:null,title:"",description:"",focusPrice:"",tipsPrice:"",unit:0,expireDate:"",isSelected:!1,isValid:!0,isExpired:!1,isUsed:!1,isUnavailable:!1}}},methods:{_chooseCoupon:function(){var e=this.data,i=e.couponInfo,a=void 0===i?{}:i,n=e.isShow,t=e.id;console.log("couponInfo",a),a.isValid&&(a.isUnavailable||(n?a.doctorId?wx.navigateTo({url:"/pages/doc_mainpage/index?doc_id=".concat(a.doctorId)}):"find_doctor"===a.forward?wx.navigateTo({url:"/pages/find_doctor/index"}):"url"===a.forward&&a.forwardValue&&(o.sensors.track("AppClick",{page_readable_name:"我的优惠券",app:"weixin_mini",click_position:"指定sku优惠券",strategy_id:Number(t)}),wx.navigateTo({url:"/pages/h5_webview/index?url=".concat(encodeURIComponent(a.forwardValue))})):a.id&&this.triggerEvent("chooseCoupon",a.id)))}}});
},{isPage:false,isComponent:true,currentFile:'components/coupon-item/index.js'});require("components/coupon-item/index.js");