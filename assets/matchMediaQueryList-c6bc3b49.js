const e={asset:{font:{"WorkSans-Regular":{value:"fonts/WorkSans-Regular",family:"Work Sans",weight:"400",extensions:["woff2","woff"]},"WorkSans-Medium":{value:"fonts/WorkSans-Medium",family:"Work Sans",weight:"500",extensions:["woff2","woff"]},"WorkSans-Bold":{value:"fonts/WorkSans-Bold",family:"Work Sans",weight:"700",extensions:["woff2","woff"]}},icon:{"access-time":{value:"svgs/access-time.svg"},"arrow-back":{value:"svgs/arrow-back.svg"},calendar:{value:"svgs/calendar.svg"},close:{value:"svgs/close.svg"},facebook:{value:"svgs/facebook.svg"},language:{value:"svgs/language.svg"},link:{value:"svgs/link.svg"},linkedin:{value:"svgs/linkedin.svg"},rss:{value:"svgs/rss.svg"},message:{value:"svgs/message.svg"},person:{value:"svgs/person.svg"},search:{value:"svgs/search.svg"},twitter:{value:"svgs/twitter.svg"},welcometothejungle:{value:"svgs/welcometothejungle.svg"},github:{value:"svgs/github.svg"},tuto:{value:"svgs/tuto.svg"}}},breakpoint:{xs:{value:"0",description:"no minimum width value because we are in mobile-first"},sm:{value:"571",description:"minimum width value for a small devices (tablets)"},md:{value:"1001",description:"minimum width value for a medium devices, (desktops)"},lg:{value:"1201",description:"minimum width value for a large devices (wide screen)"}},color:{primary:{azure:{value:"#3767B6"},navy:{value:"#224579"}},secondary:{lavender:{value:"#E1EAF9"},amaranth:{value:"#DD3156"},yellow:{value:"#F3C93D"}},greyscale:{"ultra-light-grey":{value:"#EDEDED"},"light-grey":{value:"#C4C4C4"},grey:{value:"#9B9B9B"},"dark-grey":{value:"#757575"},"ultra-dark-grey":{value:"#333333"},black:{value:"#000000"},white:{value:"#FFFFFF"}}},height:{full:{value:"100%"},screen:{value:"100vh"}},spacing:{0:{value:"0"},"xxs-3":{value:"4px"},"xxs-2":{value:"6px"},xxs:{value:"8px"},xs:{value:"12px"},s:{value:"16px"},m:{value:"24px"},l:{value:"32px"},xl:{value:"42px"},xxl:{value:"64px"},"xxl-2":{value:"128px"},"xxl-3":{value:"164px"}},"font-family":{base:{value:"'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"},"work-sans":{value:"'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"}},"font-size":{xxs:{value:"12px"},xs:{value:"14px"},s:{value:"16px"},m:{value:"18px"},l:{value:"20px"},xl:{value:"22px"},xxl:{value:"24px"},"xxl-2":{value:"26px"},"xxl-3":{value:"28px"}},"font-weight":{regular:{value:"400"},medium:{value:"500"},bold:{value:"700"}},typography:{heading:{base:{"line-height":{value:"1.2"},"font-weight":{value:"500"}},xl:{"font-weight":{value:"700"}}},text:{base:{"line-height":{value:"1.2"}},xs:{"line-height":{value:"1.5"}},m:{"line-height":{value:"1.5"}}}},mobile:{typography:{heading:{s:{"font-size":{value:"16px"}},m:{"font-size":{value:"20px"}},l:{"font-size":{value:"22px"}},xl:{"font-size":{value:"24px"}}},text:{xs:{"font-size":{value:"12px"},"icon-size":{value:"14px"}},s:{"font-size":{value:"14px"},"icon-size":{value:"16px"}},m:{"font-size":{value:"18px"},"icon-size":{value:"20px"}}}}},desktop:{typography:{heading:{s:{"font-size":{value:"18px"}},m:{"font-size":{value:"22px"}},l:{"font-size":{value:"26px"}},xl:{"font-size":{value:"28px"}}},text:{xs:{"font-size":{value:"14px"},"icon-size":{value:"16px"}},s:{"font-size":{value:"16px"},"icon-size":{value:"18px"}},m:{"font-size":{value:"20px"},"icon-size":{value:"22px"}}}}},"line-height":{base:{value:"1.2"},medium:{value:"1.2"},large:{value:"1.5"}},width:{full:{value:"100%"},screen:{value:"100vw"}}},p=[...Object.keys(e.color.primary),...Object.keys(e.color.secondary),...Object.keys(e.color.greyscale)],g=Object.keys(e.spacing),r=Object.keys(e.width),u=Object.keys(e.height);Object.keys(e["font-weight"]);const m=Object.keys(e.asset.icon),x=Object.keys(e.mobile.typography.heading||e.desktop.typography.heading),d=Object.keys(e.mobile.typography.text||e.desktop.typography.text),a={bg:["background-color"],color:["color"]},s={p:["padding"],pt:["padding-top"],pr:["padding-right"],pl:["padding-left"],pb:["padding-bottom"],px:["padding-left","padding-right"],py:["padding-top","padding-bottom"]},t={m:["margin"],mt:["margin-top"],mr:["margin-right"],ml:["margin-left"],mb:["margin-bottom"],mx:["margin-left","margin-right"],my:["margin-top","margin-bottom"]},i={...t,...s},l={alignItems:["align-items"],alignContent:["align-content"],justifyContent:["justify-content"],gap:["gap"],gapX:["row-gap"],gapY:["col-gap"],flexDirection:["flex-direction"],flexBasis:["flex-basis"],flexWrap:["flex-wrap"],flex:["flex"],alignSelf:["align-self"]},o={hiddenBelow:["display"],hiddenAbove:["display"]},n={display:["display"],width:["width"],height:["height"],minWidth:["min-width"],maxWidth:["max-width"],minHeight:["min-height"],maxHeight:["max-height"]},v={textAlign:["text-align"],textSize:["font-size","line-height"],fontWeight:["font-weight"],italic:["font-style"],underline:["text-decoration"],textTransform:["text-transform"]},c={...i,...l,...a,...v,...n,...o};parseInt(e.breakpoint.sm.value,10)-1,`${parseInt(e.breakpoint.sm.value,10)}`,`${parseInt(e.breakpoint.sm.value,10)}`,parseInt(e.breakpoint.md.value,10)-1,`${parseInt(e.breakpoint.md.value,10)}`,`${parseInt(e.breakpoint.md.value,10)}`,parseInt(e.breakpoint.lg.value,10)-1,`${parseInt(e.breakpoint.lg.value,10)}`,`${parseInt(e.breakpoint.lg.value,10)}`;export{d as a,o as b,a as c,v as d,g as e,l as f,p as g,x as h,m as i,u as j,c as k,n as l,t as m,s as p,i as s,e as t,r as w};
//# sourceMappingURL=matchMediaQueryList-c6bc3b49.js.map
