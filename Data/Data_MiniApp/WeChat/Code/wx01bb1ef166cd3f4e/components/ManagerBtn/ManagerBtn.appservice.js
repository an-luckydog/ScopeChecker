$gwx_XC_46=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_46 || [];
function gz$gwx_XC_46_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_46_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_46_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_46_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isManager']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_46_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_46_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_46=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_46=true;
var x=['./components/ManagerBtn/ManagerBtn.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_46_1()
var oZF=_v()
_(r,oZF)
if(_oz(z,0,e,s,gg)){oZF.wxVkey=1
}
oZF.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_46";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_46();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/ManagerBtn/ManagerBtn.wxml'] = [$gwx_XC_46, './components/ManagerBtn/ManagerBtn.wxml'];else __wxAppCode__['components/ManagerBtn/ManagerBtn.wxml'] = $gwx_XC_46( './components/ManagerBtn/ManagerBtn.wxml' );
	;__wxRoute = "components/ManagerBtn/ManagerBtn";__wxRouteBegin = true;__wxAppCurrentFile__="components/ManagerBtn/ManagerBtn.js";define("components/ManagerBtn/ManagerBtn.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("@/services/chou"),n=require("@/utils/tools"),e=require("@/models/lottery"),r=require("@/utils/lotteryUtils");Component({properties:{lottery:Object},data:{isManager:!1},lifetimes:{ready:function(){this.setData({isManager:(0,t.isManager)()})}},methods:{handleClick:function(){var t=this.data.lottery,a=t.kefu_share_data,i=t.direct_share_only,u=t.groupchat_only,o=t.shareable,c=t.state,s=t.is_public,h=["封禁当前抽奖","封禁当前抽奖发起人","开启收集手机号后可参与"];[{match:function(){return["mina"===a.type,a.appid].every(Boolean)},handler:function(){return h.push("封禁当前小程序跳转")}},{match:function(){return(0,n.isOfficialFanseOnly)(t)},handler:function(){return h.push("取消公众号粉丝可参与功能")}},{match:function(){return i},handler:function(){return h.push("取消仅好友可参与功能")}},{match:function(){return u},handler:function(){return h.push("取消仅普通群聊可参与功能")}},{match:function(){return c!==e.LOTTERY_STATE_TYPE.CLOSED},handler:function(){h.push(o?"禁止分享":"开启分享"),h.push("关闭抽奖")}},{match:function(){return!(0,r.isLotteryEnd)(t)},handler:function(){return h.push("立即结束抽奖")}},{match:function(){return s},handler:function(){return h.push("取消首页展示")}}].forEach((function(t){var n=t.match,e=t.handler;n()&&e()})),this.triggerEvent("manageaction",{itemList:h})}}});
},{isPage:false,isComponent:true,currentFile:'components/ManagerBtn/ManagerBtn.js'});require("components/ManagerBtn/ManagerBtn.js");