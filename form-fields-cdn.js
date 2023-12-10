/**
 * FORM FIELDS PRO CDN SCRIPT - v2.0.0
 */

/**
 * SELECT2 JQUERY LIBRARY SCRIPT  
 */
/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(t){var e,n,s,p,r,o,h,f,g,m,y,v,i,a,_,s=((u=t&&t.fn&&t.fn.select2&&t.fn.select2.amd?t.fn.select2.amd:u)&&u.requirejs||(u?n=u:u={},g={},m={},y={},v={},i=Object.prototype.hasOwnProperty,a=[].slice,_=/\.js$/,h=function(e,t){var n,s,i=c(e),r=i[0],t=t[1];return e=i[1],r&&(n=x(r=l(r,t))),r?e=n&&n.normalize?n.normalize(e,(s=t,function(e){return l(e,s)})):l(e,t):(r=(i=c(e=l(e,t)))[0],e=i[1],r&&(n=x(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},f={require:function(e){return w(e)},exports:function(e){var t=g[e];return void 0!==t?t:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:(t=e,function(){return y&&y.config&&y.config[t]||{}})};var t}},r=function(e,t,n,s){var i,r,o,a,l,c=[],u=typeof n,d=A(s=s||e);if("undefined"==u||"function"==u){for(t=!t.length&&n.length?["require","exports","module"]:t,a=0;a<t.length;a+=1)if("require"===(r=(o=h(t[a],d)).f))c[a]=f.require(e);else if("exports"===r)c[a]=f.exports(e),l=!0;else if("module"===r)i=c[a]=f.module(e);else if(b(g,r)||b(m,r)||b(v,r))c[a]=x(r);else{if(!o.p)throw new Error(e+" missing "+r);o.p.load(o.n,w(s,!0),function(t){return function(e){g[t]=e}}(r),{}),c[a]=g[r]}u=n?n.apply(g[e],c):void 0,e&&(i&&i.exports!==p&&i.exports!==g[e]?g[e]=i.exports:u===p&&l||(g[e]=u))}else e&&(g[e]=n)},e=n=o=function(e,t,n,s,i){if("string"==typeof e)return f[e]?f[e](t):x(h(e,A(t)).f);if(!e.splice){if((y=e).deps&&o(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=p}return t=t||function(){},"function"==typeof n&&(n=s,s=i),s?r(p,e,t,n):setTimeout(function(){r(p,e,t,n)},4),o},o.config=function(e){return o(e)},e._defined=g,(s=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),b(g,e)||b(m,e)||(m[e]=[e,t,n])}).amd={jQuery:!0},u.requirejs=e,u.require=n,u.define=s),u.define("almond",function(){}),u.define("jquery",[],function(){var e=t||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),u.define("select2/utils",["jquery"],function(r){var s={};function c(e){var t,n=e.prototype,s=[];for(t in n)"function"==typeof n[t]&&"constructor"!==t&&s.push(t);return s}s.Extend=function(e,t){var n,s={}.hasOwnProperty;function i(){this.constructor=e}for(n in t)s.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},s.Decorate=function(s,i){var e=c(i),t=c(s);function r(){var e=Array.prototype.unshift,t=i.prototype.constructor.length,n=s.prototype.constructor;0<t&&(e.call(arguments,s.prototype.constructor),n=i.prototype.constructor),n.apply(this,arguments)}i.displayName=s.displayName,r.prototype=new function(){this.constructor=r};for(var n=0;n<t.length;n++){var o=t[n];r.prototype[o]=s.prototype[o]}for(var a=0;a<e.length;a++){var l=e[a];r.prototype[l]=function(e){var t=function(){};e in r.prototype&&(t=r.prototype[e]);var n=i.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}(l)}return r};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},0===(n=null==n?[]:n).length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,s=e.length;n<s;n++)e[n].apply(this,t)},s.Observable=e,s.generateChars=function(e){for(var t="",n=0;n<e;n++)t+=Math.floor(36*Math.random()).toString(36);return t},s.bind=function(e,t){return function(){e.apply(t,arguments)}},s._convertData=function(e){for(var t in e){var n=t.split("-"),s=e;if(1!==n.length){for(var i=0;i<n.length;i++){var r=n[i];(r=r.substring(0,1).toLowerCase()+r.substring(1))in s||(s[r]={}),i==n.length-1&&(s[r]=e[t]),s=s[r]}delete e[t]}}return e},s.hasScroll=function(e,t){var n=r(t),s=t.style.overflowX,i=t.style.overflowY;return(s!==i||"hidden"!==i&&"visible"!==i)&&("scroll"===s||"scroll"===i||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},s.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},s.__cache={};var n=0;return s.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null!=t||(t=e.id?"select2-data-"+e.id:"select2-data-"+(++n).toString()+"-"+s.generateChars(4),e.setAttribute("data-select2-id",t)),t},s.StoreData=function(e,t,n){e=s.GetUniqueElementId(e);s.__cache[e]||(s.__cache[e]={}),s.__cache[e][t]=n},s.GetData=function(e,t){var n=s.GetUniqueElementId(e);return t?s.__cache[n]&&null!=s.__cache[n][t]?s.__cache[n][t]:r(e).data(t):s.__cache[n]},s.RemoveData=function(e){var t=s.GetUniqueElementId(e);null!=s.__cache[t]&&delete s.__cache[t],e.removeAttribute("data-select2-id")},s.copyNonInternalCssClasses=function(e,t){var n=(n=e.getAttribute("class").trim().split(/\s+/)).filter(function(e){return 0===e.indexOf("select2-")}),t=(t=t.getAttribute("class").trim().split(/\s+/)).filter(function(e){return 0!==e.indexOf("select2-")}),t=n.concat(t);e.setAttribute("class",t.join(" "))},s}),u.define("select2/results",["jquery","./utils"],function(d,p){function s(e,t,n){this.$element=e,this.data=n,this.options=t,s.__super__.constructor.call(this)}return p.Extend(s,p.Observable),s.prototype.render=function(){var e=d('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},s.prototype.clear=function(){this.$results.empty()},s.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=d('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),s=this.options.get("translations").get(e.message);n.append(t(s(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},s.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},s.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var s=e.results[n],s=this.option(s);t.push(s)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},s.prototype.position=function(e,t){t.find(".select2-results").append(e)},s.prototype.sort=function(e){return this.options.get("sorter")(e)},s.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option--selectable"),t=e.filter(".select2-results__option--selected");(0<t.length?t:e).first().trigger("mouseenter"),this.ensureHighlightVisible()},s.prototype.setClasses=function(){var t=this;this.data.current(function(e){var s=e.map(function(e){return e.id.toString()});t.$results.find(".select2-results__option--selectable").each(function(){var e=d(this),t=p.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<s.indexOf(n)?(this.classList.add("select2-results__option--selected"),e.attr("aria-selected","true")):(this.classList.remove("select2-results__option--selected"),e.attr("aria-selected","false"))})})},s.prototype.showLoading=function(e){this.hideLoading();e={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},e=this.option(e);e.className+=" loading-results",this.$results.prepend(e)},s.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},s.prototype.option=function(e){var t=document.createElement("li");t.classList.add("select2-results__option"),t.classList.add("select2-results__option--selectable");var n,s={role:"option"},i=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(n in(null!=e.element&&i.call(e.element,":disabled")||null==e.element&&e.disabled)&&(s["aria-disabled"]="true",t.classList.remove("select2-results__option--selectable"),t.classList.add("select2-results__option--disabled")),null==e.id&&t.classList.remove("select2-results__option--selectable"),null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(s.role="group",s["aria-label"]=e.text,t.classList.remove("select2-results__option--selectable"),t.classList.add("select2-results__option--group")),s){var r=s[n];t.setAttribute(n,r)}if(e.children){var o=d(t),a=document.createElement("strong");a.className="select2-results__group",this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],u=this.option(u);l.push(u)}i=d("<ul></ul>",{class:"select2-results__options select2-results__options--nested",role:"none"});i.append(l),o.append(a),o.append(i)}else this.template(e,t);return p.StoreData(t,"data",e),t},s.prototype.bind=function(t,e){var i=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){i.clear(),i.append(e.data),t.isOpen()&&(i.setClasses(),i.highlightFirstItem())}),t.on("results:append",function(e){i.append(e.data),t.isOpen()&&i.setClasses()}),t.on("query",function(e){i.hideMessages(),i.showLoading(e)}),t.on("select",function(){t.isOpen()&&(i.setClasses(),i.options.get("scrollAfterSelect")&&i.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(i.setClasses(),i.options.get("scrollAfterSelect")&&i.highlightFirstItem())}),t.on("open",function(){i.$results.attr("aria-expanded","true"),i.$results.attr("aria-hidden","false"),i.setClasses(),i.ensureHighlightVisible()}),t.on("close",function(){i.$results.attr("aria-expanded","false"),i.$results.attr("aria-hidden","true"),i.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=i.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e,t=i.getHighlightedResults();0!==t.length&&(e=p.GetData(t[0],"data"),t.hasClass("select2-results__option--selected")?i.trigger("close",{}):i.trigger("select",{data:e}))}),t.on("results:previous",function(){var e,t=i.getHighlightedResults(),n=i.$results.find(".select2-results__option--selectable"),s=n.index(t);s<=0||(e=s-1,0===t.length&&(e=0),(s=n.eq(e)).trigger("mouseenter"),t=i.$results.offset().top,n=s.offset().top,s=i.$results.scrollTop()+(n-t),0===e?i.$results.scrollTop(0):n-t<0&&i.$results.scrollTop(s))}),t.on("results:next",function(){var e,t=i.getHighlightedResults(),n=i.$results.find(".select2-results__option--selectable"),s=n.index(t)+1;s>=n.length||((e=n.eq(s)).trigger("mouseenter"),t=i.$results.offset().top+i.$results.outerHeight(!1),n=e.offset().top+e.outerHeight(!1),e=i.$results.scrollTop()+n-t,0===s?i.$results.scrollTop(0):t<n&&i.$results.scrollTop(e))}),t.on("results:focus",function(e){e.element[0].classList.add("select2-results__option--highlighted"),e.element[0].setAttribute("aria-selected","true")}),t.on("results:message",function(e){i.displayMessage(e)}),d.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=i.$results.scrollTop(),n=i.$results.get(0).scrollHeight-t+e.deltaY,t=0<e.deltaY&&t-e.deltaY<=0,n=e.deltaY<0&&n<=i.$results.height();t?(i.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):n&&(i.$results.scrollTop(i.$results.get(0).scrollHeight-i.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option--selectable",function(e){var t=d(this),n=p.GetData(this,"data");t.hasClass("select2-results__option--selected")?i.options.get("multiple")?i.trigger("unselect",{originalEvent:e,data:n}):i.trigger("close",{}):i.trigger("select",{originalEvent:e,data:n})}),this.$results.on("mouseenter",".select2-results__option--selectable",function(e){var t=p.GetData(this,"data");i.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected","false"),i.trigger("results:focus",{data:t,element:d(this)})})},s.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},s.prototype.destroy=function(){this.$results.remove()},s.prototype.ensureHighlightVisible=function(){var e,t,n,s,i=this.getHighlightedResults();0!==i.length&&(e=this.$results.find(".select2-results__option--selectable").index(i),s=this.$results.offset().top,t=i.offset().top,n=this.$results.scrollTop()+(t-s),s=t-s,n-=2*i.outerHeight(!1),e<=2?this.$results.scrollTop(0):(s>this.$results.outerHeight()||s<0)&&this.$results.scrollTop(n))},s.prototype.template=function(e,t){var n=this.options.get("templateResult"),s=this.options.get("escapeMarkup"),e=n(e,t);null==e?t.style.display="none":"string"==typeof e?t.innerHTML=s(e):d(t).append(e)},s}),u.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),u.define("select2/selection/base",["jquery","../utils","../keys"],function(n,s,i){function r(e,t){this.$element=e,this.options=t,r.__super__.constructor.call(this)}return s.Extend(r,s.Observable),r.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=s.GetData(this.$element[0],"old-tabindex")?this._tabindex=s.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},r.prototype.bind=function(e,t){var n=this,s=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===i.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",s),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},r.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},r.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&s.GetData(this,"element").select2("close")})})},r.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},r.prototype.position=function(e,t){t.find(".selection").append(e)},r.prototype.destroy=function(){this._detachCloseHandler(this.container)},r.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},r.prototype.isEnabled=function(){return!this.isDisabled()},r.prototype.isDisabled=function(){return this.options.get("disabled")},r}),u.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,s){function i(){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e[0].classList.add("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},i.prototype.bind=function(t,e){var n=this;i.__super__.bind.apply(this,arguments);var s=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",s).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",s),this.$selection.attr("aria-controls",s),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e("<span></span>")},i.prototype.update=function(e){var t,n;0!==e.length?(n=e[0],t=this.$selection.find(".select2-selection__rendered"),e=this.display(n,t),t.empty().append(e),(n=n.title||n.text)?t.attr("title",n):t.removeAttr("title")):this.clear()},i}),u.define("select2/selection/multiple",["jquery","./base","../utils"],function(i,e,c){function r(e,t){r.__super__.constructor.apply(this,arguments)}return c.Extend(r,e),r.prototype.render=function(){var e=r.__super__.render.call(this);return e[0].classList.add("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},r.prototype.bind=function(e,t){var n=this;r.__super__.bind.apply(this,arguments);var s=e.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",s),this.$selection.on("click",function(e){n.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){var t;n.isDisabled()||(t=i(this).parent(),t=c.GetData(t[0],"data"),n.trigger("unselect",{originalEvent:e,data:t}))}),this.$selection.on("keydown",".select2-selection__choice__remove",function(e){n.isDisabled()||e.stopPropagation()})},r.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},r.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},r.prototype.selectionContainer=function(){return i('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')},r.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=this.$selection.find(".select2-selection__rendered").attr("id")+"-choice-",s=0;s<e.length;s++){var i=e[s],r=this.selectionContainer(),o=this.display(i,r),a=n+c.generateChars(4)+"-";i.id?a+=i.id:a+=c.generateChars(4),r.find(".select2-selection__choice__display").append(o).attr("id",a);var l=i.title||i.text;l&&r.attr("title",l);o=this.options.get("translations").get("removeItem"),l=r.find(".select2-selection__choice__remove");l.attr("title",o()),l.attr("aria-label",o()),l.attr("aria-describedby",a),c.StoreData(r[0],"data",i),t.push(r)}this.$selection.find(".select2-selection__rendered").append(t)}},r}),u.define("select2/selection/placeholder",[],function(){function e(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return e.prototype.normalizePlaceholder=function(e,t){return t="string"==typeof t?{id:"",text:t}:t},e.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();n.html(this.display(t)),n[0].classList.add("select2-selection__placeholder"),n[0].classList.remove("select2-selection__choice");t=t.title||t.text||n.text();return this.$selection.find(".select2-selection__rendered").attr("title",t),n},e.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();t=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(t)},e}),u.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(i,s,a){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){s._handleClear(e)}),t.on("keypress",function(e){s._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.isDisabled()){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var s=a.GetData(n[0],"data"),i=this.$element.val();this.$element.val(this.placeholder.id);var r={data:s};if(this.trigger("clear",r),r.prevented)this.$element.val(i);else{for(var o=0;o<s.length;o++)if(r={data:s[o]},this.trigger("unselect",r),r.prevented)return void this.$element.val(i);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=s.DELETE&&t.which!=s.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){var n,s;e.call(this,t),this.$selection.find(".select2-selection__clear").remove(),this.$selection[0].classList.remove("select2-selection--clearable"),0<this.$selection.find(".select2-selection__placeholder").length||0===t.length||(n=this.$selection.find(".select2-selection__rendered").attr("id"),s=this.options.get("translations").get("removeAllItems"),(e=i('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title",s()),e.attr("aria-label",s()),e.attr("aria-describedby",n),a.StoreData(e[0],"data",t),this.$selection.prepend(e),this.$selection[0].classList.add("select2-selection--clearable"))},e}),u.define("select2/selection/search",["jquery","../utils","../keys"],function(s,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=this.options.get("translations").get("search"),n=s('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');this.$searchContainer=n,this.$search=n.find("textarea"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",t());e=e.call(this);return this._transferTabIndex(),e.append(this.$searchContainer),e},e.prototype.bind=function(e,t,n){var s=this,i=t.id+"-results",r=t.id+"-container";e.call(this,t,n),s.$search.attr("aria-describedby",r),t.on("open",function(){s.$search.attr("aria-controls",i),s.$search.trigger("focus")}),t.on("close",function(){s.$search.val(""),s.resizeSearch(),s.$search.removeAttr("aria-controls"),s.$search.removeAttr("aria-activedescendant"),s.$search.trigger("focus")}),t.on("enable",function(){s.$search.prop("disabled",!1),s._transferTabIndex()}),t.on("disable",function(){s.$search.prop("disabled",!0)}),t.on("focus",function(e){s.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?s.$search.attr("aria-activedescendant",e.data._resultId):s.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){s.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){s._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){var t;e.stopPropagation(),s.trigger("keypress",e),s._keyUpPrevented=e.isDefaultPrevented(),e.which!==l.BACKSPACE||""!==s.$search.val()||0<(t=s.$selection.find(".select2-selection__choice").last()).length&&(t=a.GetData(t[0],"data"),s.searchRemoveChoice(t),e.preventDefault())}),this.$selection.on("click",".select2-search--inline",function(e){s.$search.val()&&e.stopPropagation()});var t=document.documentMode,o=t&&t<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){o?s.$selection.off("input.search input.searchcheck"):s.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){var t;o&&"input"===e.type?s.$selection.off("input.search input.searchcheck"):(t=e.which)!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&s.handleSearch(e)})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){var e;this.resizeSearch(),this._keyUpPrevented||(e=this.$search.val(),this.trigger("query",{term:e})),this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="100%";""===this.$search.attr("placeholder")&&(e=.75*(this.$search.val().length+1)+"em"),this.$search.css("width",e)},e}),u.define("select2/selection/selectionCss",["../utils"],function(n){function e(){}return e.prototype.render=function(e){var t=e.call(this),e=this.options.get("selectionCssClass")||"";return-1!==e.indexOf(":all:")&&(e=e.replace(":all:",""),n.copyNonInternalCssClasses(t[0],this.$element[0])),t.addClass(e),t},e}),u.define("select2/selection/eventRelay",["jquery"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var s=this,i=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],r=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){var n;-1!==i.indexOf(e)&&(t=t||{},n=o.Event("select2:"+e,{params:t}),s.$element.trigger(n),-1!==r.indexOf(e)&&(t.prevented=n.isDefaultPrevented()))})},e}),u.define("select2/translation",["jquery","require"],function(t,n){function s(e){this.dict=e||{}}return s.prototype.all=function(){return this.dict},s.prototype.get=function(e){return this.dict[e]},s.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},s._cache={},s.loadPath=function(e){var t;return e in s._cache||(t=n(e),s._cache[e]=t),new s(s._cache[e])},s}),u.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),u.define("select2/data/base",["../utils"],function(n){function s(e,t){s.__super__.constructor.call(this)}return n.Extend(s,n.Observable),s.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},s.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},s.prototype.bind=function(e,t){},s.prototype.destroy=function(){},s.prototype.generateResultId=function(e,t){e=e.id+"-result-";return e+=n.generateChars(4),null!=t.id?e+="-"+t.id.toString():e+="-"+n.generateChars(4),e},s}),u.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var t=this;e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"),function(e){return t.item(l(e))}))},n.prototype.select=function(i){var e,r=this;if(i.selected=!0,null!=i.element&&"option"===i.element.tagName.toLowerCase())return i.element.selected=!0,void this.$element.trigger("input").trigger("change");this.$element.prop("multiple")?this.current(function(e){var t=[];(i=[i]).push.apply(i,e);for(var n=0;n<i.length;n++){var s=i[n].id;-1===t.indexOf(s)&&t.push(s)}r.$element.val(t),r.$element.trigger("input").trigger("change")}):(e=i.id,this.$element.val(e),this.$element.trigger("input").trigger("change"))},n.prototype.unselect=function(i){var r=this;if(this.$element.prop("multiple")){if(i.selected=!1,null!=i.element&&"option"===i.element.tagName.toLowerCase())return i.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var s=e[n].id;s!==i.id&&-1===t.indexOf(s)&&t.push(s)}r.$element.val(t),r.$element.trigger("input").trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(t,e){var n=[],s=this;this.$element.children().each(function(){var e;"option"!==this.tagName.toLowerCase()&&"optgroup"!==this.tagName.toLowerCase()||(e=l(this),e=s.item(e),null!==(e=s.matches(t,e))&&n.push(e))}),e({results:n})},n.prototype.addOptions=function(e){this.$element.append(e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);e=this._normalizeItem(e);return e.element=t,a.StoreData(t,"data",e),l(t)},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;var n=e[0];if("option"===n.tagName.toLowerCase())t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if("optgroup"===n.tagName.toLowerCase()){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var s=e.children("option"),i=[],r=0;r<s.length;r++){var o=l(s[r]),o=this.item(o);i.push(o)}t.children=i}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),u.define("select2/data/array",["./select","../utils","jquery"],function(e,t,c){function s(e,t){this._dataToConvert=t.get("data")||[],s.__super__.constructor.call(this,e,t)}return t.Extend(s,e),s.prototype.bind=function(e,t){s.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},s.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),s.__super__.select.call(this,n)},s.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),s=n.map(function(){return t.item(c(this)).id}).get(),i=[];for(var r=0;r<e.length;r++){var o,a,l=this._normalizeItem(e[r]);0<=s.indexOf(l.id)?(o=n.filter(function(e){return function(){return c(this).val()==e.id}}(l)),a=this.item(o),a=c.extend(!0,{},l,a),a=this.option(a),o.replaceWith(a)):(a=this.option(l),l.children&&(l=this.convertToOptions(l.children),a.append(l)),i.push(a))}return i},s}),u.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,r){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return r.extend({},e,{q:e.term})},transport:function(e,t,n){e=r.ajax(e);return e.then(t),e.fail(n),e}};return r.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(t,n){var s=this;null!=this._request&&("function"==typeof this._request.abort&&this._request.abort(),this._request=null);var i=r.extend({type:"GET"},this.ajaxOptions);function e(){var e=i.transport(i,function(e){e=s.processResults(e,t);s.options.get("debug")&&window.console&&console.error&&(e&&e.results&&Array.isArray(e.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),n(e)},function(){"status"in e&&(0===e.status||"0"===e.status)||s.trigger("results:message",{message:"errorLoading"})});s._request=e}"function"==typeof i.url&&(i.url=i.url.call(this.$element,t)),"function"==typeof i.data&&(i.data=i.data.call(this.$element,t)),this.ajaxOptions.delay&&null!=t.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),u.define("select2/data/tags",["jquery"],function(t){function e(e,t,n){var s=n.get("tags"),i=n.get("createTag");void 0!==i&&(this.createTag=i);i=n.get("insertTag");if(void 0!==i&&(this.insertTag=i),e.call(this,t,n),Array.isArray(s))for(var r=0;r<s.length;r++){var o=s[r],o=this._normalizeItem(o),o=this.option(o);this.$element.append(o)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var s=t.results,i=0;i<s.length;i++){var r=s[i],o=null!=r.children&&!e({results:r.children},!0);if((r.text||"").toUpperCase()===(c.term||"").toUpperCase()||o)return!n&&(t.data=s,void u(t))}if(n)return!0;var a,l=d.createTag(c);null!=l&&((a=d.option(l)).attr("data-select2-tag","true"),d.addOptions([a]),d.insertTag(s,l)),t.results=s,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){if(null==t.term)return null;t=t.term.trim();return""===t?null:{id:t,text:t}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||t(this).remove()})},e}),u.define("select2/data/tokenizer",["jquery"],function(c){function e(e,t,n){var s=n.get("tokenizer");void 0!==s&&(this.tokenizer=s),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var s=this;t.term=t.term||"";var i=this.tokenizer(t,this.options,function(e){var t,n=s._normalizeItem(e);s.$element.find("option").filter(function(){return c(this).val()===n.id}).length||((t=s.option(n)).attr("data-select2-tag",!0),s._removeOldTags(),s.addOptions([t])),t=n,s.trigger("select",{data:t})});i.term!==t.term&&(this.$search.length&&(this.$search.val(i.term),this.$search.trigger("focus")),t.term=i.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,s){for(var i=n.get("tokenSeparators")||[],r=t.term,o=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};o<r.length;){var l=r[o];-1!==i.indexOf(l)?(l=r.substr(0,o),null!=(l=a(c.extend({},t,{term:l})))?(s(l),r=r.substr(o+1)||"",o=0):o++):o++}return{term:r}},e}),u.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),u.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),u.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("select",function(){s._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var s=this;this._checkIfMaximumSelected(function(){e.call(s,t,n)})},e.prototype._checkIfMaximumSelected=function(e,t){var n=this;this.current(function(e){e=null!=e?e.length:0;0<n.maximumSelectionLength&&e>=n.maximumSelectionLength?n.trigger("results:message",{message:"maximumSelected",args:{maximum:n.maximumSelectionLength}}):t&&t()})},e}),u.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),u.define("select2/dropdown/search",["jquery"],function(r){function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("translations").get("search"),e=r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=e,this.$search=e.find("input"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",n()),t.prepend(e),t},e.prototype.bind=function(e,t,n){var s=this,i=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){s.trigger("keypress",e),s._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){r(this).off("keyup")}),this.$search.on("keyup input",function(e){s.handleSearch(e)}),t.on("open",function(){s.$search.attr("tabindex",0),s.$search.attr("aria-controls",i),s.$search.trigger("focus"),window.setTimeout(function(){s.$search.trigger("focus")},0)}),t.on("close",function(){s.$search.attr("tabindex",-1),s.$search.removeAttr("aria-controls"),s.$search.removeAttr("aria-activedescendant"),s.$search.val(""),s.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||s.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(s.showSearch(e)?s.$searchContainer[0].classList.remove("select2-search--hide"):s.$searchContainer[0].classList.add("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?s.$search.attr("aria-activedescendant",e.data._resultId):s.$search.removeAttr("aria-activedescendant")})},e.prototype.handleSearch=function(e){var t;this._keyUpPrevented||(t=this.$search.val(),this.trigger("query",{term:t})),this._keyUpPrevented=!1},e.prototype.showSearch=function(e,t){return!0},e}),u.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,s){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,s)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return t="string"==typeof t?{id:"",text:t}:t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),s=t.length-1;0<=s;s--){var i=t[s];this.placeholder.id===i.id&&n.splice(s,1)}return n},e}),u.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,s){this.lastParams={},e.call(this,t,n,s),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("query",function(e){s.lastParams=e,s.loading=!0}),t.on("query:append",function(e){s.lastParams=e,s.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);!this.loading&&e&&(e=this.$results.offset().top+this.$results.outerHeight(!1),this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=e+50&&this.loadMore())},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),u.define("select2/dropdown/attachBody",["jquery","../utils"],function(u,o){function e(e,t,n){this.$dropdownParent=u(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("open",function(){s._showDropdown(),s._attachPositioningHandler(t),s._bindContainerResultHandlers(t)}),t.on("close",function(){s._hideDropdown(),s._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t[0].classList.remove("select2"),t[0].classList.add("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=u("<span></span>"),e=e.call(this);return t.append(e),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){var n;this._containerResultsHandlersBound||(n=this,t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0)},e.prototype._attachPositioningHandler=function(e,t){var n=this,s="scroll.select2."+t.id,i="resize.select2."+t.id,r="orientationchange.select2."+t.id,t=this.$container.parents().filter(o.hasScroll);t.each(function(){o.StoreData(this,"select2-scroll-position",{x:u(this).scrollLeft(),y:u(this).scrollTop()})}),t.on(s,function(e){var t=o.GetData(this,"select2-scroll-position");u(this).scrollTop(t.y)}),u(window).on(s+" "+i+" "+r,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,s="resize.select2."+t.id,t="orientationchange.select2."+t.id;this.$container.parents().filter(o.hasScroll).off(n),u(window).off(n+" "+s+" "+t)},e.prototype._positionDropdown=function(){var e=u(window),t=this.$dropdown[0].classList.contains("select2-dropdown--above"),n=this.$dropdown[0].classList.contains("select2-dropdown--below"),s=null,i=this.$container.offset();i.bottom=i.top+this.$container.outerHeight(!1);var r={height:this.$container.outerHeight(!1)};r.top=i.top,r.bottom=i.top+r.height;var o=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<i.top-o,e=l>i.bottom+o,a={left:i.left,top:r.bottom},l=this.$dropdownParent;"static"===l.css("position")&&(l=l.offsetParent());i={top:0,left:0};(u.contains(document.body,l[0])||l[0].isConnected)&&(i=l.offset()),a.top-=i.top,a.left-=i.left,t||n||(s="below"),e||!c||t?!c&&e&&t&&(s="below"):s="above",("above"==s||t&&"below"!==s)&&(a.top=r.top-i.top-o),null!=s&&(this.$dropdown[0].classList.remove("select2-dropdown--below"),this.$dropdown[0].classList.remove("select2-dropdown--above"),this.$dropdown[0].classList.add("select2-dropdown--"+s),this.$container[0].classList.remove("select2-container--below"),this.$container[0].classList.remove("select2-container--above"),this.$container[0].classList.add("select2-container--"+s)),this.$dropdownContainer.css(a)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),u.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,s){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,s)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,s=0;s<t.length;s++){var i=t[s];i.children?n+=e(i.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),u.define("select2/dropdown/selectOnClose",["../utils"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("close",function(e){s._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}n=this.getHighlightedResults();n.length<1||(null!=(n=s.GetData(n[0],"data")).element&&n.element.selected||null==n.element&&n.selected||this.trigger("select",{data:n}))},e}),u.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("select",function(e){s._selectTriggered(e)}),t.on("unselect",function(e){s._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),u.define("select2/dropdown/dropdownCss",["../utils"],function(n){function e(){}return e.prototype.render=function(e){var t=e.call(this),e=this.options.get("dropdownCssClass")||"";return-1!==e.indexOf(":all:")&&(e=e.replace(":all:",""),n.copyNonInternalCssClasses(t[0],this.$element[0])),t.addClass(e),t},e}),u.define("select2/dropdown/tagsSearchHighlight",["../utils"],function(s){function e(){}return e.prototype.highlightFirstItem=function(e){var t=this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");if(0<t.length){var n=t.first(),t=s.GetData(n[0],"data").element;if(t&&t.getAttribute&&"true"===t.getAttribute("data-select2-tag"))return void n.trigger("mouseenter")}e.call(this)},e}),u.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,e="Please delete "+t+" character";return 1!=t&&(e+="s"),e},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"},removeItem:function(){return"Remove item"},search:function(){return"Search"}}}),u.define("select2/defaults",["jquery","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/selectionCss","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./dropdown/dropdownCss","./dropdown/tagsSearchHighlight","./i18n/en"],function(l,r,o,a,c,u,d,p,h,f,g,t,m,y,v,_,b,$,w,x,A,D,S,E,O,C,L,T,q,I,e){function n(){this.reset()}return n.prototype.apply=function(e){var t;null==(e=l.extend(!0,{},this.defaults,e)).dataAdapter&&(null!=e.ajax?e.dataAdapter=v:null!=e.data?e.dataAdapter=y:e.dataAdapter=m,0<e.minimumInputLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,$)),0<e.maximumInputLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,w)),0<e.maximumSelectionLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,x)),e.tags&&(e.dataAdapter=f.Decorate(e.dataAdapter,_)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=f.Decorate(e.dataAdapter,b))),null==e.resultsAdapter&&(e.resultsAdapter=r,null!=e.ajax&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,E)),null!=e.placeholder&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,S)),e.selectOnClose&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,L)),e.tags&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,I))),null==e.dropdownAdapter&&(e.multiple?e.dropdownAdapter=A:(t=f.Decorate(A,D),e.dropdownAdapter=t),0!==e.minimumResultsForSearch&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,C)),e.closeOnSelect&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,T)),null!=e.dropdownCssClass&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,q)),e.dropdownAdapter=f.Decorate(e.dropdownAdapter,O)),null==e.selectionAdapter&&(e.multiple?e.selectionAdapter=a:e.selectionAdapter=o,null!=e.placeholder&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,c)),e.allowClear&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,u)),e.multiple&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,d)),null!=e.selectionCssClass&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,p)),e.selectionAdapter=f.Decorate(e.selectionAdapter,h)),e.language=this._resolveLanguage(e.language),e.language.push("en");for(var n=[],s=0;s<e.language.length;s++){var i=e.language[s];-1===n.indexOf(i)&&n.push(i)}return e.language=n,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdLanguageBase:"./i18n/",autocomplete:"off",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:f.escapeMarkup,language:{},matcher:function e(t,n){if(null==t.term||""===t.term.trim())return n;if(n.children&&0<n.children.length){for(var s=l.extend(!0,{},n),i=n.children.length-1;0<=i;i--)null==e(t,n.children[i])&&s.children.splice(i,1);return 0<s.children.length?s:e(t,s)}var r=a(n.text).toUpperCase(),o=a(t.term).toUpperCase();return-1<r.indexOf(o)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,s=this.defaults.language,i=t.prop("lang"),t=t.closest("[lang]").prop("lang"),t=Array.prototype.concat.call(this._resolveLanguage(i),this._resolveLanguage(n),this._resolveLanguage(s),this._resolveLanguage(t));return e.language=t,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(l.isEmptyObject(e))return[];if(l.isPlainObject(e))return[e];for(var t,n=Array.isArray(e)?e:[e],s=[],i=0;i<n.length;i++)s.push(n[i]),"string"==typeof n[i]&&0<n[i].indexOf("-")&&(t=n[i].split("-")[0],s.push(t));return s},n.prototype._processTranslations=function(e,t){for(var n=new g,s=0;s<e.length;s++){var i=new g,r=e[s];if("string"==typeof r)try{i=g.loadPath(r)}catch(e){try{r=this.defaults.amdLanguageBase+r,i=g.loadPath(r)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+r+'" could not be automatically loaded. A fallback will be used instead.')}}else i=l.isPlainObject(r)?new g(r):r;n.extend(i)}return n},n.prototype.set=function(e,t){var n={};n[l.camelCase(e)]=t;n=f._convertData(n);l.extend(!0,this.defaults,n)},new n}),u.define("select2/options",["jquery","./defaults","./utils"],function(c,n,u){function e(e,t){this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=n.applyFromElement(this.options,t)),this.options=n.apply(this.options)}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.autocomplete&&e.prop("autocomplete")&&(this.options.autocomplete=e.prop("autocomplete")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),u.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),u.StoreData(e[0],"data",u.GetData(e[0],"select2Tags")),u.StoreData(e[0],"tags",!0)),u.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",u.GetData(e[0],"ajaxUrl")),u.StoreData(e[0],"ajax-Url",u.GetData(e[0],"ajaxUrl")));var n={};function s(e,t){return t.toUpperCase()}for(var i=0;i<e[0].attributes.length;i++){var r=e[0].attributes[i].name,o="data-";r.substr(0,o.length)==o&&(r=r.substring(o.length),o=u.GetData(e[0],r),n[r.replace(/-([a-z])/g,s)]=o)}c.fn.jquery&&"1."==c.fn.jquery.substr(0,2)&&e[0].dataset&&(n=c.extend(!0,{},e[0].dataset,n));var a,l=c.extend(!0,{},u.GetData(e[0]),n);for(a in l=u._convertData(l))-1<t.indexOf(a)||(c.isPlainObject(this.options[a])?c.extend(this.options[a],l[a]):this.options[a]=l[a]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),u.define("select2/core",["jquery","./options","./utils","./keys"],function(t,i,r,s){var o=function(e,t){null!=r.GetData(e[0],"select2")&&r.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new i(t,e),o.__super__.constructor.call(this);var n=e.attr("tabindex")||0;r.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");t=this.options.get("dataAdapter");this.dataAdapter=new t(e,this.options);n=this.render();this._placeContainer(n);t=this.options.get("selectionAdapter");this.selection=new t(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,n);t=this.options.get("dropdownAdapter");this.dropdown=new t(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,n);n=this.options.get("resultsAdapter");this.results=new n(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var s=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){s.trigger("selection:update",{data:e})}),e[0].classList.add("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),r.StoreData(e[0],"select2",this),e.data("select2",this)};return r.Extend(o,r.Observable),o.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+r.generateChars(2):r.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},o.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},o.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var s=this._resolveWidth(e,"style");return null!=s?s:this._resolveWidth(e,"element")}if("element"==t){s=e.outerWidth(!1);return s<=0?"auto":s+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;e=e.attr("style");if("string"!=typeof e)return null;for(var i=e.split(";"),r=0,o=i.length;r<o;r+=1){var a=i[r].replace(/\s/g,"").match(n);if(null!==a&&1<=a.length)return a[1]}return null},o.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},o.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=r.bind(this._syncAttributes,this),this._syncS=r.bind(this._syncSubtree,this),this._observer=new window.MutationObserver(function(e){t._syncA(),t._syncS(e)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})},o.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},o.prototype._registerSelectionEvents=function(){var n=this,s=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===s.indexOf(e)&&n.trigger(e,t)})},o.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},o.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},o.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container[0].classList.add("select2-container--open")}),this.on("close",function(){n.$container[0].classList.remove("select2-container--open")}),this.on("enable",function(){n.$container[0].classList.remove("select2-container--disabled")}),this.on("disable",function(){n.$container[0].classList.add("select2-container--disabled")}),this.on("blur",function(){n.$container[0].classList.remove("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===s.ESC||t===s.UP&&e.altKey?(n.close(e),e.preventDefault()):t===s.ENTER||t===s.TAB?(n.trigger("results:select",{}),e.preventDefault()):t===s.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===s.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===s.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===s.ENTER||t===s.SPACE||t===s.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},o.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},o.prototype._isChangeMutation=function(e){var t=this;if(e.addedNodes&&0<e.addedNodes.length){for(var n=0;n<e.addedNodes.length;n++)if(e.addedNodes[n].selected)return!0}else{if(e.removedNodes&&0<e.removedNodes.length)return!0;if(Array.isArray(e))return e.some(function(e){return t._isChangeMutation(e)})}return!1},o.prototype._syncSubtree=function(e){var e=this._isChangeMutation(e),t=this;e&&this.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})},o.prototype.trigger=function(e,t){var n=o.__super__.trigger,s={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in s){var i=s[e],s={prevented:!1,name:e,args:t};if(n.call(this,i,s),s.prevented)return void(t.prevented=!0)}n.call(this,e,t)},o.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},o.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},o.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},o.prototype.isEnabled=function(){return!this.isDisabled()},o.prototype.isDisabled=function(){return this.options.get("disabled")},o.prototype.isOpen=function(){return this.$container[0].classList.contains("select2-container--open")},o.prototype.hasFocus=function(){return this.$container[0].classList.contains("select2-container--focus")},o.prototype.focus=function(e){this.hasFocus()||(this.$container[0].classList.add("select2-container--focus"),this.trigger("focus",{}))},o.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');e=!(e=null==e||0===e.length?[!0]:e)[0];this.$element.prop("disabled",e)},o.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},o.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();e=e[0];Array.isArray(e)&&(e=e.map(function(e){return e.toString()})),this.$element.val(e).trigger("input").trigger("change")},o.prototype.destroy=function(){r.RemoveData(this.$container[0]),this.$container.remove(),this._observer.disconnect(),this._observer=null,this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",r.GetData(this.$element[0],"old-tabindex")),this.$element[0].classList.remove("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),r.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},o.prototype.render=function(){var e=t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container[0].classList.add("select2-container--"+this.options.get("theme")),r.StoreData(e[0],"element",this.$element),e},o}),u.define("jquery-mousewheel",["jquery"],function(e){return e}),u.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(i,e,r,t,o){var a;return null==i.fn.select2&&(a=["open","close","destroy"],i.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=i.extend(!0,{},t);new r(i(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,s=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=o.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,s)}),-1<a.indexOf(t)?this:n}),null==i.fn.select2.defaults&&(i.fn.select2.defaults=t),r}),{define:u.define,require:u.require});function b(e,t){return i.call(e,t)}function l(e,t){var n,s,i,r,o,a,l,c,u,d,p=t&&t.split("/"),h=y.map,f=h&&h["*"]||{};if(e){for(t=(e=e.split("/")).length-1,y.nodeIdCompat&&_.test(e[t])&&(e[t]=e[t].replace(_,"")),"."===e[0].charAt(0)&&p&&(e=p.slice(0,p.length-1).concat(e)),c=0;c<e.length;c++)"."===(d=e[c])?(e.splice(c,1),--c):".."===d&&(0===c||1===c&&".."===e[2]||".."===e[c-1]||0<c&&(e.splice(c-1,2),c-=2));e=e.join("/")}if((p||f)&&h){for(c=(n=e.split("/")).length;0<c;--c){if(s=n.slice(0,c).join("/"),p)for(u=p.length;0<u;--u)if(i=h[p.slice(0,u).join("/")],i=i&&i[s]){r=i,o=c;break}if(r)break;!a&&f&&f[s]&&(a=f[s],l=c)}!r&&a&&(r=a,o=l),r&&(n.splice(0,o,r),e=n.join("/"))}return e}function w(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),o.apply(p,e.concat([t,n]))}}function x(e){var t;if(b(m,e)&&(t=m[e],delete m[e],v[e]=!0,r.apply(p,t)),!b(g,e)&&!b(v,e))throw new Error("No "+e);return g[e]}function c(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function A(e){return e?c(e):[]}var u=s.require("jquery.select2");return t.fn.select2.amd=s,u});

