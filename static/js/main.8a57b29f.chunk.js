(this.webpackJsonpsoccerzustand=this.webpackJsonpsoccerzustand||[]).push([[0],{68:function(e,n,t){},73:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);t(0);var i=t(28),a=t.n(i),r=(t(41),t(68),t(83)),o=t(84),c=t(86),s=t(85),d="team",u=t(7),l=t.n(u),m=t(49),f=t.n(m),g=t(4),b=t(50),h=t.n(b),j=t(51),p=t(32),v=t(53),O=function(e,n){return n.findIndex((function(n){return n.id===e}))},C=function(e,n,t){var i=Object(v.a)(t),a=[e,n].map((function(e){return{index:O(e,i),team:(n=e,t=i,t.find((function(e){return e.id===n})))};var n,t})),r=Object(p.a)(a,2),o=r[0],c=r[1];return t.map((function(e,n){return n===c.index?Object(g.a)({},o.team):n===o.index?Object(g.a)({},c.team):Object(g.a)({},e)}))},x=function(e,n,t){var i=O(e.id,t);return t.map((function(e,t){return Object(g.a)(Object(g.a)({},e),{},{name:i===t?n:e.name})}))},w={positions:void 0,loadingCompleted:!1},k=h()(Object(j.devtools)((function(e){return Object(g.a)({},function(e){return Object(g.a)(Object(g.a)({},w),{},{setPositions:function(n){e((function(){return{positions:n}}))},swapPositions:function(n){e((function(e){return{positions:C(n.sourceTeamId,n.targetTeamId,e.positions)}}))},updateTeamname:function(n){e((function(e){return{positions:x(n.team,n.updatedText,e.positions)}}))}})}(e))}))),B=t(3),F=function(e){var n,t=e.rank,i=e.team,a=k((function(e){return e.updateTeamname})),r=k((function(e){return e.swapPositions})),o=Object(s.a)({type:d,item:{team:i},end:function(e,n){if(n.didDrop()){var t=n.getItem(),i=n.getDropResult();r({sourceTeamId:t.team.id,targetTeamId:i.team.id})}}}),c=l()("col-md-12","btn","text-bold",1===(n=t)?"tabellenfuehrerClass tabelleClass":n<=3?"championsLeagueClass tabelleClass":n<=6?"europaLeagueClass tabelleClass":n<=15?"mittelfeldClass tabelleClass":16===n?"relegationClass tabelleClass":"abstiegClass tabelleClass");return Object(B.jsx)("div",{className:c,style:{cursor:"pointer"},ref:o[1],children:Object(B.jsx)(f.a,{onChange:function(e){a({team:i,updatedText:e.target.value})},role:"button",className:"textPointer",html:i.name,autoFocus:!0,maxLength:200,disabled:!i.editing})})},y=function(e){var n=e.team,t=e.rank,i=Object(c.a)({accept:d,drop:function(){return{team:n}}});return Object(B.jsx)("div",{ref:i[1],children:Object(B.jsx)(F,{team:n,rank:t})})},S=t(81),L=t(52),T=t(82),I=t(87),V=t(25),W=function(){return fetch("https://holgergp.builtwithdark.com/league-table").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{editing:!0})}))}))},H=[{name:"Borussia M\xf6nchengladbach",editing:!0,id:"BMG"},{name:"Borussia Dortmund",editing:!0,id:"BVB"},{name:"FC Bayern M\xfcnchen",editing:!0,id:"FCB"},{name:"VFL Wolfsburg",editing:!0,id:"VFL"},{name:"Bayer Leverkusen",editing:!0,id:"B04"},{name:"FC Schalke 04",editing:!0,id:"S04"},{name:"Hertha BSC Berlin",editing:!0,id:"BSC"},{name:"1. FC K\xf6ln",editing:!0,id:"1FC"},{name:"FC Ingolstadt",editing:!0,id:"FCI"},{name:"Darmstadt 98",editing:!0,id:"D98"},{name:"Hamburger SV",editing:!0,id:"HSV"},{name:"Eintracht Frankfurt",editing:!0,id:"SGE"},{name:"Werder Bremen",editing:!0,id:"SVW"},{name:"Hoffenheim",editing:!0,id:"SAP"},{name:"FC Augsburg",editing:!0,id:"FCA"},{name:"Hannover 96",editing:!0,id:"H96"},{name:"Mainz 05",editing:!0,id:"M05"},{name:"VFB Stuttgart",editing:!0,id:"VFB"}],P=function(){var e=k((function(e){return e.positions})),n=k((function(e){return e.setPositions})),t=Object(V.useQuery)("sampleData",W,{onSuccess:function(e){return n(e)},onError:function(){return n(H)}}),i=t.isLoading,a=t.error;return i?"Loading...":a?"An error has occurred: "+a.message:Object(B.jsx)(S.a,{backend:L.a,children:Object(B.jsx)(T.a,{md:6,children:Object(B.jsxs)(I.a,{bg:"dark",children:[Object(B.jsx)(I.a.Header,{role:"heading",children:Object(B.jsx)(I.a.Title,{children:"Ligatabelle zum Selberstecken"})}),Object(B.jsx)(I.a.Body,{children:e.map((function(e,n){return Object(B.jsx)(y,{team:e,rank:n+1},n)}))})]})})})},D=new V.QueryClient,E=function(){return Object(B.jsx)("div",{className:"index",children:Object(B.jsx)(r.a,{children:Object(B.jsx)(o.a,{children:Object(B.jsx)(V.QueryClientProvider,{client:D,children:Object(B.jsx)(P,{})})})})})},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(73);a.a.render(Object(B.jsx)(E,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/soccerZustand",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/soccerZustand","/service-worker.js");A?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):M(e)}))}}()}},[[74,1,2]]]);
//# sourceMappingURL=main.8a57b29f.chunk.js.map