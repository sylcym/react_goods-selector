(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),s=n(4),o=n(5),l=n(7),r=n(6),i=n(1),d=n.n(i),u=(n(12),n(13),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:"Jam"},e.handleClear=function(){e.setState({selectedGood:""})},e.handleSelect=function(t){e.setState({selectedGood:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(u.jsxs)("main",{className:"section container",children:[Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[t?"".concat(t," is selected"):"No goods selected",t&&Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",title:"button",onClick:function(){return e.handleClear()}})]}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:b.map((function(n){return Object(u.jsxs)("tr",{"data-cy":"Good",className:t===n?"has-background-success-light":"",children:[Object(u.jsx)("td",{children:t!==n?Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.handleSelect(n)},children:"+"}):Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return e.handleClear()},children:"-"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:n})]})}))})})]})}}]),n}(d.a.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.be29c8dc.chunk.js.map