(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){e.exports=n(157)},105:function(e,t,n){},106:function(e,t,n){},108:function(e,t,n){},118:function(e,t,n){},119:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=119},145:function(e,t){},148:function(e,t,n){},149:function(e,t,n){e.exports=n.p+"static/media/microphone.ca46940f.svg"},150:function(e,t,n){e.exports=n.p+"static/media/microphone-slash.b6eb2ae2.svg"},151:function(e,t,n){e.exports=n.p+"static/media/play.5ad41b24.svg"},152:function(e,t,n){e.exports=n.p+"static/media/exit.df5f2549.svg"},153:function(e,t,n){e.exports=n.p+"static/media/video.c93498a8.svg"},154:function(e,t,n){e.exports=n.p+"static/media/video-slash.877b2b1f.svg"},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(91),l=n.n(r),i=(n(105),n(106),n(24)),c=n(9),s=n(23),u=n.n(s),m=n(34),d=n(11),p=n(92),f=n.n(p),v=(n(108),n(10)),b=n(35);function g(){var e=Object(b.a)(["\n  mutation CreateUser(\n    $userDetails: CreateUserInput!\n  ) {\n    createUser(\n      userDetails: $userDetails\n    ) {\n      email\n      familyName\n      givenName\n      googleId\n      imageUrl\n      name\n    }\n  }\n"]);return g=function(){return e},e}function E(){var e=Object(b.a)(["\n    mutation UpdateUser(\n      $userDetails: UpdateUserInput!\n    ) {\n      updateUser(\n        userDetails: $userDetails\n      ) {\n        _id\n        name\n        email\n        bio\n        imageUrl\n        status\n      }\n    }\n  "]);return E=function(){return e},e}var h=Object(v.gql)(E()),j=Object(v.gql)(g()),O=function(){var e=Object(v.useMutation)(j),t=(Object(d.a)(e,1)[0],Object(c.f)()),n=(localStorage.getItem("loggedIn"),Object(a.useState)("")),r=Object(d.a)(n,2),l=r[0],i=r[1];return o.a.createElement("div",{className:"landing"},o.a.createElement("img",{src:f.a,alt:"Logo",className:"logo"}),o.a.createElement("div",{className:"hero-stack"},o.a.createElement("h1",null,"Fast video meetings made simple."),o.a.createElement("p",null,"Meet Swift. Fast calls. Simple."),o.a.createElement("div",{className:"spacer"}),o.a.createElement("div",{className:"btn-stack"},o.a.createElement("button",{className:"button",onClick:function(){t.push("/powderroom")}},"New"),o.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),i(""),t.push("/powderroom")}},o.a.createElement("label",null,o.a.createElement("input",{type:"text",value:l,onChange:function(e){i(e.target.value)},placeholder:"Enter Room"}))))))},N=(n(118),n(97)),w=n.n(N),U=n(51),k=n.n(U),y=function(e){var t=e.videoRef,n=o.a.useRef(null);return console.log(n.current),Object(a.useEffect)((function(){n.current.video.srcObject=t}),[t]),o.a.createElement(k.a,{ref:n})},C=n(98),x=n.n(C)()("https://fathomless-eyrie-92787.herokuapp.com",{transports:["websocket"]}),S=o.a.createContext(x),_=n(99),D=n.n(_),R=function(){var e=Object(a.useRef)(null),t=(Object(c.f)(),Object(a.useContext)(S)),n=(Object(a.useRef)(null),new w.a(void 0,{host:"peerjs-server.herokuapp.com",secure:!0,port:443})),r=[],l=Object(a.useState)(!1),i=Object(d.a)(l,2),s=(i[0],i[1],Object(a.useState)([])),u=Object(d.a)(s,2),m=u[0],p=(u[1],Object(a.useState)(!1)),f=Object(d.a)(p,2),v=(f[0],f[1],Object(a.useState)(!0)),b=Object(d.a)(v,2),g=(b[0],b[1],Object(a.useState)(!1)),E=Object(d.a)(g,2),h=(E[0],E[1],Object(a.useState)(!1)),j=Object(d.a)(h,2);j[0],j[1];return t.on("connect",(function(){console.log("socket id is ",t.id)})),n.on("open",(function(e){console.log("My peer id is: ",e),r.push(e),console.log("Users: ",r),console.log("the peer object looks like: ",n)})),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"bird-container"},o.a.createElement("img",{src:D.a,className:"bird-middle"})),o.a.createElement("div",{className:"container"},o.a.createElement(k.a,{ref:e}),console.log("My video Ref ////////////////",e),m.map((function(e){return o.a.createElement(y,{videoRef:e})}))))},A=(n(148),function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),r=t[0],l=t[1],i=Object(a.useState)(!0),s=Object(d.a)(i,2),u=s[0],m=s[1],p=Object(c.f)(),f=function(e){l(!r)},v=function(e){m(!u)};return o.a.createElement("div",{className:"pwdrcontainer"},o.a.createElement("div",{className:"pwdrnavbar"},r?o.a.createElement("button",{className:"btn-on",onClick:f},o.a.createElement("img",{src:n(150)})):o.a.createElement("button",{className:"btn-off",onClick:f},o.a.createElement("img",{src:n(149)})),o.a.createElement("button",{className:"play-on",onClick:function(){p.push("/meeting")}},o.a.createElement("img",{src:n(151)})),o.a.createElement("button",{className:"exit-on",onClick:function(){p.push("/")}},o.a.createElement("img",{src:n(152)})),u?o.a.createElement("button",{className:"btn-on",onClick:v},o.a.createElement("img",{src:n(153)})):o.a.createElement("button",{className:"btn-off",onClick:v},o.a.createElement("img",{src:n(154)}))))});function I(){var e=Object(b.a)(["\n  query {\n    getUsers {\n      _id\n      name\n      email\n      bio\n      imageUrl\n      status\n    }\n  }\n"]);return I=function(){return e},e}var F=Object(v.gql)(I());n(155);function P(){var e,t,n,a,r,l,i=Object(v.useQuery)(F),s=i.data,u=(i.loading,i.error,Object(c.f)());return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"top"}),o.a.createElement("div",{className:"middle"},o.a.createElement("div",{className:"title"},"Hello, ",null===s||void 0===s||null===(e=s.getUsers[0])||void 0===e?void 0:e.name),o.a.createElement("div",{className:"user-info"},o.a.createElement("div",{className:"profile-pic"},o.a.createElement("img",{src:null===s||void 0===s||null===(t=s.getUsers[0])||void 0===t?void 0:t.imageUrl}))),o.a.createElement("div",{className:"details"},o.a.createElement("div",null,"Name: ",null===s||void 0===s||null===(n=s.getUsers[0])||void 0===n?void 0:n.name),o.a.createElement("div",null,"Email: ",null===s||void 0===s||null===(a=s.getUsers[0])||void 0===a?void 0:a.email),o.a.createElement("div",null,null===s||void 0===s||null===(r=s.getUsers[0])||void 0===r?void 0:r.bio),o.a.createElement("div",null,null===s||void 0===s||null===(l=s.getUsers[0])||void 0===l?void 0:l.status),o.a.createElement("button",{className:"btn",onClick:function(){u.push("/userSettings")}},"Edit profile"))),o.a.createElement("div",{className:"bottom"}))}var T=n(52),W=n(63),q=(n(156),function(){var e=Object(v.useQuery)(F),t=e.data,n=(e.loading,e.error,Object(v.useMutation)(h)),r=Object(d.a)(n,1)[0],l=Object(a.useState)(null),i=Object(d.a)(l,2),c=i[0],s=i[1],p=Object(a.useState)({_id:"",name:"",email:"",bio:"",imageUrl:"",status:""}),f=Object(d.a)(p,2),b=f[0],g=f[1];Object(a.useEffect)((function(){var e,n,a,o,r,l;g({_id:null===t||void 0===t||null===(e=t.getUsers[0])||void 0===e?void 0:e._id,name:null===t||void 0===t||null===(n=t.getUsers[0])||void 0===n?void 0:n.name,email:null===t||void 0===t||null===(a=t.getUsers[0])||void 0===a?void 0:a.email,bio:null===t||void 0===t||null===(o=t.getUsers[0])||void 0===o?void 0:o.bio,imageUrl:null===t||void 0===t||null===(r=t.getUsers[0])||void 0===r?void 0:r.imageUrl,status:null===t||void 0===t||null===(l=t.getUsers[0])||void 0===l?void 0:l.status})}),[t]);var E=function(e){var t=e.currentTarget.name,n=e.currentTarget.value;g((function(e){return Object(W.a)(Object(W.a)({},e),{},Object(T.a)({},t,n))}))},j=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,a,o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={_id:b._id,name:b.name,email:b.email,bio:b.bio,status:b.status},!c){e.next=14;break}return(a=new FormData).append("file",c),a.append("upload_preset","jfoqugj1"),a.append("api_key","process.env.NODE_ENV.REACT_APP_CLOUDINARY_API_KEY"),e.next=9,fetch("https://api.cloudinary.com/v1_1/dpyiqv7ej/image/upload",{method:"POST",body:a});case 9:return o=e.sent,e.next=12,o.json();case 12:l=e.sent,n.imageUrl=l.url;case 14:r({variables:{userDetails:n}});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=t.currentTarget.files)&&n[0]&&s(n[0]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"user-settings-container"},o.a.createElement("form",{className:"form-user-settings",onSubmit:j},o.a.createElement("div",{className:"photo-section"},o.a.createElement("div",{className:"profile-photo"},o.a.createElement("img",{src:b.imageUrl,alt:"user_image"})),o.a.createElement("div",{className:"photo-upload"},o.a.createElement("h2",null,"Upload New Profile Image"),o.a.createElement("input",{name:"file",type:"file",placeholder:"Upload a new profile image",onChange:O}))),o.a.createElement("div",{className:"settings-cntnr"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{className:"field",id:"name",placeholder:b.name,name:"name",type:"text",value:b.name,onChange:E}),o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{className:"field",id:"email",placeholder:b.email,name:"email",type:"text",value:b.email,onChange:E}),o.a.createElement("label",{htmlFor:"bio"},"Bio"),o.a.createElement("input",{className:"field",id:"bio",placeholder:b.bio,name:"bio",type:"text",value:b.bio,onChange:E}),o.a.createElement("label",{htmlFor:"status"},"Status"),o.a.createElement("input",{className:"field",id:"status",placeholder:b.status,name:"status",type:"text",value:b.status,onChange:E}),o.a.createElement("button",{className:"btn",type:"submit"},"Save Changes"))))});function M(){return o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/",exact:!0,component:O}),o.a.createElement(c.a,{path:"/powderroom",component:A}),o.a.createElement(c.a,{path:"/meeting",component:R}),o.a.createElement(c.a,{path:"/main",component:L}),o.a.createElement(c.a,{path:"/userprofile",component:P}),o.a.createElement(c.a,{path:"/usersettings",component:q}))}var L=function(e){return e.socket,o.a.createElement(i.a,null,o.a.createElement(M,null))},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=new v.ApolloClient({link:new v.HttpLink({uri:"https://fathomless-eyrie-92787.herokuapp.com/graphql"}),cache:new v.InMemoryCache});l.a.render(o.a.createElement(v.ApolloProvider,{client:H},o.a.createElement(S.Consumer,null,(function(e){return o.a.createElement(L,{socket:e})}))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("http://localhost:3000",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("http://localhost:3000","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()},92:function(e,t,n){e.exports=n.p+"static/media/swift-logo-big.f3a9e075.png"},99:function(e,t,n){e.exports=n.p+"static/media/swift-logo-middle.b083729e.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.8b880651.chunk.js.map