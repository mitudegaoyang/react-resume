(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[27],{1421:function(e,t,a){"use strict";a.r(t);a(574);var n=a(608),l=(a(487),a(486)),c=(a(672),a(829)),r=a(546),o=a.n(r),i=a(547),u=a(120),s=a(17),m=a(47),b=(a(548),a(573)),d=a(38);var p={active:{label:"\u5185\u7f51\u4e0a\u7ebf",color:"blue"},published:{label:"\u5df2\u4e0a\u7ebf",color:"green"},close:{label:"\u5df2\u4e0b\u7ebf",color:""}},f={react:{label:"React",color:"#61dafb"},vue:{label:"Vue",color:"#4fc08d"},uniApp:{label:"uni-app",color:"#42b983"},uniCloud:{label:"uni-cloud",color:"#e96900"},weChat:{label:"WeChat",color:"#2bae67"},antd:{label:"antd",color:"#0170fe"},iView:{label:"iView",color:"#2d8cf0"},vux:{label:"Vux",color:"#35495e"},elementUI:{label:"ElementUI",color:"#409efe"},vueElementAdmin:{label:"vue-element-admin",color:"#4caf50"},weex:{label:"Weex",color:"#3aabf4"},singleSpa:{label:"single-spa",color:"#ee689f"},ice:{label:"ice",color:"#6047de"},echarts:{label:"echarts",color:"#e43961"},cloudCharts:{label:"cloud-charts",color:"#ff8200"},formilyjs:{label:"formilyjs",color:"#4d1db5"},html:{label:"HTML5",color:"#f60"},css:{label:"CSS3",color:"#f90"},js:{label:"js",color:"#ffda3f"},jsp:{label:"JSP",color:"#2952a4"},angular:{label:"angular",color:"#eb5a5c"},fuse:{label:"Fuse-angular",color:"#2877c1"},emotion:{label:"emotion",color:"#c43bad"},tggLargeScreen:{label:"tgg-large-screen",color:"#612aaa"}},g=a(0),v=a.n(g),E=(a(516),a(515)),h=(a(236),a(71)),y=(a(235),a(143)),j=a(219),w=a.n(j),k=Object(g.memo)((function(e){var t=e.onFilterChange,a=e.options,n=Object(g.useCallback)(w.a.debounce((function(e){t("title",e)}),1e3),[t]);return v.a.createElement(h.a,{layout:"inline"},v.a.createElement(h.a.Item,{label:"\u6807\u9898:"},v.a.createElement(y.a,{onChange:function(e){return n(e.target.value)},allowClear:!0,placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"})),v.a.createElement(h.a.Item,{label:"\u6807\u7b7e:"},v.a.createElement(E.a,{style:{width:220},onChange:function(e){t("tags",e)},allowClear:!0,placeholder:"\u8bf7\u9009\u62e9\u6807\u7b7e"},a.tags.map((function(e){return v.a.createElement(E.a.Option,{value:e.value,key:e.value},e.label)})))),v.a.createElement(h.a.Item,{label:"\u72b6\u6001:"},v.a.createElement(E.a,{style:{width:120},onChange:function(e){t("status",e)},allowClear:!0,placeholder:"\u8bf7\u9009\u62e9\u72b6\u6001"},a.status.map((function(e){return v.a.createElement(E.a.Option,{value:e.value,key:e.value},e.label)})))))})),O=(a(863),a(237),a(177)),C=(a(253),a(212)),x=(a(176),a(108)),S=(a(70),a(6)),N=a(864),I=a.n(N),z=(a(89),a(28));function F(e){var t=e.label,a=e.type,n=e.onClick,l=e.iconStyle,c=void 0===l?{}:l,r=e.disabled,o={type:"swap-rotate"===a?"swap":a,style:Object(s.a)({},c,{},"swap-rotate"===a?{transform:"rotate(90deg)"}:{})};return v.a.createElement(z.a,{style:{border:"none",padding:"5px 8px"},title:t,onClick:n,disabled:r},v.a.createElement(S.a,o))}var L=function(e){var t=e.onStateChange,a=e.visible,n=e.src,l=e.canDownload,c=Object(g.useState)(100),r=Object(m.a)(c,2),u=r[0],s=r[1],b=Object(g.useState)(0),d=Object(m.a)(b,2),p=d[0],f=d[1],E=Object(g.useState)(!1),h=Object(m.a)(E,2),y=h[0],j=h[1],w=Object(g.useState)(!1),k=Object(m.a)(w,2),O=k[0],C=k[1],x=Object(g.useCallback)((function(){s((function(e){return Math.min(e+5,300)}))}),[]),S=Object(g.useCallback)((function(){s((function(e){return Math.max(e-5,50)}))}),[]),N=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,l,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch image");case 6:return e.next=8,t.blob();case 8:a=e.sent,l=URL.createObjectURL(a),(c=document.createElement("a")).href=l,c.download="image.jpg",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(l),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.error("Failed to download image:",e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),I=Object(g.useCallback)((function(){var e="scale(".concat(u/100,")"),t="rotate(".concat(p,"deg)"),a=y?"scaleX(-1)":"scaleX(1)",n=O?"scaleY(-1)":"scaleY(1)";return"".concat(e," ").concat(t," ").concat(a," ").concat(n)}),[u,p,y,O]),z=Object(g.useCallback)((function(){s(100),f(0),j(!1),C(!1)}),[]);return Object(g.useEffect)((function(){a||z()}),[a,z]),Object(g.useEffect)((function(){t(I())}),[I,t]),v.a.createElement("div",{style:{margin:"0 auto",textAlign:"center"}},v.a.createElement(F,{label:"\u653e\u5927",type:"zoom-in",onClick:x,disabled:300===u}),v.a.createElement(F,{label:"\u7f29\u5c0f",type:"zoom-out",onClick:S,disabled:50===u}),v.a.createElement(F,{label:"\u4e0a\u4e0b\u7ffb\u8f6c",type:"swap-rotate",onClick:function(){C(!O)}}),v.a.createElement(F,{label:"\u5de6\u53f3\u7ffb\u8f6c",type:"swap",onClick:function(){j(!y)}}),v.a.createElement(F,{label:"\u5de6\u65cb\u8f6c",type:"left",onClick:function(){f((p-90)%360)}}),v.a.createElement(F,{label:"\u53f3\u65cb\u8f6c",type:"right",onClick:function(){f((p+90)%360)}}),l&&v.a.createElement(F,{label:"\u4e0b\u8f7d",type:"download",onClick:N}))},U=(a(881),function(e){var t=e.src,a=e.alt,n=e.canDownload,l=e.width,c=void 0===l?300:l,r=Object(g.useState)(!1),o=Object(m.a)(r,2),i=o[0],u=o[1],s=Object(g.useState)(""),b=Object(m.a)(s,2),d=b[0],p=b[1],f=function(){return u(!i)};return v.a.createElement("div",{className:"imagePreview-container"},v.a.createElement("div",{className:"imagePreview-image-container"},v.a.createElement("div",{className:"imagePreview-image-mask",onClick:f},v.a.createElement(S.a,{type:"eye",title:"\u9884\u89c8"})," \u9884\u89c8"),v.a.createElement("img",{width:c,src:t,alt:a})),v.a.createElement(x.a,{title:"\u56fe\u7247\u9884\u89c8",visible:i,onCancel:f,style:{top:0,maxWidth:"100vw",paddingBottom:0},bodyStyle:{height:"calc(100vh - 118px)",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",padding:0},width:"100vw",footer:v.a.createElement(L,{onStateChange:function(e){p(e)},visible:i,src:t,canDownload:n})},i&&v.a.createElement(I.a,null,v.a.createElement("span",null,v.a.createElement("img",{alt:a,src:t,style:{width:"auto",height:"auto",maxWidth:"100vw",maxHeight:"calc(100vh - 158px)",position:"relative",margin:"0 auto",cursor:"grab",userSelect:"none",userDrag:"none",WebkitUserDrag:"none",transform:"".concat(d)}})))))}),_=function(e){var t=e.type,a=e.text,n=e.score;return v.a.createElement("span",null,v.a.createElement(S.a,{type:t,style:{marginRight:8},name:a}),"".concat(a,": ").concat(n,"/5"))},P=function(e){var t,a,n,l=e.item,r=e.statusEnum,o=e.tagsEnum;return v.a.createElement(c.a.Item,{key:l.title,actions:[v.a.createElement(_,{type:"tool",text:"\u9879\u76ee\u96be\u5ea6",key:"list-vertical-tool",score:null===l||void 0===l||null===(t=l.score)||void 0===t?void 0:t.difficulty}),v.a.createElement(_,{type:"clock-circle",text:"\u9879\u76ee\u5468\u671f",key:"list-vertical-clock-circle",score:null===l||void 0===l||null===(a=l.score)||void 0===a?void 0:a.duration}),v.a.createElement(_,{type:"star",text:"\u9879\u76ee\u4f53\u9a8c",key:"list-vertical-star",score:null===l||void 0===l||null===(n=l.score)||void 0===n?void 0:n.experience})],extra:l.img&&v.a.createElement(U,{key:l.title,width:272,alt:"logo",src:l.img})},v.a.createElement(c.a.Item.Meta,{avatar:l.company.src?v.a.createElement(C.a,{src:l.company.src}):v.a.createElement(C.a,{style:{backgroundColor:l.company.color,verticalAlign:"middle",opacity:.8},src:l.company.src},l.company.name),title:v.a.createElement(v.a.Fragment,null,l.href?v.a.createElement("a",{href:l.href,target:"_blank",rel:"noopener noreferrer"},l.title):v.a.createElement("span",null,l.title),v.a.createElement("span",{className:"status-wrapper"}," (",r[l.status].label,")")),description:v.a.createElement(v.a.Fragment,null,l.tags.map((function(e){return v.a.createElement(O.a,{color:o[e].color,key:e},o[e].label)})),v.a.createElement("span",{className:"date-wrapper"},l.date))}),l.description.map((function(e,t){return v.a.createElement("p",{key:t},e)})),v.a.createElement("ul",{className:"content-wrapper"},l.content.map((function(e,t){return v.a.createElement("li",{key:t},e)}))))},R=b.a.Panel;t.default=function(){var e=Object(g.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],E=Object(g.useState)(!1),h=Object(m.a)(E,2),y=h[0],j=h[1],w=Object(g.useState)(0),O=Object(m.a)(w,2),C=O[0],x=O[1],S=Object(g.useState)({pageNumber:1,pageSize:10,title:"",star:"",status:"",tags:""}),N=Object(m.a)(S,2),I=N[0],z=N[1],F=Object(g.useMemo)((function(){return{status:Object.keys(p).map((function(e){return{value:e,label:p[e].label}})),tags:Object.keys(f).map((function(e){return{value:e,label:f[e].label}}))}}),[]);return Object(g.useEffect)((function(){var e=!0;return function(){var t=Object(i.a)(o.a.mark((function t(){var a,n,l,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.prev=1,t.next=4,o=I,Object(d.a)({url:"/project/list",method:"post",data:o});case 4:if(a=t.sent,e){t.next=7;break}return t.abrupt("return");case 7:j(!1),n=a.data.data,l=n.items,c=n.total,r(l),x(c),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),console.error("Failed to fetch data:",t.t0),j(!1);case 17:case"end":return t.stop()}var o}),t,null,[[1,13]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[I]),v.a.createElement("div",{className:"app-container project-container"},v.a.createElement(b.a,{defaultActiveKey:["filter"]},v.a.createElement(R,{header:"\u7b5b\u9009",key:"filter"},v.a.createElement(k,{onFilterChange:function(e,t){z((function(a){return Object(s.a)({},a,Object(u.a)({},e,t))}))},options:F}))),v.a.createElement("br",null),v.a.createElement(l.a,null,v.a.createElement(c.a,{itemLayout:"vertical",size:"large",pagination:!1,dataSource:a,loading:y,renderItem:function(e){return v.a.createElement(P,{item:e,statusEnum:p,tagsEnum:f})}})),v.a.createElement("br",null),v.a.createElement(n.a,{total:C,pageSizeOptions:["10","20","40"],showTotal:function(e){return"\u5171".concat(e,"\u6761\u6570\u636e")},onChange:function(e,t){z((function(t){return Object(s.a)({},t,{pageNumber:e})}))},current:I.pageNumber,onShowSizeChange:function(e,t){z((function(e){return Object(s.a)({},e,{pageNumber:1,pageSize:t})}))},showSizeChanger:!0,showQuickJumper:!0,hideOnSinglePage:!1}))}},863:function(e,t,a){},881:function(e,t,a){}}]);