(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{4964:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return c(4215)}])},4215:function(e,b,a){"use strict";a.r(b);var f=a(5893),c=a(1664),g=a.n(c),h=a(9473),d=a(3680),i=a.n(d);b.default=function(){var b=(0,h.v9)(function(a){return a}),a=b.auth,c=b.users,d=(0,h.I0)();if(!a.user||a.user&&"admin"!==a.user.role)return null;var e=function(b){d({type:"MODAL",payload:{item:b,actionType:"deleteUser",auth:a}})};return(0,f.jsx)("div",{className:"container",children:(0,f.jsx)("div",{className:"row my-3 table-responsive",children:(0,f.jsxs)("table",{className:"table-bordered w-100 ".concat(i().users_table),children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"ID"}),(0,f.jsx)("th",{children:"Email"}),(0,f.jsx)("th",{children:"AVATAR"}),(0,f.jsx)("th",{children:"ADMIN"}),(0,f.jsx)("th",{children:"ACTION"})]})}),(0,f.jsx)("tbody",{children:c.map(function(a){return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:a._id}),(0,f.jsx)("td",{children:a.email}),(0,f.jsx)("td",{className:"text-center",children:(0,f.jsx)("img",{style:{width:"30px",height:"30px",objectFit:"cover",overflow:"hidden"},src:a.avatar,alt:a.avatar})}),(0,f.jsx)("td",{children:"admin"===a.role?a.root?(0,f.jsx)("li",{className:"fas fa-check text-success",children:"Root"}):(0,f.jsx)("li",{className:"fas fa-check text-success"}):(0,f.jsx)("i",{className:"fas fa-times text-danger"})}),(0,f.jsxs)("td",{className:"action",children:[(0,f.jsx)(g(),{href:"/users/edit-user/".concat(a._id),children:(0,f.jsx)("i",{className:"text-primary fas fa-edit"})}),(0,f.jsx)("i",{"data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return e(a)},className:"text-danger fas fa-trash-alt ml-3"})]})]},a._id)})})]})})})}},3680:function(a){a.exports={users_table:"Users_users_table__So8Y_"}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=4964)}),_N_E=a.O()}])