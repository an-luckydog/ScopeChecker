$gwx_XC_175=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_175 || [];
function gz$gwx_XC_175_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_175_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_175_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_175_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'preview-main-container'])
Z([[2,'==='],[[7],[3,'replyType']],[1,'text']])
Z([[2,'==='],[[7],[3,'replyType']],[1,'audio']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_175_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_175_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_175=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_175=true;
var x=['./pages/preview_reply/preview_reply.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_175_1()
var fYHB=_n('view')
_rz(z,fYHB,'class',0,e,s,gg)
var cZHB=_v()
_(fYHB,cZHB)
if(_oz(z,1,e,s,gg)){cZHB.wxVkey=1
}
var h1HB=_v()
_(fYHB,h1HB)
if(_oz(z,2,e,s,gg)){h1HB.wxVkey=1
}
cZHB.wxXCkey=1
h1HB.wxXCkey=1
_(r,fYHB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_175";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_175();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/preview_reply/preview_reply.wxml'] = [$gwx_XC_175, './pages/preview_reply/preview_reply.wxml'];else __wxAppCode__['pages/preview_reply/preview_reply.wxml'] = $gwx_XC_175( './pages/preview_reply/preview_reply.wxml' );
	;__wxRoute = "pages/preview_reply/preview_reply";__wxRouteBegin = true;__wxAppCurrentFile__="pages/preview_reply/preview_reply.js";define("pages/preview_reply/preview_reply.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../6E47C322829A079C0821AB25BD9C7B70.js");Page({data:{reply_type:"",reply_content:"",duration:"",audioContext:{},isPlaying:!1,isPlayerReady:!1},onLoad:function(t){this.setData({replyType:t.reply_type,replyContent:decodeURIComponent(t.reply_content)}),"audio"===this.data.replyType&&(this.setData({duration:Math.floor(t.duration/1e3)}),this.createAudioContextForreplyPreview(this.data.replyContent))},onUnload:function(){this.data.audioContext.stop&&this.data.audioContext.stop()},createAudioContextForreplyPreview:function(t){var a,e,o=this;this.data.audioContext=(a={src:t},e=wx.createInnerAudioContext({useWebAudioImplement:!0}),Object.assign(e,a)),this.data.audioContext.onCanplay((function(){o.data.isPlayerReady=!0,o.data.audioContext.play()})),this.data.audioContext.onPlay(this.handleAudioPlay),this.data.audioContext.onStop(this.handleAudioStop),this.data.audioContext.onEnded(this.handleAudioStop)},handleAudioPlay:function(){this.setData({isPlaying:!0})},handleAudioStop:function(){this.setData({isPlaying:!1})},togglePlay:function(){this.data.isPlayerReady&&(this.data.audioContext.paused?(this.data.audioContext.play(),this.handleAudioPlay()):(this.data.audioContext.pause(),this.handleAudioStop()))}});
},{isPage:true,isComponent:true,currentFile:'pages/preview_reply/preview_reply.js'});require("pages/preview_reply/preview_reply.js");