(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n(4),i=n(3),o=n(5),s=n(0),u=n.n(s),l=n(8),m=n.n(l),h=n(6);n(15),n(16);var d=function(e){var t="wi wi-owm-"+e.iconName;return u.a.createElement("div",{className:"weather-icon"},u.a.createElement("i",{className:t}))};n(17);var p=function(e){return u.a.createElement("h1",{className:"location-name"},e.content)};n(18);var f=function(e){return u.a.createElement("h5",{className:"info-item"},e.name,e.content,e.units)};n(19);var v=function(e){return u.a.createElement("h3",{className:"subHeading"},e.content)},y=(n(20),"https://api.openweathermap.org/data/2.5/weather?q="),g="&appid=3fbf7e30fe0764f00597aed750bf6117",w="&units=metric",b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).sendToParent=function(){n.props.callbackFromParent(n.state.cityName)},n.fetchWeather=function(){var e=y+n.state.searchValue+g+w;n.setState({loading:!0}),fetch(e).then(function(e){return e.json()}).then(function(e){return n.setState({cityName:e.name,weatherDescription:e.weather[0].description,icon:e.weather[0].id,temp:e.main.temp,pressure:e.main.pressure,humidity:e.main.humidity,wind:e.wind.speed,error:null,loading:!1})}).catch(function(e){return n.setState({cityName:"",weatherDescription:"",icon:"",temp:"",pressure:"",humidity:"",wind:"",error:e.message,loading:!1})})},n.fetchAndSend=function(){n.fetchWeather(),setTimeout(n.sendToParent,333)},n.state={error:null,loading:!1,cityName:null,weatherDescription:null,icon:null,temp:null,pressure:null,humidity:null,wind:null,searchValue:"London, UK"},n.updateInput=n.updateInput.bind(Object(h.a)(Object(h.a)(n))),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"updateInput",value:function(e){this.setState({searchValue:e.target.value})}},{key:"componentDidMount",value:function(){this.fetchWeather()}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.error,a=e.cityName,r=e.weatherDescription,c=e.temp,i=e.pressure,o=e.humidity,s=e.wind,l=this.state.icon;return u.a.createElement("div",{className:"weather-panel"},u.a.createElement("div",{className:"weather-dashboard"},u.a.createElement("div",{className:"weather-left"},u.a.createElement(d,{iconName:l})),u.a.createElement("div",{className:"weather-info"},u.a.createElement("input",{type:"text",onChange:this.updateInput,placeholder:"London, UK"}),u.a.createElement("button",{disabled:t,onClick:this.fetchAndSend},"Search"),t?u.a.createElement("div",{className:"loader"},"Loading..."):n?u.a.createElement("div",null,n):u.a.createElement("div",null,u.a.createElement(p,{content:a}),u.a.createElement(v,{content:r}),u.a.createElement(f,{name:"Temperature: ",content:c,units:"\xb0"}),u.a.createElement(f,{name:"Wind: ",content:s,units:"m/s"}),u.a.createElement(f,{name:"Pressure: ",content:i,units:"hPa"}),u.a.createElement(f,{name:"Humidity: ",content:o,units:"%"})))))}}]),t}(u.a.Component),E=(n(21),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).fetchPhotos=function(){var e=Math.floor(10*Math.random());fetch(n.makeRequestURL()).then(function(e){return e.json()}).then(function(t){return n.setState({image:t.items[e].link,error:null,loading:!1})}).catch(function(e){return n.setState({result:"",error:e.message,loading:!1})})},n.state={location:n.props.place,image:null,error:null,loading:!1},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.place!==e.place&&(this.setState({location:this.props.place}),this.fetchPhotos())}},{key:"makeRequestURL",value:function(){return"https://www.googleapis.com/customsearch/v1?"+("q="+this.props.place+"_city")+"&cx=004252786716002317765:mskntj5y7hw&key=AIzaSyAkMHsrBPOr_eZOzjgrIMJyhYMQQCzt1Rs&searchType=image&imgSize=huge&imgType=photo"}},{key:"componentDidMount",value:function(){this.fetchPhotos()}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.error,a=e.image;return u.a.createElement("div",null,t?u.a.createElement("div",null):n?u.a.createElement("div",null,n):u.a.createElement("div",{className:"background",style:{backgroundImage:"url("+a+")"}}))}}]),t}(u.a.Component)),N=(n(22),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).getCityName=function(e){n.setState({cityName:e}),console.log("index.js on update: "+n.state.cityName)},n.state={cityName:"London"},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(E,{place:this.state.cityName}),u.a.createElement(b,{callbackFromParent:this.getCityName,className:"weather"}))}}]),t}(u.a.Component));m.a.render(u.a.createElement(N,null),document.querySelector("#root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.bddf9b7b.chunk.js.map