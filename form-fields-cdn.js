/**
 * FORM FIELDS PRO CDN SCRIPT - v4.0.0
 */

/**
 * SELECT2 JQUERY LIBRARY SCRIPT  
 */
/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(t){var e,n,s,p,r,o,h,f,g,m,y,v,i,a,_,s=((u=t&&t.fn&&t.fn.select2&&t.fn.select2.amd?t.fn.select2.amd:u)&&u.requirejs||(u?n=u:u={},g={},m={},y={},v={},i=Object.prototype.hasOwnProperty,a=[].slice,_=/\.js$/,h=function(e,t){var n,s,i=c(e),r=i[0],t=t[1];return e=i[1],r&&(n=x(r=l(r,t))),r?e=n&&n.normalize?n.normalize(e,(s=t,function(e){return l(e,s)})):l(e,t):(r=(i=c(e=l(e,t)))[0],e=i[1],r&&(n=x(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},f={require:function(e){return w(e)},exports:function(e){var t=g[e];return void 0!==t?t:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:(t=e,function(){return y&&y.config&&y.config[t]||{}})};var t}},r=function(e,t,n,s){var i,r,o,a,l,c=[],u=typeof n,d=A(s=s||e);if("undefined"==u||"function"==u){for(t=!t.length&&n.length?["require","exports","module"]:t,a=0;a<t.length;a+=1)if("require"===(r=(o=h(t[a],d)).f))c[a]=f.require(e);else if("exports"===r)c[a]=f.exports(e),l=!0;else if("module"===r)i=c[a]=f.module(e);else if(b(g,r)||b(m,r)||b(v,r))c[a]=x(r);else{if(!o.p)throw new Error(e+" missing "+r);o.p.load(o.n,w(s,!0),function(t){return function(e){g[t]=e}}(r),{}),c[a]=g[r]}u=n?n.apply(g[e],c):void 0,e&&(i&&i.exports!==p&&i.exports!==g[e]?g[e]=i.exports:u===p&&l||(g[e]=u))}else e&&(g[e]=n)},e=n=o=function(e,t,n,s,i){if("string"==typeof e)return f[e]?f[e](t):x(h(e,A(t)).f);if(!e.splice){if((y=e).deps&&o(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=p}return t=t||function(){},"function"==typeof n&&(n=s,s=i),s?r(p,e,t,n):setTimeout(function(){r(p,e,t,n)},4),o},o.config=function(e){return o(e)},e._defined=g,(s=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),b(g,e)||b(m,e)||(m[e]=[e,t,n])}).amd={jQuery:!0},u.requirejs=e,u.require=n,u.define=s),u.define("almond",function(){}),u.define("jquery",[],function(){var e=t||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),u.define("select2/utils",["jquery"],function(r){var s={};function c(e){var t,n=e.prototype,s=[];for(t in n)"function"==typeof n[t]&&"constructor"!==t&&s.push(t);return s}s.Extend=function(e,t){var n,s={}.hasOwnProperty;function i(){this.constructor=e}for(n in t)s.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},s.Decorate=function(s,i){var e=c(i),t=c(s);function r(){var e=Array.prototype.unshift,t=i.prototype.constructor.length,n=s.prototype.constructor;0<t&&(e.call(arguments,s.prototype.constructor),n=i.prototype.constructor),n.apply(this,arguments)}i.displayName=s.displayName,r.prototype=new function(){this.constructor=r};for(var n=0;n<t.length;n++){var o=t[n];r.prototype[o]=s.prototype[o]}for(var a=0;a<e.length;a++){var l=e[a];r.prototype[l]=function(e){var t=function(){};e in r.prototype&&(t=r.prototype[e]);var n=i.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}(l)}return r};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},0===(n=null==n?[]:n).length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,s=e.length;n<s;n++)e[n].apply(this,t)},s.Observable=e,s.generateChars=function(e){for(var t="",n=0;n<e;n++)t+=Math.floor(36*Math.random()).toString(36);return t},s.bind=function(e,t){return function(){e.apply(t,arguments)}},s._convertData=function(e){for(var t in e){var n=t.split("-"),s=e;if(1!==n.length){for(var i=0;i<n.length;i++){var r=n[i];(r=r.substring(0,1).toLowerCase()+r.substring(1))in s||(s[r]={}),i==n.length-1&&(s[r]=e[t]),s=s[r]}delete e[t]}}return e},s.hasScroll=function(e,t){var n=r(t),s=t.style.overflowX,i=t.style.overflowY;return(s!==i||"hidden"!==i&&"visible"!==i)&&("scroll"===s||"scroll"===i||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},s.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},s.__cache={};var n=0;return s.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null!=t||(t=e.id?"select2-data-"+e.id:"select2-data-"+(++n).toString()+"-"+s.generateChars(4),e.setAttribute("data-select2-id",t)),t},s.StoreData=function(e,t,n){e=s.GetUniqueElementId(e);s.__cache[e]||(s.__cache[e]={}),s.__cache[e][t]=n},s.GetData=function(e,t){var n=s.GetUniqueElementId(e);return t?s.__cache[n]&&null!=s.__cache[n][t]?s.__cache[n][t]:r(e).data(t):s.__cache[n]},s.RemoveData=function(e){var t=s.GetUniqueElementId(e);null!=s.__cache[t]&&delete s.__cache[t],e.removeAttribute("data-select2-id")},s.copyNonInternalCssClasses=function(e,t){var n=(n=e.getAttribute("class").trim().split(/\s+/)).filter(function(e){return 0===e.indexOf("select2-")}),t=(t=t.getAttribute("class").trim().split(/\s+/)).filter(function(e){return 0!==e.indexOf("select2-")}),t=n.concat(t);e.setAttribute("class",t.join(" "))},s}),u.define("select2/results",["jquery","./utils"],function(d,p){function s(e,t,n){this.$element=e,this.data=n,this.options=t,s.__super__.constructor.call(this)}return p.Extend(s,p.Observable),s.prototype.render=function(){var e=d('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},s.prototype.clear=function(){this.$results.empty()},s.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=d('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),s=this.options.get("translations").get(e.message);n.append(t(s(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},s.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},s.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var s=e.results[n],s=this.option(s);t.push(s)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},s.prototype.position=function(e,t){t.find(".select2-results").append(e)},s.prototype.sort=function(e){return this.options.get("sorter")(e)},s.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option--selectable"),t=e.filter(".select2-results__option--selected");(0<t.length?t:e).first().trigger("mouseenter"),this.ensureHighlightVisible()},s.prototype.setClasses=function(){var t=this;this.data.current(function(e){var s=e.map(function(e){return e.id.toString()});t.$results.find(".select2-results__option--selectable").each(function(){var e=d(this),t=p.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<s.indexOf(n)?(this.classList.add("select2-results__option--selected"),e.attr("aria-selected","true")):(this.classList.remove("select2-results__option--selected"),e.attr("aria-selected","false"))})})},s.prototype.showLoading=function(e){this.hideLoading();e={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},e=this.option(e);e.className+=" loading-results",this.$results.prepend(e)},s.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},s.prototype.option=function(e){var t=document.createElement("li");t.classList.add("select2-results__option"),t.classList.add("select2-results__option--selectable");var n,s={role:"option"},i=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(n in(null!=e.element&&i.call(e.element,":disabled")||null==e.element&&e.disabled)&&(s["aria-disabled"]="true",t.classList.remove("select2-results__option--selectable"),t.classList.add("select2-results__option--disabled")),null==e.id&&t.classList.remove("select2-results__option--selectable"),null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(s.role="group",s["aria-label"]=e.text,t.classList.remove("select2-results__option--selectable"),t.classList.add("select2-results__option--group")),s){var r=s[n];t.setAttribute(n,r)}if(e.children){var o=d(t),a=document.createElement("strong");a.className="select2-results__group",this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],u=this.option(u);l.push(u)}i=d("<ul></ul>",{class:"select2-results__options select2-results__options--nested",role:"none"});i.append(l),o.append(a),o.append(i)}else this.template(e,t);return p.StoreData(t,"data",e),t},s.prototype.bind=function(t,e){var i=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){i.clear(),i.append(e.data),t.isOpen()&&(i.setClasses(),i.highlightFirstItem())}),t.on("results:append",function(e){i.append(e.data),t.isOpen()&&i.setClasses()}),t.on("query",function(e){i.hideMessages(),i.showLoading(e)}),t.on("select",function(){t.isOpen()&&(i.setClasses(),i.options.get("scrollAfterSelect")&&i.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(i.setClasses(),i.options.get("scrollAfterSelect")&&i.highlightFirstItem())}),t.on("open",function(){i.$results.attr("aria-expanded","true"),i.$results.attr("aria-hidden","false"),i.setClasses(),i.ensureHighlightVisible()}),t.on("close",function(){i.$results.attr("aria-expanded","false"),i.$results.attr("aria-hidden","true"),i.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=i.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e,t=i.getHighlightedResults();0!==t.length&&(e=p.GetData(t[0],"data"),t.hasClass("select2-results__option--selected")?i.trigger("close",{}):i.trigger("select",{data:e}))}),t.on("results:previous",function(){var e,t=i.getHighlightedResults(),n=i.$results.find(".select2-results__option--selectable"),s=n.index(t);s<=0||(e=s-1,0===t.length&&(e=0),(s=n.eq(e)).trigger("mouseenter"),t=i.$results.offset().top,n=s.offset().top,s=i.$results.scrollTop()+(n-t),0===e?i.$results.scrollTop(0):n-t<0&&i.$results.scrollTop(s))}),t.on("results:next",function(){var e,t=i.getHighlightedResults(),n=i.$results.find(".select2-results__option--selectable"),s=n.index(t)+1;s>=n.length||((e=n.eq(s)).trigger("mouseenter"),t=i.$results.offset().top+i.$results.outerHeight(!1),n=e.offset().top+e.outerHeight(!1),e=i.$results.scrollTop()+n-t,0===s?i.$results.scrollTop(0):t<n&&i.$results.scrollTop(e))}),t.on("results:focus",function(e){e.element[0].classList.add("select2-results__option--highlighted"),e.element[0].setAttribute("aria-selected","true")}),t.on("results:message",function(e){i.displayMessage(e)}),d.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=i.$results.scrollTop(),n=i.$results.get(0).scrollHeight-t+e.deltaY,t=0<e.deltaY&&t-e.deltaY<=0,n=e.deltaY<0&&n<=i.$results.height();t?(i.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):n&&(i.$results.scrollTop(i.$results.get(0).scrollHeight-i.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option--selectable",function(e){var t=d(this),n=p.GetData(this,"data");t.hasClass("select2-results__option--selected")?i.options.get("multiple")?i.trigger("unselect",{originalEvent:e,data:n}):i.trigger("close",{}):i.trigger("select",{originalEvent:e,data:n})}),this.$results.on("mouseenter",".select2-results__option--selectable",function(e){var t=p.GetData(this,"data");i.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected","false"),i.trigger("results:focus",{data:t,element:d(this)})})},s.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},s.prototype.destroy=function(){this.$results.remove()},s.prototype.ensureHighlightVisible=function(){var e,t,n,s,i=this.getHighlightedResults();0!==i.length&&(e=this.$results.find(".select2-results__option--selectable").index(i),s=this.$results.offset().top,t=i.offset().top,n=this.$results.scrollTop()+(t-s),s=t-s,n-=2*i.outerHeight(!1),e<=2?this.$results.scrollTop(0):(s>this.$results.outerHeight()||s<0)&&this.$results.scrollTop(n))},s.prototype.template=function(e,t){var n=this.options.get("templateResult"),s=this.options.get("escapeMarkup"),e=n(e,t);null==e?t.style.display="none":"string"==typeof e?t.innerHTML=s(e):d(t).append(e)},s}),u.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),u.define("select2/selection/base",["jquery","../utils","../keys"],function(n,s,i){function r(e,t){this.$element=e,this.options=t,r.__super__.constructor.call(this)}return s.Extend(r,s.Observable),r.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=s.GetData(this.$element[0],"old-tabindex")?this._tabindex=s.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},r.prototype.bind=function(e,t){var n=this,s=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===i.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",s),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},r.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},r.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&s.GetData(this,"element").select2("close")})})},r.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},r.prototype.position=function(e,t){t.find(".selection").append(e)},r.prototype.destroy=function(){this._detachCloseHandler(this.container)},r.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},r.prototype.isEnabled=function(){return!this.isDisabled()},r.prototype.isDisabled=function(){return this.options.get("disabled")},r}),u.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,s){function i(){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e[0].classList.add("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},i.prototype.bind=function(t,e){var n=this;i.__super__.bind.apply(this,arguments);var s=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",s).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",s),this.$selection.attr("aria-controls",s),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e("<span></span>")},i.prototype.update=function(e){var t,n;0!==e.length?(n=e[0],t=this.$selection.find(".select2-selection__rendered"),e=this.display(n,t),t.empty().append(e),(n=n.title||n.text)?t.attr("title",n):t.removeAttr("title")):this.clear()},i}),u.define("select2/selection/multiple",["jquery","./base","../utils"],function(i,e,c){function r(e,t){r.__super__.constructor.apply(this,arguments)}return c.Extend(r,e),r.prototype.render=function(){var e=r.__super__.render.call(this);return e[0].classList.add("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},r.prototype.bind=function(e,t){var n=this;r.__super__.bind.apply(this,arguments);var s=e.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",s),this.$selection.on("click",function(e){n.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){var t;n.isDisabled()||(t=i(this).parent(),t=c.GetData(t[0],"data"),n.trigger("unselect",{originalEvent:e,data:t}))}),this.$selection.on("keydown",".select2-selection__choice__remove",function(e){n.isDisabled()||e.stopPropagation()})},r.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},r.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},r.prototype.selectionContainer=function(){return i('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')},r.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=this.$selection.find(".select2-selection__rendered").attr("id")+"-choice-",s=0;s<e.length;s++){var i=e[s],r=this.selectionContainer(),o=this.display(i,r),a=n+c.generateChars(4)+"-";i.id?a+=i.id:a+=c.generateChars(4),r.find(".select2-selection__choice__display").append(o).attr("id",a);var l=i.title||i.text;l&&r.attr("title",l);o=this.options.get("translations").get("removeItem"),l=r.find(".select2-selection__choice__remove");l.attr("title",o()),l.attr("aria-label",o()),l.attr("aria-describedby",a),c.StoreData(r[0],"data",i),t.push(r)}this.$selection.find(".select2-selection__rendered").append(t)}},r}),u.define("select2/selection/placeholder",[],function(){function e(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return e.prototype.normalizePlaceholder=function(e,t){return t="string"==typeof t?{id:"",text:t}:t},e.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();n.html(this.display(t)),n[0].classList.add("select2-selection__placeholder"),n[0].classList.remove("select2-selection__choice");t=t.title||t.text||n.text();return this.$selection.find(".select2-selection__rendered").attr("title",t),n},e.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();t=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(t)},e}),u.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(i,s,a){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){s._handleClear(e)}),t.on("keypress",function(e){s._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.isDisabled()){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var s=a.GetData(n[0],"data"),i=this.$element.val();this.$element.val(this.placeholder.id);var r={data:s};if(this.trigger("clear",r),r.prevented)this.$element.val(i);else{for(var o=0;o<s.length;o++)if(r={data:s[o]},this.trigger("unselect",r),r.prevented)return void this.$element.val(i);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=s.DELETE&&t.which!=s.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){var n,s;e.call(this,t),this.$selection.find(".select2-selection__clear").remove(),this.$selection[0].classList.remove("select2-selection--clearable"),0<this.$selection.find(".select2-selection__placeholder").length||0===t.length||(n=this.$selection.find(".select2-selection__rendered").attr("id"),s=this.options.get("translations").get("removeAllItems"),(e=i('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title",s()),e.attr("aria-label",s()),e.attr("aria-describedby",n),a.StoreData(e[0],"data",t),this.$selection.prepend(e),this.$selection[0].classList.add("select2-selection--clearable"))},e}),u.define("select2/selection/search",["jquery","../utils","../keys"],function(s,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=this.options.get("translations").get("search"),n=s('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');this.$searchContainer=n,this.$search=n.find("textarea"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",t());e=e.call(this);return this._transferTabIndex(),e.append(this.$searchContainer),e},e.prototype.bind=function(e,t,n){var s=this,i=t.id+"-results",r=t.id+"-container";e.call(this,t,n),s.$search.attr("aria-describedby",r),t.on("open",function(){s.$search.attr("aria-controls",i),s.$search.trigger("focus")}),t.on("close",function(){s.$search.val(""),s.resizeSearch(),s.$search.removeAttr("aria-controls"),s.$search.removeAttr("aria-activedescendant"),s.$search.trigger("focus")}),t.on("enable",function(){s.$search.prop("disabled",!1),s._transferTabIndex()}),t.on("disable",function(){s.$search.prop("disabled",!0)}),t.on("focus",function(e){s.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?s.$search.attr("aria-activedescendant",e.data._resultId):s.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){s.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){s._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){var t;e.stopPropagation(),s.trigger("keypress",e),s._keyUpPrevented=e.isDefaultPrevented(),e.which!==l.BACKSPACE||""!==s.$search.val()||0<(t=s.$selection.find(".select2-selection__choice").last()).length&&(t=a.GetData(t[0],"data"),s.searchRemoveChoice(t),e.preventDefault())}),this.$selection.on("click",".select2-search--inline",function(e){s.$search.val()&&e.stopPropagation()});var t=document.documentMode,o=t&&t<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){o?s.$selection.off("input.search input.searchcheck"):s.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){var t;o&&"input"===e.type?s.$selection.off("input.search input.searchcheck"):(t=e.which)!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&s.handleSearch(e)})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){var e;this.resizeSearch(),this._keyUpPrevented||(e=this.$search.val(),this.trigger("query",{term:e})),this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="100%";""===this.$search.attr("placeholder")&&(e=.75*(this.$search.val().length+1)+"em"),this.$search.css("width",e)},e}),u.define("select2/selection/selectionCss",["../utils"],function(n){function e(){}return e.prototype.render=function(e){var t=e.call(this),e=this.options.get("selectionCssClass")||"";return-1!==e.indexOf(":all:")&&(e=e.replace(":all:",""),n.copyNonInternalCssClasses(t[0],this.$element[0])),t.addClass(e),t},e}),u.define("select2/selection/eventRelay",["jquery"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var s=this,i=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],r=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){var n;-1!==i.indexOf(e)&&(t=t||{},n=o.Event("select2:"+e,{params:t}),s.$element.trigger(n),-1!==r.indexOf(e)&&(t.prevented=n.isDefaultPrevented()))})},e}),u.define("select2/translation",["jquery","require"],function(t,n){function s(e){this.dict=e||{}}return s.prototype.all=function(){return this.dict},s.prototype.get=function(e){return this.dict[e]},s.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},s._cache={},s.loadPath=function(e){var t;return e in s._cache||(t=n(e),s._cache[e]=t),new s(s._cache[e])},s}),u.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),u.define("select2/data/base",["../utils"],function(n){function s(e,t){s.__super__.constructor.call(this)}return n.Extend(s,n.Observable),s.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},s.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},s.prototype.bind=function(e,t){},s.prototype.destroy=function(){},s.prototype.generateResultId=function(e,t){e=e.id+"-result-";return e+=n.generateChars(4),null!=t.id?e+="-"+t.id.toString():e+="-"+n.generateChars(4),e},s}),u.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var t=this;e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"),function(e){return t.item(l(e))}))},n.prototype.select=function(i){var e,r=this;if(i.selected=!0,null!=i.element&&"option"===i.element.tagName.toLowerCase())return i.element.selected=!0,void this.$element.trigger("input").trigger("change");this.$element.prop("multiple")?this.current(function(e){var t=[];(i=[i]).push.apply(i,e);for(var n=0;n<i.length;n++){var s=i[n].id;-1===t.indexOf(s)&&t.push(s)}r.$element.val(t),r.$element.trigger("input").trigger("change")}):(e=i.id,this.$element.val(e),this.$element.trigger("input").trigger("change"))},n.prototype.unselect=function(i){var r=this;if(this.$element.prop("multiple")){if(i.selected=!1,null!=i.element&&"option"===i.element.tagName.toLowerCase())return i.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var s=e[n].id;s!==i.id&&-1===t.indexOf(s)&&t.push(s)}r.$element.val(t),r.$element.trigger("input").trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(t,e){var n=[],s=this;this.$element.children().each(function(){var e;"option"!==this.tagName.toLowerCase()&&"optgroup"!==this.tagName.toLowerCase()||(e=l(this),e=s.item(e),null!==(e=s.matches(t,e))&&n.push(e))}),e({results:n})},n.prototype.addOptions=function(e){this.$element.append(e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);e=this._normalizeItem(e);return e.element=t,a.StoreData(t,"data",e),l(t)},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;var n=e[0];if("option"===n.tagName.toLowerCase())t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if("optgroup"===n.tagName.toLowerCase()){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var s=e.children("option"),i=[],r=0;r<s.length;r++){var o=l(s[r]),o=this.item(o);i.push(o)}t.children=i}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),u.define("select2/data/array",["./select","../utils","jquery"],function(e,t,c){function s(e,t){this._dataToConvert=t.get("data")||[],s.__super__.constructor.call(this,e,t)}return t.Extend(s,e),s.prototype.bind=function(e,t){s.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},s.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),s.__super__.select.call(this,n)},s.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),s=n.map(function(){return t.item(c(this)).id}).get(),i=[];for(var r=0;r<e.length;r++){var o,a,l=this._normalizeItem(e[r]);0<=s.indexOf(l.id)?(o=n.filter(function(e){return function(){return c(this).val()==e.id}}(l)),a=this.item(o),a=c.extend(!0,{},l,a),a=this.option(a),o.replaceWith(a)):(a=this.option(l),l.children&&(l=this.convertToOptions(l.children),a.append(l)),i.push(a))}return i},s}),u.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,r){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return r.extend({},e,{q:e.term})},transport:function(e,t,n){e=r.ajax(e);return e.then(t),e.fail(n),e}};return r.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(t,n){var s=this;null!=this._request&&("function"==typeof this._request.abort&&this._request.abort(),this._request=null);var i=r.extend({type:"GET"},this.ajaxOptions);function e(){var e=i.transport(i,function(e){e=s.processResults(e,t);s.options.get("debug")&&window.console&&console.error&&(e&&e.results&&Array.isArray(e.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),n(e)},function(){"status"in e&&(0===e.status||"0"===e.status)||s.trigger("results:message",{message:"errorLoading"})});s._request=e}"function"==typeof i.url&&(i.url=i.url.call(this.$element,t)),"function"==typeof i.data&&(i.data=i.data.call(this.$element,t)),this.ajaxOptions.delay&&null!=t.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),u.define("select2/data/tags",["jquery"],function(t){function e(e,t,n){var s=n.get("tags"),i=n.get("createTag");void 0!==i&&(this.createTag=i);i=n.get("insertTag");if(void 0!==i&&(this.insertTag=i),e.call(this,t,n),Array.isArray(s))for(var r=0;r<s.length;r++){var o=s[r],o=this._normalizeItem(o),o=this.option(o);this.$element.append(o)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var s=t.results,i=0;i<s.length;i++){var r=s[i],o=null!=r.children&&!e({results:r.children},!0);if((r.text||"").toUpperCase()===(c.term||"").toUpperCase()||o)return!n&&(t.data=s,void u(t))}if(n)return!0;var a,l=d.createTag(c);null!=l&&((a=d.option(l)).attr("data-select2-tag","true"),d.addOptions([a]),d.insertTag(s,l)),t.results=s,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){if(null==t.term)return null;t=t.term.trim();return""===t?null:{id:t,text:t}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||t(this).remove()})},e}),u.define("select2/data/tokenizer",["jquery"],function(c){function e(e,t,n){var s=n.get("tokenizer");void 0!==s&&(this.tokenizer=s),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var s=this;t.term=t.term||"";var i=this.tokenizer(t,this.options,function(e){var t,n=s._normalizeItem(e);s.$element.find("option").filter(function(){return c(this).val()===n.id}).length||((t=s.option(n)).attr("data-select2-tag",!0),s._removeOldTags(),s.addOptions([t])),t=n,s.trigger("select",{data:t})});i.term!==t.term&&(this.$search.length&&(this.$search.val(i.term),this.$search.trigger("focus")),t.term=i.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,s){for(var i=n.get("tokenSeparators")||[],r=t.term,o=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};o<r.length;){var l=r[o];-1!==i.indexOf(l)?(l=r.substr(0,o),null!=(l=a(c.extend({},t,{term:l})))?(s(l),r=r.substr(o+1)||"",o=0):o++):o++}return{term:r}},e}),u.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),u.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),u.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("select",function(){s._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var s=this;this._checkIfMaximumSelected(function(){e.call(s,t,n)})},e.prototype._checkIfMaximumSelected=function(e,t){var n=this;this.current(function(e){e=null!=e?e.length:0;0<n.maximumSelectionLength&&e>=n.maximumSelectionLength?n.trigger("results:message",{message:"maximumSelected",args:{maximum:n.maximumSelectionLength}}):t&&t()})},e}),u.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),u.define("select2/dropdown/search",["jquery"],function(r){function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("translations").get("search"),e=r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=e,this.$search=e.find("input"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",n()),t.prepend(e),t},e.prototype.bind=function(e,t,n){var s=this,i=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){s.trigger("keypress",e),s._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){r(this).off("keyup")}),this.$search.on("keyup input",function(e){s.handleSearch(e)}),t.on("open",function(){s.$search.attr("tabindex",0),s.$search.attr("aria-controls",i),s.$search.trigger("focus"),window.setTimeout(function(){s.$search.trigger("focus")},0)}),t.on("close",function(){s.$search.attr("tabindex",-1),s.$search.removeAttr("aria-controls"),s.$search.removeAttr("aria-activedescendant"),s.$search.val(""),s.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||s.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(s.showSearch(e)?s.$searchContainer[0].classList.remove("select2-search--hide"):s.$searchContainer[0].classList.add("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?s.$search.attr("aria-activedescendant",e.data._resultId):s.$search.removeAttr("aria-activedescendant")})},e.prototype.handleSearch=function(e){var t;this._keyUpPrevented||(t=this.$search.val(),this.trigger("query",{term:t})),this._keyUpPrevented=!1},e.prototype.showSearch=function(e,t){return!0},e}),u.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,s){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,s)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return t="string"==typeof t?{id:"",text:t}:t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),s=t.length-1;0<=s;s--){var i=t[s];this.placeholder.id===i.id&&n.splice(s,1)}return n},e}),u.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,s){this.lastParams={},e.call(this,t,n,s),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("query",function(e){s.lastParams=e,s.loading=!0}),t.on("query:append",function(e){s.lastParams=e,s.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);!this.loading&&e&&(e=this.$results.offset().top+this.$results.outerHeight(!1),this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=e+50&&this.loadMore())},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),u.define("select2/dropdown/attachBody",["jquery","../utils"],function(u,o){function e(e,t,n){this.$dropdownParent=u(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("open",function(){s._showDropdown(),s._attachPositioningHandler(t),s._bindContainerResultHandlers(t)}),t.on("close",function(){s._hideDropdown(),s._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t[0].classList.remove("select2"),t[0].classList.add("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=u("<span></span>"),e=e.call(this);return t.append(e),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){var n;this._containerResultsHandlersBound||(n=this,t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0)},e.prototype._attachPositioningHandler=function(e,t){var n=this,s="scroll.select2."+t.id,i="resize.select2."+t.id,r="orientationchange.select2."+t.id,t=this.$container.parents().filter(o.hasScroll);t.each(function(){o.StoreData(this,"select2-scroll-position",{x:u(this).scrollLeft(),y:u(this).scrollTop()})}),t.on(s,function(e){var t=o.GetData(this,"select2-scroll-position");u(this).scrollTop(t.y)}),u(window).on(s+" "+i+" "+r,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,s="resize.select2."+t.id,t="orientationchange.select2."+t.id;this.$container.parents().filter(o.hasScroll).off(n),u(window).off(n+" "+s+" "+t)},e.prototype._positionDropdown=function(){var e=u(window),t=this.$dropdown[0].classList.contains("select2-dropdown--above"),n=this.$dropdown[0].classList.contains("select2-dropdown--below"),s=null,i=this.$container.offset();i.bottom=i.top+this.$container.outerHeight(!1);var r={height:this.$container.outerHeight(!1)};r.top=i.top,r.bottom=i.top+r.height;var o=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<i.top-o,e=l>i.bottom+o,a={left:i.left,top:r.bottom},l=this.$dropdownParent;"static"===l.css("position")&&(l=l.offsetParent());i={top:0,left:0};(u.contains(document.body,l[0])||l[0].isConnected)&&(i=l.offset()),a.top-=i.top,a.left-=i.left,t||n||(s="below"),e||!c||t?!c&&e&&t&&(s="below"):s="above",("above"==s||t&&"below"!==s)&&(a.top=r.top-i.top-o),null!=s&&(this.$dropdown[0].classList.remove("select2-dropdown--below"),this.$dropdown[0].classList.remove("select2-dropdown--above"),this.$dropdown[0].classList.add("select2-dropdown--"+s),this.$container[0].classList.remove("select2-container--below"),this.$container[0].classList.remove("select2-container--above"),this.$container[0].classList.add("select2-container--"+s)),this.$dropdownContainer.css(a)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),u.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,s){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,s)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,s=0;s<t.length;s++){var i=t[s];i.children?n+=e(i.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),u.define("select2/dropdown/selectOnClose",["../utils"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("close",function(e){s._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}n=this.getHighlightedResults();n.length<1||(null!=(n=s.GetData(n[0],"data")).element&&n.element.selected||null==n.element&&n.selected||this.trigger("select",{data:n}))},e}),u.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("select",function(e){s._selectTriggered(e)}),t.on("unselect",function(e){s._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),u.define("select2/dropdown/dropdownCss",["../utils"],function(n){function e(){}return e.prototype.render=function(e){var t=e.call(this),e=this.options.get("dropdownCssClass")||"";return-1!==e.indexOf(":all:")&&(e=e.replace(":all:",""),n.copyNonInternalCssClasses(t[0],this.$element[0])),t.addClass(e),t},e}),u.define("select2/dropdown/tagsSearchHighlight",["../utils"],function(s){function e(){}return e.prototype.highlightFirstItem=function(e){var t=this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");if(0<t.length){var n=t.first(),t=s.GetData(n[0],"data").element;if(t&&t.getAttribute&&"true"===t.getAttribute("data-select2-tag"))return void n.trigger("mouseenter")}e.call(this)},e}),u.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,e="Please delete "+t+" character";return 1!=t&&(e+="s"),e},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"},removeItem:function(){return"Remove item"},search:function(){return"Search"}}}),u.define("select2/defaults",["jquery","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/selectionCss","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./dropdown/dropdownCss","./dropdown/tagsSearchHighlight","./i18n/en"],function(l,r,o,a,c,u,d,p,h,f,g,t,m,y,v,_,b,$,w,x,A,D,S,E,O,C,L,T,q,I,e){function n(){this.reset()}return n.prototype.apply=function(e){var t;null==(e=l.extend(!0,{},this.defaults,e)).dataAdapter&&(null!=e.ajax?e.dataAdapter=v:null!=e.data?e.dataAdapter=y:e.dataAdapter=m,0<e.minimumInputLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,$)),0<e.maximumInputLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,w)),0<e.maximumSelectionLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,x)),e.tags&&(e.dataAdapter=f.Decorate(e.dataAdapter,_)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=f.Decorate(e.dataAdapter,b))),null==e.resultsAdapter&&(e.resultsAdapter=r,null!=e.ajax&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,E)),null!=e.placeholder&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,S)),e.selectOnClose&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,L)),e.tags&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,I))),null==e.dropdownAdapter&&(e.multiple?e.dropdownAdapter=A:(t=f.Decorate(A,D),e.dropdownAdapter=t),0!==e.minimumResultsForSearch&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,C)),e.closeOnSelect&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,T)),null!=e.dropdownCssClass&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,q)),e.dropdownAdapter=f.Decorate(e.dropdownAdapter,O)),null==e.selectionAdapter&&(e.multiple?e.selectionAdapter=a:e.selectionAdapter=o,null!=e.placeholder&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,c)),e.allowClear&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,u)),e.multiple&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,d)),null!=e.selectionCssClass&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,p)),e.selectionAdapter=f.Decorate(e.selectionAdapter,h)),e.language=this._resolveLanguage(e.language),e.language.push("en");for(var n=[],s=0;s<e.language.length;s++){var i=e.language[s];-1===n.indexOf(i)&&n.push(i)}return e.language=n,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdLanguageBase:"./i18n/",autocomplete:"off",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:f.escapeMarkup,language:{},matcher:function e(t,n){if(null==t.term||""===t.term.trim())return n;if(n.children&&0<n.children.length){for(var s=l.extend(!0,{},n),i=n.children.length-1;0<=i;i--)null==e(t,n.children[i])&&s.children.splice(i,1);return 0<s.children.length?s:e(t,s)}var r=a(n.text).toUpperCase(),o=a(t.term).toUpperCase();return-1<r.indexOf(o)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,s=this.defaults.language,i=t.prop("lang"),t=t.closest("[lang]").prop("lang"),t=Array.prototype.concat.call(this._resolveLanguage(i),this._resolveLanguage(n),this._resolveLanguage(s),this._resolveLanguage(t));return e.language=t,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(l.isEmptyObject(e))return[];if(l.isPlainObject(e))return[e];for(var t,n=Array.isArray(e)?e:[e],s=[],i=0;i<n.length;i++)s.push(n[i]),"string"==typeof n[i]&&0<n[i].indexOf("-")&&(t=n[i].split("-")[0],s.push(t));return s},n.prototype._processTranslations=function(e,t){for(var n=new g,s=0;s<e.length;s++){var i=new g,r=e[s];if("string"==typeof r)try{i=g.loadPath(r)}catch(e){try{r=this.defaults.amdLanguageBase+r,i=g.loadPath(r)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+r+'" could not be automatically loaded. A fallback will be used instead.')}}else i=l.isPlainObject(r)?new g(r):r;n.extend(i)}return n},n.prototype.set=function(e,t){var n={};n[l.camelCase(e)]=t;n=f._convertData(n);l.extend(!0,this.defaults,n)},new n}),u.define("select2/options",["jquery","./defaults","./utils"],function(c,n,u){function e(e,t){this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=n.applyFromElement(this.options,t)),this.options=n.apply(this.options)}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.autocomplete&&e.prop("autocomplete")&&(this.options.autocomplete=e.prop("autocomplete")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),u.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),u.StoreData(e[0],"data",u.GetData(e[0],"select2Tags")),u.StoreData(e[0],"tags",!0)),u.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",u.GetData(e[0],"ajaxUrl")),u.StoreData(e[0],"ajax-Url",u.GetData(e[0],"ajaxUrl")));var n={};function s(e,t){return t.toUpperCase()}for(var i=0;i<e[0].attributes.length;i++){var r=e[0].attributes[i].name,o="data-";r.substr(0,o.length)==o&&(r=r.substring(o.length),o=u.GetData(e[0],r),n[r.replace(/-([a-z])/g,s)]=o)}c.fn.jquery&&"1."==c.fn.jquery.substr(0,2)&&e[0].dataset&&(n=c.extend(!0,{},e[0].dataset,n));var a,l=c.extend(!0,{},u.GetData(e[0]),n);for(a in l=u._convertData(l))-1<t.indexOf(a)||(c.isPlainObject(this.options[a])?c.extend(this.options[a],l[a]):this.options[a]=l[a]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),u.define("select2/core",["jquery","./options","./utils","./keys"],function(t,i,r,s){var o=function(e,t){null!=r.GetData(e[0],"select2")&&r.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new i(t,e),o.__super__.constructor.call(this);var n=e.attr("tabindex")||0;r.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");t=this.options.get("dataAdapter");this.dataAdapter=new t(e,this.options);n=this.render();this._placeContainer(n);t=this.options.get("selectionAdapter");this.selection=new t(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,n);t=this.options.get("dropdownAdapter");this.dropdown=new t(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,n);n=this.options.get("resultsAdapter");this.results=new n(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var s=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){s.trigger("selection:update",{data:e})}),e[0].classList.add("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),r.StoreData(e[0],"select2",this),e.data("select2",this)};return r.Extend(o,r.Observable),o.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+r.generateChars(2):r.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},o.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},o.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var s=this._resolveWidth(e,"style");return null!=s?s:this._resolveWidth(e,"element")}if("element"==t){s=e.outerWidth(!1);return s<=0?"auto":s+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;e=e.attr("style");if("string"!=typeof e)return null;for(var i=e.split(";"),r=0,o=i.length;r<o;r+=1){var a=i[r].replace(/\s/g,"").match(n);if(null!==a&&1<=a.length)return a[1]}return null},o.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},o.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=r.bind(this._syncAttributes,this),this._syncS=r.bind(this._syncSubtree,this),this._observer=new window.MutationObserver(function(e){t._syncA(),t._syncS(e)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})},o.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},o.prototype._registerSelectionEvents=function(){var n=this,s=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===s.indexOf(e)&&n.trigger(e,t)})},o.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},o.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},o.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container[0].classList.add("select2-container--open")}),this.on("close",function(){n.$container[0].classList.remove("select2-container--open")}),this.on("enable",function(){n.$container[0].classList.remove("select2-container--disabled")}),this.on("disable",function(){n.$container[0].classList.add("select2-container--disabled")}),this.on("blur",function(){n.$container[0].classList.remove("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===s.ESC||t===s.UP&&e.altKey?(n.close(e),e.preventDefault()):t===s.ENTER||t===s.TAB?(n.trigger("results:select",{}),e.preventDefault()):t===s.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===s.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===s.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===s.ENTER||t===s.SPACE||t===s.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},o.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},o.prototype._isChangeMutation=function(e){var t=this;if(e.addedNodes&&0<e.addedNodes.length){for(var n=0;n<e.addedNodes.length;n++)if(e.addedNodes[n].selected)return!0}else{if(e.removedNodes&&0<e.removedNodes.length)return!0;if(Array.isArray(e))return e.some(function(e){return t._isChangeMutation(e)})}return!1},o.prototype._syncSubtree=function(e){var e=this._isChangeMutation(e),t=this;e&&this.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})},o.prototype.trigger=function(e,t){var n=o.__super__.trigger,s={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in s){var i=s[e],s={prevented:!1,name:e,args:t};if(n.call(this,i,s),s.prevented)return void(t.prevented=!0)}n.call(this,e,t)},o.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},o.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},o.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},o.prototype.isEnabled=function(){return!this.isDisabled()},o.prototype.isDisabled=function(){return this.options.get("disabled")},o.prototype.isOpen=function(){return this.$container[0].classList.contains("select2-container--open")},o.prototype.hasFocus=function(){return this.$container[0].classList.contains("select2-container--focus")},o.prototype.focus=function(e){this.hasFocus()||(this.$container[0].classList.add("select2-container--focus"),this.trigger("focus",{}))},o.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');e=!(e=null==e||0===e.length?[!0]:e)[0];this.$element.prop("disabled",e)},o.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},o.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();e=e[0];Array.isArray(e)&&(e=e.map(function(e){return e.toString()})),this.$element.val(e).trigger("input").trigger("change")},o.prototype.destroy=function(){r.RemoveData(this.$container[0]),this.$container.remove(),this._observer.disconnect(),this._observer=null,this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",r.GetData(this.$element[0],"old-tabindex")),this.$element[0].classList.remove("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),r.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},o.prototype.render=function(){var e=t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container[0].classList.add("select2-container--"+this.options.get("theme")),r.StoreData(e[0],"element",this.$element),e},o}),u.define("jquery-mousewheel",["jquery"],function(e){return e}),u.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(i,e,r,t,o){var a;return null==i.fn.select2&&(a=["open","close","destroy"],i.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=i.extend(!0,{},t);new r(i(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,s=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=o.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,s)}),-1<a.indexOf(t)?this:n}),null==i.fn.select2.defaults&&(i.fn.select2.defaults=t),r}),{define:u.define,require:u.require});function b(e,t){return i.call(e,t)}function l(e,t){var n,s,i,r,o,a,l,c,u,d,p=t&&t.split("/"),h=y.map,f=h&&h["*"]||{};if(e){for(t=(e=e.split("/")).length-1,y.nodeIdCompat&&_.test(e[t])&&(e[t]=e[t].replace(_,"")),"."===e[0].charAt(0)&&p&&(e=p.slice(0,p.length-1).concat(e)),c=0;c<e.length;c++)"."===(d=e[c])?(e.splice(c,1),--c):".."===d&&(0===c||1===c&&".."===e[2]||".."===e[c-1]||0<c&&(e.splice(c-1,2),c-=2));e=e.join("/")}if((p||f)&&h){for(c=(n=e.split("/")).length;0<c;--c){if(s=n.slice(0,c).join("/"),p)for(u=p.length;0<u;--u)if(i=h[p.slice(0,u).join("/")],i=i&&i[s]){r=i,o=c;break}if(r)break;!a&&f&&f[s]&&(a=f[s],l=c)}!r&&a&&(r=a,o=l),r&&(n.splice(0,o,r),e=n.join("/"))}return e}function w(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),o.apply(p,e.concat([t,n]))}}function x(e){var t;if(b(m,e)&&(t=m[e],delete m[e],v[e]=!0,r.apply(p,t)),!b(g,e)&&!b(v,e))throw new Error("No "+e);return g[e]}function c(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function A(e){return e?c(e):[]}var u=s.require("jquery.select2");return t.fn.select2.amd=s,u});

