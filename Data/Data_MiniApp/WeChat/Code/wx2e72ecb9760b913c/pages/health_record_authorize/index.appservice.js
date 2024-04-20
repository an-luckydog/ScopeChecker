$gwx_XC_124=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_124 || [];
function gz$gwx_XC_124_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_124_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_124_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_124_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isLogin']])
Z([[2,'&&'],[[6],[[7],[3,'ehrList']],[3,'length']],[[6],[[7],[3,'ehrList']],[3,'length']]])
Z([[2,'!'],[[2,'||'],[[7],[3,'loading']],[[6],[[7],[3,'ehrList']],[3,'length']]]])
Z([[7],[3,'showAuthorize']])
Z([3,'loginFail'])
Z([3,'init'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_124_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_124_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_124=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_124=true;
var x=['./pages/health_record_authorize/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_124_1()
var xW4=_v()
_(r,xW4)
if(_oz(z,0,e,s,gg)){xW4.wxVkey=1
var fY4=_v()
_(xW4,fY4)
if(_oz(z,1,e,s,gg)){fY4.wxVkey=1
}
var cZ4=_v()
_(xW4,cZ4)
if(_oz(z,2,e,s,gg)){cZ4.wxVkey=1
}
fY4.wxXCkey=1
cZ4.wxXCkey=1
}
var oX4=_v()
_(r,oX4)
if(_oz(z,3,e,s,gg)){oX4.wxVkey=1
var h14=_mz(z,'cy-authorize',['bindloginFail',4,'bindloginSuccess',1],[],e,s,gg)
_(oX4,h14)
}
xW4.wxXCkey=1
oX4.wxXCkey=1
oX4.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_124";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_124();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/health_record_authorize/index.wxml'] = [$gwx_XC_124, './pages/health_record_authorize/index.wxml'];else __wxAppCode__['pages/health_record_authorize/index.wxml'] = $gwx_XC_124( './pages/health_record_authorize/index.wxml' );
	;__wxRoute = "pages/health_record_authorize/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/health_record_authorize/index.js";define("pages/health_record_authorize/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var o=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,e=o+"/ehr/list/",t=o+"/ehr/authorize/",i=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,n=getApp();Page({data:{ehrList:[],chooseAll:!1,oriChoosedId:[],ehrChoosedId:[],loading:!0,isLogin:!1,showAuthorize:!1},onLoad:function(o){var e=this;n.globalData.appIsLogin.then((function(){e.init()}),(function(){e.setData({isLogin:!1,showAuthorize:!0})}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onShareAppMessage:function(){return{title:"授权健康管家为您更新维护档案"}},loginFail:function(){console.log("授权失败")},init:function(){wx.showLoading({title:"档案获取中"}),this.setData({isLogin:!0,showAuthorize:!1,loading:!0});var o=this;wx.request({url:e,header:{"Content-Type":"application/json",Cookie:n.globalData.sessionid},method:"GET",success:function(e){var t=e.data,i=t.error_code,n=t.error_msg,s=t.payload;if(0===i)for(var a=[],r=[],d=[],c=(void 0===s?{}:s).ehr_list,h=void 0===c?[]:c,l=0;l<h.length;l++){var u=h[l],f={id:u.id,name:u.name||"--",sex:u.sex_verbose||"--",age:u.age?"".concat(u.age,"岁"):"--",status:u.status,relation:u.relation_verbose||"--"};d.push(f),1===u.status&&(a.push(u.id),r.push(u.id)),o.setData({ehrList:d,oriChoosedId:a,ehrChoosedId:r})}else wx.showToast({title:n||"档案获取失败",icon:"none",duration:2e3})},fail:function(o){console.log(o)},complete:function(){wx.hideLoading({complete:function(){o.setData({loading:!1})}})}})},chooseChangeEvent:function(o){var e=this,t=o.currentTarget.dataset.id,i=this.data,n=i.oriChoosedId,s=i.ehrChoosedId,a=s.indexOf(t);a>-1?n.indexOf(t)>-1?wx.showModal({title:"提示",content:"取消授权后，健康管家将不再维护您的档案",confirmText:"取消授权",cancelText:"不取消",success:function(o){o.confirm?s.splice(a,1):o.cancel&&console.log("user cancel"),e.setData({oriChoosedId:n,ehrChoosedId:s})}}):s.splice(a,1):s.push(t),this.setData({oriChoosedId:n,ehrChoosedId:s})},authorizedEvent:function(){var e=this.data.ehrChoosedId;wx.request({url:t,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:n.globalData.sessionid},data:i({ehr_ids:JSON.stringify(e)}),success:function(e){var t=e.data,i=t.error_code,n=t.error_msg;if(0===i){var s=decodeURIComponent("".concat(o,"/wxvip/home"));wx.showToast({title:"授权成功",icon:"success",duration:2e3,complete:function(){wx.redirectTo({url:"/pages/vip_webview/index?url=".concat(s)})}})}else wx.showToast({title:n||"授权失败",icon:"none",duration:2e3})},fail:function(o){wx.showToast({title:"授权出错",icon:"none",duration:2e3}),console.log(o)}})},chooseAllEvent:function(){var o=this.data,e=o.chooseAll,t=o.ehrList,i=[];e||(i=t.map((function(o){return o.id}))),this.setData({chooseAll:!e,ehrChoosedId:i})}});
},{isPage:true,isComponent:true,currentFile:'pages/health_record_authorize/index.js'});require("pages/health_record_authorize/index.js");