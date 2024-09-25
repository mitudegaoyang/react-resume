(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[32],{1398:function(e,t,r){"use strict";r.r(t);r(490);var n=r(489),a=(r(244),r(124)),i=(r(89),r(28)),o=(r(142),r(50)),c=r(576),l=r.n(c),s=r(577),u=r(42),d=r(43),h=r(56),f=r(55),p=(r(547),r(546)),m=r(0),v=r.n(m),y=r(182),g=r(483),b=(r(177),r(107)),E=(r(519),r(518)),w=(r(238),r(71)),O=(r(237),r(143)),L=O.a.TextArea,x=function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var e=this.props,t=e.visible,r=e.onCancel,n=e.onOk,a=e.form,i=e.confirmLoading,o=e.currentRowData,c=a.getFieldDecorator,l=o.id,s=o.name,u=o.role,d=o.description,h={labelCol:{sm:{span:4}},wrapperCol:{sm:{span:16}}};return v.a.createElement(b.a,{title:"\u7f16\u8f91",visible:t,onCancel:r,onOk:n,confirmLoading:i},v.a.createElement(w.a,h,v.a.createElement(w.a.Item,{label:"\u7528\u6237ID:"},c("id",{initialValue:l})(v.a.createElement(O.a,{disabled:!0}))),v.a.createElement(w.a.Item,{label:"\u7528\u6237\u540d\u79f0:"},c("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0!"}],initialValue:s})(v.a.createElement(O.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0"}))),v.a.createElement(w.a.Item,{label:"\u7528\u6237\u89d2\u8272:"},c("role",{initialValue:u})(v.a.createElement(E.a,{style:{width:120},disabled:"admin"===l},v.a.createElement(E.a.Option,{value:"admin"},"admin"),v.a.createElement(E.a.Option,{value:"editor"},"editor"),v.a.createElement(E.a.Option,{value:"guest"},"guest")))),v.a.createElement(w.a.Item,{label:"\u7528\u6237\u63cf\u8ff0:"},c("description",{initialValue:d})(v.a.createElement(L,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u63cf\u8ff0"})))))}}]),r}(m.Component),k=w.a.create({name:"EditUserForm"})(x),U=O.a.TextArea,j=function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).validatUserID=function(){var e=Object(s.a)(l.a.mark((function e(t,r,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=9;break}return/^[a-zA-Z0-9]{1,6}$/.test(r)||n("\u7528\u6237ID\u5fc5\u987b\u4e3a1-6\u4f4d\u6570\u5b57\u6216\u5b57\u6bcd\u7ec4\u5408"),e.next=4,Object(y.f)(r);case 4:a=e.sent,a.data.status&&n("\u8be5\u7528\u6237ID\u5df2\u5b58\u5728"),e.next=10;break;case 9:n("\u8bf7\u8f93\u5165\u7528\u6237ID");case 10:n();case 11:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),e}return Object(d.a)(r,[{key:"render",value:function(){var e=this.props,t=e.visible,r=e.onCancel,n=e.onOk,a=e.form,i=e.confirmLoading,o=a.getFieldDecorator,c={labelCol:{sm:{span:4}},wrapperCol:{sm:{span:16}}};return v.a.createElement(b.a,{title:"\u7f16\u8f91",visible:t,onCancel:r,onOk:n,confirmLoading:i},v.a.createElement(w.a,c,v.a.createElement(w.a.Item,{label:"\u7528\u6237ID:"},o("id",{rules:[{required:!0,validator:this.validatUserID}]})(v.a.createElement(O.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237ID"}))),v.a.createElement(w.a.Item,{label:"\u7528\u6237\u540d\u79f0:"},o("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0!"}]})(v.a.createElement(O.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0"}))),v.a.createElement(w.a.Item,{label:"\u7528\u6237\u89d2\u8272:"},o("role",{initialValue:"admin"})(v.a.createElement(E.a,{style:{width:120}},v.a.createElement(E.a.Option,{value:"admin"},"admin"),v.a.createElement(E.a.Option,{value:"guest"},"guest")))),v.a.createElement(w.a.Item,{label:"\u7528\u6237\u63cf\u8ff0:"},o("description",{})(v.a.createElement(U,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u63cf\u8ff0"})))))}}]),r}(m.Component),I=w.a.create({name:"AddUserForm"})(j),C=p.a.Column,_=function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={users:[],editUserModalVisible:!1,editUserModalLoading:!1,currentRowData:{},addUserModalVisible:!1,addUserModalLoading:!1},e.getUsers=Object(s.a)(l.a.mark((function t(){var r,n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.d)();case 2:r=t.sent,n=r.data,a=n.users,0===n.status&&e.setState({users:a});case 5:case"end":return t.stop()}}),t)}))),e.handleEditUser=function(t){e.setState({currentRowData:Object.assign({},t),editUserModalVisible:!0})},e.handleDeleteUser=function(t){var r=t.id;"admin"!==r?Object(y.b)({id:r}).then((function(t){o.a.success("\u5220\u9664\u6210\u529f"),e.getUsers()})):o.a.error("\u4e0d\u80fd\u5220\u9664\u7ba1\u7406\u5458\u7528\u6237\uff01")},e.handleEditUserOk=function(t){var r=e.editUserFormRef.props.form;r.validateFields((function(t,n){t||(e.setState({editModalLoading:!0}),Object(y.c)(n).then((function(t){r.resetFields(),e.setState({editUserModalVisible:!1,editUserModalLoading:!1}),o.a.success("\u7f16\u8f91\u6210\u529f!"),e.getUsers()})).catch((function(e){o.a.success("\u7f16\u8f91\u5931\u8d25,\u8bf7\u91cd\u8bd5!")})))}))},e.handleCancel=function(t){e.setState({editUserModalVisible:!1,addUserModalVisible:!1})},e.handleAddUser=function(t){e.setState({addUserModalVisible:!0})},e.handleAddUserOk=function(t){var r=e.addUserFormRef.props.form;r.validateFields((function(t,n){t||(e.setState({addUserModalLoading:!0}),Object(y.a)(n).then((function(t){r.resetFields(),e.setState({addUserModalVisible:!1,addUserModalLoading:!1}),o.a.success("\u6dfb\u52a0\u6210\u529f!"),e.getUsers()})).catch((function(e){o.a.success("\u6dfb\u52a0\u5931\u8d25,\u8bf7\u91cd\u8bd5!")})))}))},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this,t=this.state.users,r=v.a.createElement("span",null,v.a.createElement(i.a,{type:"primary",onClick:this.handleAddUser},"\u6dfb\u52a0\u7528\u6237"));return v.a.createElement("div",{className:"app-container"},v.a.createElement(g.a,{title:"\u7528\u6237\u7ba1\u7406",source:"\u5728\u8fd9\u91cc\uff0c\u4f60\u53ef\u4ee5\u5bf9\u7cfb\u7edf\u4e2d\u7684\u7528\u6237\u8fdb\u884c\u7ba1\u7406\uff0c\u4f8b\u5982\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7528\u6237\uff0c\u6216\u8005\u4fee\u6539\u7cfb\u7edf\u4e2d\u5df2\u7ecf\u5b58\u5728\u7684\u7528\u6237\u3002"}),v.a.createElement("br",null),v.a.createElement(n.a,{title:r},v.a.createElement(p.a,{bordered:!0,rowKey:"id",dataSource:t,pagination:!1},v.a.createElement(C,{title:"\u7528\u6237ID",dataIndex:"id",key:"id",align:"center"}),v.a.createElement(C,{title:"\u7528\u6237\u540d\u79f0",dataIndex:"name",key:"name",align:"center"}),v.a.createElement(C,{title:"\u7528\u6237\u89d2\u8272",dataIndex:"role",key:"role",align:"center"}),v.a.createElement(C,{title:"\u7528\u6237\u63cf\u8ff0",dataIndex:"description",key:"description",align:"center"}),v.a.createElement(C,{title:"\u64cd\u4f5c",key:"action",width:195,align:"center",render:function(t,r){return v.a.createElement("span",null,v.a.createElement(i.a,{type:"primary",shape:"circle",icon:"edit",title:"\u7f16\u8f91",onClick:e.handleEditUser.bind(null,r)}),v.a.createElement(a.a,{type:"vertical"}),v.a.createElement(i.a,{type:"primary",shape:"circle",icon:"delete",title:"\u5220\u9664",onClick:e.handleDeleteUser.bind(null,r)}))}}))),v.a.createElement(k,{currentRowData:this.state.currentRowData,wrappedComponentRef:function(t){return e.editUserFormRef=t},visible:this.state.editUserModalVisible,confirmLoading:this.state.editUserModalLoading,onCancel:this.handleCancel,onOk:this.handleEditUserOk}),v.a.createElement(I,{wrappedComponentRef:function(t){return e.addUserFormRef=t},visible:this.state.addUserModalVisible,confirmLoading:this.state.addUserModalLoading,onCancel:this.handleCancel,onOk:this.handleAddUserOk}))}}]),r}(m.Component);t.default=_},483:function(e,t,r){"use strict";r(490);var n=r(489),a=r(0),i=r.n(a),o=r(42),c=r(43),l=function(){function e(t){Object(o.a)(this,e),this.opts=t||{},this.source=t.source,this.output=t.output,this.delay=t.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(c.a)(e,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(e,t){for(var r=Array.from(e.childNodes),n=0;n<r.length;n++){var a=r[n];if(3===a.nodeType)t=t.concat(a.nodeValue.split(""));else if(1===a.nodeType){var i=[];i=this.convert(a,i),t.push({dom:a,val:i})}}return t}},{key:"print",value:function(e,t,r){setTimeout((function(){e.appendChild(document.createTextNode(t)),r()}),this.delay)}},{key:"play",value:function(e){var t=this;if(e.val.length){var r=e.val.shift();if("string"===typeof r)this.print(e.dom,r,(function(){t.play(e)}));else{var n=r.dom.cloneNode();e.dom.appendChild(n),this.play({parent:e,dom:n,val:r.val})}}else e.parent?this.play(e.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),e}(),s=function(e){var t=e.title,r=e.source,o=Object(a.useRef)(),c=Object(a.useRef)();return Object(a.useEffect)((function(){new l({source:o.current,output:c.current,delay:30}).start()}),[]),i.a.createElement(n.a,{bordered:!1,className:"card-item",title:t},i.a.createElement("div",{style:{display:"none"},ref:o,dangerouslySetInnerHTML:{__html:r}}),i.a.createElement("div",{ref:c}))};s.defaultProps={title:"",source:""};t.a=s},576:function(e,t,r){e.exports=r(613)},577:function(e,t,r){"use strict";function n(e,t,r,n,a,i,o){try{var c=e[i](o),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var o=e.apply(t,r);function c(e){n(o,a,i,c,l,"next",e)}function l(e){n(o,a,i,c,l,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return a}))},613:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(e,t,r,n){var a=t&&t.prototype instanceof u?t:u,i=Object.create(a.prototype),o=new O(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return x()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=b(o,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,o),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var s={};function u(){}function d(){}function h(){}var f={};f[a]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(L([])));m&&m!==t&&r.call(m,a)&&(f=m);var v=h.prototype=u.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function g(e,t){var n;this._invoke=function(a,i){function o(){return new t((function(n,o){!function n(a,i,o,c){var s=l(e[a],e,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,c)}))}c(s.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:x}}function x(){return{value:void 0,done:!0}}return d.prototype=v.constructor=h,h.constructor=d,h[o]=d.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(g.prototype),g.prototype[i]=function(){return this},e.AsyncIterator=g,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new g(c(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(v),v[o]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;w(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}}}]);