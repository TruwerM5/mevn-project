import{u as h,d as g,r as x,o as r,c as u,a as s,w as c,v as d,e as p,i as m,t as b,f as v,g as w}from"./index-d3e722ee.js";const y={class:"wrapper max-w-[500px] mx-auto bg-slate-200"},k=s("h1",null,"Log In",-1),S=["onSubmit"],V={class:"flex flex-col"},B=s("label",{for:"login"},"Login:",-1),L={class:"flex flex-col"},N=s("label",{for:"pass"},"Password:",-1),T=s("button",{type:"submit",class:"mx-auto block"},"Submit",-1),U={key:0,class:"text-rose-500"},I={__name:"LoginView",setup(C){const l=h(),_=g();let t,o="";const n=x("");function f(){const i=JSON.stringify({login:t,pass:o});fetch("/api/login",{method:"post",body:i,headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{e.token?(l.setToken(e.token),l.authZ().then(()=>_.push({name:"home"}))):n.value=e.err}).catch(e=>{console.log(e.message)})}return(i,a)=>(r(),u("div",y,[k,s("form",{method:"post",class:"form w-fit mx-auto",onSubmit:w(f,["prevent"])},[s("div",V,[B,c(s("input",{type:"text",name:"login",id:"login","onUpdate:modelValue":a[0]||(a[0]=e=>m(t)?t.value=e:t=e)},null,512),[[d,p(t)]])]),s("div",L,[N,c(s("input",{type:"password",name:"pass",id:"pass","onUpdate:modelValue":a[1]||(a[1]=e=>m(o)?o.value=e:o=e)},null,512),[[d,p(o)]])]),T,n.value?(r(),u("span",U,b(n.value),1)):v("",!0)],40,S)]))}};export{I as default};