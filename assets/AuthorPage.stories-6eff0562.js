import{R as p}from"./index-76fb7be0.js";import{F as m,c as o,T as a,I as y,k as w,D as _,i as j,u as v}from"./Blockquote-cdfe842f.js";import"./SyntaxHighlighter-e13f7b64.js";import N from"./NewsletterCard.stories-1336b25e.js";import C,{WithPagination as I}from"./PostCardList.stories-b4258bb6.js";import{L as k}from"./LayoutTemplateDecorator-80e1f6c3.js";import{j as e}from"./jsx-runtime-ffb262ed.js";import{L}from"./LayoutContentWithSidebar-6457a958.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./index-8d47fad6.js";import"./matchMediaQueryList-c2e31f26.js";import"./Pagination.stories-6ac8afdc.js";import"./LayoutTemplate.stories-6dfcaa2a.js";import"./Footer.stories-3a8c30d1.js";import"./Header.stories-519f9b7c.js";import"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./Autocomplete.stories-c64bda7a.js";const n=({author:t,emptyAvatarImageUrl:u,title:g,postCardList:x,newsletterCard:h})=>e.jsx(L,{className:"author-page",content:e.jsxs(e.Fragment,{children:[e.jsxs(m,{flexDirection:{xs:"column",md:"row"},justifyContent:"center",alignItems:"center",textAlign:{xs:"center",md:"left"},children:[e.jsx("img",{src:t.avatarImageUrl??u,alt:t.name,className:t.avatarImageUrl?"author-page__avatar-img":"author-page__empty-avatar-img"}),e.jsxs(o,{mt:"s",ml:"s",children:[e.jsx(a,{size:"m",fontWeight:"medium",color:"info",children:t.name}),e.jsx(o,{dangerouslySetInnerHTML:{__html:t.content}}),t.socialNetworks&&e.jsx(m,{flexDirection:{xs:"column",sm:"row"},mt:"s",alignItems:"center",justifyContent:{xs:"center",md:"start"},className:"author-page__social_networks",children:t.socialNetworks.map((r,f)=>{var i;return e.jsxs(p.Fragment,{children:[e.jsxs(a,{children:[e.jsx(y,{name:r.name,size:"24px"})," ",e.jsx(w,{href:r.url,target:"_blank",children:r.username})]}),f!==(((i=t.socialNetworks)==null?void 0:i.length)??0)-1&&e.jsx(a,{as:"span",mx:"xxs",children:"•"})]},r.name)})})]})]}),e.jsx(_,{className:"author-page__divider"}),e.jsx(a,{size:"m",fontWeight:"medium",children:g}),x]}),sidebar:e.jsx(j,{...h})});try{n.displayName="AuthorPage",n.__docgenInfo={description:"",displayName:"AuthorPage",props:{author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"{ username: string; name: string; avatarImageUrl?: string | undefined; content: string; socialNetworks?: { name: SocialNetworkName; url: string; username: string; }[] | undefined; }"}},emptyAvatarImageUrl:{defaultValue:null,description:"",name:"emptyAvatarImageUrl",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},postCardList:{defaultValue:null,description:"",name:"postCardList",required:!0,type:{name:"ReactNode"}},newsletterCard:{defaultValue:null,description:"",name:"newsletterCard",required:!0,type:{name:"NewsletterCardProps"}}}}}catch{}const G={component:n,args:{author:{username:"jdoe",name:"John Doe",content:"Astronaute John Doe @ ElevenLabs_🚀",socialNetworks:[{name:"github",url:"https://github.com/mytwitter/",username:"mygithub"},{name:"twitter",url:"https://twitter.com/mytwitter/",username:"mytwitter"},{name:"linkedin",url:"https://www.linkedin.com/in/mylinkedin/",username:"mylinkedin"}]},emptyAvatarImageUrl:"/imgs/astronaut.png",title:"Article de l'auteur",postCardList:p.createElement(v,{...C.args,...I.args}),newsletterCard:N.args},parameters:{layout:"full",viewport:{defaultViewport:"extraSmallScreen"}},decorators:[k]},s={};var l,d,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const K=["Overview"];export{s as Overview,K as __namedExportsOrder,G as default};
