$gwx_XC_79=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_79 || [];
function gz$gwx_XC_79_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_79_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_79_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_79_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'clinicInfo']],[3,'length']])
Z([3,'jumpAskPage'])
Z([a,[3,'bottom-button '],[[2,'?:'],[[6],[[7],[3,'curClinic']],[3,'disabled']],[1,'gray-button'],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_79_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_79_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_79=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_79=true;
var x=['./pages/emergency/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_79_1()
var cAW=_v()
_(r,cAW)
if(_oz(z,0,e,s,gg)){cAW.wxVkey=1
var oBW=_mz(z,'cy-userinfo',['bindloginevent',1,'class',1],[],e,s,gg)
_(cAW,oBW)
}
cAW.wxXCkey=1
cAW.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_79";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_79();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/emergency/index.wxml'] = [$gwx_XC_79, './pages/emergency/index.wxml'];else __wxAppCode__['pages/emergency/index.wxml'] = $gwx_XC_79( './pages/emergency/index.wxml' );
	;__wxRoute = "pages/emergency/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/emergency/index.js";define("pages/emergency/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=getApp(),i=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),n=require("../../840A1D64829A079CE26C7563276C7B70.js").doPoint,t=require("../../92BC1755829A079CF4DA7F52C55D7B70.js"),a=(t.param,t.getQueryStr),c=i.baseUrl+"/api/v8/inquiry_emergency/?is_json=1",r=i.baseUrl+"/api/v8/get_current_emergency_status/";Page({data:{clinicInfo:[],curClinic:{},beginTime:"",endTime:"",partner:e.globalData.partner,requestFlag:!1},onLoad:function(i){var n=this;if(wx.request({url:c,method:"GET",header:{Cookie:e.globalData.sessionid},success:function(e){var i=e.data;i.clinic_info&&i.clinic_info.length&&n.setData({clinicInfo:i.clinic_info,curClinic:i.clinic_info[0],beginTime:i.clinic_info[0].begin,endTime:i.clinic_info[0].end})}}),i.scene){var t="?"+decodeURIComponent(i.scene),r=a("fv",t);["seo-m","seo-mip","seo-pc"].includes(r)&&this.h5ServicePoint(r)}},switchClinic:function(e){var i=e.currentTarget.dataset.index,t=this.data.clinicInfo[i];this.setData({curClinic:t,beginTime:t.begin,endTime:t.end});var a={clinic_no:t.clinic_no,clinic_name:t.clinic_name,clinic_price:t.clinic_price};n("SearchDoctorSelectDepartment",a)},formatTime:function(e){var i=new Date;return i.getFullYear()+"/"+(i.getMonth()+1)+"/"+i.getDate()+" "+e},jumpAskPage:function(){var e=this;e.data.requestFlag||(e.setData({requestFlag:!0}),e.getTimeStatus(e.data.curClinic.clinic_no,(function(i){i.data.clinic_info.disable?wx.showModal({content:"医生休息时间",confirmText:"我知道了",showCancel:!1}):wx.redirectTo({url:"/pages/inquery/inquery?partner="+e.data.partner+"&from_page=emergency&emergency_clinic_no="+e.data.curClinic.clinic_no})})))},getTimeStatus:function(i,n){var t=this;wx.request({url:r,method:"GET",header:{Cookie:e.globalData.sessionid},data:{clinic_no:i||""},complete:function(){t.setData({requestFlag:!1})},success:n,fail:function(){console.log("请求出错")}})},h5ServicePoint:function(e){var i={source_type:e,order_type:"图文急诊",from_type:"中转页扫码"};n("WebServeiceScan",i),wx.setStorage({key:"authorizationPointData",data:i})},onShareAppMessage:function(){return{title:"推荐春雨医生「急诊服务」：着急用急诊，就是快",imageUrl:"https://staff.chunyu.mobi/@/media/images/2018/10/11/29df/a41727e43180_w422_h338_.png"}}});
},{isPage:true,isComponent:true,currentFile:'pages/emergency/index.js'});require("pages/emergency/index.js");