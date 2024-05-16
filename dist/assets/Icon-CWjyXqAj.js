import{r as Gt,c as na,R as dn,j as aa}from"./index-mgq3k60v.js";var Bi={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},ra={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Gi=ra;function D(t){return Array.isArray?Array.isArray(t):gn(t)==="[object Array]"}const ia=1/0;function oa(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-ia?"-0":e}function sa(t){return t==null?"":oa(t)}function $(t){return typeof t=="string"}function hn(t){return typeof t=="number"}function ca(t){return t===!0||t===!1||fa(t)&&gn(t)=="[object Boolean]"}function vn(t){return typeof t=="object"}function fa(t){return vn(t)&&t!==null}function N(t){return t!=null}function Xt(t){return!t.trim().length}function gn(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const la="Incorrect 'index' type",ua=t=>`Invalid value for key ${t}`,ma=t=>`Pattern length exceeds max of ${t}.`,da=t=>`Missing ${t} property in key`,ha=t=>`Property 'weight' in key '${t}' must be a positive integer`,Le=Object.prototype.hasOwnProperty;class va{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(a=>{let r=pn(a);this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(a=>{a.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function pn(t){let e=null,n=null,a=null,r=1,i=null;if($(t)||D(t))a=t,e=Re(t),n=qt(t);else{if(!Le.call(t,"name"))throw new Error(da("name"));const o=t.name;if(a=o,Le.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(ha(o));e=Re(o),n=qt(o),i=t.getFn}return{path:e,id:n,weight:r,src:a,getFn:i}}function Re(t){return D(t)?t:t.split(".")}function qt(t){return D(t)?t.join("."):t}function ga(t,e){let n=[],a=!1;const r=(i,o,s)=>{if(N(i))if(!o[s])n.push(i);else{let c=o[s];const l=i[c];if(!N(l))return;if(s===o.length-1&&($(l)||hn(l)||ca(l)))n.push(sa(l));else if(D(l)){a=!0;for(let f=0,u=l.length;f<u;f+=1)r(l[f],o,s+1)}else o.length&&r(l,o,s+1)}};return r(t,$(e)?e.split("."):e,0),a?n:n[0]}const pa={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ba={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},ya={location:0,threshold:.6,distance:100},wa={useExtendedSearch:!1,getFn:ga,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var g={...ba,...pa,...ya,...wa};const ka=/[^ ]+/g;function xa(t=1,e=3){const n=new Map,a=Math.pow(10,e);return{get(r){const i=r.match(ka).length;if(n.has(i))return n.get(i);const o=1/Math.pow(i,.5*t),s=parseFloat(Math.round(o*a)/a);return n.set(i,s),s},clear(){n.clear()}}}class ye{constructor({getFn:e=g.getFn,fieldNormWeight:n=g.fieldNormWeight}={}){this.norm=xa(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,a)=>{this._keysMap[n.id]=a})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,$(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();$(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,a=this.size();n<a;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!N(e)||Xt(e))return;let a={v:e,i:n,n:this.norm.get(e)};this.records.push(a)}_addObject(e,n){let a={i:n,$:{}};this.keys.forEach((r,i)=>{let o=r.getFn?r.getFn(e):this.getFn(e,r.path);if(N(o)){if(D(o)){let s=[];const c=[{nestedArrIndex:-1,value:o}];for(;c.length;){const{nestedArrIndex:l,value:f}=c.pop();if(N(f))if($(f)&&!Xt(f)){let u={v:f,i:l,n:this.norm.get(f)};s.push(u)}else D(f)&&f.forEach((u,m)=>{c.push({nestedArrIndex:m,value:u})})}a.$[i]=s}else if($(o)&&!Xt(o)){let s={v:o,n:this.norm.get(o)};a.$[i]=s}}}),this.records.push(a)}toJSON(){return{keys:this.keys,records:this.records}}}function bn(t,e,{getFn:n=g.getFn,fieldNormWeight:a=g.fieldNormWeight}={}){const r=new ye({getFn:n,fieldNormWeight:a});return r.setKeys(t.map(pn)),r.setSources(e),r.create(),r}function Aa(t,{getFn:e=g.getFn,fieldNormWeight:n=g.fieldNormWeight}={}){const{keys:a,records:r}=t,i=new ye({getFn:e,fieldNormWeight:n});return i.setKeys(a),i.setIndexRecords(r),i}function St(t,{errors:e=0,currentLocation:n=0,expectedLocation:a=0,distance:r=g.distance,ignoreLocation:i=g.ignoreLocation}={}){const o=e/t.length;if(i)return o;const s=Math.abs(a-n);return r?o+s/r:s?1:o}function Sa(t=[],e=g.minMatchCharLength){let n=[],a=-1,r=-1,i=0;for(let o=t.length;i<o;i+=1){let s=t[i];s&&a===-1?a=i:!s&&a!==-1&&(r=i-1,r-a+1>=e&&n.push([a,r]),a=-1)}return t[i-1]&&i-a>=e&&n.push([a,i-1]),n}const J=32;function Ea(t,e,n,{location:a=g.location,distance:r=g.distance,threshold:i=g.threshold,findAllMatches:o=g.findAllMatches,minMatchCharLength:s=g.minMatchCharLength,includeMatches:c=g.includeMatches,ignoreLocation:l=g.ignoreLocation}={}){if(e.length>J)throw new Error(ma(J));const f=e.length,u=t.length,m=Math.max(0,Math.min(a,u));let h=i,p=m;const y=s>1||c,w=y?Array(u):[];let E;for(;(E=t.indexOf(e,p))>-1;){let _=St(e,{currentLocation:E,expectedLocation:m,distance:r,ignoreLocation:l});if(h=Math.min(_,h),p=E+f,y){let L=0;for(;L<f;)w[E+L]=1,L+=1}}p=-1;let k=[],x=1,M=f+u;const I=1<<f-1;for(let _=0;_<f;_+=1){let L=0,C=M;for(;L<C;)St(e,{errors:_,currentLocation:m+C,expectedLocation:m,distance:r,ignoreLocation:l})<=h?L=C:M=C,C=Math.floor((M-L)/2+L);M=C;let xt=Math.max(1,m-C+1),Bt=o?u:Math.min(m+C,u)+f,nt=Array(Bt+2);nt[Bt+1]=(1<<_)-1;for(let j=Bt;j>=xt;j-=1){let At=j-1,Te=n[t.charAt(At)];if(y&&(w[At]=+!!Te),nt[j]=(nt[j+1]<<1|1)&Te,_&&(nt[j]|=(k[j+1]|k[j])<<1|1|k[j+1]),nt[j]&I&&(x=St(e,{errors:_,currentLocation:At,expectedLocation:m,distance:r,ignoreLocation:l}),x<=h)){if(h=x,p=At,p<=m)break;xt=Math.max(1,2*m-p)}}if(St(e,{errors:_+1,currentLocation:m,expectedLocation:m,distance:r,ignoreLocation:l})>h)break;k=nt}const R={isMatch:p>=0,score:Math.max(.001,x)};if(y){const _=Sa(w,s);_.length?c&&(R.indices=_):R.isMatch=!1}return R}function Oa(t){let e={};for(let n=0,a=t.length;n<a;n+=1){const r=t.charAt(n);e[r]=(e[r]||0)|1<<a-n-1}return e}class yn{constructor(e,{location:n=g.location,threshold:a=g.threshold,distance:r=g.distance,includeMatches:i=g.includeMatches,findAllMatches:o=g.findAllMatches,minMatchCharLength:s=g.minMatchCharLength,isCaseSensitive:c=g.isCaseSensitive,ignoreLocation:l=g.ignoreLocation}={}){if(this.options={location:n,threshold:a,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:c,ignoreLocation:l},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const f=(m,h)=>{this.chunks.push({pattern:m,alphabet:Oa(m),startIndex:h})},u=this.pattern.length;if(u>J){let m=0;const h=u%J,p=u-h;for(;m<p;)f(this.pattern.substr(m,J),m),m+=J;if(h){const y=u-J;f(this.pattern.substr(y),y)}}else f(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:a}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let p={isMatch:!0,score:0};return a&&(p.indices=[[0,e.length-1]]),p}const{location:r,distance:i,threshold:o,findAllMatches:s,minMatchCharLength:c,ignoreLocation:l}=this.options;let f=[],u=0,m=!1;this.chunks.forEach(({pattern:p,alphabet:y,startIndex:w})=>{const{isMatch:E,score:k,indices:x}=Ea(e,p,y,{location:r+w,distance:i,threshold:o,findAllMatches:s,minMatchCharLength:c,includeMatches:a,ignoreLocation:l});E&&(m=!0),u+=k,E&&x&&(f=[...f,...x])});let h={isMatch:m,score:m?u/this.chunks.length:1};return m&&a&&(h.indices=f),h}}class Q{constructor(e){this.pattern=e}static isMultiMatch(e){return je(e,this.multiRegex)}static isSingleMatch(e){return je(e,this.singleRegex)}search(){}}function je(t,e){const n=t.match(e);return n?n[1]:null}class Ia extends Q{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class _a extends Q{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const a=e.indexOf(this.pattern)===-1;return{isMatch:a,score:a?0:1,indices:[0,e.length-1]}}}class Pa extends Q{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ma extends Q{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Ca extends Q{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Na extends Q{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class wn extends Q{constructor(e,{location:n=g.location,threshold:a=g.threshold,distance:r=g.distance,includeMatches:i=g.includeMatches,findAllMatches:o=g.findAllMatches,minMatchCharLength:s=g.minMatchCharLength,isCaseSensitive:c=g.isCaseSensitive,ignoreLocation:l=g.ignoreLocation}={}){super(e),this._bitapSearch=new yn(e,{location:n,threshold:a,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:c,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class kn extends Q{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,a;const r=[],i=this.pattern.length;for(;(a=e.indexOf(this.pattern,n))>-1;)n=a+i,r.push([a,n-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const te=[Ia,kn,Pa,Ma,Na,Ca,_a,wn],Fe=te.length,Ta=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,La="|";function Ra(t,e={}){return t.split(La).map(n=>{let a=n.trim().split(Ta).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=a.length;i<o;i+=1){const s=a[i];let c=!1,l=-1;for(;!c&&++l<Fe;){const f=te[l];let u=f.isMultiMatch(s);u&&(r.push(new f(u,e)),c=!0)}if(!c)for(l=-1;++l<Fe;){const f=te[l];let u=f.isSingleMatch(s);if(u){r.push(new f(u,e));break}}}return r})}const ja=new Set([wn.type,kn.type]);class Fa{constructor(e,{isCaseSensitive:n=g.isCaseSensitive,includeMatches:a=g.includeMatches,minMatchCharLength:r=g.minMatchCharLength,ignoreLocation:i=g.ignoreLocation,findAllMatches:o=g.findAllMatches,location:s=g.location,threshold:c=g.threshold,distance:l=g.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:a,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:s,threshold:c,distance:l},this.pattern=n?e:e.toLowerCase(),this.query=Ra(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:a,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],s=0;for(let c=0,l=n.length;c<l;c+=1){const f=n[c];o.length=0,i=0;for(let u=0,m=f.length;u<m;u+=1){const h=f[u],{isMatch:p,indices:y,score:w}=h.search(e);if(p){if(i+=1,s+=w,a){const E=h.constructor.type;ja.has(E)?o=[...o,...y]:o.push(y)}}else{s=0,i=0,o.length=0;break}}if(i){let u={isMatch:!0,score:s/i};return a&&(u.indices=o),u}}return{isMatch:!1,score:1}}}const ee=[];function $a(...t){ee.push(...t)}function ne(t,e){for(let n=0,a=ee.length;n<a;n+=1){let r=ee[n];if(r.condition(t,e))return new r(t,e)}return new yn(t,e)}const jt={AND:"$and",OR:"$or"},ae={PATH:"$path",PATTERN:"$val"},re=t=>!!(t[jt.AND]||t[jt.OR]),za=t=>!!t[ae.PATH],Da=t=>!D(t)&&vn(t)&&!re(t),$e=t=>({[jt.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function xn(t,e,{auto:n=!0}={}){const a=r=>{let i=Object.keys(r);const o=za(r);if(!o&&i.length>1&&!re(r))return a($e(r));if(Da(r)){const c=o?r[ae.PATH]:i[0],l=o?r[ae.PATTERN]:r[c];if(!$(l))throw new Error(ua(c));const f={keyId:qt(c),pattern:l};return n&&(f.searcher=ne(l,e)),f}let s={children:[],operator:i[0]};return i.forEach(c=>{const l=r[c];D(l)&&l.forEach(f=>{s.children.push(a(f))})}),s};return re(t)||(t=$e(t)),a(t)}function Ya(t,{ignoreFieldNorm:e=g.ignoreFieldNorm}){t.forEach(n=>{let a=1;n.matches.forEach(({key:r,norm:i,score:o})=>{const s=r?r.weight:null;a*=Math.pow(o===0&&s?Number.EPSILON:o,(s||1)*(e?1:i))}),n.score=a})}function Wa(t,e){const n=t.matches;e.matches=[],N(n)&&n.forEach(a=>{if(!N(a.indices)||!a.indices.length)return;const{indices:r,value:i}=a;let o={indices:r,value:i};a.key&&(o.key=a.key.src),a.idx>-1&&(o.refIndex=a.idx),e.matches.push(o)})}function Ua(t,e){e.score=t.score}function Ha(t,e,{includeMatches:n=g.includeMatches,includeScore:a=g.includeScore}={}){const r=[];return n&&r.push(Wa),a&&r.push(Ua),t.map(i=>{const{idx:o}=i,s={item:e[o],refIndex:o};return r.length&&r.forEach(c=>{c(i,s)}),s})}class ct{constructor(e,n={},a){this.options={...g,...n},this.options.useExtendedSearch,this._keyStore=new va(this.options.keys),this.setCollection(e,a)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof ye))throw new Error(la);this._myIndex=n||bn(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){N(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let a=0,r=this._docs.length;a<r;a+=1){const i=this._docs[a];e(i,a)&&(this.removeAt(a),a-=1,r-=1,n.push(i))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:a,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:s}=this.options;let c=$(e)?$(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Ya(c,{ignoreFieldNorm:s}),i&&c.sort(o),hn(n)&&n>-1&&(c=c.slice(0,n)),Ha(c,this._docs,{includeMatches:a,includeScore:r})}_searchStringList(e){const n=ne(e,this.options),{records:a}=this._myIndex,r=[];return a.forEach(({v:i,i:o,n:s})=>{if(!N(i))return;const{isMatch:c,score:l,indices:f}=n.searchIn(i);c&&r.push({item:i,idx:o,matches:[{score:l,value:i,norm:s,indices:f}]})}),r}_searchLogical(e){const n=xn(e,this.options),a=(s,c,l)=>{if(!s.children){const{keyId:u,searcher:m}=s,h=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(c,u),searcher:m});return h&&h.length?[{idx:l,item:c,matches:h}]:[]}const f=[];for(let u=0,m=s.children.length;u<m;u+=1){const h=s.children[u],p=a(h,c,l);if(p.length)f.push(...p);else if(s.operator===jt.AND)return[]}return f},r=this._myIndex.records,i={},o=[];return r.forEach(({$:s,i:c})=>{if(N(s)){let l=a(n,s,c);l.length&&(i[c]||(i[c]={idx:c,item:s,matches:[]},o.push(i[c])),l.forEach(({matches:f})=>{i[c].matches.push(...f)}))}}),o}_searchObjectList(e){const n=ne(e,this.options),{keys:a,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:s})=>{if(!N(o))return;let c=[];a.forEach((l,f)=>{c.push(...this._findMatches({key:l,value:o[f],searcher:n}))}),c.length&&i.push({idx:s,item:o,matches:c})}),i}_findMatches({key:e,value:n,searcher:a}){if(!N(n))return[];let r=[];if(D(n))n.forEach(({v:i,i:o,n:s})=>{if(!N(i))return;const{isMatch:c,score:l,indices:f}=a.searchIn(i);c&&r.push({score:l,key:e,value:i,idx:o,norm:s,indices:f})});else{const{v:i,n:o}=n,{isMatch:s,score:c,indices:l}=a.searchIn(i);s&&r.push({score:c,key:e,value:i,norm:o,indices:l})}return r}}ct.version="7.0.0";ct.createIndex=bn;ct.parseIndex=Aa;ct.config=g;ct.parseQuery=xn;$a(Fa);const Ba=async t=>{try{return await(await fetch(t)).json()}catch{throw new Error("Network response was not ok")}},Xi=()=>{const[t,e]=Gt.useState(!0),[n,a]=Gt.useState([]),r={keys:["name"],threshold:.1},i=new ct(n,r);Gt.useEffect(()=>{function f(){e(!0),Ba("https://restcountries.com/v3.1/all").then(u=>{a(l(u)),e(!1)}).catch(u=>{throw new Error(u.message)})}f()},[]);const o=()=>{const f=new Set(n.map(m=>m.region));return Array.from(f).map(m=>m==null?void 0:m.toString())},s=f=>n.filter(m=>f==="all"?m.region:m.region===f),c=f=>i.search(f).map(h=>h.item),l=f=>f.map(m=>{var h,p;return{name:((h=m.name)==null?void 0:h.common)||"",population:m.population||0,region:m.region||"",subregion:m.subregion||"",capital:m.capital||[],tld:m.tld||[],currencies:m.currencies||{},languages:m.languages||{},borders:m.borders||[],flag:((p=m.flags)==null?void 0:p.png)||"",cca3:m.cca3||""}});return{loading:t,countries:n,getRegions:o,getByRegion:s,getByCountry:c}};function ze(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ze(Object(n),!0).forEach(function(a){P(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ze(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ft(t){"@babel/helpers - typeof";return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft(t)}function Ga(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function De(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Xa(t,e,n){return e&&De(t.prototype,e),n&&De(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function we(t,e){return Va(t)||Ja(t,e)||An(t,e)||qa()}function bt(t){return Ka(t)||Qa(t)||An(t)||Za()}function Ka(t){if(Array.isArray(t))return ie(t)}function Va(t){if(Array.isArray(t))return t}function Qa(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ja(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function An(t,e){if(t){if(typeof t=="string")return ie(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(t,e)}}function ie(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Za(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ye=function(){},ke={},Sn={},En=null,On={mark:Ye,measure:Ye};try{typeof window<"u"&&(ke=window),typeof document<"u"&&(Sn=document),typeof MutationObserver<"u"&&(En=MutationObserver),typeof performance<"u"&&(On=performance)}catch{}var tr=ke.navigator||{},We=tr.userAgent,Ue=We===void 0?"":We,X=ke,S=Sn,He=En,Et=On;X.document;var H=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",In=~Ue.indexOf("MSIE")||~Ue.indexOf("Trident/"),Ot,It,_t,Pt,Mt,Y="___FONT_AWESOME___",oe=16,_n="fa",Pn="svg-inline--fa",tt="data-fa-i2svg",se="data-fa-pseudo-element",er="data-fa-pseudo-element-pending",xe="data-prefix",Ae="data-icon",Be="fontawesome-i2svg",nr="async",ar=["HTML","HEAD","STYLE","SCRIPT"],Mn=function(){try{return!0}catch{return!1}}(),A="classic",O="sharp",Se=[A,O];function yt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[A]}})}var dt=yt((Ot={},P(Ot,A,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),P(Ot,O,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ot)),ht=yt((It={},P(It,A,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),P(It,O,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),It)),vt=yt((_t={},P(_t,A,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),P(_t,O,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_t)),rr=yt((Pt={},P(Pt,A,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),P(Pt,O,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Pt)),ir=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Cn="fa-layers-text",or=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,sr=yt((Mt={},P(Mt,A,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),P(Mt,O,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Mt)),Nn=[1,2,3,4,5,6,7,8,9,10],cr=Nn.concat([11,12,13,14,15,16,17,18,19,20]),fr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gt=new Set;Object.keys(ht[A]).map(gt.add.bind(gt));Object.keys(ht[O]).map(gt.add.bind(gt));var lr=[].concat(Se,bt(gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY]).concat(Nn.map(function(t){return"".concat(t,"x")})).concat(cr.map(function(t){return"w-".concat(t)})),ut=X.FontAwesomeConfig||{};function ur(t){var e=S.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function mr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(S&&typeof S.querySelector=="function"){var dr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];dr.forEach(function(t){var e=we(t,2),n=e[0],a=e[1],r=mr(ur(n));r!=null&&(ut[a]=r)})}var Tn={styleDefault:"solid",familyDefault:"classic",cssPrefix:_n,replacementClass:Pn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ut.familyPrefix&&(ut.cssPrefix=ut.familyPrefix);var st=d(d({},Tn),ut);st.autoReplaceSvg||(st.observeMutations=!1);var v={};Object.keys(Tn).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(n){st[t]=n,mt.forEach(function(a){return a(v)})},get:function(){return st[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){st.cssPrefix=e,mt.forEach(function(n){return n(v)})},get:function(){return st.cssPrefix}});X.FontAwesomeConfig=v;var mt=[];function hr(t){return mt.push(t),function(){mt.splice(mt.indexOf(t),1)}}var B=oe,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vr(t){if(!(!t||!H)){var e=S.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=S.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return S.head.insertBefore(e,a),t}}var gr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pt(){for(var t=12,e="";t-- >0;)e+=gr[Math.random()*62|0];return e}function ft(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ee(t){return t.classList?ft(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ln(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Ln(t[n]),'" ')},"").trim()}function Yt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Oe(t){return t.size!==z.size||t.x!==z.x||t.y!==z.y||t.rotate!==z.rotate||t.flipX||t.flipY}function br(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:l}}function yr(t){var e=t.transform,n=t.width,a=n===void 0?oe:n,r=t.height,i=r===void 0?oe:r,o=t.startCentered,s=o===void 0?!1:o,c="";return s&&In?c+="translate(".concat(e.x/B-a/2,"em, ").concat(e.y/B-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(e.x/B,"em), calc(-50% + ").concat(e.y/B,"em)) "):c+="translate(".concat(e.x/B,"em, ").concat(e.y/B,"em) "),c+="scale(".concat(e.size/B*(e.flipX?-1:1),", ").concat(e.size/B*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var wr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Rn(){var t=_n,e=Pn,n=v.cssPrefix,a=v.replacementClass,r=wr;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Ge=!1;function Kt(){v.autoAddCss&&!Ge&&(vr(Rn()),Ge=!0)}var kr={mixout:function(){return{dom:{css:Rn,insertCss:Kt}}},hooks:function(){return{beforeDOMElementCreation:function(){Kt()},beforeI2svg:function(){Kt()}}}},W=X||{};W[Y]||(W[Y]={});W[Y].styles||(W[Y].styles={});W[Y].hooks||(W[Y].hooks={});W[Y].shims||(W[Y].shims=[]);var F=W[Y],jn=[],xr=function t(){S.removeEventListener("DOMContentLoaded",t),$t=1,jn.map(function(e){return e()})},$t=!1;H&&($t=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),$t||S.addEventListener("DOMContentLoaded",xr));function Ar(t){H&&($t?setTimeout(t,0):jn.push(t))}function wt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Ln(t):"<".concat(e," ").concat(pr(a),">").concat(i.map(wt).join(""),"</").concat(e,">")}function Xe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Sr=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Vt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?Sr(n,r):n,c,l,f;for(a===void 0?(c=1,f=e[i[0]]):(c=0,f=a);c<o;c++)l=i[c],f=s(f,e[l],l,e);return f};function Er(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ce(t){var e=Er(t);return e.length===1?e[0].toString(16):null}function Or(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ke(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function fe(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Ke(e);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(t,Ke(e)):F.styles[t]=d(d({},F.styles[t]||{}),i),t==="fas"&&fe("fa",e)}var Ct,Nt,Tt,at=F.styles,Ir=F.shims,_r=(Ct={},P(Ct,A,Object.values(vt[A])),P(Ct,O,Object.values(vt[O])),Ct),Ie=null,Fn={},$n={},zn={},Dn={},Yn={},Pr=(Nt={},P(Nt,A,Object.keys(dt[A])),P(Nt,O,Object.keys(dt[O])),Nt);function Mr(t){return~lr.indexOf(t)}function Cr(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Mr(r)?r:null}var Wn=function(){var e=function(i){return Vt(at,function(o,s,c){return o[c]=Vt(s,i,{}),o},{})};Fn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){r[c.toString(16)]=o})}return r}),$n=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){r[c]=o})}return r}),Yn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(c){r[c]=o}),r});var n="far"in at||v.autoFetchSvg,a=Vt(Ir,function(r,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:c}),r},{names:{},unicodes:{}});zn=a.names,Dn=a.unicodes,Ie=Wt(v.styleDefault,{family:v.familyDefault})};hr(function(t){Ie=Wt(t.styleDefault,{family:v.familyDefault})});Wn();function _e(t,e){return(Fn[t]||{})[e]}function Nr(t,e){return($n[t]||{})[e]}function q(t,e){return(Yn[t]||{})[e]}function Un(t){return zn[t]||{prefix:null,iconName:null}}function Tr(t){var e=Dn[t],n=_e("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function K(){return Ie}var Pe=function(){return{prefix:null,iconName:null,rest:[]}};function Wt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?A:n,r=dt[a][t],i=ht[a][t]||ht[a][r],o=t in F.styles?t:null;return i||o||null}var Ve=(Tt={},P(Tt,A,Object.keys(vt[A])),P(Tt,O,Object.keys(vt[O])),Tt);function Ut(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},P(e,A,"".concat(v.cssPrefix,"-").concat(A)),P(e,O,"".concat(v.cssPrefix,"-").concat(O)),e),o=null,s=A;(t.includes(i[A])||t.some(function(l){return Ve[A].includes(l)}))&&(s=A),(t.includes(i[O])||t.some(function(l){return Ve[O].includes(l)}))&&(s=O);var c=t.reduce(function(l,f){var u=Cr(v.cssPrefix,f);if(at[f]?(f=_r[s].includes(f)?rr[s][f]:f,o=f,l.prefix=f):Pr[s].indexOf(f)>-1?(o=f,l.prefix=Wt(f,{family:s})):u?l.iconName=u:f!==v.replacementClass&&f!==i[A]&&f!==i[O]&&l.rest.push(f),!r&&l.prefix&&l.iconName){var m=o==="fa"?Un(l.iconName):{},h=q(l.prefix,l.iconName);m.prefix&&(o=null),l.iconName=m.iconName||h||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!at.far&&at.fas&&!v.autoFetchSvg&&(l.prefix="fas")}return l},Pe());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===O&&(at.fass||v.autoFetchSvg)&&(c.prefix="fass",c.iconName=q(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=K()||"fas"),c}var Lr=function(){function t(){Ga(this,t),this.definitions={}}return Xa(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=d(d({},n.definitions[s]||{}),o[s]),fe(s,o[s]);var c=vt[A][s];c&&fe(c,o[s]),Wn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,c=o.iconName,l=o.icon,f=l[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[s][u]=l)}),n[s][c]=l}),n}}]),t}(),Qe=[],rt={},ot={},Rr=Object.keys(ot);function jr(t,e){var n=e.mixoutsTo;return Qe=t,rt={},Object.keys(ot).forEach(function(a){Rr.indexOf(a)===-1&&delete ot[a]}),Qe.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Ft(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){rt[o]||(rt[o]=[]),rt[o].push(i[o])})}a.provides&&a.provides(ot)}),n}function le(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=rt[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function et(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=rt[t]||[];r.forEach(function(i){i.apply(null,n)})}function U(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ot[t]?ot[t].apply(null,e):void 0}function ue(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||K();if(e)return e=q(n,e)||e,Xe(Hn.definitions,n,e)||Xe(F.styles,n,e)}var Hn=new Lr,Fr=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,et("noAuto")},$r={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return H?(et("beforeI2svg",e),U("pseudoElements2svg",e),U("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Ar(function(){Dr({autoReplaceSvgRoot:n}),et("watch",e)})}},zr={icon:function(e){if(e===null)return null;if(Ft(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Wt(e[0]);return{prefix:a,iconName:q(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(ir))){var r=Ut(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||K(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=K();return{prefix:i,iconName:q(i,e)||e}}}},T={noAuto:Fr,config:v,dom:$r,parse:zr,library:Hn,findIconDefinition:ue,toHtml:wt},Dr=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?S:n;(Object.keys(F.styles).length>0||v.autoFetchSvg)&&H&&v.autoReplaceSvg&&T.dom.i2svg({node:a})};function Ht(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return wt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(H){var a=S.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Yr(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Oe(o)&&n.found&&!a.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};r.style=Yt(d(d({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Wr(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:o}),children:a}]}]}function Me(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,c=t.title,l=t.maskId,f=t.titleId,u=t.extra,m=t.watchable,h=m===void 0?!1:m,p=a.found?a:n,y=p.width,w=p.height,E=r==="fak",k=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(C){return u.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(u.classes).join(" "),x={children:[],attributes:d(d({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(w)})},M=E&&!~u.classes.indexOf("fa-fw")?{width:"".concat(y/w*16*.0625,"em")}:{};h&&(x.attributes[tt]=""),c&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||pt())},children:[c]}),delete x.attributes.title);var I=d(d({},x),{},{prefix:r,iconName:i,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:d(d({},M),u.styles)}),R=a.found&&n.found?U("generateAbstractMask",I)||{children:[],attributes:{}}:U("generateAbstractIcon",I)||{children:[],attributes:{}},_=R.children,L=R.attributes;return I.children=_,I.attributes=L,s?Wr(I):Yr(I)}function Je(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,c=s===void 0?!1:s,l=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[tt]="");var f=d({},o.styles);Oe(r)&&(f.transform=yr({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var u=Yt(f);u.length>0&&(l.style=u);var m=[];return m.push({tag:"span",attributes:l,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function Ur(t){var e=t.content,n=t.title,a=t.extra,r=d(d(d({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Yt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Qt=F.styles;function me(t){var e=t[0],n=t[1],a=t.slice(4),r=we(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(Z.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Z.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Z.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Hr={found:!1,width:512,height:512};function Br(t,e){!Mn&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function de(t,e){var n=e;return e==="fa"&&v.styleDefault!==null&&(e=K()),new Promise(function(a,r){if(U("missingIconAbstract"),n==="fa"){var i=Un(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Qt[e]&&Qt[e][t]){var o=Qt[e][t];return a(me(o))}Br(t,e),a(d(d({},Hr),{},{icon:v.showMissingIcons&&t?U("missingIconAbstract")||{}:{}}))})}var Ze=function(){},he=v.measurePerformance&&Et&&Et.mark&&Et.measure?Et:{mark:Ze,measure:Ze},lt='FA "6.5.1"',Gr=function(e){return he.mark("".concat(lt," ").concat(e," begins")),function(){return Bn(e)}},Bn=function(e){he.mark("".concat(lt," ").concat(e," ends")),he.measure("".concat(lt," ").concat(e),"".concat(lt," ").concat(e," begins"),"".concat(lt," ").concat(e," ends"))},Ce={begin:Gr,end:Bn},Lt=function(){};function qe(t){var e=t.getAttribute?t.getAttribute(tt):null;return typeof e=="string"}function Xr(t){var e=t.getAttribute?t.getAttribute(xe):null,n=t.getAttribute?t.getAttribute(Ae):null;return e&&n}function Kr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function Vr(){if(v.autoReplaceSvg===!0)return Rt.replace;var t=Rt[v.autoReplaceSvg];return t||Rt.replace}function Qr(t){return S.createElementNS("http://www.w3.org/2000/svg",t)}function Jr(t){return S.createElement(t)}function Gn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Qr:Jr:n;if(typeof t=="string")return S.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Gn(o,{ceFn:a}))}),r}function Zr(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Rt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Gn(r),n)}),n.getAttribute(tt)===null&&v.keepOriginalSource){var a=S.createComment(Zr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Ee(n).indexOf(v.replacementClass))return Rt.replace(e);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,c){return c===v.replacementClass||c.match(r)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return wt(s)}).join(`
`);n.setAttribute(tt,""),n.innerHTML=o}};function tn(t){t()}function Xn(t,e){var n=typeof e=="function"?e:Lt;if(t.length===0)n();else{var a=tn;v.mutateApproach===nr&&(a=X.requestAnimationFrame||tn),a(function(){var r=Vr(),i=Ce.begin("mutate");t.map(r),i(),n()})}}var Ne=!1;function Kn(){Ne=!0}function ve(){Ne=!1}var zt=null;function en(t){if(He&&v.observeMutations){var e=t.treeCallback,n=e===void 0?Lt:e,a=t.nodeCallback,r=a===void 0?Lt:a,i=t.pseudoElementsCallback,o=i===void 0?Lt:i,s=t.observeMutationsRoot,c=s===void 0?S:s;zt=new He(function(l){if(!Ne){var f=K();ft(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!qe(u.addedNodes[0])&&(v.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&v.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&qe(u.target)&&~fr.indexOf(u.attributeName))if(u.attributeName==="class"&&Xr(u.target)){var m=Ut(Ee(u.target)),h=m.prefix,p=m.iconName;u.target.setAttribute(xe,h||f),p&&u.target.setAttribute(Ae,p)}else Kr(u.target)&&r(u.target)})}}),H&&zt.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qr(){zt&&zt.disconnect()}function ti(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function ei(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Ut(Ee(t));return r.prefix||(r.prefix=K()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Nr(r.prefix,t.innerText)||_e(r.prefix,ce(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ni(t){var e=ft(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(n?e["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||pt()):(e["aria-hidden"]="true",e.focusable="false")),e}function ai(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ei(t),a=n.iconName,r=n.prefix,i=n.rest,o=ni(t),s=le("parseNodeAttributes",{},t),c=e.styleParser?ti(t):[];return d({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var ri=F.styles;function Vn(t){var e=v.autoReplaceSvg==="nest"?nn(t,{styleParser:!1}):nn(t);return~e.extra.classes.indexOf(Cn)?U("generateLayersText",t,e):U("generateSvgReplacementMutation",t,e)}var V=new Set;Se.map(function(t){V.add("fa-".concat(t))});Object.keys(dt[A]).map(V.add.bind(V));Object.keys(dt[O]).map(V.add.bind(V));V=bt(V);function an(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!H)return Promise.resolve();var n=S.documentElement.classList,a=function(u){return n.add("".concat(Be,"-").concat(u))},r=function(u){return n.remove("".concat(Be,"-").concat(u))},i=v.autoFetchSvg?V:Se.map(function(f){return"fa-".concat(f)}).concat(Object.keys(ri));i.includes("fa")||i.push("fa");var o=[".".concat(Cn,":not([").concat(tt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(tt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ft(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var c=Ce.begin("onTree"),l=s.reduce(function(f,u){try{var m=Vn(u);m&&f.push(m)}catch(h){Mn||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(m){Xn(m,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),f()})}).catch(function(m){c(),u(m)})})}function ii(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vn(t).then(function(n){n&&Xn([n],e)})}function oi(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:ue(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ue(r||{})),t(a,d(d({},n),{},{mask:r}))}}var si=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?z:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,l=n.maskId,f=l===void 0?null:l,u=n.title,m=u===void 0?null:u,h=n.titleId,p=h===void 0?null:h,y=n.classes,w=y===void 0?[]:y,E=n.attributes,k=E===void 0?{}:E,x=n.styles,M=x===void 0?{}:x;if(e){var I=e.prefix,R=e.iconName,_=e.icon;return Ht(d({type:"icon"},e),function(){return et("beforeDOMElementCreation",{iconDefinition:e,params:n}),v.autoA11y&&(m?k["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(p||pt()):(k["aria-hidden"]="true",k.focusable="false")),Me({icons:{main:me(_),mask:c?me(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:R,transform:d(d({},z),r),symbol:o,title:m,maskId:f,titleId:p,extra:{attributes:k,styles:M,classes:w}})})}},ci={mixout:function(){return{icon:oi(si)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=an,n.nodeCallback=ii,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?S:a,i=n.callback,o=i===void 0?function(){}:i;return an(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,c=a.transform,l=a.symbol,f=a.mask,u=a.maskId,m=a.extra;return new Promise(function(h,p){Promise.all([de(r,s),f.iconName?de(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var w=we(y,2),E=w[0],k=w[1];h([n,Me({icons:{main:E,mask:k},prefix:s,iconName:r,transform:c,symbol:l,maskId:u,title:i,titleId:o,extra:m,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,c=Yt(s);c.length>0&&(r.style=c);var l;return Oe(o)&&(l=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},fi={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ht({type:"layer"},function(){et("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(bt(i)).join(" ")},children:o}]})}}}},li={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,c=a.attributes,l=c===void 0?{}:c,f=a.styles,u=f===void 0?{}:f;return Ht({type:"counter",content:n},function(){return et("beforeDOMElementCreation",{content:n,params:a}),Ur({content:n.toString(),title:i,extra:{attributes:l,styles:u,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(bt(s))}})})}}}},ui={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?z:r,o=a.title,s=o===void 0?null:o,c=a.classes,l=c===void 0?[]:c,f=a.attributes,u=f===void 0?{}:f,m=a.styles,h=m===void 0?{}:m;return Ht({type:"text",content:n},function(){return et("beforeDOMElementCreation",{content:n,params:a}),Je({content:n,transform:d(d({},z),i),title:s,extra:{attributes:u,styles:h,classes:["".concat(v.cssPrefix,"-layers-text")].concat(bt(l))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,c=null;if(In){var l=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/l,c=f.height/l}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Je({content:n.innerHTML,width:s,height:c,transform:i,title:r,extra:o,watchable:!0})])}}},mi=new RegExp('"',"ug"),rn=[1105920,1112319];function di(t){var e=t.replace(mi,""),n=Or(e,0),a=n>=rn[0]&&n<=rn[1],r=e.length===2?e[0]===e[1]:!1;return{value:ce(r?e[0]:e),isSecondary:a||r}}function on(t,e){var n="".concat(er).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=ft(t.children),o=i.filter(function(_){return _.getAttribute(se)===e})[0],s=X.getComputedStyle(t,e),c=s.getPropertyValue("font-family").match(or),l=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),a();if(c&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),m=~["Sharp"].indexOf(c[2])?O:A,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?ht[m][c[2].toLowerCase()]:sr[m][l],p=di(u),y=p.value,w=p.isSecondary,E=c[0].startsWith("FontAwesome"),k=_e(h,y),x=k;if(E){var M=Tr(y);M.iconName&&M.prefix&&(k=M.iconName,h=M.prefix)}if(k&&!w&&(!o||o.getAttribute(xe)!==h||o.getAttribute(Ae)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);var I=ai(),R=I.extra;R.attributes[se]=e,de(k,h).then(function(_){var L=Me(d(d({},I),{},{icons:{main:_,mask:Pe()},prefix:h,iconName:x,extra:R,watchable:!0})),C=S.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(C,t.firstChild):t.appendChild(C),C.outerHTML=L.map(function(xt){return wt(xt)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function hi(t){return Promise.all([on(t,"::before"),on(t,"::after")])}function vi(t){return t.parentNode!==document.head&&!~ar.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(se)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function sn(t){if(H)return new Promise(function(e,n){var a=ft(t.querySelectorAll("*")).filter(vi).map(hi),r=Ce.begin("searchPseudoElements");Kn(),Promise.all(a).then(function(){r(),ve(),e()}).catch(function(){r(),ve(),n()})})}var gi={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=sn,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?S:a;v.searchPseudoElements&&sn(r)}}},cn=!1,pi={mixout:function(){return{dom:{unwatch:function(){Kn(),cn=!0}}}},hooks:function(){return{bootstrap:function(){en(le("mutationObserverCallbacks",{}))},noAuto:function(){qr()},watch:function(n){var a=n.observeMutationsRoot;cn?ve():en(le("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},fn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},bi={mixout:function(){return{parse:{transform:function(n){return fn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=fn(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(c," ").concat(l," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:u,path:m};return{tag:"g",attributes:d({},h.outer),children:[{tag:"g",attributes:d({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:d(d({},a.icon.attributes),h.path)}]}]}}}},Jt={x:0,y:0,width:"100%",height:"100%"};function ln(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function yi(t){return t.tag==="g"?t.children:[t]}var wi={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Ut(r.split(" ").map(function(o){return o.trim()})):Pe();return i.prefix||(i.prefix=K()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,l=i.width,f=i.icon,u=o.width,m=o.icon,h=br({transform:c,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:d(d({},Jt),{},{fill:"white"})},y=f.children?{children:f.children.map(ln)}:{},w={tag:"g",attributes:d({},h.inner),children:[ln(d({tag:f.tag,attributes:d(d({},f.attributes),h.path)},y))]},E={tag:"g",attributes:d({},h.outer),children:[w]},k="mask-".concat(s||pt()),x="clip-".concat(s||pt()),M={tag:"mask",attributes:d(d({},Jt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,E]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:yi(m)},M]};return a.push(I,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(k,")")},Jt)}),{children:a,attributes:r}}}},ki={provides:function(e){var n=!1;X.matchMedia&&(n=X.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},xi={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Ai=[kr,ci,fi,li,ui,gi,pi,bi,wi,ki,xi];jr(Ai,{mixoutsTo:T});T.noAuto;T.config;T.library;T.dom;var ge=T.parse;T.findIconDefinition;T.toHtml;var Si=T.icon;T.layer;T.text;T.counter;var Qn={exports:{}},Ei="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Oi=Ei,Ii=Oi;function Jn(){}function Zn(){}Zn.resetWarningCache=Jn;var _i=function(){function t(a,r,i,o,s,c){if(c!==Ii){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Zn,resetWarningCache:Jn};return n.PropTypes=n,n};Qn.exports=_i();var Pi=Qn.exports;const b=na(Pi);function un(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?un(Object(n),!0).forEach(function(a){it(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):un(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Dt(t){"@babel/helpers - typeof";return Dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dt(t)}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Mi(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ci(t,e){if(t==null)return{};var n=Mi(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function pe(t){return Ni(t)||Ti(t)||Li(t)||Ri()}function Ni(t){if(Array.isArray(t))return be(t)}function Ti(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Li(t,e){if(t){if(typeof t=="string")return be(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return be(t,e)}}function be(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Ri(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ji(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,c=t.spin,l=t.spinPulse,f=t.spinReverse,u=t.pulse,m=t.fixedWidth,h=t.inverse,p=t.border,y=t.listItem,w=t.flip,E=t.size,k=t.rotation,x=t.pull,M=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":m,"fa-inverse":h,"fa-border":p,"fa-li":y,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},it(e,"fa-".concat(E),typeof E<"u"&&E!==null),it(e,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),it(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),it(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(M).map(function(I){return M[I]?I:null}).filter(function(I){return I})}function Fi(t){return t=t-0,t===t}function qn(t){return Fi(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var $i=["style"];function zi(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Di(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=qn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[zi(r)]=i:e[r]=i,e},{})}function ta(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(c){return ta(t,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,l){var f=e.attributes[l];switch(l){case"class":c.attrs.className=f,delete e.attributes.class;break;case"style":c.attrs.style=Di(f);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=f:c.attrs[qn(l)]=f}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Ci(n,$i);return r.attrs.style=G(G({},r.attrs.style),o),t.apply(void 0,[e.tag,G(G({},r.attrs),s)].concat(pe(a)))}var ea=!1;try{ea=!0}catch{}function Yi(){if(!ea&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function mn(t){if(t&&Dt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ge.icon)return ge.icon(t);if(t===null)return null;if(t&&Dt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Zt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?it({},t,e):{}}var kt=dn.forwardRef(function(t,e){var n=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,c=t.maskId,l=mn(n),f=Zt("classes",[].concat(pe(ji(t)),pe(i.split(" ")))),u=Zt("transform",typeof t.transform=="string"?ge.transform(t.transform):t.transform),m=Zt("mask",mn(a)),h=Si(l,G(G(G(G({},f),u),m),{},{symbol:r,title:o,titleId:s,maskId:c}));if(!h)return Yi("Could not find icon",l),null;var p=h.abstract,y={ref:e};return Object.keys(t).forEach(function(w){kt.defaultProps.hasOwnProperty(w)||(y[w]=t[w])}),Wi(p[0],y)});kt.displayName="FontAwesomeIcon";kt.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};kt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Wi=ta.bind(null,dn.createElement);const Ki=({icon:t,className:e})=>aa.jsx(kt,{className:e,icon:t});export{Ki as I,Gi as a,Bi as f,Xi as u};
