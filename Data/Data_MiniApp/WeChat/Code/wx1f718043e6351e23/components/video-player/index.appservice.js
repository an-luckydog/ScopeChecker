$gwx_XC_70=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_70 || [];
function gz$gwx_XC_70_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_70_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'video-box'])
Z([[2,'&&'],[[7],[3,'videoPlayed']],[[7],[3,'vid']]])
Z([[2,'=='],[[7],[3,'type']],[1,1]])
Z([3,'onEnded'])
Z([3,'onError'])
Z([3,'onPause'])
Z([3,'onPlay'])
Z([3,'onTimeupdate'])
Z([3,'video-player'])
Z([[7],[3,'showProgress']])
Z([a,[3,'videoPlayer_'],[[7],[3,'timeId']]])
Z([a,[3,'txvPlayer_'],[[7],[3,'vid']]])
Z([1,false])
Z(z[9])
Z(z[11][2])
Z([3,'video-cover '])
Z(z[11][2])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_70_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_70=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_70=true;
var x=['./components/video-player/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_70_1()
var e8W=_n('view')
_rz(z,e8W,'class',0,e,s,gg)
var b9W=_v()
_(e8W,b9W)
if(_oz(z,1,e,s,gg)){b9W.wxVkey=1
var o0W=_v()
_(b9W,o0W)
if(_oz(z,2,e,s,gg)){o0W.wxVkey=1
var xAX=_mz(z,'txv-video',['autoplay',-1,'controls',-1,'bindended',3,'binderror',1,'bindpause',2,'bindplay',3,'bindtimeupdate',4,'class',5,'enableProgressGesture',6,'id',7,'playerid',8,'showCenterPlayBtn',9,'showProgress',10,'vid',11],[],e,s,gg)
_(o0W,xAX)
}
else{o0W.wxVkey=2
}
o0W.wxXCkey=1
o0W.wxXCkey=3
}
else{b9W.wxVkey=2
var oBX=_n('view')
_rz(z,oBX,'class',15,e,s,gg)
var cDX=_n('slot')
_(oBX,cDX)
var fCX=_v()
_(oBX,fCX)
if(_oz(z,16,e,s,gg)){fCX.wxVkey=1
}
fCX.wxXCkey=1
_(b9W,oBX)
}
b9W.wxXCkey=1
b9W.wxXCkey=3
_(r,e8W)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_70";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_70();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/video-player/index.wxml'] = [$gwx_XC_70, './components/video-player/index.wxml'];else __wxAppCode__['components/video-player/index.wxml'] = $gwx_XC_70( './components/video-player/index.wxml' );
	;__wxRoute = "components/video-player/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/video-player/index.js";define("components/video-player/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/objectSpread2"),e=getApp(),i=requirePlugin("tencentvideo");Component({externalClasses:["ext-class"],properties:{vid:{optionalTypes:[Number,String]},type:{type:Number},poster:{type:String},lock:{type:Boolean,value:!1},showProgress:{type:Boolean,value:!0},mode:{type:String,value:""}},data:{timerInfo:{currentTime:0,duration:0,isPlay:!1},timeId:""},lifetimes:{created:function(){this.vStatus={player:!1},this.vTimerInfo={currentTime:0},this.pointIndex=0,this.watchData=[],this.submittingData=[],this.currentPoiInfo={},this.vDataTimer=null,this.startSeek=0},attached:function(){var t=this,i=this;if(2===this.data.type)return this.setData({videoUrl:vid});this.data.vid&&(this.debug("视频组件加载",this.data.vid),this.setData({timeId:Date.now()}),this.debug("warn",this.data.timeId),this.vStatus={player:!1},this.vTimerInfo={currentTime:0},this.pointIndex=0,this.watchData=[],this.submittingData=[],this.currentPoiInfo={},this.vDataTimer=null,this.startSeek=0,this.debug("initTimerInfo",this.vTimerInfo),3===this.data.type||4===this.data.type?e.API.getVideoInfo({videoId:this.data.vid}).then((function(e){t.debug("获取云点播视频信息",e),t.setData({videoUrl:e.content.mediaUrl})})).catch((function(e){t.setData({videoUrl:"",vid:""})})):this.setData({videoUrl:this.data.vid})),this.videoContext=wx.createVideoContext("videoPlayer_".concat(this.data.timeId),this),this.videoPlayEventListener=function(t){i.videoPlayEventCall(t)},e.cEvent.on("videoPlay",this.videoPlayEventListener)},detached:function(){e.cEvent.off("videoPlay",this.videoPlayEventListener),this.stopWatchDataEvent(),this.debug("warn","视频组件卸载",this.data.vid)}},methods:{videoPlayEventCall:function(t){console.log("🚀 ~ file: index.js ~ line 150 ~ videoPlayEventCall ~ this",this),t!==this.data.timeId&&this.vStatus.played&&this.videoContext.pause()},fullscreenChange:function(t){t.detail.fullScreen?e.cEvent.emit("videoFullscreen"):e.cEvent.emit("exitVideoFullscreen")},tapVideo:function(){var t=this;this.triggerEvent("clickplay",(function(e){if(e){var a=t.data,n=a.type,r=a.vid;if(2===n)return wx.navigateTo({url:"/pages/common/webview/index?url=".concat(encodeURIComponent(r))});if(!t.data.lock){switch(t.debug("允许播放视频"),t.setData({videoPlayed:!0,lock:!0}),t.debug("info",t.data.type),t.data.type){case 1:t.videoPlayer=i.getTxvContext("txvPlayer_".concat(t.data.vid));break;default:t.videoPlayer=wx.createVideoContext("videoPlayer_".concat(t.data.timeId),t)}t.startSeek&&t.videoPlayer.seek(t.startSeek),t.debug("获取videoContext",t.videoPlayer),t.starWatchDataEvent()}}else t.debug("不允许播放视频")}))},triggerPlay:function(){},stopWatchDataEvent:function(){this.debug("warn","关闭定时器"),this.vStatus.played&&this.vTimerInfo.currentTime-this.currentPoiInfo.vsTime&&e.QD.track("WatchingVideo",{ContentID:e.QD.getLastContentId(),TimeOfWatch:this.vTimerInfo.currentTime-this.currentPoiInfo.vsTime,is_finished:this.vTimerInfo.currentTime==this.currentPoiInfo.veTime,menu:e.globalData.currentTab,name_of_page:e.QD.getLastNameOfPage(),CampaignID:e.QD.currentParams.CampaignID||"",NameOfCampaign:e.QD.currentParams.NameOfCampaign||""}),clearInterval(this.vDataTimer),this.vStatus.played&&(this.addPointEnd(this.vTimerInfo.currentTime),this.addPointStart(this.vTimerInfo.currentTime)),this.uploadWatchData()},starWatchDataEvent:function(){var t=this;this.debug("warn","启动定时器"),clearInterval(this.vDataTimer),this.vDataTimer=setInterval((function(){t.vStatus.played&&(t.addPointEnd(t.vTimerInfo.currentTime),t.addPointStart(t.vTimerInfo.currentTime)),t.uploadWatchData()}),6e4)},uploadWatchData:function(){var t=this;this.submittingData=this.submittingData.concat(this.watchData),this.watchData=[],this.pointIndex=0,this.submittingData.length?(this.submittingData.forEach((function(t){t.veTime=Math.ceil(t.veTime),t.vsTime=Math.ceil(t.vsTime)})),this.debug("提交打点数据","进行中",JSON.stringify(this.submittingData)),this.triggerEvent("uploadData",{data:this.submittingData,callback:function(e,i){e?(t.debug("提交打点数据","成功"),t.submittingData=[]):t.debug("error","提交打点数据失败",i)}})):this.debug("无打点数据需要提交")},getCurrentTimeStamp:function(){return Date.parse(new Date)/1e3},addPointStart:function(t){this.debug("打点 -- 开始点 -- ".concat(this.pointIndex+1),t),this.currentPoiInfo={vsTime:t,veTime:""}},addPointEnd:function(t){this.debug("打点 -- 结束点 -- ".concat(this.pointIndex+1),t),0!=t?t-this.currentPoiInfo.vsTime<=1?this.debug("warn","打点间隔太短，不记录点位"):(this.currentPoiInfo.veTime=t,this.watchData.push(this.currentPoiInfo),this.pointIndex++,this.debug("warn","当前打点列表",this.watchData)):this.debug("warn","打点结束时帧数为0，不记录点位")},seek:function(t){this.videoPlayer?(this.videoPlayer.seek(t),this.vStatus.played||this.videoPlayer.play()):(this.startSeek=t,this.tapVideo())},onPlay:function(t){e.cEvent.emit("videoPlay",this.data.timeId),this.debug("视频播放",this.vTimerInfo.currentTime||"默认0"),this.vStatus.played&&this.addPointEnd(this.vTimerInfo.currentTime),this.vStatus.played=!0,this.addPointStart(this.vTimerInfo.currentTime||0),this.triggerEvent("videoPlay"),e.QD.track("start_play_video",{ContentID:e.QD.getLastContentId(),menu:e.globalData.currentTab,name_of_page:e.QD.getLastNameOfPage(),CampaignID:e.QD.currentParams.CampaignID||"",NameOfCampaign:e.QD.currentParams.NameOfCampaign||""})},onPause:function(t){this.debug("视频暂停",this.vTimerInfo.currentTime),this.vStatus.played=!1,this.vStatus.paused=!0,this.addPointEnd(this.vTimerInfo.currentTime),e.QD.track("WatchingVideo",{ContentID:e.QD.getLastContentId(),TimeOfWatch:this.vTimerInfo.currentTime-this.currentPoiInfo.vsTime,is_finished:this.vTimerInfo.currentTime==this.currentPoiInfo.veTime,menu:e.globalData.currentTab,name_of_page:e.QD.getLastNameOfPage(),CampaignID:e.QD.currentParams.CampaignID||"",NameOfCampaign:e.QD.currentParams.NameOfCampaign||""})},onEnded:function(t){t.detail.isAd?this.debug("info","广告播放结束"):(this.debug("info","视频播放结束"),this.vStatus.played=!1,this.vStatus.ended=!0)},onTimeupdate:function(e){this.prevVTimerInfo=t({},this.vTimerInfo);var i=this.prevVTimerInfo.currentTime,a=e.detail.currentTime;this.vTimerInfo=e.detail,this.vStatus.played&&Math.abs(i-a)>=1&&(this.addPointEnd(i),this.addPointStart(a))},onError:function(t){this.debug("error","onError",t),wx.showToast({title:"视频信息请求失败，请稍后重试:"+t.detail.errMsg,icon:"none",duration:5e3})},debug:function(){var t,e,i,a;switch(arguments[0]){case"warn":(t=console).warn.apply(t,["VIDEO TEST"].concat(Array.prototype.slice.call(arguments)));break;case"info":(e=console).info.apply(e,["VIDEO TEST"].concat(Array.prototype.slice.call(arguments)));break;case"error":(i=console).error.apply(i,["VIDEO TEST"].concat(Array.prototype.slice.call(arguments)));break;default:(a=console).log.apply(a,["VIDEO TEST"].concat(Array.prototype.slice.call(arguments)))}}}});
},{isPage:false,isComponent:true,currentFile:'components/video-player/index.js'});require("components/video-player/index.js");