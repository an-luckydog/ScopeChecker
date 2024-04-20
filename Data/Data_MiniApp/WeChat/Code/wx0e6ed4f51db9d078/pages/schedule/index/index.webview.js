$gwx_XC_25=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_25 || [];
function gz$gwx_XC_25_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isLogin']])
Z([[2,'=='],[[6],[[7],[3,'cardList']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'travelPlanList']],[3,'length']],[1,0]])
Z([3,'no_schedule_back'])
Z([[2,'?:'],[[7],[3,'isLoading']],[1,'view_hidden'],[1,'no_schedule_view']])
Z([3,'no_schedule_icon'])
Z([3,'https://pages.c-ctrip.com/schedule/pic/icon/wxctc.png'])
Z([3,'no_schedule_maintext'])
Z([3,'您暂时还没有行程'])
Z([3,'noschedule-add-content-view'])
Z([3,'showScheduleLayer'])
Z([3,'custom-button-for-compt'])
Z([3,'add-view'])
Z([3,'add-btn'])
Z([3,'关注航班/火车动态'])
Z([3,'only_travel_plan'])
Z([3,'empty-schedule-container'])
Z([3,'empty_schedule_icon'])
Z([3,'https://pages.c-ctrip.com/schedule/pic/wxxcx/image_sousuo.png'])
Z([3,'empty_schedule_title'])
Z(z[8])
Z([[6],[[7],[3,'travelPlanList']],[1,0]])
Z([3,'concern-train-view'])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z([[2,'==='],[[6],[[7],[3,'travelPlanList']],[3,'length']],[1,0]])
Z([3,'vertical_line'])
Z([3,'scroll_login'])
Z([[7],[3,'positionId']])
Z(z[29])
Z([[7],[3,'cardList']])
Z([3,'smartTripId'])
Z([[6],[[7],[3,'item']],[3,'positionId']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'index']],[1,0]],[[7],[3,'activity']],[1,null]])
Z([3,'deleteCard'])
Z([3,'touchCancel'])
Z([3,'touchEnd'])
Z([3,'touchMove'])
Z([3,'touchStart'])
Z([[7],[3,'item']])
Z([3,'timeline-tips'])
Z([3,'暂时只能查看火车、汽车、飞机、酒店、景点门票相关行程'])
Z([[2,'>'],[[6],[[7],[3,'travelPlanList']],[3,'length']],[1,0]])
Z([3,'travel-list-container'])
Z(z[21])
Z([3,'empty-space'])
Z([3,'add-content-view'])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z([3,'viewReadyHandle'])
Z([3,'view-check'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_25=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_25=true;
var x=['./pages/schedule/index/index.wxml','addScheduleLayer.wxml','./noLogin/noLogin.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_25_1()
var o03=_n('perinfo-protect-float')
_(r,o03)
var h93=_v()
_(r,h93)
if(_oz(z,0,e,s,gg)){h93.wxVkey=1
var cA4=e_[x[0]].j
var oB4=_v()
_(h93,oB4)
if(_oz(z,1,e,s,gg)){oB4.wxVkey=1
var lC4=_v()
_(oB4,lC4)
if(_oz(z,2,e,s,gg)){lC4.wxVkey=1
var aD4=_n('view')
_rz(z,aD4,'class',3,e,s,gg)
var tE4=_n('view')
_rz(z,tE4,'class',4,e,s,gg)
var eF4=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(tE4,eF4)
var bG4=_n('text')
_rz(z,bG4,'class',7,e,s,gg)
var oH4=_oz(z,8,e,s,gg)
_(bG4,oH4)
_(tE4,bG4)
var xI4=_n('view')
_rz(z,xI4,'class',9,e,s,gg)
var oJ4=_mz(z,'formid-button',['catchtap',10,'formidButtonClass',1],[],e,s,gg)
var fK4=_n('view')
_rz(z,fK4,'class',12,e,s,gg)
var cL4=_n('view')
_rz(z,cL4,'class',13,e,s,gg)
var hM4=_n('text')
var oN4=_oz(z,14,e,s,gg)
_(hM4,oN4)
_(cL4,hM4)
_(fK4,cL4)
_(oJ4,fK4)
_(xI4,oJ4)
_(tE4,xI4)
_(aD4,tE4)
_(lC4,aD4)
}
else{lC4.wxVkey=2
var cO4=_n('view')
_rz(z,cO4,'class',15,e,s,gg)
var oP4=_n('view')
_rz(z,oP4,'class',16,e,s,gg)
var lQ4=_mz(z,'image',['class',17,'src',1],[],e,s,gg)
_(oP4,lQ4)
var aR4=_n('text')
_rz(z,aR4,'class',19,e,s,gg)
var tS4=_oz(z,20,e,s,gg)
_(aR4,tS4)
_(oP4,aR4)
_(cO4,oP4)
var eT4=_n('travel-plan-view')
_rz(z,eT4,'itemData',21,e,s,gg)
_(cO4,eT4)
var bU4=_n('view')
_rz(z,bU4,'class',22,e,s,gg)
var oV4=_mz(z,'formid-button',['catchtap',23,'formidButtonClass',1],[],e,s,gg)
var xW4=_n('view')
_rz(z,xW4,'class',25,e,s,gg)
var oX4=_n('view')
_rz(z,oX4,'class',26,e,s,gg)
var fY4=_n('text')
var cZ4=_oz(z,27,e,s,gg)
_(fY4,cZ4)
_(oX4,fY4)
_(xW4,oX4)
_(oV4,xW4)
_(bU4,oV4)
_(cO4,bU4)
_(lC4,cO4)
}
lC4.wxXCkey=1
lC4.wxXCkey=3
lC4.wxXCkey=3
}
else{oB4.wxVkey=2
var h14=_v()
_(oB4,h14)
if(_oz(z,28,e,s,gg)){h14.wxVkey=1
var o24=_n('view')
_rz(z,o24,'class',29,e,s,gg)
_(h14,o24)
}
var c34=_mz(z,'scroll-view',['scrollY',-1,'class',30,'scrollIntoView',1],[],e,s,gg)
var l54=_n('view')
_rz(z,l54,'class',32,e,s,gg)
_(c34,l54)
var a64=_v()
_(c34,a64)
var t74=function(b94,e84,o04,gg){
var oB5=_n('view')
_rz(z,oB5,'id',35,b94,e84,gg)
var fC5=_mz(z,'card-item',['activity',36,'bindCardDelete',1,'bindCardTouchCancel',2,'bindCardTouchEnd',3,'bindCardTouchMove',4,'bindCardTouchStart',5,'cardData',6],[],b94,e84,gg)
_(oB5,fC5)
_(o04,oB5)
return o04
}
a64.wxXCkey=4
_2z(z,33,t74,e,s,gg,a64,'item','index','smartTripId')
var cD5=_n('text')
_rz(z,cD5,'class',43,e,s,gg)
var hE5=_oz(z,44,e,s,gg)
_(cD5,hE5)
_(c34,cD5)
var o44=_v()
_(c34,o44)
if(_oz(z,45,e,s,gg)){o44.wxVkey=1
var oF5=_n('view')
_rz(z,oF5,'class',46,e,s,gg)
var cG5=_n('travel-plan-view')
_rz(z,cG5,'itemData',47,e,s,gg)
_(oF5,cG5)
_(o44,oF5)
}
else{o44.wxVkey=2
var oH5=_n('view')
_rz(z,oH5,'class',48,e,s,gg)
_(o44,oH5)
}
o44.wxXCkey=1
o44.wxXCkey=3
_(oB4,c34)
var lI5=_n('view')
_rz(z,lI5,'class',49,e,s,gg)
var aJ5=_mz(z,'formid-button',['catchtap',50,'formidButtonClass',1],[],e,s,gg)
var tK5=_n('view')
_rz(z,tK5,'class',52,e,s,gg)
var eL5=_n('view')
_rz(z,eL5,'class',53,e,s,gg)
var bM5=_n('text')
var oN5=_oz(z,54,e,s,gg)
_(bM5,oN5)
_(eL5,bM5)
_(tK5,eL5)
_(aJ5,tK5)
_(lI5,aJ5)
_(oB4,lI5)
h14.wxXCkey=1
}
_ic(x[1],e_,x[0],e,s,h93,gg);
oB4.wxXCkey=1
oB4.wxXCkey=3
oB4.wxXCkey=3
cA4.pop()
}
else{h93.wxVkey=2
var xO5=e_[x[0]].j
_ic(x[2],e_,x[0],e,s,h93,gg);
xO5.pop()
}
var oP5=_mz(z,'view',['bindanimationend',55,'class',1],[],e,s,gg)
_(r,oP5)
h93.wxXCkey=1
h93.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_25";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_25();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/schedule/index/index.wxml'] = [$gwx_XC_25, './pages/schedule/index/index.wxml'];else __wxAppCode__['pages/schedule/index/index.wxml'] = $gwx_XC_25( './pages/schedule/index/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/schedule/index/index.wxss'] = setCssToHead([[2,"./pages/schedule/index/addScheduleLayer.wxss"],[2,"./pages/schedule/index/noLogin/noLogin.wxss"],"body{background-color:#f8f8f8}\n.",[1],"scroll_login,body{height:100%}\n.",[1],"vertical_line{background-color:#eeeef0;height:calc(100% - ",[0,34],");left:",[0,29],";position:absolute;top:",[0,34],";width:",[0,2],";z-index:-1}\n.",[1],"inview{height:100%}\n.",[1],"no_schedule_back{display:flex;flex-grow:1;justify-content:center}\n.",[1],"no_schedule_view{align-items:center;display:flex;flex-direction:column;width:100%}\n.",[1],"no_schedule_icon{height:",[0,500],";width:",[0,750],"}\n.",[1],"empty_schedule_icon{height:",[0,277],";margin-bottom:",[0,45],";margin-top:",[0,100],";width:",[0,304],"}\n.",[1],"empty_schedule_title{color:#333;font-size:",[0,29],";line-height:",[0,44],";margin-bottom:",[0,110],"}\n.",[1],"no_schedule_maintext{color:#666;font-size:",[0,40],";font-weight:bolder;margin-top:",[0,20],"}\n.",[1],"no_schedule_subtext{color:#999;font-size:",[0,28],";margin-top:",[0,28],"}\n.",[1],"view_hidden{display:none}\n.",[1],"no_schecule_action{align-items:center;background-color:#1980fe;border-radius:",[0,48],";color:#fff;display:flex;font-size:",[0,38],";height:",[0,98],";justify-content:center;margin-top:",[0,80],";width:",[0,450],"}\n.",[1],"timeline-tips{color:#999;display:flex;flex:1;font-size:",[0,24],";margin-top:",[0,12],";padding-left:",[0,83],"}\n.",[1],"noschedule-add-content-view{margin-top:",[0,40],";position:relative;width:100%}\n.",[1],"add-content-view{bottom:",[0,40],";position:fixed;width:100%}\n.",[1],"add-view{flex:1}\n.",[1],"add-btn,.",[1],"add-view{display:flex;justify-content:center}\n.",[1],"add-btn{align-items:center;align-self:center;background-color:#1980fe;border-radius:",[0,100],";color:#fff;flex-direction:row;font-size:",[0,26],";height:",[0,80],";width:",[0,248],"}\n.",[1],"add-icon{height:",[0,30],";margin-right:",[0,16],";width:",[0,30],"}\n.",[1],"custom-button-for-compt{height:100%;width:100%;z-index:10}\n.",[1],"only_travel_plan{margin:",[0,36]," ",[0,36]," ",[0,0],"}\n.",[1],"empty-schedule-container{align-items:center;display:flex;flex-direction:column}\n.",[1],"travel-list-container{background-color:#f8f8f8;padding:",[0,40]," ",[0,36]," ",[0,180],"}\n.",[1],"empty-space{height:",[0,180],"}\n.",[1],"concern-train-view{bottom:",[0,40],";left:",[0,0],";position:fixed;right:",[0,0],";width:100%}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/schedule/index/index.wxss:1:110)",{path:"./pages/schedule/index/index.wxss"});
}