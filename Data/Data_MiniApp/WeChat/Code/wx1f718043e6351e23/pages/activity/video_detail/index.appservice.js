$gwx_XC_86=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_86 || [];
function gz$gwx_XC_86_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_86_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_86_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_86_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'视频详情'])
Z([3,'c-page'])
Z([[7],[3,'info']])
Z([3,'live-container'])
Z([3,'live-banner-box article-banner'])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'liveStatus']],[1,1]])
Z([[6],[[7],[3,'info']],[3,'banner']])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'liveStatus']],[1,2]])
Z([3,'tarLivePlay'])
Z([[6],[[7],[3,'info']],[3,'live_url']])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'liveStatus']],[1,3]])
Z([3,'tarVideoPlay'])
Z(z[6])
Z([[6],[[7],[3,'info']],[3,'tencent_vid']])
Z([[2,'!'],[[6],[[7],[3,'info']],[3,'tencent_vid']]])
Z([3,'live-scroll-inner'])
Z([1,true])
Z([a,[3,'height:calc(100vh - '],[[7],[3,'topHeight']],[3,'px  - 418rpx);']])
Z([[2,'&&'],[[7],[3,'agenda']],[[6],[[7],[3,'agenda']],[3,'length']]])
Z([[7],[3,'agenda']])
Z([[6],[[7],[3,'info']],[3,'industry_banner']])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'info']],[3,'ib_status']],[1,1]],[[6],[[7],[3,'info']],[3,'industry_id']],[1,'']])
Z([[7],[3,'recList']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_86_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_86_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_86=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_86=true;
var x=['./pages/activity/video_detail/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_86_1()
var o04=_n('header')
_rz(z,o04,'title',0,e,s,gg)
_(r,o04)
var xA5=_n('view')
_rz(z,xA5,'class',1,e,s,gg)
var oB5=_v()
_(xA5,oB5)
if(_oz(z,2,e,s,gg)){oB5.wxVkey=1
var fC5=_n('view')
_rz(z,fC5,'class',3,e,s,gg)
var cD5=_n('view')
_rz(z,cD5,'class',4,e,s,gg)
var hE5=_v()
_(cD5,hE5)
if(_oz(z,5,e,s,gg)){hE5.wxVkey=1
var oF5=_n('video-box')
_rz(z,oF5,'poster',6,e,s,gg)
_(hE5,oF5)
}
else if(_oz(z,7,e,s,gg)){hE5.wxVkey=2
var cG5=_mz(z,'live-box',['bindliveplay',8,'video_url',1],[],e,s,gg)
_(hE5,cG5)
}
else{hE5.wxVkey=3
var lI5=_mz(z,'video-box',['bindvideoplay',11,'poster',1,'vid',2],[],e,s,gg)
_(hE5,lI5)
var oH5=_v()
_(hE5,oH5)
if(_oz(z,14,e,s,gg)){oH5.wxVkey=1
}
oH5.wxXCkey=1
}
hE5.wxXCkey=1
hE5.wxXCkey=3
hE5.wxXCkey=3
hE5.wxXCkey=3
_(fC5,cD5)
var aJ5=_mz(z,'scroll-view',['class',15,'scrollY',1,'style',2],[],e,s,gg)
var tK5=_v()
_(aJ5,tK5)
if(_oz(z,18,e,s,gg)){tK5.wxVkey=1
var eL5=_n('agenda-list')
_rz(z,eL5,'agenda',19,e,s,gg)
_(tK5,eL5)
}
var bM5=_mz(z,'rec-box',['industryBanner',20,'industryId',1,'recList',2],[],e,s,gg)
_(aJ5,bM5)
tK5.wxXCkey=1
tK5.wxXCkey=3
_(fC5,aJ5)
var oN5=_n('consult-btn')
_(fC5,oN5)
var xO5=_n('home-tips')
_(fC5,xO5)
_(oB5,fC5)
}
else{oB5.wxVkey=2
var oP5=_n('loading')
_(oB5,oP5)
}
oB5.wxXCkey=1
oB5.wxXCkey=3
oB5.wxXCkey=3
_(r,xA5)
var fQ5=_n('no-card-tip')
_(r,fQ5)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_86";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_86();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/activity/video_detail/index.wxml'] = [$gwx_XC_86, './pages/activity/video_detail/index.wxml'];else __wxAppCode__['pages/activity/video_detail/index.wxml'] = $gwx_XC_86( './pages/activity/video_detail/index.wxml' );
	;__wxRoute = "pages/activity/video_detail/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/activity/video_detail/index.js";define("pages/activity/video_detail/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Page({data:{shareImg:""},onLoad:function(n){n.scene&&wx.reLaunch({url:"/pages/case/tool_detail/index?refer=tool_video&scene=".concat(n.scene)})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{imageUrl:this.data.shareImg}}});
},{isPage:true,isComponent:true,currentFile:'pages/activity/video_detail/index.js'});require("pages/activity/video_detail/index.js");