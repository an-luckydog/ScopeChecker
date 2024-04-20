$gwx_XC_33=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_33 || [];
function gz$gwx_XC_33_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'hasFollowed']])
Z([3,'doFollowDoctor'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_33=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_33=true;
var x=['./components/follow-doc-button-detail-page/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_33_1()
var xSF=_v()
_(r,xSF)
if(_oz(z,0,e,s,gg)){xSF.wxVkey=1
}
else{xSF.wxVkey=2
var oTF=_n('cy-userinfo')
_rz(z,oTF,'bind:loginevent',1,e,s,gg)
_(xSF,oTF)
}
xSF.wxXCkey=1
xSF.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_33";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_33();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/follow-doc-button-detail-page/index.wxml'] = [$gwx_XC_33, './components/follow-doc-button-detail-page/index.wxml'];else __wxAppCode__['components/follow-doc-button-detail-page/index.wxml'] = $gwx_XC_33( './components/follow-doc-button-detail-page/index.wxml' );
	;__wxRoute = "components/follow-doc-button-detail-page/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/follow-doc-button-detail-page/index.js";define("components/follow-doc-button-detail-page/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var o=getApp(),t=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl+"/api/v5/doctor/",e=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param;Component({properties:{hasFollowed:{type:Boolean,value:!1},doctorId:{type:String,value:""},visitPageName:{type:String,value:""}},methods:{doFollowDoctor:function(){var a=this;o.sensors.track("AppClick",{app:"weixin_mini",click_position:"话题页关注医生"});var i={from_wx_mini:1,partner:o.globalData.partner,follow:1};this.data.hasFollowed||wx.navigateTo({url:"../doc_mainpage/index?doc_id=".concat(this.data.doctorId,"&animation=follow&from_visit_page=").concat(this.data.visitPageName)}),wx.request({url:t+this.data.doctorId+"/follow",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:o.globalData.sessionid},data:e(i),success:function(){a.triggerEvent("followsuccess",{isFollowed:!0})}})},unfollowDoctor:function(){var a=this,i={from_wx_mini:1,partner:o.globalData.partner,follow:0};wx.request({url:t+this.data.doctorId+"/follow",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:o.globalData.sessionid},data:e(i),success:function(){a.triggerEvent("followsuccess",{isFollowed:!1})}})}}});
},{isPage:false,isComponent:true,currentFile:'components/follow-doc-button-detail-page/index.js'});require("components/follow-doc-button-detail-page/index.js");