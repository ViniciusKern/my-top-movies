var w=Object.defineProperty;var J=(t,e,o)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var p=(t,e,o)=>(J(t,typeof e!="symbol"?e+"":e,o),o);import{s as a,j as u,U as K,r as A,R as S,a as b}from"./vendor.3bd832fb.js";const x=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};x();const Q=a.div`
  width: 140px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 2%;
  transition: background-color 0.3s;
  cursor: pointer;
  position: relative;
`,E=a(Q)`
  height: 190px;
  margin: var(--spacing-small) 0;
  padding: var(--spacing-small);
  justify-content: center;
  gap: var(--spacing-medium);
  border: 2px dashed #8c8c8c;
  background-color: #595959;

  &:hover {
    background-color: #333;
  }

  & img {
    width: 26px;
    margin: 0 auto;
  }
`,F=a(Q)`
  padding: var(--spacing-small);
  background-color: #404040;

  &:hover {
    background-color: #595959;
  }
`,M=a.img`
  width: 100%;
  border-radius: 2%;
`,V=a.p`
  font-weight: bold;
  font-size: var(--font-size-regular);
`,U=a.div`
  position: absolute;
  top: 8px;
  padding-top: 0px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 14px;
  font-size: var(--font-size-medium);
  font-weight: bold;

  ${t=>!t.isPlaceholder&&`
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 212, 255, 0) 100%
    );
  `}
`,R=a.div`
  font-size: var(--font-size-small);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-extra-small);
`,P=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-extra-small);

  & img {
    width: 12px;
  }
`;var X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsgAAALIBa5Ro4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAK4SURBVFiFxZdPbExRFMZ/353pmyIk0rSlCaH+hKCSSoSGmTYhFhZiQxBNRGJFWNphZU0kWHchKVuJhDAtG8uWECGIP1VEQpqm80bdYzETYbw35s0UZ3Vzz7nf98u5ufe+Bw2EDQWrbShY3YiGq9s833wQ9Aj0qDSuL1SX+SAp2jPPgCXlqVf4cJn6mE6qVV8HFgS7fzIHWEwq2FWPVH0ApmM1zdUQibfA7gRrcRqNXCtbr2xxNIle8g5IxyPNS8mjieWSFNtd5uMzb4DZMSVTfA0WadvEp1o1k3XAB0eqmAPMIh0eTiJZcwfKR+8psPQPpa94H3ZqD98SA9ituS0EYTu4VrzvQGpDasP7DpyWYPTWRCvyeHuJc2OYfcDsA86Ngf9IMfP+5y2S5YPdoLOIpUBQk0HjUcR4gbOTsqHMW6DjHxlXhH1yiOf/xxyQHjvM7Qce/gf7h5jb75Sbek0q7EHc+Ifmt/HhVuWmXjsAbWGClnAXsoG/bi1dxYc71cdnqDyGhhhuPgV26i/ZnycbnpCwHzxRVZZvPoTsMtA0Q8bfEEeVDS9VJmJvQstntiOuAfMaNJ9E7FU2vB6VjH0L1BveBF1s0BzQhTjzqgCltbahcQDrrpaNBbBBUhgbGwdgkw2SSgxAe1MXje8/wFxam9YlB8D1zIB5KRSvVQXANs8YQBWtdPwi/QnAQFfKw31U+7iRknXAbs1pBzqrWD/B2KFc4YByhQOgXuBBFdhOG569sGYAgq9bYoQmQWdoDbtK90QplCsM48Nu4ATwJRp6OrKj0QDGit9mZAP49HLlCqe1hmLlEvUxrVx4Dp9eVX7UrKJkZe0ASt2F8kelMYJ3WWWL/eqbHI+s/wVkclzZYj/eZTFGytMec/cj6+OEbChYh3ctULhXz08ngN0hjWvuAXunXPg0quY7FQDY/efTIOEAAAAASUVORK5CYII=";const r=u.exports.jsx,c=u.exports.jsxs,m=u.exports.Fragment;function q(t){return c(R,{children:[c(P,{children:[r("img",{src:X})," ",t.voteAverage]}),t.releaseYear]})}var y="data:image/png;base64,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",H="data:image/png;base64,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";function k(t){var n;const{movie:e,index:o}=t,s=()=>t.onClick(o);return e?c(F,{onClick:s,children:[r(M,{src:(n=e.posterPath)!=null?n:H}),t.showAdditionalInfo&&r(q,{voteAverage:e.voteAverage,releaseYear:e.releaseYear}),r(V,{children:e.title}),t.showRank&&r(U,{children:o+1})]}):c(E,{onClick:s,children:[r("img",{src:y}),r("p",{children:"Click to add a movie"}),r(U,{isPlaceholder:!0,children:o+1})]})}const Y=a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
`,j=a.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 85%;
  background-color: #404040;
  padding: var(--spacing-medium);
  border-radius: 10px;
  z-index: 2;
