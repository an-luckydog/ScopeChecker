$gwx_XC_25=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_25 || [];
function gz$gwx_XC_25_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shouldRecommendShow']])
Z([[7],[3,'commendList']])
Z([3,'redirect'])
Z([[7],[3,'item']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_25=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_25=true;
var x=['./components/detail-recommend-list/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_25_1()
var c6C=_v()
_(r,c6C)
if(_oz(z,0,e,s,gg)){c6C.wxVkey=1
var h7C=_v()
_(c6C,h7C)
var o8C=function(o0C,c9C,lAD,gg){
var tCD=_mz(z,'single-topic',['navigateType',2,'topicData',1],[],o0C,c9C,gg)
_(lAD,tCD)
return lAD
}
h7C.wxXCkey=4
_2z(z,1,o8C,e,s,gg,h7C,'item','index','')
}
c6C.wxXCkey=1
c6C.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_25";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_25();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/detail-recommend-list/index.wxml'] = [$gwx_XC_25, './components/detail-recommend-list/index.wxml'];else __wxAppCode__['components/detail-recommend-list/index.wxml'] = $gwx_XC_25( './components/detail-recommend-list/index.wxml' );
	;__wxRoute = "components/detail-recommend-list/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/detail-recommend-list/index.js";define("components/detail-recommend-list/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp(),e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js");Component({options:{virtualHost:!0,styleIsolation:"isolated"},properties:{title:{type:String,value:""},contentType:{type:String,value:""},titleId:{type:String,value:""}},data:{requestUrl:"/cooperation/wap/topic_check_similar_list/",shouldRecommendShow:!1},lifetimes:{attached:function(){this.getRecommendList()}},methods:{_isDataReady:function(){var t=this;return new Promise((function(e){var a=setInterval((function(){if(t.data.title&&t.data.contentType)return clearInterval(a),e()}),400)}))},getRecommendList:function(){var a=this;this._isDataReady().then((function(){wx.request({url:e.baseUrl+a.data.requestUrl,method:"GET",timeout:1500,header:{Cookie:t.globalData.sessionid,"Content-Type":"application/json"},data:{id:a.data.titleId,content_type:a.data.contentType},success:function(t){if(200===t.statusCode&&t.data){var e=t.data.similar_list;e&&e.length?a.setData({commendList:e}):a.triggerEvent("no-recommend-content")}},fail:function(t){console.log("获取相关推荐列表失败"),console.log(t)},complete:function(t){if(200===t.statusCode&&t.data){var e=t.data.similar_list;e&&e.length&&a.setData({shouldRecommendShow:!0})}}})}))},track:function(e){try{var a=e.currentTarget.dataset.type,i="";switch(a){case 4:i="一问一答";break;case 2:i="语音话题";break;default:i="文字话题"}console.log(i),t.sensors.track("AppClick",{app:"weixin_mini",click_position:"相关推荐",source_type:i})}catch(t){console.log("相关推荐打点失败",t)}}}});
},{isPage:false,isComponent:true,currentFile:'components/detail-recommend-list/index.js'});require("components/detail-recommend-list/index.js");