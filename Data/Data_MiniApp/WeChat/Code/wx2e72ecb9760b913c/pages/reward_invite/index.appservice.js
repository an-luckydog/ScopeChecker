$gwx_XC_199=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_199 || [];
function gz$gwx_XC_199_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_199_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_199_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_199_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[6],[[7],[3,'result']],[3,'today_limit_exceed']],[[6],[[7],[3,'result']],[3,'user_limit_exceed']]])
Z([[7],[3,'active_rule']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_199_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_199_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_199=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_199=true;
var x=['./pages/reward_invite/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_199_1()
var xWVB=_v()
_(r,xWVB)
if(_oz(z,0,e,s,gg)){xWVB.wxVkey=1
}
var oXVB=_v()
_(r,oXVB)
if(_oz(z,1,e,s,gg)){oXVB.wxVkey=1
}
xWVB.wxXCkey=1
oXVB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_199";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_199();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/reward_invite/index.wxml'] = [$gwx_XC_199, './pages/reward_invite/index.wxml'];else __wxAppCode__['pages/reward_invite/index.wxml'] = $gwx_XC_199( './pages/reward_invite/index.wxml' );
	;__wxRoute = "pages/reward_invite/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/reward_invite/index.js";define("pages/reward_invite/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var i=getApp(),t=require("../../840A1D64829A079CE26C7563276C7B70.js").doPoint,e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl+"/events/newer_task/invitation_record_stats/";Page({data:{active_rule:!1,result:{reward_list:[],today_limit_exceed:!1,user_limit_exceed:!1},user_id:""},onLoad:function(i){t("ActivityPageView",{activity_name:"weixin_taskinvite",source_type:"Service notification"}),this.setData({user_id:i.inviter_id||wx.getStorageSync("sessionUserId")}),this.getInviteList(this.data.user_id)},getInviteList:function(t){var a=this;t&&wx.request({url:e,data:{inviter_id:t},header:{"Content-Type":"application/json",Cookie:i.globalData.sessionid},method:"GET",success:function(i){a.setData({result:i.data})}})},clickRuler:function(){this.setData({active_rule:!0})},hideTip:function(){this.setData({active_rule:!1})},onShareAppMessage:function(){return{title:"新用户使用本小程序，领1元微信红包【手慢无】",path:"/pages/index/index?is_invitation_task=1&inviter_id=".concat(this.data.user_id),imageUrl:"https://staff.chunyu.mobi/@/media/images/2019/08/28/d991/b3563856e7e2_w422_h338_.png"}},activityClick:function(){t("ActivityClick",{activity_name:"weixin_taskinvite1",click_position:"去邀请"})}});
},{isPage:true,isComponent:true,currentFile:'pages/reward_invite/index.js'});require("pages/reward_invite/index.js");