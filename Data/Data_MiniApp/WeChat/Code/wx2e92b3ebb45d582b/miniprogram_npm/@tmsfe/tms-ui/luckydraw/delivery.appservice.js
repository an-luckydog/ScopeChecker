$gwx_XC_32=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_32 || [];
function gz$gwx_XC_32_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_32_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onAddrChange'])
Z([3,'onSaveAddrFail'])
Z([3,'onSaveAddrStart'])
Z([3,'address'])
Z([[7],[3,'chooseAddrStyle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_32_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_32=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_32=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/luckydraw/delivery.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_32_1()
var l5I=_mz(z,'choose-address',['bind:addrchange',0,'bind:save-addr-fail',1,'bind:save-addr-start',1,'class',2,'customStyle',3],[],e,s,gg)
_(r,l5I)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_32";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_32();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/luckydraw/delivery.wxml'] = [$gwx_XC_32, './miniprogram_npm/@tmsfe/tms-ui/luckydraw/delivery.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/luckydraw/delivery.wxml'] = $gwx_XC_32( './miniprogram_npm/@tmsfe/tms-ui/luckydraw/delivery.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/luckydraw/delivery";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/luckydraw/delivery.js";define("miniprogram_npm/@tmsfe/tms-ui/luckydraw/delivery.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,n=require("../../../../@babel/runtime/helpers/slicedToArray"),t=(e=require("./utils"))&&e.__esModule?e:{default:e};Component({properties:{promotionCode:String,drawId:Number},data:{chooseAddrStyle:{wrap:"padding-top: 40rpx;",btnWechat:"\n    height: 108rpx;\n    border-radius: 8rpx;\n    background-image: linear-gradient(to right, #5ac9ff, #25b3fd 35%, #419fff);\n  ",tipWechat:"display: none;",infoWrap:"\n    box-shadow: 0 4rpx 22rpx 0 #00000015;\n  ",btnSave:"\n    background-image: linear-gradient(to right, #5ac9ff, #25b3fd 35%, #419fff);\n    font-size: 36rpx;\n  "}},methods:{onSaveAddrStart:function(){wx.showLoading({title:"保存中",mask:!0})},onAddrChange:function(e){var r=this,i=e.detail,a=i.name,o=n(i.region,3),d=o[0],s=o[1],f=o[2],h=i.address,p=i.phone,u=this.data,c=u.promotionCode,l=u.drawId;return t.default.updatePrizeDelivery(c,l,a,p,d,s,f,h).then((function(){wx.hideLoading(),r.triggerEvent("update-delivery-success",e.detail)})).catch((function(){wx.hideLoading(),wx.showToast({title:"保存失败",icon:"none"})}))},onSaveAddrFail:function(){wx.showToast({title:"保存失败",icon:"none"})}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/luckydraw/delivery.js'});require("miniprogram_npm/@tmsfe/tms-ui/luckydraw/delivery.js");