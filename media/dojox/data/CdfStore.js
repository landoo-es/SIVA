//>>built
define("dojox/data/CdfStore",["dojo","dojox","dojo/data/util/sorter"],function(h,k){k.data.ASYNC_MODE=0;k.data.SYNC_MODE=1;return h.declare("dojox.data.CdfStore",null,{identity:"jsxid",url:"",xmlStr:"",data:null,label:"",mode:k.data.ASYNC_MODE,constructor:function(a){a&&(this.url=a.url,this.xmlStr=a.xmlStr||a.str,a.data&&(this.xmlStr=this._makeXmlString(a.data)),this.identity=a.identity||this.identity,this.label=a.label||this.label,this.mode=void 0!==a.mode?a.mode:this.mode);this._modifiedItems={};
this.byId=this.fetchItemByIdentity},getValue:function(a,b,c){return a.getAttribute(b)||c},getValues:function(a,b){var c=this.getValue(a,b,[]);return h.isArray(c)?c:[c]},getAttributes:function(a){return a.getAttributeNames()},hasAttribute:function(a,b){return void 0!==this.getValue(a,b)},hasProperty:function(a,b){return this.hasAttribute(a,b)},containsValue:function(a,b,c){a=this.getValues(a,b);for(b=0;b<a.length;b++)if(null!==a[b])if("string"===typeof c){if(a[b].toString&&a[b].toString()===c)return!0}else if(a[b]===
c)return!0;return!1},isItem:function(a){return a.getClass&&a.getClass().equals(jsx3.xml.Entity.jsxclass)?!0:!1},isItemLoaded:function(a){return this.isItem(a)},loadItem:function(a){},getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Write":!0,"dojo.data.api.Identity":!0}},getLabel:function(a){if(""!==this.label&&this.isItem(a)&&(a=this.getValue(a,this.label)))return a.toString()},getLabelAttributes:function(a){return""!==this.label?[this.label]:null},fetch:function(a){a=a||{};a.store||
(a.store=this);void 0!==a.mode&&(this.mode=a.mode);var b=this,c=function(b){a.onError&&a.onError.call(a.scope||h.global,b,a)},g=function(c,d){d=d||a;var e=d.abort||null,f=!1,g=d.start?d.start:0,k=d.count&&Infinity!==d.count?g+d.count:c.length;d.abort=function(){f=!0;e&&e.call(d)};var m=d.scope||h.global;d.store||(d.store=b);d.onBegin&&d.onBegin.call(m,c.length,d);d.sort&&c.sort(h.data.util.sorter.createSortFunction(d.sort,b));if(d.onItem)for(var l=g;l<c.length&&l<k;++l){var n=c[l];f||d.onItem.call(m,
n,d)}d.onComplete&&!f?(d.onItem||(c=c.slice(g,k),d.byId&&(c=c[0])),d.onComplete.call(m,c,d)):(c=c.slice(g,k),d.byId&&(c=c[0]));return c};if(!this.url&&!this.data&&!this.xmlStr)return c(Error("No URL or data specified.")),!1;var f=a||"*";if(this.mode==k.data.SYNC_MODE){var e=this._loadCDF();if(e instanceof Error)return a.onError&&a.onError.call(a.scope||h.global,e,a),e;this.cdfDoc=e;return e=(e=this._getItems(this.cdfDoc,f))&&0<e.length?g(e,a):g([],a)}e=this._loadCDF();e.addCallbacks(h.hitch(this,
function(c){(c=this._getItems(this.cdfDoc,f))&&0<c.length?g(c,a):g([],a)}),h.hitch(this,function(b){c(b,a)}));return e},_loadCDF:function(){var a=new h.Deferred;if(this.cdfDoc){if(this.mode==k.data.SYNC_MODE)return this.cdfDoc;setTimeout(h.hitch(this,function(){a.callback(this.cdfDoc)}),0);return a}this.cdfDoc=jsx3.xml.CDF.Document.newDocument();this.cdfDoc.subscribe("response",this,function(b){a.callback(this.cdfDoc)});this.cdfDoc.subscribe("error",this,function(b){a.errback(b)});this.cdfDoc.setAsync(!this.mode);
if(this.url)this.cdfDoc.load(this.url);else if(this.xmlStr&&(this.cdfDoc.loadXML(this.xmlStr),this.cdfDoc.getError().code))return Error(this.cdfDoc.getError().description);return this.mode==k.data.SYNC_MODE?this.cdfDoc:a},_getItems:function(a,b){for(var c=a.selectNodes(b.query,!1,1),g=[];c.hasNext();)g.push(c.next());return g},close:function(a){},newItem:function(a,b){a=a||{};a.tagName&&delete a.tagName;a.jsxid=a.jsxid||this.cdfDoc.getKey();this.isItem(b)&&(b=this.getIdentity(b));var c=this.cdfDoc.insertRecord(a,
b);this._makeDirty(c);return c},deleteItem:function(a){this.cdfDoc.deleteRecord(this.getIdentity(a));this._makeDirty(a);return!0},setValue:function(a,b,c){this._makeDirty(a);a.setAttribute(b,c);return!0},setValues:function(a,b,c){this._makeDirty(a);return a.setAttribute(b,c)},unsetAttribute:function(a,b){this._makeDirty(a);a.removeAttribute(b);return!0},revert:function(){delete this.cdfDoc;this._modifiedItems={};return!0},isDirty:function(a){if(a)return!!this._modifiedItems[this.getIdentity(a)];a=
!1;for(var b in this._modifiedItems){a=!0;break}return a},_makeDirty:function(a){var b=this.getIdentity(a);this._modifiedItems[b]=a},_makeXmlString:function(a){var b=function(a,g){var f="",e;if(h.isArray(a))for(e=0;e<a.length;e++)f+=b(a[e],g);else if(h.isObject(a)){f+="\x3c"+g+" ";for(e in a)h.isObject(a[e])||(f+=e+'\x3d"'+a[e]+'" ');f+="\x3e";for(e in a)h.isObject(a[e])&&(f+=b(a[e],e));f+="\x3c/"+g+"\x3e"}return f};return b(a,"data")},getIdentity:function(a){return this.getValue(a,this.identity)},
getIdentityAttributes:function(a){return[this.identity]},fetchItemByIdentity:function(a){h.isString(a)?a={query:"//record[@jsxid\x3d'"+a+"']",mode:k.data.SYNC_MODE}:(a&&(a.query="//record[@jsxid\x3d'"+a.identity+"']"),a.mode||(a.mode=this.mode));a.byId=!0;return this.fetch(a)},byId:function(a){}})});
//# sourceMappingURL=CdfStore.js.map