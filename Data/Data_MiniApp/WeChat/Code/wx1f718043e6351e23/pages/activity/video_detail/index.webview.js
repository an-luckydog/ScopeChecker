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
Z([3,'live-tips'])
Z([3,' 直播尚未开始 '])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'liveStatus']],[1,2]])
Z([3,'tarLivePlay'])
Z([[6],[[7],[3,'info']],[3,'live_url']])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'liveStatus']],[1,3]])
Z([3,'tarVideoPlay'])
Z(z[6])
Z([[6],[[7],[3,'info']],[3,'tencent_vid']])
Z([[2,'!'],[[6],[[7],[3,'info']],[3,'tencent_vid']]])
Z(z[7])
Z([3,' 直播已结束 '])
Z([3,'live-scroll-inner'])
Z([1,true])
Z([a,[3,'height:calc(100vh - '],[[7],[3,'topHeight']],[3,'px  - 418rpx);']])
Z([3,'section container live-inner-wrapper'])
Z([3,'article-info'])
Z([3,'article-title'])
Z([a,[3,' '],[[6],[[7],[3,'info']],[3,'title']],[3,' ']])
Z([3,'article-desc'])
Z([3,'icon icon-30'])
Z([3,'https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/old_img/icon_clock.png'])
Z([a,z[25][1],[[6],[[7],[3,'info']],[3,'addTime']],z[25][1]])
Z([[2,'&&'],[[7],[3,'agenda']],[[6],[[7],[3,'agenda']],[3,'length']]])
Z([3,'section'])
Z([3,'section-title'])
Z([3,' 主要议程 '])
Z([3,'container'])
Z([[7],[3,'agenda']])
Z(z[34])
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
var eH1B=_n('header')
_rz(z,eH1B,'title',0,e,s,gg)
_(r,eH1B)
var bI1B=_n('view')
_rz(z,bI1B,'class',1,e,s,gg)
var oJ1B=_v()
_(bI1B,oJ1B)
if(_oz(z,2,e,s,gg)){oJ1B.wxVkey=1
var xK1B=_n('view')
_rz(z,xK1B,'class',3,e,s,gg)
var oL1B=_n('view')
_rz(z,oL1B,'class',4,e,s,gg)
var fM1B=_v()
_(oL1B,fM1B)
if(_oz(z,5,e,s,gg)){fM1B.wxVkey=1
var cN1B=_n('video-box')
_rz(z,cN1B,'poster',6,e,s,gg)
_(fM1B,cN1B)
var hO1B=_n('view')
_rz(z,hO1B,'class',7,e,s,gg)
var oP1B=_oz(z,8,e,s,gg)
_(hO1B,oP1B)
_(fM1B,hO1B)
}
else if(_oz(z,9,e,s,gg)){fM1B.wxVkey=2
var cQ1B=_mz(z,'live-box',['bindliveplay',10,'video_url',1],[],e,s,gg)
_(fM1B,cQ1B)
}
else{fM1B.wxVkey=3
var lS1B=_mz(z,'video-box',['bindvideoplay',13,'poster',1,'vid',2],[],e,s,gg)
_(fM1B,lS1B)
var oR1B=_v()
_(fM1B,oR1B)
if(_oz(z,16,e,s,gg)){oR1B.wxVkey=1
var aT1B=_n('view')
_rz(z,aT1B,'class',17,e,s,gg)
var tU1B=_oz(z,18,e,s,gg)
_(aT1B,tU1B)
_(oR1B,aT1B)
}
oR1B.wxXCkey=1
}
fM1B.wxXCkey=1
fM1B.wxXCkey=3
fM1B.wxXCkey=3
fM1B.wxXCkey=3
_(xK1B,oL1B)
var eV1B=_mz(z,'scroll-view',['class',19,'scrollY',1,'style',2],[],e,s,gg)
var oX1B=_n('view')
_rz(z,oX1B,'class',22,e,s,gg)
var xY1B=_n('view')
_rz(z,xY1B,'class',23,e,s,gg)
var oZ1B=_n('view')
_rz(z,oZ1B,'class',24,e,s,gg)
var f11B=_oz(z,25,e,s,gg)
_(oZ1B,f11B)
_(xY1B,oZ1B)
var c21B=_n('view')
_rz(z,c21B,'class',26,e,s,gg)
var h31B=_mz(z,'image',['class',27,'src',1],[],e,s,gg)
_(c21B,h31B)
var o41B=_oz(z,29,e,s,gg)
_(c21B,o41B)
_(xY1B,c21B)
_(oX1B,xY1B)
_(eV1B,oX1B)
var bW1B=_v()
_(eV1B,bW1B)
if(_oz(z,30,e,s,gg)){bW1B.wxVkey=1
var c51B=_n('view')
_rz(z,c51B,'class',31,e,s,gg)
var o61B=_n('view')
_rz(z,o61B,'class',32,e,s,gg)
var l71B=_oz(z,33,e,s,gg)
_(o61B,l71B)
_(c51B,o61B)
var a81B=_n('view')
_rz(z,a81B,'class',34,e,s,gg)
var t91B=_n('agenda-list')
_rz(z,t91B,'agenda',35,e,s,gg)
_(a81B,t91B)
_(c51B,a81B)
_(bW1B,c51B)
}
var e01B=_n('view')
_rz(z,e01B,'class',36,e,s,gg)
var bA2B=_mz(z,'rec-box',['industryBanner',37,'industryId',1,'recList',2],[],e,s,gg)
_(e01B,bA2B)
_(eV1B,e01B)
bW1B.wxXCkey=1
bW1B.wxXCkey=3
_(xK1B,eV1B)
var oB2B=_n('consult-btn')
_(xK1B,oB2B)
var xC2B=_n('home-tips')
_(xK1B,xC2B)
_(oJ1B,xK1B)
}
else{oJ1B.wxVkey=2
var oD2B=_n('view')
var fE2B=_n('loading')
_(oD2B,fE2B)
_(oJ1B,oD2B)
}
oJ1B.wxXCkey=1
oJ1B.wxXCkey=3
oJ1B.wxXCkey=3
_(r,bI1B)
var cF2B=_n('no-card-tip')
_(r,cF2B)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_86";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_86();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/activity/video_detail/index.wxml'] = [$gwx_XC_86, './pages/activity/video_detail/index.wxml'];else __wxAppCode__['pages/activity/video_detail/index.wxml'] = $gwx_XC_86( './pages/activity/video_detail/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/activity/video_detail/index.wxss'] = setCssToHead([".",[1],"c-page{padding:0 ",[0,30],"}\n.",[1],"article-info{border-bottom:none;padding:0}\n.",[1],"live-container{position:relative}\n.",[1],"live-scroll-inner{height:100%}\n.",[1],"live-inner-wrapper{padding-top:",[0,30],"}\n.",[1],"live-banner-box{margin:",[0,30]," ",[0,30]," 0;position:relative}\n.",[1],"live-tips{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.3);color:#fff;display:-webkit-flex;display:flex;font-size:",[0,36],";height:100%;-webkit-justify-content:center;justify-content:center;left:0;position:absolute;top:0;width:100%}\n",],undefined,{path:"./pages/activity/video_detail/index.wxss"});
}