`,G=a.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-medium);
  padding-bottom: var(--spacing-medium);
  padding-left: var(--spacing-medium);
`,L=a.input`
  width: 100%;
  max-width: 600px;
  height: 26px;
  padding: var(--spacing-small);
  border: none;
  border-radius: 12px;
  font-size: var(--font-size-medium);
`,D=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  width: 32px;
  height: 32px;
  background-color: #595959;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }

  img {
    width: 14px;
  }
`,z=K`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,T=a.div`
  margin: 0 auto;
  animation: ${z} 1.2s linear infinite;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 2px solid black;
  width: 26px;
  height: 26px;
  border-radius: 50%;
`;function O(){return r(T,{})}const N=a.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: 75vh;
`,Z=a.p`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  font-size: var(--font-size-large);
`;function W(t){const{movies:e}=t;return e.length?r(N,{children:e.map((o,s)=>r(k,{movie:o,index:s,showAdditionalInfo:!0,onClick:t.onClick},`${o==null?void 0:o.id}-${s}`))}):r(Z,{children:"No movies found"})}class _{constructor(){p(this,"API_KEY","8ae6c2cf72a58f068628e6fa42082e85");p(this,"API_BASE_URL","https://api.themoviedb.org/3");p(this,"POSTER_BASE_URL","https://image.tmdb.org/t/p/w300")}async searchMovie(e){return e.length?this.fetchMovies("search/movie",[`query=${e}`]):this.popularMovies()}async popularMovies(){return this.fetchMovies("movie/popular")}async fetchMovies(e,o=[]){o=o.concat(`api_key=${this.API_KEY}`);const s=`${this.API_BASE_URL}/${e}?${o.join("&")}`;return(await fetch(s).then(i=>i.json())).results.map(i=>({id:i.id,title:i.title,posterPath:i.poster_path?`${this.POSTER_BASE_URL}/${i.poster_path}`:null,voteAverage:i.vote_average,releaseYear:i.release_date?i.release_date.substr(0,4):"n/a"}))}}var $=new _;const B=A.exports.createContext({movies:[],showPickerModal:!1,currentMovieIndex:0,addMovie:()=>{},isMovieAlreadyAdded:()=>!1,openPickerModal:()=>{},closePickerModal:()=>{}});function ee(t){const[e,o]=A.exports.useState(Array(10).fill(null)),[s,n]=A.exports.useState(!1),[i,g]=A.exports.useState(0),l={movies:e,showPickerModal:s,currentMovieIndex:i,openPickerModal:d=>{g(d),n(!0)},closePickerModal:()=>n(!1),addMovie:d=>{const C=[...e];C[i]=d,o(C),n(!1)},isMovieAlreadyAdded:d=>e.some(C=>C&&C.id===d.id)};return r(B.Provider,{value:l,children:t.children})}var oe="/assets/close.9a2d719b.png";const te=document.getElementById("modal-root");function re(){const t=A.exports.useContext(B),[e,o]=A.exports.useState(!0),[s,n]=A.exports.useState(""),[i,g]=A.exports.useState([]);A.exports.useEffect(()=>{o(!0);const l=setTimeout(()=>{$.searchMovie(s.trim()).then(d=>{g(d),o(!1)})},400);return()=>clearTimeout(l)},[s]);const f=l=>{const d=i[l];if(t.isMovieAlreadyAdded(d)){alert("This movie was already added!");return}t.addMovie(i[l])},h=()=>t.closePickerModal(),v=c(G,{children:[r(L,{autoFocus:!0,type:"text",placeholder:"Search a movie...",onChange:l=>{n(l.target.value)}}),r(D,{onClick:h,children:r("img",{src:oe})})]});return S.createPortal(c(m,{children:[r(Y,{onClick:h}),c(j,{children:[v,e&&r(O,{}),!e&&r(W,{movies:i,onClick:f})]})]}),te)}const ie=a.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: stretch;
  max-width: 1200px;
  padding: var(--spacing-small);
  text-align: center;
  margin: 0 auto;
  background-color: #404040;
  border-radius: 5px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`,ne=a.h2`
  text-align: center;
  margin: var(--spacing-medium);
`,ae=a.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-medium);
`,se=a.img`
  max-width: 300px;
`;var Ae="/assets/themoviedb.9665a76b.svg";function de(){const t=A.exports.useContext(B),e=o=>{t.openPickerModal(o)};return c(m,{children:[t.showPickerModal&&r(re,{}),r(ne,{children:"My Top Movies"}),r(ie,{children:t.movies.map((o,s)=>r(k,{index:s,movie:o,showRank:!0,onClick:e},`${o==null?void 0:o.id}-${s}`))}),r(ae,{children:r(se,{src:Ae})})]})}function le(){return r(ee,{children:r(de,{})})}S.render(r(b.StrictMode,{children:r(le,{})}),document.getElementById("root"));
