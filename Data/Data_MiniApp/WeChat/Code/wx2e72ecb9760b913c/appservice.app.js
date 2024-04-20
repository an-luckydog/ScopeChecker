var __wxAppData=__wxAppData||{};var __wxRoute=__wxRoute||"";var __wxRouteBegin=__wxRouteBegin||"";var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __wxAppCurrentFile__=__wxAppCurrentFile__||"";var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};
	var __wxAppConsole__ = console;definePlugin("plugin://wxaae6519cee98d824", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages, console, requireMiniProgram) {            var __vd_version_info__=__vd_version_info__||{};            if (typeof console === 'undefined') {console=__wxAppConsole__; };			
			/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wxaae6519cee98d824=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wxaae6519cee98d824:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx_wxaae6519cee98d824 || [];
function gz$gwx_wxaae6519cee98d824_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxaae6519cee98d824_1)return __WXML_GLOBAL__.ops_cached.$gwx_wxaae6519cee98d824_1
__WXML_GLOBAL__.ops_cached.$gwx_wxaae6519cee98d824_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isReady']])
Z([[2,'!'],[[7],[3,'isPC']]])
Z([3,'widget'])
Z([[7],[3,'postHeight']])
Z([[7],[3,'postWidth']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxaae6519cee98d824_1);return __WXML_GLOBAL__.ops_cached.$gwx_wxaae6519cee98d824_1
}
function gz$gwx_wxaae6519cee98d824_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxaae6519cee98d824_2)return __WXML_GLOBAL__.ops_cached.$gwx_wxaae6519cee98d824_2
__WXML_GLOBAL__.ops_cached.$gwx_wxaae6519cee98d824_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_wxaae6519cee98d824_2);return __WXML_GLOBAL__.ops_cached.$gwx_wxaae6519cee98d824_2
}
__WXML_GLOBAL__.ops_set.$gwx_wxaae6519cee98d824=z;
__WXML_GLOBAL__.ops_init.$gwx_wxaae6519cee98d824=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/cell/cell.wxml','./components/wxml-to-canvas/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wxaae6519cee98d824_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
var xC=_v()
_(r,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'wxml-to-canvas',['class',2,'height',1,'width',2],[],e,s,gg)
_(xC,oD)
}
oB.wxXCkey=1
xC.wxXCkey=1
xC.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_wxaae6519cee98d824_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}

				global.__wxAppCode__['plugin-private://wxaae6519cee98d824/components/cell/cell.json'] = {"component":true,"usingComponents":{"wxml-to-canvas":"../wxml-to-canvas/index"}};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxaae6519cee98d824/components/cell/cell.wxml'] = [$gwx_wxaae6519cee98d824, './components/cell/cell.wxml' ];else global.__wxAppCode__['plugin-private://wxaae6519cee98d824/components/cell/cell.wxml'] = $gwx_wxaae6519cee98d824( './components/cell/cell.wxml' );
		global.__wxAppCode__['plugin-private://wxaae6519cee98d824/components/wxml-to-canvas/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxaae6519cee98d824/components/wxml-to-canvas/index.wxml'] = [$gwx_wxaae6519cee98d824, './components/wxml-to-canvas/index.wxml' ];else global.__wxAppCode__['plugin-private://wxaae6519cee98d824/components/wxml-to-canvas/index.wxml'] = $gwx_wxaae6519cee98d824( './components/wxml-to-canvas/index.wxml' );
		global.__wxAppCode__['plugin-private://wxaae6519cee98d824/package.json'] = {"name":"chatgroup-plugin-miniprogram","version":"1.0.0","description":"","main":"index.js","directories":{"lib":"lib"},"scripts":{"test":"echo \"Error: no test specified\" \x26\x26 exit 1"},"author":"","license":"ISC","dependencies":{"widget-ui":"^1.0.2"},"__warning__":"无效的 page.json [\"name\"]、page.json [\"version\"]、page.json [\"description\"]、page.json [\"main\"]、page.json [\"directories\"]、page.json [\"scripts\"]、page.json [\"author\"]、page.json [\"license\"]、page.json [\"dependencies\"]"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxaae6519cee98d824/package.wxml'] = [$gwx_wxaae6519cee98d824, './package.wxml' ];else global.__wxAppCode__['plugin-private://wxaae6519cee98d824/package.wxml'] = $gwx_wxaae6519cee98d824( './package.wxml' );
		global.__wxAppCode__['plugin-private://wxaae6519cee98d824/plugin.json'] = {"publicComponents":{"cell":"components/cell/cell"},"main":"index.js"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxaae6519cee98d824/plugin.wxml'] = [$gwx_wxaae6519cee98d824, './plugin.wxml' ];else global.__wxAppCode__['plugin-private://wxaae6519cee98d824/plugin.wxml'] = $gwx_wxaae6519cee98d824( './plugin.wxml' );
	
				define("@babel/runtime/helpers/Objectvalues.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
Object.values||(Object.values=function(e){if(e!==Object(e))throw new TypeError("Object.values called on a non-object");var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(e[t]);return r}); 
 			}); 
		define("@babel/runtime/helpers/arrayLikeToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray; 
 			}); 
		define("@babel/runtime/helpers/assertThisInitialized.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}module.exports=_assertThisInitialized; 
 			}); 
		define("@babel/runtime/helpers/asyncToGenerator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function asyncGeneratorStep(n,e,r,t,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void r(n)}i.done?e(u):Promise.resolve(u).then(t,o)}function _asyncToGenerator(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var a=n.apply(e,r);function c(n){asyncGeneratorStep(a,t,o,c,i,"next",n)}function i(n){asyncGeneratorStep(a,t,o,c,i,"throw",n)}c(void 0)}))}}module.exports=_asyncToGenerator; 
 			}); 
		define("@babel/runtime/helpers/classCallCheck.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _classCallCheck(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}module.exports=_classCallCheck; 
 			}); 
		define("@babel/runtime/helpers/createClass.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}module.exports=_createClass; 
 			}); 
		define("@babel/runtime/helpers/createForOfIteratorHelper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var unsupportedIterableToArray=require("./unsupportedIterableToArray");function _createForOfIteratorHelper(r,e){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return u=r.done,r},e:function(r){i=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}module.exports=_createForOfIteratorHelper; 
 			}); 
		define("@babel/runtime/helpers/createSuper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var getPrototypeOf=require("./getPrototypeOf"),isNativeReflectConstruct=require("./isNativeReflectConstruct"),possibleConstructorReturn=require("./possibleConstructorReturn");function _createSuper(t){var e=isNativeReflectConstruct();return function(){var r,o=getPrototypeOf(t);if(e){var s=getPrototypeOf(this).constructor;r=Reflect.construct(o,arguments,s)}else r=o.apply(this,arguments);return possibleConstructorReturn(this,r)}}module.exports=_createSuper; 
 			}); 
		define("@babel/runtime/helpers/defineProperty.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=_defineProperty; 
 			}); 
		define("@babel/runtime/helpers/getPrototypeOf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _getPrototypeOf(t){return module.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}module.exports=_getPrototypeOf; 
 			}); 
		define("@babel/runtime/helpers/inherits.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var setPrototypeOf=require("./setPrototypeOf");function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&setPrototypeOf(e,t)}module.exports=_inherits; 
 			}); 
		define("@babel/runtime/helpers/interopRequireDefault.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}module.exports=_interopRequireDefault; 
 			}); 
		define("@babel/runtime/helpers/isNativeReflectConstruct.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}module.exports=_isNativeReflectConstruct; 
 			}); 
		define("@babel/runtime/helpers/objectSpread2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var defineProperty=require("./defineProperty");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports=_objectSpread2; 
 			}); 
		define("@babel/runtime/helpers/possibleConstructorReturn.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var _typeof=require("./typeof"),assertThisInitialized=require("./assertThisInitialized");function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?assertThisInitialized(e):t}module.exports=_possibleConstructorReturn; 
 			}); 
		define("@babel/runtime/helpers/setPrototypeOf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _setPrototypeOf(t,o){return module.exports=_setPrototypeOf=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},_setPrototypeOf(t,o)}module.exports=_setPrototypeOf; 
 			}); 
		define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _typeof(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=_typeof=function(o){return typeof o}:module.exports=_typeof=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof; 
 			}); 
		define("@babel/runtime/helpers/unsupportedIterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray; 
 			}); 
		define("@babel/runtime/regenerator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
!function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof module,h=t.regeneratorRuntime;if(h)u&&(module.exports=h);else{(h=t.regeneratorRuntime=u?module.exports:{}).wrap=w;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={},v={};v[i]=function(){return this};var d=Object.getPrototypeOf,g=d&&d(d(P([])));g&&g!==e&&n.call(g,i)&&(v=g);var m=b.prototype=x.prototype=Object.create(v);E.prototype=m.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},h.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[a]=function(){return this},h.AsyncIterator=j,h.async=function(t,r,e,n){var o=new j(w(t,r,e,n));return h.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(m),m[c]="Generator",m[i]=function(){return this},m.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},h.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=L(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function L(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function x(){}function E(){}function b(){}function _(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function j(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=L(t[e],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")()); 
 			}); 
		define("api/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t="init data";module.exports={getData:function(){return t},setData:function(a){t=a}}; 
 			}); 
		define("components/cell/wxmlTocanvasData.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../@babel/runtime/helpers/defineProperty");module.exports={getPostStyle:function(t){var i,n=wx.getSystemInfoSync().screenWidth,o=n-24-24,r=t.cardHeight,a=t.postHeight,c=t.groupNameHeight;return{container:{backgroundColor:"#F5F6F7",width:n,height:a,paddingTop:34,paddingLeft:24,paddingRight:24,flexDirection:"column",alignItems:"center"},card:{flexDirection:"column",backgroundColor:"#FFFFFF",paddingTop:50,paddingBottom:32,marginBottom:32,borderRadius:10,width:o,height:r},infoContainer:{width:o,paddingLeft:40,paddingRight:40,marginBottom:60},avatar:{width:48,height:48,borderRadius:4,marginBottom:16},groupname:(i={fontWeight:600,fontSize:20,lineHeight:28,color:"#000000",height:28,width:o-80},e(i,"height",c),e(i,"marginBottom",4),i),desc:{fontSize:13,lineHeight:18,height:18,width:o-40,color:"#333333"},qrcodeContainer:{flexDirection:"column",alignItems:"center",width:o,paddingBottom:32},qrcode:{width:187,height:187},qrcodeText:{fontSize:13,lineHeight:18,height:18,width:o,textAlign:"center",color:"#808080",marginTop:36},logo:{width:96,height:22}}},getPostWxml:function(e){return console.log(e),'<view class="container">\n                <view class="card">\n                <view class="info-container">\n                    <image class="avatar" src="'.concat(e.headurl,'"></image>\n                    <text class="groupname">').concat(e.name,'</text>\n                    <text class="desc">\u4f7f\u7528\u5fae\u4fe1\u6216\u4f01\u4e1a\u5fae\u4fe1\u626b\u7801\u52a0\u5165</text>\n                </view>\n                    \n                    <view class="qrcode-container">\n                        <image class="qrcode" src="').concat(e.qrcodeurl,'"></image>\n                        <text class="qrcode-text">\u8be5\u4e8c\u7ef4\u78017\u5929\u5185\u6709\u6548\uff0c\u91cd\u65b0\u8fdb\u5165\u5c06\u66f4\u65b0</text>\n                    </view>\n                </view>\n\n                <image class="logo" src="https://wwcdn.weixin.qq.com/node/wework/images/Logo.c64e560614.png"></image>\n\n            </view>\n            ')}}; 
 			}); 
		define("components/wxml-to-canvas/draw.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");require("../../@babel/runtime/helpers/Objectvalues");var t=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),r=e(require("../../@babel/runtime/regenerator")),a=require("../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../@babel/runtime/helpers/classCallCheck"),n=require("../../@babel/runtime/helpers/createClass"),o=function(){function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];i(this,e),this.ctx=t,this.canvas=r||null,this.use2dCanvas=a}var o,l;return n(e,[{key:"roundRect",value:function(e,t,r,a,i){var n=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],o=arguments.length>6&&void 0!==arguments[6]&&arguments[6];if(!(i<0)){var l=this.ctx;l.beginPath(),l.arc(e+i,t+i,i,Math.PI,3*Math.PI/2),l.arc(e+r-i,t+i,i,3*Math.PI/2,0),l.arc(e+r-i,t+a-i,i,0,Math.PI/2),l.arc(e+i,t+a-i,i,Math.PI/2,Math.PI),l.lineTo(e,t+i),o&&l.stroke(),n&&l.fill()}}},{key:"drawView",value:function(e,t){var r=this.ctx,a=e.left,i=e.top,n=e.width,o=e.height,l=t.borderRadius,s=void 0===l?0:l,c=t.borderWidth,u=void 0===c?0:c,d=t.borderColor,h=t.color,f=void 0===h?"#000":h,v=t.backgroundColor,b=void 0===v?"transparent":v;r.save(),u>0&&(r.fillStyle=d||f,this.roundRect(a,i,n,o,s)),r.fillStyle=b;var p=n-2*u,w=o-2*u,x=s-u>=0?s-u:0;this.roundRect(a+u,i+u,p,w,x),r.restore()}},{key:"drawImage",value:(l=a(r.default.mark((function e(t,a,i){var n=this;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,r){var o=n.ctx,l=n.canvas,s=i.borderRadius,c=void 0===s?0:s,u=a.left,d=a.top,h=a.width,f=a.height;o.save(),n.roundRect(u,d,h,f,c,!1,!1),o.clip();var v=function(t){if(n.use2dCanvas){var a=l.createImage();a.onload=function(){o.drawImage(a,u,d,h,f),o.restore(),e()},a.onerror=function(){r(new Error("createImage fail: ".concat(t)))},a.src=t}else o.drawImage(t,u,d,h,f),o.restore(),e()},b=/^wxfile:\/\//.test(t),p=/^https?:\/\//.test(t);b?v(t):p?wx.downloadFile({url:t,success:function(e){200===e.statusCode?v(e.tempFilePath):r(new Error("downloadFile:fail ".concat(t)))},fail:function(){r(new Error("downloadFile:fail ".concat(t)))}}):r(new Error("image format error: ".concat(t)))}));case 2:case"end":return e.stop()}}),e)}))),function(e,t,r){return l.apply(this,arguments)})},{key:"drawText",value:function(e,r,a){var i=this.ctx,n=r.left,o=r.top,l=r.width,s=r.height,c=a.color,u=void 0===c?"#000":c,d=a.lineHeight,h=void 0===d?"1.4em":d,f=a.fontSize,v=void 0===f?14:f,b=a.fontWeight,p=void 0===b?"normal":b,w=a.textAlign,x=void 0===w?"left":w,m=a.verticalAlign,g=void 0===m?"top":m,k=a.backgroundColor,y=void 0===k?"transparent":k;if("string"==typeof h&&(h=Math.ceil(parseFloat(h.replace("em"))*v)),e&&!(h>s)){switch(i.save(),i.textBaseline="top",i.font="".concat(p," ").concat(v,"px sans-serif"),i.textAlign=x,i.fillStyle=y,this.roundRect(n,o,l,s,0),i.fillStyle=u,x){case"left":break;case"center":n+=.5*l;break;case"right":n+=l}var I=i.measureText(e).width,M=Math.ceil(I/l)*h,C=Math.ceil((s-M)/2);switch(C<0&&(C=0),g){case"top":break;case"middle":o+=C;break;case"bottom":o+=2*C}var P=Math.ceil((h-v)/2);if(I<=l)i.fillText(e,n,o+P);else{var T,q=e.split(""),R=o,F="",S=t(q);try{for(S.s();!(T=S.n()).done;){var E=T.value,A=F+E;if(i.measureText(A).width>l){if(i.fillText(F,n,o+P),F=E,(o+=h)+h>R+s)break}else F=A}}catch(e){S.e(e)}finally{S.f()}o+h<=R+s&&i.fillText(F,n,o+P),i.restore()}}}},{key:"drawNode",value:(o=a(r.default.mark((function e(t){var a,i,n,o,l,s,c,u,d,h;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.layoutBox,i=t.computedStyle,n=t.name,o=t.attributes,l=o.src,s=o.text,"view"!==n){e.next=6;break}this.drawView(a,i),e.next=12;break;case 6:if("image"!==n){e.next=11;break}return e.next=9,this.drawImage(l,a,i);case 9:e.next=12;break;case 11:"text"===n&&this.drawText(s,a,i);case 12:c=Object.values(t.children),u=0,d=c;case 14:if(!(u<d.length)){e.next=21;break}return h=d[u],e.next=18,this.drawNode(h);case 18:u++,e.next=14;break;case 21:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})}]),e}();module.exports={Draw:o}; 
 			}); 
		define("components/wxml-to-canvas/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={hex:function(t){var r=null;return!/^#/.test(t)||7!==t.length&&9!==t.length?null!==(r=/^(rgb|rgba)\((.+)\)/.exec(t))?"#"+r[2].split(",").map((function(t,r){return t=t.trim(),1===(t=(t=3===r?Math.floor(255*parseFloat(t)):parseInt(t,10)).toString(16)).length&&(t="0"+t),t})).join(""):"#00000000":t},splitLineToCamelCase:function(t){return t.split("-").map((function(t,r){return 0===r?t:t[0].toUpperCase()+t.slice(1)})).join("")},compareVersion:function(t,r){t=t.split("."),r=r.split(".");for(var n=Math.max(t.length,r.length);t.length<n;)t.push("0");for(;r.length<n;)r.push("0");for(var e=0;e<n;e++){var l=parseInt(t[e],10),i=parseInt(r[e],10);if(l>i)return 1;if(l<i)return-1}return 0}}; 
 			}); 
		define("components/wxml-to-canvas/widget.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";require("../../@babel/runtime/helpers/Objectvalues");var e=require("../../@babel/runtime/helpers/createClass"),t=require("../../@babel/runtime/helpers/classCallCheck"),r=require("../../@babel/runtime/helpers/inherits"),i=require("../../@babel/runtime/helpers/createSuper"),n=require("widget-ui"),a=require("./utils").splitLineToCamelCase,s=function(e){r(s,n);var a=i(s);function s(e){var r;return t(this,s),(r=a.call(this,e.style)).name=e.name,r.attributes=e.attributes,r}return s}(),u=function(){function r(e,i){t(this,r),this.xom=e,this.style=i,this.inheritProps=["fontSize","lineHeight","textAlign","verticalAlign","color"]}return e(r,[{key:"init",value:function(){return this.container=this.create(this.xom),this.container.layout(),this.inheritStyle(this.container),this.container}},{key:"inheritStyle",value:function(e){var t=this,r=e.parent||null,i=e.children||{},n=e.computedStyle;r&&this.inheritProps.forEach((function(e){n[e]=n[e]||r.computedStyle[e]})),Object.values(i).forEach((function(e){t.inheritStyle(e)}))}},{key:"create",value:function(e){var t=this,r=(e.attributes.class||"").split(" ");r=r.map((function(e){return a(e.trim())}));var i={};r.forEach((function(e){Object.assign(i,t.style[e]||{})}));for(var n={name:e.name,style:i},u={},l=0,c=Object.keys(e.attributes);l<c.length;l++){var h=c[l],o=e.attributes[h],b=a(h);u[b]=""===o||"true"===o||"false"!==o&&o}u.text=e.content,n.attributes=u;var f=new s(n);return e.children.forEach((function(e){var r=t.create(e);f.add(r)})),f}}]),r}();module.exports={Widget:u}; 
 			}); 
		define("components/wxml-to-canvas/xml-parser.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(r){return r=(r=r.trim()).replace(/<!--[\s\S]*?-->/g,""),{declaration:t(),root:n()};function t(){if(u(/^<\?xml\s*/)){for(var r={attributes:{}};!i()&&!a("?>");){var t=e();if(!t)return r;r.attributes[t.name]=t.value}return u(/\?>\s*/),r}}function n(){var r=u(/^<([\w-:.]+)\s*/);if(r){for(var t,s={name:r[1],attributes:{},children:[]};!(i()||a(">")||a("?>")||a("/>"));){var f=e();if(!f)return s;s.attributes[f.name]=f.value}if(u(/^\s*\/>\s*/))return s;for(u(/\??>\s*/),s.content=function(){var r=u(/^([^<]*)/);return r?r[1]:""}();t=n();)s.children.push(t);return u(/^<\/[\w-:.]+>\s*/),s}}function e(){var r,t=u(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);if(t)return{name:t[1],value:(r=t[2],r.replace(/^['"]|['"]$/g,""))}}function u(t){var n=r.match(t);if(n)return r=r.slice(n[0].length),n}function i(){return 0==r.length}function a(t){return 0==r.indexOf(t)}}; 
 			}); 
		define("config/app.config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={request:{api_prefix:"https://work.weixin.qq.com/cgi-bin/mng/",max_try:3,app_type:4},setAppType:function(e){this.request.app_type=e},debug:!1}; 
 			}); 
		define("index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var a=require("./api/data.js");module.exports={getData:a.getData,setData:a.setData}; 
 			}); 
		define("lib/conn/conn.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.conn=void 0;var e={};exports.conn=e;var r=!0,n=function(){return"["+o(new Date,"%Y-%M-%d %h:%m:%s",!0)+"]"},o=function(e,r,n){var o=e.getFullYear(),t=e.getMonth()+1,a=e.getDate(),c=e.getHours(),l=e.getMinutes(),s=e.getSeconds();return n&&(t=t<10?"0"+t:t,a=a<10?"0"+a:a,c=c<10?"0"+c:c,l=l<10?"0"+l:l,s=s<10?"0"+s:s),r=(r=r||"%Y-%M-%d %h:%m:%s").replace(/%Y/g,o).replace(/%M/g,t).replace(/%d/g,a).replace(/%h/g,c).replace(/%m/g,l).replace(/%s/g,s)};["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach((function(o){e[o]=function(){var e="";r&&((e=arguments).length>0&&(e[0]=n()+JSON.stringify(e[0])),console[o].apply(console,e))}}),Function.prototype.bind),e.enableConsole=function(e){r=!!e};var t={conn:e};exports.default=t; 
 			}); 
		define("lib/request/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkLogin=exports.doLogin=exports.request=void 0;var e=require("../../config/app.config"),o=require("../storage/storage"),t=!1,n=[],r=e.request.max_try||3,s=e.request.app_type,i=function(e){var o=u();return Object.assign(e||{},{vid:o.vid,skey:o.skey})},a=function(e,o){var t;return 200===e.statusCode||(t=/^5\d+/g.test(e.statusCode)?"\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5":"\u8bf7\u786e\u4fdd\u7f51\u7edc\u901a\u7545\uff0c\u5e76\u91cd\u8bd5",o&&o.silent||wx.showModal({showCancel:!1,title:"\u7f51\u7edc\u5f02\u5e38",content:t,confirmText:"\u786e\u5b9a"}),!1)},c=function(e){return new Promise((function(o,t){u().skey||!0===e.ignore?o():t(new Error("empty session"))}))};exports.checkLogin=c;var u=function(){return o.getStorage("session",!1)||{}},d=function(t){var n=o.getStorage("freego",!1)||{};return new Promise((function(t,r){new Promise((function(e,o){wx.login({success:e,fail:o})})).then((function(i){console.info("codeInfo %o",i),wx.request({url:e.request.api_prefix+"xcx/login",method:"POST",dataType:"json",data:{type:s,code:i.code},header:{cookie:n.cookie||"","Content-Type":"application/x-www-form-urlencoded"},success:function(e){var n,i=e.data.data;console.log("login response: %o",i),a(e)&&i&&"skey"in i?(n={gid:i.gid,skey:i.skey,vid:i.vid,type:s,corpname:i.corp_name},o.setStorage("session",n,!1),t(e)):r(e)},fail:r})})).catch((function(e){wx.showModal({content:"\u767b\u5f55\u5931\u8d25",showCancel:!1})}))}))};exports.doLogin=d;exports.request=function(s){var u=o.getStorage("freego",!1)||{},l=function(o,c){s.success=function(e){console.log("request sucess callback:%o",e),a(e,s)?e.data&&e.data.result&&-3===e.data.result.errCode?(s.tryTimes=s.tryTimes||0,s.tryTimes++,s.tryTimes<r?t?n.push(s):(t=!0,n=[],d().then((function(){t=!1,s.data=i(s.data),wx.request(s),n.forEach((function(e,o){e.data=i(e.data),wx.request(e)}))})).catch((function(){t=!1}))):o({data:{retcode:-102,retmsg:"login abort"}})):o(e):c(e)},s.fail=function(e){c(e)},s.url=/^http/g.test(s.url)?s.url:e.request.api_prefix+s.url,s.data=i(s.data),s.method=s.method||"GET",s.header=Object.assign(s.header||{},{cookie:u.cookie||"","Content-Type":"application/json"}),console.log("request options:%o",s),wx.request(s)};return new Promise((function(e,o){c(s).then((function(){l(e,o)})).catch((function(){d().then((function(){l(e,o)})).catch((function(e){console.log("login error %o",e),wx.showModal({content:"\u767b\u5f55\u5931\u8d25",showCancel:!1})}))}))}))}; 
 			}); 
		define("lib/storage/storage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.flushCacheData=exports.clearStorage=exports.removeStorage=exports.getStorage=exports.setStorage=exports.initNsStorageByKey=exports.initNameSpace=void 0;var t=e(require("../conn/conn")),r="WEWORK_STORAGE_CACHE",a="",o={},n={};function l(){try{o=wx.getStorageSync(r)||{}}catch(e){o={}}}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default_ns",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;l();var r=a,i=o[r]||{};a="default_ns",o[e]?n=o[e]:(n=o[e]={},u());try{wx.setStorageSync("WEWORK_NS_KEY",a)}catch(e){}t&&t(r,i)};exports.initNameSpace=i;var s=function(e){var t,r=e.split(".");if(!n&&r.length>0)return"";t=n;for(var a=0;a<r.length-1;a++)void 0===t[r[a]]&&(t[r[a]]={}),t=t[r[a]];return t};exports.initNsStorageByKey=s;var g=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(r){var l=s(e),i=e.split(".");l[i[i.length-1]]=t,n&&u(a)}else o[e]=t,u(!0)};exports.setStorage=g;var c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t){var r=s(e),a=e.split(".");return r[a[a.length-1]]}return o[e]};exports.getStorage=c;var v=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t){var r=s(e),a=e.split(".");delete r[a[a.length-1]],u()}else delete n[e],u()};exports.removeStorage=v;var S=function(e){var r;try{e?(delete s(e)[(r=e.split("."))[r.length-1]],u()):(wx.clearStorageSync(),i(a))}catch(e){t.default.log(e)}};exports.clearStorage=S;var u=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];try{e?wx.setStorageSync(r,o):(wx.setStorage({key:r,data:o}),console.log("storage %o",o))}catch(e){S()}};exports.flushCacheData=u;try{a=wx.getStorageSync("WEWORK_NS_KEY")||""}catch(e){a=""}i(a||"default_ns");var p={initNameSpace:i,setStorage:g,getStorage:c,clearStorage:S,removeStorage:v,flushCacheData:u};exports.default=p; 
 			}); 
		define("lib/util/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.compareVersion=function(e,r){e=e.split("."),r=r.split(".");var t=Math.max(e.length,r.length);for(;e.length<t;)e.push("0");for(;r.length<t;)r.push("0");for(var n=0;n<t;n++){var s=parseInt(e[n]),o=parseInt(r[n]);if(s>o)return 1;if(s<o)return-1}return 0}; 
 			}); 
		define("miniprogram_npm/eventemitter3/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e,t,n=require("../../@babel/runtime/helpers/typeof");module.exports=(e={},t=function(t,r){if(!e[t])return require(r);if(!e[t].status){var o=e[t].m;o._exports=o._tempexports;var s=Object.getOwnPropertyDescriptor(o,"exports");s&&s.configurable&&Object.defineProperty(o,"exports",{set:function(e){"object"===n(e)&&e!==o._exports&&(o._exports.__proto__=e.__proto__,Object.keys(e).forEach((function(t){o._exports[t]=e[t]}))),o._tempexports=e},get:function(){return o._tempexports}}),e[t].status=1,e[t].func(e[t].req,o,o.exports)}return e[t].m.exports},function(t,n,r){e[t]={status:0,func:n,req:r,m:{exports:{},_tempexports:{}}}}(1623395730414,(function(e,t,n){var r=Object.prototype.hasOwnProperty,o="~";function s(){}function i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function c(e,t,n,r,s){if("function"!=typeof n)throw new TypeError("The listener must be a function");var c=new i(n,r||e,s),f=o?o+t:t;return e._events[f]?e._events[f].fn?e._events[f]=[e._events[f],c]:e._events[f].push(c):(e._events[f]=c,e._eventsCount++),e}function f(e,t){0==--e._eventsCount?e._events=new s:delete e._events[t]}function u(){this._events=new s,this._eventsCount=0}Object.create&&(s.prototype=Object.create(null),(new s).__proto__||(o=!1)),u.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(o?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},u.prototype.listeners=function(e){var t=o?o+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,s=n.length,i=new Array(s);r<s;r++)i[r]=n[r].fn;return i},u.prototype.listenerCount=function(e){var t=o?o+e:e,n=this._events[t];return n?n.fn?1:n.length:0},u.prototype.emit=function(e,t,n,r,s,i){var c=o?o+e:e;if(!this._events[c])return!1;var f,u,p=this._events[c],a=arguments.length;if(p.fn){switch(p.once&&this.removeListener(e,p.fn,void 0,!0),a){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,t),!0;case 3:return p.fn.call(p.context,t,n),!0;case 4:return p.fn.call(p.context,t,n,r),!0;case 5:return p.fn.call(p.context,t,n,r,s),!0;case 6:return p.fn.call(p.context,t,n,r,s,i),!0}for(u=1,f=new Array(a-1);u<a;u++)f[u-1]=arguments[u];p.fn.apply(p.context,f)}else{var v,l=p.length;for(u=0;u<l;u++)switch(p[u].once&&this.removeListener(e,p[u].fn,void 0,!0),a){case 1:p[u].fn.call(p[u].context);break;case 2:p[u].fn.call(p[u].context,t);break;case 3:p[u].fn.call(p[u].context,t,n);break;case 4:p[u].fn.call(p[u].context,t,n,r);break;default:if(!f)for(v=1,f=new Array(a-1);v<a;v++)f[v-1]=arguments[v];p[u].fn.apply(p[u].context,f)}}return!0},u.prototype.on=function(e,t,n){return c(this,e,t,n,!1)},u.prototype.once=function(e,t,n){return c(this,e,t,n,!0)},u.prototype.removeListener=function(e,t,n,r){var s=o?o+e:e;if(!this._events[s])return this;if(!t)return f(this,s),this;var i=this._events[s];if(i.fn)i.fn!==t||r&&!i.once||n&&i.context!==n||f(this,s);else{for(var c=0,u=[],p=i.length;c<p;c++)(i[c].fn!==t||r&&!i[c].once||n&&i[c].context!==n)&&u.push(i[c]);u.length?this._events[s]=1===u.length?u[0]:u:f(this,s)}return this},u.prototype.removeAllListeners=function(e){var t;return e?(t=o?o+e:e,this._events[t]&&f(this,t)):(this._events=new s,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=o,u.EventEmitter=u,void 0!==t&&(t.exports=u)}),(function(e){return t({}[e],e)})),t(1623395730414)); 
 			}); 
		define("miniprogram_npm/widget-ui/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t,e,o=require("../../@babel/runtime/helpers/typeof");module.exports=(t={},e=function(e,r){if(!t[e])return require(r);if(!t[e].status){var i=t[e].m;i._exports=i._tempexports;var l=Object.getOwnPropertyDescriptor(i,"exports");l&&l.configurable&&Object.defineProperty(i,"exports",{set:function(t){"object"===o(t)&&t!==i._exports&&(i._exports.__proto__=t.__proto__,Object.keys(t).forEach((function(e){i._exports[e]=t[e]}))),i._tempexports=t},get:function(){return i._tempexports}}),t[e].status=1,t[e].func(t[e].req,i,i.exports)}return t[e].m.exports},function(e,o,r){t[e]={status:0,func:o,req:r,m:{exports:{},_tempexports:{}}}}(1623395730415,(function(t,e,r){!function(t,i){if("object"==o(r)&&"object"==o(e))e.exports=i();else if("function"==typeof define&&define.amd)define([],i);else{var l=i();for(var n in l)("object"==o(r)?r:t)[n]=l[n]}}(this,(function(){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==o(t)&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)r.d(i,l,function(e){return t[e]}.bind(null,l));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,o){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(o(1)),l=o(2),n=0,a=function(){function t(e){var o=this;void 0===e&&(e={}),this.parent=null,this.id=t.uuid(),this.style={},this.computedStyle={},this.lastComputedStyle={},this.children={},this.layoutBox={left:0,top:0,width:0,height:0},e=Object.assign(l.getDefaultStyle(),e),this.computedStyle=Object.assign(l.getDefaultStyle(),e),this.lastComputedStyle=Object.assign(l.getDefaultStyle(),e),Object.keys(e).forEach((function(t){Object.defineProperty(o.style,t,{configurable:!0,enumerable:!0,get:function(){return e[t]},set:function(r){r!==e[t]&&void 0!==r&&(o.lastComputedStyle=o.computedStyle[t],e[t]=r,o.computedStyle[t]=r,l.scalableStyles.includes(t)&&o.style.scale&&(o.computedStyle[t]=r*o.style.scale),"scale"===t&&l.scalableStyles.forEach((function(t){e[t]&&(o.computedStyle[t]=e[t]*r)})),"hidden"===t&&(r?l.layoutAffectedStyles.forEach((function(t){o.computedStyle[t]=0})):l.layoutAffectedStyles.forEach((function(t){o.computedStyle[t]=o.lastComputedStyle[t]}))))}})})),this.style.scale&&l.scalableStyles.forEach((function(t){if(o.style[t]){var e=o.style[t]*o.style.scale;o.computedStyle[t]=e}})),e.hidden&&l.layoutAffectedStyles.forEach((function(t){o.computedStyle[t]=0}))}return t.uuid=function(){return n++},t.prototype.getAbsolutePosition=function(t){if(!t)return this.getAbsolutePosition(this);if(!t.parent)return{left:0,top:0};var e=this.getAbsolutePosition(t.parent),o=e.left,r=e.top;return{left:o+t.layoutBox.left,top:r+t.layoutBox.top}},t.prototype.add=function(t){t.parent=this,this.children[t.id]=t},t.prototype.remove=function(t){var e=this;t?this.children[t.id]&&(t.remove(),delete this.children[t.id]):Object.keys(this.children).forEach((function(t){e.children[t].remove(),delete e.children[t]}))},t.prototype.getNodeTree=function(){var t=this;return{id:this.id,style:this.computedStyle,children:Object.keys(this.children).map((function(e){return t.children[e].getNodeTree()}))}},t.prototype.applyLayout=function(t){var e=this;["left","top","width","height"].forEach((function(o){t.layout&&"number"==typeof t.layout[o]&&(e.layoutBox[o]=t.layout[o],!e.parent||"left"!==o&&"top"!==o||(e.layoutBox[o]+=e.parent.layoutBox[o]))})),t.children.forEach((function(t){e.children[t.id].applyLayout(t)}))},t.prototype.layout=function(){var t=this.getNodeTree();i.default(t),this.applyLayout(t)},t}();e.default=a},function(t,e,o){o.r(e);var r=function(){var t,e="inherit",o="row",r="row-reverse",i="column",l="column-reverse",n="flex-start",a="center",u="flex-start",d="center",s="flex-end",y="stretch",c="relative",f="absolute",h={row:"left","row-reverse":"right",column:"top","column-reverse":"bottom"},p={row:"right","row-reverse":"left",column:"bottom","column-reverse":"top"},g={row:"left","row-reverse":"right",column:"top","column-reverse":"bottom"},v={row:"width","row-reverse":"width",column:"height","column-reverse":"height"};function m(t){return void 0===t}function b(t){return t===o||t===r}function x(t,e){if(void 0!==t.style.marginStart&&b(e))return t.style.marginStart;var o=null;switch(e){case"row":o=t.style.marginLeft;break;case"row-reverse":o=t.style.marginRight;break;case"column":o=t.style.marginTop;break;case"column-reverse":o=t.style.marginBottom}return void 0!==o?o:void 0!==t.style.margin?t.style.margin:0}function w(t,e){if(void 0!==t.style.marginEnd&&b(e))return t.style.marginEnd;var o=null;switch(e){case"row":o=t.style.marginRight;break;case"row-reverse":o=t.style.marginLeft;break;case"column":o=t.style.marginBottom;break;case"column-reverse":o=t.style.marginTop}return null!=o?o:void 0!==t.style.margin?t.style.margin:0}function S(t,e){if(void 0!==t.style.borderStartWidth&&t.style.borderStartWidth>=0&&b(e))return t.style.borderStartWidth;var o=null;switch(e){case"row":o=t.style.borderLeftWidth;break;case"row-reverse":o=t.style.borderRightWidth;break;case"column":o=t.style.borderTopWidth;break;case"column-reverse":o=t.style.borderBottomWidth}return null!=o&&o>=0?o:void 0!==t.style.borderWidth&&t.style.borderWidth>=0?t.style.borderWidth:0}function W(t,e){if(void 0!==t.style.borderEndWidth&&t.style.borderEndWidth>=0&&b(e))return t.style.borderEndWidth;var o=null;switch(e){case"row":o=t.style.borderRightWidth;break;case"row-reverse":o=t.style.borderLeftWidth;break;case"column":o=t.style.borderBottomWidth;break;case"column-reverse":o=t.style.borderTopWidth}return null!=o&&o>=0?o:void 0!==t.style.borderWidth&&t.style.borderWidth>=0?t.style.borderWidth:0}function L(t,e){return function(t,e){if(void 0!==t.style.paddingStart&&t.style.paddingStart>=0&&b(e))return t.style.paddingStart;var o=null;switch(e){case"row":o=t.style.paddingLeft;break;case"row-reverse":o=t.style.paddingRight;break;case"column":o=t.style.paddingTop;break;case"column-reverse":o=t.style.paddingBottom}return null!=o&&o>=0?o:void 0!==t.style.padding&&t.style.padding>=0?t.style.padding:0}(t,e)+S(t,e)}function _(t,e){return function(t,e){if(void 0!==t.style.paddingEnd&&t.style.paddingEnd>=0&&b(e))return t.style.paddingEnd;var o=null;switch(e){case"row":o=t.style.paddingRight;break;case"row-reverse":o=t.style.paddingLeft;break;case"column":o=t.style.paddingBottom;break;case"column-reverse":o=t.style.paddingTop}return null!=o&&o>=0?o:void 0!==t.style.padding&&t.style.padding>=0?t.style.padding:0}(t,e)+W(t,e)}function j(t,e){return S(t,e)+W(t,e)}function k(t,e){return x(t,e)+w(t,e)}function B(t,e){return L(t,e)+_(t,e)}function E(t,e){return e.style.alignSelf?e.style.alignSelf:t.style.alignItems?t.style.alignItems:"stretch"}function O(t,e){if("rtl"===e){if(t===o)return r;if(t===r)return o}return t}function C(t){return t.style.position?t.style.position:"relative"}function T(t){return C(t)===c&&t.style.flex>0}function P(t,e){return t.layout[v[e]]+k(t,e)}function R(t,e){return void 0!==t.style[v[e]]&&t.style[v[e]]>=0}function A(t,e){return void 0!==t.style[e]}function D(t,e){return void 0!==t.style[e]?t.style[e]:0}function H(t,e,o){var r={row:t.style.minWidth,"row-reverse":t.style.minWidth,column:t.style.minHeight,"column-reverse":t.style.minHeight}[e],i={row:t.style.maxWidth,"row-reverse":t.style.maxWidth,column:t.style.maxHeight,"column-reverse":t.style.maxHeight}[e],l=o;return void 0!==i&&i>=0&&l>i&&(l=i),void 0!==r&&r>=0&&l<r&&(l=r),l}function M(t,e){return t>e?t:e}function q(t,e){void 0===t.layout[v[e]]&&R(t,e)&&(t.layout[v[e]]=M(H(t,e,t.style[v[e]]),B(t,e)))}function I(t,e,o){e.layout[p[o]]=t.layout[v[o]]-e.layout[v[o]]-e.layout[g[o]]}function N(t,e){return void 0!==t.style[h[e]]?D(t,h[e]):-D(t,p[e])}function F(W,F,U){var G=function(t,o){var r;return(r=t.style.direction?t.style.direction:e)===e&&(r=void 0===o?"ltr":o),r}(W,U),J=O(function(t){return t.style.flexDirection?t.style.flexDirection:i}(W),G),K=function(t,e){return function(t){return t===i||t===l}(t)?O(o,e):i}(J,G),Q=O(o,G);q(W,J),q(W,K),W.layout.direction=G,W.layout[h[J]]+=x(W,J)+N(W,J),W.layout[p[J]]+=w(W,J)+N(W,J),W.layout[h[K]]+=x(W,K)+N(W,K),W.layout[p[K]]+=w(W,K)+N(W,K);var V=W.children.length,X=B(W,Q);if(function(t){return void 0!==t.style.measure}(W)){var Y=!m(W.layout[v[Q]]),Z=t;Z=R(W,Q)?W.style.width:Y?W.layout[v[Q]]:F-k(W,Q),Z-=X;var $=!R(W,Q)&&!Y,tt=!R(W,i)&&m(W.layout[v[i]]);if($||tt){var et=W.style.measure(Z);$&&(W.layout.width=et.width+X),tt&&(W.layout.height=et.height+B(W,i))}if(0===V)return}var ot,rt,it,lt,nt=function(t){return"wrap"===t.style.flexWrap}(W),at=function(t){return t.style.justifyContent?t.style.justifyContent:"flex-start"}(W),ut=L(W,J),dt=L(W,K),st=B(W,J),yt=B(W,K),ct=!m(W.layout[v[J]]),ft=!m(W.layout[v[K]]),ht=b(J),pt=null,gt=null,vt=t;ct&&(vt=W.layout[v[J]]-st);for(var mt=0,bt=0,xt=0,wt=0,St=0,Wt=0;bt<V;){var Lt,_t=0,jt=0,kt=0,Bt=0,Et=ct&&at===n||!ct&&at!==a,Ot=Et?V:mt,Ct=!0,Tt=V,Pt=null,Rt=null,At=ut,Dt=0;for(ot=mt;ot<V;++ot){if((it=W.children[ot]).lineIndex=Wt,it.nextAbsoluteChild=null,it.nextFlexChild=null,(Gt=E(W,it))===y&&C(it)===c&&ft&&!R(it,K))it.layout[v[K]]=M(H(it,K,W.layout[v[K]]-yt-k(it,K)),B(it,K));else if(C(it)===f)for(null===pt&&(pt=it),null!==gt&&(gt.nextAbsoluteChild=it),gt=it,rt=0;rt<2;rt++)lt=0!==rt?o:i,!m(W.layout[v[lt]])&&!R(it,lt)&&A(it,h[lt])&&A(it,p[lt])&&(it.layout[v[lt]]=M(H(it,lt,W.layout[v[lt]]-B(W,lt)-k(it,lt)-D(it,h[lt])-D(it,p[lt])),B(it,lt)));var Ht=0;if(ct&&T(it)?(jt++,kt+=it.style.flex,null===Pt&&(Pt=it),null!==Rt&&(Rt.nextFlexChild=it),Rt=it,Ht=B(it,J)+k(it,J)):(Lt=t,ht||(Lt=R(W,Q)?W.layout[v[Q]]-X:F-k(W,Q)-X),0===xt&&z(it,Lt,G),C(it)===c&&(Bt++,Ht=P(it,J))),nt&&ct&&_t+Ht>vt&&ot!==mt){Bt--,xt=1;break}Et&&(C(it)!==c||T(it))&&(Et=!1,Ot=ot),Ct&&(C(it)!==c||Gt!==y&&Gt!==u||m(it.layout[v[K]]))&&(Ct=!1,Tt=ot),Et&&(it.layout[g[J]]+=At,ct&&I(W,it,J),At+=P(it,J),Dt=M(Dt,H(it,K,P(it,K)))),Ct&&(it.layout[g[K]]+=wt+dt,ft&&I(W,it,K)),xt=0,_t+=Ht,bt=ot+1}var Mt=0,qt=0,It=0;if(It=ct?vt-_t:M(_t,0)-_t,0!==jt){var Nt,Ft,zt=It/kt;for(Rt=Pt;null!==Rt;)(Nt=zt*Rt.style.flex+B(Rt,J))!==(Ft=H(Rt,J,Nt))&&(It-=Ft,kt-=Rt.style.flex),Rt=Rt.nextFlexChild;for((zt=It/kt)<0&&(zt=0),Rt=Pt;null!==Rt;)Rt.layout[v[J]]=H(Rt,J,zt*Rt.style.flex+B(Rt,J)),Lt=t,R(W,Q)?Lt=W.layout[v[Q]]-X:ht||(Lt=F-k(W,Q)-X),z(Rt,Lt,G),it=Rt,Rt=Rt.nextFlexChild,it.nextFlexChild=null}else at!==n&&(at===a?Mt=It/2:"flex-end"===at?Mt=It:"space-between"===at?(It=M(It,0),qt=jt+Bt-1!=0?It/(jt+Bt-1):0):"space-around"===at&&(Mt=(qt=It/(jt+Bt))/2));for(At+=Mt,ot=Ot;ot<bt;++ot)C(it=W.children[ot])===f&&A(it,h[J])?it.layout[g[J]]=D(it,h[J])+S(W,J)+x(it,J):(it.layout[g[J]]+=At,ct&&I(W,it,J),C(it)===c&&(At+=qt+P(it,J),Dt=M(Dt,H(it,K,P(it,K)))));var Ut=W.layout[v[K]];for(ft||(Ut=M(H(W,K,Dt+yt),yt)),ot=Tt;ot<bt;++ot)if(C(it=W.children[ot])===f&&A(it,h[K]))it.layout[g[K]]=D(it,h[K])+S(W,K)+x(it,K);else{var Gt,Jt=dt;if(C(it)===c)if((Gt=E(W,it))===y)m(it.layout[v[K]])&&(it.layout[v[K]]=M(H(it,K,Ut-yt-k(it,K)),B(it,K)));else if(Gt!==u){var Kt=Ut-yt-P(it,K);Jt+=Gt===d?Kt/2:Kt}it.layout[g[K]]+=wt+Jt,ft&&I(W,it,K)}wt+=Dt,St=M(St,At),Wt+=1,mt=bt}if(Wt>1&&ft){var Qt=W.layout[v[K]]-yt,Vt=Qt-wt,Xt=0,Yt=dt,Zt=function(t){return t.style.alignContent?t.style.alignContent:"flex-start"}(W);Zt===s?Yt+=Vt:Zt===d?Yt+=Vt/2:Zt===y&&Qt>wt&&(Xt=Vt/Wt);var $t=0;for(ot=0;ot<Wt;++ot){var te=$t,ee=0;for(rt=te;rt<V;++rt)if(C(it=W.children[rt])===c){if(it.lineIndex!==ot)break;m(it.layout[v[K]])||(ee=M(ee,it.layout[v[K]]+k(it,K)))}for($t=rt,ee+=Xt,rt=te;rt<$t;++rt)if(C(it=W.children[rt])===c){var oe=E(W,it);if(oe===u)it.layout[g[K]]=Yt+x(it,K);else if(oe===s)it.layout[g[K]]=Yt+ee-w(it,K)-it.layout[v[K]];else if(oe===d){var re=it.layout[v[K]];it.layout[g[K]]=Yt+(ee-re)/2}else oe===y&&(it.layout[g[K]]=Yt+x(it,K))}Yt+=ee}}var ie=!1,le=!1;if(ct||(W.layout[v[J]]=M(H(W,J,St+_(W,J)),st),J!==r&&J!==l||(ie=!0)),ft||(W.layout[v[K]]=M(H(W,K,wt+yt),yt),K!==r&&K!==l||(le=!0)),ie||le)for(ot=0;ot<V;++ot)it=W.children[ot],ie&&I(W,it,J),le&&I(W,it,K);for(gt=pt;null!==gt;){for(rt=0;rt<2;rt++)lt=0!==rt?o:i,!m(W.layout[v[lt]])&&!R(gt,lt)&&A(gt,h[lt])&&A(gt,p[lt])&&(gt.layout[v[lt]]=M(H(gt,lt,W.layout[v[lt]]-j(W,lt)-k(gt,lt)-D(gt,h[lt])-D(gt,p[lt])),B(gt,lt))),A(gt,p[lt])&&!A(gt,h[lt])&&(gt.layout[h[lt]]=W.layout[v[lt]]-gt.layout[v[lt]]-D(gt,p[lt]));it=gt,gt=gt.nextAbsoluteChild,it.nextAbsoluteChild=null}}function z(t,e,o){t.shouldUpdate=!0;var r=t.style.direction||"ltr";!t.isDirty&&t.lastLayout&&t.lastLayout.requestedHeight===t.layout.height&&t.lastLayout.requestedWidth===t.layout.width&&t.lastLayout.parentMaxWidth===e&&t.lastLayout.direction===r?(t.layout.width=t.lastLayout.width,t.layout.height=t.lastLayout.height,t.layout.top=t.lastLayout.top,t.layout.left=t.lastLayout.left):(t.lastLayout||(t.lastLayout={}),t.lastLayout.requestedWidth=t.layout.width,t.lastLayout.requestedHeight=t.layout.height,t.lastLayout.parentMaxWidth=e,t.lastLayout.direction=r,t.children.forEach((function(t){t.layout.width=void 0,t.layout.height=void 0,t.layout.top=0,t.layout.left=0})),F(t,e,o),t.lastLayout.width=t.layout.width,t.lastLayout.height=t.layout.height,t.lastLayout.top=t.layout.top,t.lastLayout.left=t.layout.left)}return{layoutNodeImpl:F,computeLayout:z,fillNodes:function t(e){return e.layout&&!e.isDirty||(e.layout={width:void 0,height:void 0,top:0,left:0,right:0,bottom:0}),e.style||(e.style={}),e.children||(e.children=[]),e.children.forEach(t),e}}}();e.default=function(t){r.fillNodes(t),r.computeLayout(t)}},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.textStyles=["color","fontSize","textAlign","fontWeight","lineHeight","lineBreak"],e.scalableStyles=["left","top","right","bottom","width","height","margin","marginLeft","marginRight","marginTop","marginBottom","padding","paddingLeft","paddingRight","paddingTop","paddingBottom","borderWidth","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],e.layoutAffectedStyles=["margin","marginTop","marginBottom","marginLeft","marginRight","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","width","height"],e.getDefaultStyle=function(){return{left:void 0,top:void 0,right:void 0,bottom:void 0,width:void 0,height:void 0,maxWidth:void 0,maxHeight:void 0,minWidth:void 0,minHeight:void 0,margin:void 0,marginLeft:void 0,marginRight:void 0,marginTop:void 0,marginBottom:void 0,padding:void 0,paddingLeft:void 0,paddingRight:void 0,paddingTop:void 0,paddingBottom:void 0,borderWidth:void 0,flexDirection:void 0,justifyContent:void 0,alignItems:void 0,alignSelf:void 0,flex:void 0,flexWrap:void 0,position:void 0,hidden:!1,scale:1}}}]).default}))}),(function(t){return e({}[t],t)})),e(1623395730415)); 
 			}); 
		global.__wxAppCurrentFile__ = 'plugin-private://wxaae6519cee98d824/components/cell/cell.js';global.__wxRouteBegin = true; 	define("components/cell/cell.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("../../@babel/runtime/helpers/objectSpread2"),e=require("../../lib/util/index"),o=require("./wxmlTocanvasData.js"),n=require("../../lib/request/request"),a=require("../../lib/storage/storage"),i=["\u8054\u7cfb\u6211","\u7acb\u5373\u8054\u7cfb","\u54a8\u8be2\u670d\u52a1","\u5728\u7ebf\u54a8\u8be2","\u8054\u7cfb\u5ba2\u670d"],r=["\u54a8\u8be2\u670d\u52a1","\u5728\u7ebf\u54a8\u8be2","\u8054\u7cfb\u5ba2\u670d"],s=["\u6709\u4ec0\u4e48\u95ee\u9898\u53ef\u4ee5\u8054\u7cfb\u6211\u54a8\u8be2","\u8054\u7cfb\u670d\u52a1\u4eba\u5458\u54a8\u8be2","\u83b7\u53d6\u670d\u52a1\u4eba\u5458\u8054\u7cfb\u65b9\u5f0f","\u8054\u7cfb\u5ba2\u670d\u54a8\u8be2\u66f4\u591a\u95ee\u9898"],u={avatorStyle:function(t){return(-1==["rect","circle"].indexOf(t)?"circle":t).toUpperCase()},isMask:function(t){return-1==[0,1].indexOf(t)?0:t},contactText:function(t){return r[t>=0&&t<r.length?t:0]},buttonText:function(t){return i[t>=0&&t<i.length?t:0]},serviceText:function(t){return s[t>=0&&t<s.length?t:0]},buttonStyle:function(t){return(-1==["light","primary"].indexOf(t)?"primary":t).toUpperCase()},buttonSize:function(t){return(-1==["small"].indexOf(t)?"small":t).toUpperCase()},paddingStyle:function(t){return t=isNaN(t)?0:parseInt(t),0==(t=Math.max(0,t))?0:t+"px"},bubbleColor:function(t){return/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t)?"#"+t:"#4790EE"},iconStyle:function(t){return(-1==["light","primary","avator"].indexOf(t)?"avator":t).toUpperCase()},blockStyle:function(t){return(-1==["bubble","button"].indexOf(t)?"bubble":t).toUpperCase()},styleType:function(t){return 1==t||2==t||3==t?t:1},pluginType:function(t){return 0==t||2==t?0:1==t?1:0}},c={ROW:{avatorStyle:u.avatorStyle,isMask:u.isMask,contactText:u.contactText,buttonText:u.buttonText,buttonStyle:u.buttonStyle,buttonSize:u.buttonSize,paddingStyle:u.paddingStyle},BLOCK:{BUBBLE:{bubbleColor:u.bubbleColor},BUTTON:{buttonStyle:u.buttonStyle,buttonText:u.buttonText,buttonSize:u.buttonSize}},MESSAGE:{iconStyle:u.iconStyle,contactText:u.contactText,serviceText:u.serviceText}},p={ROW:{iconStyle:u.iconStyle,contactText:u.contactText,paddingStyle:u.paddingStyle},BLOCK:{BUBBLE:{bubbleColor:u.bubbleColor},BUTTON:{buttonStyle:u.buttonStyle,buttonText:u.buttonText,buttonSize:u.buttonSize}}},d={"-20116":-3008,"-24001041":-3009,"-24001057":-3010,"-24001100":-3011,"-24001049":-3012,default:-3005},l={"-24001041":"\u7fa4\u5df2\u6ee1\u4eba","-24001057":"\u8be5\u4e8c\u7ef4\u7801\u5206\u4eab\u8005\u5df2\u79bb\u5f00\u7fa4\u804a\uff0c\u65e0\u6cd5\u52a0\u5165","-24001100":"\u4f01\u4e1a\u5df2\u62d2\u7edd\u4f60\u8fdb\u5165\u8be5\u7fa4\u804a","-24001049":"\u5df2\u5728\u5f53\u524d\u7fa4\u804a\u4e2d","-24001062":"\u8be5\u4e8c\u7ef4\u7801\u5df2\u7ecf\u5931\u6548\uff0c\u65e0\u6cd5\u627e\u5230\u5bf9\u5e94\u7684\u7fa4\u804a",default:"\u4e8c\u7ef4\u7801\u5df2\u5931\u6548"},g={},h=wx.getSystemInfoSync().platform;Component({data:{isReady:!1,isNeedAuth:!1,args:{withCredentials:!0,lang:"zh_CN"},render:{},hackClass:"",postInit:!1,postWidth:300,postHeight:500,cardHeight:0,groupNameHeight:0,postImg:"",postGenerating:!1,isPC:"windows"===h||"mac"===h},properties:{reqType:{type:Number,value:3,observer:function(t,e,o){this.queryPluginConfig()}},vcode:{type:String,value:"",observer:function(t,e,o){this.queryPluginConfig()}},plugid:{type:String,value:"",observer:function(t,e,o){this.queryPluginConfig()}},useErrCallback:{type:Boolean,value:!1},avatorStyle:{type:String},isMask:{type:Number},contactText:{type:Number},buttonText:{type:Number},buttonStyle:{type:String},buttonSize:{type:Number},paddingStyle:{type:Number},styleType:{type:Number},serviceText:{type:Number},plugType:{type:Number},blockStyle:{type:String},bubbleColor:{type:String},iconStyle:{type:String}},attached:function(){var t=this;a.initNameSpace(),a.setStorage("freego",{cookie:""},!1),wx.login?wx.login({success:function(e){console.log("success %o",e),t.setData({isNeedAuth:!1})},fail:function(e){t.setData({isNeedAuth:!0})}}):(t.notifyToHostApp({errcode:-3010}),t.setData({isNeedAuth:!0})),this.queryPluginConfig()},methods:{loginSuccess:function(t){this.checkWxVersion()?this.getPreviewQRCode(t.detail,"qrcode_xcxplug"):this.sendMsgToWx(t.detail,"contactplugin/sendmsgtowx"),this.report("sample_authorize_yes")},loginFail:function(t){this.notifyToHostApp({errcode:-3004}),this.report("sample_authorize_no")},onBindTap:function(){this.notifyToHostApp({state:1})},statFunctionalPage:function(){this.report(0==g.type?"plug_single_miniapp_use":"plug_multi_miniapp_use",79505335)},makeAuthReq:function(t){var e=t.forceMsg,o=this;wx.login({success:function(t){wx.getUserInfo({withCredentials:!0,success:function(n){var a={code:t.code,encryptedData:n.encryptedData,iv:n.iv};!e&&o.checkWxVersion()?o.getPreviewQRCode(a,"qrcode_xcxplug"):o.sendMsgToWx(a,"contactplugin/sendmsgtowx")},fail:function(){o.notifyToHostApp({errcode:-3004})}})},fail:function(){o.notifyToHostApp({errcode:-3004})}}),this.report(0==g.type?"plug_single_miniapp_use":"plug_multi_miniapp_use",79505335)},getRenderConfigByType:function(t,e){var o=0==t?c:p,n="",a=o.ROW;2==e?a=o.BLOCK:3==e&&0==t&&(a=o.MESSAGE),2==e&&(a=a[n=u.blockStyle(this.data.blockStyle)]);var i={};for(var r in a)a.hasOwnProperty(r)&&(i[r]=a[r](this.data[r]));return i.plugType=0==t?"SINGLE":"MULTI",i.styleType=1==e?"ROW":2==e?"BLOCK":"MESSAGE",i.blockStyle=n,i},queryPluginConfig:function(){var t=this;""==t.data.vcode&&""==t.data.plugid||n.request({ignore:!0,method:"POST",url:"contactplugin/queryconfig",data:{req_type:t.data.reqType,vcode:t.data.vcode,plugid:t.data.plugid}}).then((function(e){e.data&&e.data.data?(g=e.data.data,t.computeRenderData()):t.notifyToHostApp({errcode:-3002})}))},computeRenderData:function(){var t=this.data.plugType?this.data.plugType:u.pluginType(g.type),e=this.data.styleType?this.data.styleType:u.styleType(g.style),o=this.getRenderConfigByType(t,e);o.avatorUrl=g.headurl||"../../assets/people_icon_big.png",o.nickName=g.name||"",3==g.type&&(2==g.style?o=this.getRenderConfigByType(0,2):1==g.style&&((o=this.getRenderConfigByType(1,1)).contactText="\u52a0\u5165\u7fa4\u804a",o.iconStyle="ADD_CHAT")),o.type=g.type,console.log("%o",o),this.setData({render:o,isReady:!0})},getPreviewQRCode:function(t,e){var o=this;this.data.postImg?wx.previewImage({urls:[this.data.postImg]}):this.data.postGenerating?wx.showToast({title:"\u4e8c\u7ef4\u7801\u751f\u6210\u4e2d\uff0c\u8bf7\u7a0d\u7b49",icon:"none"}):(this.setData({postGenerating:!0}),wx.showLoading({title:"\u52a0\u8f7d\u4e2d"}),this.sendReqToSvr(t,e,1,(function(t){t.headurl||(t.headurl="https://wwcdn.weixin.qq.com/node/wework/images/group-default-avatar.ecdb8b064f.png"),o.getPost(t)})))},getPost:function(t){var e=wx.getSystemInfoSync().pixelRatio;this.data.postInit||this.initPostData(t),this.widget=this.selectComponent(".widget"),this.widget.ctx&&this.widget.canvas?(this.widget.ctx.scale(1,1),this.widget.canvas.height=this.data.postHeight*e,this.widget.canvas.width=this.data.postWidth*e,this.widget.ctx.scale(e,e),this.widget.dpr=e,this.getPostCanvas(t)):this.postErrHandle(!0)},initPostData:function(t){var e=wx.getSystemInfoSync(),o=e.screenWidth,n=(e.screenHeight,this.selectComponent(".widget").ctx),a=o-80-48,i=this.drawContent(n,t.name,a).length,r=499+28*(i-1),s=28*i,u=r+22+24+68;this.setData({postWidth:o,postHeight:u,cardHeight:r,groupNameHeight:s,postInit:!0}),console.log("init post done")},drawContent:function(t,e,o){t.font="600 20px sans-serif";var n=e.split("\n"),a=[];return n.forEach((function(e){var n=0,i=0;""==e?a.push(""):e.split("").forEach((function(r,s){(n+=t.measureText(r).width)>o&&(a.push({text:e.slice(i,s),width:n-t.measureText(r).width}),n=t.measureText(r).width,i=s),s==e.length-1&&a.push({text:e.slice(i),width:n})}))})),a},getPostCanvas:function(e){var n=this;this.widget=this.selectComponent(".widget");var a=(0,o.getPostWxml)(t(t({},this.data),e)),i=(0,o.getPostStyle)(this.data);this.widget.renderToCanvas({wxml:a,style:i}).then((function(t){n.container=t,n.extraImage(e)})).catch((function(t){console.log(t),n.postErrHandle()}))},extraImage:function(t){var e=this;this.widget.canvasToTempFilePath().then((function(o){wx.hideLoading(),wx.previewImage({urls:[o.tempFilePath]}),e.setData({postImg:o.tempFilePath,postGenerating:!1}),e.notifyToHostApp({errcode:1==t.type?-3006:0,name:t.name,headurl:t.headurl,notifytype:1})})).catch((function(t){console.log(t),e.postErrHandle()}))},postErrHandle:function(t){console.log("postErrHandle"),this.makeAuthReq({forceMsg:!0}),wx.hideLoading(),this.setData({postGenerating:!1}),t?this.logkvAutoReport(49591,"group|postfail|versionlow"):this.logkvAutoReport(49591,"group|postfail")},sendMsgToWx:function(t,e){this.sendReqToSvr(t,e,0)},sendReqToSvr:function(t,e,o,a){var i=this;this.triggerEvent("startmessage",{}),n.request({ignore:!0,method:"POST",url:e,data:{type:3,vcode:i.data.vcode,plugid:i.data.plugid,code:t.code,iv:t.iv,encryptedData:t.encryptedData}}).then((function(t){if(t.data&&t.data.data&&"{}"!=JSON.stringify(t.data.data))1==t.data.data.type?0==o?i.notifyToHostApp({errcode:-3006,name:t.data.data.name,notifytype:o,headurl:t.data.data.headurl}):a&&a(t.data.data):2==t.data.data.type?i.notifyToHostApp({errcode:-3007}):0==o?i.notifyToHostApp({errcode:0,name:t.data.data.name,notifytype:o,headurl:t.data.data.headurl}):a&&a(t.data.data);else{var e=""+(t.data&&t.data.result&&t.data.result.errCode||"");1!=o||i.data.useErrCallback?i.notifyToHostApp({errcode:e&&d[e]||d.default}):wx.showModal({title:e&&l[e]||l.default,showCancel:!1})}})).catch((function(t){i.setData({postGenerating:!1}),wx.hideLoading()}))},notifyToHostApp:function(t){this.triggerEvent("completemessage",t)},report:function(t,e){var o="https://work.weixin.qq.com/wework_admin/report?r="+Math.random()+"&q=";o+=encodeURIComponent('st:sgkvuin_report={"kv":'+(e||79505334)+',"key":"'+t+'","id":'+ +new Date+"}"),wx.request({url:o})},logkvReport:function(t,e){var o="https://work.weixin.qq.com/wework_admin/report?r="+Math.random()+"&q=";o+=encodeURIComponent('st:logkv_report={"kv": "'.concat(t,'", "value": "').concat(e||1,'"}'))+"&_t=".concat(+new Date),console.log(o),wx.request({url:o})},logkvAutoReport:function(t,e){var o="https://work.weixin.qq.com/wework_admin/report?r="+Math.random()+"&q=";o+=encodeURIComponent('st:logkvauto_report={"kv": "'.concat(t,'", "key": "').concat(e,'"}'))+"&_t=".concat(+new Date),wx.request({url:o})},checkWxVersion:function(){var t=wx.getSystemInfoSync(),o=t.version,n=t.platform;return"wxwork"!==t.environment&&("ios"==n&&(0,e.compareVersion)(o,"8.0.6")>=0||"android"==n&&(0,e.compareVersion)(o,"8.0.3")>=0)}}}); 
 			}); 	require("components/cell/cell.js");
 		global.__wxAppCurrentFile__ = 'plugin-private://wxaae6519cee98d824/components/wxml-to-canvas/index.js';global.__wxRouteBegin = true; 	define("components/wxml-to-canvas/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")),t=require("../../@babel/runtime/helpers/asyncToGenerator"),a=require("./xml-parser"),r=require("./widget").Widget,n=require("./draw").Draw,i=require("./utils").compareVersion;Component({properties:{width:{type:Number,value:400},height:{type:Number,value:300},forceUseOldCanvas:{type:Boolean,value:!1}},data:{use2dCanvas:!1},lifetimes:{attached:function(){this.init()}},methods:{init:function(){var e=this,t=wx.getSystemInfoSync(),a=t.SDKVersion,r=t.pixelRatio,n=i(a,"2.9.2")>=0&&!this.data.forceUseOldCanvas;this.dpr=r,this.setData({use2dCanvas:n},(function(){n?e.createSelectorQuery().select("#".concat("weui-canvas")).fields({node:!0,size:!0}).exec((function(t){var a=t[0].node,n=a.getContext("2d");a.width=t[0].width*r,a.height=t[0].height*r,n.scale(r,r),e.ctx=n,e.canvas=a})):e.ctx=wx.createCanvasContext("weui-canvas",e)}))},renderToCanvas:function(i){var s=this;return t(e.default.mark((function t(){var o,u,c,d,h,l,v,f,p,w;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=i.wxml,u=i.style,c=s.ctx,d=s.canvas,!(h=s.data.use2dCanvas)||d){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("renderToCanvas: fail canvas has not been created")));case 6:return c.clearRect(0,0,s.data.width,s.data.height),l=a(o),v=l.root,f=new r(v,u),p=f.init(),s.boundary={top:p.layoutBox.top,left:p.layoutBox.left,width:p.computedStyle.width,height:p.computedStyle.height},w=new n(c,d,h),e.next=14,w.drawNode(p);case 14:if(h){e.next=17;break}return e.next=17,s.canvasDraw(c);case 17:return e.abrupt("return",Promise.resolve(p));case 18:case"end":return e.stop()}}),t)})))()},canvasDraw:function(e,t){return new Promise((function(a){e.draw(t,(function(){a()}))}))},canvasToTempFilePath:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=this.data.use2dCanvas;return new Promise((function(r,n){var i=e.boundary,s=i.top,o=i.left,u=i.width,c=i.height,d={x:o,y:s,width:u,height:c,destWidth:u*e.dpr,destHeight:c*e.dpr,canvasId:"weui-canvas",fileType:t.fileType||"png",quality:t.quality||1,success:r,fail:n};a&&(delete d.canvasId,d.canvas=e.canvas),wx.canvasToTempFilePath(d,e)}))}}}); 
 			}); 	require("components/wxml-to-canvas/index.js");
 	
				global.publishDomainComponents({
			"plugin://wxaae6519cee98d824/cell":"plugin-private://wxaae6519cee98d824/components/cell/cell"
	})
				module.exports = function() {
		return require('index.js')
	}
			});
	requirePlugin("plugin://wxaae6519cee98d824");
	var __wxAppConsole__ = console;definePlugin("plugin://wx214b7e2bcde837d6", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages, console, requireMiniProgram, WXWebAssembly, __wxCodeSpace__) {            var __vd_version_info__=__vd_version_info__||{};            if (typeof console === 'undefined') {console=__wxAppConsole__; };			
			/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wx214b7e2bcde837d6=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wx214b7e2bcde837d6:"+m)}
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
if(typeof o==="string"||typeof o==="boolean"||typeof o==="number") return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(Object.prototype.hasOwnProperty.call(o,k))
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
if(r&&typeof o==="function"){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_wx214b7e2bcde837d6 || [];
function gz$gwx_wx214b7e2bcde837d6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_1)return __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_1
__WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_1);return __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_1
}
function gz$gwx_wx214b7e2bcde837d6_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_2)return __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_2
__WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_2);return __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_2
}
function gz$gwx_wx214b7e2bcde837d6_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_3)return __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_3
__WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shrinkVideo']])
Z([3,'msgItem'])
Z([[7],[3,'messageList']])
Z([3,'id'])
Z([a,[3,'qa-msg-item '],[[2,'?:'],[[6],[[7],[3,'msgItem']],[3,'isPatient']],[1,'right'],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'msgItem']],[3,'isDoctor']],[1,'left'],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'msgItem']],[3,'isSystemMsg']],[1,'center'],[1,'']]])
Z([a,[3,'msg'],[[7],[3,'index']]])
Z([[6],[[7],[3,'msgItem']],[3,'isDoctor']])
Z([[2,'=='],[[6],[[7],[3,'msgItem']],[3,'msgType']],[1,151]])
Z([[2,'=='],[[6],[[7],[3,'msgItem']],[3,'msgType']],[1,201]])
Z([3,'onCardClick'])
Z([3,'msg-item-content card-msg'])
Z([[6],[[6],[[7],[3,'msgItem']],[3,'cardContent']],[3,'url']])
Z([[6],[[6],[[7],[3,'msgItem']],[3,'cardContent']],[3,'image']])
Z([[6],[[7],[3,'msgItem']],[3,'isSystemMsg']])
Z([[6],[[7],[3,'msgItem']],[3,'isCard']])
Z(z[9])
Z(z[10])
Z(z[12])
Z([[2,'&&'],[[7],[3,'shrinkVideo']],[[2,'!'],[[7],[3,'isInquiryEnd']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_3);return __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_3
}
function gz$gwx_wx214b7e2bcde837d6_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_4)return __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_4
__WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_4);return __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_4
}
function gz$gwx_wx214b7e2bcde837d6_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_5)return __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_5
__WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'webrtc-room-component '],[[2,'?:'],[[7],[3,'shrinkVideo']],[1,'shrink-container'],[1,'']]])
Z([[7],[3,'showInquiryDuration']])
Z([[2,'&&'],[[7],[3,'shrinkVideo']],[[7],[3,'isInquirying']]])
Z([[7],[3,'showNoleaveTips']])
Z(z[2])
Z([3,'footer-bar'])
Z([[2,'!'],[[7],[3,'isInquirying']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'shrinkVideo']]],[[7],[3,'isInquirying']]])
Z([3,'onImChat'])
Z([3,'item-bar'])
Z([[7],[3,'showMessageTip']])
Z([[7],[3,'isShowDialog']])
Z([3,'cancelDialogHandler'])
Z([3,'confirmDialogHandler'])
Z([[6],[[7],[3,'dialogObj']],[3,'cancelText']])
Z([[6],[[7],[3,'dialogObj']],[3,'confirmText']])
Z([[6],[[7],[3,'dialogObj']],[3,'content']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_5);return __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_5
}
function gz$gwx_wx214b7e2bcde837d6_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_6)return __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_6
__WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'hasDeviceAuthorize']])
Z([[7],[3,'hasRejectedAuthorize']])
Z([3,'openAuthorizeSetting'])
Z([3,'去开启'])
Z([3,'为保证视频问诊正常进行，需要您开启摄像头和麦克风权限'])
Z([3,'提示'])
Z([a,[3,'container '],[[2,'?:'],[[7],[3,'shrinkVideo']],[1,'add-flex'],[1,'']]])
Z([a,[3,'padding-bottom: '],[[7],[3,'paddingBottomHeight']],[3,'px']])
Z([3,'onRoomError'])
Z([3,'addNoReadMessage'])
Z([3,'remoteJoinRoom'])
Z([3,'onEnterVideoInpicture'])
Z([3,'onGrowVideo'])
Z([3,'onEndBtnClick'])
Z([3,'onLeaveVideoInpicture'])
Z([3,'onShrinkVideo'])
Z([3,'room-wrap'])
Z([[7],[3,'connectText']])
Z([[6],[[7],[3,'videoToken']],[3,'durationMinutes']])
Z([3,'myroom'])
Z([[7],[3,'inquiryDurationStr']])
Z([[7],[3,'isHidePage']])
Z([[7],[3,'noReadMessage']])
Z([[6],[[7],[3,'videoToken']],[3,'roomid']])
Z([[6],[[7],[3,'videoToken']],[3,'sdkAppId']])
Z([[7],[3,'showInquiryDuration']])
Z([[7],[3,'shrinkVideo']])
Z([[6],[[7],[3,'videoToken']],[3,'strRoomID']])
Z([[6],[[7],[3,'videoToken']],[3,'userId']])
Z([[6],[[7],[3,'videoToken']],[3,'userSig']])
Z([[7],[3,'bottomAnchor']])
Z([[7],[3,'crossData']])
Z([[7],[3,'doctorInfo']])
Z([[7],[3,'messageList']])
Z(z[26])
Z([[7],[3,'showSubModal']])
Z([3,'onSubMessage'])
Z([[2,'!'],[[7],[3,'shrinkVideo']]])
Z(z[32])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_6);return __WXML_GLOBAL__.ops_cached.$gwx_wx214b7e2bcde837d6_6
}
__WXML_GLOBAL__.ops_set.$gwx_wx214b7e2bcde837d6=z;
__WXML_GLOBAL__.ops_init.$gwx_wx214b7e2bcde837d6=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/inquiry-video/components/dialog/dialog.wxml','./pages/inquiry-video/components/doctor-info/index.wxml','./pages/inquiry-video/components/inquiry-im/index.wxml','./pages/inquiry-video/components/modal/index.wxml','./pages/inquiry-video/components/webrtc-room/webrtc-room.wxml','./pages/inquiry-video/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wx214b7e2bcde837d6_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_wx214b7e2bcde837d6_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_wx214b7e2bcde837d6_3()
var fE=_v()
_(r,fE)
if(_oz(z,0,e,s,gg)){fE.wxVkey=1
var hG=_v()
_(fE,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_mz(z,'view',['class',4,'id',1],[],oJ,cI,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,6,oJ,cI,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,7,oJ,cI,gg)){bO.wxVkey=1
}
var oP=_v()
_(tM,oP)
if(_oz(z,8,oJ,cI,gg)){oP.wxVkey=1
var oR=_mz(z,'view',['bindtap',9,'class',1,'data-jumpurl',2],[],oJ,cI,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,12,oJ,cI,gg)){fS.wxVkey=1
}
fS.wxXCkey=1
_(oP,oR)
}
var xQ=_v()
_(tM,xQ)
if(_oz(z,13,oJ,cI,gg)){xQ.wxVkey=1
var cT=_v()
_(xQ,cT)
if(_oz(z,14,oJ,cI,gg)){cT.wxVkey=1
var hU=_mz(z,'view',['bindtap',15,'class',1],[],oJ,cI,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,17,oJ,cI,gg)){oV.wxVkey=1
}
oV.wxXCkey=1
_(cT,hU)
}
else{cT.wxVkey=2
}
cT.wxXCkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,2,oH,e,s,gg,hG,'msgItem','index','id')
}
var cF=_v()
_(r,cF)
if(_oz(z,18,e,s,gg)){cF.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_wx214b7e2bcde837d6_4()
var oX=_v()
_(r,oX)
if(_oz(z,0,e,s,gg)){oX.wxVkey=1
}
oX.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_wx214b7e2bcde837d6_5()
var aZ=_n('view')
_rz(z,aZ,'class',0,e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,1,e,s,gg)){t1.wxVkey=1
}
var e2=_v()
_(aZ,e2)
if(_oz(z,2,e,s,gg)){e2.wxVkey=1
}
var b3=_v()
_(aZ,b3)
if(_oz(z,3,e,s,gg)){b3.wxVkey=1
}
var o4=_v()
_(aZ,o4)
if(_oz(z,4,e,s,gg)){o4.wxVkey=1
}
var o6=_n('view')
_rz(z,o6,'class',5,e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,6,e,s,gg)){f7.wxVkey=1
}
var c8=_v()
_(o6,c8)
if(_oz(z,7,e,s,gg)){c8.wxVkey=1
var h9=_mz(z,'view',['bindtap',8,'class',1],[],e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,10,e,s,gg)){o0.wxVkey=1
}
o0.wxXCkey=1
_(c8,h9)
}
f7.wxXCkey=1
c8.wxXCkey=1
_(aZ,o6)
var x5=_v()
_(aZ,x5)
if(_oz(z,11,e,s,gg)){x5.wxVkey=1
var cAB=_mz(z,'dialog',['bind:onTouchCancel',12,'bind:onTouchConfirm',1,'cancelText',2,'confirmText',3,'content',4],[],e,s,gg)
_(x5,cAB)
}
t1.wxXCkey=1
e2.wxXCkey=1
b3.wxXCkey=1
o4.wxXCkey=1
x5.wxXCkey=1
x5.wxXCkey=3
_(r,aZ)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_wx214b7e2bcde837d6_6()
var lCB=_v()
_(r,lCB)
if(_oz(z,0,e,s,gg)){lCB.wxVkey=1
var aDB=_v()
_(lCB,aDB)
if(_oz(z,1,e,s,gg)){aDB.wxVkey=1
var tEB=_mz(z,'modal',['bind:onTouchConfirm',2,'buttonText',1,'content',2,'title',3],[],e,s,gg)
_(aDB,tEB)
}
aDB.wxXCkey=1
aDB.wxXCkey=3
}
else{lCB.wxVkey=2
var eFB=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var xIB=_mz(z,'webrtc-room',['bind:RoomError',8,'bind:addNoReadMessage',1,'bind:onEnterRoom',2,'bind:onEnterVideoInpicture',3,'bind:onGrowVideo',4,'bind:onLeaveInquiry',5,'bind:onLeaveVideoInpicture',6,'bind:onShrinkVideo',7,'class',8,'connectText',9,'durationMinutes',10,'id',11,'inquiryDurationStr',12,'isHidePage',13,'noReadMessageNum',14,'roomID',15,'sdkAppID',16,'showInquiryDuration',17,'shrinkVideo',18,'strRoomID',19,'userID',20,'userSig',21],[],e,s,gg)
_(eFB,xIB)
var oJB=_mz(z,'inquiry-im',['bottomAnchor',30,'crossData',1,'doctorInfo',2,'messageList',3,'shrinkVideo',4],[],e,s,gg)
_(eFB,oJB)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,35,e,s,gg)){bGB.wxVkey=1
var fKB=_n('modal')
_rz(z,fKB,'bind:onTouchConfirm',36,e,s,gg)
_(bGB,fKB)
}
var oHB=_v()
_(eFB,oHB)
if(_oz(z,37,e,s,gg)){oHB.wxVkey=1
var cLB=_n('doctorinfo-box')
_rz(z,cLB,'doctorInfo',38,e,s,gg)
_(oHB,cLB)
}
bGB.wxXCkey=1
bGB.wxXCkey=3
oHB.wxXCkey=1
oHB.wxXCkey=3
_(lCB,eFB)
}
lCB.wxXCkey=1
lCB.wxXCkey=3
lCB.wxXCkey=3
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}

				global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/dialog/dialog.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/dialog/dialog.wxml'] = [$gwx_wx214b7e2bcde837d6, './pages/inquiry-video/components/dialog/dialog.wxml' ];else global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/dialog/dialog.wxml'] = $gwx_wx214b7e2bcde837d6( './pages/inquiry-video/components/dialog/dialog.wxml' );
		global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/doctor-info/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/doctor-info/index.wxml'] = [$gwx_wx214b7e2bcde837d6, './pages/inquiry-video/components/doctor-info/index.wxml' ];else global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/doctor-info/index.wxml'] = $gwx_wx214b7e2bcde837d6( './pages/inquiry-video/components/doctor-info/index.wxml' );
		global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/inquiry-im/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/inquiry-im/index.wxml'] = [$gwx_wx214b7e2bcde837d6, './pages/inquiry-video/components/inquiry-im/index.wxml' ];else global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/inquiry-im/index.wxml'] = $gwx_wx214b7e2bcde837d6( './pages/inquiry-video/components/inquiry-im/index.wxml' );
		global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/modal/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/modal/index.wxml'] = [$gwx_wx214b7e2bcde837d6, './pages/inquiry-video/components/modal/index.wxml' ];else global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/modal/index.wxml'] = $gwx_wx214b7e2bcde837d6( './pages/inquiry-video/components/modal/index.wxml' );
		global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/webrtc-room/webrtc-room.json'] = {"component":true,"usingComponents":{"dialog":"../dialog/dialog"}};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/webrtc-room/webrtc-room.wxml'] = [$gwx_wx214b7e2bcde837d6, './pages/inquiry-video/components/webrtc-room/webrtc-room.wxml' ];else global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/webrtc-room/webrtc-room.wxml'] = $gwx_wx214b7e2bcde837d6( './pages/inquiry-video/components/webrtc-room/webrtc-room.wxml' );
		global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/index.json'] = {"backgroundTextStyle":"light","navigationBarTitleText":"视频问诊","navigationBarTextStyle":"black","usingComponents":{"webrtc-room":"./components/webrtc-room/webrtc-room","modal":"./components/modal/index","doctorinfo-box":"./components/doctor-info/index","inquiry-im":"./components/inquiry-im/index"}};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/index.wxml'] = [$gwx_wx214b7e2bcde837d6, './pages/inquiry-video/index.wxml' ];else global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/index.wxml'] = $gwx_wx214b7e2bcde837d6( './pages/inquiry-video/index.wxml' );
		global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/plugin.json'] = {"publicComponents":{},"pages":{"inquiry-video":"pages/inquiry-video/index"},"main":"index.js"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/plugin.wxml'] = [$gwx_wx214b7e2bcde837d6, './plugin.wxml' ];else global.__wxAppCode__['plugin-private://wx214b7e2bcde837d6/plugin.wxml'] = $gwx_wx214b7e2bcde837d6( './plugin.wxml' );
	
				define("index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
/*
 * @Author: zhangtingdong zhangtingdong@chunyu.me
 * @Date: 2023-07-13 16:05:34
 * @LastEditors: zhangtingdong zhangtingdong@chunyu.me
 * @LastEditTime: 2023-09-20 17:11:24
 * @FilePath: /wxapp-inquiry-video-plugin/plugin/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
 
 			}); 
		define("pages/inquiry-video/components/webrtc-room/static/trtc-wx-v10.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).TRTC=t()}(this,(function(){"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function t(t){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?e(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):e(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){var e=(new Date).getTime(),t=new Date(e),r=t.getHours(),s=t.getMinutes(),a=t.getSeconds(),i=t.getMilliseconds();return r=r<10?"0".concat(r):r,s=s<10?"0".concat(s):s,a=a<10?"0".concat(a):a,"".concat(r,":").concat(s,":").concat(a,".").concat(i)}var u="TRTC-WX",l=0,c=1,m=2,p=3,h=function(){function e(){s(this,e),this.logLevel=0}return i(e,[{key:"setLogLevel",value:function(e){this.logLevel=e}},{key:"log",value:function(){var e;this.logLevel===l&&(e=console).log.apply(e,[u,o()].concat(Array.prototype.slice.call(arguments)))}},{key:"info",value:function(){var e;this.logLevel<=c&&(e=console).info.apply(e,[u,o()].concat(Array.prototype.slice.call(arguments)))}},{key:"warn",value:function(){var e;this.logLevel<=m&&(e=console).warn.apply(e,[u,o()].concat(Array.prototype.slice.call(arguments)))}},{key:"error",value:function(){var e;this.logLevel<=p&&(e=console).error.apply(e,[u,o()].concat(Array.prototype.slice.call(arguments)))}}]),e}(),y=new h;var v=function(e){var t=/[\u4e00-\u9fa5]/;return e.sdkAppID?void 0===e.roomID&&void 0===e.strRoomID?(y.error("未设置 roomID"),!1):!e.strRoomID&&(e.roomID<1||e.roomID>4294967296)?(y.error("roomID 超出取值范围 1 ~ 4294967295"),!1):e.strRoomID&&t.test(e.strRoomID)?(y.error("strRoomID 请勿使用中文字符"),!1):e.userID?e.userID&&t.test(e.userID)?(y.error("userID 请勿使用中文字符"),!1):!!e.userSig||(y.error("未设置 userSig"),!1):(y.error("未设置 userID"),!1):(y.error("未设置 sdkAppID"),!1)},g={LOCAL_JOIN:"LOCAL_JOIN",LOCAL_LEAVE:"LOCAL_LEAVE",KICKED_OUT:"KICKED_OUT",REMOTE_USER_JOIN:"REMOTE_USER_JOIN",REMOTE_USER_LEAVE:"REMOTE_USER_LEAVE",REMOTE_VIDEO_ADD:"REMOTE_VIDEO_ADD",REMOTE_VIDEO_REMOVE:"REMOTE_VIDEO_REMOVE",REMOTE_AUDIO_ADD:"REMOTE_AUDIO_ADD",REMOTE_AUDIO_REMOVE:"REMOTE_AUDIO_REMOVE",REMOTE_STATE_UPDATE:"REMOTE_STATE_UPDATE",LOCAL_NET_STATE_UPDATE:"LOCAL_NET_STATE_UPDATE",REMOTE_NET_STATE_UPDATE:"REMOTE_NET_STATE_UPDATE",LOCAL_AUDIO_VOLUME_UPDATE:"LOCAL_AUDIO_VOLUME_UPDATE",REMOTE_AUDIO_VOLUME_UPDATE:"REMOTE_AUDIO_VOLUME_UPDATE",VIDEO_FULLSCREEN_UPDATE:"VIDEO_FULLSCREEN_UPDATE",BGM_PLAY_START:"BGM_PLAY_START",BGM_PLAY_FAIL:"BGM_PLAY_FAIL",BGM_PLAY_PROGRESS:"BGM_PLAY_PROGRESS",BGM_PLAY_COMPLETE:"BGM_PLAY_COMPLETE",ERROR:"ERROR",IM_READY:"IM_READY",IM_MESSAGE_RECEIVED:"IM_MESSAGE_RECEIVED",IM_NOT_READY:"IM_NOT_READY",IM_KICKED_OUT:"IM_KICKED_OUT",IM_ERROR:"IM_ERROR"},d={url:"",mode:"RTC",autopush:!1,enableCamera:!1,enableMic:!1,enableAgc:!1,enableAns:!1,enableEarMonitor:!1,enableAutoFocus:!0,enableZoom:!1,minBitrate:600,maxBitrate:900,videoWidth:360,videoHeight:640,beautyLevel:0,whitenessLevel:0,videoOrientation:"vertical",videoAspect:"9:16",frontCamera:"front",enableRemoteMirror:!1,localMirror:"auto",enableBackgroundMute:!1,audioQuality:"high",audioVolumeType:"voicecall",audioReverbType:0,waitingImage:"",waitingImageHash:"",beautyStyle:"smooth",filter:"",netStatus:{}},f={src:"",mode:"RTC",autoplay:!0,muteAudio:!0,muteVideo:!0,orientation:"vertical",objectFit:"fillCrop",enableBackgroundMute:!1,minCache:1,maxCache:2,soundMode:"speaker",enableRecvMessage:!1,autoPauseIfNavigate:!0,autoPauseIfOpenNative:!0,isVisible:!0,_definitionType:"main",netStatus:{}};(new Date).getTime();function E(){var e=new Date;return e.setTime((new Date).getTime()+0),e.toLocaleString()}var A=function(e){var t=[];if(e&&e.TUIScene&&t.push(e.TUIScene),e&&"test"===e.env)return"default";if(wx&&wx.TUIScene&&t.push(wx.TUIScene),wx&&"function"==typeof getApp){var r=getApp().globalData;r&&r.TUIScene&&t.push(r.TUIScene)}return wx&&wx.getStorage({key:"TUIScene",success:function(e){t.push(e.data)}}),t[0]||"default"},I=new(function(){function e(){s(this,e),this.sdkAppId="",this.userId="",this.version="",this.common={}}return i(e,[{key:"setConfig",value:function(e){this.sdkAppId="".concat(e.sdkAppId),this.userId="".concat(e.userId),this.version="".concat(e.version),this.common.TUIScene=A(e)}},{key:"log",value:function(e){"ios"===wx.getSystemInfoSync().platform&&wx.request({url:"https://yun.tim.qq.com/v5/AVQualityReportSvc/C2S?sdkappid=1&cmdtype=jssdk_log",method:"POST",header:{"content-type":"application/json"},data:{timestamp:E(),sdkAppId:this.sdkAppId,userId:this.userId,version:this.version,log:JSON.stringify(t(t({},e),this.common))}})}}]),e}()),_="enterRoom",L="exitRoom",b="setPusherAttributes",T="setPlayerAttributes",D="init",O="error",S="connectServer",k="startPusher",R="openCamera",P="screenCap",M="pusherResolution",U="pusherCodeRate",C="collectionFirstFrame",x="encoderStart",w="enterRoomSuccess",V="exitRoomSuccess",B="kicked_out",G="renderFirstFrame",j="miniAppHang",N="closeSuspension",F="other",H="update",Y="addUser",K="remove_user",q="update_user_video",J="update_user_audio",W="pusherStart",Q="pusherStop",X="pusherPause",Z="pusherResume",z=function(){function e(t,r){s(this,e),this.context=wx.createLivePusherContext(r),this.pusherAttributes={},Object.assign(this.pusherAttributes,d,t)}return i(e,[{key:"setPusherAttributes",value:function(e){return Object.assign(this.pusherAttributes,e),this.pusherAttributes}},{key:"start",value:function(e){y.log("[apiLog][pusherStart]"),I.log({name:W,options:e}),this.context.start(e)}},{key:"stop",value:function(e){y.log("[apiLog][pusherStop]"),I.log({name:Q,options:e}),this.context.stop(e)}},{key:"pause",value:function(e){y.log("[apiLog] pusherPause()"),I.log({name:X,options:e}),this.context.pause(e)}},{key:"resume",value:function(e){y.log("[apiLog][pusherResume]"),I.log({name:Z,options:e}),this.context.resume(e)}},{key:"switchCamera",value:function(e){return y.log("[apiLog][switchCamera]"),this.pusherAttributes.frontCamera="front"===this.pusherAttributes.frontCamera?"back":"front",this.context.switchCamera(e),this.pusherAttributes}},{key:"sendMessage",value:function(e){y.log("[apiLog][sendMessage]",e.msg),this.context.sendMessage(e)}},{key:"snapshot",value:function(){var e=this;return y.log("[apiLog][pusherSnapshot]"),new Promise((function(t,r){e.context.snapshot({quality:"raw",complete:function(e){e.tempImagePath?(wx.saveImageToPhotosAlbum({filePath:e.tempImagePath,success:function(r){t(e)},fail:function(e){y.error("[error] pusher截图失败: ",e),r(new Error("截图失败"))}}),t(e)):(y.error("[error] snapShot 回调失败",e),r(new Error("截图失败")))}})}))}},{key:"toggleTorch",value:function(e){this.context.toggleTorch(e)}},{key:"startDumpAudio",value:function(e){this.context.startDumpAudio(e)}},{key:"stopDumpAudio",value:function(e){this.context.startDumpAudio(e)}},{key:"playBGM",value:function(e){y.log("[apiLog] playBGM() url: ",e.url),this.context.playBGM(e)}},{key:"pauseBGM",value:function(e){y.log("[apiLog] pauseBGM()"),this.context.pauseBGM(e)}},{key:"resumeBGM",value:function(e){y.log("[apiLog] resumeBGM()"),this.context.resumeBGM(e)}},{key:"stopBGM",value:function(e){y.log("[apiLog] stopBGM()"),this.context.stopBGM(e)}},{key:"setBGMVolume",value:function(e){y.log("[apiLog] setBGMVolume() volume:",e),e&&e.volume&&"object"===r(e.volume)&&e.volume.volume?this.context.setBGMVolume(e.volume):this.context.setBGMVolume(e)}},{key:"setMICVolume",value:function(e){y.log("[apiLog] setMICVolume() volume:",e),e&&e.volume&&"object"===r(e.volume)&&e.volume.volume?this.context.setMICVolume(e.volume):this.context.setMICVolume(e)}},{key:"startPreview",value:function(e){y.log("[apiLog] startPreview()"),this.context.startPreview(e)}},{key:"stopPreview",value:function(e){y.log("[apiLog] stopPreview()"),this.context.stopPreview(e)}},{key:"reset",value:function(){return console.log("Pusher reset",this.context),this.pusherConfig={},this.context&&(this.stop({success:function(){console.log("Pusher context.stop()")}}),this.context=null),this.pusherAttributes}}]),e}(),$=i((function e(t){s(this,e),Object.assign(this,{userID:"",streams:{}},t)})),ee=function(){function e(t,r){s(this,e),this.ctx=r,this.playerAttributes={},Object.assign(this.playerAttributes,f,{userID:"",streamType:"",streamID:"",id:"",hasVideo:!1,hasAudio:!1,volume:0,playerContext:void 0},t)}return i(e,[{key:"play",value:function(e){this.getPlayerContext().play(e)}},{key:"stop",value:function(e){this.getPlayerContext().stop(e)}},{key:"mute",value:function(e){this.getPlayerContext().mute(e)}},{key:"pause",value:function(e){this.getPlayerContext().pause(e)}},{key:"resume",value:function(e){this.getPlayerContext().resume(e)}},{key:"requestFullScreen",value:function(e){var t=this;return new Promise((function(r,s){t.getPlayerContext().requestFullScreen({direction:e.direction,success:function(e){r(e)},fail:function(e){s(e)}})}))}},{key:"requestExitFullScreen",value:function(){var e=this;return new Promise((function(t,r){e.getPlayerContext().exitFullScreen({success:function(e){t(e)},fail:function(e){r(e)}})}))}},{key:"snapshot",value:function(e){var t=this;return y.log("[playerSnapshot]",e),new Promise((function(e,r){t.getPlayerContext().snapshot({quality:"raw",complete:function(t){t.tempImagePath?(wx.saveImageToPhotosAlbum({filePath:t.tempImagePath,success:function(r){y.log("save photo is success",r),e(t)},fail:function(e){y.error("save photo is fail",e),r(e)}}),e(t)):(y.error("snapShot 回调失败",t),r(new Error("截图失败")))}})}))}},{key:"setPlayerAttributes",value:function(e){Object.assign(this.playerAttributes,e)}},{key:"getPlayerContext",value:function(){return this.playerContext||(this.playerContext=wx.createLivePlayerContext(this.playerAttributes.id,this.ctx)),this.playerContext}},{key:"reset",value:function(){this.playerContext&&(this.playerContext.stop(),this.playerContext=void 0),Object.assign(this.playerAttributes,f,{userID:"",streamType:"",streamID:"",hasVideo:!1,hasAudio:!1,volume:0,playerContext:void 0})}}]),e}(),te="UserController",re=function(){function e(t,r){s(this,e),this.ctx=r,this.userMap=new Map,this.userList=[],this.streamList=[],this.emitter=t}return i(e,[{key:"userEventHandler",value:function(e){var t=e.detail.code,r=e.detail.message,s={name:F,code:t,message:r,data:""};switch(t){case 0:y.log(r,t);break;case 1001:y.log("已经连接推流服务器",t),s.name=S;break;case 1002:y.log("已经与服务器握手完毕,开始推流",t),s.name=k;break;case 1003:y.log("打开摄像头成功",t),s.name=R;break;case 1004:y.log("录屏启动成功",t),s.name=P;break;case 1005:y.log("推流动态调整分辨率",t),s.name=M;break;case 1006:y.log("推流动态调整码率",t),s.name=U;break;case 1007:y.log("首帧画面采集完成",t),s.name=C;break;case 1008:y.log("编码器启动",t),s.name=x;break;case 1018:y.log("进房成功",t),s.name=w,s.data="event enterRoom success",this.emitter.emit(g.LOCAL_JOIN);break;case 1019:y.log("退出房间",t),r.indexOf("reason[0]")>-1?(s.name=V,s.data="event exitRoom success"):(s.name=B,s.data="event abnormal exitRoom",this.emitter.emit(g.KICKED_OUT));break;case 2003:y.log("渲染首帧视频",t),s.name=G;break;case-1301:y.error("打开摄像头失败: ",t),s.name=O,s.data="event start camera failed",this.emitter.emit(g.ERROR,{code:t,message:r});break;case-1302:s.name=O,s.data="event start microphone failed",y.error("打开麦克风失败: ",t),this.emitter.emit(g.ERROR,{code:t,message:r});break;case-1303:y.error("视频编码失败: ",t),s.name=O,s.data="event video encode failed",this.emitter.emit(g.ERROR,{code:t,message:r});break;case-1304:y.error("音频编码失败: ",t),s.name=O,s.data="event audio encode failed",this.emitter.emit(g.ERROR,{code:t,message:r});break;case-1307:y.error("推流连接断开: ",t),s.name=O,s.data="event pusher stream failed",this.emitter.emit(g.ERROR,{code:t,message:r});break;case-100018:y.error("进房失败: userSig 校验失败，请检查 userSig 是否填写正确",t,r),s.name=O,s.data="event userSig is error",this.emitter.emit(g.ERROR,{code:t,message:r});break;case 5e3:y.log("小程序被挂起: ",t),s.name=j,s.data="miniApp is hang";break;case 5001:y.log("小程序悬浮窗被关闭: ",t),s.name=N;break;case 1021:y.log("网络类型发生变化，需要重新进房",t);break;case 2007:y.log("本地视频播放loading: ",t);break;case 2004:y.log("本地视频播放开始: ",t);break;case 1031:case 1032:case 1033:case 1034:this._handleUserEvent(e)}I.log(s)}},{key:"_handleUserEvent",value:function(e){var t,r=e.detail.code,s=e.detail.message;if(!e.detail.message||"string"!=typeof s)return y.warn(te,"userEventHandler 数据格式错误"),!1;try{t=JSON.parse(e.detail.message)}catch(e){return y.warn(te,"userEventHandler 数据格式错误",e),!1}switch(this.emitter.emit(g.LOCAL_STATE_UPDATE,e),I.log({name:H,code:r,message:s,data:t}),r){case 1031:this.addUser(t);break;case 1032:this.removeUser(t);break;case 1033:this.updateUserVideo(t);break;case 1034:this.updateUserAudio(t)}}},{key:"addUser",value:function(e){var t=this;y.log("addUser",e);var r=e.userlist;Array.isArray(r)&&r.length>0&&r.forEach((function(e){var r=e.userid,s=t.getUser(r);s||(s=new $({userID:r}),t.userList.push({userID:r})),t.userMap.set(r,s),t.emitter.emit(g.REMOTE_USER_JOIN,{userID:r,userList:t.userList,playerList:t.getPlayerList()}),I.log({name:Y,userID:r,userList:t.userList,playerList:t.getPlayerList()})}))}},{key:"removeUser",value:function(e){var t=this,r=e.userlist;Array.isArray(r)&&r.length>0&&r.forEach((function(e){var r=e.userid,s=t.getUser(r);s&&s.streams&&(t._removeUserAndStream(r),s.streams.main&&s.streams.main.reset(),s.streams.aux&&s.streams.aux.reset(),t.emitter.emit(g.REMOTE_USER_LEAVE,{userID:r,userList:t.userList,playerList:t.getPlayerList()}),I.log({name:K,userID:r,userList:t.userList,playerList:t.getPlayerList()}),s=void 0,t.userMap.delete(r))}))}},{key:"updateUserVideo",value:function(e){var t=this;y.log(te,"updateUserVideo",e);var r=e.userlist;Array.isArray(r)&&r.length>0&&r.forEach((function(e){var r=e.userid,s=e.streamtype,a="".concat(r,"_").concat(s),i=a,n=e.hasvideo,o=e.playurl,u=t.getUser(r);if(u){var l=u.streams[s];y.log(te,"updateUserVideo start",u,s,l),l?(l.setPlayerAttributes({hasVideo:n}),n||l.playerAttributes.hasAudio||t._removeStream(l)):(l=new ee({userID:r,streamID:a,hasVideo:n,src:o,streamType:s,id:i},t.ctx),u.streams[s]=l,t._addStream(l)),"aux"===s&&(n?(l.objectFit="contain",t._addStream(l)):t._removeStream(l)),t.userList.find((function(e){if(e.userID===r)return e["has".concat(s.replace(/^\S/,(function(e){return e.toUpperCase()})),"Video")]=n,!0})),y.log(te,"updateUserVideo end",u,s,l);var c=n?g.REMOTE_VIDEO_ADD:g.REMOTE_VIDEO_REMOVE;t.emitter.emit(c,{player:l.playerAttributes,userList:t.userList,playerList:t.getPlayerList()}),I.log({name:q,player:l.playerAttributes,userList:t.userList,playerList:t.getPlayerList()})}}))}},{key:"updateUserAudio",value:function(e){var t=this,r=e.userlist;Array.isArray(r)&&r.length>0&&r.forEach((function(e){var r=e.userid,s="main",a="".concat(r,"_").concat(s),i=a,n=e.hasaudio,o=e.playurl,u=t.getUser(r);if(u){var l=u.streams.main;l?(l.setPlayerAttributes({hasAudio:n}),n||l.playerAttributes.hasVideo||t._removeStream(l)):(l=new ee({userID:r,streamID:a,hasAudio:n,src:o,streamType:s,id:i},t.ctx),u.streams.main=l,t._addStream(l)),t.userList.find((function(e){if(e.userID===r)return e["has".concat(s.replace(/^\S/,(function(e){return e.toUpperCase()})),"Audio")]=n,!0}));var c=n?g.REMOTE_AUDIO_ADD:g.REMOTE_AUDIO_REMOVE;t.emitter.emit(c,{player:l.playerAttributes,userList:t.userList,playerList:t.getPlayerList()}),I.log({name:J,player:l.playerAttributes,userList:t.userList,playerList:t.getPlayerList()})}}))}},{key:"getUser",value:function(e){return this.userMap.get(e)}},{key:"getStream",value:function(e){var t=e.userID,r=e.streamType,s=this.userMap.get(t);if(s)return s.streams[r]}},{key:"getUserList",value:function(){return this.userList}},{key:"getStreamList",value:function(){return this.streamList}},{key:"getPlayerList",value:function(){for(var e=this.getStreamList(),t=[],r=0;r<e.length;r++)t.push(e[r].playerAttributes);return t}},{key:"reset",value:function(){return this.streamList.forEach((function(e){e.reset()})),this.streamList=[],this.userList=[],this.userMap.clear(),{userList:this.userList,streamList:this.streamList}}},{key:"_removeUserAndStream",value:function(e){this.streamList=this.streamList.filter((function(t){return t.playerAttributes.userID!==e&&""!==t.playerAttributes.userID})),this.userList=this.userList.filter((function(t){return t.userID!==e}))}},{key:"_addStream",value:function(e){this.streamList.includes(e)||this.streamList.push(e)}},{key:"_removeStream",value:function(e){this.streamList=this.streamList.filter((function(t){return t.playerAttributes.userID!==e.playerAttributes.userID||t.playerAttributes.streamType!==e.playerAttributes.streamType})),this.getUser(e.playerAttributes.userID).streams[e.playerAttributes.streamType]=void 0}}]),e}(),se=function(){function e(){s(this,e)}return i(e,[{key:"on",value:function(e,t,r){"function"==typeof t?(this._stores=this._stores||{},(this._stores[e]=this._stores[e]||[]).push({cb:t,ctx:r})):console.error("listener must be a function")}},{key:"emit",value:function(e){this._stores=this._stores||{};var t,r=this._stores[e];if(r){r=r.slice(0),(t=[].slice.call(arguments,1))[0]={eventCode:e,data:t[0]};for(var s=0,a=r.length;s<a;s++)r[s].cb.apply(r[s].ctx,t)}}},{key:"off",value:function(e,t){if(this._stores=this._stores||{},arguments.length){var r=this._stores[e];if(r)if(1!==arguments.length){for(var s=0,a=r.length;s<a;s++)if(r[s].cb===t){r.splice(s,1);break}}else delete this._stores[e]}else this._stores={}}}]),e}();return function(){function e(t,r){var a=this;s(this,e),this.env="prod",this.ctx=t,this.eventEmitter=new se,this.pusherInstance=null,this.userController=new re(this.eventEmitter,this.ctx),this.EVENT=g,this.TUIScene=null==r?void 0:r.TUIScene,"test"!==(null==r?void 0:r.env)?wx.getSystemInfo({success:function(e){return a.systemInfo=e}}):(this.env="test",I.log=function(){},y.log=function(){},y.warn=function(){})}return i(e,[{key:"initLog",value:function(e){I.setConfig({sdkAppId:e.sdkAppID,userId:e.userID,version:"wechat-mini",TUIScene:this.TUIScene,env:this.env})}},{key:"setLogLevel",value:function(e){y.setLogLevel(e)}},{key:"on",value:function(e,t,r){y.log("[on] 事件订阅: ".concat(e)),this.eventEmitter.on(e,t,r)}},{key:"off",value:function(e,t){y.log("[off] 取消订阅: ".concat(e)),this.eventEmitter.off(e,t)}},{key:"createPusher",value:function(e){return this.pusherInstance=new z(e,this.ctx),y.log("pusherInstance",this.pusherInstance),this.pusherInstance}},{key:"getPusherInstance",value:function(){return this.pusherInstance}},{key:"enterRoom",value:function(e){y.log("[apiLog] [enterRoom]",e);var r=function(e){if(!v(e))return null;e.scene=e.scene&&"rtc"!==e.scene?e.scene:"videocall",e.enableBlackStream=e.enableBlackStream||"",e.encsmall=e.encsmall||0,e.cloudenv=e.cloudenv||"PRO",e.streamID=e.streamID||"",e.userDefineRecordID=e.userDefineRecordID||"",e.privateMapKey=e.privateMapKey||"",e.pureAudioMode=e.pureAudioMode||"",e.recvMode=e.recvMode||1;var t="";return t=e.strRoomID?"&strroomid=".concat(e.strRoomID):"&roomid=".concat(e.roomID),"room://cloud.tencent.com/rtc?sdkappid=".concat(e.sdkAppID).concat(t,"&userid=").concat(e.userID,"&usersig=").concat(e.userSig,"&appscene=").concat(e.scene,"&encsmall=").concat(e.encsmall,"&cloudenv=").concat(e.cloudenv,"&enableBlackStream=").concat(e.enableBlackStream,"&streamid=").concat(e.streamID,"&userdefinerecordid=").concat(e.userDefineRecordID,"&privatemapkey=").concat(e.privateMapKey,"&pureaudiomode=").concat(e.pureAudioMode,"&recvmode=").concat(e.recvMode,"&component=").concat(function(){var e="";try{e=wx&&wx.TUIScene?wx.TUIScene:wx&&wx.getStorageSync&&wx.getStorageSync("TUIScene")?wx.getStorageSync("TUIScene"):getApp&&getApp()&&getApp().globalData&&getApp().globalData.TUIScene?getApp().globalData.TUIScene:""}catch(t){e="",console.error(t)}switch(e){case"sampleDemo":return 2;case"TUICalling":return 3;case"TUIRoom":return 5;case"TUIVoiceRoom":return 6;case"TIMCalling":return 10;default:return 1}}())}(e);return this.initLog(t(t({},e),{},{env:this.env})),I.log({name:D}),r||(this.eventEmitter.emit(g.ERROR,{message:"进房参数错误"}),I.log({name:O,message:"进房参数错误",data:e})),this.pusherInstance.setPusherAttributes(t(t({},e),{},{url:r})),y.warn("[statusLog] [enterRoom]",this.pusherInstance.pusherAttributes),I.log({name:_,pusherConfig:this.pusherInstance.pusherAttributes}),this.getPusherAttributes()}},{key:"exitRoom",value:function(){this.userController.reset();var e=Object.assign({pusher:this.pusherInstance.reset()},{playerList:this.userController.getPlayerList()});return this.eventEmitter.emit(g.LOCAL_LEAVE),I.log({name:L,data:e}),e}},{key:"getPlayerList",value:function(){var e=this.userController.getPlayerList();return y.log("[apiLog][getStreamList]",e),e}},{key:"setPusherAttributes",value:function(e){return y.log("[apiLog] [setPusherAttributes], ",e),this.pusherInstance.setPusherAttributes(e),y.warn("[statusLog] [setPusherAttributes]",this.pusherInstance.pusherAttributes),I.log({name:b,options:e,pusherConfig:this.pusherInstance.pusherAttributes}),this.pusherInstance.pusherAttributes}},{key:"getPusherAttributes",value:function(){return y.log("[apiLog] [getPusherConfig]"),this.pusherInstance.pusherAttributes}},{key:"setPlayerAttributes",value:function(e,t){y.log("[apiLog] [setPlayerAttributes] id",e,"options: ",t);var r=this._transformStreamID(e),s=r.userID,a=r.streamType,i=this.userController.getStream({userID:s,streamType:a});return i?(i.setPlayerAttributes(t),I.log({name:T,id:e,options:t,playerList:this.getPlayerList()}),this.getPlayerList()):this.getPlayerList()}},{key:"getPlayerInstance",value:function(e){var t=this._transformStreamID(e),r=t.userID,s=t.streamType;return y.log("[api][getPlayerInstance] id:",e),this.userController.getStream({userID:r,streamType:s})}},{key:"switchStreamType",value:function(e){y.log("[apiLog] [switchStreamType] id: ",e);var t=this._transformStreamID(e),r=t.userID,s=t.streamType,a=this.userController.getStream({userID:r,streamType:s});return"main"===a._definitionType?(a.src=a.src.replace("main","small"),a._definitionType="small"):(a.src=a.src.replace("small","main"),a._definitionType="main"),this.getPlayerList()}},{key:"pusherEventHandler",value:function(e){this.userController.userEventHandler(e)}},{key:"pusherNetStatusHandler",value:function(e){var t=e.detail.info;this.pusherInstance.setPusherAttributes(t),this.eventEmitter.emit(g.LOCAL_NET_STATE_UPDATE,{pusher:this.pusherInstance.pusherAttributes})}},{key:"pusherErrorHandler",value:function(e){try{var t=e.detail.errCode,r=e.detail.errMsg;this.eventEmitter.emit(g.ERROR,{code:t,message:r}),I.log({name:O,code:t,message:r})}catch(t){y.error("pusher error data parser exception",e,t)}}},{key:"pusherBGMStartHandler",value:function(e){this.eventEmitter.emit(g.BGM_PLAY_START)}},{key:"pusherBGMProgressHandler",value:function(e){var t,r,s,a;this.eventEmitter.emit(g.BGM_PLAY_PROGRESS,{progress:null===(t=e.data)||void 0===t||null===(r=t.detail)||void 0===r?void 0:r.progress,duration:null===(s=e.data)||void 0===s||null===(a=s.detail)||void 0===a?void 0:a.duration})}},{key:"pusherBGMCompleteHandler",value:function(e){this.eventEmitter.emit(g.BGM_PLAY_COMPLETE)}},{key:"pusherAudioVolumeNotify",value:function(e){this.pusherInstance.pusherAttributes.volume=e.detail.volume,this.eventEmitter.emit(g.LOCAL_AUDIO_VOLUME_UPDATE,{pusher:this.pusherInstance.pusherAttributes})}},{key:"playerEventHandler",value:function(e){y.log("[statusLog][playerStateChange]",e),this.eventEmitter.emit(g.REMOTE_STATE_UPDATE,e)}},{key:"playerFullscreenChange",value:function(e){this.eventEmitter.emit(g.VIDEO_FULLSCREEN_UPDATE)}},{key:"playerNetStatus",value:function(e){var t=this._transformStreamID(e.currentTarget.dataset.streamid),r=t.userID,s=t.streamType,a=this.userController.getStream({userID:r,streamType:s});!a||a.videoWidth===e.detail.info.videoWidth&&a.videoHeight===e.detail.info.videoHeight||(a.setPlayerAttributes({netStatus:e.detail.info}),this.eventEmitter.emit(g.REMOTE_NET_STATE_UPDATE,{playerList:this.userController.getPlayerList()}))}},{key:"playerAudioVolumeNotify",value:function(e){var t=this._transformStreamID(e.currentTarget.dataset.streamid),r=t.userID,s=t.streamType,a=this.userController.getStream({userID:r,streamType:s}),i=e.detail.volume;a.setPlayerAttributes({volume:i}),this.eventEmitter.emit(g.REMOTE_AUDIO_VOLUME_UPDATE,{playerList:this.userController.getPlayerList()})}},{key:"_transformStreamID",value:function(e){var t=e.lastIndexOf("_");return{userID:e.slice(0,t),streamType:e.slice(t+1)}}}]),e}()}));
//# sourceMappingURL=trtc-wx.js.map
 
 			}); 
		define("pages/inquiry-video/utils/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			

const wxRequest = require('./request');

const USER_FINISH_URL = '/api/user/online-inquiry/finish'; // 用户主动结束视频门诊
const VIDEO_STATUS_URL = '/api/user/online-inquiry/query'; // 获取视频问诊状态
const USER_ENTER_URL = '/api/user/online-inquiry/enter'; // 用户进入视频问诊
const HISTORY_MSG_URL = '/api/user/online-inquiry/chat-records'; // 历史消息
const SOCKET_CONNECTED_URL = '/api/user/online-inquiry/connected'; // 通知服务器 socket 链接成功
const VIDEO_TOKEN_URL = '/api/common/online-inquiry/video/token'; // 获取进入视频问诊时需要的参数
const USER_LEAVE_URL = '/api/user/online-inquiry/leave'; // 通知服务器用户离开房间
const SEND_MSG_URL = '/api/user/online-inquiry/chat-record/send'; // 用户发送消息
const CAN_SUB_URL = '/cooperation/wap/mini_sub/can_sub/'// 用户查询是否需要订阅消息 
const USER_SUB_URL = '/cooperation/wap/mini_sub/save/'// 用户选择订阅消息 

/**
 * 封装春雨 post 请求
 * @param {string} url 请求 url 
 * @param {object} data 提交信息
 */
const postCyInfo = (url, data) => {
  const reqData = {
    method: 'POST',
    url,
    data
  }
  return wxRequest(reqData);
}

/**
 * 封装互联网医院 get 请求
 * @param {string} host 互联网医院域名 
 * @param {string} url 请求 url 
 * @param {string} token 互联网医院 token 
 * @param {object} params 查询参数 
 */
const getCHResult = (host, url, token, params) => {
  const data = {
    url,
    header: {
      CYCloudHospitalAuth: token
    },
    data: params,
  };
  return wxRequest(data, host);
}

/**
 * 封装互联网医院 post 请求
 * @param {string} host 互联网医院域名 
 * @param {string} url 请求 url 
 * @param {string} token 互联网医院 token 
 * @param {object} data 提交信息
 */
const postCHInfo = (host, url, token, data) => {
  const reqData = {
    url,
    method: 'POST',
    header: {
      CYCloudHospitalAuth: token,
    },
    data,
  }

  return wxRequest(reqData, host);
}

/**
 * 用户主动结束视频问诊
 * @param {string} host 互联网医院域名
 * @param {string} token 互联网医院 token
 * @param {object} data 提交信息
 */
const userFinishApi = (host, token, data) => {
  return postCHInfo(host, USER_FINISH_URL, token, data);
}


/**
 * 获取视频问诊状态
 * @param {string} host 互联网医院域名
 * @param {string} token 互联网医院 token
 * @param {object} data 提交信息
 */
const getVideoStatusApi = (host, token, data) => {
  return postCHInfo(host, VIDEO_STATUS_URL, token, data);
}

/**
 * 用户进入视频问诊
 * @param {string} host 互联网医院域名
 * @param {string} token 互联网医院 token
 * @param {object} data 提交信息
 */
const userEnterApi = (host, token, data) => {
  return postCHInfo(host, USER_ENTER_URL, token, data);
}

/**
 * 用户进入视频问诊
 * @param {string} host 互联网医院域名
 * @param {string} token 互联网医院 token
 * @param {object} params 请求参数
 */
const getHistoryMsgApi = (host, token, params) => {
  return getCHResult(host, HISTORY_MSG_URL, token, params);
}

/**
 * 通知服务器 socket 链接成功
 * @param {string} host 互联网医院域名
 * @param {string} token 互联网医院 token
 * @param {object} data 提交信息
 */
const socketConnectedApi = (host, token, data) => {
  return postCHInfo(host, SOCKET_CONNECTED_URL, token, data);
}

/**
 * 获取进入视频房间所需的信息
 * @param {string} host 互联网医院域名
 * @param {string} token 互联网医院 token
 * @param {object} data 提交信息
 */
const getVideoTokenApi = (host, token, data) => {
  return postCHInfo(host, VIDEO_TOKEN_URL, token, data);
}

/**
 * 通知服务器用户离开房间
 * @param {string} host 互联网医院域名
 * @param {string} token 互联网医院 token
 * @param {object} data 提交信息
 */
const userLeaveApi = (host, token, data) => {
  return postCHInfo(host, USER_LEAVE_URL, token, data);
}

/**
 * 用户发送消息
 * @param {string} host 互联网医院域名
 * @param {string} token 互联网医院 token
 * @param {object} data 提交信息
 */
const sendMsgApi = (host, token, data) => {
  return postCHInfo(host, SEND_MSG_URL, token, data);
}

/**
 * 用户是否订阅消息
 * @param {string} host 互联网医院域名
 * @param {string} token 互联网医院 token
 * @param {object} data 提交信息
 */
 const userCanSubApi = (data) => {
  return postCyInfo(CAN_SUB_URL,data);
}

/**
 * 用户选择订阅消息
 * @param {string} host 互联网医院域名
 * @param {string} token 互联网医院 token
 * @param {object} data 提交信息
 */
 const userSubMessageApi = (data) => {
  return postCyInfo(USER_SUB_URL,data);
}

module.exports = {
  userFinishApi,
  getVideoStatusApi,
  userEnterApi,
  getHistoryMsgApi,
  socketConnectedApi,
  getVideoTokenApi,
  userLeaveApi,
  sendMsgApi,
  userCanSubApi,
  userSubMessageApi,
};
 
 			}); 
		define("pages/inquiry-video/utils/enum.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
// 消息code-类型对照
const MSG_CODE_TYPE = {
    system: [100, 101, 102, 103, 110, 1001, 1002, 1003], // 系统消息
    text: [1, 100, 110, 1002, 1003, 1004], // 需要以文字形式展示的消息
    image: [2], // 需要以图片形式展示的消息
    card: [101, 102, 103, 151, 201], // 需要以卡片形式展示的消息
  };

// 消息发送方map
const MSG_AUTHOR_MAP = {
    patient: 'patient', // 患者发送的消息
    doctor: 'doctor', // 医生发送的消息
    system: 'system', // 系统消息
  };
  module.exports = {MSG_CODE_TYPE,MSG_AUTHOR_MAP}; 
 			}); 
		define("pages/inquiry-video/utils/formatMsg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
/*
 * @Author: zhangtingdong zhangtingdong@chunyu.me
 * @Date: 2023-09-12 15:45:24
 * @LastEditors: zhangtingdong zhangtingdong@chunyu.me
 * @LastEditTime: 2023-09-14 16:16:29
 * @FilePath: /wxapp_inquiry_video_plugin/plugin/pages/inquiry-video/utils/formatMsg.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { MSG_AUTHOR_MAP, MSG_CODE_TYPE } = require('./enum');
console.log(MSG_CODE_TYPE, 'MSG_CODE_TYPE');
/**
 * 格式化聊天消息
 *
 * @param {object} msgItem 单条消息
 * @returns {object} 格式化后的消息
 */
function formatMsg(msgItem, doctorInfo) {
  const author = getMsgAuthor(msgItem, doctorInfo);

  switch (author) {
    case MSG_AUTHOR_MAP.patient:
      msgItem.isPatient = true;
      break;
    case MSG_AUTHOR_MAP.doctor:
      msgItem.isDoctor = true;
      break;
    case MSG_AUTHOR_MAP.system:
      msgItem.isSystemMsg = true;
      break;
    default:
      console.log('消息错误');
  }

  let { msgType } = msgItem;
  msgType = Number(msgType);

  if (MSG_CODE_TYPE.text.includes(msgType)) {
    msgItem.textContent = parseTextMsg(msgItem.content);
  } else if (MSG_CODE_TYPE.image.includes(msgType)) {
    msgItem.imgContent = parseImgMsg(msgItem.content);
  } else if (MSG_CODE_TYPE.card.includes(msgType)) {
    msgItem.isCard = true;
    msgItem.cardContent = parseCardMsg(msgItem.content);
  }

  return msgItem;
}

/**
 * 判断消息发送者（患者、医生、系统）
 *
 * @param {object} msgItem 服务器返回的消息
 * @returns {string} 消息发送者
 */
function getMsgAuthor(msgItem, doctorInfo) {
  const { userId, msgType, isDoctorLocal, isPatientLocal } = msgItem;

  if (!userId || MSG_CODE_TYPE.system.includes(Number(msgType))) {
    return MSG_AUTHOR_MAP.system;
  }

  if ((userId && userId !== doctorInfo.userId) || isPatientLocal) {
    return MSG_AUTHOR_MAP.patient;
  }

  if ((userId && userId === doctorInfo.userId) || isDoctorLocal) {
    return MSG_AUTHOR_MAP.doctor;
  }
}

/**
 * 解析文本类型消息
 *
 * @param {object|string} content 消息内容
 * @returns {string} 解析后的文本
 */
function parseTextMsg(content) {
  const result = parseMsg(content);
  return result && result.text ? result.text : '';
}

/**
 * 解析卡片类型消息
 *
 * @param {object|string} content 消息内容
 * @returns {object} 解析后的卡片内容
 */
function parseCardMsg(content) {
  const result = parseMsg(content);
  const {
    title = '',
    desc = '',
    image = '',
    url = '',
    service_state_icon,
    service_button_text,
    contents,
  } = result;

  return {
    title,
    desc,
    image,
    url,
    service_state_icon,
    service_button_text,
    contents,
  };
}

/**
 * 解析消息
 *
 * @param {string} content 消息内容
 * @returns {object} 解析后的消息对象
 */
function parseMsg(content) {
  let result = {};
  try {
    result = JSON.parse(content);
  } catch (e) {
    console.error('消息解析错误', e);
  }
  return result;
}

/**
 * 解析图片类型消息
 *
 * @param {object|string} content 消息内容
 */
function parseImgMsg(content) {
  const result = parseMsg(content);
  if (result && result.url) {
    return result.url;
  } else {
    return '';
  }
}

module.exports = formatMsg;
 
 			}); 
		define("pages/inquiry-video/utils/host.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
const defaultHostKey = 'biz';
let currentHostKey = wx.getStorageSync('BASE_HOST_KEY') || defaultHostKey;
const miniProgramExports = requireMiniProgram();
const hostMap = {
  test: 'https://test.chunyutianxia.com',
  biz: 'https://biztest.chunyutianxia.com',
  dev: 'https://devtest.chunyutianxia.com',
  online: 'https://www.chunyuyisheng.com',
  stage: 'https://stage.chunyuyisheng.com'
};

const env = wx.getAccountInfoSync().miniProgram.envVersion;
const isDevelop = env === 'develop' || env === 'trial';

if (!isDevelop) {
  currentHostKey = 'online';
}

if(miniProgramExports.host){
  currentHostKey = miniProgramExports.host;
}
wx.removeStorageSync('BASE_HOST_KEY');
console.log(`当前环境是${hostMap[currentHostKey]}`);

const baseHost = hostMap[currentHostKey];
// export default baseHost;

module.exports =  baseHost
 
 			}); 
		define("pages/inquiry-video/utils/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
/*
 * @Author: zhangtingdong zhangtingdong@chunyu.me
 * @Date: 2023-07-13 17:34:41
 * @LastEditors: zhangtingdong zhangtingdong@chunyu.me
 * @LastEditTime: 2023-09-25 14:35:16
 * @FilePath: /wxapp-inquiry-video-plugin/plugin/pages/inquiry-video/utils/request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const baseHost = require('./host.js');  
const rHttp = /^http(s)?:\/\//;  
  
const getMyHeader = () => {  
  return {  
    'Content-Type': 'application/json'  
  };  
};  
  
const wxRequest = (params, host = baseHost) => {  
  return new Promise((resolve, reject) => {  
    const { url = '', data = {}, method = 'GET', header = {} } = params;  
    const myHeader = getMyHeader();  
      
    if (method === 'POST') {  
      myHeader['Content-Type'] = 'application/x-www-form-urlencoded';  
    }   
  
    const requestHeader = Object.assign({}, header, myHeader);  
    const requestData = Object.assign({}, data, { from_wx_mini: 1 });  
  
    wx.request({  
      url: rHttp.test(url) ? url : `${host}${url}`,  
      data: requestData,  
      header: requestHeader,  
      method,  
      success(res = {}) {  
        const { statusCode, data = {} } = res;  
        if (statusCode >= 200 && statusCode <= 400) {  
          resolve(data);  
        } else {  
          reject({ statusCode, ...data });  
        }  
      },  
      fail(err) {  
        console.log(`${url} request error:::`, err);  
        reject({ error_msg: '网络请求出错，请稍后重试', err });  
      },  
    });  
  });  
};  
  
module.exports = wxRequest; 
 			}); 
		define("pages/inquiry-video/utils/socket.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
const { Stomp } = require('./stomp.min.js');
const { HeartCheckClass } = require('./utils.js');
const { socketConnectedApi } = require('./api.js');
Stomp.setInterval = (interval, f) => {
  return setInterval(f, interval);
};
Stomp.clearInterval = (id) => {
  return clearInterval(id);
};
class imSocket {
  constructor(inquiryId, crossData) {
    this.inquiryId = inquiryId;
    this.crossData = crossData;
    this.socketData = {
      isConnected: false,
      messageQueue: [],
      reconnect: true,
      reconnectTimer: null,
      reconnectCount: 0,
    };
    this.socketTask = null;
    this.stompClient = null;
    this.heartCheck = null;
  }

  initSocket() {
    this.socketTask = wx.connectSocket({
      url: `${this.crossData.partner_url.replace(
        'https',
        'wss'
      )}/ws/websocket?CYCloudHospitalAuth=${this.crossData.token}`,
      success: (res) => {
        console.log('wx.connectSocket success', res);
        this.setupWebSocketListeners();
      },
      fail: (res) => {
        this.reconnectSocket();
        console.log('wx.connectSocket fail', res);
      },
    });
  }

  setupWebSocketListeners() {
    this.socketTask.onOpen(() => {
      this.socketData.isConnected = true;
      this.connectStomp();
      this.stompClient.ws.onopen();
      this.sendQueuedMessages();
    });

    this.socketTask.onMessage((msg) => {
      this.stompClient.ws.onmessage(msg);
    });

    this.socketTask.onError((res) => {
      console.log('WebSocket错误事件:', res);
      this.reconnectSocket();
    });

    this.socketTask.onClose((res) => {
      console.log('WebSocket连接关闭:', res);
      this.reconnectSocket();
    });
  }

  sendQueuedMessages() {
    if (this.socketData.isConnected) {
      for (const message of this.socketData.messageQueue) {
        this.socketTask.send({
          data: message,
        });
      }
      this.socketData.messageQueue = [];
    }
  }

  reconnectSocket() {
    if (this.socketData.reconnect && !this.socketData.isConnected) {
      const delay = Math.min(
        1000 * Math.pow(2, this.socketData.reconnectCount),
        30000
      );
      console.log(`Reconnecting in ${delay / 1000} seconds...`);

      this.socketData.reconnectTimer = setTimeout(() => {
        this.socketData.reconnectCount++;
        this.initializeWebSocket();
      }, delay);
    } else {
      console.log('不进入重连逻辑');
    }
  }

  connectStomp() {
    this.stompClient = Stomp.over({
      send: (msg) => {
        if (this.socketData.isConnected) {
          this.socketTask.send({
            data: msg,
          });
        } else {
          this.socketData.messageQueue.push(msg);
        }
      },
      close: () => {
        if (this.socketData.isConnected) {
          this.socketData.isConnected = false;
          this.socketTask.close({
            success: (res) => {
              console.log('wx.closeSocket success', res);
            },
            fail: (res) => {
              console.log('wx.closeSocket fail', res);
            },
          });
        }
      },
    });
    this.stompClient.debug = (str) => {
      console.log('>>> stomp.debug <<<', str);
    };

    this.heartCheck = new HeartCheckClass(this.stompClient, this.inquiryId);
    this.heartCheck.start();
    let inInquiryId = this.inquiryId;
    this.stompClient.connect(
      {
        id: inInquiryId,
        type: 2,
      },
      this.onConnected.bind(this),
      this.onReconnect.bind(this)
    );
  }

  setOnMessageReceivedCallback(callback) {
    this.onMessageReceivedCallback = callback;
  }

  onConnected() {
    const { partner_url, token } = this.crossData;
    // 通知服务器连接成功
    socketConnectedApi(partner_url, token, {
      inquiryId: this.inquiryId,
    });
    this.stompClient.subscribe(
      `/topic/inquiry-chat/${this.inquiryId}`,
      (info) => {
        if (this.onMessageReceivedCallback) {
          this.onMessageReceivedCallback(info);
        }
      },
      (err) => {
        console.log(err, 'err');
      }
    );
  }

  onReconnect(err) {
    console.log(err, 'err');
  }

  closeSocket() {
    this.heartCheck.stop();
    this.stompClient &&
      this.stompClient.disconnect(
        () => {
          console.log('***key***: 退出webscoket连接');
        },
        {
          id: this.inquiryId,
          type: 2,
        }
      );
  }
}

module.exports = imSocket;
 
 			}); 
		define("pages/inquiry-video/utils/stomp.min.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
/*
 * @Author: zhangtingdong zhangtingdong@chunyu.me
 * @Date: 2023-07-13 17:33:39
 * @LastEditors: zhangtingdong zhangtingdong@chunyu.me
 * @LastEditTime: 2023-09-11 17:24:14
 * @FilePath: /wxapp_inquiry_video_plugin/plugin/pages/inquiry-video/utils/stomp.min.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Generated by CoffeeScript 1.7.1
/*
   Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0

   Copyright (C) 2010-2013 [Jeff Mesnil](http://jmesnil.net/)
   Copyright (C) 2012 [FuseSource, Inc.](http://fusesource.com)
 */
   (function () { var t, e, n, i, r = {}.hasOwnProperty, o = [].slice; t = { LF: '\n', NULL: '\x00' }; n = function () { var e; function n(t, e, n) { this.command = t; this.headers = e != null ? e : {}; this.body = n != null ? n : ''; } n.prototype.toString = function () { var e, i, o, s, u; e = [this.command]; o = this.headers['content-length'] === false ? true : false; if (o) { delete this.headers['content-length']; } u = this.headers; for (i in u) { if (!r.call(u, i)) continue; s = u[i]; e.push('' + i + ':' + s); } if (this.body && !o) { e.push('content-length:' + n.sizeOfUTF8(this.body)); } e.push(t.LF + this.body); return e.join(t.LF); }; n.sizeOfUTF8 = function (t) { if (t) { return encodeURI(t).match(/%..|./g).length; } else { return 0; } }; e = function (e) { var i, r, o, s, u, a, c, f, h, l, p, d, g, b, m, v, y; s = e.search(RegExp('' + t.LF + t.LF)); u = e.substring(0, s).split(t.LF); o = u.shift(); a = {}; d = function (t) { return t.replace(/^\s+|\s+$/g, ''); }; v = u.reverse(); for (g = 0, m = v.length; g < m; g++) { l = v[g]; f = l.indexOf(':'); a[d(l.substring(0, f))] = d(l.substring(f + 1)); } i = ''; p = s + 2; if (a['content-length']) { h = parseInt(a['content-length']); i = ('' + e).substring(p, p + h); } else { r = null; for (c = b = p, y = e.length; p <= y ? b < y : b > y; c = p <= y ? ++b : --b) { r = e.charAt(c); if (r === t.NULL) { break; } i += r; } } return new n(o, a, i); }; n.unmarshall = function (n) { var i; return function () { var r, o, s, u; s = n.split(RegExp('' + t.NULL + t.LF + '*')); u = []; for (r = 0, o = s.length; r < o; r++) { i = s[r]; if ((i != null ? i.length : void 0) > 0) { u.push(e(i)); } } return u; }(); }; n.marshall = function (e, i, r) { var o; o = new n(e, i, r); return o.toString() + t.NULL; }; return n; }(); e = function () { var e; function r(t) { this.ws = t; this.ws.binaryType = 'arraybuffer'; this.counter = 0; this.connected = false; this.heartbeat = { outgoing: 1e4, incoming: 1e4 }; this.maxWebSocketFrameSize = 16 * 1024; this.subscriptions = {}; } r.prototype.debug = function (t) { var e; return typeof window !== 'undefined' && window !== null ? (e = window.console) != null ? e.log(t) : void 0 : void 0; }; e = function () { if (Date.now) { return Date.now(); } else { return (new Date).valueOf; } }; r.prototype._transmit = function (t, e, i) { var r; r = n.marshall(t, e, i); if (typeof this.debug === 'function') { this.debug('>>> ' + r); } while (true) { if (r.length > this.maxWebSocketFrameSize) { this.ws.send(r.substring(0, this.maxWebSocketFrameSize)); r = r.substring(this.maxWebSocketFrameSize); if (typeof this.debug === 'function') { this.debug('remaining = ' + r.length); } } else { return this.ws.send(r); } } }; r.prototype._setupHeartbeat = function (n) { var r, o, s, u, a, c; if ((a = n.version) !== i.VERSIONS.V1_1 && a !== i.VERSIONS.V1_2) { return; } c = function () { var t, e, i, r; i = n['heart-beat'].split(','); r = []; for (t = 0, e = i.length; t < e; t++) { u = i[t]; r.push(parseInt(u)); } return r; }(), o = c[0], r = c[1]; if (!(this.heartbeat.outgoing === 0 || r === 0)) { s = Math.max(this.heartbeat.outgoing, r); if (typeof this.debug === 'function') { this.debug('send PING every ' + s + 'ms'); } this.pinger = i.setInterval(s, function (e) { return function () { e.ws.send(t.LF); return typeof e.debug === 'function' ? e.debug('>>> PING') : void 0; }; }(this)); } if (!(this.heartbeat.incoming === 0 || o === 0)) { s = Math.max(this.heartbeat.incoming, o); if (typeof this.debug === 'function') { this.debug('check PONG every ' + s + 'ms'); } return this.ponger = i.setInterval(s, function (t) { return function () { var n; n = e() - t.serverActivity; if (n > s * 2) { if (typeof t.debug === 'function') { t.debug('did not receive server activity for the last ' + n + 'ms'); } return t.ws.close(); } }; }(this)); } }; r.prototype._parseConnect = function () { var t, e, n, i; t = 1 <= arguments.length ? o.call(arguments, 0) : []; i = {}; switch (t.length) { case 2: i = t[0], e = t[1]; break; case 3: if (t[1] instanceof Function) { i = t[0], e = t[1], n = t[2]; } else { i.login = t[0], i.passcode = t[1], e = t[2]; } break; case 4: i.login = t[0], i.passcode = t[1], e = t[2], n = t[3]; break; default: i.login = t[0], i.passcode = t[1], e = t[2], n = t[3], i.host = t[4]; }return [i, e, n]; }; r.prototype.connect = function () { var r, s, u, a; r = 1 <= arguments.length ? o.call(arguments, 0) : []; a = this._parseConnect.apply(this, r); u = a[0], this.connectCallback = a[1], s = a[2]; if (typeof this.debug === 'function') { this.debug('Opening Web Socket...'); } this.ws.onmessage = function (i) { return function (r) { var o, u, a, c, f, h, l, p, d, g, b, m; c = typeof ArrayBuffer !== 'undefined' && r.data instanceof ArrayBuffer ? (o = new Uint8Array(r.data), typeof i.debug === 'function' ? i.debug('--- got data length: ' + o.length) : void 0, function () { var t, e, n; n = []; for (t = 0, e = o.length; t < e; t++) { u = o[t]; n.push(String.fromCharCode(u)); } return n; }().join('')) : r.data; i.serverActivity = e(); if (c === t.LF) { if (typeof i.debug === 'function') { i.debug('<<< PONG'); } return; } if (typeof i.debug === 'function') { i.debug('<<< ' + c); } b = n.unmarshall(c); m = []; for (d = 0, g = b.length; d < g; d++) { f = b[d]; switch (f.command) { case 'CONNECTED': if (typeof i.debug === 'function') { i.debug('connected to server ' + f.headers.server); } i.connected = true; i._setupHeartbeat(f.headers); m.push(typeof i.connectCallback === 'function' ? i.connectCallback(f) : void 0); break; case 'MESSAGE': p = f.headers.subscription; l = i.subscriptions[p] || i.onreceive; if (l) { a = i; h = f.headers['message-id']; f.ack = function (t) { if (t == null) { t = {}; } return a.ack(h, p, t); }; f.nack = function (t) { if (t == null) { t = {}; } return a.nack(h, p, t); }; m.push(l(f)); } else { m.push(typeof i.debug === 'function' ? i.debug('Unhandled received MESSAGE: ' + f) : void 0); } break; case 'RECEIPT': m.push(typeof i.onreceipt === 'function' ? i.onreceipt(f) : void 0); break; case 'ERROR': m.push(typeof s === 'function' ? s(f) : void 0); break; default: m.push(typeof i.debug === 'function' ? i.debug('Unhandled frame: ' + f) : void 0); } } return m; }; }(this); this.ws.onclose = function (t) { return function () { var e; e = 'Whoops! Lost connection to ' + t.ws.url; if (typeof t.debug === 'function') { t.debug(e); } t._cleanUp(); return typeof s === 'function' ? s(e) : void 0; }; }(this); return this.ws.onopen = function (t) { return function () { if (typeof t.debug === 'function') { t.debug('Web Socket Opened...'); } u['accept-version'] = i.VERSIONS.supportedVersions(); u['heart-beat'] = [t.heartbeat.outgoing, t.heartbeat.incoming].join(','); return t._transmit('CONNECT', u); }; }(this); }; r.prototype.disconnect = function (t, e) { if (e == null) { e = {}; } this._transmit('DISCONNECT', e); this.ws.onclose = null; this.ws.close(); this._cleanUp(); return typeof t === 'function' ? t() : void 0; }; r.prototype._cleanUp = function () { this.connected = false; if (this.pinger) { i.clearInterval(this.pinger); } if (this.ponger) { return i.clearInterval(this.ponger); } }; r.prototype.send = function (t, e, n) { if (e == null) { e = {}; } if (n == null) { n = ''; } e.destination = t; return this._transmit('SEND', e, n); }; r.prototype.subscribe = function (t, e, n) { var i; if (n == null) { n = {}; } if (!n.id) { n.id = 'sub-' + this.counter++; } n.destination = t; this.subscriptions[n.id] = e; this._transmit('SUBSCRIBE', n); i = this; return { id: n.id, unsubscribe: function () { return i.unsubscribe(n.id); } }; }; r.prototype.unsubscribe = function (t) { delete this.subscriptions[t]; return this._transmit('UNSUBSCRIBE', { id: t }); }; r.prototype.begin = function (t) { var e, n; n = t || 'tx-' + this.counter++; this._transmit('BEGIN', { transaction: n }); e = this; return { id: n, commit: function () { return e.commit(n); }, abort: function () { return e.abort(n); } }; }; r.prototype.commit = function (t) { return this._transmit('COMMIT', { transaction: t }); }; r.prototype.abort = function (t) { return this._transmit('ABORT', { transaction: t }); }; r.prototype.ack = function (t, e, n) { if (n == null) { n = {}; } n['message-id'] = t; n.subscription = e; return this._transmit('ACK', n); }; r.prototype.nack = function (t, e, n) { if (n == null) { n = {}; } n['message-id'] = t; n.subscription = e; return this._transmit('NACK', n); }; return r; }(); i = { VERSIONS: { V1_0: '1.0', V1_1: '1.1', V1_2: '1.2', supportedVersions: function () { return '1.1,1.0'; } }, client: function (t, n) { var r, o; if (n == null) { n = ['v10.stomp', 'v11.stomp']; } r = i.WebSocketClass || WebSocket; o = new r(t, n); return new e(o); }, over: function (t) { return new e(t); }, Frame: n }; if (typeof exports !== 'undefined' && exports !== null) { exports.Stomp = i; } if (typeof window !== 'undefined' && window !== null) { i.setInterval = function (t, e) { return window.setInterval(e, t); }; i.clearInterval = function (t) { return window.clearInterval(t); }; window.Stomp = i; } else if (!exports) { self.Stomp = i; } }).call(this); 
 			}); 
		define("pages/inquiry-video/utils/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
/*
 * @Description: 基础工具
 * @Date: 2022-06-23 10:32:08
 * @LastEditTime: 2023-09-11 16:35:28
 */

// 问诊计时
class InquriyDurationClass {
  constructor(initDuration, accCb) {
    // 设置初始通话时长
    this.setInitDuration(initDuration);
    if (accCb && typeof accCb === 'function') {
      this.accCb = accCb;
    } else {
      this.accCb = null;
    }
  }

  /**
   * 获取格式化后的计时展示文案
   * @returns 展示文案
   */
  formatDuration() {
    const minutesStr = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
    const secondsStr = this.seconds < 10 ? `0${this.seconds}` : this.seconds;

    return `${minutesStr}:${secondsStr}`;
  }

  /**
   * 设置初始时长
   * @param {number|string} duration 初始时长
   */
  setInitDuration(duration) {
    let _duration = Number(duration);
    if (!Number.isNaN(_duration) && _duration > 0) {
      this.initDuration = _duration;
    } else {
      this.initDuration = 0;
    }

    if (this.initDuration === 0) {
      this.seconds = 0;
      this.minutes = 0;
    } else {
      this.seconds = this.initDuration % 60;
      this.minutes = parseInt(this.initDuration / 60, 10);
    }
  }

  /**
   * 开始累加
   */
  startAcc() {
    this.timer = setInterval(() => {
      this.acc();
      if (this.accCb) {
        const durationStr = this.formatDuration();
        this.accCb(durationStr);
      }
    }, 1000);
  }

  /**
   * 停止累加
   */
  stopAcc() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  /**
   * 重置累加器
   */
  resetAcc() {
    this.stopAcc();
    this.seconds = 0;
    this.minutes = 0;
  }

  /**
   * 计时器 +1s
   */
  acc() {
    this.seconds += 1;
    if (this.seconds > 60) {
      this.minutes += 1;
      this.seconds = this.seconds - 60;
    }
  }
}

// 心跳检查
class HeartCheckClass {
  constructor(stompClient, inquiryId) {
    console.log(stompClient,'stompClientstompClient');
    this.stompClient = stompClient;
    this.inquiryId = inquiryId;
    this.timer = null;
  }
  start() {
    this.timer = setInterval(() => {
      this.stompClient.send('/app/heartbeat', {}, this.inquiryId);
    }, 10000);
  }
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}

/**
 * 封装 wx.showLoading
 * @param {string} title 文案
 */
const wxShowLoading = (title) => {
  wx.showLoading({
    title,
    mask: true,
  });
}

/**
 * 封装 wx.showToast
 * @param {string} title 文案
 */
const wxShowToast = (title) => {
  wx.showToast({
    title,
    icon: 'none',
    mask: true,
  });
}

/**
 * 小程序用户与客户端用户不一致处理
 */
const onInvalidUser = () => {
  wx.navigateTo({
    url: '/pages/inquery_phone_error/index',
  });
}

module.exports = {
  InquriyDurationClass,
  HeartCheckClass,
  onInvalidUser,
  wxShowLoading,
  wxShowToast,
};
 
 			}); 
		global.__wxAppCurrentFile__ = 'plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/dialog/dialog.js';global.__wxRouteBegin = true; 	define("pages/inquiry-video/components/dialog/dialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: '挂断后，本次视频问诊结束，不可再次连接',
    },
    cancelText: {
      type: String,
      value: '暂不结束'
    },
    confirmText: {
      type: String,
      value: '结束问诊'
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    confirmEvent() {
      this.triggerEvent("onTouchConfirm");
    },
    cancelEvent() {
      this.triggerEvent("onTouchCancel")
    }
  },
});
 
 			}); 	require("pages/inquiry-video/components/dialog/dialog.js");
 		global.__wxAppCurrentFile__ = 'plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/doctor-info/index.js';global.__wxRouteBegin = true; 	define("pages/inquiry-video/components/doctor-info/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
Component({
  externalClasses: ["doctorinfo"],
  /**
   * 组件的属性列表
   */
  properties: {
    doctorInfo: {
      type: Object,
      value: {}
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _confirmEvent() {
      this.triggerEvent("onTouchConfirm");
    },
  },
});
 
 			}); 	require("pages/inquiry-video/components/doctor-info/index.js");
 		global.__wxAppCurrentFile__ = 'plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/inquiry-im/index.js';global.__wxRouteBegin = true; 	define("pages/inquiry-video/components/inquiry-im/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
/*
 * @Author: zhangtingdong zhangtingdong@chunyu.me
 * @Date: 2023-09-13 16:04:33
 * @LastEditors: zhangtingdong zhangtingdong@chunyu.me
 * @LastEditTime: 2023-09-20 17:12:24
 * @FilePath: /wxapp_inquiry_video_plugin/plugin/pages/inquiry-video/components/inquiry-im/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { sendMsgApi } = require('../../utils/api.js');
const {wxShowLoading} = require('../../utils/utils.js')
Component({
  externalClasses: ['inquiry-im'],
  /**
   * 组件的属性列表
   */
  properties: {
    shrinkVideo: {
      type: Boolean,
      value: true,
    },
    bottomAnchor: {
      type: String,
      value: '',
    },
    messageList: {
      type: Array,
      value: [],
    },
    crossData: {
      type: Object,
      value: {},
    },
    doctorInfo: {
      type: Object,
      value: {},
    },
  },
  data: {
    keyboardHeight: 0,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 用户消息输入事件
     *
     * @param {object}} e 输入事件
     */
    handleInput(e) {
      this.setData({
        chatContent: e.detail.value,
      });
    },

    handleInputFocus(e) {
      if (e) {
        this.setData({
          keyboardHeight: e.detail.height,
        });
      }
      setTimeout(() => {
        this.setData({
          bottomAnchor: 'bottom-anchor',
        });
      }, 150);
    },
    handleInputBlur() {
      this.setData({
        keyboardHeight: 0,
      });
    },
    /**
     * 用户发送消息事件
     */
    onTextSend() {
      if (!this.data.chatContent.trim()) {
        return;
      }
      this.sendMessage({
        msgType: 1,
        content: JSON.stringify({ text: this.data.chatContent }),
        inquiryId: wx.getStorageSync('inquiryInfo').inquiryId,
      });
    },

    /**
     * 用户发送消息
     *
     * @param {object} msgItem 待发送的消息
     */
    sendMessage(msgItem) {
      console.log(this.data.crossData, 'crossData', this);
      const { crossData } = this.data;
      const { partner_url, token } = crossData;
      this.setData(
        {
          sendingMsg: true,
        },
        () => {
          sendMsgApi(partner_url, token, msgItem)
            .then((res) => {
              this.setData({
                sendingMsg: false,
              });
              const { code, message } = res;
              if (code === 0) {
                this.setData({
                  chatContent: '',
                });
              } else {
                wxShowToast(message || '消息发送失败');
              }
            })
            .catch(() => {
              this.setData({
                sendingMsg: false,
              });
              wxShowToast('网络错误，请稍后重试');
            });
        }
      );
    },
    /**
     * 图片预览
     *
     * @param {object} e image标签绑定值
     */
    previewImage(e) {
      wx.previewImage({
        current: e.target.dataset.url, // 当前显示图片的http链接
        urls: [e.target.dataset.url], // 需要预览的图片http链接列表
      });
    },

    /**
     * 发送图片消息事件
     */
    sendImgEvent() {
      wx.chooseImage({
        count: 1,
        sourceType: ['album'],
        success: (res) => {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          this.handleUpload(res.tempFilePaths);
        },
      });
    },

    /**
     * 上传图片
     *
     * @param {array} tempFilePaths 微信返回的图片地址
     */
    handleUpload(tempFilePaths) {
      wxShowLoading('图片上传中');
      const { crossData } = this.data;
      wx.uploadFile({
        url: `${crossData.partner_url}/api/common/file/upload/file`,
        filePath: tempFilePaths[0],
        name: 'file',
        header: {
          CYCloudHospitalAuth: crossData.token,
        },
        success: ({ data: res }) => {
          res = JSON.parse(res);
          if (res.code === 0) {
            this.handleImgSend(res.data.publicUrl);
          } else {
            wxShowToast(res.message || '上传失败');
          }
        },
        fail: (err) => {
          wxShowToast('网络出错，请稍后重试');
          console.log('uploadFile err::', err);
        },
        complete() {
          wx.hideLoading();
        },
      });
    },
    /**
     * 发送图片消息
     *
     * @param {string} url 图片地址
     */
    handleImgSend(url) {
      this.sendMessage({
        msgType: 2,
        content: JSON.stringify({ url }),
        inquiryId: wx.getStorageSync('inquiryInfo').inquiryId,
      });
    },
    /**
     * 卡片类型消息点击事件
     */
    onCardClick(e) {
      console.log(e, '卡片点击');
      const url = e.currentTarget.dataset.jumpurl;
      wx.navigateTo({
        url: `/pages/h5_webview/index?url=${encodeURIComponent(url)}`,
      });
    },
  },
});
 
 			}); 	require("pages/inquiry-video/components/inquiry-im/index.js");
 		global.__wxAppCurrentFile__ = 'plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/modal/index.js';global.__wxRouteBegin = true; 	define("pages/inquiry-video/components/modal/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
Component({
  externalClasses: ["my-class"],
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: '为保证在医生接诊、发送病历或处方时，您能正常收到消息通知，请订阅消息通知',
    },
    buttonText: {
      type: String,
      value: '我知道了'
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _confirmEvent() {
      this.triggerEvent("onTouchConfirm");
    },
  },
});
 
 			}); 	require("pages/inquiry-video/components/modal/index.js");
 		global.__wxAppCurrentFile__ = 'plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/components/webrtc-room/webrtc-room.js';global.__wxRouteBegin = true; 	define("pages/inquiry-video/components/webrtc-room/webrtc-room.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
/**
 * 春雨视频组件
 */
const TRTC = require('./static/trtc-wx-v10')
const log =
{
  info: (info) => {
    console.log(info, 'info');
  }
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 【必须】开通实时音视频服务创建应用后分配的 sdkAppID
    sdkAppID: {
      type: String,
      value: '',
    },
    // 【必须】用户 ID，可以由您的帐号系统指定
    userID: {
      type: [String, Number],
      value: '',
    },
    // 【必须】身份签名，相当于登录密码的作用
    userSig: {
      type: String,
      value: '',
    },
    roomID: {
      type: [String, Number],
      value: '',
    },
    // 【必须】strRoomID，roomID房间号
    strRoomID: {
      type: [String],
      value: '',
    },
    // 通话模式，默认 rtc
    scene: {
      type: String,
      value: 'rtc',
    },
    // 是否开启调试，默认不开启
    debug: {
      type: Boolean,
      value: false,
    },
    // 开启视频小窗
    shrinkVideo: {
      type: Boolean,
      value: false,
    },
    // 视频连接文字
    connectText: {
      type: String,
      value: '',
    },
    inquiryDurationStr: {
      type: String,
      value: '00:00',
    },
    showInquiryDuration: {
      type: Boolean,
      value: false,
    },
    noReadMessageNum: {
      type: Number,
      value: 0,
    },
    durationMinutes: {
      type: String,
      value: '20'
    },
    isHidePage: {
      type: Boolean,
      value: false
    },
  },
  /**
   * 数据监听
   */
  observers: {
    noReadMessageNum: function (value) {
      // 未读消息不为零时展示tip
      if (value) {
        this.setData({
          showMessageTip: true,
        });
      } else {
        this.setData({
          showMessageTip: false,
        });
      }
    },
    isHidePage: function (value) {
      if (!this.data.isInquirying) {
        return;
      }
      if (value) {
        // hide暂停推流
        this.TRTC.getPusherInstance().pause();
      } else {
        // 展示继续推流
        this.TRTC.getPusherInstance().resume();
        log.info(`房间:${this.data.strRoomId}:继续推流`);
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isInquirying: false, // 是否正在问诊中
    pusher: null, // 推流信息
    playerList: [], // 订阅的远端音视频列表
    showMessageTip: false,
    isShowDialog: false,  // 是否展示弹窗
    dialogObj: {
      content: '',
      cancelText: '',
      confirmText: '',
      type: ''
    },
    showNoleaveTips: false, // 展示勿离tip
    initShrinkAnimation: {}, // 初始化动画
    smallVideoAnimation: {},// 缩小动画
    leaveTips: '请不要离开此页面,以防视频中断', // tips
  },

  /**
   * 组件生命周期
   */
  lifetimes: {
    // 在组件在视图层布局完成后执行
    ready: function () {
      // 保持屏幕常亮
      wx.setKeepScreenOn({
        keepScreenOn: true,
      });
      // 初始化 TRTC 实例
      this.TRTC = new TRTC(this);
      // 初始化推流实例
      this.initPusher();
      // 绑定监听事件
      this.bindTRTCRoomEvent();
      this.initVideoAnimation();
    },
    attached: function () {
      // 该生命周期之后所传的参数仍然没同步过来,先延时获取吧
      setTimeout(()=>{
        if (this.data.durationMinutes) {
          this.onCountdownHandle();
        }
      },1000)
    },
    detached: function () {
      clearInterval(this.audioPlayerTimer);
      clearInterval(this.videoPlayerTimer);
      clearInterval(this.countDownTimer);
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 初始化视频接通动画
     */
    initVideoAnimation() {
      this.initShrinkAnimation = wx.createAnimation({
        duration: 500, // 动画时长，单位毫秒
        timingFunction: 'linear' // 缓动函数，可选值："linear"、"ease"、"ease-in"、"ease-in-out"、"ease-out"
      });
      this.initShrinkAnimation.width('220rpx').height('390rpx').top('30rpx').right('30rpx').step()
    },
    onCountdownHandle() {
      if (this.countDownTimer) {
        clearInterval(this.countDownTimer);
      }
      this.countDownTimer = setInterval(() => {
        // 将时间字符串拆分为分钟和秒
        let [minutes, seconds] = this.data.inquiryDurationStr.split(":").map(Number);

        // 将分钟转换为总秒数
        let totalSeconds = minutes * 60 + seconds;

        let durationSeconds = parseInt(this.data.durationMinutes)*60;
        if (durationSeconds - totalSeconds === 180) {
          // 当总秒数小于180秒（3分钟）时执行后续逻辑
          // 添加您的逻辑代码在这里
          console.log("提示3分钟");
          this.setData({
            leaveTips: '视频时长不足3分钟',
            showNoleaveTips: true
          })
          setTimeout(() => {
            this.setData({
              showNoleaveTips: false,
            });
          }, 3500);
        } else if (durationSeconds - totalSeconds === 120) {
          // 当总秒数大于等于180秒（3分钟）时执行其他逻辑
          console.log("提示2分钟");
          this.setData({
            leaveTips: '视频时长不足2分钟',
            showNoleaveTips: true
          })
          setTimeout(() => {
            this.setData({
              showNoleaveTips: false,
            });
          }, 3500);
        } else if (durationSeconds - totalSeconds === 60) {
          console.log("提示一分钟");
          this.setData({
            leaveTips: '视频时长不足1分钟',
            showNoleaveTips: true
          })
          setTimeout(() => {
            this.setData({
              showNoleaveTips: false,
            });
          }, 3500);
        } else if (durationSeconds - totalSeconds === 10) {
          console.log("提示即将断开");
          this.setData({
            leaveTips: '本次视频即将结束,自动挂断',
            showNoleaveTips: true
          })
          setTimeout(() => {
            this.setData({
              showNoleaveTips: false,
            });
          }, 3500);
        } else if (totalSeconds <= 0){
          console.log('自动挂断');
        }
      }, 1000)
    },
    /**
     * 初始化推流实例
     */
    initPusher() {
      // pusher 初始化参数
      const pusherConfig = {
        beautyLevel: 0, // 美颜(取值范围 0-9, 0 表示关闭)
        whitenessLevel: 0, // 美白(取值范围 0-9, 0 表示关闭)
        frontCamera: 'front', // 默认前置摄像头
      };
      // 创建推流实例
      const pusher = this.TRTC.createPusher(pusherConfig);
      this.setData({
        pusher,
      });
    },
    /**
     * 进入小窗模式
     */
    onEnterVideoInpicture() {
      console.log('进入小窗模式');
      this.triggerEvent('onEnterVideoInpicture');
    },
    /**
     * 退出小窗模式
     */
    onLeaveVideoInpicture() {
      this.triggerEvent('onLeaveVideoInpicture');
    },
    /**
     * 监听事件
     */
    bindTRTCRoomEvent() {
      const TRTC_EVENT = this.TRTC.EVENT;
      // 监听本地房间成功进入
      this.TRTC.on(TRTC_EVENT.LOCAL_JOIN, this.onLocalJoin.bind(this));
      // 监听本地房间离开
      this.TRTC.on(TRTC_EVENT.LOCAL_LEAVE, this.onLocalLeave.bind(this));
      // 监听本地推流出现错误、渲染错误事件等
      this.TRTC.on(TRTC_EVENT.ERROR, this.onError.bind(this));
      // 监听远端用户加入房间
      this.TRTC.on(TRTC_EVENT.REMOTE_USER_JOIN, this.onRemoteUserJoin.bind(this));
      // 监听远端用户退出房间
      this.TRTC.on(TRTC_EVENT.REMOTE_USER_LEAVE, this.onRemoteUserLeave.bind(this));
      // 监听远端用户推送视频
      this.TRTC.on(TRTC_EVENT.REMOTE_VIDEO_ADD, this.onRemoteVideoAdd.bind(this));
      // 监听远端用户取消推送视频
      this.TRTC.on(TRTC_EVENT.REMOTE_VIDEO_REMOVE, this.onRemoteVideoRemove.bind(this));
      // 监听远端用户推送音频
      this.TRTC.on(TRTC_EVENT.REMOTE_AUDIO_ADD, this.onRemoteAudioAdd.bind(this));
      // 监听远端用户取消推送音频
      this.TRTC.on(TRTC_EVENT.REMOTE_AUDIO_REMOVE, this.onRemoteAudioRemove.bind(this));
    },

    /**
     * 加入房间
     */
    enterRoom() {
      const config = {
        sdkAppID: this.data.sdkAppID,
        userID: this.data.userID,
        userSig: this.data.userSig,
        roomID: this.data.roomID,
        strRoomID: this.data.strRoomID
      };
      log.info(`房间:${this.data.strRoomId}:用户进入`);
      this.setData(
        {
          pusher: this.TRTC.enterRoom(config),
        },
        () => {
          // 开始推流
          log.info(`房间:${this.data.strRoomId}:开始推流`);
          this.TRTC.getPusherInstance().start();
          // this.handleBGM('playBGM', {
          //   url: AUDIO_URL,
          // })
        }
      );
    },

    /**
     * 退出房间
     */
    exitRoom() {
      // this.handleBGM('stopBGM')
      const result = this.TRTC.exitRoom();
      log.info(`房间:${this.data.strRoomId}:trtc退房`);
      this.setData({
        pusher: result.pusher,
        playerList: result.playerList,
      });
    },

    /**
     * 切换前后摄像头
     */
    switchCamera() {
      log.info(`房间:${this.data.strRoomId}:切换摄像头`);
      const pusherContext = this.TRTC.getPusherInstance();
      if (pusherContext && typeof pusherContext.switchCamera === 'function') {
        pusherContext.switchCamera();
      }
    },

    /**
     * 播放背景音乐
     */
    handleBGM(type, params = {}) {
      const pusherContext = this.TRTC.getPusherInstance();
      console.log('背景音乐', type, params, pusherContext && typeof pusherContext[type] === 'function');
      if (pusherContext && typeof pusherContext[type] === 'function') {
        pusherContext[type](params);
      }
    },
    /**
     * 设置 pusher 属性
     *
     * @param {object} options 待设置的属性 {key: value}
     */
    setPusherAttributesHandler(options) {
      this.setData({
        pusher: this.TRTC.setPusherAttributes(options),
      });
    },

    /**
     * 设置某个 player 属性
     *
     * @param {object} player 待设置属性的 player
     * @param {object} options 待设置的属性 {key: value}
     */
    setPlayerAttributesHandler(player, options = {}) {
      this.setData({
        playerList: this.TRTC.setPlayerAttributes(player.streamID, options),
      });
    },

    /**
     * 构造用户错误信息（如取消授权等）
     *
     * @param {string|number} code 错误代码
     * @param {string} msg 错误描述
     */
    userError(code, msg) {
      this.tag = 'user';
      this.code = code;
      this.msg = msg;
    },

    /**
     * 本地房间成功进入后回调
     *
     * @param {object} event 回调事件
     */
    onLocalJoin(event) {
      // 开启摄像头和麦克风
      log.info(`房间:${this.data.strRoomId}:用户成功进入房间，开启摄像头`);
      this.setPusherAttributesHandler({ enableCamera: true });
      this.setPusherAttributesHandler({ enableMic: true });
    },

    /**
     * 本地房间离开后回调
     *
     * @param {object} event 回调事件
     */
    onLocalLeave(event) {
      log.info(`房间:${this.data.strRoomId}:用户离开房间，关闭摄像头`);
      // 关闭摄像头和麦克风
      this.setPusherAttributesHandler({ enableCamera: false });
      this.setPusherAttributesHandler({ enableMic: false });
    },

    /**
     * 本地推流出现错误、渲染错误等回调
     *
     * @param {object} event 回调事件
     */
    onError(event) {
      console.log('* room ERROR', event);
      const { code } = event.data;
      const errorMap = {
        '10001': '未获取到摄像头权限，请删除小程序后重新打开并授权',
        '10002': '未获取到录音权限，请删除小程序后重新打开并授权',
        '10003': '背景音资源（BGM）加载失败',
        '10004': '等待画面资源（waiting-image）加载失败',
        '-1301': '打开摄像头失败',
        '-1302': '打开麦克风失败',
        '-1303': '视频编码失败',
        '-1304': '音频编码失败',
        '-1307': '推流出现网络断开，且经过多次重试无法恢复',
        '-3301': '进入房间失败',
        '-100006': '权限位校验失败，请检查 privateMapKey 是否正确',
        '-100015': 'SDKAppID 异常，请检查 SDKAppID 是否正确',
        '-100018': 'userSig 校验失败，请检查 userSig 是否正确',
      };
      log.error(`房间:${this.data.strRoomId}:本地推流出错${code}:${errorMap[String(code)]}`);
    },

    /**
     * 远端用户加入房间回调
     *
     * @param {object} event 回调事件
     */
    onRemoteUserJoin(event) {
      console.log('远端用户加入房间');
      log.info(`房间:${this.data.strRoomId}:收到医生进房回调`);
      // 远端用户加入房间
      // if (!this.properties.isHidePage) {
      //   this.handleBGM('stopBGM')
      // }
      // 3s后展示tip
      setTimeout(() => {
        this.setData({
          showNoleaveTips: true,
        })
      }, 3000);
      this.setData({
        isInquirying: true,
        showInquiryDuration:true,
        smallVideoAnimation: this.initShrinkAnimation.export()
      });
      this.triggerEvent('onEnterRoom');
    },

    /**
     * 远端用户退出回调
     *
     * @param {object} event 回调事件
     */
    onRemoteUserLeave(event) {
      log.info(`房间:${this.data.strRoomId}:收到医生离开回调`);
      this.setData({
        isInquirying: false,
      });
      const { playerList } = event.data;
      this.setData({
        playerList: playerList,
      });
    },

    /**
     * 远端用户推送视频回调
     *
     * @param {object} event 回调事件
     */
    onRemoteVideoAdd(event) {
      console.log('收到视频推流回调,慢于用户进入执行');
      log.info(`房间:${this.data.strRoomId}:收到医生视屏推流成功回调`);
      setTimeout(() => {
        this.setData({
          showNoleaveTips: false,
        });
      }, 3500);
      const { player } = event.data;
      if (this.videoPlayerTimer) {
        clearInterval(this.videoPlayerTimer);
      }
      this.setPlayerAttributesHandler(player, { muteVideo: false });
      this.videoPlayerTimer = setInterval(() => {
        console.log('视频拉流');
        this.setPlayerAttributesHandler(player, { muteVideo: false });
      }, 5000);
    },

    /**
     * 远端用户取消推送视频回调
     *
     * @param {object} event 回调事件
     */
    onRemoteVideoRemove(event) {
      log.warn(`房间:${this.data.strRoomId}:收到医生取消视屏推流回调`);
      const { player } = event.data;
      this.setPlayerAttributesHandler(player, { muteVideo: true });
    },

    /**
     * 远端用户推送音频回调
     *
     * @param {object} event 回调事件
     */
    onRemoteAudioAdd(event) {
      log.info(`房间:${this.data.strRoomId}:收到医生音频推流成功回调`);
      const { player } = event.data;
      if (this.audioPlayerTimer) {
        clearInterval(this.audioPlayerTimer);
      }
      this.setPlayerAttributesHandler(player, { muteAudio: false });
      this.audioPlayerTimer = setInterval(() => {
        console.log('音频拉流');
        this.setPlayerAttributesHandler(player, { muteAudio: false });
      }, 5000);
    },

    /**
     * 远端用户取消推送音频回调
     *
     * @param {object} event 回调事件
     */
    onRemoteAudioRemove(event) {
      log.warn(`房间:${this.data.strRoomId}:收到医生取消音频推流回调`);
      const { player } = event.data;
      this.setPlayerAttributesHandler(player, { muteAudio: true });
    },

    /**
     * live-pusher 状态变化事件
     *
     * @param {object} event 回调事件 detail = {code}
     */
    _pusherStateChangeHandler(event) {
      this.TRTC.pusherEventHandler(event);
    },

    /**
     * live-pusher 网络状态通知
     *
     * @param {object} event 回调事件 detail = {info}
     */
    _pusherNetStatusHandler(event) {
      this.TRTC.pusherNetStatusHandler(event);
    },

    /**
     * live-pusher 渲染错误事件
     *
     * @param {object} event 回调事件 detail = {errMsg, errCode}
     */
    _pusherErrorHandler(event) {
      this.TRTC.pusherErrorHandler(event);
    },

    /**
     * live-player 播放状态变化事件
     *
     * @param {object} event 回调事件 detail = {code}
     */
    _playerStateChange(event) {
      console.log('状态变化', event);
      this.TRTC.playerEventHandler(event);
    },

    /**
     * live-player 全屏变化事件
     *
     * @param {object} event 回调事件 detail = {direction, fullScreen}
     */
    _playerFullscreenChange(event) {
      this.TRTC.playerFullscreenChange(event);
    },

    /**
     * live-player 网络状态通知
     *
     * @param {object} event 回调事件 detail = {info}
     */
    _playerNetStatus(event) {
      this.TRTC.playerNetStatus(event);
    },

    /**
     * live-player 播放音量大小通知
     *
     * @param {object} event 回调事件 detail = {}
     */
    _playerAudioVolumeNotify(event) {
      this.TRTC.playerAudioVolumeNotify(event);
    },

    /**
     * 点击问诊的取消按钮
     */
    cancelInquiryHandler() {
      this.setData({
        dialogObj: {
          content: '确认退出？退出后医生接诊可能无法及时响应，建议您再多等待一会，医生正在赶来的路上',
          cancelText: '取消',
          confirmText: '确认',
          type: 'leave'
        },
        isShowDialog: true
      });
    },

    /**
     * 点击结束问诊按钮
     */
    overInquiry() {
      this.setData({
        dialogObj: {
          content: '挂断后，本次视频问诊结束',
          cancelText: '取消',
          confirmText: '挂断',
          type: 'over'
        },
        isShowDialog: true
      });
    },

    /**
     * 点击弹窗的确认按钮
     */
    confirmDialogHandler() {
      this.exitRoom();
      log.info(`房间:${this.data.strRoomId}:用户主动点击${this.data.dialogObj.type === 'over' ? '挂断' : '取消'}按钮离开问诊`);
      this.triggerEvent('onLeaveInquiry', this.data.dialogObj.type);
    },

    /**
     * 点击弹窗的取消按钮
     */
    cancelDialogHandler() {
      this.setData({
        isShowDialog: false
      });
    },
    /**
     * 点击图文交流
     */
    onImChat() {
      this.triggerEvent('onShrinkVideo');
    },
    onGrowVideo() {
      if (this.properties.shrinkVideo) {
        this.triggerEvent('onGrowVideo');
      }
    },
  },
});
 
 			}); 	require("pages/inquiry-video/components/webrtc-room/webrtc-room.js");
 		global.__wxRoute = '__plugin__/wx214b7e2bcde837d6/pages/inquiry-video/index';global.__wxRouteBegin = true; 	global.__wxAppCurrentFile__ = 'plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/index.js';	define("pages/inquiry-video/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
/*
 * @Author: zhangtingdong zhangtingdong@chunyu.me
 * @Date: 2023-07-13 16:44:03
 * @LastEditors: zhangtingdong zhangtingdong@chunyu.me
 * @LastEditTime: 2023-12-08 14:45:59
 * @FilePath: /wxapp_inquiry_video_plugin/plugin/pages/inquiry-video/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const {
  userEnterApi, // 用户进入诊室函数
  getVideoTokenApi, // 获取进入视频房间所需的信息函数
  getHistoryMsgApi, // 历史消息
  userFinishApi,
  userLeaveApi,
} = require('./utils/api.js');
const formatMsg = require('./utils/formatMsg.js');
const imSocket = require('./utils/socket.js');
const { MSG_CODE_TYPE } = require('./utils/enum.js');
const { wxShowToast } = require('./utils/utils.js');
const {InquriyDurationClass} = require('./utils/utils.js');
let socketInstance = {};
const miniProgramExports = requireMiniProgram();
Page({
  data: {
    videoToken: {
      // 视频token数据
      strRoomID: '',
      userId: '',
      userSig: '',
      sdkAppId: '',
      roomid: '',
      durationMinutes: '',
    },
    hasRejectedAuthorize: false, // 是否拒绝
    hasDeviceAuthorize: false, // 是否已获得设备权限
    shrinkVideo: false, // 缩小视频画面
    messageList: [], // 消息列表
    crossData: {},
    doctorInfo: {},
    inquiryDurationStr: '', // 视频问诊通话时长
    connectText: '医生连线中，请耐心等待…', // 连接文字
    showInquiryDuration: false, // 显示问诊通话时长
    noReadMessage: 0, // 未读消息数量
    inquriyDuration:{}
    // showModal: false,
    // showPage1: true,
  },

  onLoad(options) {
    console.log(options,'options');
    miniProgramExports._wx.enableAlertBeforeUnload({
      message: '确认退出？退出后医生接诊可能无法及时响应，建议您再多等待一会，医生正在赶来的路上',
    });
    const crossDatas = {
      partner_url:options.partner_url, 
      token:options.token
    }; // 存储跨域token数据
    // 提供给im组件使用
    this.setData({
      crossData: crossDatas,
    });
    this.inquiryInfo = {
      inquiryId: options.inquiryId,
      orderId: options.orderId,
    };
    wx.setStorage(
      {
        key: 'inquiryInfo',
        data: this.inquiryInfo,
      },

    );
    wx.setStorage({
        key: 'csessionid',
        data: options.sessionid,
    })
    this.inquiryInit(); // 初始化视频问诊
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.setData({
      showLeave: true,
    });
    // 如果用户已经主动结束/取消了视频门诊，则无需再次通知服务器用户离开
    if (!this.inquiryEndByUser) {
      this.leaveRoom();
    }
  },
  /**
   * 初始化视频问诊
   */
  async inquiryInit() {
    const deviceResult = await this.checkDeviceAuthorize(); // 校验设备权限

    if (!deviceResult) {
      console.log('设备权限异常');
      return;
    }
    this.startInquiry()
  },

  /**
   * 校验设备权限
   */
  async checkDeviceAuthorize() {
    const result = await this.getSettingAsync();
    const authorizeMic = result.miniprogramAuthSetting['scope.record'];
    const authorizeCamera = result.miniprogramAuthSetting['scope.camera'];

    if (authorizeMic && authorizeCamera) {
      return true;
    }

    if (
      typeof authorizeMic === 'undefined' &&
      typeof authorizeCamera === 'undefined'
    ) {
      const authorizeMicResult = await this.authorizeForMiniProgram(
        'scope.record'
      );
      const authorizeCameraResult = await this.authorizeForMiniProgram(
        'scope.camera'
      );

      return authorizeMicResult && authorizeCameraResult;
    } else {
      this.setData({
        hasRejectedAuthorize: true,
      });
      return false;
    }
  },

  async authorizeForMiniProgram(scope) {
    try {
      await wx.authorizeForMiniProgram({ scope });
      return true;
    } catch (error) {
      return false;
    }
  },

  /**
   * Promisify wx.getSetting
   */
  getSettingAsync() {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: (result) => resolve(result),
        fail: (error) => reject(error),
      });
    });
  },

  /**
   * 开始问诊
   */
  async startInquiry() {
    const { partner_url, token } = this.data.crossData; // 获取partner_url和token
    const { inquiryId } = this.inquiryInfo;

    const res = await userEnterApi(partner_url, token, { inquiryId }); // 用户进入诊室
    const { code, message, data } = res;

    if (code === 0) {
      this.setData({
        timeElapsed: data.timeElapsed || 0,
        doctorInfo: data.doctorInfo, // 存储医生信息
      });

      if (data.needWebSocket) {
        socketInstance = new imSocket(inquiryId, this.data.crossData); // 创建socket实例
        socketInstance.setOnMessageReceivedCallback((info) => {
          this.onMessageReceived(info); // 设置消息接收回调
        });
        socketInstance.initSocket(); // 初始化socket连接
      }
      this.getHistoryMsg(); // 获取历史消息
      this.enterVideoRoom(); // 进入音视频房间
    } else {
      wxShowToast(message || '进入视频问诊失败');
    }
  },

  /**
   * 进入音视频房间
   */
  async enterVideoRoom() {
    try {
      const { partner_url, token } = this.data.crossData;
      const { inquiryId } = this.inquiryInfo;

      const res = await getVideoTokenApi(partner_url, token, { inquiryId }); // 获取视频token信息
      const { code, message, data } = res;

      if (code === 0) {
        this.videoToken = data; // 存储视频token信息
        this.setData({
          videoToken: data,
        });
        const webrtcroomCom = this.selectComponent('#myroom'); // 获取视频组件

        if (webrtcroomCom) {
          webrtcroomCom.enterRoom(); // 进入房间
        }
      } else {
        wxShowToast(message || '视频信息获取失败');
      }
    } catch (error) {
      wxShowToast('网络出错，请稍后重试');
    }
  },
  /**
   * 用户点击页面结束问诊按钮触发事件
   */
  onEndBtnClick(e) {
    const type = e.detail;
    this.endInquiryByUser(type);
  },
  /**
   * 用户主动结束问诊事件
   */
  async endInquiryByUser(type) {
    this.inquiryEndByUser = true;
    const { inquiryId } = this.inquiryInfo;
    const { partner_url, token } = this.data.crossData;

    this.setData({
      showInquiryDuration: false,
    });

    try {
      type === 'over'
        ? userFinishApi(partner_url, token, {
            inquiryId,
          })
        : userLeaveApi(partner_url, token, {
            inquiryId,
          });
    } catch (error) {
      console.log('用户离开出错', error);
    }
    this.onInquiryEnd();
  },
  /**
   * 离开房间
   */
  async leaveRoom() {
    console.log('********leaveRoom*******');
    const { inquiryId } = this.inquiryInfo;
    const { partner_url, token } = this.data.crossData;
    this.inquriyDuration.stopAcc();
    await userLeaveApi(partner_url, token, {
      inquiryId,
    }).catch(() => {
      console.log('leaveRoom出错');
    });
  },
  /**
   * 视频门诊结束事件
   */
  onInquiryEnd() {
    console.log('问诊结束');
    miniProgramExports._wx.disableAlertBeforeUnload();
    this.inInquiry = false;
    socketInstance.closeSocket();
    const backCount = this.data.pictureinpicture ? 2 : 1;
    setTimeout(() => {
      wx.navigateBack({
        delta: backCount,
      });
    }, 2000);
  },
  // /**
  //  * 拦截弹窗
  //  */
  // showLeaveModal() {
  //   wx.showModal({
  //     title: '提示',
  //     content: this.leaveText,
  //     success(res) {
  //       if (res.confirm) {
  //         wx.navigateBack();
  //       } else if (res.cancel) {
  //         console.log('用户点击取消');
  //       }
  //     },
  //   });
  // },
  /**
   * 缩小视频
   */
  onShrinkVideo() {
    this.setData({
      shrinkVideo: true,
    });
    // 未读消息置空
    this.clearNoReadMessag();
    console.log('缩小视频');
  },
  /**
   * ws 扩充视频
   */
  onGrowVideo() {
    this.setData({
      shrinkVideo: false,
    });
  },
  /**
   * 更新医生信息（订单被扩散后，doctorinfo会变，须更新获取）
   */
  updateDoctorInfo() {
    const { partner_url, token } = this.data.crossData;
    userEnterApi(partner_url, token, {
      inquiryId: this.inquiryInfo.inquiryId,
    })
      .then((res) => {
        const { code, message, data = {} } = res;
        if (code === 0) {
          this.setData({
            doctorInfo: data.doctorInfo,
          });
          console.log(this.data.doctorInfo, 'doctorInfo');
        } else {
          wxShowToast(message || '获取医生信息失败');
        }
      })
      .catch((err) => {
        wxShowToast('获取医生信息失败', err);
      });
  },
  /**
   * 获取历史消息
   */
  getHistoryMsg() {
    const { inquiryId } = this.inquiryInfo;
    const { partner_url, token } = this.data.crossData;
    getHistoryMsgApi(partner_url, token, {
      inquiryId,
    })
      .then((res) => {
        const { code, data, message } = res;
        if (code === 0) {
          const resultList = (data.records || []).map((item) => {
            return formatMsg(item, this.data.doctorInfo);
          });
          this.setData({
            messageList: resultList,
            bottomAnchor: `msg${resultList.length - 1}`,
          });
        } else {
          wxShowToast(message || '历史消息获取失败');
        }
      })
      .catch((err) => {
        console.error(err, '获取历史消息出错');
        wxShowToast('网络出错');
      });
  },
  /**
   * 消息接收回调函数
   */
  onMessageReceived(payload) {
    // 检查payload是否有效
    if (!payload || !payload.body) {
      return;
    }

    // 解析消息内容
    const msgItem = JSON.parse(payload.body);
    const msgType = Number(msgItem.msgType);

    // 检查是否是系统消息
    const isSystemMsg = msgItem.id <= 0 || msgItem.isSystemMsg;

    // 检查是否应将消息加入消息列表
    const shouldAddToMessageList = [
      ...MSG_CODE_TYPE.text,
      ...MSG_CODE_TYPE.image,
      ...MSG_CODE_TYPE.card,
    ].includes(msgType);

    if (shouldAddToMessageList) {
      if (!isSystemMsg) {
        this.addNoReadMessage();
      }
      formatMsg(msgItem, this.data.doctorInfo);
      // 查找消息在列表中的索引
      const index = this.data.messageList.findIndex(
        (item) => item.id === msgItem.id
      );

      if (msgType === 151 && index > -1) {
        // 处方卡片消息，已存在则更新状态，否则新增
        const tempMessageList = [...this.data.messageList];
        tempMessageList[index] = msgItem;
        this.setData({
          messageList: tempMessageList,
          bottomAnchor: `msg${tempMessageList.length - 1}`,
        });
      } else if (msgType !== 151 && !isSystemMsg) {
        // 非处方卡片消息且不是系统消息，新增到消息列表
        console.log(this.data.messageList, msgItem, 'this.data.messageList');
        const newMessageList = [...this.data.messageList, msgItem];
        this.setData({
          messageList: newMessageList,
          bottomAnchor: `msg${newMessageList.length - 1}`,
        });
        console.log(this.data.messageList, 'messageLiss');
      }
    }

    switch (msgType) {
      case 1001:
        console.log('***key***: 收到1001,医生接入');
        this.setData({
          doctorEnter: true,
        });
        this.updateDoctorInfo();
        break;
      case 1003:
        this.onInquiryEnd();
        console.log('***key***: 收到1003,本地门诊已结束');
        this.doctorEnd = true;
        wxShowToast(msgItem.textContent);
        break;
      case 110:
        console.log('***key***: 收到110,医生超时未接诊');
        break;
      default:
        break;
    }
  },
  /**
   * 增加一条未读消息
   */
  addNoReadMessage() {
    if (!this.data.shrinkVideo) {
      const tempCount = this.data.noReadMessage;
      this.setData({
        noReadMessage: tempCount + 1,
      });
    }
  },
  /**
   * 未读消息置空
  */
  clearNoReadMessag() {
    this.setData({
      noReadMessage: 0,
    });
  },
  /**
   * 远端加入房间
   */
  remoteJoinRoom() {
    console.log('****远端加入房间*****');
    this.inInquiry = true;
    miniProgramExports._wx.disableAlertBeforeUnload({
      success: () => {
        miniProgramExports._wx.enableAlertBeforeUnload({
          message:
            '确认中断本次问诊？中断后可再次连接，中断一小时后，问诊将自动完成',
        });
      },
    });
    this.showDuration();
  },
  /**
   * 显示视频时长
   */
  showDuration() {
    console.log(this.data.showInquiryDuration,'dur',this.data.timeElapsed);
    if (!this.data.showInquiryDuration) {
      this.inquriyDuration = new InquriyDurationClass(
        this.data.timeElapsed,
        this.startDurationCb.bind(this)
      );
      this.inquriyDuration.startAcc();
      this.setData({
        showInquiryDuration: true,
      });
    }
  },
  /**
   * 问诊计时累加回调函数
   * @param {string} durationStr 问诊计时文案
   */
  startDurationCb(durationStr) {
    this.setData({
      inquiryDurationStr: durationStr,
    });
  },
});
 
 			}); 
	require("pages/inquiry-video/index.js");
 	
			;global.publishDomainComponents({"plugin://wx214b7e2bcde837d6/inquiry-video":"plugin-private://wx214b7e2bcde837d6/pages/inquiry-video/index",});
				module.exports = function() {
		return require('index.js')
	}
			});
	requirePlugin("plugin://wx214b7e2bcde837d6");
/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./miniprogram_npm/mp-html/node/node.wxml:isInline":np_0,"m_./pages/health_record_authorize/index.wxml:m1":np_4,"p_./pages/find_doctor/index.wxs":np_1,"p_./pages/find_doctor_list/components/doctor_search/index.wxs":np_2,"p_./pages/find_doctor_list/components/filter/filter.wxs":np_3,"p_./pages/home_search/doctor_search/index.wxs":np_5,"p_./pages/index/util.wxs":np_6,"p_./pages/qa_im/components/append_clinic/index.wxs":np_7,"p_./pages/qa_im/components/feedback_detail/index.wxs":np_8,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./miniprogram_npm/mp-html/node/node.wxml']={};
f_['./miniprogram_npm/mp-html/node/node.wxml']['isInline'] =nv_require("m_./miniprogram_npm/mp-html/node/node.wxml:isInline");
function np_0(){var nv_module={nv_exports:{}};var nv_e = ({nv_abbr:!0,nv_b:!0,nv_big:!0,nv_code:!0,nv_del:!0,nv_em:!0,nv_i:!0,nv_ins:!0,nv_label:!0,nv_q:!0,nv_small:!0,nv_span:!0,nv_strong:!0,nv_sub:!0,nv_sup:!0,});nv_module.nv_exports = (function (nv_n,nv_i){return(nv_e[((nt_0=(nv_n),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] || -1 !== (nv_i || "").nv_indexOf("inline"))});return nv_module.nv_exports;}

f_['./pages/find_doctor/index.wxml']={};
f_['./pages/find_doctor/index.wxml']['find'] =f_['./pages/find_doctor/index.wxs'] || nv_require("p_./pages/find_doctor/index.wxs");
f_['./pages/find_doctor/index.wxml']['find']();

f_['./pages/find_doctor/index.wxs'] = nv_require("p_./pages/find_doctor/index.wxs");
function np_1(){var nv_module={nv_exports:{}};var nv_sliceArr = (function (nv_arr,nv_startIndex){var nv_index = 2 * nv_startIndex;return(nv_arr.nv_slice(nv_index,nv_index + 2))});var nv_sliceName = (function (nv_str){if (nv_str.nv_length > 5){return(nv_str.nv_slice(0,6) + "...")} else {return(nv_str)}});nv_module.nv_exports = ({nv_sliceArr:nv_sliceArr,nv_sliceName:nv_sliceName,});return nv_module.nv_exports;}

f_['./pages/find_doctor_list/components/doctor_search/index.wxml']={};
f_['./pages/find_doctor_list/components/doctor_search/index.wxml']['filter'] =f_['./pages/find_doctor_list/components/doctor_search/index.wxs'] || nv_require("p_./pages/find_doctor_list/components/doctor_search/index.wxs");
f_['./pages/find_doctor_list/components/doctor_search/index.wxml']['filter']();

f_['./pages/find_doctor_list/components/doctor_search/index.wxs'] = nv_require("p_./pages/find_doctor_list/components/doctor_search/index.wxs");
function np_2(){var nv_module={nv_exports:{}};var nv_spliceMoreWord = (function (nv_arr,nv_index,nv_isHot){if (nv_isHot){if (nv_arr[((nt_0=(nv_index),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))].nv_recommend_word && nv_arr[((nt_1=(nv_index),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))].nv_recommend_word.nv_length > 20){return(nv_arr[((nt_2=(nv_index),null==nt_2?undefined:'number'=== typeof nt_2?nt_2:"nv_"+nt_2))].nv_recommend_word.nv_slice(0,20) + '...')} else {return(nv_arr[((nt_3=(nv_index),null==nt_3?undefined:'number'=== typeof nt_3?nt_3:"nv_"+nt_3))].nv_recommend_word)}};if (nv_arr[((nt_4=(nv_index),null==nt_4?undefined:'number'=== typeof nt_4?nt_4:"nv_"+nt_4))] && nv_arr[((nt_5=(nv_index),null==nt_5?undefined:'number'=== typeof nt_5?nt_5:"nv_"+nt_5))].nv_length > 20){return(nv_arr[((nt_6=(nv_index),null==nt_6?undefined:'number'=== typeof nt_6?nt_6:"nv_"+nt_6))].nv_slice(0,20) + '...')} else {return(nv_arr[((nt_7=(nv_index),null==nt_7?undefined:'number'=== typeof nt_7?nt_7:"nv_"+nt_7))])}});nv_module.nv_exports = ({nv_spliceMoreWord:nv_spliceMoreWord,});return nv_module.nv_exports;}

f_['./pages/find_doctor_list/components/filter/filter.wxml']={};
f_['./pages/find_doctor_list/components/filter/filter.wxml']['filter'] =f_['./pages/find_doctor_list/components/filter/filter.wxs'] || nv_require("p_./pages/find_doctor_list/components/filter/filter.wxs");
f_['./pages/find_doctor_list/components/filter/filter.wxml']['filter']();

f_['./pages/find_doctor_list/components/filter/filter.wxs'] = nv_require("p_./pages/find_doctor_list/components/filter/filter.wxs");
function np_3(){var nv_module={nv_exports:{}};var nv_isFilterSelected = (function (nv_itemId,nv_selectedFilter){return(nv_selectedFilter.nv_indexOf(nv_itemId) >= 0 ? 'choose':'')});nv_module.nv_exports = ({nv_isFilterSelected:nv_isFilterSelected,});return nv_module.nv_exports;}

f_['./pages/health_record_authorize/index.wxml']={};
f_['./pages/health_record_authorize/index.wxml']['m1'] =nv_require("m_./pages/health_record_authorize/index.wxml:m1");
function np_4(){var nv_module={nv_exports:{}};var nv_isChoosed = (function (nv_choosedArr,nv_id){if (nv_choosedArr.nv_indexOf(nv_id) > -1){return(true)} else {return(false)}});nv_module.nv_exports.nv_isChoosed = nv_isChoosed;return nv_module.nv_exports;}

f_['./pages/home_search/doctor_search/index.wxml']={};
f_['./pages/home_search/doctor_search/index.wxml']['filter'] =f_['./pages/home_search/doctor_search/index.wxs'] || nv_require("p_./pages/home_search/doctor_search/index.wxs");
f_['./pages/home_search/doctor_search/index.wxml']['filter']();

f_['./pages/home_search/doctor_search/index.wxs'] = nv_require("p_./pages/home_search/doctor_search/index.wxs");
function np_5(){var nv_module={nv_exports:{}};var nv_spliceMoreWord = (function (nv_arr,nv_index,nv_isHot){if (nv_isHot){if (nv_arr[((nt_0=(nv_index),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))].nv_recommend_word && nv_arr[((nt_1=(nv_index),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))].nv_recommend_word.nv_length > 20){return(nv_arr[((nt_2=(nv_index),null==nt_2?undefined:'number'=== typeof nt_2?nt_2:"nv_"+nt_2))].nv_recommend_word.nv_slice(0,20) + '...')} else {return(nv_arr[((nt_3=(nv_index),null==nt_3?undefined:'number'=== typeof nt_3?nt_3:"nv_"+nt_3))].nv_recommend_word)}};if (nv_arr[((nt_4=(nv_index),null==nt_4?undefined:'number'=== typeof nt_4?nt_4:"nv_"+nt_4))] && nv_arr[((nt_5=(nv_index),null==nt_5?undefined:'number'=== typeof nt_5?nt_5:"nv_"+nt_5))].nv_length > 20){return(nv_arr[((nt_6=(nv_index),null==nt_6?undefined:'number'=== typeof nt_6?nt_6:"nv_"+nt_6))].nv_slice(0,20) + '...')} else {return(nv_arr[((nt_7=(nv_index),null==nt_7?undefined:'number'=== typeof nt_7?nt_7:"nv_"+nt_7))])}});nv_module.nv_exports = ({nv_spliceMoreWord:nv_spliceMoreWord,});return nv_module.nv_exports;}

f_['./pages/index/index.wxml']={};
f_['./pages/index/index.wxml']['util'] =f_['./pages/index/util.wxs'] || nv_require("p_./pages/index/util.wxs");
f_['./pages/index/index.wxml']['util']();

f_['./pages/index/util.wxs'] = nv_require("p_./pages/index/util.wxs");
function np_6(){var nv_module={nv_exports:{}};var nv_sliceName = (function (nv_str){if (nv_str.nv_length > 5){return(nv_str.nv_slice(0,4) + '...')} else {return(nv_str)}});nv_module.nv_exports = ({nv_sliceName:nv_sliceName,});return nv_module.nv_exports;}

f_['./pages/qa_im/components/append_clinic/append_clinic.wxml']={};
f_['./pages/qa_im/components/append_clinic/append_clinic.wxml']['wxs'] =f_['./pages/qa_im/components/append_clinic/index.wxs'] || nv_require("p_./pages/qa_im/components/append_clinic/index.wxs");
f_['./pages/qa_im/components/append_clinic/append_clinic.wxml']['wxs']();

f_['./pages/qa_im/components/append_clinic/index.wxs'] = nv_require("p_./pages/qa_im/components/append_clinic/index.wxs");
function np_7(){var nv_module={nv_exports:{}};var nv_isSelected = (function (nv_itemId,nv_selectedFilter){return(nv_selectedFilter.nv_indexOf(nv_itemId) >= 0)});nv_module.nv_exports = ({nv_isSelected:nv_isSelected,});return nv_module.nv_exports;}

f_['./pages/qa_im/components/feedback_detail/feedback_detail.wxml']={};
f_['./pages/qa_im/components/feedback_detail/feedback_detail.wxml']['wxs'] =f_['./pages/qa_im/components/feedback_detail/index.wxs'] || nv_require("p_./pages/qa_im/components/feedback_detail/index.wxs");
f_['./pages/qa_im/components/feedback_detail/feedback_detail.wxml']['wxs']();

f_['./pages/qa_im/components/feedback_detail/index.wxs'] = nv_require("p_./pages/qa_im/components/feedback_detail/index.wxs");
function np_8(){var nv_module={nv_exports:{}};var nv_isSelected = (function (nv_itemId,nv_selectedFilter){return(nv_selectedFilter.nv_indexOf(nv_itemId) >= 0 ? 'selected':'')});nv_module.nv_exports = ({nv_isSelected:nv_isSelected,});return nv_module.nv_exports;}

var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx();;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("04A0CE03829A079C62C6A60426FB7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var r=require("BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl+"/cooperation/wap/doctor_detail_info/",t=getApp();module.exports=function(e){return new Promise((function(o,a){wx.request({url:r,header:{Cookie:t.globalData.sessionid},data:{from_wx_mini:1,partner:t.globalData.partner,doctor_id:e,is_json:1},success:function(r){return 200===r.statusCode?o(r.data):a()},fail:function(){return a()}})}))};
},{isPage:false,isComponent:false,currentFile:'04A0CE03829A079C62C6A60426FB7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("095CB6D2829A079C6F3ADED52E0C7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/slicedToArray.js");require("@babel/runtime/helpers/Objectentries.js");var r=require("28984410829A079C4EFE2C17502C7B70.js");module.exports=function(i){if(!i)return r.ENTRANCE_TYPES.invalid;for(var a,t=i.entrance_type,n=0,E=Object.entries(r.ENTRANCE_TYPES);n<E.length;n++){var u=e(E[n],2),l=u[0],T=u[1];if(T.validateFunc){if(T.validateFunc(i)){a=r.ENTRANCE_TYPES[l];break}}else if(T.value===t){a=r.ENTRANCE_TYPES[l];break}}return a||r.ENTRANCE_TYPES.default};
},{isPage:false,isComponent:false,currentFile:'095CB6D2829A079C6F3ADED52E0C7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("149D5771829A079C72FB3F761BFC7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("miniprogram_npm/qs/index.js");module.exports={redirectPage:function(r,o){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=e.stringify(o,{encode:t})||"";console.log("str",c),wx.redirectTo({url:c?"".concat(r,"?").concat(c):r})}};
},{isPage:false,isComponent:false,currentFile:'149D5771829A079C72FB3F761BFC7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("15CA5C31829A079C73AC343652AB7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.subSaveApi=exports.saveReservedApi=exports.loginApi=void 0;var e=require("@babel/runtime/helpers/objectSpread2.js"),t=require("BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,o=getApp(),r=/^http(s)?:\/\//;exports.loginApi=function(e){return i({url:"/cooperation/wap/get_session_id/",method:"POST",data:{code:e}})};exports.subSaveApi=function(e){return i({url:"/cooperation/wap/mini_sub/save/",method:"POST",data:{data:JSON.stringify([{template_id:e,choice:"accept"}])}})};exports.saveReservedApi=function(e){return i({url:"/api/live/live_activity/save_reserved/",method:"POST",data:e})};var i=function(i){return new Promise((function(a,s){var n=i.url,d=void 0===n?"":n,u=i.data,c=void 0===u?{}:u,p=i.method,l=void 0===p?"GET":p,v=i.header,m=void 0===v?{}:v,f={Cookie:o.globalData.sessionid};f["Content-Type"]="POST"===l?"application/x-www-form-urlencoded":"application/json";var b=Object.assign({},m,f),g=Object.assign({},c,{from_wx_mini:1});wx.request({url:r.test(d)?d:"".concat(t).concat(d),data:g,header:b,method:l,success:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.statusCode,r=t.data,i=void 0===r?{}:r;o>=200&&o<=400?a(i):s(e({statusCode:o},i))},fail:function(e){console.log("".concat(d," request error:::"),e),s({error_msg:"网络请求出错，请稍后重试"})}})}))};
},{isPage:false,isComponent:false,currentFile:'15CA5C31829A079C73AC343652AB7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("1D735BD7829A079C7B1533D0C5CC7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={productionVersion:"10.4.8"};
},{isPage:false,isComponent:false,currentFile:'1D735BD7829A079C7B1533D0C5CC7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("23F8CAA4829A079C459EA2A3298C7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={UPLOAD_FAIL:{value:"UPLOAD_FAIL",desc:"上传失败"},API_FAIL:{value:"API_FAIL",desc:"微信接口失败"}};
},{isPage:false,isComponent:false,currentFile:'23F8CAA4829A079C459EA2A3298C7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("28984410829A079C4EFE2C17502C7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={QA_CONTENTS_MAX_HEIGHT:590,STATUS_MAP:{a:"已认领",s:"已回复",c:"已关闭",v:"用户看过医生的回复",p:"被举报",m:"用户修改科室中",w:"等待激活",n:"新问题",i:"初始化，空白问题或未付款"},REDIRECT_MAP:{doctor_service_pay:"/pages/payment/index",doctor_home:"/pages/doc_mainpage/index",quick_ask:"/pages/inquery/inquery",search_doctor_list:"/pages/find_doctor_list/index"},ENTRANCE_TYPES:{seo:{value:"from_seo",desc:"微信搜索进入qa页面",validateFunc:function(e){if(1===Number(e.output)&&"weixin"===e.partner)return!0}},home_search:{value:"from_home_search",desc:"小程序搜索页进入"},doc_mainpage:{value:"from_doc_mainpage",desc:"医生主页进入"},mini_share:{value:"from_mini_share",desc:"小程序qa详情页分享进入"},app_share:{value:"from_app_share",desc:"app qa详情页分享进入",validateFunc:function(e){if("app"===e.from)return!0}},seo_similar_problem:{value:"seo_similar_problem",desc:"seoqa的相似问题"},invalid:{value:"invalid_from_type",desc:"入口页面参数错误"},default:{value:"defult",desc:"没有拿到参数"}},audioCheckPointDate:new Date("2022-11-20"),fixedPositionElement:{"tap-to-top-indicator-mask":{selector:".tap-to-top-indicator-mask",label:"提示点击顶部置顶的蒙层","z-index":20},"tap-to-bottom-container":{selector:".tap-to-bottom-container",label:"点击后划到scroll-view最底部的按钮","z-index":19},"problem-status-tip":{selector:".problem-status-tip",label:"问题关闭后的评价框","z-index":19},"message-container-show-more":{selector:".message-container-show-more",label:"seo入口展示更多的按钮","z-index":18},"top-height.seo":{selector:".top-height.seo",label:"seo入口医生信息","z-index":19}}};
},{isPage:false,isComponent:false,currentFile:'28984410829A079C4EFE2C17502C7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("39634846829A079C5F052041CEBB7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("@babel/runtime/helpers/classCallCheck.js"),e=require("@babel/runtime/helpers/createClass.js"),r=function(){},i=function(){return!0},n=function(){function n(e){var s=e.fn,u=e.valid,a=e.interval,o=void 0===a?1e3:a,l=e.maxAttempts;t(this,n),this.fn=s&&"function"==typeof s?s:r,this.valid=u&&"function"==typeof u?u:i,this.interval=o,this.maxAttempts=Number(l)?l:3,this.attempts=0,this.timer=null}return e(n,[{key:"executePoll",value:function(t){var e=this;return new Promise((function(r,i){if(-1!==e.maxAttempts&&(e.attempts+=1,e.attempts>e.maxAttempts))return i(e._errorTips("1001"));e.fn(t).then((function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.valid(i))return r(i);e.timer=setTimeout((function(){r(e.executePoll(t))}),e.interval)})).catch((function(t){return i(e._errorTips("1002",t))}))}))}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer),this.timer=null,this.attempts=0}},{key:"_errorTips",value:function(t,e){return{code:t,msg:{1001:"Exceeded max attempts",1002:"Fn error"}[t]||"",details:e||""}}}]),n}();exports.default=n;
},{isPage:false,isComponent:false,currentFile:'39634846829A079C5F052041CEBB7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("3B123513829A079C5D745D1477BC7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,t=function(t){return new Promise((function(o){var n,i=wx.getStorageSync("open_id")||wx.getStorageSync("device_id")||"";wx.request({header:{cookie:getApp()?null===(n=getApp().globalData)||void 0===n?void 0:n.sessionid:"","Content-Type":"application/x-www-form-urlencoded"},url:"".concat(e,"/user_operation/page_visit_record/?web_distinct_id=").concat(i),method:"POST",data:{from_name:(null==t?void 0:t.fromName)||"",name:(null==t?void 0:t.name)||"",ts:(new Date).getTime(),extra_info:JSON.stringify((null==t?void 0:t.extraInfo)||{})},success:function(e){o(e)},fail:function(e){o(e)}})}))};exports.default=t;
},{isPage:false,isComponent:false,currentFile:'3B123513829A079C5D745D1477BC7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("425B7011829A079C243D1816847D7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault.js"),t=e(require("D0479CE4829A079CB621F4E3756D7B70.js")),a=e(require("6A719353829A079C0C17FB54BF7D7B70.js"));module.exports=function(e,r){var i=e.attributes,l=e.constraints,s=e.options,u=(0,t.default)(i,l,s);r&&r.validateDetail&&(0,a.default)({errorMsg:u,id:r.validateDetail.id,hasPassed:!u,level:r.validateDetail.level,extraInfo:r.content})};
},{isPage:false,isComponent:false,currentFile:'425B7011829A079C243D1816847D7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("43A2F676829A079C25C49E711B4C7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault.js")(require("7B9C8496829A079C1DFAEC91795C7B70.js")),n=require("BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,t="".concat(n,"/cooperation/wap/get_session_id/"),o="".concat(n,"/cooperation/wap/is_user_login/"),i=function(){return new Promise((function(n,o){wx.login({success:function(i){i.code&&(0,e.default)({url:t,method:"POST",data:{code:i.code,from_wx_mini:1,first_vendor:r(),encryptedData:"",iv:""},header:{cookie:"","content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data||{},i=t.sessionid,r=t.user_name||"",s=t.is_first,a=t.user_id||"",u="sessionid=".concat(i);if(i){var c=getApp();return wx.setStorageSync("sessionid",u),wx.setStorageSync("sessionUserId",a),wx.setStorageSync("userName",r),c.globalData.sessionid=u,a&&c.sensors.login(a),wx.setStorageSync("activity_token",t.activity_token),c.globalData.isFirstAuthorized=s,c.globalData.appIsLogin=Promise.resolve(),c.globalData.launchDoPoint(),n()}return o()},fail:function(){return o()}})}})}))},r=function(){var e=wx.getStorageSync("authorizationPointData");return e&&e.source_type?e.source_type:""},s=function(){return new Promise((function(n,t){(0,e.default)({url:o,success:function(e){return e.data.login?n(e.data):t()},fail:function(){return t()}})}))};module.exports={autoLogin:i,isLogin:s,updateSessionid:function(e){var n="sessionid=".concat(e);wx.setStorageSync("sessionid",n),getApp().globalData.sessionid=n},manualLogin:function(){return new Promise((function(e,n){s().then((function(){return e()})).catch((function(){i().then((function(){return e()})).catch((function(){return n()}))}))}))}};
},{isPage:false,isComponent:false,currentFile:'43A2F676829A079C25C49E711B4C7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("56F44BB4829A079C309223B3039D7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var s=require("BC983DD1829A079CDAFE55D6E84D7B70.js");module.exports={WEBSOCKET_URL:"wss://".concat(s.baseUrl.replace("https://",""),"/cyws/ws/message")};
},{isPage:false,isComponent:false,currentFile:'56F44BB4829A079C309223B3039D7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("5FA81AD3829A079C39CE72D4239C7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=wx.getRealtimeLogManager?wx.getRealtimeLogManager():null;module.exports={debug:function(){e&&e.debug.apply(e,arguments)},info:function(){e&&e.info.apply(e,arguments)},warn:function(){e&&e.warn.apply(e,arguments)},error:function(){e&&e.error.apply(e,arguments)},setFilterMsg:function(t){e&&e.setFilterMsg&&"string"==typeof t&&e.setFilterMsg(t)},addFilterMsg:function(t){e&&e.addFilterMsg&&"string"==typeof t&&e.addFilterMsg(t)}};
},{isPage:false,isComponent:false,currentFile:'5FA81AD3829A079C39CE72D4239C7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("6A719353829A079C0C17FB54BF7D7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault.js"),a=e(require("D6CAF1F1829A079CB0AC99F6BFEC7B70.js")),i=e(require("D0479CE4829A079CB621F4E3756D7B70.js")),r={find_doc_list:{filter_message:"find_doc_list",label:"找医生列表页 空的列表",interfaceId:"find_doc_list",level:3},seo_weixin_service_search:{filter_message:"seo_weixin_service_search",label:"微信搜一搜 服务页面接入",interfaceId:"seo_weixin_service_search",level:1},seo_weixin_native_search:{filter_message:"seo_weixin_native_search",label:"所有微信提供的搜索访问渠道",interfaceId:"seo_weixin_native_search",level:1},seo_chunyu_seo:{filter_message:"seo_chunyu_seo",label:"由微信推送后台来源打开的QA",interfaceId:"seo_chunyu_seo",level:1},qa_privacy_issue:{filter_message:"qa_privacy_issue",label:"qa详情页 qa涉及隐私无法打开",interfaceId:"qa_privacy_issue",level:2},qa_privacy_issue_seo:{filter_message:"qa_privacy_issue_seo",label:"qa详情页 qa涉及隐私无法打开 并且来源是SEO",interfaceId:"qa_privacy_issue_seo",level:2},qa_message_stream:{filter_message:"qa_message_stream",label:"qa详情页，后端error_code不为0",interfaceId:"qa_message_stream",level:3},audio_detail:{filter_message:"audio_detail",label:"语音详情页topic_info异常",interfaceId:"audio_detail",level:3},request_fail:{filter_message:"request_fail",label:"wx.request失败",interfaceId:"request_fail",level:2},generanl_topic_detail:{filter_message:"generanl_topic_detail",label:"新的通用话题页面",interfaceId:"generanl_topic_detail",level:3},page_not_found:{filter_message:"page_not_found",label:"页面未找到",interfaceId:"page_not_found",level:2}};module.exports=function(e){if("function"==typeof wx.reportEvent){var s=(0,i.default)(e,{id:{presence:!0},hasPassed:{presence:!0}},{format:"flat"});if(s)return console.log(s),a.default.setFilterMsg("we分析上报数据格式错误"),void a.default.warn("report message:",s);if(e&&e.id){var _=e.errorMsg,l=e.id,t=e.hasPassed,o=void 0!==t&&t,n=e.extraInfo,f=void 0===n?{}:n;r[l]&&(wx.reportEvent("wxdata_perf_monitor",{wxdata_perf_monitor_id:r[l].interfaceId,wxdata_perf_monitor_level:r[l].level,wxdata_perf_error_code:o?0:1,wxdata_perf_error_msg:String(_)}),o||(a.default.setFilterMsg(r[l].filter_message),a.default.info("report message:",_),a.default.info("extra info:",f),a.default.info("version",wx.getAccountInfoSync().miniProgram.version||"非线上版本")))}}};
},{isPage:false,isComponent:false,currentFile:'6A719353829A079C0C17FB54BF7D7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("6E47C322829A079C0821AB25BD9C7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var _typeof2=require("@babel/runtime/helpers/typeof.js");!function(){function t(t){if(t)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==("undefined"==typeof window?"undefined":_typeof2(window)),i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==("undefined"==typeof self?"undefined":_typeof2(self)),h=!i.JS_MD5_NO_NODE_JS&&"object"==("undefined"==typeof process?"undefined":_typeof2(process))&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==("undefined"==typeof module?"undefined":_typeof2(module))&&module.exports,o="function"==typeof define&&define.amd,a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==_typeof2(t)&&t.buffer&&t.buffer.constructor===ArrayBuffer});var b=function(e){return function(r){return new t(!0).update(r)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(t){return e.create().update(t)};for(var r=0;r<c.length;++r){var i=c[r];e[i]=b(i)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(s){if("string"==typeof s)return e.createHash("md5").update(s,"utf8").digest("hex");if(null==s)throw r;return s.constructor===ArrayBuffer&&(s=new Uint8Array(s)),Array.isArray(s)||ArrayBuffer.isView(s)||s.constructor===i?e.createHash("md5").update(new i(s)).digest("hex"):t(s)};return s};t.prototype.update=function(t){if(!this.finalized){var e,i=_typeof2(t);if("string"!==i){if("object"!==i)throw r;if(null===t)throw r;if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw r;e=!0}for(var s,n,h=0,f=t.length,o=this.blocks,u=this.buffer8;h<f;){if(this.hashed&&(this.hashed=!1,o[0]=o[16],o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),e)if(a)for(n=this.start;h<f&&n<64;++h)u[n++]=t[h];else for(n=this.start;h<f&&n<64;++h)o[n>>2]|=t[h]<<y[3&n++];else if(a)for(n=this.start;h<f&&n<64;++h)(s=t.charCodeAt(h))<128?u[n++]=s:s<2048?(u[n++]=192|s>>6,u[n++]=128|63&s):s<55296||s>=57344?(u[n++]=224|s>>12,u[n++]=128|s>>6&63,u[n++]=128|63&s):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++h)),u[n++]=240|s>>18,u[n++]=128|s>>12&63,u[n++]=128|s>>6&63,u[n++]=128|63&s);else for(n=this.start;h<f&&n<64;++h)(s=t.charCodeAt(h))<128?o[n>>2]|=s<<y[3&n++]:s<2048?(o[n>>2]|=(192|s>>6)<<y[3&n++],o[n>>2]|=(128|63&s)<<y[3&n++]):s<55296||s>=57344?(o[n>>2]|=(224|s>>12)<<y[3&n++],o[n>>2]|=(128|s>>6&63)<<y[3&n++],o[n>>2]|=(128|63&s)<<y[3&n++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++h)),o[n>>2]|=(240|s>>18)<<y[3&n++],o[n>>2]|=(128|s>>12&63)<<y[3&n++],o[n>>2]|=(128|s>>6&63)<<y[3&n++],o[n>>2]|=(128|63&s)<<y[3&n++]);this.lastByteIndex=n,this.bytes+=n-this.start,n>=64?(this.start=n-64,this.hash(),this.hashed=!0):this.start=n}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=u[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,e,r,i,s,n,h=this.blocks;this.first?e=((e=((t=((t=h[0]-680876937)<<7|t>>>25)-271733879<<0)^(r=((r=(-271733879^(i=((i=(-1732584194^2004318071&t)+h[1]-117830708)<<12|i>>>20)+t<<0)&(-271733879^t))+h[2]-1126478375)<<17|r>>>15)+i<<0)&(i^t))+h[3]-1316259209)<<22|e>>>10)+r<<0:(t=this.h0,e=this.h1,r=this.h2,e=((e+=((t=((t+=((i=this.h3)^e&(r^i))+h[0]-680876936)<<7|t>>>25)+e<<0)^(r=((r+=(e^(i=((i+=(r^t&(e^r))+h[1]-389564586)<<12|i>>>20)+t<<0)&(t^e))+h[2]+606105819)<<17|r>>>15)+i<<0)&(i^t))+h[3]-1044525330)<<22|e>>>10)+r<<0),e=((e+=((t=((t+=(i^e&(r^i))+h[4]-176418897)<<7|t>>>25)+e<<0)^(r=((r+=(e^(i=((i+=(r^t&(e^r))+h[5]+1200080426)<<12|i>>>20)+t<<0)&(t^e))+h[6]-1473231341)<<17|r>>>15)+i<<0)&(i^t))+h[7]-45705983)<<22|e>>>10)+r<<0,e=((e+=((t=((t+=(i^e&(r^i))+h[8]+1770035416)<<7|t>>>25)+e<<0)^(r=((r+=(e^(i=((i+=(r^t&(e^r))+h[9]-1958414417)<<12|i>>>20)+t<<0)&(t^e))+h[10]-42063)<<17|r>>>15)+i<<0)&(i^t))+h[11]-1990404162)<<22|e>>>10)+r<<0,e=((e+=((t=((t+=(i^e&(r^i))+h[12]+1804603682)<<7|t>>>25)+e<<0)^(r=((r+=(e^(i=((i+=(r^t&(e^r))+h[13]-40341101)<<12|i>>>20)+t<<0)&(t^e))+h[14]-1502002290)<<17|r>>>15)+i<<0)&(i^t))+h[15]+1236535329)<<22|e>>>10)+r<<0,e=((e+=((i=((i+=(e^r&((t=((t+=(r^i&(e^r))+h[1]-165796510)<<5|t>>>27)+e<<0)^e))+h[6]-1069501632)<<9|i>>>23)+t<<0)^t&((r=((r+=(t^e&(i^t))+h[11]+643717713)<<14|r>>>18)+i<<0)^i))+h[0]-373897302)<<20|e>>>12)+r<<0,e=((e+=((i=((i+=(e^r&((t=((t+=(r^i&(e^r))+h[5]-701558691)<<5|t>>>27)+e<<0)^e))+h[10]+38016083)<<9|i>>>23)+t<<0)^t&((r=((r+=(t^e&(i^t))+h[15]-660478335)<<14|r>>>18)+i<<0)^i))+h[4]-405537848)<<20|e>>>12)+r<<0,e=((e+=((i=((i+=(e^r&((t=((t+=(r^i&(e^r))+h[9]+568446438)<<5|t>>>27)+e<<0)^e))+h[14]-1019803690)<<9|i>>>23)+t<<0)^t&((r=((r+=(t^e&(i^t))+h[3]-187363961)<<14|r>>>18)+i<<0)^i))+h[8]+1163531501)<<20|e>>>12)+r<<0,e=((e+=((i=((i+=(e^r&((t=((t+=(r^i&(e^r))+h[13]-1444681467)<<5|t>>>27)+e<<0)^e))+h[2]-51403784)<<9|i>>>23)+t<<0)^t&((r=((r+=(t^e&(i^t))+h[7]+1735328473)<<14|r>>>18)+i<<0)^i))+h[12]-1926607734)<<20|e>>>12)+r<<0,e=((e+=((n=(i=((i+=((s=e^r)^(t=((t+=(s^i)+h[5]-378558)<<4|t>>>28)+e<<0))+h[8]-2022574463)<<11|i>>>21)+t<<0)^t)^(r=((r+=(n^e)+h[11]+1839030562)<<16|r>>>16)+i<<0))+h[14]-35309556)<<23|e>>>9)+r<<0,e=((e+=((n=(i=((i+=((s=e^r)^(t=((t+=(s^i)+h[1]-1530992060)<<4|t>>>28)+e<<0))+h[4]+1272893353)<<11|i>>>21)+t<<0)^t)^(r=((r+=(n^e)+h[7]-155497632)<<16|r>>>16)+i<<0))+h[10]-1094730640)<<23|e>>>9)+r<<0,e=((e+=((n=(i=((i+=((s=e^r)^(t=((t+=(s^i)+h[13]+681279174)<<4|t>>>28)+e<<0))+h[0]-358537222)<<11|i>>>21)+t<<0)^t)^(r=((r+=(n^e)+h[3]-722521979)<<16|r>>>16)+i<<0))+h[6]+76029189)<<23|e>>>9)+r<<0,e=((e+=((n=(i=((i+=((s=e^r)^(t=((t+=(s^i)+h[9]-640364487)<<4|t>>>28)+e<<0))+h[12]-421815835)<<11|i>>>21)+t<<0)^t)^(r=((r+=(n^e)+h[15]+530742520)<<16|r>>>16)+i<<0))+h[2]-995338651)<<23|e>>>9)+r<<0,e=((e+=((i=((i+=(e^((t=((t+=(r^(e|~i))+h[0]-198630844)<<6|t>>>26)+e<<0)|~r))+h[7]+1126891415)<<10|i>>>22)+t<<0)^((r=((r+=(t^(i|~e))+h[14]-1416354905)<<15|r>>>17)+i<<0)|~t))+h[5]-57434055)<<21|e>>>11)+r<<0,e=((e+=((i=((i+=(e^((t=((t+=(r^(e|~i))+h[12]+1700485571)<<6|t>>>26)+e<<0)|~r))+h[3]-1894986606)<<10|i>>>22)+t<<0)^((r=((r+=(t^(i|~e))+h[10]-1051523)<<15|r>>>17)+i<<0)|~t))+h[1]-2054922799)<<21|e>>>11)+r<<0,e=((e+=((i=((i+=(e^((t=((t+=(r^(e|~i))+h[8]+1873313359)<<6|t>>>26)+e<<0)|~r))+h[15]-30611744)<<10|i>>>22)+t<<0)^((r=((r+=(t^(i|~e))+h[6]-1560198380)<<15|r>>>17)+i<<0)|~t))+h[13]+1309151649)<<21|e>>>11)+r<<0,e=((e+=((i=((i+=(e^((t=((t+=(r^(e|~i))+h[4]-145523070)<<6|t>>>26)+e<<0)|~r))+h[11]-1120210379)<<10|i>>>22)+t<<0)^((r=((r+=(t^(i|~e))+h[2]+718787259)<<15|r>>>17)+i<<0)|~t))+h[9]-343485551)<<21|e>>>11)+r<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=r-1732584194<<0,this.h3=i+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+r<<0,this.h3=this.h3+i<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,i=this.h3;return n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]+n[i>>4&15]+n[15&i]+n[i>>12&15]+n[i>>8&15]+n[i>>20&15]+n[i>>16&15]+n[i>>28&15]+n[i>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,i=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,e,r,i="",s=this.array(),n=0;n<15;)t=s[n++],e=s[n++],r=s[n++],i+=p[t>>>2]+p[63&(t<<4|e>>>4)]+p[63&(e<<2|r>>>6)]+p[63&r];return t=s[n],i+(p[t>>>2]+p[t<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&define((function(){return _})))}();
},{isPage:false,isComponent:false,currentFile:'6E47C322829A079C0821AB25BD9C7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("7B9C8496829A079C1DFAEC91795C7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault.js"),r=require("@babel/runtime/helpers/objectSpread2.js"),i=require("1D735BD7829A079C7B1533D0C5CC7B70.js"),t=require("92BC1755829A079CF4DA7F52C55D7B70.js"),o=e(require("D6CAF1F1829A079CB0AC99F6BFEC7B70.js")),a=e(require("6A719353829A079C0C17FB54BF7D7B70.js"));module.exports=function(e){var u={header:{cookie:getApp()?getApp().globalData.sessionid:""},method:"GET",data:{version:i.productionVersion}},n=(0,t.deepMerge)(u,e);"POST"===n.method&&(n.header["Content-Type"]="application/x-www-form-urlencoded"),wx.request(r(r({},n),{},{fail:function(r){if((0,a.default)({id:"request_fail",hasPassed:!1,extraInfo:{"请求地址":e.url,"原因":r.errMsg,"失败码":r.errno||"无"}}),"function"==typeof e.fail)try{e.fail(r)}catch(r){o.default.error("请求地址:".concat(e.url," 未定义fail回调函数"))}}}))};
},{isPage:false,isComponent:false,currentFile:'7B9C8496829A079C1DFAEC91795C7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("7C7490B0829A079C1A12F8B759DC7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("BC983DD1829A079CDAFE55D6E84D7B70.js"),t=/^http(s)?:\/\//;exports.default=function(o){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.baseUrl,r=wx.getStorageSync("sessionid");return new Promise((function(e,d){s["Content-Type"]="POST"===n?"application/x-www-form-urlencoded":"application/json",wx.request({url:t.test(o)?o:"".concat(i).concat(o),data:a,method:n,header:Object.assign(s,{Cookie:r}),success:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.statusCode>=200&&t.statusCode<=400?e(t.data):d(t.data||{})},fail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d(e.data||{})}})}))};
},{isPage:false,isComponent:false,currentFile:'7C7490B0829A079C1A12F8B759DC7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("81E76856829A079CE7810051D30C7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={doctor_service_inquiry:"/pages/tel_inquiry/index"};
},{isPage:false,isComponent:false,currentFile:'81E76856829A079CE7810051D30C7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("840A1D64829A079CE26C7563276C7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl;module.exports={doPoint:function(t,a){var o=getApp().globalData.sessionid||"",i=wx.getStorageSync("open_id")||"",n=wx.getStorageSync("device_id")||"",r=i||n;wx.request({url:e+"/stat/h5/event_analyse/data_upload/?from_wx_mini=1&device_id="+r,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",cookie:o},data:{events:JSON.stringify([{key:t,segmentation:a}])}})}};
},{isPage:false,isComponent:false,currentFile:'840A1D64829A079CE26C7563276C7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("92BC1755829A079CF4DA7F52C55D7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/objectSpread2.js"),t=require("@babel/runtime/helpers/typeof.js"),n=require("@babel/runtime/helpers/toConsumableArray.js"),r=require("BC983DD1829A079CDAFE55D6E84D7B70.js"),i={param:function(e){var t,n=[],r=function(e,t){var r="function"==typeof t?t():t;n[n.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==r?"":r)};for(t in e)r(t,e[t]);return n.join("&")},timeCountDown:function(e,t){"iscode"==e&&t.setData({btnSelected:"btn--selected",disabled:"disabled"});var n=60,r=setInterval((function(){(n-=1)<=0?(t.setData({disabled:"",btnSelected:"",btn_text:"获取验证码"}),clearInterval(r)):t.setData({btn_text:n+"s后再获取"})}),1e3)},dateFormat:function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},Timer:function(e,t,n,r){var i,o=!1,a=e||0;t=t||1e3,this.pause=function(){o=!0,i&&clearTimeout(i)},this.start=function(){o=!1,function e(t,n,r,s){if(!o)if(t<=0)"function"==typeof r&&r();else{var c=Date.now();i=setTimeout((function(){var i=parseInt((Date.now()-c)/n);a=t-i,"function"==typeof s&&s(a),e(a,n,r,s)}),n)}}(a,t,n,r)}},getQueryStr:function(e,t){var n=t.match(new RegExp("[?&]"+e+"=([^&]*)","i")),r=n&&n.length>1&&n[1]||"";return decodeURIComponent(r)},getSceneQueryStr:function(e,t){var n=decodeURIComponent(t).match(new RegExp(e+"=([^&]*)","i"));return n&&n.length>1&&n[1]||""||""},getElementRec:function(e){return new Promise((function(t,n){var r=wx.createSelectorQuery();r.select(e).boundingClientRect(),r.exec((function(e){return e[0]?t(e[0]):n()}))}))},debounce:function(e,t){var r,i=t||1e3;return function(){r&&clearTimeout(r);var t=this,o=arguments;r=setTimeout((function(){e.call.apply(e,[t].concat(n(o)))}),i)}},addParameterToURL:function(e,t){return e+=(e.split("?")[1]?"&":"?")+t},isObject:function(e){return e&&"object"===t(e)&&!Array.isArray(e)},deepMerge:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!n.length)return e;var o=n.shift();if(i.isObject(e)&&i.isObject(o))for(var a in o)i.isObject(o[a])?(e[a]||(e[a]={}),i.deepMerge(e[a],o[a])):e[a]=o[a];return i.deepMerge.apply(i,[e].concat(n))},wxShowToast:function(e){wx.showToast({title:e,icon:"none",mask:!0,duration:2e3})},wxShowLoading:function(e){wx.showLoading({title:e,mask:!0})},compareSDKVersion:function(e,t){e=e.split("."),t=t.split(".");for(var n=Math.max(e.length,t.length);e.length<n;)e.push("0");for(;t.length<n;)t.push("0");for(var r=0;r<n;r++){var i=parseInt(e[r]),o=parseInt(t[r]);if(i>o)return 1;if(i<o)return-1}return 0},trackWithServer:function(t){if(t)try{var n=JSON.parse(t),r=n.click_event||"AppClick",i=e(e({},n),{},{app:"weixin_mini"});console.log(r,i),getApp().sensors.track(r,i)}catch(e){console.error(e)}},syncSubscribeMessage:function(e){wx.request({url:"".concat(r.baseUrl,"/cooperation/wap/mini_sub/save/"),data:{data:JSON.stringify([{template_id:e,choice:"accept"}])},header:{"Content-Type":"application/x-www-form-urlencoded",cookie:getApp()?getApp().globalData.sessionid:""},method:"POST",success:function(e){0===e.data.error_code&&console.log("同步成功")}})},isCyDomain:function(e){return/^https?:\/\/([a-zA-Z0-9-]+\.)?(chunyuyisheng|chunyutianxia)\.com\//.test(e)},isDevelop:function(){var e=wx.getAccountInfoSync().miniProgram.envVersion;return"develop"===e||"trial"===e},setWebviewUrlWithLoginCredentials:function(e){var t=wx.getStorageSync("sessionid"),n="",r=e;if(t&&t.length){var i=t.split("sessionid=");i.length>1&&(n=i[1])}return n.length&&(r=function(e,t,n){if(e.indexOf(t+"=")>=0){var r=e.substring(0,e.indexOf(t)),i=e.substring(e.indexOf(t));e=r+t+"="+n+(i=(i=i.substring(i.indexOf("=")+1)).indexOf("&")>=0?i.substring(i.indexOf("&")):"")}else e.indexOf("?")<0?e+="?"+t+"="+n:e+="&"+t+"="+n;return e}(e,"_CS",n)),r}};module.exports=i;
},{isPage:false,isComponent:false,currentFile:'92BC1755829A079CF4DA7F52C55D7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("94310D64829A079CF2576563CCAC7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault.js"),o=require("@babel/runtime/helpers/objectSpread2.js"),n=e(require("@babel/runtime/regenerator.js")),t=require("@babel/runtime/helpers/asyncToGenerator.js"),i=e(require("23F8CAA4829A079C459EA2A3298C7B70.js")),a=e(require("6E47C322829A079C0821AB25BD9C7B70.js")),s=getApp(),r=require("BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,u=r+"/files/upload_token/",c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"成功",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";wx.showToast({title:e,icon:o,duration:1500})},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return new Promise((function(o,n){wx.request({url:e,method:"GET",data:{from_wx_mini:1},header:{Cookie:s.globalData.sessionid},success:function(e){var t=e.data,i=void 0===t?{}:t;i.success&&o(i.token),n("token 获取失败")},fail:function(){wx.showToast({title:"网络断开",icon:"none",uration:3e3}),console.error("get token error"),n("token 获取失败")}})}))},d=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"https://upload.qbox.me/";return new Promise((function(a,s){wx.uploadFile({url:i,filePath:n,name:"file",formData:{token:e},success:function(e){e=JSON.parse(e.data),console.log("res",e),e.success&&a(o({fileUrl:e.img_url},t)),s("文件上传失败")},fail:function(e){console.log("uploadFile fail",e),s("文件上传失败")}})}))},f=function(e){return new Promise((function(o,n){wx.downloadFile({url:e,success:function(e){wx.saveFile({tempFilePath:e.tempFilePath,success:function(e){console.log("success",e),o(e.savedFilePath)},fail:function(e){console.log(e),n("下载文件失败")}})},fail:function(e){console.log("downloadFile fail",e),n("下载文件失败")}})}))};module.exports={uploadFile:d,uploadImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.count,a=void 0===o?2:o,s=e.sizeType,r=void 0===s?["original","compressed"]:s,u=e.sourceType,c=void 0===u?["album","camera"]:u;return new Promise((function(e,o){var s;wx.chooseImage({count:a,sizeType:r,sourceType:c,success:(s=t(n.default.mark((function t(a){var s,r,u;return n.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=a.tempFiles,r=void 0===s?[]:s,n.next=3,l();case 3:u=n.sent,wx.showLoading({title:"上传中"}),Promise.all(r.map((function(e,o){return d(u,e.path,{size:e.size})}))).then((function(o){wx.hideLoading(),e(o)})).catch((function(e){wx.hideLoading(),o({type:i.default.UPLOAD_FAIL.value,errMsg:i.default.UPLOAD_FAIL.desc,info:e})}));case 6:case"end":return n.stop()}}),t)}))),function(e){return s.apply(this,arguments)}),fail:function(e){wx.hideLoading(),o({type:i.default.API_FAIL.value,errMsg:i.default.API_FAIL.desc,info:e})}})}))},uploadVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.count,a=void 0===i?9:i,s=e.mediaType,r=void 0===s?["image","video"]:s,u=e.maxDuration,c=void 0===u?10:u,f=e.sourceType,h=void 0===f?["album","camera"]:f,m=e.sizeType,p=void 0===m?["original","compressed"]:m,g=e.camera,w=void 0===g?"back":g,v=["mp4","mov"];return new Promise((function(e,i){var s;wx.chooseMedia({count:a,mediaType:r,sourceType:h,maxDuration:c,camera:w,compressed:!1,sizeType:p,success:(s=t(n.default.mark((function t(a){var s,r,u,f,h,m,p;return n.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l();case 2:if(s=n.sent,wx.showLoading({title:"上传中"}),r=a.errMsg,u=a.tempFiles,f=void 0===u?[]:u,h=a.type,"chooseMedia:ok"!==r){n.next=25;break}m=0;case 7:if(!(m<f.length)){n.next=22;break}if(console.log(f[m]),p=f[m].tempFilePath.split(".").pop().toLowerCase(),"video"!==f[m].fileType||-1!==v.indexOf(p)){n.next=15;break}return i({errMsg:"format error"}),n.abrupt("break",22);case 15:if(!("video"===f[m].fileType&&Number(f[m].duration).toFixed(2)>c)){n.next=19;break}return wx.hideLoading(),i({errMsg:"duration error"}),n.abrupt("break",22);case 19:m++,n.next=7;break;case 22:Promise.all(f.map((function(e,n){return d(s,e.tempFilePath,o(o({},e),{},{fileType:h}))}))).then((function(o){console.log("fileList",o),e(o),wx.hideLoading()})).catch((function(e){wx.hideLoading(),i({errMsg:e||"上传失败"})})),n.next=27;break;case 25:wx.hideLoading(),i({errMsg:"选择文件失败"});case 27:case"end":return n.stop()}}),t)}))),function(e){return s.apply(this,arguments)}),fail:function(e){console.log("chooseMedia fail",e),wx.hideLoading(),i({errMsg:"选择文件失败"})}})}))},getToken:l,downloadFile:f,saveImageToPhotosAlbum:function(e){return new Promise((function(o,n){f(e).then((function(e){wx.saveImageToPhotosAlbum({filePath:e,success:function(e){console.log("saveImageToPhotosAlbumMsg",e),c("已保存至手机相册"),o()},fail:function(t){t.errMsg&&wx.showModal({title:"提示",content:"需要您授权保存相册",showCancel:!1,success:function(t){t.confirm&&wx.openSetting({success:function(t){t.authSetting["scope.writePhotosAlbum"]?wx.saveImageToPhotosAlbum({filePath:e,success:function(e){console.log("saveImageToPhotosAlbumMsg",e),c("已保存至手机相册"),o()}}):(wx.showModal({title:"温馨提示",content:"获取权限失败，将无法保存到相册哦~",showCancel:!1}),n())}})}})}})})).catch((function(e){c(e||"图片下载失败","none"),n()}))}))},saveVideoToPhotosAlbum:function(e){return new Promise((function(o,n){f(e).then((function(e){wx.saveVideoToPhotosAlbum({filePath:e,success:function(e){console.log("vide path",e),c("保存成功"),o()},fail:function(t){console.log("err",t),"saveVideoToPhotosAlbum:fail auth deny"===t.errMsg&&wx.showModal({title:"提示",content:"需要您授权保存相册",showCancel:!1,success:function(t){wx.openSetting({success:function(t){t.authSetting["scope.writePhotosAlbum"]?wx.saveVideoToPhotosAlbum({filePath:e,success:function(e){c("保存成功"),o()}}):(wx.showModal({title:"提示",content:"获取权限失败，将无法保存到相册哦~",showCancel:!1}),n())}})}})}})})).catch((function(e){c(e||"视频下载失败","none"),n()}))}))},generateFakeToken:function(){return new Promise((function(e,o){var n=Math.floor(Date.now()/1e3),t=Math.floor(Date.now()/1e3),i=(0,a.default)("7scQRy06MajgNpOK"+n+t).slice(8,24);wx.request({url:"".concat(r,"/files/upload_token/"),method:"POST",data:{partner:"chunyu_upload",user_id:n,atime:t,sign:i},header:{Cookie:s.globalData.sessionid,"Content-Type":"application/x-www-form-urlencoded"},success:function(n){return n.data.success?e(n.data.token):o()},fail:function(e){return o(e)}})}))}};
},{isPage:false,isComponent:false,currentFile:'94310D64829A079CF2576563CCAC7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("982D50C4829A079CFE4B38C322EC7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault.js"),r=require("BC983DD1829A079CDAFE55D6E84D7B70.js"),t=e(require("7B9C8496829A079C1DFAEC91795C7B70.js")),a=require("43A2F676829A079C25C49E711B4C7B70.js");module.exports={getQiYu:function(){return new Promise((function(e,n){(0,a.manualLogin)().then((function(){(0,t.default)({url:r.baseUrl+"/feedback/qiyu/patient_info/",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(r){if(0===r.data.error_code){var t=r.data.data||[],a={data:[]},u="";wx.getSystemInfo({success:function(e){u=e.system}}),t.push({key:"system",label:"系统版本",value:u});var i=t.map((function(e,r){var t={};return t.index=r,t.key=e.key,t.label=e.label,t.value=e.value,t.href=e.href,t}));return a.data=JSON.stringify(i),e(JSON.stringify(a))}return n(r.data.error_msg)},fail:function(){return n("wxapi调用失败")}})}))}))}};
},{isPage:false,isComponent:false,currentFile:'982D50C4829A079CFE4B38C322EC7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("9B422ED7829A079CFD2446D0F82D7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/typeof.js"),t={},r={para:{name:"sensors",server_url:"",send_timeout:1e3,use_client_time:!1,show_log:!0,launched:!1,allow_amend_share_path:!0,max_string_length:300,datasend_timeout:3e3,source_channel:[],autoTrack:{appLaunch:!0,appShow:!0,appHide:!0,pageShow:!0,pageShare:!0,mpClick:!1,mpFavorite:!0},is_persistent_save:{share:!1,utm:!1},preset_properties:{}}},n={data:1,onLoad:1,onShow:1,onReady:1,onPullDownRefresh:1,onReachBottom:1,onShareAppMessage:1,onPageScroll:1,onResize:1,onTabItemTap:1,onHide:1,onUnload:1},a="object"==e(a)?a:{};a.info=function(){if(r.para.show_log&&"object"==("undefined"==typeof console?"undefined":e(console))&&console.log)try{return console.log.apply(console,arguments)}catch(e){console.log(arguments[0])}},r.setPara=function(e){r.para=t.extend2Lev(r.para,e);var n=[];if(t.isArray(r.para.source_channel))for(var i=r.para.source_channel.length,s=0;s<i;s++)-1===" utm_source utm_medium utm_campaign utm_content utm_term sa_utm ".indexOf(" "+r.para.source_channel[s]+" ")&&n.push(r.para.source_channel[s]);r.para.source_channel=n,t.isObject(r.para.register)&&t.extend(t.info.properties,r.para.register),r.para.openid_url||(r.para.openid_url=r.para.server_url.replace(/([^\/])\/(sa)(\.gif){0,1}/,"$1/mp_login")),"number"!=typeof r.para.send_timeout&&(r.para.send_timeout=1e3);var o={send_timeout:6e3,max_length:6};e&&e.datasend_timeout||r.para.batch_send&&(r.para.datasend_timeout=1e4),!0===r.para.batch_send?(r.para.batch_send=t.extend({},o),r.para.use_client_time=!0):t.isObject(r.para.batch_send)&&(r.para.use_client_time=!0,r.para.batch_send=t.extend({},o,r.para.batch_send));var c={share:!1,utm:!1};!0===r.para.is_persistent_save?(r.para.is_persistent_save=t.extend({},c),r.para.is_persistent_save.utm=!0):t.isObject(r.para.is_persistent_save)&&(r.para.is_persistent_save=t.extend({},c,r.para.is_persistent_save)),r.para.server_url?r.para.preset_properties=t.isObject(r.para.preset_properties)?r.para.preset_properties:{}:a.info("请使用 setPara() 方法设置 server_url 数据接收地址,详情可查看https://www.sensorsdata.cn/manual/mp_sdk_new.html#112-%E5%BC%95%E5%85%A5%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0")},r.status={};var i=Array.prototype,s=Function.prototype,o=Object.prototype,c=i.slice,u=o.toString,p=o.hasOwnProperty,h=["$latest_utm_source","$latest_utm_medium","$latest_utm_campaign","$latest_utm_content","$latest_utm_term","$latest_sa_utm"],d=["$latest_share_distinct_id","$latest_share_url_path","$latest_share_depth","$latest_share_method"],f={1e3:"其他",1001:"发现栏小程序主入口，「最近使用」列表（基础库2.2.4版本起包含「我的小程序」列表）",1005:"顶部搜索框的搜索结果页",1006:"发现栏小程序主入口搜索框的搜索结果页",1007:"单人聊天会话中的小程序消息卡片",1008:"群聊会话中的小程序消息卡片",1010:"收藏夹",1011:"扫描二维码",1012:"长按图片识别二维码",1013:"手机相册选取二维码",1014:"小程序模版消息",1017:"前往体验版的入口页",1019:"微信钱包",1020:"公众号 profile 页相关小程序列表",1022:"聊天顶部置顶小程序入口",1023:"安卓系统桌面图标",1024:"小程序 profile 页",1025:"扫描一维码",1026:"附近小程序列表",1027:"顶部搜索框搜索结果页“使用过的小程序”列表",1028:"我的卡包",1029:"卡券详情页",1030:"自动化测试下打开小程序",1031:"长按图片识别一维码",1032:"手机相册选取一维码",1034:"微信支付完成页",1035:"公众号自定义菜单",1036:"App 分享消息卡片",1037:"小程序打开小程序",1038:"从另一个小程序返回",1039:"摇电视",1042:"添加好友搜索框的搜索结果页",1043:"公众号模板消息",1044:"带 shareTicket 的小程序消息卡片（详情)",1045:"朋友圈广告",1046:"朋友圈广告详情页",1047:"扫描小程序码",1048:"长按图片识别小程序码",1049:"手机相册选取小程序码",1052:"卡券的适用门店列表",1053:"搜一搜的结果页",1054:"顶部搜索框小程序快捷入口",1056:"音乐播放器菜单",1057:"钱包中的银行卡详情页",1058:"公众号文章",1059:"体验版小程序绑定邀请页",1064:"微信连Wi-Fi状态栏",1067:"公众号文章广告",1068:"附近小程序列表广告",1069:"移动应用",1071:"钱包中的银行卡列表页",1072:"二维码收款页面",1073:"客服消息列表下发的小程序消息卡片",1074:"公众号会话下发的小程序消息卡片",1077:"摇周边",1078:"连Wi-Fi成功页",1079:"微信游戏中心",1081:"客服消息下发的文字链",1082:"公众号会话下发的文字链",1084:"朋友圈广告原生页",1088:"会话中查看系统消息，打开小程序",1089:"微信聊天主界面下拉",1090:"长按小程序右上角菜单唤出最近使用历史",1091:"公众号文章商品卡片",1092:"城市服务入口",1095:"小程序广告组件",1096:"聊天记录",1097:"微信支付签约页",1099:"页面内嵌插件",1102:"公众号 profile 页服务预览",1103:"发现栏小程序主入口，“我的小程序”列表",1104:"微信聊天主界面下拉，“我的小程序”栏",1106:"聊天主界面下拉，从顶部搜索结果页，打开小程序",1107:"订阅消息，打开小程序",1113:"安卓手机负一屏，打开小程序(三星)",1114:"安卓手机侧边栏，打开小程序(三星)",1124:"扫“一物一码”打开小程序",1125:"长按图片识别“一物一码”",1126:"扫描手机相册中选取的“一物一码”",1129:"微信爬虫访问",1131:"浮窗打开小程序",1133:"硬件设备打开小程序",1135:"小程序profile页其他小程序列表，打开小程序",1146:"地理位置信息打开出行类小程序",1148:"卡包-交通卡，打开小程序",1150:"扫一扫商品条码结果页打开小程序",1153:"“识物”结果页打开小程序",1154:"朋友圈内打开“单页模式",1155:"“单页模式”打开小程序",1158:"群工具打开小程序",1167:"H5 通过开放标签打开小程序",1169:"发现栏小程序主入口，各个生活服务入口（例如快递服务、出行服务等）"},l="直接打开";r.status.referrer="直接打开";var _=null,m=0,g="",y="",v="",S=!1;function b(e,n,a){var i=r.autoTrackCustom[a];if(e[n]){var s=e[n];e[n]=function(){"onLaunch"===n&&(this[r.para.name]=r),!r.para.autoTrackIsFirst||t.isObject(r.para.autoTrackIsFirst)&&!r.para.autoTrackIsFirst[a]?(s.apply(this,arguments),i.apply(this,arguments)):(!0===r.para.autoTrackIsFirst||t.isObject(r.para.autoTrackIsFirst)&&r.para.autoTrackIsFirst[a])&&(i.apply(this,arguments),s.apply(this,arguments))}}else e[n]=function(){"onLaunch"===n&&(this[r.para.name]=r),i.apply(this,arguments)}}function $(e,n){var a=e[n];e[n]=function(){var e={},n="";if(t.isObject(arguments[0])){var i=arguments[0].currentTarget||{},s=i.dataset||{};n=arguments[0].type,e.$element_id=i.id,e.$element_type=s.type,e.$element_content=s.content,e.$element_name=s.name}return n&&t.isClick(n)&&(e.$url_path=t.getCurrentPath(),r.track("$MPClick",e)),a&&a.apply(this,arguments)}}r.lib_version="1.14.1",function(){s.bind;var e=i.forEach,r=i.indexOf,n=Array.isArray,o={},h=t.each=function(t,r,n){if(null==t)return!1;if(e&&t.forEach===e)t.forEach(r,n);else if(t.length===+t.length){for(var a=0,i=t.length;a<i;a++)if(a in t&&r.call(n,t[a],a,t)===o)return!1}else for(var s in t)if(p.call(t,s)&&r.call(n,t[s],s,t)===o)return!1};t.logger=a,t.extend=function(e){return h(c.call(arguments,1),(function(t){for(var r in t)void 0!==t[r]&&(e[r]=t[r])})),e},t.extend2Lev=function(e){return h(c.call(arguments,1),(function(r){for(var n in r)void 0!==r[n]&&null!==r[n]&&(t.isObject(r[n])&&t.isObject(e[n])?t.extend(e[n],r[n]):e[n]=r[n])})),e},t.coverExtend=function(e){return h(c.call(arguments,1),(function(t){for(var r in t)void 0!==t[r]&&void 0===e[r]&&(e[r]=t[r])})),e},t.isArray=n||function(e){return"[object Array]"===u.call(e)},t.isFunction=function(e){try{return/^\s*\bfunction\b/.test(e)}catch(e){return!1}},t.isArguments=function(e){return!(!e||!p.call(e,"callee"))},t.toArray=function(e){return e?e.toArray?e.toArray():t.isArray(e)||t.isArguments(e)?c.call(e):t.values(e):[]},t.values=function(e){var t=[];return null==e||h(e,(function(e){t[t.length]=e})),t},t.include=function(e,t){var n=!1;return null==e?n:r&&e.indexOf===r?-1!=e.indexOf(t):(h(e,(function(e){if(n||(n=e===t))return o})),n)}}(),t.trim=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},t.isObject=function(e){return null!=e&&"[object Object]"==u.call(e)},t.isEmptyObject=function(e){if(t.isObject(e)){for(var r in e)if(p.call(e,r))return!1;return!0}return!1},t.isUndefined=function(e){return void 0===e},t.isString=function(e){return"[object String]"==u.call(e)},t.isDate=function(e){return"[object Date]"==u.call(e)},t.isBoolean=function(e){return"[object Boolean]"==u.call(e)},t.isNumber=function(e){return"[object Number]"==u.call(e)&&/[\d\.]+/.test(String(e))},t.isJSONString=function(e){try{JSON.parse(e)}catch(e){return!1}return!0},t.decodeURIComponent=function(e){var t="";try{t=decodeURIComponent(e)}catch(r){t=e}return t},t.encodeDates=function(e){return t.each(e,(function(r,n){t.isDate(r)?e[n]=t.formatDate(r):t.isObject(r)&&(e[n]=t.encodeDates(r))})),e},t.formatDate=function(e){function t(e){return e<10?"0"+e:e}return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+t(e.getMilliseconds())},t.searchObjDate=function(e){t.isObject(e)&&t.each(e,(function(r,n){t.isObject(r)?t.searchObjDate(e[n]):t.isDate(r)&&(e[n]=t.formatDate(r))}))},t.formatString=function(e){return e.length>r.para.max_string_length?(a.info("字符串长度超过限制，已经做截取--"+e),e.slice(0,r.para.max_string_length)):e},t.searchObjString=function(e){t.isObject(e)&&t.each(e,(function(r,n){t.isObject(r)?t.searchObjString(e[n]):t.isString(r)&&(e[n]=t.formatString(r))}))},t.parseSuperProperties=function(e){t.isObject(e)&&(t.each(e,(function(r,n){if(t.isFunction(r))try{e[n]=r(),t.isFunction(e[n])&&(a.info("您的属性- "+n+" 格式不满足要求，我们已经将其删除"),delete e[n])}catch(r){delete e[n],a.info("您的属性- "+n+" 抛出了异常，我们已经将其删除")}})),t.strip_sa_properties(e))},t.unique=function(e){for(var t,r=[],n={},a=0;a<e.length;a++)(t=e[a])in n||(n[t]=!0,r.push(t));return r},t.strip_sa_properties=function(e){return t.isObject(e)?(t.each(e,(function(r,n){if(t.isArray(r)){var i=[];t.each(r,(function(e){t.isString(e)?i.push(e):a.info("您的数据-",r,"的数组里的值必须是字符串,已经将其删除")})),0!==i.length?e[n]=i:(delete e[n],a.info("已经删除空的数组"))}t.isString(r)||t.isNumber(r)||t.isDate(r)||t.isBoolean(r)||t.isArray(r)||(a.info("您的数据-",r,"-格式不满足要求，我们已经将其删除"),delete e[n])})),e):e},t.strip_empty_properties=function(e){var r={};return t.each(e,(function(e,t){null!=e&&(r[t]=e)})),r},t.utf8Encode=function(e){var t,r,n,a,i="";for(t=r=0,n=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,a=0;a<n;a++){var s=e.charCodeAt(a),o=null;s<128?r++:o=s>127&&s<2048?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),null!==o&&(r>t&&(i+=e.substring(t,r)),i+=o,t=r=a+1)}return r>t&&(i+=e.substring(t,e.length)),i},t.base64Encode=function(e){var r,n,a,i,s,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c=0,u=0,p="",h=[];if(!e)return e;e=t.utf8Encode(e);do{r=(s=e.charCodeAt(c++)<<16|e.charCodeAt(c++)<<8|e.charCodeAt(c++))>>18&63,n=s>>12&63,a=s>>6&63,i=63&s,h[u++]=o.charAt(r)+o.charAt(n)+o.charAt(a)+o.charAt(i)}while(c<e.length);switch(p=h.join(""),e.length%3){case 1:p=p.slice(0,-2)+"==";break;case 2:p=p.slice(0,-1)+"="}return p},t.getCurrentPath=function(){var e="未取到";try{var t=getCurrentPages();e=t[t.length-1].route}catch(e){a.info(e)}return e},t.getIsFirstDay=function(){return"object"==e(r.store._state)&&"number"==typeof r.store._state.first_visit_day_time&&r.store._state.first_visit_day_time>(new Date).getTime()},t.getCurrentUrl=function(e){var r=t.getCurrentPath(),n="";return t.isObject(e)&&e.sensors_mp_encode_url_query&&(n=e.sensors_mp_encode_url_query),r?n?r+"?"+n:r:"未取到"},t.getPath=function(e){return"string"==typeof e?e.replace(/^\//,""):"取值异常"},t.getMethods=function(e){var t=[];for(var r in e)"function"!=typeof e[r]||n[r]||t.push(r);return t},t.isClick=function(e){return!!{tap:1,longpress:1,longtap:1}[e]},r.initialState={queue:[],isComplete:!1,systemIsComplete:!1,storeIsComplete:!1,checkIsComplete:function(){this.systemIsComplete&&this.storeIsComplete&&(this.isComplete=!0,this.queue.length>0&&(t.each(this.queue,(function(e){r[e[0]].apply(r,c.call(e[1]))})),this.queue=[]))}},t.getCustomUtmFromQuery=function(e,n,a,i){if(!t.isObject(e))return{};var s={};if(e.sa_utm)for(var o in e)"sa_utm"!==o?t.include(r.para.source_channel,o)&&(s[a+o]=e[o]):s[i+o]=e[o];else for(var o in e)-1===" utm_source utm_medium utm_campaign utm_content utm_term ".indexOf(" "+o+" ")?t.include(r.para.source_channel,o)&&(s[a+o]=e[o]):s[n+o]=e[o];return s},t.getObjFromQuery=function(e){var r=e.split("?"),n=[],a={};return r&&r[1]?(t.each(r[1].split("&"),(function(e){(n=e.split("="))[0]&&n[1]&&(a[n[0]]=n[1])})),a):{}},t.setStorageSync=function(e,t){var r=function(){wx.setStorageSync(e,t)};try{r()}catch(e){a.info("set Storage fail --",e);try{r()}catch(e){a.info("set Storage fail again --",e)}}},t.getStorageSync=function(e){var t="";try{t=wx.getStorageSync(e)}catch(r){try{t=wx.getStorageSync(e)}catch(e){a.info("getStorage fail")}}return t},t.getMPScene=function(e){return"number"==typeof e||"string"==typeof e&&""!==e?(e=String(e),f[e]||e):"未取到值"},t.setShareInfo=function(e,n){var a={},i={},s=r.store.getDistinctId(),o=r.store.getFirstId();if(!(e&&t.isObject(e.query)&&e.query.sampshare))return{};if(a=t.decodeURIComponent(e.query.sampshare),!t.isJSONString(a))return{};var c=(a=JSON.parse(a)).d,u=a.p,p=a.i,h=a.m;"string"==typeof p?(n.$share_distinct_id=p,g=p,i.$latest_share_distinct_id=p):n.$share_distinct_id="取值异常","number"==typeof c?!g||g!==s&&g!==o?!g||g===s&&g===o?n.$share_depth="-1":(n.$share_depth=c+1,m=c+1,i.$latest_share_depth=c+1):(n.$share_depth=c,m=c,i.$latest_share_depth=c):n.$share_depth="-1","string"==typeof u?(n.$share_url_path=u,i.$latest_share_url_path=u):n.$share_url_path="取值异常","string"==typeof h?(n.$share_method=h,i.$latest_share_method=h):n.$share_method="取值异常",t.setLatestShare(i)},t.getShareInfo=function(){return JSON.stringify({i:r.store.getDistinctId()||"取值异常",p:t.getCurrentPath(),d:m,m:y})},t.detectOptionQuery=function(e){if(!e||!t.isObject(e.query))return{};var n,a,i,s,o={};return o.query=t.extend({},e.query),"string"==typeof o.query.scene&&(n=o.query,a=["utm_source","utm_content","utm_medium","utm_campaign","utm_term","sa_utm"].concat(r.para.source_channel),i=new RegExp("("+a.join("|")+")%3D","i"),1===(s=Object.keys(n)).length&&"scene"===s[0]&&i.test(n.scene))&&(o.scene=o.query.scene,delete o.query.scene),e.query.q&&e.query.scancode_time&&"101"===String(e.scene).slice(0,3)&&(o.q=String(o.query.q),delete o.query.q,delete o.query.scancode_time),o},t.getMixedQuery=function(e){var r=t.detectOptionQuery(e),n=r.scene,a=r.q,i=r.query;for(var s in i)i[s]=t.decodeURIComponent(i[s]);return n&&(n=-1!==(n=t.decodeURIComponent(n)).indexOf("?")?"?"+n.replace(/\?/g,""):"?"+n,t.extend(i,t.getObjFromQuery(n))),a&&t.extend(i,t.getObjFromQuery(t.decodeURIComponent(a))),i},t.setUtm=function(e,r){var n={},a=t.getMixedQuery(e),i=t.getCustomUtmFromQuery(a,"$","_","$"),s=t.getCustomUtmFromQuery(a,"$latest_","_latest_","$latest_");return n.pre1=i,n.pre2=s,t.extend(r,i),n},t.setSfSource=function(e,n){!t.isEmptyObject(e.query)&&e.query._sfs&&(n.$sf_source=e.query._sfs,r.registerApp({$latest_sf_source:n.$sf_source}))},t.setPageSfSource=function(e){try{var r=getCurrentPages(),n=JSON.parse(JSON.stringify(r[r.length-1].options));for(var i in n)n[i]=t.decodeURIComponent(n[i]);!t.isEmptyObject(n)&&n._sfs&&(e.$sf_source=n._sfs)}catch(e){a.info(e)}},t.wxrequest=function(e){var n=wx.request(e);setTimeout((function(){t.isObject(n)&&t.isFunction(n.abort)&&n.abort()}),r.para.datasend_timeout)},t.getAppId=function(){var e;if(wx.getAccountInfoSync&&(e=wx.getAccountInfoSync()),t.isObject(e)&&t.isObject(e.miniProgram))return e.miniProgram.appId},t.validId=function(e){return"string"!=typeof e&&"number"!=typeof e||""===e?(a.info("输入 ID 类型错误"),!1):"number"!=typeof e||(e=String(e),/^\d+$/.test(e))?e:(a.info("输入 ID 类型错误"),!1)},t.info={currentProps:{},properties:{$lib:"MiniProgram",$lib_version:String("1.14.1")},getSystem:function(){var e=this.properties;wx.getNetworkType({success:function(t){e.$network_type=t.networkType},complete:function(){wx.getSystemInfo({success:function(t){var r,n;e.$manufacturer=t.brand,e.$model=t.model,e.$screen_width=Number(t.screenWidth),e.$screen_height=Number(t.screenHeight),e.$os="ios"===(n=(r=t.platform).toLowerCase())?"iOS":"android"===n?"Android":r,e.$os_version=t.system.indexOf(" ")>-1?t.system.split(" ")[1]:t.system},complete:function(){var n=(new Date).getTimezoneOffset(),a=t.getAppId();t.isNumber(n)&&(e.$timezone_offset=n),a&&(e.$app_id=a),r.initialState.systemIsComplete=!0,r.initialState.checkIsComplete()}})}})}},r._=t,t.eventEmitter=function(){this.sub=[]},t.eventEmitter.prototype={add:function(e){this.sub.push(e)},emit:function(e,t){this.sub.forEach((function(r){r.on(e,t)}))}},t.eventSub=function(e){r.events.add(this),this._events=[],this.handle=e,this.ready=!1},t.eventSub.prototype={on:function(e,r){if(this.ready){if(t.isFunction(this.handle))try{this.handle(e,r)}catch(e){a.info(e)}}else this._events.push({event:e,data:r})},isReady:function(){var e=this;e.ready=!0,e._events.forEach((function(r){if(t.isFunction(e.handle))try{e.handle(r.event,r.data)}catch(e){a.info(e)}}))}},r.eventSub=t.eventSub,r.events=new t.eventEmitter,r.usePlugin=function(e,t){"function"==typeof e.init&&e.init(r,t)},r.prepareData=function(e,n){if(v&&1154===v)return!1;var i={distinct_id:this.store.getDistinctId(),lib:{$lib:"MiniProgram",$lib_method:"code",$lib_version:String("1.14.1")},properties:{}};t.extend(i,this.store.getUnionId(),e),t.isObject(e.properties)&&!t.isEmptyObject(e.properties)&&t.extend(i.properties,e.properties),e.type&&"profile"===e.type.slice(0,7)||(r.para.batch_send&&(i._track_id=Number(String(Math.random()).slice(2,5)+String(Math.random()).slice(2,4)+String(Date.now()).slice(-4))),i.properties=t.extend({},t.info.properties,r.store.getProps(),t.info.currentProps,i.properties),i.properties.$is_first_day=t.getIsFirstDay()),i.properties.$time&&t.isDate(i.properties.$time)?(i.time=1*i.properties.$time,delete i.properties.$time):r.para.use_client_time&&(i.time=1*new Date),t.parseSuperProperties(i.properties),t.searchObjDate(i),t.searchObjString(i),a.info(i),r.events.emit("send",i),r.sendStrategy.send(i)},r.store={storageInfo:null,getUUID:function(){return Date.now()+"-"+Math.floor(1e7*Math.random())+"-"+Math.random().toString(16).replace(".","")+"-"+String(31242*Math.random()).replace(".","").slice(0,8)},getStorage:function(){return this.storageInfo||(this.storageInfo=r._.getStorageSync("sensorsdata2015_wechat")||""),this.storageInfo},_state:{},mem:{mdata:[],getLength:function(){return this.mdata.length},add:function(e){this.mdata.push(e)},clear:function(e){this.mdata.splice(0,e)}},toState:function(e){var r=null;t.isJSONString(e)?(r=JSON.parse(e)).distinct_id?this._state=r:this.set("distinct_id",this.getUUID()):t.isObject(e)&&(r=e).distinct_id?this._state=r:this.set("distinct_id",this.getUUID())},getFirstId:function(){return this._state._first_id||this._state.first_id},getDistinctId:function(){return this._state._distinct_id||this._state.distinct_id},getUnionId:function(){var e={},t=this._state._first_id||this._state.first_id,r=this._state._distinct_id||this._state.distinct_id;return t&&r?(e.login_id=r,e.anonymous_id=t):e.anonymous_id=r,e},getProps:function(){return this._state.props||{}},setProps:function(e,r){var n=this._state.props||{};r?this.set("props",e):(t.extend(n,e),this.set("props",n))},set:function(t,n){var a={};for(var i in"string"==typeof t?a[t]=n:"object"==e(t)&&(a=t),this._state=this._state||{},a)this._state[i]=a[i],"first_id"===i?delete this._state._first_id:"distinct_id"===i&&(delete this._state._distinct_id,r.events.emit("changeDistinctId"));this.save()},change:function(e,t){this._state["_"+e]=t},save:function(){var e=JSON.parse(JSON.stringify(this._state));delete e._first_id,delete e._distinct_id,r._.setStorageSync("sensorsdata2015_wechat",e)},init:function(){var e=this.getStorage();if(e)this.toState(e);else{S=!0;var t=new Date,n=t.getTime();t.setHours(23),t.setMinutes(59),t.setSeconds(60),r.setOnceProfile({$first_visit_time:new Date}),this.set({distinct_id:this.getUUID(),first_visit_time:n,first_visit_day_time:t.getTime()})}}},r.setProfile=function(e,t){r.prepareData({type:"profile_set",properties:e},t)},r.setOnceProfile=function(e,t){r.prepareData({type:"profile_set_once",properties:e},t)},r.appendProfile=function(e,n){if(!t.isObject(e))return!1;t.each(e,(function(r,n){t.isString(r)?e[n]=[r]:t.isArray(r)||(delete e[n],a.info("appendProfile属性的值必须是字符串或者数组"))})),r.prepareData({type:"profile_append",properties:e},n)},r.incrementProfile=function(e,n){if(!t.isObject(e))return!1;var a=e;t.isString(e)&&((e={})[a]=1),r.prepareData({type:"profile_increment",properties:e},n)},r.track=function(e,t,r){this.prepareData({type:"track",event:e,properties:t},r)},r.identify=function(e,n){if(e=t.validId(e)){var a=r.store.getFirstId();!0===n?a?r.store.set("first_id",e):r.store.set("distinct_id",e):a?r.store.change("first_id",e):r.store.change("distinct_id",e)}},r.trackSignup=function(e,t,n,a){var i=r.store.getFirstId()||r.store.getDistinctId();r.store.set("distinct_id",e),r.prepareData({original_id:i,distinct_id:e,type:"track_signup",event:t,properties:n},a)},r.registerApp=function(e){t.isObject(e)&&!t.isEmptyObject(e)&&(t.info.currentProps=t.extend(t.info.currentProps,e))},r.register=function(e){t.isObject(e)&&!t.isEmptyObject(e)&&r.store.setProps(e)},r.clearAllRegister=function(){r.store.setProps({},!0)},r.clearAllProps=function(e){var n=r.store.getProps(),a={};t.isArray(e)&&(t.each(n,(function(r,n){t.include(e,n)||(a[n]=r)})),r.store.setProps(a,!0))},r.clearAppRegister=function(e){t.isArray(e)&&t.each(t.info.currentProps,(function(r,n){t.include(e,n)&&delete t.info.currentProps[n]}))},t.setLatestChannel=function(e){t.isEmptyObject(e)||(function(e,t){var r=!1;for(var n in t)e[t[n]]&&(r=!0);return r}(e,h)&&(r.clearAppRegister(h),r.clearAllProps(h)),r.para.is_persistent_save.utm?r.register(e):r.registerApp(e))},t.setLatestShare=function(e){(e.$latest_share_depth||e.$latest_share_distinct_id||e.$latest_share_url_path||e.$latest_share_method)&&(r.clearAppRegister(d),r.clearAllProps(d),r.para.is_persistent_save.share?r.register(e):r.registerApp(e))},r.login=function(e){if(e=t.validId(e)){var n=r.store.getFirstId(),a=r.store.getDistinctId();e!==a&&(n||r.store.set("first_id",a),r.trackSignup(e,"$SignUp"))}},r.getAnonymousID=function(){if(!t.isEmptyObject(r.store._state))return r.store._state._first_id||r.store._state.first_id||r.store._state._distinct_id||r.store._state.distinct_id;a.info("请先初始化SDK")},r.logout=function(e){var t=r.store.getFirstId();t?(r.store.set("first_id",""),!0===e?r.store.set("distinct_id",r.store.getUUID()):r.store.set("distinct_id",t)):a.info("没有first_id，logout失败")},r.getLocation=function(){wx.getSetting({success:function(e){if(!e.authSetting["scope.userLocation"])return!1;wx.getLocation({type:r.para.preset_properties.location.type,success:function(e){r.registerApp({$latitude:e.latitude*Math.pow(10,6),$longitude:e.longitude*Math.pow(10,6)})},fail:function(e){console.log("获取位置失败",e)}})}})},r.openid={getRequest:function(e){wx.login({success:function(n){n.code&&r.para.appid&&r.para.openid_url?t.wxrequest({url:r.para.openid_url+"&code="+n.code+"&appid="+r.para.appid,method:"GET",complete:function(r){t.isObject(r)&&t.isObject(r.data)&&r.data.openid?e(r.data.openid):e()}}):e()}})},getWXStorage:function(){var e=r.store.getStorage();if(e&&t.isObject(e))return e.openid},getOpenid:function(e){if(!r.para.appid)return e(),!1;var t=this.getWXStorage();t?e(t):this.getRequest(e)}},r.initial=function(){this._.info.getSystem(),this.store.init()},r.init=function(e){if(!0===this.hasInit)return!1;this.hasInit=!0,r.setPara(e),r.para.batch_send&&(wx.getStorage({key:"sensors_mp_prepare_data",complete:function(e){var n=e.data&&t.isArray(e.data)?e.data:[];r.store.mem.mdata=n.concat(r.store.mem.mdata),r.sendStrategy.syncStorage=!0}}),r.sendStrategy.batchInterval()),r.initialState.storeIsComplete=!0,r.initialState.checkIsComplete()},r.getPresetProperties=function(){if(t.info&&t.info.properties&&t.info.properties.$lib){var e={};t.each(t.info.currentProps,(function(t,r){0===r.indexOf("$")&&(e[r]=t)}));var n=t.extend(e,{$url_path:t.getCurrentPath(),$is_first_day:t.getIsFirstDay()},t.info.properties,r.store.getProps());return delete n.$lib,n}return{}},t.autoExeQueue=function(){return{items:[],enqueue:function(e){this.items.push(e),this.start()},dequeue:function(){return this.items.shift()},getCurrentItem:function(){return this.items[0]},isRun:!1,start:function(){this.items.length>0&&!this.isRun&&(this.isRun=!0,this.getCurrentItem().start())},close:function(){this.dequeue(),this.isRun=!1,this.start()}}},r.requestQueue=function(e){this.url=e.url},r.requestQueue.prototype.isEnd=function(){this.received||(this.received=!0,this.close())},r.requestQueue.prototype.start=function(){var e=this;setTimeout((function(){e.isEnd()}),r.para.send_timeout),t.wxrequest({url:this.url,method:"GET",complete:function(){e.isEnd()}})},r.dataQueue=t.autoExeQueue(),r.sendStrategy={dataHasSend:!0,dataHasChange:!1,syncStorage:!1,failTime:0,onAppHide:function(){r.para.batch_send&&this.batchSend()},send:function(e){if(!r.para.server_url)return!1;if(r.para.batch_send){if(this.dataHasChange=!0,r.store.mem.getLength()>=300)return a.info("数据量存储过大，有异常"),!1;r.store.mem.add(e),r.store.mem.getLength()>=r.para.batch_send.max_length&&this.batchSend()}else this.queueSend(e)},queueSend:function(e){e=JSON.stringify(e),e=-1!==r.para.server_url.indexOf("?")?r.para.server_url+"&data="+encodeURIComponent(t.base64Encode(e)):r.para.server_url+"?data="+encodeURIComponent(t.base64Encode(e));var n=new r.requestQueue({url:e});n.close=function(){r.dataQueue.close()},r.dataQueue.enqueue(n)},wxrequest:function(e){if(t.isArray(e.data)&&e.data.length>0){var n=Date.now();e.data.forEach((function(e){e._flush_time=n})),e.data=JSON.stringify(e.data),t.wxrequest({url:r.para.server_url,method:"POST",dataType:"text",data:"data_list="+encodeURIComponent(t.base64Encode(e.data)),success:function(){e.success(e.len)},fail:function(){e.fail()}})}else e.success(e.len)},batchSend:function(){if(this.dataHasSend){var e=r.store.mem.mdata,t=e.length;t>0&&(this.dataHasSend=!1,this.wxrequest({data:e,len:t,success:this.batchRemove.bind(this),fail:this.sendFail.bind(this)}))}},sendFail:function(){this.dataHasSend=!0,this.failTime++},batchRemove:function(e){r.store.mem.clear(e),this.dataHasSend=!0,this.dataHasChange=!0,this.batchWrite(),this.failTime=0},is_first_batch_write:!0,batchWrite:function(){var e=this;this.dataHasChange&&(this.is_first_batch_write&&(this.is_first_batch_write=!1,setTimeout((function(){e.batchSend()}),1e3)),this.dataHasChange=!1,this.syncStorage&&r._.setStorageSync("sensors_mp_prepare_data",r.store.mem.mdata))},batchInterval:function(){var e=this;!function t(){setTimeout((function(){e.batchWrite(),t()}),500)}(),function t(){setTimeout((function(){e.batchSend(),t()}),r.para.batch_send.send_timeout*Math.pow(2,e.failTime))}()}},r.setOpenid=function(e,t){r.store.set("openid",e),t?r.store.set("distinct_id",e):r.identify(e,!0)},r.initWithOpenid=function(e,n){(e=e||{}).appid&&(r.para.appid=e.appid),r.openid.getOpenid((function(a){a&&r.setOpenid(a,e.isCoverLogin),n&&t.isFunction(n)&&n(a),r.init(e)}))},t.each(["setProfile","setOnceProfile","track","quick","incrementProfile","appendProfile","login","logout"],(function(e){var t=r[e];r[e]=function(){r.initialState.isComplete?t.apply(r,arguments):r.initialState.queue.push([e,arguments])}})),t.setQuery=function(e,r){if(e&&t.isObject(e)&&!t.isEmptyObject(e)){var n=[];return t.each(e,(function(e,a){"q"===a&&t.isString(e)&&0===e.indexOf("http")||"scene"===a||(r?n.push(a+"="+e):n.push(a+"="+t.decodeURIComponent(e)))})),n.join("&")}return""},t.getUtmFromPage=function(){var e={};try{var r=getCurrentPages(),n=JSON.parse(JSON.stringify(r[r.length-1].options));for(var i in n)n[i]=t.decodeURIComponent(n[i]);e=t.getCustomUtmFromQuery(n,"$","_","$")}catch(e){a.info(e)}return e},r.autoTrackCustom={trackCustom:function(e,n,a){var i=r.para.autoTrack[e],s="";r.para.autoTrack&&i&&("function"==typeof i?(s=i(),t.isObject(s)&&t.extend(n,s)):t.isObject(i)&&(t.extend(n,i),r.para.autoTrack[e]=!0),r.track(a,n))},appLaunch:function(n,a){"object"!=e(this)||this.trackCustom||(this[r.para.name]=r);var i={};n&&n.scene?(v=n.scene,i.$scene=t.getMPScene(n.scene)):i.$scene="未取到值",n&&n.scene&&1010===n.scene&&n.query&&n.query.sampshare&&delete n.query.sampshare,n&&n.path&&(i.$url_path=t.getPath(n.path)),t.setShareInfo(n,i);var s=t.setUtm(n,i);S?(i.$is_first_time=!0,t.isEmptyObject(s.pre1)||r.setOnceProfile(s.pre1)):i.$is_first_time=!1,t.setLatestChannel(s.pre2),t.setSfSource(n,i),r.registerApp({$latest_scene:i.$scene}),i.$url_query=t.setQuery(n.query),a?(i=t.extend(i,a),r.track("$MPLaunch",i)):r.para.autoTrack&&r.para.autoTrack.appLaunch&&r.autoTrackCustom.trackCustom("appLaunch",i,"$MPLaunch")},appShow:function(e,n){var a={};_=(new Date).getTime(),e&&e.scene?(v=e.scene,a.$scene=t.getMPScene(e.scene)):a.$scene="未取到值",e&&e.scene&&1010===e.scene&&e.query&&e.query.sampshare&&delete e.query.sampshare,e&&e.path&&(a.$url_path=t.getPath(e.path)),!t.isObject(r.para.preset_properties.location)||"wgs84"!==r.para.preset_properties.location.type&&"gcj02"!==r.para.preset_properties.location.type||r.getLocation(),t.setShareInfo(e,a);var i=t.setUtm(e,a);t.setLatestChannel(i.pre2),t.setSfSource(e,a),r.registerApp({$latest_scene:a.$scene}),a.$url_query=t.setQuery(e.query),n?(a=t.extend(a,n),r.track("$MPShow",a)):r.para.autoTrack&&r.para.autoTrack.appShow&&r.autoTrackCustom.trackCustom("appShow",a,"$MPShow")},appHide:function(e){var n=(new Date).getTime(),a={};a.$url_path=t.getCurrentPath(),_&&n-_>0&&(n-_)/36e5<24&&(a.event_duration=(n-_)/1e3),e?(a=t.extend(a,e),r.track("$MPHide",a)):r.para.autoTrack&&r.para.autoTrack.appHide&&r.autoTrackCustom.trackCustom("appHide",a,"$MPHide"),r.sendStrategy.onAppHide()},pageLoad:function(e){v&&1010===v&&e&&e.sampshare&&delete e.sampshare,e&&t.isObject(e)&&(this.sensors_mp_url_query=t.setQuery(e),this.sensors_mp_encode_url_query=t.setQuery(e,!0))},pageShow:function(){var e={},n=t.getCurrentPath();e.$referrer=l,e.$url_path=n,r.status.last_referrer=l,e.$url_query=this.sensors_mp_url_query?this.sensors_mp_url_query:"",e=t.extend(e,t.getUtmFromPage()),t.setPageSfSource(e),r.para.onshow?r.para.onshow(r,n,this):r.para.autoTrack&&r.para.autoTrack.pageShow&&r.autoTrackCustom.trackCustom("pageShow",e,"$MPViewScreen"),l=n,r.status.referrer=n},pageShare:function(n,a){var i=n.onShareAppMessage;n.onShareAppMessage=function(){y="转发消息卡片";var n=i.apply(this,arguments);return r.para.autoTrack&&r.para.autoTrack.pageShare&&r.autoTrackCustom.trackCustom("pageShare",{$url_path:t.getCurrentPath(),$share_depth:m,$share_method:y},"$MPShare"),r.para.allow_amend_share_path&&("object"!=e(n)&&((n={}).path=t.getCurrentUrl(this)),"object"!=e(n)||void 0!==n.path&&""!==n.path||(n.path=t.getCurrentUrl(this)),"object"==e(n)&&"string"==typeof n.path&&(-1===n.path.indexOf("?")?n.path=n.path+"?":"&"!==n.path.slice(-1)&&(n.path=n.path+"&")),n.path=n.path+"sampshare="+encodeURIComponent(t.getShareInfo())),n}},pageShareTimeline:function(n){var a=n.onShareTimeline;n.onShareTimeline=function(){y="朋友圈分享";var n=a.apply(this,arguments);return r.para.autoTrack&&r.para.autoTrack.pageShare&&r.autoTrackCustom.trackCustom("pageShare",{$url_path:t.getCurrentPath(),$share_depth:m,$share_method:y},"$MPShare"),r.para.allow_amend_share_path&&("object"!=e(n)&&(n={}),"object"==e(n)&&void 0===n.query&&(n.query=""),"object"==e(n)&&"string"==typeof n.query&&""!==n.query&&"&"!==n.query.slice(-1)&&(n.query=n.query+"&"),n.query=n.query+"sampshare="+encodeURIComponent(t.getShareInfo())),n}},pageAddFavorites:function(){var e={};e.$url_path=t.getCurrentPath(),r.para.autoTrack&&r.para.autoTrack.mpFavorite&&r.autoTrackCustom.trackCustom("mpFavorite",e,"$MPAddFavorites")}},r.quick=function(){var e=arguments[0],n=arguments[1],i=arguments[2],s=t.isObject(i)?i:{};if("getAnonymousID"===e){if(!t.isEmptyObject(r.store._state))return r.store._state._first_id||r.store._state.first_id||r.store._state._distinct_id||r.store._state.distinct_id;a.info("请先初始化SDK")}else"appLaunch"===e||"appShow"===e?n?r.autoTrackCustom[e](n,s):a.info("App的launch和show，在sensors.quick第二个参数必须传入App的options参数"):"appHide"===e&&(s=t.isObject(n)?n:{},r.autoTrackCustom[e](s))};var O=App;App=function(e){e[r.para.name]=r,O.apply(this,arguments)},wx.onAppShow((function(e){if(!r.para.launched){var t=wx.getLaunchOptionsSync()||{};r.autoTrackCustom.appLaunch(t),r.para.launched=!0}r.autoTrackCustom.appShow(e)})),wx.onAppHide((function(){r.autoTrackCustom.appHide()}));var C=Page;Page=function(e){var n=r.para.autoTrack&&r.para.autoTrack.mpClick&&t.getMethods(e);if(n)for(var a=0,i=n.length;a<i;a++)$(e,n[a]);b(e,"onLoad","pageLoad"),b(e,"onShow","pageShow"),b(e,"onAddToFavorites","pageAddFavorites"),"function"==typeof e.onShareAppMessage&&r.autoTrackCustom.pageShare(e),"function"==typeof e.onShareTimeline&&r.autoTrackCustom.pageShareTimeline(e),C.apply(this,arguments)};var k=Component;Component=function(e){try{var n=r.para.autoTrack&&r.para.autoTrack.mpClick&&t.getMethods(e.methods);if(n)for(var a=0,i=n.length;a<i;a++)$(e.methods,n[a]);b(e.methods,"onLoad","pageLoad"),b(e.methods,"onShow","pageShow"),b(e.methods,"onAddToFavorites","pageAddFavorites"),"function"==typeof e.methods.onShareAppMessage&&r.autoTrackCustom.pageShare(e.methods),"function"==typeof e.methods.onShareTimeline&&r.autoTrackCustom.pageShareTimeline(e.methods),k.apply(this,arguments)}catch(e){k.apply(this,arguments)}},r.initial(),module.exports=r;
},{isPage:false,isComponent:false,currentFile:'9B422ED7829A079CFD2446D0F82D7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/Arrayincludes.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0==n)return!1;for(var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}});
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/Arrayincludes.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/Objectentries.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Object.entries||(Object.entries=function(e){for(var r=Object.keys(e),t=r.length,n=new Array(t);t--;)n[t]=[r[t],e[r[t]]];return n});
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/Objectentries.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayLikeToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayLikeToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayWithHoles.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _arrayWithHoles(r){if(Array.isArray(r))return r}module.exports=_arrayWithHoles;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayWithHoles.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayWithoutHoles.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayLikeToArray=require("./arrayLikeToArray");function _arrayWithoutHoles(r){if(Array.isArray(r))return arrayLikeToArray(r)}module.exports=_arrayWithoutHoles;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayWithoutHoles.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/asyncToGenerator.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function asyncGeneratorStep(n,e,r,t,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void r(n)}i.done?e(u):Promise.resolve(u).then(t,o)}function _asyncToGenerator(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var a=n.apply(e,r);function c(n){asyncGeneratorStep(a,t,o,c,i,"next",n)}function i(n){asyncGeneratorStep(a,t,o,c,i,"throw",n)}c(void 0)}))}}module.exports=_asyncToGenerator;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/asyncToGenerator.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/classCallCheck.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _classCallCheck(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}module.exports=_classCallCheck;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/classCallCheck.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/createClass.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}module.exports=_createClass;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/createClass.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/createForOfIteratorHelper.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var unsupportedIterableToArray=require("./unsupportedIterableToArray");function _createForOfIteratorHelper(r,e){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return u=r.done,r},e:function(r){i=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}module.exports=_createForOfIteratorHelper;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/createForOfIteratorHelper.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/defineProperty.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=_defineProperty;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/defineProperty.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/interopRequireDefault.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}module.exports=_interopRequireDefault;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/interopRequireDefault.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/iterableToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _iterableToArray(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}module.exports=_iterableToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/iterableToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/iterableToArrayLimit.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _iterableToArrayLimit(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],i=!0,o=!1,l=void 0;try{for(var n,a=r[Symbol.iterator]();!(i=(n=a.next()).done)&&(e.push(n.value),!t||e.length!==t);i=!0);}catch(r){o=!0,l=r}finally{try{i||null==a.return||a.return()}finally{if(o)throw l}}return e}}module.exports=_iterableToArrayLimit;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/iterableToArrayLimit.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/nonIterableRest.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableRest;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/nonIterableRest.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/nonIterableSpread.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableSpread;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/nonIterableSpread.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/objectSpread2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var defineProperty=require("./defineProperty");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports=_objectSpread2;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/objectSpread2.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/slicedToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayWithHoles=require("./arrayWithHoles"),iterableToArrayLimit=require("./iterableToArrayLimit"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableRest=require("./nonIterableRest");function _slicedToArray(r,e){return arrayWithHoles(r)||iterableToArrayLimit(r,e)||unsupportedIterableToArray(r,e)||nonIterableRest()}module.exports=_slicedToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/slicedToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/toConsumableArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayWithoutHoles=require("./arrayWithoutHoles"),iterableToArray=require("./iterableToArray"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableSpread=require("./nonIterableSpread");function _toConsumableArray(r){return arrayWithoutHoles(r)||iterableToArray(r)||unsupportedIterableToArray(r)||nonIterableSpread()}module.exports=_toConsumableArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/toConsumableArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/typeof.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _typeof(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=_typeof=function(o){return typeof o}:module.exports=_typeof=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/typeof.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/unsupportedIterableToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/unsupportedIterableToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/regenerator.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
!function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof module,h=t.regeneratorRuntime;if(h)u&&(module.exports=h);else{(h=t.regeneratorRuntime=u?module.exports:{}).wrap=w;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={},v={};v[i]=function(){return this};var d=Object.getPrototypeOf,g=d&&d(d(P([])));g&&g!==e&&n.call(g,i)&&(v=g);var m=b.prototype=x.prototype=Object.create(v);E.prototype=m.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},h.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[a]=function(){return this},h.AsyncIterator=j,h.async=function(t,r,e,n){var o=new j(w(t,r,e,n));return h.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(m),m[c]="Generator",m[i]=function(){return this},m.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},h.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=L(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function L(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function x(){}function E(){}function b(){}function _(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function j(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=L(t[e],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")());
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/regenerator.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("A9EAB7C2829A079CCF8CDFC58A3C7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var o,e=require("BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,i="".concat(e,"/cooperation/wap/get_session_id/"),s="".concat(e,"/cooperation/wap/cellphone_num/login/"),n="".concat(e,"/cooperation/wap/is_user_login/"),r=require("ACF33105829A079CCA9559029C0D7B70.js");function t(){}function a(e,n,t,a,c){var l,d=getApp(),g=d.globalData.loginSource,u=(l=wx.getStorageSync("authorizationPointData"))&&l.source_type?l.source_type:"";d.globalData.loginSource=void 0,r({url:o?s:i,method:"POST",data:o?{app:"weixin_mini",code:c,encryptedData:t,iv:a}:{from_wx_mini:1,source:g,code:c,encryptedData:t,iv:a,first_vendor:u},success:function(i){console.log("res",i);var s=i.data||{},r=s.sessionid,t=s.user_name||"",a=s.is_first,c=s.user_id||"",l="sessionid=".concat(r);console.log("sessionid",r),r?(wx.setStorageSync("sessionid",l),wx.setStorageSync("sessionUserId",c),wx.setStorageSync("userName",t),d.globalData.sessionid=l,c&&d.sensors.login(c),o||(wx.setStorageSync("activity_token",s.activity_token),d.globalData.isFirstAuthorized=a),d.globalData.appIsLogin=Promise.resolve(),d.globalData.launchDoPoint(),e({errCode:0,errMsg:"login:ok",sessionid:r})):(wx.showToast({title:s.error_msg||"登录失败",icon:"none"}),n({errCode:3,errMsg:s.error_msg||"请求失败"}))},fail:function(){wx.showToast({title:"网络问题，请稍后重试!",icon:"loading"}),n({errCode:3,errMsg:"网络问题"})}})}function c(o,e,i,s){wx.login({success:function(n){var r=n.code;r?i&&s?a(o,e,i,s,r):e({errCode:2,errMsg:"encryptedData或iv不存在"}):e({errCode:1,errMsg:"code获取失败"})},fail:function(){e({errCode:1,errMsg:"code获取失败"})}})}function l(e,i,s,t,a){var l=wx.getStorageSync("sessionid");l?wx.checkSession({success:function(){r({url:n,success:function(n){var r=n.data||{};o?r.login?r.use_cellphone?e({errCode:0,errMsg:"login:ok",sessionid:l}):i():s?c(e,i,t,a):i():r.login?e({errCode:0,errMsg:"login:ok",sessionid:l}):s?c(e,i,t,a):i()},fail:function(){s?c(e,i,t,a):i()}})},fail:function(){s?c(e,i,t,a):i()}}):s?c(e,i,t,a):i()}module.exports={appLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.success,s=void 0===i?t:i,n=e.fail,r=void 0===n?t:n,a=e.encryptedData,c=void 0===a?null:a,d=e.iv,g=void 0===d?null:d,u=e.isNumberLogin,v=void 0!==u&&u;o=v,l(s,r,!0,c,g)},appIsLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.success,s=void 0===i?t:i,n=e.fail,r=void 0===n?t:n,a=e.isNumberLogin,c=void 0!==a&&a;o=c,l(s,r,!1)}};
},{isPage:false,isComponent:false,currentFile:'A9EAB7C2829A079CCF8CDFC58A3C7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("ACF33105829A079CCA9559029C0D7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/objectSpread2.js"),o=require("BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,t=/^http(s)?:\/\//;module.exports=function(r){var i=r.url,s=void 0===i?"":i,a=r.header,d=void 0===a?{}:a,c=r.method,n=void 0===c?"GET":c,u=r.data,p=void 0===u?{}:u,l=r.dataType,v=void 0===l?"json":l,f=r.responseType,m=void 0===f?"text":f,h=r.success,y=void 0===h?function(){}:h,w=r.fail,x=void 0===w?function(){}:w,T=r.complete,b=void 0===T?function(){}:T,q={"content-type":"application/x-www-form-urlencoded",cookie:wx.getStorageSync("sessionid")};return t.test(s)||(s="".concat(o).concat(s)),d=e(e({},q),d),wx.request({url:s,data:p,header:d,method:n,dataType:v,responseType:m,success:y,fail:x,complete:b})};
},{isPage:false,isComponent:false,currentFile:'ACF33105829A079CCA9559029C0D7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("BC983DD1829A079CDAFE55D6E84D7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=wx.getStorageSync("BASE_URL_KEY")||"online",t={biz:"https://biztest.chunyutianxia.com",dev:"https://devtest.chunyutianxia.com",online:"https://www.chunyuyisheng.com",stage:"https://stage.chunyuyisheng.com"},n=wx.getAccountInfoSync().miniProgram.envVersion;"develop"===n||"trial"===n||(e="online"),wx.removeStorageSync("BASE_URL_KEY"),console.log("当前环境是".concat(t[e])),module.exports={baseUrl:t[e],currentUrlKey:e};
},{isPage:false,isComponent:false,currentFile:'BC983DD1829A079CDAFE55D6E84D7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("BD3DD342829A079CDB5BBB45D2EB7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={apply_prescription:"apply_prescription",doctor_service_inquiry:"doctor_service_inquiry",personal_doctor:"personal_doctor",register_apply:"register_apply",search_doctor:"search_doctor",assess:"assess"};
},{isPage:false,isComponent:false,currentFile:'BD3DD342829A079CDB5BBB45D2EB7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("C81F1783829A079CAE797F84E1DB7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("BC983DD1829A079CDAFE55D6E84D7B70.js"),n=getApp(),r=require("92BC1755829A079CF4DA7F52C55D7B70.js").param,i="".concat(e.baseUrl,"/weixin/pay/do_confirm/"),o="".concat(e.baseUrl,"/weixin/pay/sign/status/"),a="".concat(e.baseUrl,"/weixin/pay/get_pure_sign_pay_order_params/"),t="".concat(e.baseUrl,"/weixin/pay/get_weixin_mini_pay_params/"),c="".concat(e.baseUrl,"/vip_doctor/get_conversation_id/"),s="".concat(e.baseUrl,"/api/crm/expert/conversation/id/"),u="".concat(e.baseUrl,"/weixin/do_pay/"),l="".concat(e.baseUrl,"/weixin/pay/create_order/"),d="".concat(e.baseUrl,"/weixin/pay/?version=10.3.2"),_="".concat(e.baseUrl,"/qa_operation/quick_ask/get_upgrade_list/"),p="".concat(e.baseUrl,"/api/v7/new_user/cancel_doc_dis_coupon/"),f="".concat(e.baseUrl,"/api/v5/order/cancel/"),g=function(e,i){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="POST"===o?r(i):i;return new Promise((function(r,i){wx.request({url:e,header:{"Content-Type":"application/json",Cookie:n.globalData.sessionid},method:o,data:a,success:function(e){r(e.data)},fail:function(n){console.log("".concat(e," error::"),n),i(n)}})}))},m=function(e,r){return new Promise((function(i,o){wx.request({url:e,header:{Cookie:n.globalData.sessionid,"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:r,success:function(e){i(e.data)},fail:function(n){console.log("".concat(e," error::"),n),o(n)}})}))},w=function(e,n){wx.switchTab({url:e,complete:function(){n&&setTimeout((function(){wx.navigateTo({url:n})}),1e3)}})};module.exports={getResult:g,getPayResult:function(e){return g(i,{pay_order_id:e})},isPayResultValid:function(e){return-2!=e.error},getPeriodSignStatus:function(e){return g(o,{order_id:e})},isPeriodSignStatusValid:function(e){return 0!==e.error_code||"TEMP"!==e.status},getWxPeriodParams:function(e){return g(a,{from_wx_mini:1,order_id:e,trade_account:"weixin_mini"})},getWxPayParams:function(e){return g(t,{from_wx_mini:1,order_id:e})},getConversationId:function(e,n){return g(c,{service_id:e,service_type:n})},balancePay:function(e,n){return m(u,{from_wx_mini:1,pay_order_id:e,pay_method:n||"balance"})},createOrder:function(e){return m(l,e)},getPayInfo:function(e){return m(d,e)},getUpgradeInfo:function(e){return m(_,e)},cancelDocDisCoupon:function(e){return g(p,{},"POST")},revertCoupon:function(e){return m(f,e)},getConversationIdNew:function(e){return g(s,{service_id:e})},switchTabToTarget:w,switchToAllService:function(){wx.switchTab({url:"/pages/all_service/index"})},goQaFromAllService:function(e){var n="/pages/qa_im/index?problem_id=".concat(e);w("/pages/all_service/index",n)},goH5WebviewFromAllService:function(e){var n="/pages/h5_webview/index?url=".concat(e);w("/pages/all_service/index",n)},goInqueryFromAllService:function(e){var n="/pages/inquery/inquery?problem_id=".concat(e,"&from_page=doc_mainpage");w("/pages/all_service/index",n)}};
},{isPage:false,isComponent:false,currentFile:'C81F1783829A079CAE797F84E1DB7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("C871ACB1829A079CAE17C4B61D2C7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("@babel/runtime/helpers/typeof.js"),e=require("@babel/runtime/helpers/classCallCheck.js"),n=require("@babel/runtime/helpers/createClass.js"),i=function(){function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,i),Object.assign(this,{data:{},rules:t,messages:n}),this.__init()}return n(i,[{key:"__init",value:function(){this.__initMethods(),this.__initDefaults(),this.__initData()}},{key:"__initData",value:function(){this.form={},this.errorList=[]}},{key:"__initDefaults",value:function(){this.defaults={messages:{required:"这是必填字段。",email:"请输入有效的电子邮件地址。",tel:"请输入11位的手机号码。",url:"请输入有效的网址。",date:"请输入有效的日期。",dateISO:"请输入有效的日期（ISO），例如：2009-06-23，1998/01/22。",number:"请输入有效的数字。",digits:"只能输入数字。",idcard:"请输入18位的有效身份证。",equalTo:this.formatTpl("输入值必须和 {0} 相同。"),contains:this.formatTpl("输入值必须包含 {0}。"),minlength:this.formatTpl("最少要输入 {0} 个字符。"),maxlength:this.formatTpl("最多可以输入 {0} 个字符。"),rangelength:this.formatTpl("请输入长度在 {0} 到 {1} 之间的字符。"),min:this.formatTpl("请输入不小于 {0} 的数值。"),max:this.formatTpl("请输入不大于 {0} 的数值。"),range:this.formatTpl("请输入范围在 {0} 到 {1} 之间的数值。")}}}},{key:"__initMethods",value:function(){var t=this;t.methods={required:function(e,n){if(!t.depend(n))return"dependency-mismatch";if("number"==typeof e)e=e.toString();else if("boolean"==typeof e)return!0;return e.length>0},email:function(e){return t.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},tel:function(e){return t.optional(e)||/^1[34578]\d{9}$/.test(e)},url:function(e){return t.optional(e)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)},date:function(e){return t.optional(e)||!/Invalid|NaN/.test(new Date(e).toString())},dateISO:function(e){return t.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)},number:function(e){return t.optional(e)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)},digits:function(e){return t.optional(e)||/^\d+$/.test(e)},idcard:function(e){return t.optional(e)||/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)},equalTo:function(e,n){return t.optional(e)||e===t.data[n]},contains:function(e,n){return t.optional(e)||e.indexOf(n)>=0},minlength:function(e,n){return t.optional(e)||e.length>=n},maxlength:function(e,n){return t.optional(e)||e.length<=n},rangelength:function(e,n){return t.optional(e)||e.length>=n[0]&&e.length<=n[1]},min:function(e,n){return t.optional(e)||e>=n},max:function(e,n){return t.optional(e)||e<=n},range:function(e,n){return t.optional(e)||e>=n[0]&&e<=n[1]}}}},{key:"addMethod",value:function(t,e,n){this.methods[t]=e,this.defaults.messages[t]=void 0!==n?n:this.defaults.messages[t]}},{key:"isValidMethod",value:function(t){var e=[];for(var n in this.methods)n&&"function"==typeof this.methods[n]&&e.push(n);return-1!==e.indexOf(t)}},{key:"formatTpl",value:function(t,e){var n=this;return 1===arguments.length?function(){var e=Array.from(arguments);return e.unshift(t),n.formatTpl.apply(this,e)}:(void 0===e||(arguments.length>2&&e.constructor!==Array&&(e=Array.from(arguments).slice(1)),e.constructor!==Array&&(e=[e]),e.forEach((function(e,n){t=t.replace(new RegExp("\\{"+n+"\\}","g"),(function(){return e}))}))),t)}},{key:"depend",value:function(e){switch(t(e)){case"boolean":e=e;break;case"string":e=!!e.length;break;case"function":e=e();default:e=!0}return e}},{key:"optional",value:function(t){return!this.methods.required(t)&&"dependency-mismatch"}},{key:"customMessage",value:function(e,n){var i=this.messages[e],a="object"===t(i);if(i&&a)return i[n.method]}},{key:"defaultMessage",value:function(e,n){var i=this.customMessage(e,n)||this.defaults.messages[n.method],a=t(i);return"undefined"===a?i="Warning: No message defined for ".concat(n.method,"."):"function"===a&&(i=i.call(this,n.parameters)),i}},{key:"formatTplAndAdd",value:function(t,e,n){var i=this.defaultMessage(t,e);this.errorList.push({param:t,msg:i,value:n})}},{key:"checkParam",value:function(t,e,n){this.data=n;var i=null!==n[t]&&void 0!==n[t]?n[t]:"";for(var a in e)if(this.isValidMethod(a)){var r={method:a,parameters:e[a]},s=this.methods[a](i,r.parameters);if("dependency-mismatch"===s)continue;if(this.setValue(t,a,s,i),!s){this.formatTplAndAdd(t,r,i);break}}}},{key:"setView",value:function(t){this.form[t]={$name:t,$valid:!0,$invalid:!1,$error:{},$success:{},$viewValue:""}}},{key:"setValue",value:function(t,e,n,i){var a=this.form[t];a.$valid=n,a.$invalid=!n,a.$error[e]=!n,a.$success[e]=n,a.$viewValue=i}},{key:"checkForm",value:function(t){for(var e in this.__initData(),this.rules)this.setView(e),this.checkParam(e,this.rules[e],t);return this.valid()}},{key:"valid",value:function(){return 0===this.size()}},{key:"size",value:function(){return this.errorList.length}},{key:"validationErrors",value:function(){return this.errorList}}]),i}();exports.default=i;
},{isPage:false,isComponent:false,currentFile:'C871ACB1829A079CAE17C4B61D2C7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("D0479CE4829A079CB621F4E3756D7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("@babel/runtime/helpers/typeof.js");(function(e,n,r){var i=function t(e,n,r){r=o.extend({},o.options,r);var i=o.runValidations(e,n,r);if(i.some((function(t){return o.isPromise(t.error)})))throw new Error("Use validate.async if you want support for promises");return t.processValidationResults(i,r)},o=i;o.extend=function(t){return[].slice.call(arguments,1).forEach((function(e){for(var n in e)t[n]=e[n]})),t},o.extend(i,{version:{major:0,minor:13,patch:1,metadata:null,toString:function(){var t=o.format("%{major}.%{minor}.%{patch}",o.version);return o.isEmpty(o.version.metadata)||(t+="+"+o.version.metadata),t}},Promise:"undefined"!=typeof Promise?Promise:null,EMPTY_STRING_REGEXP:/^\s*$/,runValidations:function(t,e,n){var r,i,s,a,u,f,l,c=[];for(r in(o.isDomElement(t)||o.isJqueryElement(t))&&(t=o.collectFormValues(t)),e)for(i in s=o.getDeepObjectValue(t,r),a=o.result(e[r],s,t,r,n,e)){if(!(u=o.validators[i]))throw l=o.format("Unknown validator %{name}",{name:i}),new Error(l);f=a[i],(f=o.result(f,s,t,r,n,e))&&c.push({attribute:r,value:s,validator:i,globalOptions:n,attributes:t,options:f,error:u.call(u,s,f,r,t,n)})}return c},processValidationResults:function(t,e){t=o.pruneEmptyErrors(t,e),t=o.expandMultipleErrors(t,e),t=o.convertErrorMessages(t,e);var n=e.format||"grouped";if("function"!=typeof o.formatters[n])throw new Error(o.format("Unknown format %{format}",e));return t=o.formatters[n](t),o.isEmpty(t)?void 0:t},async:function(t,e,n){var r=(n=o.extend({},o.async.options,n)).wrapErrors||function(t){return t};!1!==n.cleanAttributes&&(t=o.cleanAttributes(t,e));var i=o.runValidations(t,e,n);return new o.Promise((function(s,a){o.waitForResults(i).then((function(){var u=o.processValidationResults(i,n);u?a(new r(u,n,t,e)):s(t)}),(function(t){a(t)}))}))},single:function(t,e,n){return n=o.extend({},o.single.options,n,{format:"flat",fullMessages:!1}),o({single:t},{single:e},n)},waitForResults:function(t){return t.reduce((function(t,e){return o.isPromise(e.error)?t.then((function(){return e.error.then((function(t){e.error=t||null}))})):t}),new o.Promise((function(t){t()})))},result:function(t){var e=[].slice.call(arguments,1);return"function"==typeof t&&(t=t.apply(null,e)),t},isNumber:function(t){return"number"==typeof t&&!isNaN(t)},isFunction:function(t){return"function"==typeof t},isInteger:function(t){return o.isNumber(t)&&t%1==0},isBoolean:function(t){return"boolean"==typeof t},isObject:function(t){return t===Object(t)},isDate:function(t){return t instanceof Date},isDefined:function(t){return null!=t},isPromise:function(t){return!!t&&o.isFunction(t.then)},isJqueryElement:function(t){return t&&o.isString(t.jquery)},isDomElement:function(e){return!!e&&!(!e.querySelectorAll||!e.querySelector)&&(!(!o.isObject(document)||e!==document)||("object"==("undefined"==typeof HTMLElement?"undefined":t(HTMLElement))?e instanceof HTMLElement:e&&"object"==t(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName))},isEmpty:function(t){var e;if(!o.isDefined(t))return!0;if(o.isFunction(t))return!1;if(o.isString(t))return o.EMPTY_STRING_REGEXP.test(t);if(o.isArray(t))return 0===t.length;if(o.isDate(t))return!1;if(o.isObject(t)){for(e in t)return!1;return!0}return!1},format:o.extend((function(t,e){return o.isString(t)?t.replace(o.format.FORMAT_REGEXP,(function(t,n,r){return"%"===n?"%{"+r+"}":String(e[r])})):t}),{FORMAT_REGEXP:/(%?)%\{([^\}]+)\}/g}),prettify:function(t){return o.isNumber(t)?100*t%1==0?""+t:parseFloat(Math.round(100*t)/100).toFixed(2):o.isArray(t)?t.map((function(t){return o.prettify(t)})).join(", "):o.isObject(t)?o.isDefined(t.toString)?t.toString():JSON.stringify(t):(t=""+t).replace(/([^\s])\.([^\s])/g,"$1 $2").replace(/\\+/g,"").replace(/[_-]/g," ").replace(/([a-z])([A-Z])/g,(function(t,e,n){return e+" "+n.toLowerCase()})).toLowerCase()},stringifyValue:function(t,e){return(e&&e.prettify||o.prettify)(t)},isString:function(t){return"string"==typeof t},isArray:function(t){return"[object Array]"==={}.toString.call(t)},isHash:function(t){return o.isObject(t)&&!o.isArray(t)&&!o.isFunction(t)},contains:function(t,e){return!!o.isDefined(t)&&(o.isArray(t)?-1!==t.indexOf(e):e in t)},unique:function(t){return o.isArray(t)?t.filter((function(t,e,n){return n.indexOf(t)==e})):t},forEachKeyInKeypath:function(t,e,n){if(o.isString(e)){var r,i="",s=!1;for(r=0;r<e.length;++r)switch(e[r]){case".":s?(s=!1,i+="."):(t=n(t,i,!1),i="");break;case"\\":s?(s=!1,i+="\\"):s=!0;break;default:s=!1,i+=e[r]}return n(t,i,!0)}},getDeepObjectValue:function(t,e){if(o.isObject(t))return o.forEachKeyInKeypath(t,e,(function(t,e){if(o.isObject(t))return t[e]}))},collectFormValues:function(t,e){var n,r,i,s,a,u,f={};if(o.isJqueryElement(t)&&(t=t[0]),!t)return f;for(e=e||{},s=t.querySelectorAll("input[name], textarea[name]"),n=0;n<s.length;++n)if(i=s.item(n),!o.isDefined(i.getAttribute("data-ignored"))){var l=i.name.replace(/\./g,"\\\\.");u=o.sanitizeFormValue(i.value,e),"number"===i.type?u=u?+u:null:"checkbox"===i.type?i.attributes.value?i.checked||(u=f[l]||null):u=i.checked:"radio"===i.type&&(i.checked||(u=f[l]||null)),f[l]=u}for(s=t.querySelectorAll("select[name]"),n=0;n<s.length;++n)if(i=s.item(n),!o.isDefined(i.getAttribute("data-ignored"))){if(i.multiple)for(r in u=[],i.options)(a=i.options[r])&&a.selected&&u.push(o.sanitizeFormValue(a.value,e));else{var c=void 0!==i.options[i.selectedIndex]?i.options[i.selectedIndex].value:"";u=o.sanitizeFormValue(c,e)}f[i.name]=u}return f},sanitizeFormValue:function(t,e){return e.trim&&o.isString(t)&&(t=t.trim()),!1!==e.nullify&&""===t?null:t},capitalize:function(t){return o.isString(t)?t[0].toUpperCase()+t.slice(1):t},pruneEmptyErrors:function(t){return t.filter((function(t){return!o.isEmpty(t.error)}))},expandMultipleErrors:function(t){var e=[];return t.forEach((function(t){o.isArray(t.error)?t.error.forEach((function(n){e.push(o.extend({},t,{error:n}))})):e.push(t)})),e},convertErrorMessages:function(t,e){var n=[],r=(e=e||{}).prettify||o.prettify;return t.forEach((function(t){var i=o.result(t.error,t.value,t.attribute,t.options,t.attributes,t.globalOptions);return o.isString(i)?("^"===i[0]?i=i.slice(1):!1!==e.fullMessages&&(i=o.capitalize(r(t.attribute))+" "+i),i=i.replace(/\\\^/g,"^"),i=o.format(i,{value:o.stringifyValue(t.value,e)}),void n.push(o.extend({},t,{error:i}))):void n.push(t)})),n},groupErrorsByAttribute:function(t){var e={};return t.forEach((function(t){var n=e[t.attribute];n?n.push(t):e[t.attribute]=[t]})),e},flattenErrorsToArray:function(t){return t.map((function(t){return t.error})).filter((function(t,e,n){return n.indexOf(t)===e}))},cleanAttributes:function(t,e){function n(t,e,n){return o.isObject(t[e])?t[e]:t[e]=!!n||{}}return o.isObject(e)&&o.isObject(t)?function t(e,n){if(!o.isObject(e))return e;var r,i,s=o.extend({},e);for(i in e)r=n[i],o.isObject(r)?s[i]=t(s[i],r):r||delete s[i];return s}(t,e=function(t){var e,r={};for(e in t)t[e]&&o.forEachKeyInKeypath(r,e,n);return r}(e)):{}},exposeModule:function(t,e,n,r,i){n?(r&&r.exports&&(n=r.exports=t),n.validate=t):(e.validate=t,t.isFunction(i)&&i.amd&&i([],(function(){return t})))},warn:function(t){"undefined"!=typeof console&&console.warn&&console.warn("[validate.js] "+t)},error:function(t){"undefined"!=typeof console&&console.error&&console.error("[validate.js] "+t)}}),i.validators={presence:function(t,e){if(!1!==(e=o.extend({},this.options,e)).allowEmpty?!o.isDefined(t):o.isEmpty(t))return e.message||this.message||"can't be blank"},length:function(t,e,n){if(o.isDefined(t)){var r,i=(e=o.extend({},this.options,e)).is,s=e.maximum,a=e.minimum,u=[],f=(t=(e.tokenizer||function(t){return t})(t)).length;return o.isNumber(f)?(o.isNumber(i)&&f!==i&&(r=e.wrongLength||this.wrongLength||"is the wrong length (should be %{count} characters)",u.push(o.format(r,{count:i}))),o.isNumber(a)&&f<a&&(r=e.tooShort||this.tooShort||"is too short (minimum is %{count} characters)",u.push(o.format(r,{count:a}))),o.isNumber(s)&&f>s&&(r=e.tooLong||this.tooLong||"is too long (maximum is %{count} characters)",u.push(o.format(r,{count:s}))),u.length>0?e.message||u:void 0):e.message||this.notValid||"has an incorrect length"}},numericality:function(t,e,n,r,i){if(o.isDefined(t)){var s,a,u=[],f={greaterThan:function(t,e){return t>e},greaterThanOrEqualTo:function(t,e){return t>=e},equalTo:function(t,e){return t===e},lessThan:function(t,e){return t<e},lessThanOrEqualTo:function(t,e){return t<=e},divisibleBy:function(t,e){return t%e==0}},l=(e=o.extend({},this.options,e)).prettify||i&&i.prettify||o.prettify;if(o.isString(t)&&e.strict){var c="^-?(0|[1-9]\\d*)";if(e.onlyInteger||(c+="(\\.\\d+)?"),c+="$",!new RegExp(c).test(t))return e.message||e.notValid||this.notValid||this.message||"must be a valid number"}if(!0!==e.noStrings&&o.isString(t)&&!o.isEmpty(t)&&(t=+t),!o.isNumber(t))return e.message||e.notValid||this.notValid||this.message||"is not a number";if(e.onlyInteger&&!o.isInteger(t))return e.message||e.notInteger||this.notInteger||this.message||"must be an integer";for(s in f)if(a=e[s],o.isNumber(a)&&!f[s](t,a)){var d="not"+o.capitalize(s),m=e[d]||this[d]||this.message||"must be %{type} %{count}";u.push(o.format(m,{count:a,type:l(s)}))}return e.odd&&t%2!=1&&u.push(e.notOdd||this.notOdd||this.message||"must be odd"),e.even&&t%2!=0&&u.push(e.notEven||this.notEven||this.message||"must be even"),u.length?e.message||u:void 0}},datetime:o.extend((function(t,e){if(!o.isFunction(this.parse)||!o.isFunction(this.format))throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");if(o.isDefined(t)){var n,r=[],i=(e=o.extend({},this.options,e)).earliest?this.parse(e.earliest,e):NaN,s=e.latest?this.parse(e.latest,e):NaN;return t=this.parse(t,e),isNaN(t)||e.dateOnly&&t%864e5!=0?(n=e.notValid||e.message||this.notValid||"must be a valid date",o.format(n,{value:arguments[0]})):(!isNaN(i)&&t<i&&(n=e.tooEarly||e.message||this.tooEarly||"must be no earlier than %{date}",n=o.format(n,{value:this.format(t,e),date:this.format(i,e)}),r.push(n)),!isNaN(s)&&t>s&&(n=e.tooLate||e.message||this.tooLate||"must be no later than %{date}",n=o.format(n,{date:this.format(s,e),value:this.format(t,e)}),r.push(n)),r.length?o.unique(r):void 0)}}),{parse:null,format:null}),date:function(t,e){return e=o.extend({},e,{dateOnly:!0}),o.validators.datetime.call(o.validators.datetime,t,e)},format:function(t,e){(o.isString(e)||e instanceof RegExp)&&(e={pattern:e});var n,r=(e=o.extend({},this.options,e)).message||this.message||"is invalid",i=e.pattern;if(o.isDefined(t))return o.isString(t)?(o.isString(i)&&(i=new RegExp(e.pattern,e.flags)),(n=i.exec(t))&&n[0].length==t.length?void 0:r):r},inclusion:function(t,e){if(o.isDefined(t)&&(o.isArray(e)&&(e={within:e}),e=o.extend({},this.options,e),!o.contains(e.within,t))){var n=e.message||this.message||"^%{value} is not included in the list";return o.format(n,{value:t})}},exclusion:function(t,e){if(o.isDefined(t)&&(o.isArray(e)&&(e={within:e}),e=o.extend({},this.options,e),o.contains(e.within,t))){var n=e.message||this.message||"^%{value} is restricted";return o.isString(e.within[t])&&(t=e.within[t]),o.format(n,{value:t})}},email:o.extend((function(t,e){var n=(e=o.extend({},this.options,e)).message||this.message||"is not a valid email";if(o.isDefined(t))return o.isString(t)&&this.PATTERN.exec(t)?void 0:n}),{PATTERN:/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i}),equality:function(t,e,n,r,i){if(o.isDefined(t)){o.isString(e)&&(e={attribute:e});var s=(e=o.extend({},this.options,e)).message||this.message||"is not equal to %{attribute}";if(o.isEmpty(e.attribute)||!o.isString(e.attribute))throw new Error("The attribute must be a non empty string");var a=o.getDeepObjectValue(r,e.attribute),u=e.comparator||function(t,e){return t===e},f=e.prettify||i&&i.prettify||o.prettify;return u(t,a,e,n,r)?void 0:o.format(s,{attribute:f(e.attribute)})}},url:function(t,e){if(o.isDefined(t)){var n=(e=o.extend({},this.options,e)).message||this.message||"is not a valid url",r=e.schemes||this.schemes||["http","https"],i=e.allowLocal||this.allowLocal||!1,s=e.allowDataUrl||this.allowDataUrl||!1;if(!o.isString(t))return n;var a="^(?:(?:"+r.join("|")+")://)(?:\\S+(?::\\S*)?@)?(?:",u="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";if(i?u+="?":a+="(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})",a+="(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*"+u+")(?::\\d{2,5})?(?:[/?#]\\S*)?$",s){a="(?:"+a+")|(?:^data:(?:\\w+\\/[-+.\\w]+(?:;[\\w=]+)*)?(?:;base64)?,[A-Za-z0-9-_.!~\\*'();\\/?:@&=+$,%]*$)"}return new RegExp(a,"i").exec(t)?void 0:n}},type:o.extend((function(t,e,n,r,i){if(o.isString(e)&&(e={type:e}),o.isDefined(t)){var s,a=o.extend({},this.options,e),u=a.type;if(!o.isDefined(u))throw new Error("No type was specified");if(s=o.isFunction(u)?u:this.types[u],!o.isFunction(s))throw new Error("validate.validators.type.types."+u+" must be a function.");if(!s(t,a,n,r,i)){var f=e.message||this.messages[u]||this.message||a.message||(o.isFunction(u)?"must be of the correct type":"must be of type %{type}");return o.isFunction(f)&&(f=f(t,e,n,r,i)),o.format(f,{attribute:o.prettify(n),type:u})}}}),{types:{object:function(t){return o.isObject(t)&&!o.isArray(t)},array:o.isArray,integer:o.isInteger,number:o.isNumber,string:o.isString,date:o.isDate,boolean:o.isBoolean},messages:{}})},i.formatters={detailed:function(t){return t},flat:o.flattenErrorsToArray,grouped:function(t){var e;for(e in t=o.groupErrorsByAttribute(t))t[e]=o.flattenErrorsToArray(t[e]);return t},constraint:function(t){var e;for(e in t=o.groupErrorsByAttribute(t))t[e]=t[e].map((function(t){return t.validator})).sort();return t}},i.exposeModule(i,this,e,n,r)}).call(void 0,"undefined"!=typeof exports?exports:null,"undefined"!=typeof module?module:null,"undefined"!=typeof define?define:null);
},{isPage:false,isComponent:false,currentFile:'D0479CE4829A079CB621F4E3756D7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("D6CAF1F1829A079CB0AC99F6BFEC7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=wx.getRealtimeLogManager?wx.getRealtimeLogManager():null;module.exports={info:function(){t&&t.info.apply(t,arguments)},warn:function(){t&&t.warn.apply(t,arguments)},error:function(){t&&t.error.apply(t,arguments)},setFilterMsg:function(e){t&&t.setFilterMsg&&"string"==typeof e&&t.setFilterMsg(e)},addFilterMsg:function(e){t&&t.addFilterMsg&&"string"==typeof e&&t.addFilterMsg(e)}};
},{isPage:false,isComponent:false,currentFile:'D6CAF1F1829A079CB0AC99F6BFEC7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("EB19B6E5829A079C8D7FDEE21D1D7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("BC983DD1829A079CDAFE55D6E84D7B70.js"),s=e.baseUrl,t=e.currentUrlKey,n="".concat(s,"/cooperation/wap/get_base_info/"),o={online:"https://www.chunyuyisheng.com/sensorsdata/sa",biz:"https://www.chunyuyisheng.com/sensorsdata/sa?project=biztest",dev:"https://www.chunyuyisheng.com/sensorsdata/sa?project=test",stage:"https://www.chunyuyisheng.com/sensorsdata/sa"}[t],a=require("9B422ED7829A079CFD2446D0F82D7B70.js");function i(){var e=wx.getStorageSync("sessionUserId")||"";if(!wx.getStorageSync("device_id")){wx.setStorageSync("device_id","xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var s=16*Math.random()|0;return("x"===e?s:3&s|8).toString(16)})))}a.registerApp({device_id:wx.getStorageSync("open_id")}),e&&a.login(e),a.init()}a.setPara({name:"sensors",server_url:o,autoTrack:{appLaunch:!0,appShow:!0,appHide:!0,pageShow:!0,pageShare:!0,mpClick:!1},show_log:!1}),module.exports={sensors:a,sensorsInit:function(){wx.login({success:function(e){e.code?wx.request({method:"POST",url:n,data:{code:e.code,app:"weixin_mini"},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(e){e.data.open_id&&(wx.setStorageSync("open_id",e.data.open_id),a.setOpenid(e.data.open_id))},complete:function(){i()}}):i()},fail:function(){i()}})}};
},{isPage:false,isComponent:false,currentFile:'EB19B6E5829A079C8D7FDEE21D1D7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("FD56CE94829A079C9B30A693E59B7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={relationList:["自己","父母","子女","爱人","其他"],sexList:[{value:"男",checked:!1},{value:"女",checked:!1}]};
},{isPage:false,isComponent:false,currentFile:'FD56CE94829A079C9B30A693E59B7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("FE1120A4829A079C987748A30A3D7B70.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,o=require("92BC1755829A079CF4DA7F52C55D7B70.js").param,a="".concat(e,"/cooperation/wap/mini_sub/can_sub/"),n="".concat(e,"/cooperation/wap/mini_sub/save/"),s=getApp();module.exports={saveSubscribeMessage:function(e,a){var t={data:e.map((function(e){return{template_id:e,choice:a[e]}}))};t.data=JSON.stringify(t.data),console.log(t,"formdata");var c=s.globalData.sessionid;c&&wx.request({url:n,method:"POST",header:{Cookie:c,"Content-Type":"application/x-www-form-urlencoded"},data:o(t),fail:function(e){console.log(e)},success:function(){}})},subscribeBtnShow:function(e,o){var n={template_ids:JSON.stringify(e)},t=s.globalData.sessionid;t&&wx.request({url:a,method:"POST",header:{Cookie:t,"Content-Type":"application/x-www-form-urlencoded"},data:n,fail:function(e){console.log(e)},success:function(e){var a;0==e.data.error_code&&(a=e.data.result.some((function(e){return 1==e.can_sub}))),o(a)}})},subscribeMessage:function(e){return new Promise((function(o,a){wx.requestSubscribeMessage({tmplIds:e,fail:function(e){a(e),console.error(e)},success:function(e){o(e),console.error(e)},complete:function(e){console.log("complete::::::",e)}})}))},changeIsSubscribeConsultMessageValue:function(e){s.globalData.isSubscribeConsultMessage=!e,console.log("changeIsSubscribeConsultMessageValue",s.globalData.isSubscribeConsultMessage)},jumpToTargetPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("adCyRedirect",e);var o=e.target_type,a=e.target_scheme;a&&("html"===o?wx.navigateTo({url:"/pages/h5_webview/index?url=".concat(encodeURIComponent(a))}):"wx_mini"===o&&wx.navigateTo({url:"".concat(a)}))}};
},{isPage:false,isComponent:false,currentFile:'FE1120A4829A079C987748A30A3D7B70.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/mp-html/parser.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";function t(t){for(var i=Object.create(null),e=t.split(","),s=e.length;s--;)i[e[s]]=!0;return i}function i(t,i){for(var e=t.indexOf("&");-1!==e;){var s=t.indexOf(";",e+3),n=void 0;if(-1===s)break;"#"===t[e+1]?(n=parseInt(("x"===t[e+2]?"0":"")+t.substring(e+2,s)),isNaN(n)||(t=t.substr(0,e)+String.fromCharCode(n)+t.substr(s+1))):(n=t.substring(e+1,s),(a.entities[n]||"amp"===n&&i)&&(t=t.substr(0,e)+(a.entities[n]||"&")+t.substr(s+1))),e=t.indexOf("&",e+1)}return t}function e(t){this.options=t.data||{},this.tagStyle=Object.assign({},a.tagStyle,this.options.tagStyle),this.imgList=t.imgList||[],this.plugins=t.plugins||[],this.attrs=Object.create(null),this.stack=[],this.nodes=[],this.pre=(this.options.containerStyle||"").includes("white-space")&&this.options.containerStyle.includes("pre")?2:0}function s(t){this.handler=t}require("../../@babel/runtime/helpers/Arrayincludes");var a={trustTags:t("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),blockTags:t("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:t("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),voidTags:t("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),entities:{lt:"<",gt:">",quot:'"',apos:"'",ensp:" ",emsp:" ",nbsp:" ",semi:";",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…",larr:"←",uarr:"↑",rarr:"→",darr:"↓"},tagStyle:{address:"font-style:italic",big:"display:inline;font-size:1.2em",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",strike:"text-decoration:line-through",u:"text-decoration:underline"},svgDict:{animatetransform:"animateTransform",lineargradient:"linearGradient",viewbox:"viewBox",attributename:"attributeName",repeatcount:"repeatCount",repeatdur:"repeatDur"}},n={},r=wx.getSystemInfoSync(),h=r.windowWidth,o=r.system,l=t(" ,\r,\n,\t,\f"),c=0;e.prototype.parse=function(t){for(var i=this.plugins.length;i--;)this.plugins[i].onUpdate&&(t=this.plugins[i].onUpdate(t,a)||t);for(new s(this).parse(t);this.stack.length;)this.popNode();return this.nodes},e.prototype.expose=function(){for(var t=this.stack.length;t--;){var i=this.stack[t];if(i.c||"a"===i.name||"video"===i.name||"audio"===i.name)return;i.c=1}},e.prototype.hook=function(t){for(var i=this.plugins.length;i--;)if(this.plugins[i].onParse&&!1===this.plugins[i].onParse(t,this))return!1;return!0},e.prototype.getUrl=function(t){var i=this.options.domain;return"/"===t[0]?"/"===t[1]?t=(i?i.split("://")[0]:"http")+":"+t:i&&(t=i+t):!i||t.includes("data:")||t.includes("://")||(t=i+"/"+t),t},e.prototype.parseStyle=function(t){var i=t.attrs,e=(this.tagStyle[t.name]||"").split(";").concat((i.style||"").split(";")),s={},a="";i.id&&!this.xml&&(this.options.useAnchor?this.expose():"img"!==t.name&&"a"!==t.name&&"video"!==t.name&&"audio"!==t.name&&(i.id=void 0)),i.width&&(s.width=parseFloat(i.width)+(i.width.includes("%")?"%":"px"),i.width=void 0),i.height&&(s.height=parseFloat(i.height)+(i.height.includes("%")?"%":"px"),i.height=void 0);for(var n=0,r=e.length;n<r;n++){var o=e[n].split(":");if(!(o.length<2)){var c=o.shift().trim().toLowerCase(),d=o.join(":").trim();if("-"===d[0]&&d.lastIndexOf("-")>0||d.includes("safe"))a+=";".concat(c,":").concat(d);else if(!s[c]||d.includes("import")||!s[c].includes("import")){if(d.includes("url")){var p=d.indexOf("(")+1;if(p){for(;'"'===d[p]||"'"===d[p]||l[d[p]];)p++;d=d.substr(0,p)+this.getUrl(d.substr(p))}}else d.includes("rpx")&&(d=d.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*h/750+"px"})));s[c]=d}}}return t.attrs.style=a,s},e.prototype.onTagName=function(t){this.tagName=this.xml?t:t.toLowerCase(),"svg"===this.tagName&&(this.xml=(this.xml||0)+1)},e.prototype.onAttrName=function(t){"data-"===(t=this.xml?t:t.toLowerCase()).substr(0,5)?"data-src"!==t||this.attrs.src?"img"===this.tagName||"a"===this.tagName?this.attrName=t:this.attrName=void 0:this.attrName="src":(this.attrName=t,this.attrs[t]="T")},e.prototype.onAttrVal=function(t){var e=this.attrName||"";"style"===e||"href"===e?this.attrs[e]=i(t,!0):e.includes("src")?this.attrs[e]=this.getUrl(i(t,!0)):e&&(this.attrs[e]=t)},e.prototype.onOpenTag=function(t){var i=Object.create(null);i.name=this.tagName,i.attrs=this.attrs,this.attrs=Object.create(null);var e=i.attrs,s=this.stack[this.stack.length-1],r=s?s.children:this.nodes,o=this.xml?t:a.voidTags[i.name];if(n[i.name]&&(e.class=n[i.name]+(e.class?" "+e.class:"")),"embed"===i.name){var l=e.src||"";l.includes(".mp4")||l.includes(".3gp")||l.includes(".m3u8")||(e.type||"").includes("video")?i.name="video":(l.includes(".mp3")||l.includes(".wav")||l.includes(".aac")||l.includes(".m4a")||(e.type||"").includes("audio"))&&(i.name="audio"),e.autostart&&(e.autoplay="T"),e.controls="T"}if("video"!==i.name&&"audio"!==i.name||("video"!==i.name||e.id||(e.id="v"+c++),e.controls||e.autoplay||(e.controls="T"),i.src=[],e.src&&(i.src.push(e.src),e.src=void 0),this.expose()),o){if(!this.hook(i)||a.ignoreTags[i.name])return void("base"!==i.name||this.options.domain?"source"===i.name&&s&&("video"===s.name||"audio"===s.name)&&e.src&&s.src.push(e.src):this.options.domain=e.href);var d=this.parseStyle(i);if("img"===i.name){if(e.src&&(e.src.includes("webp")&&(i.webp="T"),e.src.includes("data:")&&!e["original-src"]&&(e.ignore="T"),!e.ignore||i.webp||e.src.includes("cloud://"))){for(var p=this.stack.length;p--;){var u=this.stack[p];if("a"===u.name){i.a=u.attrs;break}var g=u.attrs.style||"";if(!g.includes("flex:")||g.includes("flex:0")||g.includes("flex: 0")||d.width&&d.width.includes("%"))if(g.includes("flex")&&"100%"===d.width)for(var f=p+1;f<this.stack.length;f++){var m=this.stack[f].attrs.style||"";if(!m.includes(";width")&&!m.includes(" width")&&0!==m.indexOf("width")){d.width="";break}}else g.includes("inline-block")&&(d.width&&"%"===d.width[d.width.length-1]?(u.attrs.style+=";max-width:"+d.width,d.width=""):u.attrs.style+=";max-width:100%");else{d.width="100% !important",d.height="";for(var v=p+1;v<this.stack.length;v++)this.stack[v].attrs.style=(this.stack[v].attrs.style||"").replace("inline-","")}u.c=1}i.i=this.imgList.length;var y=e["original-src"]||e.src;if(this.imgList.includes(y)){var x=y.indexOf("://");if(-1!==x){x+=3;for(var b=y.substr(0,x);x<y.length&&"/"!==y[x];x++)b+=Math.random()>.5?y[x].toUpperCase():y[x];b+=y.substr(x),y=b}}this.imgList.push(y)}"inline"===d.display&&(d.display=""),e.ignore&&(d["max-width"]=d["max-width"]||"100%",e.style+=";-webkit-touch-callout:none"),parseInt(d.width)>h&&(d.height=void 0),isNaN(parseInt(d.width))||(i.w="T"),!isNaN(parseInt(d.height))&&(!d.height.includes("%")||s&&(s.attrs.style||"").includes("height"))&&(i.h="T")}else if("svg"===i.name)return r.push(i),this.stack.push(i),void this.popNode();for(var w in d)d[w]&&(e.style+=";".concat(w,":").concat(d[w].replace(" !important","")));e.style=e.style.substr(1)||void 0}else("pre"===i.name||(e.style||"").includes("white-space")&&e.style.includes("pre"))&&2!==this.pre&&(this.pre=i.pre=1),i.children=[],this.stack.push(i);r.push(i)},e.prototype.onCloseTag=function(t){var i;for(t=this.xml?t:t.toLowerCase(),i=this.stack.length;i--&&this.stack[i].name!==t;);if(-1!==i)for(;this.stack.length>i;)this.popNode();else if("p"===t||"br"===t){(this.stack.length?this.stack[this.stack.length-1].children:this.nodes).push({name:t,attrs:{class:n[t],style:this.tagStyle[t]}})}},e.prototype.popNode=function(){var t=this.stack.pop(),i=t.attrs,e=t.children,s=this.stack[this.stack.length-1],n=s?s.children:this.nodes;if(!this.hook(t)||a.ignoreTags[t.name])return"title"===t.name&&e.length&&"text"===e[0].type&&this.options.setTitle&&wx.setNavigationBarTitle({title:e[0].text}),void n.pop();if(t.pre&&2!==this.pre){this.pre=t.pre=void 0;for(var r=this.stack.length;r--;)this.stack[r].pre&&(this.pre=1)}if("svg"===t.name){if(this.xml>1)return void this.xml--;var o="",l=i.style;return i.style="",i.xmlns="http://www.w3.org/2000/svg",function t(i){if("text"!==i.type){var e=a.svgDict[i.name]||i.name;for(var s in o+="<"+e,i.attrs){var n=i.attrs[s];n&&(o+=" ".concat(a.svgDict[s]||s,'="').concat(n,'"'))}if(i.children){o+=">";for(var r=0;r<i.children.length;r++)t(i.children[r]);o+="</"+e+">"}else o+="/>"}else o+=i.text}(t),t.name="img",t.attrs={src:"data:image/svg+xml;utf8,"+o.replace(/#/g,"%23"),style:l,ignore:"T"},t.children=void 0,void(this.xml=!1)}var c={};if(i.align&&("table"===t.name?"center"===i.align?c["margin-inline-start"]=c["margin-inline-end"]="auto":c.float=i.align:c["text-align"]=i.align,i.align=void 0),i.dir&&(c.direction=i.dir,i.dir=void 0),"font"===t.name&&(i.color&&(c.color=i.color,i.color=void 0),i.face&&(c["font-family"]=i.face,i.face=void 0),i.size)){var d=parseInt(i.size);isNaN(d)||(d<1?d=1:d>7&&(d=7),c["font-size"]=["x-small","small","medium","large","x-large","xx-large","xxx-large"][d-1]),i.size=void 0}if((i.class||"").includes("align-center")&&(c["text-align"]="center"),Object.assign(c,this.parseStyle(t)),"table"!==t.name&&parseInt(c.width)>h&&(c["max-width"]="100%",c["box-sizing"]="border-box"),a.blockTags[t.name])t.name="div";else if(a.trustTags[t.name]||this.xml)if("a"===t.name||"ad"===t.name)this.expose();else if("video"===t.name||"audio"===t.name)(c.height||"").includes("auto")&&(c.height=void 0),t.children=void 0;else if("ul"!==t.name&&"ol"!==t.name||!t.c){if("table"===t.name){var p=parseFloat(i.cellpadding),u=parseFloat(i.cellspacing),g=parseFloat(i.border);if(t.c&&(isNaN(p)&&(p=2),isNaN(u)&&(u=2)),g&&(i.style+=";border:"+g+"px solid gray"),t.flag&&t.c){t.flag=void 0,c.display="grid",u?(c["grid-gap"]=u+"px",c.padding=u+"px"):g&&(i.style+=";border-left:0;border-top:0");var f=[],m=[],v=[],y={};!function t(i){for(var e=0;e<i.length;e++)"tr"===i[e].name?m.push(i[e]):t(i[e].children||[])}(e);for(var x=1;x<=m.length;x++){for(var b=1,w=0;w<m[x-1].children.length;w++){var k=m[x-1].children[w];if("td"===k.name||"th"===k.name){for(;y[x+"."+b];)b++;k.c=1;var N=k.attrs.style||"",T=N.indexOf("width")?N.indexOf(";width"):0;if(-1!==T){var O=N.indexOf(";",T+6);-1===O&&(O=N.length),k.attrs.colspan||(f[b]=N.substring(T?T+7:6,O)),N=N.substr(0,T)+N.substr(O)}if(N+=(g?";border:".concat(g,"px solid gray")+(u?"":";border-right:0;border-bottom:0"):"")+(p?";padding:".concat(p,"px"):""),k.attrs.colspan&&(N+=";grid-column-start:".concat(b,";grid-column-end:").concat(b+parseInt(k.attrs.colspan)),k.attrs.rowspan||(N+=";grid-row-start:".concat(x,";grid-row-end:").concat(x+1)),b+=parseInt(k.attrs.colspan)-1),k.attrs.rowspan){N+=";grid-row-start:".concat(x,";grid-row-end:").concat(x+parseInt(k.attrs.rowspan)),k.attrs.colspan||(N+=";grid-column-start:".concat(b,";grid-column-end:").concat(b+1));for(var C=1;C<k.attrs.rowspan;C++)for(var S=0;S<(k.attrs.colspan||1);S++)y[x+C+"."+(b-S)]=1}N&&(k.attrs.style=N),v.push(k),b++}}if(1===x){for(var I="",A=1;A<b;A++)I+=(f[A]?f[A]:"auto")+" ";c["grid-template-columns"]=I}}t.children=v}else t.c&&(c.display="table"),isNaN(u)||(c["border-spacing"]=u+"px"),(g||p||t.c)&&function i(e){for(var s=0;s<e.length;s++){var a=e[s];t.c&&(a.c=1),"th"===a.name||"td"===a.name?(g&&(a.attrs.style="border:".concat(g,"px solid gray;").concat(a.attrs.style||"")),p&&(a.attrs.style="padding:".concat(p,"px;").concat(a.attrs.style||""))):a.children&&i(a.children)}}(e);if(this.options.scrollTable&&!(i.style||"").includes("inline")){var z=Object.assign({},t);t.name="div",t.attrs={style:"overflow-x:auto;padding:1px"},t.children=[z],i=z.attrs}}else if("td"!==t.name&&"th"!==t.name||!i.colspan&&!i.rowspan){if("ruby"===t.name){t.name="span";for(var j=0;j<e.length-1;j++)"text"===e[j].type&&"rt"===e[j+1].name&&(e[j]={name:"span",attrs:{style:"display:inline-block;text-align:center"},children:[{name:"div",attrs:{style:"font-size:50%;"+(e[j+1].attrs.style||"")},children:e[j+1].children},e[j]]},e.splice(j+1,1))}}else for(var L=this.stack.length;L--;)if("table"===this.stack[L].name){this.stack[L].flag=1;break}}else{var q={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman"};q[i.type]&&(i.style+=";list-style-type:"+q[i.type],i.type=void 0),t.c=1;for(var U=e.length;U--;)"li"===e[U].name&&(e[U].c=1)}else t.name="span";if((c.display||"").includes("flex")&&!t.c)for(var F=e.length;F--;){var V=e[F];V.f&&(V.attrs.style=(V.attrs.style||"")+V.f,V.f=void 0)}var D=s&&((s.attrs.style||"").includes("flex")||(s.attrs.style||"").includes("grid"))&&!t.c&&!(c.display||"").includes("inline");if(D&&(t.f=";max-width:100%"),e.length>=50&&t.c&&!(c.display||"").includes("flex"))for(var B=e.length-1,P=B;P>=-1;P--)(-1===P||e[P].c||!e[P].name||"div"!==e[P].name&&"p"!==e[P].name&&"h"!==e[P].name[0]||(e[P].attrs.style||"").includes("inline"))&&(B-P>=5&&e.splice(P+1,B-P,{name:"div",attrs:{},children:t.children.slice(P+1,B+1)}),B=P-1);for(var Z in c)if(c[Z]){var G=";".concat(Z,":").concat(c[Z].replace(" !important",""));D&&(Z.includes("flex")&&"flex-direction"!==Z||"align-self"===Z||Z.includes("grid")||"-"===c[Z][0]||Z.includes("width")&&G.includes("%"))?(t.f+=G,"width"===Z&&(i.style+=";width:100%")):i.style+=G}i.style=i.style.substr(1)||void 0},e.prototype.onText=function(t){if(!this.pre){for(var e,s="",a=0,n=t.length;a<n;a++)l[t[a]]?(" "!==s[s.length-1]&&(s+=" "),"\n"!==t[a]||e||(e=!0)):s+=t[a];if(" "===s&&e)return;t=s}var r=Object.create(null);r.type="text",r.text=i(t),this.hook(r)&&("force"===this.options.selectable&&o.includes("iOS")&&!wx.canIUse("rich-text.user-select")&&this.expose(),(this.stack.length?this.stack[this.stack.length-1].children:this.nodes).push(r))},s.prototype.parse=function(t){this.content=t||"",this.i=0,this.start=0,this.state=this.text;for(var i=this.content.length;-1!==this.i&&this.i<i;)this.state()},s.prototype.checkClose=function(t){var i="/"===this.content[this.i];return!!(">"===this.content[this.i]||i&&">"===this.content[this.i+1])&&(t&&this.handler[t](this.content.substring(this.start,this.i)),this.i+=i?2:1,this.start=this.i,this.handler.onOpenTag(i),"script"===this.handler.tagName?(this.i=this.content.indexOf("</",this.i),-1!==this.i&&(this.i+=2,this.start=this.i),this.state=this.endTag):this.state=this.text,!0)},s.prototype.text=function(){if(this.i=this.content.indexOf("<",this.i),-1!==this.i){var t=this.content[this.i+1];if(t>="a"&&t<="z"||t>="A"&&t<="Z")this.start!==this.i&&this.handler.onText(this.content.substring(this.start,this.i)),this.start=++this.i,this.state=this.tagName;else if("/"===t||"!"===t||"?"===t){this.start!==this.i&&this.handler.onText(this.content.substring(this.start,this.i));var i=this.content[this.i+2];if("/"===t&&(i>="a"&&i<="z"||i>="A"&&i<="Z"))return this.i+=2,this.start=this.i,void(this.state=this.endTag);var e="--\x3e";"!"===t&&"-"===this.content[this.i+2]&&"-"===this.content[this.i+3]||(e=">"),this.i=this.content.indexOf(e,this.i),-1!==this.i&&(this.i+=e.length,this.start=this.i)}else this.i++}else this.start<this.content.length&&this.handler.onText(this.content.substring(this.start,this.content.length))},s.prototype.tagName=function(){if(l[this.content[this.i]]){for(this.handler.onTagName(this.content.substring(this.start,this.i));l[this.content[++this.i]];);this.i<this.content.length&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)}else this.checkClose("onTagName")||this.i++},s.prototype.attrName=function(){var t=this.content[this.i];if(l[t]||"="===t){this.handler.onAttrName(this.content.substring(this.start,this.i));for(var i="="===t,e=this.content.length;++this.i<e;)if(t=this.content[this.i],!l[t]){if(this.checkClose())return;if(i)return this.start=this.i,void(this.state=this.attrVal);if("="!==this.content[this.i])return this.start=this.i,void(this.state=this.attrName);i=!0}}else this.checkClose("onAttrName")||this.i++},s.prototype.attrVal=function(){var t=this.content[this.i],i=this.content.length;if('"'===t||"'"===t){if(this.start=++this.i,this.i=this.content.indexOf(t,this.i),-1===this.i)return;this.handler.onAttrVal(this.content.substring(this.start,this.i))}else for(;this.i<i;this.i++){if(l[this.content[this.i]]){this.handler.onAttrVal(this.content.substring(this.start,this.i));break}if(this.checkClose("onAttrVal"))return}for(;l[this.content[++this.i]];);this.i<i&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)},s.prototype.endTag=function(){var t=this.content[this.i];if(l[t]||">"===t||"/"===t){if(this.handler.onCloseTag(this.content.substring(this.start,this.i)),">"!==t&&(this.i=this.content.indexOf(">",this.i),-1===this.i))return;this.start=++this.i,this.state=this.text}else this.i++},module.exports=e;
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/mp-html/parser.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/qs/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,r,t,n=require("../../@babel/runtime/helpers/typeof");module.exports=(e={},t=function(r,t){if(!e[r])return require(t);if(!e[r].status){var i=e[r].m;i._exports=i._tempexports;var o=Object.getOwnPropertyDescriptor(i,"exports");o&&o.configurable&&Object.defineProperty(i,"exports",{set:function(e){"object"===n(e)&&e!==i._exports&&(i._exports.__proto__=e.__proto__,Object.keys(e).forEach((function(r){i._exports[r]=e[r]}))),i._tempexports=e},get:function(){return i._tempexports}}),e[r].status=1,e[r].func(e[r].req,i,i.exports)}return e[r].m.exports},(r=function(r,t,n){e[r]={status:0,func:t,req:n,m:{exports:{},_tempexports:{}}}})(1684916285396,(function(e,r,t){var n=e("./stringify"),i=e("./parse");r.exports={stringify:n,parse:i}}),(function(e){return t({"./stringify":1684916285397,"./parse":1684916285399}[e],e)})),r(1684916285397,(function(e,r,t){var i=e("./utils"),o={delimiter:"&",arrayPrefixGenerators:{brackets:function(e,r){return e+"[]"},indices:function(e,r){return e+"["+r+"]"},repeat:function(e,r){return e}},strictNullHandling:!1,skipNulls:!1,encode:!0,stringify:function(e,r,t,n,a,l,s,c){if("function"==typeof s)e=s(r,e);else if(i.isBuffer(e))e=e.toString();else if(e instanceof Date)e=e.toISOString();else if(null===e){if(n)return l?i.encode(r):r;e=""}if("string"==typeof e||"number"==typeof e||"boolean"==typeof e)return l?[i.encode(r)+"="+i.encode(e)]:[r+"="+e];var p,u=[];if(void 0===e)return u;if(Array.isArray(s))p=s;else{var f=Object.keys(e);p=c?f.sort(c):f}for(var y=0,b=p.length;y<b;++y){var d=p[y];a&&null===e[d]||(u=Array.isArray(e)?u.concat(o.stringify(e[d],t(r,d),t,n,a,l,s)):u.concat(o.stringify(e[d],r+"["+d+"]",t,n,a,l,s)))}return u}};r.exports=function(e,r){var t,i,a=void 0===(r=r||{}).delimiter?o.delimiter:r.delimiter,l="boolean"==typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,s="boolean"==typeof r.skipNulls?r.skipNulls:o.skipNulls,c="boolean"==typeof r.encode?r.encode:o.encode,p="function"==typeof r.sort?r.sort:null;"function"==typeof r.filter?e=(i=r.filter)("",e):Array.isArray(r.filter)&&(t=i=r.filter);var u,f=[];if("object"!==n(e)||null===e)return"";u=r.arrayFormat in o.arrayPrefixGenerators?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var y=o.arrayPrefixGenerators[u];t||(t=Object.keys(e)),p&&t.sort(p);for(var b=0,d=t.length;b<d;++b){var m=t[b];s&&null===e[m]||(f=f.concat(o.stringify(e[m],m,y,l,s,c,i,p)))}return f.join(a)}}),(function(e){return t({"./utils":1684916285398}[e],e)})),r(1684916285398,(function(e,r,t){var i={};i.hexTable=new Array(256);for(var o=0;o<256;++o)i.hexTable[o]="%"+((o<16?"0":"")+o.toString(16)).toUpperCase();t.arrayToObject=function(e,r){for(var t=r.plainObjects?Object.create(null):{},n=0,i=e.length;n<i;++n)void 0!==e[n]&&(t[n]=e[n]);return t},t.merge=function(e,r,i){if(!r)return e;if("object"!==n(r))return Array.isArray(e)?e.push(r):"object"===n(e)?e[r]=!0:e=[e,r],e;if("object"!==n(e))return e=[e].concat(r);Array.isArray(e)&&!Array.isArray(r)&&(e=t.arrayToObject(e,i));for(var o=Object.keys(r),a=0,l=o.length;a<l;++a){var s=o[a],c=r[s];Object.prototype.hasOwnProperty.call(e,s)?e[s]=t.merge(e[s],c,i):e[s]=c}return e},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(r){return e}},t.encode=function(e){if(0===e.length)return e;"string"!=typeof e&&(e=""+e);for(var r="",t=0,n=e.length;t<n;++t){var o=e.charCodeAt(t);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=e[t]:o<128?r+=i.hexTable[o]:o<2048?r+=i.hexTable[192|o>>6]+i.hexTable[128|63&o]:o<55296||o>=57344?r+=i.hexTable[224|o>>12]+i.hexTable[128|o>>6&63]+i.hexTable[128|63&o]:(++t,o=65536+((1023&o)<<10|1023&e.charCodeAt(t)),r+=i.hexTable[240|o>>18]+i.hexTable[128|o>>12&63]+i.hexTable[128|o>>6&63]+i.hexTable[128|63&o])}return r},t.compact=function(e,r){if("object"!==n(e)||null===e)return e;var i=(r=r||[]).indexOf(e);if(-1!==i)return r[i];if(r.push(e),Array.isArray(e)){for(var o=[],a=0,l=e.length;a<l;++a)void 0!==e[a]&&o.push(e[a]);return o}var s=Object.keys(e);for(a=0,l=s.length;a<l;++a){var c=s[a];e[c]=t.compact(e[c],r)}return e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!=e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}}),(function(e){return t({}[e],e)})),r(1684916285399,(function(e,r,t){var n=e("./utils"),i={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1e3,strictNullHandling:!1,plainObjects:!1,allowPrototypes:!1,allowDots:!1,parseValues:function(e,r){for(var t={},i=e.split(r.delimiter,r.parameterLimit===1/0?void 0:r.parameterLimit),o=0,a=i.length;o<a;++o){var l,s,c=i[o],p=-1===c.indexOf("]=")?c.indexOf("="):c.indexOf("]=")+1;-1===p?(l=n.decode(c),s=r.strictNullHandling?null:""):(l=n.decode(c.slice(0,p)),s=n.decode(c.slice(p+1))),Object.prototype.hasOwnProperty.call(t,l)?t[l]=[].concat(t[l]).concat(s):t[l]=s}return t},parseObject:function(e,r,t){if(!e.length)return r;var n,o=e.shift();if("[]"===o)n=(n=[]).concat(i.parseObject(e,r,t));else{n=t.plainObjects?Object.create(null):{};var a="["===o[0]&&"]"===o[o.length-1]?o.slice(1,o.length-1):o,l=parseInt(a,10),s=""+l;!isNaN(l)&&o!==a&&s===a&&l>=0&&t.parseArrays&&l<=t.arrayLimit?(n=[])[l]=i.parseObject(e,r,t):n[a]=i.parseObject(e,r,t)}return n},parseKeys:function(e,r,t){if(e){t.allowDots&&(e=e.replace(/\.([^\.\[]+)/g,"[$1]"));var n=/(\[[^\[\]]*\])/g,o=/^([^\[\]]*)/.exec(e),a=[];if(o[1]){if(!t.plainObjects&&Object.prototype.hasOwnProperty(o[1])&&!t.allowPrototypes)return;a.push(o[1])}for(var l=0;null!==(o=n.exec(e))&&l<t.depth;)++l,(t.plainObjects||!Object.prototype.hasOwnProperty(o[1].replace(/\[|\]/g,""))||t.allowPrototypes)&&a.push(o[1]);return o&&a.push("["+e.slice(o.index)+"]"),i.parseObject(a,r,t)}}};r.exports=function(e,r){if((r=r||{}).delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===e||null==e)return r.plainObjects?Object.create(null):{};for(var t="string"==typeof e?i.parseValues(e,r):e,o=r.plainObjects?Object.create(null):{},a=Object.keys(t),l=0,s=a.length;l<s;++l){var c=a[l],p=i.parseKeys(c,t[c],r);o=n.merge(o,p,r)}return n.compact(o)}}),(function(e){return t({"./utils":1684916285398}[e],e)})),t(1684916285396));
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/qs/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("app.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault"),n=require("43A2F676829A079C25C49E711B4C7B70.js"),t=e(require("6A719353829A079C0C17FB54BF7D7B70.js")),i=e(require("5FA81AD3829A079C39CE72D4239C7B70.js")),r=require("BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl+"/cooperation/wap/wx_mini_update_user_login_status/",o=require("92BC1755829A079CF4DA7F52C55D7B70.js").param,s=require("840A1D64829A079CE26C7563276C7B70.js").doPoint,a=require("A9EAB7C2829A079CCF8CDFC58A3C7B70.js").appIsLogin,u=require("EB19B6E5829A079C8D7FDEE21D1D7B70.js"),c=u.sensors;(0,u.sensorsInit)(),App({globalData:{order_data:{},can_use_sub_msg:!0,fromOneYuan:!1,is_new_user:"",webviewUrl:"",problem_id:"",isPaid:!1,from_type:0,partner:"chunyu_wap_mini",platform:"weixin_mini",activityPartner:"",cell_phone:"",record_id:"",old_vertify_code:"",selected_all:"",balance:"",doctor_info:"",keyboardHeight:0,payment_order_id:"",sessionid:wx.getStorageSync("sessionid")||"",isFirstAuthorized:!1,appIsLogin:new Promise((function(e,n){a({success:function(){e()},fail:function(){n("用户未登录")}})})),launchDoPoint:function(){var e=wx.getLaunchOptionsSync();e&&e.referrerInfo&&e.referrerInfo.appId&&s("PageView",{mp_source:e.referrerInfo.appId,page_title:e.path.split("?")[0],scene:e.scene,platform_source:"chunyu_wap_mini"})},socketOpen:!1,reConnectCount:0,referrerInfo:{},isTelInquiry:!1,hide_tabbar_card:!1,isSubscribeConsultMessage:!1},onLaunch:function(e){var t=e.path,i=e.scene;!/pages\/doc_mainpage\/index/.test(t)||1047!=i&&1048!=i&&1049!=i||(this.globalData.loginSource="chunyu_mwxmini"),this.collectLaunchQuery(e),(0,n.manualLogin)().then(this.globalData.launchDoPoint),this.sensors=c,this.couldUseSucscribeMsg()},onShow:function(e){1038===e.scene&&(this.globalData.referrerInfo=e.referrerInfo),wx.getStorageSync("device_id")||wx.setStorageSync("device_id",this.guid())},collectLaunchQuery:function(e){var n,r,o;1===Number(null==e||null===(n=e.query)||void 0===n?void 0:n.output)&&"weixin"===(null==e||null===(r=e.query)||void 0===r?void 0:r.partner)&&null!=e&&null!==(o=e.query)&&void 0!==o&&o.seo_time&&(i.default.setFilterMsg("new_seo_push"),i.default.info({time:e.query.seo_time})),e&&e.query&&1===Number(e.query.service_search)&&(0,t.default)({id:"seo_weixin_service_search",hasPassed:!0,extraInfo:{path:e.path,query:e.scene}})},sendOnlineStatus:function(e){var n={from_wx_mini:1,login_status:e,partner:"chunyu_wap_mini"},t=this.globalData.sessionid;wx.request({url:r,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:t},data:o(n),method:"POST"})},getUserProfileGlobal:function(){var e=wx.getStorageSync("ProfileUserInfo");return e&&Object.keys(e).length?(e.isSuccess=!0,e):{isSuccess:!1}},onHide:function(){this.globalData.sessionid&&this.sendOnlineStatus(0),this.globalData.isFirstAuthorized=!1,this.globalData.referrerInfo={}},couldUseSucscribeMsg:function(){wx.requestSubscribeMessage||(this.globalData.can_use_sub_msg=!1)},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=16*Math.random()|0;return("x"===e?n:3&n|8).toString(16)}))},updateCheck:function(){var e=wx.getUpdateManager();e.onUpdateReady((function(){wx.showModal({title:"为您检测到最新版本",content:"点击“更新”将重新进入小程序",confirmText:"更新",success:function(n){n.confirm&&e.applyUpdate()}})}))},setWatcher:function(e,n,t){var i=this;Object.keys(t).forEach((function(r){i.observe(n,r,t[r],e)}))},observe:function(e,n,t,i){var r=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!0,set:function(e){r=e,t.call(i,e,r)},get:function(){return r}})},onPageNotFound:function(e){console.log("onPageNotFound",e),(0,t.default)({id:"page_not_found",hasPassed:!1,extraInfo:{path:e.path,query:e.query}})}});
},{isPage:false,isComponent:false,currentFile:'app.js'});require("app.js");