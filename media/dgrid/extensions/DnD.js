//>>built
define("dgrid/extensions/DnD","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/aspect dojo/on dojo/topic dojo/has dojo/dnd/Source dojo/dnd/Manager dojo/_base/NodeList put-selector/put ../Selection dojo/has!touch?../util/touch dojo/has!touch?./_DnD-touch-autoscroll xstyle/css!dojo/resources/dnd.css".split(" "),function(h,m,n,l,u,y,v,p,q,r,w,s,x,t){var k=h(q,{grid:null,getObject:function(a){var b=this.grid;return b.store.get(a.id.slice(b.id.length+5))},_legalMouseDown:function(a){return this.inherited(arguments)&&
a.target!=this.grid.bodyNode},onDrop:function(a,b,d){var e=this,c=this._targetAnchor=this.targetAnchor,g=this.grid,f=g.store;!this.before&&c&&(c=c.nextSibling);c=c&&g.row(c);l.when(c&&f.get(c.id),function(c){if(e!=a)e.onDropExternal(a,b,d,c);else e.onDropInternal(b,d,c)})},onDropInternal:function(a,b,d){var e=this.grid,c=e.store,g=this,f=g._targetAnchor,h;f&&(h=this.before?f.previousSibling:f.nextSibling);f=e.row(a[0]);(b||!(h===a[0]||!d&&f&&e.down(f).element==a[0]))&&a.forEach(function(a){l.when(g.getObject(a),
function(a){var f=c.getIdentity(a);c[b&&c.copy?"copy":"put"](a,{before:d});g._selectedNodes[f]&&(g._selectedNodes[f]=e.row(f).element)})})},onDropExternal:function(a,b,d,e){var c=this.grid.store,g=a.grid;b.forEach(function(b,h){l.when(a.getObject(b),function(k){d||(g?l.when(g.store.getIdentity(k),function(e){!h&&a.selectNone();a.delItem(b.id);g.store.remove(e)}):a.deleteSelectedNodes());c[c.copy?"copy":"put"](k,{before:e})})})},onDndStart:function(a,b,d){this.inherited(arguments);a==this&&(this.grid.cancelTouchScroll&&
this.grid.cancelTouchScroll(),r.manager().avatar.node.style.width=this.grid.domNode.offsetWidth/2+"px")},onMouseDown:function(a){p("touch")&&this.isDragging&&1<t.countCurrentTouches(a,this.grid.touchNode)?(v.publish("/dnd/cancel"),r.manager().stopDrag()):this.inherited(arguments)},onMouseMove:function(a){(!p("touch")||1>=t.countCurrentTouches(a,this.grid.touchNode))&&this.inherited(arguments)},checkAcceptance:function(a,b){return a.getObject&&q.prototype.checkAcceptance.apply(this,arguments)},getSelectedNodes:function(){if(!this.grid.selection)return this.inherited(arguments);
var a=new w,b;for(b in this.grid.selection)a.push(this._selectedNodes[b]);return a}});h=h(x,{dndSourceType:"dgrid-row",dndParams:null,dndConstructor:k,postMixInProperties:function(){this.inherited(arguments);this.dndParams=m.mixin({accept:[this.dndSourceType]},this.dndParams)},postCreate:function(){function a(a){d[a.id]=a.element}function b(a){delete d[a.id];s(a.element,"!dojoDndItemSelected!dojoDndItemAnchor")}this.inherited(arguments);this.dndSource=new (this.dndConstructor||k)(this.bodyNode,m.mixin(this.dndParams,
{grid:this,dropParent:this.contentNode}));var d=this.dndSource._selectedNodes={};this.on("dgrid-select",function(b){n.forEach(b.rows,a)});this.on("dgrid-deselect",function(a){n.forEach(a.rows,b)});u.after(this,"destroy",function(){delete this.dndSource._selectedNodes;d=null;this.dndSource.destroy()},!0)},insertRow:function(a){var b=this.inherited(arguments),d="function"==typeof this.getObjectDndType?this.getObjectDndType(a):[this.dndSourceType];s(b,".dojoDndItem");this.dndSource.setItem(b.id,{data:a,
type:d instanceof Array?d:[d]});return b},removeRow:function(a){this.dndSource.delItem(this.row(a));this.inherited(arguments)}});h.GridSource=k;return h});
//# sourceMappingURL=DnD.js.map