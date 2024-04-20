$gwx_XC_51=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_51 || [];
function gz$gwx_XC_51_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_51_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'activityControl']])
Z([3,'follow-comp'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_51_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_51=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_51=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/seckill-core/components/seckill/seckill.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_51_1()
var oBO=_n('seckill')
_rz(z,oBO,'activityControl',0,e,s,gg)
_(r,oBO)
var xCO=_n('follow')
_rz(z,xCO,'class',1,e,s,gg)
_(r,xCO)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_51";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_51();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/seckill-core/components/seckill/seckill.wxml'] = [$gwx_XC_51, './miniprogram_npm/@tmsfe/tms-ui/seckill-core/components/seckill/seckill.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/seckill-core/components/seckill/seckill.wxml'] = $gwx_XC_51( './miniprogram_npm/@tmsfe/tms-ui/seckill-core/components/seckill/seckill.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/seckill-core/components/seckill/seckill";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/seckill-core/components/seckill/seckill.js";define("miniprogram_npm/@tmsfe/tms-ui/seckill-core/components/seckill/seckill.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=(e=require("../../../../../../@babel/runtime/regenerator"))&&e.__esModule?e:{default:e},r=require("../../../../../../@babel/runtime/helpers/objectSpread2"),n=require("../../../../../../@babel/runtime/helpers/asyncToGenerator"),a=require("./activityControl/activityData"),i=require("./activityControl/default"),o=require("../../logic/User"),u=require("../../logic/Request");Component({properties:{theme:{type:String,value:"",observer:"updateActivity"}},data:{activityControl:{}},attached:function(){this.data.theme||this.updateActivity().then()},methods:{getSecKillConfig:function(e){var a=this;return n(t.default.mark((function n(){var i,u,s,c,l;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.seckillConfig){t.next=2;break}return t.abrupt("return",a.seckillConfig);case 2:return t.next=4,(0,o.getUserLocation)(!0);case 4:return i=t.sent,t.next=7,e.gatewayOptions.getRemoteConfig(i);case 7:if(u=t.sent){t.next=10;break}return t.abrupt("return",Promise.reject());case 10:return s=new Date,c=new Date(s.getFullYear(),s.getMonth(),s.getDate(),0,0,0).getTime(),l=c+1728e5,a.seckillConfig=r({startTime:c,endTime:l},u),t.abrupt("return",a.seckillConfig);case 15:case"end":return t.stop()}}),n)})))()},updateActivity:function(e){var o=this;return n(t.default.mark((function n(){var u,s,c,l;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=(0,a.getActivityData)(e),t.prev=1,t.next=4,o.getSecKillConfig(u);case 4:if(s=t.sent){t.next=7;break}throw new Error("secKillConfig null");case 7:if(u.secKillConfig=r(r({},s),{},{activityConfig:void 0}),!s.enableRemind){t.next=14;break}return t.next=11,o.getFollowRemindStatus();case 11:c=t.sent,l=u.activityData.secKillDialogInfo[i.dialogStateMap.SUCCESS],c||(l.bottomTip="过期前提醒我使用",l.clickTipAction=o.follow.bind(o));case 14:o.setData({activityControl:r(r({},u),s.activityConfig||{})}),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),o.triggerEvent("onSecKillReady",{},{bubbles:!0,composed:!0});case 20:case"end":return t.stop()}}),n,null,[[1,17]])})))()},follow:function(){var e=this;return n(t.default.mark((function r(){var n;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.selectComponent(".follow-comp"),t.next=3,n.fetchFollowStatus();case 3:if(!t.sent.followStatus){t.next=8;break}return t.next=7,e.followRemind();case 7:return t.abrupt("return",wx.showToast({icon:"none",title:"订阅成功",mask:!0,duration:2e3}));case 8:return t.next=10,n.followOA("https://mp.weixin.qq.com/s/1IMIXrZPzBbJgIqH15Fr-w");case 10:if(!t.sent.followStatus){t.next=15;break}return t.next=14,e.followRemind();case 14:return t.abrupt("return",wx.showToast({icon:"none",title:"订阅成功",mask:!0,duration:2e3}));case 15:case"end":return t.stop()}}),r)})))()},followRemind:function(){return n(t.default.mark((function e(){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.request)("/user/coupon/remind/open",{},"get");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getFollowRemindStatus:function(){return n(t.default.mark((function e(){var r;return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.request)("user/coupon/remind/info",{},"get");case 2:return r=e.sent,e.abrupt("return",1===r.reminderStatus);case 4:case"end":return e.stop()}}),e)})))()}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/seckill-core/components/seckill/seckill.js'});require("miniprogram_npm/@tmsfe/tms-ui/seckill-core/components/seckill/seckill.js");