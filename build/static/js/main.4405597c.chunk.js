(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{18:function(e,t,i){e.exports={cnt:"Favorites_cnt__3Qfcb",movieItem:"Favorites_movieItem__3jOqZ",titleBuscador:"Favorites_titleBuscador__15HXw",container:"Favorites_container__3UfMW",btn:"Favorites_btn__2ydiy"}},37:function(e,t,i){},44:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),s=i(19),a=i.n(s),o=(i(37),i(13)),r=i(14),l=i(16),j=i(15),u=i(11);var v=i(18),b=i.n(v),h=i(2),d=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:b.a.titleBuscador,children:"Pel\xedculas Favoritas"}),Object(h.jsx)("ul",{className:b.a.container,children:this.props.movies.moviesFavourites.map((function(t){return Object(h.jsxs)("li",{className:b.a.movieItem,children:[Object(h.jsxs)("span",{children:[t.title," "]}),Object(h.jsx)("button",{className:b.a.btn,onClick:function(){return e.props.removeMovieFavorite(t.id)},children:"X"})]})}))})]})}}]),i}(n.Component);var m=Object(u.b)((function(e){return{movies:e}}),(function(e){return{removeMovieFavorite:function(t){return e({type:"REMOVE_MOVIE_FAVORITE",payload:t})}}}))(d),p=i(9),O=(i(44),function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={title:""},n}return Object(r.a)(i,[{key:"handleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.getMovies(this.state.title)}},{key:"render",value:function(){var e=this;console.log(this.props.movies);var t=this.state.title;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"title-buscador",children:"Movie App"}),Object(h.jsx)("form",{className:"form-container",onSubmit:function(t){return e.handleSubmit(t)},children:Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{className:"label",htmlFor:"title",children:"Pel\xedcula: "}),Object(h.jsx)("input",{className:"inputMovie",type:"text",id:"title",autoComplete:"off",value:t,onChange:function(t){return e.handleChange(t)}}),Object(h.jsx)("button",{className:"btn",type:"submit",children:"BUSCAR"})]})}),Object(h.jsx)("ul",{className:"ul-movies-container",children:this.props.movies?this.props.movies.map((function(t){return Object(h.jsx)(h.Fragment,{children:e.props.favMovies.filter((function(e){return e.id===t.imdbID})).length?"":Object(h.jsxs)("li",{className:"movie-item",children:[Object(h.jsx)("img",{src:t.Poster,alt:"Poster"}),Object(h.jsx)(p.b,{to:"/movie/".concat(t.imdbID),children:Object(h.jsx)("span",{children:t.Title})}),Object(h.jsx)("button",{className:"btn",onClick:function(){return e.props.addMovieFavorite({title:t.Title,id:t.imdbID})},children:"Fav"})]})})})):""})]})}}]),i}(n.Component));var x=Object(u.b)((function(e){return{movies:e.moviesLoaded,favMovies:e.moviesFavourites}}),(function(e){return{addMovieFavorite:function(t){return e({type:"ADD_MOVIE_FAVORITE",payload:t})},getMovies:function(t){return e((i=t,function(e){return fetch("http://www.omdbapi.com/?apikey=20dac387&s="+i).then((function(e){return e.json()})).then((function(t){e({type:"GET_MOVIES",payload:t})}))}));var i}}}))(O),f=i(27);i(49);function y(){return Object(h.jsxs)("header",{className:"navbar",children:[Object(h.jsx)("div",{children:Object(h.jsx)(p.c,{exact:!0,to:"/",children:Object(h.jsx)(f.a,{className:"icon-movie"})})}),Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{className:"list",children:Object(h.jsxs)("li",{className:"list-item",children:[Object(h.jsx)(p.c,{exact:!0,to:"/",children:"Home"}),Object(h.jsx)(p.c,{to:"/favs",children:"Favoritas"})]})})})]})}var g=i(4),D=(i(50),i(20)),_=i(30),N=i(31),F=i(28),M=i(29),E=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getMovieDetail(e)}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h2",{className:"text",children:["Movie Details",Object(h.jsx)(F.a,{className:"iconTitleStyling"})]}),Object(h.jsxs)("div",{className:"container2",children:[Object(h.jsx)("img",{src:this.props.movieDetail.Poster,className:"imgBackgroung",alt:""}),Object(h.jsxs)("section",{className:"movieSection",children:[Object(h.jsxs)("h3",{children:[this.props.movieDetail.Title," ",Object(h.jsx)(D.a,{}),Object(h.jsx)(M.a,{style:{color:"yellow"}})]}),Object(h.jsxs)("div",{className:"iconsClass",children:[Object(h.jsx)(D.b,{}),Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("span",{children:"Compartir"})}),Object(h.jsx)(_.a,{className:"icons"}),Object(h.jsx)(N.a,{className:"icons"})]}),Object(h.jsx)("p",{children:this.props.movieDetail.Title}),Object(h.jsx)("p",{children:this.props.movieDetail.Plot}),Object(h.jsxs)("div",{className:"additinalInfo",children:[Object(h.jsxs)("p",{children:["Director: ",this.props.movieDetail.Director]}),Object(h.jsxs)("p",{children:["Genre: ",this.props.movieDetail.Genre]}),Object(h.jsxs)("p",{children:["Actors: ",this.props.movieDetail.Actors]}),Object(h.jsxs)("p",{children:["Awars: ",this.props.movieDetail.Awars]})]})]})]}),Object(h.jsx)("footer",{children:Object(h.jsxs)("ul",{className:"footerStyling",children:[Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:["Production: ",this.props.movieDetail.Production]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:["Language: ",this.props.movieDetail.Language]})})]})})]})}}]),i}(c.a.Component);var I=Object(u.b)((function(e){return{movieDetail:e.movieDetail}}),(function(e){return{getMovieDetail:function(t){return e((i=t,function(e){return fetch("http://www.omdbapi.com/?apikey=20dac387&i="+i).then((function(e){return e.json()})).then((function(t){e({type:"GET_MOVIE_DETAIL",payload:t})}))}));var i}}}))(E);var w=function(){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(y,{}),Object(h.jsx)(g.a,{exact:!0,path:"/",component:x}),Object(h.jsx)(g.a,{path:"/favs",component:m}),Object(h.jsx)(g.a,{path:"/movie/:id",component:I})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=i(21),T=i(10),A={moviesFavourites:[],moviesLoaded:[],movieDetail:{}};var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return"ADD_MOVIE_FAVORITE"===t.type?Object(T.a)(Object(T.a)({},e),{},{moviesFavourites:e.moviesFavourites.concat(t.payload)}):"GET_MOVIES"===t.type?Object(T.a)(Object(T.a)({},e),{},{moviesLoaded:t.payload.Search}):"REMOVE_MOVIE_FAVORITE"===t.type?Object(T.a)(Object(T.a)({},e),{},{moviesFavourites:e.moviesFavourites.filter((function(e){return e.id!==t.payload}))}):"GET_MOVIE_DETAIL"===t.type?Object(T.a)(Object(T.a)({},e),{},{movieDetail:t.payload}):e},C=i(32),S=Object(k.b)(V,Object(k.a)(C.a));a.a.render(Object(h.jsx)(u.a,{store:S,children:Object(h.jsx)(p.a,{children:Object(h.jsx)(w,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.4405597c.chunk.js.map