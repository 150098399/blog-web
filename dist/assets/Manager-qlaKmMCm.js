import{d as F,r as p,o as I,b as s,c as R,e as g,f as e,w as t,a as j,g as u,h as _,_ as z}from"./index-dSEz082e.js";const A={class:"tools"},G={class:"table"},H={slot:"footer",class:"dialog-footer"},J={slot:"footer",class:"dialog-footer"},K=F({__name:"Manager",setup(O){const c=p(!1),m=p(!1),v=p(""),n=p({id:"",title:"",content:""}),i=p({title:"",content:""}),C=p([]),h=a=>a?_.get({url:`/blog/list?isadmin=1&keyword=${a}`}):_.get({url:"/blog/list?isadmin=1"}),r=a=>{h(a).then(l=>{C.value=l.data})},w=a=>_.post({url:`/blog/del?id=${a}`}),x=a=>{n.value.id=a.id,n.value.title=a.title,n.value.content=a.content,c.value=!0},U=a=>{w(a.id).then(()=>{console.log("删除成功"),r()})},$=a=>_.post({url:`/blog/update?id=${a}`,data:n.value}),B=()=>_.post({url:"/blog/new",data:i.value}),D=()=>{console.log("提交的表单数据:",n.value),$(n.value.id).then(a=>{console.log(a),r()}),c.value=!1},E=()=>{m.value=!0},M=()=>{B().then(()=>{r(),m.value=!1})},N=()=>{r(v.value)},L=()=>{v.value="",r()};return I(()=>{r()}),(a,l)=>{const d=s("el-button"),f=s("el-input"),b=s("el-table-column"),T=s("el-table"),V=s("el-form-item"),k=s("el-form"),y=s("el-dialog");return j(),R("div",null,[g("div",A,[e(d,{onClick:E},{default:t(()=>[u("新建博客")]),_:1}),e(f,{modelValue:v.value,"onUpdate:modelValue":l[0]||(l[0]=o=>v.value=o),class:"pd-20"},null,8,["modelValue"]),e(d,{onClick:N,class:"pd-20"},{default:t(()=>[u("搜索")]),_:1}),e(d,{onClick:L},{default:t(()=>[u("重置")]),_:1})]),g("div",G,[e(T,{data:C.value,style:{width:"100%"},fit:!0},{default:t(()=>[e(b,{prop:"title",label:"博客标题"}),e(b,{prop:"content",label:"博客内容"}),e(b,{prop:"createtime",label:"创建时间"}),e(b,{label:"操作",width:"180"},{default:t(({row:o})=>[e(d,{type:"primary",onClick:q=>x(o)},{default:t(()=>[u("编辑")]),_:2},1032,["onClick"]),e(d,{type:"danger",onClick:q=>U(o)},{default:t(()=>[u("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),e(y,{modelValue:c.value,"onUpdate:modelValue":l[4]||(l[4]=o=>c.value=o),title:"编辑",width:"30%"},{default:t(()=>[e(k,{ref:"form",model:n.value,"label-width":"80px"},{default:t(()=>[e(V,{label:"标题",prop:"title"},{default:t(()=>[e(f,{modelValue:n.value.title,"onUpdate:modelValue":l[1]||(l[1]=o=>n.value.title=o),placeholder:"请输入标题"},null,8,["modelValue"])]),_:1}),e(V,{label:"内容",prop:"content"},{default:t(()=>[e(f,{modelValue:n.value.content,"onUpdate:modelValue":l[2]||(l[2]=o=>n.value.content=o),placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),g("span",H,[e(d,{onClick:l[3]||(l[3]=o=>c.value=!1)},{default:t(()=>[u("取 消")]),_:1}),e(d,{type:"primary",onClick:D},{default:t(()=>[u("提 交")]),_:1})])]),_:1},8,["modelValue"]),e(y,{modelValue:m.value,"onUpdate:modelValue":l[8]||(l[8]=o=>m.value=o),title:"新建",width:"30%"},{default:t(()=>[e(k,{ref:"form",model:i.value,"label-width":"80px"},{default:t(()=>[e(V,{label:"标题",prop:"title"},{default:t(()=>[e(f,{modelValue:i.value.title,"onUpdate:modelValue":l[5]||(l[5]=o=>i.value.title=o),placeholder:"请输入标题"},null,8,["modelValue"])]),_:1}),e(V,{label:"内容",prop:"content"},{default:t(()=>[e(f,{modelValue:i.value.content,"onUpdate:modelValue":l[6]||(l[6]=o=>i.value.content=o),placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),g("span",J,[e(d,{onClick:l[7]||(l[7]=o=>m.value=!1)},{default:t(()=>[u("取 消")]),_:1}),e(d,{type:"primary",onClick:M},{default:t(()=>[u("提 交")]),_:1})])]),_:1},8,["modelValue"])])}}}),Q=z(K,[["__scopeId","data-v-4d8a39d8"]]);export{Q as default};
