(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2P27":function(e,t,o){"use strict";o("C8Qj");var n=o("vOnD"),i=o("X7BR"),r=n.c.h1.withConfig({displayName:"HomepageTitle",componentId:"bzpxqw-0"})(["font-weight:bold;margin-bottom:-20px;font-size:",";letter-spacing:2px;text-transform:uppercase;color:var(--colour-highlight);@media (min-width:","){margin-bottom:25px;}"],i.f.small,i.e.small);t.a=r},RAwU:function(e,t,o){"use strict";var n=o("q1tI"),i=o.n(n),r=o("vOnD"),a=o("X7BR"),l=r.c.div.withConfig({displayName:"BlogpostLink__Container",componentId:"jc4htr-0"})(["display:flex;flex-direction:column;width:100%;max-width:680px;min-height:200px;h1{font-size:",";transition:color "," ease;&:hover{color:var(--colour-highlight);}}p{margin-top:10px;margin-bottom:10px;}"],a.f.medium,a.a);t.a=function(e){var t=e.title,o=e.date,n=e.description,r=e.href;return i.a.createElement(l,null,i.a.createElement("a",{href:r},i.a.createElement("h1",null,t)),i.a.createElement("p",null,o),i.a.createElement("p",null,n))}},RXBc:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),i=o.n(n),r=o("yBb5"),a=o("vrFN"),l=(o("C8Qj"),o("VyMS")),d=o("RAwU"),s=o("vOnD"),c=o("X7BR"),p=o("2P27"),m=s.c.section.withConfig({displayName:"BlogListing__BlogListingContainer",componentId:"sc-1xsnrpz-0"})(["display:grid;grid-row-gap:60px;grid-template-rows:auto;justify-content:start;align-content:start;@media (min-width:","){grid-row-gap:15px;}"],c.e.small),u=s.c.a.withConfig({displayName:"BlogListing__ViewAllPostsLink",componentId:"sc-1xsnrpz-1"})(["text-align:center;display:flex;justify-content:center;align-items:center;width:120px;height:40px;border:1.5px solid var(--colour-text-body);border-radius:3px;transition-property:border-color,color;transition-duration:",";transition-timing-function:ease;font-weight:bold;color:var(--colour-text-body);&:hover{color:var(--colour-highlight);border-color:var(--colour-highlight);}"],c.a),g=function(){var e=l.data,t=e.allMdx.totalCount,o=e.allMdx.edges.filter((function(e){return!!e.node.frontmatter.date&&!e.node.frontmatter.isHidden})).map((function(e){return i.a.createElement(d.a,{key:e.node.id,title:e.node.frontmatter.title,date:e.node.frontmatter.date,description:e.node.frontmatter.description,href:e.node.frontmatter.path})}));return i.a.createElement(m,null,i.a.createElement(p.a,null,"Recent Blogposts"),o,t>4&&i.a.createElement(u,{href:"/blog"},"View all posts"))},h=o("YDE5"),f=(o("pJf4"),o("bKpH")),b=s.c.p.withConfig({displayName:"ProjectStyles__ProjectTechnology",componentId:"qfkdox-0"})(["margin-right:15px;font-size:var(--fontsize-body);span{display:inline-block;width:10px;height:10px;border-radius:25px;background-color:",";}"],(function(e){return e.colour})),y=s.c.div.withConfig({displayName:"ProjectStyles__ProjectColouredBorder",componentId:"qfkdox-1"})(["position:relative;padding:3px;width:100%;max-width:450px;border-radius:3px;background:",";"],(function(e){return"linear-gradient(to right, "+e.gradient.start+", "+e.gradient.end+")"})),x=s.c.div.withConfig({displayName:"ProjectStyles__ProjectContent",componentId:"qfkdox-2"})(["display:grid;grid-template-rows:1fr 1fr 1fr 1fr;grid-row-gap:5px;height:100%;max-height:230px;background-color:var(--colour-background);transition:background-color 0.2s ease-out;padding:20px 25px 25px 10px;@media (max-width:","){padding:20px 15px 20px 10px;}h1{font-weight:500;font-size:",";}p{font-size:var(--fontsize-body);color:var(--colour-text-body);}"],c.e.medium,c.f.small),w=s.c.div.withConfig({displayName:"ProjectStyles__ProjectTechnologies",componentId:"qfkdox-3"})(["display:flex;flex-direction:row;font-size:var(--bodyFontSize);"]),v=s.c.div.withConfig({displayName:"ProjectStyles__ProjectLinks",componentId:"qfkdox-4"})(["display:flex;flex-direction:row;font-size:",";a{margin-right:15px;display:flex;flex-direction:row;align-items:center;color:var(--colour-text-body);&:hover{color:var(--colour-highlight);svg{fill:var(--colour-highlight);}}}"],c.d.medium),k=function(e){var t=e.colour,o=e.name;return i.a.createElement(b,{colour:t},i.a.createElement("span",null)," ",o)},E=function(e){var t=e.title,o=e.description,n=e.technologies,r=e.gradient,a=e.githubLink,l=e.demoLink;return i.a.createElement(y,{gradient:r},i.a.createElement(x,null,i.a.createElement("h1",null,t),i.a.createElement("p",null,o),i.a.createElement(w,null,n.map((function(e){var o=e.colour,n=e.name;return i.a.createElement(k,{key:t+o+n,colour:o,name:n})}))),i.a.createElement(v,null,i.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(f.b,{size:"24"}),"Github"),""!==l&&i.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(f.a,{size:"24"}),"Live Demo"))))},j=s.c.section.withConfig({displayName:"ProjectListing__ProjectListingContainer",componentId:"hpvkzj-0"})(["display:grid;grid-template-rows:auto;grid-row-gap:60px;justify-content:end;align-content:start;@media (min-width:","){grid-row-gap:25px;}"],c.e.small),C=function(){var e=h.data.allProjectsJson.edges;return i.a.createElement(j,null,i.a.createElement(p.a,null,"Projects"),e.map((function(e){var t=e.node,o=t.order,n=t.title,r=t.description,a=t.technologies,l=t.gradient,d=t.githubLink,s=t.demoLink;return i.a.createElement(E,{key:o+n,title:n,description:r,technologies:a,gradient:l,githubLink:d,demoLink:s})})))},I=s.c.div.withConfig({displayName:"pages__Container",componentId:"sc-10gmczo-0"})(["@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){display:flex;}display:grid;justify-content:center;grid-template-columns:1fr;justify-items:start;grid-template-rows:auto;grid-column-gap:90px;grid-row-gap:80px;@media (min-width:","){grid-template-columns:2.5fr 1fr;grid-template-rows:auto;}"],c.e.large);t.default=function(){return i.a.createElement(r.b,null,i.a.createElement(a.a,{lang:"en",image:"/me.jpg",description:"Josh Jackson - @Pjaerr"}),i.a.createElement(I,null,i.a.createElement(g,null),i.a.createElement(C,null)))}},VyMS:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"totalCount":5,"edges":[{"node":{"id":"1a8c6cf5-e5e1-5419-b2cd-881f57b394a7","frontmatter":{"isHidden":false,"date":"August 23, 2020","path":"/blog/types-for-javascript-without-typescript","title":"Types for JavaScript without TypeScript","description":"How to have types in JavaScript without TypeScript by using JSDOC comments - defining typedefs in a separate file and using them throughout your codebase."}}},{"node":{"id":"c66d60ac-50c6-55ac-a547-e1057b9ff3d3","frontmatter":{"isHidden":false,"date":"May 29, 2020","path":"/blog/introduction-to-websockets","title":"Introduction to Websockets","description":"In this blogpost I will be covering the basics of websockets by creating a website using HTML, CSS, JavaScript and Node.js that allows users to paint on a canvas with other users in realtime."}}},{"node":{"id":"c71607b4-a8a5-588b-9bf6-36788e082969","frontmatter":{"isHidden":false,"date":"February 22, 2020","path":"/blog/building-desktop-app-svelte-electron","title":"Building a Desktop App using Svelte and Electron","description":"In this blogpost I show you how easy it is to build a basic markdown editor for desktop using Svelte and Electron."}}},{"node":{"id":"63bb730a-d9bf-5fe1-aec1-39b2d0a0f392","frontmatter":{"isHidden":false,"date":"February 05, 2020","path":"/blog/10-book-goal","title":"10 Book Goal - Forming a Reading Habit","description":"On the 25th of March 2019 I decided that by the same day next year I will aim to have read 10 books from start to finish. I completed this goal on the 29th of January 2020 and this blog post showcases the books I read."}}}]}}}')},YDE5:function(e){e.exports=JSON.parse('{"data":{"allProjectsJson":{"edges":[{"node":{"order":0,"title":"Findr","description":"A Tinder-like web app but for things to do nearby using the Foursquare API.","technologies":[{"colour":"#61DAFB","name":"React"},{"colour":"#43853D","name":"Node.js"}],"gradient":{"start":"#FF9472","end":"#F2709C"},"githubLink":"https://github.com/Pjaerr/Findr","demoLink":"https://findr-rebuild.netlify.app/"}},{"node":{"order":1,"title":"Isolation Run","description":"Use your phone\'s accelerometer to only play a video whilst you\'re running.","technologies":[{"colour":"#ff3e00","name":"Svelte"},{"colour":"#43853D","name":"Node.js"},{"colour":"#29abe2","name":"WebSockets"}],"gradient":{"start":"#F6D365","end":"#FDA085"},"githubLink":"https://github.com/Pjaerr/Isolation-Run","demoLink":"https://isolation-run.herokuapp.com/"}},{"node":{"order":2,"title":"Pub Name Generator","description":"Generates random pub names using a local words list","technologies":[{"colour":"#e34c26","name":"HTML"},{"colour":"#f1e05a","name":"JavaScript"},{"colour":"#563d7c","name":"CSS"}],"gradient":{"start":"#8EC5FC","end":"#E0C3FC"},"githubLink":"https://github.com/Pjaerr/Pub-Name-Generator","demoLink":"https://pjaerr.github.io/Pub-Name-Generator/"}},{"node":{"order":3,"title":"Github Issue Comments Component","description":"A React component that uses a Github issue as a no-backend comment system for blogs.","technologies":[{"colour":"#61DAFB","name":"React"}],"gradient":{"start":"#02AABD","end":"#00CDAC"},"githubLink":"https://github.com/Pjaerr/React-Github-Issue-Comments-Component","demoLink":""}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-5160086cb448909ff2d7.js.map