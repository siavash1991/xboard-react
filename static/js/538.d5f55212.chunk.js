"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[538],{2688:(e,r,a)=>{a.d(r,{A:()=>t});a(5043);const t=a.p+"static/media/logo.4204bee011e84de7f560d5e5286f748c.svg"},1790:(e,r,a)=>{a.d(r,{Sd:()=>s,Su:()=>o,aE:()=>n});var t=a(899);const s=t.Ik({username:t.Yj().required("Username is required").transform((e=>null===e||void 0===e?void 0:e.toLowerCase())).matches(/^[a-zA-Z][a-zA-Z0-9]*$/,"Username must start with a letter and can only contain letters and numbers"),email:t.Yj().email().required("Email is required").matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,"Invalid email format"),password:t.Yj().required("Password is required").min(8,"Password must be at least 8 characters long").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),confirmPassword:t.Yj().required("Confirm Password is required").oneOf([t.KR("password"),""],"Passwords must match")}),n=t.Ik({username:t.Yj().required("Username is required").transform((e=>null===e||void 0===e?void 0:e.toLowerCase())).matches(/^[a-zA-Z][a-zA-Z0-9]*$/,"Username must start with a letter and can only contain letters and numbers"),password:t.Yj().required("Password is required").min(8,"Password must be at least 8 characters long").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")}),o=t.Ik().shape({email:t.Yj().email().required("Email is required").matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,"Invalid email format"),username:t.Yj().required("Username is required").transform((e=>null===e||void 0===e?void 0:e.toLowerCase())).matches(/^[a-zA-Z][a-zA-Z0-9]*$/,"Username must start with a letter and can only contain letters and numbers"),password:t.Yj().required("Password is required").min(8,"Password must be at least 8 characters long").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),confirmPassword:t.Yj().required("Confirm Password is required").oneOf([t.KR("password"),""],"Passwords must match")})},8554:(e,r,a)=>{a.d(r,{A:()=>s});a(5043);var t=a(579);const s=e=>{let{className:r="",children:a}=e;return(0,t.jsx)("div",{"data-testid":"component-wrapper",className:"component-wrapper col-span-12 break-inside-avoid bg-component-light dark:bg-gray-600 semi-dark:bg-gray-500 mb-7 pb-1 ".concat(r),children:(0,t.jsx)("div",{"data-testid":"inner-wrapper",className:"bg-white dark:bg-gray-700 semi-dark:bg-gray-600 rounded-lg h-full",children:a})})}},7277:(e,r,a)=>{a.d(r,{A:()=>g});var t=a(5043),s=a(8716),n=a(8895),o=a(6838),d=a(2013),i=a(579);const l=["light","dark","semi-dark","system"],c={light:s.A,dark:n.A,"semi-dark":o.A,system:d.A},m=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",u=e=>{document.documentElement.classList.remove("dark","semi-dark","light"),"system"!==e&&document.documentElement.classList.add(e)},g=e=>{let{className:r=""}=e;const[a,s]=(0,t.useState)(!1),[n,o]=(0,t.useState)("system"),d=(0,t.useRef)(null),g=(0,t.useCallback)((e=>{const r="system"===e?m():e;u(r),localStorage.setItem("color-theme",e),o(e)}),[]);return(0,t.useEffect)((()=>{const e=e=>{d.current&&!d.current.contains(e.target)&&s(!1)};return a?document.addEventListener("mousedown",e):document.removeEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[a]),(0,t.useLayoutEffect)((()=>{const e=localStorage.getItem("color-theme")||"system",r="system"===e?m():e;u(r),o(e)}),[]),(0,t.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),r=()=>{if("system"===localStorage.getItem("color-theme")){const e=m();u(e)}};return e.addEventListener("change",r),()=>{e.removeEventListener("change",r)}}),[]),(0,i.jsxs)("div",{className:"relative ".concat(r),ref:d,children:[(0,i.jsx)("button",{type:"button",className:"rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none ring-4 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:ring-gray-700 semi-dark:ring-gray-600 semi-dark:hover:bg-gray-600",onClick:()=>s((e=>!e)),"data-testid":"theme-toggle-button",children:t.createElement(c[n],{className:"w-6 h-6",fill:"currentColor"})}),a&&(0,i.jsx)("div",{className:"absolute right-0 z-10 py-2 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden","data-testid":"theme-dropdown",children:l.map((e=>(0,i.jsxs)("button",{onClick:()=>(e=>{e!==n&&(g(e),s(!1))})(e),"data-testid":"theme-button-".concat(e),className:"flex items-center px-4 py-2 text-sm ".concat(n===e?"bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-200 semi-dark:bg-gray-600 semi-dark:text-gray-300":"text-gray-700 dark:text-gray-300"," hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"),children:[t.createElement(c[e],{className:"w-5 h-5 mr-2",fill:"currentColor"}),(0,i.jsx)("span",{children:e.charAt(0).toUpperCase()+e.slice(1)})]},e)))})]})}},7538:(e,r,a)=>{a.r(r),a.d(r,{default:()=>b});a(5043);var t=a(5475),s=a(4609),n=a(3003),o=a(4858),d=a(8403),i=a(2294),l=a(1790),c=a(8554),m=a(579);const u=()=>{const e=(0,n.wA)(),{isLoading:r,error:a}=(0,n.d4)((e=>e.authentication)),{register:t,handleSubmit:s,formState:{errors:u}}=(0,o.mN)({resolver:(0,d.t)(l.aE)});return(0,m.jsx)(c.A,{children:(0,m.jsxs)("form",{onSubmit:s((r=>{e((0,i.iD)(r))})),className:"rounded-lg bg-white dark:bg-gray-800  semi-dark:bg-gray-700 space-y-6 p-10",children:[(null===a||void 0===a?void 0:a.message)&&(0,m.jsx)("div",{className:"text-red-500",children:a.message}),(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{htmlFor:"username",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100 semi-dark:text-gray-100",children:"Username:"}),(0,m.jsx)("input",{id:"username",type:"text",...t("username"),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"Enter your username",required:!0}),(null===u||void 0===u?void 0:u.username)&&(0,m.jsx)("div",{className:"text-red-500",children:u.username.message})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100 semi-dark:text-gray-100",children:"Password:"}),(0,m.jsx)("input",{id:"password",type:"password",...t("password"),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"Enter your password",required:!0}),(null===u||void 0===u?void 0:u.password)&&(0,m.jsx)("div",{className:"text-red-500",children:u.password.message})]}),(0,m.jsx)("button",{type:"submit",className:"w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ".concat(r?"opacity-50 cursor-not-allowed":""),disabled:r,children:r?"Logging in...":"Login"})]})})};var g=a(8921),h=a(4237);const b=()=>{const e=(0,g.A)(),r=(0,h.A)(e);return(0,m.jsx)(s.A,{children:(0,m.jsxs)("div",{className:"content-wrapper pt-20 flex flex-col items-center",children:[(0,m.jsx)("img",{src:r,alt:"Your Logo",className:"mb-4 h-16 w-auto"}),(0,m.jsx)("h1",{className:"text-3xl font-extrabold text-gray-900 dark:text-white mb-2",children:"Welcome back!"}),(0,m.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-5",children:"Log in to your account to continue."}),(0,m.jsx)("div",{className:"w-full max-w-md",children:(0,m.jsx)(u,{})}),(0,m.jsxs)("div",{className:"mt-4 text-sm text-gray-600 dark:text-gray-300",children:["Don't have an account?"," ",(0,m.jsx)(t.N_,{to:"/signup",className:"text-blue-500 hover:underline",children:"Sign up here"})]})]})})}},4609:(e,r,a)=>{a.d(r,{A:()=>n});a(5043);var t=a(7277),s=a(579);const n=e=>{let{children:r}=e;return(0,s.jsxs)("div",{className:"grid grid-cols-12 bg-gradient-to-b from-pale-azure to-pale-ivory dark:from-gray-900 dark:to-gray-800 semi-dark:from-gray-800 semi-dark:to-gray-700 min-h-screen",children:[(0,s.jsx)("div",{className:"col-span-12 page-content p-6",children:(0,s.jsx)(t.A,{className:"float-right"})}),(0,s.jsx)("main",{className:"col-span-12 page-content p-6",children:(0,s.jsx)("div",{className:"components",children:r})})]})}},8921:(e,r,a)=>{a.d(r,{A:()=>s});var t=a(5043);const s=()=>{const[e,r]=(0,t.useState)("light");return(0,t.useEffect)((()=>{const e=()=>{let e;e=document.documentElement.classList.contains("dark")?"dark":document.documentElement.classList.contains("semi-dark")?"semi-dark":"light",r(e)};e();const a=new MutationObserver(e);return a.observe(document.documentElement,{attributes:!0}),()=>a.disconnect()}),[]),e}},4237:(e,r,a)=>{a.d(r,{A:()=>n});var t=a(2688);a(5043);const s=a.p+"static/media/logo-dark.66048ad5642ae4da0063ff2aa2458f8c.svg",n=e=>"light"===e?s:t.A}}]);
//# sourceMappingURL=538.d5f55212.chunk.js.map