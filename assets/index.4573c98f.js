import{o as r,c as d,a as e,t as p,b as u,F as x,d as n,e as f,f as m}from"./vendor.cee9c0bb.js";const v=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(s){if(s.ep)return;s.ep=!0;const t=l(s);fetch(s.href,t)}};v();var g="/sample-page/assets/logo.8b36ce23.png";const y={class:"mt-16 transform scale-150 relative inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"},h={class:"w-20 h-20"},b=e("circle",{class:"text-gray-50","stroke-width":"3",stroke:"currentColor",fill:"transparent",r:"30",cx:"40",cy:"40"},null,-1),_=["stroke-dasharray","stroke-dashoffset"],w={class:"absolute text-xs text-green-600 font-medium"},k={props:{circumference:Number,progress:Number},setup(a){return(i,l)=>(r(),d("div",y,[(r(),d("svg",h,[b,e("circle",{class:"text-green-500","stroke-width":"3","stroke-dasharray":a.circumference,"stroke-dashoffset":a.circumference-a.progress/100*a.circumference,"stroke-linecap":"round",stroke:"currentColor",fill:"transparent",r:"30",cx:"40",cy:"40"},null,8,_)])),e("span",w,p(a.progress)+"%",1)]))}},z=e("div",{class:"header bg-fuchsia-850"},[e("div",{class:"container mx-auto"},[e("div",{class:"flex flex-row divide-x divide-gray-100 divide-opacity-10"},[e("div",{class:"py-6 flex-auto w-1/2"},[e("img",{src:g,alt:"",class:"object-contain"})]),e("div",{class:"text-center py-6 flex-initial w-24 relative"},[e("i",{class:"fa fa-bell fa-2x text-gray-50"}),e("i",{class:"absolute fa fa-circle text-red-500 top-6 left-13 text-xs"})]),e("div",{class:"py-6 flex-initial w-72 pr-6"},[e("button",{id:"userButton",class:"flex items-center focus:outline-none md:mr-3 ml-auto text-gray-50"},[e("span",{class:"hidden md:inline-block text-right"},[n("Jerryson Ibe "),e("br"),n(),e("span",{class:"text-xs"},"View Profile")]),e("div",{class:"rounded-full h-12 w-12 flex items-center justify-center bg-fuchsia-450 mx-5"},"JI"),e("i",{class:"fa fa-caret-down text-gray-50"})])])])])],-1),j={class:"contents min-h-screen"},N={class:"container mx-auto"},$={class:"grid grid-cols-3 gap-4 py-20"},F=f('<div><h1 class="font-sans text-4xl font-black text-fuchsia-850"> My Transactions </h1><p class="pt-4 font-medium">welcome, Jerry see your transaction logs</p><div class="flex flex-row text-gray-100 mt-6 divide-x divide-gray-100 divide-opacity-10 rounded-md bg-fuchsia-1050 p-4 w-3/5"><div class="pr-5"><i class="fa fa-home fa-4x"></i></div><div class="grid grid-rows-3 grid-flow-col gap-1 pl-5"><span class="font-bold">$ to \u20A6</span><div class="text-xs divide-x divide-gray-100 divide-opacity-10 text-opacity-40 text-fuchsia-200"><span class="pr-2">80%</span><span class="pl-2">2hrs left</span></div></div></div></div>',1),B={class:"col-span-2 bg-gray-50 rounded-md p-10"},L={class:"grid grid-cols-12 gap-3"},R={class:"col-span-2"},V=f('<div class="col-span-10"><div class="flex justify-between"><h1 class="text-lg font-bold capitalize">Buy property</h1><button class="text-sm rounded-lg border-solid border-2 border-fuchsia-600 text-fuchsia-600 font-semibold py-2 px-6 capitalize">Stop transaction</button></div><div class="border-top w-11/12 border-t-2 border-gray-150 mt-4 pt-10"><div class="summary grid grid-cols-3 mb-4"><div class="flex flex-col"><span class="text-fuchsia-600 font-bold">\u20A6921,000.00</span><span class="uppercase text-gray-600 text-xs tracking-widest">received</span></div><div class="flex flex-col"><span class="text-gray-600 font-bold">$1,210.00</span><span class="uppercase font-medium text-gray-600 text-xs tracking-widest">sent</span></div><div class="flex flex-col"><span class="text-gray-600 font-bold">10hrs</span><span class="uppercase font-medium text-gray-600 text-xs tracking-widest">time left</span></div></div><div class="notification grid grid-cols-12 p-8 w-11/12 mx-auto bg-fuchsia-450 rounded-md my-10"><i class="fas fa-2x fa-lightbulb col-span-2 text-center"></i><p class="col-span-10 text-xs">Based on your selected conversion rate, you&#39;re likely to achieve your goal on time. Keep going</p></div><div class="flex justify-between my-10"><div class="flex flex-col"><span class="text-gray-600 capitalize text-sm">in bound</span><span class="text-fuchsia-600 capitalize text-sm font-semibold">dollar</span></div><div class="flex flex-col"><span class="text-gray-600 capitalize text-sm">maturity date</span><span class="text-fuchsia-600 capitalize text-sm font-semibold">10, June, 2020</span></div></div><div class="flex justify-between my-10"><div class="flex flex-col"><span class="text-gray-600 capitalize text-sm">out bound</span><span class="text-fuchsia-600 capitalize text-sm font-semibold">naira</span></div><div class="flex flex-col"><span class="text-gray-600 capitalize text-sm">Estimate</span><span class="text-fuchsia-600 capitalize text-sm font-semibold">10hrs</span></div></div><div class="my-10 py-10 flex justify-between"><p class="font-bold capitalize">Allow auto debiting?</p><div class="flex flex-col justify-center items-center"><div class="flex justify-center items-center transform scale-75"><span class="font-bold text-green-500"> Yes </span><div class="w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1 bg-green-500"><div class="bg-white w-5 h-5 rounded-full shadow-md transform translate-x-"></div></div><span class="font-bold"> No </span></div></div></div><div><h1 class="font-bold capitalize">Recent transactions</h1><table class="table-fixed w-full mt-5"><tbody><tr><td><div class="my-5 rounded-full h-10 w-10 flex items-center justify-center bg-green-100 text-green-500"><i class="fa fa-reply-all fa-flip-horizontal"></i></div></td><td class="text-green-600 font-medium">\u20A63,200</td><td class="font-medium">Received</td><td class="w-1/3"><span class="text-fuchsia-600 bg-fuchsia-150 py-3 px-7 rounded-md"><i class="fa fa-clock-o"></i> Feb 10th, 12;30pm </span></td></tr><tr><td><div class="my-5 rounded-full h-10 w-10 flex items-center justify-center bg-red-100 text-red-500"><i class="fa fa-reply-all fa-flip-vertical"></i></div></td><td class="text-red-600 font-medium">\u20A63,200</td><td class="font-medium">Received</td><td class="w-1/3"><span class="text-fuchsia-600 bg-fuchsia-150 py-3 px-7 rounded-md"><i class="fa fa-clock-o"></i> Feb 10th, 12;30pm </span></td></tr><tr><td><div class="my-5 rounded-full h-10 w-10 flex items-center justify-center bg-green-100 text-green-500"><i class="fa fa-reply-all fa-flip-horizontal"></i></div></td><td class="text-green-600 font-medium">\u20A63,200</td><td class="font-medium">Received</td><td class="w-1/3"><span class="text-fuchsia-600 bg-fuchsia-150 py-3 px-7 rounded-md"><i class="fa fa-clock-o"></i> Feb 10th, 12;30pm </span></td></tr><tr><td><div class="my-5 rounded-full h-10 w-10 flex items-center justify-center bg-green-100 text-green-500"><i class="fa fa-reply-all fa-flip-horizontal"></i></div></td><td class="text-green-600 font-medium">\u20A63,200</td><td class="font-medium">Received</td><td class="w-1/3"><span class="text-fuchsia-600 bg-fuchsia-150 py-3 px-7 rounded-md"><i class="fa fa-clock-o"></i> Feb 10th, 12;30pm </span></td></tr></tbody></table></div></div></div>',1),J={setup(a){return(i,l)=>(r(),d(x,null,[z,e("div",j,[e("div",N,[e("div",$,[F,e("div",B,[e("div",L,[e("div",R,[u(k,{circumference:80,progress:80})]),V])])])])])],64))}};m(J).mount("#app");
