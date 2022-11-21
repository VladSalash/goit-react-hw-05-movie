"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[422],{713:function(n,e,t){t.d(e,{Df:function(){return o},M1:function(){return d},ME:function(){return p},YJ:function(){return u},tx:function(){return l}});var r=t(861),a=t(687),i=t.n(a),c=t(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s="9e618eee0b448f62a9e21dcfe5288ef5",o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},422:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,a,i,c,s,o,u,d,l,p=t(861),f=t(885),v=t(687),h=t.n(v),x=t(791),m=t(689),g=t(596),j=(t(462),t(713)),Z=t(585),w=t(168),b=t(444),k=t(731),y=b.ZP.div(r||(r=(0,w.Z)(["\n  padding: 20px 40px;\n  border-bottom: 1px solid #ffffff2b;\n"]))),_=b.ZP.h2(a||(a=(0,w.Z)(["\n  margin-bottom: 10px;\n"]))),P=b.ZP.ul(i||(i=(0,w.Z)(["\n  margin-left: 18px;\n"]))),U=b.ZP.li(c||(c=(0,w.Z)(["\n  list-style-type: disc;\n  margin-bottom: 10px;\n"]))),O=(0,b.ZP)(k.OL)(s||(s=(0,w.Z)(["\n  color: #3d3d3d;\n  text-decoration: none;\n"]))),S=t(184),C=function(){var n,e,t=(0,m.UO)().movieId,r=(0,m.TH)(),a=(0,x.useRef)(null!==(n=null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,S.jsxs)(y,{children:[(0,S.jsx)(_,{children:"Additional info"}),(0,S.jsxs)(P,{children:[(0,S.jsx)(U,{children:(0,S.jsx)(O,{to:"/movies/".concat(t,"/cast"),state:{from:a},children:"Cast"})}),(0,S.jsx)(U,{children:(0,S.jsx)(O,{to:"/movies/".concat(t,"/reviews"),state:{from:a},children:"Reviews"})})]})]})},R=t(128),T=(0,b.ZP)(k.rU)(o||(o=(0,w.Z)(["\n  display: inline-flex;\n  align-items: center;\n  padding-left: 40px;\n  gap: 4px;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n    transform: scale(1.15);\n  }\n"]))),z=function(n){var e=n.to,t=n.children;return(0,S.jsxs)(T,{to:e,children:[(0,S.jsx)(R.jTe,{size:"24"}),t]})},A=b.ZP.div(u||(u=(0,w.Z)(["\n  display: flex;\n  margin-top: 20px;\n"]))),E=b.ZP.div(d||(d=(0,w.Z)(["\n  margin-right: 40px;\n  padding-left: 20px;\n"]))),F=b.ZP.div(l||(l=(0,w.Z)(["\n  width: 1000px;\n"])));function H(n){var e=n.movies,t=e.id,r=e.poster_path,a=e.original_title,i=e.vote_average,c=e.overview,s=e.genres;return(0,S.jsxs)(A,{children:[(0,S.jsx)(E,{children:(0,S.jsx)("img",{src:r?"".concat("https://image.tmdb.org/t/p/w300/").concat(r):"".concat("https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg"),alt:a})}),(0,S.jsxs)(F,{children:[(0,S.jsx)("h1",{children:a}),(0,S.jsxs)("p",{children:["User score: ",i.toFixed(1)]}),(0,S.jsx)("h2",{children:"Overview"}),(0,S.jsx)("p",{children:c}),(0,S.jsx)("h2",{children:"Genres"}),(0,S.jsx)("ul",{children:s.map((function(n){var e=n.id,t=n.name;return(0,S.jsx)("li",{children:(0,S.jsx)("p",{children:t})},e)}))})]})]},t)}var I="idle",J="pending",L="resolved",M="rejected";function W(){var n,e,t=(0,m.UO)().movieId,r=(0,x.useState)(null),a=(0,f.Z)(r,2),i=a[0],c=a[1],s=null!==(n=null===(e=(0,m.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",o=(0,x.useState)("idle"),u=(0,f.Z)(o,2),d=u[0],l=u[1];return(0,x.useEffect)((function(){l(J);var n=function(){var n=(0,p.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,j.YJ)(t);case 3:if(e=n.sent){n.next=7;break}return l(I),n.abrupt("return");case 7:l(L),c(e),n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),l(M),n.abrupt("return",g.Am.error("Whoops something went wrong..."));case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(z,{to:s,children:"Back"}),d===I&&(0,S.jsx)("h1",{children:"We don't have details from this movie "}),d===L&&(0,S.jsx)(H,{movies:i}),d===L&&(0,S.jsx)(C,{}),d===L&&(0,S.jsx)(x.Suspense,{fallback:(0,S.jsx)(Z.Z,{}),children:(0,S.jsx)(m.j3,{})})]})}}}]);
//# sourceMappingURL=422.d5ee41b8.chunk.js.map