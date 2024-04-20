$gwx_XC_47=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_47 || [];
function gz$gwx_XC_47_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_47_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_47_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_47_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'liveFullScreenChange'])
Z([3,'liveNetStatus'])
Z([3,'liveStateChange'])
Z([3,'live-player'])
Z([3,'LivePlayer'])
Z([[7],[3,'video_url']])
Z([3,'live-action-wrapper'])
Z([3,'player-action'])
Z([[2,'!'],[[7],[3,'isFs']]])
Z([[7],[3,'isFs']])
Z([[2,'!'],[[7],[3,'livePlayed']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_47_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_47_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_47=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_47=true;
var x=['./components/live-box/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_47_1()
var oLR=_mz(z,'live-player',['bindfullscreenchange',0,'bindnetstatus',1,'bindstatechange',1,'class',2,'id',3,'src',4],[],e,s,gg)
var cMR=_n('cover-view')
_rz(z,cMR,'class',6,e,s,gg)
var lOR=_n('cover-view')
_rz(z,lOR,'class',7,e,s,gg)
var aPR=_v()
_(lOR,aPR)
if(_oz(z,8,e,s,gg)){aPR.wxVkey=1
}
var tQR=_v()
_(lOR,tQR)
if(_oz(z,9,e,s,gg)){tQR.wxVkey=1
}
aPR.wxXCkey=1
tQR.wxXCkey=1
_(cMR,lOR)
var oNR=_v()
_(cMR,oNR)
if(_oz(z,10,e,s,gg)){oNR.wxVkey=1
}
oNR.wxXCkey=1
_(oLR,cMR)
_(r,oLR)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_47";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_47();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/live-box/index.wxml'] = [$gwx_XC_47, './components/live-box/index.wxml'];else __wxAppCode__['components/live-box/index.wxml'] = $gwx_XC_47( './components/live-box/index.wxml' );
	;__wxRoute = "components/live-box/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/live-box/index.js";define("components/live-box/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,a=getApp();requirePlugin("tencentvideo");Component({properties:{video_url:{type:String}},data:{code:2,statusText:"暂停播放",videoPlayed:!1,livePlayed:!1,isFs:!1},detached:function(){wx.setKeepScreenOn({keepScreenOn:!1})},methods:{liveStateChange:function(e){var a,t=e.detail.code;switch(console.log(t),t){case 2001:a="已经连接服务器";break;case 2002:a="已经连接服务器, 开始拉流";break;case 2003:a="网络接收到首个视频数据包(IDR)";break;case 2004:a="视频播放开始";break;case 2005:a="视频播放进度";break;case 2006:a="视频播放结束";break;case 2007:a="视频播放Loading";break;case 2008:a="解码器启动";break;case 2009:a="视频分辨率改变";break;case-2301:a="网络断连，且经多次重连抢救无效，更多重试请自行重启播放",this.setData({livePlayed:!1});break;case-2302:a="获取加速拉流地址失败";break;case 2101:a="当前视频帧解码失败";break;case 2102:a="当前音频帧解码失败";break;case 2103:a="网络断连, 已启动自动重连";break;case 2104:a="网络来包不稳：可能是下行带宽不足，或由于主播端出流不均匀";break;case 2105:a="当前视频播放出现卡顿";break;case 2106:a="硬解启动失败，采用软解";break;case 2107:a="当前视频帧不连续，可能丢帧";break;case 2108:a="当前流硬解第一个I帧失败，SDK自动切软解";break;case 3001:a="RTMP - DNS解析失败";break;case 3002:a="RTMP服务器连接失败";break;case 3003:a="RTMP服务器握手失败";break;case 3005:a="RTMP 读 / 写失败";break;default:a=t}console.log(a),this.setData({code:t,statusText:a})},liveFullScreenChange:function(e){console.log("直播全屏事件",e);var a=e.detail,t=(a.direction,a.fullScreen);this.setData({isFs:t})},liveNetStatus:function(e){console.log("直播网络状态",e)},livePlay:function(){var t=this;this.triggerEvent("liveplay"),a.checkIsReg((function(){var a=wx.createLivePlayerContext("LivePlayer",t);(e=a).play(),t.setData({statusText:"开始播放",livePlayed:!0}),wx.setKeepScreenOn({keepScreenOn:!0})}))},enterFullScreen:function(){if(e){var a=this;e.requestFullScreen({direction:90,success:function(){a.setData({isFs:!0})}})}},exitFullScreen:function(){if(e){var a=this;e.exitFullScreen({success:function(){a.setData({isFs:!1})}})}},tapLive:function(){this.livePlay()}}});
},{isPage:false,isComponent:true,currentFile:'components/live-box/index.js'});require("components/live-box/index.js");