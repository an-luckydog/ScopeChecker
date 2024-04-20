var __globalThis=(typeof __vd_version_info__!=='undefined'&&typeof __vd_version_info__.globalThis!=='undefined')?__vd_version_info__.globalThis:window;var __pageFrameStartTime__=Date.now();var __webviewId__;var __wxAppCode__=__wxAppCode__||{};var __mainPageFrameReady__=__globalThis.__mainPageFrameReady__||function(){};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};     var __pluginFrameStartTime_wx116d0dd5e6a39ac7__ = Date.now();      var __mainPageFrameReady__ = window.__mainPageFrameReady__ || function(){};      var __webviewId__ = __webviewId__;      var __wxAppCode__= __wxAppCode__ || {};      var __WXML_GLOBAL__= __WXML_GLOBAL__ || {entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};      (function(){var __vd_version_info__=__vd_version_info__||{};
      /*v0.5vv_20200413_syb_scopedata*/window.__wcc_version__='v0.5vv_20200413_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wx116d0dd5e6a39ac7=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wx116d0dd5e6a39ac7:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

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
var z=__WXML_GLOBAL__.ops_set.$gwx_wx116d0dd5e6a39ac7 || [];
function gz$gwx_wx116d0dd5e6a39ac7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx116d0dd5e6a39ac7_1)return __WXML_GLOBAL__.ops_cached.$gwx_wx116d0dd5e6a39ac7_1
__WXML_GLOBAL__.ops_cached.$gwx_wx116d0dd5e6a39ac7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'vod_player_main'])
Z([a,[3,'width:'],[[7],[3,'width']],[3,';height:'],[[7],[3,'height']]])
Z([[7],[3,'pluginReady']])
Z([[7],[3,'adUnitId']])
Z([[7],[3,'autoPauseIfNavigate']])
Z([[7],[3,'autoPauseIfOpenNavigate']])
Z([[7],[3,'autoplay']])
Z([3,'bindcontrolstoggle'])
Z([3,'bindended'])
Z([3,'bindenterpictureinpicture'])
Z([3,'binderror'])
Z([3,'bindfullscreenchange'])
Z([3,'bindleavepictureinpicture'])
Z([3,'bindloadedmetadata'])
Z([3,'bindpause'])
Z([3,'bindplay'])
Z([3,'bindprogress'])
Z([3,'bindseekcomplete'])
Z([3,'bindtimeupdate'])
Z([3,'bindwaiting'])
Z([3,'vod_player_video'])
Z([[7],[3,'controls']])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[7],[3,'direction']])
Z([[7],[3,'enableAutoRotation']])
Z([[7],[3,'enableDanmu']])
Z([[7],[3,'enablePlayGesture']])
Z([[7],[3,'enableProgressGesture']])
Z([[7],[3,'playerid']])
Z([[7],[3,'initialTime']])
Z([[7],[3,'loop']])
Z([[7],[3,'muted']])
Z([[7],[3,'objectFit']])
Z([[7],[3,'pictureInPictureMode']])
Z([[7],[3,'pictureInPictureShowProgress']])
Z([[7],[3,'playBtnPosition']])
Z([[7],[3,'poster']])
Z([[7],[3,'posterForCrawler']])
Z([[7],[3,'showCastingButton']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'showFullscreenBtn']])
Z([[7],[3,'showMuteBtn']])
Z([[7],[3,'showPlayBtn']])
Z([[7],[3,'showProgress']])
Z([[7],[3,'showScreenLockButton']])
Z([[7],[3,'showSnapshotButton']])
Z([[7],[3,'src']])
Z([[7],[3,'title']])
Z([[7],[3,'vslideGesture']])
Z([[7],[3,'vslideGestureInFullscreen']])
Z([[7],[3,'slotNames']])
Z([3,'slotNames.length \x3e 0'])
Z([[7],[3,'item']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx116d0dd5e6a39ac7_1);return __WXML_GLOBAL__.ops_cached.$gwx_wx116d0dd5e6a39ac7_1
}
__WXML_GLOBAL__.ops_set.$gwx_wx116d0dd5e6a39ac7=z;
__WXML_GLOBAL__.ops_init.$gwx_wx116d0dd5e6a39ac7=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/player/player.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wx116d0dd5e6a39ac7_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'video',['adUnitId',3,'autoPauseIfNavigate',1,'autoPauseIfOpenNative',2,'autoplay',3,'bindcontrolstoggle',4,'bindended',5,'bindenterpictureinpicture',6,'binderror',7,'bindfullscreenchange',8,'bindleavepictureinpicture',9,'bindloadedmetadata',10,'bindpause',11,'bindplay',12,'bindprogress',13,'bindseekcomplete',14,'bindtimeupdate',15,'bindwaiting',16,'class',17,'controls',18,'danmuBtn',19,'danmuList',20,'direction',21,'enableAutoRotation',22,'enableDanmu',23,'enablePlayGesture',24,'enableProgressGesture',25,'id',26,'initialTime',27,'loop',28,'muted',29,'objectFit',30,'pictureInPictureMode',31,'pictureInPictureShowProgress',32,'playBtnPosition',33,'poster',34,'posterForCrawler',35,'showCastingButton',36,'showCenterPlayBtn',37,'showFullscreenBtn',38,'showMuteBtn',39,'showPlayBtn',40,'showProgress',41,'showScreenLockButton',42,'showSnapshotButton',43,'src',44,'title',45,'vslideGesture',46,'vslideGestureInFullscreen',47],[],e,s,gg)
var fE=_n('slot')
_(oD,fE)
var cF=_v()
_(oD,cF)
var hG=function(cI,oH,oJ,gg){
var aL=_v()
_(oJ,aL)
if(_oz(z,52,cI,oH,gg)){aL.wxVkey=1
var tM=_n('slot')
_rz(z,tM,'name',53,cI,oH,gg)
_(aL,tM)
}
aL.wxXCkey=1
return oJ
}
cF.wxXCkey=2
_2z(z,51,hG,e,s,gg,cF,'item','index','')
_(xC,oD)
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}

      var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__||{}

