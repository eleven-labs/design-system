import{a as w}from"./chunk-WFFRPTHA-a68c42c5.js";import a,{WithResult as A,WithNoResult as v}from"./Autocomplete.stories-53fe0224.js";import{v as S}from"./Blockquote-a0405072.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./SyntaxHighlighter-645ec89b.js";import"./extends-98964cd2.js";import"./index-8d47fad6.js";import"./matchMediaQueryList-161f92c8.js";const W={title:"Templates/LayoutTemplate/Header",component:S,args:{homeLink:{href:"#"},categories:[{label:"Tous les articles",href:"#"},{label:"Javascript",href:"#"},{label:"PHP",href:"#"},{label:"Agile",href:"#"},{label:"Architecture",href:"#"},{label:"Bonnes pratiques",href:"#"}],hasTutorial:!0,tutorialLink:{label:"Tutoriels",href:"#"},contactLink:{label:"Nous contacter",href:"#"},autocomplete:a.args,onToggleMenu:w("toggleMenu")},parameters:{layout:"full",viewport:{defaultViewport:"extraSmallScreen"}}},x=W,e={},t={args:{menuIsOpen:!0}},r={args:{autocomplete:{...a.args,...A.args}},parameters:{viewport:{defaultViewport:"full"}}},o={args:{autocomplete:{...a.args,...v.args}},parameters:{viewport:{defaultViewport:"full"}}};var s,l,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var n,u,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    menuIsOpen: true
  }
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    autocomplete: ({
      ...AutocompleteStories.default.args,
      ...AutocompleteStories.WithResult.args
    } as HeaderProps['autocomplete'])
  },
  parameters: {
    viewport: {
      defaultViewport: 'full'
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,f,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    autocomplete: ({
      ...AutocompleteStories.default.args,
      ...AutocompleteStories.WithNoResult.args
    } as HeaderProps['autocomplete'])
  },
  parameters: {
    viewport: {
      defaultViewport: 'full'
    }
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const y=["Overview","WithMenuIsOpen","WithAutocompleteIsOpen","WithAutocompleteAndResultNotFound"];export{e as Overview,o as WithAutocompleteAndResultNotFound,r as WithAutocompleteIsOpen,t as WithMenuIsOpen,y as __namedExportsOrder,x as default};
