"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[587],{713:function(n,t,e){e.d(t,{Hx:function(){return g},Y5:function(){return l},bI:function(){return f},rQ:function(){return s},xc:function(){return x}});var r=e(861),a=e(687),c=e.n(a),u=e(44),i="9e618eee0b448f62a9e21dcfe5288ef5",o="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.ZP)("".concat(o,"/trending/movie/day?api_key=").concat(i,"&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.ZP)("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.ZP)("".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.ZP)("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.ZP)("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},587:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,c=e(885),u=e(791),i=e(713),o=e(689),s=e(168),p=e(444),f=p.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),h=p.ZP.li(a||(a=(0,s.Z)(["\n  width: 200px;\n"]))),l=e(184);function d(n){var t=n.original,e=n.profile,r=n.name,a=n.character;return(0,l.jsxs)(h,{children:[(0,l.jsx)("img",{alt:t,src:"https://image.tmdb.org/t/p/w500/".concat(e),width:"100px"}),(0,l.jsx)("h3",{children:r}),(0,l.jsx)("p",{children:a})]})}function x(n){var t=n.cast;return(0,l.jsx)(f,{children:t.map((function(n){return(0,l.jsx)(d,{original:n.original_name,profile:n.profile_path,name:n.name,character:n.character},n.id)}))})}function m(){var n=(0,o.UO)().movieId,t=(0,u.useState)(null),e=(0,c.Z)(t,2),r=e[0],a=e[1];return(0,u.useEffect)((function(){(0,i.xc)(n).then((function(n){a(n.data.cast)}))}),[n]),(0,l.jsx)(l.Fragment,{children:r&&(0,l.jsx)(x,{cast:r})})}}}]);
//# sourceMappingURL=587.25243a42.chunk.js.map