var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C = __COMMON_STYLESHEETS__
function makeup(file, opt) {
var _n = typeof(file) === "string";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var styleSheetManager = window.__styleSheetManager2__
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (styleSheetManager) {
var key = (info.path || Math.random()) + ':' + suffix
if (!style) {
styleSheetManager.addItem(key, info.path);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, true);
});
}
styleSheetManager.setCss(key, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();
      		__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/components/player/player.wxss'] = setCssToHead([".",[1],"vod_player_main{position:relative;width:100%;height:auto;top:0;left:0}\n.",[1],"vod_player_main .",[1],"vod_player_video{position:absolute;top:0;left:0;width:100%;height:100%}\n",],undefined,{path:"./components/player/player.wxss"});
		__wxAppCode__['plugin-private://wx116d0dd5e6a39ac7/components/player/player.wxml'] = $gwx_wx116d0dd5e6a39ac7( './components/player/player.wxml' );
		
      })();     var __pluginFrameEndTime_wx116d0dd5e6a39ac7__ = Date.now();           var __pluginFrameStartTime_wxa75efa648b60994b__ = Date.now();      var __mainPageFrameReady__ = window.__mainPageFrameReady__ || function(){};      var __webviewId__ = __webviewId__;      var __wxAppCode__= __wxAppCode__ || {};      var __WXML_GLOBAL__= __WXML_GLOBAL__ || {entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};      (function(){var __vd_version_info__=__vd_version_info__||{};
      /*v0.5vv_20200413_syb_scopedata*/window.__wcc_version__='v0.5vv_20200413_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wxa75efa648b60994b=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wxa75efa648b60994b:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

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
var z=__WXML_GLOBAL__.ops_set.$gwx_wxa75efa648b60994b || [];
function gz$gwx_wxa75efa648b60994b_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1)return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1
__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'mod_player '],[[2,'?:'],[[7],[3,'isHiddenWithVoice']],[1,'hidden_with_voice'],[1,'']]])
Z([[7],[3,'isHiddenContainer']])
Z([a,[3,'width: '],[[7],[3,'width']],[3,'; height: '],[[7],[3,'height']]])
Z([[7],[3,'autoplay']])
Z([3,'_onTvpControlstoggle'])
Z([3,'__onTvpEnded'])
Z([3,'_onEnterPictureInPicture'])
Z([3,'__onTvpError'])
Z([3,'__onTvpFullScreenChange'])
Z([3,'_onLeavePictureInPicture'])
Z([3,'__onTvpPause'])
Z([3,'__onTvpPlay'])
Z([3,'__onTvpTimeupdate'])
Z([3,'__onTvpWaiting'])
Z([3,'player_video'])
Z([[2,'!'],[[7],[3,'tvpIsAd']]])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[7],[3,'enableAutoRotation']])
Z([[7],[3,'enableDanmu']])
Z([[2,'||'],[[7],[3,'isHiddenVideo']],[[2,'=='],[[7],[3,'tvpState']],[1,'error']]])
Z([[7],[3,'playerid']])
Z([[7],[3,'muted']])
Z([[7],[3,'pictureInPictureMode']])
Z([[7],[3,'poster']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'showScreenLockButton']])
Z([[7],[3,'tvpUrl']])
Z([[7],[3,'title']])
Z([[7],[3,'getDataError']])
Z([3,'tips'])
Z([3,'tips_center'])
Z([a,[3,'获取数据失败-('],[[7],[3,'errCode']],[3,')']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isStopPoll']]],[[2,'||'],[[7],[3,'isBefore']],[[7],[3,'isAfter']]]])
Z(z[30])
Z([[7],[3,'isBefore']])
Z(z[31])
Z([a,[[7],[3,'beforeText']]])
Z([[7],[3,'isAfter']])
Z(z[31])
Z([a,[[7],[3,'afterText']]])
Z([[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showHDSelector']]])
Z([3,'player_mask_buttons'])
Z([[7],[3,'fullscreen']])
Z([a,[3,'player_control_tab '],[[2,'?:'],[[2,'!'],[[7],[3,'isIpx']]],[1,''],[1,'x']],[3,' '],[[2,'?:'],[[7],[3,'isControlsShow']],[1,''],[1,'hidden']]])
Z(z[43])
Z([3,'__onTvpShowHD'])
Z([3,'player_control_item'])
Z([a,[3,'\n            '],[[7],[3,'currentDefn']],[3,'\n          ']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showHDSelector']]],[[7],[3,'formats']]],[[6],[[7],[3,'formats']],[3,'length']]])
Z([3,'__onTvpCloseHD'])
Z([3,'player_hd_buttons'])
Z([3,'player_hd_pro'])
Z([3,'item'])
Z([[7],[3,'formats']])
Z([3,'name'])
Z([3,'selectHD'])
Z([a,[3,'player_hd_item '],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'item']],[3,'defnname']],[[7],[3,'currentDefn']]],[1,'player_hd_item_current'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'fn']])
Z([[6],[[7],[3,'item']],[3,'defnname']])
Z([[6],[[7],[3,'item']],[3,'fnname']])
Z([3,'player'])
Z([3,'player_hd_text'])
Z([a,[3,'\n                '],[[6],[[7],[3,'item']],[3,'fnname']],[3,'\n              ']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1);return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1
}
function gz$gwx_wxa75efa648b60994b_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2)return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2
__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'mod_player '],[[2,'?:'],[[7],[3,'isHiddenWithVoice']],[1,'hidden_with_voice'],[1,'']]])
Z([[7],[3,'isHiddenContainer']])
Z([a,[3,'width: '],[[7],[3,'width']],[3,'; height: '],[[7],[3,'height']]])
Z([[7],[3,'adUnitId']])
Z([[7],[3,'autoPauseIfNavigate']])
Z([[7],[3,'autoPauseIfOpenNative']])
Z([[7],[3,'autoplay']])
Z([3,'_onTvpControlstoggle'])
Z([3,'__onTvpEnded'])
Z([3,'_onEnterPictureInPicture'])
Z([3,'__onTvpError'])
Z([3,'__onTvpFullScreenChange'])
Z([3,'_onLeavePictureInPicture'])
Z([3,'_onTvpLoadedmetadata'])
Z([3,'__onTvpPause'])
Z([3,'__onTvpPlay'])
Z([3,'__onTvpProgress'])
Z([3,'__onTvpRenderError'])
Z([3,'_onTvpSeekComplete'])
Z([3,'__onTvpTimeupdate'])
Z([3,'__onTvpWaiting'])
Z([3,'player_video'])
Z([[2,'!'],[[2,'==='],[[7],[3,'controls']],[1,false]]])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'direction']],[[2,'-'],[1,1]]],[1,90],[[7],[3,'direction']]])
Z([[7],[3,'enableAutoRotation']])
Z([[7],[3,'enableDanmu']])
Z([[7],[3,'enablePlayGesture']])
Z([[2,'?:'],[[7],[3,'tvpIsAd']],[1,false],[[7],[3,'enableProgressGesture']]])
Z([[7],[3,'playerid']])
Z([[2,'?:'],[[7],[3,'tvpIsAd']],[1,0],[[7],[3,'initialTime']]])
Z([[7],[3,'loop']])
Z([[7],[3,'muted']])
Z([[7],[3,'objectFit']])
Z([[4],[[5]]])
Z([[7],[3,'playBtnPosition']])
Z([[2,'?:'],[[7],[3,'usePoster']],[[2,'||'],[[7],[3,'poster']],[[2,'?:'],[[7],[3,'formattedVid']],[[2,'+'],[[2,'+'],[1,'http://shp.qpic.cn/qqvideo/0/'],[[7],[3,'formattedVid']]],[1,'/0']],[1,'']]],[1,'']])
Z([[2,'||'],[[7],[3,'posterForCrawler']],[[2,'?:'],[[7],[3,'formattedVid']],[[2,'+'],[[2,'+'],[1,'http://shp.qpic.cn/qqvideo/0/'],[[7],[3,'formattedVid']]],[1,'/0']],[1,'']]])
Z([[7],[3,'showCastingButton']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'showFullscreenBtn']])
Z([[7],[3,'showMuteBtn']])
Z([[7],[3,'showPlayBtn']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'tvpIsAd']]],[[7],[3,'showProgress']]])
Z([[7],[3,'showScreenLockButton']])
Z([[7],[3,'tvpUrl']])
Z([[7],[3,'title']])
Z([[2,'||'],[[7],[3,'pageGesture']],[[7],[3,'vslideGesture']]])
Z([[7],[3,'vslideGestureInFullscreen']])
Z([[7],[3,'renderError']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isQB']]],[[7],[3,'tvpIsAd']]],[[2,'!'],[[7],[3,'tvpVideoError']]]],[[2,'>'],[[7],[3,'progressSkipTime']],[[2,'-'],[1,1]]]])
Z([a,[3,'mod_skipad '],[[2,'?:'],[[2,'&&'],[[7],[3,'showCastingButton']],[[7],[3,'isSupportCasting']]],[1,'mod_skipad_with_casting'],[1,'']]])
Z([[2,'!'],[[2,'<='],[[7],[3,'progressSkipTime']],[[2,'+'],[[7],[3,'progressTime']],[[7],[3,'progressBaseTime']]]]])
Z([3,'progress ad_common'])
Z([a,[[2,'-'],[[2,'-'],[[7],[3,'progressSkipTime']],[[7],[3,'progressBaseTime']]],[[7],[3,'progressTime']]]])
Z(z[53])
Z([3,'skipbtn disabled ad_common'])
Z([a,[3,'秒'],[[7],[3,'adJumpText']]])
Z([[2,'<='],[[7],[3,'progressSkipTime']],[[2,'+'],[[7],[3,'progressTime']],[[7],[3,'progressBaseTime']]]])
Z([3,'skipAd'])
Z([3,'skipbtn ad_common'])
Z([a,[[7],[3,'adCloseText']]])
Z(z[51])
Z([a,z[52][1],z[52][2]])
Z(z[53])
Z(z[54])
Z([a,z[55][1]])
Z(z[53])
Z(z[57])
Z([a,z[58][1],z[58][2]])
Z(z[59])
Z(z[60])
Z(z[61])
Z([a,z[62][1]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'tvpIsAd']]],[[7],[3,'fullscreen']]],[[2,'||'],[[7],[3,'rateToastShow']],[[7],[3,'HDToastShow']]]])
Z([3,'toast-area'])
Z([[2,'&&'],[[7],[3,'rateToastShow']],[[2,'!'],[[7],[3,'HDToastShow']]]])
Z([3,'已切换为'])
Z([3,'toast-strong-text'])
Z([a,[[7],[3,'currentRate']],[3,'倍速']])
Z([3,'播放'])
Z([[2,'&&'],[[7],[3,'HDToastShow']],[[2,'!'],[[7],[3,'rateToastShow']]]])
Z(z[78])
Z(z[79])
Z([a,[[7],[3,'currentDefn']]])
Z(z[81])
Z([[2,'!'],[[7],[3,'isSupportControlsToggle']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'tvpIsAd']]],[[7],[3,'fullscreen']]],[[2,'!'],[[7],[3,'isHideFullscreenBtn']]]])
Z([a,[3,'player_control_tab '],[[2,'?:'],[[2,'&&'],[[2,'!'],[[7],[3,'showHDSelector']]],[[2,'!'],[[7],[3,'showRateSelector']]]],[1,''],[1,'hidden']],[3,'  '],[[2,'?:'],[[2,'!'],[[7],[3,'isIpx']]],[1,''],[1,'x']],[3,'   '],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[7],[3,'isIpx']],[[7],[3,'showCastingButton']]],[[7],[3,'isSupportCasting']]],[1,'x_with_casting'],[1,'']],[3,' '],[[2,'?:'],[[2,'&&'],[[7],[3,'showCastingButton']],[[7],[3,'isSupportCasting']]],[1,'player_control_tab_with_casting'],[1,'']]])
Z([[6],[[7],[3,'extraParam']],[3,'enablePlayRateChange']])
Z([3,'__onTvpShowRate'])
Z([a,[3,'player_control_item '],[[2,'?:'],[[2,'&&'],[[7],[3,'showCastingButton']],[[7],[3,'isSupportCasting']]],[1,'player_control_item_with_casting'],[1,'']]])
Z([[2,'==='],[[7],[3,'currentRate']],[1,1]])
Z([3,'player_control_rate_big'])
Z(z[80][2])
Z(z[94])
Z([a,z[80][1],[3,'X']])
Z([[2,'!'],[[2,'!'],[[7],[3,'formats_selected']]]])
Z([3,'__onTvpShowHD'])
Z([a,z[92][1],z[92][2]])
Z([3,'player_control_item_border'])
Z([a,[[7],[3,'formats_selected']]])
Z(z[88])
Z([a,z[89][1],[[2,'?:'],[[7],[3,'isControlsShow']],[1,''],[1,'hidden']],z[89][3],z[89][4],z[89][5],z[89][6],z[89][7],z[89][8]])
Z(z[90])
Z(z[91])
Z([a,z[92][1],z[92][2]])
Z(z[93])
Z(z[94])
Z(z[80][2])
Z(z[94])
Z([a,z[80][1],z[97][2]])
Z(z[98])
Z(z[99])
Z([a,z[92][1],z[92][2]])
Z(z[101])
Z([a,z[102][1]])
Z([[2,'&&'],[[7],[3,'fullscreen']],[[2,'||'],[[7],[3,'showHDSelector']],[[7],[3,'showRateSelector']]]])
Z([3,'player_mask_buttons'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showHDSelector']]],[[7],[3,'formats']]],[[6],[[7],[3,'formats']],[3,'length']]])
Z([3,'__onTvpCloseHD'])
Z([3,'player_control_buttons'])
Z([a,[3,'player_control_pro_title '],[[2,'?:'],[[7],[3,'isIpx']],[1,'x_defn_left'],[1,'']]])
Z([3,'画质'])
Z([a,[3,'player_control_pro  '],z[123][2]])
Z([3,'item'])
Z([[7],[3,'formats']])
Z([3,'name'])
Z([3,'selectHD'])
Z([a,[3,'player_control_sub_item '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'selected']],[1,'player_control_item_current'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'cname_short']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([3,'player'])
Z([[6],[[7],[3,'item']],[3,'resolution']])
Z([[6],[[7],[3,'item']],[3,'selected']])
Z([3,'player_hd_text_resolution'])
Z([a,[[6],[[7],[3,'item']],[3,'resolution']]])
Z([3,'player_hd_text_name'])
Z([a,[[6],[[7],[3,'item']],[3,'cname_short']]])
Z([[2,'&&'],[[7],[3,'showVipHD']],[[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'lmt']],[1,1]],[[2,'==='],[[6],[[7],[3,'item']],[3,'lmt']],[1,3]]]])
Z([3,'player_hd_text_vip'])
Z([3,'VIP尊享'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showRateSelector']]],[[7],[3,'playrates']]],[[6],[[7],[3,'playrates']],[3,'length']]])
Z([3,'__onTvpCloseRate'])
Z(z[122])
Z([a,z[123][1],z[123][2]])
Z([3,'播放速度'])
Z([a,[3,'player_control_pro '],z[123][2]])
Z(z[126])
Z([[7],[3,'playrates']])
Z(z[128])
Z([3,'setPlayRate'])
Z([a,z[130][1],[[2,'?:'],[[2,'==='],[[7],[3,'currentRate']],[[7],[3,'item']]],[1,'player_control_item_current'],[1,'']]])
Z(z[133])
Z([[7],[3,'item']])
Z(z[155])
Z([3,'player_rate_text'])
Z([a,[[7],[3,'item']],z[97][2]])
Z([[7],[3,'isUsePlayerErrorTips']])
Z([3,'tapRetry'])
Z([[2,'+'],[1,'player_error_layer'],[[2,'?:'],[[2,'!='],[[7],[3,'tvpState']],[1,'error']],[1,' hidden'],[1,'']]])
Z([a,[3,'\n            '],[[7],[3,'tvpVideoError']],[3,'\n        ']])
Z([[7],[3,'reportUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2);return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2
}
__WXML_GLOBAL__.ops_set.$gwx_wxa75efa648b60994b=z;
__WXML_GLOBAL__.ops_init.$gwx_wxa75efa648b60994b=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./component/live/live.wxml','./component/video/video.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wxa75efa648b60994b_1()
var oB=_mz(z,'view',['class',0,'hidden',1,'style',1],[],e,s,gg)
var xC=_mz(z,'video',['autoplay',3,'bindcontrolstoggle',1,'bindended',2,'bindenterpictureinpicture',3,'binderror',4,'bindfullscreenchange',5,'bindleavepictureinpicture',6,'bindpause',7,'bindplay',8,'bindtimeupdate',9,'bindwaiting',10,'class',11,'controls',12,'danmuBtn',13,'danmuList',14,'enableAutoRotation',15,'enableDanmu',16,'hidden',17,'id',18,'muted',19,'pictureInPictureMode',20,'poster',21,'showCenterPlayBtn',22,'showScreenLockButton',23,'src',24,'title',25],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,29,e,s,gg)){oD.wxVkey=1
var oH=_n('cover-view')
_rz(z,oH,'class',30,e,s,gg)
var cI=_n('cover-view')
_rz(z,cI,'class',31,e,s,gg)
var oJ=_oz(z,32,e,s,gg)
_(cI,oJ)
_(oH,cI)
_(oD,oH)
}
else if(_oz(z,33,e,s,gg)){oD.wxVkey=2
var lK=_n('cover-view')
_rz(z,lK,'class',34,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,35,e,s,gg)){aL.wxVkey=1
var tM=_n('cover-view')
_rz(z,tM,'class',36,e,s,gg)
var eN=_oz(z,37,e,s,gg)
_(tM,eN)
_(aL,tM)
}
else if(_oz(z,38,e,s,gg)){aL.wxVkey=2
var bO=_n('cover-view')
_rz(z,bO,'class',39,e,s,gg)
var oP=_oz(z,40,e,s,gg)
_(bO,oP)
_(aL,bO)
}
aL.wxXCkey=1
_(oD,lK)
}
var fE=_v()
_(xC,fE)
if(_oz(z,41,e,s,gg)){fE.wxVkey=1
var xQ=_n('view')
_rz(z,xQ,'class',42,e,s,gg)
_(fE,xQ)
}
var cF=_v()
_(xC,cF)
if(_oz(z,43,e,s,gg)){cF.wxVkey=1
var oR=_n('view')
_rz(z,oR,'class',44,e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,45,e,s,gg)){fS.wxVkey=1
var cT=_mz(z,'view',['bindtap',46,'class',1],[],e,s,gg)
var hU=_oz(z,48,e,s,gg)
_(cT,hU)
_(fS,cT)
}
fS.wxXCkey=1
_(cF,oR)
}
var hG=_v()
_(xC,hG)
if(_oz(z,49,e,s,gg)){hG.wxVkey=1
var oV=_mz(z,'view',['bindtap',50,'class',1],[],e,s,gg)
var cW=_n('view')
_rz(z,cW,'class',52,e,s,gg)
var oX=_v()
_(cW,oX)
var lY=function(t1,aZ,e2,gg){
var o4=_mz(z,'view',['catchtap',56,'class',1,'data-defn',2,'data-defnname',3,'data-fname',4,'data-pos',5],[],t1,aZ,gg)
var x5=_n('view')
_rz(z,x5,'class',62,t1,aZ,gg)
var o6=_oz(z,63,t1,aZ,gg)
_(x5,o6)
_(o4,x5)
_(e2,o4)
return e2
}
oX.wxXCkey=2
_2z(z,54,lY,e,s,gg,oX,'item','index','name')
_(oV,cW)
_(hG,oV)
}
var f7=_n('slot')
_(xC,f7)
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_wxa75efa648b60994b_2()
var h9=_mz(z,'view',['class',0,'hidden',1,'style',1],[],e,s,gg)
var o0=_mz(z,'video',['adUnitId',3,'autoPauseIfNavigate',1,'autoPauseIfOpenNative',2,'autoplay',3,'bindcontrolstoggle',4,'bindended',5,'bindenterpictureinpicture',6,'binderror',7,'bindfullscreenchange',8,'bindleavepictureinpicture',9,'bindloadedmetadata',10,'bindpause',11,'bindplay',12,'bindprogress',13,'bindrendererror',14,'bindseekcomplete',15,'bindtimeupdate',16,'bindwaiting',17,'class',18,'controls',19,'danmuBtn',20,'danmuList',21,'direction',22,'enableAutoRotation',23,'enableDanmu',24,'enablePlayGesture',25,'enableProgressGesture',26,'id',27,'initialTime',28,'loop',29,'muted',30,'objectFit',31,'pictureInPictureMode',32,'playBtnPosition',33,'poster',34,'posterForCrawler',35,'showCastingButton',36,'showCenterPlayBtn',37,'showFullscreenBtn',38,'showMuteBtn',39,'showPlayBtn',40,'showProgress',41,'showScreenLockButton',42,'src',43,'title',44,'vslideGesture',45,'vslideGestureInFullscreen',46],[],e,s,gg)
var cAB=_v()
_(o0,cAB)
if(_oz(z,50,e,s,gg)){cAB.wxVkey=1
var oHB=_v()
_(cAB,oHB)
if(_oz(z,51,e,s,gg)){oHB.wxVkey=1
var xIB=_n('cover-view')
_rz(z,xIB,'class',52,e,s,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,53,e,s,gg)){oJB.wxVkey=1
var hMB=_n('cover-view')
_rz(z,hMB,'class',54,e,s,gg)
var oNB=_oz(z,55,e,s,gg)
_(hMB,oNB)
_(oJB,hMB)
}
var fKB=_v()
_(xIB,fKB)
if(_oz(z,56,e,s,gg)){fKB.wxVkey=1
var cOB=_n('cover-view')
_rz(z,cOB,'class',57,e,s,gg)
var oPB=_oz(z,58,e,s,gg)
_(cOB,oPB)
_(fKB,cOB)
}
var cLB=_v()
_(xIB,cLB)
if(_oz(z,59,e,s,gg)){cLB.wxVkey=1
var lQB=_mz(z,'cover-view',['bindtap',60,'class',1],[],e,s,gg)
var aRB=_oz(z,62,e,s,gg)
_(lQB,aRB)
_(cLB,lQB)
}
oJB.wxXCkey=1
fKB.wxXCkey=1
cLB.wxXCkey=1
_(oHB,xIB)
}
oHB.wxXCkey=1
}
else{cAB.wxVkey=2
var tSB=_v()
_(cAB,tSB)
if(_oz(z,63,e,s,gg)){tSB.wxVkey=1
var eTB=_n('view')
_rz(z,eTB,'class',64,e,s,gg)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,65,e,s,gg)){bUB.wxVkey=1
var oXB=_n('view')
_rz(z,oXB,'class',66,e,s,gg)
var fYB=_oz(z,67,e,s,gg)
_(oXB,fYB)
_(bUB,oXB)
}
var oVB=_v()
_(eTB,oVB)
if(_oz(z,68,e,s,gg)){oVB.wxVkey=1
var cZB=_n('view')
_rz(z,cZB,'class',69,e,s,gg)
var h1B=_oz(z,70,e,s,gg)
_(cZB,h1B)
_(oVB,cZB)
}
var xWB=_v()
_(eTB,xWB)
if(_oz(z,71,e,s,gg)){xWB.wxVkey=1
var o2B=_mz(z,'view',['bindtap',72,'class',1],[],e,s,gg)
var c3B=_oz(z,74,e,s,gg)
_(o2B,c3B)
_(xWB,o2B)
}
bUB.wxXCkey=1
oVB.wxXCkey=1
xWB.wxXCkey=1
_(tSB,eTB)
}
tSB.wxXCkey=1
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,75,e,s,gg)){oBB.wxVkey=1
var o4B=_n('view')
_rz(z,o4B,'class',76,e,s,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,77,e,s,gg)){l5B.wxVkey=1
var t7B=_n('view')
var e8B=_oz(z,78,e,s,gg)
_(t7B,e8B)
var b9B=_n('text')
_rz(z,b9B,'class',79,e,s,gg)
var o0B=_oz(z,80,e,s,gg)
_(b9B,o0B)
_(t7B,b9B)
var xAC=_oz(z,81,e,s,gg)
_(t7B,xAC)
_(l5B,t7B)
}
var a6B=_v()
_(o4B,a6B)
if(_oz(z,82,e,s,gg)){a6B.wxVkey=1
var oBC=_n('view')
var fCC=_oz(z,83,e,s,gg)
_(oBC,fCC)
var cDC=_n('text')
_rz(z,cDC,'class',84,e,s,gg)
var hEC=_oz(z,85,e,s,gg)
_(cDC,hEC)
_(oBC,cDC)
var oFC=_oz(z,86,e,s,gg)
_(oBC,oFC)
_(a6B,oBC)
}
l5B.wxXCkey=1
a6B.wxXCkey=1
_(oBB,o4B)
}
var lCB=_v()
_(o0,lCB)
if(_oz(z,87,e,s,gg)){lCB.wxVkey=1
var cGC=_v()
_(lCB,cGC)
if(_oz(z,88,e,s,gg)){cGC.wxVkey=1
var oHC=_n('view')
_rz(z,oHC,'class',89,e,s,gg)
var lIC=_v()
_(oHC,lIC)
if(_oz(z,90,e,s,gg)){lIC.wxVkey=1
var tKC=_mz(z,'view',['bindtap',91,'class',1],[],e,s,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,93,e,s,gg)){eLC.wxVkey=1
var bMC=_n('view')
_rz(z,bMC,'class',94,e,s,gg)
var oNC=_oz(z,95,e,s,gg)
_(bMC,oNC)
_(eLC,bMC)
}
else{eLC.wxVkey=2
var xOC=_n('view')
var oPC=_n('view')
_rz(z,oPC,'class',96,e,s,gg)
var fQC=_oz(z,97,e,s,gg)
_(oPC,fQC)
_(xOC,oPC)
_(eLC,xOC)
}
eLC.wxXCkey=1
_(lIC,tKC)
}
var aJC=_v()
_(oHC,aJC)
if(_oz(z,98,e,s,gg)){aJC.wxVkey=1
var cRC=_mz(z,'view',['bindtap',99,'class',1],[],e,s,gg)
var hSC=_n('view')
_rz(z,hSC,'class',101,e,s,gg)
var oTC=_oz(z,102,e,s,gg)
_(hSC,oTC)
_(cRC,hSC)
_(aJC,cRC)
}
lIC.wxXCkey=1
aJC.wxXCkey=1
_(cGC,oHC)
}
cGC.wxXCkey=1
}
else{lCB.wxVkey=2
var cUC=_v()
_(lCB,cUC)
if(_oz(z,103,e,s,gg)){cUC.wxVkey=1
var oVC=_n('view')
_rz(z,oVC,'class',104,e,s,gg)
var lWC=_v()
_(oVC,lWC)
if(_oz(z,105,e,s,gg)){lWC.wxVkey=1
var tYC=_mz(z,'view',['bindtap',106,'class',1],[],e,s,gg)
var eZC=_v()
_(tYC,eZC)
if(_oz(z,108,e,s,gg)){eZC.wxVkey=1
var b1C=_n('view')
_rz(z,b1C,'class',109,e,s,gg)
var o2C=_oz(z,110,e,s,gg)
_(b1C,o2C)
_(eZC,b1C)
}
else{eZC.wxVkey=2
var x3C=_n('view')
var o4C=_n('view')
_rz(z,o4C,'class',111,e,s,gg)
var f5C=_oz(z,112,e,s,gg)
_(o4C,f5C)
_(x3C,o4C)
_(eZC,x3C)
}
eZC.wxXCkey=1
_(lWC,tYC)
}
var aXC=_v()
_(oVC,aXC)
if(_oz(z,113,e,s,gg)){aXC.wxVkey=1
var c6C=_mz(z,'view',['bindtap',114,'class',1],[],e,s,gg)
var h7C=_n('view')
_rz(z,h7C,'class',116,e,s,gg)
var o8C=_oz(z,117,e,s,gg)
_(h7C,o8C)
_(c6C,h7C)
_(aXC,c6C)
}
lWC.wxXCkey=1
aXC.wxXCkey=1
_(cUC,oVC)
}
cUC.wxXCkey=1
}
var aDB=_v()
_(o0,aDB)
if(_oz(z,118,e,s,gg)){aDB.wxVkey=1
var c9C=_n('view')
_rz(z,c9C,'class',119,e,s,gg)
_(aDB,c9C)
}
var tEB=_v()
_(o0,tEB)
if(_oz(z,120,e,s,gg)){tEB.wxVkey=1
var o0C=_mz(z,'view',['bindtap',121,'class',1],[],e,s,gg)
var lAD=_n('text')
_rz(z,lAD,'class',123,e,s,gg)
var aBD=_oz(z,124,e,s,gg)
_(lAD,aBD)
_(o0C,lAD)
var tCD=_n('view')
_rz(z,tCD,'class',125,e,s,gg)
var eDD=_v()
_(tCD,eDD)
var bED=function(xGD,oFD,oHD,gg){
var cJD=_mz(z,'view',['bindtap',129,'class',1,'data-cname',2,'data-fname',3,'data-pos',4,'data-resolution',5,'data-selected',6],[],xGD,oFD,gg)
var oLD=_n('text')
_rz(z,oLD,'class',136,xGD,oFD,gg)
var cMD=_oz(z,137,xGD,oFD,gg)
_(oLD,cMD)
_(cJD,oLD)
var oND=_n('text')
_rz(z,oND,'class',138,xGD,oFD,gg)
var lOD=_oz(z,139,xGD,oFD,gg)
_(oND,lOD)
_(cJD,oND)
var hKD=_v()
_(cJD,hKD)
if(_oz(z,140,xGD,oFD,gg)){hKD.wxVkey=1
var aPD=_n('text')
_rz(z,aPD,'class',141,xGD,oFD,gg)
var tQD=_oz(z,142,xGD,oFD,gg)
_(aPD,tQD)
_(hKD,aPD)
}
hKD.wxXCkey=1
_(oHD,cJD)
return oHD
}
eDD.wxXCkey=2
_2z(z,127,bED,e,s,gg,eDD,'item','index','name')
_(o0C,tCD)
_(tEB,o0C)
}
var eFB=_v()
_(o0,eFB)
if(_oz(z,143,e,s,gg)){eFB.wxVkey=1
var eRD=_mz(z,'view',['bindtap',144,'class',1],[],e,s,gg)
var bSD=_n('text')
_rz(z,bSD,'class',146,e,s,gg)
var oTD=_oz(z,147,e,s,gg)
_(bSD,oTD)
_(eRD,bSD)
var xUD=_n('view')
_rz(z,xUD,'class',148,e,s,gg)
var oVD=_v()
_(xUD,oVD)
var fWD=function(hYD,cXD,oZD,gg){
var o2D=_mz(z,'view',['bindtap',152,'class',1,'data-pos',2,'data-rate',3,'data-selected',4],[],hYD,cXD,gg)
var l3D=_n('view')
_rz(z,l3D,'class',157,hYD,cXD,gg)
var a4D=_oz(z,158,hYD,cXD,gg)
_(l3D,a4D)
_(o2D,l3D)
_(oZD,o2D)
return oZD
}
oVD.wxXCkey=2
_2z(z,150,fWD,e,s,gg,oVD,'item','index','name')
_(eRD,xUD)
_(eFB,eRD)
}
var bGB=_v()
_(o0,bGB)
if(_oz(z,159,e,s,gg)){bGB.wxVkey=1
var t5D=_mz(z,'view',['bindtap',160,'class',1],[],e,s,gg)
var e6D=_oz(z,162,e,s,gg)
_(t5D,e6D)
_(bGB,t5D)
}
var b7D=_n('slot')
_(o0,b7D)
cAB.wxXCkey=1
oBB.wxXCkey=1
lCB.wxXCkey=1
aDB.wxXCkey=1
tEB.wxXCkey=1
eFB.wxXCkey=1
bGB.wxXCkey=1
_(h9,o0)
var o8D=_mz(z,'image',['hidden',-1,'src',163],[],e,s,gg)
_(h9,o8D)
_(r,h9)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}

      var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__||{}

