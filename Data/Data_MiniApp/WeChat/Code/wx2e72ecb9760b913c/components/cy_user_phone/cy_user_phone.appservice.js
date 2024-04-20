$gwx_XC_23=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_23 || [];
function gz$gwx_XC_23_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shouldComponentShow']])
Z([3,'getPhoneNumber'])
Z([3,'remove-native-class'])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_23=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_23=true;
var x=['./components/cy_user_phone/cy_user_phone.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_23_1()
var oVC=_v()
_(r,oVC)
if(_oz(z,0,e,s,gg)){oVC.wxVkey=1
var lWC=_mz(z,'button',['bindgetphonenumber',1,'class',1,'openType',2],[],e,s,gg)
var aXC=_n('slot')
_(lWC,aXC)
_(oVC,lWC)
}
oVC.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_23";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_23();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cy_user_phone/cy_user_phone.wxml'] = [$gwx_XC_23, './components/cy_user_phone/cy_user_phone.wxml'];else __wxAppCode__['components/cy_user_phone/cy_user_phone.wxml'] = $gwx_XC_23( './components/cy_user_phone/cy_user_phone.wxml' );
	;__wxRoute = "components/cy_user_phone/cy_user_phone";__wxRouteBegin = true;__wxAppCurrentFile__="components/cy_user_phone/cy_user_phone.js";define("components/cy_user_phone/cy_user_phone.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),n=require("../../43A2F676829A079C25C49E711B4C7B70.js"),o=e(require("../../7B9C8496829A079C1DFAEC91795C7B70.js")),a=t.baseUrl+"/cooperation/wap/wx_mini_bind_phone/",i=t.baseUrl+"/cooperation/wap/new_wx_mini_bind_phone/",s=t.baseUrl+"/cooperation/wap/is_user_login/";Component({data:{shouldComponentShow:!1,hasUserBindPhone:!1,hasClosedInSameDay:!1},pageLifetimes:{show:function(){this.init()}},methods:{init:function(){var e=this;console.log(this.isSameDay()),this.setData({hasClosedInSameDay:this.isSameDay()}),(0,n.manualLogin)().then((function(){e.userLoginFunc()})).catch((function(){e.userLoginFunc()}))},userLoginFunc:function(){var e=this;(0,o.default)({url:s,success:function(t){t.data.use_cellphone||e.data.hasClosedInSameDay||e.setData({shouldComponentShow:!0})}})},getPhoneNumber:function(e){this.setData({shouldComponentShow:!1});var t=e.detail;t.encryptedData&&t.iv?this.oldFunc(t.encryptedData,t.iv):t.code?this.newFunc(t.code):t.errMsg&&(wx.setStorageSync("HIDE_PHONE_TIME",(new Date).getTime()),this.setData({shouldComponentShow:!1}))},oldFunc:function(e,t){var o=this;console.log("old api"),(0,n.manualLogin)().then((function(){o.oldLoginCbFunc(e,t)}))},oldLoginCbFunc:function(e,t){var n=this;(0,o.default)({url:a,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{encryptedData:e,iv:t,app:"weixin_mini"},success:function(e){0===e.data.error_code?(n.setData({shouldComponentShow:!1}),wx.showToast({icon:"none",title:"绑定成功"})):wx.showToast({icon:"none",title:e.data.error_msg||"绑定失败"})}})},newFunc:function(e){var t=this;console.log("new api"),(0,o.default)({url:i,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{code:e,app:"weixin_mini"},success:function(e){0===e.data.error_code?(t.setData({shouldComponentShow:!1}),e.data.result.sessionid&&(0,n.updateSessionid)(e.data.result.sessionid),wx.showToast({icon:"none",title:"绑定成功"})):wx.showToast({icon:"none",title:e.data.error_msg||"绑定失败"})}})},isSameDay:function(){var e=wx.getStorageSync("HIDE_PHONE_TIME");return!(!e||!this.checkSameDate(e,(new Date).getTime()))},checkSameDate:function(e,t){return e=new Date(e),t=new Date(t),e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}}});
},{isPage:false,isComponent:true,currentFile:'components/cy_user_phone/cy_user_phone.js'});require("components/cy_user_phone/cy_user_phone.js");