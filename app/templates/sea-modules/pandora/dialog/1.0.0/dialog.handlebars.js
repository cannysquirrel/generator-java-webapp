/*! dialog-1.0.0 2014-09-25 17:33:32 */
define("pandora/dialog/1.0.0/dialog.handlebars",["gallery/handlebars/1.3.0/handlebars-runtime"],function(a,b,c){var d=a("gallery/handlebars/1.3.0/handlebars-runtime");c.exports=d.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+='\r\n<a class="dialog-close" href="javascript:" data-role="close">',(e=c.close)?d=e.call(a,{hash:{},data:b}):(e=a&&a.close,d=typeof e===n?e.call(a,{hash:{},data:b}):e),(d||0===d)&&(f+=d),f+="</a>\r\n"}function g(a,b){var d,e,f="";return f+='\r\n<div class="dialog-head" data-role="head">\r\n  <h3 class="dialog-title" data-role="title">',(e=c.title)?d=e.call(a,{hash:{},data:b}):(e=a&&a.title,d=typeof e===n?e.call(a,{hash:{},data:b}):e),(d||0===d)&&(f+=d),f+="</h3>\r\n</div>\r\n"}function h(a,b){var d,e,f="";return f+='\r\n<div class="dialog-foot" data-role="foot">\r\n  <a href="javascript:;" class="dialog-submit" data-role="submit">',(e=c.submit)?d=e.call(a,{hash:{},data:b}):(e=a&&a.submit,d=typeof e===n?e.call(a,{hash:{},data:b}):e),(d||0===d)&&(f+=d),f+="</a>\r\n  ",d=c["if"].call(a,a&&a.cancel,{hash:{},inverse:o.noop,fn:o.program(6,i,b),data:b}),(d||0===d)&&(f+=d),f+="\r\n</div>\r\n"}function i(a,b){var d,e,f="";return f+='\r\n  <a href="javascript:;" class="dialog-cancel" data-role="cancel">',(e=c.cancel)?d=e.call(a,{hash:{},data:b}):(e=a&&a.cancel,d=typeof e===n?e.call(a,{hash:{},data:b}):e),(d||0===d)&&(f+=d),f+="</a>\r\n  "}this.compilerInfo=[4,">= 1.0.0"],c=c||{};for(var j in a.helpers)c[j]=c[j]||a.helpers[j];e=e||{};var k,l,m="",n="function",o=this;return k=c["if"].call(b,b&&b.close,{hash:{},inverse:o.noop,fn:o.program(1,f,e),data:e}),(k||0===k)&&(m+=k),m+="\r\n",k=c["if"].call(b,b&&b.title,{hash:{},inverse:o.noop,fn:o.program(3,g,e),data:e}),(k||0===k)&&(m+=k),m+='\r\n<div class="dialog-body" data-role="body">\r\n  <div class="dialog-content" data-role="content">',(l=c.content)?k=l.call(b,{hash:{},data:e}):(l=b&&b.content,k=typeof l===n?l.call(b,{hash:{},data:e}):l),(k||0===k)&&(m+=k),m+="</div>\r\n</div>\r\n",k=c["if"].call(b,b&&b.submit,{hash:{},inverse:o.noop,fn:o.program(5,h,e),data:e}),(k||0===k)&&(m+=k),m+="\r\n"})});