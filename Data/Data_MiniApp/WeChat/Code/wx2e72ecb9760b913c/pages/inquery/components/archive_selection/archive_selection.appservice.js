$gwx_XC_139=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_139 || [];
function gz$gwx_XC_139_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_139_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_139_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_139_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_139_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_139_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_139=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_139=true;
var x=['./pages/inquery/components/archive_selection/archive_selection.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_139_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_139";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_139();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/inquery/components/archive_selection/archive_selection.wxml'] = [$gwx_XC_139, './pages/inquery/components/archive_selection/archive_selection.wxml'];else __wxAppCode__['pages/inquery/components/archive_selection/archive_selection.wxml'] = $gwx_XC_139( './pages/inquery/components/archive_selection/archive_selection.wxml' );
	;__wxRoute = "pages/inquery/components/archive_selection/archive_selection";__wxRouteBegin = true;__wxAppCurrentFile__="pages/inquery/components/archive_selection/archive_selection.js";define("pages/inquery/components/archive_selection/archive_selection.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a=require("../../../../@babel/runtime/helpers/defineProperty"),e=require("../../../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl+"/api/patient_profile/",t=getApp();Component({properties:{fromTypeForTrack:{type:String,value:""}},data:{tabIndex:0,archiveList:[],radioGroup:[0,0],archiveRelation:[{name:"自己",lable:"自己"},{name:"父母",lable:"父母"},{name:"子女",lable:"子女"},{name:"爱人",lable:"爱人"},{name:"其他",lable:"其他"}],formData:{name:"",relation:"",birthday:"",gender:0},selectedArchive:{},isButtonDisabled:!1,todayDate:""},lifetimes:{attached:function(){this.getUserProfile(),this.generateTodatDateString()}},observers:{formData:function(a){console.log(a),a.name&&a.relation&&a.birthday?this.setData({isButtonDisabled:!1}):this.setData({isButtonDisabled:!0})}},methods:{changeToCreatingTab:function(){t.sensors.track("AppClick",{app:"weixin_mini",click_position:"新建档案",page_readable_name:"病情描述",from_type:this.data.fromTypeForTrack}),this.changeTab(1)},changeTab:function(a){this.setData({tabIndex:a})},getUserProfile:function(){var a=this,i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];wx.request({url:e,header:{"Content-Type":"application/json",Cookie:t.globalData.sessionid},method:"GET",success:function(e){200===e.statusCode&&e.data&&(e.data.unshift({isCreate:!0}),a.setData({archiveList:e.data}),i&&a.triggerEvent("archive-render-ready"))}})},toArchiveList:function(){this.setData({tabIndex:0})},confirmName:function(a){this.setData({"formData.name":a.detail.value})},confirmRelation:function(a){console.log(a);var e=Number(a.detail.value);this.setData({"formData.relation":this.data.archiveRelation[e].name})},confirmBirthday:function(a){console.log(a),this.setData({"formData.birthday":a.detail.value})},checkRadio:function(e){var t,i=Number(e.currentTarget.dataset.index),r="radioGroup[".concat(i,"]"),n="radioGroup[".concat(1-i,"]");this.setData((a(t={},r,1),a(t,n,0),a(t,"formData.gender",i),t))},confirmArchiveForm:function(){console.log(this.data.formData)},createArchive:function(){var a=this;t.sensors.track("AppClick",{app:"weixin_mini",click_position:"确定新建档案",page_readable_name:"病情描述",from_type:this.data.fromTypeForTrack});var i=this.data.formData,r="";i.name?i.relation?-1===this.data.radioGroup.indexOf(1)?(console.log(this.data.radioGroup),r="请选择性别"):i.birthday||(r="请选择出生日期"):r="请选择与您的关系":r="请填写姓名",r?wx.showToast({title:r,icon:"none"}):wx.request({url:e,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:t.globalData.sessionid},data:{patient_name:i.name,sex:0===i.gender?"男":"女",birthday:this.data.formData.birthday,relation:this.data.formData.relation},method:"POST",success:function(e){var t={ehr_id:e.data.id,name:e.data.name,relation:e.data.relation,patient_name:e.data.patient_name,sex:e.data.sex,age:e.data.age,birthday:e.data.birthday};a.data.selectedArchive=t,a.getUserProfile(!1),a.selectArchive(),a.changeTab(0)},fail:function(){wx.showToast({icon:"none",title:"无法连接到服务器，请退出重试"})}})},chooseCurrentArchive:function(a){var e=a.currentTarget.dataset.isCreate;if(console.log(a),e)this.changeToCreatingTab();else{t.sensors.track("AppClick",{app:"weixin_mini",click_position:"选择档案",page_readable_name:"病情描述",from_type:this.data.fromTypeForTrack});var i=a.currentTarget.dataset.aid,r=this.data.archiveList.filter((function(a){return a.id===i}))[0];if(r){var n={ehr_id:r.id,name:r.name,relation:r.relation,patient_name:r.patient_name,sex:r.sex,age:r.age,birthday:r.birthday};this.data.selectedArchive=n,this.selectArchive()}}},selectArchive:function(){this.triggerEvent("select-archive",{archive:this.data.selectedArchive})},generateTodatDateString:function(){var a=new Date,e=String(a.getFullYear()),t=("0"+a.getMonth()+1).slice(-2),i=("0"+a.getDate()).slice(-2);console.log(e,t,i),this.setData({todayDate:"".concat(e,"-").concat(t,"-").concat(i)})}}});
},{isPage:false,isComponent:true,currentFile:'pages/inquery/components/archive_selection/archive_selection.js'});require("pages/inquery/components/archive_selection/archive_selection.js");