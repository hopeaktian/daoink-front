(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],f=0,d=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01fc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" doc ")])},s=[];a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}))},"034f":function(e,t,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"158b":function(e,t,a){"use strict";var n=a("9bc5"),s=a.n(n);s.a},"17be":function(e,t,a){e.exports=a.p+"static/img/logo.1ed1f482.jpg"},"213c":function(e,t,a){"use strict";var n=a("b7ad"),s=a.n(n);t["default"]=s.a},3691:function(e,t,a){"use strict";var n=a("5de7"),s=a("213c"),o=a("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"64354c80",null);t["default"]=r.exports},"56d7":function(e,t,a){"use strict";a.r(t);a("480b");var n=a("a37c"),s=(a("342a"),a("1437")),o=(a("5d17"),a("f9bd")),r=(a("bda7"),a("5e46")),i=(a("da3c"),a("0b33")),c=(a("2994"),a("2bdd")),l=(a("e930"),a("8f80")),u=(a("b000"),a("1a23")),f=(a("38d5"),a("772a")),d=(a("be7f"),a("565f")),m=(a("5246"),a("6b41")),p=(a("f1dc"),a("6e47")),v=(a("0653"),a("34e9")),b=(a("c194"),a("7744")),h=(a("3647"),a("ea47")),g=(a("66b9"),a("b650")),w=(a("4056"),a("44bf")),_=(a("c3a6"),a("ad06")),y=(a("4d48"),a("d1e1")),k=(a("81e6"),a("9ffb")),x=(a("2b28"),a("9ed2")),C=(a("a52c"),a("2ed4")),I=(a("537a"),a("ac28")),S=(a("4b0a"),a("2bb1")),j=(a("7844"),a("5596")),O=(a("5fc6"),a("5af2")),$=a.n(O),N=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),a("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:e.show_tabbar,expression:"show_tabbar"}],attrs:{route:!0,"safe-area-inset-bottom":!0}},[a("van-tabbar-item",{attrs:{replace:"",to:"/",icon:"wap-home","van-tabbar-item--active":""}},[e._v("首页")]),a("van-tabbar-item",{attrs:{replace:"",to:"/friends",icon:"friends",info:"5"}},[e._v("同学圈")]),a("van-tabbar-item",{attrs:{replace:"",to:"/mine",icon:"manager",info:""}},[e._v("我的")])],1)],1)},T=[],P=(a("caad"),a("2532"),a("2f62"));N["default"].use(P["a"]);var E=new P["a"].Store({state:{token:"",username:"",user_id:""},mutations:{set_token:function(e,t){e.token=t,localStorage.token=t},set_userinfo:function(e,t){e.username=t.username,e.user_id=t.user_id,localStorage.username=t.username,localStorage.user_id=t.user_id},del_token:function(e){e.token="",e.userInfo="",localStorage.removeItem("token"),localStorage.removeItem("userInfo")}}}),L={data:function(){return{show_tabbar:!0,single_pages:["/mine/login","/mine/register"]}},methods:{checkPath:function(){var e=this.$route.path;this.single_pages.includes(e)?this.show_tabbar=!1:this.show_tabbar=!0}},created:function(){localStorage.getItem("token")&&(E.commit("set_token",localStorage.getItem("token")),E.commit("set_userinfo",{username:localStorage.getItem("username"),user_id:localStorage.getItem("user_id")}))},updated:function(){this.checkPath()},mounted:function(){this.checkPath()}},U=L,z=(a("034f"),a("2877")),M=Object(z["a"])(U,D,T,!1,null,null,null),q=M.exports,J=a("8c4f"),W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-row",[n("van-col",{attrs:{span:"22",offset:"1"}},[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},[n("van-swipe-item",[n("img",{staticClass:"img-swipe",attrs:{src:a("eb7b")}})]),n("van-swipe-item",[n("img",{staticClass:"img-swipe",attrs:{src:a("fd0c")}})])],1),n("br"),n("van-row",{attrs:{type:"flex",justify:"center"}},[n("van-col",[n("i",{staticClass:"fa fa-graduation-cap",staticStyle:{color:"#6a6a6e"},attrs:{"aria-hidden":"true"}}),n("strong",[e._v(" 西安理工大学")])])],1),n("br"),n("van-notice-bar",{attrs:{color:"#ffa41b",background:"#ededed","left-icon":"volume-o"}},[e._v("通知内容，巴拉巴拉，巴拉巴拉")])],1)],1),n("br"),n("van-row",[n("van-col",{attrs:{span:"22",offset:"1"}},[n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",[n("strong",[e._v(e._s(e.nowWeek)+"课表")])]),n("van-col",[n("span",{staticClass:"span-note"},[e._v(e._s(e.nowDate))])])],1),n("van-tabs",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tab",{attrs:{title:"早上"}},[n("van-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[n("van-collapse-item",{attrs:{title:"8:00~10:00",name:"1",value:"通信原理"}},[n("van-row",[n("van-icon",{attrs:{name:"location-o"}}),n("span",[e._v("教学楼：教六302")]),n("br"),n("van-icon",{attrs:{name:"underway-o"}}),n("span",[e._v("周次：1-14周")]),n("br"),n("van-icon",{attrs:{name:"contact"}}),n("span",[e._v("授课老师：王老师")])],1)],1),n("van-collapse-item",{attrs:{title:"10:10~12:00",name:"2",value:"计算机网络"}},[e._v("内容")])],1)],1),n("van-tab",{attrs:{title:"下午"}},[n("van-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[n("van-collapse-item",{attrs:{title:"14:10~16:00",name:"1"}},[e._v("内容")]),n("van-collapse-item",{attrs:{title:"16:10~18:00",name:"2"}},[e._v("内容")])],1)],1),n("van-tab",{attrs:{title:"晚上"}},[n("van-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[n("van-collapse-item",{attrs:{title:"19:00~21:50",name:"1"}},[e._v("内容")]),n("van-collapse-item",{attrs:{title:"10:10~12:00",name:"2"}},[e._v("内容")])],1)],1)],1),n("br"),n("van-row",[n("van-col",[n("strong",[e._v("今日新鲜事")])])],1),n("div",{staticClass:"panel-news"},[n("a",{attrs:{href:"#"}},[n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",[n("img",{staticClass:"img-news",attrs:{src:a("ad34")}})]),n("van-col",[n("p",{staticClass:"p-news"},[e._v("震惊！校内一男子竟然干出这种事情！！")])])],1)],1),n("van-divider"),n("a",[n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",[n("img",{staticClass:"img-news",attrs:{src:a("ad34")}})]),n("van-col",[n("p",{staticClass:"p-news"},[e._v("震惊！校内一男子竟然干出这种事情！！")])])],1)],1),n("van-divider"),n("a",[n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",[n("img",{staticClass:"img-news",attrs:{src:a("ad34")}})]),n("van-col",[n("p",{staticClass:"p-news"},[e._v("震惊！校内一男子竟然干出这种事情！！")])])],1)],1),n("van-divider")],1)],1)],1)],1)},A=[],V={data:function(){return{nowDate:(new Date).getMonth()+1+"月"+(new Date).getDate()+"日",nowWeek:"周"+"日一二三四五六".charAt((new Date).getDay()),fileList:[],activeNames:["1"],active:""}},methods:{getNowdate:function(){var e=new Date,t=e.getMonth()+1,a=e.getDay()+1;this.nowDate=t+"月"+a+"日"}}},B=V,F=(a("b9dc"),Object(z["a"])(B,W,A,!1,null,"ee92b134",null)),G=F.exports,H=a("acdb"),K=a("3691"),Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-row",{staticClass:"panel-selfinfo"},[n("van-col",{attrs:{span:"6",offset:"2"}},[n("img",{staticClass:"img-head",attrs:{width:"100",src:a("17be")}})]),n("van-col",{attrs:{span:"16"}},[n("van-row",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticStyle:{height:"62px"},attrs:{type:"flex",align:"center"}},[n("van-col",[n("van-row",{attrs:{type:"flex",align:"center"}},[n("van-col",{attrs:{span:"10"}},[n("label",{staticClass:"font-phone"},[e._v(e._s(e.username))])])],1),n("van-row",{attrs:{type:"flex",align:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-button",{attrs:{plain:"",type:"info",size:"small"},on:{click:e.logout}},[e._v("退出登录")])],1)],1)],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}]},[n("van-row",{staticStyle:{height:"62px"},attrs:{type:"flex",align:"center"}},[n("van-col",{attrs:{span:"6"}},[n("van-button",{attrs:{plain:"",type:"info",size:"small",to:"/mine/login"}},[e._v("登录")])],1),n("van-col",{attrs:{span:"6",offset:"1"}},[n("van-button",{attrs:{plain:"",type:"primary",size:"small",to:"/mine/register"}},[e._v("注册")])],1)],1)],1)],1)],1),n("br"),n("van-cell-group",[n("van-cell",{attrs:{title:"问题与反馈",icon:"records",size:"large","is-link":""}})],1)],1)},R=[],X={data:function(){return{show:!1,username:""}},created:function(){""!==E.state.token&&(this.show=!0,this.username=E.state.username)},methods:{logout:function(){E.commit("del_token"),this.show=!1}}},Y=X,Z=(a("158b"),Object(z["a"])(Y,Q,R,!1,null,"c1a433d4",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:"登录","left-text":"返回","left-arrow":""},on:{"click-left":e.onClickLeft}}),a("br"),a("van-row",[a("van-col",{attrs:{span:"22",offset:"1"}},[a("van-form",{on:{submit:e.onSubmit}},[a("van-field",{attrs:{type:"tel",name:"username",label:"手机号",placeholder:"手机号",rules:[{required:!0,message:"请填写手机号"}]},model:{value:e.userInfo.username,callback:function(t){e.$set(e.userInfo,"username",t)},expression:"userInfo.username"}}),a("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("登录")])],1)],1)],1)],1)],1)},ae=[],ne=a("bc3a"),se=a.n(ne),oe=a("4328"),re=a.n(oe),ie={data:function(){return{loginUrl:"http://dao.wayen.tech/api/login/",userInfo:{username:"",password:""}}},methods:{onClickLeft:function(){this.$router.go(-1)},onSubmit:function(e){var t=this;se.a.post(this.loginUrl,re.a.stringify(e),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){var a=e.data;if(e.data.success){var n={username:a["username"],user_id:a["user_id"]};E.commit("set_token",a["token"]),E.commit("set_userinfo",n),$()({message:"登录成功",iconClass:"fa fa-check"}),t.onClickLeft()}else $()({message:"登录失败",iconClass:"fa fa-exclamation"})})).catch((function(e){console.log(e)}))}}},ce=ie,le=Object(z["a"])(ce,te,ae,!1,null,"206f34d0",null),ue=le.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:"注册","left-text":"返回","left-arrow":""},on:{"click-left":e.onClickLeft}}),a("br"),a("van-row",[a("van-col",{attrs:{span:"22",offset:"1"}},[a("van-form",{on:{submit:e.onSubmit}},[a("van-field",{attrs:{type:"tel",name:"phone_number",label:"手机号",placeholder:"手机号",rules:[{required:!0,message:"请填写手机号"},{pattern:"^1(3|4|5|7|8)d{9}$",message:"手机号格式不正确"}]},model:{value:e.formInfo.phone_number,callback:function(t){e.$set(e.formInfo,"phone_number",t)},expression:"formInfo.phone_number\t"}}),a("van-field",{attrs:{center:"",name:"verify_code",clearable:"",label:"短信验证码",placeholder:"请输入短信验证码",rules:[{required:!0,message:"请填写验证码"}]},model:{value:e.formInfo.verify_code,callback:function(t){e.$set(e.formInfo,"verify_code",t)},expression:"formInfo.verify_code"}},[a("van-button",{attrs:{slot:"button",size:"small",type:e.button.type,disabled:e.button.disabled},on:{click:e.sendSms},slot:"button"},[e._v(e._s(e.button.content))])],1),a("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.formInfo.password,callback:function(t){e.$set(e.formInfo,"password",t)},expression:"formInfo.password"}}),a("van-row",{staticStyle:{height:"50px"},attrs:{type:"flex",align:"center"}},[a("van-col",{attrs:{span:"10",offset:"1"}},[a("span",{staticClass:"span-confirm"},[e._v("阅读并同意")]),a("a",{staticClass:"a-confirm",attrs:{href:"#"}},[e._v("《相关条款》")])]),a("van-col",{attrs:{span:"1"}},[a("van-switch",{attrs:{size:"15px"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1)],1),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("注册")])],1)],1)],1)],1)],1)},de=[],me={data:function(){return{button:{type:"primary",disabled:!1,content:"发送验证码",totalTime:60,canClick:!0},checked:!1,loginUrl:"http://dao.wayen.tech/api/login/",smsUrl:"http://dao.wayen.tech/api/phone_verification_code/",registerUrl:"http://dao.wayen.tech/api/register/",formInfo:{phone_number:"",password:"",verify_code:""}}},methods:{onClickLeft:function(){this.$router.go(-1)},countDown:function(e){if(!e.disabled){e.disabled=!0,e.content=e.totalTime+"s后重新发送";var t=window.setInterval((function(){e.totalTime--,e.content=e.totalTime+"s后重新发送",e.totalTime<0&&(window.clearInterval(t),e.content="重新发送验证码",e.totalTime=10,e.disabled=!1)}),1e3)}},phoneNumVerify:function(){return/[1][3,4,5,6,7,8][0-9]{9}$/.test(this.formInfo.phone_number)},sendSms:function(){var e=this;""!==this.formInfo.phone_number&&(console.log("手机号不为空",this.formInfo.phone_number),se.a.get(this.smsUrl+"?phone_number="+this.formInfo.phone_number).then((function(t){t.data.success?($()({message:"发送成功",iconClass:"fa fa-check",duration:2e3}),e.countDown(e.button)):$()({message:"发送失败 "+t.data.message,iconClass:"fa fa-exclamation-triangle",duration:3e3})})))},onSubmit:function(e){if(this.checked){var t=this;se.a.post(this.registerUrl,re.a.stringify(e),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){var a=e.data;if(console.log(a),a.success){var n={username:t.formInfo.phone_number};E.commit("set_token",a["token"]),E.commit("set_userinfo",n),$()({message:"注册成功",iconClass:"fa fa-check"}),t.onClickLeft()}else{var s="";for(var o in a.message)s+=a.message[o];$()({message:"注册失败: "+s,iconClass:"fa fa-exclamation"})}})).catch((function(e){console.log(e)}))}else $()({message:"请确认《相关条款》",iconClass:"fa fa-exclamation"})}}},pe=me,ve=(a("7722"),Object(z["a"])(pe,fe,de,!1,null,"6c277b97",null)),be=ve.exports,he=new J["a"]({routes:[{path:"/",component:G},{path:"/doc",component:H["default"]},{path:"/friends",component:K["default"]},{path:"/mine",component:ee},{path:"/mine/login",component:ue},{path:"/mine/register",component:be}]}),ge=he,we=(a("7f10"),a("a7fe")),_e=a.n(we);N["default"].use(J["a"]),N["default"].prototype.axios=se.a,N["default"].use(_e.a,se.a),N["default"].config.productionTip=!1,N["default"].component($.a),N["default"].use(j["a"]),N["default"].use(S["a"]),N["default"].use(I["a"]),N["default"].use(C["a"]),N["default"].use(x["a"]),N["default"].use(k["a"]),N["default"].use(y["a"]),N["default"].use(_["a"]),N["default"].use(w["a"]),N["default"].use(g["a"]),N["default"].use(h["a"]),N["default"].use(b["a"]),N["default"].use(v["a"]),N["default"].use(p["a"]),N["default"].use(m["a"]),N["default"].use(d["a"]),N["default"].use(f["a"]),N["default"].use(u["a"]),N["default"].use(l["a"]),N["default"].use(c["a"]),N["default"].use(i["a"]),N["default"].use(r["a"]),N["default"].use(o["a"]),N["default"].use(s["a"]),N["default"].use(n["a"]),new N["default"]({render:function(e){return e(q)},router:ge}).$mount("#app")},"5de7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" 同学圈页面 ")])},s=[];a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}))},6756:function(e,t,a){},7722:function(e,t,a){"use strict";var n=a("eca8"),s=a.n(n);s.a},"85ec":function(e,t,a){},"9bc5":function(e,t,a){},"9f35":function(e,t){},acdb:function(e,t,a){"use strict";var n=a("01fc"),s=a("c6e0"),o=a("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"aa3fd040",null);t["default"]=r.exports},ad34:function(e,t,a){e.exports=a.p+"static/img/head-roo.e91e7e51.gif"},b7ad:function(e,t){},b9dc:function(e,t,a){"use strict";var n=a("6756"),s=a.n(n);s.a},c6e0:function(e,t,a){"use strict";var n=a("9f35"),s=a.n(n);t["default"]=s.a},eb7b:function(e,t,a){e.exports=a.p+"static/img/slider-2.0ef4ab19.png"},eca8:function(e,t,a){},fd0c:function(e,t,a){e.exports=a.p+"static/img/slider-1.5c4d3f2e.png"}});
//# sourceMappingURL=app.def91c3e.js.map