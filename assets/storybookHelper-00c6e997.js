import{t as a}from"./matchMediaQueryList-49454446.js";import{v as r}from"./Blockquote-39da2321.js";const v={typography:{"heading-markup":{s:{"font-size":{value:"24px"}},m:{"font-size":{value:"26px"}},l:{"font-size":{value:"28px"}},xl:{"font-size":{value:"28px"}}},heading:{s:{"font-size":{value:"24px"}},m:{"font-size":{value:"32px"}},l:{"font-size":{value:"40px"}},xl:{"font-size":{value:"64px"},"letter-spacing":{value:"3px"}}},text:{xs:{"font-size":{value:"14px"},"icon-size":{value:"18"}},s:{"font-size":{value:"16px"},"icon-size":{value:"18"}},m:{"font-size":{value:"20px"},"icon-size":{value:"22"}}},base:{"letter-spacing":{value:"2px"}}}},c=(e,s,t)=>{const o=l=>String.prototype.split.call(s,l).filter(Boolean).reduce((n,u)=>n!=null?n[u]:n,e),i=o(/[,[\]]+?/)||o(/[,.[\]]+?/);return i===void 0||i===e?t:i},f=e=>`https://developer.mozilla.org/en-US/docs/Web/CSS/${e}`,p=e=>{const s=[];let o=`**CSS Properties**: ${e.cssProperties.map(i=>r(i)).map(i=>` [${i}](${f(i)})`).join(", ")}`;return e.cssValues&&(o+=` \`(${e.cssValues.join(" | ")})\``),s.push(o),s.join("<br />")},g=e=>Object.entries(e.props).reduce((s,[t,o])=>{var i,l,n;return s[t]={description:p({cssProperties:o}),table:{category:e.category}},e.subCategory&&(s[t].table.subcategory=e.subCategory),e.controlType&&(s[t].control=(i=e.controlType)==null?void 0:i[t]),e.options&&(Array.isArray(e.options)?s[t].options=e.options:(l=e.options)!=null&&l[t]&&(s[t].options=e.options[t]),(n=s[t])!=null&&n.control||(s[t].control="select")),s},{}),z=e=>c(e.isDesktop?v:a,`${e.path}.${e.tokenName}.${e.propertyCSS}.value`)||c(a,`${e.path}.${e.tokenName}.${e.propertyCSS}.value`)||c(a,`${e.path}.base.${e.propertyCSS}.value`);export{z as a,f as b,g as c,c as g};