/**
 * RANGE SLIDER SCRIPT
 */
(function () {
  "use strict";

  var RS = function (conf) {
    this.input = null;
    this.inputDisplay = null;
    this.slider = null;
    this.sliderWidth = 0;
    this.sliderLeft = 0;
    this.pointerWidth = 0;
    this.pointerR = null;
    this.pointerL = null;
    this.activePointer = null;
    this.selected = null;
    this.scale = null;
    this.step = 0;
    this.tipL = null;
    this.tipR = null;
    this.timeout = null;
    this.valRange = false;

    this.values = {
      start: null,
      end: null,
    };
    this.conf = {
      target: null,
      values: null,
      valuesConf: {
        count: 0,
        max: 0,
        min: 0,
      },
      set: null,
      range: false,
      width: null,
      scale: true,
      labels: true,
      tooltip: true,
      step: null,
      disabled: false,
      onChange: null,
    };

    this.cls = {
      container: "rs-container",
      background: "rs-bg",
      selected: "rs-selected",
      pointer: "rs-pointer",
      scale: "rs-scale",
      noscale: "rs-noscale",
      tip: "rs-tooltip",
    };

    for (var i in this.conf) {
      if (conf.hasOwnProperty(i)) this.conf[i] = conf[i];
    }

    this.init();
  };

  RS.prototype.init = function () {
    if (typeof this.conf.target === "object") this.input = this.conf.target;
    else this.input = document.getElementById(this.conf.target.replace("#", ""));

    if (!this.input) return console.log("Cannot find target element...");

    this.inputDisplay = getComputedStyle(this.input, null).display;
    this.input.style.display = "none";
    this.valRange = !(this.conf.values instanceof Array);

    if (this.valRange) {
      if (!this.conf.values.hasOwnProperty("min") || !this.conf.values.hasOwnProperty("max"))
        return console.log("Missing min or max value...");
    }
    return this.createSlider();
  };

  RS.prototype.createSlider = function () {
    this.slider = createElement("div", this.cls.container);
    this.slider.innerHTML = '<div class="rs-bg"></div>';
    this.selected = createElement("div", this.cls.selected);
    this.pointerL = createElement("div", this.cls.pointer, ["dir", "left"]);
    this.scale = createElement("div", this.cls.scale);

    if (this.conf.tooltip) {
      this.tipL = createElement("div", this.cls.tip);
      this.tipR = createElement("div", this.cls.tip);
      this.pointerL.appendChild(this.tipL);
    }
    this.slider.appendChild(this.selected);
    this.slider.appendChild(this.scale);
    this.slider.appendChild(this.pointerL);

    if (this.conf.range) {
      this.pointerR = createElement("div", this.cls.pointer, ["dir", "right"]);
      if (this.conf.tooltip) this.pointerR.appendChild(this.tipR);
      this.slider.appendChild(this.pointerR);
    }

    this.input.parentNode.insertBefore(this.slider, this.input.nextSibling);

    if (this.conf.width) this.slider.style.width = parseInt(this.conf.width) + "px";
    this.sliderLeft = this.slider.getBoundingClientRect().left;
    this.sliderWidth = this.slider.clientWidth;
    this.pointerWidth = this.pointerL.clientWidth;

    if (!this.conf.scale) this.slider.classList.add(this.cls.noscale);

    return this.setInitialValues();
  };

  RS.prototype.setInitialValues = function () {
    this.disabled(this.conf.disabled);

    if (this.valRange) this.conf.valuesConf = prepareArrayValues(this.conf);

    this.values.start = 0;
    this.values.end = this.conf.range ? this.conf.valuesConf.count - 1 : 0;

    if (this.conf.set && this.conf.set.length && checkInitial(this.conf)) {
      var vals = this.conf.set;

      if (this.conf.range) {
        this.values.start = vals[0] - this.conf.valuesConf.min;
        this.values.end = this.conf.set[1] ? vals[1] - this.conf.valuesConf.min : null;
        // this.values.start = this.conf.values.indexOf(vals[0]);
        // this.values.end = this.conf.set[1] ? this.conf.values.indexOf(vals[1]) : null;
      } else {
        // this.values.end = this.conf.values.indexOf(vals[0]);
        this.values.end = vals[0] - this.conf.valuesConf.min;
      }
    }

    return this.createScale();
  };

  RS.prototype.createScale = function (resize) {
    // this.step = this.sliderWidth / (this.conf.values.length - 1);
    this.step = this.sliderWidth / (this.conf.valuesConf.count - 1);

    // for (var i = 0, iLen = this.conf.values.length; i < iLen; i++) {
    // for (var i = 0, iLen = this.conf.valuesConf.count; i < iLen; i++) {
    var spanMin = createElement("span"),
      insMin = createElement("ins");

    spanMin.appendChild(insMin);
    this.scale.appendChild(spanMin);

    spanMin.style.width = this.step + "px";

    if (!this.conf.labels) {
      insMin.innerHTML = this.conf.valuesConf.min;
    } else {
      // ins.innerHTML = this.conf.values[i];
      insMin.innerHTML = this.conf.valuesConf.min;
    }

    insMin.style.marginLeft = (insMin.clientWidth / 2) * -1 + "px";
    // }

    var spanMax = createElement("span"),
      insMax = createElement("ins");

    spanMax.appendChild(insMax);
    this.scale.appendChild(spanMax);

    spanMax.style.width = this.step + "px";

    if (!this.conf.labels) {
      insMax.innerHTML = this.conf.valuesConf.max;
    } else {
      // ins.innerHTML = this.conf.values[i];
      insMax.innerHTML = this.conf.valuesConf.max;
    }

    insMax.style.marginLeft = (insMax.clientWidth / 2) * -1 + "px";
    return this.addEvents();
  };

  RS.prototype.updateScale = function () {
    this.step = this.sliderWidth / (this.conf.values.length - 1);

    var pieces = this.slider.querySelectorAll("span");

    for (var i = 0, iLen = pieces.length; i < iLen; i++) pieces[i].style.width = this.step + "px";

    return this.setValues();
  };

  RS.prototype.addEvents = function () {
    var pointers = this.slider.querySelectorAll("." + this.cls.pointer),
      pieces = this.slider.querySelectorAll("span");

    createEvents(document, "mousemove touchmove", this.move.bind(this));
    createEvents(document, "mouseup touchend touchcancel", this.drop.bind(this));

    for (var i = 0, iLen = pointers.length; i < iLen; i++)
      createEvents(pointers[i], "mousedown touchstart", this.drag.bind(this));

    for (var i = 0, iLen = pieces.length; i < iLen; i++) createEvents(pieces[i], "click", this.onClickPiece.bind(this));

    window.addEventListener("resize", this.onResize.bind(this));

    return this.setValues();
  };

  RS.prototype.drag = function (e) {
    e.preventDefault();

    if (this.conf.disabled) return;

    var dir = e.target.getAttribute("data-dir");
    if (dir === "left") this.activePointer = this.pointerL;
    if (dir === "right") this.activePointer = this.pointerR;

    return this.slider.classList.add("sliding");
  };

  RS.prototype.move = function (e) {
    if (this.activePointer && !this.conf.disabled) {
      var coordX = e.type === "touchmove" ? e.touches[0].clientX : e.pageX,
        index = coordX - this.sliderLeft - this.pointerWidth / 2;

      index = Math.round(index / this.step);

      if (index <= 0) index = 0;
      // if (index > this.conf.values.length - 1) index = this.conf.values.length - 1;
      if (index > this.conf.valuesConf.count - 1) index = this.conf.valuesConf.count - 1;

      if (this.conf.range) {
        if (this.activePointer === this.pointerL) this.values.start = index;
        if (this.activePointer === this.pointerR) this.values.end = index;
      } else this.values.end = index;

      return this.setValues();
    }
  };

  RS.prototype.drop = function () {
    this.activePointer = null;
  };

  RS.prototype.setValues = function (start, end) {
    var activePointer = this.conf.range ? "start" : "end";

    if (start && this.conf.values.indexOf(start) > -1) this.values[activePointer] = this.conf.values.indexOf(start);

    if (end && this.conf.values.indexOf(end) > -1) this.values.end = this.conf.values.indexOf(end);

    if (this.conf.range && this.values.start > this.values.end) this.values.start = this.values.end;

    this.pointerL.style.left = this.values[activePointer] * this.step - this.pointerWidth / 2 + "px";

    if (this.conf.range) {
      if (this.conf.tooltip) {
        // this.tipL.innerHTML = this.conf.values[this.values.start];
        // this.tipR.innerHTML = this.conf.values[this.values.end];
        this.tipL.innerHTML = this.values.start + this.conf.valuesConf.min;
        this.tipR.innerHTML = this.values.end + this.conf.valuesConf.min;
      }
      // this.input.value = this.conf.values[this.values.start] + "," + this.conf.values[this.values.end];
      this.input.value =
        this.values.start + this.conf.valuesConf.min + "," + (this.values.end + this.conf.valuesConf.min);
      this.pointerR.style.left = this.values.end * this.step - this.pointerWidth / 2 + "px";
    } else {
      // if (this.conf.tooltip) this.tipL.innerHTML = this.conf.values[this.values.end];
      // this.input.value = this.conf.values[this.values.end];
      if (this.conf.tooltip) this.tipL.innerHTML = this.values.end + this.conf.valuesConf.min;
      this.input.value = this.values.end + this.conf.valuesConf.min;
    }

    // if (this.values.end > this.conf.values.length - 1) this.values.end = this.conf.values.length - 1;
    // if (this.values.start < 0) this.values.start = 0;
    if (this.values.end > this.conf.valuesConf.count - 1) this.values.end = this.conf.valuesConf.count - 1;
    if (this.values.start < 0) this.values.start = 0;

    this.selected.style.width = (this.values.end - this.values.start) * this.step + "px";
    this.selected.style.left = this.values.start * this.step + "px";

    return this.onChange();
  };

  RS.prototype.onClickPiece = function (e) {
    if (this.conf.disabled) return;

    var idx = Math.round((e.clientX - this.sliderLeft) / this.step);

    // if (idx > this.conf.values.length - 1) idx = this.conf.values.length - 1;
    if (idx > this.conf.valuesConf - 1) idx = this.conf.valuesConf - 1;
    if (idx < 0) idx = 0;

    if (this.conf.range) {
      if (idx - this.values.start <= this.values.end - idx) {
        this.values.start = idx;
      } else this.values.end = idx;
    } else this.values.end = idx;

    this.slider.classList.remove("sliding");

    return this.setValues();
  };

  RS.prototype.onChange = function () {
    var _this = this;

    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(function () {
      if (_this.conf.onChange && typeof _this.conf.onChange === "function") {
        return _this.conf.onChange(_this.input.value);
      }
    }, 500);
  };

  RS.prototype.onResize = function () {
    this.sliderLeft = this.slider.getBoundingClientRect().left;
    this.sliderWidth = this.slider.clientWidth;
    return this.updateScale();
  };

  RS.prototype.disabled = function (disabled) {
    this.conf.disabled = disabled;
    this.slider.classList[disabled ? "add" : "remove"]("disabled");
  };

  RS.prototype.getValue = function () {
    return this.input.value;
  };

  RS.prototype.destroy = function () {
    this.input.style.display = this.inputDisplay;
    this.slider.remove();
  };

  var createElement = function (el, cls, dataAttr) {
      var element = document.createElement(el);
      if (cls) element.className = cls;
      if (dataAttr && dataAttr.length === 2) element.setAttribute("data-" + dataAttr[0], dataAttr[1]);

      return element;
    },
    createEvents = function (el, ev, callback) {
      var events = ev.split(" ");

      for (var i = 0, iLen = events.length; i < iLen; i++) el.addEventListener(events[i], callback);
    };

  var prepareArrayValues = function (conf) {
    const valueRange = conf.values.max - conf.values.min;
    return {
      count: valueRange / conf.step + 1,
      max: conf.values.max,
      min: conf.values.min,
    };
  };
  var checkInitial = function (conf) {
    if (!conf.set || conf.set.length < 1) return null;
    if (conf.set[0] < conf.valuesConf.min) return null;

    if (conf.range) {
      if (conf.set.length < 2 || conf.set[1] > conf.valuesConf.max) return null;
    }
    return true;
  };

  window.rSlider = RS;
})();

