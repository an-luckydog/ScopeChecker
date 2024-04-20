$gwx_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];
function gz$gwx_XC_6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShowFloat']])
Z([3,'float-wrapper'])
Z([[2,'=='],[[7],[3,'floatStep']],[1,1]])
Z([3,'res-envelope'])
Z([a,[3,'background:url('],[[6],[[7],[3,'floatConfig']],[3,'redEnvelope']],[3,');background-size:100%,100%;']])
Z([[2,'!'],[[7],[3,'getBtnWidthLogin']]])
Z([3,'handleLogin'])
Z([[7],[3,'getBtnWidthLogin']])
Z([3,'openRedEnvelope'])
Z([3,'closeFloat'])
Z([3,'close_btn'])
Z([3,'bg'])
Z([a,z[4][1],[[6],[[7],[3,'floatConfig']],[3,'floatBg']],z[4][3]])
Z([3,'coupons-wrapper'])
Z([[7],[3,'couponList']])
Z([[7],[3,'index']])
Z([3,'coupon-item'])
Z([3,'left'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'deductionStrategyTypeID']],[1,3]],[[6],[[7],[3,'item']],[3,'startAmount']]])
Z([3,'condition'])
Z([a,[3,'满'],[[6],[[7],[3,'item']],[3,'startAmount']],[3,'可用']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'deductionType']],[1,0]])
Z([3,'discount'])
Z([a,[[6],[[7],[3,'item']],[3,'discountAmount']]])
Z([3,'元'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'deductionType']],[1,1]])
Z(z[22])
Z([a,[[6],[[7],[3,'item']],[3,'discount1']]])
Z([a,[[6],[[7],[3,'item']],[3,'discount2']],[3,'折']])
Z([3,'middle'])
Z([3,'title ellipsis'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'time'])
Z([a,[[6],[[7],[3,'item']],[3,'disableDate']],[3,' 前可用']])
Z([3,'right'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z([3,'goTargetUrl'])
Z([[6],[[7],[3,'item']],[3,'useUrl']])
Z([3,'立即'])
Z([3,'使用'])
Z([[2,'&&'],[[7],[3,'getBtnWidthLogin']],[[2,'>'],[[6],[[7],[3,'item']],[3,'generateCountLeft']],[1,0]]])
Z([3,'handleSendCoupon'])
Z([[6],[[7],[3,'item']],[3,'awardId']])
Z(z[38])
Z([3,'领券'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'getBtnWidthLogin']]],[[2,'>'],[[6],[[7],[3,'item']],[3,'generateCountLeft']],[1,0]]])
Z(z[6])
Z(z[42])
Z(z[38])
Z(z[44])
Z(z[35])
Z([3,'icon'])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'rule']],[1,'none']])
Z([3,'icon-new'])
Z([[2,'&&'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,0]],[[2,'!'],[[6],[[7],[3,'item']],[3,'status']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'generateCountLeft']],[1,0]]])
Z([3,'icon icon-none'])
Z([3,'bottom-bg'])
Z([a,z[4][1],[[6],[[7],[3,'floatConfig']],[3,'floatBg2']],z[4][3]])
Z(z[9])
Z(z[10])
Z(z[0])
Z(z[9])
Z([3,'mask'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_6=true;
var x=['./cwx/component/couponFloat/couponFloat.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_6_1()
var b7K=_v()
_(r,b7K)
if(_oz(z,0,e,s,gg)){b7K.wxVkey=1
var x9K=_n('view')
_rz(z,x9K,'class',1,e,s,gg)
var o0K=_v()
_(x9K,o0K)
if(_oz(z,2,e,s,gg)){o0K.wxVkey=1
var fAL=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var cBL=_v()
_(fAL,cBL)
if(_oz(z,5,e,s,gg)){cBL.wxVkey=1
var oDL=_n('button')
_rz(z,oDL,'bindtap',6,e,s,gg)
_(cBL,oDL)
}
var hCL=_v()
_(fAL,hCL)
if(_oz(z,7,e,s,gg)){hCL.wxVkey=1
var cEL=_n('button')
_rz(z,cEL,'bindtap',8,e,s,gg)
_(hCL,cEL)
}
var oFL=_mz(z,'view',['bindtap',9,'class',1],[],e,s,gg)
_(fAL,oFL)
cBL.wxXCkey=1
hCL.wxXCkey=1
_(o0K,fAL)
}
else{o0K.wxVkey=2
var lGL=_n('view')
var aHL=_mz(z,'view',['class',11,'style',1],[],e,s,gg)
var tIL=_n('view')
_rz(z,tIL,'class',13,e,s,gg)
var eJL=_v()
_(tIL,eJL)
var bKL=function(xML,oLL,oNL,gg){
var cPL=_n('view')
_rz(z,cPL,'class',16,xML,oLL,gg)
var oTL=_n('view')
_rz(z,oTL,'class',17,xML,oLL,gg)
var lUL=_v()
_(oTL,lUL)
if(_oz(z,18,xML,oLL,gg)){lUL.wxVkey=1
var eXL=_n('view')
_rz(z,eXL,'class',19,xML,oLL,gg)
var bYL=_oz(z,20,xML,oLL,gg)
_(eXL,bYL)
_(lUL,eXL)
}
var aVL=_v()
_(oTL,aVL)
if(_oz(z,21,xML,oLL,gg)){aVL.wxVkey=1
var oZL=_n('view')
_rz(z,oZL,'class',22,xML,oLL,gg)
var x1L=_oz(z,23,xML,oLL,gg)
_(oZL,x1L)
var o2L=_n('span')
var f3L=_oz(z,24,xML,oLL,gg)
_(o2L,f3L)
_(oZL,o2L)
_(aVL,oZL)
}
var tWL=_v()
_(oTL,tWL)
if(_oz(z,25,xML,oLL,gg)){tWL.wxVkey=1
var c4L=_n('view')
_rz(z,c4L,'class',26,xML,oLL,gg)
var h5L=_oz(z,27,xML,oLL,gg)
_(c4L,h5L)
var o6L=_n('span')
var c7L=_oz(z,28,xML,oLL,gg)
_(o6L,c7L)
_(c4L,o6L)
_(tWL,c4L)
}
lUL.wxXCkey=1
aVL.wxXCkey=1
tWL.wxXCkey=1
_(cPL,oTL)
var o8L=_n('view')
_rz(z,o8L,'class',29,xML,oLL,gg)
var l9L=_n('view')
_rz(z,l9L,'class',30,xML,oLL,gg)
var a0L=_oz(z,31,xML,oLL,gg)
_(l9L,a0L)
_(o8L,l9L)
var tAM=_n('view')
_rz(z,tAM,'class',32,xML,oLL,gg)
var eBM=_oz(z,33,xML,oLL,gg)
_(tAM,eBM)
_(o8L,tAM)
_(cPL,o8L)
var bCM=_n('view')
_rz(z,bCM,'class',34,xML,oLL,gg)
var oDM=_v()
_(bCM,oDM)
if(_oz(z,35,xML,oLL,gg)){oDM.wxVkey=1
var xEM=_mz(z,'button',['bindtap',36,'data-url',1],[],xML,oLL,gg)
var oFM=_n('view')
var fGM=_oz(z,38,xML,oLL,gg)
_(oFM,fGM)
_(xEM,oFM)
var cHM=_n('view')
var hIM=_oz(z,39,xML,oLL,gg)
_(cHM,hIM)
_(xEM,cHM)
_(oDM,xEM)
}
else{oDM.wxVkey=2
var oJM=_n('view')
var cKM=_v()
_(oJM,cKM)
if(_oz(z,40,xML,oLL,gg)){cKM.wxVkey=1
var lMM=_mz(z,'button',['bindtap',41,'data-awardid',1],[],xML,oLL,gg)
var aNM=_n('view')
var tOM=_oz(z,43,xML,oLL,gg)
_(aNM,tOM)
_(lMM,aNM)
var ePM=_n('view')
var bQM=_oz(z,44,xML,oLL,gg)
_(ePM,bQM)
_(lMM,ePM)
_(cKM,lMM)
}
var oLM=_v()
_(oJM,oLM)
if(_oz(z,45,xML,oLL,gg)){oLM.wxVkey=1
var oRM=_mz(z,'button',['bindtap',46,'data-awardid',1],[],xML,oLL,gg)
var xSM=_n('view')
var oTM=_oz(z,48,xML,oLL,gg)
_(xSM,oTM)
_(oRM,xSM)
var fUM=_n('view')
var cVM=_oz(z,49,xML,oLL,gg)
_(fUM,cVM)
_(oRM,fUM)
_(oLM,oRM)
}
cKM.wxXCkey=1
oLM.wxXCkey=1
_(oDM,oJM)
}
oDM.wxXCkey=1
_(cPL,bCM)
var hQL=_v()
_(cPL,hQL)
if(_oz(z,50,xML,oLL,gg)){hQL.wxVkey=1
var hWM=_n('view')
_rz(z,hWM,'class',51,xML,oLL,gg)
_(hQL,hWM)
}
var oRL=_v()
_(cPL,oRL)
if(_oz(z,52,xML,oLL,gg)){oRL.wxVkey=1
var oXM=_n('view')
_rz(z,oXM,'class',53,xML,oLL,gg)
_(oRL,oXM)
}
var cSL=_v()
_(cPL,cSL)
if(_oz(z,54,xML,oLL,gg)){cSL.wxVkey=1
var cYM=_n('view')
_rz(z,cYM,'class',55,xML,oLL,gg)
_(cSL,cYM)
}
hQL.wxXCkey=1
oRL.wxXCkey=1
cSL.wxXCkey=1
_(oNL,cPL)
return oNL
}
eJL.wxXCkey=2
_2z(z,14,bKL,e,s,gg,eJL,'item','index','{{index}}')
_(aHL,tIL)
_(lGL,aHL)
var oZM=_mz(z,'view',['class',56,'style',1],[],e,s,gg)
_(lGL,oZM)
var l1M=_mz(z,'view',['bindtap',58,'class',1],[],e,s,gg)
_(lGL,l1M)
_(o0K,lGL)
}
o0K.wxXCkey=1
_(b7K,x9K)
}
var o8K=_v()
_(r,o8K)
if(_oz(z,60,e,s,gg)){o8K.wxVkey=1
var a2M=_mz(z,'view',['bindtap',61,'class',1],[],e,s,gg)
_(o8K,a2M)
}
b7K.wxXCkey=1
o8K.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_6";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cwx/component/couponFloat/couponFloat.wxml'] = [$gwx_XC_6, './cwx/component/couponFloat/couponFloat.wxml'];else __wxAppCode__['cwx/component/couponFloat/couponFloat.wxml'] = $gwx_XC_6( './cwx/component/couponFloat/couponFloat.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['cwx/component/couponFloat/couponFloat.wxss'] = setCssToHead([".",[1],"ellipsis{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}\nwx-button{background:transparent;font-size:",[0,30],";margin:0;padding:0}\nwx-button,wx-button::after{border:none}\n.",[1],"float-wrapper{left:50%;position:fixed;top:50%;transform:translate(-50%,-50%);width:",[0,580],";z-index:1000}\n.",[1],"res-envelope{background:red;height:",[0,762],";width:",[0,580],"}\n.",[1],"res-envelope wx-button{background:transparent;height:100%;width:100%}\n.",[1],"float-wrapper .",[1],"bg{height:auto;margin-bottom:",[0,78],";padding-bottom:",[0,20],";padding-top:",[0,214],";width:100%}\n.",[1],"coupons-wrapper{margin:0 auto;max-height:",[0,390],";min-height:",[0,168],";overflow-x:scroll;width:",[0,540],"}\n.",[1],"coupon-item{background-image:url(\x22https://images3.c-ctrip.com/marketing/2020/10/commonFloat/bg_coupon.png\x22);background-size:100% 100%;height:",[0,80],";margin:0 auto ",[0,10],";overflow:hidden;padding-bottom:",[0,26],";padding-top:",[0,30],";position:relative;width:",[0,508],"}\n.",[1],"coupon-item .",[1],"left{color:#ff9800;float:left;text-align:center;width:",[0,154],"}\n.",[1],"coupon-item .",[1],"left .",[1],"condition{font-size:",[0,18],"}\n.",[1],"coupon-item .",[1],"left .",[1],"discount{font-size:",[0,66],"}\n.",[1],"coupon-item .",[1],"left .",[1],"discount wx-span{font-size:",[0,24],"}\n.",[1],"coupon-item .",[1],"middle{float:left;padding-left:",[0,24],";padding-right:",[0,36],";width:",[0,208],"}\n.",[1],"coupon-item .",[1],"middle .",[1],"title{color:#333;font-family:PingFangSC-Semibold;font-size:",[0,24],";height:",[0,56],";letter-spacing:0;line-height:",[0,28],"}\n.",[1],"coupon-item .",[1],"middle .",[1],"time{color:#ccc;color:#999;font-family:PingFangSC-Regular;font-size:",[0,18],";line-height:",[0,19.2],";margin-top:",[0,6],";text-align:left}\n.",[1],"coupon-item .",[1],"right{float:right;padding-right:",[0,20],";text-align:center}\n.",[1],"coupon-item .",[1],"icon{background-image:url(\x22https://images3.c-ctrip.com/marketing/2020/10/commonFloat/lable_1.png\x22);background-size:100% 100%;bottom:",[0,-12],";height:",[0,80],";position:absolute;right:",[0,71],";width:",[0,105],"}\n.",[1],"coupon-item .",[1],"icon.",[1],"icon-none{background-image:url(\x22https://images3.c-ctrip.com/marketing/2020/10/commonFloat/lable_2.png\x22);background-size:100% 100%}\n.",[1],"coupon-item .",[1],"icon-new{background-image:url(\x22https://images3.c-ctrip.com/marketing/2020/10/commonFloat/lable_3.png\x22);background-size:100% 100%;height:",[0,62.5],";position:absolute;right:0;top:0;width:",[0,60],"}\n.",[1],"coupon-item .",[1],"right wx-button{color:#ff9800;font-family:PingFangSC-Regular;font-size:",[0,28],";height:",[0,72],";line-height:",[0,36],";text-align:center;z-index:1}\n.",[1],"bottom-bg{background:red;bottom:0;height:",[0,118],";position:absolute;width:100%;z-index:9}\n.",[1],"mask{background:rgba(0,0,0,.6);height:100%;position:fixed;top:0;width:100%;z-index:999}\n.",[1],"close_btn{border:",[0,3]," solid #fff;border-radius:50%;bottom:",[0,-136],";height:",[0,68],";left:50%;position:absolute;transform:translateX(",[0,-34],");width:",[0,68],"}\n.",[1],"close_btn::after,.",[1],"close_btn::before{background:#fff;content:\x22\x22;height:",[0,40],";position:absolute;right:",[0,34],";top:",[0,15],";width:",[0,3],"}\n.",[1],"close_btn::before{transform:rotate(45deg)}\n.",[1],"close_btn::after{transform:rotate(-45deg)}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./cwx/component/couponFloat/couponFloat.wxss:1:2131)",{path:"./cwx/component/couponFloat/couponFloat.wxss"});
}