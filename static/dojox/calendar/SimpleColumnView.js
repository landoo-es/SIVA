//>>built
require({cache:{"url:dojox/calendar/templates/ColumnView.html":'\x3cdiv data-dojo-attach-events\x3d"keydown:_onKeyDown"\x3e\n\t\n\t\x3cdiv data-dojo-attach-point\x3d"header" class\x3d"dojoxCalendarHeader"\x3e\n\t\t\x3cdiv class\x3d"dojoxCalendarYearColumnHeader" data-dojo-attach-point\x3d"yearColumnHeader"\x3e\n\t\t\t\x3ctable cellspacing\x3d"0" cellpadding\x3d"0"\x3e\x3ctr\x3e\x3ctd\x3e\x3cspan data-dojo-attach-point\x3d"yearColumnHeaderContent"\x3e\x3c/span\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\t\t\n\t\t\x3c/div\x3e\n\t\t\x3cdiv data-dojo-attach-point\x3d"columnHeader" class\x3d"dojoxCalendarColumnHeader"\x3e\n\t\t\t\x3ctable data-dojo-attach-point\x3d"columnHeaderTable" class\x3d"dojoxCalendarColumnHeaderTable" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3c/table\x3e\n\t\t\x3c/div\x3e\n\t\x3c/div\x3e\n\t\n\t\x3cdiv data-dojo-attach-point\x3d"secondarySheetNode"\x3e\x3c/div\x3e\n\t\n\t\x3cdiv data-dojo-attach-point\x3d"subHeader" class\x3d"dojoxCalendarSubHeader"\x3e\n\t\t\x3cdiv class\x3d"dojoxCalendarSubRowHeader"\x3e\n\t\t\t\x3ctable cellspacing\x3d"0" cellpadding\x3d"0"\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\t\t\n\t\t\x3c/div\x3e\n\t\t\x3cdiv data-dojo-attach-point\x3d"subColumnHeader" class\x3d"dojoxCalendarSubColumnHeader"\x3e\n\t\t\t\x3ctable data-dojo-attach-point\x3d"subColumnHeaderTable" class\x3d"dojoxCalendarSubColumnHeaderTable" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3c/table\x3e\n\t\t\x3c/div\x3e\n\t\x3c/div\x3e\n\t\n\t\x3cdiv data-dojo-attach-point\x3d"scrollContainer" class\x3d"dojoxCalendarScrollContainer"\x3e\n\t\t\x3cdiv data-dojo-attach-point\x3d"sheetContainer" style\x3d"position:relative;left:0;right:0;margin:0;padding:0"\x3e\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"rowHeader" class\x3d"dojoxCalendarRowHeader"\x3e\n\t\t\t\t\x3ctable data-dojo-attach-point\x3d"rowHeaderTable" class\x3d"dojoxCalendarRowHeaderTable" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3c/table\x3e\n\t\t\t\x3c/div\x3e\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"grid" class\x3d"dojoxCalendarGrid"\x3e\n\t\t\t\t\x3ctable data-dojo-attach-point\x3d"gridTable" class\x3d"dojoxCalendarGridTable" cellpadding\x3d"0" cellspacing\x3d"0" style\x3d"width:100%"\x3e\x3c/table\x3e\n\t\t\t\x3c/div\x3e\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"itemContainer" class\x3d"dojoxCalendarContainer" data-dojo-attach-event\x3d"mousedown:_onGridMouseDown,mouseup:_onGridMouseUp,ondblclick:_onGridDoubleClick,touchstart:_onGridTouchStart,touchmove:_onGridTouchMove,touchend:_onGridTouchEnd"\x3e\n\t\t\t\t\x3ctable data-dojo-attach-point\x3d"itemContainerTable" class\x3d"dojoxCalendarContainerTable" cellpadding\x3d"0" cellspacing\x3d"0" style\x3d"width:100%"\x3e\x3c/table\x3e\n\t\t\t\x3c/div\x3e\n\t\t\x3c/div\x3e \n\t\x3c/div\x3e\n\t\n\t\x3cdiv data-dojo-attach-point\x3d"vScrollBar" class\x3d"dojoxCalendarVScrollBar"\x3e\n\t\t\x3cdiv data-dojo-attach-point\x3d"vScrollBarContent" style\x3d"visibility:hidden;position:relative;width:1px;height:1px;" \x3e\x3c/div\x3e\n\t\x3c/div\x3e\n\t\n\t\x3cdiv data-dojo-attach-point\x3d"hScrollBar" class\x3d"dojoxCalendarHScrollBar"\x3e\n\t\t\x3cdiv data-dojo-attach-point\x3d"hScrollBarContent" style\x3d"visibility:hidden;position:relative;width:1px;height:1px;" \x3e\x3c/div\x3e\n\t\x3c/div\x3e\n\t\n\x3c/div\x3e\n'}});
define("dojox/calendar/SimpleColumnView","./ViewBase dijit/_TemplatedMixin ./_ScrollBarBase dojo/text!./templates/ColumnView.html dojo/_base/declare dojo/_base/event dojo/_base/lang dojo/_base/array dojo/_base/sniff dojo/_base/fx dojo/_base/html dojo/on dojo/dom dojo/dom-class dojo/dom-style dojo/dom-geometry dojo/dom-construct dojo/mouse dojo/query dojox/html/metrics".split(" "),function(B,C,y,D,E,s,q,w,x,F,z,t,I,k,n,u,p,G,l,H){return E("dojox.calendar.SimpleColumnView",[B,C],{baseClass:"dojoxCalendarColumnView",
templateString:D,viewKind:"columns",_setTabIndexAttr:"domNode",renderData:null,startDate:null,columnCount:7,subColumns:null,minHours:8,maxHours:18,hourSize:100,timeSlotDuration:15,rowHeaderGridSlotDuration:60,rowHeaderLabelSlotDuration:60,rowHeaderLabelOffset:2,rowHeaderFirstLabelOffset:2,verticalRenderer:null,verticalDecorationRenderer:null,minColumnWidth:-1,percentOverlap:70,horizontalGap:4,_showSecondarySheet:!1,_columnHeaderHandlers:null,constructor:function(){this.invalidatingProperties="columnCount startDate minHours maxHours hourSize verticalRenderer verticalDecorationRenderer rowHeaderTimePattern columnHeaderDatePattern timeSlotDuration rowHeaderGridSlotDuration rowHeaderLabelSlotDuration rowHeaderLabelOffset rowHeaderFirstLabelOffset percentOverlap horizontalGap scrollBarRTLPosition itemToRendererKindFunc layoutPriorityFunction formatItemTimeFunc textDir items subColumns minColumnWidth".split(" ");
this._columnHeaderHandlers=[]},destroy:function(a){this._cleanupColumnHeader();this.scrollBar&&this.scrollBar.destroy(a);this.inherited(arguments)},_scrollBar_onScroll:function(a){this._setScrollPosition(a)},_hscrollBar_onScroll:function(a){this._setHScrollPosition(a)},buildRendering:function(){this.inherited(arguments);this.vScrollBar&&(this.scrollBar=new y({content:this.vScrollBarContent},this.vScrollBar),this.scrollBar.on("scroll",q.hitch(this,this._scrollBar_onScroll)));this.hScrollBar&&(this.hScrollBarW=
new y({content:this.hScrollBarContent,direction:"horizontal",value:0},this.hScrollBar),this.hScrollBarW.on("scroll",q.hitch(this,this._hscrollBar_onScroll)),this._hScrollNodes=[this.columnHeaderTable,this.subColumnHeaderTable,this.gridTable,this.itemContainerTable]);this._viewHandles.push(t(this.scrollContainer,G.wheel,dojo.hitch(this,this._mouseWheelScrollHander)))},postscript:function(){this.inherited(arguments);this._initialized=!0;this.invalidRendering||this.refreshRendering()},_setVerticalRendererAttr:function(a){this._destroyRenderersByKind("vertical");
this._set("verticalRenderer",a)},_createRenderData:function(){var a={};a.minHours=this.get("minHours");a.maxHours=this.get("maxHours");a.hourSize=this.get("hourSize");a.hourCount=a.maxHours-a.minHours;a.slotDuration=this.get("timeSlotDuration");a.rowHeaderGridSlotDuration=this.get("rowHeaderGridSlotDuration");a.slotSize=Math.ceil(a.hourSize/(60/a.slotDuration));a.hourSize=a.slotSize*(60/a.slotDuration);a.sheetHeight=a.hourSize*a.hourCount;this._rowHeaderWidth||(this._rowHeaderWidth=u.getMarginBox(this.rowHeader).w);
a.rowHeaderWidth=this._rowHeaderWidth;var c=H.getScrollbar();a.scrollbarWidth=c.w+1;a.scrollbarHeight=c.h+1;a.dateLocaleModule=this.dateLocaleModule;a.dateClassObj=this.dateClassObj;a.dateModule=this.dateModule;a.dates=[];a.columnCount=this.get("columnCount");a.subColumns=this.get("subColumns");a.subColumnCount=a.subColumns?a.subColumns.length:1;a.hScrollPaneWidth=u.getMarginBox(this.grid).w;a.minSheetWidth=0>this.minColumnWidth?-1:this.minColumnWidth*a.subColumnCount*a.columnCount;a.hScrollBarEnabled=
0<this.minColumnWidth&&a.hScrollPaneWidth<a.minSheetWidth;c=this.get("startDate");null==c&&(c=new a.dateClassObj);this.startDate=c=this.floorToDay(c,!1,a);for(var b=0;b<a.columnCount;b++)a.dates.push(c),c=this.addAndFloor(c,"day",1);a.startTime=new a.dateClassObj(a.dates[0]);a.startTime.setHours(a.minHours);a.endTime=new a.dateClassObj(a.dates[a.columnCount-1]);a.endTime.setHours(a.maxHours);this.displayedItemsInvalidated&&!this._isEditing?a.items=this.storeManager._computeVisibleItems(a):this.renderData&&
(a.items=this.renderData.items);this.displayedDecorationItemsInvalidated?a.decorationItems=this.decorationStoreManager._computeVisibleItems(a):this.renderData&&(a.decorationItems=this.renderData.decorationItems);return a},_validateProperties:function(){this.inherited(arguments);var a=this.minHours;if(0>a||23<a||isNaN(a))this.minHours=0;a=this.maxHours;if(1>a||36<a||isNaN(a))this.minHours=36;this.minHours>this.maxHours&&(a=this.maxHours,this.maxHours=this.minHours,this.minHours=a);1>this.maxHours-
this.minHours&&(this.minHours=0,this.maxHours=24);if(1>this.columnCount||isNaN(this.columnCount))this.columnCount=1;a=this.percentOverlap;if(0>a||100<a||isNaN(a))this.percentOverlap=70;if(5>this.hourSize||isNaN(this.hourSize))this.hourSize=10;a=this.timeSlotDuration;if(1>a||60<a||isNaN(a))this.timeSlotDuration=15},_setStartDateAttr:function(a){this.displayedItemsInvalidated=!0;this._set("startDate",a)},_setColumnCountAttr:function(a){this.displayedItemsInvalidated=!0;this._set("columnCount",a)},__fixEvt:function(a){a.sheet=
"primary";a.source=this;return a},rowHeaderTimePattern:null,_formatRowHeaderLabel:function(a){return this.renderData.dateLocaleModule.format(a,{selector:"time",timePattern:this.rowHeaderTimePattern})},columnHeaderDatePattern:null,_formatColumnHeaderLabel:function(a){return this.renderData.dateLocaleModule.format(a,{selector:"date",datePattern:this.columnHeaderDatePattern,formatLength:"medium"})},startTimeOfDay:null,scrollBarRTLPosition:"left",_getStartTimeOfDay:function(){var a=(this.get("maxHours")-
this.get("minHours"))*this._getScrollPosition()/this.renderData.sheetHeight;return{hours:this.renderData.minHours+Math.floor(a),minutes:60*(a-Math.floor(a))}},_getEndTimeOfDay:function(){var a=(this.get("maxHours")-this.get("minHours"))*(this._getScrollPosition()+this.scrollContainer.offsetHeight)/this.renderData.sheetHeight;return{hours:this.renderData.minHours+Math.floor(a),minutes:60*(a-Math.floor(a))}},startTimeOfDay:0,_setStartTimeOfDayAttr:function(a){this.renderData?this._setStartTimeOfDay(a.hours,
a.minutes,a.duration,a.easing):this._startTimeOfDayInvalidated=!0;this._set("startTimeOfDay",a)},_getStartTimeOfDayAttr:function(){return this.renderData?this._getStartTimeOfDay():this._get("startTimeOfDay")},_setStartTimeOfDay:function(a,c,b,d){var e=this.renderData;a=a||e.minHours;c=c||0;b=b||0;0>c?c=0:59<c&&(c=59);0>a?a=0:a>e.maxHours&&(a=e.maxHours);a=60*a+c;c=60*e.minHours;var g=60*e.maxHours;a<c?a=c:a>g&&(a=g);a=(a-c)*e.sheetHeight/(g-c);a=Math.min(e.sheetHeight-this.scrollContainer.offsetHeight,
a);this._scrollToPosition(a,b,d)},_scrollToPosition:function(a,c,b){if(c){this._scrollAnimation&&this._scrollAnimation.stop();var d=this._getScrollPosition();c=Math.abs((a-d)*c/this.renderData.sheetHeight);this._scrollAnimation=new F.Animation({curve:[d,a],duration:c,easing:b,onAnimate:q.hitch(this,function(a){this._setScrollImpl(a)})});this._scrollAnimation.play()}else this._setScrollImpl(a)},_setScrollImpl:function(a){this._setScrollPosition(a);this.scrollBar&&this.scrollBar.set("value",a)},ensureVisibility:function(a,
c,b,d,e){d=void 0==d?this.renderData.slotDuration:d;if(this.scrollable&&this.autoScroll){a=60*a.getHours()+a.getMinutes()-d;c=60*c.getHours()+c.getMinutes()+d;d=this._getStartTimeOfDay();var g=this._getEndTimeOfDay();d=60*d.hours+d.minutes;var g=60*g.hours+g.minutes,f=!1,h=null;switch(b){case "start":f=a>=d&&a<=g;h=a;break;case "end":f=c>=d&&c<=g;h=c-(g-d);break;case "both":f=a>=d&&c<=g,h=a}f||this._setStartTimeOfDay(Math.floor(h/60),h%60,e)}},scrollView:function(a){var c=this._getStartTimeOfDay(),
c=60*c.hours+c.minutes+a*this.timeSlotDuration;this._setStartTimeOfDay(Math.floor(c/60),c%60)},scrollViewHorizontal:function(a){this._setHScrollPosition(this._getHScrollPosition()+a*this.minColumnWidth);this.hScrollBarW&&this.hScrollBarW.set("value",this._getHScrollPosition())},_hScrollNodes:null,_setHScrollPositionImpl:function(a,c,b){var d=c?null:"translateX(-"+a+"px)";w.forEach([this.columnHeaderTable,this.subColumnHeaderTable,this.gridTable,this.itemContainerTable],function(e){c?(e.scrollLeft=
a,n.set(e,"left",-a+"px")):n.set(e,b,d)},this)},_mouseWheelScrollHander:function(a){this.renderData.hScrollBarEnabled&&a.altKey?this.scrollViewHorizontal(0<a.wheelDelta?-1:1):this.scrollView(0<a.wheelDelta?-1:1);s.stop(a)},refreshRendering:function(){if(this._initialized){this._validateProperties();var a=this.renderData,c=this._createRenderData();this.renderData=c;this._createRendering(c,a);this._layoutDecorationRenderers(c);this._layoutRenderers(c)}},_createRendering:function(a,c){n.set(this.sheetContainer,
"height",a.sheetHeight+"px");this._configureVisibleParts(a);this._configureScrollBar(a);this._buildColumnHeader(a,c);this._buildSubColumnHeader(a,c);this._buildRowHeader(a,c);this._buildGrid(a,c);this._buildItemContainer(a,c);this._layoutTimeIndicator(a);this._commitProperties(a)},_configureVisibleParts:function(a){this.secondarySheetNode&&n.set(this.secondarySheetNode,"display",this._showSecondarySheet?"block":"none");k[null==this.subColumns?"remove":"add"](this.domNode,"subColumns");k[this._showSecondarySheet?
"add":"remove"](this.domNode,"secondarySheet")},_commitProperties:function(a){this._startTimeOfDayInvalidated&&(this._startTimeOfDayInvalidated=!1,a=this.startTimeOfDay,null!=a&&this._setStartTimeOfDay(a.hours,void 0==a.minutes?0:a.minutes))},_configureScrollBar:function(a){x("ie")&&this.scrollBar&&n.set(this.vScrollBar,"width",a.scrollbarWidth+1+"px");var c=this.isLeftToRight()?!0:"right"==this.scrollBarRTLPosition,b=c?"right":"left",d=c?"left":"right";this.scrollBar&&(this.scrollBar.set("maximum",
a.sheetHeight),n.set(this.vScrollBar,b,0),n.set(this.vScrollBar,c?"left":"right","auto"),n.set(this.vScrollBar,"bottom",a.hScrollBarEnabled?a.scrollbarHeight+"px":"0"));n.set(this.scrollContainer,b,a.scrollbarWidth+"px");n.set(this.scrollContainer,d,"0");n.set(this.header,b,a.scrollbarWidth+"px");n.set(this.header,d,"0");n.set(this.subHeader,b,a.scrollbarWidth+"px");n.set(this.subHeader,d,"0");this.buttonContainer&&(null!=this.owner&&this.owner.currentView==this)&&(n.set(this.buttonContainer,b,a.scrollbarWidth+
"px"),n.set(this.buttonContainer,d,"0"));this.hScrollBar&&(w.forEach(this._hScrollNodes,function(b){k[a.hScrollBarEnabled?"add":"remove"](b.parentNode,"dojoxCalendarHorizontalScroll")},this),a.hScrollBarEnabled||(this._setHScrollPosition(0),this.hScrollBarW.set("value",0)),n.set(this.hScrollBar,{display:a.hScrollBarEnabled?"block":"none",height:a.scrollbarHeight+"px",left:(c?a.rowHeaderWidth:a.scrollbarWidth)+"px",right:(c?a.scrollbarWidth:a.rowHeaderWidth)+"px"}),n.set(this.scrollContainer,"bottom",
a.hScrollBarEnabled?a.scrollbarHeight+1+"px":"0"),this._configureHScrollDomNodes(a.hScrollBarEnabled?a.minSheetWidth+"px":"100%"),this.hScrollBarW.set("maximum",a.minSheetWidth),this.hScrollBarW.set("containerSize",a.hScrollPaneWidth))},_configureHScrollDomNodes:function(a){w.forEach(this._hScrollNodes,function(c){n.set(c,"width",a)},this)},resize:function(a){this._resizeHandler(a)},_resizeHandler:function(a,c){var b=this.renderData;if(null!=b)if(c){var d=u.getMarginBox(this.grid).w;b.hScrollPaneWidth!=
d&&(b.hScrollPaneWidth=d,b.minSheetWidth=0>this.minColumnWidth?-1:this.minColumnWidth*b.subColumnCount*b.columnCount,b.hScrollBarEnabled=0<this.minColumnWidth&&u.getMarginBox(this.grid).w<b.minSheetWidth);this._configureScrollBar(b)}else void 0!=this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(q.hitch(this,function(){this._resizeHandler(a,!0)}),100)},_columnHeaderClick:function(a){s.stop(a);var c=l("td",this.columnHeaderTable).indexOf(a.currentTarget);this._onColumnHeaderClick({index:c,
date:this.renderData.dates[c],triggerEvent:a})},_buildColumnHeader:function(a,c){var b=this.columnHeaderTable;if(b){var d=a.columnCount-(c?c.columnCount:0);8==x("ie")&&(null==this._colTableSave?this._colTableSave=q.clone(b):0>d&&(this._cleanupColumnHeader(),this.columnHeader.removeChild(b),p.destroy(b),this.columnHeaderTable=b=q.clone(this._colTableSave),this.columnHeader.appendChild(b),d=a.columnCount));var e=l("tbody",b),g=l("tr",b),f,e=1==e.length?e[0]:z.create("tbody",null,b),g=1==g.length?g[0]:
p.create("tr",null,e);if(0<d)for(e=0;e<d;e++){f=p.create("td",null,g);var h=[];h.push(t(f,"click",q.hitch(this,this._columnHeaderClick)));x("touch-events")?(h.push(t(f,"touchstart",function(a){s.stop(a);k.add(a.currentTarget,"Active")})),h.push(t(f,"touchend",function(a){s.stop(a);k.remove(a.currentTarget,"Active")}))):(h.push(t(f,"mousedown",function(a){s.stop(a);k.add(a.currentTarget,"Active")})),h.push(t(f,"mouseup",function(a){s.stop(a);k.remove(a.currentTarget,"Active")})),h.push(t(f,"mouseover",
function(a){s.stop(a);k.add(a.currentTarget,"Hover")})),h.push(t(f,"mouseout",function(a){s.stop(a);k.remove(a.currentTarget,"Hover")})));this._columnHeaderHandlers.push(h)}else{d=-d;for(e=0;e<d;e++){f=g.lastChild;g.removeChild(f);p.destroy(f);for(f=this._columnHeaderHandlers.pop();0<f.length;)f.pop().remove()}}l("td",b).forEach(function(b,c){b.className="";0==c?k.add(b,"first-child"):c==this.renderData.columnCount-1&&k.add(b,"last-child");var d=a.dates[c];this._setText(b,this._formatColumnHeaderLabel(d));
this.styleColumnHeaderCell(b,d,a)},this);this.yearColumnHeaderContent&&this._setText(this.yearColumnHeaderContent,a.dateLocaleModule.format(a.dates[0],{selector:"date",datePattern:"yyyy"}))}},_cleanupColumnHeader:function(){for(;0<this._columnHeaderHandlers.length;)for(var a=this._columnHeaderHandlers.pop();0<a.length;)a.pop().remove()},styleColumnHeaderCell:function(a,c,b){k.add(a,this._cssDays[c.getDay()]);this.isToday(c)?k.add(a,"dojoxCalendarToday"):this.isWeekEnd(c)&&k.add(a,"dojoxCalendarWeekend")},
_buildSubColumnHeader:function(a,c){var b=this.subColumnHeaderTable;if(b&&null!=this.subColumns){var d=a.columnCount-l("td",b).length;8==x("ie")&&(null==this._colSubTableSave?this._colSubTableSave=q.clone(b):0>d&&(this.subColumnHeader.removeChild(b),p.destroy(b),this.subColumnHeaderTable=b=q.clone(this._colSubTableSave),this.subColumnHeader.appendChild(b),d=a.columnCount));var e=l("\x3etbody",b),g,e=1==e.length?e[0]:z.create("tbody",null,b);g=l("\x3etr",e);var e=1==g.length?g[0]:p.create("tr",null,
e),f=a.subColumnCount;if(0<d)for(var h=0;h<d;h++)g=p.create("td",null,e),p.create("div",{className:"dojoxCalendarSubHeaderContainer"},g);else{d=-d;for(h=0;h<d;h++)g=e.lastChild,e.removeChild(g),p.destroy(g)}l("td",b).forEach(function(b,c){b.className="";0==c?k.add(b,"first-child"):c==this.renderData.columnCount-1&&k.add(b,"last-child");l(".dojoxCalendarSubHeaderContainer",b).forEach(function(a,b){if(0!=l(".dojoxCalendarSubHeaderContainer",a).length-f){var c=a.childNodes.length;for(b=0;b<c;b++)a.removeChild(a.lastChild);
for(c=0;c<f;c++)p.create("div",{className:"dojoxCalendarSubHeaderCell dojoxCalendarSubHeaderLabel"},a)}var d=100/f+"%";l(".dojoxCalendarSubHeaderCell",a).forEach(function(a,b){a.className="dojoxCalendarSubHeaderCell dojoxCalendarSubHeaderLabel";var c=1==f?b:Math.floor(b/f);subColIdx=1==f?0:b-c*f;n.set(a,{width:d,left:100*subColIdx/f+"%"});k[subColIdx<f-1&&1!==f?"add":"remove"](a,"subColumn");k.add(a,this.subColumns[subColIdx]);this._setText(a,this.subColumnLabelFunc(this.subColumns[subColIdx]))},
this)},this);this.styleSubColumnHeaderCell(b,a.dates[c],a)},this)}},subColumnLabelFunc:function(a){return a},styleSubColumnHeaderCell:function(a,c,b){k.add(a,this._cssDays[c.getDay()]);this.isToday(c)?k.add(a,"dojoxCalendarToday"):this.isWeekEnd(c)&&k.add(a,"dojoxCalendarWeekend")},_addMinutesClasses:function(a,c){switch(c){case 0:k.add(a,"hour");break;case 30:k.add(a,"halfhour");break;case 15:case 45:k.add(a,"quarterhour")}},_buildRowHeader:function(a,c){var b=this.rowHeaderTable;if(b){null==this._rowHeaderLabelContainer&&
(this._rowHeaderLabelContainer=p.create("div",{"class":"dojoxCalendarRowHeaderLabelContainer"},this.rowHeader));n.set(b,"height",a.sheetHeight+"px");var d=l("tbody",b),e,g;e=1==d.length?d[0]:p.create("tbody",null,b);d=Math.floor(60/a.rowHeaderGridSlotDuration)*a.hourCount-(c?Math.floor(60/c.rowHeaderGridSlotDuration)*c.hourCount:0);if(0<d)for(var f=0;f<d;f++)g=p.create("tr",null,e),p.create("td",null,g);else{d=-d;for(f=0;f<d;f++)e.removeChild(e.lastChild)}var h=this.renderData,m=Math.ceil(a.hourSize/
(60/a.rowHeaderGridSlotDuration)),v=new Date(2E3,0,1,0,0,0);l("tr",b).forEach(function(b,c){var d=l("td",b)[0];d.className="";n.set(b,"height",7==x("ie")?m-2*(60/a.rowHeaderGridSlotDuration):m+"px");var e=c*this.renderData.rowHeaderGridSlotDuration%60;this.styleRowHeaderCell(d,a.minHours+c*this.renderData.rowHeaderGridSlotDuration/60,e,h);this._addMinutesClasses(d,e)},this);b=this._rowHeaderLabelContainer;d=Math.floor(60/this.rowHeaderLabelSlotDuration)*a.hourCount-b.childNodes.length;if(0<d)for(f=
0;f<d;f++)e=p.create("span",null,b),k.add(e,"dojoxCalendarRowHeaderLabel");else{d=-d;for(f=0;f<d;f++)b.removeChild(b.lastChild)}m=Math.ceil(a.hourSize/(60/this.rowHeaderLabelSlotDuration));l("\x3espan",b).forEach(function(b,c){v.setHours(0);v.setMinutes(60*a.minHours+c*this.rowHeaderLabelSlotDuration);this._configureRowHeaderLabel(b,v,c,m*c,h)},this)}},_configureRowHeaderLabel:function(a,c,b,d,e){this._setText(a,this._formatRowHeaderLabel(c));n.set(a,"top",d+(0==b?this.rowHeaderFirstLabelOffset:this.rowHeaderLabelOffset)+
"px");c=e.minHours+b*this.rowHeaderLabelSlotDuration/60;b=b*this.rowHeaderLabelSlotDuration%60;k.remove(a,["hour","halfhour","quarterhour"]);this._addMinutesClasses(a,b);this.styleRowHeaderCell(a,c,b,e)},styleRowHeaderCell:function(a,c,b,d){},_buildGrid:function(a,c){var b=this.gridTable;if(b){n.set(b,"height",a.sheetHeight+"px");var d=Math.floor(60/a.slotDuration)*a.hourCount,e=d-(c?Math.floor(60/c.slotDuration)*c.hourCount:0),g=0<e,f=a.columnCount-(c?c.columnCount:0);8==x("ie")&&(null==this._gridTableSave?
this._gridTableSave=q.clone(b):0>f&&(this.grid.removeChild(b),p.destroy(b),this.gridTable=b=q.clone(this._gridTableSave),this.grid.appendChild(b),f=a.columnCount,e=d,g=!0));var h=l("tbody",b),h=1==h.length?h[0]:p.create("tbody",null,b);if(g)for(var m=0;m<e;m++)p.create("tr",null,h);else{e=-e;for(m=0;m<e;m++)h.removeChild(h.lastChild)}var v=Math.floor(60/a.slotDuration)*a.hourCount-e,A=g||0<f,f=A?f:-f;l("tr",b).forEach(function(b,c){if(A){var d=c>=v?a.columnCount:f;for(c=0;c<d;c++)p.create("td",null,
b)}else for(c=0;c<f;c++)b.removeChild(b.lastChild)});l("tr",b).forEach(function(b,c){n.set(b,"height",a.slotSize+"px");0==c?k.add(b,"first-child"):c==d-1&&k.add(b,"last-child");var e=c*this.renderData.slotDuration%60,f=this.minHours+Math.floor(c*this.renderData.slotDuration/60);l("td",b).forEach(function(b,c){b.className="";0==c?k.add(b,"first-child"):c==this.renderData.columnCount-1&&k.add(b,"last-child");this.styleGridCell(b,a.dates[c],f,e,a);this._addMinutesClasses(b,e)},this)},this)}},styleGridCellFunc:null,
defaultStyleGridCell:function(a,c,b,d,e){k.add(a,[this._cssDays[c.getDay()],"H"+b,"M"+d]);if(this.isToday(c))return k.add(a,"dojoxCalendarToday");if(this.isWeekEnd(c))return k.add(a,"dojoxCalendarWeekend")},styleGridCell:function(a,c,b,d,e){this.styleGridCellFunc?this.styleGridCellFunc(a,c,b,d,e):this.defaultStyleGridCell(a,c,b,d,e)},_buildItemContainer:function(a,c){var b=this.itemContainerTable;if(b){var d=[],e=[];n.set(b,"height",a.sheetHeight+"px");var g=a.columnCount-(c?c.columnCount:0);8==x("ie")&&
(null==this._itemTableSave?this._itemTableSave=q.clone(b):0>g&&(this.itemContainer.removeChild(b),this._recycleItemRenderers(!0),p.destroy(b),this.itemContainerTable=b=q.clone(this._itemTableSave),this.itemContainer.appendChild(b),g=a.columnCount));var f=l("tbody",b),h=l("tr",b),f=1==f.length?f[0]:p.create("tbody",null,b),h=1==h.length?h[0]:p.create("tr",null,f),m=a.subColumnCount;if(0<g)for(var v=0;v<g;v++)f=p.create("td",null,h),p.create("div",{className:"dojoxCalendarContainerColumn"},f);else{g=
-g;for(v=0;v<g;v++)h.removeChild(h.lastChild)}l("td",b).forEach(function(b,c){l(".dojoxCalendarContainerColumn",b).forEach(function(c,d){n.set(c,"height",a.sheetHeight+"px");if(0!=l(".dojoxCalendarSubContainerColumn",b).length-m){var e=c.childNodes.length;for(d=0;d<e;d++)c.removeChild(c.lastChild);for(e=0;e<m;e++){var f=p.create("div",{className:"dojoxCalendarSubContainerColumn"},c);p.create("div",{className:"dojoxCalendarDecorationContainerColumn"},f);p.create("div",{className:"dojoxCalendarEventContainerColumn"},
f)}}},this);var f=100/m+"%";l(".dojoxCalendarSubContainerColumn",b).forEach(function(a,b){var c=1==m?b:Math.floor(b/m);subColIdx=1==m?0:b-c*m;n.set(a,{width:f,left:100*subColIdx/m+"%"});k[subColIdx<m-1&&1!==m?"add":"remove"](a,"subColumn");l(".dojoxCalendarEventContainerColumn",a).forEach(function(a,b){d.push(a)},this);l(".dojoxCalendarDecorationContainerColumn",a).forEach(function(a,b){e.push(a)},this)},this)},this);a.cells=d;a.decorationCells=e}},showTimeIndicator:!0,timeIndicatorRefreshInterval:6E4,
_setShowTimeIndicatorAttr:function(a){this._set("showTimeIndicator",a);this._layoutTimeIndicator(this.renderData)},_layoutTimeIndicator:function(a){if(a){if(this.showTimeIndicator){var c=new Date;if(this.isOverlapping(a,a.startTime,a.endTime,c,c)&&c.getHours()>=this.get("minHours")&&60*c.getHours()+c.getMinutes()<60*this.get("maxHours")){this._timeIndicator||(this._timeIndicator=p.create("div",{className:"dojoxCalendarTimeIndicator"}));for(var b=this._timeIndicator,d=0;d<this.renderData.columnCount&&
!this.isSameDay(c,this.renderData.dates[d]);d++);c=this.computeProjectionOnDate(a,this.floorToDay(c),c,a.sheetHeight);if(c!=a.sheetHeight){n.set(b,{top:c+"px",display:"block"});a=a.cells[d*a.subColumnCount].parentNode.parentNode;a!=b.parentNode&&(null!=b.parentNode&&b.parentNode.removeChild(b),a.appendChild(b));null==this._timeIndicatorTimer&&(this._timeIndicatorTimer=setInterval(q.hitch(this,function(){this._layoutTimeIndicator(this.renderData)}),this.timeIndicatorRefreshInterval));return}}}this._timeIndicatorTimer&&
(clearInterval(this._timeIndicatorTimer),this._timeIndicatorTimer=null);this._timeIndicator&&n.set(this._timeIndicator,"display","none")}},beforeDeactivate:function(){this._timeIndicatorTimer&&(clearInterval(this._timeIndicatorTimer),this._timeIndicatorTimer=null)},_overlapLayoutPass2:function(a){var c,b,d,e;d=a[a.length-1];for(b=0;b<d.length;b++)d[b].extent=1;for(c=0;c<a.length-1;c++){d=a[c];for(b=0;b<d.length;b++)if(e=d[b],-1==e.extent){e.extent=1;for(var g=0,f=!1,h=c+1;h<a.length&&!f;h++){for(var m=
a[h],k=0;k<m.length&&!f;k++){var n=m[k];e.start<n.end&&n.start<e.end&&(f=!0)}f||g++}e.extent+=g}}},_defaultItemToRendererKindFunc:function(a){return"vertical"},_layoutInterval:function(a,c,b,d,e,g){var f=[];a.colW=this.itemContainer.offsetWidth/a.columnCount;if("dataItems"===g){for(var h=0;h<e.length;h++){var m=e[h];"vertical"===this._itemToRendererKind(m)&&f.push(m)}this._layoutRendererWithSubColumns(a,"vertical",!0,c,b,d,f,g)}else this._layoutRendererWithSubColumns(a,"decoration",!1,c,b,d,e,g)},
_layoutRendererWithSubColumns:function(a,c,b,d,e,g,f,h){if(0<f.length)if(1<a.subColumnCount){var m={},k=this.subColumns;w.forEach(k,function(a){m[a]=[]});w.forEach(f,function(a){"decorationItems"===h?a.subColumn?m[a.subColumn].push(a):w.forEach(k,function(b){var c=q.mixin({},a);c.subColumn=b;m[b].push(c)}):a.subColumn&&m[a.subColumn].push(a)});var n=0;w.forEach(this.subColumns,function(f){this._layoutVerticalItems(a,c,b,d,n++,e,g,m[f],h)},this)}else this._layoutVerticalItems(a,c,b,d,0,e,g,f,h)},_getColumn:function(a,
c,b,d){return("dataItems"===d?a.cells:a.decorationCells)[c*a.subColumnCount+b]},_layoutVerticalItems:function(a,c,b,d,e,g,f,h,m){if(!("dataItems"===m&&null==this.verticalRenderer||"decorationItems"===m&&null==this.verticalDecorationRenderer)){c=this._getColumn(a,d,e,m);b=[];for(d=0;d<h.length;d++){e=h[d];var k=this.computeRangeOverlap(a,e.startTime,e.endTime,g,f),l=this.computeProjectionOnDate(a,g,k[0],a.sheetHeight),r=this.computeProjectionOnDate(a,g,k[1],a.sheetHeight);r>l&&(e=q.mixin({start:l,
end:r,range:k,item:e},e),b.push(e))}g="dataItems"===m?this.computeOverlapping(b,this._overlapLayoutPass2).numLanes:1;f=this.percentOverlap/100;for(d=0;d<b.length;d++){e=b[d];if("dataItems"===m){k=e.lane;l=e.extent;0==f?(h=1==g?a.colW:(a.colW-(g-1)*this.horizontalGap)/g,k*=h+this.horizontalGap,h=1==l?h:h*l+(l-1)*this.horizontalGap,h=100*h/a.colW,k=100*k/a.colW):(h=1==g?100:100/(g-(g-1)*f),k*=h-f*h,h=1==l?h:h*(l-(l-1)*f));var l=this._createRenderer(e,"vertical",this.verticalRenderer,"dojoxCalendarVertical"),
s=this.isItemBeingEdited(e),t=this.isItemSelected(e),u=this.isItemHovered(e),w=this.isItemFocused(e),r=l.renderer;r.set("hovered",u);r.set("selected",t);r.set("edited",s);r.set("focused",this.showFocus?w:!1);r.set("storeState",this.getItemStoreState(e));r.set("moveEnabled",this.isItemMoveEnabled(e._item,"vertical"));r.set("resizeEnabled",this.isItemResizeEnabled(e._item,"vertical"));this.applyRendererZIndex(e,l,u,t,s,w)}else h=100,k=0,l=this.decorationRendererManager.createRenderer(e,"vertical",this.verticalDecorationRenderer,
"dojoxCalendarDecoration"),r=l.renderer;n.set(l.container,{top:e.start+"px",left:k+"%",width:h+"%",height:e.end-e.start+1+"px"});r.updateRendering&&r.updateRendering(h,e.end-e.start+1);p.place(l.container,c);n.set(l.container,"display","block")}}},_sortItemsFunction:function(a,c){var b=this.dateModule.compare(a.startTime,c.startTime);0==b&&(b=-1*this.dateModule.compare(a.endTime,c.endTime));return this.isLeftToRight()?b:-b},_getNormalizedCoords:function(a,c,b,d){null!=a&&(b=u.position(this.itemContainer,
!0),a.touches?(d=void 0==d?0:d,c=a.touches[d].pageX-b.x,b=a.touches[d].pageY-b.y):(c=a.pageX-b.x,b=a.pageY-b.y));a=u.getContentBox(this.itemContainer);this.isLeftToRight()||(c=a.w-c);0>c?c=0:c>a.w&&(c=a.w-1);0>b?b=0:b>a.h&&(b=a.h-1);return{x:c,y:b}},getTime:function(a,c,b,d){c=this._getNormalizedCoords(a,c,b,d);a=this.getTimeOfDay(c.y,this.renderData);b=u.getMarginBox(this.itemContainer).w/this.renderData.columnCount;c=Math.floor(c.x/b);b=null;c<this.renderData.dates.length&&(b=this.newDate(this.renderData.dates[c]),
b=this.floorToDay(b,!0),b.setHours(a.hours),b.setMinutes(a.minutes));return b},getSubColumn:function(a,c,b,d){if(null==this.subColumns||1==this.subColumns.length)return null;a=this._getNormalizedCoords(a,c,b,d);c=this.renderData;b=u.getMarginBox(this.itemContainer).w/this.renderData.columnCount;return this.subColumns[Math.floor((a.x-Math.floor(a.x/b)*b)/(b/c.subColumnCount))]},_onGridMouseUp:function(a){this.inherited(arguments);this._gridMouseDown&&(this._gridMouseDown=!1,this._onGridClick({date:this.getTime(a),
triggerEvent:a}))},_onGridTouchStart:function(a){this.inherited(arguments);var c=this._gridProps;c.moved=!1;c.start=a.touches[0].screenY;c.scrollTop=this._getScrollPosition()},_onGridTouchMove:function(a){this.inherited(arguments);if(1<a.touches.length&&!this._isEditing)s.stop(a);else if(this._gridProps&&!this._isEditing){var c=a.touches[0].screenX,b=a.touches[0].screenY,d=this._edProps;if(!d||d&&(25<Math.abs(c-d.start.x)||25<Math.abs(b-d.start.y)))this._gridProps.moved=!0,c=this._gridProps.scrollTop-
(a.touches[0].screenY-this._gridProps.start),b=this.itemContainer.offsetHeight-this.scrollContainer.offsetHeight,0>c?(this._gridProps.start=a.touches[0].screenY,this._setScrollImpl(0),this._gridProps.scrollTop=0):c>b?(this._gridProps.start=a.touches[0].screenY,this._setScrollImpl(b),this._gridProps.scrollTop=b):this._setScrollImpl(c)}},_onGridTouchEnd:function(a){this.inherited(arguments);var c=this._gridProps;c&&(!this._isEditing&&!c.moved&&(!c.fromItem&&!c.editingOnStart&&this.selectFromEvent(a,
null,null,!0),c.fromItem||(this._pendingDoubleTap&&this._pendingDoubleTap.grid?(this._onGridDoubleClick({date:this.getTime(this._gridProps.event),triggerEvent:this._gridProps.event}),clearTimeout(this._pendingDoubleTap.timer),delete this._pendingDoubleTap):(this._onGridClick({date:this.getTime(this._gridProps.event),triggerEvent:this._gridProps.event}),this._pendingDoubleTap={grid:!0,timer:setTimeout(q.hitch(this,function(){delete this._pendingDoubleTap}),this.doubleTapDelay)}))),this._gridProps=
null)},_onColumnHeaderClick:function(a){this._dispatchCalendarEvt(a,"onColumnHeaderClick")},onColumnHeaderClick:function(a){},getTimeOfDay:function(a,c){var b=60*c.minHours,b=b+a*(60*c.maxHours-b)/c.sheetHeight;return{hours:Math.floor(b/60),minutes:Math.floor(b%60)}},_isItemInView:function(a){var c=this.inherited(arguments);if(c){var b=this.renderData;if(b.dateModule.difference(a.startTime,a.endTime,"millisecond")>36E5*(24-b.maxHours+b.minHours))return!0;var d=60*a.startTime.getHours()+a.startTime.getMinutes(),
e=60*a.endTime.getHours()+a.endTime.getMinutes(),g=60*b.minHours,b=60*b.maxHours;if(0<d&&d<g||d>b&&1440>=d||0<e&&e<g||e>b&&1440>=e)return!1}return c},_ensureItemInView:function(a){var c,b=a.startTime,d=a.endTime,e=this.renderData,g=e.dateModule,f=Math.abs(g.difference(a.startTime,a.endTime,"millisecond"));if(f>36E5*(24-e.maxHours+e.minHours))return!1;var b=60*b.getHours()+b.getMinutes(),d=60*d.getHours()+d.getMinutes(),h=60*e.minHours,k=60*e.maxHours;0<b&&b<h?(this.floorToDay(a.startTime,!0,e),a.startTime.setHours(e.minHours),
a.endTime=g.add(a.startTime,"millisecond",f),c=!0):b>k&&1440>=b&&(this.floorToDay(a.startTime,!0,e),a.startTime=g.add(a.startTime,"day",1),a.startTime.setHours(e.minHours),a.endTime=g.add(a.startTime,"millisecond",f),c=!0);0<d&&d<h?(this.floorToDay(a.endTime,!0,e),a.endTime=g.add(a.endTime,"day",-1),a.endTime.setHours(e.maxHours),a.startTime=g.add(a.endTime,"millisecond",-f),c=!0):d>k&&1440>=d&&(this.floorToDay(a.endTime,!0,e),a.endTime.setHours(e.maxHours),a.startTime=g.add(a.endTime,"millisecond",
-f),c=!0);return c=c||this.inherited(arguments)},_onScrollTimer_tick:function(){this._scrollToPosition(this._getScrollPosition()+this._scrollProps.scrollStep)},snapUnit:"minute",snapSteps:15,minDurationUnit:"minute",minDurationSteps:15,liveLayout:!1,stayInView:!0,allowStartEndSwap:!0,allowResizeLessThan24H:!0})});
//# sourceMappingURL=SimpleColumnView.js.map