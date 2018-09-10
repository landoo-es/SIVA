//>>built
define("dgrid/ColumnSet","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/on dojo/aspect dojo/query dojo/has ./util/misc put-selector/put xstyle/has-class ./Grid dojo/_base/sniff xstyle/css!./css/columnset.css".split(" "),function(x,y,z,A,p,q,n,h,r,l,B,F){function C(c,d){function a(){n(".dgrid-column-set",d).forEach(function(a){a.scrollLeft=b[a.getAttribute(g)]})}var b=c._columnSetScrollLefts;8>h("ie")||h("quirks")?setTimeout(a,1):a()}h.add("event-mousewheel",function(c,
d,a){return"undefined"!==typeof a.onmousewheel});h.add("event-wheel",function(c,d,a){c=!1;try{WheelEvent("wheel"),c=!0}catch(b){}return c});var g="data-dgrid-column-set-id";B("safari","ie-7");var D=h("event-mousewheel")||h("event-wheel")?function(c){return function(d,a){return p(d,h("event-wheel")?"wheel":"mousewheel",function(b){var e=b.target;1!==e.nodeType&&(e=e.parentNode);for(;!n.matches(e,".dgrid-column-set["+g+"]",d);)if(e===d||!(e=e.parentNode))return;(b=b.deltaX||-b.wheelDeltaX/3)&&a.call(null,
c,e,b)})}}:function(c){return function(d,a){return p(d,".dgrid-column-set["+g+"]:MozMousePixelScroll",function(b){1===b.axis&&a.call(null,c,this,b.detail)})}};return y(null,{postCreate:function(){var c=this;this.inherited(arguments);this.on(D(this),function(d,a,b){a=a.getAttribute(g);d=d._columnSetScrollers[a];b=d.scrollLeft+b;d.scrollLeft=0>b?0:b});this.on(".dgrid-column-set:dgrid-cellfocusin",function(d){c._onColumnSetCellFocus(d,this)})},columnSets:[],createRowCells:function(c,d,a,b){for(var e=
l("table.dgrid-row-table"),h=l(e,"tbody tr"),f=0,k=this.columnSets.length;f<k;f++){var E=l(h,c+".dgrid-column-set-cell.dgrid-column-set-"+f+" div.dgrid-column-set["+g+"\x3d"+f+"]"),m;m=a||this.subRows;if(!m||!m.length)m=void 0;else{for(var n=[],p=f+"-",s=0,q=m.length;s<q;s++){var t=m[s],u=[];u.className=t.className;for(var v=0,r=t.length;v<r;v++){var w=t[v];null!=w.id&&0===w.id.indexOf(p)&&u.push(w)}n.push(u)}m=n}E.appendChild(this.inherited(arguments,[c,d,m||this.columnSets[f],b]))}return e},renderArray:function(){var c=
this,d=this.inherited(arguments);A.when(d,function(a){for(var b=0;b<a.length;b++)C(c,a[b])});return d},renderHeader:function(){function c(){b._positionScrollers()}this.inherited(arguments);var d=this.columnSets,a=this._columnSetScrollers;this._columnSetScrollerContents={};this._columnSetScrollLefts={};var b=this,e;if(a)for(e in a)l(a[e],"!");else q.after(this,"resize",c,!0),q.after(this,"styleColumn",c,!0),this._columnSetScrollerNode=l(this.footerNode,"+div.dgrid-column-set-scroller-container");a=
this._columnSetScrollers={};e=0;for(a=d.length;e<a;e++)this._putScroller(d[e],e);this._positionScrollers()},styleColumnSet:function(c,d){var a=this.addCssRule("#"+r.escapeCssIdentifier(this.domNode.id)+" .dgrid-column-set-"+r.escapeCssIdentifier(c,"-"),d);this._positionScrollers();return a},_destroyColumns:function(){var c=this.columnSets.length,d,a,b,e,h,f,k,g;for(d=0;d<c;d++){f=this.columnSets[d];a=0;for(e=f.length;a<e;a++){k=f[a];b=0;for(h=k.length;b<h;b++)g=k[b],"function"===typeof g.destroy&&
g.destroy()}}this.inherited(arguments)},configStructure:function(){this.columns={};this.subRows=[];for(var c=0,d=this.columnSets.length;c<d;c++)for(var a=this.columnSets[c],b=0;b<a.length;b++)a[b]=this._configColumns(c+"-"+b+"-",a[b]);this.inherited(arguments)},_positionScrollers:function(){var c=this.domNode,d=this._columnSetScrollers,a=this._columnSetScrollerContents,b=this.columnSets,e=0,l=0,f,k;f=0;for(b=b.length;f<b;f++)k=n(".dgrid-column-set["+g+'\x3d"'+f+'"]',c)[0],e=k.offsetWidth,k=k.firstChild.offsetWidth,
a[f].style.width=k+"px",d[f].style.width=e+"px",9>h("ie")&&(d[f].style.overflowX=k>e?"scroll":"auto"),k>e&&l++;this._columnSetScrollerNode.style.bottom=this.showFooter?this.footerNode.offsetHeight+"px":"0";this.bodyNode.style.bottom=l?h("dom-scrollbar-height")+(h("ie")?1:0)+"px":"0"},_putScroller:function(c,d){var a=this._columnSetScrollers[d]=l(this._columnSetScrollerNode,"span.dgrid-column-set-scroller.dgrid-column-set-scroller-"+d+"["+g+"\x3d"+d+"]");this._columnSetScrollerContents[d]=l(a,"div.dgrid-column-set-scroller-content");
p(a,"scroll",z.hitch(this,"_onColumnSetScroll"))},_onColumnSetScroll:function(c){var d=c.target.scrollLeft;c=c.target.getAttribute(g);var a;this._columnSetScrollLefts[c]!=d&&(n(".dgrid-column-set["+g+'\x3d"'+c+'"],.dgrid-column-set-scroller['+g+'\x3d"'+c+'"]',this.domNode).forEach(function(b,c){b.scrollLeft=d;c||(a=b.scrollLeft)}),this._columnSetScrollLefts[c]=a)},_setColumnSets:function(c){this._destroyColumns();this.columnSets=c;this._updateColumns()},setColumnSets:function(c){x.deprecated("setColumnSets(...)",
'use set("columnSets", ...) instead',"dgrid 0.4");this.set("columnSets",c)},_onColumnSetCellFocus:function(c,d){var a=c.target,b=d.getAttribute(g),b=this._columnSetScrollers[b];if(a.offsetLeft-b.scrollLeft+a.offsetWidth>d.offsetWidth||b.scrollLeft>a.offsetLeft)a=a.offsetLeft,b=d.getAttribute(g),this._columnSetScrollers[b].scrollLeft=0>a?0:a}})});
//# sourceMappingURL=ColumnSet.js.map