/**
 * DATE PICKER LIBRARY SCRIPT
 */
/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@easepick/bundle@1.2.1/dist/index.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @license
 * Package: @easepick/bundle
 * Version: 1.2.1
 * https://easepick.com/
 * Copyright 2023 Rinat G.
 *
 * Licensed under the terms of GNU General Public License Version 2 or later. (http://www.gnu.org/licenses/gpl.html)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = "undefined" != typeof globalThis ? globalThis : t || self).easepick = t.easepick || {}));
})(this, function (t) {
  "use strict";
  class e extends Date {
    static parseDateTime(t, i = "YYYY-MM-DD", n = "en-US") {
      if (!t) return new Date(new Date().setHours(0, 0, 0, 0));
      if (t instanceof e) return t.toJSDate();
      if (t instanceof Date) return t;
      if (/^-?\d{10,}$/.test(String(t))) return new Date(Number(t));
      if ("string" == typeof t) {
        const s = [];
        let o = null;
        for (; null != (o = e.regex.exec(i)); ) "\\" !== o[1] && s.push(o);
        if (s.length) {
          const i = {
            year: null,
            month: null,
            shortMonth: null,
            longMonth: null,
            day: null,
            hour: 0,
            minute: 0,
            second: 0,
            ampm: null,
            value: "",
          };
          s[0].index > 0 && (i.value += ".*?");
          for (const [t, o] of Object.entries(s)) {
            const s = Number(t),
              { group: a, pattern: r } = e.formatPatterns(o[0], n);
            (i[a] = s + 1), (i.value += r), (i.value += ".*?");
          }
          const o = new RegExp(`^${i.value}$`);
          if (o.test(t)) {
            const s = o.exec(t),
              a = Number(s[i.year]);
            let r = null;
            i.month
              ? (r = Number(s[i.month]) - 1)
              : i.shortMonth
              ? (r = e.shortMonths(n).indexOf(s[i.shortMonth]))
              : i.longMonth && (r = e.longMonths(n).indexOf(s[i.longMonth]));
            const c = Number(s[i.day]) || 1,
              l = Number(s[i.hour]);
            let h = Number.isNaN(l) ? 0 : l;
            const d = Number(s[i.minute]),
              p = Number.isNaN(d) ? 0 : d,
              u = Number(s[i.second]),
              g = Number.isNaN(u) ? 0 : u,
              m = s[i.ampm];
            return m && "PM" === m && ((h += 12), 24 === h && (h = 0)), new Date(a, r, c, h, p, g, 0);
          }
        }
      }
      return new Date(new Date().setHours(0, 0, 0, 0));
    }
    static regex = /(\\)?(Y{2,4}|M{1,4}|D{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|A|a)/g;
    static MONTH_JS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    static shortMonths(t) {
      return e.MONTH_JS.map((e) => new Date(2019, e).toLocaleString(t, { month: "short" }));
    }
    static longMonths(t) {
      return e.MONTH_JS.map((e) => new Date(2019, e).toLocaleString(t, { month: "long" }));
    }
    static formatPatterns(t, i) {
      switch (t) {
        case "YY":
        case "YYYY":
          return { group: "year", pattern: `(\\d{${t.length}})` };
        case "M":
          return { group: "month", pattern: "(\\d{1,2})" };
        case "MM":
          return { group: "month", pattern: "(\\d{2})" };
        case "MMM":
          return { group: "shortMonth", pattern: `(${e.shortMonths(i).join("|")})` };
        case "MMMM":
          return { group: "longMonth", pattern: `(${e.longMonths(i).join("|")})` };
        case "D":
          return { group: "day", pattern: "(\\d{1,2})" };
        case "DD":
          return { group: "day", pattern: "(\\d{2})" };
        case "h":
        case "H":
          return { group: "hour", pattern: "(\\d{1,2})" };
        case "hh":
        case "HH":
          return { group: "hour", pattern: "(\\d{2})" };
        case "m":
          return { group: "minute", pattern: "(\\d{1,2})" };
        case "mm":
          return { group: "minute", pattern: "(\\d{2})" };
        case "s":
          return { group: "second", pattern: "(\\d{1,2})" };
        case "ss":
          return { group: "second", pattern: "(\\d{2})" };
        case "a":
        case "A":
          return { group: "ampm", pattern: "(AM|PM|am|pm)" };
      }
    }
    lang;
    constructor(t = null, i = "YYYY-MM-DD", n = "en-US") {
      super(e.parseDateTime(t, i, n)), (this.lang = n);
    }
    getWeek(t) {
      const e = new Date(this.midnight_ts(this)),
        i = (this.getDay() + (7 - t)) % 7;
      e.setDate(e.getDate() - i);
      const n = e.getTime();
      return (
        e.setMonth(0, 1),
        e.getDay() !== t && e.setMonth(0, 1 + ((4 - e.getDay() + 7) % 7)),
        1 + Math.ceil((n - e.getTime()) / 6048e5)
      );
    }
    clone() {
      return new e(this);
    }
    toJSDate() {
      return new Date(this);
    }
    inArray(t, e = "[]") {
      return t.some((t) => (t instanceof Array ? this.isBetween(t[0], t[1], e) : this.isSame(t, "day")));
    }
    isBetween(t, e, i = "()") {
      switch (i) {
        default:
        case "()":
          return this.midnight_ts(this) > this.midnight_ts(t) && this.midnight_ts(this) < this.midnight_ts(e);
        case "[)":
          return this.midnight_ts(this) >= this.midnight_ts(t) && this.midnight_ts(this) < this.midnight_ts(e);
        case "(]":
          return this.midnight_ts(this) > this.midnight_ts(t) && this.midnight_ts(this) <= this.midnight_ts(e);
        case "[]":
          return this.midnight_ts() >= this.midnight_ts(t) && this.midnight_ts() <= this.midnight_ts(e);
      }
    }
    isBefore(t, e = "days") {
      switch (e) {
        case "day":
        case "days":
          return (
            new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() >
            new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime()
          );
        case "month":
        case "months":
          return (
            new Date(t.getFullYear(), t.getMonth(), 1).getTime() >
            new Date(this.getFullYear(), this.getMonth(), 1).getTime()
          );
        case "year":
        case "years":
          return t.getFullYear() > this.getFullYear();
      }
      throw new Error("isBefore: Invalid unit!");
    }
    isSameOrBefore(t, e = "days") {
      switch (e) {
        case "day":
        case "days":
          return (
            new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() >=
            new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime()
          );
        case "month":
        case "months":
          return (
            new Date(t.getFullYear(), t.getMonth(), 1).getTime() >=
            new Date(this.getFullYear(), this.getMonth(), 1).getTime()
          );
      }
      throw new Error("isSameOrBefore: Invalid unit!");
    }
    isAfter(t, e = "days") {
      switch (e) {
        case "day":
        case "days":
          return (
            new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() >
            new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime()
          );
        case "month":
        case "months":
          return (
            new Date(this.getFullYear(), this.getMonth(), 1).getTime() >
            new Date(t.getFullYear(), t.getMonth(), 1).getTime()
          );
        case "year":
        case "years":
          return this.getFullYear() > t.getFullYear();
      }
      throw new Error("isAfter: Invalid unit!");
    }
    isSameOrAfter(t, e = "days") {
      switch (e) {
        case "day":
        case "days":
          return (
            new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() >=
            new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime()
          );
        case "month":
        case "months":
          return (
            new Date(this.getFullYear(), this.getMonth(), 1).getTime() >=
            new Date(t.getFullYear(), t.getMonth(), 1).getTime()
          );
      }
      throw new Error("isSameOrAfter: Invalid unit!");
    }
    isSame(t, e = "days") {
      switch (e) {
        case "day":
        case "days":
          return (
            new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() ===
            new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime()
          );
        case "month":
        case "months":
          return (
            new Date(this.getFullYear(), this.getMonth(), 1).getTime() ===
            new Date(t.getFullYear(), t.getMonth(), 1).getTime()
          );
      }
      throw new Error("isSame: Invalid unit!");
    }
    add(t, e = "days") {
      switch (e) {
        case "day":
        case "days":
          this.setDate(this.getDate() + t);
          break;
        case "month":
        case "months":
          this.setMonth(this.getMonth() + t);
      }
      return this;
    }
    subtract(t, e = "days") {
      switch (e) {
        case "day":
        case "days":
          this.setDate(this.getDate() - t);
          break;
        case "month":
        case "months":
          this.setMonth(this.getMonth() - t);
      }
      return this;
    }
    diff(t, e = "days") {
      switch (e) {
        default:
        case "day":
        case "days":
          return Math.round((this.midnight_ts() - this.midnight_ts(t)) / 864e5);
        case "month":
        case "months":
          let e = 12 * (t.getFullYear() - this.getFullYear());
          return (e -= t.getMonth()), (e += this.getMonth()), e;
      }
    }
    format(t, i = "en-US") {
      let n = "";
      const s = [];
      let o = null;
      for (; null != (o = e.regex.exec(t)); ) "\\" !== o[1] && s.push(o);
      if (s.length) {
        s[0].index > 0 && (n += t.substring(0, s[0].index));
        for (const [e, o] of Object.entries(s)) {
          const a = Number(e);
          (n += this.formatTokens(o[0], i)),
            s[a + 1] && (n += t.substring(o.index + o[0].length, s[a + 1].index)),
            a === s.length - 1 && (n += t.substring(o.index + o[0].length));
        }
      }
      return n.replace(/\\/g, "");
    }
    midnight_ts(t) {
      return t
        ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0).getTime()
        : new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0, 0).getTime();
    }
    formatTokens(t, i) {
      switch (t) {
        case "YY":
          return String(this.getFullYear()).slice(-2);
        case "YYYY":
          return String(this.getFullYear());
        case "M":
          return String(this.getMonth() + 1);
        case "MM":
          return `0${this.getMonth() + 1}`.slice(-2);
        case "MMM":
          return e.shortMonths(i)[this.getMonth()];
        case "MMMM":
          return e.longMonths(i)[this.getMonth()];
        case "D":
          return String(this.getDate());
        case "DD":
          return `0${this.getDate()}`.slice(-2);
        case "H":
          return String(this.getHours());
        case "HH":
          return `0${this.getHours()}`.slice(-2);
        case "h":
          return String(this.getHours() % 12 || 12);
        case "hh":
          return `0${this.getHours() % 12 || 12}`.slice(-2);
        case "m":
          return String(this.getMinutes());
        case "mm":
          return `0${this.getMinutes()}`.slice(-2);
        case "s":
          return String(this.getSeconds());
        case "ss":
          return `0${this.getSeconds()}`.slice(-2);
        case "a":
          return this.getHours() < 12 || 24 === this.getHours() ? "am" : "pm";
        case "A":
          return this.getHours() < 12 || 24 === this.getHours() ? "AM" : "PM";
        default:
          return "";
      }
    }
  }
  class i {
    picker;
    constructor(t) {
      this.picker = t;
    }
    render(t, i) {
      t || (t = new e()),
        t.setDate(1),
        t.setHours(0, 0, 0, 0),
        "function" == typeof this[`get${i}View`] && this[`get${i}View`](t);
    }
    getContainerView(t) {
      (this.picker.ui.container.innerHTML = ""),
        this.picker.options.header && this.picker.trigger("render", { date: t.clone(), view: "Header" }),
        this.picker.trigger("render", { date: t.clone(), view: "Main" }),
        this.picker.options.autoApply || this.picker.trigger("render", { date: t.clone(), view: "Footer" });
    }
    getHeaderView(t) {
      const e = document.createElement("header");
      this.picker.options.header instanceof HTMLElement && e.appendChild(this.picker.options.header),
        "string" == typeof this.picker.options.header && (e.innerHTML = this.picker.options.header),
        this.picker.ui.container.appendChild(e),
        this.picker.trigger("view", { target: e, date: t.clone(), view: "Header" });
    }
    getMainView(t) {
      const e = document.createElement("main");
      this.picker.ui.container.appendChild(e);
      const i = document.createElement("div");
      i.className = `calendars grid-${this.picker.options.grid}`;
      for (let e = 0; e < this.picker.options.calendars; e++) {
        const n = document.createElement("div");
        (n.className = "calendar"), i.appendChild(n);
        const s = this.getCalendarHeaderView(t.clone());
        n.appendChild(s), this.picker.trigger("view", { date: t.clone(), view: "CalendarHeader", index: e, target: s });
        const o = this.getCalendarDayNamesView();
        n.appendChild(o),
          this.picker.trigger("view", { date: t.clone(), view: "CalendarDayNames", index: e, target: o });
        const a = this.getCalendarDaysView(t.clone());
        n.appendChild(a), this.picker.trigger("view", { date: t.clone(), view: "CalendarDays", index: e, target: a });
        const r = this.getCalendarFooterView(this.picker.options.lang, t.clone());
        n.appendChild(r),
          this.picker.trigger("view", { date: t.clone(), view: "CalendarFooter", index: e, target: r }),
          this.picker.trigger("view", { date: t.clone(), view: "CalendarItem", index: e, target: n }),
          t.add(1, "month");
      }
      e.appendChild(i),
        this.picker.trigger("view", { date: t.clone(), view: "Calendars", target: i }),
        this.picker.trigger("view", { date: t.clone(), view: "Main", target: e });
    }
    getFooterView(t) {
      const e = document.createElement("footer"),
        i = document.createElement("div");
      i.className = "footer-buttons";
      const n = document.createElement("button");
      (n.className = "cancel-button unit"), (n.innerHTML = this.picker.options.locale.cancel), i.appendChild(n);
      const s = document.createElement("button");
      (s.className = "apply-button unit"),
        (s.innerHTML = this.picker.options.locale.apply),
        (s.disabled = !0),
        i.appendChild(s),
        e.appendChild(i),
        this.picker.ui.container.appendChild(e),
        this.picker.trigger("view", { date: t, target: e, view: "Footer" });
    }
    getCalendarHeaderView(t) {
      const e = document.createElement("div");
      e.className = "header";
      const i = document.createElement("div");
      (i.className = "month-name"),
        (i.innerHTML = `<span>${t.toLocaleString(this.picker.options.lang, { month: "long" })}</span> ${t.format(
          "YYYY"
        )}`),
        e.appendChild(i);
      const n = document.createElement("button");
      (n.className = "previous-button unit"),
        (n.innerHTML = this.picker.options.locale.previousMonth),
        e.appendChild(n);
      const s = document.createElement("button");
      return (
        (s.className = "next-button unit"), (s.innerHTML = this.picker.options.locale.nextMonth), e.appendChild(s), e
      );
    }
    getCalendarDayNamesView() {
      const t = document.createElement("div");
      t.className = "daynames-row";
      for (let e = 1; e <= 7; e++) {
        const i = 3 + this.picker.options.firstDay + e,
          n = document.createElement("div");
        (n.className = "dayname"),
          (n.innerHTML = new Date(1970, 0, i, 12, 0, 0, 0).toLocaleString(this.picker.options.lang, {
            weekday: "short",
          })),
          (n.title = new Date(1970, 0, i, 12, 0, 0, 0).toLocaleString(this.picker.options.lang, { weekday: "long" })),
          t.appendChild(n),
          this.picker.trigger("view", { dayIdx: i, view: "CalendarDayName", target: n });
      }
      return t;
    }
    getCalendarDaysView(t) {
      const e = document.createElement("div");
      e.className = "days-grid";
      const i = this.calcOffsetDays(t, this.picker.options.firstDay),
        n = 32 - new Date(t.getFullYear(), t.getMonth(), 32).getDate();
      for (let t = 0; t < i; t++) {
        const t = document.createElement("div");
        (t.className = "offset"), e.appendChild(t);
      }
      for (let i = 1; i <= n; i++) {
        t.setDate(i);
        const n = this.getCalendarDayView(t);
        e.appendChild(n), this.picker.trigger("view", { date: t, view: "CalendarDay", target: n });
      }
      return e;
    }
    getCalendarDayView(t) {
      const i = this.picker.options.date ? new e(this.picker.options.date) : null,
        n = new e(),
        s = document.createElement("div");
      return (
        (s.className = "day unit"),
        (s.innerHTML = t.format("D")),
        (s.dataset.time = String(t.getTime())),
        t.isSame(n, "day") && s.classList.add("today"),
        [0, 6].includes(t.getDay()) && s.classList.add("weekend"),
        this.picker.datePicked.length
          ? this.picker.datePicked[0].isSame(t, "day") && s.classList.add("selected")
          : i && t.isSame(i, "day") && s.classList.add("selected"),
        this.picker.trigger("view", { date: t, view: "CalendarDay", target: s }),
        s
      );
    }
    getCalendarFooterView(t, e) {
      const i = document.createElement("div");
      return (i.className = "footer"), i;
    }
    calcOffsetDays(t, e) {
      let i = t.getDay() - e;
      return i < 0 && (i += 7), i;
    }
  }
  class n {
    picker;
    instances = {};
    constructor(t) {
      this.picker = t;
    }
    initialize() {
      const t = [];
      this.picker.options.plugins.forEach((e) => {
        "function" == typeof e
          ? t.push(new e())
          : "string" == typeof e && "undefined" != typeof easepick && Object.prototype.hasOwnProperty.call(easepick, e)
          ? t.push(new easepick[e]())
          : console.warn(`easepick: ${e} not found.`);
      }),
        t.sort((t, e) =>
          t.priority > e.priority
            ? -1
            : t.priority < e.priority || t.dependencies.length > e.dependencies.length
            ? 1
            : t.dependencies.length < e.dependencies.length
            ? -1
            : 0
        ),
        t.forEach((t) => {
          t.attach(this.picker), (this.instances[t.getName()] = t);
        });
    }
    getInstance(t) {
      return this.instances[t];
    }
    addInstance(t) {
      if (Object.prototype.hasOwnProperty.call(this.instances, t)) console.warn(`easepick: ${t} already added.`);
      else {
        if ("undefined" != typeof easepick && Object.prototype.hasOwnProperty.call(easepick, t)) {
          const e = new easepick[t]();
          return e.attach(this.picker), (this.instances[e.getName()] = e), e;
        }
        if ("undefined" !== this.getPluginFn(t)) {
          const e = new (this.getPluginFn(t))();
          return e.attach(this.picker), (this.instances[e.getName()] = e), e;
        }
        console.warn(`easepick: ${t} not found.`);
      }
      return null;
    }
    removeInstance(t) {
      return t in this.instances && this.instances[t].detach(), delete this.instances[t];
    }
    reloadInstance(t) {
      return this.removeInstance(t), this.addInstance(t);
    }
    getPluginFn(t) {
      return [...this.picker.options.plugins].filter((e) => "function" == typeof e && new e().getName() === t).shift();
    }
  }
  class s {
    Calendar = new i(this);
    PluginManager = new n(this);
    calendars = [];
    datePicked = [];
    cssLoaded = 0;
    binds = { hidePicker: this.hidePicker.bind(this), show: this.show.bind(this) };
    options = {
      doc: document,
      css: [],
      element: null,
      firstDay: 1,
      grid: 1,
      calendars: 1,
      lang: "en-US",
      date: null,
      format: "YYYY-MM-DD",
      readonly: !0,
      autoApply: !0,
      header: !1,
      inline: !1,
      scrollToDate: !0,
      locale: {
        nextMonth:
          '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>',
        previousMonth:
          '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>',
        cancel: "Cancel",
        apply: "Apply",
      },
      documentClick: this.binds.hidePicker,
      plugins: [],
    };
    ui = { container: null, shadowRoot: null, wrapper: null };
    version = "1.2.1";
    constructor(t) {
      const e = { ...this.options.locale, ...t.locale };
      (this.options = { ...this.options, ...t }),
        (this.options.locale = e),
        this.handleOptions(),
        (this.ui.wrapper = document.createElement("span")),
        (this.ui.wrapper.style.display = "none"),
        (this.ui.wrapper.style.position = "absolute"),
        (this.ui.wrapper.style.pointerEvents = "none"),
        (this.ui.wrapper.className = "easepick-wrapper"),
        this.ui.wrapper.attachShadow({ mode: "open" }),
        (this.ui.shadowRoot = this.ui.wrapper.shadowRoot),
        (this.ui.container = document.createElement("div")),
        (this.ui.container.className = "container"),
        this.options.zIndex && (this.ui.container.style.zIndex = String(this.options.zIndex)),
        this.options.inline &&
          ((this.ui.wrapper.style.position = "relative"), this.ui.container.classList.add("inline")),
        this.ui.shadowRoot.appendChild(this.ui.container),
        this.options.element.after(this.ui.wrapper),
        this.handleCSS(),
        this.options.element.addEventListener("click", this.binds.show),
        this.on("view", this.onView.bind(this)),
        this.on("render", this.onRender.bind(this)),
        this.PluginManager.initialize(),
        this.parseValues(),
        "function" == typeof this.options.setup && this.options.setup(this),
        this.on("click", this.onClick.bind(this));
      const i = this.options.scrollToDate ? this.getDate() : null;
      this.renderAll(i);
    }
    on(t, e, i = {}) {
      this.ui.container.addEventListener(t, e, i);
    }
    off(t, e, i = {}) {
      this.ui.container.removeEventListener(t, e, i);
    }
    trigger(t, e = {}) {
      return this.ui.container.dispatchEvent(new CustomEvent(t, { detail: e }));
    }
    destroy() {
      this.options.element.removeEventListener("click", this.binds.show),
        "function" == typeof this.options.documentClick &&
          document.removeEventListener("click", this.options.documentClick, !0),
        Object.keys(this.PluginManager.instances).forEach((t) => {
          this.PluginManager.removeInstance(t);
        }),
        this.ui.wrapper.remove();
    }
    onRender(t) {
      const { view: e, date: i } = t.detail;
      this.Calendar.render(i, e);
    }
    onView(t) {
      const { view: e, target: i } = t.detail;
      "Footer" === e && this.datePicked.length && (i.querySelector(".apply-button").disabled = !1);
    }
    onClickHeaderButton(t) {
      this.isCalendarHeaderButton(t) &&
        (t.classList.contains("next-button")
          ? this.calendars[0].add(1, "month")
          : this.calendars[0].subtract(1, "month"),
        this.renderAll(this.calendars[0]));
    }
    onClickCalendarDay(t) {
      if (this.isCalendarDay(t)) {
        const i = new e(t.dataset.time);
        this.options.autoApply
          ? (this.setDate(i), this.trigger("select", { date: this.getDate() }), this.hide())
          : ((this.datePicked[0] = i), this.trigger("preselect", { date: this.getDate() }), this.renderAll());
      }
    }
    onClickApplyButton(t) {
      if (this.isApplyButton(t)) {
        if (this.datePicked[0] instanceof Date) {
          const t = this.datePicked[0].clone();
          this.setDate(t);
        }
        this.hide(), this.trigger("select", { date: this.getDate() });
      }
    }
    onClickCancelButton(t) {
      this.isCancelButton(t) && this.hide();
    }
    onClick(t) {
      const e = t.target;
      if (e instanceof HTMLElement) {
        const t = e.closest(".unit");
        if (!(t instanceof HTMLElement)) return;
        this.onClickHeaderButton(t),
          this.onClickCalendarDay(t),
          this.onClickApplyButton(t),
          this.onClickCancelButton(t);
      }
    }
    isShown() {
      return this.ui.container.classList.contains("inline") || this.ui.container.classList.contains("show");
    }
    show(t) {
      if (this.isShown()) return;
      const e = t && "target" in t ? t.target : this.options.element,
        { top: i, left: n } = this.adjustPosition(e);
      (this.ui.container.style.top = `${i}px`),
        (this.ui.container.style.left = `${n}px`),
        this.ui.container.classList.add("show"),
        this.trigger("show", { target: e });
    }
    hide() {
      this.ui.container.classList.remove("show"), (this.datePicked.length = 0), this.renderAll(), this.trigger("hide");
    }
    setDate(t) {
      const i = new e(t, this.options.format);
      (this.options.date = i.clone()), this.updateValues(), this.calendars.length && this.renderAll();
    }
    getDate() {
      return this.options.date instanceof e ? this.options.date.clone() : null;
    }
    parseValues() {
      this.options.date
        ? this.setDate(this.options.date)
        : this.options.element instanceof HTMLInputElement &&
          this.options.element.value.length &&
          this.setDate(this.options.element.value),
        this.options.date instanceof Date || (this.options.date = null);
    }
    updateValues() {
      const t = this.getDate(),
        e = t instanceof Date ? t.format(this.options.format, this.options.lang) : "",
        i = this.options.element;
      i instanceof HTMLInputElement ? (i.value = e) : i instanceof HTMLElement && (i.innerText = e);
    }
    hidePicker(t) {
      let e = t.target,
        i = null;
      e.shadowRoot && ((e = t.composedPath()[0]), (i = e.getRootNode().host)),
        this.isShown() && i !== this.ui.wrapper && e !== this.options.element && this.hide();
    }
    renderAll(t) {
      this.trigger("render", { view: "Container", date: (t || this.calendars[0]).clone() });
    }
    isCalendarHeaderButton(t) {
      return ["previous-button", "next-button"].some((e) => t.classList.contains(e));
    }
    isCalendarDay(t) {
      return t.classList.contains("day");
    }
    isApplyButton(t) {
      return t.classList.contains("apply-button");
    }
    isCancelButton(t) {
      return t.classList.contains("cancel-button");
    }
    gotoDate(t) {
      const i = new e(t, this.options.format);
      i.setDate(1), (this.calendars[0] = i.clone()), this.renderAll();
    }
    clear() {
      (this.options.date = null),
        (this.datePicked.length = 0),
        this.updateValues(),
        this.renderAll(),
        this.trigger("clear");
    }
    handleOptions() {
      this.options.element instanceof HTMLElement ||
        (this.options.element = this.options.doc.querySelector(this.options.element)),
        "function" == typeof this.options.documentClick &&
          document.addEventListener("click", this.options.documentClick, !0),
        this.options.element instanceof HTMLInputElement && (this.options.element.readOnly = this.options.readonly),
        this.options.date
          ? (this.calendars[0] = new e(this.options.date, this.options.format))
          : (this.calendars[0] = new e());
    }
    handleCSS() {
      if (Array.isArray(this.options.css))
        this.options.css.forEach((t) => {
          const e = document.createElement("link");
          (e.href = t), (e.rel = "stylesheet");
          const i = () => {
            this.cssLoaded++, this.cssLoaded === this.options.css.length && (this.ui.wrapper.style.display = "");
          };
          e.addEventListener("load", i), e.addEventListener("error", i), this.ui.shadowRoot.append(e);
        });
      else if ("string" == typeof this.options.css) {
        const t = document.createElement("style"),
          e = document.createTextNode(this.options.css);
        t.appendChild(e), this.ui.shadowRoot.append(t), (this.ui.wrapper.style.display = "");
      } else
        "function" == typeof this.options.css &&
          (this.options.css.call(this, this), (this.ui.wrapper.style.display = ""));
    }
    adjustPosition(t) {
      const e = t.getBoundingClientRect(),
        i = this.ui.wrapper.getBoundingClientRect();
      this.ui.container.classList.add("calc");
      const n = this.ui.container.getBoundingClientRect();
      this.ui.container.classList.remove("calc");
      let s = e.bottom - i.bottom,
        o = e.left - i.left;
      return (
        "undefined" != typeof window &&
          (window.innerHeight < s + n.height && s - n.height >= 0 && (s = e.top - i.top - n.height),
          window.innerWidth < o + n.width && e.right - n.width >= 0 && (o = e.right - i.right - n.width)),
        { left: o, top: s }
      );
    }
  }
  var o = Object.freeze({ __proto__: null, Core: s, create: s });
  class a {
    picker;
    options;
    priority = 0;
    dependencies = [];
    attach(t) {
      const e = this.getName(),
        i = { ...this.options };
      this.options = { ...this.options, ...(t.options[e] || {}) };
      for (const n of Object.keys(i))
        if (
          null !== i[n] &&
          "object" == typeof i[n] &&
          Object.keys(i[n]).length &&
          e in t.options &&
          n in t.options[e]
        ) {
          const s = { ...t.options[e][n] };
          null !== s &&
            "object" == typeof s &&
            Object.keys(s).length &&
            Object.keys(s).every((t) => Object.keys(i[n]).includes(t)) &&
            (this.options[n] = { ...i[n], ...s });
        }
      if (((this.picker = t), this.dependenciesNotFound())) {
        const t = this.dependencies.filter((t) => !this.pluginsAsStringArray().includes(t));
        return void console.warn(`${this.getName()}: required dependencies (${t.join(", ")}).`);
      }
      const n = this.camelCaseToKebab(this.getName());
      this.picker.ui.container.classList.add(n), this.onAttach();
    }
    detach() {
      const t = this.camelCaseToKebab(this.getName());
      this.picker.ui.container.classList.remove(t), "function" == typeof this.onDetach && this.onDetach();
    }
    dependenciesNotFound() {
      return this.dependencies.length && !this.dependencies.every((t) => this.pluginsAsStringArray().includes(t));
    }
    pluginsAsStringArray() {
      return this.picker.options.plugins.map((t) => ("function" == typeof t ? new t().getName() : t));
    }
    camelCaseToKebab(t) {
      return t.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
    }
  }
  (t.AmpPlugin = class extends a {
    rangePlugin;
    lockPlugin;
    priority = 10;
    binds = { onView: this.onView.bind(this), onColorScheme: this.onColorScheme.bind(this) };
    options = {
      dropdown: { months: !1, years: !1, minYear: 1950, maxYear: null },
      darkMode: !0,
      locale: {
        resetButton:
          '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>',
      },
    };
    matchMedia;
    getName() {
      return "AmpPlugin";
    }
    onAttach() {
      this.options.darkMode &&
        window &&
        "matchMedia" in window &&
        ((this.matchMedia = window.matchMedia("(prefers-color-scheme: dark)")),
        this.matchMedia.matches && (this.picker.ui.container.dataset.theme = "dark"),
        this.matchMedia.addEventListener("change", this.binds.onColorScheme)),
        this.options.weekNumbers && this.picker.ui.container.classList.add("week-numbers"),
        this.picker.on("view", this.binds.onView);
    }
    onDetach() {
      this.options.darkMode &&
        window &&
        "matchMedia" in window &&
        this.matchMedia.removeEventListener("change", this.binds.onColorScheme),
        this.picker.ui.container.removeAttribute("data-theme"),
        this.picker.ui.container.classList.remove("week-numbers"),
        this.picker.off("view", this.binds.onView);
    }
    onView(t) {
      (this.lockPlugin = this.picker.PluginManager.getInstance("LockPlugin")),
        (this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin")),
        this.handleDropdown(t),
        this.handleResetButton(t),
        this.handleWeekNumbers(t);
    }
    onColorScheme(t) {
      const e = t.matches ? "dark" : "light";
      this.picker.ui.container.dataset.theme = e;
    }
    handleDropdown(t) {
      const { view: i, target: n, date: s, index: o } = t.detail;
      if ("CalendarHeader" === i) {
        const t = n.querySelector(".month-name");
        if (this.options.dropdown.months) {
          t.childNodes[0].remove();
          const i = document.createElement("select");
          i.className = "month-name--select month-name--dropdown";
          for (let t = 0; t < 12; t += 1) {
            const n = document.createElement("option"),
              o = new e(new Date(s.getFullYear(), t, 2, 0, 0, 0)),
              a = new e(new Date(s.getFullYear(), t, 1, 0, 0, 0));
            (n.value = String(t)),
              (n.text = o.toLocaleString(this.picker.options.lang, { month: "long" })),
              this.lockPlugin &&
                (n.disabled =
                  (this.lockPlugin.options.minDate && a.isBefore(new e(this.lockPlugin.options.minDate), "month")) ||
                  (this.lockPlugin.options.maxDate && a.isAfter(new e(this.lockPlugin.options.maxDate), "month"))),
              (n.selected = a.getMonth() === s.getMonth()),
              i.appendChild(n);
          }
          i.addEventListener("change", (t) => {
            const e = t.target;
            this.picker.calendars[0].setDate(1),
              this.picker.calendars[0].setMonth(Number(e.value)),
              this.picker.renderAll();
          }),
            t.prepend(i);
        }
        if (this.options.dropdown.years) {
          t.childNodes[1].remove();
          const i = document.createElement("select");
          i.className = "month-name--select";
          const n = this.options.dropdown.minYear,
            o = this.options.dropdown.maxYear ? this.options.dropdown.maxYear : new Date().getFullYear();
          if (s.getFullYear() > o) {
            const t = document.createElement("option");
            (t.value = String(s.getFullYear())),
              (t.text = String(s.getFullYear())),
              (t.selected = !0),
              (t.disabled = !0),
              i.appendChild(t);
          }
          for (let t = o; t >= n; t -= 1) {
            const n = document.createElement("option"),
              o = new e(new Date(t, 0, 1, 0, 0, 0));
            (n.value = String(t)),
              (n.text = String(t)),
              this.lockPlugin &&
                (n.disabled =
                  (this.lockPlugin.options.minDate && o.isBefore(new e(this.lockPlugin.options.minDate), "year")) ||
                  (this.lockPlugin.options.maxDate && o.isAfter(new e(this.lockPlugin.options.maxDate), "year"))),
              (n.selected = s.getFullYear() === t),
              i.appendChild(n);
          }
          if (s.getFullYear() < n) {
            const t = document.createElement("option");
            (t.value = String(s.getFullYear())),
              (t.text = String(s.getFullYear())),
              (t.selected = !0),
              (t.disabled = !0),
              i.appendChild(t);
          }
          if ("asc" === this.options.dropdown.years) {
            const t = Array.prototype.slice.call(i.childNodes).reverse();
            (i.innerHTML = ""),
              t.forEach((t) => {
                (t.innerHTML = t.value), i.appendChild(t);
              });
          }
          i.addEventListener("change", (t) => {
            const e = t.target;
            this.picker.calendars[0].setFullYear(Number(e.value)), this.picker.renderAll();
          }),
            t.appendChild(i);
        }
      }
    }
    handleResetButton(t) {
      const { view: e, target: i } = t.detail;
      if ("CalendarHeader" === e && this.options.resetButton) {
        const t = document.createElement("button");
        (t.className = "reset-button unit"),
          (t.innerHTML = this.options.locale.resetButton),
          t.addEventListener("click", (t) => {
            t.preventDefault();
            let e = !0;
            "function" == typeof this.options.resetButton && (e = this.options.resetButton.call(this)),
              e && this.picker.clear();
          }),
          i.appendChild(t);
      }
    }
    handleWeekNumbers(t) {
      if (this.options.weekNumbers) {
        const { view: i, target: n } = t.detail;
        if ("CalendarDayNames" === i) {
          const t = document.createElement("div");
          (t.className = "wnum-header"), (t.innerHTML = "Wk"), n.prepend(t);
        }
        "CalendarDays" === i &&
          [...n.children].forEach((t, i) => {
            if (0 === i || i % 7 == 0) {
              let i;
              if (t.classList.contains("day")) i = new e(t.dataset.time);
              else {
                const t = n.querySelector(".day");
                i = new e(t.dataset.time);
              }
              let s = i.getWeek(this.picker.options.firstDay);
              53 === s && 0 === i.getMonth() && (s = "53/1");
              const o = document.createElement("div");
              (o.className = "wnum-item"), (o.innerHTML = String(s)), n.insertBefore(o, t);
            }
          });
      }
    }
  }),
    (t.DateTime = e),
    (t.KbdPlugin = class extends a {
      docElement = null;
      rangePlugin;
      binds = { onView: this.onView.bind(this), onKeydown: this.onKeydown.bind(this) };
      options = { unitIndex: 1, dayIndex: 2 };
      getName() {
        return "KbdPlugin";
      }
      onAttach() {
        const t = this.picker.options.element,
          e = t.getBoundingClientRect();
        if (
          ((this.docElement = document.createElement("span")),
          (this.docElement.style.position = "absolute"),
          (this.docElement.style.top = `${t.offsetTop}px`),
          (this.docElement.style.left = t.offsetLeft + e.width - 25 + "px"),
          this.docElement.attachShadow({ mode: "open" }),
          this.options.html)
        )
          this.docElement.shadowRoot.innerHTML = this.options.html;
        else {
          const t = `\n      <style>\n      button {\n        border: none;\n        background: transparent;\n        font-size: ${
            window.getComputedStyle(this.picker.options.element).fontSize
          };\n      }\n      </style>\n\n      <button>&#128197;</button>\n      `;
          this.docElement.shadowRoot.innerHTML = t;
        }
        const i = this.docElement.shadowRoot.querySelector("button");
        i &&
          (i.addEventListener(
            "click",
            (t) => {
              t.preventDefault(), this.picker.show({ target: this.picker.options.element });
            },
            { capture: !0 }
          ),
          i.addEventListener(
            "keydown",
            (t) => {
              "Escape" === t.code && this.picker.hide();
            },
            { capture: !0 }
          )),
          this.picker.options.element.after(this.docElement),
          this.picker.on("view", this.binds.onView),
          this.picker.on("keydown", this.binds.onKeydown);
      }
      onDetach() {
        this.docElement && this.docElement.isConnected && this.docElement.remove(),
          this.picker.off("view", this.binds.onView),
          this.picker.off("keydown", this.binds.onKeydown);
      }
      onView(t) {
        const { view: e, target: i } = t.detail;
        i &&
          "querySelector" in i &&
          ("CalendarDay" !== e || ["locked", "not-available"].some((t) => i.classList.contains(t))
            ? [...i.querySelectorAll(".unit:not(.day)")].forEach((t) => (t.tabIndex = this.options.unitIndex))
            : (i.tabIndex = this.options.dayIndex));
      }
      onKeydown(t) {
        switch ((this.onMouseEnter(t), t.code)) {
          case "ArrowUp":
          case "ArrowDown":
            this.verticalMove(t);
            break;
          case "ArrowLeft":
          case "ArrowRight":
            this.horizontalMove(t);
            break;
          case "Enter":
          case "Space":
            this.handleEnter(t);
            break;
          case "Escape":
            this.picker.hide();
        }
      }
      findAllowableDaySibling(t, e, i) {
        const n = Array.from(t.querySelectorAll(`.day[tabindex="${this.options.dayIndex}"]`)),
          s = n.indexOf(e);
        return n.filter((t, e) => i(e, s) && t.tabIndex === this.options.dayIndex)[0];
      }
      changeMonth(t) {
        const e = { ArrowLeft: "previous", ArrowRight: "next" },
          i = this.picker.ui.container.querySelector(`.${e[t.code]}-button[tabindex="${this.options.unitIndex}"]`);
        i &&
          !i.parentElement.classList.contains(`no-${e[t.code]}-month`) &&
          (i.dispatchEvent(new Event("click", { bubbles: !0 })),
          setTimeout(() => {
            let e = null;
            switch (t.code) {
              case "ArrowLeft":
                const t = this.picker.ui.container.querySelectorAll(`.day[tabindex="${this.options.dayIndex}"]`);
                e = t[t.length - 1];
                break;
              case "ArrowRight":
                e = this.picker.ui.container.querySelector(`.day[tabindex="${this.options.dayIndex}"]`);
            }
            e && e.focus();
          }));
      }
      verticalMove(t) {
        const e = t.target;
        if (e.classList.contains("day")) {
          t.preventDefault();
          const i = this.findAllowableDaySibling(
            this.picker.ui.container,
            e,
            (e, i) => e === ("ArrowUp" === t.code ? i - 7 : i + 7)
          );
          i && i.focus();
        }
      }
      horizontalMove(t) {
        const e = t.target;
        if (e.classList.contains("day")) {
          t.preventDefault();
          const i = this.findAllowableDaySibling(
            this.picker.ui.container,
            e,
            (e, i) => e === ("ArrowLeft" === t.code ? i - 1 : i + 1)
          );
          i ? i.focus() : this.changeMonth(t);
        }
      }
      handleEnter(t) {
        const e = t.target;
        e.classList.contains("day") &&
          (t.preventDefault(),
          e.dispatchEvent(new Event("click", { bubbles: !0 })),
          setTimeout(() => {
            if (
              ((this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin")),
              this.rangePlugin || !this.picker.options.autoApply)
            ) {
              const t = this.picker.ui.container.querySelector(".day.selected");
              t &&
                setTimeout(() => {
                  t.focus();
                });
            }
          }));
      }
      onMouseEnter(t) {
        t.target.classList.contains("day") &&
          setTimeout(() => {
            const t = this.picker.ui.shadowRoot.activeElement;
            t && t.dispatchEvent(new Event("mouseenter", { bubbles: !0 }));
          });
      }
    }),
    (t.LockPlugin = class extends a {
      priority = 1;
      binds = { onView: this.onView.bind(this) };
      options = {
        minDate: null,
        maxDate: null,
        minDays: null,
        maxDays: null,
        selectForward: null,
        selectBackward: null,
        presets: !0,
        inseparable: !1,
        filter: null,
      };
      getName() {
        return "LockPlugin";
      }
      onAttach() {
        if (
          (this.options.minDate &&
            (this.options.minDate = new e(this.options.minDate, this.picker.options.format, this.picker.options.lang)),
          this.options.maxDate &&
            ((this.options.maxDate = new e(this.options.maxDate, this.picker.options.format, this.picker.options.lang)),
            this.options.maxDate instanceof e &&
              this.picker.options.calendars > 1 &&
              this.picker.calendars[0].isSame(this.options.maxDate, "month")))
        ) {
          const t = this.picker.calendars[0].clone().subtract(1, "month");
          this.picker.gotoDate(t);
        }
        if (
          (this.options.minDays || this.options.maxDays || this.options.selectForward || this.options.selectBackward) &&
          !this.picker.options.plugins.includes("RangePlugin")
        ) {
          const t = ["minDays", "maxDays", "selectForward", "selectBackward"];
          console.warn(`${this.getName()}: options ${t.join(", ")} required RangePlugin.`);
        }
        this.picker.on("view", this.binds.onView);
      }
      onDetach() {
        this.picker.off("view", this.binds.onView);
      }
      onView(t) {
        const { view: i, target: n, date: s } = t.detail;
        if (
          ("CalendarHeader" === i &&
            (this.options.minDate instanceof e &&
              s.isSameOrBefore(this.options.minDate, "month") &&
              n.classList.add("no-previous-month"),
            this.options.maxDate instanceof e &&
              s.isSameOrAfter(this.options.maxDate, "month") &&
              n.classList.add("no-next-month")),
          "CalendarDay" === i)
        ) {
          const t = this.picker.datePicked.length ? this.picker.datePicked[0] : null;
          if (this.testFilter(s)) return void n.classList.add("locked");
          if (this.options.inseparable) {
            if (this.options.minDays) {
              const t = s.clone().subtract(this.options.minDays - 1, "day"),
                e = s.clone().add(this.options.minDays - 1, "day");
              let i = !1,
                o = !1;
              for (; t.isBefore(s, "day"); ) {
                if (this.testFilter(t)) {
                  i = !0;
                  break;
                }
                t.add(1, "day");
              }
              for (; e.isAfter(s, "day"); ) {
                if (this.testFilter(e)) {
                  o = !0;
                  break;
                }
                e.subtract(1, "day");
              }
              i && o && n.classList.add("not-available");
            }
            this.rangeIsNotAvailable(s, t) && n.classList.add("not-available");
          }
          this.dateIsNotAvailable(s, t) && n.classList.add("not-available");
        }
        if (this.options.presets && "PresetPluginButton" === i) {
          const t = new e(Number(n.dataset.start)),
            i = new e(Number(n.dataset.end)),
            s = i.diff(t, "day"),
            o = this.options.minDays && s < this.options.minDays,
            a = this.options.maxDays && s > this.options.maxDays;
          (o ||
            a ||
            this.lockMinDate(t) ||
            this.lockMaxDate(t) ||
            this.lockMinDate(i) ||
            this.lockMaxDate(i) ||
            this.rangeIsNotAvailable(t, i)) &&
            n.setAttribute("disabled", "disabled");
        }
      }
      dateIsNotAvailable(t, e) {
        return (
          this.lockMinDate(t) ||
          this.lockMaxDate(t) ||
          this.lockMinDays(t, e) ||
          this.lockMaxDays(t, e) ||
          this.lockSelectForward(t) ||
          this.lockSelectBackward(t)
        );
      }
      rangeIsNotAvailable(t, e) {
        if (!t || !e) return !1;
        const i = (t.isSameOrBefore(e, "day") ? t : e).clone(),
          n = (e.isSameOrAfter(t, "day") ? e : t).clone();
        for (; i.isSameOrBefore(n, "day"); ) {
          if (this.testFilter(i)) return !0;
          i.add(1, "day");
        }
        return !1;
      }
      lockMinDate(t) {
        return this.options.minDate instanceof e && t.isBefore(this.options.minDate, "day");
      }
      lockMaxDate(t) {
        return this.options.maxDate instanceof e && t.isAfter(this.options.maxDate, "day");
      }
      lockMinDays(t, e) {
        if (this.options.minDays && e) {
          const i = e.clone().subtract(this.options.minDays - 1, "day"),
            n = e.clone().add(this.options.minDays - 1, "day");
          return t.isBetween(i, n);
        }
        return !1;
      }
      lockMaxDays(t, e) {
        if (this.options.maxDays && e) {
          const i = e.clone().subtract(this.options.maxDays, "day"),
            n = e.clone().add(this.options.maxDays, "day");
          return !t.isBetween(i, n);
        }
        return !1;
      }
      lockSelectForward(t) {
        if (1 === this.picker.datePicked.length && this.options.selectForward) {
          const e = this.picker.datePicked[0].clone();
          return t.isBefore(e, "day");
        }
        return !1;
      }
      lockSelectBackward(t) {
        if (1 === this.picker.datePicked.length && this.options.selectBackward) {
          const e = this.picker.datePicked[0].clone();
          return t.isAfter(e, "day");
        }
        return !1;
      }
      testFilter(t) {
        return "function" == typeof this.options.filter && this.options.filter(t, this.picker.datePicked);
      }
    }),
    (t.PresetPlugin = class extends a {
      dependencies = ["RangePlugin"];
      binds = { onView: this.onView.bind(this), onClick: this.onClick.bind(this) };
      options = {
        customLabels: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Month", "Last Month"],
        customPreset: {},
        position: "left",
      };
      getName() {
        return "PresetPlugin";
      }
      onAttach() {
        if (!Object.keys(this.options.customPreset).length) {
          const t = new e(),
            i = () => {
              const i = t.clone();
              i.setDate(1);
              const n = new Date(t.getFullYear(), t.getMonth() + 1, 0);
              return [new e(i), new e(n)];
            },
            n = () => {
              const i = t.clone();
              i.setMonth(i.getMonth() - 1), i.setDate(1);
              const n = new Date(t.getFullYear(), t.getMonth(), 0);
              return [new e(i), new e(n)];
            },
            s = [
              [t.clone(), t.clone()],
              [t.clone().subtract(1, "day"), t.clone().subtract(1, "day")],
              [t.clone().subtract(6, "day"), t.clone()],
              [t.clone().subtract(29, "day"), t.clone()],
              i(),
              n(),
            ];
          Object.values(this.options.customLabels).forEach((t, e) => {
            this.options.customPreset[t] = s[e];
          });
        }
        this.picker.on("view", this.binds.onView), this.picker.on("click", this.binds.onClick);
      }
      onDetach() {
        this.picker.off("view", this.binds.onView), this.picker.off("click", this.binds.onClick);
      }
      onView(t) {
        const { view: e, target: i } = t.detail;
        if ("Main" === e) {
          const t = document.createElement("div");
          (t.className = "preset-plugin-container"),
            Object.keys(this.options.customPreset).forEach((e) => {
              if (Object.prototype.hasOwnProperty.call(this.options.customPreset, e)) {
                const i = this.options.customPreset[e],
                  n = document.createElement("button");
                (n.className = "preset-button unit"),
                  (n.innerHTML = e),
                  (n.dataset.start = i[0].getTime()),
                  (n.dataset.end = i[1].getTime()),
                  t.appendChild(n),
                  this.picker.trigger("view", { view: "PresetPluginButton", target: n });
              }
            }),
            i.appendChild(t),
            i.classList.add(`preset-${this.options.position}`),
            this.picker.trigger("view", { view: "PresetPluginContainer", target: t });
        }
      }
      onClick(t) {
        const i = t.target;
        if (i instanceof HTMLElement) {
          const t = i.closest(".unit");
          if (!(t instanceof HTMLElement)) return;
          if (this.isPresetButton(t)) {
            const i = new e(Number(t.dataset.start)),
              n = new e(Number(t.dataset.end));
            this.picker.options.autoApply
              ? (this.picker.setDateRange(i, n),
                this.picker.trigger("select", { start: this.picker.getStartDate(), end: this.picker.getEndDate() }),
                this.picker.hide())
              : ((this.picker.datePicked = [i, n]), this.picker.renderAll());
          }
        }
      }
      isPresetButton(t) {
        return t.classList.contains("preset-button");
      }
    }),
    (t.RangePlugin = class extends a {
      tooltipElement;
      triggerElement;
      binds = {
        setStartDate: this.setStartDate.bind(this),
        setEndDate: this.setEndDate.bind(this),
        setDateRange: this.setDateRange.bind(this),
        getStartDate: this.getStartDate.bind(this),
        getEndDate: this.getEndDate.bind(this),
        onView: this.onView.bind(this),
        onShow: this.onShow.bind(this),
        onMouseEnter: this.onMouseEnter.bind(this),
        onMouseLeave: this.onMouseLeave.bind(this),
        onClickCalendarDay: this.onClickCalendarDay.bind(this),
        onClickApplyButton: this.onClickApplyButton.bind(this),
        parseValues: this.parseValues.bind(this),
        updateValues: this.updateValues.bind(this),
        clear: this.clear.bind(this),
      };
      options = {
        elementEnd: null,
        startDate: null,
        endDate: null,
        repick: !1,
        strict: !0,
        delimiter: " - ",
        tooltip: !0,
        tooltipNumber: (t) => t,
        locale: { zero: "", one: "day", two: "", few: "", many: "", other: "days" },
        documentClick: this.hidePicker.bind(this),
      };
      getName() {
        return "RangePlugin";
      }
      onAttach() {
        (this.binds._setStartDate = this.picker.setStartDate),
          (this.binds._setEndDate = this.picker.setEndDate),
          (this.binds._setDateRange = this.picker.setDateRange),
          (this.binds._getStartDate = this.picker.getStartDate),
          (this.binds._getEndDate = this.picker.getEndDate),
          (this.binds._parseValues = this.picker.parseValues),
          (this.binds._updateValues = this.picker.updateValues),
          (this.binds._clear = this.picker.clear),
          (this.binds._onClickCalendarDay = this.picker.onClickCalendarDay),
          (this.binds._onClickApplyButton = this.picker.onClickApplyButton),
          Object.defineProperties(this.picker, {
            setStartDate: { configurable: !0, value: this.binds.setStartDate },
            setEndDate: { configurable: !0, value: this.binds.setEndDate },
            setDateRange: { configurable: !0, value: this.binds.setDateRange },
            getStartDate: { configurable: !0, value: this.binds.getStartDate },
            getEndDate: { configurable: !0, value: this.binds.getEndDate },
            parseValues: { configurable: !0, value: this.binds.parseValues },
            updateValues: { configurable: !0, value: this.binds.updateValues },
            clear: { configurable: !0, value: this.binds.clear },
            onClickCalendarDay: { configurable: !0, value: this.binds.onClickCalendarDay },
            onClickApplyButton: { configurable: !0, value: this.binds.onClickApplyButton },
          }),
          this.options.elementEnd &&
            (this.options.elementEnd instanceof HTMLElement ||
              (this.options.elementEnd = this.picker.options.doc.querySelector(this.options.elementEnd)),
            this.options.elementEnd instanceof HTMLInputElement &&
              (this.options.elementEnd.readOnly = this.picker.options.readonly),
            "function" == typeof this.picker.options.documentClick &&
              (document.removeEventListener("click", this.picker.options.documentClick, !0),
              "function" == typeof this.options.documentClick &&
                document.addEventListener("click", this.options.documentClick, !0)),
            this.options.elementEnd.addEventListener("click", this.picker.show.bind(this.picker))),
          (this.options.repick = this.options.repick && this.options.elementEnd instanceof HTMLElement),
          (this.picker.options.date = null),
          this.picker.on("view", this.binds.onView),
          this.picker.on("show", this.binds.onShow),
          this.picker.on("mouseenter", this.binds.onMouseEnter, !0),
          this.picker.on("mouseleave", this.binds.onMouseLeave, !0),
          this.checkIntlPluralLocales();
      }
      onDetach() {
        Object.defineProperties(this.picker, {
          setStartDate: { configurable: !0, value: this.binds._setStartDate },
          setEndDate: { configurable: !0, value: this.binds._setEndDate },
          setDateRange: { configurable: !0, value: this.binds._setDateRange },
          getStartDate: { configurable: !0, value: this.binds._getStartDate },
          getEndDate: { configurable: !0, value: this.binds._getEndDate },
          parseValues: { configurable: !0, value: this.binds._parseValues },
          updateValues: { configurable: !0, value: this.binds._updateValues },
          clear: { configurable: !0, value: this.binds._clear },
          onClickCalendarDay: { configurable: !0, value: this.binds._onClickCalendarDay },
          onClickApplyButton: { configurable: !0, value: this.binds._onClickApplyButton },
        }),
          this.picker.off("view", this.binds.onView),
          this.picker.off("show", this.binds.onShow),
          this.picker.off("mouseenter", this.binds.onMouseEnter, !0),
          this.picker.off("mouseleave", this.binds.onMouseLeave, !0);
      }
      parseValues() {
        if (this.options.startDate || this.options.endDate)
          this.options.strict
            ? this.options.startDate && this.options.endDate
              ? this.setDateRange(this.options.startDate, this.options.endDate)
              : ((this.options.startDate = null), (this.options.endDate = null))
            : (this.options.startDate && this.setStartDate(this.options.startDate),
              this.options.endDate && this.setEndDate(this.options.endDate));
        else if (this.options.elementEnd)
          this.options.strict
            ? this.picker.options.element instanceof HTMLInputElement &&
              this.picker.options.element.value.length &&
              this.options.elementEnd instanceof HTMLInputElement &&
              this.options.elementEnd.value.length &&
              this.setDateRange(this.picker.options.element.value, this.options.elementEnd.value)
            : (this.picker.options.element instanceof HTMLInputElement &&
                this.picker.options.element.value.length &&
                this.setStartDate(this.picker.options.element.value),
              this.options.elementEnd instanceof HTMLInputElement &&
                this.options.elementEnd.value.length &&
                this.setEndDate(this.options.elementEnd.value));
        else if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
          const [t, e] = this.picker.options.element.value.split(this.options.delimiter);
          this.options.strict
            ? t && e && this.setDateRange(t, e)
            : (t && this.setStartDate(t), e && this.setEndDate(e));
        }
      }
      updateValues() {
        const t = this.picker.options.element,
          e = this.options.elementEnd,
          i = this.picker.getStartDate(),
          n = this.picker.getEndDate(),
          s = i instanceof Date ? i.format(this.picker.options.format, this.picker.options.lang) : "",
          o = n instanceof Date ? n.format(this.picker.options.format, this.picker.options.lang) : "";
        if (e)
          t instanceof HTMLInputElement ? (t.value = s) : t instanceof HTMLElement && (t.innerText = s),
            e instanceof HTMLInputElement ? (e.value = o) : e instanceof HTMLElement && (e.innerText = o);
        else {
          const e = `${s}${s || o ? this.options.delimiter : ""}${o}`;
          t instanceof HTMLInputElement ? (t.value = e) : t instanceof HTMLElement && (t.innerText = e);
        }
      }
      clear() {
        (this.options.startDate = null),
          (this.options.endDate = null),
          (this.picker.datePicked.length = 0),
          this.updateValues(),
          this.picker.renderAll(),
          this.picker.trigger("clear");
      }
      onShow(t) {
        const { target: e } = t.detail;
        (this.triggerElement = e),
          this.picker.options.scrollToDate &&
            this.getStartDate() instanceof Date &&
            this.picker.gotoDate(this.getStartDate()),
          this.initializeRepick();
      }
      onView(t) {
        const { view: i, target: n } = t.detail;
        if (
          ("Main" === i &&
            ((this.tooltipElement = document.createElement("span")),
            (this.tooltipElement.className = "range-plugin-tooltip"),
            n.appendChild(this.tooltipElement)),
          "CalendarDay" === i)
        ) {
          const t = new e(n.dataset.time),
            i = this.picker.datePicked,
            s = i.length ? this.picker.datePicked[0] : this.getStartDate(),
            o = i.length ? this.picker.datePicked[1] : this.getEndDate();
          s && s.isSame(t, "day") && n.classList.add("start"),
            s && o && (o.isSame(t, "day") && n.classList.add("end"), t.isBetween(s, o) && n.classList.add("in-range"));
        }
        if ("Footer" === i) {
          const t =
            (1 === this.picker.datePicked.length && !this.options.strict) || 2 === this.picker.datePicked.length;
          n.querySelector(".apply-button").disabled = !t;
        }
      }
      hidePicker(t) {
        let e = t.target,
          i = null;
        e.shadowRoot && ((e = t.composedPath()[0]), (i = e.getRootNode().host)),
          this.picker.isShown() &&
            i !== this.picker.ui.wrapper &&
            e !== this.picker.options.element &&
            e !== this.options.elementEnd &&
            this.picker.hide();
      }
      setStartDate(t) {
        const i = new e(t, this.picker.options.format);
        (this.options.startDate = i ? i.clone() : null), this.updateValues(), this.picker.renderAll();
      }
      setEndDate(t) {
        const i = new e(t, this.picker.options.format);
        (this.options.endDate = i ? i.clone() : null), this.updateValues(), this.picker.renderAll();
      }
      setDateRange(t, i) {
        const n = new e(t, this.picker.options.format),
          s = new e(i, this.picker.options.format);
        (this.options.startDate = n ? n.clone() : null),
          (this.options.endDate = s ? s.clone() : null),
          this.updateValues(),
          this.picker.renderAll();
      }
      getStartDate() {
        return this.options.startDate instanceof Date ? this.options.startDate.clone() : null;
      }
      getEndDate() {
        return this.options.endDate instanceof Date ? this.options.endDate.clone() : null;
      }
      onMouseEnter(t) {
        const i = t.target;
        if (i instanceof HTMLElement) {
          this.isContainer(i) && this.initializeRepick();
          const t = i.closest(".unit");
          if (!(t instanceof HTMLElement)) return;
          if (this.picker.isCalendarDay(t)) {
            if (1 !== this.picker.datePicked.length) return;
            let i = this.picker.datePicked[0].clone(),
              n = new e(t.dataset.time),
              s = !1;
            if (i.isAfter(n, "day")) {
              const t = i.clone();
              (i = n.clone()), (n = t.clone()), (s = !0);
            }
            if (
              ([...this.picker.ui.container.querySelectorAll(".day")].forEach((o) => {
                const a = new e(o.dataset.time),
                  r = this.picker.Calendar.getCalendarDayView(a);
                a.isBetween(i, n) && r.classList.add("in-range"),
                  a.isSame(this.picker.datePicked[0], "day") &&
                    (r.classList.add("start"), r.classList.toggle("flipped", s)),
                  o === t && (r.classList.add("end"), r.classList.toggle("flipped", s)),
                  (o.className = r.className);
              }),
              this.options.tooltip)
            ) {
              const e = this.options.tooltipNumber(n.diff(i, "day") + 1);
              if (e > 0) {
                const i = new Intl.PluralRules(this.picker.options.lang).select(e),
                  n = `${e} ${this.options.locale[i]}`;
                this.showTooltip(t, n);
              } else this.hideTooltip();
            }
          }
        }
      }
      onMouseLeave(t) {
        if (this.isContainer(t.target) && this.options.repick) {
          const t = this.getStartDate(),
            e = this.getEndDate();
          t && e && ((this.picker.datePicked.length = 0), this.picker.renderAll());
        }
      }
      onClickCalendarDay(t) {
        if (this.picker.isCalendarDay(t)) {
          2 === this.picker.datePicked.length && (this.picker.datePicked.length = 0);
          const i = new e(t.dataset.time);
          if (
            ((this.picker.datePicked[this.picker.datePicked.length] = i),
            2 === this.picker.datePicked.length && this.picker.datePicked[0].isAfter(this.picker.datePicked[1]))
          ) {
            const t = this.picker.datePicked[1].clone();
            (this.picker.datePicked[1] = this.picker.datePicked[0].clone()), (this.picker.datePicked[0] = t.clone());
          }
          (1 !== this.picker.datePicked.length && this.picker.options.autoApply) ||
            this.picker.trigger("preselect", {
              start: this.picker.datePicked[0] instanceof Date ? this.picker.datePicked[0].clone() : null,
              end: this.picker.datePicked[1] instanceof Date ? this.picker.datePicked[1].clone() : null,
            }),
            1 === this.picker.datePicked.length &&
              (!this.options.strict &&
                this.picker.options.autoApply &&
                (this.picker.options.element === this.triggerElement && this.setStartDate(this.picker.datePicked[0]),
                this.options.elementEnd === this.triggerElement && this.setEndDate(this.picker.datePicked[0]),
                this.picker.trigger("select", { start: this.picker.getStartDate(), end: this.picker.getEndDate() })),
              this.picker.renderAll()),
            2 === this.picker.datePicked.length &&
              (this.picker.options.autoApply
                ? (this.setDateRange(this.picker.datePicked[0], this.picker.datePicked[1]),
                  this.picker.trigger("select", { start: this.picker.getStartDate(), end: this.picker.getEndDate() }),
                  this.picker.hide())
                : (this.hideTooltip(), this.picker.renderAll()));
        }
      }
      onClickApplyButton(t) {
        this.picker.isApplyButton(t) &&
          (1 !== this.picker.datePicked.length ||
            this.options.strict ||
            (this.picker.options.element === this.triggerElement &&
              ((this.options.endDate = null), this.setStartDate(this.picker.datePicked[0])),
            this.options.elementEnd === this.triggerElement &&
              ((this.options.startDate = null), this.setEndDate(this.picker.datePicked[0]))),
          2 === this.picker.datePicked.length &&
            this.setDateRange(this.picker.datePicked[0], this.picker.datePicked[1]),
          this.picker.trigger("select", { start: this.picker.getStartDate(), end: this.picker.getEndDate() }),
          this.picker.hide());
      }
      showTooltip(t, e) {
        (this.tooltipElement.style.visibility = "visible"), (this.tooltipElement.innerHTML = e);
        const i = this.picker.ui.container.getBoundingClientRect(),
          n = this.tooltipElement.getBoundingClientRect(),
          s = t.getBoundingClientRect();
        let o = s.top,
          a = s.left;
        (o -= i.top),
          (a -= i.left),
          (o -= n.height),
          (a -= n.width / 2),
          (a += s.width / 2),
          (this.tooltipElement.style.top = `${o}px`),
          (this.tooltipElement.style.left = `${a}px`);
      }
      hideTooltip() {
        this.tooltipElement.style.visibility = "hidden";
      }
      checkIntlPluralLocales() {
        if (!this.options.tooltip) return;
        const t = [
            ...new Set([
              new Intl.PluralRules(this.picker.options.lang).select(0),
              new Intl.PluralRules(this.picker.options.lang).select(1),
              new Intl.PluralRules(this.picker.options.lang).select(2),
              new Intl.PluralRules(this.picker.options.lang).select(6),
              new Intl.PluralRules(this.picker.options.lang).select(18),
            ]),
          ],
          e = Object.keys(this.options.locale);
        t.every((t) => e.includes(t)) ||
          console.warn(`${this.getName()}: provide locales (${t.join(", ")}) for correct tooltip text.`);
      }
      initializeRepick() {
        if (!this.options.repick) return;
        const t = this.getStartDate(),
          e = this.getEndDate();
        e && this.triggerElement === this.picker.options.element && (this.picker.datePicked[0] = e),
          t && this.triggerElement === this.options.elementEnd && (this.picker.datePicked[0] = t);
      }
      isContainer(t) {
        return t === this.picker.ui.container;
      }
    }),
    (t.TimePlugin = class extends a {
      options = { native: !1, seconds: !1, stepHours: 1, stepMinutes: 5, stepSeconds: 5, format12: !1 };
      rangePlugin;
      timePicked = { input: null, start: null, end: null };
      timePrePicked = { input: null, start: null, end: null };
      binds = {
        getDate: this.getDate.bind(this),
        getStartDate: this.getStartDate.bind(this),
        getEndDate: this.getEndDate.bind(this),
        onView: this.onView.bind(this),
        onInput: this.onInput.bind(this),
        onChange: this.onChange.bind(this),
        onClick: this.onClick.bind(this),
        setTime: this.setTime.bind(this),
        setStartTime: this.setStartTime.bind(this),
        setEndTime: this.setEndTime.bind(this),
      };
      getName() {
        return "TimePlugin";
      }
      onAttach() {
        (this.binds._getDate = this.picker.getDate),
          (this.binds._getStartDate = this.picker.getStartDate),
          (this.binds._getEndDate = this.picker.getEndDate),
          Object.defineProperties(this.picker, {
            getDate: { configurable: !0, value: this.binds.getDate },
            getStartDate: { configurable: !0, value: this.binds.getStartDate },
            getEndDate: { configurable: !0, value: this.binds.getEndDate },
            setTime: { configurable: !0, value: this.binds.setTime },
            setStartTime: { configurable: !0, value: this.binds.setStartTime },
            setEndTime: { configurable: !0, value: this.binds.setEndTime },
          }),
          (this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin")),
          this.parseValues(),
          this.picker.on("view", this.binds.onView),
          this.picker.on("input", this.binds.onInput),
          this.picker.on("change", this.binds.onChange),
          this.picker.on("click", this.binds.onClick);
      }
      onDetach() {
        delete this.picker.setTime,
          delete this.picker.setStartTime,
          delete this.picker.setEndTime,
          Object.defineProperties(this.picker, {
            getDate: { configurable: !0, value: this.binds._getDate },
            getStartDate: { configurable: !0, value: this.binds._getStartDate },
            getEndDate: { configurable: !0, value: this.binds._getEndDate },
          }),
          this.picker.off("view", this.binds.onView),
          this.picker.off("input", this.binds.onInput),
          this.picker.off("change", this.binds.onChange),
          this.picker.off("click", this.binds.onClick);
      }
      onView(t) {
        const { view: e, target: i } = t.detail;
        if ("Main" === e) {
          this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin");
          const t = document.createElement("div");
          if (((t.className = "time-plugin-container"), this.rangePlugin)) {
            const e = this.getStartInput();
            t.appendChild(e), this.picker.trigger("view", { view: "TimePluginInput", target: e });
            const i = this.getEndInput();
            t.appendChild(i), this.picker.trigger("view", { view: "TimePluginInput", target: i });
          } else {
            const e = this.getSingleInput();
            t.appendChild(e), this.picker.trigger("view", { view: "TimePluginInput", target: e });
          }
          i.appendChild(t), this.picker.trigger("view", { view: "TimePluginContainer", target: t });
        }
      }
      onInput(t) {
        const i = t.target;
        if (i instanceof HTMLInputElement && i.classList.contains("time-plugin-input")) {
          const t = this.timePicked[i.name] || new e(),
            [n, s] = i.value.split(":");
          t.setHours(Number(n) || 0, Number(s) || 0, 0, 0),
            this.picker.options.autoApply
              ? ((this.timePicked[i.name] = t), this.picker.updateValues())
              : (this.timePrePicked[i.name] = t);
        }
      }
      onChange(t) {
        const i = t.target;
        if (i instanceof HTMLSelectElement && i.classList.contains("time-plugin-custom-input")) {
          const t = /(\w+)\[(\w+)\]/,
            [, n, s] = i.name.match(t),
            o = Number(i.value);
          let a = new e();
          switch (
            (!this.picker.options.autoApply && this.timePrePicked[n] instanceof Date
              ? (a = this.timePrePicked[n].clone())
              : this.timePicked[n] instanceof Date && (a = this.timePicked[n].clone()),
            s)
          ) {
            case "HH":
              if (this.options.format12) {
                const t = i.closest(".time-plugin-custom-block").querySelector(`select[name="${n}[period]"]`).value,
                  e = this.handleFormat12(t, a, o);
                a.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), 0);
              } else a.setHours(o, a.getMinutes(), a.getSeconds(), 0);
              break;
            case "mm":
              a.setHours(a.getHours(), o, a.getSeconds(), 0);
              break;
            case "ss":
              a.setHours(a.getHours(), a.getMinutes(), o, 0);
              break;
            case "period":
              if (this.options.format12) {
                const t = i.closest(".time-plugin-custom-block").querySelector(`select[name="${n}[HH]"]`).value,
                  e = this.handleFormat12(i.value, a, Number(t));
                a.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), 0);
              }
          }
          if (this.picker.options.autoApply) (this.timePicked[n] = a), this.picker.updateValues();
          else {
            this.timePrePicked[n] = a;
            const t = this.picker.ui.container.querySelector(".apply-button");
            if (this.rangePlugin) {
              const e = this.rangePlugin.options,
                i = this.picker.datePicked,
                n =
                  (e.strict && 2 === i.length) ||
                  (!e.strict && i.length > 0) ||
                  (!i.length && e.strict && e.startDate instanceof Date && e.endDate instanceof Date) ||
                  (!i.length && !e.strict && (e.startDate instanceof Date || e.endDate instanceof Date));
              t.disabled = !n;
            } else this.picker.datePicked.length && (t.disabled = !1);
          }
        }
      }
      onClick(t) {
        const e = t.target;
        if (e instanceof HTMLElement) {
          const t = e.closest(".unit");
          if (!(t instanceof HTMLElement)) return;
          this.picker.isApplyButton(t) &&
            (Object.keys(this.timePicked).forEach((t) => {
              this.timePrePicked[t] instanceof Date && (this.timePicked[t] = this.timePrePicked[t].clone());
            }),
            this.picker.updateValues(),
            (this.timePrePicked = { input: null, start: null, end: null })),
            this.picker.isCancelButton(t) &&
              ((this.timePrePicked = { input: null, start: null, end: null }), this.picker.renderAll());
        }
      }
      setTime(t) {
        const e = this.handleTimeString(t);
        (this.timePicked.input = e.clone()), this.picker.renderAll(), this.picker.updateValues();
      }
      setStartTime(t) {
        const e = this.handleTimeString(t);
        (this.timePicked.start = e.clone()), this.picker.renderAll(), this.picker.updateValues();
      }
      setEndTime(t) {
        const e = this.handleTimeString(t);
        (this.timePicked.end = e.clone()), this.picker.renderAll(), this.picker.updateValues();
      }
      handleTimeString(t) {
        const i = new e(),
          [n, s, o] = t.split(":").map((t) => Number(t)),
          a = n && !Number.isNaN(n) ? n : 0,
          r = s && !Number.isNaN(s) ? s : 0,
          c = o && !Number.isNaN(o) ? o : 0;
        return i.setHours(a, r, c, 0), i;
      }
      getDate() {
        if (this.picker.options.date instanceof Date) {
          const t = new e(this.picker.options.date, this.picker.options.format);
          if (this.timePicked.input instanceof Date) {
            const e = this.timePicked.input;
            t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), 0);
          }
          return t;
        }
        return null;
      }
      getStartDate() {
        if (this.rangePlugin.options.startDate instanceof Date) {
          const t = new e(this.rangePlugin.options.startDate, this.picker.options.format);
          if (this.timePicked.start instanceof Date) {
            const e = this.timePicked.start;
            t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), 0);
          }
          return t;
        }
        return null;
      }
      getEndDate() {
        if (this.rangePlugin.options.endDate instanceof Date) {
          const t = new e(this.rangePlugin.options.endDate, this.picker.options.format);
          if (this.timePicked.end instanceof Date) {
            const e = this.timePicked.end;
            t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), 0);
          }
          return t;
        }
        return null;
      }
      getSingleInput() {
        return this.options.native ? this.getNativeInput("input") : this.getCustomInput("input");
      }
      getStartInput() {
        return this.options.native ? this.getNativeInput("start") : this.getCustomInput("start");
      }
      getEndInput() {
        return this.options.native ? this.getNativeInput("end") : this.getCustomInput("end");
      }
      getNativeInput(t) {
        const e = document.createElement("input");
        (e.type = "time"), (e.name = t), (e.className = "time-plugin-input unit");
        const i = this.timePicked[t];
        if (i) {
          const t = `0${i.getHours()}`.slice(-2),
            n = `0${i.getMinutes()}`.slice(-2);
          e.value = `${t}:${n}`;
        }
        return e;
      }
      getCustomInput(t) {
        const e = document.createElement("div");
        e.className = "time-plugin-custom-block";
        const i = document.createElement("select");
        (i.className = "time-plugin-custom-input unit"), (i.name = `${t}[HH]`);
        const n = this.options.format12 ? 1 : 0,
          s = this.options.format12 ? 13 : 24;
        let o = null;
        !this.picker.options.autoApply && this.timePrePicked[t] instanceof Date
          ? (o = this.timePrePicked[t].clone())
          : this.timePicked[t] instanceof Date && (o = this.timePicked[t].clone());
        for (let t = n; t < s; t += this.options.stepHours) {
          const e = document.createElement("option");
          (e.value = String(t)),
            (e.text = String(t)),
            o &&
              (this.options.format12
                ? (o.getHours() % 12 ? o.getHours() % 12 : 12) === t && (e.selected = !0)
                : o.getHours() === t && (e.selected = !0)),
            i.appendChild(e);
        }
        e.appendChild(i);
        const a = document.createElement("select");
        (a.className = "time-plugin-custom-input unit"), (a.name = `${t}[mm]`);
        for (let t = 0; t < 60; t += this.options.stepMinutes) {
          const e = document.createElement("option");
          (e.value = `0${String(t)}`.slice(-2)),
            (e.text = `0${String(t)}`.slice(-2)),
            o && o.getMinutes() === t && (e.selected = !0),
            a.appendChild(e);
        }
        if ((e.appendChild(a), this.options.seconds)) {
          const i = document.createElement("select");
          (i.className = "time-plugin-custom-input unit"), (i.name = `${t}[ss]`);
          const n = 60;
          for (let t = 0; t < n; t += this.options.stepSeconds) {
            const e = document.createElement("option");
            (e.value = `0${String(t)}`.slice(-2)),
              (e.text = `0${String(t)}`.slice(-2)),
              o && o.getSeconds() === t && (e.selected = !0),
              i.appendChild(e);
          }
          e.appendChild(i);
        }
        if (this.options.format12) {
          const i = document.createElement("select");
          (i.className = "time-plugin-custom-input unit"),
            (i.name = `${t}[period]`),
            ["AM", "PM"].forEach((t) => {
              const e = document.createElement("option");
              (e.value = t), (e.text = t), o && "PM" === t && o.getHours() >= 12 && (e.selected = !0), i.appendChild(e);
            }),
            e.appendChild(i);
        }
        return e;
      }
      handleFormat12(t, e, i) {
        const n = e.clone();
        switch (t) {
          case "AM":
            12 === i
              ? n.setHours(0, n.getMinutes(), n.getSeconds(), 0)
              : n.setHours(i, n.getMinutes(), n.getSeconds(), 0);
            break;
          case "PM":
            12 !== i
              ? n.setHours(i + 12, n.getMinutes(), n.getSeconds(), 0)
              : n.setHours(i, n.getMinutes(), n.getSeconds(), 0);
        }
        return n;
      }
      parseValues() {
        if (this.rangePlugin) {
          if (this.rangePlugin.options.strict) {
            if (this.rangePlugin.options.startDate && this.rangePlugin.options.endDate) {
              const t = new e(this.rangePlugin.options.startDate, this.picker.options.format),
                i = new e(this.rangePlugin.options.endDate, this.picker.options.format);
              (this.timePicked.start = t.clone()), (this.timePicked.end = i.clone());
            }
          } else {
            if (this.rangePlugin.options.startDate) {
              const t = new e(this.rangePlugin.options.startDate, this.picker.options.format);
              this.timePicked.start = t.clone();
            }
            if (this.rangePlugin.options.endDate) {
              const t = new e(this.rangePlugin.options.endDate, this.picker.options.format);
              this.timePicked.end = t.clone();
            }
          }
          if (this.rangePlugin.options.elementEnd)
            if (this.rangePlugin.options.strict) {
              if (
                this.picker.options.element instanceof HTMLInputElement &&
                this.picker.options.element.value.length &&
                this.rangePlugin.options.elementEnd instanceof HTMLInputElement &&
                this.rangePlugin.options.elementEnd.value.length
              ) {
                const t = new e(this.picker.options.element.value, this.picker.options.format),
                  i = new e(this.rangePlugin.options.elementEnd.value, this.picker.options.format);
                (this.timePicked.start = t.clone()), (this.timePicked.end = i.clone());
              }
            } else {
              if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
                const t = new e(this.picker.options.element.value, this.picker.options.format);
                this.timePicked.start = t.clone();
              }
              if (
                this.rangePlugin.options.elementEnd instanceof HTMLInputElement &&
                this.rangePlugin.options.elementEnd.value.length
              ) {
                const t = new e(this.rangePlugin.options.elementEnd.value, this.picker.options.format);
                this.timePicked.start = t.clone();
              }
            }
          else if (
            this.picker.options.element instanceof HTMLInputElement &&
            this.picker.options.element.value.length
          ) {
            const [t, i] = this.picker.options.element.value.split(this.rangePlugin.options.delimiter);
            if (this.rangePlugin.options.strict) {
              if (t && i) {
                const n = new e(t, this.picker.options.format),
                  s = new e(i, this.picker.options.format);
                (this.timePicked.start = n.clone()), (this.timePicked.end = s.clone());
              }
            } else {
              if (t) {
                const i = new e(t, this.picker.options.format);
                this.timePicked.start = i.clone();
              }
              if (i) {
                const t = new e(i, this.picker.options.format);
                this.timePicked.start = t.clone();
              }
            }
          }
        } else {
          if (this.picker.options.date) {
            const t = new e(this.picker.options.date, this.picker.options.format);
            this.timePicked.input = t.clone();
          }
          if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
            const t = new e(this.picker.options.element.value, this.picker.options.format);
            this.timePicked.input = t.clone();
          }
        }
      }
    }),
    (t.create = s),
    (t.easepick = o),
    Object.defineProperty(t, "__esModule", { value: !0 });
});

