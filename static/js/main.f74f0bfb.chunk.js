(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(3),l=n.n(s),c=(n(14),n(1)),o=n(4),i=n(5),u=n(7),d=n(6),h=n(8),m=function(e){var t=e.type,n=e.value,a=e.placeholder,s=e.onKeyPress,l=e.onInputChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:t,value:n,placeholder:a,onKeyPress:function(e){return s(e)},onChange:function(e){return l(e)}}))},k=function(e){var t=e.children,n=e.type,a=e.classes,s=e.onClick;return r.a.createElement("button",{type:n,className:a,onClick:s},t)},f=function(e){var t=e.filter,n=e.setFilter;return r.a.createElement("div",{className:"actions"},r.a.createElement(k,{classes:"all"===t?"active":"",onClick:function(){return n("all")}},"All"),r.a.createElement(k,{classes:"completed"===t?"active":"",onClick:function(){return n("completed")}},"Completed"),r.a.createElement(k,{classes:"incompleted"===t?"active":"",onClick:function(){return n("incompleted")}},"Incompleted"))},p=function(e){var t=e.id,n=e.value,a=e.placeholder,s=e.checked,l=e.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:t,type:"checkbox",value:n,checked:s,placeholder:a,onChange:function(e){return l(e)}}))},v=(n(15),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:[{text:"Buy bread",done:!1},{text:"Do Homework",done:!0},{text:"Throw trash",done:!1}],filter:"all",task:""},n.handleInputChange=function(e){n.setState({task:e.target.value})},n.handleEnterPress=function(e){"Enter"===e.key&&n.addTask()},n.handleSetFilter=function(e){n.setState({filter:e})},n.updateTaskStatus=function(e){var t=Object(c.a)(n.state.tasks);t[e].done=!t[e].done,n.setState({tasks:t})},n.deleteTask=function(e){var t=Object(c.a)(n.state.tasks);t=t.filter((function(t){return t.text!==e.text})),n.setState({tasks:t})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"addTask",value:function(){var e=this.state.task,t=Object(c.a)(this.state.tasks),n=""!==e,a=t.find((function(t){return t.text===e}));n&&!a?(t.push({text:e,done:!1}),this.setState({tasks:t,task:""})):this.setState({task:""})}},{key:"filteredTasks",value:function(){var e=this;return this.state.tasks.filter((function(t){return"completed"===e.state.filter?t.done:"incompleted"===e.state.filter?!t.done:t}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.task,a=t.filter;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"todos shadow"},r.a.createElement("div",null,r.a.createElement("h3",null,"My Todo List"),r.a.createElement("div",{className:"input-group"},r.a.createElement(m,{type:"text",placeholder:"I need to..",onInputChange:this.handleInputChange,onKeyPress:this.handleEnterPress,value:n}),r.a.createElement("button",{onClick:function(){return e.addTask()}},"Add")),r.a.createElement("div",{className:"divider shadow"}),r.a.createElement("div",{className:"task-group"},this.filteredTasks().map((function(t,n){return r.a.createElement("div",{key:n,className:"task"},r.a.createElement(p,{id:n,type:"checkbox",checked:t.done,onChange:function(){return e.updateTaskStatus(n)}}),r.a.createElement("label",{htmlFor:n},t.text),r.a.createElement("span",{title:"Delete",onClick:function(){return e.deleteTask(t)}},"X"))})))),r.a.createElement(f,{filter:a,setFilter:this.handleSetFilter})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f74f0bfb.chunk.js.map