var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C = __COMMON_STYLESHEETS__
function makeup(file, opt) {
var _n = typeof(file) === "string";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var styleSheetManager = window.__styleSheetManager2__
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (styleSheetManager) {
var key = (info.path || Math.random()) + ':' + suffix
if (!style) {
styleSheetManager.addItem(key, info.path);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, true);
});
}
styleSheetManager.setCss(key, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();
      		__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.wxss'] = setCssToHead([".",[1],"mod_player{position:relative;z-index:11;left:0;top:0;width:100%}\n.",[1],"mod_player:before{content:\x22\x22;display:block;width:100%;padding-bottom:56.25%}\n.",[1],"mod_player .",[1],"player_video{position:absolute;top:0;left:0;width:100%;height:100%}\n.",[1],"tips{position:relative;text-align:center;width:100%;height:100%;background-color:rgba(0,0,0,.75);display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"tips_center{color:#fff}\n.",[1],"player_hd_buttons{position:absolute;z-index:2;left:0;right:0;top:0;bottom:0;margin:auto}\n.",[1],"player_hd_buttons,.",[1],"player_hd_pro{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center}\n.",[1],"player_hd_pro{padding:0 50px}\n.",[1],"player_hd_item{-webkit-flex:1 1 auto;flex:1 1 auto;min-width:110px;max-width:130px;height:56px;background:#3d3d3d;border-radius:2px;color:#fff;margin-right:7px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center}\n.",[1],"player_hd_item:last-child{margin-right:0}\n.",[1],"player_hd_item_current{color:#ff6022}\n.",[1],"player_hd_text{width:100%;font-size:16px;line-height:normal;letter-spacing:normal;text-align:center}\n.",[1],"player_control_item{display:inline-block;padding:0 12px;font-size:18px;line-height:40px;color:#fff;letter-spacing:0;text-align:center;text-shadow:0 0 6px rgba(0,0,0,.3)}\n.",[1],"player_control_tab{position:absolute;z-index:2;top:27px;right:5px;opacity:1;transition:opacity .6s;text-align:right}\n.",[1],"player_control_tab.",[1],"x{right:83px}\n.",[1],"player_mask_buttons{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;background-color:rgba(0,0,0,.75);z-index:1;width:100%}\n.",[1],"player_control_tab.",[1],"hidden{opacity:0}\n",],undefined,{path:"./component/live/live.wxss"});
		__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.wxml'] = $gwx_wxa75efa648b60994b( './component/live/live.wxml' );
				__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.wxss'] = setCssToHead([".",[1],"mod_player{position:relative;z-index:11;left:0;top:0;width:100%}\n.",[1],"mod_player:before{content:\x22\x22;display:block;width:100%;padding-bottom:56.25%}\n.",[1],"mod_player .",[1],"player_video{position:absolute;top:0;left:0;width:100%;height:100%}\n.",[1],"mod_player .",[1],"player_video .",[1],"mod_skipad{background:rgba(0,0,0,.6);position:absolute;color:#fff;top:7.5px;right:7.5px;height:14px;font-size:12px;padding:7px 12px;border-radius:80px;overflow:hidden;white-space:nowrap;z-index:100;box-sizing:content-box!important;-webkit-border-radius:80px;-moz-border-radius:80px;-ms-border-radius:80px;-o-border-radius:80px}\n.",[1],"mod_skipad_with_casting{top:14px!important;right:45.5px!important}\n.",[1],"mod_player .",[1],"player_video .",[1],"mod_skipad .",[1],"ad_common{display:inline;line-height:1.2;font-size:12px}\n.",[1],"mod_player .",[1],"player_video .",[1],"mod_skipad .",[1],"progress{color:#ff7000;margin-right:3px}\n.",[1],"mod_player .",[1],"player_video .",[1],"mod_skipad .",[1],"skipbtn{color:#ff7000}\n.",[1],"mod_player .",[1],"player_video .",[1],"mod_skipad .",[1],"skipbtn.",[1],"disabled{color:#fff}\n.",[1],"mod_player .",[1],"player_error_layer{width:100%;height:100%;position:absolute;left:0;top:0;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-direction:column;flex-direction:column;background:#000;color:#fff;padding:0 ",[0,20],";box-sizing:border-box;text-align:center;line-height:normal}\n.",[1],"mod_player .",[1],"player_error_layer.",[1],"hidden{display:none}\n.",[1],"hidden_with_voice{top:-999px;width:5px!important;height:5px!important}\n.",[1],"player_control_tab{position:absolute;z-index:2;top:27px;right:5px;text-align:right;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center}\n.",[1],"player_control_tab_with_casting{top:21px!important;right:53px!important}\n.",[1],"player_control_tab.",[1],"x{right:83px}\n.",[1],"x_with_casting{right:131px!important}\n.",[1],"player_control_tab.",[1],"hidden{opacity:0}\n.",[1],"player_control_item{display:inline-block;margin:0 12px;font-size:12px;line-height:18px;color:#fff;letter-spacing:0;text-align:center;text-shadow:0 0 6px rgba(0,0,0,.3)}\n.",[1],"player_control_item_border{min-width:",[0,60],";padding:0 ",[0,2],";border-radius:2px;border:2px solid #fff;font-size:",[0,24],";font-weight:bolder}\n.",[1],"player_control_rate_big{font-size:",[0,30],";font-weight:bolder}\n.",[1],"player_control_item_with_casting{line-height:18px!important}\n.",[1],"player_mask_buttons{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;background-color:rgba(0,0,0,.5);z-index:1;width:100%}\n.",[1],"player_rate_text{width:100%;font-size:23px;font-weight:bolder;text-align:center}\n.",[1],"player_control_pro_title{font-weight:500;position:absolute;bottom:",[0,342],";line-height:",[0,40],";color:#fff}\n.",[1],"player_control_buttons{padding-left:10%;z-index:100000;left:0;right:0;top:0;bottom:0;margin:auto}\n.",[1],"player_control_buttons,.",[1],"player_control_pro{position:absolute;display:-webkit-flex;display:flex;-webkit-align-items:left;align-items:left;-webkit-justify-content:left;justify-content:left}\n.",[1],"player_control_pro{bottom:",[0,126],";height:",[0,192],";width:90%;overflow:scroll}\n::-webkit-scrollbar{width:0;display:none}\n.",[1],"player_control_sub_item{-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-direction:column;flex-direction:column;width:",[0,192],";height:",[0,192],";min-width:",[0,192],";background-color:rgba(28,28,34,.45);border-radius:",[0,8],";color:#fff;-webkit-flex-shrink:0;flex-shrink:0;margin-right:",[0,16],";display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center}\n.",[1],"player_control_sub_item:last-child{margin-right:32px}\n.",[1],"player_control_item:last-child{margin-right:0}\n.",[1],"player_control_item_current{box-sizing:border-box!important;color:#ff6022;border-bottom:",[0,6]," solid #ff6022;border-radius:",[0,8]," ",[0,8]," 0 0}\n.",[1],"player_hd_text_vip{width:100%;font-size:10px;height:14px;letter-spacing:normal;line-height:normal;text-align:center;color:#d6ab56;opacity:.6;margin-top:8px}\n.",[1],"player_hd_text_resolution{font-size:18px;height:22px;font-weight:700}\n.",[1],"player_hd_text_name,.",[1],"player_hd_text_resolution{width:100%;letter-spacing:normal;line-height:20px;text-align:center}\n.",[1],"player_hd_text_name{font-size:13px;height:17px;margin-top:7px}\n.",[1],"x_defn_left{left:100px!important}\n.",[1],"t{width:80px;height:40px;line-height:40px;font-size:16px;color:#ff7000;margin:0}\n.",[1],"toast-area{position:absolute;top:0;width:100%;text-align:center;color:#fff;font-size:16px;height:",[0,35],";padding-top:",[0,72],";background-image:linear-gradient(180deg,rgba(0,0,0,.65) 2%,transparent 99%);transition:opacity .6s}\n.",[1],"toast-show{opacity:1}\n.",[1],"toast-strong-text{font-weight:bolder;color:#ff7000}\n.",[1],"toast-hidden{opacity:0}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./component/video/video.wxss:1:2944)",{path:"./component/video/video.wxss"});
		__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.wxml'] = $gwx_wxa75efa648b60994b( './component/video/video.wxml' );
		
      })();     var __pluginFrameEndTime_wxa75efa648b60994b__ = Date.now();      ;/*v0.5vv_20211229_syb_scopedata*/__globalThis.__wcc_version__='v0.5vv_20211229_syb_scopedata';__globalThis.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
