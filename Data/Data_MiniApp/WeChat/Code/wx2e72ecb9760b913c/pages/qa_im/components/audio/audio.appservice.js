$gwx_XC_180=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_180 || [];
function gz$gwx_XC_180_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_180_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_180_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_180_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_180_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_180_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_180=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_180=true;
var x=['./pages/qa_im/components/audio/audio.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_180_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_180";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_180();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/qa_im/components/audio/audio.wxml'] = [$gwx_XC_180, './pages/qa_im/components/audio/audio.wxml'];else __wxAppCode__['pages/qa_im/components/audio/audio.wxml'] = $gwx_XC_180( './pages/qa_im/components/audio/audio.wxml' );
	;__wxRoute = "pages/qa_im/components/audio/audio";__wxRouteBegin = true;__wxAppCurrentFile__="pages/qa_im/components/audio/audio.js";define("pages/qa_im/components/audio/audio.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../5FA81AD3829A079C39CE72D4239C7B70.js")),i=getApp();Component({properties:{audioData:{type:Object,value:{}},problemId:{type:String,value:""},audioId:{type:Number,value:0},isUnread:{type:Boolean,value:!1}},data:{canAudioPlay:!1,displayTime:0,sliderValue:0,isPlaying:!1,isPreviousPlaying:!1,isOriginalFirstUnread:!1,isFlaseInit:!1},audioContext:null,lifetimes:{attached:function(){this.initiatingAudioContext(),this.isOriginalFirstUnread=this.data.isUnread}},methods:{initiatingAudioContext:function(){var i=this;if(this.setData({displayTime:this._timeToMinuteForm(this.data.audioData.duration)}),this.audioContext=wx.createInnerAudioContext({useWebAudioImplement:!0}),!this.audioContext)return t.default.setFilterMsg("init-audio-content-fail"),t.default.info({problemId:this.data.problemId}),void this.setData({isFlaseInit:!0});wx.downloadFile({url:this.data.audioData.file,success:function(t){i.audioContext.src=t.tempFilePath,i.addCanplay(),i.addPlayListener(),i.addPauseListener(),i.addEndListener(),i.addTimeUpdateListener()}})},addCanplay:function(){var t=this;this.audioContext.onCanplay((function(){console.log(t.data.audioId,"this audio can be played"),console.log(t.audioContext.paused)}))},addPlayListener:function(){var t=this;this.audioContext.onPlay((function(){console.log(t.data.audioId,"this audio start playing"),t.setAudioMessageAsRead(),t.triggerEvent("start",{audioId:t.data.audioId}),t.setData({isPlaying:!0})}))},addEndListener:function(){var t=this;this.audioContext.onEnded((function(){console.log(t.data.audioId,"this audio ended"),t.setData({isPlaying:!1,sliderValue:0}),t.triggerEvent("end",{audioId:t.data.audioId})}))},addTimeUpdateListener:function(){var t=this;this.audioContext.onTimeUpdate((function(){var i=t.audioContext.currentTime,a=t._timeToMinuteForm(Math.floor(i));t.setData({displayTime:a,sliderValue:i})}))},addPauseListener:function(){var t=this;this.audioContext.onPause((function(){console.log(t.data.audioId,"this audio paused"),t.setData({isPlaying:!1})}))},onSliderChanging:function(t){this.data.isPreviousPlaying=!this.audioContext.paused,this.audioContext.pause()},onSliderChanged:function(t){i.sensors.track("AppClick",{app:"weixin_mini",click_position:"语音进度条",click_position_value:String(this.data.audioData.duration),page_readable_name:"QA详情页",problem_id_str:this.data.problemId}),this.audioContext.seek(t.detail.value),this.data.isPreviousPlaying&&this.audioContext.play()},togglePlay:function(){this.audioContext.paused?this.audioContext.play():this.audioContext.pause()},_timeToMinuteForm:function(t){if(t>60){var i=Math.floor(t/60),a=("0"+t%60).slice(-2);return"".concat(i,":").concat(a)}var e=("0"+t).slice(-2);return"0:".concat(e)},forcePause:function(){this.audioContext&&this.audioContext.pause()},forceStart:function(){this.audioContext&&this.audioContext.play()},setAudioMessageAsRead:function(){this.triggerEvent("read",{audioId:this.data.audioId})}}});
},{isPage:false,isComponent:true,currentFile:'pages/qa_im/components/audio/audio.js'});require("pages/qa_im/components/audio/audio.js");