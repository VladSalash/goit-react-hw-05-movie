"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[774],{713:function(n,e,t){t.d(e,{Df:function(){return o},M1:function(){return p},ME:function(){return l},YJ:function(){return s},tx:function(){return f}});var r=t(861),a=t(687),u=t.n(a),c=t(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i="9e618eee0b448f62a9e21dcfe5288ef5",o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},774:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r=t(861),a=t(885),u=t(687),c=t.n(u),i=t(791),o=t(713),s=t(596),p=(t(462),t(731)),f=t(184);function l(n){var e=n.id,t=n.original_title;return(0,f.jsx)("li",{children:(0,f.jsx)(p.OL,{to:"movies/".concat(e),children:t})},e)}var v,d,h,x=t(168),m=t(444),g=m.ZP.h1(v||(v=(0,x.Z)(["\n  font-size: 50px;\n  margin-bottom: 30px;\n"]))),Z=m.ZP.ul(d||(d=(0,x.Z)(["\n  display: inline-block;\n  list-style: none;\n"])));function k(n){var e=n.movies;return(0,f.jsxs)("div",{children:[(0,f.jsx)(g,{children:"Trending today"}),(0,f.jsx)(Z,{children:e.map((function(n){var e=n.id,t=n.original_title;return(0,f.jsx)(l,{id:e,original_title:t},e)}))})]})}var w=m.ZP.h1(h||(h=(0,x.Z)(["\n  margin-top: 30px;\n  text-align: center;\n"]))),b="idle",_="pending",y="resolved",j="rejected";function P(){var n=(0,i.useState)([]),e=(0,a.Z)(n,2),t=e[0],u=e[1],p=(0,i.useState)("idle"),l=(0,a.Z)(p,2),v=l[0],d=l[1];return(0,i.useEffect)((function(){d(_);var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Df)();case 3:if(0!==(e=n.sent).length){n.next=7;break}return d(b),n.abrupt("return");case 7:d(y),u(e),n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),d(j),n.abrupt("return",s.Am.error("Whoops something went wrong..."));case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)(f.Fragment,{children:[v===b&&(0,f.jsx)(w,{children:"We don't have popular movies, come back later \ud83d\ude14"}),v===y&&(0,f.jsx)(k,{movies:t})]})}}}]);
//# sourceMappingURL=774.49ee74c0.chunk.js.map