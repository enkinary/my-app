(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(e,t,a){e.exports=a(66)},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(13),r=a.n(c),i=a(11),l=a(22),s={number:0};var m=Object(i.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"counter/INCREMENT":return Object(l.a)({},e,{number:e.number+1});case"counter/DECREMENT":return Object(l.a)({},e,{number:e.number-1});default:return e}}}),u=a(15),d=a(1),h=a(2),p=a(4),b=a(3),f=a(5);a(47),a(64);a(65);var v=a(18),E=a.n(v),g=["dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.7.dcm","dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.8.dcm","dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.9.dcm","dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.10.dcm","dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.11.dcm","dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.12.dcm"],O=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={activeViewportIndex:0,viewports:[0],tools:[{name:"Wwwc",mode:"active",modeOptions:{mouseButtonMask:1}},{name:"Zoom",mode:"active",modeOptions:{mouseButtonMask:2}},{name:"Pan",mode:"active",modeOptions:{mouseButtonMask:4}},"Point","Line","Polyline","Polygon","RectangleRoi","EllipticalRoi","Length","Angle","Bidirectional","FreehandRoi","Eraser",{name:"StackScrollMouseWheel",mode:"active"},{name:"PanMultiTouch",mode:"active"},{name:"ZoomTouchPinch",mode:"active"},{name:"StackScrollMultiTouch",mode:"active"}],imageIds:g,activeTool:"Wwwc",imageIdIndex:0,isPlaying:!1,frameRate:22},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h2",null,"Cornerstone Viewport "),o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},this.state.viewports.map((function(t){return o.a.createElement(E.a,{key:t,style:{minWidth:"40vw",height:"60vh",flex:"1"},tools:e.state.tools,imageIds:e.state.imageIds,imageIdIndex:e.state.imageIdIndex,isPlaying:e.state.isPlaying,frameRate:e.state.frameRate,className:e.state.activeViewportIndex===t?"active":"",activeTool:e.state.activeTool,setViewportActive:function(){e.setState({activeViewportIndex:t})}})}))),o.a.createElement("div",{style:{marginTop:"0px"}},o.a.createElement("form",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{onClick:function(){return e.setState({activeTool:"Point"})},style:{width:"60px",height:"30px",backgroundColor:"gray",color:"white",float:"left"}},"point"),o.a.createElement("div",{onClick:function(){return e.setState({activeTool:"Line"})},style:{width:"60px",height:"30px",backgroundColor:"gray",color:"white",float:"left"}},"line"),o.a.createElement("div",{onClick:function(){return e.setState({activeTool:"Polyline"})},style:{width:"60px",height:"30px",backgroundColor:"gray",color:"white",float:"left"}},"polyline"),o.a.createElement("div",{onClick:function(){return e.setState({activeTool:"Polygon"})},style:{width:"60px",height:"30px",backgroundColor:"gray",color:"white",float:"left"}},"polygon"),o.a.createElement("div",{onClick:function(){return e.setState({activeTool:"RectangleRoi"})},style:{width:"60px",height:"30px",backgroundColor:"gray",color:"white",float:"left"}},"box"),o.a.createElement("div",{onClick:function(){return e.setState({activeTool:"EllipticalRoi"})},style:{width:"60px",height:"30px",backgroundColor:"gray",color:"white",float:"left"}},"circle"),o.a.createElement("div",{onClick:function(){return e.setState({activeTool:"Eraser"})},style:{width:"60px",height:"30px",backgroundColor:"gray",color:"white",float:"left"}},"eraser")))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={checked:!1,optionNum:3},a.addOption=function(){a.setState({optionNum:a.state.optionNum+1})},a.minusOption=function(){a.setState({optionNum:a.state.optionNum-1})},a.handleChange=function(e){var t=e.target.checked;a.setState({checked:t})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"checkbox",checked:this.state.checked,onChange:this.handleChange})}}]),t}(o.a.Component),w=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).handleOptionChange=function(e){a.setState({selectedOption:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),console.log("You have submitted:",a.state.selectedOption)},a.state={selectedOption:"option1",optionNum:3},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("p",{className:"title"},"This is radiobutton"),o.a.createElement("div",{className:"row mt-5"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("div",{className:"form-check"},o.a.createElement("label",null,o.a.createElement("input",{type:"radio",name:"react-tips",value:"option1",checked:"option1"===this.state.selectedOption,onChange:this.handleOptionChange,className:"form-check-input"}),"Option 1")),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",null,o.a.createElement("input",{type:"radio",name:"react-tips",value:"option2",checked:"option2"===this.state.selectedOption,onChange:this.handleOptionChange,className:"form-check-input"}),"Option 2")),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",null,o.a.createElement("input",{type:"radio",name:"react-tips",value:"option3",checked:"option3"===this.state.selectedOption,onChange:this.handleOptionChange,className:"form-check-input"}),"Option 3"))))))}}]),t}(n.Component),N=a(6),C=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(b.a)(t).call(this))).state={showMenu:!1,optionNum:3},e.showMenu=e.showMenu.bind(Object(N.a)(e)),e.closeMenu=e.closeMenu.bind(Object(N.a)(e)),e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"showMenu",value:function(e){var t=this;e.preventDefault(),this.setState({showMenu:!0},(function(){document.addEventListener("click",t.closeMenu)}))}},{key:"closeMenu",value:function(e){var t=this;this.dropdownMenu.contains(e.target)||this.setState({showMenu:!1},(function(){document.removeEventListener("click",t.closeMenu)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("p",{className:"title"},"This is dropdown menu"),o.a.createElement("button",{onClick:this.showMenu},"Show menu"),this.state.showMenu?o.a.createElement("div",{className:"menu",ref:function(t){e.dropdownMenu=t}},o.a.createElement("button",null," Menu item 1 "),o.a.createElement("button",null," Menu item 2 "),o.a.createElement("button",null," Menu item 3 ")):null)}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).handleSubmit=function(e){alert("Submitted name: ".concat(e))},a.handleChange=function(e){a.setState({names:e.target.value})},a.state={names:"",lineNum:4},a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a.handleChange=a.handleChange.bind(Object(N.a)(a)),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"flex"},o.a.createElement("div",{className:"content flex"},o.a.createElement("div",{className:"sandbox flex"},o.a.createElement("p",{className:"title"},"This is text input field"),o.a.createElement("form",{id:"nameForm",className:"names flex"},o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{id:"names",name:"hard",value:this.state.names,cols:100,rows:this.state.lineNum,onChange:this.handleChange,wrap:"hard"}))),o.a.createElement("button",{id:"formButton",form:"nameForm",type:"submit"},"Submit"))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).handleTextArea=function(e){var t=0;if(13===e.keyCode&&t++,t>=1)return e.preventDefault(),!1},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",{className:"title"},"This is text line field"),o.a.createElement("textarea",{onKeyDown:this.handleTextArea,cols:100,rows:1}))}}]),t}(o.a.Component),x=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).handleSubmit=function(e){alert("Submitted name: ".concat(e))},a.handleChange=function(e){a.setState({names:e.target.value})},a.state={names:"",lineNum:8},a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a.handleChange=a.handleChange.bind(Object(N.a)(a)),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"flex"},o.a.createElement("div",{className:"content flex"},o.a.createElement("div",{className:"sandbox flex"},o.a.createElement("p",{className:"title"},"Tag selection"),o.a.createElement("form",{id:"nameForm",className:"names flex"},o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{id:"names",name:"hard",value:this.state.names,cols:30,rows:this.state.lineNum,onChange:this.handleChange,wrap:"hard"}))),o.a.createElement("button",{id:"formButton",form:"nameForm",type:"submit"},"Submit"),o.a.createElement("div",{className:"nametags flex"},o.a.createElement("div",{className:"nametags-group flex"},this.state.names.split("\n").filter((function(e){return e})).map((function(t,a){return o.a.createElement("button",{key:a,type:"button",className:"nametag",onClick:function(){return e.handleSubmit(t)}},t)})))))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).options=["Option 1","Option 2","Option 3"],a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"container"},o.a.createElement("div",{className:"tag"},o.a.createElement(x,null)),o.a.createElement("div",{className:"checkbox"},o.a.createElement("p",{className:"title"},"This is checkbox menu"),this.options.map((function(e){return o.a.createElement("div",{className:"option"},o.a.createElement("p",{className:"option_name"},o.a.createElement(y,null)," ",e))}))),o.a.createElement("div",{className:"radiobutton"},o.a.createElement(w,null)),o.a.createElement("div",{className:"dropdown"},o.a.createElement(C,null)),o.a.createElement("div",{className:"linefield"},o.a.createElement(k,null)),o.a.createElement("div",{className:"textfield"},o.a.createElement(j,null)))}}]),t}(o.a.Component),T=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).handleSubmit=function(e){alert("Submitted name: ".concat(e))},a.handleChange=function(e){a.setState({names:e.target.value})},a.state={names:"",lineNum:4},a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a.handleChange=a.handleChange.bind(Object(N.a)(a)),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"flex"},o.a.createElement("div",{className:"content flex"},o.a.createElement("div",{className:"sandbox flex"},o.a.createElement("form",{id:"nameForm",className:"names flex"},o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{id:"names",name:"hard",value:this.state.names,cols:100,rows:this.state.lineNum,onChange:this.handleChange,wrap:"hard"}))),o.a.createElement("button",{id:"formButton",form:"nameForm",type:"submit"},"Submit"))))}}]),t}(n.Component),M=a(12),I=a.n(M),P=function(e){var t=e.value,a=e.onIncrement,n=e.onDecrement;return o.a.createElement("div",null,o.a.createElement("h1",null,t),o.a.createElement("button",{onClick:a},"+"),o.a.createElement("button",{onClick:n},"-"))},R=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).handleIncrement=function(){a.props.increment()},a.handleDecrement=function(){a.props.decrement()},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.number;return o.a.createElement(P,{value:e,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement})}}]),t}(n.Component),D={increment:function(){return{type:"counter/INCREMENT"}},decrement:function(){return{type:"counter/DECREMENT"}}},_=(Object(u.b)((function(e){return{number:e.counter.number}}),D)(R),function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"container"},o.a.createElement("div",{className:"ViewportRegion"},o.a.createElement(O,null)),o.a.createElement("div",{className:"DialogRegion"},o.a.createElement(S,null)),o.a.createElement("div",{className:"ExplanationRegion"},o.a.createElement(T,null)))}}]),t}(n.Component)),W=a(19),A=a.n(W),F=a(14),L=a.n(F),z=a(36),B=a.n(z),V=a(8),H=a.n(V),X=a(37),J=a.n(X);var U=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Z=Object(i.c)(m,U);H.a.external.cornerstone=I.a,H.a.external.Hammer=J.a,H.a.external.cornerstoneMath=B.a,H.a.init(),H.a.textStyle.setFont("16px ".concat("Work Sans, Roboto, OpenSans, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif")),H.a.toolStyle.setToolWidth(2),H.a.toolColors.setToolColor("rgb(255, 255, 0)"),H.a.toolColors.setActiveColor("rgb(0, 255, 0)"),H.a.store.state.touchProximity=40,L.a.external.cornerstone=I.a,L.a.external.dicomParser=A.a,L.a.webWorkerManager.initialize({maxWebWorkers:navigator.hardwareConcurrency||1,startWebWorkersOnDemand:!0,taskConfiguration:{decodeTask:{initializeCodecsOnStartup:!1,usePDFJS:!1,strict:!1}}}),window.cornerstone=I.a,window.cornerstoneTools=H.a,r.a.render(o.a.createElement(u.a,{store:Z},o.a.createElement(_,null)),document.getElementById("root"))}},[[38,1,2]]]);