/**
 * INITIALIZE DATE PICKERS
 */
const formFieldsDateInput = async () => {
  let datePickerPackageCss = "";

  const selectors = {
    DATE_PICKER: "[form-fields-pro-date-picker]",
    DATE_RANGE_PICKER: "[form-fields-pro-date-range-picker]",
  };

  /**
   *
   * @param {Element} element
   */
  const getCommonConfig = (element) => {
    const grid = Number(element.getAttribute("data-columns"));
    const calendars = Number(element.getAttribute("data-months"));
    const firstDay = Number(element.getAttribute("data-firstDay"));
    const format = element.getAttribute("data-format");
    const lang = element.getAttribute("data-language");
    const zIndex = element.getAttribute("data-zIndex");

    return {
      element,
      // css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
      grid,
      calendars,
      firstDay,
      format,
      lang,
      zIndex,
    };
  };

  /**
   *
   * @param {Element} element
   */
  const getCustomCSS = (element) => {
    const { backgroundColor: parentBackgroundColor, color: parentTextColor } = getComputedStyle(element.parentElement);

    const lightTheme = {
      selectedDateTextColor: element.getAttribute("data-light-theme-selected-date-text-color") || parentTextColor,
      selectedDateBackgroundColor:
        element.getAttribute("data-light-theme-selected-date-background-color") || parentBackgroundColor,
      todayColor: element.getAttribute("data-light-theme-today-color") || parentTextColor,
    };

    const darkTheme = {
      selectedDateTextColor: element.getAttribute("data-dark-theme-selected-date-text-color") || parentTextColor,
      selectedDateBackgroundColor:
        element.getAttribute("data-dark-theme-selected-date-background-color") || parentBackgroundColor,
      todayColor: element.getAttribute("data-dark-theme-today-color") || parentTextColor,
    };

    // const sheet = new CSSStyleSheet();
    // sheet.replaceSync(`
    const sheet = `
      .container {
        font-family: inherit;
      }
  
      .calendar>.days-grid>.day.today {
        color: ${lightTheme.todayColor}
      }
  
      .calendar>.days-grid>.day.selected, 
      .container.range-plugin .calendar>.days-grid>.day.end, 
      .container.range-plugin .calendar>.days-grid>.day.start {
        color: ${lightTheme.selectedDateTextColor};
        background-color: ${lightTheme.selectedDateBackgroundColor};
      }
  
      .container.range-plugin .calendar>.days-grid>.day.start:after {
        border-left-color: ${lightTheme.selectedDateBackgroundColor}; 
      }
  
      .container.range-plugin .calendar>.days-grid>.day.end:after {
        border-right-color: ${lightTheme.selectedDateBackgroundColor}; 
      }
  
      .calendar>.days-grid>.day:hover {
        border-color: ${lightTheme.selectedDateBackgroundColor}
      }
  
      .container.range-plugin .calendar>.days-grid>.day.in-range {
        color: ${lightTheme.selectedDateTextColor};
        background-color: ${lightTheme.selectedDateBackgroundColor.replace("rgb", "rgba").replace(")", ", 0.65)")}; 
      }
  
  
  
      @media (prefers-color-scheme: dark) {
        .calendar>.days-grid>.day.today {
          color: ${darkTheme.todayColor}
        }
  
        .calendar>.days-grid>.day.selected,
        .container.range-plugin .calendar>.days-grid>.day.end, 
        .container.range-plugin .calendar>.days-grid>.day.start {
          color: ${darkTheme.selectedDateTextColor};
          background-color: ${darkTheme.selectedDateBackgroundColor};
        }
  
        .calendar>.days-grid>.day:hover {
          border-color: ${darkTheme.selectedDateBackgroundColor}
        }
  
        .container.range-plugin .calendar>.days-grid>.day.start:after {
          border-left-color: ${darkTheme.selectedDateBackgroundColor}; 
        }
  
        .container.range-plugin .calendar>.days-grid>.day.end:after {
          border-right-color: ${darkTheme.selectedDateBackgroundColor}; 
        }
  
        .container.range-plugin .calendar>.days-grid>.day.in-range {
          color: ${darkTheme.selectedDateTextColor};
          background-color: ${darkTheme.selectedDateBackgroundColor.replace("rgb", "rgba").replace(")", ", 0.65)")}; 
        }
      }`;
    // `);
    // datePicker.shadowRoot.adoptedStyleSheets = [sheet];

    return `
      ${datePickerPackageCss}
  
      ${sheet}
      `;
  };

  /**
   *
   * @param {HTMLInputElement} datePickerInput
   * @param {{ show: () => {}}} datePickerInstance
   */
  const showDatePickerOnIconClick = (datePickerInput, datePickerInstance) => {
    const name = datePickerInput.getAttribute("name");
    const icon = document.querySelector(`[name="${name}"] + .easepick-wrapper + .date-input-icon`);

    if (icon) icon.style.cursor = "pointer";

    icon?.addEventListener("click", () => {
      datePickerInstance.show();
    });
  };

  const initializeDatePickers = () => {
    const datePickers = document.querySelectorAll(selectors.DATE_PICKER);

    for (let datePicker of datePickers) {
      const config = getCommonConfig(datePicker);
      const css = getCustomCSS(datePicker);
      const pickerInstance = new easepick.create({
        ...config,
        date: new Date(),
        css,
      });
      showDatePickerOnIconClick(datePicker, pickerInstance);
    }
  };

  const initializeDateRangePickers = () => {
    const datePickers = document.querySelectorAll(selectors.DATE_RANGE_PICKER);

    for (let datePicker of datePickers) {
      const config = getCommonConfig(datePicker);
      const css = getCustomCSS(datePicker);

      const pickerInstance = new easepick.create({
        ...config,
        css,
        plugins: ["RangePlugin"],
        RangePlugin: {
          startDate: new Date(),
          endDate: new Date(),
        },
      });
      showDatePickerOnIconClick(datePicker, pickerInstance);
    }
  };

  const loadDatePickerPackageCSS = async () => {
    const res = await fetch("https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css");
    if (res.ok) {
      datePickerPackageCss = await res.text();
    }
  };

  await loadDatePickerPackageCSS();
  initializeDatePickers();
  initializeDateRangePickers();
};

