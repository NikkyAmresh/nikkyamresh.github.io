(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fa99"],{b51a:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Edit Cat")]),a("div",[a("form",{staticClass:"form-control",on:{submit:function(e){return e.preventDefault(),t.updateCat(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cat_id,expression:"cat_id"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.cat_id},on:{input:function(e){e.target.composing||(t.cat_id=e.target.value)}}}),a("label",[t._v("cat Id")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cat_name,expression:"cat_name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.cat_name},on:{input:function(e){e.target.composing||(t.cat_name=e.target.value)}}}),a("label",[t._v("cat Name")]),a("br"),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"reset"},on:{click:t.deleteCat}},[t._v(" Delete ")]),a("router-link",{staticClass:"btn btn-warning",attrs:{to:{name:"admin"}}},[t._v(" Cancel ")])],1)])])},n=[],o=a("1543"),r={name:"new-item",data(){return{cat_id:null,cat_name:null}},beforeRouteEnter(t,e,a){o["default"].collection("categories").doc(t.params.cat_id).get().then(t=>{a(e=>{e.cat_id=t.data().cat_id,e.cat_name=t.data().name})}).catch(t=>{console.log("Error getting documents",t)})},watch:{$route:"fetchData"},methods:{fetchData(){o["default"].collection("categories").doc(this.$route.params.cat_id).get().then(t=>{t.forEach(t=>{this.cat_id=t.data().cat_id,this.cat_name=t.data().name})})},updateCat(){o["default"].collection("categories").doc(this.$route.params.cat_id).get().then(t=>{t.ref.update({cat_id:this.cat_id,name:this.cat_name}).then(t=>this.$router.push("/admin")).catch(t=>console.log(err))})},deleteCat(){confirm("Are you sure ?")&&o["default"].collection("categories").doc(this.$route.params.cat_id).collection("items").get().then(t=>{t.forEach(t=>{t.ref.delete().catch(t=>console.log(t))}),o["default"].collection("categories").doc(this.$route.params.cat_id).get().then(t=>{t.ref.delete().then(t=>this.$router.push("/admin")).catch(t=>console.log(err))})})}}},i=r,s=a("0c7c"),l=Object(s["a"])(i,c,n,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d20fa99.67a92d51.js.map