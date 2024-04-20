$gwx_XC_204=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_204 || [];
function gz$gwx_XC_204_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_204_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_204_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_204_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'container '],[[7],[3,'overflow']]])
Z([[2,'!='],[[7],[3,'doctor_list']],[1,'']])
Z([[7],[3,'doctor_list']])
Z([3,'item.id'])
Z([[6],[[7],[3,'item']],[3,'hospital_tag']])
Z([3,'知道了'])
Z([[7],[3,'showTip']])
Z([3,''])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_204_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_204_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_204=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_204=true;
var x=['./pages/rookie_task_third/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_204_1()
var oPWB=_n('view')
_rz(z,oPWB,'class',0,e,s,gg)
var fQWB=_v()
_(oPWB,fQWB)
if(_oz(z,1,e,s,gg)){fQWB.wxVkey=1
var cRWB=_v()
_(fQWB,cRWB)
var hSWB=function(cUWB,oTWB,oVWB,gg){
var aXWB=_v()
_(oVWB,aXWB)
if(_oz(z,4,cUWB,oTWB,gg)){aXWB.wxVkey=1
}
aXWB.wxXCkey=1
return oVWB
}
cRWB.wxXCkey=2
_2z(z,2,hSWB,e,s,gg,cRWB,'item','index','item.id')
}
else{fQWB.wxVkey=2
}
fQWB.wxXCkey=1
_(r,oPWB)
var tYWB=_mz(z,'cy-modal',['btnText',5,'show',1,'title',2],[],e,s,gg)
_(r,tYWB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_204";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_204();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/rookie_task_third/index.wxml'] = [$gwx_XC_204, './pages/rookie_task_third/index.wxml'];else __wxAppCode__['pages/rookie_task_third/index.wxml'] = $gwx_XC_204( './pages/rookie_task_third/index.wxml' );
	;__wxRoute = "pages/rookie_task_third/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/rookie_task_third/index.js";define("pages/rookie_task_third/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var i=require("../../@babel/runtime/helpers/defineProperty"),t=getApp(),e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),a=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,c=e.baseUrl+"/cooperation/wap/doctor/search/",s=e.baseUrl+"/cooperation/wap/clinics/",n=e.baseUrl+"/api/v5/doctor/",o=e.baseUrl+"/events/newer_task/newer_task_finish/",l=require("../../840A1D64829A079CE26C7563276C7B70.js").doPoint;Page({data:{city_selected:"",clinic_selected:"",city_display:"hide",clinic_display:"hide",tips_display:"hide",doctor_list:[],doc_num:"",overflow:"",count_per_page:10,all_province:"",all_clinic:"",city_all:"全部",clinic_all:"全部科室",city:"全国",clinic:"全部科室",clinic_list:"",city_list:"",page:1,len:"",displayCity:"hide",displayClinic:"hide",selectSearchAllCity:"",selectSearchAllClinic:"",clinic_no:"",second_clinic_no:"",province_name:"",isProvinceName:!1,selected:"",provinceSelected:"",is_selected:"",index:"",count:0},getDoctorList:function(i){var e=this,a=e.data.page,s=e.data.doctor_list,n=t.globalData.sessionid||wx.getStorageSync("sessionid");i.sh_hospital=1,i.title_list=1,wx.request({url:c,header:{"Content-Type":"application/json",Cookie:n},data:i,method:"GET",success:function(i){i=i.data,e.setData({page:a+1,doctor_list:s.concat(i.doctor_list),doc_num:i.doctor_list.length})}})},onLoad:function(i){var e=this,a=e.data.page,c=i.id?i.id:"",s=i.second_class_clinic_no||"",n=i.key?i.key:"",o=i.clinic?i.clinic:e.data.clinic,l={from_wx_mini:1,city:"",clinic_no:c,count_per_page:10,page:a,partner:t.globalData.partner,province:"",second_class_clinic_no:s,query:n};e.getDoctorList(l),e.setData({clinic:o,key:"",clinic_no:c}),wx.getStorage({key:"user_id",success:function(i){i.data&&e.setData({user_id:i.data})}})},showProvince:function(i){var e=this,a=(i.currentTarget.dataset.name,t.globalData.sessionid||wx.getStorageSync("sessionid"));"city"&&e.setData({city_selected:"item--selected",clinic_selected:"",city_display:"show",clinic_display:"hide",tips_display:"show",overflow:"overflow"}),wx.request({url:s,data:{from_wx_mini:1,partner:t.globalData.partner,is_json:"1"},method:"GET",header:{"Content-Type":"application/json",Cookie:a},success:function(i){i.data.province_list.forEach((function(t,a){t.is_selected=0,e.setData({index:a,all_province:i.data.province_list})}))}})},searchAllArea:function(i){this.data.doctor_list=[],this.setData({selectSearchAllCity:"botder__left__item--selected"});var e=this.data.clinic_no,a=this.data.city_all,c=(this.data.province_name,i.currentTarget.dataset.city,this.data.city_list,this.data.len,this.data.key?this.data.key:""),s={city:"",clinic_no:e,count_per_page:10,page:1,partner:t.globalData.partner,province:"",second_class_clinic_no:"",query:c};this.getDoctorList(s),this.setData({selectSearchAllCity:"",city_display:"hide",tips_display:"hide",city:a,overflow:"",displayCity:"hide"})},showCitySelect:function(i){var t=this,e=t.data.all_province,a=i.currentTarget.dataset.id,c=i.currentTarget.dataset.province;e.forEach((function(i){i.is_selected=0})),e[i.currentTarget.dataset.index].is_selected=1,t.setData({province_name:c,all_province:e}),e.forEach((function(i){i.code==a&&t.setData({city_list:i.city_list,province_name:c,displayCity:"show"})}))},searchDoctorCity:function(i){this.data.doctor_list=[];var e=this.data.key?this.data.key:"",a=this.data.clinic_no,c=this.data.province_name,s=i.currentTarget.dataset.city,n=this.data.city_list,o=(this.data.len,this.data.second_clinic_no);if(this.setData({city_name:s}),""==n){var l={city:"",clinic_no:a,count_per_page:10,page:1,partner:t.globalData.partner,province:c,second_class_clinic_no:o,query:e};this.getDoctorList(l),this.setData({city_display:"hide",tips_display:"hide",city:c,overflow:"",city_name:"",province_name:c})}else{l={city:s||"",clinic_no:a,count_per_page:10,page:1,partner:t.globalData.partner,province:c,second_class_clinic_no:o||"",query:e};this.getDoctorList(l),this.setData({city_display:"hide",tips_display:"hide",city:s||c,overflow:"",city_name:s||"",province_name:c})}},clinicSearch:function(i){var e=this,a=(i.currentTarget.dataset.name,t.globalData.sessionid||wx.getStorageSync("sessionid"));"clinic"&&e.setData({city_selected:"",clinic_selected:"item--selected",city_display:"hide",clinic_display:"show",tips_display:"show",overflow:"overflow"}),wx.request({url:s,data:{from_wx_mini:1,partner:t.globalData.partner,is_json:"1"},method:"GET",header:{"Content-Type":"application/json",Cookie:a},success:function(i){i.data.clinic_list.forEach((function(t,a){e.setData({all_clinic:i.data.clinic_list,index:a})}))}})},showClinicSelect:function(i){var t=this,e=t.data.all_clinic,a=i.currentTarget.dataset.clinicid,c=i.currentTarget.dataset.clinic;e.forEach((function(i){i.is_selected=0}));var s=i.currentTarget.dataset.index;e[s].is_selected=1,e.forEach((function(i){i.clinic_no==a&&t.setData({all_clinic:e,clinic_list:i.second_class_clinics,clinic_no:a,clinic_name:c,displayClinic:"show"})}))},searchAllClinic:function(i){this.data.doctor_list=[];this.data.clinic_no;var e=this.data.clinic_all,a=this.data.key?this.data.key:"",c=this.data.clinic_name?this.data.clinic_name:this.data.clinic_all;this.setData({selectSearchAllClinic:"botder__left__item--selected"});var s={city:"",clinic_no:"",count_per_page:10,page:1,partner:t.globalData.partner,province:"",second_class_clinic_no:"",query:a};this.getDoctorList(s),this.setData({clinic_display:"hide",tips_display:"hide",clinic_name:c,overflow:"",clinic:e,selectSearchAllClinic:"",displayClinic:"hide"})},searchClinicName:function(e){this.data.doctor_list=[];var a=this.data.clinic_list,c=this.data.province_name,s=this.data.city_name?this.data.city_name:"",n=e.currentTarget.dataset.clinicid,o=e.currentTarget.dataset.clinic,l=e.currentTarget.dataset.clinic,r=this.data.key?this.data.key:"";if(""==a){var d={city:s,clinic_no:n,count_per_page:10,page:1,partner:t.globalData.partner,province:c,second_class_clinic_no:"",query:r};this.getDoctorList(d),this.setData(i({clinic:l,clinic_display:"hide",tips_display:"hide",overflow:""},"clinic",o))}else{var _;d={city:s,clinic_no:n,count_per_page:10,page:1,partner:t.globalData.partner,province:c,second_class_clinic_no:second_clinic_no||"",query:r};this.getDoctorList(d),this.setData((i(_={clinic:l,clinic_display:"hide",tips_display:"hide",overflow:""},"clinic",second_clinic_name||o),i(_,"second_clinic_no",second_clinic_no),_))}},hideSearch:function(){this.setData({city_display:"hide",clinic_display:"hide",tips_display:"hide",city_selected:"",clinic_selected:"",overflow:""})},onReachBottom:function(){this.data.doc_num==this.data.count_per_page&&this.loadMore()},loadMore:function(i){var e=this.data.key?this.data.key:"",a=this.data.page,c=this.data.clinic_no?this.data.clinic_no:"",s=this.data.province_name?this.data.province_name:"",n=(this.data.second_clinic_no,this.data.second_clinic_no),o={city:this.data.city_name?this.data.city_name:"",clinic_no:c,count_per_page:10,page:a,partner:t.globalData.partner,province:s,second_class_clinic_no:n,query:e};this.getDoctorList(o)},followDoctor:function(i){var e=this,c=i.target.dataset.key,s=i.target.dataset.doctorId,o={from_wx_mini:1,partner:t.globalData.partner,follow:1};wx.request({url:n+s+"/follow",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:t.globalData.sessionid},data:a(o),success:function(i){console.log(c),console.log(e.data.doctor_list[c]);var t=e.data.doctor_list;t[c].has_followed=!0,e.setData({doctor_list:t}),e.data.count++},fail:function(i){console.log(i.data.error_msg)}})},submit:function(){this.data.count<1?this.setData({showTip:!0}):wx.request({url:o,header:{Cookie:t.globalData.sessionid},data:{share_user_id:this.data.user_id||"0"},success:function(i){i.data.success?(l("wxmini_task3"),wx.redirectTo({url:"../rookie_task_finish/index",success:function(i){},fail:function(i){},complete:function(i){}})):wx.showToast({title:i.data.error_msg,icon:"none"})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/rookie_task_third/index.js'});require("pages/rookie_task_third/index.js");