formFieldsDateInput();

/**
 * INITIALIZE USER IP INPUTS
 */

const formFieldsUserIp = async () => {
  const hideAdminAlert = () => {
    /**
     * @type {HTMLElement[]}
     */
    const alertElements = document.querySelectorAll("[form-fields-pro-user-ip-admin-alert]");

    for (let element of alertElements) element.style.display = "none";
  };

  const getUserIp = async () => {
    const BASE_URL = "https://flowapps-data-client.vercel.app";
    const res = await fetch(`${BASE_URL}/api/user-ip`);

    if (res.ok) {
      const { ip } = await res.json();
      return ip;
    } else return "";
  };

  const collectUserIp = async () => {
    const ip = await getUserIp();

    /**
     * @type {HTMLInputElement[]}
     */
    const inputElements = document.querySelectorAll("[form-fields-pro-user-ip-input]");

    for (let input of inputElements) {
      input.value = ip;
    }
  };

  hideAdminAlert();
  collectUserIp();
};

formFieldsUserIp();

/**
 * INITIALIZE RANGE SLIDERS
 */
const formFieldsNumberSlider = async () => {
  const sleep = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(true), 5);
    });

  const additionalCss = `
    .rs-noscale .rs-scale {
      display: none;
    }
    .rs-scale {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .rs-scale span {
      display: none;
    }
    .rs-scale span:first-child, .rs-scale span:last-child {
      display: initial;
    }
    .rs-scale span::before {
      display: none;
    }
    .rs-container .rs-bg, .rs-container .rs-selected {
      height: 12px;
      border-radius: 13.5px;
    }
  
    .rs-container .rs-pointer {
      width: 22px;
      height: 22px;
      top: 0.5px;
      border: none;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
  
    .rs-container .rs-selected {
      border: none;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
  
    .rs-container .rs-pointer::after, .rs-container .rs-pointer::before {
      display: none;
    }
  
    .rs-tooltip {
      min-width: fit-content;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
    `;

  const addNumberSliderCss = async () => {
    const res = await fetch(`https://slawomir-zaziablo.github.io/range-slider/css/rSlider.min.css`);

    if (res.ok) {
      const cssString = await res.text();
      const style = document.createElement("style");
      style.innerHTML = `${cssString} ${additionalCss}`;

      document.getElementsByTagName("head")[0].appendChild(style);
    }
  };

  /**
   *
   * @param {Element} element
   */
  const overrideCss = (element) => {
    const inputName = element.getAttribute("name");

    const formFieldsId = `${inputName}-${Date.now()}`;
    element.setAttribute("form-fields-id", formFieldsId);

    const { backgroundColor: parentBackgroundColor, color: parentTextColor } = getComputedStyle(element.parentElement);

    const lightTheme = {
      maxMinValueTextColor: element.getAttribute("data-light-theme-max-min-text-color") || parentTextColor,
      tooltipTextColor: element.getAttribute("data-light-theme-tooltip-text-color") || parentTextColor,
      sliderColor: element.getAttribute("data-light-theme-slider-color") || parentBackgroundColor,
    };

    const darkTheme = {
      maxMinValueTextColor: element.getAttribute("data-dark-theme-max-min-text-color") || parentTextColor,
      tooltipTextColor: element.getAttribute("data-dark-theme-tooltip-text-color") || parentTextColor,
      sliderColor: element.getAttribute("data-dark-theme-slider-color") || parentBackgroundColor,
    };

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`
      [form-fields-id="${formFieldsId}"] + .rs-container .rs-selected {
        background: ${lightTheme.sliderColor}
      }
      [form-fields-id="${formFieldsId}"] + .rs-container .rs-tooltip {
        color: ${lightTheme.tooltipTextColor};
        background: ${lightTheme.sliderColor};
      }
  
      [form-fields-id="${formFieldsId}"] + .rs-container .rs-scale span ins {
        color: ${lightTheme.maxMinValueTextColor};
      }
  
      @media (prefers-color-scheme: dark) {
        [form-fields-id="${formFieldsId}"] + .rs-container .rs-selected {
          background: ${darkTheme.sliderColor}
        }
        [form-fields-id="${formFieldsId}"] + .rs-container .rs-tooltip {
          color: ${darkTheme.tooltipTextColor};
          background: ${darkTheme.sliderColor};
        }
  
        [form-fields-id="${formFieldsId}"] + .rs-container .rs-scale span ins {
          color: ${darkTheme.maxMinValueTextColor}
        }
      }
      `);

    const sheets = document.adoptedStyleSheets || [];
    document.adoptedStyleSheets = [...sheets, sheet];
  };

  /**
   *
   * @param {Element} sliderInput
   */
  const initializeRegularSlider = (sliderInput) => {
    const min = Number(sliderInput.getAttribute("data-min"));
    const max = Number(sliderInput.getAttribute("data-max"));
    const defaultValue = Number(sliderInput.getAttribute("data-default"));

    new rSlider({
      target: sliderInput,
      values: { min, max },
      set: [defaultValue],
      range: false,
      tooltip: true,
      scale: true,
      label: false,
      step: 1,
    });
  };

  /**
   *
   * @param {Element} sliderInput
   */
  const initializeRangeSlider = (sliderInput) => {
    const min = Number(sliderInput.getAttribute("data-min"));
    const max = Number(sliderInput.getAttribute("data-max"));
    const defaultmin = Number(sliderInput.getAttribute("data-min-default"));
    const defaultmax = Number(sliderInput.getAttribute("data-max-default"));

    new rSlider({
      target: sliderInput,
      values: { min, max },
      set: [defaultmin, defaultmax],
      range: true,
      tooltip: true,
      scale: true,
      label: false,
      step: 1,
    });
  };

  const initializeTheSliders = async () => {
    const sliders = document.querySelectorAll(`[form-fields-pro-number-slider]`);

    for (let slider of sliders) {
      const rangeSlider = slider.getAttribute("allow-range");
      if (rangeSlider) initializeRangeSlider(slider);
      else initializeRegularSlider(slider);

      overrideCss(slider);
      await sleep();
    }
  };

  await addNumberSliderCss();

  initializeTheSliders();
};