/**
 * RANGE SLIDER SCRIPT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).noUiSlider={})}(this,function(ot){"use strict";function n(t){return"object"==typeof t&&"function"==typeof t.to}function st(t){t.parentElement.removeChild(t)}function at(t){return null!=t}function lt(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function ut(t,e,r){0<r&&(ft(t,e),setTimeout(function(){dt(t,e)},r))}function ct(t){return Math.max(Math.min(t,100),0)}function pt(t){return Array.isArray(t)?t:[t]}function e(t){t=(t=String(t)).split(".");return 1<t.length?t[1].length:0}function ft(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function dt(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function ht(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:(r?t.documentElement:t.body).scrollLeft,y:e?window.pageYOffset:(r?t.documentElement:t.body).scrollTop}}function s(t,e){return 100/(e-t)}function a(t,e,r){return 100*e/(t[r+1]-t[r])}function l(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=l(r,t),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return t+(r=r,a(o=[i,o],o[0]<0?r+Math.abs(o[0]):r-o[0],0)/s(t,n))}function o(t,e,r,n){if(100===n)return n;var i=l(n,t),o=t[i-1],s=t[i];return r?(s-o)/2<n-o?s:o:e[i-1]?t[i-1]+(t=n-t[i-1],i=e[i-1],Math.round(t/i)*i):n}ot.PipsMode=void 0,(H=ot.PipsMode||(ot.PipsMode={})).Range="range",H.Steps="steps",H.Positions="positions",H.Count="count",H.Values="values",ot.PipsType=void 0,(H=ot.PipsType||(ot.PipsType={}))[H.None=-1]="None",H[H.NoValue=0]="NoValue",H[H.LargeValue=1]="LargeValue",H[H.SmallValue=2]="SmallValue";var u=(t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=a(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++;for(var i,o=1,s=(e=null===e?[]:e)[n],a=0,l=0,u=0,c=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);0<s;)i=this.xPct[n+1+u]-this.xPct[n+u],100<e[n+u]*o+100-100*c?(a=i*c,o=(s-100*c)/e[n+u],c=1):(a=e[n+u]*i/100*o,o=0),r?(l-=a,1<=this.xPct.length+u&&u--):(l+=a,1<=this.xPct.length-u&&u++),s=e[n+u]*o;return t+l},t.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n=l(r,e),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return(r-t)*s(t,n)*((o=[i,o])[1]-o[0])/100+o[0]}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=o(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var n=l(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){t=l(t,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){t="min"===t?0:"max"===t?100:parseFloat(t);if(!i(t)||!i(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(t),this.xVal.push(e[0]);e=Number(e[1]);t?this.xSteps.push(!isNaN(e)&&e):isNaN(e)||(this.xSteps[0]=e),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){e&&(this.xVal[t]!==this.xVal[t+1]?(this.xSteps[t]=a([this.xVal[t],this.xVal[t+1]],e,0)/s(this.xPct[t],this.xPct[t+1]),e=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],e=Math.ceil(Number(e.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*e,this.xHighestCompleteStep[t]=e):this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t])},t);function t(e,t,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=t;var i=[];for(Object.keys(e).forEach(function(t){i.push([pt(e[t]),t])}),i.sort(function(t,e){return t[0][0]-e[0][0]}),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}var c={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},p={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},mt={tooltips:".__tooltips",aria:".__aria"};function f(t,e){if(!i(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function d(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function h(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function m(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function g(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new u(e,t.snap||!1,t.singleStep)}function v(t,e){if(e=pt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function b(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function S(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function x(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function y(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function w(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function E(t,e){if(!i(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function P(t,e){if(!i(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function C(t,e){var r;if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],e=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-e))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function N(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function V(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),s=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained"),l=0<=e.indexOf("drag-all"),e=0<=e.indexOf("smooth-steps");if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");E(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:l,smoothSteps:e,fixed:i,snap:o,hover:s,unconstrained:a}}function A(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=pt(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function k(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function M(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function U(t,e){if(!n(r=e)||"function"!=typeof r.from)throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var r;t.format=e}function D(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function O(t,e){t.documentElement=e}function L(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function T(e,r){if("object"!=typeof r)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(r).forEach(function(t){e.cssClasses[t]=e.cssPrefix+r[t]})):e.cssClasses=r}function gt(e){var r={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:c,format:c},n={step:{r:!1,t:f},keyboardPageMultiplier:{r:!1,t:d},keyboardMultiplier:{r:!1,t:h},keyboardDefaultStep:{r:!1,t:m},start:{r:!0,t:v},connect:{r:!0,t:y},direction:{r:!0,t:N},snap:{r:!1,t:b},animate:{r:!1,t:S},animationDuration:{r:!1,t:x},range:{r:!0,t:g},orientation:{r:!1,t:w},margin:{r:!1,t:E},limit:{r:!1,t:P},padding:{r:!1,t:C},behaviour:{r:!0,t:V},ariaFormat:{r:!1,t:M},format:{r:!1,t:U},tooltips:{r:!1,t:A},keyboardSupport:{r:!0,t:D},documentElement:{r:!1,t:O},cssPrefix:{r:!0,t:L},cssClasses:{r:!0,t:T},handleAttributes:{r:!1,t:k}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:p,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(at(e[t])||void 0!==i[t])n[t].t(r,(at(e[t])?e:i)[t]);else if(n[t].r)throw new Error("noUiSlider: '"+t+"' is required.")}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,t=void 0!==t.style.transform;r.transformRule=t?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function j(t,f,o){var i,l,a,n,s,u,c=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},p=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),d=t,S=f.spectrum,h=[],m=[],g=[],v=0,b={},x=t.ownerDocument,y=f.documentElement||x.documentElement,w=x.body,E="rtl"===x.dir||1===f.ort?0:100;function P(t,e){var r=x.createElement("div");return e&&ft(r,e),t.appendChild(r),r}function C(t,e){var r,t=P(t,f.cssClasses.origin),n=P(t,f.cssClasses.handle);return P(n,f.cssClasses.touchArea),n.setAttribute("data-handle",String(e)),f.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(V()||A(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];f.dir&&!f.ort?r.reverse():f.ort&&!f.dir&&(n.reverse(),i.reverse());var s=t.key.replace("Arrow",""),a=s===i[0],l=s===i[1],i=s===n[0]||s===r[0]||a,n=s===n[1]||s===r[1]||l,r=s===o[0],o=s===o[1];if(!(i||n||r||o))return!0;if(t.preventDefault(),n||i){var u=i?0:1,u=nt(e)[u];if(null===u)return!1;!1===u&&(u=S.getDefaultStep(m[e],i,f.keyboardDefaultStep)),u*=l||a?f.keyboardPageMultiplier:f.keyboardMultiplier,u=Math.max(u,1e-7),u*=i?-1:1,u=h[e]+u}else u=o?f.spectrum.xVal[f.spectrum.xVal.length-1]:f.spectrum.xVal[0];return Q(e,S.toStepping(u),!0,!0),I("slide",e),I("update",e),I("change",e),I("set",e),!1}(t,e)})),void 0!==f.handleAttributes&&(r=f.handleAttributes[e],Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",f.ort?"vertical":"horizontal"),0===e?ft(n,f.cssClasses.handleLower):e===f.handles-1&&ft(n,f.cssClasses.handleUpper),t.handle=n,t}function N(t,e){return!!e&&P(t,f.cssClasses.connect)}function e(t,e){return!(!f.tooltips||!f.tooltips[e])&&P(t.firstChild,f.cssClasses.tooltip)}function V(){return d.hasAttribute("disabled")}function A(t){return l[t].hasAttribute("disabled")}function k(){s&&(Y("update"+mt.tooltips),s.forEach(function(t){t&&st(t)}),s=null)}function M(){k(),s=l.map(e),X("update"+mt.tooltips,function(t,e,r){s&&f.tooltips&&!1!==s[e]&&(t=t[e],!0!==f.tooltips[e]&&(t=f.tooltips[e].to(r[e])),s[e].innerHTML=t)})}function U(t,e){return t.map(function(t){return S.fromStepping(e?S.getStep(t):t)})}function D(d){var h=function(t){if(t.mode===ot.PipsMode.Range||t.mode===ot.PipsMode.Steps)return S.xVal;if(t.mode!==ot.PipsMode.Count)return t.mode===ot.PipsMode.Positions?U(t.values,t.stepped):t.mode===ot.PipsMode.Values?t.stepped?t.values.map(function(t){return S.fromStepping(S.getStep(S.toStepping(t)))}):t.values:[];if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var e=t.values-1,r=100/e,n=[];e--;)n[e]=e*r;return n.push(100),U(n,t.stepped)}(d),m={},t=S.xVal[0],e=S.xVal[S.xVal.length-1],g=!1,v=!1,b=0;return(h=h.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==t&&(h.unshift(t),g=!0),h[h.length-1]!==e&&(h.push(e),v=!0),h.forEach(function(t,e){var r,n,i,o,s,a,l,u,t=t,c=h[e+1],p=d.mode===ot.PipsMode.Steps,f=(f=p?S.xNumSteps[e]:f)||c-t;for(void 0===c&&(c=t),f=Math.max(f,1e-7),r=t;r<=c;r=Number((r+f).toFixed(7))){for(a=(o=(i=S.toStepping(r))-b)/(d.density||1),u=o/(l=Math.round(a)),n=1;n<=l;n+=1)m[(s=b+n*u).toFixed(5)]=[S.fromStepping(s),0];a=-1<h.indexOf(r)?ot.PipsType.LargeValue:p?ot.PipsType.SmallValue:ot.PipsType.NoValue,!e&&g&&r!==c&&(a=0),r===c&&v||(m[i.toFixed(5)]=[r,a]),b=i}}),m}function O(i,o,s){var t,a=x.createElement("div"),n=((t={})[ot.PipsType.None]="",t[ot.PipsType.NoValue]=f.cssClasses.valueNormal,t[ot.PipsType.LargeValue]=f.cssClasses.valueLarge,t[ot.PipsType.SmallValue]=f.cssClasses.valueSub,t),l=((t={})[ot.PipsType.None]="",t[ot.PipsType.NoValue]=f.cssClasses.markerNormal,t[ot.PipsType.LargeValue]=f.cssClasses.markerLarge,t[ot.PipsType.SmallValue]=f.cssClasses.markerSub,t),u=[f.cssClasses.valueHorizontal,f.cssClasses.valueVertical],c=[f.cssClasses.markerHorizontal,f.cssClasses.markerVertical];function p(t,e){var r=e===f.cssClasses.value;return e+" "+(r?u:c)[f.ort]+" "+(r?n:l)[t]}return ft(a,f.cssClasses.pips),ft(a,0===f.ort?f.cssClasses.pipsHorizontal:f.cssClasses.pipsVertical),Object.keys(i).forEach(function(t){var e,r,n;r=i[e=t][0],n=i[t][1],(n=o?o(r,n):n)!==ot.PipsType.None&&((t=P(a,!1)).className=p(n,f.cssClasses.marker),t.style[f.style]=e+"%",n>ot.PipsType.NoValue&&((t=P(a,!1)).className=p(n,f.cssClasses.value),t.setAttribute("data-value",String(r)),t.style[f.style]=e+"%",t.innerHTML=String(s.to(r))))}),a}function L(){n&&(st(n),n=null)}function T(t){L();var e=D(t),r=t.filter,t=t.format||{to:function(t){return String(Math.round(t))}};return n=d.appendChild(O(e,r,t))}function j(){var t=i.getBoundingClientRect(),e="offset"+["Width","Height"][f.ort];return 0===f.ort?t.width||i[e]:t.height||i[e]}function z(n,i,o,s){function e(t){var e,r=function(e,t,r){var n=0===e.type.indexOf("touch"),i=0===e.type.indexOf("mouse"),o=0===e.type.indexOf("pointer"),s=0,a=0;0===e.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(n){var l=function(t){t=t.target;return t===r||r.contains(t)||e.composed&&e.composedPath().shift()===r};if("touchstart"===e.type){n=Array.prototype.filter.call(e.touches,l);if(1<n.length)return!1;s=n[0].pageX,a=n[0].pageY}else{l=Array.prototype.find.call(e.changedTouches,l);if(!l)return!1;s=l.pageX,a=l.pageY}}t=t||ht(x),(i||o)&&(s=e.clientX+t.x,a=e.clientY+t.y);return e.pageOffset=t,e.points=[s,a],e.cursor=i||o,e}(t,s.pageOffset,s.target||i);return!!r&&(!(V()&&!s.doNotReject)&&(e=d,t=f.cssClasses.tap,!((e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className))&&!s.doNotReject)&&(!(n===c.start&&void 0!==r.buttons&&1<r.buttons)&&((!s.hover||!r.buttons)&&(p||r.preventDefault(),r.calcPoint=r.points[f.ort],void o(r,s))))))}var r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!p&&{passive:!0}),r.push([t,e])}),r}function H(t){var e,r,n=ct(n=100*(t-(n=i,e=f.ort,r=n.getBoundingClientRect(),n=(t=n.ownerDocument).documentElement,t=ht(t),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(t.x=0),e?r.top+t.y-n.clientTop:r.left+t.x-n.clientLeft))/j());return f.dir?100-n:n}function F(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function R(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);t=(f.dir?-1:1)*(t.calcPoint-e.startCalcPoint);G(0<t,100*t/e.baseSize,e.locations,e.handleNumbers,e.connect)}function _(t,e){e.handle&&(dt(e.handle,f.cssClasses.active),--v),e.listeners.forEach(function(t){y.removeEventListener(t[0],t[1])}),0===v&&(dt(d,f.cssClasses.drag),K(),t.cursor&&(w.style.cursor="",w.removeEventListener("selectstart",lt))),f.events.smoothSteps&&(e.handleNumbers.forEach(function(t){Q(t,m[t],!0,!0,!1,!1)}),e.handleNumbers.forEach(function(t){I("update",t)})),e.handleNumbers.forEach(function(t){I("change",t),I("set",t),I("end",t)})}function B(t,e){var r,n,i,o;e.handleNumbers.some(A)||(1===e.handleNumbers.length&&(o=l[e.handleNumbers[0]].children[0],v+=1,ft(o,f.cssClasses.active)),t.stopPropagation(),n=z(c.move,y,R,{target:t.target,handle:o,connect:e.connect,listeners:r=[],startCalcPoint:t.calcPoint,baseSize:j(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:m.slice()}),i=z(c.end,y,_,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),o=z("mouseout",y,F,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),r.push.apply(r,n.concat(i,o)),t.cursor&&(w.style.cursor=getComputedStyle(t.target).cursor,1<l.length&&ft(d,f.cssClasses.drag),w.addEventListener("selectstart",lt,!1)),e.handleNumbers.forEach(function(t){I("start",t)}))}function r(t){t.stopPropagation();var i,o,s,e=H(t.calcPoint),r=(i=e,s=!(o=100),l.forEach(function(t,e){var r,n;A(e)||(r=m[e],((n=Math.abs(r-i))<o||n<=o&&r<i||100===n&&100===o)&&(s=e,o=n))}),s);!1!==r&&(f.events.snap||ut(d,f.cssClasses.tap,f.animationDuration),Q(r,e,!0,!0),K(),I("slide",r,!0),I("update",r,!0),f.events.snap?B(t,{handleNumbers:[r]}):(I("change",r,!0),I("set",r,!0)))}function q(t){var t=H(t.calcPoint),t=S.getStep(t),e=S.fromStepping(t);Object.keys(b).forEach(function(t){"hover"===t.split(".")[0]&&b[t].forEach(function(t){t.call(it,e)})})}function X(t,e){b[t]=b[t]||[],b[t].push(e),"update"===t.split(".")[0]&&l.forEach(function(t,e){I("update",e)})}function Y(t){var n=t&&t.split(".")[0],i=n?t.substring(n.length):t;Object.keys(b).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||((e=r)!==mt.aria&&e!==mt.tooltips||i===r)&&delete b[t]})}function I(r,n,i){Object.keys(b).forEach(function(t){var e=t.split(".")[0];r===e&&b[t].forEach(function(t){t.call(it,h.map(f.format.to),n,h.slice(),i||!1,m.slice(),it)})})}function W(t,e,r,n,i,o,s){var a;return 1<l.length&&!f.events.unconstrained&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],f.margin,!1),r=Math.max(r,a)),i&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],f.margin,!0),r=Math.min(r,a))),1<l.length&&f.limit&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],f.limit,!1),r=Math.min(r,a)),i&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],f.limit,!0),r=Math.max(r,a))),f.padding&&(0===e&&(a=S.getAbsoluteDistance(0,f.padding[0],!1),r=Math.max(r,a)),e===l.length-1&&(a=S.getAbsoluteDistance(100,f.padding[1],!0),r=Math.min(r,a))),!((r=ct(r=!s?S.getStep(r):r))===t[e]&&!o)&&r}function $(t,e){var r=f.ort;return(r?e:t)+", "+(r?t:e)}function G(t,r,n,e,i){var o=n.slice(),s=e[0],a=f.events.smoothSteps,l=[!t,t],u=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){e=W(o,t,o[t]+r,l[e],u[e],!1,a);!1===e?r=0:(r=e-o[t],o[t]=e)}):l=u=[!0];var c=!1;e.forEach(function(t,e){c=Q(t,n[t]+r,l[e],u[e],!1,a)||c}),c&&(e.forEach(function(t){I("update",t),I("slide",t)}),null!=i&&I("drag",s))}function J(t,e){return f.dir?100-t-e:t}function K(){g.forEach(function(t){var e=50<m[t]?-1:1,e=3+(l.length+e*t);l[t].style.zIndex=String(e)})}function Q(t,e,r,n,i,o){return!1!==(e=i?e:W(m,t,e,r,n,!1,o))&&(e=e,m[t=t]=e,h[t]=S.fromStepping(e),e="translate("+$(J(e,0)-E+"%","0")+")",l[t].style[f.transformRule]=e,Z(t),Z(t+1),!0)}function Z(t){var e,r;a[t]&&(r=100,e="translate("+$(J(e=(e=0)!==t?m[t-1]:e,r=(r=t!==a.length-1?m[t]:r)-e)+"%","0")+")",r="scale("+$(r/100,"1")+")",a[t].style[f.transformRule]=e+" "+r)}function tt(t,e){return null===t||!1===t||void 0===t?m[e]:("number"==typeof t&&(t=String(t)),!1===(t=!1!==(t=f.format.from(t))?S.toStepping(t):t)||isNaN(t)?m[e]:t)}function et(t,e,r){var n=pt(t),t=void 0===m[0];e=void 0===e||e,f.animate&&!t&&ut(d,f.cssClasses.tap,f.animationDuration),g.forEach(function(t){Q(t,tt(n[t],t),!0,!1,r)});var i,o=1===g.length?0:1;for(t&&S.hasNoSize()&&(r=!0,m[0]=0,1<g.length&&(i=100/(g.length-1),g.forEach(function(t){m[t]=t*i})));o<g.length;++o)g.forEach(function(t){Q(t,m[t],!0,!0,r)});K(),g.forEach(function(t){I("update",t),null!==n[t]&&e&&I("set",t)})}function rt(t){if(t=void 0===t?!1:t)return 1===h.length?h[0]:h.slice(0);t=h.map(f.format.to);return 1===t.length?t[0]:t}function nt(t){var e=m[t],r=S.getNearbySteps(e),n=h[t],i=r.thisStep.step,t=null;if(f.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),t=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(t=null);e=S.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(e))),[t=null!==t&&!1!==t?Number(t.toFixed(e)):t,i]}ft(t=d,f.cssClasses.target),0===f.dir?ft(t,f.cssClasses.ltr):ft(t,f.cssClasses.rtl),0===f.ort?ft(t,f.cssClasses.horizontal):ft(t,f.cssClasses.vertical),ft(t,"rtl"===getComputedStyle(t).direction?f.cssClasses.textDirectionRtl:f.cssClasses.textDirectionLtr),i=P(t,f.cssClasses.base),function(t,e){var r=P(e,f.cssClasses.connects);l=[],(a=[]).push(N(r,t[0]));for(var n=0;n<f.handles;n++)l.push(C(e,n)),g[n]=n,a.push(N(r,t[n+1]))}(f.connect,i),(u=f.events).fixed||l.forEach(function(t,e){z(c.start,t.children[0],B,{handleNumbers:[e]})}),u.tap&&z(c.start,i,r,{}),u.hover&&z(c.move,i,q,{hover:!0}),u.drag&&a.forEach(function(e,t){var r,n,i,o,s;!1!==e&&0!==t&&t!==a.length-1&&(r=l[t-1],n=l[t],i=[e],o=[r,n],s=[t-1,t],ft(e,f.cssClasses.draggable),u.fixed&&(i.push(r.children[0]),i.push(n.children[0])),u.dragAll&&(o=l,s=g),i.forEach(function(t){z(c.start,t,B,{handles:o,handleNumbers:s,connect:e})}))}),et(f.start),f.pips&&T(f.pips),f.tooltips&&M(),Y("update"+mt.aria),X("update"+mt.aria,function(t,e,o,r,s){g.forEach(function(t){var e=l[t],r=W(m,t,0,!0,!0,!0),n=W(m,t,100,!0,!0,!0),i=s[t],t=String(f.ariaFormat.to(o[t])),r=S.fromStepping(r).toFixed(1),n=S.fromStepping(n).toFixed(1),i=S.fromStepping(i).toFixed(1);e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",t)})});var it={destroy:function(){for(Y(mt.aria),Y(mt.tooltips),Object.keys(f.cssClasses).forEach(function(t){dt(d,f.cssClasses[t])});d.firstChild;)d.removeChild(d.firstChild);delete d.noUiSlider},steps:function(){return g.map(nt)},on:X,off:Y,get:rt,set:et,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<g.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Q(t,tt(e,t),!0,!0,n),I("update",t),r&&I("set",t)},reset:function(t){et(f.start,t)},disable:function(t){null!=t?(l[t].setAttribute("disabled",""),l[t].handle.removeAttribute("tabindex")):(d.setAttribute("disabled",""),l.forEach(function(t){t.handle.removeAttribute("tabindex")}))},enable:function(t){null!=t?(l[t].removeAttribute("disabled"),l[t].handle.setAttribute("tabindex","0")):(d.removeAttribute("disabled"),l.forEach(function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")}))},__moveHandles:function(t,e,r){G(t,e,m,r)},options:o,updateOptions:function(e,t){var r=rt(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=gt(o);n.forEach(function(t){void 0!==e[t]&&(f[t]=i[t])}),S=i.spectrum,f.margin=i.margin,f.limit=i.limit,f.padding=i.padding,f.pips?T(f.pips):L(),(f.tooltips?M:k)(),m=[],et(at(e.start)?e.start:r,t)},target:d,removePips:L,removeTooltips:k,getPositions:function(){return m.slice()},getTooltips:function(){return s},getOrigins:function(){return l},pips:T};return it}function z(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");e=j(t,gt(e),e);return t.noUiSlider=e}var H={__spectrum:u,cssClasses:p,create:z};ot.create=z,ot.cssClasses=p,ot.default=H,Object.defineProperty(ot,"__esModule",{value:!0})});

/**
 * DATE PICKER LIBRARY SCRIPT
 */
