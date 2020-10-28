(this["webpackJsonptandem-challenge-2020"]=this["webpackJsonptandem-challenge-2020"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(1),a=r.n(n),o=r(7),i=r.n(o),s=(r(14),r(15),function(){return Object(c.jsx)("header",{children:Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsx)("h1",{children:"Dustin Kelly's Tandem Code Challenge"})})})}),l=r(6),h=r(2),u=r(8),d=function(e){var t=e.fn,r=e.text,n=e.disabled;e.className;return Object(c.jsx)("button",{disabled:n,onClick:t,className:"btn",children:r})},j=function(e){var t=e.score;return Object(c.jsx)("section",{children:Object(c.jsx)("div",{className:"scoreCard",children:Object(c.jsxs)("p",{children:["You got ",t," out of 10 Correct"]})})})},b=function(e){var t=e.data,r=Object(n.useState)(0),a=Object(h.a)(r,2),o=a[0],i=a[1],s=Object(n.useState)(0),l=Object(h.a)(s,2),u=l[0],b=l[1],m=Object(n.useState)(null),f=Object(h.a)(m,2),p=f[0],O=f[1],g=Object(n.useState)(!1),w=Object(h.a)(g,2),x=w[0],q=w[1];if(o>t.length-1)return Object(c.jsx)(j,{score:u});var v=p?Object(c.jsx)(n.Fragment,{children:Object(c.jsxs)("p",{className:"correct",children:[Object(c.jsx)("i",{class:"far fa-check-circle"})," Correct"]})}):Object(c.jsx)(n.Fragment,{children:Object(c.jsxs)("p",{className:"incorrect",children:[Object(c.jsx)("i",{class:"far fa-times-circle"}),t[o].correct]})}),y=t[o].choices.map((function(e){return Object(c.jsx)(d,{disabled:x,text:e,fn:function(e){return function(e){q(!0);var r=e.target.textContent;t[o].correct===r?(b(u+1),O(!0)):O(!1)}(e)}},e)}));return Object(c.jsxs)("div",{className:"quiz",children:[Object(c.jsx)("p",{className:"question",children:t[o].question}),Object(c.jsx)("div",{className:"choices",children:y}),x&&v,Object(c.jsx)(d,{text:"next question",disabled:!x,fn:function(){i(o+1),O(null),q(!1)}})]})},m=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),r=t[0],a=t[1],o=Object(n.useState)(!1),i=Object(h.a)(o,2),s=i[0],j=i[1],m=Object(l.a)(u),f=function(e,t){var r=new Array(t),c=e.length,n=new Array(c);for(t>c&&(t=c);t--;){var a=Math.floor(Math.random()*c);r[t]=e[a in n?n[a]:a],n[a]=--c in n?n[c]:c}return r};return s?Object(c.jsx)(b,{data:r}):Object(c.jsxs)(n.Fragment,{children:[Object(c.jsx)("h2",{children:"To get started click button below"}),Object(c.jsx)(d,{text:"Get Started",fn:function(){var e=f(m,10).map((function(e){return{question:e.question,choices:f([].concat(Object(l.a)(e.incorrect),[e.correct]),4),correct:e.correct}}));a(e),j(!0)}})]})},f=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(s,{}),Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsx)(m,{})})]})},p=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),c(e),n(e),a(e),o(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),p()},8:function(e){e.exports=JSON.parse('[{"question":"What was Tandem previous name?","incorrect":["Tandem","Burger Shack","Extraordinary Humans"],"correct":"Devmynd"},{"question":"In Shakespeare\'s play Julius Caesar, Caesar\'s last words were...","incorrect":["Iacta alea est!","Vidi, vini, vici","Aegri somnia vana"],"correct":"Et tu, Brute?"},{"question":"A group of tigers are referred to as:","incorrect":["Chowder","Pride","Destruction"],"correct":"Ambush"},{"question":"What is the top speed an average cat can travel?","incorrect":["42 mph","13 mph","9 mph"],"correct":"31 mph"},{"question":"A cat can jump to _____ times its own height:","incorrect":["3","9","7"],"correct":"5"},{"question":"What is the only letter that doesn\'t appear in a US state name?","incorrect":["M","Z","X"],"correct":"Q"},{"question":"What is the name for a cow-bison hybrid?","incorrect":["Cowson","Bicow","Mooson"],"correct":"Beefalo"},{"question":"What is the largest freshwater lake in the world?","incorrect":["Lake Baikal","Lake Michigan","Lake Victoria"],"correct":"Lake Superior"},{"question":"In a website address bar, what does WWW stand for?","incorrect":["Wild Wild West","War World Web"],"correct":"World Wide Web"},{"question":"In a game of bingo, what number is represented by the name two little ducks?","incorrect":["20","55","77"],"correct":"22"},{"question":"According to Greek mythology, who was the first woman on Earth?","incorrect":["Lilith","Eve","Hera"],"correct":"Pandora"},{"question":"In which European city would you find Orly airport?","incorrect":["London","Belgium","Munich"],"correct":"Paris"},{"question":"Where would you find the Sea of Tranquility?","incorrect":["California","Siberia","China"],"correct":"The Moon"},{"question":"Which artist painted \'Girl with a Pearl Earrin\'?","incorrect":["Van Gogh","Picasso","Da Vinci"],"correct":"Vermeer"},{"question":"What is the official name for the \'hashtag\' symbol?","incorrect":["Number sign","Hash Sign","Pound"],"correct":"Octothorpe"},{"question":"Not American at all, where is apple pie from?","incorrect":["Japan","Ethiopia","Canada"],"correct":"England"},{"question":"What is the national animal of Scotland?","incorrect":["Bear","Rabbit","Seal"],"correct":"Unicorn"},{"question":"Where in the world is the only place where Canada is *due south*","incorrect":["Alaska","Russia","Washington"],"correct":"Detroit"},{"question":"Approximately how many grapes go into a bottle of wine?","incorrect":["500","200","1000"],"correct":"700"},{"question":"How much does a US One Dollar Bill cost to make?","incorrect":["$0.25","$1","$5"],"correct":"$0.05"},{"question":"The Vatican bank has the only ATM in the world that allows users to do what?","incorrect":["Receive withdrawls in rosary beads","Vote for the Pope","Purchase indulgences"],"correct":"Perform transactions in Latin"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.dada850c.chunk.js.map