"use strict";(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[929],{5929:(r,e,s)=>{s.r(e),s.d(e,{default:()=>f});var t=function(){var r=this,e=r.$createElement,s=r._self._c||e;return s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[r._v("Login")]),s("b-form",{on:{submit:function(e){return e.preventDefault(),r.onLogin(e)}}},[s("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[s("b-form-input",{attrs:{id:"Username",type:"text",state:r.validateState("username")},model:{value:r.$v.form.username.$model,callback:function(e){r.$set(r.$v.form.username,"$model",e)},expression:"$v.form.username.$model"}}),s("b-form-invalid-feedback",[r._v(" Username is required ")])],1),s("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[s("b-form-input",{attrs:{id:"Password",type:"password",state:r.validateState("password")},model:{value:r.$v.form.password.$model,callback:function(e){r.$set(r.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),s("b-form-invalid-feedback",[r._v(" Password is required ")])],1),s("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[r._v("Login")]),s("div",{staticClass:"mt-2"},[r._v(" Do not have an account yet? "),s("router-link",{attrs:{to:"register"}},[r._v(" Register in here")])],1)],1),r.form.submitError?s("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[r._v(" Login failed: "+r._s(r.form.submitError)+" ")]):r._e()],1)},o=[],a=s(7673),n=s(6198),i=s(379);const m={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:i.C1},password:{required:i.C1}}},methods:{validateState:function(r){var e=this.$v.form[r],s=e.$dirty,t=e.$error;return s?!t:null},Login:function(){var r=this;return(0,n.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.axios.post(r.$root.store.server_domain+"/Login",{username:r.form.username,password:r.form.password});case 3:e.sent,r.$root.store.login(r.form.username),r.$router.push("/"),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0.response),r.form.submitError=e.t0.response.data.message;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},l=m;var u=s(1001),d=(0,u.Z)(l,t,o,!1,null,"0f6ea3b0",null);const f=d.exports}}]);
//# sourceMappingURL=929.a5db0269.js.map