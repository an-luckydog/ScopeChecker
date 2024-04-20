$gwx_XC_160=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_160 || [];
function gz$gwx_XC_160_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_160_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_160_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_160_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onScrollBottom'])
Z([a,[3,'doctor-list-scroll-view '],[[2,'?:'],[[2,'<='],[[6],[[7],[3,'doctorList']],[3,'length']],[1,0]],[1,'empty-list'],[1,'']]])
Z([1,0])
Z([1,true])
Z([[7],[3,'doctorList']])
Z([3,'doctor_id'])
Z([[2,'?:'],[[2,'==='],[[2,'+'],[[7],[3,'index']],[1,1]],[[6],[[7],[3,'doctorList']],[3,'length']]],[1,'last-item'],[1,'']])
Z([[7],[3,'item']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[[6],[[6],[[7],[3,'typeMap']],[1,0]],[3,'value']]])
Z([[7],[3,'visitPageName']])
Z([[6],[[7],[3,'doctorList']],[3,'length']])
Z([[2,'<='],[[6],[[7],[3,'doctorList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_160_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_160_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_160=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_160=true;
var x=['./pages/my_doctors_new/my_doctors_new.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_160_1()
var c4DB=_mz(z,'scroll-view',['bindscrolltolower',0,'class',1,'lowerThreshold',1,'scrollY',2],[],e,s,gg)
var c7DB=_v()
_(c4DB,c7DB)
var o8DB=function(a0DB,l9DB,tAEB,gg){
var bCEB=_mz(z,'single-doctor',['class',6,'doctorInfo',1,'shouldButtonGroupShow',2,'visitPageName',3],[],a0DB,l9DB,gg)
_(tAEB,bCEB)
return tAEB
}
c7DB.wxXCkey=4
_2z(z,4,o8DB,e,s,gg,c7DB,'item','index','doctor_id')
var h5DB=_v()
_(c4DB,h5DB)
if(_oz(z,10,e,s,gg)){h5DB.wxVkey=1
}
var o6DB=_v()
_(c4DB,o6DB)
if(_oz(z,11,e,s,gg)){o6DB.wxVkey=1
}
h5DB.wxXCkey=1
o6DB.wxXCkey=1
_(r,c4DB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_160";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_160();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my_doctors_new/my_doctors_new.wxml'] = [$gwx_XC_160, './pages/my_doctors_new/my_doctors_new.wxml'];else __wxAppCode__['pages/my_doctors_new/my_doctors_new.wxml'] = $gwx_XC_160( './pages/my_doctors_new/my_doctors_new.wxml' );
	;__wxRoute = "pages/my_doctors_new/my_doctors_new";__wxRouteBegin = true;__wxAppCurrentFile__="pages/my_doctors_new/my_doctors_new.js";define("pages/my_doctors_new/my_doctors_new.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../3B123513829A079C5D745D1477BC7B70.js")),a=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),e=getApp(),i=a.baseUrl+"/user_operation/my_doctor/list/";Page({data:{currentTabIndex:0,typeMap:{0:{value:"p",desc:"咨询过"},1:{value:"f",desc:"关注过"}},startNum:0,doctorList:[],visitPageName:"我的医生",fromVisitPage:""},onLoad:function(t){this.getListNew(),this.setData({fromVisitPage:t.from_visit_page||""})},onShow:function(){(0,t.default)({fromName:this.data.fromVisitPage,name:this.data.visitPageName,extraInfo:{}})},onTabTab:function(t){var a=Number(t.currentTarget.dataset.tabIndex);a!==this.data.currentTabIndex&&(this.setData({currentTabIndex:a}),this.getListNew())},baseRequest:function(t,a){return wx.showLoading({title:"加载中",mask:!0}),new Promise((function(o,r){wx.request({url:i,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:e.globalData.sessionid},data:{doctor_type:t,start_num:a},success:function(t){return wx.hideLoading(),0===t.data.error_code?o(t):r(t)},fail:function(t){return wx.hideLoading(),r(t)}})}))},getListNew:function(){var t=this;this.baseRequest(this.data.typeMap[this.data.currentTabIndex].value,0).then((function(a){t.setData({doctorList:a.data.data.doctor_list,startNum:a.data.data.doctor_list.length})}))},getListMore:function(){var t=this;this.baseRequest(this.data.typeMap[this.data.currentTabIndex].value,this.data.startNum).then((function(a){t.setData({doctorList:t.data.doctorList.concat(a.data.data.doctor_list),startNum:t.data.doctorList.length})}))},onScrollBottom:function(){this.getListMore()},toFindDoctor:function(){wx.navigateTo({url:"/pages/find_doctor/index?from_visit_page=".concat(this.data.fromVisitPage)})}});
},{isPage:true,isComponent:true,currentFile:'pages/my_doctors_new/my_doctors_new.js'});require("pages/my_doctors_new/my_doctors_new.js");