var outerGlobal=typeof __globalThis==='undefined'?window:__globalThis;$gwx=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'adjustPosition']])
Z([[7],[3,'alwaysEmbed']])
Z([[7],[3,'autoFocus']])
Z([3,'onBlur'])
Z([3,'onConfirm'])
Z([3,'onFocus'])
Z([3,'onInput'])
Z([3,'onKeyboardHeightChange'])
Z([3,'onClickInput'])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'field__control']],[[4],[[5],[[5],[[7],[3,'inputAlign']]],[[9],[[8],'disabled',[[7],[3,'disabled']]],[[8],'error',[[7],[3,'error']]]]]]]],[3,' input-class']])
Z([[7],[3,'confirmHold']])
Z([[7],[3,'confirmType']])
Z([[7],[3,'cursor']])
Z([[7],[3,'cursorSpacing']])
Z([[2,'||'],[[7],[3,'disabled']],[[7],[3,'readonly']]])
Z([[7],[3,'focus']])
Z([[7],[3,'holdKeyboard']])
Z([[7],[3,'name']])
Z([[7],[3,'maxlength']])
Z([[2,'||'],[[7],[3,'password']],[[2,'==='],[[7],[3,'type']],[1,'password']]])
Z([[7],[3,'placeholder']])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'field__placeholder']],[[8],'error',[[7],[3,'error']]]]])
Z([[7],[3,'placeholderStyle']])
Z([[7],[3,'selectionEnd']])
Z([[7],[3,'selectionStart']])
Z([[7],[3,'type']])
Z([[7],[3,'innerValue']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'adjustPosition']])
Z([[7],[3,'autoFocus']])
Z([[2,'!'],[[2,'!'],[[7],[3,'autosize']]]])
Z([3,'onBlur'])
Z([3,'onConfirm'])
Z([3,'onFocus'])
Z([3,'onInput'])
Z([3,'onKeyboardHeightChange'])
Z([3,'onLineChange'])
Z([3,'onClickInput'])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'field__control']],[[4],[[5],[[5],[[5],[[7],[3,'inputAlign']]],[[7],[3,'type']]],[[9],[[8],'disabled',[[7],[3,'disabled']]],[[8],'error',[[7],[3,'error']]]]]]]],[3,' input-class']])
Z([[7],[3,'cursor']])
Z([[7],[3,'cursorSpacing']])
Z([[7],[3,'disableDefaultPadding']])
Z([[2,'||'],[[7],[3,'disabled']],[[7],[3,'readonly']]])
Z([[7],[3,'fixed']])
Z([[7],[3,'focus']])
Z([[7],[3,'holdKeyboard']])
Z([[7],[3,'name']])
Z([[7],[3,'maxlength']])
Z([[7],[3,'placeholder']])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'field__placeholder']],[[9],[[8],'error',[[7],[3,'error']]],[[8],'disabled',[[7],[3,'disabled']]]]]])
Z([[7],[3,'placeholderStyle']])
Z([[7],[3,'selectionEnd']])
Z([[7],[3,'selectionStart']])
Z([[7],[3,'showConfirmBar']])
Z([[12],[[6],[[7],[3,'computed']],[3,'inputStyle']],[[5],[[7],[3,'autosize']]]])
Z([[7],[3,'innerValue']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([[2,'?:'],[[7],[3,'lockScroll']],[1,'noop'],[1,'']])
Z([3,'van-overlay custom-class'])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,'; '],[[7],[3,'customStyle']]])
Z([[7],[3,'duration']])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'inited']])
Z([3,'onTransitionEnd'])
Z([a,[3,'custom-class '],[[7],[3,'classes']],[3,' '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'popup']],[[4],[[5],[[5],[[7],[3,'position']]],[[9],[[9],[[9],[[8],'round',[[7],[3,'round']]],[[8],'safe',[[7],[3,'safeAreaInsetBottom']]]],[[8],'safeTop',[[7],[3,'safeAreaInsetTop']]]],[[8],'safeTabBar',[[7],[3,'safeAreaTabBar']]]]]]]]])
Z([[12],[[6],[[7],[3,'computed']],[3,'popupStyle']],[[5],[[9],[[9],[[9],[[8],'zIndex',[[7],[3,'zIndex']]],[[8],'currentDuration',[[7],[3,'currentDuration']]]],[[8],'display',[[7],[3,'display']]]],[[8],'customStyle',[[7],[3,'customStyle']]]]]])
Z([[7],[3,'closeable']])
Z([3,'onClickCloseIcon'])
Z([a,[3,'close-icon-class van-popup__close-icon van-popup__close-icon--'],[[7],[3,'closeIconPosition']]])
Z([[7],[3,'closeIcon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./components/mp-weixin/node/node.wxml:isInline":np_0,"p_./miniprogram_npm/@vant/weapp/cell/index.wxs":np_1,"p_./miniprogram_npm/@vant/weapp/field/index.wxs":np_2,"p_./miniprogram_npm/@vant/weapp/icon/index.wxs":np_3,"p_./miniprogram_npm/@vant/weapp/popup/index.wxs":np_4,"p_./miniprogram_npm/@vant/weapp/transition/index.wxs":np_5,"p_./miniprogram_npm/@vant/weapp/tree-select/index.wxs":np_6,"p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs":np_7,"p_./miniprogram_npm/@vant/weapp/wxs/array.wxs":np_8,"p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs":np_9,"p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs":np_10,"p_./miniprogram_npm/@vant/weapp/wxs/object.wxs":np_11,"p_./miniprogram_npm/@vant/weapp/wxs/style.wxs":np_12,"p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs":np_13,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./components/mp-weixin/node/node.wxml']={};
f_['./components/mp-weixin/node/node.wxml']['isInline'] =nv_require("m_./components/mp-weixin/node/node.wxml:isInline");
function np_0(){var nv_module={nv_exports:{}};var nv_e = ({nv_abbr:!0,nv_b:!0,nv_big:!0,nv_code:!0,nv_del:!0,nv_em:!0,nv_i:!0,nv_ins:!0,nv_label:!0,nv_q:!0,nv_small:!0,nv_span:!0,nv_strong:!0,nv_sub:!0,nv_sup:!0,});nv_module.nv_exports = (function (nv_n,nv_i){return(nv_e[((nt_0=(nv_n),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] || -1 !== (nv_i || "").nv_indexOf("inline"))});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/cell/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/cell/index.wxs");
f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/cell/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/cell/index.wxs");
function np_1(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();function nv_titleStyle(nv_data){return(nv_style([({'nv_max-width':nv_addUnit(nv_data.nv_titleWidth),'nv_min-width':nv_addUnit(nv_data.nv_titleWidth),}),nv_data.nv_titleStyle]))};nv_module.nv_exports = ({nv_titleStyle:nv_titleStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/field/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/field/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/field/index.wxs");
f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/field/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/field/index.wxs");
function np_2(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();function nv_inputStyle(nv_autosize){if (nv_autosize && nv_autosize.nv_constructor === 'Object'){return(nv_style(({'nv_min-height':nv_addUnit(nv_autosize.nv_minHeight),'nv_max-height':nv_addUnit(nv_autosize.nv_maxHeight),})))};return('')};nv_module.nv_exports = ({nv_inputStyle:nv_inputStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/field/input.wxml']={};
f_['./miniprogram_npm/@vant/weapp/field/input.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/field/input.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/field/textarea.wxml']={};
f_['./miniprogram_npm/@vant/weapp/field/textarea.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/field/textarea.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/field/textarea.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/field/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/field/index.wxs");
f_['./miniprogram_npm/@vant/weapp/field/textarea.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/icon/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/icon/index.wxs");
f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/icon/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/icon/index.wxs");
function np_3(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();function nv_isImage(nv_name){return(nv_name.nv_indexOf('/') !== -1)};function nv_rootClass(nv_data){var nv_classes = ['custom-class'];if (nv_data.nv_classPrefix !== 'van-icon'){nv_classes.nv_push('van-icon--custom')};if (nv_data.nv_classPrefix != null){nv_classes.nv_push(nv_data.nv_classPrefix)};if (nv_isImage(nv_data.nv_name)){nv_classes.nv_push('van-icon--image')} else if (nv_data.nv_classPrefix != null){nv_classes.nv_push(nv_data.nv_classPrefix + '-' + nv_data.nv_name)};return(nv_classes.nv_join(' '))};function nv_rootStyle(nv_data){return(nv_style([({nv_color:nv_data.nv_color,'nv_font-size':nv_addUnit(nv_data.nv_size),}),nv_data.nv_customStyle]))};nv_module.nv_exports = ({nv_isImage:nv_isImage,nv_rootClass:nv_rootClass,nv_rootStyle:nv_rootStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/info/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/info/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/info/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/popup/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/popup/index.wxs");
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/popup/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/popup/index.wxs");
function np_4(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();function nv_popupStyle(nv_data){return(nv_style([({'nv_z-index':nv_data.nv_zIndex,'nv_-webkit-transition-duration':nv_data.nv_currentDuration + 'ms','nv_transition-duration':nv_data.nv_currentDuration + 'ms',}),nv_data.nv_display ? null:'display: none',nv_data.nv_customStyle]))};nv_module.nv_exports = ({nv_popupStyle:nv_popupStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/popup/popup.wxml']={};
f_['./miniprogram_npm/@vant/weapp/popup/popup.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/popup/popup.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/popup/popup.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/popup/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/popup/index.wxs");
f_['./miniprogram_npm/@vant/weapp/popup/popup.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/search/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/search/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/search/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/transition/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/transition/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/transition/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/transition/index.wxs");
f_['./miniprogram_npm/@vant/weapp/transition/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/transition/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/transition/index.wxs");
function np_5(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();function nv_rootStyle(nv_data){return(nv_style([({'nv_-webkit-transition-duration':nv_data.nv_currentDuration + 'ms','nv_transition-duration':nv_data.nv_currentDuration + 'ms',}),nv_data.nv_display ? null:'display: none',nv_data.nv_customStyle]))};nv_module.nv_exports = ({nv_rootStyle:nv_rootStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['wxs'] =f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/tree-select/index.wxs");
f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['wxs']();

f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/tree-select/index.wxs");
function np_6(){var nv_module={nv_exports:{}};var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();function nv_isActive(nv_activeList,nv_itemId){if (nv_array.nv_isArray(nv_activeList)){return(nv_activeList.nv_indexOf(nv_itemId) > -1)};return(nv_activeList === nv_itemId)};nv_module.nv_exports.nv_isActive = nv_isActive;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs");
function np_7(){var nv_module={nv_exports:{}};var nv_REGEXP = nv_getRegExp('^-?\x5cd+(\x5c.\x5cd+)?$');function nv_addUnit(nv_value){if (nv_value == null){return(undefined)};return(nv_REGEXP.nv_test('' + nv_value) ? nv_value + 'px':nv_value)};nv_module.nv_exports = nv_addUnit;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/array.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/array.wxs");
function np_8(){var nv_module={nv_exports:{}};function nv_isArray(nv_array){return(nv_array && nv_array.nv_constructor === 'Array')};nv_module.nv_exports.nv_isArray = nv_isArray;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/bem.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs");
function np_9(){var nv_module={nv_exports:{}};var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();var nv_object = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/object.wxs')();var nv_PREFIX = 'van-';function nv_join(nv_name,nv_mods){nv_name = nv_PREFIX + nv_name;nv_mods = nv_mods.nv_map((function (nv_mod){return(nv_name + '--' + nv_mod)}));nv_mods.nv_unshift(nv_name);return(nv_mods.nv_join(' '))};function nv_traversing(nv_mods,nv_conf){if (!nv_conf){return};if (typeof nv_conf === 'string' || typeof nv_conf === 'number'){nv_mods.nv_push(nv_conf)} else if (nv_array.nv_isArray(nv_conf)){nv_conf.nv_forEach((function (nv_item){nv_traversing(nv_mods,nv_item)}))} else if (typeof nv_conf === 'object'){nv_object.nv_keys(nv_conf).nv_forEach((function (nv_key){nv_conf[((nt_0=(nv_key),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] && nv_mods.nv_push(nv_key)}))}};function nv_bem(nv_name,nv_conf){var nv_mods = [];nv_traversing(nv_mods,nv_conf);return(nv_join(nv_name,nv_mods))};nv_module.nv_exports = nv_bem;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/memoize.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs");
function np_10(){var nv_module={nv_exports:{}};function nv_isPrimitive(nv_value){var nv_type = typeof nv_value;return((nv_type === 'boolean' || nv_type === 'number' || nv_type === 'string' || nv_type === 'undefined' || nv_value === null))};function nv_call(nv_fn,nv_args){if (nv_args.nv_length === 2){return(nv_fn(nv_args[(0)],nv_args[(1)]))};if (nv_args.nv_length === 1){return(nv_fn(nv_args[(0)]))};return(nv_fn())};function nv_serializer(nv_args){if (nv_args.nv_length === 1 && nv_isPrimitive(nv_args[(0)])){return(nv_args[(0)])};var nv_obj = ({});for(var nv_i = 0;nv_i < nv_args.nv_length;nv_i++){nv_obj[((nt_5=('key' + nv_i),null==nt_5?undefined:'number'=== typeof nt_5?nt_5:"nv_"+nt_5))] = nv_args[((nt_6=(nv_i),null==nt_6?undefined:'number'=== typeof nt_6?nt_6:"nv_"+nt_6))]};return(nv_JSON.nv_stringify(nv_obj))};function nv_memoize(nv_fn){arguments.nv_length=arguments.length;var nv_cache = ({});return((function (){arguments.nv_length=arguments.length;var nv_key = nv_serializer(arguments);if (nv_cache[((nt_7=(nv_key),null==nt_7?undefined:'number'=== typeof nt_7?nt_7:"nv_"+nt_7))] === undefined){nv_cache[((nt_8=(nv_key),null==nt_8?undefined:'number'=== typeof nt_8?nt_8:"nv_"+nt_8))] = nv_call(nv_fn,arguments)};return(nv_cache[((nt_9=(nv_key),null==nt_9?undefined:'number'=== typeof nt_9?nt_9:"nv_"+nt_9))])}))};nv_module.nv_exports = nv_memoize;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/object.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/object.wxs");
function np_11(){var nv_module={nv_exports:{}};var nv_REGEXP = nv_getRegExp('{|}|\x22','g');function nv_keys(nv_obj){return(nv_JSON.nv_stringify(nv_obj).nv_replace(nv_REGEXP,'').nv_split(',').nv_map((function (nv_item){return(nv_item.nv_split(':')[(0)])})))};nv_module.nv_exports.nv_keys = nv_keys;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/style.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/style.wxs");
function np_12(){var nv_module={nv_exports:{}};var nv_object = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/object.wxs')();var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();function nv_kebabCase(nv_word){var nv_newWord = nv_word.nv_replace(nv_getRegExp("[A-Z]",'g'),(function (nv_i){return('-' + nv_i)})).nv_toLowerCase();return(nv_newWord)};function nv_style(nv_styles){if (nv_array.nv_isArray(nv_styles)){return(nv_styles.nv_filter((function (nv_item){return(nv_item != null && nv_item !== '')})).nv_map((function (nv_item){return(nv_style(nv_item))})).nv_join(';'))};if ('Object' === nv_styles.nv_constructor){return(nv_object.nv_keys(nv_styles).nv_filter((function (nv_key){return(nv_styles[((nt_0=(nv_key),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] != null && nv_styles[((nt_1=(nv_key),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))] !== '')})).nv_map((function (nv_key){return([nv_kebabCase(nv_key),[nv_styles[((nt_2=(nv_key),null==nt_2?undefined:'number'=== typeof nt_2?nt_2:"nv_"+nt_2))]]].nv_join(':'))})).nv_join(';'))};return(nv_styles)};nv_module.nv_exports = nv_style;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
function np_13(){var nv_module={nv_exports:{}};var nv_bem = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs')();var nv_memoize = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();nv_module.nv_exports = ({nv_bem:nv_memoize(nv_bem),nv_memoize:nv_memoize,nv_addUnit:nv_addUnit,});return nv_module.nv_exports;}

var x=['./miniprogram_npm/@vant/weapp/field/input.wxml','./miniprogram_npm/@vant/weapp/field/textarea.wxml','./miniprogram_npm/@vant/weapp/overlay/overlay.wxml','./miniprogram_npm/@vant/weapp/popup/popup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'input',['adjustPosition',0,'alwaysEmbed',1,'autoFocus',1,'bindblur',2,'bindconfirm',3,'bindfocus',4,'bindinput',5,'bindkeyboardheightchange',6,'bindtap',7,'class',8,'confirmHold',9,'confirmType',10,'cursor',11,'cursorSpacing',12,'disabled',13,'focus',14,'holdKeyboard',15,'id',16,'maxlength',17,'password',18,'placeholder',19,'placeholderClass',20,'placeholderStyle',21,'selectionEnd',22,'selectionStart',23,'type',24,'value',25],[],e,s,gg)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=_mz(z,'textarea',['adjustPosition',0,'autoFocus',1,'autoHeight',1,'bindblur',2,'bindconfirm',3,'bindfocus',4,'bindinput',5,'bindkeyboardheightchange',6,'bindlinechange',7,'bindtap',8,'class',9,'cursor',10,'cursorSpacing',11,'disableDefaultPadding',12,'disabled',13,'fixed',14,'focus',15,'holdKeyboard',16,'id',17,'maxlength',18,'placeholder',19,'placeholderClass',20,'placeholderStyle',21,'selectionEnd',22,'selectionStart',23,'showConfirmBar',24,'style',25,'value',26],[],e,s,gg)
_(r,oD)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cF=_mz(z,'van-transition',['bind:tap',0,'catch:touchmove',1,'customClass',1,'customStyle',2,'duration',3,'show',4],[],e,s,gg)
var hG=_n('slot')
_(cF,hG)
_(r,cF)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cI=_v()
_(r,cI)
if(_oz(z,0,e,s,gg)){cI.wxVkey=1
var oJ=_mz(z,'view',['bind:transitionend',1,'class',1,'style',2],[],e,s,gg)
var aL=_n('slot')
_(oJ,aL)
var lK=_v()
_(oJ,lK)
if(_oz(z,4,e,s,gg)){lK.wxVkey=1
var tM=_mz(z,'van-icon',['bind:tap',5,'class',1,'name',2],[],e,s,gg)
_(lK,tM)
}
lK.wxXCkey=1
lK.wxXCkey=3
_(cI,oJ)
}
cI.wxXCkey=1
cI.wxXCkey=3
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/field/input.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/field/input.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/field/input.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/field/input.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/field/textarea.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/field/textarea.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/field/textarea.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/field/textarea.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/overlay.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/overlay/overlay.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/overlay.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/overlay/overlay.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/popup/popup.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/popup/popup.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/popup/popup.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/popup/popup.wxml' );
	;var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__||{}
if (!__COMMON_STYLESHEETS__.hasOwnProperty('./miniprogram_npm/@vant/weapp/common/index.wxss'))__COMMON_STYLESHEETS__['./miniprogram_npm/@vant/weapp/common/index.wxss']=[".",[1],"van-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"van-multi-ellipsis--l2{-webkit-line-clamp:2}\n.",[1],"van-multi-ellipsis--l2,.",[1],"van-multi-ellipsis--l3{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}\n.",[1],"van-multi-ellipsis--l3{-webkit-line-clamp:3}\n.",[1],"van-clearfix:after{clear:both;content:\x22\x22;display:table}\n.",[1],"van-hairline,.",[1],"van-hairline--bottom,.",[1],"van-hairline--left,.",[1],"van-hairline--right,.",[1],"van-hairline--surround,.",[1],"van-hairline--top,.",[1],"van-hairline--top-bottom{position:relative}\n.",[1],"van-hairline--bottom:after,.",[1],"van-hairline--left:after,.",[1],"van-hairline--right:after,.",[1],"van-hairline--surround:after,.",[1],"van-hairline--top-bottom:after,.",[1],"van-hairline--top:after,.",[1],"van-hairline:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:\x22 \x22;left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}\n.",[1],"van-hairline--top:after{border-top-width:1px}\n.",[1],"van-hairline--left:after{border-left-width:1px}\n.",[1],"van-hairline--right:after{border-right-width:1px}\n.",[1],"van-hairline--bottom:after{border-bottom-width:1px}\n.",[1],"van-hairline--top-bottom:after{border-width:1px 0}\n.",[1],"van-hairline--surround:after{border-width:1px}\n",];
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C = __COMMON_STYLESHEETS__
function makeup(file, opt) {
var _n = typeof(file) === "string";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var styleSheetManager = window.__styleSheetManager2__
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (styleSheetManager) {
var key = (info.path || Math.random()) + ':' + suffix
if (!style) {
styleSheetManager.addItem(key, info.path);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, true);
});
}
styleSheetManager.setCss(key, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead(["[is\x3d\x22miniprogram_npm/@vant/weapp/icon/index\x22]{-webkit-align-items:center;align-items:center;display:-webkit-inline-flex;display:inline-flex;-webkit-justify-content:center;justify-content:center}\n",])();setCssToHead(["wx-ad,wx-button,wx-camera,wx-canvas,wx-checkbox,wx-checkbox-group,wx-cover-image,wx-cover-view,wx-form,wx-functional-page-navigator,wx-icon,wx-image,wx-input,wx-label,wx-live-player,wx-live-pusher,wx-map,wx-movable-area,wx-movable-view,wx-navigator,wx-open-data,wx-picker,wx-picker-view,wx-progress,wx-radio,wx-radio-group,wx-rich-text,wx-scroll-view,wx-slider,wx-swiper,wx-swiper-item,wx-switch,wx-text,wx-textarea,wx-video,wx-view,wx-web-view{box-sizing:border-box}\nbody{background:#fff;color:#273755}\nwx-scroll-view{-webkit-overflow-scrolling:touch;overflow-y:auto}\n.",[1],"list-more{height:",[0,50],"}\n.",[1],"list-more,.",[1],"list-more-all{color:#666;font-size:",[0,24],";line-height:",[0,50],";text-align:center}\n.",[1],"list-more-all{padding:",[0,30]," 0}\n.",[1],"page-bg{background:#f2f4f9;height:auto;min-height:100vh;width:",[0,750],"}\n.",[1],"van-tree-select__nav.",[1],"van-tree-select__nav{background:#fff;width:",[0,300],"!important}\n.",[1],"van-tree-select__content.",[1],"van-tree-select__content{width:",[0,390],"!important}\n.",[1],"cover-main-left{background:#fff!important;margin:0;padding:0;text-align:left;width:",[0,300],"!important}\n.",[1],"van-sidebar-item--selected,.",[1],"van-sidebar-item--selected.",[1],"van-sidebar-item--hover{background:rgba(0,82,217,.4)!important}\n.",[1],"van-tree-select__content{-webkit-flex:none!important;flex:none!important}\n.",[1],"van-sidebar-item{border-left:none!important}\n.",[1],"van-ellipsis{font-weight:400!important;text-align:left}\n.",[1],"van-tree-select__item--active{background:rgba(0,82,217,.4)!important;color:#000!important}\n.",[1],"van-tree-select__selected{display:none!important}\n.",[1],"none-button{background-color:#fff}\n.",[1],"none-button::after{border:none}\n.",[1],"detail-page-button{-webkit-align-items:center;align-items:center;background:#fff;bottom:0;box-shadow:",[0,0]," ",[0,0]," ",[0,20]," ",[0,0]," hsla(0,0%,75%,.5);display:-webkit-flex;display:flex;height:",[0,110],";-webkit-justify-content:space-around;justify-content:space-around;left:0;position:fixed;width:",[0,750],";z-index:3}\n.",[1],"detail-page-button-around{-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"detail-btn{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:",[0,60],";-webkit-justify-content:center;justify-content:center;width:",[0,172],"}\n.",[1],"detail-btn-long{width:",[0,226],"}\n.",[1],"detail-btn-long-bg{background:#0052d9;border-radius:0;height:",[0,110],";padding:0;width:",[0,228],"}\n.",[1],"detail-btn:last-child{border-right:none}\n.",[1],"detail-page-button-line{background:rgba(0,82,217,.2);height:",[0,60],";width:",[0,2],"}\n.",[1],"detail-btn .",[1],"detail-btn-image{height:",[0,40],";margin-right:",[0,8],";width:",[0,40],"}\n.",[1],"detail-btn .",[1],"detail-btn-text{color:#0052d9;font-size:",[0,28],";line-height:",[0,42],"}\n.",[1],"detail-btn-long-bg .",[1],"detail-btn-text{color:#fff}\n.",[1],"page-inner{padding-top:",[0,30],";position:relative}\n.",[1],"icon-30{height:",[0,30],";width:",[0,30],"}\n.",[1],"error-text{-webkit-align-items:center;align-items:center;color:#333;display:-webkit-flex;display:flex;font-size:",[0,42],";height:auto;-webkit-justify-content:center;justify-content:center;line-height:",[0,60],";position:fixed;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:",[0,750],"}\n.",[1],"wx-switch-input{height:",[0,56],"!important;width:",[0,100],"!important}\n.",[1],"wx-switch-input::before{height:",[0,53],"!important;width:",[0,96],"!important}\n.",[1],"wx-switch-input::after{height:",[0,53],"!important;width:",[0,57],"!important}\n.",[1],"c-page.",[1],"top-msg-page{padding-top:",[0,148],"}\n.",[1],"menu-page.",[1],"search-view{background:#efefef;height:",[0,127],";left:0;padding:",[0,16]," ",[0,28],";position:fixed;top:0;width:",[0,750],";z-index:2}\n.",[1],"menu-page.",[1],"search-view .",[1],"srarch{-webkit-align-items:center;align-items:center;background:#fff;border-radius:",[0,20],";display:-webkit-flex;display:flex;height:",[0,95],";-webkit-justify-content:space-between;justify-content:space-between;padding:0 ",[0,34]," 0 ",[0,30],";width:100%}\n.",[1],"menu-page.",[1],"search-view .",[1],"srarch wx-text{color:#999;font-size:",[0,28],";line-height:",[0,80],"}\n.",[1],"menu-page.",[1],"search-view .",[1],"srarch wx-image{height:",[0,46],";vertical-align:top;width:",[0,45],"}\n.",[1],"share-btn::after{border:none}\n.",[1],"share-btn{background-color:transparent;padding:0}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:1:3559)",{path:"./app.wxss"})();;__wxAppCode__['miniprogram_npm/@vant/weapp/field/input.wxss'] = setCssToHead([],undefined,{path:"./miniprogram_npm/@vant/weapp/field/input.wxss"});__wxAppCode__['miniprogram_npm/@vant/weapp/field/textarea.wxss'] = setCssToHead([],undefined,{path:"./miniprogram_npm/@vant/weapp/field/textarea.wxss"});__wxAppCode__['miniprogram_npm/@vant/weapp/overlay/overlay.wxss'] = setCssToHead([],undefined,{path:"./miniprogram_npm/@vant/weapp/overlay/overlay.wxss"});__wxAppCode__['miniprogram_npm/@vant/weapp/popup/popup.wxss'] = setCssToHead([],undefined,{path:"./miniprogram_npm/@vant/weapp/popup/popup.wxss"});;}var __pageFrameEndTime__=Date.now();__mainPageFrameReady__();