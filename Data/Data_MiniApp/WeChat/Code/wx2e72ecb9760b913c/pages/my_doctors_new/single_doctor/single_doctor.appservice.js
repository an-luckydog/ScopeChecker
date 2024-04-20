$gwx_XC_161=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_161 || [];
function gz$gwx_XC_161_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_161_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_161_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_161_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shouldCurrentItemShow']])
Z([3,'deleteDoctor'])
Z([3,'single-doctor-main-container'])
Z([[6],[[7],[3,'doctorInfo']],[3,'doctor_id']])
Z([[6],[[7],[3,'doctorInfo']],[3,'type']])
Z([3,'toDoctorMainPage'])
Z([3,'top-right'])
Z([[6],[[7],[3,'doctorInfo']],[3,'re_checkup']])
Z([[6],[[7],[3,'doctorInfo']],[3,'is_3A']])
Z([[7],[3,'shouldButtonGroupShow']])
Z([[6],[[7],[3,'doctorInfo']],[3,'is_recommend']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_161_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_161_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_161=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_161=true;
var x=['./pages/my_doctors_new/single_doctor/single_doctor.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_161_1()
var xEEB=_v()
_(r,xEEB)
if(_oz(z,0,e,s,gg)){xEEB.wxVkey=1
var oFEB=_mz(z,'view',['bindlongpress',1,'class',1,'data-doctor-id',2,'data-item-type',3,'mut-bind:tap',4],[],e,s,gg)
var hIEB=_n('view')
_rz(z,hIEB,'class',6,e,s,gg)
var oJEB=_v()
_(hIEB,oJEB)
if(_oz(z,7,e,s,gg)){oJEB.wxVkey=1
}
var cKEB=_v()
_(hIEB,cKEB)
if(_oz(z,8,e,s,gg)){cKEB.wxVkey=1
}
oJEB.wxXCkey=1
cKEB.wxXCkey=1
_(oFEB,hIEB)
var fGEB=_v()
_(oFEB,fGEB)
if(_oz(z,9,e,s,gg)){fGEB.wxVkey=1
}
var cHEB=_v()
_(oFEB,cHEB)
if(_oz(z,10,e,s,gg)){cHEB.wxVkey=1
}
fGEB.wxXCkey=1
cHEB.wxXCkey=1
_(xEEB,oFEB)
}
xEEB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_161";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_161();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my_doctors_new/single_doctor/single_doctor.wxml'] = [$gwx_XC_161, './pages/my_doctors_new/single_doctor/single_doctor.wxml'];else __wxAppCode__['pages/my_doctors_new/single_doctor/single_doctor.wxml'] = $gwx_XC_161( './pages/my_doctors_new/single_doctor/single_doctor.wxml' );
	;__wxRoute = "pages/my_doctors_new/single_doctor/single_doctor";__wxRouteBegin = true;__wxAppCurrentFile__="pages/my_doctors_new/single_doctor/single_doctor.js";define("pages/my_doctors_new/single_doctor/single_doctor.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var o=require("../../../BC983DD1829A079CDAFE55D6E84D7B70.js"),t=getApp();Component({properties:{doctorInfo:{type:Object,value:{}},shouldButtonGroupShow:{type:Boolean,value:!1},visitPageName:{type:String,value:""}},data:{shouldCurrentItemShow:!0},methods:{toHistory:function(){t.sensors.track("AppClick",{app:"weixin_mini",click_position:"历史咨询",page_readable_name:"我的医生"}),wx.navigateTo({url:"/pages/doctor_history_list/doctor_history_list?doctor_id=".concat(this.data.doctorInfo.doctor_id,"&from_visit_page=").concat(this.data.visitPageName)})},toDoctorMainPage:function(){t.sensors.track("AppClick",{app:"weixin_mini",click_position:"去复诊",page_readable_name:"我的医生"}),wx.navigateTo({url:"/pages/doc_mainpage/index?doc_id=".concat(this.data.doctorInfo.doctor_id,"&from_visit_page=").concat(this.data.visitPageName)})},deleteDoctor:function(e){var a=this,i=e.currentTarget.dataset.doctorId,n=e.currentTarget.dataset.itemType,s="p"===n?"/api/v7/doctor/".concat(i,"/paid_record"):"/api/v5/doctor/".concat(i,"/follow"),c="p"===n?{}:{follow:0},r="p"===n?"DELETE":"POST";wx.showModal({content:this.data.shouldButtonGroupShow?"删除医生后，您仍可通过“我的订单”查看与该医生相关的订单，确认删除？":"确认删除医生？",success:function(e){e.confirm&&(t.sensors.track("AppClick",{app:"weixin_mini",click_position:"确认删除",page_readable_name:"我的医生",click_position_value:"p"===n?"咨询过":"已关注"}),wx.request({url:o.baseUrl+s,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:t.globalData.sessionid},data:c,method:r,success:function(o){o.statusCode<300&&o.statusCode>=200?a.setData({shouldCurrentItemShow:!1}):wx.showToast({title:"删除失败",icon:"none"})},fail:function(){wx.showToast({title:"删除失败",icon:"none"})}}))}})}}});
},{isPage:false,isComponent:true,currentFile:'pages/my_doctors_new/single_doctor/single_doctor.js'});require("pages/my_doctors_new/single_doctor/single_doctor.js");