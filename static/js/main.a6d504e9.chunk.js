(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e.n(r),c=e(2),a=e(6),s=e(7),u=e(9),i=e(8),d=e(1),l=e.n(d),f=e(3),b=e.n(f),p=(e(15),e(0)),h=function(t){var n=t.goods;return Object(p.jsx)("ul",{children:n.map((function(t){return Object(p.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})};function j(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var m=function(){var t=Object(c.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:return(n=t.sent).sort((function(t,n){return t.name.localeCompare(n.name)})).length=5,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(t){Object(u.a)(e,t);var n=Object(i.a)(e);function e(){var t;Object(a.a)(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=n.call.apply(n,[this].concat(o))).state={goods:[]},t.showGoods=function(){var n=Object(c.a)(l.a.mark((function n(e){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:r=n.sent,t.setState({goods:r});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t}return Object(s.a)(e,[{key:"render",value:function(){var t=this,n=this.state.goods;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Dynamic list of Goods"}),Object(p.jsxs)("div",{className:"btn-group",children:[Object(p.jsx)("button",{type:"button",onClick:function(){return t.showGoods(j)},className:"btn btn-outline-primary",children:"Load All goods"}),Object(p.jsx)("button",{type:"button",onClick:function(){return t.showGoods(m)},className:"btn btn-outline-primary",children:"Load 5 first goods"}),Object(p.jsx)("button",{type:"button",onClick:function(){return t.showGoods(y)},className:"btn btn-outline-primary",children:"Load red goods"})]}),Object(p.jsx)(h,{goods:n})]})}}]),e}(b.a.Component);o.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a6d504e9.chunk.js.map