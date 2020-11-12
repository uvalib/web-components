var e,i;(e=window.document).getElementById("livereloadscript")||((i=e.createElement("script")).async=1,i.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",i.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(i));import{u as t,i as n}from"./uvalib-counts-a59ad539.js";import{d as s,P as o,B as a}from"./polymer-legacy-80a947ec.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var r=new Set;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
o({_template:n`
    <style>
      :host {
        display: block;
        transition-duration: var(--iron-collapse-transition-duration, 300ms);
        /* Safari 10 needs this property prefixed to correctly apply the custom property */
        -webkit-transition-duration: var(--iron-collapse-transition-duration, 300ms);
        overflow: visible;
      }

      :host(.iron-collapse-closed) {
        display: none;
      }

      :host(:not(.iron-collapse-opened)) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`,is:"iron-collapse",behaviors:[{properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(r.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var i=this._interestedResizables.indexOf(e);i>-1&&(this._interestedResizables.splice(i,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():t||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var i=s(e).rootTarget;i!==this&&(i.assignParentResizable(this),this._notifyDescendant(i),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function i(){document.removeEventListener("readystatechange",i),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(r.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?r.delete(this):r.add(this)}}],properties:{horizontal:{type:Boolean,value:!1,observer:"_horizontalChanged"},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},transitioning:{type:Boolean,notify:!0,readOnly:!0},noAnimation:{type:Boolean},_desiredSize:{type:String,value:""}},get dimension(){return this.horizontal?"width":"height"},get _dimensionMax(){return this.horizontal?"maxWidth":"maxHeight"},get _dimensionMaxCss(){return this.horizontal?"max-width":"max-height"},hostAttributes:{role:"group","aria-hidden":"true"},listeners:{transitionend:"_onTransitionEnd"},toggle:function(){this.opened=!this.opened},show:function(){this.opened=!0},hide:function(){this.opened=!1},updateSize:function(e,i){e="auto"===e?"":e;var t=i&&!this.noAnimation&&this.isAttached&&this._desiredSize!==e;if(this._desiredSize=e,this._updateTransition(!1),t){var n=this._calcSize();""===e&&(this.style[this._dimensionMax]="",e=this._calcSize()),this.style[this._dimensionMax]=n,this.scrollTop=this.scrollTop,this._updateTransition(!0),t=e!==n}this.style[this._dimensionMax]=e,t||this._transitionEnd()},enableTransition:function(e){a._warn("`enableTransition()` is deprecated, use `noAnimation` instead."),this.noAnimation=!e},_updateTransition:function(e){this.style.transitionDuration=e&&!this.noAnimation?"":"0s"},_horizontalChanged:function(){this.style.transitionProperty=this._dimensionMaxCss;var e="maxWidth"===this._dimensionMax?"maxHeight":"maxWidth";this.style[e]="",this.updateSize(this.opened?"auto":"0px",!1)},_openedChanged:function(){this.setAttribute("aria-hidden",!this.opened),this._setTransitioning(!0),this.toggleClass("iron-collapse-closed",!1),this.toggleClass("iron-collapse-opened",!1),this.updateSize(this.opened?"auto":"0px",!0),this.opened&&this.focus()},_transitionEnd:function(){this.style[this._dimensionMax]=this._desiredSize,this.toggleClass("iron-collapse-closed",!this.opened),this.toggleClass("iron-collapse-opened",this.opened),this._updateTransition(!1),this.notifyResize(),this._setTransitioning(!1)},_onTransitionEnd:function(e){s(e).rootTarget===this&&this._transitionEnd()},_calcSize:function(){return this.getBoundingClientRect()[this.dimension]+"px"}});