!function(){"use strict";function e(e){return e[e.length-1]}function t(e,...t){return t.forEach((t=>{e.includes(t)||e.push(t)})),e}function i(e,t){return e?e.split(t):[]}function s(e,t,i){return(void 0===t||e>=t)&&(void 0===i||e<=i)}function n(e,t,i){return e<t?t:e>i?i:e}function a(e,t,i={},s=0,n=""){n+=`<${Object.keys(i).reduce(((e,t)=>{let n=i[t];return"function"==typeof n&&(n=n(s)),`${e} ${t}="${n}"`}),e)}></${e}>`;const r=s+1;return r<t?a(e,t,i,r,n):n}function r(e){return e.replace(/>\s+/g,">").replace(/\s+</,"<")}function o(e){return new Date(e).setHours(0,0,0,0)}function d(){return(new Date).setHours(0,0,0,0)}function c(...e){switch(e.length){case 0:return d();case 1:return o(e[0])}const t=new Date(0);return t.setFullYear(...e),t.setHours(0,0,0,0)}function l(e,t){const i=new Date(e);return i.setDate(i.getDate()+t)}function h(e,t){const i=new Date(e),s=i.getMonth()+t;let n=s%12;n<0&&(n+=12);const a=i.setMonth(s);return i.getMonth()!==n?i.setDate(0):a}function u(e,t){const i=new Date(e),s=i.getMonth(),n=i.setFullYear(i.getFullYear()+t);return 1===s&&2===i.getMonth()?i.setDate(0):n}function f(e,t){return(e-t+7)%7}function p(e,t,i=0){const s=new Date(e).getDay();return l(e,f(t,i)-f(s,i))}function m(e,t){return Math.round((e-t)/6048e5)+1}function w(e){const t=p(e,4,1);return m(t,p(new Date(t).setMonth(0,4),4,1))}function g(e,t){const i=p(new Date(e).setMonth(0,1),t,t),s=p(e,t,t),n=m(s,i);if(n<53)return n;return s===p(new Date(e).setDate(32),t,t)?1:n}function y(e){return g(e,0)}function D(e){return g(e,6)}function k(e,t){const i=new Date(e).getFullYear();return Math.floor(i/t)*t}function b(e,t,i){if(1!==t&&2!==t)return e;const s=new Date(e);return 1===t?i?s.setMonth(s.getMonth()+1,0):s.setDate(1):i?s.setFullYear(s.getFullYear()+1,0,0):s.setMonth(0,1),s.setHours(0,0,0,0)}const v=/dd?|DD?|mm?|MM?|yy?(?:yy)?/,x=/[\s!-/:-@[-`{-~年月日]+/;let M={};const O={y:(e,t)=>new Date(e).setFullYear(parseInt(t,10)),m(e,t,i){const s=new Date(e);let n=parseInt(t,10)-1;if(isNaN(n)){if(!t)return NaN;const e=t.toLowerCase(),s=t=>t.toLowerCase().startsWith(e);if(n=i.monthsShort.findIndex(s),n<0&&(n=i.months.findIndex(s)),n<0)return NaN}return s.setMonth(n),s.getMonth()!==N(n)?s.setDate(0):s.getTime()},d:(e,t)=>new Date(e).setDate(parseInt(t,10))},S={d:e=>e.getDate(),dd:e=>C(e.getDate(),2),D:(e,t)=>t.daysShort[e.getDay()],DD:(e,t)=>t.days[e.getDay()],m:e=>e.getMonth()+1,mm:e=>C(e.getMonth()+1,2),M:(e,t)=>t.monthsShort[e.getMonth()],MM:(e,t)=>t.months[e.getMonth()],y:e=>e.getFullYear(),yy:e=>C(e.getFullYear(),2).slice(-2),yyyy:e=>C(e.getFullYear(),4)};function N(e){return e>-1?e%12:N(e+12)}function C(e,t){return e.toString().padStart(t,"0")}function F(t){if("string"!=typeof t)throw new Error("Invalid date format.");if(t in M)return M[t];const i=t.split(v),s=t.match(new RegExp(v,"g"));if(0===i.length||!s)throw new Error("Invalid date format.");const n=s.map((e=>S[e])),a=Object.keys(O).reduce(((e,t)=>(s.find((e=>"D"!==e[0]&&e[0].toLowerCase()===t))&&e.push(t),e)),[]);return M[t]={parser(e,t){const i=e.split(x).reduce(((e,t,i)=>{if(t.length>0&&s[i]){const n=s[i][0];"M"===n?e.m=t:"D"!==n&&(e[n]=t)}return e}),{});return a.reduce(((e,s)=>{const n=O[s](e,i[s],t);return isNaN(n)?e:n}),d())},formatter:(t,s)=>n.reduce(((e,n,a)=>e+`${i[a]}${n(t,s)}`),"")+e(i)}}function V(e,t,i){if(e instanceof Date||"number"==typeof e){const t=o(e);return isNaN(t)?void 0:t}if(e){if("today"===e)return d();if(t&&t.toValue){const s=t.toValue(e,t,i);return isNaN(s)?void 0:o(s)}return F(t).parser(e,i)}}function B(e,t,i){if(isNaN(e)||!e&&0!==e)return"";const s="number"==typeof e?new Date(e):e;return t.toDisplay?t.toDisplay(s,t,i):F(t).formatter(s,i)}const E=document.createRange();function A(e){return E.createContextualFragment(e)}function L(e){return e.parentElement||(e.parentNode instanceof ShadowRoot?e.parentNode.host:void 0)}function Y(e){return e.getRootNode().activeElement===e}function W(e){"none"!==e.style.display&&(e.style.display&&(e.dataset.styleDisplay=e.style.display),e.style.display="none")}function _(e){"none"===e.style.display&&(e.dataset.styleDisplay?(e.style.display=e.dataset.styleDisplay,delete e.dataset.styleDisplay):e.style.display="")}function K(e){e.firstChild&&(e.removeChild(e.firstChild),K(e))}const R=new WeakMap,{addEventListener:j,removeEventListener:T}=EventTarget.prototype;function H(e,t){let i=R.get(e);i||(i=[],R.set(e,i)),t.forEach((e=>{j.call(...e),i.push(e)}))}function $(e){let t=R.get(e);t&&(t.forEach((e=>{T.call(...e)})),R.delete(e))}if(!Event.prototype.composedPath){const e=(t,i=[])=>{let s;return i.push(t),t.parentNode?s=t.parentNode:t.host?s=t.host:t.defaultView&&(s=t.defaultView),s?e(s,i):i};Event.prototype.composedPath=function(){return e(this.target)}}function I(e,t,i){const[s,...n]=e;return t(s)?s:s!==i&&"HTML"!==s.tagName&&0!==n.length?I(n,t,i):void 0}function P(e,t){const i="function"==typeof t?t:e=>e instanceof Element&&e.matches(t);return I(e.composedPath(),i,e.currentTarget)}const J={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM y"}},U={autohide:!1,beforeShowDay:null,beforeShowDecade:null,beforeShowMonth:null,beforeShowYear:null,clearButton:!1,dateDelimiter:",",datesDisabled:[],daysOfWeekDisabled:[],daysOfWeekHighlighted:[],defaultViewDate:void 0,disableTouchKeyboard:!1,enableOnReadonly:!0,format:"mm/dd/yyyy",language:"en",maxDate:null,maxNumberOfDates:1,maxView:3,minDate:null,nextArrow:"»",orientation:"auto",pickLevel:0,prevArrow:"«",showDaysOfWeek:!0,showOnClick:!0,showOnFocus:!0,startView:0,title:"",todayButton:!1,todayButtonMode:0,todayHighlight:!1,updateOnBlur:!0,weekNumbers:0,weekStart:0},{language:q,format:z,weekStart:X}=U;function G(e,i){return e.length<6&&i>=0&&i<7?t(e,i):e}function Q(e,t){switch(4===e?6===t?3:!t+1:e){case 1:return w;case 2:return y;case 3:return D}}function Z(e,t,i){return t.weekStart=e,t.weekEnd=(e+6)%7,4===i&&(t.getWeekNumber=Q(4,e)),e}function ee(e,t,i,s){const n=V(e,t,i);return void 0!==n?n:s}function te(e,t,i=3){const s=parseInt(e,10);return s>=0&&s<=i?s:t}function ie(e,t,i,s=void 0){t in e&&(i in e||(e[i]=s?s(e[t]):e[t]),delete e[t])}function se(e,i){const s=Object.assign({},e),n={},a=i.constructor.locales,r=!!i.rangeSideIndex;let{datesDisabled:o,format:d,language:l,locale:h,maxDate:u,maxView:f,minDate:p,pickLevel:m,startView:w,weekNumbers:g,weekStart:y}=i.config||{};if(ie(s,"calendarWeeks","weekNumbers",(e=>e?1:0)),ie(s,"clearBtn","clearButton"),ie(s,"todayBtn","todayButton"),ie(s,"todayBtnMode","todayButtonMode"),s.language){let e;if(s.language!==l&&(a[s.language]?e=s.language:(e=s.language.split("-")[0],a[e]||(e=!1))),delete s.language,e){l=n.language=e;const t=h||a[q];h=Object.assign({format:z,weekStart:X},a[q]),l!==q&&Object.assign(h,a[l]),n.locale=h,d===t.format&&(d=n.format=h.format),y===t.weekStart&&(y=Z(h.weekStart,n,g))}}if(s.format){const e="function"==typeof s.format.toDisplay,t="function"==typeof s.format.toValue,i=v.test(s.format);(e&&t||i)&&(d=n.format=s.format),delete s.format}let D=m;"pickLevel"in s&&(D=te(s.pickLevel,m,2),delete s.pickLevel),D!==m&&(D>m&&("minDate"in s||(s.minDate=p),"maxDate"in s||(s.maxDate=u)),o&&!s.datesDisabled&&(s.datesDisabled=[]),m=n.pickLevel=D);let k=p,x=u;if("minDate"in s){const e=c(0,0,1);k=null===s.minDate?e:ee(s.minDate,d,h,k),k!==e&&(k=b(k,m,!1)),delete s.minDate}if("maxDate"in s&&(x=null===s.maxDate?void 0:ee(s.maxDate,d,h,x),void 0!==x&&(x=b(x,m,!0)),delete s.maxDate),x<k?(p=n.minDate=x,u=n.maxDate=k):(p!==k&&(p=n.minDate=k),u!==x&&(u=n.maxDate=x)),s.datesDisabled){const e=s.datesDisabled;if("function"==typeof e)n.datesDisabled=null,n.checkDisabled=(t,i)=>e(new Date(t),i,r);else{const i=n.datesDisabled=e.reduce(((e,i)=>{const s=V(i,d,h);return void 0!==s?t(e,b(s,m,r)):e}),[]);n.checkDisabled=e=>i.includes(e)}delete s.datesDisabled}if("defaultViewDate"in s){const e=V(s.defaultViewDate,d,h);void 0!==e&&(n.defaultViewDate=e),delete s.defaultViewDate}if("weekStart"in s){const e=Number(s.weekStart)%7;isNaN(e)||(y=Z(e,n,g)),delete s.weekStart}if(s.daysOfWeekDisabled&&(n.daysOfWeekDisabled=s.daysOfWeekDisabled.reduce(G,[]),delete s.daysOfWeekDisabled),s.daysOfWeekHighlighted&&(n.daysOfWeekHighlighted=s.daysOfWeekHighlighted.reduce(G,[]),delete s.daysOfWeekHighlighted),"weekNumbers"in s){let e=s.weekNumbers;if(e){const t="function"==typeof e?(t,i)=>e(new Date(t),i):Q(e=parseInt(e,10),y);t&&(g=n.weekNumbers=e,n.getWeekNumber=t)}else g=n.weekNumbers=0,n.getWeekNumber=null;delete s.weekNumbers}if("maxNumberOfDates"in s){const e=parseInt(s.maxNumberOfDates,10);e>=0&&(n.maxNumberOfDates=e,n.multidate=1!==e),delete s.maxNumberOfDates}s.dateDelimiter&&(n.dateDelimiter=String(s.dateDelimiter),delete s.dateDelimiter);let M=f;"maxView"in s&&(M=te(s.maxView,f),delete s.maxView),M=m>M?m:M,M!==f&&(f=n.maxView=M);let O=w;if("startView"in s&&(O=te(s.startView,O),delete s.startView),O<m?O=m:O>f&&(O=f),O!==w&&(n.startView=O),s.prevArrow){const e=A(s.prevArrow);e.childNodes.length>0&&(n.prevArrow=e.childNodes),delete s.prevArrow}if(s.nextArrow){const e=A(s.nextArrow);e.childNodes.length>0&&(n.nextArrow=e.childNodes),delete s.nextArrow}if("disableTouchKeyboard"in s&&(n.disableTouchKeyboard="ontouchstart"in document&&!!s.disableTouchKeyboard,delete s.disableTouchKeyboard),s.orientation){const e=s.orientation.toLowerCase().split(/\s+/g);n.orientation={x:e.find((e=>"left"===e||"right"===e))||"auto",y:e.find((e=>"top"===e||"bottom"===e))||"auto"},delete s.orientation}if("todayButtonMode"in s){switch(s.todayButtonMode){case 0:case 1:n.todayButtonMode=s.todayButtonMode}delete s.todayButtonMode}return Object.entries(s).forEach((([e,t])=>{void 0!==t&&e in U&&(n[e]=t)})),n}const ne={show:{key:"ArrowDown"},hide:null,toggle:{key:"Escape"},prevButton:{key:"ArrowLeft",ctrlOrMetaKey:!0},nextButton:{key:"ArrowRight",ctrlOrMetaKey:!0},viewSwitch:{key:"ArrowUp",ctrlOrMetaKey:!0},clearButton:{key:"Backspace",ctrlOrMetaKey:!0},todayButton:{key:".",ctrlOrMetaKey:!0},exitEditMode:{key:"ArrowDown",ctrlOrMetaKey:!0}};const ae=e=>e.map((e=>`<button type="button" class="%buttonClass% ${e}" tabindex="-1"></button>`)).join(""),re=r(`<div class="datepicker">\n  <div class="datepicker-picker">\n    <div class="datepicker-header">\n      <div class="datepicker-title"></div>\n      <div class="datepicker-controls">\n        ${ae(["prev-button prev-btn","view-switch","next-button next-btn"])}\n      </div>\n    </div>\n    <div class="datepicker-main"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls">\n        ${ae(["today-button today-btn","clear-button clear-btn"])}\n      </div>\n    </div>\n  </div>\n</div>`),oe=r(`<div class="days">\n  <div class="days-of-week">${a("span",7,{class:"dow"})}</div>\n  <div class="datepicker-grid">${a("span",42)}</div>\n</div>`),de=r(`<div class="week-numbers calendar-weeks">\n  <div class="days-of-week"><span class="dow"></span></div>\n  <div class="weeks">${a("span",6,{class:"week"})}</div>\n</div>`);class ce{constructor(e,t){Object.assign(this,t,{picker:e,element:A('<div class="datepicker-view"></div>').firstChild,selected:[],isRangeEnd:!!e.datepicker.rangeSideIndex}),this.init(this.picker.datepicker.config)}init(e){"pickLevel"in e&&(this.isMinView=this.id===e.pickLevel),this.setOptions(e),this.updateFocus(),this.updateSelection()}prepareForRender(e,t,i){this.disabled=[];const s=this.picker;s.setViewSwitchLabel(e),s.setPrevButtonDisabled(t),s.setNextButtonDisabled(i)}setDisabled(e,i){i.add("disabled"),t(this.disabled,e)}performBeforeHook(e,t){let i=this.beforeShow(new Date(t));switch(typeof i){case"boolean":i={enabled:i};break;case"string":i={classes:i}}if(i){const s=e.classList;if(!1===i.enabled&&this.setDisabled(t,s),i.classes){const e=i.classes.split(/\s+/);s.add(...e),e.includes("disabled")&&this.setDisabled(t,s)}i.content&&function(e,t){K(e),t instanceof DocumentFragment?e.appendChild(t):"string"==typeof t?e.appendChild(A(t)):"function"==typeof t.forEach&&t.forEach((t=>{e.appendChild(t)}))}(e,i.content)}}renderCell(e,t,i,s,{selected:n,range:a},r,o=[]){e.textContent=t,this.isMinView&&(e.dataset.date=s);const d=e.classList;if(e.className=`datepicker-cell ${this.cellClass}`,i<this.first?d.add("prev"):i>this.last&&d.add("next"),d.add(...o),(r||this.checkDisabled(s,this.id))&&this.setDisabled(s,d),a){const[e,t]=a;i>e&&i<t&&d.add("range"),i===e&&d.add("range-start"),i===t&&d.add("range-end")}n.includes(i)&&d.add("selected"),i===this.focused&&d.add("focused"),this.beforeShow&&this.performBeforeHook(e,s)}refreshCell(e,t,i,[s,n]){const a=e.classList;a.remove("range","range-start","range-end","selected","focused"),t>s&&t<n&&a.add("range"),t===s&&a.add("range-start"),t===n&&a.add("range-end"),i.includes(t)&&a.add("selected"),t===this.focused&&a.add("focused")}changeFocusedCell(e){this.grid.querySelectorAll(".focused").forEach((e=>{e.classList.remove("focused")})),this.grid.children[e].classList.add("focused")}}class le extends ce{constructor(e){super(e,{id:0,name:"days",cellClass:"day"})}init(e,t=!0){if(t){const e=A(oe).firstChild;this.dow=e.firstChild,this.grid=e.lastChild,this.element.appendChild(e)}super.init(e)}setOptions(e){let t;if("minDate"in e&&(this.minDate=e.minDate),"maxDate"in e&&(this.maxDate=e.maxDate),e.checkDisabled&&(this.checkDisabled=e.checkDisabled),e.daysOfWeekDisabled&&(this.daysOfWeekDisabled=e.daysOfWeekDisabled,t=!0),e.daysOfWeekHighlighted&&(this.daysOfWeekHighlighted=e.daysOfWeekHighlighted),"todayHighlight"in e&&(this.todayHighlight=e.todayHighlight),"weekStart"in e&&(this.weekStart=e.weekStart,this.weekEnd=e.weekEnd,t=!0),e.locale){const i=this.locale=e.locale;this.dayNames=i.daysMin,this.switchLabelFormat=i.titleFormat,t=!0}if("beforeShowDay"in e&&(this.beforeShow="function"==typeof e.beforeShowDay?e.beforeShowDay:void 0),"weekNumbers"in e)if(e.weekNumbers&&!this.weekNumbers){const e=A(de).firstChild;this.weekNumbers={element:e,dow:e.firstChild,weeks:e.lastChild},this.element.insertBefore(e,this.element.firstChild)}else this.weekNumbers&&!e.weekNumbers&&(this.element.removeChild(this.weekNumbers.element),this.weekNumbers=null);"getWeekNumber"in e&&(this.getWeekNumber=e.getWeekNumber),"showDaysOfWeek"in e&&(e.showDaysOfWeek?(_(this.dow),this.weekNumbers&&_(this.weekNumbers.dow)):(W(this.dow),this.weekNumbers&&W(this.weekNumbers.dow))),t&&Array.from(this.dow.children).forEach(((e,t)=>{const i=(this.weekStart+t)%7;e.textContent=this.dayNames[i],e.className=this.daysOfWeekDisabled.includes(i)?"dow disabled":"dow"}))}updateFocus(){const e=new Date(this.picker.viewDate),t=e.getFullYear(),i=e.getMonth(),s=c(t,i,1),n=p(s,this.weekStart,this.weekStart);this.first=s,this.last=c(t,i+1,0),this.start=n,this.focused=this.picker.viewDate}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e,t&&(this.range=t.dates)}render(){if(this.today=this.todayHighlight?d():void 0,this.prepareForRender(B(this.focused,this.switchLabelFormat,this.locale),this.first<=this.minDate,this.last>=this.maxDate),this.weekNumbers){const e=this.weekStart,t=p(this.first,e,e);Array.from(this.weekNumbers.weeks.children).forEach(((i,s)=>{const n=l(t,7*s);i.textContent=this.getWeekNumber(n,e),s>3&&i.classList[n>this.last?"add":"remove"]("next")}))}Array.from(this.grid.children).forEach(((e,t)=>{const i=l(this.start,t),s=new Date(i),n=s.getDay(),a=[];this.today===i&&a.push("today"),this.daysOfWeekHighlighted.includes(n)&&a.push("highlighted"),this.renderCell(e,s.getDate(),i,i,this,i<this.minDate||i>this.maxDate||this.daysOfWeekDisabled.includes(n),a)}))}refresh(){const e=this.range||[];Array.from(this.grid.children).forEach((t=>{this.refreshCell(t,Number(t.dataset.date),this.selected,e)}))}refreshFocus(){this.changeFocusedCell(Math.round((this.focused-this.start)/864e5))}}function he(e,t){if(!e||!e[0]||!e[1])return;const[[i,s],[n,a]]=e;return i>t||n<t?void 0:[i===t?s:-1,n===t?a:12]}class ue extends ce{constructor(e){super(e,{id:1,name:"months",cellClass:"month"})}init(e,t=!0){t&&(this.grid=this.element,this.element.classList.add("months","datepicker-grid"),this.grid.appendChild(A(a("span",12,{"data-month":e=>e}))),this.first=0,this.last=11),super.init(e)}setOptions(e){if(e.locale&&(this.monthNames=e.locale.monthsShort),"minDate"in e)if(void 0===e.minDate)this.minYear=this.minMonth=this.minDate=void 0;else{const t=new Date(e.minDate);this.minYear=t.getFullYear(),this.minMonth=t.getMonth(),this.minDate=t.setDate(1)}if("maxDate"in e)if(void 0===e.maxDate)this.maxYear=this.maxMonth=this.maxDate=void 0;else{const t=new Date(e.maxDate);this.maxYear=t.getFullYear(),this.maxMonth=t.getMonth(),this.maxDate=c(this.maxYear,this.maxMonth+1,0)}e.checkDisabled&&(this.checkDisabled=this.isMinView||null===e.datesDisabled?e.checkDisabled:()=>!1),"beforeShowMonth"in e&&(this.beforeShow="function"==typeof e.beforeShowMonth?e.beforeShowMonth:void 0)}updateFocus(){const e=new Date(this.picker.viewDate);this.year=e.getFullYear(),this.focused=e.getMonth()}updateSelection(){const{dates:e,rangepicker:i}=this.picker.datepicker;this.selected=e.reduce(((e,i)=>{const s=new Date(i),n=s.getFullYear(),a=s.getMonth();return void 0===e[n]?e[n]=[a]:t(e[n],a),e}),{}),i&&i.dates&&(this.range=i.dates.map((e=>{const t=new Date(e);return isNaN(t)?void 0:[t.getFullYear(),t.getMonth()]})))}render(){this.prepareForRender(this.year,this.year<=this.minYear,this.year>=this.maxYear);const e=this.selected[this.year]||[],t=this.year<this.minYear||this.year>this.maxYear,i=this.year===this.minYear,s=this.year===this.maxYear,n=he(this.range,this.year);Array.from(this.grid.children).forEach(((a,r)=>{const o=b(new Date(this.year,r,1),1,this.isRangeEnd);this.renderCell(a,this.monthNames[r],r,o,{selected:e,range:n},t||i&&r<this.minMonth||s&&r>this.maxMonth)}))}refresh(){const e=this.selected[this.year]||[],t=he(this.range,this.year)||[];Array.from(this.grid.children).forEach(((i,s)=>{this.refreshCell(i,s,e,t)}))}refreshFocus(){this.changeFocusedCell(this.focused)}}class fe extends ce{constructor(e,t){super(e,t)}init(e,t=!0){var i;t&&(this.navStep=10*this.step,this.beforeShowOption=`beforeShow${i=this.cellClass,[...i].reduce(((e,t,i)=>e+(i?t:t.toUpperCase())),"")}`,this.grid=this.element,this.element.classList.add(this.name,"datepicker-grid"),this.grid.appendChild(A(a("span",12)))),super.init(e)}setOptions(e){if("minDate"in e&&(void 0===e.minDate?this.minYear=this.minDate=void 0:(this.minYear=k(e.minDate,this.step),this.minDate=c(this.minYear,0,1))),"maxDate"in e&&(void 0===e.maxDate?this.maxYear=this.maxDate=void 0:(this.maxYear=k(e.maxDate,this.step),this.maxDate=c(this.maxYear,11,31))),e.checkDisabled&&(this.checkDisabled=this.isMinView||null===e.datesDisabled?e.checkDisabled:()=>!1),this.beforeShowOption in e){const t=e[this.beforeShowOption];this.beforeShow="function"==typeof t?t:void 0}}updateFocus(){const e=new Date(this.picker.viewDate),t=k(e,this.navStep),i=t+9*this.step;this.first=t,this.last=i,this.start=t-this.step,this.focused=k(e,this.step)}updateSelection(){const{dates:e,rangepicker:i}=this.picker.datepicker;this.selected=e.reduce(((e,i)=>t(e,k(i,this.step))),[]),i&&i.dates&&(this.range=i.dates.map((e=>{if(void 0!==e)return k(e,this.step)})))}render(){this.prepareForRender(`${this.first}-${this.last}`,this.first<=this.minYear,this.last>=this.maxYear),Array.from(this.grid.children).forEach(((e,t)=>{const i=this.start+t*this.step,s=b(new Date(i,0,1),2,this.isRangeEnd);e.dataset.year=i,this.renderCell(e,i,i,s,this,i<this.minYear||i>this.maxYear)}))}refresh(){const e=this.range||[];Array.from(this.grid.children).forEach((t=>{this.refreshCell(t,Number(t.textContent),this.selected,e)}))}refreshFocus(){this.changeFocusedCell(Math.round((this.focused-this.start)/this.step))}}function pe(e,t){const i={bubbles:!0,cancelable:!0,detail:{date:e.getDate(),viewDate:new Date(e.picker.viewDate),viewId:e.picker.currentView.id,datepicker:e}};e.element.dispatchEvent(new CustomEvent(t,i))}function me(e,t){const{config:i,picker:s}=e,{currentView:a,viewDate:r}=s;let o;switch(a.id){case 0:o=h(r,t);break;case 1:o=u(r,t);break;default:o=u(r,t*a.navStep)}o=n(o,i.minDate,i.maxDate),s.changeFocus(o).render()}function we(e){const t=e.picker.currentView.id;t!==e.config.maxView&&e.picker.changeView(t+1).render()}function ge(e){e.setDate({clear:!0})}function ye(e){const t=d();1===e.config.todayButtonMode?e.setDate(t,{forceRefresh:!0,viewDate:t}):e.setFocusedDate(t,!0)}function De(e){const t=()=>{e.config.updateOnBlur?e.update({revert:!0}):e.refresh("input"),e.hide()},i=e.element;Y(i)?i.addEventListener("blur",t,{once:!0}):t()}function ke(e,t){const i=e.picker,s=new Date(i.viewDate),n=i.currentView.id,a=1===n?h(s,t-s.getMonth()):u(s,t-s.getFullYear());i.changeFocus(a).changeView(n-1).render()}function be(e){we(e)}function ve(e){me(e,-1)}function xe(e){me(e,1)}function Me(e,t){const i=P(t,".datepicker-cell");if(!i||i.classList.contains("disabled"))return;const{id:s,isMinView:n}=e.picker.currentView,a=i.dataset;n?e.setDate(Number(a.date)):ke(e,Number(1===s?a.month:a.year))}function Oe(e){e.preventDefault()}const Se=["left","top","right","bottom"].reduce(((e,t)=>(e[t]=`datepicker-orient-${t}`,e)),{}),Ne=e=>e?`${e}px`:e;function Ce(e,t){if("title"in t&&(t.title?(e.controls.title.textContent=t.title,_(e.controls.title)):(e.controls.title.textContent="",W(e.controls.title))),t.prevArrow){const i=e.controls.prevButton;K(i),t.prevArrow.forEach((e=>{i.appendChild(e.cloneNode(!0))}))}if(t.nextArrow){const i=e.controls.nextButton;K(i),t.nextArrow.forEach((e=>{i.appendChild(e.cloneNode(!0))}))}if(t.locale&&(e.controls.todayButton.textContent=t.locale.today,e.controls.clearButton.textContent=t.locale.clear),"todayButton"in t&&(t.todayButton?_(e.controls.todayButton):W(e.controls.todayButton)),"minDate"in t||"maxDate"in t){const{minDate:t,maxDate:i}=e.datepicker.config;e.controls.todayButton.disabled=!s(d(),t,i)}"clearButton"in t&&(t.clearButton?_(e.controls.clearButton):W(e.controls.clearButton))}function Fe(t){const{dates:i,config:s,rangeSideIndex:a}=t;return n(i.length>0?e(i):b(s.defaultViewDate,s.pickLevel,a),s.minDate,s.maxDate)}function Ve(e,t){"_oldViewDate"in e||t===e.viewDate||(e._oldViewDate=e.viewDate),e.viewDate=t;const{id:i,year:s,first:n,last:a}=e.currentView,r=new Date(t).getFullYear();switch(i){case 0:return t<n||t>a;case 1:return r!==s;default:return r<n||r>a}}function Be(e){return window.getComputedStyle(e).direction}function Ee(e){const t=L(e);if(t!==document.body&&t)return"visible"!==window.getComputedStyle(t).overflow?t:Ee(t)}class Ae{constructor(e){const{config:t,inputField:i}=this.datepicker=e,s=re.replace(/%buttonClass%/g,t.buttonClass),n=this.element=A(s).firstChild,[a,r,o]=n.firstChild.children,d=a.firstElementChild,[c,l,h]=a.lastElementChild.children,[u,f]=o.firstChild.children,p={title:d,prevButton:c,viewSwitch:l,nextButton:h,todayButton:u,clearButton:f};this.main=r,this.controls=p;const m=i?"dropdown":"inline";n.classList.add(`datepicker-${m}`),Ce(this,t),this.viewDate=Fe(e),H(e,[[n,"mousedown",Oe],[r,"click",Me.bind(null,e)],[p.viewSwitch,"click",be.bind(null,e)],[p.prevButton,"click",ve.bind(null,e)],[p.nextButton,"click",xe.bind(null,e)],[p.todayButton,"click",ye.bind(null,e)],[p.clearButton,"click",ge.bind(null,e)]]),this.views=[new le(this),new ue(this),new fe(this,{id:2,name:"years",cellClass:"year",step:1}),new fe(this,{id:3,name:"decades",cellClass:"decade",step:10})],this.currentView=this.views[t.startView],this.currentView.render(),this.main.appendChild(this.currentView.element),t.container?t.container.appendChild(this.element):i.after(this.element)}setOptions(e){Ce(this,e),this.views.forEach((t=>{t.init(e,!1)})),this.currentView.render()}detach(){this.element.remove()}show(){if(this.active)return;const{datepicker:e,element:t}=this,i=e.inputField;if(i){const s=Be(i);s!==Be(L(t))?t.dir=s:t.dir&&t.removeAttribute("dir"),this.place(),t.classList.add("active"),e.config.disableTouchKeyboard&&i.blur()}else t.classList.add("active");this.active=!0,pe(e,"show")}hide(){this.active&&(this.datepicker.exitEditMode(),this.element.classList.remove("active"),this.active=!1,pe(this.datepicker,"hide"))}place(){const{classList:e,style:t}=this.element;t.display="block";const{width:i,height:s}=this.element.getBoundingClientRect(),n=this.element.offsetParent;t.display="";const{config:a,inputField:r}=this.datepicker,{left:o,top:d,right:c,bottom:l,width:h,height:u}=r.getBoundingClientRect();let{x:f,y:p}=a.orientation,m=o,w=d;if(n!==document.body&&n){const e=n.getBoundingClientRect();m-=e.left-n.scrollLeft,w-=e.top-n.scrollTop}else m+=window.scrollX,w+=window.scrollY;const g=Ee(r);let y=0,D=0,{clientWidth:k,clientHeight:b}=document.documentElement;if(g){const e=g.getBoundingClientRect();e.top>0&&(D=e.top),e.left>0&&(y=e.left),e.right<k&&(k=e.right),e.bottom<b&&(b=e.bottom)}let v=0;"auto"===f&&(o<y?(f="left",v=y-o):o+i>k?(f="right",k<c&&(v=k-c)):f="rtl"===Be(r)?c-i<y?"left":"right":"left"),"right"===f&&(m+=h-i),m+=v,"auto"===p&&(p=d-s>D&&l+s>b?"top":"bottom"),"top"===p?w-=s:w+=u,e.remove(...Object.values(Se)),e.add(Se[f],Se[p]),t.left=Ne(m),t.top=Ne(w)}setViewSwitchLabel(e){this.controls.viewSwitch.textContent=e}setPrevButtonDisabled(e){this.controls.prevButton.disabled=e}setNextButtonDisabled(e){this.controls.nextButton.disabled=e}changeView(e){const t=this.currentView;return e!==t.id&&(this._oldView||(this._oldView=t),this.currentView=this.views[e],this._renderMethod="render"),this}changeFocus(e){return this._renderMethod=Ve(this,e)?"render":"refreshFocus",this.views.forEach((e=>{e.updateFocus()})),this}update(e=void 0){const t=void 0===e?Fe(this.datepicker):e;return this._renderMethod=Ve(this,t)?"render":"refresh",this.views.forEach((e=>{e.updateFocus(),e.updateSelection()})),this}render(e=!0){const{currentView:t,datepicker:i,_oldView:s}=this,n=new Date(this._oldViewDate),a=e&&this._renderMethod||"render";if(delete this._oldView,delete this._oldViewDate,delete this._renderMethod,t[a](),s&&(this.main.replaceChild(t.element,s.element),pe(i,"changeView")),!isNaN(n)){const e=new Date(this.viewDate);e.getFullYear()!==n.getFullYear()&&pe(i,"changeYear"),e.getMonth()!==n.getMonth()&&pe(i,"changeMonth")}}}function Le(e,t,i,n,a,r){if(s(e,a,r)){if(n(e)){return Le(t(e,i),t,i,n,a,r)}return e}}function Ye(e,t,i){const s=e.picker,n=s.currentView,a=n.step||1;let r,o=s.viewDate;switch(n.id){case 0:o=l(o,i?7*t:t),r=l;break;case 1:o=h(o,i?4*t:t),r=h;break;default:o=u(o,t*(i?4:1)*a),r=u}o=Le(o,r,t<0?-a:a,(e=>n.disabled.includes(e)),n.minDate,n.maxDate),void 0!==o&&s.changeFocus(o).render()}function We(e,t){const{config:i,picker:s,editMode:n}=e,a=s.active,{key:r,altKey:o,shiftKey:d}=t,c=t.ctrlKey||t.metaKey,l=()=>{t.preventDefault(),t.stopPropagation()};if("Tab"===r)return void De(e);if("Enter"===r){if(a)if(n)e.exitEditMode({update:!0,autohide:i.autohide});else{const t=s.currentView;t.isMinView?e.setDate(s.viewDate):(s.changeView(t.id-1).render(),l())}else e.update();return}const h=i.shortcutKeys,u={key:r,ctrlOrMetaKey:c,altKey:o,shiftKey:d},f=Object.keys(h).find((e=>{const t=h[e];return!Object.keys(t).find((e=>t[e]!==u[e]))}));if(f){let t;if("toggle"===f?t=f:n?"exitEditMode"===f&&(t=f):a?"hide"===f?t=f:"prevButton"===f?t=[me,[e,-1]]:"nextButton"===f?t=[me,[e,1]]:"viewSwitch"===f?t=[we,[e]]:i.clearButton&&"clearButton"===f?t=[ge,[e]]:i.todayButton&&"todayButton"===f&&(t=[ye,[e]]):"show"===f&&(t=f),t)return Array.isArray(t)?t[0].apply(null,t[1]):e[t](),void l()}if(!a||n)return;const p=(i,s)=>{d||c||o?e.enterEditMode():(Ye(e,i,s),t.preventDefault())};"ArrowLeft"===r?p(-1,!1):"ArrowRight"===r?p(1,!1):"ArrowUp"===r?p(-1,!0):"ArrowDown"===r?p(1,!0):("Backspace"===r||"Delete"===r||r&&1===r.length&&!c)&&e.enterEditMode()}function _e(e){e.config.showOnFocus&&!e._showing&&e.show()}function Ke(e,t){const i=t.target;(e.picker.active||e.config.showOnClick)&&(i._active=Y(i),i._clicking=setTimeout((()=>{delete i._active,delete i._clicking}),2e3))}function Re(e,t){const i=t.target;i._clicking&&(clearTimeout(i._clicking),delete i._clicking,i._active&&e.enterEditMode(),delete i._active,e.config.showOnClick&&e.show())}function je(e,t){t.clipboardData.types.includes("text/plain")&&e.enterEditMode()}function Te(e,t){const{element:i,picker:s}=e;if(!s.active&&!Y(i))return;const n=s.element;P(t,(e=>e===i||e===n))||De(e)}function He(e,t){return e.map((e=>B(e,t.format,t.locale))).join(t.dateDelimiter)}function $e(e,t,i=!1){if(0===t.length)return i?[]:void 0;const{config:n,dates:a,rangeSideIndex:r}=e,{pickLevel:o,maxNumberOfDates:d}=n;let c=t.reduce(((e,t)=>{let i=V(t,n.format,n.locale);return void 0===i||(i=b(i,o,r),!s(i,n.minDate,n.maxDate)||e.includes(i)||n.checkDisabled(i,o)||!(o>0)&&n.daysOfWeekDisabled.includes(new Date(i).getDay())||e.push(i)),e}),[]);return 0!==c.length?(n.multidate&&!i&&(c=c.reduce(((e,t)=>(a.includes(t)||e.push(t),e)),a.filter((e=>!c.includes(e))))),d&&c.length>d?c.slice(-1*d):c):void 0}function Ie(e,t=3,i=!0,s=void 0){const{config:n,picker:a,inputField:r}=e;if(2&t){const e=a.active?n.pickLevel:n.startView;a.update(s).changeView(e).render(i)}1&t&&r&&(r.value=He(e.dates,n))}function Pe(e,t,i){const s=e.config;let{clear:n,render:a,autohide:r,revert:o,forceRefresh:d,viewDate:c}=i;void 0===a&&(a=!0),a?void 0===r&&(r=s.autohide):r=d=!1,c=V(c,s.format,s.locale);const l=$e(e,t,n);(l||o)&&(l&&l.toString()!==e.dates.toString()?(e.dates=l,Ie(e,a?3:1,!0,c),pe(e,"changeDate")):Ie(e,d?3:1,!0,c),r&&e.hide())}function Je(e,t){return t?i=>B(i,t,e.config.locale):e=>new Date(e)}class Ue{constructor(e,t={},s=void 0){e.datepicker=this,this.element=e,this.dates=[];const n=this.config=Object.assign({buttonClass:t.buttonClass&&String(t.buttonClass)||"button",container:null,defaultViewDate:d(),maxDate:void 0,minDate:void 0},se(U,this));let a;if("INPUT"===e.tagName?(a=this.inputField=e,a.classList.add("datepicker-input"),t.container&&(n.container=t.container instanceof HTMLElement?t.container:document.querySelector(t.container))):n.container=e,s){const e=s.inputs.indexOf(a),t=s.datepickers;if(e<0||e>1||!Array.isArray(t))throw Error("Invalid rangepicker object.");t[e]=this,this.rangepicker=s,this.rangeSideIndex=e}this._options=t,Object.assign(n,se(t,this)),n.shortcutKeys=function(e){return Object.keys(ne).reduce(((t,i)=>{const s=void 0===e[i]?ne[i]:e[i],n=s&&s.key;if(!n||"string"!=typeof n)return t;const a={key:n,ctrlOrMetaKey:!!(s.ctrlOrMetaKey||s.ctrlKey||s.metaKey)};return n.length>1&&(a.altKey=!!s.altKey,a.shiftKey=!!s.shiftKey),t[i]=a,t}),{})}(t.shortcutKeys||{});const r=i(e.value||e.dataset.date,n.dateDelimiter);delete e.dataset.date;const o=$e(this,r);o&&o.length>0&&(this.dates=o),a&&(a.value=He(this.dates,n));const c=this.picker=new Ae(this),l=[e,"keydown",We.bind(null,this)];a?H(this,[l,[a,"focus",_e.bind(null,this)],[a,"mousedown",Ke.bind(null,this)],[a,"click",Re.bind(null,this)],[a,"paste",je.bind(null,this)],[document,"mousedown",Te.bind(null,this)],[window,"resize",c.place.bind(c)]]):(H(this,[l]),this.show())}static formatDate(e,t,i){return B(e,t,i&&J[i]||J.en)}static parseDate(e,t,i){return V(e,t,i&&J[i]||J.en)}static get locales(){return J}get active(){return!(!this.picker||!this.picker.active)}get pickerElement(){return this.picker?this.picker.element:void 0}setOptions(e){const t=se(e,this);Object.assign(this._options,e),Object.assign(this.config,t),this.picker.setOptions(t),Ie(this,3)}show(){if(this.inputField){const{config:e,inputField:t}=this;if(t.disabled||t.readOnly&&!e.enableOnReadonly)return;Y(t)||e.disableTouchKeyboard||(this._showing=!0,t.focus(),delete this._showing)}this.picker.show()}hide(){this.inputField&&(this.picker.hide(),this.picker.update().changeView(this.config.startView).render())}toggle(){this.picker.active?this.inputField&&this.picker.hide():this.show()}destroy(){this.hide(),$(this),this.picker.detach();const e=this.element;return e.classList.remove("datepicker-input"),delete e.datepicker,this}getDate(e=void 0){const t=Je(this,e);return this.config.multidate?this.dates.map(t):this.dates.length>0?t(this.dates[0]):void 0}setDate(...t){const i=[...t],s={},n=e(t);!n||"object"!=typeof n||Array.isArray(n)||n instanceof Date||Object.assign(s,i.pop());Pe(this,Array.isArray(i[0])?i[0]:i,s)}update(e=void 0){if(!this.inputField)return;const t=Object.assign(e||{},{clear:!0,render:!0,viewDate:void 0});Pe(this,i(this.inputField.value,this.config.dateDelimiter),t)}getFocusedDate(e=void 0){return Je(this,e)(this.picker.viewDate)}setFocusedDate(e,t=!1){const{config:i,picker:s,active:n,rangeSideIndex:a}=this,r=i.pickLevel,o=V(e,i.format,i.locale);void 0!==o&&(s.changeFocus(b(o,r,a)),n&&t&&s.changeView(r),s.render())}refresh(e=void 0,t=!1){let i;e&&"string"!=typeof e&&(t=e,e=void 0),i="picker"===e?2:"input"===e?1:3,Ie(this,i,!t)}enterEditMode(){const e=this.inputField;e&&!e.readOnly&&this.picker.active&&!this.editMode&&(this.editMode=!0,e.classList.add("in-edit"))}exitEditMode(e=void 0){if(!this.inputField||!this.editMode)return;const t=Object.assign({update:!1},e);delete this.editMode,this.inputField.classList.remove("in-edit"),t.update&&this.update(t)}}function qe(e){const t=Object.assign({},e);return delete t.inputs,delete t.allowOneSidedRange,delete t.maxNumberOfDates,t}function ze(e,t){if(e._updating)return;e._updating=!0;const i=t.target;if(void 0===i.datepicker)return;const s=e.datepickers,[n,a]=s,r={render:!1},o=e.inputs.indexOf(i),d=0===o?1:0,c=s[o].dates[0],l=s[d].dates[0];void 0!==c&&void 0!==l?0===o&&c>l?(n.setDate(l,r),a.setDate(c,r)):1===o&&c<l&&(n.setDate(c,r),a.setDate(l,r)):e.allowOneSidedRange||void 0===c&&void 0===l||(r.clear=!0,s[d].setDate(s[o].dates,r)),s.forEach((e=>{e.picker.update().render()})),delete e._updating}window.Datepicker=Ue,window.DateRangePicker=class{constructor(e,t={}){let i=Array.isArray(t.inputs)?t.inputs:Array.from(e.querySelectorAll("input"));if(i.length<2)return;e.rangepicker=this,this.element=e,this.inputs=i=i.slice(0,2),Object.freeze(i),this.allowOneSidedRange=!!t.allowOneSidedRange;const s=ze.bind(null,this),n=qe(t),a=this.datepickers=[];i.forEach((e=>{!function(e,t,i,s){H(e,[[i,"changeDate",t]]),new Ue(i,s,e)}(this,s,e,n)})),Object.freeze(a),Object.defineProperty(this,"dates",{get:()=>a.map((e=>e.dates[0]))}),a[0].dates.length>0?ze(this,{target:i[0]}):a[1].dates.length>0&&ze(this,{target:i[1]})}setOptions(e){this.allowOneSidedRange=!!e.allowOneSidedRange;const t=qe(e);this.datepickers.forEach((e=>{e.setOptions(t)}))}destroy(){this.datepickers.forEach((e=>{e.destroy()})),$(this),delete this.element.rangepicker}getDates(e=void 0){const t=e?t=>B(t,e,this.datepickers[0].config.locale):e=>new Date(e);return this.dates.map((e=>void 0===e?e:t(e)))}setDates(e,t){const{datepickers:[i,s],inputs:[n,a],dates:[r,o]}=this;this._updating=!0,i.setDate(e),s.setDate(t),delete this._updating,s.dates[0]!==o?ze(this,{target:a}):i.dates[0]!==r&&ze(this,{target:n})}}}();

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
      readonly: false,
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

// formFieldsDateInput();

/**
 * INITIALIZE DATE PICKERS
 */
const formFieldsDateInputNew = async () => {
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
      readonly: false,
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
    const icon = document.querySelector(`[name="${name}"] + .datepicker + .date-input-icon`);

    if (icon) icon.style.cursor = "pointer";

    icon?.addEventListener("click", () => {
      if (!datePickerInstance.active) datePickerInstance.show();
    });
  };

  const initializeDatePickers = () => {
    const datePickerInputs = document.querySelectorAll(selectors.DATE_PICKER);

    for (let inputElement of datePickerInputs) {
      const pickerInstance = new Datepicker(inputElement);
      pickerInstance.setDate(new Date());
      showDatePickerOnIconClick(inputElement, pickerInstance);
    }
  };

  const initializeDateRangePickers = () => {
    const datePickers = document.querySelectorAll(selectors.DATE_RANGE_PICKER);

    for (let datePicker of datePickers) {
      const pickerInstance = new DateRangePicker(datePicker);
      showDatePickerOnIconClick(pickerInstance.inputs[0], pickerInstance.datepickers[0]);
      showDatePickerOnIconClick(pickerInstance.inputs[1], pickerInstance.datepickers[1]);
      pickerInstance.datepickers[0].setDate(new Date(), new Date());
    }
  };

  const loadDatePickerPackageCSS = async () => {
    const res = await fetch("https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1.3.4/dist/css/datepicker.min.css");
    if (res.ok) {
      // datePickerPackageCss = await res.text();
      const cssString = await res.text();
      const style = document.createElement("style");
      style.innerHTML = `${cssString}`;

      document.getElementsByTagName("head")[0].appendChild(style);
    }
  };

  await loadDatePickerPackageCSS();
  initializeDatePickers();
  initializeDateRangePickers();
};

formFieldsDateInputNew();

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

// formFieldsNumberSlider();

/**
 * INITIALIZE RANGE SLIDERS
 */
const formFieldsNumberSliderNew = async () => {
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
    const res = await fetch(`https://cdn.jsdelivr.net/gh/leongersen/noUiSlider@15.7.1/dist/nouislider.min.css`);

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

    const container = document.createElement("div");
    sliderInput.parentElement.appendChild(container);

    noUiSlider.create(container, {
      start: defaultValue,
      connect: "lower",
      tooltips: [true],
      range: {
        min,
        max,
      },
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

    const container = document.createElement("div");
    sliderInput.parentElement.appendChild(container);

    noUiSlider.create(container, {
      start: [defaultmin, defaultmax],
      connect: [false, true, false],
      tooltips: [true, true],
      range: {
        min,
        max,
      },
    });
  };

  const initializeTheSliders = async () => {
    const sliders = document.querySelectorAll(`[form-fields-pro-number-slider]`);

    for (let slider of sliders) {
      const rangeSlider = slider.getAttribute("allow-range");
      if (rangeSlider) initializeRangeSlider(slider);
      else initializeRegularSlider(slider);

      // overrideCss(slider);
      await sleep();
    }
  };

  await addNumberSliderCss();

  initializeTheSliders();
};

formFieldsNumberSliderNew();


/**
 * INITIALIZE SELECT INPUTS
 */
const formFieldsSelectNew = async () => {
  const additionalCss = `
  .select2-container {
    height: 38px;
  }

  .selection {
    height: 100%;
    display: block;
  }

  .select2-container--default .select2-selection--single {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
  }

  .select2-container .select2-selection--single .select2-selection__rendered {
    padding: 0;
  }

  .select2-container--default .select2-selection--single .select2-selection__arrow {
    position: relative;
    top: 0;
    right: 0;
  }

  .select2-container--default .select2-selection--single .select2-selection__arrow b,
  .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {
    border-color: transparent;
    border-width: 0;
    margin-top: -3px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNyA3TDEzIDEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=);
    height: 10px;
    width: 20px;
    background-repeat: no-repeat;
  }

  .select2-container--default .select2-selection--single {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0;
  }

  .select2-dropdown {
    border: 1px solid #ccc;
    border-radius: 0;
  }
 
  .select2-results__option--selectable {
    padding: 8px 12px;
    height: 38px;
  }

  

  .select2-search--dropdown .select2-search__field {
    padding: 8px 8px;
  }
  `;

  const addSelect2Css = async () => {
    const res = await fetch(`https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css`);

    if (res.ok) {
      const cssString = await res.text();
      const style = document.createElement("style");
      style.innerHTML = `${cssString} ${additionalCss}`;

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