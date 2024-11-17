"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[252],{5235:(e,t,r)=>{r.d(t,{A:()=>a});r(5043);var n=r(579);const a=e=>{let{className:t="",children:r}=e;return(0,n.jsx)("div",{"data-testid":"component-body",className:"component-body p-10 pt-0 ".concat(t),children:r})}},1008:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(5043),a=r(9626),l=r(2311),o=r(1673),i=r(7988),s=r(579);const d=e=>{let{menuIcon:t=(0,s.jsx)(i.A,{className:"h-5 w-5"}),menuItems:r,menuLabel:a="",arrowIcon:l=""}=e;const[d,c]=(0,n.useState)(!1),[A,u]=(0,n.useState)("right"),h=(0,n.useRef)(null),g=(0,n.useRef)(null);(0,o.A)(h,(()=>{c(!1)}));return(0,n.useEffect)((()=>{if(g.current&&h.current){const e=g.current.getBoundingClientRect(),t=h.current.getBoundingClientRect();e.right+t.width>window.innerWidth?u("right"):u("left")}}),[d]),(0,s.jsxs)("div",{className:"relative","data-testid":"dropdown-menu-placeholder",children:[(0,s.jsxs)("button",{type:"button",className:"flex items-center rtl:flex-row-reverse space-x-1 text-gray-500 hover:text-gray-900",onClick:()=>{c((e=>!e))},ref:g,"aria-haspopup":"true","aria-expanded":d,"aria-label":a?"Toggle ".concat(a," dropdown"):"Toggle dropdown",children:[n.cloneElement(t,{className:"h-5 w-5 "}),l&&n.cloneElement(l,{className:"h-5 w-5"}),a&&(0,s.jsx)("span",{className:"ml-2",children:a})," "]}),(0,s.jsx)("div",{ref:h,className:"absolute top-full z-10 ".concat("right"===A?"right-0":"left-0"," mt-2 w-44 bg-white dark:bg-gray-600 semi-dark:bg-gray-500 rounded-lg shadow-md ").concat(d?"":"hidden"),role:"menu","aria-labelledby":a?"".concat(a,"-label"):void 0,children:(0,s.jsx)("ul",{className:"py-1 text-gray-700 dark:text-white semi-dark:text-gray-200",children:r.map((e=>(0,s.jsx)("li",{children:(0,s.jsx)("button",{type:"button",className:"block px-4 py-2 w-full text-left",onClick:e.onClick,"aria-label":"Select ".concat(e.label),id:e.id,children:e.label})},e.id)))})})]})},c=e=>{let{className:t="",children:r,title:n,subtitle:o,boldSubtitle:i=!1,value:c,changePercentage:A,isPositiveChange:u,menuItems:h,menuIcon:g,arrowIcon:m}=e;return(0,s.jsxs)("div",{"data-testid":"component-header",className:"component-header flex items-center justify-between px-10 py-7 ".concat(t),children:[(0,s.jsxs)("div",{className:"component-title",children:[n&&(0,s.jsx)("h5",{className:"text-lg text-gray-900 dark:text-white semi-dark:text-gray-200 ".concat(i?"font-normal":"font-semibold"),"data-testid":"title",children:n}),o&&(0,s.jsx)("span",{className:"".concat(i?"text-lg font-semibold text-gray-800 dark:text-white semi-dark:text-gray-300":"text-sm font-normal text-gray-500 dark:text-gray-500 semi-dark:text-gray-400"),"data-testid":"subtitle",children:o})]}),r,c||A?(0,s.jsxs)("div",{className:"flex items-center mt-2",children:[c&&(0,s.jsx)("h5",{className:"text-gray-800 dark:text-gray-100 semi-dark:text-gray-200 mr-4","data-testid":"value",children:c}),A&&(0,s.jsxs)("span",{className:"".concat(u?"bg-green-500 dark:bg-gray-500 text-green-600 dark:text-green-100":"bg-red-100 dark:bg-red-200 text-red-600 dark:text-red-100"," px-2 py-1 rounded flex items-center"),"data-testid":"change-percentage",children:[u?(0,s.jsx)(a.A,{className:"h-3 w-3","data-testid":"arrow-up-icon"}):(0,s.jsx)(l.A,{className:"h-3 w-3","data-testid":"arrow-down-icon"}),(0,s.jsx)("span",{className:"ml-1 text-sm",children:A})]})]}):h&&(0,s.jsx)(d,{menuItems:h,menuIcon:g,arrowIcon:m})]})}},8554:(e,t,r)=>{r.d(t,{A:()=>a});r(5043);var n=r(579);const a=e=>{let{className:t="",children:r}=e;return(0,n.jsx)("div",{"data-testid":"component-wrapper",className:"component-wrapper col-span-12 break-inside-avoid bg-component-light dark:bg-gray-600 semi-dark:bg-gray-500 mb-7 pb-1 ".concat(t),children:(0,n.jsx)("div",{"data-testid":"inner-wrapper",className:"bg-white dark:bg-gray-700 semi-dark:bg-gray-600 rounded-lg h-full",children:r})})}},8617:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});r(5043);var n=r(566),a=r(7227),l=r(6738),o=r(579);const i=()=>(0,o.jsx)(n.A,{pageTitle:"Tables",children:(0,o.jsxs)(a.A,{className:"content-wrapper",children:[(0,o.jsx)(l.bp,{}),(0,o.jsx)(l.hH,{}),(0,o.jsx)(l.pz,{}),(0,o.jsx)(l.RW,{}),(0,o.jsx)(l.QV,{}),(0,o.jsx)(l.zp,{}),(0,o.jsx)(l.x1,{})]})})},1673:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(5043);const a=(e,t)=>{(0,n.useEffect)((()=>{const r=r=>{e.current&&!e.current.contains(r.target)&&t()};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}}),[e,t])}},4974:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABGCAMAAABL7mLxAAAA9lBMVEUAAAD/cWLxTh7/cGAZvP4Kz4IKz4PxTR0Yu/wYuv+fWP8Iz4AJz4PyTR0avP6hWP8Kz4IavP8ZvP4au/2fWv/vUBwUu/+hWv8avP4Jz4PyTh4avP4ZvP7/c2HxTh7/cmL/cmIJz4MZvPwIz4P/cmGiWf//cmKbXvuhWf+iWf8au/0avf8ZvP+iWP8Kz4PvTBwFz4X3YD+fYP8Qz4COae45seo6segKz4LzTh7/cWGiWf9Er+IJz4MLzYH/cWEJz4TxTR6hWv//c2NlosoIz4L/c2OfWP//c2Abuvr/cGD/cmLyTh6iWf8Kz4MavP6sV+OPZ+82suqxDebDAAAASnRSTlMAgIAg34DvYEAgICC/v6+goJ+QYDAgEO/v39/Pv7+gn3BvUEDv39+/kICAf29gUEAwMBAQ7+/fz8+/r6+vkJBwcG9vYGBfQEAwEGYZuJoAAAGhSURBVFjD7dRnT8JQFIDhA3Rh2cgGZYooIoh770GH+v//jIQQOk56BzcaSXi+nzent72Ftd8xUsOOkONxBCzUuOE2cdt5AZrcdBwHHLUIZb5s4IB3CXLh3EABvxrx+Q0cQOqEQJkl0IZAhwY2wd4CA2G2wG1gYIstsP2PA/fkAP095tgChG8xzhKoAdeHQFwAC9MDIQCuAp6nUMukQLsOVDk1HhS4CH0Ag83e5acjMvN0dfp9Uu1HgW6ja3rAlFa159LUxGvBRIF92yE1KeubfvN5h0bcv4MDWdurmCcEkiYOSLZPhrCAiTkLMKxwYGIJG8kGBnZNrIIDGcIRYDaWFg5wPYLE8Qjih3hUwIEmDhDuQw8H8hLxCOgrgH8FKcp7mfa8gXfKdeyggKdQ1Kg/lCQKgLY4hwTTP+mhe/y1ADNaplqpJPp5YDCWY5YL8GooliUSkC0f7nmxgG4JBmKCAd0SDDREA6nVD9zg+TOuQAsHUsBFQYEWX+DOP38NIPQpKjpvQC955gfATXftUBrCMp7nSyjyGJY0HMhyowVrf+YHdeviVXeWdjEAAAAASUVORK5CYII="},1959:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAMAAAB6xg5AAAAAolBMVEUAAAD/Lh//LSD/LSD/LSD/KR//KSb/LSD/LB//LB7/LB//LSD/LR//MjL/LSD/LCD/LSD/LR//KCT/LCD/LB//LR//LSD/LB//LB//LB//LR//LSD/Lxz/LSD/LCD/LR//LR//LR7/JBz/LB//LR//LB//LSD/Kh7/LCD/LSD/LSD/LCD/LSD/LSD/LR//LR//LiD/LB//LSH/LB//LB3/LSB/FEmsAAAANXRSTlMAIJ/fmRkMp4wR7bv8BHz4K2cV1suTh4FLQPXxI8O/oj05D9u3Y0Qc6rJgWDHkclTPdmyrCnx+31AAAAKbSURBVEjH5ZbZkqJAEEUTaBUQ2WQX9wV3e7v//2tTyBjVFONMQc9bnxeDEA5kRuTNov9OMaLv4EfQEurOdY+xg4FC3UjX2J9ImQNxQe3Jh8jiPjHOY2getcSIMnz4j6uthvWS2nDcY7ogzmfoQFWowfviSfOBGdW5AWqjSQEwZ9omCgDtSJziBZkocDeYxANY9upPAtWbYJM/rm0Tw6QuWEXZ/e03rXqVKHgh/8VCqBBjp2G8o15N8G5i+rutb+zvc1NQfePFo/MQ5tsnVQJe/H7L71bBOtwUME4aTCdTDaKa4AOTqFZ4PoPpNQWMUVx9Xk0wgjggfRsYioKKPnRqCkwLhy/fnFygtROo5YDoPbqzmMK0yWonYI+tqwHxQyD0qbWA4bEBSW0TsyVRJwF7uQVoN6KOAoaL6Yq+IzAwoB8pMObQPEFghJAV9O0JhmyA06+CNxMzV06QrMtsUCKLbYuHYBfgkhDJCJZsbO3qjjLLjFLgDjGx+yQjOOgOwh7dqbLsikOU3cNEQpADQqEsyxhlsskIkldoJ6qztbA/EskIchaMsRDfBSseA5IR+JGDj564+xxsznICz0SQijvNxGtKhoxg89rczem4DHySE8CJDGHxb2DFBskJRhoui3rxuolDTiQpoEJY7O973hAZASMfwNR9HuHbEckJODsW4Vv26w6QlcVLCzjHckHHEwwKIjlBIAxIP87wOPVwbs8EIxVOJIyoiwPVWbKGJPSE9F72Ax4oHH+OLFzRc7YaguUTQZVsG5f+iqJb/AwmCJKyqfRPWG45135TUCWbFCeNxYgg8HWUySaLzVrhCrHOkk0OfgYrKgFPtlbkAczrqBS4PNnacawiXHeg9qgTn7YDRrCgzih8pXblLFX8L4MeXoWXpbP6AAAAAElFTkSuQmCC"},4553:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAMAAAB6xg5AAAAArlBMVEUAAABh2vxh2vxl3P1h2vth2vth2vth2vth2vxh2vth3P5j2vpj7/th2/th2vxh2vxh2vtg2fth2/5e2f1h2vxh2vtg2vtg2/9h2vxh2vth2vth2vxh2vth2vth2/xh2v1h2vth2vxg2v1h5v9h2/th2vxh2vtg2vth2Pph2/tg2vth2vth2/lg2vth2vxg3fxh2vth2vxh2vtg2/xh2vtg2vth2vti2/xg2vph2vvniZXoAAAAOXRSTlMA8+gK+uGAaffdHxEEifDtkXUXDXltWRT8oFLktrFkOrxfIwfZmo19G9CrQCjVljLLx3FHxKWFNi7egCFuAAAEO0lEQVRIx61X2ZaiMBAlsiiIgOKCG9IK7rv26P3/H5skBAl0y/ScmfvgISFV1pK6VSj/Hc8kNuNt3y/vd8JpbB4860/yKwcc41+dgvjQBYdTr5ZvA3BNfpjkR+02V1szCYB+lbzlAGFTUR/LGoCtMGJ+Z2rbe1UZGAF0v0JBC1ilT+pSA/QnexxRZcQQYkOgW6FgA9LMnncxlftQlB4BNvtsdw9M3suvNWzz1WALoGcAaC3y3TNq6lsFM8AoeYQAqNvS3hHa+1SOgN6XpDT6xTwDp7cK+kAxzVdQfBS2usCs0oKSQg1wdz+2YAe0peXDoQpbgD6XNpdAvixjD7SkW2WypToEDoN8d8oy/Q5NV05yBExpxtQ74OW7B5iVF8l9PRuA2eGW6FJomhqmFQo+hYP+o29ogHk5U1zGwHg1OvHLfGNuvYdBX9eTqIbvEJhREiaV5Tg4ooQGIQ2U0O28ke5FgSCNzecU0GcdNWUDf70LgM/tgQitUah+ZYLjGCm82UCxN6U72QaL3WC3RYpxq2jGYKkxzfd6N71KXZRi3bwAYUoHvd6Z09NSKtFbzHaMJy1oFwf6O0Zjn78W0Y8pVdVgUrnT0gFdP18lo1Hx6yJjnBv7WaWW1ZPjR+qvx2zrZ0lcX0nOmj0AQyuvn+TRgM5d/NBBod84MdZA1pO8kqwIaIzYEz2u5SVk63AjUcIhUmgjwS6Rhkt+cgU47NpRrUaJQ3BmZnfGEDj4jGbpspgbD0g4D24UCfMX99fxwihbj2VOV3XUfBbebrkeLgthcwbu4kAHluUusKcK6GsZw58r8JgCi+D+xYVR2YUsW3qz5IJKKaYYxF88akohiObitQyLBhxZM6BpzKNgm3AiQSBhINK4E3Q8IYjyk9RF1+KmslKzcmJOnihcpHgk+m7NmuScvp8CpC+Yml3leicL4U7xssw02VVuZi9+sbB46QvD5Z1TYGfyYtrTSBPmv0WL6fml65m+ohIWD/vBi2kzk6r16AII7qFB/yeltu1CEucE0U/jFrYvGgCyKrL73MuI8DhrKou7KAcpN5Fid3bDLC85oeRWXO8aOAinNPe0Vm3+7+r65hQobRq+6S1Wq0zE35JqxYxzBYz6MNIDfAd9egwT5tt7DIE9d+fRZ/PeZjqh2MZUtt0/qaL/epWtbSzHLV7z+OrSvy6CqtbmO1JztSfA1qbW3IFEbq6xXdXevWJ792zm1llq71uQQdWAIZPLzEHQo57UigNGMP/5iMMTT2b/NmQ1Rn8/ZOWnBYdIMKosmBVj4FP/G+B0kyNBYFWNup9Sxx0CQdsA4EmVeakade0ziP8yJwbcUdo5L89XbiuHbWX5moCafNx/8MbMx31hxJGF6T0ox5Orr/hPowFgkn1wRADGBi2GwQqsGVUgBOCYnFtc+ZOnkX7yOHx0rkRXlH/NUwvh9VxwuGX532O/4OOipV+4AAAAAElFTkSuQmCC"},4570:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAMAAAB6xg5AAAABC1BMVEUAAABBuIMzS15BuIM+uoc2o3VBuII0SV5BuINBuINAuINBuINBuYNAuINCuII9uoVBt4NAuYNBuIM0TF9AuINAuIJBuINBuINBuINBuINBuINAt4RBuYQ/t4NAuYNBuYQ+uYNCtoQxTWNDtYFBtoY0SV5Bt4I0UWFAsIE0Sl40S14zS15AuYRAuYNBuIIzTmA+uYJAuIMzSWA5Ql80SV0zS181Sl5AuINBuoNAuII0TF41S141TWBAuoQ0S2JBuIM0SV41UmFAs4E6fG84amlBtoI8j3U7hXI/pXw9lnc1W2Q2WGM0Sl5AsIBArX8/qX4+oXs9nHo5dm03ZWc0Sl8/q385cWs3YWY0Tl/G5jugAAAAP3RSTlMAu772CQT75eKzlYrOSjwdDsClhGfx7ufe1qt1a1pRMCsmHxoT7tm+vK6lnJpwVlRBIhYN+8zBvYF7bFw1NCzLCnNbAAACNElEQVRIx6XW6VLiQBSG4Y+BqIAI4grIIuC+jTr7doIIbrjijN7/lYyFyPlCJ4TE5x8HUkX1W90dvFsyojY3PgzswGFHv9nYjKhdlCZEndnqAOTAVk0hKSAu6uRKfzcJdTyp88sTUXEAq1EaXNhqDgNzNG6LilbwYpcmrS79hSP0VekPdFuiEr2vY0s0unvU326jb1tnj+eipuromRfyYKtf6PlDo39CVvDKytHwtqG//oKezzpp3IjK4c1Hr5Q/8OInDc6EzOCNlafx9SWt4zFwRCt4xQnzUCNScsLOhaiJNEhSyKk+slatrumnUyFJsMwir6OttrYo4S0njMGh6JXyk8cmmIeTNcvrqClJ4y9vAgtDfotbStZ2SciyQjSlJhSShSnNKe9twx3vwhpc7Lmk9Ej4HW4yy6LOG0MryLtw2YKrfSFNfdhIuA8PESENmzR4E0TgpSyk7ZUwWoanhJAnff6J5wl4Sy9yyufBLuSESzWMUDBSGufYHkbJTIu66a/j8zUN1zMYKWWkNM4xH86LyriKZuGnvMCn23DChVX4SgrpGueYv8wUb4lO557PsRrGsCLkoWlcRf4cKfkcm45hLDNCAiRUeXGVxbgONSWJHkL5pzR9w/himpKvogCKYihCBUvJm8Afv3OwiRQCyopDAkHVFx0J0wisIKSA4GI54yoKqKTvpCWEYX3VhOFU+ilbFYSU0ITh1KO9qyiN0Ob1fSyc2LqeY+GkWpLCe1jxOEb7DxYalN04u1Q3AAAAAElFTkSuQmCC"},2311:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"}))}const l=n.forwardRef(a)},5442:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))}const l=n.forwardRef(a)},6287:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))}const l=n.forwardRef(a)},9626:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"}))}const l=n.forwardRef(a)},9265:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const l=n.forwardRef(a)},7988:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))}const l=n.forwardRef(a)},7656:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"}),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"}))}const l=n.forwardRef(a)},6940:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"}))}const l=n.forwardRef(a)},2013:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"}))}const l=n.forwardRef(a)},1252:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))}const l=n.forwardRef(a)},7449:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const l=n.forwardRef(a)},8895:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"}))}const l=n.forwardRef(a)},6838:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"}))}const l=n.forwardRef(a)},8716:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}const l=n.forwardRef(a)},6009:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const l=n.forwardRef(a)},5590:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"}))}const l=n.forwardRef(a)},7591:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);function a(e,t){let{title:r,titleId:a,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const l=n.forwardRef(a)}}]);
//# sourceMappingURL=252.17a6790c.chunk.js.map