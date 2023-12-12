let e,t,r;try{e=new TextDecoder}catch(Ee){}let n=0;const s=57342,i=57343,o=57337,a={};let l,u,f,c,d,h,y,p={},g=0,w=0,b=[],m=[],A={useRecords:!1,mapsAsObjects:!0},k=!1,v=2;try{new Function("")}catch(Ee){v=1/0}class U{constructor(e){if(e&&(!e.keyMap&&!e._keyMap||e.useRecords||(e.useRecords=!1,e.mapsAsObjects=!0),!1===e.useRecords&&void 0===e.mapsAsObjects&&(e.mapsAsObjects=!0),e.getStructures&&(e.getShared=e.getStructures),e.getShared&&!e.structures&&((e.structures=[]).uninitialized=!0),e.keyMap)){this.mapKey=new Map;for(let[t,r]of Object.entries(e.keyMap))this.mapKey.set(r,t)}Object.assign(this,e)}decodeKey(e){return this.keyMap&&this.mapKey.get(e)||e}encodeKey(e){return this.keyMap&&this.keyMap.hasOwnProperty(e)?this.keyMap[e]:e}encodeKeys(e){if(!this._keyMap)return e;let t=new Map;for(let[r,n]of Object.entries(e))t.set(this._keyMap.hasOwnProperty(r)?this._keyMap[r]:r,n);return t}decodeKeys(e){if(!this._keyMap||"Map"!=e.constructor.name)return e;if(!this._mapKey){this._mapKey=new Map;for(let[e,t]of Object.entries(this._keyMap))this._mapKey.set(t,e)}let t={};return e.forEach(((e,r)=>t[E(this._mapKey.has(r)?this._mapKey.get(r):r)]=e)),t}mapDecode(e,t){let r=this.decode(e);return this._keyMap&&"Array"===r.constructor.name?r.map((e=>this.decodeKeys(e))):r}decode(e,s){if(t)return $((()=>(Z(),this?this.decode(e,s):U.prototype.decode.call(A,e,s))));r=s>-1?s:e.length,n=0,w=0,u=null,f=null,t=e;try{h=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(Ee){if(t=null,e instanceof Uint8Array)throw Ee;throw new Error("Source must be a Uint8Array or Buffer but was a "+(e&&"object"==typeof e?e.constructor.name:typeof e))}if(this instanceof U){if(p=this,d=this.sharedValues&&(this.pack?new Array(this.maxPrivatePackedValues||16).concat(this.sharedValues):this.sharedValues),this.structures)return l=this.structures,O();(!l||l.length>0)&&(l=[])}else p=A,(!l||l.length>0)&&(l=[]),d=null;return O()}decodeMultiple(e,t){let r,s=0;try{let i=e.length;k=!0;let o=this?this.decode(e,i):X.decode(e,i);if(!t){for(r=[o];n<i;)s=n,r.push(O());return r}if(!1===t(o))return;for(;n<i;)if(s=n,!1===t(O()))return}catch(Ee){throw Ee.lastPosition=s,Ee.values=r,Ee}finally{k=!1,Z()}}}function O(){try{let e=M();if(f){if(n>=f.postBundlePosition){let e=new Error("Unexpected bundle position");throw e.incomplete=!0,e}n=f.postBundlePosition,f=null}if(n==r)l=null,t=null,c&&(c=null);else{if(n>r){let e=new Error("Unexpected end of CBOR data");throw e.incomplete=!0,e}if(!k)throw new Error("Data read, but end of buffer not reached")}return e}catch(Ee){throw Z(),(Ee instanceof RangeError||Ee.message.startsWith("Unexpected end of buffer"))&&(Ee.incomplete=!0),Ee}}function M(){let e=t[n++],c=e>>5;if(e&=31,e>23)switch(e){case 24:e=t[n++];break;case 25:if(7==c)return function(){let e=t[n++],r=t[n++],s=(127&e)>>2;if(31===s)return r||3&e?NaN:128&e?-1/0:1/0;if(0===s){let t=((3&e)<<8|r)/(1<<24);return 128&e?-t:t}return R[3]=128&e|56+(s>>1),R[2]=(7&e)<<5|r>>3,R[1]=r<<5,R[0]=0,_[0]}();e=h.getUint16(n),n+=2;break;case 26:if(7==c){let e=h.getFloat32(n);if(p.useFloat32>2){let r=q[(127&t[n])<<1|t[n+1]>>7];return n+=4,(r*e+(e>0?.5:-.5)>>0)/r}return n+=4,e}e=h.getUint32(n),n+=4;break;case 27:if(7==c){let e=h.getFloat64(n);return n+=8,e}if(c>1){if(h.getUint32(n)>0)throw new Error("JavaScript does not support arrays, maps, or strings with length over 4294967295");e=h.getUint32(n+4)}else p.int64AsNumber?(e=4294967296*h.getUint32(n),e+=h.getUint32(n+4)):e=h.getBigUint64(n);n+=8;break;case 31:switch(c){case 2:case 3:throw new Error("Indefinite length not supported for byte or text strings");case 4:let e,t=[],r=0;for(;(e=M())!=a;)t[r++]=e;return 4==c?t:3==c?t.join(""):Buffer.concat(t);case 5:let n;if(p.mapsAsObjects){let e={};if(p.keyMap)for(;(n=M())!=a;)e[E(p.decodeKey(n))]=M();else for(;(n=M())!=a;)e[E(n)]=M();return e}{y&&(p.mapsAsObjects=!0,y=!1);let e=new Map;if(p.keyMap)for(;(n=M())!=a;)e.set(p.decodeKey(n),M());else for(;(n=M())!=a;)e.set(n,M());return e}case 7:return a;default:throw new Error("Invalid major type for indefinite length "+c)}default:throw new Error("Unknown token "+e)}switch(c){case 0:return e;case 1:return~e;case 2:return A=e,p.copyBuffers?Uint8Array.prototype.slice.call(t,n,n+=A):t.subarray(n,n+=A);case 3:if(w>=n)return u.slice(n-g,(n+=e)-g);if(0==w&&r<140&&e<32){let r=e<16?V(e):function(e){let r=n,s=new Array(e);for(let i=0;i<e;i++){const e=t[n++];if((128&e)>0)return void(n=r);s[i]=e}return x.apply(String,s)}(e);if(null!=r)return r}return I(e);case 4:let a=new Array(e);for(let t=0;t<e;t++)a[t]=M();return a;case 5:if(p.mapsAsObjects){let t={};if(p.keyMap)for(let r=0;r<e;r++)t[E(p.decodeKey(M()))]=M();else for(let r=0;r<e;r++)t[E(M())]=M();return t}{y&&(p.mapsAsObjects=!0,y=!1);let t=new Map;if(p.keyMap)for(let r=0;r<e;r++)t.set(p.decodeKey(M()),M());else for(let r=0;r<e;r++)t.set(M(),M());return t}case 6:if(e>=o){let t=l[8191&e];if(t)return t.read||(t.read=j(t)),t.read();if(e<65536){if(e==i){let e=J(),t=M(),r=M();F(t,r);let n={};if(p.keyMap)for(let s=2;s<e;s++){n[E(p.decodeKey(r[s-2]))]=M()}else for(let s=2;s<e;s++){n[E(r[s-2])]=M()}return n}if(e==s){let e=J(),t=M();for(let r=2;r<e;r++)F(t++,M());return M()}if(e==o)return function(){let e=J(),t=n+M();for(let s=2;s<e;s++){let e=J();n+=e}let r=n;return n=t,f=[B(J()),B(J())],f.position0=0,f.position1=0,f.postBundlePosition=n,n=r,M()}();if(p.getShared&&(H(),t=l[8191&e],t))return t.read||(t.read=j(t)),t.read()}}let c=b[e];if(c)return c.handlesRead?c(M):c(M());{let t=M();for(let r=0;r<m.length;r++){let n=m[r](e,t);if(void 0!==n)return n}return new P(t,e)}case 7:switch(e){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;default:let t=(d||N())[e];if(void 0!==t)return t;throw new Error("Unknown token "+e)}default:if(isNaN(e)){let e=new Error("Unexpected end of CBOR data");throw e.incomplete=!0,e}throw new Error("Unknown CBOR token "+e)}var A}const S=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function j(e){return e.slowReads=0,function(){let e=t[n++];if(e&=31,e>23)switch(e){case 24:e=t[n++];break;case 25:e=h.getUint16(n),n+=2;break;case 26:e=h.getUint32(n),n+=4;break;default:throw new Error("Expected array header, but got "+t[n-1])}let r=this.compiledReader;for(;r;){if(r.propertyCount===e)return r(M);r=r.next}if(this.slowReads++>=v){let t=this.length==e?this:this.slice(0,e);return r=p.keyMap?new Function("r","return {"+t.map((e=>p.decodeKey(e))).map((e=>S.test(e)?E(e)+":r()":"["+JSON.stringify(e)+"]:r()")).join(",")+"}"):new Function("r","return {"+t.map((e=>S.test(e)?E(e)+":r()":"["+JSON.stringify(e)+"]:r()")).join(",")+"}"),this.compiledReader&&(r.next=this.compiledReader),r.propertyCount=e,this.compiledReader=r,r(M)}let s={};if(p.keyMap)for(let t=0;t<e;t++)s[E(p.decodeKey(this[t]))]=M();else for(let t=0;t<e;t++)s[E(this[t])]=M();return s}}function E(e){return"__proto__"===e?"__proto_":e}let I=B;function B(r){let s;if(r<16&&(s=V(r)))return s;if(r>64&&e)return e.decode(t.subarray(n,n+=r));const i=n+r,o=[];for(s="";n<i;){const e=t[n++];if(0==(128&e))o.push(e);else if(192==(224&e)){const r=63&t[n++];o.push((31&e)<<6|r)}else if(224==(240&e)){const r=63&t[n++],s=63&t[n++];o.push((31&e)<<12|r<<6|s)}else if(240==(248&e)){let r=(7&e)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++];r>65535&&(r-=65536,o.push(r>>>10&1023|55296),r=56320|1023&r),o.push(r)}else o.push(e);o.length>=4096&&(s+=x.apply(String,o),o.length=0)}return o.length>0&&(s+=x.apply(String,o)),s}let x=String.fromCharCode;function V(e){if(e<4){if(e<2){if(0===e)return"";{let e=t[n++];return(128&e)>1?void(n-=1):x(e)}}{let r=t[n++],s=t[n++];if((128&r)>0||(128&s)>0)return void(n-=2);if(e<3)return x(r,s);let i=t[n++];return(128&i)>0?void(n-=3):x(r,s,i)}}{let r=t[n++],s=t[n++],i=t[n++],o=t[n++];if((128&r)>0||(128&s)>0||(128&i)>0||(128&o)>0)return void(n-=4);if(e<6){if(4===e)return x(r,s,i,o);{let e=t[n++];return(128&e)>0?void(n-=5):x(r,s,i,o,e)}}if(e<8){let a=t[n++],l=t[n++];if((128&a)>0||(128&l)>0)return void(n-=6);if(e<7)return x(r,s,i,o,a,l);let u=t[n++];return(128&u)>0?void(n-=7):x(r,s,i,o,a,l,u)}{let a=t[n++],l=t[n++],u=t[n++],f=t[n++];if((128&a)>0||(128&l)>0||(128&u)>0||(128&f)>0)return void(n-=8);if(e<10){if(8===e)return x(r,s,i,o,a,l,u,f);{let e=t[n++];return(128&e)>0?void(n-=9):x(r,s,i,o,a,l,u,f,e)}}if(e<12){let c=t[n++],d=t[n++];if((128&c)>0||(128&d)>0)return void(n-=10);if(e<11)return x(r,s,i,o,a,l,u,f,c,d);let h=t[n++];return(128&h)>0?void(n-=11):x(r,s,i,o,a,l,u,f,c,d,h)}{let c=t[n++],d=t[n++],h=t[n++],y=t[n++];if((128&c)>0||(128&d)>0||(128&h)>0||(128&y)>0)return void(n-=12);if(e<14){if(12===e)return x(r,s,i,o,a,l,u,f,c,d,h,y);{let e=t[n++];return(128&e)>0?void(n-=13):x(r,s,i,o,a,l,u,f,c,d,h,y,e)}}{let p=t[n++],g=t[n++];if((128&p)>0||(128&g)>0)return void(n-=14);if(e<15)return x(r,s,i,o,a,l,u,f,c,d,h,y,p,g);let w=t[n++];return(128&w)>0?void(n-=15):x(r,s,i,o,a,l,u,f,c,d,h,y,p,g,w)}}}}}let _=new Float32Array(1),R=new Uint8Array(_.buffer,0,4);new Array(4096);class P{constructor(e,t){this.value=e,this.tag=t}}b[0]=e=>new Date(e),b[1]=e=>new Date(Math.round(1e3*e)),b[2]=e=>{let t=BigInt(0);for(let r=0,n=e.byteLength;r<n;r++)t=BigInt(e[r])+t<<BigInt(8);return t},b[3]=e=>BigInt(-1)-b[2](e),b[4]=e=>+(e[1]+"e"+e[0]),b[5]=e=>e[1]*Math.exp(e[0]*Math.log(2));const F=(e,t)=>{let r=l[e-=57344];r&&r.isShared&&((l.restoreStructures||(l.restoreStructures=[]))[e]=r),l[e]=t,t.read=j(t)};b[105]=e=>{let t=e.length,r=e[1];F(e[0],r);let n={};for(let s=2;s<t;s++){n[E(r[s-2])]=e[s]}return n},b[14]=e=>f?f[0].slice(f.position0,f.position0+=e):new P(e,14),b[15]=e=>f?f[1].slice(f.position1,f.position1+=e):new P(e,15);let T={Error:Error,RegExp:RegExp};b[27]=e=>(T[e[0]]||Error)(e[1],e[2]);const K=e=>{if(132!=t[n++]){let e=new Error("Packed values structure must be followed by a 4 element array");throw t.length<n&&(e.incomplete=!0),e}let r=e();if(!r||!r.length){let e=new Error("Packed values structure must be followed by a 4 element array");throw e.incomplete=!0,e}return d=d?r.concat(d.slice(r.length)):r,d.prefixes=e(),d.suffixes=e(),e()};function D(e,t){return"string"==typeof e?e+t:e instanceof Array?e.concat(t):Object.assign({},e,t)}function N(){if(!d){if(!p.getShared)throw new Error("No packed values available");H()}return d}K.handlesRead=!0,b[51]=K,b[6]=e=>{if(!d){if(!p.getShared)return new P(e,6);H()}if("number"==typeof e)return d[16+(e>=0?2*e:-2*e-1)];let t=new Error("No support for non-integer packed references yet");throw void 0===e&&(t.incomplete=!0),t},b[28]=e=>{c||(c=new Map,c.id=0);let r,s=c.id++;r=t[n]>>5==4?[]:{};let i={target:r};c.set(s,i);let o=e();return i.used?Object.assign(r,o):(i.target=o,o)},b[28].handlesRead=!0,b[29]=e=>{let t=c.get(e);return t.used=!0,t.target},b[258]=e=>new Set(e),(b[259]=e=>(p.mapsAsObjects&&(p.mapsAsObjects=!1,y=!0),e())).handlesRead=!0;m.push(((e,t)=>e>=225&&e<=255?D(N().prefixes[e-224],t):e>=28704&&e<=32767?D(N().prefixes[e-28672],t):e>=1879052288&&e<=2147483647?D(N().prefixes[e-1879048192],t):e>=216&&e<=223?D(t,N().suffixes[e-216]):e>=27647&&e<=28671?D(t,N().suffixes[e-27639]):e>=1811940352&&e<=1879048191?D(t,N().suffixes[e-1811939328]):1399353956==e?{packedValues:d,structures:l.slice(0),version:t}:55799==e?t:void 0));const C=1==new Uint8Array(new Uint16Array([1]).buffer)[0],z=[Uint8Array,Uint8ClampedArray,Uint16Array,Uint32Array,"undefined"==typeof BigUint64Array?{name:"BigUint64Array"}:BigUint64Array,Int8Array,Int16Array,Int32Array,"undefined"==typeof BigInt64Array?{name:"BigInt64Array"}:BigInt64Array,Float32Array,Float64Array],L=[64,68,69,70,71,72,77,78,79,85,86];for(let Ie=0;Ie<z.length;Ie++)W(z[Ie],L[Ie]);function W(e,t){let r,n="get"+e.name.slice(0,-5);"function"==typeof e?r=e.BYTES_PER_ELEMENT:e=null;for(let s=0;s<2;s++){if(!s&&1==r)continue;let i=2==r?1:4==r?2:3;b[s?t:t-4]=1==r||s==C?n=>{if(!e)throw new Error("Could not find typed array for code "+t);return p.copyBuffers||1!==r&&(2!==r||1&n.byteOffset)&&(4!==r||3&n.byteOffset)&&(8!==r||7&n.byteOffset)?new e(Uint8Array.prototype.slice.call(n,0).buffer):new e(n.buffer,n.byteOffset,n.byteLength)}:r=>{if(!e)throw new Error("Could not find typed array for code "+t);let o=new DataView(r.buffer,r.byteOffset,r.byteLength),a=r.length>>i,l=new e(a),u=o[n];for(let e=0;e<a;e++)l[e]=u.call(o,e<<i,s);return l}}}function J(){let e=31&t[n++];if(e>23)switch(e){case 24:e=t[n++];break;case 25:e=h.getUint16(n),n+=2;break;case 26:e=h.getUint32(n),n+=4}return e}function H(){if(p.getShared){let e=$((()=>(t=null,p.getShared())))||{},r=e.structures||[];p.sharedVersion=e.version,d=p.sharedValues=e.packedValues,!0===l?p.structures=l=r:l.splice.apply(l,[0,r.length].concat(r))}}function $(e){let s=r,i=n,o=g,a=w,d=u,y=c,b=f,m=new Uint8Array(t.slice(0,r)),A=l,v=p,U=k,O=e();return r=s,n=i,g=o,w=a,u=d,c=y,f=b,t=m,k=U,l=A,p=v,h=new DataView(t.buffer,t.byteOffset,t.byteLength),O}function Z(){t=null,c=null,l=null}const q=new Array(147);for(let Ie=0;Ie<256;Ie++)q[Ie]=+("1e"+Math.floor(45.15-.30103*Ie));let Y,G,Q,X=new U({useRecords:!1});X.decode,X.decodeMultiple;try{Y=new TextEncoder}catch(Ee){}const ee="object"==typeof globalThis&&globalThis.Buffer,te=void 0!==ee,re=te?ee.allocUnsafeSlow:Uint8Array,ne=te?ee:Uint8Array,se=te?4294967296:2144337920;let ie,oe,ae,le,ue=0,fe=null;const ce=/[\u0080-\uFFFF]/,de=Symbol("record-id");class he extends U{constructor(e){let t,r,n,s,i;super(e),this.offset=0,e=e||{};let o=ne.prototype.utf8Write?function(e,t,r){return oe.utf8Write(e,t,r)}:!(!Y||!Y.encodeInto)&&function(e,t){return Y.encodeInto(e,oe.subarray(t)).written},a=this,l=e.structures||e.saveStructures,u=e.maxSharedStructures;if(null==u&&(u=l?128:0),u>8190)throw new Error("Maximum maxSharedStructure is 8190");let f=e.sequential;f&&(u=0),this.structures||(this.structures=[]),this.saveStructures&&(this.saveShared=this.saveStructures);let c,d,h,y=e.sharedValues;if(y){h=Object.create(null);for(let e=0,t=y.length;e<t;e++)h[y[e]]=e}let p=[],g=0,w=0;this.mapEncode=function(e,t){if(this._keyMap&&!this._mapped&&"Array"===e.constructor.name)e=e.map((e=>this.encodeKeys(e)));return this.encode(e,t)},this.encode=function(o,l){if(oe||(oe=new re(8192),ae=new DataView(oe.buffer,0,8192),ue=0),le=oe.length-10,le-ue<2048?(oe=new re(oe.length),ae=new DataView(oe.buffer,0,oe.length),le=oe.length-10,ue=0):l===Me&&(ue=ue+7&2147483640),t=ue,a.useSelfDescribedHeader&&(ae.setUint32(ue,3654940416),ue+=3),i=a.structuredClone?new Map:null,a.bundleStrings&&"string"!=typeof o?(fe=[],fe.size=1/0):fe=null,r=a.structures,r){if(r.uninitialized){let e=a.getShared()||{};a.structures=r=e.structures||[],a.sharedVersion=e.version;let t=a.sharedValues=e.packedValues;if(t){h={};for(let e=0,r=t.length;e<r;e++)h[t[e]]=e}}let e=r.length;if(e>u&&!f&&(e=u),!r.transitions){r.transitions=Object.create(null);for(let t=0;t<e;t++){let e=r[t];if(!e)continue;let n,s=r.transitions;for(let r=0,i=e.length;r<i;r++){void 0===s[de]&&(s[de]=t);let i=e[r];n=s[i],n||(n=s[i]=Object.create(null)),s=n}s[de]=1048576|t}}f||(r.nextId=e)}if(n&&(n=!1),s=r||[],d=h,e.pack){let t=new Map;if(t.values=[],t.encoder=a,t.maxValues=e.maxPrivatePackedValues||(h?16:1/0),t.objectMap=h||!1,t.samplingPackedValues=c,me(o,t),t.values.length>0){oe[ue++]=216,oe[ue++]=51,ge(4);let e=t.values;b(e),ge(0),ge(0),d=Object.create(h||null);for(let t=0,r=e.length;t<r;t++)d[e[t]]=t}}ie=l&je;try{if(ie)return;if(b(o),fe&&Ue(t,b),a.offset=ue,i&&i.idsToInsert){ue+=2*i.idsToInsert.length,ue>le&&A(ue),a.offset=ue;let e=function(e,t){let r,n=2*t.length,s=e.length-n;t.sort(((e,t)=>e.offset>t.offset?1:-1));for(let i=0;i<t.length;i++){let r=t[i];r.id=i;for(let t of r.references)e[t++]=i>>8,e[t]=255&i}for(;r=t.pop();){let t=r.offset;e.copyWithin(t+n,t,s),n-=2;let i=t+n;e[i++]=216,e[i++]=28,s=t}return e}(oe.subarray(t,ue),i.idsToInsert);return i=null,e}return l&Me?(oe.start=t,oe.end=ue,oe):oe.subarray(t,ue)}finally{if(r)if(w<10&&w++,r.length>u&&(r.length=u),g>1e4)r.transitions=null,w=0,g=0,p.length>0&&(p=[]);else if(p.length>0&&!f){for(let e=0,t=p.length;e<t;e++)p[e][de]=void 0;p=[]}if(n&&a.saveShared){a.structures.length>u&&(a.structures=a.structures.slice(0,u));let e=oe.subarray(t,ue);return!1===a.updateSharedData()?a.encode(o):e}l&Se&&(ue=t)}},this.findCommonStringsToPack=()=>(c=new Map,h||(h=Object.create(null)),e=>{let t=e&&e.threshold||4,r=this.pack?e.maxPrivatePackedValues||16:0;y||(y=this.sharedValues=[]);for(let[s,i]of c)i.count>t&&(h[s]=r++,y.push(s),n=!0);for(;this.saveShared&&!1===this.updateSharedData(););c=null});const b=r=>{ue>le&&(oe=A(ue));var n,s=typeof r;if("string"===s){if(d){let t=d[r];if(t>=0)return void(t<16?oe[ue++]=t+224:(oe[ue++]=198,b(1&t?15-t>>1:t-16>>1)));if(c&&!e.pack){let e=c.get(r);e?e.count++:c.set(r,{count:1})}}let s,i=r.length;if(fe&&i>=4&&i<1024){if((fe.size+=i)>61440){let e,r=(fe[0]?3*fe[0].length+fe[1].length:0)+10;ue+r>le&&(oe=A(ue+r)),oe[ue++]=217,oe[ue++]=223,oe[ue++]=249,oe[ue++]=fe.position?132:130,oe[ue++]=26,e=ue-t,ue+=4,fe.position&&Ue(t,b),fe=["",""],fe.size=0,fe.position=e}let e=ce.test(r);return fe[e?0:1]+=r,oe[ue++]=e?206:207,void b(i)}s=i<32?1:i<256?2:i<65536?3:5;let a=3*i;if(ue+a>le&&(oe=A(ue+a)),i<64||!o){let e,t,o,a=ue+s;for(e=0;e<i;e++)t=r.charCodeAt(e),t<128?oe[a++]=t:t<2048?(oe[a++]=t>>6|192,oe[a++]=63&t|128):55296==(64512&t)&&56320==(64512&(o=r.charCodeAt(e+1)))?(t=65536+((1023&t)<<10)+(1023&o),e++,oe[a++]=t>>18|240,oe[a++]=t>>12&63|128,oe[a++]=t>>6&63|128,oe[a++]=63&t|128):(oe[a++]=t>>12|224,oe[a++]=t>>6&63|128,oe[a++]=63&t|128);n=a-ue-s}else n=o(r,ue+s,a);n<24?oe[ue++]=96|n:n<256?(s<2&&oe.copyWithin(ue+2,ue+1,ue+1+n),oe[ue++]=120,oe[ue++]=n):n<65536?(s<3&&oe.copyWithin(ue+3,ue+2,ue+2+n),oe[ue++]=121,oe[ue++]=n>>8,oe[ue++]=255&n):(s<5&&oe.copyWithin(ue+5,ue+3,ue+3+n),oe[ue++]=122,ae.setUint32(ue,n),ue+=4),ue+=n}else if("number"===s)if(this.alwaysUseFloat||r>>>0!==r)if(this.alwaysUseFloat||r>>0!==r){let e;if((e=this.useFloat32)>0&&r<4294967296&&r>=-2147483648){let t;if(oe[ue++]=250,ae.setFloat32(ue,r),e<4||(t=r*q[(127&oe[ue])<<1|oe[ue+1]>>7])>>0===t)return void(ue+=4);ue--}oe[ue++]=251,ae.setFloat64(ue,r),ue+=8}else r>=-24?oe[ue++]=31-r:r>=-256?(oe[ue++]=56,oe[ue++]=~r):r>=-65536?(oe[ue++]=57,ae.setUint16(ue,~r),ue+=2):(oe[ue++]=58,ae.setUint32(ue,~r),ue+=4);else r<24?oe[ue++]=r:r<256?(oe[ue++]=24,oe[ue++]=r):r<65536?(oe[ue++]=25,oe[ue++]=r>>8,oe[ue++]=255&r):(oe[ue++]=26,ae.setUint32(ue,r),ue+=4);else if("object"===s)if(r){if(i){let e=i.get(r);if(e){if(oe[ue++]=216,oe[ue++]=29,oe[ue++]=25,!e.references){let t=i.idsToInsert||(i.idsToInsert=[]);e.references=[],t.push(e)}return e.references.push(ue-t),void(ue+=2)}i.set(r,{offset:ue-t})}let e=r.constructor;if(e===Object)m(r,!0);else if(e===Array){(n=r.length)<24?oe[ue++]=128|n:ge(n);for(let e=0;e<n;e++)b(r[e])}else if(e===Map)if((this.mapsAsObjects?!1!==this.useTag259ForMaps:this.useTag259ForMaps)&&(oe[ue++]=217,oe[ue++]=1,oe[ue++]=3),(n=r.size)<24?oe[ue++]=160|n:n<256?(oe[ue++]=184,oe[ue++]=n):n<65536?(oe[ue++]=185,oe[ue++]=n>>8,oe[ue++]=255&n):(oe[ue++]=186,ae.setUint32(ue,n),ue+=4),a.keyMap)for(let[t,n]of r)b(a.encodeKey(t)),b(n);else for(let[t,n]of r)b(t),b(n);else{for(let e=0,t=G.length;e<t;e++){if(r instanceof Q[e]){let t=G[e],n=t.tag;return null==n&&(n=t.getTag&&t.getTag.call(this,r)),n<24?oe[ue++]=192|n:n<256?(oe[ue++]=216,oe[ue++]=n):n<65536?(oe[ue++]=217,oe[ue++]=n>>8,oe[ue++]=255&n):n>-1&&(oe[ue++]=218,ae.setUint32(ue,n),ue+=4),void t.encode.call(this,r,b,A)}}if(r[Symbol.iterator]){if(ie){let e=new Error("Iterable should be serialized as iterator");throw e.iteratorNotHandled=!0,e}oe[ue++]=159;for(let e of r)b(e);return void(oe[ue++]=255)}if(r[Symbol.asyncIterator]||be(r)){let e=new Error("Iterable/blob should be serialized as iterator");throw e.iteratorNotHandled=!0,e}if(this.useToJSON&&r.toJSON){const e=r.toJSON();if(e!==r)return b(e)}m(r,!r.hasOwnProperty)}}else oe[ue++]=246;else if("boolean"===s)oe[ue++]=r?245:244;else if("bigint"===s){if(r<BigInt(1)<<BigInt(64)&&r>=0)oe[ue++]=27,ae.setBigUint64(ue,r);else if(r>-(BigInt(1)<<BigInt(64))&&r<0)oe[ue++]=59,ae.setBigUint64(ue,-r-BigInt(1));else{if(!this.largeBigIntToFloat)throw new RangeError(r+" was too large to fit in CBOR 64-bit integer format, set largeBigIntToFloat to convert to float-64");oe[ue++]=251,ae.setFloat64(ue,Number(r))}ue+=8}else{if("undefined"!==s)throw new Error("Unknown type: "+s);oe[ue++]=247}},m=!1===this.useRecords?this.variableMapSize?e=>{let t=Object.keys(e),r=Object.values(e),n=t.length;if(n<24?oe[ue++]=160|n:n<256?(oe[ue++]=184,oe[ue++]=n):n<65536?(oe[ue++]=185,oe[ue++]=n>>8,oe[ue++]=255&n):(oe[ue++]=186,ae.setUint32(ue,n),ue+=4),a.keyMap)for(let s=0;s<n;s++)b(a.encodeKey(t[s])),b(r[s]);else for(let s=0;s<n;s++)b(t[s]),b(r[s])}:(e,r)=>{oe[ue++]=185;let n=ue-t;ue+=2;let s=0;if(a.keyMap)for(let t in e)(r||e.hasOwnProperty(t))&&(b(a.encodeKey(t)),b(e[t]),s++);else for(let t in e)(r||e.hasOwnProperty(t))&&(b(t),b(e[t]),s++);oe[n+++t]=s>>8,oe[n+t]=255&s}:(e,t)=>{let r,i,o,a=s.transitions||(s.transitions=Object.create(null)),l=0,f=0;if(this.keyMap){o=Object.keys(e).map((e=>this.encodeKey(e))),f=o.length;for(let e=0;e<f;e++){let t=o[e];r=a[t],r||(r=a[t]=Object.create(null),l++),a=r}}else for(let n in e)(t||e.hasOwnProperty(n))&&(r=a[n],r||(1048576&a[de]&&(i=65535&a[de]),r=a[n]=Object.create(null),l++),a=r,f++);let c=a[de];if(void 0!==c)c&=65535,oe[ue++]=217,oe[ue++]=c>>8|224,oe[ue++]=255&c;else{if(o||(o=a.__keys__||(a.__keys__=Object.keys(e))),void 0===i?(c=s.nextId++,c||(c=0,s.nextId=1),c>=256&&(s.nextId=(c=u)+1)):c=i,s[c]=o,!(c<u)){if(a[de]=c,ae.setUint32(ue,3655335680),ue+=3,l&&(g+=w*l),p.length>=256-u&&(p.shift()[de]=void 0),p.push(a),ge(f+2),b(57344+c),b(o),null===t)return;for(let r in e)(t||e.hasOwnProperty(r))&&b(e[r]);return}oe[ue++]=217,oe[ue++]=c>>8|224,oe[ue++]=255&c,a=s.transitions;for(let e=0;e<f;e++)(void 0===a[de]||1048576&a[de])&&(a[de]=c),a=a[o[e]];a[de]=1048576|c,n=!0}if(f<24?oe[ue++]=128|f:ge(f),null!==t)for(let n in e)(t||e.hasOwnProperty(n))&&b(e[n])},A=e=>{let r;if(e>16777216){if(e-t>se)throw new Error("Encoded buffer would be larger than maximum buffer size");r=Math.min(se,4096*Math.round(Math.max((e-t)*(e>67108864?1.25:2),4194304)/4096))}else r=1+(Math.max(e-t<<2,oe.length-1)>>12)<<12;let n=new re(r);return ae=new DataView(n.buffer,0,r),oe.copy?oe.copy(n,0,t,e):n.set(oe.slice(t,e)),ue-=t,t=0,le=n.length-10,oe=n};let k=100,v=1e3;function*U(e,r,n){let s=e.constructor;if(s===Object){let t=!1!==a.useRecords;t?m(e,null):ye(Object.keys(e).length,160);for(let n in e){let s=e[n];t||b(n),s&&"object"==typeof s?r[n]?yield*U(s,r[n]):yield*O(s,r,n):b(s)}}else if(s===Array){let n=e.length;ge(n);for(let s=0;s<n;s++){let n=e[s];n&&("object"==typeof n||ue-t>k)?r.element?yield*U(n,r.element):yield*O(n,r,"element"):b(n)}}else if(e[Symbol.iterator]){oe[ue++]=159;for(let n of e)n&&("object"==typeof n||ue-t>k)?r.element?yield*U(n,r.element):yield*O(n,r,"element"):b(n);oe[ue++]=255}else be(e)?(ye(e.size,64),yield oe.subarray(t,ue),yield e,M()):e[Symbol.asyncIterator]?(oe[ue++]=159,yield oe.subarray(t,ue),yield e,M(),oe[ue++]=255):b(e);n&&ue>t?yield oe.subarray(t,ue):ue-t>k&&(yield oe.subarray(t,ue),M())}function*O(e,r,n){let s=ue-t;try{b(e),ue-t>k&&(yield oe.subarray(t,ue),M())}catch(Ee){if(!Ee.iteratorNotHandled)throw Ee;r[n]={},ue=t+s,yield*U.call(this,e,r[n])}}function M(){k=v,a.encode(null,je)}function S(e,t,r){return k=t&&t.chunkThreshold?v=t.chunkThreshold:100,e&&"object"==typeof e?(a.encode(null,je),r(e,a.iterateProperties||(a.iterateProperties={}),!0)):[a.encode(e)]}async function*j(e,t){for(let r of U(e,t,!0)){let e=r.constructor;if(e===ne||e===Uint8Array)yield r;else if(be(r)){let e,t=r.stream().getReader();for(;!(e=await t.read()).done;)yield e.value}else if(r[Symbol.asyncIterator])for await(let n of r)M(),n?yield*j(n,t.async||(t.async={})):yield a.encode(n);else yield r}}this.encodeAsIterable=function(e,t){return S(e,t,U)},this.encodeAsAsyncIterable=function(e,t){return S(e,t,j)}}useBuffer(e){oe=e,ae=new DataView(oe.buffer,oe.byteOffset,oe.byteLength),ue=0}clearSharedData(){this.structures&&(this.structures=[]),this.sharedValues&&(this.sharedValues=void 0)}updateSharedData(){let e=this.sharedVersion||0;this.sharedVersion=e+1;let t=this.structures.slice(0),r=new pe(t,this.sharedValues,this.sharedVersion),n=this.saveShared(r,(t=>(t&&t.version||0)==e));return!1===n?(r=this.getShared()||{},this.structures=r.structures||[],this.sharedValues=r.packedValues,this.sharedVersion=r.version,this.structures.nextId=this.structures.length):t.forEach(((e,t)=>this.structures[t]=e)),n}}function ye(e,t){e<24?oe[ue++]=t|e:e<256?(oe[ue++]=24|t,oe[ue++]=e):e<65536?(oe[ue++]=25|t,oe[ue++]=e>>8,oe[ue++]=255&e):(oe[ue++]=26|t,ae.setUint32(ue,e),ue+=4)}class pe{constructor(e,t,r){this.structures=e,this.packedValues=t,this.version=r}}function ge(e){e<24?oe[ue++]=128|e:e<256?(oe[ue++]=152,oe[ue++]=e):e<65536?(oe[ue++]=153,oe[ue++]=e>>8,oe[ue++]=255&e):(oe[ue++]=154,ae.setUint32(ue,e),ue+=4)}const we="undefined"==typeof Blob?function(){}:Blob;function be(e){if(e instanceof we)return!0;let t=e[Symbol.toStringTag];return"Blob"===t||"File"===t}function me(e,t){switch(typeof e){case"string":if(e.length>3){if(t.objectMap[e]>-1||t.values.length>=t.maxValues)return;let r=t.get(e);if(r)2==++r.count&&t.values.push(e);else if(t.set(e,{count:1}),t.samplingPackedValues){let r=t.samplingPackedValues.get(e);r?r.count++:t.samplingPackedValues.set(e,{count:1})}}break;case"object":if(e)if(e instanceof Array)for(let r=0,n=e.length;r<n;r++)me(e[r],t);else{let n=!t.encoder.useRecords;for(var r in e)e.hasOwnProperty(r)&&(n&&me(r,t),me(e[r],t))}break;case"function":console.log(e)}}const Ae=1==new Uint8Array(new Uint16Array([1]).buffer)[0];function ke(e,t){return!Ae&&t>1&&(e-=4),{tag:e,encode:function(e,t){let r=e.byteLength,n=e.byteOffset||0,s=e.buffer||e;t(te?ee.from(s,n,r):new Uint8Array(s,n,r))}}}function ve(e,t){let r=e.byteLength;r<24?oe[ue++]=64+r:r<256?(oe[ue++]=88,oe[ue++]=r):r<65536?(oe[ue++]=89,oe[ue++]=r>>8,oe[ue++]=255&r):(oe[ue++]=90,ae.setUint32(ue,r),ue+=4),ue+r>=oe.length&&t(ue+r),oe.set(e.buffer?e:new Uint8Array(e),ue),ue+=r}function Ue(e,t){ae.setUint32(fe.position+e,ue-fe.position-e+1);let r=fe;fe=null,t(r[0]),t(r[1])}Q=[Date,Set,Error,RegExp,P,ArrayBuffer,Uint8Array,Uint8ClampedArray,Uint16Array,Uint32Array,"undefined"==typeof BigUint64Array?function(){}:BigUint64Array,Int8Array,Int16Array,Int32Array,"undefined"==typeof BigInt64Array?function(){}:BigInt64Array,Float32Array,Float64Array,pe],G=[{tag:1,encode(e,t){let r=e.getTime()/1e3;(this.useTimestamp32||0===e.getMilliseconds())&&r>=0&&r<4294967296?(oe[ue++]=26,ae.setUint32(ue,r),ue+=4):(oe[ue++]=251,ae.setFloat64(ue,r),ue+=8)}},{tag:258,encode(e,t){t(Array.from(e))}},{tag:27,encode(e,t){t([e.name,e.message])}},{tag:27,encode(e,t){t(["RegExp",e.source,e.flags])}},{getTag:e=>e.tag,encode(e,t){t(e.value)}},{encode(e,t,r){ve(e,r)}},{getTag(e){if(e.constructor===Uint8Array&&(this.tagUint8Array||te&&!1!==this.tagUint8Array))return 64},encode(e,t,r){ve(e,r)}},ke(68,1),ke(69,2),ke(70,4),ke(71,8),ke(72,1),ke(77,2),ke(78,4),ke(79,8),ke(85,4),ke(86,8),{encode(e,t){let r=e.packedValues||[],n=e.structures||[];if(r.values.length>0){oe[ue++]=216,oe[ue++]=51,ge(4);let e=r.values;t(e),ge(0),ge(0),packedObjectMap=Object.create(sharedPackedObjectMap||null);for(let t=0,r=e.length;t<r;t++)packedObjectMap[e[t]]=t}if(n){ae.setUint32(ue,3655335424),ue+=3;let r=n.slice(0);r.unshift(57344),r.push(new P(e.version,1399353956)),t(r)}else t(new P(e.version,1399353956))}}];let Oe=new he({useRecords:!1});Oe.encode,Oe.encodeAsIterable,Oe.encodeAsAsyncIterable;const Me=512,Se=1024,je=2048;export{he as E};
//# sourceMappingURL=encode-79CO1kuF.js.map
