//>>built
define("dojox/mobile/app/_base",["dojo","dijit","dojox","dojo/require!dijit/_base,dijit/_WidgetBase,dojox/mobile,dojox/mobile/parser,dojox/mobile/Button,dojox/mobile/app/_event,dojox/mobile/app/_Widget,dojox/mobile/app/StageController,dojox/mobile/app/SceneController,dojox/mobile/app/SceneAssistant,dojox/mobile/app/AlertDialog,dojox/mobile/app/List,dojox/mobile/app/ListSelector,dojox/mobile/app/TextBox,dojox/mobile/app/ImageView,dojox/mobile/app/ImageThumbView"],function(a,r,g){a.provide("dojox.mobile.app._base");
a.experimental("dojox.mobile.app._base");a.require("dijit._base");a.require("dijit._WidgetBase");a.require("dojox.mobile");a.require("dojox.mobile.parser");a.require("dojox.mobile.Button");a.require("dojox.mobile.app._event");a.require("dojox.mobile.app._Widget");a.require("dojox.mobile.app.StageController");a.require("dojox.mobile.app.SceneController");a.require("dojox.mobile.app.SceneAssistant");a.require("dojox.mobile.app.AlertDialog");a.require("dojox.mobile.app.List");a.require("dojox.mobile.app.ListSelector");
a.require("dojox.mobile.app.TextBox");a.require("dojox.mobile.app.ImageView");a.require("dojox.mobile.app.ImageThumbView");(function(){function h(b,e){var d,c;do if(d=b.pop(),d.source)c=d.source;else if(d.module)c=a.moduleUrl(d.module)+".js";else return;while(0<b.length&&m[c]);1>b.length&&m[c]?e():a.xhrGet({url:c,sync:!1}).addCallbacks(function(d){a.eval(d);m[c]=!0;0<b.length?h(b,e):e()},function(){})}var f,k,m={},p,l=[],n=function(){f=new g.mobile.app.StageController(p);var b={id:"com.test.app",
version:"1.0.0",initialScene:"main"};a.global.appInfo&&a.mixin(b,a.global.appInfo);k=g.mobile.app.info=b;k.title&&(a.query("head title")[0]||a.create("title",{},a.query("head")[0]),document.title=k.title);f.pushScene(k.initialScene)},q=function(){var b=!1;a.global.BackButton&&(BackButton.override(),a.connect(document,"backKeyDown",function(b){a.publish("/dojox/mobile/app/goback")}),b=!0);b&&a.addClass(a.body(),"mblNativeBack")};a.mixin(g.mobile.app,{init:function(b){p=b||a.body();g.mobile.app.STAGE_CONTROLLER_ACTIVE=
!0;a.subscribe("/dojox/mobile/app/goback",function(){f.popScene()});a.subscribe("/dojox/mobile/app/alert",function(a){g.mobile.app.getActiveSceneController().showAlertDialog(a)});a.subscribe("/dojox/mobile/app/pushScene",function(a,b){f.pushScene(a,b||{})});a.xhrGet({url:"view-resources.json",load:function(b){var d=[];if(b){l=b=a.fromJson(b);for(var c=0;c<b.length;c++)b[c].scene||d.push(b[c])}0<d.length?h(d,n):n()},error:n});q()},getActiveSceneController:function(){return f.getActiveSceneController()},
getStageController:function(){return f},loadResources:function(a,e){h(a,e)},loadResourcesForScene:function(a,e){for(var d=[],c=0;c<l.length;c++)l[c].scene==a&&d.push(l[c]);0<d.length?h(d,e):e()},resolveTemplate:function(a){return"app/views/"+a+"/"+a+"-scene.html"},resolveAssistant:function(a){return"app/assistants/"+a+"-assistant.js"}})})()});
//# sourceMappingURL=_base.js.map