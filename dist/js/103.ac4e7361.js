"use strict";(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[103],{103:(a,e,r)=>{r.r(e),r.d(e,{default:()=>b});var n=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[a._v("Register")]),r("b-form",{on:{submit:function(e){return e.preventDefault(),a.onRegister(e)},reset:function(e){return e.preventDefault(),a.onReset(e)}}},[r("b-form-group",{attrs:{id:"input-group-username","label-cols-sm":"3",label:"Username:","label-for":"username"}},[r("b-form-input",{attrs:{id:"username",type:"text",state:a.validateState("username")},model:{value:a.$v.form.username.$model,callback:function(e){a.$set(a.$v.form.username,"$model",e)},expression:"$v.form.username.$model"}}),a.$v.form.username.required?a.$v.form.username.length?a._e():r("b-form-invalid-feedback",[a._v(" Username length should be between 3-8 characters long ")]):r("b-form-invalid-feedback",[a._v(" Username is required ")]),a.$v.form.username.alpha?a._e():r("b-form-invalid-feedback",[a._v(" Username alpha ")])],1),r("b-form-group",{attrs:{id:"input-group-firstname","label-cols-sm":"3",label:"First Name:","label-for":"firstname"}},[r("b-form-input",{attrs:{id:"firstname",type:"text",state:a.validateState("firstname")},model:{value:a.$v.form.firstname.$model,callback:function(e){a.$set(a.$v.form.firstname,"$model",e)},expression:"$v.form.firstname.$model"}}),r("b-form-invalid-feedback",[a._v(" First Name is required ")])],1),r("b-form-group",{attrs:{id:"input-group-lastname","label-cols-sm":"3",label:"Last Name:","label-for":"lastname"}},[r("b-form-input",{attrs:{id:"lastname",type:"text",state:a.validateState("lastname")},model:{value:a.$v.form.lastname.$model,callback:function(e){a.$set(a.$v.form.lastname,"$model",e)},expression:"$v.form.lastname.$model"}}),r("b-form-invalid-feedback",[a._v(" Last Name is required ")])],1),r("b-form-group",{attrs:{id:"input-group-country","label-cols-sm":"3",label:"Country:","label-for":"country"}},[r("b-form-select",{attrs:{id:"country",options:a.countries,state:a.validateState("country")},model:{value:a.$v.form.country.$model,callback:function(e){a.$set(a.$v.form.country,"$model",e)},expression:"$v.form.country.$model"}}),r("b-form-invalid-feedback",[a._v(" Country is required ")])],1),r("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"password"}},[r("b-form-input",{attrs:{id:"password",type:"password",state:a.validateState("password")},model:{value:a.$v.form.password.$model,callback:function(e){a.$set(a.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),a.$v.form.password.required?a.$v.form.password.$error?r("b-form-text",{attrs:{"text-variant":"info"}},[a._v(" Your password should be "),r("strong",[a._v("strong")]),a._v(". "),r("br"),a._v(" For that, your password should be also: ")]):a._e():r("b-form-invalid-feedback",[a._v(" Password is required ")]),a.$v.form.password.required&&!a.$v.form.password.length?r("b-form-invalid-feedback",[a._v(" Have length between 5-10 characters long ")]):a._e()],1),r("b-form-group",{attrs:{id:"input-group-email","label-cols-sm":"3",label:"Email:","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",type:"text",state:a.validateState("email")},model:{value:a.$v.form.email.$model,callback:function(e){a.$set(a.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),a.$v.form.email.required?a._e():r("b-form-invalid-feedback",[a._v(" Email is required ")]),a.$v.form.email.email?a._e():r("b-form-invalid-feedback",[a._v(" Email is not in the right format ")])],1),r("b-button",{attrs:{type:"reset",variant:"danger"}},[a._v("Reset")]),r("b-button",{staticClass:"ml-5 w-75",staticStyle:{width:"250px"},attrs:{type:"submit",variant:"primary"}},[a._v("Register")]),r("div",{staticClass:"mt-2"},[a._v(" You have an account already? "),r("router-link",{attrs:{to:"login"}},[a._v(" Log in here")])],1)],1),a.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[a._v(" Register failed: "+a._s(a.form.submitError)+" ")]):a._e()],1)},i=[],t=r(7673),o=r(6198),s=r(4479);const l=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (British)","Virgin Islands (U.S.)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Côte d'Ivoire","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Korea (Democratic People's Republic of)","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of Kosovo","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Korea (Republic of)","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];var u=r(379);const m={name:"Register",data:function(){return{form:{username:"",firstname:"",lastname:"",country:null,password:"",email:"",submitError:void 0},countries:[{value:null,text:"",disabled:!0}],errors:[],validated:!1}},validations:{form:{username:{required:u.C1,length:function(a){return(0,u.Ei)(3)(a)&&(0,u.BS)(8)(a)},alpha:u.Fq},firstname:{required:u.C1},lastname:{required:u.C1},country:{required:u.C1},password:{required:u.C1,length:function(a){return(0,u.Ei)(5)(a)&&(0,u.BS)(10)(a)}},email:{required:u.C1,email:u.Do}}},mounted:function(){var a;(a=this.countries).push.apply(a,(0,s.Z)(l))},methods:{validateState:function(a){var e=this.$v.form[a],r=e.$dirty,n=e.$error;return r?!n:null},Register:function(){var a=this;return(0,o.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.axios.post(a.$root.store.server_domain+"/Register",{username:a.form.username,firstname:a.form.firstname,lastname:a.form.lastname,country:a.form.country,password:a.form.password,email:a.form.email});case 3:e.sent,a.$router.push("/login"),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0.response),a.form.submitError=e.t0.response.data.message;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},onRegister:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.Register()},onReset:function(){var a=this;this.form={username:"",firstName:"",lastName:"",country:null,password:"",email:""},this.$nextTick((function(){a.$v.$reset()}))}}},d=m;var c=r(1001),f=(0,c.Z)(d,n,i,!1,null,"3333d6fa",null);const b=f.exports}}]);
//# sourceMappingURL=103.ac4e7361.js.map