formFieldsNumberSlider();

/**
 * INITIALIZE SELECT INPUTS
 */
const formFieldsSelect = async () => {
  const sleep = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(true), 5);
    });

  function closest(e, t) {
    return !e ? false : e === t ? true : closest(e.parentNode, t);
  }

  const hideDropdownOnOutsideClick = (selectWrapper, selectList, noItemFoundDiv) => {
    selectList.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    document.body.addEventListener("click", function (e) {
      if (!closest(e.target, selectWrapper)) {
        selectList.style.display = "none";
        if (noItemFoundDiv) noItemFoundDiv.style.display = "none";
      }
    });
  };

  /**
   *
   * @param {Element} element select list element
   */
  const overrideCss = (element) => {
    const inputName = element.getAttribute("dropdown-name");

    const formFieldsId = `${inputName}-${Date.now()}`;
    element.setAttribute("form-fields-id", formFieldsId);

    const lightTheme = {
      hoverTextColor: element.getAttribute("data-light-theme-hover-text-color"),
      hoverBackground: element.getAttribute("data-light-theme-hover-background-color"),
    };

    const darkTheme = {
      hoverTextColor: element.getAttribute("data-dark-theme-hover-text-color"),
      hoverBackground: element.getAttribute("data-dark-theme-hover-background-color"),
    };

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`
        [form-fields-id="${formFieldsId}"] .form-fields-dropdown-item:hover {
          color: ${lightTheme.hoverTextColor};
          background: ${lightTheme.hoverBackground}
        }
    
        @media (prefers-color-scheme: dark) {
          [form-fields-id="${formFieldsId}"] .form-fields-dropdown-item:hover {
            color: ${darkTheme.hoverTextColor};
            background: ${darkTheme.hoverBackground}
          }
        }
        `);

    const sheets = document.adoptedStyleSheets || [];
    document.adoptedStyleSheets = [...sheets, sheet];
  };

  /**
   *
   * @param {HTMLInputElement} input
   * @param {HTMLElement[]} selectItems
   * @param {HTMLElement} selectList
   * @param {HTMLElement} noItemFoundDiv
   */
  function filterItemsOnInputChange(input, selectItems, selectList, noItemFoundDiv) {
    input.addEventListener("click", (e) => {
      if (selectList.style.display === "block") {
        e.stopPropagation();
      }
      // const listDisplayed = selectList.style.display === "block";

      // if (listDisplayed) selectList.style.display = "none";
      // else selectList.style.display = "block";
    });

    input.addEventListener("input", (e) => {
      const val = e.target.value;

      if (val.trim()) {
        let count = 0;
        for (let item of selectItems) {
          if (item.innerText.toLowerCase().includes(val.toLowerCase())) {
            item.style.display = "block";
            count++;
          } else item.style.display = "none";
        }
        if (count === 0) {
          noItemFoundDiv.style.display = "block";
        } else noItemFoundDiv.style.display = "none";
      } else {
        for (let item of selectItems) {
          item.style.display = "block";
        }
        noItemFoundDiv.style.display = "none";
      }
    });
  }

  /**
   *
   * @param {HTMLElement} selectWrapper
   * @param {HTMLElement} selectList
   */
  function hideListOnOutsideClick(selectWrapper, selectList) {
    selectWrapper.addEventListener("click", (e) => selectWrapper.focus());
    selectWrapper.addEventListener("blur", (e) => {
      selectList.style.display = "none";
    });
  }

  /**
   *
   * @param {HTMLElement} toggler
   * @param {HTMLElement} selectList
   */
  function showHideListOnTogglerClick(toggler, selectList) {
    toggler.addEventListener("click", (e) => {
      const listDisplayed = selectList.style.display === "block";

      if (listDisplayed) selectList.style.display = "none";
      else selectList.style.display = "block";
    });
  }

  /**
   *
   * @param {{ selectItems: HTMLElement[], selectList: HTMLElement, selectedItemDisplayLabel: HTMLElement, input: HTMLInputElement, isSearchable: boolean}} param0
   */
  function setInputValueOnClick({ selectItems, selectList, input, selectedItemDisplayLabel, isSearchable }) {
    selectItems.forEach((item) => {
      item.addEventListener("click", () => {
        const data = item.getAttribute("input-data");
        input.value = data;

        selectList.style.display = "none";

        if (!isSearchable) {
          selectedItemDisplayLabel.innerHTML = data;
        }
      });
    });
  }

  /**
   *
   * @param {Element} selectWrapper
   */
  const makeTheSelectInteractive = async (selectWrapper) => {
    const input = selectWrapper.querySelector(`[form-field-dropdown-input]`);
    const toggler = selectWrapper.querySelector(`[form-field-dropdown-toggler]`);
    const selectList = selectWrapper.querySelector(`[form-field-dropdown-item-list]`);
    const selectItems = selectWrapper.querySelectorAll(`[form-field-dropdown-item]`);
    const selectedItemDisplayLabel = selectWrapper.querySelector(`[form-field-dropdown-toggler-selected-value]`);
    const isSearchable = selectWrapper.getAttribute("data-searchable");
    const noItemFoundDiv = selectWrapper.querySelector(`[form-field-searchable-dropdown-no-item-found]`);

    showHideListOnTogglerClick(toggler, selectList);
    hideDropdownOnOutsideClick(selectWrapper, selectList, noItemFoundDiv);
    overrideCss(selectList);

    setInputValueOnClick({
      selectItems,
      input,
      selectList,
      toggler,
      selectedItemDisplayLabel,
      isSearchable,
    });

    if (isSearchable) filterItemsOnInputChange(input, selectItems, selectList, noItemFoundDiv);
  };

  // find all select inputs with list
  const selectWrappers = document.querySelectorAll(`[form-fields-type="select"]`);
  for (let select of selectWrappers) {
    makeTheSelectInteractive(select);
    await sleep();
  }
};

