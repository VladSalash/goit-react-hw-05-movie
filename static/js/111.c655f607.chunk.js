"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[111],{713:function(e,t,r){r.d(t,{Df:function(){return o},M1:function(){return f},ME:function(){return l},YJ:function(){return s},tx:function(){return p}});var n=r(861),a=r(687),u=r.n(a),c=r(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i="9e618eee0b448f62a9e21dcfe5288ef5",o=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},111:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(861),a=r(885),u=r(687),c=r.n(u),i=r(791),o=r(731),s=r(689),f=r(596),p=(r(462),r(713)),l=r(184);var v,d=function(e){var t=e.id,r=e.original_title,n=(0,s.TH)();return(0,l.jsx)("li",{children:(0,l.jsx)(o.OL,{to:"".concat(t),state:{from:n},children:r})},t)},h=r(168),m=r(444).ZP.ul(v||(v=(0,h.Z)(["\n  margin-top: 15px;\n"])));function x(e){var t=e.movies;return(0,l.jsx)(m,{children:t.map((function(e){var t=e.id,r=e.original_title;return(0,l.jsx)(d,{id:t,original_title:r},t)}))})}function g(e){var t=e.setSearchParams,r=(0,i.useState)(""),n=(0,a.Z)(r,2),u=n[0],c=n[1];return(0,l.jsx)("div",{children:(0,l.jsxs)("form",{onSubmit:function(e){var r=e.currentTarget;if(e.preventDefault(),""===u.toLowerCase().trim())return f.Am.info("Please enter movie name ");t({query:r.elements.query.value}),c("")},autoComplete:"off",style:{paddingLeft:20},children:[(0,l.jsx)("input",{type:"text",name:"query",onChange:function(e){c(e.currentTarget.value)},value:u}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})})}var w="idle",y="pending",Z="resolved",b="rejected",k=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],v=(0,i.useState)("idle"),d=(0,a.Z)(v,2),h=d[0],m=d[1],k=(0,o.lr)(),_=(0,a.Z)(k,2),j=_[0],P=_[1],S=(0,s.TH)(),q=j.get("query");return(0,i.useEffect)((function(){if(null!==q){m(y);var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.ME)(q);case 3:if(0!==(t=e.sent).length){e.next=7;break}return m(w),e.abrupt("return",f.Am.warning(" ".concat(q," not found :( ")));case 7:m(Z),u(t),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),m(b),e.abrupt("return",f.Am.error("Whoops something went wrong..."));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}}),[q]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{setSearchParams:P}),h===Z&&(0,l.jsx)(x,{movies:r,location:S})]})}}}]);
//# sourceMappingURL=111.c655f607.chunk.js.map