"use strict";(self["webpackChunknovelapagina"]=self["webpackChunknovelapagina"]||[]).push([[583],{3608:function(e,t,n){n.d(t,{Z:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"pdfvuer"}},e._l(e.numPages,(function(n){return t("pdf",{key:n,attrs:{src:e.pdfdata,id:n,page:n,scale:e.scale,annotation:!0,resize:!1},on:{"update:scale":function(t){e.scale=t}}},[t("template",{slot:"loading"},[e._v(" loading content here... ")])],2)})),1)},o=[],r=n(7880),s={components:{pdf:r.Z},data(){return{page:1,numPages:0,pdfdata:void 0,errors:[],scale:"page-width",setWidth:!1}},computed:{formattedZoom(){return Number.parseInt(100*this.scale)}},mounted(){this.getPdf()},watch:{show:function(e){e&&this.getPdf()}},methods:{handle_pdf_link:function(e){var t=document.getElementById(String(e.pageNumber));t.scrollIntoView()},getPdf(){var e=this;e.pdfdata=r.Z.createLoadingTask(`/${this.$route.query.name}.pdf`),e.pdfdata.then((t=>{e.numPages=t.numPages,window.onscroll=function(){changePage()}}))},findPos(e){return e.offsetTop},setPageW(){let e=window.innerWidth;this.setWidth=!(e>600)}}},d=s,i=n(1001),u=(0,i.Z)(d,a,o,!1,null,"132c23ce",null),c=u.exports},5728:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",[t("article-demo")],1)},o=[],r=n(3608),s={components:{ArticleDemo:r.Z}},d=s,i=n(1001),u=(0,i.Z)(d,a,o,!1,null,"01d417a3",null),c=u.exports}}]);
//# sourceMappingURL=583.e0c3de5e.js.map