// formFieldsSelect();


/**
 * INITIALIZE SELECT INPUTS
 */
const formFieldsSelectNew = async () => {
  const addSelect2Css = async () => {
    const res = await fetch(`https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css`);

    if (res.ok) {
      const cssString = await res.text();
      const style = document.createElement("style");
      style.innerHTML = `${cssString}`;

      document.getElementsByTagName("head")[0].appendChild(style);
    }
  };

  /**
   *
   * @param {Element} element select list element
   */
  const overrideCss = (element) => {
    const inputName = element.getAttribute("name");
    element.id = `${inputName.replace(" ", "")}-${Date.now()}`;

    const lightTheme = {
      hoverTextColor: element.getAttribute("data-light-theme-hover-text-color"),
      hoverBackground: element.getAttribute("data-light-theme-hover-background-color"),
    };

    const darkTheme = {
      hoverTextColor: element.getAttribute("data-dark-theme-hover-text-color"),
      hoverBackground: element.getAttribute("data-dark-theme-hover-background-color"),
    };

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`
        #select2-${element.id}-results li.select2-results__option--highlighted {
          color: ${lightTheme.hoverTextColor};
          background: ${lightTheme.hoverBackground}
        }
    
        @media (prefers-color-scheme: dark) {
          #select2-${element.id}-results li.select2-results__option--highlighted {
            color: ${darkTheme.hoverTextColor};
            background: ${darkTheme.hoverBackground}
          }
        }
        `);

    const sheets = document.adoptedStyleSheets || [];
    document.adoptedStyleSheets = [...sheets, sheet];
  };

  await addSelect2Css();

  const selectInputs = document.querySelectorAll(`[form-fields-type="select"]`);
  for (let select of selectInputs) {
    overrideCss(select);
    const isSearchable = select.getAttribute("data-searchable");
    $(select).select2({
      minimumResultsForSearch: isSearchable ? 0 : Infinity,
    });
  }
};

formFieldsSelectNew();