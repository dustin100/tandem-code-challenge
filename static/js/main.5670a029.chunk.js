(this["webpackJsonptandem-challenge-2020"]=this["webpackJsonptandem-challenge-2020"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),a=r.n(c),o=r(7),i=r.n(o),s=(r(14),r(15),function(){return Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsx)("h1",{children:"Dustin Kelly's Tandem Code Challenge"})})})}),l=r(6),u=r(2),h=r(8),d=function(e){var t=e.fn,r=e.text,c=e.disabled;e.className;return Object(n.jsx)("button",{disabled:c,onClick:t,className:"btn",children:r})},j=function(e){var t=e.score;e.getTenQuestion;return Object(n.jsxs)("section",{children:[Object(n.jsx)("div",{className:"scoreCard",children:Object(n.jsxs)("p",{children:["You got ",t," out of 10 Correct"]})}),Object(n.jsx)(d,{fn:function(){return window.location.reload()},text:"Back Home"})]})},b=function(e){var t=e.data,r=e.getTenQuestion,a=Object(c.useState)(0),o=Object(u.a)(a,2),i=o[0],s=o[1],l=Object(c.useState)(0),h=Object(u.a)(l,2),b=h[0],m=h[1],f=Object(c.useState)(null),p=Object(u.a)(f,2),O=p[0],g=p[1],w=Object(c.useState)(!1),x=Object(u.a)(w,2),q=x[0],v=x[1];if(i>t.length-1)return Object(n.jsx)(j,{getTenQuestion:r,score:b});var y=O?Object(n.jsx)(c.Fragment,{children:Object(n.jsxs)("p",{className:"correct",children:[Object(n.jsx)("i",{class:"far fa-check-circle"})," Correct"]})}):Object(n.jsx)(c.Fragment,{children:Object(n.jsxs)("p",{className:"incorrect",children:[Object(n.jsx)("i",{class:"far fa-times-circle"}),t[i].correct]})}),W=t[i].choices.map((function(e){return Object(n.jsx)(d,{disabled:q,text:e,fn:function(e){return function(e){v(!0);var r=e.target.textContent;t[i].correct===r?(m(b+1),g(!0)):g(!1)}(e)}},e)}));return Object(n.jsxs)("div",{className:"quiz",children:[Object(n.jsx)("p",{className:"question",children:t[i].question}),Object(n.jsx)("div",{className:"choices",children:W}),q&&y,Object(n.jsx)(d,{text:"next question",disabled:!q,fn:function(){s(i+1),g(null),v(!1)}})]})},m=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),r=t[0],a=t[1],o=Object(c.useState)(!1),i=Object(u.a)(o,2),s=i[0],j=i[1],m=Object(l.a)(h),f=function(){var e=p(m,10).map((function(e){return{question:e.question,choices:p([].concat(Object(l.a)(e.incorrect),[e.correct]),4),correct:e.correct}}));a(e),j(!0)},p=function(e,t){var r=new Array(t),n=e.length,c=new Array(n);for(t>n&&(t=n);t--;){var a=Math.floor(Math.random()*n);r[t]=e[a in c?c[a]:a],c[a]=--n in c?c[n]:n}return r};return s?Object(n.jsx)(b,{getTenQuestion:f,data:r}):Object(n.jsxs)(c.Fragment,{children:[Object(n.jsx)("h2",{children:"To get started click button below"}),Object(n.jsx)(d,{text:"Get Started",fn:f})]})},f=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(s,{}),Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsx)(m,{})})]})},p=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),c(e),a(e),o(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),p()},8:function(e){e.exports=JSON.parse('[{"question":"What was Tandem previous name?","incorrect":["Tandem","Burger Shack","Extraordinary Humans"],"correct":"Devmynd"},{"question":"In Shakespeare\'s play Julius Caesar, Caesar\'s last words were...","incorrect":["Iacta alea est!","Vidi, vini, vici","Aegri somnia vana"],"correct":"Et tu, Brute?"},{"question":"A group of tigers are referred to as:","incorrect":["Chowder","Pride","Destruction"],"correct":"Ambush"},{"question":"What is the top speed an average cat can travel?","incorrect":["42 mph","13 mph","9 mph"],"correct":"31 mph"},{"question":"A cat can jump to _____ times its own height:","incorrect":["3","9","7"],"correct":"5"},{"question":"What is the only letter that doesn\'t appear in a US state name?","incorrect":["M","Z","X"],"correct":"Q"},{"question":"What is the name for a cow-bison hybrid?","incorrect":["Cowson","Bicow","Mooson"],"correct":"Beefalo"},{"question":"What is the largest freshwater lake in the world?","incorrect":["Lake Baikal","Lake Michigan","Lake Victoria"],"correct":"Lake Superior"},{"question":"In a website address bar, what does WWW stand for?","incorrect":["Wild Wild West","War World Web"],"correct":"World Wide Web"},{"question":"In a game of bingo, what number is represented by the name two little ducks?","incorrect":["20","55","77"],"correct":"22"},{"question":"According to Greek mythology, who was the first woman on Earth?","incorrect":["Lilith","Eve","Hera"],"correct":"Pandora"},{"question":"In which European city would you find Orly airport?","incorrect":["London","Belgium","Munich"],"correct":"Paris"},{"question":"Where would you find the Sea of Tranquility?","incorrect":["California","Siberia","China"],"correct":"The Moon"},{"question":"Which artist painted \'Girl with a Pearl Earrin\'?","incorrect":["Van Gogh","Picasso","Da Vinci"],"correct":"Vermeer"},{"question":"What is the official name for the \'hashtag\' symbol?","incorrect":["Number sign","Hash Sign","Pound"],"correct":"Octothorpe"},{"question":"Not American at all, where is apple pie from?","incorrect":["Japan","Ethiopia","Canada"],"correct":"England"},{"question":"What is the national animal of Scotland?","incorrect":["Bear","Rabbit","Seal"],"correct":"Unicorn"},{"question":"Where in the world is the only place where Canada is *due south*","incorrect":["Alaska","Russia","Washington"],"correct":"Detroit"},{"question":"Approximately how many grapes go into a bottle of wine?","incorrect":["500","200","1000"],"correct":"700"},{"question":"How much does a US One Dollar Bill cost to make?","incorrect":["$0.25","$1","$5"],"correct":"$0.05"},{"question":"The Vatican bank has the only ATM in the world that allows users to do what?","incorrect":["Receive withdrawls in rosary beads","Vote for the Pope","Purchase indulgences"],"correct":"Perform transactions in Latin"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.5670a029.chunk.js.map