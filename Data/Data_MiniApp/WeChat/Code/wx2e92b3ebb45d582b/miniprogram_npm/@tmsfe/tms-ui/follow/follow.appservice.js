$gwx_XC_27=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_27 || [];
function gz$gwx_XC_27_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([[2,'!'],[[7],[3,'customUI']]])
Z([[7],[3,'flase']])
Z([1,true])
Z([3,'onTapFollow'])
Z([3,'follow'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_27=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_27=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/follow/follow.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_27_1()
var tSI=_v()
_(r,tSI)
if(_oz(z,0,e,s,gg)){tSI.wxVkey=1
var eTI=_v()
_(tSI,eTI)
if(_oz(z,1,e,s,gg)){eTI.wxVkey=1
var bUI=_mz(z,'ui-mask',['hideOnTap',2,'show',1],[],e,s,gg)
_(eTI,bUI)
}
else{eTI.wxVkey=2
var oVI=_mz(z,'slot',['bindtap',4,'name',1],[],e,s,gg)
_(eTI,oVI)
}
eTI.wxXCkey=1
eTI.wxXCkey=3
}
tSI.wxXCkey=1
tSI.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_27";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_27();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/follow/follow.wxml'] = [$gwx_XC_27, './miniprogram_npm/@tmsfe/tms-ui/follow/follow.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/follow/follow.wxml'] = $gwx_XC_27( './miniprogram_npm/@tmsfe/tms-ui/follow/follow.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/follow/follow";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/follow/follow.js";define("miniprogram_npm/@tmsfe/tms-ui/follow/follow.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,o=(t=require("@tmsfe/tms-core"))&&t.__esModule?t:{default:t};var e,l,n=o.default.createRequest,r=o.default.getConfig,i=n();Component({options:{multipleSlots:!0},properties:{show:Boolean,customUI:Boolean,publicSrc:String,logo:{type:String,value:"https://static.img.tai.qq.com/mp/components/follow/logo-default.png"},title:{type:String,value:"关注微信公众号"},desc:{type:String,value:"公众号搜索\n“腾讯出行服务”\n关注后就可以随时接收限行消息"},btnText:{type:String,value:"去关注公众号"}},followOAProm:null,followOAResolve:null,followOAReject:null,methods:{fetchFollowStatus:function(){var t,o,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];null!==(t=e)&&void 0!==t||(e=Date.now());var r=Date.now();return!n||r-e>1e3?(e=r,l=i.get("user/official/followstatus",{oaName:"sinan"}).then((function(t){return{followStatus:t.resData.followStatus}}))):null!==(o=l)&&void 0!==o?o:l=i.get("user/official/followstatus",{oaName:"sinan"}).then((function(t){return{followStatus:t.resData.followStatus}}))},followOA:function(t){var o=this;if(this.followOAProm)return this.followOAProm;var e=new Promise((function(t,e){o.followOAResolve=t,o.followOAReject=e}));return this.followOAProm=e,e.catch((function(){return null})).then((function(){return o.followOAProm=null})),t?this.openPuclicPage(t):this.data.publicSrc?this.openPuclicPage(this.data.publicSrc):this.fetchConfPublicPage().then((function(t){return t?(o.setData({publicSrc:t}),o.openPuclicPage(t)):Promise.reject("No public article link")})).catch((function(t){if("function"!=typeof o.followOAReject)return Promise.reject(t);o.followOAReject(t)})),e},openPuclicPage:function(t){var o=t||"https://mp.weixin.qq.com/s/1IMIXrZPzBbJgIqH15Fr-w",e="".concat("/launch/launch?target=webShare","&url=").concat(encodeURIComponent(o));wx.navigateTo({url:e})},fetchConfPublicPage:function(){var t=getCurrentPages();if(!t.length)return Promise.reject("No page found");var o=t[t.length-1];return r("/${client}/components/follow",{page:o.route}).then((function(t){return t.publicSrc}))},close:function(){this.setData({show:!1}),this.triggerEvent("close",{})},onTapFollow:function(){var t=this;this.followOA().then((function(o){var e=o.followStatus;return t.triggerEvent("follow",{followStatus:e})})).catch((function(o){return t.triggerEvent("error",{error:o})}))}},lifetimes:{detached:function(){this.followOAResolve=null,this.followOAReject=null}},pageLifetimes:{show:function(){var t=this;"function"==typeof this.followOAResolve&&this.fetchFollowStatus(!1).then((function(o){var e=o.followStatus;t.followOAResolve({followStatus:e}),t.followOAResolve=null,t.followOAReject=null})).catch((function(o){var e=t.followOAReject||Promise.reject;return t.followOAResolve=null,t.followOAReject=null,e(o)}))}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/follow/follow.js'});require("miniprogram_npm/@tmsfe/tms-ui/follow/follow.js");