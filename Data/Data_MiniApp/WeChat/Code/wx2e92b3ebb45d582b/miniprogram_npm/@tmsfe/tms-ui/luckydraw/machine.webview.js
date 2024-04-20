$gwx_XC_33=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_33 || [];
function gz$gwx_XC_33_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'status-bar '],[[7],[3,'theme']]])
Z([[2,'||'],[[2,'!'],[[7],[3,'loaded']]],[[7],[3,'status']]])
Z([3,'text flex-row-hvc'])
Z([3,'今日还剩'])
Z([3,'num'])
Z([a,[[7],[3,'remainTimes']]])
Z([3,'次抽奖机会'])
Z(z[2])
Z([3,'活动已结束'])
Z([a,[3,'machine flex-col-hc '],z[0][2]])
Z([3,'img-machine'])
Z([[6],[[7],[3,'themeConf']],[3,'machineBgImg']])
Z([[6],[[7],[3,'themeConf']],[3,'machineTopCoin']])
Z([3,'img-machine-top-coin'])
Z(z[12])
Z([3,'prize-list'])
Z([[7],[3,'prizes']])
Z([3,'index'])
Z([3,'clickDrawBtn'])
Z([[2,'?:'],[[2,'||'],[[7],[3,'hasPhone']],[[6],[[6],[[7],[3,'prizes']],[1,4]],[3,'disable']]],[1,'clickDrawBtn'],[1,'']])
Z([a,[3,'item reset-btn flex-row-hc '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[1,4]],[1,'draw'],[1,'']],[3,' '],[[2,'&&'],[[6],[[7],[3,'machine']],[3,'drawing']],[1,'disable']],[3,' '],[[2,'&&'],[[2,'==='],[[7],[3,'index']],[[6],[[7],[3,'machine']],[3,'currentIndex']]],[1,'current']]])
Z([[7],[3,'index']])
Z([[2,'?:'],[[2,'&&'],[[2,'!'],[[7],[3,'hasPhone']]],[[2,'!'],[[6],[[6],[[7],[3,'prizes']],[1,4]],[3,'disable']]]],[1,'getPhoneNumber'],[1,'']])
Z([3,'img'])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([3,'name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([[6],[[7],[3,'machine']],[3,'drawing']])
Z([3,'drawing-mask'])
Z([[6],[[7],[3,'themeConf']],[3,'drawingMask']])
Z([3,'clickPrizesBtn'])
Z([3,'btn-myprize'])
Z([[7],[3,'showBtnBadge']])
Z([3,'badge'])
Z([3,'btn-share reset-btn'])
Z([3,'share'])
Z([3,'showRule'])
Z([3,'rule'])
Z([3,'clickModalBtn'])
Z([3,'clickModalTip'])
Z([[6],[[7],[3,'modal']],[3,'data']])
Z([[6],[[7],[3,'modal']],[3,'visible']])
Z(z[0][2])
Z([[7],[3,'rule']])
Z([[7],[3,'ruleVisible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_33=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_33=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/luckydraw/machine.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_33_1()
var xOBB=_n('view')
_rz(z,xOBB,'class',0,e,s,gg)
var oPBB=_v()
_(xOBB,oPBB)
if(_oz(z,1,e,s,gg)){oPBB.wxVkey=1
var fQBB=_n('view')
_rz(z,fQBB,'class',2,e,s,gg)
var cRBB=_n('text')
var hSBB=_oz(z,3,e,s,gg)
_(cRBB,hSBB)
_(fQBB,cRBB)
var oTBB=_n('text')
_rz(z,oTBB,'class',4,e,s,gg)
var cUBB=_oz(z,5,e,s,gg)
_(oTBB,cUBB)
_(fQBB,oTBB)
var oVBB=_n('text')
var lWBB=_oz(z,6,e,s,gg)
_(oVBB,lWBB)
_(fQBB,oVBB)
_(oPBB,fQBB)
}
else{oPBB.wxVkey=2
var aXBB=_n('view')
_rz(z,aXBB,'class',7,e,s,gg)
var tYBB=_oz(z,8,e,s,gg)
_(aXBB,tYBB)
_(oPBB,aXBB)
}
oPBB.wxXCkey=1
_(r,xOBB)
var eZBB=_n('view')
_rz(z,eZBB,'class',9,e,s,gg)
var o2BB=_mz(z,'image',['class',10,'src',1],[],e,s,gg)
_(eZBB,o2BB)
var b1BB=_v()
_(eZBB,b1BB)
if(_oz(z,12,e,s,gg)){b1BB.wxVkey=1
var x3BB=_mz(z,'image',['class',13,'src',1],[],e,s,gg)
_(b1BB,x3BB)
}
var o4BB=_n('view')
_rz(z,o4BB,'class',15,e,s,gg)
var c6BB=_v()
_(o4BB,c6BB)
var h7BB=function(c9BB,o8BB,o0BB,gg){
var aBCB=_mz(z,'button',['bindgetphonenumber',18,'bindtap',1,'class',2,'id',3,'openType',4],[],c9BB,o8BB,gg)
var tCCB=_mz(z,'image',['class',23,'src',1],[],c9BB,o8BB,gg)
_(aBCB,tCCB)
var eDCB=_n('text')
_rz(z,eDCB,'class',25,c9BB,o8BB,gg)
var bECB=_oz(z,26,c9BB,o8BB,gg)
_(eDCB,bECB)
_(aBCB,eDCB)
_(o0BB,aBCB)
return o0BB
}
c6BB.wxXCkey=2
_2z(z,16,h7BB,e,s,gg,c6BB,'item','index','index')
var f5BB=_v()
_(o4BB,f5BB)
if(_oz(z,27,e,s,gg)){f5BB.wxVkey=1
var oFCB=_mz(z,'image',['class',28,'src',1],[],e,s,gg)
_(f5BB,oFCB)
}
f5BB.wxXCkey=1
_(eZBB,o4BB)
var xGCB=_mz(z,'view',['bindtap',30,'class',1],[],e,s,gg)
var oHCB=_v()
_(xGCB,oHCB)
if(_oz(z,32,e,s,gg)){oHCB.wxVkey=1
var fICB=_n('view')
_rz(z,fICB,'class',33,e,s,gg)
_(oHCB,fICB)
}
oHCB.wxXCkey=1
_(eZBB,xGCB)
var cJCB=_mz(z,'button',['class',34,'openType',1],[],e,s,gg)
_(eZBB,cJCB)
var hKCB=_mz(z,'slot',['bindtap',36,'name',1],[],e,s,gg)
_(eZBB,hKCB)
b1BB.wxXCkey=1
_(r,eZBB)
var oLCB=_mz(z,'luckydraw-modal',['bind:click-btn',38,'bind:click-tip',1,'data',2,'show',3,'theme',4],[],e,s,gg)
_(r,oLCB)
var cMCB=_mz(z,'rule-box',['rule',43,'show',1],[],e,s,gg)
_(r,cMCB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_33";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_33();
	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/luckydraw/machine.wxml'] = [$gwx_XC_33, './miniprogram_npm/@tmsfe/tms-ui/luckydraw/machine.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/luckydraw/machine.wxml'] = $gwx_XC_33( './miniprogram_npm/@tmsfe/tms-ui/luckydraw/machine.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/luckydraw/machine.wxss'] = setCssToHead([[2,"./miniprogram_npm/@tmsfe/tms-ui/flex.wxss"],".",[1],"reset-btn{background-color:initial;border:0;border-radius:0;color:transparent;line-height:normal;margin:0;padding:0;position:static}\n.",[1],"reset-btn::after{background:transparent;content:\x22\x22;display:none;height:0;-webkit-transform:scale(1);transform:scale(1);width:0}\n.",[1],"status-bar{box-sizing:initial;color:#fff;font-size:",[0,30],";height:",[0,60],";padding-top:",[0,80],";position:relative;width:100%;z-index:1}\n.",[1],"status-bar.",[1],"blue{margin-bottom:",[0,-104],"}\n.",[1],"status-bar .",[1],"text{height:100%;width:100%}\n.",[1],"status-bar.",[1],"blue .",[1],"text{padding-right:",[0,16],"}\n.",[1],"status-bar .",[1],"num{color:#fff363;font-size:",[0,52],";margin:0 ",[0,10],"}\n.",[1],"machine{height:",[0,966],";position:relative;width:100%}\n.",[1],"machine .",[1],"img-machine{left:0;position:absolute;top:0}\n.",[1],"machine.",[1],"blue .",[1],"img-machine{width:",[0,764],"}\n.",[1],"machine .",[1],"img-machine-top-coin{height:",[0,164],";position:absolute;right:",[0,112],";top:",[0,-30],";width:",[0,162],";z-index:2}\n.",[1],"machine .",[1],"prize-list{grid-column-gap:",[0,20],";grid-row-gap:",[0,20],";display:grid;grid-auto-flow:row;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);height:",[0,556],";margin-top:",[0,180],";position:relative;width:",[0,556],"}\n.",[1],"prize-list .",[1],"item{background:linear-gradient(180deg,#fff,#fffefd 14%,#fef8f0);border:",[0,2]," solid #ffe297;border-radius:",[0,20],";box-shadow:",[0,4]," ",[0,4]," ",[0,10]," 0 #d44802e3;position:relative;text-align:center}\n.",[1],"prize-list .",[1],"item.",[1],"draw{border-width:0}\n.",[1],"prize-list .",[1],"item .",[1],"img{border-radius:",[0,20],"}\n.",[1],"prize-list .",[1],"item .",[1],"name{bottom:",[0,10],";color:#000;font-size:",[0,22],";font-weight:700;line-height:",[0,32],";position:absolute;width:",[0,150],"}\n.",[1],"prize-list .",[1],"item:nth-child(5){background:none;-webkit-transform:scale(1.06);transform:scale(1.06)}\n.",[1],"prize-list .",[1],"item.",[1],"current{z-index:2}\n.",[1],"drawing-mask{height:",[0,600],";left:",[0,-28],";position:absolute;top:",[0,-20],";width:",[0,614],"}\n.",[1],"machine .",[1],"btn-myprize{bottom:",[0,40],";height:",[0,110],";position:absolute;right:",[0,252],";width:",[0,250],"}\n.",[1],"machine .",[1],"btn-myprize .",[1],"badge{background-color:#f54425;border-radius:50%;height:",[0,16],";left:",[0,30],";position:absolute;top:",[0,6],";width:",[0,16],"}\n.",[1],"machine .",[1],"btn-share{bottom:",[0,40],";height:",[0,100],";position:absolute;right:",[0,30],";width:",[0,200],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./miniprogram_npm/@tmsfe/tms-ui/luckydraw/machine.wxss:1:177)",{path:"./miniprogram_npm/@tmsfe/tms-ui/luckydraw/machine.wxss"});
}