(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[13],{1286:function(t,e,a){t.exports=a.p+"static/media/draggable.e58eaef0.gif"},1408:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(480),s=a(1286),o=a.n(s);e.default=function(){var t='\n    \u4f60\u53ef\u4ee5\u8bd5\u7740\u62d6\u62fd\u4e00\u4e0b\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u680f\u7684\u67d0\u4e00\u9879\uff0c\u5b83\u662f\u53ef\u4ee5\u62d6\u62fd\u7684\u54e6\u3002\n    \u672cDemo\u662f\u57fa\u4e8e<a href="https://github.com/atlassian/react-beautiful-dnd" target="_blank">react-beautiful-dnd</a>\u3002\n    <p><img src="'.concat(o.a,'"/></p>\n  ');return i.a.createElement("div",{className:"app-container"},i.a.createElement(r.a,{title:"\u5217\u8868\u62d6\u62fd",source:t}))}},480:function(t,e,a){"use strict";a(487);var n=a(486),i=a(0),r=a.n(i),s=a(42),o=a(43),c=function(){function t(e){Object(s.a)(this,t),this.opts=e||{},this.source=e.source,this.output=e.output,this.delay=e.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(o.a)(t,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(t,e){for(var a=Array.from(t.childNodes),n=0;n<a.length;n++){var i=a[n];if(3===i.nodeType)e=e.concat(i.nodeValue.split(""));else if(1===i.nodeType){var r=[];r=this.convert(i,r),e.push({dom:i,val:r})}}return e}},{key:"print",value:function(t,e,a){setTimeout((function(){t.appendChild(document.createTextNode(e)),a()}),this.delay)}},{key:"play",value:function(t){var e=this;if(t.val.length){var a=t.val.shift();if("string"===typeof a)this.print(t.dom,a,(function(){e.play(t)}));else{var n=a.dom.cloneNode();t.dom.appendChild(n),this.play({parent:t,dom:n,val:a.val})}}else t.parent?this.play(t.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),t}(),u=function(t){var e=t.title,a=t.source,s=Object(i.useRef)(),o=Object(i.useRef)();return Object(i.useEffect)((function(){new c({source:s.current,output:o.current,delay:30}).start()}),[]),r.a.createElement(n.a,{bordered:!1,className:"card-item",title:e},r.a.createElement("div",{style:{display:"none"},ref:s,dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("div",{ref:o}))};u.defaultProps={title:"",source:""};e.a=u}}]);