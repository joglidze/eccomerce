"use strict";(self.webpackChunkecomemrce_front=self.webpackChunkecomemrce_front||[]).push([[829],{829:(U,m,i)=>{i.r(m),i.d(m,{ProductsModule:()=>q});var u=i(6895),s=i(3128),t=i(8256),a=i(6420);const g=function(r){return["/manager/products/edit",r]};function f(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"button",5),t._uU(12,"Edit"),t.qZA(),t.TgZ(13,"button",6),t.NdJ("click",function(){const l=t.CHM(e).$implicit,C=t.oxw();return t.KtG(C.deleteItem(l.id))}),t._uU(14,"Remove"),t.qZA()()()}if(2&r){const e=n.$implicit;t.xp6(2),t.Q6J("src",e.image,t.LSH),t.xp6(2),t.Oqu(null==e?null:e.name),t.xp6(2),t.Oqu(t.xi3(7,5,null==e?null:e.price,"USD")),t.xp6(3),t.Oqu(null==e||null==e.category?null:e.category.name),t.xp6(2),t.Q6J("routerLink",t.VKq(8,g,e.id))}}let Z=(()=>{class r{constructor(e){this.productsService=e,this.products=[]}ngOnInit(){this.getAll()}getAll(){this.productsService.getProducts({}).pipe().subscribe(e=>{this.products=e})}deleteItem(e){this.productsService.deleteItem(e).pipe().subscribe(c=>{this.getAll()})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(a.su))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-products"]],decls:17,vars:1,consts:[[1,"p-2","d-flex","justify-content-end"],["routerLink","/manager/products/create",1,"btn","btn-primary"],[1,"table"],[4,"ngFor","ngForOf"],["width","100px",3,"src"],[1,"btn","btn-secondary","mr-2",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t._uU(2,"Add"),t.qZA()(),t.TgZ(3,"table",2)(4,"thead")(5,"tr")(6,"th"),t._uU(7,"#"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Name"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Price"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Category"),t.qZA(),t._UZ(14,"th"),t.qZA()(),t.TgZ(15,"tbody"),t.YNc(16,f,15,10,"tr",3),t.qZA()()),2&e&&(t.xp6(16),t.Q6J("ngForOf",c.products))},dependencies:[u.sg,s.rH,u.H9]}),r})();var o=i(433),h=i(3900),A=i(9646),v=i(6943);function b(r,n){if(1&r&&(t.TgZ(0,"option",13),t._uU(1),t.qZA()),2&r){const e=n.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}let p=(()=>{class r{constructor(e,c,d,l){this.categoryService=e,this.productService=c,this.route=d,this.router=l,this.form=new o.cw({id:new o.NI(null),name:new o.NI("",o.kI.required),description:new o.NI("",o.kI.required),image:new o.NI("",o.kI.required),price:new o.NI("",o.kI.required),categoryId:new o.NI("",o.kI.required)}),this.categories$=this.categoryService.getAll()}ngOnInit(){this.route.params.pipe((0,h.w)(e=>e.id?this.productService.getOne(e.id):(0,A.of)(null))).subscribe(e=>{e&&this.form.patchValue({...e,categoryId:e.category.id})})}submit(){this.form.invalid||(this.form.value.id?this.productService.update(this.form.value.id,this.form.value).pipe().subscribe(e=>{this.router.navigate(["/manager/products"]).then(()=>{this.form.reset()})}):this.productService.create(this.form.value).pipe().subscribe(e=>{this.router.navigate(["/manager/products"]).then(()=>{this.form.reset()})}))}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(v.H),t.Y36(a.su),t.Y36(s.gz),t.Y36(s.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-product-add-edit"]],decls:25,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name","placeholder","Name","formControlName","name",1,"form-control"],["for","description"],["type","text","id","description","placeholder","Description","formControlName","description",1,"form-control"],["for","image"],["type","text","id","image","placeholder","Image url","formControlName","image",1,"form-control"],["formControlName","categoryId",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],["for","price"],["type","number","id","price","placeholder","price","formControlName","price",1,"form-control"],["type","submit",1,"btn","btn-primary","mt-3"],[3,"value"]],template:function(e,c){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return c.submit()}),t.TgZ(1,"div",1)(2,"label",2),t._uU(3,"Name"),t.qZA(),t._UZ(4,"input",3),t.qZA(),t.TgZ(5,"div",1)(6,"label",4),t._uU(7,"Description"),t.qZA(),t._UZ(8,"textarea",5),t.qZA(),t.TgZ(9,"div",1)(10,"label",6),t._uU(11,"Image url"),t.qZA(),t._UZ(12,"input",7),t.qZA(),t.TgZ(13,"div",1)(14,"label",4),t._uU(15,"Category"),t.qZA(),t.TgZ(16,"select",8),t.YNc(17,b,2,2,"option",9),t.ALo(18,"async"),t.qZA()(),t.TgZ(19,"div",1)(20,"label",10),t._uU(21,"Price"),t.qZA(),t._UZ(22,"input",11),t.qZA(),t.TgZ(23,"button",12),t._uU(24,"Submit"),t.qZA()()),2&e&&(t.Q6J("formGroup",c.form),t.xp6(17),t.Q6J("ngForOf",t.lcZ(18,2,c.categories$)))},dependencies:[u.sg,o._Y,o.YN,o.Kr,o.Fj,o.wV,o.EJ,o.JJ,o.JL,o.sg,o.u,u.Ov]}),r})();const y=[{path:"",component:Z},{path:"create",component:p},{path:"edit/:id",component:p}];let T=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[s.Bz.forChild(y),s.Bz]}),r})(),q=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[u.ez,T,o.UX]}),r})()}}]);