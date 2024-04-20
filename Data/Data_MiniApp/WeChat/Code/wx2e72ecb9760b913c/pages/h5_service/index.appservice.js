$gwx_XC_113=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_113 || [];
function gz$gwx_XC_113_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_113_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_113_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_113_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showAuthorization']])
Z([3,'loginEvent'])
Z([[7],[3,'showLoading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_113_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_113_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_113=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_113=true;
var x=['./pages/h5_service/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_113_1()
var h93=_v()
_(r,h93)
if(_oz(z,0,e,s,gg)){h93.wxVkey=1
var cA4=_n('cy-userinfo')
_rz(z,cA4,'bindloginevent',1,e,s,gg)
_(h93,cA4)
}
var o03=_v()
_(r,o03)
if(_oz(z,2,e,s,gg)){o03.wxVkey=1
}
h93.wxXCkey=1
h93.wxXCkey=3
o03.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_113";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_113();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/h5_service/index.wxml'] = [$gwx_XC_113, './pages/h5_service/index.wxml'];else __wxAppCode__['pages/h5_service/index.wxml'] = $gwx_XC_113( './pages/h5_service/index.wxml' );
	;__wxRoute = "pages/h5_service/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/h5_service/index.js";define("pages/h5_service/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../@babel/runtime/helpers/typeof"),o=e(require("../../3B123513829A079C5D745D1477BC7B70.js")),a=getApp(),i=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),n=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").getQueryStr,r=require("../../840A1D64829A079CE26C7563276C7B70.js").doPoint,s=i.baseUrl+"/weixin/get_doctor_info/";Page({data:{showAuthorization:!1,showLoading:!1,duid:"",fromPage:""},onLoad:function(e){var t,i,r=this;console.log(e);var s="";if(e.duid&&e.fv)t=e.duid,i=e.fv;else{if(!e.scene)return void wx.showToast({icon:"none",title:"页面参数错误"});var c="?"+decodeURIComponent(e.scene);t=n("duid",c),i=n("fv",c),s="扫码"}this.setData({duid:t||"",fromPage:s}),this.h5ServicePoint(i),a.globalData.appIsLogin.then((function(){(0,o.default)({fromName:r.data.fromPage,name:"确认订单",extraInfo:{}}).then((function(){r.getDoctorDetail()}))}),(function(){r.setData({showAuthorization:!0})}))},h5ServicePoint:function(e){var t={source_type:e,order_type:"定向图文",from_type:"中转页扫码"};r("WebServeiceScan",t),wx.setStorage({key:"authorizationPointData",data:t})},loginEvent:function(){var e=this;this.setData({showLoading:!0,showAuthorization:!1}),(0,o.default)({fromName:this.data.fromPage,name:"确认订单",extraInfo:{}}).then((function(){e.getDoctorDetail()}))},getDoctorDetail:function(){var e=this;wx.request({url:s,method:"GET",header:{"Content-Type":"application/json",Cookie:a.globalData.sessionid},data:{duid:e.data.duid},success:function(o){var i=o.data,n=i.doctor_info;if(e.setData({showLoading:!1}),"object"===t(i)){var r={finish_success_url:"",finish_fail_url:"",order_desc:"",order_name:"".concat(n.name,"医生-图文咨询"),order_type:"graph",partner:a.globalData.partner,info_dict:{doctor_id:n.id}};a.globalData.order_data=r,wx.redirectTo({url:"/pages/payment/index?name=".concat(n.name,"&price=").concat(n.price,"&hospital=").concat(n.hospital,"&title=").concat(n.title,"&mark=finddoc&is_vip_doc=").concat(+n.is_vip_doctor)})}else wx.showToast({icon:"none",title:"获取数据失败～"})},error:function(){e.setData({showLoading:!1}),wx.showToast({icon:"none",title:"订单创建失败"})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/h5_service/index.js'});require("pages/h5_service/index.js");