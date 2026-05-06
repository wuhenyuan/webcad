(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yo="170",Yi={ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Af=0,Cl=1,Cf=2,Au=1,wf=2,wn=3,Qn=0,kt=1,nn=2,$n=0,ji=1,wl=2,Rl=3,Dl=4,Rf=5,fi=100,Df=101,Lf=102,Pf=103,Uf=104,If=200,Of=201,Ff=202,Nf=203,ja=204,$a=205,kf=206,Bf=207,zf=208,Hf=209,Gf=210,Vf=211,Wf=212,Xf=213,qf=214,Za=0,Ka=1,Ja=2,Ji=3,Qa=4,eo=5,to=6,no=7,Cu=0,Yf=1,jf=2,Zn=0,$f=1,Zf=2,Kf=3,Jf=4,Qf=5,ed=6,td=7,wu=300,Qi=301,es=302,io=303,so=304,Zr=306,ro=1e3,mi=1001,ao=1002,on=1003,nd=1004,Xs=1005,vn=1006,aa=1007,gi=1008,In=1009,Ru=1010,Du=1011,Rs=1012,jo=1013,xi=1014,Rn=1015,Us=1016,$o=1017,Zo=1018,ts=1020,Lu=35902,Pu=1021,Uu=1022,rn=1023,Iu=1024,Ou=1025,$i=1026,ns=1027,Fu=1028,Ko=1029,Nu=1030,Jo=1031,Qo=1033,yr=33776,Sr=33777,br=33778,Mr=33779,oo=35840,lo=35841,co=35842,uo=35843,ho=36196,fo=37492,po=37496,mo=37808,go=37809,vo=37810,xo=37811,_o=37812,yo=37813,So=37814,bo=37815,Mo=37816,To=37817,Eo=37818,Ao=37819,Co=37820,wo=37821,Tr=36492,Ro=36494,Do=36495,ku=36283,Lo=36284,Po=36285,Uo=36286,id=3200,sd=3201,Bu=0,rd=1,Yn="",Yt="srgb",us="srgb-linear",Kr="linear",st="srgb",wi=7680,Ll=519,ad=512,od=513,ld=514,zu=515,cd=516,ud=517,hd=518,fd=519,Pl=35044,Ul="300 es",Dn=2e3,Lr=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Er=Math.PI/180,Io=180/Math.PI;function Is(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function dd(n,e){return(n%e+e)%e}function oa(n,e,t){return(1-t)*n+t*e}function vs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pd={DEG2RAD:Er};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,s,r,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],p=i[8],v=s[0],m=s[3],g=s[6],T=s[1],S=s[4],y=s[7],R=s[2],C=s[5],A=s[8];return r[0]=a*v+o*T+l*R,r[3]=a*m+o*S+l*C,r[6]=a*g+o*y+l*A,r[1]=c*v+u*T+f*R,r[4]=c*m+u*S+f*C,r[7]=c*g+u*y+f*A,r[2]=h*v+d*T+p*R,r[5]=h*m+d*S+p*C,r[8]=h*g+d*y+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,p=t*f+i*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new He;function Hu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function md(){const n=Pr("canvas");return n.style.display="block",n}const Il={};function Ts(n){n in Il||(Il[n]=!0,console.warn(n))}function gd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function vd(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xd(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:us,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(n.r=Pn(n.r),n.g=Pn(n.g),n.b=Pn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(n.r=Zi(n.r),n.g=Zi(n.g),n.b=Zi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Yn?Kr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ol=[.64,.33,.3,.6,.15,.06],Fl=[.2126,.7152,.0722],Nl=[.3127,.329],kl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[us]:{primaries:Ol,whitePoint:Nl,transfer:Kr,toXYZ:kl,fromXYZ:Bl,luminanceCoefficients:Fl,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:Ol,whitePoint:Nl,transfer:st,toXYZ:kl,fromXYZ:Bl,luminanceCoefficients:Fl,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}});let Ri;class _d{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=Pr("canvas")),Ri.width=e.width,Ri.height=e.height;const i=Ri.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pn(t[i]/255)*255):t[i]=Pn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yd=0;class Gu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ca(s[a].image)):r.push(ca(s[a]))}else r=ca(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_d.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sd=0;class Bt extends Mi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=mi,s=mi,r=vn,a=gi,o=rn,l=In,c=Bt.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Is(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=wu;Bt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(d+1)/2,R=(g+1)/2,C=(u+h)/4,A=(f+v)/4,L=(p+m)/4;return S>y&&S>R?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=C/i,r=A/i):y>R?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=L/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=L/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-p)*(m-p)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-p)/T,this.y=(f-v)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bd extends Mi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Bt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends bd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vu extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Md extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==p){let m=1-o;const g=l*h+c*d+u*p+f*v,T=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){const R=Math.sqrt(S),C=Math.atan2(R,g*T);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const y=o*T;if(l=l*m+h*y,c=c*m+d*y,u=u*m+p*y,f=f*m+v*y,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-o*d,e[t+2]=c*p+u*d+o*h-l*f,e[t+3]=u*p-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new z,zl=new yi;class Os{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(r,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qs.copy(i.boundingBox)),qs.applyMatrix4(e.matrixWorld),this.union(qs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),Ys.subVectors(this.max,xs),Di.subVectors(e.a,xs),Li.subVectors(e.b,xs),Pi.subVectors(e.c,xs),Nn.subVectors(Li,Di),kn.subVectors(Pi,Li),si.subVectors(Di,Pi);let t=[0,-Nn.z,Nn.y,0,-kn.z,kn.y,0,-si.z,si.y,Nn.z,0,-Nn.x,kn.z,0,-kn.x,si.z,0,-si.x,-Nn.y,Nn.x,0,-kn.y,kn.x,0,-si.y,si.x,0];return!ha(t,Di,Li,Pi,Ys)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,Di,Li,Pi,Ys))?!1:(js.crossVectors(Nn,kn),t=[js.x,js.y,js.z],ha(t,Di,Li,Pi,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new z,new z,new z,new z,new z,new z,new z,new z],Jt=new z,qs=new Os,Di=new z,Li=new z,Pi=new z,Nn=new z,kn=new z,si=new z,xs=new z,Ys=new z,js=new z,ri=new z;function ha(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ri.fromArray(n,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),u=i.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Td=new Os,_s=new z,fa=new z;class Jr{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Td.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_s,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(fa)),this.expandByPoint(_s.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new z,da=new z,$s=new z,Bn=new z,pa=new z,Zs=new z,ma=new z;class el{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){da.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,a=-this.direction.dot($s),o=Bn.dot(this.direction),l=-Bn.dot($s),c=Bn.lengthSq(),u=Math.abs(1-a*a);let f,h,d,p;if(u>0)if(f=a*l-o,h=a*o-l,p=r*u,f>=0)if(h>=-p)if(h<=p){const v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(da).addScaledVector($s,h),d}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),s=Tn.dot(Tn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,s,r){pa.subVectors(t,e),Zs.subVectors(i,e),ma.crossVectors(pa,Zs);let a=this.direction.dot(ma),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);const l=o*this.direction.dot(Zs.crossVectors(Bn,Zs));if(l<0)return null;const c=o*this.direction.dot(pa.cross(Bn));if(c<0||l+c>a)return null;const u=-o*Bn.dot(ma);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,s,r,a,o,l,c,u,f,h,d,p,v,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,h,d,p,v,m)}set(e,t,i,s,r,a,o,l,c,u,f,h,d,p,v,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ui.setFromMatrixColumn(e,0).length(),r=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,p=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,p=c*u,v=c*f;t[0]=h+v*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-p,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,p=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,p=o*u,v=o*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=p*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ed,e,Ad)}lookAt(e,t,i){const s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),zn.crossVectors(i,Ht),zn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),zn.crossVectors(i,Ht)),zn.normalize(),Ks.crossVectors(Ht,zn),s[0]=zn.x,s[4]=Ks.x,s[8]=Ht.x,s[1]=zn.y,s[5]=Ks.y,s[9]=Ht.y,s[2]=zn.z,s[6]=Ks.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],p=i[2],v=i[6],m=i[10],g=i[14],T=i[3],S=i[7],y=i[11],R=i[15],C=s[0],A=s[4],L=s[8],M=s[12],_=s[1],w=s[5],W=s[9],D=s[13],N=s[2],k=s[6],q=s[10],K=s[14],V=s[3],re=s[7],ae=s[11],me=s[15];return r[0]=a*C+o*_+l*N+c*V,r[4]=a*A+o*w+l*k+c*re,r[8]=a*L+o*W+l*q+c*ae,r[12]=a*M+o*D+l*K+c*me,r[1]=u*C+f*_+h*N+d*V,r[5]=u*A+f*w+h*k+d*re,r[9]=u*L+f*W+h*q+d*ae,r[13]=u*M+f*D+h*K+d*me,r[2]=p*C+v*_+m*N+g*V,r[6]=p*A+v*w+m*k+g*re,r[10]=p*L+v*W+m*q+g*ae,r[14]=p*M+v*D+m*K+g*me,r[3]=T*C+S*_+y*N+R*V,r[7]=T*A+S*w+y*k+R*re,r[11]=T*L+S*W+y*q+R*ae,r[15]=T*M+S*D+y*K+R*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],v=e[7],m=e[11],g=e[15];return p*(+r*l*f-s*c*f-r*o*h+i*c*h+s*o*d-i*l*d)+v*(+t*l*d-t*c*h+r*a*h-s*a*d+s*c*u-r*l*u)+m*(+t*c*f-t*o*d-r*a*f+i*a*d+r*o*u-i*c*u)+g*(-s*o*u-t*l*f+t*o*h+s*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],v=e[13],m=e[14],g=e[15],T=f*m*c-v*h*c+v*l*d-o*m*d-f*l*g+o*h*g,S=p*h*c-u*m*c-p*l*d+a*m*d+u*l*g-a*h*g,y=u*v*c-p*f*c+p*o*d-a*v*d-u*o*g+a*f*g,R=p*f*l-u*v*l-p*o*h+a*v*h+u*o*m-a*f*m,C=t*T+i*S+s*y+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=T*A,e[1]=(v*h*r-f*m*r-v*s*d+i*m*d+f*s*g-i*h*g)*A,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*g+i*l*g)*A,e[3]=(f*l*r-o*h*r-f*s*c+i*h*c+o*s*d-i*l*d)*A,e[4]=S*A,e[5]=(u*m*r-p*h*r+p*s*d-t*m*d-u*s*g+t*h*g)*A,e[6]=(p*l*r-a*m*r-p*s*c+t*m*c+a*s*g-t*l*g)*A,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*d+t*l*d)*A,e[8]=y*A,e[9]=(p*f*r-u*v*r-p*i*d+t*v*d+u*i*g-t*f*g)*A,e[10]=(a*v*r-p*o*r+p*i*c-t*v*c-a*i*g+t*o*g)*A,e[11]=(u*o*r-a*f*r-u*i*c+t*f*c+a*i*d-t*o*d)*A,e[12]=R*A,e[13]=(u*v*s-p*f*s+p*i*h-t*v*h-u*i*m+t*f*m)*A,e[14]=(p*o*s-a*v*s-p*i*l+t*v*l+a*i*m-t*o*m)*A,e[15]=(a*f*s-u*o*s+u*i*l-t*f*l-a*i*h+t*o*h)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,p=r*f,v=a*u,m=a*f,g=o*f,T=l*c,S=l*u,y=l*f,R=i.x,C=i.y,A=i.z;return s[0]=(1-(v+g))*R,s[1]=(d+y)*R,s[2]=(p-S)*R,s[3]=0,s[4]=(d-y)*C,s[5]=(1-(h+g))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(p+S)*A,s[9]=(m-T)*A,s[10]=(1-(h+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ui.set(s[0],s[1],s[2]).length();const a=Ui.set(s[4],s[5],s[6]).length(),o=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qt.copy(this);const c=1/r,u=1/a,f=1/o;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=f,Qt.elements[9]*=f,Qt.elements[10]*=f,t.setFromRotationMatrix(Qt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Dn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let d,p;if(o===Dn)d=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Lr)d=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Dn){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(a-r),h=(t+e)*c,d=(i+s)*u;let p,v;if(o===Dn)p=(a+r)*f,v=-2*f;else if(o===Lr)p=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ui=new z,Qt=new ft,Ed=new z(0,0,0),Ad=new z(1,1,1),zn=new z,Ks=new z,Ht=new z,Hl=new ft,Gl=new yi;class yn{constructor(e=0,t=0,i=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cd=0;const Vl=new z,Ii=new yi,En=new ft,Js=new z,ys=new z,wd=new z,Rd=new yi,Wl=new z(1,0,0),Xl=new z(0,1,0),ql=new z(0,0,1),Yl={type:"added"},Dd={type:"removed"},Oi={type:"childadded",child:null},ga={type:"childremoved",child:null};class Et extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new z,t=new yn,i=new yi,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new He}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis(ql,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis(ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Js.copy(e):Js.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ys,Js,this.up):En.lookAt(Js,ys,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(En),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Et.DEFAULT_UP=new z(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new z,An=new z,va=new z,Cn=new z,Fi=new z,Ni=new z,jl=new z,xa=new z,_a=new z,ya=new z,Sa=new pt,ba=new pt,Ma=new pt;class sn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),en.subVectors(e,t),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){en.subVectors(s,t),An.subVectors(i,t),va.subVectors(e,t);const a=en.dot(en),o=en.dot(An),l=en.dot(va),c=An.dot(An),u=An.dot(va),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Sa.setScalar(0),ba.setScalar(0),Ma.setScalar(0),Sa.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,i),Ma.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Sa,r.x),a.addScaledVector(ba,r.y),a.addScaledVector(Ma,r.z),a}static isFrontFacing(e,t,i,s){return en.subVectors(i,t),An.subVectors(e,t),en.cross(An).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),An.subVectors(this.a,this.b),en.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Fi.subVectors(s,i),Ni.subVectors(r,i),xa.subVectors(e,i);const l=Fi.dot(xa),c=Ni.dot(xa);if(l<=0&&c<=0)return t.copy(i);_a.subVectors(e,s);const u=Fi.dot(_a),f=Ni.dot(_a);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Fi,a);ya.subVectors(e,r);const d=Fi.dot(ya),p=Ni.dot(ya);if(p>=0&&d<=p)return t.copy(r);const v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Ni,o);const m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return jl.subVectors(r,s),o=(f-u)/(f-u+(d-p)),t.copy(s).addScaledVector(jl,o);const g=1/(m+v+h);return a=v*g,o=h*g,t.copy(i).addScaledVector(Fi,a).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function Ta(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=dd(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ta(a,r,e+1/3),this.g=Ta(a,r,e),this.b=Ta(a,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=Xu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return $e.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Ut(Rt.r*255,0,255))*65536+Math.round(Ut(Rt.g*255,0,255))*256+Math.round(Ut(Rt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Rt.copy(this),t);const i=Rt.r,s=Rt.g,r=Rt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Yt){$e.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,s=Rt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Qs);const i=oa(Hn.h,Qs.h,t),s=oa(Hn.s,Qs.s,t),r=oa(Hn.l,Qs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Ze;Ze.NAMES=Xu;let Ld=0;class hs extends Mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Is(),this.name="",this.blending=ji,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=$a,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ja&&(i.blendSrc=this.blendSrc),this.blendDst!==$a&&(i.blendDst=this.blendDst),this.blendEquation!==fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qu extends hs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new z,er=new Ge;class At{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),e}}class Yu extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ju extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kn extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Pd=0;const qt=new ft,Ea=new Et,ki=new z,Gt=new Os,Ss=new Os,Tt=new z;class un extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hu(e)?ju:Yu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kn(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Gt.min,Ss.min),Gt.expandByPoint(Tt),Tt.addVectors(Gt.max,Ss.max),Gt.expandByPoint(Tt)):(Gt.expandByPoint(Ss.min),Gt.expandByPoint(Ss.max))}Gt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Tt.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(e,c),Tt.add(ki)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new z,l[L]=new z;const c=new z,u=new z,f=new z,h=new Ge,d=new Ge,p=new Ge,v=new z,m=new z;function g(L,M,_){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,_),h.fromBufferAttribute(r,L),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,_),u.sub(c),f.sub(c),d.sub(h),p.sub(h);const w=1/(d.x*p.y-p.x*d.y);isFinite(w)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(w),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(w),o[L].add(v),o[M].add(v),o[_].add(v),l[L].add(m),l[M].add(m),l[_].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,M=T.length;L<M;++L){const _=T[L],w=_.start,W=_.count;for(let D=w,N=w+W;D<N;D+=3)g(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const S=new z,y=new z,R=new z,C=new z;function A(L){R.fromBufferAttribute(s,L),C.copy(R);const M=o[L];S.copy(M),S.sub(R.multiplyScalar(R.dot(M))).normalize(),y.crossVectors(C,M);const w=y.dot(l[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,w)}for(let L=0,M=T.length;L<M;++L){const _=T[L],w=_.start,W=_.count;for(let D=w,N=w+W;D<N;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,d=e.count;h<d;h+=3){const p=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let g=0;g<u;g++)h[p++]=c[d++]}return new At(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new ft,ai=new el,tr=new Jr,Zl=new z,nr=new z,ir=new z,sr=new z,Aa=new z,rr=new z,Kl=new z,ar=new z;class an extends Et{constructor(e=new un,t=new qu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Aa.fromBufferAttribute(f,e),a?rr.addScaledVector(Aa,u):rr.addScaledVector(Aa.sub(t),u))}t.add(rr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tr.copy(i.boundingSphere),tr.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(tr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(tr,Zl)===null||ai.origin.distanceToSquared(Zl)>(e.far-e.near)**2))&&($l.copy(r).invert(),ai.copy(e.ray).applyMatrix4($l),!(i.boundingBox!==null&&ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=a[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,R=S;y<R;y+=3){const C=o.getX(y),A=o.getX(y+1),L=o.getX(y+2);s=or(this,g,e,i,c,u,f,C,A,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){const T=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);s=or(this,a,e,i,c,u,f,T,S,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=a[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,R=S;y<R;y+=3){const C=y,A=y+1,L=y+2;s=or(this,g,e,i,c,u,f,C,A,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){const T=m,S=m+1,y=m+2;s=or(this,a,e,i,c,u,f,T,S,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ud(n,e,t,i,s,r,a,o){let l;if(e.side===kt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Qn,o),l===null)return null;ar.copy(o),ar.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ar);return c<t.near||c>t.far?null:{distance:c,point:ar.clone(),object:n}}function or(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,nr),n.getVertexPosition(l,ir),n.getVertexPosition(c,sr);const u=Ud(n,e,t,i,nr,ir,sr,Kl);if(u){const f=new z;sn.getBarycoord(Kl,nr,ir,sr,f),s&&(u.uv=sn.getInterpolatedAttribute(s,o,l,c,f,new Ge)),r&&(u.uv1=sn.getInterpolatedAttribute(r,o,l,c,f,new Ge)),a&&(u.normal=sn.getInterpolatedAttribute(a,o,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};sn.getNormal(nr,ir,sr,h.normal),u.face=h,u.barycoord=f}return u}class Fs extends un{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Kn(c,3)),this.setAttribute("normal",new Kn(u,3)),this.setAttribute("uv",new Kn(f,2));function p(v,m,g,T,S,y,R,C,A,L,M){const _=y/A,w=R/L,W=y/2,D=R/2,N=C/2,k=A+1,q=L+1;let K=0,V=0;const re=new z;for(let ae=0;ae<q;ae++){const me=ae*w-D;for(let Le=0;Le<k;Le++){const Oe=Le*_-W;re[v]=Oe*T,re[m]=me*S,re[g]=N,c.push(re.x,re.y,re.z),re[v]=0,re[m]=0,re[g]=C>0?1:-1,u.push(re.x,re.y,re.z),f.push(Le/A),f.push(1-ae/L),K+=1}}for(let ae=0;ae<L;ae++)for(let me=0;me<A;me++){const Le=h+me+k*ae,Oe=h+me+k*(ae+1),Y=h+(me+1)+k*(ae+1),J=h+(me+1)+k*ae;l.push(Le,Oe,J),l.push(Oe,Y,J),V+=6}o.addGroup(d,V,M),d+=V,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=is(n[t]);for(const s in i)e[s]=i[s]}return e}function Id(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $u(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Od={clone:is,merge:Pt};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends hs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zu extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new z,Jl=new Ge,Ql=new Ge;class jt extends Zu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,Jl,Ql),t.subVectors(Ql,Jl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,zi=1;class kd extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(Bi,zi,e,t);s.layers=this.layers,this.add(s);const r=new jt(Bi,zi,e,t);r.layers=this.layers,this.add(r);const a=new jt(Bi,zi,e,t);a.layers=this.layers,this.add(a);const o=new jt(Bi,zi,e,t);o.layers=this.layers,this.add(o);const l=new jt(Bi,zi,e,t);l.layers=this.layers,this.add(l);const c=new jt(Bi,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Ku extends Bt{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bd extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ku(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fs(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:$n});r.uniforms.tEquirect.value=t;const a=new an(s,r),o=t.minFilter;return t.minFilter===gi&&(t.minFilter=vn),new kd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Ca=new z,zd=new z,Hd=new He;class Xn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ca.subVectors(i,t).cross(zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ca),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hd.getNormalMatrix(e),s=this.coplanarPoint(Ca).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Jr,lr=new z;class tl{constructor(e=new Xn,t=new Xn,i=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],p=s[9],v=s[10],m=s[11],g=s[12],T=s[13],S=s[14],y=s[15];if(i[0].setComponents(l-r,h-c,m-d,y-g).normalize(),i[1].setComponents(l+r,h+c,m+d,y+g).normalize(),i[2].setComponents(l+a,h+u,m+p,y+T).normalize(),i[3].setComponents(l-a,h-u,m-p,y-T).normalize(),i[4].setComponents(l-o,h-f,m-v,y-S).normalize(),t===Dn)i[5].setComponents(l+o,h+f,m+v,y+S).normalize();else if(t===Lr)i[5].setComponents(o,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(lr.x=s.normal.x>0?e.max.x:e.min.x,lr.y=s.normal.y>0?e.max.y:e.min.y,lr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ju(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Gd(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],v=f[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Qr extends un{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],p=[],v=[],m=[];for(let g=0;g<u;g++){const T=g*h-a;for(let S=0;S<c;S++){const y=S*f-r;p.push(y,-T,0),v.push(0,0,1),m.push(S/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let T=0;T<o;T++){const S=T+c*g,y=T+c*(g+1),R=T+1+c*(g+1),C=T+1+c*g;d.push(S,y,C),d.push(y,R,C)}this.setIndex(d),this.setAttribute("position",new Kn(p,3)),this.setAttribute("normal",new Kn(v,3)),this.setAttribute("uv",new Kn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,og=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ug=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Vd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:qd,alphatest_fragment:Yd,alphatest_pars_fragment:jd,aomap_fragment:$d,aomap_pars_fragment:Zd,batching_pars_vertex:Kd,batching_vertex:Jd,begin_vertex:Qd,beginnormal_vertex:ep,bsdfs:tp,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:ap,clipping_planes_vertex:op,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:up,color_vertex:hp,common:fp,cube_uv_reflection_fragment:dp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:vp,emissivemap_pars_fragment:xp,colorspace_fragment:_p,colorspace_pars_fragment:yp,envmap_fragment:Sp,envmap_common_pars_fragment:bp,envmap_pars_fragment:Mp,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Op,envmap_vertex:Ep,fog_vertex:Ap,fog_pars_vertex:Cp,fog_fragment:wp,fog_pars_fragment:Rp,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Up,lights_pars_begin:Ip,lights_toon_fragment:Fp,lights_toon_pars_fragment:Np,lights_phong_fragment:kp,lights_phong_pars_fragment:Bp,lights_physical_fragment:zp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Gp,lights_fragment_maps:Vp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:jp,map_fragment:$p,map_pars_fragment:Zp,map_particle_fragment:Kp,map_particle_pars_fragment:Jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:em,morphinstance_vertex:tm,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:am,normal_fragment_maps:om,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:um,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:vm,premultiplied_alpha_fragment:xm,project_vertex:_m,dithering_fragment:ym,dithering_pars_fragment:Sm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Em,shadowmap_vertex:Am,shadowmask_pars_fragment:Cm,skinbase_vertex:wm,skinning_pars_vertex:Rm,skinning_vertex:Dm,skinnormal_vertex:Lm,specularmap_fragment:Pm,specularmap_pars_fragment:Um,tonemapping_fragment:Im,tonemapping_pars_fragment:Om,transmission_fragment:Fm,transmission_pars_fragment:Nm,uv_pars_fragment:km,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:Hm,background_vert:Gm,background_frag:Vm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:jm,depth_frag:$m,distanceRGBA_vert:Zm,distanceRGBA_frag:Km,equirect_vert:Jm,equirect_frag:Qm,linedashed_vert:eg,linedashed_frag:tg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:ag,meshmatcap_frag:og,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:ug,meshphong_frag:hg,meshphysical_vert:fg,meshphysical_frag:dg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:vg,shadow_vert:xg,shadow_frag:_g,sprite_vert:yg,sprite_frag:Sg},ce={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},gn={basic:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Pt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Pt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Pt([ce.points,ce.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Pt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Pt([ce.common,ce.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Pt([ce.sprite,ce.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Pt([ce.common,ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Pt([ce.lights,ce.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};gn.physical={uniforms:Pt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const cr={r:0,b:0,g:0},li=new yn,bg=new ft;function Mg(n,e,t,i,s,r,a){const o=new Ze(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function p(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function v(T){let S=!1;const y=p(T);y===null?g(o,l):y&&y.isColor&&(g(y,1),S=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,S){const y=p(S);y&&(y.isCubeTexture||y.mapping===Zr)?(u===void 0&&(u=new an(new Fs(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:is(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),li.copy(S.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(li)),u.material.toneMapped=$e.getTransfer(y.colorSpace)!==st,(f!==y||h!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new an(new Qr(2,2),new ei({name:"BackgroundMaterial",uniforms:is(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=$e.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function g(T,S){T.getRGB(cr,$u(n)),i.buffers.color.setClear(cr.r,cr.g,cr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,g(o,l)},render:v,addToRenderList:m}}function Tg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(_,w,W,D,N){let k=!1;const q=f(D,W,w);r!==q&&(r=q,c(r.object)),k=d(_,D,W,N),k&&p(_,D,W,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(_,w,W,D),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function f(_,w,W){const D=W.wireframe===!0;let N=i[_.id];N===void 0&&(N={},i[_.id]=N);let k=N[w.id];k===void 0&&(k={},N[w.id]=k);let q=k[D];return q===void 0&&(q=h(l()),k[D]=q),q}function h(_){const w=[],W=[],D=[];for(let N=0;N<t;N++)w[N]=0,W[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:D,object:_,attributes:{},index:null}}function d(_,w,W,D){const N=r.attributes,k=w.attributes;let q=0;const K=W.getAttributes();for(const V in K)if(K[V].location>=0){const ae=N[V];let me=k[V];if(me===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),ae===void 0||ae.attribute!==me||me&&ae.data!==me.data)return!0;q++}return r.attributesNum!==q||r.index!==D}function p(_,w,W,D){const N={},k=w.attributes;let q=0;const K=W.getAttributes();for(const V in K)if(K[V].location>=0){let ae=k[V];ae===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor));const me={};me.attribute=ae,ae&&ae.data&&(me.data=ae.data),N[V]=me,q++}r.attributes=N,r.attributesNum=q,r.index=D}function v(){const _=r.newAttributes;for(let w=0,W=_.length;w<W;w++)_[w]=0}function m(_){g(_,0)}function g(_,w){const W=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;W[_]=1,D[_]===0&&(n.enableVertexAttribArray(_),D[_]=1),N[_]!==w&&(n.vertexAttribDivisor(_,w),N[_]=w)}function T(){const _=r.newAttributes,w=r.enabledAttributes;for(let W=0,D=w.length;W<D;W++)w[W]!==_[W]&&(n.disableVertexAttribArray(W),w[W]=0)}function S(_,w,W,D,N,k,q){q===!0?n.vertexAttribIPointer(_,w,W,N,k):n.vertexAttribPointer(_,w,W,D,N,k)}function y(_,w,W,D){v();const N=D.attributes,k=W.getAttributes(),q=w.defaultAttributeValues;for(const K in k){const V=k[K];if(V.location>=0){let re=N[K];if(re===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(re=_.instanceColor)),re!==void 0){const ae=re.normalized,me=re.itemSize,Le=e.get(re);if(Le===void 0)continue;const Oe=Le.buffer,Y=Le.type,J=Le.bytesPerElement,ue=Y===n.INT||Y===n.UNSIGNED_INT||re.gpuType===jo;if(re.isInterleavedBufferAttribute){const te=re.data,le=te.stride,Ee=re.offset;if(te.isInstancedInterleavedBuffer){for(let Pe=0;Pe<V.locationSize;Pe++)g(V.location+Pe,te.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)m(V.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Pe=0;Pe<V.locationSize;Pe++)S(V.location+Pe,me/V.locationSize,Y,ae,le*J,(Ee+me/V.locationSize*Pe)*J,ue)}else{if(re.isInstancedBufferAttribute){for(let te=0;te<V.locationSize;te++)g(V.location+te,re.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let te=0;te<V.locationSize;te++)m(V.location+te);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let te=0;te<V.locationSize;te++)S(V.location+te,me/V.locationSize,Y,ae,me*J,me/V.locationSize*te*J,ue)}}else if(q!==void 0){const ae=q[K];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(V.location,ae);break;case 3:n.vertexAttrib3fv(V.location,ae);break;case 4:n.vertexAttrib4fv(V.location,ae);break;default:n.vertexAttrib1fv(V.location,ae)}}}}T()}function R(){L();for(const _ in i){const w=i[_];for(const W in w){const D=w[W];for(const N in D)u(D[N].object),delete D[N];delete w[W]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;const w=i[_.id];for(const W in w){const D=w[W];for(const N in D)u(D[N].object),delete D[N];delete w[W]}delete i[_.id]}function A(_){for(const w in i){const W=i[w];if(W[_.id]===void 0)continue;const D=W[_.id];for(const N in D)u(D[N].object),delete D[N];delete W[_.id]}}function L(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Eg(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let p=0;p<f;p++)d+=u[p];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],u[p],h[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v]*h[v];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ag(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==rn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==In&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Rn&&!L)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:R,maxSamples:C}}function Cg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Xn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,g=n.get(f);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,S=T*4;let y=g.clippingState||null;l.value=y,y=u(p,h,S,d);for(let R=0;R!==S;++R)y[R]=t[R];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,p){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=d+v*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,y=d;S!==v;++S,y+=4)a.copy(f[S]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function wg(n){let e=new WeakMap;function t(a,o){return o===io?a.mapping=Qi:o===so&&(a.mapping=es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===io||o===so)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Bd(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Qu extends Zu{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qi=4,ec=[.125,.215,.35,.446,.526,.582],di=20,wa=new Qu,tc=new Ze;let Ra=null,Da=0,La=0,Pa=!1;const hi=(1+Math.sqrt(5))/2,Hi=1/hi,nc=[new z(-hi,Hi,0),new z(hi,Hi,0),new z(-Hi,0,hi),new z(Hi,0,hi),new z(0,hi,-Hi),new z(0,hi,Hi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ra=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Da,La),this._renderer.xr.enabled=Pa,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Us,format:rn,colorSpace:us,depthBuffer:!1},s=sc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(r)),this._blurMaterial=Dg(r,e,t)}return s}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,i,s){const o=new jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(tc),u.toneMapping=Zn,u.autoClear=!1;const d=new qu({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),p=new an(new Fs,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(tc),v=!0);for(let g=0;g<6;g++){const T=g%3;T===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):T===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const S=this._cubeSize;ur(s,T*S,g>2?S:0,S,S),u.setRenderTarget(s),v&&u.render(p,o),u.render(e,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Qi||e.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new an(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ur(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nc[(s-r-1)%nc.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new an(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*di-1),v=r/p,m=isFinite(r)?1+Math.floor(u*v):di;m>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const g=[];let T=0;for(let A=0;A<di;++A){const L=A/v,M=Math.exp(-L*L/2);g.push(M),A===0?T+=M:A<m&&(T+=2*M)}for(let A=0;A<g.length;A++)g[A]=g[A]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=p,h.mipInt.value=S-i;const y=this._sizeLods[s],R=3*y*(s>S-qi?s-S+qi:0),C=4*(this._cubeSize-y);ur(t,R,C,3*y,2*y),l.setRenderTarget(t),l.render(f,wa)}}function Rg(n){const e=[],t=[],i=[];let s=n;const r=n-qi+1+ec.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-qi?l=ec[a-n+qi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,v=3,m=2,g=1,T=new Float32Array(v*p*d),S=new Float32Array(m*p*d),y=new Float32Array(g*p*d);for(let C=0;C<d;C++){const A=C%3*2/3-1,L=C>2?0:-1,M=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];T.set(M,v*p*C),S.set(h,m*p*C);const _=[C,C,C,C,C,C];y.set(_,g*p*C)}const R=new un;R.setAttribute("position",new At(T,v)),R.setAttribute("uv",new At(S,m)),R.setAttribute("faceIndex",new At(y,g)),e.push(R),s>qi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sc(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=Zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Dg(n,e,t){const i=new Float32Array(di),s=new z(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function rc(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ac(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===io||l===so,u=l===Qi||l===es;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new ic(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new ic(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Pg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ts("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ug(n,e,t,i){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);for(const p in h.morphAttributes){const v=h.morphAttributes[p];for(let m=0,g=v.length;m<g;m++)e.remove(v[m])}h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const p in d){const v=d[p];for(let m=0,g=v.length;m<g;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,p=f.attributes.position;let v=0;if(d!==null){const T=d.array;v=d.version;for(let S=0,y=T.length;S<y;S+=3){const R=T[S+0],C=T[S+1],A=T[S+2];h.push(R,C,C,A,A,R)}}else if(p!==void 0){const T=p.array;v=p.version;for(let S=0,y=T.length/3-1;S<y;S+=3){const R=S+0,C=S+1,A=S+2;h.push(R,C,C,A,A,R)}}else return;const m=new(Hu(h)?ju:Yu)(h,1);m.version=v;const g=r.get(f);g&&e.remove(g),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ig(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*a),t.update(d,i,1)}function c(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,h*a,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,i,1)}function f(h,d,p,v){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)c(h[g]/a,d[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,v,0,p);let g=0;for(let T=0;T<p;T++)g+=d[T]*v[T];t.update(g,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Og(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Fg(n,e,t){const i=new WeakMap,s=new pt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let _=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",_)};var d=_;h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let R=o.attributes.position.count*y,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*C*4*f),L=new Vu(A,R,C,f);L.type=Rn,L.needsUpdate=!0;const M=y*4;for(let w=0;w<f;w++){const W=g[w],D=T[w],N=S[w],k=R*C*4*w;for(let q=0;q<W.count;q++){const K=q*M;p===!0&&(s.fromBufferAttribute(W,q),A[k+K+0]=s.x,A[k+K+1]=s.y,A[k+K+2]=s.z,A[k+K+3]=0),v===!0&&(s.fromBufferAttribute(D,q),A[k+K+4]=s.x,A[k+K+5]=s.y,A[k+K+6]=s.z,A[k+K+7]=0),m===!0&&(s.fromBufferAttribute(N,q),A[k+K+8]=s.x,A[k+K+9]=s.y,A[k+K+10]=s.z,A[k+K+11]=N.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new Ge(R,C)},i.set(o,h),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Ng(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class eh extends Bt{constructor(e,t,i,s,r,a,o,l,c,u=$i){if(u!==$i&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$i&&(i=xi),i===void 0&&u===ns&&(i=ts),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const th=new Bt,oc=new eh(1,1),nh=new Vu,ih=new Md,sh=new Ku,lc=[],cc=[],uc=new Float32Array(16),hc=new Float32Array(9),fc=new Float32Array(4);function fs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=lc[s];if(r===void 0&&(r=new Float32Array(s),lc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ea(n,e){let t=cc[e];t===void 0&&(t=new Int32Array(e),cc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function Gg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;fc.set(i),n.uniformMatrix2fv(this.addr,!1,fc),St(t,i)}}function Vg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;hc.set(i),n.uniformMatrix3fv(this.addr,!1,hc),St(t,i)}}function Wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;uc.set(i),n.uniformMatrix4fv(this.addr,!1,uc),St(t,i)}}function Xg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function $g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function Qg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(oc.compareFunction=zu,r=oc):r=th,t.setTexture2D(e||r,s)}function e0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ih,s)}function t0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sh,s)}function n0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||nh,s)}function i0(n){switch(n){case 5126:return kg;case 35664:return Bg;case 35665:return zg;case 35666:return Hg;case 35674:return Gg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return jg;case 5125:return $g;case 36294:return Zg;case 36295:return Kg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}function s0(n,e){n.uniform1fv(this.addr,e)}function r0(n,e){const t=fs(e,this.size,2);n.uniform2fv(this.addr,t)}function a0(n,e){const t=fs(e,this.size,3);n.uniform3fv(this.addr,t)}function o0(n,e){const t=fs(e,this.size,4);n.uniform4fv(this.addr,t)}function l0(n,e){const t=fs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function c0(n,e){const t=fs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function u0(n,e){const t=fs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function h0(n,e){n.uniform1iv(this.addr,e)}function f0(n,e){n.uniform2iv(this.addr,e)}function d0(n,e){n.uniform3iv(this.addr,e)}function p0(n,e){n.uniform4iv(this.addr,e)}function m0(n,e){n.uniform1uiv(this.addr,e)}function g0(n,e){n.uniform2uiv(this.addr,e)}function v0(n,e){n.uniform3uiv(this.addr,e)}function x0(n,e){n.uniform4uiv(this.addr,e)}function _0(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||th,r[a])}function y0(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ih,r[a])}function S0(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||sh,r[a])}function b0(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nh,r[a])}function M0(n){switch(n){case 5126:return s0;case 35664:return r0;case 35665:return a0;case 35666:return o0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return h0;case 35667:case 35671:return f0;case 35668:case 35672:return d0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return v0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return b0}}class T0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=i0(t.type)}}class E0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M0(t.type)}}class A0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function dc(n,e){n.seq.push(e),n.map[e.id]=e}function C0(n,e,t){const i=n.name,s=i.length;for(Ua.lastIndex=0;;){const r=Ua.exec(i),a=Ua.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){dc(t,c===void 0?new T0(o,n,e):new E0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new A0(o),dc(t,f)),t=f}}}class Ar{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);C0(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function pc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const w0=37297;let R0=0;function D0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const mc=new He;function L0(n){$e._getMatrix(mc,$e.workingColorSpace,n);const e=`mat3( ${mc.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case Kr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+D0(n.getShaderSource(e),a)}else return s}function P0(n,e){const t=L0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U0(n,e){let t;switch(e){case $f:t="Linear";break;case Zf:t="Reinhard";break;case Kf:t="Cineon";break;case Jf:t="ACESFilmic";break;case ed:t="AgX";break;case td:t="Neutral";break;case Qf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hr=new z;function I0(){$e.getLuminanceCoefficients(hr);const n=hr.x.toFixed(4),e=hr.y.toFixed(4),t=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function F0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function N0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Es(n){return n!==""}function vc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(n){return n.replace(k0,z0)}const B0=new Map;function z0(n,e){let t=We[e];if(t===void 0){const i=B0.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oo(t)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(n){return n.replace(H0,G0)}function G0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Au?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function W0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qi:case es:e="ENVMAP_TYPE_CUBE";break;case Zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function q0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cu:e="ENVMAP_BLENDING_MULTIPLY";break;case Yf:e="ENVMAP_BLENDING_MIX";break;case jf:e="ENVMAP_BLENDING_ADD";break}return e}function Y0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function j0(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=V0(t),c=W0(t),u=X0(t),f=q0(t),h=Y0(t),d=O0(t),p=F0(r),v=s.createProgram();let m,g,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Es).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Es).join(`
`),g.length>0&&(g+=`
`)):(m=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),g=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?We.tonemapping_pars_fragment:"",t.toneMapping!==Zn?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,P0("linearToOutputTexel",t.outputColorSpace),I0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),a=Oo(a),a=vc(a,t),a=xc(a,t),o=Oo(o),o=vc(o,t),o=xc(o,t),a=_c(a),o=_c(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=T+m+a,y=T+g+o,R=pc(s,s.VERTEX_SHADER,S),C=pc(s,s.FRAGMENT_SHADER,y);s.attachShader(v,R),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(w){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(v).trim(),D=s.getShaderInfoLog(R).trim(),N=s.getShaderInfoLog(C).trim();let k=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,R,C);else{const K=gc(s,R,"vertex"),V=gc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+K+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(D===""||N==="")&&(q=!1);q&&(w.diagnostics={runnable:k,programLog:W,vertexShader:{log:D,prefix:m},fragmentShader:{log:N,prefix:g}})}s.deleteShader(R),s.deleteShader(C),L=new Ar(s,v),M=N0(s,v)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,w0)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=C,this}let $0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new K0(e),t.set(e,i)),i}}class K0{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}}function J0(n,e,t,i,s,r,a){const o=new Wu,l=new Z0,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,w,W,D){const N=W.fog,k=D.geometry,q=M.isMeshStandardMaterial?W.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),V=K&&K.mapping===Zr?K.image.height:null,re=p[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,me=ae!==void 0?ae.length:0;let Le=0;k.morphAttributes.position!==void 0&&(Le=1),k.morphAttributes.normal!==void 0&&(Le=2),k.morphAttributes.color!==void 0&&(Le=3);let Oe,Y,J,ue;if(re){const tt=gn[re];Oe=tt.vertexShader,Y=tt.fragmentShader}else Oe=M.vertexShader,Y=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),ue=l.getFragmentShaderID(M);const te=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),Ee=D.isInstancedMesh===!0,Pe=D.isBatchedMesh===!0,qe=!!M.map,Ne=!!M.matcap,ut=!!K,P=!!M.aoMap,vt=!!M.lightMap,ke=!!M.bumpMap,Xe=!!M.normalMap,we=!!M.displacementMap,it=!!M.emissiveMap,Re=!!M.metalnessMap,E=!!M.roughnessMap,x=M.anisotropy>0,B=M.clearcoat>0,j=M.dispersion>0,ee=M.iridescence>0,$=M.sheen>0,Ae=M.transmission>0,fe=x&&!!M.anisotropyMap,ve=B&&!!M.clearcoatMap,je=B&&!!M.clearcoatNormalMap,ne=B&&!!M.clearcoatRoughnessMap,_e=ee&&!!M.iridescenceMap,Ue=ee&&!!M.iridescenceThicknessMap,Ie=$&&!!M.sheenColorMap,ye=$&&!!M.sheenRoughnessMap,Ye=!!M.specularMap,Ve=!!M.specularColorMap,at=!!M.specularIntensityMap,U=Ae&&!!M.transmissionMap,he=Ae&&!!M.thicknessMap,X=!!M.gradientMap,Z=!!M.alphaMap,ge=M.alphaTest>0,de=!!M.alphaHash,Be=!!M.extensions;let dt=Zn;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(dt=n.toneMapping);const Ct={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:Y,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&D._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&D.instanceColor!==null,instancingMorph:Ee&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:us,alphaToCoverage:!!M.alphaToCoverage,map:qe,matcap:Ne,envMap:ut,envMapMode:ut&&K.mapping,envMapCubeUVHeight:V,aoMap:P,lightMap:vt,bumpMap:ke,normalMap:Xe,displacementMap:h&&we,emissiveMap:it,normalMapObjectSpace:Xe&&M.normalMapType===rd,normalMapTangentSpace:Xe&&M.normalMapType===Bu,metalnessMap:Re,roughnessMap:E,anisotropy:x,anisotropyMap:fe,clearcoat:B,clearcoatMap:ve,clearcoatNormalMap:je,clearcoatRoughnessMap:ne,dispersion:j,iridescence:ee,iridescenceMap:_e,iridescenceThicknessMap:Ue,sheen:$,sheenColorMap:Ie,sheenRoughnessMap:ye,specularMap:Ye,specularColorMap:Ve,specularIntensityMap:at,transmission:Ae,transmissionMap:U,thicknessMap:he,gradientMap:X,opaque:M.transparent===!1&&M.blending===ji&&M.alphaToCoverage===!1,alphaMap:Z,alphaTest:ge,alphaHash:de,combine:M.combine,mapUv:qe&&v(M.map.channel),aoMapUv:P&&v(M.aoMap.channel),lightMapUv:vt&&v(M.lightMap.channel),bumpMapUv:ke&&v(M.bumpMap.channel),normalMapUv:Xe&&v(M.normalMap.channel),displacementMapUv:we&&v(M.displacementMap.channel),emissiveMapUv:it&&v(M.emissiveMap.channel),metalnessMapUv:Re&&v(M.metalnessMap.channel),roughnessMapUv:E&&v(M.roughnessMap.channel),anisotropyMapUv:fe&&v(M.anisotropyMap.channel),clearcoatMapUv:ve&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(M.sheenRoughnessMap.channel),specularMapUv:Ye&&v(M.specularMap.channel),specularColorMapUv:Ve&&v(M.specularColorMap.channel),specularIntensityMapUv:at&&v(M.specularIntensityMap.channel),transmissionMapUv:U&&v(M.transmissionMap.channel),thicknessMapUv:he&&v(M.thicknessMap.channel),alphaMapUv:Z&&v(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Xe||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(qe||Z),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:le,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Le,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:qe&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===st,decodeVideoTextureEmissive:it&&M.emissiveMap.isVideoTexture===!0&&$e.getTransfer(M.emissiveMap.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function g(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)_.push(w),_.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(T(_,M),S(_,M),_.push(n.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function T(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const _=p[M.type];let w;if(_){const W=gn[_];w=Od.clone(W.uniforms)}else w=M.uniforms;return w}function R(M,_){let w;for(let W=0,D=u.length;W<D;W++){const N=u[W];if(N.cacheKey===_){w=N,++w.usedTimes;break}}return w===void 0&&(w=new j0(n,_,M,r),u.push(w)),w}function C(M){if(--M.usedTimes===0){const _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:L}}function Q0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ev(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Sc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,h,d,p,v,m){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:d,groupOrder:p,renderOrder:f.renderOrder,z:v,group:m},n[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=d,g.groupOrder=p,g.renderOrder=f.renderOrder,g.z=v,g.group=m),e++,g}function o(f,h,d,p,v,m){const g=a(f,h,d,p,v,m);d.transmission>0?i.push(g):d.transparent===!0?s.push(g):t.push(g)}function l(f,h,d,p,v,m){const g=a(f,h,d,p,v,m);d.transmission>0?i.unshift(g):d.transparent===!0?s.unshift(g):t.unshift(g)}function c(f,h){t.length>1&&t.sort(f||ev),i.length>1&&i.sort(h||Sc),s.length>1&&s.sort(h||Sc)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function tv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new bc,n.set(i,[a])):s>=r.length?(a=new bc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function nv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ze};break;case"SpotLight":t={position:new z,direction:new z,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function iv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sv=0;function rv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function av(n){const e=new nv,t=iv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new ft,a=new ft;function o(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,T=0,S=0,y=0,R=0,C=0,A=0;c.sort(rv);for(let M=0,_=c.length;M<_;M++){const w=c[M],W=w.color,D=w.intensity,N=w.distance,k=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=W.r*D,f+=W.g*D,h+=W.b*D;else if(w.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(w.sh.coefficients[q],D);A++}else if(w.isDirectionalLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,V=t.get(w);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=k,i.directionalShadowMatrix[d]=w.shadow.matrix,T++}i.directional[d]=q,d++}else if(w.isSpotLight){const q=e.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(W).multiplyScalar(D),q.distance=N,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,i.spot[v]=q;const K=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,K.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[v]=K.matrix,w.castShadow){const V=t.get(w);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=k,y++}v++}else if(w.isRectAreaLight){const q=e.get(w);q.color.copy(W).multiplyScalar(D),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=q,m++}else if(w.isPointLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){const K=w.shadow,V=t.get(w);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=w.shadow.matrix,S++}i.point[p]=q,p++}else if(w.isHemisphereLight){const q=e.get(w);q.skyColor.copy(w.color).multiplyScalar(D),q.groundColor.copy(w.groundColor).multiplyScalar(D),i.hemi[g]=q,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==g||L.numDirectionalShadows!==T||L.numPointShadows!==S||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,L.directionalLength=d,L.pointLength=p,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=g,L.numDirectionalShadows=T,L.numPointShadows=S,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=A,i.version=sv++)}function l(c,u){let f=0,h=0,d=0,p=0,v=0;const m=u.matrixWorldInverse;for(let g=0,T=c.length;g<T;g++){const S=c[g];if(S.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(S.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Mc(n){const e=new av(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ov(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Mc(n),e.set(s,[o])):r>=a.length?(o=new Mc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class lv extends hs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cv extends hs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fv(n,e,t){let i=new tl;const s=new Ge,r=new Ge,a=new pt,o=new lv({depthPacking:sd}),l=new cv,c={},u=t.maxTextureSize,f={[Qn]:kt,[kt]:Qn,[nn]:nn},h=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:uv,fragmentShader:hv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new un;p.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new an(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Au;let g=this.type;this.render=function(C,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=n.getRenderTarget(),_=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),W=n.state;W.setBlending($n),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const D=g!==wn&&this.type===wn,N=g===wn&&this.type!==wn;for(let k=0,q=C.length;k<q;k++){const K=C[k],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const re=V.getFrameExtents();if(s.multiply(re),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,V.mapSize.y=r.y)),V.map===null||D===!0||N===!0){const me=this.type!==wn?{minFilter:on,magFilter:on}:{};V.map!==null&&V.map.dispose(),V.map=new _i(s.x,s.y,me),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ae=V.getViewportCount();for(let me=0;me<ae;me++){const Le=V.getViewport(me);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),W.viewport(a),V.updateMatrices(K,me),i=V.getFrustum(),y(A,L,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===wn&&T(V,L),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(M,_,w)};function T(C,A){const L=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _i(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,L,h,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,L,d,v,null)}function S(C,A,L,M){let _=null;const w=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)_=w;else if(_=L.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=_.uuid,D=A.uuid;let N=c[W];N===void 0&&(N={},c[W]=N);let k=N[D];k===void 0&&(k=_.clone(),N[D]=k,A.addEventListener("dispose",R)),_=k}if(_.visible=A.visible,_.wireframe=A.wireframe,M===wn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:f[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const W=n.properties.get(_);W.light=L}return _}function y(C,A,L,M,_){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===wn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const D=e.update(C),N=C.material;if(Array.isArray(N)){const k=D.groups;for(let q=0,K=k.length;q<K;q++){const V=k[q],re=N[V.materialIndex];if(re&&re.visible){const ae=S(C,re,M,_);C.onBeforeShadow(n,C,A,L,D,ae,V),n.renderBufferDirect(L,null,D,ae,C,V),C.onAfterShadow(n,C,A,L,D,ae,V)}}}else if(N.visible){const k=S(C,N,M,_);C.onBeforeShadow(n,C,A,L,D,k,null),n.renderBufferDirect(L,null,D,k,C,null),C.onAfterShadow(n,C,A,L,D,k,null)}}const W=C.children;for(let D=0,N=W.length;D<N;D++)y(W[D],A,L,M,_)}function R(C){C.target.removeEventListener("dispose",R);for(const L in c){const M=c[L],_=C.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const dv={[Za]:Ka,[Ja]:to,[Qa]:no,[Ji]:eo,[Ka]:Za,[to]:Ja,[no]:Qa,[eo]:Ji};function pv(n,e){function t(){let U=!1;const he=new pt;let X=null;const Z=new pt(0,0,0,0);return{setMask:function(ge){X!==ge&&!U&&(n.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){U=ge},setClear:function(ge,de,Be,dt,Ct){Ct===!0&&(ge*=dt,de*=dt,Be*=dt),he.set(ge,de,Be,dt),Z.equals(he)===!1&&(n.clearColor(ge,de,Be,dt),Z.copy(he))},reset:function(){U=!1,X=null,Z.set(-1,0,0,0)}}}function i(){let U=!1,he=!1,X=null,Z=null,ge=null;return{setReversed:function(de){if(he!==de){const Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const dt=ge;ge=null,this.setClear(dt)}he=de},getReversed:function(){return he},setTest:function(de){de?te(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(de){X!==de&&!U&&(n.depthMask(de),X=de)},setFunc:function(de){if(he&&(de=dv[de]),Z!==de){switch(de){case Za:n.depthFunc(n.NEVER);break;case Ka:n.depthFunc(n.ALWAYS);break;case Ja:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case Qa:n.depthFunc(n.EQUAL);break;case eo:n.depthFunc(n.GEQUAL);break;case to:n.depthFunc(n.GREATER);break;case no:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=de}},setLocked:function(de){U=de},setClear:function(de){ge!==de&&(he&&(de=1-de),n.clearDepth(de),ge=de)},reset:function(){U=!1,X=null,Z=null,ge=null,he=!1}}}function s(){let U=!1,he=null,X=null,Z=null,ge=null,de=null,Be=null,dt=null,Ct=null;return{setTest:function(tt){U||(tt?te(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(tt){he!==tt&&!U&&(n.stencilMask(tt),he=tt)},setFunc:function(tt,Zt,Sn){(X!==tt||Z!==Zt||ge!==Sn)&&(n.stencilFunc(tt,Zt,Sn),X=tt,Z=Zt,ge=Sn)},setOp:function(tt,Zt,Sn){(de!==tt||Be!==Zt||dt!==Sn)&&(n.stencilOp(tt,Zt,Sn),de=tt,Be=Zt,dt=Sn)},setLocked:function(tt){U=tt},setClear:function(tt){Ct!==tt&&(n.clearStencil(tt),Ct=tt)},reset:function(){U=!1,he=null,X=null,Z=null,ge=null,de=null,Be=null,dt=null,Ct=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,v=!1,m=null,g=null,T=null,S=null,y=null,R=null,C=null,A=new Ze(0,0,0),L=0,M=!1,_=null,w=null,W=null,D=null,N=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=K>=2);let re=null,ae={};const me=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),Oe=new pt().fromArray(me),Y=new pt().fromArray(Le);function J(U,he,X,Z){const ge=new Uint8Array(4),de=n.createTexture();n.bindTexture(U,de),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<X;Be++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(he+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return de}const ue={};ue[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(Ji),ke(!1),Xe(Cl),te(n.CULL_FACE),P($n);function te(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function le(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ee(U,he){return f[U]!==he?(n.bindFramebuffer(U,he),f[U]=he,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=he),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Pe(U,he){let X=d,Z=!1;if(U){X=h.get(he),X===void 0&&(X=[],h.set(he,X));const ge=U.textures;if(X.length!==ge.length||X[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Be=ge.length;de<Be;de++)X[de]=n.COLOR_ATTACHMENT0+de;X.length=ge.length,Z=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,Z=!0);Z&&n.drawBuffers(X)}function qe(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const Ne={[fi]:n.FUNC_ADD,[Df]:n.FUNC_SUBTRACT,[Lf]:n.FUNC_REVERSE_SUBTRACT};Ne[Pf]=n.MIN,Ne[Uf]=n.MAX;const ut={[If]:n.ZERO,[Of]:n.ONE,[Ff]:n.SRC_COLOR,[ja]:n.SRC_ALPHA,[Gf]:n.SRC_ALPHA_SATURATE,[zf]:n.DST_COLOR,[kf]:n.DST_ALPHA,[Nf]:n.ONE_MINUS_SRC_COLOR,[$a]:n.ONE_MINUS_SRC_ALPHA,[Hf]:n.ONE_MINUS_DST_COLOR,[Bf]:n.ONE_MINUS_DST_ALPHA,[Vf]:n.CONSTANT_COLOR,[Wf]:n.ONE_MINUS_CONSTANT_COLOR,[Xf]:n.CONSTANT_ALPHA,[qf]:n.ONE_MINUS_CONSTANT_ALPHA};function P(U,he,X,Z,ge,de,Be,dt,Ct,tt){if(U===$n){v===!0&&(le(n.BLEND),v=!1);return}if(v===!1&&(te(n.BLEND),v=!0),U!==Rf){if(U!==m||tt!==M){if((g!==fi||y!==fi)&&(n.blendEquation(n.FUNC_ADD),g=fi,y=fi),tt)switch(U){case ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wl:n.blendFunc(n.ONE,n.ONE);break;case Rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,S=null,R=null,C=null,A.set(0,0,0),L=0,m=U,M=tt}return}ge=ge||he,de=de||X,Be=Be||Z,(he!==g||ge!==y)&&(n.blendEquationSeparate(Ne[he],Ne[ge]),g=he,y=ge),(X!==T||Z!==S||de!==R||Be!==C)&&(n.blendFuncSeparate(ut[X],ut[Z],ut[de],ut[Be]),T=X,S=Z,R=de,C=Be),(dt.equals(A)===!1||Ct!==L)&&(n.blendColor(dt.r,dt.g,dt.b,Ct),A.copy(dt),L=Ct),m=U,M=!1}function vt(U,he){U.side===nn?le(n.CULL_FACE):te(n.CULL_FACE);let X=U.side===kt;he&&(X=!X),ke(X),U.blending===ji&&U.transparent===!1?P($n):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;o.setTest(Z),Z&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),it(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(U){_!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),_=U)}function Xe(U){U!==Af?(te(n.CULL_FACE),U!==w&&(U===Cl?n.cullFace(n.BACK):U===Cf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),w=U}function we(U){U!==W&&(q&&n.lineWidth(U),W=U)}function it(U,he,X){U?(te(n.POLYGON_OFFSET_FILL),(D!==he||N!==X)&&(n.polygonOffset(he,X),D=he,N=X)):le(n.POLYGON_OFFSET_FILL)}function Re(U){U?te(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function E(U){U===void 0&&(U=n.TEXTURE0+k-1),re!==U&&(n.activeTexture(U),re=U)}function x(U,he,X){X===void 0&&(re===null?X=n.TEXTURE0+k-1:X=re);let Z=ae[X];Z===void 0&&(Z={type:void 0,texture:void 0},ae[X]=Z),(Z.type!==U||Z.texture!==he)&&(re!==X&&(n.activeTexture(X),re=X),n.bindTexture(U,he||ue[U]),Z.type=U,Z.texture=he)}function B(){const U=ae[re];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){Oe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Oe.copy(U))}function ye(U){Y.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Ye(U,he){let X=c.get(he);X===void 0&&(X=new WeakMap,c.set(he,X));let Z=X.get(U);Z===void 0&&(Z=n.getUniformBlockIndex(he,U.name),X.set(U,Z))}function Ve(U,he){const Z=c.get(he).get(U);l.get(he)!==Z&&(n.uniformBlockBinding(he,Z,U.__bindingPointIndex),l.set(he,Z))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,ae={},f={},h=new WeakMap,d=[],p=null,v=!1,m=null,g=null,T=null,S=null,y=null,R=null,C=null,A=new Ze(0,0,0),L=0,M=!1,_=null,w=null,W=null,D=null,N=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:le,bindFramebuffer:Ee,drawBuffers:Pe,useProgram:qe,setBlending:P,setMaterial:vt,setFlipSided:ke,setCullFace:Xe,setLineWidth:we,setPolygonOffset:it,setScissorTest:Re,activeTexture:E,bindTexture:x,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:ee,texImage2D:_e,texImage3D:Ue,updateUBOMapping:Ye,uniformBlockBinding:Ve,texStorage2D:je,texStorage3D:ne,texSubImage2D:$,texSubImage3D:Ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ie,viewport:ye,reset:at}}function Tc(n,e,t,i){const s=mv(i);switch(t){case Pu:return n*e;case Iu:return n*e;case Ou:return n*e*2;case Fu:return n*e/s.components*s.byteLength;case Ko:return n*e/s.components*s.byteLength;case Nu:return n*e*2/s.components*s.byteLength;case Jo:return n*e*2/s.components*s.byteLength;case Uu:return n*e*3/s.components*s.byteLength;case rn:return n*e*4/s.components*s.byteLength;case Qo:return n*e*4/s.components*s.byteLength;case yr:case Sr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case br:case Mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lo:case uo:return Math.max(n,16)*Math.max(e,8)/4;case oo:case co:return Math.max(n,8)*Math.max(e,8)/2;case ho:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Tr:case Ro:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ku:case Lo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Po:case Uo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mv(n){switch(n){case In:case Ru:return{byteLength:1,components:1};case Rs:case Du:case Us:return{byteLength:2,components:1};case $o:case Zo:return{byteLength:2,components:4};case xi:case jo:case Rn:return{byteLength:4,components:1};case Lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gv(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,x){return d?new OffscreenCanvas(E,x):Pr("canvas")}function v(E,x,B){let j=1;const ee=Re(E);if((ee.width>B||ee.height>B)&&(j=B/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(j*ee.width),Ae=Math.floor(j*ee.height);f===void 0&&(f=p($,Ae));const fe=x?p($,Ae):f;return fe.width=$,fe.height=Ae,fe.getContext("2d").drawImage(E,0,0,$,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+Ae+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),E;return E}function m(E){return E.generateMipmaps}function g(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(E,x,B,j,ee=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=x;if(x===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),x===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGB8UI),B===n.UNSIGNED_SHORT&&($=n.RGB16UI),B===n.UNSIGNED_INT&&($=n.RGB32UI),B===n.BYTE&&($=n.RGB8I),B===n.SHORT&&($=n.RGB16I),B===n.INT&&($=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGBA8UI),B===n.UNSIGNED_SHORT&&($=n.RGBA16UI),B===n.UNSIGNED_INT&&($=n.RGBA32UI),B===n.BYTE&&($=n.RGBA8I),B===n.SHORT&&($=n.RGBA16I),B===n.INT&&($=n.RGBA32I)),x===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),x===n.RGBA){const Ae=ee?Kr:$e.getTransfer(j);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=Ae===st?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(E,x){let B;return E?x===null||x===xi||x===ts?B=n.DEPTH24_STENCIL8:x===Rn?B=n.DEPTH32F_STENCIL8:x===Rs&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xi||x===ts?B=n.DEPTH_COMPONENT24:x===Rn?B=n.DEPTH_COMPONENT32F:x===Rs&&(B=n.DEPTH_COMPONENT16),B}function R(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==on&&E.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function C(E){const x=E.target;x.removeEventListener("dispose",C),L(x),x.isVideoTexture&&u.delete(x)}function A(E){const x=E.target;x.removeEventListener("dispose",A),_(x)}function L(E){const x=i.get(E);if(x.__webglInit===void 0)return;const B=E.source,j=h.get(B);if(j){const ee=j[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(E),Object.keys(j).length===0&&h.delete(B)}i.remove(E)}function M(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const B=E.source,j=h.get(B);delete j[x.__cacheKey],a.memory.textures--}function _(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let ee=0;ee<x.__webglFramebuffer[j].length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[j][ee]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=E.textures;for(let j=0,ee=B.length;j<ee;j++){const $=i.get(B[j]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(B[j])}i.remove(E)}let w=0;function W(){w=0}function D(){const E=w;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),w+=1,E}function N(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function k(E,x){const B=i.get(E);if(E.isVideoTexture&&we(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,E,x);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function q(E,x){const B=i.get(E);if(E.version>0&&B.__version!==E.version){Y(B,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function K(E,x){const B=i.get(E);if(E.version>0&&B.__version!==E.version){Y(B,E,x);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function V(E,x){const B=i.get(E);if(E.version>0&&B.__version!==E.version){J(B,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const re={[ro]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[ao]:n.MIRRORED_REPEAT},ae={[on]:n.NEAREST,[nd]:n.NEAREST_MIPMAP_NEAREST,[Xs]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[aa]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},me={[ad]:n.NEVER,[fd]:n.ALWAYS,[od]:n.LESS,[zu]:n.LEQUAL,[ld]:n.EQUAL,[hd]:n.GEQUAL,[cd]:n.GREATER,[ud]:n.NOTEQUAL};function Le(E,x){if(x.type===Rn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===aa||x.magFilter===Xs||x.magFilter===gi||x.minFilter===vn||x.minFilter===aa||x.minFilter===Xs||x.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,re[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,re[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,re[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ae[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==Xs&&x.minFilter!==gi||x.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Oe(E,x){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",C));const j=x.source;let ee=h.get(j);ee===void 0&&(ee={},h.set(j,ee));const $=N(x);if($!==E.__cacheKey){ee[$]===void 0&&(ee[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ee[$].usedTimes++;const Ae=ee[E.__cacheKey];Ae!==void 0&&(ee[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(x)),E.__cacheKey=$,E.__webglTexture=ee[$].texture}return B}function Y(E,x,B){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);const ee=Oe(E,x),$=x.source;t.bindTexture(j,E.__webglTexture,n.TEXTURE0+B);const Ae=i.get($);if($.version!==Ae.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const fe=$e.getPrimaries($e.workingColorSpace),ve=x.colorSpace===Yn?null:$e.getPrimaries(x.colorSpace),je=x.colorSpace===Yn||fe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ne=v(x.image,!1,s.maxTextureSize);ne=it(x,ne);const _e=r.convert(x.format,x.colorSpace),Ue=r.convert(x.type);let Ie=S(x.internalFormat,_e,Ue,x.colorSpace,x.isVideoTexture);Le(j,x);let ye;const Ye=x.mipmaps,Ve=x.isVideoTexture!==!0,at=Ae.__version===void 0||ee===!0,U=$.dataReady,he=R(x,ne);if(x.isDepthTexture)Ie=y(x.format===ns,x.type),at&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ie,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ne.width,ne.height,0,_e,Ue,null));else if(x.isDataTexture)if(Ye.length>0){Ve&&at&&t.texStorage2D(n.TEXTURE_2D,he,Ie,Ye[0].width,Ye[0].height);for(let X=0,Z=Ye.length;X<Z;X++)ye=Ye[X],Ve?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ye.width,ye.height,_e,Ue,ye.data):t.texImage2D(n.TEXTURE_2D,X,Ie,ye.width,ye.height,0,_e,Ue,ye.data);x.generateMipmaps=!1}else Ve?(at&&t.texStorage2D(n.TEXTURE_2D,he,Ie,ne.width,ne.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,_e,Ue,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,ne.width,ne.height,0,_e,Ue,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ie,Ye[0].width,Ye[0].height,ne.depth);for(let X=0,Z=Ye.length;X<Z;X++)if(ye=Ye[X],x.format!==rn)if(_e!==null)if(Ve){if(U)if(x.layerUpdates.size>0){const ge=Tc(ye.width,ye.height,x.format,x.type);for(const de of x.layerUpdates){const Be=ye.data.subarray(de*ge/ye.data.BYTES_PER_ELEMENT,(de+1)*ge/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,de,ye.width,ye.height,1,_e,Be)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,ne.depth,_e,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ie,ye.width,ye.height,ne.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,ne.depth,_e,Ue,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ie,ye.width,ye.height,ne.depth,0,_e,Ue,ye.data)}else{Ve&&at&&t.texStorage2D(n.TEXTURE_2D,he,Ie,Ye[0].width,Ye[0].height);for(let X=0,Z=Ye.length;X<Z;X++)ye=Ye[X],x.format!==rn?_e!==null?Ve?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ye.width,ye.height,_e,Ue,ye.data):t.texImage2D(n.TEXTURE_2D,X,Ie,ye.width,ye.height,0,_e,Ue,ye.data)}else if(x.isDataArrayTexture)if(Ve){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ie,ne.width,ne.height,ne.depth),U)if(x.layerUpdates.size>0){const X=Tc(ne.width,ne.height,x.format,x.type);for(const Z of x.layerUpdates){const ge=ne.data.subarray(Z*X/ne.data.BYTES_PER_ELEMENT,(Z+1)*X/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,_e,Ue,ge)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,_e,Ue,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ne.width,ne.height,ne.depth,0,_e,Ue,ne.data);else if(x.isData3DTexture)Ve?(at&&t.texStorage3D(n.TEXTURE_3D,he,Ie,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,_e,Ue,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ne.width,ne.height,ne.depth,0,_e,Ue,ne.data);else if(x.isFramebufferTexture){if(at)if(Ve)t.texStorage2D(n.TEXTURE_2D,he,Ie,ne.width,ne.height);else{let X=ne.width,Z=ne.height;for(let ge=0;ge<he;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ie,X,Z,0,_e,Ue,null),X>>=1,Z>>=1}}else if(Ye.length>0){if(Ve&&at){const X=Re(Ye[0]);t.texStorage2D(n.TEXTURE_2D,he,Ie,X.width,X.height)}for(let X=0,Z=Ye.length;X<Z;X++)ye=Ye[X],Ve?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,_e,Ue,ye):t.texImage2D(n.TEXTURE_2D,X,Ie,_e,Ue,ye);x.generateMipmaps=!1}else if(Ve){if(at){const X=Re(ne);t.texStorage2D(n.TEXTURE_2D,he,Ie,X.width,X.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ue,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ie,_e,Ue,ne);m(x)&&g(j),Ae.__version=$.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function J(E,x,B){if(x.image.length!==6)return;const j=Oe(E,x),ee=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);const $=i.get(ee);if(ee.version!==$.__version||j===!0){t.activeTexture(n.TEXTURE0+B);const Ae=$e.getPrimaries($e.workingColorSpace),fe=x.colorSpace===Yn?null:$e.getPrimaries(x.colorSpace),ve=x.colorSpace===Yn||Ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const je=x.isCompressedTexture||x.image[0].isCompressedTexture,ne=x.image[0]&&x.image[0].isDataTexture,_e=[];for(let Z=0;Z<6;Z++)!je&&!ne?_e[Z]=v(x.image[Z],!0,s.maxCubemapSize):_e[Z]=ne?x.image[Z].image:x.image[Z],_e[Z]=it(x,_e[Z]);const Ue=_e[0],Ie=r.convert(x.format,x.colorSpace),ye=r.convert(x.type),Ye=S(x.internalFormat,Ie,ye,x.colorSpace),Ve=x.isVideoTexture!==!0,at=$.__version===void 0||j===!0,U=ee.dataReady;let he=R(x,Ue);Le(n.TEXTURE_CUBE_MAP,x);let X;if(je){Ve&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ye,Ue.width,Ue.height);for(let Z=0;Z<6;Z++){X=_e[Z].mipmaps;for(let ge=0;ge<X.length;ge++){const de=X[ge];x.format!==rn?Ie!==null?Ve?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,de.width,de.height,Ie,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,Ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,de.width,de.height,Ie,ye,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,Ye,de.width,de.height,0,Ie,ye,de.data)}}}else{if(X=x.mipmaps,Ve&&at){X.length>0&&he++;const Z=Re(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ye,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){Ve?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,_e[Z].width,_e[Z].height,Ie,ye,_e[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,_e[Z].width,_e[Z].height,0,Ie,ye,_e[Z].data);for(let ge=0;ge<X.length;ge++){const Be=X[ge].image[Z].image;Ve?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,Be.width,Be.height,Ie,ye,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,Ye,Be.width,Be.height,0,Ie,ye,Be.data)}}else{Ve?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ie,ye,_e[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,Ie,ye,_e[Z]);for(let ge=0;ge<X.length;ge++){const de=X[ge];Ve?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,Ie,ye,de.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,Ye,Ie,ye,de.image[Z])}}}m(x)&&g(n.TEXTURE_CUBE_MAP),$.__version=ee.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ue(E,x,B,j,ee,$){const Ae=r.convert(B.format,B.colorSpace),fe=r.convert(B.type),ve=S(B.internalFormat,Ae,fe,B.colorSpace),je=i.get(x),ne=i.get(B);if(ne.__renderTarget=x,!je.__hasExternalTextures){const _e=Math.max(1,x.width>>$),Ue=Math.max(1,x.height>>$);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,ve,_e,Ue,x.depth,0,Ae,fe,null):t.texImage2D(ee,$,ve,_e,Ue,0,Ae,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ee,ne.__webglTexture,0,ke(x)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ee,ne.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(E,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){const j=x.depthTexture,ee=j&&j.isDepthTexture?j.type:null,$=y(x.stencilBuffer,ee),Ae=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=ke(x);Xe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,$,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,$,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,$,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,E)}else{const j=x.textures;for(let ee=0;ee<j.length;ee++){const $=j[ee],Ae=r.convert($.format,$.colorSpace),fe=r.convert($.type),ve=S($.internalFormat,Ae,fe,$.colorSpace),je=ke(x);B&&Xe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,ve,x.width,x.height):Xe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,ve,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ve,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const ee=j.__webglTexture,$=ke(x);if(x.depthTexture.format===$i)Xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(x.depthTexture.format===ns)Xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ee(E){const x=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=j}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");le(x.__webglFramebuffer,E)}else if(B){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=n.createRenderbuffer(),te(x.__webglDepthbuffer[j],E,!1);else{const ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),te(x.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(E,x,B){const j=i.get(E);x!==void 0&&ue(j.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ee(E)}function qe(E){const x=E.texture,B=i.get(E),j=i.get(x);E.addEventListener("dispose",A);const ee=E.textures,$=E.isWebGLCubeRenderTarget===!0,Ae=ee.length>1;if(Ae||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let ve=0;ve<x.mipmaps.length;ve++)B.__webglFramebuffer[fe][ve]=n.createFramebuffer()}else B.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)B.__webglFramebuffer[fe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let fe=0,ve=ee.length;fe<ve;fe++){const je=i.get(ee[fe]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Xe(E)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const ve=ee[fe];B.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[fe]);const je=r.convert(ve.format,ve.colorSpace),ne=r.convert(ve.type),_e=S(ve.internalFormat,je,ne,ve.colorSpace,E.isXRRenderTarget===!0),Ue=ke(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,_e,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,B.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),te(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Le(n.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)ue(B.__webglFramebuffer[fe][ve],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else ue(B.__webglFramebuffer[fe],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let fe=0,ve=ee.length;fe<ve;fe++){const je=ee[fe],ne=i.get(je);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),Le(n.TEXTURE_2D,je),ue(B.__webglFramebuffer,E,je,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(je)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),Le(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)ue(B.__webglFramebuffer[ve],E,x,n.COLOR_ATTACHMENT0,fe,ve);else ue(B.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,fe,0);m(x)&&g(fe),t.unbindTexture()}E.depthBuffer&&Ee(E)}function Ne(E){const x=E.textures;for(let B=0,j=x.length;B<j;B++){const ee=x[B];if(m(ee)){const $=T(E),Ae=i.get(ee).__webglTexture;t.bindTexture($,Ae),g($),t.unbindTexture()}}}const ut=[],P=[];function vt(E){if(E.samples>0){if(Xe(E)===!1){const x=E.textures,B=E.width,j=E.height;let ee=n.COLOR_BUFFER_BIT;const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(E),fe=x.length>1;if(fe)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);const je=i.get(x[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,B,j,0,0,B,j,ee,n.NEAREST),l===!0&&(ut.length=0,P.length=0,ut.push(n.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ut.push($),P.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);const je=i.get(x[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ke(E){return Math.min(s.maxSamples,E.samples)}function Xe(E){const x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function we(E){const x=a.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function it(E,x){const B=E.colorSpace,j=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==us&&B!==Yn&&($e.getTransfer(B)===st?(j!==rn||ee!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Re(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=W,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=Pe,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Xe}function vv(n,e){function t(i,s=Yn){let r;const a=$e.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===$o)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ru)return n.BYTE;if(i===Du)return n.SHORT;if(i===Rs)return n.UNSIGNED_SHORT;if(i===jo)return n.INT;if(i===xi)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===Us)return n.HALF_FLOAT;if(i===Pu)return n.ALPHA;if(i===Uu)return n.RGB;if(i===rn)return n.RGBA;if(i===Iu)return n.LUMINANCE;if(i===Ou)return n.LUMINANCE_ALPHA;if(i===$i)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===Fu)return n.RED;if(i===Ko)return n.RED_INTEGER;if(i===Nu)return n.RG;if(i===Jo)return n.RG_INTEGER;if(i===Qo)return n.RGBA_INTEGER;if(i===yr||i===Sr||i===br||i===Mr)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oo||i===lo||i===co||i===uo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ho||i===fo||i===po)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ho||i===fo)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===po)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===mo||i===go||i===vo||i===xo||i===_o||i===yo||i===So||i===bo||i===Mo||i===To||i===Eo||i===Ao||i===Co||i===wo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===mo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===go)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_o)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===So)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===To)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ao)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Co)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tr||i===Ro||i===Do)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Tr)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Do)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ku||i===Lo||i===Po||i===Uo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class xv extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class As extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _v={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new As;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ei({vertexShader:yv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new Qr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mv extends Mi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null;const v=new bv,m=t.getContextAttributes();let g=null,T=null;const S=[],y=[],R=new Ge;let C=null;const A=new jt;A.viewport=new pt;const L=new jt;L.viewport=new pt;const M=[A,L],_=new xv;let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=S[Y];return J===void 0&&(J=new Ia,S[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=S[Y];return J===void 0&&(J=new Ia,S[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=S[Y];return J===void 0&&(J=new Ia,S[Y]=J),J.getHandSpace()};function D(Y){const J=y.indexOf(Y.inputSource);if(J===-1)return;const ue=S[J];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,c||a),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let Y=0;Y<S.length;Y++){const J=y[Y];J!==null&&(y[Y]=null,S[Y].disconnect(J))}w=null,W=null,v.reset(),e.setRenderTarget(g),d=null,h=null,f=null,s=null,T=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new _i(d.framebufferWidth,d.framebufferHeight,{format:rn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ue=null,te=null;m.depth&&(te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?ns:$i,ue=m.stencil?ts:xi);const le={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new _i(h.textureWidth,h.textureHeight,{format:rn,type:In,depthTexture:new eh(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(Y){for(let J=0;J<Y.removed.length;J++){const ue=Y.removed[J],te=y.indexOf(ue);te>=0&&(y[te]=null,S[te].disconnect(ue))}for(let J=0;J<Y.added.length;J++){const ue=Y.added[J];let te=y.indexOf(ue);if(te===-1){for(let Ee=0;Ee<S.length;Ee++)if(Ee>=y.length){y.push(ue),te=Ee;break}else if(y[Ee]===null){y[Ee]=ue,te=Ee;break}if(te===-1)break}const le=S[te];le&&le.connect(ue)}}const q=new z,K=new z;function V(Y,J,ue){q.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(ue.matrixWorld);const te=q.distanceTo(K),le=J.projectionMatrix.elements,Ee=ue.projectionMatrix.elements,Pe=le[14]/(le[10]-1),qe=le[14]/(le[10]+1),Ne=(le[9]+1)/le[5],ut=(le[9]-1)/le[5],P=(le[8]-1)/le[0],vt=(Ee[8]+1)/Ee[0],ke=Pe*P,Xe=Pe*vt,we=te/(-P+vt),it=we*-P;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(it),Y.translateZ(we),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),le[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Re=Pe+we,E=qe+we,x=ke-it,B=Xe+(te-it),j=Ne*qe/E*Re,ee=ut*qe/E*Re;Y.projectionMatrix.makePerspective(x,B,j,ee,Re,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,ue=Y.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(ue=v.depthFar)),_.near=L.near=A.near=J,_.far=L.far=A.far=ue,(w!==_.near||W!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,W=_.far),A.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,_.layers.mask=A.layers.mask|L.layers.mask;const te=Y.parent,le=_.cameras;re(_,te);for(let Ee=0;Ee<le.length;Ee++)re(le[Ee],te);le.length===2?V(_,A,L):_.projectionMatrix.copy(A.projectionMatrix),ae(Y,_,te)};function ae(Y,J,ue){ue===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Io*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let me=null;function Le(Y,J){if(u=J.getViewerPose(c||a),p=J,u!==null){const ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let te=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,te=!0);for(let Ee=0;Ee<ue.length;Ee++){const Pe=ue[Ee];let qe=null;if(d!==null)qe=d.getViewport(Pe);else{const ut=f.getViewSubImage(h,Pe);qe=ut.viewport,Ee===0&&(e.setRenderTargetTextures(T,ut.colorTexture,h.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(T))}let Ne=M[Ee];Ne===void 0&&(Ne=new jt,Ne.layers.enable(Ee),Ne.viewport=new pt,M[Ee]=Ne),Ne.matrix.fromArray(Pe.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Pe.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(qe.x,qe.y,qe.width,qe.height),Ee===0&&(_.matrix.copy(Ne.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),te===!0&&_.cameras.push(Ne)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")){const Ee=f.getDepthInformation(ue[0]);Ee&&Ee.isValid&&Ee.texture&&v.init(e,Ee,s.renderState)}}for(let ue=0;ue<S.length;ue++){const te=y[ue],le=S[ue];te!==null&&le!==void 0&&le.update(te,J,c||a)}me&&me(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),p=null}const Oe=new Ju;Oe.setAnimationLoop(Le),this.setAnimationLoop=function(Y){me=Y},this.dispose=function(){}}}const ci=new yn,Tv=new ft;function Ev(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,$u(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,T,S,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,T,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===kt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===kt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const T=e.get(g),S=T.envMap,y=T.envMapRotation;S&&(m.envMap.value=S,ci.copy(y),ci.x*=-1,ci.y*=-1,ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(ci)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,T,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*T,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,T){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const T=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Av(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const y=S.program;i.uniformBlockBinding(T,y)}function c(T,S){let y=s[T.id];y===void 0&&(p(T),y=u(T),s[T.id]=y,T.addEventListener("dispose",m));const R=S.program;i.updateUBOMapping(T,R);const C=e.render.frame;r[T.id]!==C&&(h(T),r[T.id]=C)}function u(T){const S=f();T.__bindingPointIndex=S;const y=n.createBuffer(),R=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,y),y}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const S=s[T.id],y=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,A=y.length;C<A;C++){const L=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,_=L.length;M<_;M++){const w=L[M];if(d(w,C,M,R)===!0){const W=w.__offset,D=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let k=0;k<D.length;k++){const q=D[k],K=v(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,W+N,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,N),N+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,S,y,R){const C=T.value,A=S+"_"+y;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const L=R[A];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return R[A]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function p(T){const S=T.uniforms;let y=0;const R=16;for(let A=0,L=S.length;A<L;A++){const M=Array.isArray(S[A])?S[A]:[S[A]];for(let _=0,w=M.length;_<w;_++){const W=M[_],D=Array.isArray(W.value)?W.value:[W.value];for(let N=0,k=D.length;N<k;N++){const q=D[N],K=v(q),V=y%R,re=V%K.boundary,ae=V+re;y+=re,ae!==0&&R-ae<K.storage&&(y+=R-ae),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=K.storage}}}const C=y%R;return C>0&&(y+=R-C),T.__size=y,T.__cache={},this}function v(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(const T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}class Cv{constructor(e={}){const{canvas:t=md(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),v=new Int32Array(4);let m=null,g=null;const T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=Zn,this.toneMappingExposure=1;const y=this;let R=!1,C=0,A=0,L=null,M=-1,_=null;const w=new pt,W=new pt;let D=null;const N=new Ze(0);let k=0,q=t.width,K=t.height,V=1,re=null,ae=null;const me=new pt(0,0,q,K),Le=new pt(0,0,q,K);let Oe=!1;const Y=new tl;let J=!1,ue=!1;const te=new ft,le=new ft,Ee=new z,Pe=new pt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function ut(){return L===null?V:1}let P=i;function vt(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yo}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",de,!1),P===null){const O="webgl2";if(P=vt(O,b),P===null)throw vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ke,Xe,we,it,Re,E,x,B,j,ee,$,Ae,fe,ve,je,ne,_e,Ue,Ie,ye,Ye,Ve,at,U;function he(){ke=new Pg(P),ke.init(),Ve=new vv(P,ke),Xe=new Ag(P,ke,e,Ve),we=new pv(P,ke),Xe.reverseDepthBuffer&&h&&we.buffers.depth.setReversed(!0),it=new Og(P),Re=new Q0,E=new gv(P,ke,we,Re,Xe,Ve,it),x=new wg(y),B=new Lg(y),j=new Gd(P),at=new Tg(P,j),ee=new Ug(P,j,it,at),$=new Ng(P,ee,j,it),Ie=new Fg(P,Xe,E),ne=new Cg(Re),Ae=new J0(y,x,B,ke,Xe,at,ne),fe=new Ev(y,Re),ve=new tv,je=new ov(ke),Ue=new Mg(y,x,B,we,$,d,l),_e=new fv(y,$,Xe),U=new Av(P,it,Xe,we),ye=new Eg(P,ke,it),Ye=new Ig(P,ke,it),it.programs=Ae.programs,y.capabilities=Xe,y.extensions=ke,y.properties=Re,y.renderLists=ve,y.shadowMap=_e,y.state=we,y.info=it}he();const X=new Mv(y,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(q,K,!1))},this.getSize=function(b){return b.set(q,K)},this.setSize=function(b,O,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,K=O,t.width=Math.floor(b*V),t.height=Math.floor(O*V),H===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(q*V,K*V).floor()},this.setDrawingBufferSize=function(b,O,H){q=b,K=O,V=H,t.width=Math.floor(b*H),t.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(me)},this.setViewport=function(b,O,H,G){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,O,H,G),we.viewport(w.copy(me).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Le)},this.setScissor=function(b,O,H,G){b.isVector4?Le.set(b.x,b.y,b.z,b.w):Le.set(b,O,H,G),we.scissor(W.copy(Le).multiplyScalar(V).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){we.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){ae=b},this.getClearColor=function(b){return b.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(b=!0,O=!0,H=!0){let G=0;if(b){let F=!1;if(L!==null){const ie=L.texture.format;F=ie===Qo||ie===Jo||ie===Ko}if(F){const ie=L.texture.type,pe=ie===In||ie===xi||ie===Rs||ie===ts||ie===$o||ie===Zo,be=Ue.getClearColor(),Me=Ue.getClearAlpha(),Fe=be.r,ze=be.g,Te=be.b;pe?(p[0]=Fe,p[1]=ze,p[2]=Te,p[3]=Me,P.clearBufferuiv(P.COLOR,0,p)):(v[0]=Fe,v[1]=ze,v[2]=Te,v[3]=Me,P.clearBufferiv(P.COLOR,0,v))}else G|=P.COLOR_BUFFER_BIT}O&&(G|=P.DEPTH_BUFFER_BIT),H&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ve.dispose(),je.dispose(),Re.dispose(),x.dispose(),B.dispose(),$.dispose(),at.dispose(),U.dispose(),Ae.dispose(),X.dispose(),X.removeEventListener("sessionstart",_l),X.removeEventListener("sessionend",yl),ii.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=it.autoReset,O=_e.enabled,H=_e.autoUpdate,G=_e.needsUpdate,F=_e.type;he(),it.autoReset=b,_e.enabled=O,_e.autoUpdate=H,_e.needsUpdate=G,_e.type=F}function de(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Be(b){const O=b.target;O.removeEventListener("dispose",Be),dt(O)}function dt(b){Ct(b),Re.remove(b)}function Ct(b){const O=Re.get(b).programs;O!==void 0&&(O.forEach(function(H){Ae.releaseProgram(H)}),b.isShaderMaterial&&Ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,G,F,ie){O===null&&(O=qe);const pe=F.isMesh&&F.matrixWorld.determinant()<0,be=Mf(b,O,H,G,F);we.setMaterial(G,pe);let Me=H.index,Fe=1;if(G.wireframe===!0){if(Me=ee.getWireframeAttribute(H),Me===void 0)return;Fe=2}const ze=H.drawRange,Te=H.attributes.position;let Ke=ze.start*Fe,ot=(ze.start+ze.count)*Fe;ie!==null&&(Ke=Math.max(Ke,ie.start*Fe),ot=Math.min(ot,(ie.start+ie.count)*Fe)),Me!==null?(Ke=Math.max(Ke,0),ot=Math.min(ot,Me.count)):Te!=null&&(Ke=Math.max(Ke,0),ot=Math.min(ot,Te.count));const lt=ot-Ke;if(lt<0||lt===1/0)return;at.setup(F,G,be,H,Me);let Ot,Qe=ye;if(Me!==null&&(Ot=j.get(Me),Qe=Ye,Qe.setIndex(Ot)),F.isMesh)G.wireframe===!0?(we.setLineWidth(G.wireframeLinewidth*ut()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(F.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),we.setLineWidth(Ce*ut()),F.isLineSegments?Qe.setMode(P.LINES):F.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else F.isPoints?Qe.setMode(P.POINTS):F.isSprite&&Qe.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ce=F._multiDrawStarts,bn=F._multiDrawCounts,et=F._multiDrawCount,Kt=Me?j.get(Me).bytesPerElement:1,Ci=Re.get(G).currentProgram.getUniforms();for(let zt=0;zt<et;zt++)Ci.setValue(P,"_gl_DrawID",zt),Qe.render(Ce[zt]/Kt,bn[zt])}else if(F.isInstancedMesh)Qe.renderInstances(Ke,lt,F.count);else if(H.isInstancedBufferGeometry){const Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,bn=Math.min(H.instanceCount,Ce);Qe.renderInstances(Ke,lt,bn)}else Qe.render(Ke,lt)};function tt(b,O,H){b.transparent===!0&&b.side===nn&&b.forceSinglePass===!1?(b.side=kt,b.needsUpdate=!0,Ws(b,O,H),b.side=Qn,b.needsUpdate=!0,Ws(b,O,H),b.side=nn):Ws(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),g=je.get(H),g.init(O),S.push(g),H.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),b!==H&&b.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const G=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ie=F.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const be=ie[pe];tt(be,H,F),G.add(be)}else tt(ie,H,F),G.add(ie)}),S.pop(),g=null,G},this.compileAsync=function(b,O,H=null){const G=this.compile(b,O,H);return new Promise(F=>{function ie(){if(G.forEach(function(pe){Re.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){F(b);return}setTimeout(ie,10)}ke.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Zt=null;function Sn(b){Zt&&Zt(b)}function _l(){ii.stop()}function yl(){ii.start()}const ii=new Ju;ii.setAnimationLoop(Sn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(b){Zt=b,X.setAnimationLoop(b),b===null?ii.stop():ii.start()},X.addEventListener("sessionstart",_l),X.addEventListener("sessionend",yl),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,O,L),g=je.get(b,S.length),g.init(O),S.push(g),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(le),ue=this.localClippingEnabled,J=ne.init(this.clippingPlanes,ue),m=ve.get(b,T.length),m.init(),T.push(m),X.enabled===!0&&X.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&ra(ie,O,-1/0,y.sortObjects)}ra(b,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(re,ae),Ne=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ne&&Ue.addToRenderList(m,b),this.info.render.frame++,J===!0&&ne.beginShadows();const H=g.state.shadowsArray;_e.render(H,b,O),J===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(g.setupLights(),O.isArrayCamera){const ie=O.cameras;if(F.length>0)for(let pe=0,be=ie.length;pe<be;pe++){const Me=ie[pe];bl(G,F,b,Me)}Ne&&Ue.render(b);for(let pe=0,be=ie.length;pe<be;pe++){const Me=ie[pe];Sl(m,b,Me,Me.viewport)}}else F.length>0&&bl(G,F,b,O),Ne&&Ue.render(b),Sl(m,b,O);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(y,b,O),at.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(g=S[S.length-1],J===!0&&ne.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ra(b,O,H,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){G&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(le);const pe=$.update(b),be=b.material;be.visible&&m.push(b,pe,be,H,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const pe=$.update(b),be=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(le)),Array.isArray(be)){const Me=pe.groups;for(let Fe=0,ze=Me.length;Fe<ze;Fe++){const Te=Me[Fe],Ke=be[Te.materialIndex];Ke&&Ke.visible&&m.push(b,pe,Ke,H,Pe.z,Te)}}else be.visible&&m.push(b,pe,be,H,Pe.z,null)}}const ie=b.children;for(let pe=0,be=ie.length;pe<be;pe++)ra(ie[pe],O,H,G)}function Sl(b,O,H,G){const F=b.opaque,ie=b.transmissive,pe=b.transparent;g.setupLightsView(H),J===!0&&ne.setGlobalState(y.clippingPlanes,H),G&&we.viewport(w.copy(G)),F.length>0&&Vs(F,O,H),ie.length>0&&Vs(ie,O,H),pe.length>0&&Vs(pe,O,H),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function bl(b,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new _i(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Us:In,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ie=g.state.transmissionRenderTarget[G.id],pe=G.viewport||w;ie.setSize(pe.z,pe.w);const be=y.getRenderTarget();y.setRenderTarget(ie),y.getClearColor(N),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),Ne&&Ue.render(H);const Me=y.toneMapping;y.toneMapping=Zn;const Fe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),J===!0&&ne.setGlobalState(y.clippingPlanes,G),Vs(b,H,G),E.updateMultisampleRenderTarget(ie),E.updateRenderTargetMipmap(ie),ke.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Te=0,Ke=O.length;Te<Ke;Te++){const ot=O[Te],lt=ot.object,Ot=ot.geometry,Qe=ot.material,Ce=ot.group;if(Qe.side===nn&&lt.layers.test(G.layers)){const bn=Qe.side;Qe.side=kt,Qe.needsUpdate=!0,Ml(lt,H,G,Ot,Qe,Ce),Qe.side=bn,Qe.needsUpdate=!0,ze=!0}}ze===!0&&(E.updateMultisampleRenderTarget(ie),E.updateRenderTargetMipmap(ie))}y.setRenderTarget(be),y.setClearColor(N,k),Fe!==void 0&&(G.viewport=Fe),y.toneMapping=Me}function Vs(b,O,H){const G=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ie=b.length;F<ie;F++){const pe=b[F],be=pe.object,Me=pe.geometry,Fe=G===null?pe.material:G,ze=pe.group;be.layers.test(H.layers)&&Ml(be,O,H,Me,Fe,ze)}}function Ml(b,O,H,G,F,ie){b.onBeforeRender(y,O,H,G,F,ie),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(y,O,H,G,b,ie),F.transparent===!0&&F.side===nn&&F.forceSinglePass===!1?(F.side=kt,F.needsUpdate=!0,y.renderBufferDirect(H,O,G,F,b,ie),F.side=Qn,F.needsUpdate=!0,y.renderBufferDirect(H,O,G,F,b,ie),F.side=nn):y.renderBufferDirect(H,O,G,F,b,ie),b.onAfterRender(y,O,H,G,F,ie)}function Ws(b,O,H){O.isScene!==!0&&(O=qe);const G=Re.get(b),F=g.state.lights,ie=g.state.shadowsArray,pe=F.state.version,be=Ae.getParameters(b,F.state,ie,O,H),Me=Ae.getProgramCacheKey(be);let Fe=G.programs;G.environment=b.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(b.isMeshStandardMaterial?B:x).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",Be),Fe=new Map,G.programs=Fe);let ze=Fe.get(Me);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===pe)return El(b,be),ze}else be.uniforms=Ae.getUniforms(b),b.onBeforeCompile(be,y),ze=Ae.acquireProgram(be,Me),Fe.set(Me,ze),G.uniforms=be.uniforms;const Te=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=ne.uniform),El(b,be),G.needsLights=Ef(b),G.lightsStateVersion=pe,G.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function Tl(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Ar.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function El(b,O){const H=Re.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Mf(b,O,H,G,F){O.isScene!==!0&&(O=qe),E.resetTextureUnits();const ie=O.fog,pe=G.isMeshStandardMaterial?O.environment:null,be=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:us,Me=(G.isMeshStandardMaterial?B:x).get(G.envMap||pe),Fe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,ot=!!H.morphAttributes.color;let lt=Zn;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(lt=y.toneMapping);const Ot=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qe=Ot!==void 0?Ot.length:0,Ce=Re.get(G),bn=g.state.lights;if(J===!0&&(ue===!0||b!==_)){const Xt=b===_&&G.id===M;ne.setState(G,b,Xt)}let et=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==bn.state.version||Ce.outputColorSpace!==be||F.isBatchedMesh&&Ce.batching===!1||!F.isBatchedMesh&&Ce.batching===!0||F.isBatchedMesh&&Ce.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ce.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ce.instancing===!1||!F.isInstancedMesh&&Ce.instancing===!0||F.isSkinnedMesh&&Ce.skinning===!1||!F.isSkinnedMesh&&Ce.skinning===!0||F.isInstancedMesh&&Ce.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ce.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ce.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ce.instancingMorph===!1&&F.morphTexture!==null||Ce.envMap!==Me||G.fog===!0&&Ce.fog!==ie||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ne.numPlanes||Ce.numIntersection!==ne.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==ze||Ce.morphTargets!==Te||Ce.morphNormals!==Ke||Ce.morphColors!==ot||Ce.toneMapping!==lt||Ce.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ce.__version=G.version);let Kt=Ce.currentProgram;et===!0&&(Kt=Ws(G,O,F));let Ci=!1,zt=!1,ms=!1;const ct=Kt.getUniforms(),fn=Ce.uniforms;if(we.useProgram(Kt.program)&&(Ci=!0,zt=!0,ms=!0),G.id!==M&&(M=G.id,zt=!0),Ci||_!==b){we.buffers.depth.getReversed()?(te.copy(b.projectionMatrix),vd(te),xd(te),ct.setValue(P,"projectionMatrix",te)):ct.setValue(P,"projectionMatrix",b.projectionMatrix),ct.setValue(P,"viewMatrix",b.matrixWorldInverse);const On=ct.map.cameraPosition;On!==void 0&&On.setValue(P,Ee.setFromMatrixPosition(b.matrixWorld)),Xe.logarithmicDepthBuffer&&ct.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),_!==b&&(_=b,zt=!0,ms=!0)}if(F.isSkinnedMesh){ct.setOptional(P,F,"bindMatrix"),ct.setOptional(P,F,"bindMatrixInverse");const Xt=F.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),ct.setValue(P,"boneTexture",Xt.boneTexture,E))}F.isBatchedMesh&&(ct.setOptional(P,F,"batchingTexture"),ct.setValue(P,"batchingTexture",F._matricesTexture,E),ct.setOptional(P,F,"batchingIdTexture"),ct.setValue(P,"batchingIdTexture",F._indirectTexture,E),ct.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&ct.setValue(P,"batchingColorTexture",F._colorsTexture,E));const gs=H.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&Ie.update(F,H,Kt),(zt||Ce.receiveShadow!==F.receiveShadow)&&(Ce.receiveShadow=F.receiveShadow,ct.setValue(P,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(fn.envMap.value=Me,fn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(fn.envMapIntensity.value=O.environmentIntensity),zt&&(ct.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&Tf(fn,ms),ie&&G.fog===!0&&fe.refreshFogUniforms(fn,ie),fe.refreshMaterialUniforms(fn,G,V,K,g.state.transmissionRenderTarget[b.id]),Ar.upload(P,Tl(Ce),fn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ar.upload(P,Tl(Ce),fn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(P,"center",F.center),ct.setValue(P,"modelViewMatrix",F.modelViewMatrix),ct.setValue(P,"normalMatrix",F.normalMatrix),ct.setValue(P,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Xt=G.uniformsGroups;for(let On=0,Fn=Xt.length;On<Fn;On++){const Al=Xt[On];U.update(Al,Kt),U.bind(Al,Kt)}}return Kt}function Tf(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Ef(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,O,H){Re.get(b.texture).__webglTexture=O,Re.get(b.depthTexture).__webglTexture=H;const G=Re.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const H=Re.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,H=0){L=b,C=O,A=H;let G=!0,F=null,ie=!1,pe=!1;if(b){const Me=Re.get(b);if(Me.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Me.__hasExternalTextures)E.rebindTextures(b,Re.get(b.texture).__webglTexture,Re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Te=b.depthTexture;if(Me.__boundDepthTexture!==Te){if(Te!==null&&Re.has(Te)&&(b.width!==Te.image.width||b.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const ze=Re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?F=ze[O][H]:F=ze[O],ie=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?F=Re.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[H]:F=ze,w.copy(b.viewport),W.copy(b.scissor),D=b.scissorTest}else w.copy(me).multiplyScalar(V).floor(),W.copy(Le).multiplyScalar(V).floor(),D=Oe;if(we.bindFramebuffer(P.FRAMEBUFFER,F)&&G&&we.drawBuffers(b,F),we.viewport(w),we.scissor(W),we.setScissorTest(D),ie){const Me=Re.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,H)}else if(pe){const Me=Re.get(b.texture),Fe=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.__webglTexture,H||0,Fe)}M=-1},this.readRenderTargetPixels=function(b,O,H,G,F,ie,pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(be=be[pe]),be){we.bindFramebuffer(P.FRAMEBUFFER,be);try{const Me=b.texture,Fe=Me.format,ze=Me.type;if(!Xe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&H>=0&&H<=b.height-F&&P.readPixels(O,H,G,F,Ve.convert(Fe),Ve.convert(ze),ie)}finally{const Me=L!==null?Re.get(L).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(b,O,H,G,F,ie,pe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(be=be[pe]),be){const Me=b.texture,Fe=Me.format,ze=Me.type;if(!Xe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-G&&H>=0&&H<=b.height-F){we.bindFramebuffer(P.FRAMEBUFFER,be);const Te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),P.readPixels(O,H,G,F,Ve.convert(Fe),Ve.convert(ze),0);const Ke=L!==null?Re.get(L).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,Ke);const ot=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await gd(P,ot,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Te),P.deleteSync(ot),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,H=0){b.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-H),F=Math.floor(b.image.width*G),ie=Math.floor(b.image.height*G),pe=O!==null?O.x:0,be=O!==null?O.y:0;E.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,pe,be,F,ie),we.unbindTexture()},this.copyTextureToTexture=function(b,O,H=null,G=null,F=0){b.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],O=arguments[2],F=arguments[3]||0,H=null);let ie,pe,be,Me,Fe,ze,Te,Ke,ot;const lt=b.isCompressedTexture?b.mipmaps[F]:b.image;H!==null?(ie=H.max.x-H.min.x,pe=H.max.y-H.min.y,be=H.isBox3?H.max.z-H.min.z:1,Me=H.min.x,Fe=H.min.y,ze=H.isBox3?H.min.z:0):(ie=lt.width,pe=lt.height,be=lt.depth||1,Me=0,Fe=0,ze=0),G!==null?(Te=G.x,Ke=G.y,ot=G.z):(Te=0,Ke=0,ot=0);const Ot=Ve.convert(O.format),Qe=Ve.convert(O.type);let Ce;O.isData3DTexture?(E.setTexture3D(O,0),Ce=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),Ce=P.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),Ce=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const bn=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Kt=P.getParameter(P.UNPACK_SKIP_PIXELS),Ci=P.getParameter(P.UNPACK_SKIP_ROWS),zt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,lt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Me),P.pixelStorei(P.UNPACK_SKIP_ROWS,Fe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ze);const ms=b.isDataArrayTexture||b.isData3DTexture,ct=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const fn=Re.get(b),gs=Re.get(O),Xt=Re.get(fn.__renderTarget),On=Re.get(gs.__renderTarget);we.bindFramebuffer(P.READ_FRAMEBUFFER,Xt.__webglFramebuffer),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let Fn=0;Fn<be;Fn++)ms&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.get(b).__webglTexture,F,ze+Fn),b.isDepthTexture?(ct&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,F,ot+Fn),P.blitFramebuffer(Me,Fe,ie,pe,Te,Ke,ie,pe,P.DEPTH_BUFFER_BIT,P.NEAREST)):ct?P.copyTexSubImage3D(Ce,F,Te,Ke,ot+Fn,Me,Fe,ie,pe):P.copyTexSubImage2D(Ce,F,Te,Ke,ot+Fn,Me,Fe,ie,pe);we.bindFramebuffer(P.READ_FRAMEBUFFER,null),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ct?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Ce,F,Te,Ke,ot,ie,pe,be,Ot,Qe,lt.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Ce,F,Te,Ke,ot,ie,pe,be,Ot,lt.data):P.texSubImage3D(Ce,F,Te,Ke,ot,ie,pe,be,Ot,Qe,lt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Te,Ke,ie,pe,Ot,Qe,lt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Te,Ke,lt.width,lt.height,Ot,lt.data):P.texSubImage2D(P.TEXTURE_2D,F,Te,Ke,ie,pe,Ot,Qe,lt);P.pixelStorei(P.UNPACK_ROW_LENGTH,bn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Kt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ci),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zt),F===0&&O.generateMipmaps&&P.generateMipmap(Ce),we.unbindTexture()},this.copyTextureToTexture3D=function(b,O,H=null,G=null,F=0){return b.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,b=arguments[2],O=arguments[3],F=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,H,G,F)},this.initRenderTarget=function(b){Re.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){C=0,A=0,L=null,we.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class wv extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rh extends hs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ur=new z,Ir=new z,Ec=new ft,bs=new el,fr=new Jr,Oa=new z,Ac=new z;class Rv extends Et{constructor(e=new un,t=new rh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ur.fromBufferAttribute(t,s-1),Ir.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ur.distanceTo(Ir);e.setAttribute("lineDistance",new Kn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,e.ray.intersectsSphere(fr)===!1)return;Ec.copy(s).invert(),bs.copy(e.ray).applyMatrix4(Ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=d,m=p-1;v<m;v+=c){const g=u.getX(v),T=u.getX(v+1),S=dr(this,e,bs,l,g,T);S&&t.push(S)}if(this.isLineLoop){const v=u.getX(p-1),m=u.getX(d),g=dr(this,e,bs,l,v,m);g&&t.push(g)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=d,m=p-1;v<m;v+=c){const g=dr(this,e,bs,l,v,v+1);g&&t.push(g)}if(this.isLineLoop){const v=dr(this,e,bs,l,p-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function dr(n,e,t,i,s,r){const a=n.geometry.attributes.position;if(Ur.fromBufferAttribute(a,s),Ir.fromBufferAttribute(a,r),t.distanceSqToSegment(Ur,Ir,Oa,Ac)>i)return;Oa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Oa);if(!(l<e.near||l>e.far))return{distance:l,point:Ac.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class ah extends hs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bu,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oh extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Fa=new ft,Cc=new z,wc=new z;class Dv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Cc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cc),wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wc),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lv extends Dv{constructor(){super(new Qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lh extends oh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Lv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pv extends oh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Uv extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);const Dc={type:"change"},il={type:"start"},ch={type:"end"},pr=new el,Lc=new Xn,Iv=Math.cos(70*pd.DEG2RAD),_t=new z,Nt=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Na=1e-6;class Ov extends Uv{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new yi,this._lastTargetPosition=new z,this._quat=new yi().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rc,this._sphericalDelta=new Rc,this._scale=1,this._panOffset=new z,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new z,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Nv.bind(this),this._onPointerDown=Fv.bind(this),this._onPointerUp=kv.bind(this),this._onContextMenu=Xv.bind(this),this._onMouseWheel=Hv.bind(this),this._onKeyDown=Gv.bind(this),this._onTouchStart=Vv.bind(this),this._onTouchMove=Wv.bind(this),this._onMouseDown=Bv.bind(this),this._onMouseMove=zv.bind(this),this._interceptControlDown=qv.bind(this),this._interceptControlUp=Yv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dc),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;_t.copy(t).sub(this.target),_t.applyQuaternion(this._quat),this._spherical.setFromVector3(_t),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Nt:i>Math.PI&&(i-=Nt),s<-Math.PI?s+=Nt:s>Math.PI&&(s-=Nt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(_t.setFromSpherical(this._spherical),_t.applyQuaternion(this._quatInverse),t.copy(this.target).add(_t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=_t.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=_t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(pr.origin.copy(this.object.position),pr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pr.direction))<Iv?this.object.lookAt(this.target):(Lc.setFromNormalAndCoplanarPoint(this.object.up,this.target),pr.intersectPlane(Lc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Na||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Na||this._lastTargetPosition.distanceToSquared(this.target)>Na?(this.dispatchEvent(Dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Nt/60*this.autoRotateSpeed*e:Nt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_t.setFromMatrixColumn(t,0),_t.multiplyScalar(-e),this._panOffset.add(_t)}_panUp(e,t){this.screenSpacePanning===!0?_t.setFromMatrixColumn(t,1):(_t.setFromMatrixColumn(t,0),_t.crossVectors(this.object.up,_t)),_t.multiplyScalar(e),this._panOffset.add(_t)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_t.copy(s).sub(this.target);let r=_t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Nt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Nt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Nt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Nt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Nt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Nt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Fv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Nv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function kv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ch),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Bv(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=rt.DOLLY;break;case Yi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}break;case Yi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(il)}function zv(n){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Hv(n){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(n.preventDefault(),this.dispatchEvent(il),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ch))}function Gv(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Vv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=rt.TOUCH_ROTATE;break;case Xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=rt.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(il)}function Wv(n){switch(this._trackPointer(n),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=rt.NONE}}function Xv(n){this.enabled!==!1&&n.preventDefault()}function qv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var sl=0,uh=-3;function Ds(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function jv(n,e){this.source=n,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new Ds,this.dtree=new Ds}var hh=new Ds,fh=new Ds,rl=new Uint8Array(30),al=new Uint16Array(30),dh=new Uint8Array(30),ph=new Uint16Array(30),$v=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Pc=new Ds,dn=new Uint8Array(320);function mh(n,e,t,i){var s,r;for(s=0;s<t;++s)n[s]=0;for(s=0;s<30-t;++s)n[s+t]=s/t|0;for(r=i,s=0;s<30;++s)e[s]=r,r+=1<<n[s]}function Zv(n,e){var t;for(t=0;t<7;++t)n.table[t]=0;for(n.table[7]=24,n.table[8]=152,n.table[9]=112,t=0;t<24;++t)n.trans[t]=256+t;for(t=0;t<144;++t)n.trans[24+t]=t;for(t=0;t<8;++t)n.trans[168+t]=280+t;for(t=0;t<112;++t)n.trans[176+t]=144+t;for(t=0;t<5;++t)e.table[t]=0;for(e.table[5]=32,t=0;t<32;++t)e.trans[t]=t}var Uc=new Uint16Array(16);function ka(n,e,t,i){var s,r;for(s=0;s<16;++s)n.table[s]=0;for(s=0;s<i;++s)n.table[e[t+s]]++;for(n.table[0]=0,r=0,s=0;s<16;++s)Uc[s]=r,r+=n.table[s];for(s=0;s<i;++s)e[t+s]&&(n.trans[Uc[e[t+s]]++]=s)}function Kv(n){n.bitcount--||(n.tag=n.source[n.sourceIndex++],n.bitcount=7);var e=n.tag&1;return n.tag>>>=1,e}function mn(n,e,t){if(!e)return t;for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var i=n.tag&65535>>>16-e;return n.tag>>>=e,n.bitcount-=e,i+t}function Fo(n,e){for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var t=0,i=0,s=0,r=n.tag;do i=2*i+(r&1),r>>>=1,++s,t+=e.table[s],i-=e.table[s];while(i>=0);return n.tag=r,n.bitcount-=s,e.trans[t+i]}function Jv(n,e,t){var i,s,r,a,o,l;for(i=mn(n,5,257),s=mn(n,5,1),r=mn(n,4,4),a=0;a<19;++a)dn[a]=0;for(a=0;a<r;++a){var c=mn(n,3,0);dn[$v[a]]=c}for(ka(Pc,dn,0,19),o=0;o<i+s;){var u=Fo(n,Pc);switch(u){case 16:var f=dn[o-1];for(l=mn(n,2,3);l;--l)dn[o++]=f;break;case 17:for(l=mn(n,3,3);l;--l)dn[o++]=0;break;case 18:for(l=mn(n,7,11);l;--l)dn[o++]=0;break;default:dn[o++]=u;break}}ka(e,dn,0,i),ka(t,dn,i,s)}function Ic(n,e,t){for(;;){var i=Fo(n,e);if(i===256)return sl;if(i<256)n.dest[n.destLen++]=i;else{var s,r,a,o;for(i-=257,s=mn(n,rl[i],al[i]),r=Fo(n,t),a=n.destLen-mn(n,dh[r],ph[r]),o=a;o<a+s;++o)n.dest[n.destLen++]=n.dest[o]}}}function Qv(n){for(var e,t,i;n.bitcount>8;)n.sourceIndex--,n.bitcount-=8;if(e=n.source[n.sourceIndex+1],e=256*e+n.source[n.sourceIndex],t=n.source[n.sourceIndex+3],t=256*t+n.source[n.sourceIndex+2],e!==(~t&65535))return uh;for(n.sourceIndex+=4,i=e;i;--i)n.dest[n.destLen++]=n.source[n.sourceIndex++];return n.bitcount=0,sl}function gh(n,e){var t=new jv(n,e),i,s,r;do{switch(i=Kv(t),s=mn(t,2,0),s){case 0:r=Qv(t);break;case 1:r=Ic(t,hh,fh);break;case 2:Jv(t,t.ltree,t.dtree),r=Ic(t,t.ltree,t.dtree);break;default:r=uh}if(r!==sl)throw new Error("Data error")}while(!i);return t.destLen<t.dest.length?typeof t.dest.slice=="function"?t.dest.slice(0,t.destLen):t.dest.subarray(0,t.destLen):t.dest}Zv(hh,fh);mh(rl,al,4,3);mh(dh,ph,2,1);rl[28]=0;al[28]=258;function Gi(n,e,t,i,s){return Math.pow(1-s,3)*n+3*Math.pow(1-s,2)*s*e+3*(1-s)*Math.pow(s,2)*t+Math.pow(s,3)*i}function Ti(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}Ti.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};Ti.prototype.addPoint=function(n,e){typeof n=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=n,this.x2=n),n<this.x1&&(this.x1=n),n>this.x2&&(this.x2=n)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))};Ti.prototype.addX=function(n){this.addPoint(n,null)};Ti.prototype.addY=function(n){this.addPoint(null,n)};Ti.prototype.addBezier=function(n,e,t,i,s,r,a,o){const l=[n,e],c=[t,i],u=[s,r],f=[a,o];this.addPoint(n,e),this.addPoint(a,o);for(let h=0;h<=1;h++){const d=6*l[h]-12*c[h]+6*u[h],p=-3*l[h]+9*c[h]-9*u[h]+3*f[h],v=3*c[h]-3*l[h];if(p===0){if(d===0)continue;const S=-v/d;0<S&&S<1&&(h===0&&this.addX(Gi(l[h],c[h],u[h],f[h],S)),h===1&&this.addY(Gi(l[h],c[h],u[h],f[h],S)));continue}const m=Math.pow(d,2)-4*v*p;if(m<0)continue;const g=(-d+Math.sqrt(m))/(2*p);0<g&&g<1&&(h===0&&this.addX(Gi(l[h],c[h],u[h],f[h],g)),h===1&&this.addY(Gi(l[h],c[h],u[h],f[h],g)));const T=(-d-Math.sqrt(m))/(2*p);0<T&&T<1&&(h===0&&this.addX(Gi(l[h],c[h],u[h],f[h],T)),h===1&&this.addY(Gi(l[h],c[h],u[h],f[h],T)))}};Ti.prototype.addQuad=function(n,e,t,i,s,r){const a=n+.6666666666666666*(t-n),o=e+2/3*(i-e),l=a+1/3*(s-n),c=o+1/3*(r-e);this.addBezier(n,e,a,o,l,c,s,r)};var vh=Ti;function bt(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}var Ms={};function xh(n,e){const t=Math.floor(n),i=n-t;if(Ms[e]||(Ms[e]={}),Ms[e][i]!==void 0){const r=Ms[e][i];return t+r}const s=+(Math.round(i+"e+"+e)+"e-"+e);return Ms[e][i]=s,t+s}function _h(n){let e=[[]],t=0,i=0;for(let s=0;s<n.length;s+=1){const r=e[e.length-1],a=n[s],o=r[0],l=r[1],c=r[r.length-1],u=n[s+1];r.push(a),a.type==="M"?(t=a.x,i=a.y):a.type==="L"&&(!u||u.type==="Z")?Math.abs(a.x-t)>1||Math.abs(a.y-i)>1||r.pop():a.type==="L"&&c&&c.x===a.x&&c.y===a.y?r.pop():a.type==="Z"&&(o&&l&&c&&o.type==="M"&&l.type==="L"&&c.type==="L"&&c.x===o.x&&c.y===o.y&&(r.shift(),r[0].type="M"),s+1<n.length&&e.push([]))}return n=[].concat.apply([],e),n}function ex(n){return Object.assign({},{decimalPlaces:2,optimize:!0,flipY:!0,flipYBase:void 0,scale:1,x:0,y:0},n)}function tx(n){return parseInt(n)===n&&(n={decimalPlaces:n,flipY:!1}),Object.assign({},{decimalPlaces:2,optimize:!0,flipY:!0,flipYBase:void 0},n)}bt.prototype.fromSVG=function(n,e={}){typeof SVGPathElement<"u"&&n instanceof SVGPathElement&&(n=n.getAttribute("d")),e=ex(e),this.commands=[];const t="0123456789",i="MmLlQqCcZzHhVv",s="SsTtAa",r="-+";let a={},o=[""],l=!1;function c(p){return p.filter(v=>v.length).map(v=>{let m=parseFloat(v);return(e.decimalPlaces||e.decimalPlaces===0)&&(m=xh(m,e.decimalPlaces)),m})}function u(p){if(!this.commands.length)return p;const v=this.commands[this.commands.length-1];for(let m=0;m<p.length;m++)p[m]+=v[m&1?"y":"x"];return p}function f(){if(a.type===void 0)return;const p=a.type.toUpperCase(),v=p!=="Z"&&a.type.toUpperCase()!==a.type;let m=c(o);if(o=[""],!m.length&&p!=="Z")return;v&&p!=="H"&&p!=="V"&&(m=u.apply(this,[m]));const g=this.commands.length&&this.commands[this.commands.length-1].x||0,T=this.commands.length&&this.commands[this.commands.length-1].y||0;switch(p){case"M":this.moveTo(...m);break;case"L":this.lineTo(...m);break;case"V":for(let S=0;S<m.length;S++){let y=0;v&&(y=this.commands.length&&this.commands[this.commands.length-1].y||0),this.lineTo(g,m[S]+y)}break;case"H":for(let S=0;S<m.length;S++){let y=0;v&&(y=this.commands.length&&this.commands[this.commands.length-1].x||0),this.lineTo(m[S]+y,T)}break;case"C":this.bezierCurveTo(...m);break;case"Q":this.quadraticCurveTo(...m);break;case"Z":(this.commands.length<1||this.commands[this.commands.length-1].type!=="Z")&&this.close();break}if(this.commands.length)for(const S in this.commands[this.commands.length-1])this.commands[this.commands.length-1][S]===void 0&&(this.commands[this.commands.length-1][S]=0)}for(let p=0;p<n.length;p++){const v=n.charAt(p),m=o[o.length-1];if(t.indexOf(v)>-1)o[o.length-1]+=v;else if(r.indexOf(v)>-1)if(!a.type&&!this.commands.length&&(a.type="L"),v==="-")!a.type||m.indexOf("-")>0?l=!0:m.length?o.push("-"):o[o.length-1]=v;else if(!a.type||m.length>0)l=!0;else continue;else if(i.indexOf(v)>-1)a.type?(f.apply(this),a={type:v}):a.type=v;else{if(s.indexOf(v)>-1)throw new Error("Unsupported path command: "+v+". Currently supported commands are "+i.split("").join(", ")+".");` ,	
\r\f\v`.indexOf(v)>-1?o.push(""):v==="."?!a.type||m.indexOf(v)>-1?l=!0:o[o.length-1]+=v:l=!0}if(l)throw new Error("Unexpected character: "+v+" at offset "+p)}f.apply(this),e.optimize&&(this.commands=_h(this.commands));const h=e.flipY;let d=e.flipYBase;if(h===!0&&e.flipYBase===void 0){const p=this.getBoundingBox();d=p.y1+p.y2}for(const p in this.commands){const v=this.commands[p];for(const m in v)["x","x1","x2"].includes(m)?this.commands[p][m]=e.x+v[m]*e.scale:["y","y1","y2"].includes(m)&&(this.commands[p][m]=e.y+(h?d-v[m]:v[m])*e.scale)}return this};bt.fromSVG=function(n,e){return new bt().fromSVG(n,e)};bt.prototype.moveTo=function(n,e){this.commands.push({type:"M",x:n,y:e})};bt.prototype.lineTo=function(n,e){this.commands.push({type:"L",x:n,y:e})};bt.prototype.curveTo=bt.prototype.bezierCurveTo=function(n,e,t,i,s,r){this.commands.push({type:"C",x1:n,y1:e,x2:t,y2:i,x:s,y:r})};bt.prototype.quadTo=bt.prototype.quadraticCurveTo=function(n,e,t,i){this.commands.push({type:"Q",x1:n,y1:e,x:t,y:i})};bt.prototype.close=bt.prototype.closePath=function(){this.commands.push({type:"Z"})};bt.prototype.extend=function(n){if(n.commands)n=n.commands;else if(n instanceof vh){const e=n;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,n)};bt.prototype.getBoundingBox=function(){const n=new vh;let e=0,t=0,i=0,s=0;for(let r=0;r<this.commands.length;r++){const a=this.commands[r];switch(a.type){case"M":n.addPoint(a.x,a.y),e=i=a.x,t=s=a.y;break;case"L":n.addPoint(a.x,a.y),i=a.x,s=a.y;break;case"Q":n.addQuad(i,s,a.x1,a.y1,a.x,a.y),i=a.x,s=a.y;break;case"C":n.addBezier(i,s,a.x1,a.y1,a.x2,a.y2,a.x,a.y),i=a.x,s=a.y;break;case"Z":i=e,s=t;break;default:throw new Error("Unexpected path command "+a.type)}}return n.isEmpty()&&n.addPoint(0,0),n};bt.prototype.draw=function(n){const e=this._layers;if(e&&e.length){for(let i=0;i<e.length;i++)this.draw.call(e[i],n);return}const t=this._image;if(t){n.drawImage(t.image,t.x,t.y,t.width,t.height);return}n.beginPath();for(let i=0;i<this.commands.length;i+=1){const s=this.commands[i];s.type==="M"?n.moveTo(s.x,s.y):s.type==="L"?n.lineTo(s.x,s.y):s.type==="C"?n.bezierCurveTo(s.x1,s.y1,s.x2,s.y2,s.x,s.y):s.type==="Q"?n.quadraticCurveTo(s.x1,s.y1,s.x,s.y):s.type==="Z"&&this.stroke&&this.strokeWidth&&n.closePath()}this.fill&&(n.fillStyle=this.fill,n.fill()),this.stroke&&(n.strokeStyle=this.stroke,n.lineWidth=this.strokeWidth,n.stroke())};bt.prototype.toPathData=function(n){n=tx(n);function e(o){const l=xh(o,n.decimalPlaces);return Math.round(o)===l?""+l:l.toFixed(n.decimalPlaces)}function t(){let o="";for(let l=0;l<arguments.length;l+=1){const c=arguments[l];c>=0&&l>0&&(o+=" "),o+=e(c)}return o}let i=this.commands;n.optimize&&(i=JSON.parse(JSON.stringify(this.commands)),i=_h(i));const s=n.flipY;let r=n.flipYBase;if(s===!0&&r===void 0){const o=new bt;o.extend(i);const l=o.getBoundingBox();r=l.y1+l.y2}let a="";for(let o=0;o<i.length;o+=1){const l=i[o];l.type==="M"?a+="M"+t(l.x,s?r-l.y:l.y):l.type==="L"?a+="L"+t(l.x,s?r-l.y:l.y):l.type==="C"?a+="C"+t(l.x1,s?r-l.y1:l.y1,l.x2,s?r-l.y2:l.y2,l.x,s?r-l.y:l.y):l.type==="Q"?a+="Q"+t(l.x1,s?r-l.y1:l.y1,l.x,s?r-l.y:l.y):l.type==="Z"&&(a+="Z")}return a};bt.prototype.toSVG=function(n,e){this._layers&&this._layers.length&&console.warn("toSVG() does not support colr font layers yet"),this._image&&console.warn("toSVG() does not support SVG glyphs yet"),e||(e=this.toPathData(n));let t='<path d="';return t+=e,t+='"',this.fill!==void 0&&this.fill!=="black"&&(this.fill===null?t+=' fill="none"':t+=' fill="'+this.fill+'"'),this.stroke&&(t+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),t+="/>",t};bt.prototype.toDOMElement=function(n,e){this._layers&&this._layers.length&&console.warn("toDOMElement() does not support colr font layers yet"),e||(e=this.toPathData(n));const t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d",e),this.fill!==void 0&&this.fill!=="black"&&(this.fill===null?t.setAttribute("fill","none"):t.setAttribute("fill",this.fill)),this.stroke&&(t.setAttribute("stroke",this.stroke),t.setAttribute("stroke-width",this.strokeWidth)),t};var ss=bt;function yh(n){throw new Error(n)}function Oc(n,e){n||yh(e)}var Se={fail:yh,argument:Oc,assert:Oc},Fc=32768,Nc=2147483648,nx=-32768,ix=32767+1/65536,rs={},se={},De={};function hn(n){return function(){return n}}se.BYTE=function(n){return Se.argument(n>=0&&n<=255,"Byte value should be between 0 and 255."),[n]};De.BYTE=hn(1);se.CHAR=function(n){return[n.charCodeAt(0)]};De.CHAR=hn(1);se.CHARARRAY=function(n){(n===null||typeof n>"u")&&(n="",console.warn("CHARARRAY with undefined or null value encountered and treated as an empty string. This is probably caused by a missing glyph name."));const e=[];for(let t=0;t<n.length;t+=1)e[t]=n.charCodeAt(t);return e};De.CHARARRAY=function(n){return typeof n>"u"?0:n.length};se.USHORT=function(n){return[n>>8&255,n&255]};De.USHORT=hn(2);se.SHORT=function(n){return n>=Fc&&(n=-(2*Fc-n)),[n>>8&255,n&255]};De.SHORT=hn(2);se.UINT24=function(n){return[n>>16&255,n>>8&255,n&255]};De.UINT24=hn(3);se.ULONG=function(n){return[n>>24&255,n>>16&255,n>>8&255,n&255]};De.ULONG=hn(4);se.LONG=function(n){return n>=Nc&&(n=-(2*Nc-n)),[n>>24&255,n>>16&255,n>>8&255,n&255]};De.LONG=hn(4);se.FLOAT=function(n){if(n>ix||n<nx)throw new Error(`Value ${n} is outside the range of representable values in 16.16 format`);const e=Math.round(n*65536)<<0;return se.ULONG(e)};De.FLOAT=De.ULONG;se.FIXED=se.ULONG;De.FIXED=De.ULONG;se.FWORD=se.SHORT;De.FWORD=De.SHORT;se.UFWORD=se.USHORT;De.UFWORD=De.USHORT;se.F2DOT14=function(n){return se.USHORT(n*16384)};De.F2DOT14=De.USHORT;se.LONGDATETIME=function(n){return[0,0,0,0,n>>24&255,n>>16&255,n>>8&255,n&255]};De.LONGDATETIME=hn(8);se.TAG=function(n){return Se.argument(n.length===4,"Tag should be exactly 4 ASCII characters."),[n.charCodeAt(0),n.charCodeAt(1),n.charCodeAt(2),n.charCodeAt(3)]};De.TAG=hn(4);se.Card8=se.BYTE;De.Card8=De.BYTE;se.Card16=se.USHORT;De.Card16=De.USHORT;se.OffSize=se.BYTE;De.OffSize=De.BYTE;se.SID=se.USHORT;De.SID=De.USHORT;se.NUMBER=function(n){return n>=-107&&n<=107?[n+139]:n>=108&&n<=1131?(n=n-108,[(n>>8)+247,n&255]):n>=-1131&&n<=-108?(n=-n-108,[(n>>8)+251,n&255]):n>=-32768&&n<=32767?se.NUMBER16(n):se.NUMBER32(n)};De.NUMBER=function(n){return se.NUMBER(n).length};se.NUMBER16=function(n){return[28,n>>8&255,n&255]};De.NUMBER16=hn(3);se.NUMBER32=function(n){return[29,n>>24&255,n>>16&255,n>>8&255,n&255]};De.NUMBER32=hn(5);se.REAL=function(n){let e=n.toString();const t=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(t){const r=parseFloat("1e"+((t[2]?+t[2]:0)+t[1].length));e=(Math.round(n*r)/r).toString()}let i="";for(let r=0,a=e.length;r<a;r+=1){const o=e[r];o==="e"?i+=e[++r]==="-"?"c":"b":o==="."?i+="a":o==="-"?i+="e":i+=o}i+=i.length&1?"f":"ff";const s=[30];for(let r=0,a=i.length;r<a;r+=2)s.push(parseInt(i.substr(r,2),16));return s};De.REAL=function(n){return se.REAL(n).length};se.NAME=se.CHARARRAY;De.NAME=De.CHARARRAY;se.STRING=se.CHARARRAY;De.STRING=De.CHARARRAY;rs.UTF8=function(n,e,t){const i=[],s=t;for(let r=0;r<s;r++,e+=1)i[r]=n.getUint8(e);return String.fromCharCode.apply(null,i)};rs.UTF16=function(n,e,t){const i=[],s=t/2;for(let r=0;r<s;r++,e+=2)i[r]=n.getUint16(e);return String.fromCharCode.apply(null,i)};se.UTF16=function(n){const e=[];for(let t=0;t<n.length;t+=1){const i=n.charCodeAt(t);e[e.length]=i>>8&255,e[e.length]=i&255}return e};De.UTF16=function(n){return n.length*2};var Or={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};rs.MACSTRING=function(n,e,t,i){const s=Or[i];if(s===void 0)return;let r="";for(let a=0;a<t;a++){const o=n.getUint8(e+a);o<=127?r+=String.fromCharCode(o):r+=s[o&127]}return r};var mr=typeof WeakMap=="function"&&new WeakMap,gr,sx=function(n){if(!gr){gr={};for(let s in Or)gr[s]=new String(s)}const e=gr[n];if(e===void 0)return;if(mr){const s=mr.get(e);if(s!==void 0)return s}const t=Or[n];if(t===void 0)return;const i={};for(let s=0;s<t.length;s++)i[t.charCodeAt(s)]=s+128;return mr&&mr.set(e,i),i};se.MACSTRING=function(n,e){const t=sx(e);if(t===void 0)return;const i=[];for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=128&&(r=t[r],r===void 0))return;i[s]=r}return i};De.MACSTRING=function(n,e){const t=se.MACSTRING(n,e);return t!==void 0?t.length:0};function No(n){return n>=-128&&n<=127}function rx(n,e,t){let i=0;const s=n.length;for(;e<s&&i<64&&n[e]===0;)++e,++i;return t.push(128|i-1),e}function ax(n,e,t){let i=0;const s=n.length;let r=e;for(;r<s&&i<64;){const a=n[r];if(!No(a)||a===0&&r+1<s&&n[r+1]===0)break;++r,++i}t.push(i-1);for(let a=e;a<r;++a)t.push(n[a]+256&255);return r}function ox(n,e,t){let i=0;const s=n.length;let r=e;for(;r<s&&i<64;){const a=n[r];if(a===0||No(a)&&r+1<s&&No(n[r+1]))break;++r,++i}t.push(64|i-1);for(let a=e;a<r;++a){const o=n[a];t.push(o+65536>>8&255,o+256&255)}return r}se.VARDELTAS=function(n){let e=0;const t=[];for(;e<n.length;){const i=n[e];i===0?e=rx(n,e,t):i>=-128&&i<=127?e=ax(n,e,t):e=ox(n,e,t)}return t};se.INDEX=function(n){let e=1;const t=[e],i=[];for(let o=0;o<n.length;o+=1){const l=se.OBJECT(n[o]);Array.prototype.push.apply(i,l),e+=l.length,t.push(e)}if(i.length===0)return[0,0];const s=[],r=1+Math.floor(Math.log(e)/Math.log(2))/8|0,a=[void 0,se.BYTE,se.USHORT,se.UINT24,se.ULONG][r];for(let o=0;o<t.length;o+=1){const l=a(t[o]);Array.prototype.push.apply(s,l)}return Array.prototype.concat(se.Card16(n.length),se.OffSize(r),s,i)};De.INDEX=function(n){return se.INDEX(n).length};se.DICT=function(n){let e=[];const t=Object.keys(n),i=t.length;for(let s=0;s<i;s+=1){const r=parseInt(t[s],0),a=n[r],o=se.OPERAND(a.value,a.type),l=se.OPERATOR(r);for(let c=0;c<o.length;c++)e.push(o[c]);for(let c=0;c<l.length;c++)e.push(l[c])}return e};De.DICT=function(n){return se.DICT(n).length};se.OPERATOR=function(n){return n<1200?[n]:[12,n-1200]};se.OPERAND=function(n,e){let t=[];if(Array.isArray(e))for(let i=0;i<e.length;i+=1){Se.argument(n.length===e.length,"Not enough arguments given for type"+e);const s=se.OPERAND(n[i],e[i]);for(let r=0;r<s.length;r++)t.push(s[r])}else if(e==="SID"){const i=se.NUMBER(n);for(let s=0;s<i.length;s++)t.push(i[s])}else if(e==="offset"){const i=se.NUMBER32(n);for(let s=0;s<i.length;s++)t.push(i[s])}else if(e==="number"){const i=se.NUMBER(n);for(let s=0;s<i.length;s++)t.push(i[s])}else if(e==="real"){const i=se.REAL(n);for(let s=0;s<i.length;s++)t.push(i[s])}else throw new Error("Unknown operand type "+e);return t};se.OP=se.BYTE;De.OP=De.BYTE;var vr=typeof WeakMap=="function"&&new WeakMap;se.CHARSTRING=function(n){if(vr){const i=vr.get(n);if(i!==void 0)return i}let e=[];const t=n.length;for(let i=0;i<t;i+=1){const s=n[i],r=se[s.type](s.value);for(let a=0;a<r.length;a++)e.push(r[a])}return vr&&vr.set(n,e),e};De.CHARSTRING=function(n){return se.CHARSTRING(n).length};se.OBJECT=function(n){const e=se[n.type];return Se.argument(e!==void 0,"No encoding function for type "+n.type),e(n.value)};De.OBJECT=function(n){const e=De[n.type];return Se.argument(e!==void 0,"No sizeOf function for type "+n.type),e(n.value)};se.TABLE=function(n){let e=[];const t=(n.fields||[]).length,i=[],s=[];for(let r=0;r<t;r+=1){const a=n.fields[r],o=se[a.type];Se.argument(o!==void 0,"No encoding function for field type "+a.type+" ("+a.name+")");let l=n[a.name];l===void 0&&(l=a.value);const c=o(l);if(a.type==="TABLE")l.fields!==null&&(s.push(e.length),i.push(c)),e.push(0,0);else for(let u=0;u<c.length;u++)e.push(c[u])}for(let r=0;r<i.length;r+=1){const a=s[r],o=e.length;Se.argument(o<65536,"Table "+n.tableName+" too big."),e[a]=o>>8,e[a+1]=o&255;for(let l=0;l<i[r].length;l++)e.push(i[r][l])}return e};De.TABLE=function(n){let e=0;const t=(n.fields||[]).length;for(let i=0;i<t;i+=1){const s=n.fields[i],r=De[s.type];Se.argument(r!==void 0,"No sizeOf function for field type "+s.type+" ("+s.name+")");let a=n[s.name];a===void 0&&(a=s.value),e+=r(a),s.type==="TABLE"&&(e+=2)}return e};se.RECORD=se.TABLE;De.RECORD=De.TABLE;se.LITERAL=function(n){return n};De.LITERAL=function(n){return n.length};function gt(n,e,t){if(e&&e.length)for(let i=0;i<e.length;i+=1){const s=e[i];this[s.name]=s.value}if(this.tableName=n,this.fields=e,t){const i=Object.keys(t);for(let s=0;s<i.length;s+=1){const r=i[s],a=t[r];this[r]!==void 0&&(this[r]=a)}}}gt.prototype.encode=function(){return se.TABLE(this)};gt.prototype.sizeOf=function(){return De.TABLE(this)};function as(n,e,t){t===void 0&&(t=e.length);const i=new Array(e.length+1);i[0]={name:n+"Count",type:"USHORT",value:t};for(let s=0;s<e.length;s++)i[s+1]={name:n+s,type:"USHORT",value:e[s]};return i}function ko(n,e,t){const i=e.length,s=new Array(i+1);s[0]={name:n+"Count",type:"USHORT",value:i};for(let r=0;r<i;r++)s[r+1]={name:n+r,type:"TABLE",value:t(e[r],r)};return s}function os(n,e,t){const i=e.length;let s=[];s[0]={name:n+"Count",type:"USHORT",value:i};for(let r=0;r<i;r++)s=s.concat(t(e[r],r));return s}function Fr(n){n.format===1?gt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(as("glyph",n.glyphs))):n.format===2?gt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(os("rangeRecord",n.ranges,function(e,t){return[{name:"startGlyphID"+t,type:"USHORT",value:e.start},{name:"endGlyphID"+t,type:"USHORT",value:e.end},{name:"startCoverageIndex"+t,type:"USHORT",value:e.index}]}))):Se.assert(!1,"Coverage format must be 1 or 2.")}Fr.prototype=Object.create(gt.prototype);Fr.prototype.constructor=Fr;function Nr(n){gt.call(this,"scriptListTable",os("scriptRecord",n,function(e,t){const i=e.script;let s=i.defaultLangSys;return Se.assert(!!s,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+t,type:"TAG",value:e.tag},{name:"script"+t,type:"TABLE",value:new gt("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new gt("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:s.reqFeatureIndex}].concat(as("featureIndex",s.featureIndexes)))}].concat(os("langSys",i.langSysRecords,function(r,a){const o=r.langSys;return[{name:"langSysTag"+a,type:"TAG",value:r.tag},{name:"langSys"+a,type:"TABLE",value:new gt("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:o.reqFeatureIndex}].concat(as("featureIndex",o.featureIndexes)))}]})))}]}))}Nr.prototype=Object.create(gt.prototype);Nr.prototype.constructor=Nr;function kr(n){gt.call(this,"featureListTable",os("featureRecord",n,function(e,t){const i=e.feature;return[{name:"featureTag"+t,type:"TAG",value:e.tag},{name:"feature"+t,type:"TABLE",value:new gt("featureTable",[{name:"featureParams",type:"USHORT",value:i.featureParams}].concat(as("lookupListIndex",i.lookupListIndexes)))}]}))}kr.prototype=Object.create(gt.prototype);kr.prototype.constructor=kr;function Br(n,e){gt.call(this,"lookupListTable",ko("lookup",n,function(t){let i=e[t.lookupType];return Se.assert(!!i,"Unable to write GSUB lookup type "+t.lookupType+" tables."),new gt("lookupTable",[{name:"lookupType",type:"USHORT",value:t.lookupType},{name:"lookupFlag",type:"USHORT",value:t.lookupFlag}].concat(ko("subtable",t.subtables,i)))}))}Br.prototype=Object.create(gt.prototype);Br.prototype.constructor=Br;function zr(n){n.format===1?gt.call(this,"classDefTable",[{name:"classFormat",type:"USHORT",value:1},{name:"startGlyphID",type:"USHORT",value:n.startGlyph}].concat(as("glyph",n.classes))):n.format===2?gt.call(this,"classDefTable",[{name:"classFormat",type:"USHORT",value:2}].concat(os("rangeRecord",n.ranges,function(e,t){return[{name:"startGlyphID"+t,type:"USHORT",value:e.start},{name:"endGlyphID"+t,type:"USHORT",value:e.end},{name:"class"+t,type:"USHORT",value:e.classId}]}))):Se.assert(!1,"Class format must be 1 or 2.")}zr.prototype=Object.create(gt.prototype);zr.prototype.constructor=zr;var Q={Table:gt,Record:gt,Coverage:Fr,ClassDef:zr,ScriptList:Nr,FeatureList:kr,LookupList:Br,ushortList:as,tableList:ko,recordList:os};function kc(n,e){return n.getUint8(e)}function Hr(n,e){return n.getUint16(e,!1)}function lx(n,e){return n.getInt16(e,!1)}function Sh(n,e){return(n.getUint16(e)<<8)+n.getUint8(e+2)}function ol(n,e){return n.getUint32(e,!1)}function cx(n,e){return n.getInt32(e,!1)}function bh(n,e){const t=n.getInt16(e,!1),i=n.getUint16(e+2,!1);return t+i/65535}function ux(n,e){let t="";for(let i=e;i<e+4;i+=1)t+=String.fromCharCode(n.getInt8(i));return t}function hx(n,e,t){let i=0;for(let s=0;s<t;s+=1)i<<=8,i+=n.getUint8(e+s);return i}function fx(n,e,t){const i=[];for(let s=e;s<t;s+=1)i.push(n.getUint8(s));return i}function dx(n){let e="";for(let t=0;t<n.length;t+=1)e+=String.fromCharCode(n[t]);return e}var px={byte:1,uShort:2,f2dot14:2,short:2,uInt24:3,uLong:4,fixed:4,longDateTime:8,tag:4},Dt={LONG_WORDS:32768,WORD_DELTA_COUNT_MASK:32767,SHARED_POINT_NUMBERS:32768,COUNT_MASK:4095,EMBEDDED_PEAK_TUPLE:32768,INTERMEDIATE_REGION:16384,PRIVATE_POINT_NUMBERS:8192,TUPLE_INDEX_MASK:4095,POINTS_ARE_WORDS:128,POINT_RUN_COUNT_MASK:127,DELTAS_ARE_ZERO:128,DELTAS_ARE_WORDS:64,DELTA_RUN_COUNT_MASK:63,INNER_INDEX_BIT_COUNT_MASK:15,MAP_ENTRY_SIZE_MASK:48};function I(n,e){this.data=n,this.offset=e,this.relativeOffset=0}I.prototype.parseByte=function(){const n=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n};I.prototype.parseChar=function(){const n=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n};I.prototype.parseCard8=I.prototype.parseByte;I.prototype.parseUShort=function(){const n=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n};I.prototype.parseCard16=I.prototype.parseUShort;I.prototype.parseSID=I.prototype.parseUShort;I.prototype.parseOffset16=I.prototype.parseUShort;I.prototype.parseShort=function(){const n=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n};I.prototype.parseF2Dot14=function(){const n=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,n};I.prototype.parseUInt24=function(){const n=Sh(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=3,n};I.prototype.parseULong=function(){const n=ol(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};I.prototype.parseLong=function(){const n=cx(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};I.prototype.parseOffset32=I.prototype.parseULong;I.prototype.parseFixed=function(){const n=bh(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};I.prototype.parseString=function(n){const e=this.data,t=this.offset+this.relativeOffset;let i="";this.relativeOffset+=n;for(let s=0;s<n;s++)i+=String.fromCharCode(e.getUint8(t+s));return i};I.prototype.parseTag=function(){return this.parseString(4)};I.prototype.parseLongDateTime=function(){let n=ol(this.data,this.offset+this.relativeOffset+4);return n-=2082844800,this.relativeOffset+=8,n};I.prototype.parseVersion=function(n){const e=Hr(this.data,this.offset+this.relativeOffset),t=Hr(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,n===void 0&&(n=4096),e+t/n/10};I.prototype.skip=function(n,e){e===void 0&&(e=1),this.relativeOffset+=px[n]*e};I.prototype.parseULongList=function(n){n===void 0&&(n=this.parseULong());const e=new Array(n),t=this.data;let i=this.offset+this.relativeOffset;for(let s=0;s<n;s++)e[s]=t.getUint32(i),i+=4;return this.relativeOffset+=n*4,e};I.prototype.parseOffset16List=I.prototype.parseUShortList=function(n){n===void 0&&(n=this.parseUShort());const e=new Array(n),t=this.data;let i=this.offset+this.relativeOffset;for(let s=0;s<n;s++)e[s]=t.getUint16(i),i+=2;return this.relativeOffset+=n*2,e};I.prototype.parseShortList=function(n){const e=new Array(n),t=this.data;let i=this.offset+this.relativeOffset;for(let s=0;s<n;s++)e[s]=t.getInt16(i),i+=2;return this.relativeOffset+=n*2,e};I.prototype.parseByteList=function(n){const e=new Array(n),t=this.data;let i=this.offset+this.relativeOffset;for(let s=0;s<n;s++)e[s]=t.getUint8(i++);return this.relativeOffset+=n,e};I.prototype.parseList=function(n,e){e||(e=n,n=this.parseUShort());const t=new Array(n);for(let i=0;i<n;i++)t[i]=e.call(this);return t};I.prototype.parseList32=function(n,e){e||(e=n,n=this.parseULong());const t=new Array(n);for(let i=0;i<n;i++)t[i]=e.call(this);return t};I.prototype.parseRecordList=function(n,e){e||(e=n,n=this.parseUShort());const t=new Array(n),i=Object.keys(e);for(let s=0;s<n;s++){const r={};for(let a=0;a<i.length;a++){const o=i[a],l=e[o];r[o]=l.call(this)}t[s]=r}return t};I.prototype.parseRecordList32=function(n,e){e||(e=n,n=this.parseULong());const t=new Array(n),i=Object.keys(e);for(let s=0;s<n;s++){const r={};for(let a=0;a<i.length;a++){const o=i[a],l=e[o];r[o]=l.call(this)}t[s]=r}return t};I.prototype.parseTupleRecords=function(n,e){let t=[];for(let i=0;i<n;i++){let s=[];for(let r=0;r<e;r++)s.push(this.parseF2Dot14());t.push(s)}return t};I.prototype.parseStruct=function(n){if(typeof n=="function")return n.call(this);{const e=Object.keys(n),t={};for(let i=0;i<e.length;i++){const s=e[i],r=n[s];t[s]=r.call(this)}return t}};I.prototype.parseValueRecord=function(n){if(n===void 0&&(n=this.parseUShort()),n===0)return;const e={};return n&1&&(e.xPlacement=this.parseShort()),n&2&&(e.yPlacement=this.parseShort()),n&4&&(e.xAdvance=this.parseShort()),n&8&&(e.yAdvance=this.parseShort()),n&16&&(e.xPlaDevice=void 0,this.parseShort()),n&32&&(e.yPlaDevice=void 0,this.parseShort()),n&64&&(e.xAdvDevice=void 0,this.parseShort()),n&128&&(e.yAdvDevice=void 0,this.parseShort()),e};I.prototype.parseValueRecordList=function(){const n=this.parseUShort(),e=this.parseUShort(),t=new Array(e);for(let i=0;i<e;i++)t[i]=this.parseValueRecord(n);return t};I.prototype.parsePointer=function(n){const e=this.parseOffset16();if(e>0)return new I(this.data,this.offset+e).parseStruct(n)};I.prototype.parsePointer32=function(n){const e=this.parseOffset32();if(e>0)return new I(this.data,this.offset+e).parseStruct(n)};I.prototype.parseListOfLists=function(n){const e=this.parseOffset16List(),t=e.length,i=this.relativeOffset,s=new Array(t);for(let r=0;r<t;r++){const a=e[r];if(a===0){s[r]=void 0;continue}if(this.relativeOffset=a,n){const o=this.parseOffset16List(),l=new Array(o.length);for(let c=0;c<o.length;c++)this.relativeOffset=a+o[c],l[c]=n.call(this);s[r]=l}else s[r]=this.parseUShortList()}return this.relativeOffset=i,s};I.prototype.parseCoverage=function(){const n=this.offset+this.relativeOffset,e=this.parseUShort(),t=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(t)};if(e===2){const i=new Array(t);for(let s=0;s<t;s++)i[s]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:i}}throw new Error("0x"+n.toString(16)+": Coverage format must be 1 or 2.")};I.prototype.parseClassDef=function(){const n=this.offset+this.relativeOffset,e=this.parseUShort();return e===1?{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()}:e===2?{format:2,ranges:this.parseRecordList({start:I.uShort,end:I.uShort,classId:I.uShort})}:(console.warn(`0x${n.toString(16)}: This font file uses an invalid ClassDef format of ${e}. It might be corrupted and should be reacquired if it doesn't display as intended.`),{format:e})};I.list=function(n,e){return function(){return this.parseList(n,e)}};I.list32=function(n,e){return function(){return this.parseList32(n,e)}};I.recordList=function(n,e){return function(){return this.parseRecordList(n,e)}};I.recordList32=function(n,e){return function(){return this.parseRecordList32(n,e)}};I.pointer=function(n){return function(){return this.parsePointer(n)}};I.pointer32=function(n){return function(){return this.parsePointer32(n)}};I.tag=I.prototype.parseTag;I.byte=I.prototype.parseByte;I.uShort=I.offset16=I.prototype.parseUShort;I.uShortList=I.prototype.parseUShortList;I.uInt24=I.prototype.parseUInt24;I.uLong=I.offset32=I.prototype.parseULong;I.uLongList=I.prototype.parseULongList;I.fixed=I.prototype.parseFixed;I.f2Dot14=I.prototype.parseF2Dot14;I.struct=I.prototype.parseStruct;I.coverage=I.prototype.parseCoverage;I.classDef=I.prototype.parseClassDef;var Bc={reserved:I.uShort,reqFeatureIndex:I.uShort,featureIndexes:I.uShortList};I.prototype.parseScriptList=function(){return this.parsePointer(I.recordList({tag:I.tag,script:I.pointer({defaultLangSys:I.pointer(Bc),langSysRecords:I.recordList({tag:I.tag,langSys:I.pointer(Bc)})})}))||[]};I.prototype.parseFeatureList=function(){return this.parsePointer(I.recordList({tag:I.tag,feature:I.pointer({featureParams:I.offset16,lookupListIndexes:I.uShortList})}))||[]};I.prototype.parseLookupList=function(n){return this.parsePointer(I.list(I.pointer(function(){const e=this.parseUShort();Se.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");const t=this.parseUShort(),i=t&16;return{lookupType:e,lookupFlag:t,subtables:this.parseList(I.pointer(n[e])),markFilteringSet:i?this.parseUShort():void 0}})))||[]};I.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){const n=this.parseUShort(),e=this.parseUShort();return Se.argument(n===1&&e<1,"GPOS/GSUB feature variations table unknown."),this.parseRecordList32({conditionSetOffset:I.offset32,featureTableSubstitutionOffset:I.offset32})})||[]};I.prototype.parseVariationStore=function(){const n=this.relativeOffset,e=this.parseUShort(),t={itemVariationStore:this.parseItemVariationStore()};return this.relativeOffset=n+e+2,t};I.prototype.parseItemVariationStore=function(){const n=this.relativeOffset,e={format:this.parseUShort(),variationRegions:[],itemVariationSubtables:[]},t=this.parseOffset32(),i=this.parseUShort(),s=this.parseULongList(i);this.relativeOffset=n+t,e.variationRegions=this.parseVariationRegionList();for(let r=0;r<i;r++){const a=s[r];this.relativeOffset=n+a,e.itemVariationSubtables.push(this.parseItemVariationSubtable())}return e};I.prototype.parseVariationRegionList=function(){const n=this.parseUShort(),e=this.parseUShort();return this.parseRecordList(e,{regionAxes:I.recordList(n,{startCoord:I.f2Dot14,peakCoord:I.f2Dot14,endCoord:I.f2Dot14})})};I.prototype.parseItemVariationSubtable=function(){const n=this.parseUShort(),e=this.parseUShort(),t=this.parseUShortList(),i=t.length;return{regionIndexes:t,deltaSets:n&&i?this.parseDeltaSets(n,e,i):[]}};I.prototype.parseDeltaSetIndexMap=function(){const n=this.parseByte(),e=this.parseByte(),t=[];let i=0;switch(n){case 0:i=this.parseUShort();break;case 1:i=this.parseULong();break;default:console.error(`unsupported DeltaSetIndexMap format ${n}`)}if(!i)return{format:n,entryFormat:e};const s=(e&Dt.INNER_INDEX_BIT_COUNT_MASK)+1,r=((e&Dt.MAP_ENTRY_SIZE_MASK)>>4)+1;for(let a=0;a<i;a++){let o;if(r===1)o=this.parseByte();else if(r===2)o=this.parseUShort();else if(r===3)o=this.parseUInt24();else if(r===4)o=this.parseULong();else throw new Error(`Invalid entry size of ${r}`);const l=o>>s,c=o&(1<<s)-1;t.push({outerIndex:l,innerIndex:c})}return{format:n,entryFormat:e,map:t}};I.prototype.parseDeltaSets=function(n,e,t){const i=Array.from({length:n},()=>[]),s=e&Dt.LONG_WORDS,r=e&Dt.WORD_DELTA_COUNT_MASK;if(r>t)throw Error("wordCount must be less than or equal to regionIndexCount");const a=(s?this.parseLong:this.parseShort).bind(this),o=(s?this.parseShort:this.parseChar).bind(this);for(let l=0;l<n;l++)for(let c=0;c<t;c++)c<r?i[l].push(a()):i[l].push(o());return i};I.prototype.parseTupleVariationStoreList=function(n,e,t){const i=this.parseUShort(),r=this.parseUShort()&1,a=this.parseOffset32(),o=(r?this.parseULong:this.parseUShort).bind(this),l={};let c=o();r||(c*=2);let u;for(let f=0;f<i;f++){u=o(),r||(u*=2);const h=u-c;l[f]=h?this.parseTupleVariationStore(a+c,n,e,t,f):void 0,c=u}return l};I.prototype.parseTupleVariationStore=function(n,e,t,i,s){const r=this.relativeOffset;this.relativeOffset=n,t==="cvar"&&(this.relativeOffset+=4);const a=this.parseUShort(),o=!!(a&Dt.SHARED_POINT_NUMBERS),l=a&Dt.COUNT_MASK;let c=this.parseOffset16();const u=[];let f=[];for(let p=0;p<l;p++){const v=this.parseTupleVariationHeader(e,t);u.push(v)}this.relativeOffset!==n+c&&(console.warn(`Unexpected offset after parsing tuple variation headers! Expected ${n+c}, actually ${this.relativeOffset}`),this.relativeOffset=n+c),o&&(f=this.parsePackedPointNumbers());let h=this.relativeOffset;for(let p=0;p<l;p++){const v=u[p];v.privatePoints=[],this.relativeOffset=h,t==="cvar"&&!v.peakTuple&&console.warn("An embedded peak tuple is required in TupleVariationHeaders for the cvar table."),v.flags.privatePointNumbers&&(v.privatePoints=this.parsePackedPointNumbers()),delete v.flags;const m=this.offset,g=this.relativeOffset,T=S=>{let y,R;const C=()=>{let A=0;if(t==="gvar"){if(A=v.privatePoints.length||f.length,!A){const L=i.get(s);L.path,A=L.points.length,A+=4}}else t==="cvar"&&(A=i.length);this.offset=m,this.relativeOffset=g,y=this.parsePackedDeltas(A),t==="gvar"&&(R=this.parsePackedDeltas(A))};return{configurable:!0,get:function(){return y===void 0&&C(),S==="deltasY"?R:y},set:function(A){y===void 0&&C(),S==="deltasY"?R=A:y=A}}};Object.defineProperty(v,"deltas",T.call(this,"deltas")),t==="gvar"&&Object.defineProperty(v,"deltasY",T.call(this,"deltasY")),h+=v.variationDataSize,delete v.variationDataSize}this.relativeOffset=r;const d={headers:u};return d.sharedPoints=f,d};I.prototype.parseTupleVariationHeader=function(n,e){const t=this.parseUShort(),i=this.parseUShort(),s=!!(i&Dt.EMBEDDED_PEAK_TUPLE),r=!!(i&Dt.INTERMEDIATE_REGION),a=!!(i&Dt.PRIVATE_POINT_NUMBERS),o=s?void 0:i&Dt.TUPLE_INDEX_MASK,l=s?this.parseTupleRecords(1,n)[0]:void 0,c=r?this.parseTupleRecords(1,n)[0]:void 0,u=r?this.parseTupleRecords(1,n)[0]:void 0,f={variationDataSize:t,peakTuple:l,intermediateStartTuple:c,intermediateEndTuple:u,flags:{embeddedPeakTuple:s,intermediateRegion:r,privatePointNumbers:a}};return e==="gvar"&&(f.sharedTupleRecordsIndex=o),f};I.prototype.parsePackedPointNumbers=function(){const n=this.parseByte(),e=[];let t=n;if(n>=128){const s=this.parseByte();t=(n&Dt.POINT_RUN_COUNT_MASK)<<8|s}let i=0;for(;e.length<t;){const s=this.parseByte(),r=!!(s&Dt.POINTS_ARE_WORDS);let a=(s&Dt.POINT_RUN_COUNT_MASK)+1;for(let o=0;o<a&&e.length<t;o++){let l;r?l=this.parseUShort():l=this.parseByte(),i=i+l,e.push(i)}}return e};I.prototype.parsePackedDeltas=function(n){const e=[];for(;e.length<n;){const t=this.parseByte(),i=!!(t&Dt.DELTAS_ARE_ZERO),s=!!(t&Dt.DELTAS_ARE_WORDS),r=(t&Dt.DELTA_RUN_COUNT_MASK)+1;for(let a=0;a<r&&e.length<n;a++)i?e.push(0):s?e.push(this.parseShort()):e.push(this.parseChar())}return e};var oe={getByte:kc,getCard8:kc,getUShort:Hr,getCard16:Hr,getShort:lx,getUInt24:Sh,getULong:ol,getFixed:bh,getTag:ux,getOffset:hx,getBytes:fx,bytesToString:dx,Parser:I},Gr=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],Mh={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},mx={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},Th={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function gx(n,e,t){switch(n){case 0:if(e===65535)return"und";if(t)return t[e];break;case 1:return Mh[e];case 3:return Th[e]}}var Bo="utf-16",vx={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},xx={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function ll(n,e,t){switch(n){case 0:return Bo;case 1:return xx[t]||vx[e];case 3:if(e===1||e===10)return Bo;break}}var Eh={0:"unicode",1:"macintosh",2:"reserved",3:"windows"};function _x(n){return Eh[n]}function yx(n,e,t){const i={},s=new oe.Parser(n,e),r=s.parseUShort(),a=s.parseUShort(),o=s.offset+s.parseUShort();for(let l=0;l<a;l++){const c=s.parseUShort(),u=s.parseUShort(),f=s.parseUShort(),h=s.parseUShort(),d=Gr[h]||h,p=s.parseUShort(),v=s.parseUShort(),m=gx(c,f,t),g=ll(c,u,f),T=_x(c);if(g!==void 0&&m!==void 0&&T!==void 0){let S;if(g===Bo?S=rs.UTF16(n,o+v,p):S=rs.MACSTRING(n,o+v,p,g),S){let y=i[T];y===void 0&&(y=i[T]={});let R=y[d];R===void 0&&(R=y[d]={}),R[m]=S}}}return r===1&&s.parseUShort(),i}function xr(n){const e={};for(let t in n)e[n[t]]=parseInt(t);return e}function zc(n,e,t,i,s,r){return new Q.Record("NameRecord",[{name:"platformID",type:"USHORT",value:n},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:t},{name:"nameID",type:"USHORT",value:i},{name:"length",type:"USHORT",value:s},{name:"offset",type:"USHORT",value:r}])}function Sx(n,e){const t=n.length,i=e.length-t+1;e:for(let s=0;s<i;s++)for(;s<i;s++){for(let r=0;r<t;r++)if(e[s+r]!==n[r])continue e;return s}return-1}function Hc(n,e){let t=Sx(n,e);if(t<0){t=e.length;let i=0;const s=n.length;for(;i<s;++i)e.push(n[i])}return t}function bx(n,e){const t=xr(Eh),i=xr(Mh),s=xr(Th),r=[],a=[];for(let l in n){let c;const u=[],f={},h=xr(Gr),d=t[l];for(let p in n[l]){let v=h[p];if(v===void 0&&(v=p),c=parseInt(v),isNaN(c))throw new Error('Name table entry "'+p+'" does not exist, see nameTableNames for complete list.');f[c]=n[l][p],u.push(c)}for(let p=0;p<u.length;p++){c=u[p];const v=f[c];for(let m in v){const g=v[m];if(d===1||d===0){let T=i[m],S=mx[T];const y=ll(d,S,T);let R=se.MACSTRING(g,y);if(d===0&&(T=e.indexOf(m),T<0&&(T=e.length,e.push(m)),S=4,R=se.UTF16(g)),R!==void 0){const C=Hc(R,a);r.push(zc(d,S,T,c,R.length,C))}}if(d===3){const T=s[m];if(T!==void 0){const S=se.UTF16(g),y=Hc(S,a);r.push(zc(3,1,T,c,S.length,y))}}}}}r.sort(function(l,c){return l.platformID-c.platformID||l.encodingID-c.encodingID||l.languageID-c.languageID||l.nameID-c.nameID});const o=new Q.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:r.length},{name:"stringOffset",type:"USHORT",value:6+r.length*12}]);for(let l=0;l<r.length;l++)o.fields.push({name:"record_"+l,type:"RECORD",value:r[l]});return o.fields.push({name:"strings",type:"LITERAL",value:a}),o}function Vr(n,e,t=[]){if(e<256&&e in Gr){if(t.length&&!t.includes(parseInt(e)))return;e=Gr[e]}for(let i in n)for(let s in n[i])if(s===e||parseInt(s)===e)return n[i][s]}var Ah={parse:yx,make:bx,getNameByID:Vr};function Mx(n,e,t,i){n.length=e.parseUShort(),n.language=e.parseUShort()-1;const s=e.parseByteList(n.length),r=Object.assign({},s),a=ll(t,i,n.language),o=Or[a];for(let l=0;l<o.length;l++)r[o.charCodeAt(l)]=s[128+l];n.glyphIndexMap=r}function Tx(n,e,t){e.parseUShort(),n.length=e.parseULong(),n.language=e.parseULong();let i;n.groupCount=i=e.parseULong(),n.glyphIndexMap={};for(let s=0;s<i;s+=1){const r=e.parseULong(),a=e.parseULong();let o=e.parseULong();for(let l=r;l<=a;l+=1)n.glyphIndexMap[l]=o,t===12&&o++}}function Ex(n,e,t,i,s){n.length=e.parseUShort(),n.language=e.parseUShort();let r;n.segCount=r=e.parseUShort()>>1,e.skip("uShort",3),n.glyphIndexMap={};const a=new oe.Parser(t,i+s+14),o=new oe.Parser(t,i+s+16+r*2),l=new oe.Parser(t,i+s+16+r*4),c=new oe.Parser(t,i+s+16+r*6);let u=i+s+16+r*8;for(let f=0;f<r-1;f+=1){let h;const d=a.parseUShort(),p=o.parseUShort(),v=l.parseShort(),m=c.parseUShort();for(let g=p;g<=d;g+=1)m!==0?(u=c.offset+c.relativeOffset-2,u+=m,u+=(g-p)*2,h=oe.getUShort(t,u),h!==0&&(h=h+v&65535)):h=g+v&65535,n.glyphIndexMap[g]=h}}function Ax(n,e){const t={};e.skip("uLong");const i=e.parseULong();for(let s=0;s<i;s+=1){const r=e.parseUInt24(),a={varSelector:r},o=e.parseOffset32(),l=e.parseOffset32(),c=e.relativeOffset;o&&(e.relativeOffset=o,a.defaultUVS=e.parseStruct({ranges:function(){return e.parseRecordList32({startUnicodeValue:e.parseUInt24,additionalCount:e.parseByte})}})),l&&(e.relativeOffset=l,a.nonDefaultUVS=e.parseStruct({uvsMappings:function(){const u={},f=e.parseRecordList32({unicodeValue:e.parseUInt24,glyphID:e.parseUShort});for(let h=0;h<f.length;h+=1)u[f[h].unicodeValue]=f[h];return u}})),t[r]=a,e.relativeOffset=c}n.varSelectorList=t}function Cx(n,e){const t={};t.version=oe.getUShort(n,e),Se.argument(t.version===0,"cmap table version should be 0."),t.numTables=oe.getUShort(n,e+2);let i=null,s=-1,r=-1,a=null,o=null;const l=[0,1,2,3,4,6],c=[0,1,10];for(let f=t.numTables-1;f>=0;f-=1)if(a=oe.getUShort(n,e+4+f*8),o=oe.getUShort(n,e+4+f*8+2),a===3&&c.includes(o)||a===0&&l.includes(o)||a===1&&o===0){if(r>0)continue;if(r=oe.getULong(n,e+4+f*8+4),i)break}else if(a===0&&o===5){if(s=oe.getULong(n,e+4+f*8+4),i=new oe.Parser(n,e+s),i.parseUShort()!==14)s=-1,i=null;else if(r>0)break}if(r===-1)throw new Error("No valid cmap sub-tables found.");const u=new oe.Parser(n,e+r);if(t.format=u.parseUShort(),t.format===0)Mx(t,u,a,o);else if(t.format===12||t.format===13)Tx(t,u,t.format);else if(t.format===4)Ex(t,u,n,e,r);else throw new Error("Only format 0 (platformId 1, encodingId 0), 4, 12 and 14 cmap tables are supported (found format "+t.format+", platformId "+a+", encodingId "+o+").");return i&&Ax(t,i),t}function wx(n,e,t){n.segments.push({end:e,start:e,delta:-(e-t),offset:0,glyphIndex:t})}function Rx(n){n.segments.push({end:65535,start:65535,delta:1,offset:0})}function Dx(n){if(n.length===0)return n;const e=[n[0]];for(let t=1;t<n.length;t++){const i=e[e.length-1],s=n[t];i.end+1===s.start&&i.delta===s.delta&&s.end!==65535?i.end=s.end:e.push(s)}return e}function Lx(n){let e=!0,t;for(t=n.length-1;t>0;t-=1)if(n.get(t).unicode>65535){e=!1;break}let i=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||i.push({name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}),i.push({name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0});const s=new Q.Table("cmap",i);for(s.segments=[],t=0;t<n.length;t+=1){const d=n.get(t);for(let p=0;p<d.unicodes.length;p+=1)wx(s,d.unicodes[p],t)}s.segments.sort(function(d,p){return d.start-p.start}),s.segments=Dx(s.segments),Rx(s);const r=s.segments.length;let a=0,o=[],l=[],c=[],u=[],f=[],h=[];for(t=0;t<r;t+=1){const d=s.segments[t];d.end<=65535&&d.start<=65535?(o.push({name:"end_"+t,type:"USHORT",value:d.end}),l.push({name:"start_"+t,type:"USHORT",value:d.start}),c.push({name:"idDelta_"+t,type:"SHORT",value:d.delta}),u.push({name:"idRangeOffset_"+t,type:"USHORT",value:d.offset}),d.glyphId!==void 0&&f.push({name:"glyph_"+t,type:"USHORT",value:d.glyphId})):a+=1,!e&&d.glyphIndex!==void 0&&(h.push({name:"cmap12Start_"+t,type:"ULONG",value:d.start}),h.push({name:"cmap12End_"+t,type:"ULONG",value:d.end}),h.push({name:"cmap12Glyph_"+t,type:"ULONG",value:d.glyphIndex}))}s.segCountX2=(r-a)*2,s.searchRange=Math.pow(2,Math.floor(Math.log(r-a)/Math.log(2)))*2,s.entrySelector=Math.log(s.searchRange/2)/Math.log(2),s.rangeShift=s.segCountX2-s.searchRange;for(let d=0;d<o.length;d++)s.fields.push(o[d]);s.fields.push({name:"reservedPad",type:"USHORT",value:0});for(let d=0;d<l.length;d++)s.fields.push(l[d]);for(let d=0;d<c.length;d++)s.fields.push(c[d]);for(let d=0;d<u.length;d++)s.fields.push(u[d]);for(let d=0;d<f.length;d++)s.fields.push(f[d]);if(s.cmap4Length=14+o.length*2+2+l.length*2+c.length*2+u.length*2+f.length*2,!e){const d=16+h.length*4;s.cmap12Offset=20+s.cmap4Length,s.fields.push({name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:d},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:h.length/3});for(let p=0;p<h.length;p++)s.fields.push(h[p])}return s}var Ch={parse:Cx,make:Lx},Cr=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],Px=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron"],Ux=[".notdef","space","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],Ix=[".notdef","space","dollaroldstyle","dollarsuperior","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","hyphensuperior","colonmonetary","onefitted","rupiah","centoldstyle","figuredash","hypheninferior","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior"],zo=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],Ox=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],pi=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function wh(n){this.font=n}wh.prototype.charToGlyphIndex=function(n){const e=n.codePointAt(0),t=this.font.glyphs;if(t)for(let i=0;i<t.length;i+=1){const s=t.get(i);for(let r=0;r<s.unicodes.length;r+=1)if(s.unicodes[r]===e)return i}return null};function Rh(n){this.cmap=n}Rh.prototype.charToGlyphIndex=function(n){return this.cmap.glyphIndexMap[n.codePointAt(0)]||0};function Dh(n,e){this.encoding=n,this.charset=e}Dh.prototype.charToGlyphIndex=function(n){const e=n.codePointAt(0),t=this.encoding[e];return this.charset.indexOf(t)};function cl(n){switch(n.version){case 1:this.names=pi.slice();break;case 2:this.names=new Array(n.numberOfGlyphs);for(let e=0;e<n.numberOfGlyphs;e++)n.glyphNameIndex[e]<pi.length?this.names[e]=pi[n.glyphNameIndex[e]]:this.names[e]=n.names[n.glyphNameIndex[e]-pi.length];break;case 2.5:this.names=new Array(n.numberOfGlyphs);for(let e=0;e<n.numberOfGlyphs;e++)this.names[e]=pi[e+n.glyphNameIndex[e]];break;case 3:this.names=[];break;default:this.names=[];break}}cl.prototype.nameToGlyphIndex=function(n){return this.names.indexOf(n)};cl.prototype.glyphIndexToName=function(n){return this.names[n]};function Fx(n){let e;const t=n.tables.cmap.glyphIndexMap,i=Object.keys(t);for(let s=0;s<i.length;s+=1){const r=i[s],a=t[r];e=n.glyphs.get(a),e.addUnicode(parseInt(r))}for(let s=0;s<n.glyphs.length;s+=1)e=n.glyphs.get(s),n.cffEncoding?e.name=n.cffEncoding.charset[s]:n.glyphNames.names&&(e.name=n.glyphNames.glyphIndexToName(s))}function Nx(n){n._IndexToUnicodeMap={};const e=n.tables.cmap.glyphIndexMap,t=Object.keys(e);for(let i=0;i<t.length;i+=1){const s=t[i];let r=e[s];n._IndexToUnicodeMap[r]===void 0?n._IndexToUnicodeMap[r]={unicodes:[parseInt(s)]}:n._IndexToUnicodeMap[r].unicodes.push(parseInt(s))}}function kx(n,e){e.lowMemory?Nx(n):Fx(n)}function Bx(n,e,t,i,s){n.beginPath(),n.moveTo(e,t),n.lineTo(i,s),n.stroke()}var ui={line:Bx};function zx(n,e){const t=new I(n,e),i=t.parseShort();i!==0&&console.warn("Only CPALv0 is currently fully supported.");const s=t.parseShort(),r=t.parseShort(),a=t.parseShort(),o=t.parseOffset32(),l=t.parseUShortList(r);t.relativeOffset=o;const c=t.parseULongList(a);return t.relativeOffset=o,{version:i,numPaletteEntries:s,colorRecords:c,colorRecordIndices:l}}function Hx({version:n=0,numPaletteEntries:e=0,colorRecords:t=[],colorRecordIndices:i=[0]}){return Se.argument(n===0,"Only CPALv0 are supported."),Se.argument(t.length,"No colorRecords given."),Se.argument(i.length,"No colorRecordIndices given."),i.length>1&&Se.argument(e,"Can't infer numPaletteEntries on multiple colorRecordIndices"),new Q.Table("CPAL",[{name:"version",type:"USHORT",value:n},{name:"numPaletteEntries",type:"USHORT",value:e||t.length},{name:"numPalettes",type:"USHORT",value:i.length},{name:"numColorRecords",type:"USHORT",value:t.length},{name:"colorRecordsArrayOffset",type:"ULONG",value:12+2*i.length},...i.map((s,r)=>({name:"colorRecordIndices_"+r,type:"USHORT",value:s})),...t.map((s,r)=>({name:"colorRecords_"+r,type:"ULONG",value:s}))])}function Lh(n){var e=(n&4278190080)>>24,t=(n&16711680)>>16,i=(n&65280)>>8,s=n&255;return e=e+256&255,t=t+256&255,i=i+256&255,s=(s+256&255)/255,{b:e,g:t,r:i,a:s}}function ul(n,e,t=0,i="hexa"){if(e==65535)return"currentColor";const s=n&&n.tables&&n.tables.cpal;if(!s)return"currentColor";if(t>s.colorRecordIndices.length-1)throw new Error(`Palette index out of range (colorRecordIndices.length: ${s.colorRecordIndices.length}, index: ${e})`);if(e>s.numPaletteEntries)throw new Error(`Color index out of range (numPaletteEntries: ${s.numPaletteEntries}, index: ${e})`);const r=s.colorRecordIndices[t]+e;if(r>s.colorRecords)throw new Error(`Color index out of range (colorRecords.length: ${s.colorRecords.length}, lookupIndex: ${r})`);const a=Lh(s.colorRecords[r]);return i==="bgra"?a:ls(a,i)}function tn(n){return("0"+parseInt(n).toString(16)).slice(-2)}function Gx(n){const e=n.r/255,t=n.g/255,i=n.b/255,s=Math.max(e,t,i),r=Math.min(e,t,i);let a,o,l=(s+r)/2;if(s===r)a=o=0;else{const c=s-r;switch(o=l>.5?c/(2-s-r):c/(s+r),s){case e:a=(t-i)/c+(t<i?6:0);break;case t:a=(i-e)/c+2;break;case i:a=(e-t)/c+4;break}a/=6}return{h:a*360,s:o*100,l:l*100}}function Vx(n){let{h:e,s:t,l:i,a:s}=n;e=e%360,t/=100,i/=100;const r=(1-Math.abs(2*i-1))*t,a=r*(1-Math.abs(e/60%2-1)),o=i-r/2;let l=0,c=0,u=0;return 0<=e&&e<60?(l=r,c=a,u=0):60<=e&&e<120?(l=a,c=r,u=0):120<=e&&e<180?(l=0,c=r,u=a):180<=e&&e<240?(l=0,c=a,u=r):240<=e&&e<300?(l=a,c=0,u=r):300<=e&&e<=360&&(l=r,c=0,u=a),{r:Math.round((l+o)*255),g:Math.round((c+o)*255),b:Math.round((u+o)*255),a:s}}function Ph(n){return parseInt(`0x${tn(n.b)}${tn(n.g)}${tn(n.r)}${tn(n.a*255)}`,16)}function Wr(n,e="hexa"){const t=e=="raw"||e=="cpal",i=Number.isInteger(n);let s=!0;if(i&&t||n==="currentColor")return n;if(typeof n=="object"){if(e=="bgra")return n;if(t)return Ph(n)}else if(!i&&/^#([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})$/i.test(n.trim())){switch(n=n.trim().substring(1),n.length){case 3:n={r:parseInt(n[0].repeat(2),16),g:parseInt(n[1].repeat(2),16),b:parseInt(n[2].repeat(2),16),a:1};break;case 4:n={r:parseInt(n[0].repeat(2),16),g:parseInt(n[1].repeat(2),16),b:parseInt(n[2].repeat(2),16),a:parseInt(n[3].repeat(2),16)/255};break;case 6:n={r:parseInt(n[0]+n[1],16),g:parseInt(n[2]+n[3],16),b:parseInt(n[4]+n[5],16),a:1};break;case 8:n={r:parseInt(n[0]+n[1],16),g:parseInt(n[2]+n[3],16),b:parseInt(n[4]+n[5],16),a:parseInt(n[6]+n[7],16)/255};break}if(e=="bgra")return n}else if(typeof document<"u"&&/^[a-z]+$/i.test(n)){const r=document.createElement("canvas").getContext("2d");r.fillStyle=n;const a=ls(r.fillStyle,"hexa");a==="#000000ff"&&n.toLowerCase()!=="black"?s=!1:n=a}else{n=n.trim();const r=/rgba?\(\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:,|\s*)\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:,|\s*)\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:(?:,|\s|\/)\s*(?:(0*(?:\.\d+)?()|0*1(?:\.0+)?())|(?:\.\d+)|(\d+)(%)|(\d*\.\d+)(%)))?\s*\)/;if(r.test(n)){const a=n.match(r).filter(o=>typeof o<"u");n={r:Math.round(parseFloat(a[1])/(a[2]?100/255:1)),g:Math.round(parseFloat(a[3])/(a[4]?100/255:1)),b:Math.round(parseFloat(a[5])/(a[6]?100/255:1)),a:a[7]?parseFloat(a[7])/(a[8]?100:1):1}}else{const a=/hsla?\(\s*(?:(\d*\.\d+|\d+)(deg|turn|))\s*(?:,|\s*)\s*(?:(\d*\.\d+)%?|(\d+)%?)\s*(?:,|\s*)\s*(?:(\d*\.\d+)%?|(\d+)%?)\s*(?:(?:,|\s|\/)\s*(?:(0*(?:\.\d+)?()|0*1(?:\.0+)?())|(?:\.\d+)|(\d+)(%)|(\d*\.\d+)(%)))?\s*\)/;if(a.test(n)){const o=n.match(a).filter(l=>typeof l<"u");n=Vx({h:parseFloat(o[1])*(o[2]==="turn"?360:1),s:parseFloat(o[3]),l:parseFloat(o[4]),a:o[5]?parseFloat(o[5])/(o[6]?100:1):1})}else s=!1}}if(!s)throw new Error(`Invalid color format: ${n}`);return ls(n,e)}function ls(n,e="hexa"){if(n==="currentColor")return n;if(Number.isInteger(n)){if(e=="raw"||e=="cpal")return n;n=Lh(n)}else typeof n!="object"&&(n=Wr(n,"bgra"));let t=["hsl","hsla"].includes(e)?Gx(n):null;switch(e){case"rgba":return`rgba(${n.r}, ${n.g}, ${n.b}, ${parseFloat(n.a.toFixed(3))})`;case"rgb":return`rgb(${n.r}, ${n.g}, ${n.b})`;case"hex":case"hex6":case"hex-6":return`#${tn(n.r)}${tn(n.g)}${tn(n.b)}`;case"hexa":case"hex8":case"hex-8":return`#${tn(n.r)}${tn(n.g)}${tn(n.b)}${tn(n.a*255)}`;case"hsl":return`hsl(${t.h.toFixed(2)}, ${t.s.toFixed(2)}%, ${t.l.toFixed(2)}%)`;case"hsla":return`hsla(${t.h.toFixed(2)}, ${t.s.toFixed(2)}%, ${t.l.toFixed(2)}%, ${parseFloat(n.a.toFixed(3))})`;case"bgra":return n;case"raw":case"cpal":return Ph(n);default:throw new Error("Unknown color format: "+e)}}var Uh={parse:zx,make:Hx,getPaletteColor:ul,parseColor:Wr,formatColor:ls};function Wx(n,e){let t=e||new ss;return{configurable:!0,get:function(){return typeof t=="function"&&(t=t()),t},set:function(i){t=i}}}function Lt(n){this.bindConstructorValues(n)}Lt.prototype.bindConstructorValues=function(n){if(this.index=n.index||0,n.name===".notdef"?n.unicode=void 0:n.name===".null"&&(n.unicode=0),n.unicode===0&&n.name!==".null")throw new Error('The unicode value "0" is reserved for the glyph name ".null" and cannot be used by any other glyph.');this.name=n.name||null,this.unicode=n.unicode,this.unicodes=n.unicodes||(n.unicode!==void 0?[n.unicode]:[]),"xMin"in n&&(this.xMin=n.xMin),"yMin"in n&&(this.yMin=n.yMin),"xMax"in n&&(this.xMax=n.xMax),"yMax"in n&&(this.yMax=n.yMax),"advanceWidth"in n&&(this.advanceWidth=n.advanceWidth),"leftSideBearing"in n&&(this.leftSideBearing=n.leftSideBearing),"points"in n&&(this.points=n.points),Object.defineProperty(this,"path",Wx(this,n.path))};Lt.prototype.addUnicode=function(n){this.unicodes.length===0&&(this.unicode=n),this.unicodes.push(n)};Lt.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};Lt.prototype.getPath=function(n,e,t,i,s){n=n!==void 0?n:0,e=e!==void 0?e:0,t=t!==void 0?t:72,i=Object.assign({},s&&s.defaultRenderOptions,i);let r,a,o=i.xScale,l=i.yScale;const c=1/(this.path.unitsPerEm||1e3)*t;let u=this;s&&s.variation&&(u=s.variation.getTransform(this,i.variation),r=u.path.commands),i.hinting&&s&&s.hinting&&(a=u.path&&s.hinting.exec(u,t,i)),a?(r=s.hinting.getCommands(a),n=Math.round(n),e=Math.round(e),o=l=1):(r=u.path.commands,o===void 0&&(o=c),l===void 0&&(l=c));const f=new ss;if(i.drawSVG){const h=this.getSvgImage(s);if(h){const d=new ss;return d._image={image:h.image,x:n+h.leftSideBearing*c,y:e-h.baseline*c,width:h.image.width*c,height:h.image.height*c},f._layers=[d],f}}if(i.drawLayers){const h=this.getLayers(s);if(h&&h.length){f._layers=[];for(let d=0;d<h.length;d+=1){const p=h[d];let v=ul(s,p.paletteIndex,i.usePalette);v==="currentColor"?v=i.fill||"black":v=ls(v,i.colorFormat||"rgba"),i=Object.assign({},i,{fill:v}),f._layers.push(this.getPath.call(p.glyph,n,e,t,i,s))}return f}}f.fill=i.fill||this.path.fill,f.stroke=this.path.stroke,f.strokeWidth=this.path.strokeWidth*c;for(let h=0;h<r.length;h+=1){const d=r[h];d.type==="M"?f.moveTo(n+d.x*o,e+-d.y*l):d.type==="L"?f.lineTo(n+d.x*o,e+-d.y*l):d.type==="Q"?f.quadraticCurveTo(n+d.x1*o,e+-d.y1*l,n+d.x*o,e+-d.y*l):d.type==="C"?f.curveTo(n+d.x1*o,e+-d.y1*l,n+d.x2*o,e+-d.y2*l,n+d.x*o,e+-d.y*l):d.type==="Z"&&f.stroke&&f.strokeWidth&&f.closePath()}return f};Lt.prototype.getLayers=function(n){if(!n)throw new Error("The font object is required to read the colr/cpal tables in order to get the layers.");return n.layers.get(this.index)};Lt.prototype.getSvgImage=function(n){if(!n)throw new Error("The font object is required to read the svg table in order to get the image.");return n.svgImages.get(this.index)};Lt.prototype.getContours=function(n=null){if(this.points===void 0&&!n)return[];const e=[];let t=[],i=n||this.points;for(let s=0;s<i.length;s+=1){const r=i[s];t.push(r),r.lastPointOfContour&&(e.push(t),t=[])}return Se.argument(t.length===0,"There are still points left in the current contour."),e};Lt.prototype.getMetrics=function(){const n=this.path.commands,e=[],t=[];for(let s=0;s<n.length;s+=1){const r=n[s];r.type!=="Z"&&(e.push(r.x),t.push(r.y)),(r.type==="Q"||r.type==="C")&&(e.push(r.x1),t.push(r.y1)),r.type==="C"&&(e.push(r.x2),t.push(r.y2))}const i={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,t),leftSideBearing:this.leftSideBearing};return isFinite(i.xMin)||(i.xMin=0),isFinite(i.xMax)||(i.xMax=this.advanceWidth),isFinite(i.yMin)||(i.yMin=0),isFinite(i.yMax)||(i.yMax=0),i.rightSideBearing=this.advanceWidth-i.leftSideBearing-(i.xMax-i.xMin),i};Lt.prototype.draw=function(n,e,t,i,s,r){s=Object.assign({},r&&r.defaultRenderOptions,s),this.getPath(e,t,i,s,r).draw(n)};Lt.prototype.drawPoints=function(n,e,t,i,s,r){if(s=Object.assign({},r&&r.defaultRenderOptions,s),s.drawLayers){const h=this.getLayers(r);if(h&&h.length){for(let d=0;d<h.length;d+=1)h[d].glyph.index!==this.index&&this.drawPoints.call(h[d].glyph,n,e,t,i);return}}function a(h,d,p,v){n.beginPath();for(let m=0;m<h.length;m+=1)n.moveTo(d+h[m].x*v,p+h[m].y*v),n.arc(d+h[m].x*v,p+h[m].y*v,2,0,Math.PI*2,!1);n.fill()}e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:24;const o=1/this.path.unitsPerEm*i,l=[],c=[];let f=this.path.commands;r&&r.variation&&(f=r.variation.getTransform(this,s.variation).path.commands);for(let h=0;h<f.length;h+=1){const d=f[h];d.x!==void 0&&l.push({x:d.x,y:-d.y}),d.x1!==void 0&&c.push({x:d.x1,y:-d.y1}),d.x2!==void 0&&c.push({x:d.x2,y:-d.y2})}n.fillStyle="blue",a(l,e,t,o),n.fillStyle="red",a(c,e,t,o)};Lt.prototype.drawMetrics=function(n,e,t,i){let s;e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:24,s=1/this.path.unitsPerEm*i,n.lineWidth=1,n.strokeStyle="black",ui.line(n,e,-1e4,e,1e4),ui.line(n,-1e4,t,1e4,t);const r=this.xMin||0;let a=this.yMin||0;const o=this.xMax||0;let l=this.yMax||0;const c=this.advanceWidth||0;n.strokeStyle="blue",ui.line(n,e+r*s,-1e4,e+r*s,1e4),ui.line(n,e+o*s,-1e4,e+o*s,1e4),ui.line(n,-1e4,t+-a*s,1e4,t+-a*s),ui.line(n,-1e4,t+-l*s,1e4,t+-l*s),n.strokeStyle="green",ui.line(n,e+c*s,-1e4,e+c*s,1e4)};Lt.prototype.toPathData=function(n,e){n=Object.assign({},{variation:e&&e.defaultRenderOptions.variation},n);let t=this;e&&e.variation&&(t=e.variation.getTransform(this,n.variation));let i=t.points&&n.pointsTransform?n.pointsTransform(t.points):t.path;return n.pathTransform&&(i=n.pathTransform(i)),i.toPathData(n)};Lt.prototype.fromSVG=function(n,e={}){return this.path.fromSVG(n,e)};Lt.prototype.toSVG=function(n,e){const t=this.toPathData.apply(this,[n,e]);return this.path.toSVG(n,t)};Lt.prototype.toDOMElement=function(n,e){n=Object.assign({},{variation:e&&e.defaultRenderOptions.variation},n);let t=this.path;return e&&e.variation&&(t=e.variation.getTransform(this,n.variation).path),t.toDOMElement(n)};var Ls=Lt;function Vi(n,e,t){Object.defineProperty(n,e,{get:function(){return typeof n[t]>"u"&&n.path,n[t]},set:function(i){n[t]=i},enumerable:!0,configurable:!0})}function ta(n,e){if(this.font=n,this.glyphs={},Array.isArray(e))for(let t=0;t<e.length;t++){const i=e[t];i.path.unitsPerEm=n.unitsPerEm,this.glyphs[t]=i}this.length=e&&e.length||0}typeof Symbol<"u"&&Symbol.iterator&&(ta.prototype[Symbol.iterator]=function(){let n=-1;return{next:(function(){n++;const e=n>=this.length-1;return{value:this.get(n),done:e}}).bind(this)}});ta.prototype.get=function(n){if(this.font._push&&this.glyphs[n]===void 0){this.font._push(n),typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());let e=this.glyphs[n],t=this.font._IndexToUnicodeMap[n];if(t)for(let i=0;i<t.unicodes.length;i++)e.addUnicode(t.unicodes[i]);this.font.cffEncoding?e.name=this.font.cffEncoding.charset[n]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(n)),this.glyphs[n].advanceWidth=this.font._hmtxTableData[n].advanceWidth,this.glyphs[n].leftSideBearing=this.font._hmtxTableData[n].leftSideBearing}else typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());return this.glyphs[n]};ta.prototype.push=function(n,e){this.glyphs[n]=e,this.length++};function Xx(n,e){return new Ls({index:e,font:n})}function qx(n,e,t,i,s,r){return function(){const a=new Ls({index:e,font:n});return a.path=function(){t(a,i,s);const o=r(n.glyphs,a);return o.unitsPerEm=n.unitsPerEm,o},Vi(a,"numberOfContours","_numberOfContours"),Vi(a,"xMin","_xMin"),Vi(a,"xMax","_xMax"),Vi(a,"yMin","_yMin"),Vi(a,"yMax","_yMax"),Vi(a,"points","_points"),a}}function Yx(n,e,t,i,s){return function(){const r=new Ls({index:e,font:n});return r.path=function(){const a=t(n,r,i,s);return a.unitsPerEm=n.unitsPerEm,a},r}}var _n={GlyphSet:ta,glyphLoader:Xx,ttfGlyphLoader:qx,cffGlyphLoader:Yx};function Ih(n,e){if(n===e)return!0;if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t+=1)if(!Ih(n[t],e[t]))return!1;return!0}else return!1}var Gc=10;function Xr(n){let e;return n.length<1240?e=107:n.length<33900?e=1131:e=32768,e}function pn(n,e,t,i){const s=[],r=[],a=i>1?oe.getULong(n,e):oe.getCard16(n,e),o=i>1?4:2;let l,c;if(a!==0){const u=oe.getByte(n,e+o);l=e+(a+1)*u+o;let f=e+o+1;for(let h=0;h<a+1;h+=1)s.push(oe.getOffset(n,f,u)),f+=u;c=l+s[a]}else c=e+o;for(let u=0;u<s.length-1;u+=1){let f=oe.getBytes(n,l+s[u],l+s[u+1]);t&&(f=t(f,n,e,i)),r.push(f)}return{objects:r,startOffset:e,endOffset:c}}function jx(n,e,t){const i=[],s=t>1?oe.getULong(n,e):oe.getCard16(n,e),r=t>1?4:2;let a,o;if(s!==0){const l=oe.getByte(n,e+r);a=e+(s+1)*l+r;let c=e+r+1;for(let u=0;u<s+1;u+=1)i.push(oe.getOffset(n,c,l)),c+=l;o=a+i[s]}else o=e+r;return{offsets:i,startOffset:e,endOffset:o}}function $x(n,e,t,i,s,r){const a=r>1?oe.getULong(t,i):oe.getCard16(t,i),o=r>1?4:2;let l=0;if(a!==0){const u=oe.getByte(t,i+o);l=i+(a+1)*u+o}return oe.getBytes(t,l+e[n],l+e[n+1])}function Zx(n){let e="";const i=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];for(;;){const s=n.parseByte(),r=s>>4,a=s&15;if(r===15||(e+=i[r],a===15))break;e+=i[a]}return parseFloat(e)}function Kx(n,e){let t,i,s,r;if(e===28)return t=n.parseByte(),i=n.parseByte(),t<<8|i;if(e===29)return t=n.parseByte(),i=n.parseByte(),s=n.parseByte(),r=n.parseByte(),t<<24|i<<16|s<<8|r;if(e===30)return Zx(n);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return t=n.parseByte(),(e-247)*256+t+108;if(e>=251&&e<=254)return t=n.parseByte(),-(e-251)*256-t-108;throw new Error("Invalid b0 "+e)}function Jx(n){const e={};for(let t=0;t<n.length;t+=1){const i=n[t][0],s=n[t][1];let r;if(s.length===1?r=s[0]:r=s,Object.prototype.hasOwnProperty.call(e,i)&&!isNaN(e[i]))throw new Error("Object "+e+" already has key "+i);e[i]=r}return e}function hl(n,e,t,i){e=e!==void 0?e:0;const s=new oe.Parser(n,e),r=[];let a=[];t=t!==void 0?t:n.byteLength;let o=i<2?22:28;for(;s.relativeOffset<t;){let l=s.parseByte();if(l<o){if(l===12&&(l=1200+s.parseByte()),i>1&&l===23){l_(a);continue}r.push([l,a]),a=[]}else a.push(Kx(s,l))}return Jx(r)}function Cs(n,e){return e<=390?e=Cr[e]:n?e=n[e-391]:e=void 0,e}function fl(n,e,t){const i={};let s;for(let r=0;r<e.length;r+=1){const a=e[r];if(Array.isArray(a.type)){const o=[];o.length=a.type.length;for(let l=0;l<a.type.length;l++)s=n[a.op]!==void 0?n[a.op][l]:void 0,s===void 0&&(s=a.value!==void 0&&a.value[l]!==void 0?a.value[l]:null),a.type[l]==="SID"&&(s=Cs(t,s)),o[l]=s;i[a.name]=o}else s=n[a.op],s===void 0&&(s=a.value!==void 0?a.value:null),a.type==="SID"&&(s=Cs(t,s)),i[a.name]=s}return i}function Qx(n,e){const t={};if(t.formatMajor=oe.getCard8(n,e),t.formatMinor=oe.getCard8(n,e+1),t.formatMajor>2)throw new Error(`Unsupported CFF table version ${t.formatMajor}.${t.formatMinor}`);return t.size=oe.getCard8(n,e+2),t.formatMajor<2?(t.offsetSize=oe.getCard8(n,e+3),t.startOffset=e,t.endOffset=e+4):(t.topDictLength=oe.getCard16(n,e+3),t.endOffset=e+8),t}var Oh=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],e_=[{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"charStrings",op:17,type:"offset"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"vstore",op:24,type:"offset"}],Fh=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}],t_=[{name:"blueValues",op:6,type:"delta"},{name:"otherBlues",op:7,type:"delta"},{name:"familyBlues",op:7,type:"delta"},{name:"familyBlues",op:8,type:"delta"},{name:"familyOtherBlues",op:9,type:"delta"},{name:"blueScale",op:1209,type:"number",value:.039625},{name:"blueShift",op:1210,type:"number",value:7},{name:"blueFuzz",op:1211,type:"number",value:1},{name:"stdHW",op:10,type:"number"},{name:"stdVW",op:11,type:"number"},{name:"stemSnapH",op:1212,type:"number"},{name:"stemSnapV",op:1213,type:"number"},{name:"languageGroup",op:1217,type:"number",value:0},{name:"expansionFactor",op:1218,type:"number",value:.06},{name:"vsindex",op:22,type:"number",value:0},{name:"subrs",op:19,type:"offset"}],n_=[{name:"private",op:18,type:["number","offset"],value:[0,0]}];function i_(n,e,t,i){const s=hl(n,e,n.byteLength,i);return fl(s,i>1?e_:Oh,t)}function dl(n,e,t,i,s){const r=hl(n,e,t,s);return fl(r,s>1?t_:Fh,i)}function s_(n,e,t){const i=hl(n,e,void 0,t);return fl(i,n_)}function r_(n,e,t){const i=[];for(let s=0;s<t.length;s++){const r=new DataView(new Uint8Array(t[s]).buffer),a=s_(r,0,2),o=a.private[0],l=a.private[1];if(o!==0&&l!==0){const c=dl(n,l+e,o,[],2);if(c.subrs){const u=l+c.subrs,f=pn(n,u+e,void 0,2);a._subrs=f.objects,a._subrsBias=Xr(a._subrs)}a._privateDict=c}i.push(a)}return i}function Ba(n,e,t,i,s){const r=[];for(let a=0;a<t.length;a+=1){const o=new DataView(new Uint8Array(t[a]).buffer),l=i_(o,0,i,s);l._subrs=[],l._subrsBias=0,l._defaultWidthX=0,l._nominalWidthX=0;const c=s<2?l.private[0]:0,u=s<2?l.private[1]:0;if(c!==0&&u!==0){const f=dl(n,u+e,c,i,s);if(l._defaultWidthX=f.defaultWidthX,l._nominalWidthX=f.nominalWidthX,f.subrs!==0){const h=u+f.subrs,d=pn(n,h+e,void 0,s);l._subrs=d.objects,l._subrsBias=Xr(l._subrs)}l._privateDict=f}r.push(l)}return r}function a_(n,e,t,i,s){let r,a;const o=new oe.Parser(n,e);t-=1;const l=[".notdef"],c=o.parseCard8();if(c===0)for(let u=0;u<t;u+=1)r=o.parseSID(),s?l.push(r):l.push(Cs(i,r)||r);else if(c===1)for(;l.length<=t;){r=o.parseSID(),a=o.parseCard8();for(let u=0;u<=a;u+=1)s?l.push("cid"+("00000"+r).slice(-5)):l.push(Cs(i,r)||r),r+=1}else if(c===2)for(;l.length<=t;){r=o.parseSID(),a=o.parseCard16();for(let u=0;u<=a;u+=1)s?l.push("cid"+("00000"+r).slice(-5)):l.push(Cs(i,r)||r),r+=1}else throw new Error("Unknown charset format "+c);return l}function o_(n,e){let t;const i={},s=new oe.Parser(n,e),r=s.parseCard8();if(r===0){const a=s.parseCard8();for(let o=0;o<a;o+=1)t=s.parseCard8(),i[t]=o}else if(r===1){const a=s.parseCard8();t=1;for(let o=0;o<a;o+=1){const l=s.parseCard8(),c=s.parseCard8();for(let u=l;u<=l+c;u+=1)i[u]=t,t+=1}}else throw new Error("Unknown encoding format "+r);return i}function l_(n){let e=n.pop();for(;n.length>e;)n.pop()}function Nh(n,e){const t=n.tables.cff&&n.tables.cff.topDict&&n.tables.cff.topDict.paintType||0;return t===2&&(e.fill=null,e.stroke="black",e.strokeWidth=n.tables.cff.topDict.strokeWidth||0),t}function Ho(n,e,t,i,s){let r,a,o,l;const c=new ss,u=[];let f=0,h=!1,d=!1,p=0,v=0,m,g,T,S,y=0,R=[],C,A=0;const L=n.tables.cff2||n.tables.cff;if(T=L.topDict._defaultWidthX,S=L.topDict._nominalWidthX,s=s||n.variation&&n.variation.get(),e.getBlendPath||(e.getBlendPath=function(N){return Ho(n,e,t,i,N)}),n.isCIDFont||i>1){const N=L.topDict._fdSelect?L.topDict._fdSelect[e.index]:0,k=L.topDict._fdArray[N];m=k._subrs,g=k._subrsBias,i>1?(R=L.topDict._vstore.itemVariationStore,y=k._privateDict.vsindex):(T=k._defaultWidthX,S=k._nominalWidthX)}else m=L.topDict._subrs,g=L.topDict._subrsBias;const M=Nh(n,c);let _=T;function w(N,k){d&&M!==2&&c.closePath(),c.moveTo(N,k),d=!0}function W(){let N;N=(u.length&1)!==0,N&&!h&&(_=u.shift()+S),f+=u.length>>1,u.length=0,h=!0}function D(N){let k,q,K,V,re,ae,me,Le,Oe,Y,J,ue,te=0;for(;te<N.length;){let P=N[te];switch(te+=1,P){case 1:W();break;case 3:W();break;case 4:u.length>1&&!h&&(_=u.shift()+S,h=!0),v+=u.pop(),w(p,v);break;case 5:for(;u.length>0;)p+=u.shift(),v+=u.shift(),c.lineTo(p,v);break;case 6:for(;u.length>0&&(p+=u.shift(),c.lineTo(p,v),u.length!==0);)v+=u.shift(),c.lineTo(p,v);break;case 7:for(;u.length>0&&(v+=u.shift(),c.lineTo(p,v),u.length!==0);)p+=u.shift(),c.lineTo(p,v);break;case 8:for(;u.length>0;)r=p+u.shift(),a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),p=o+u.shift(),v=l+u.shift(),c.curveTo(r,a,o,l,p,v);break;case 10:if(re=u.pop()+g,ae=m[re],ae){if(A>=Gc){console.warn("CFF charstring subroutine call depth exceeded, skipping callsubr");break}A++,D(ae),A--}break;case 11:if(i>1){console.error("CFF CharString operator return (11) is not supported in CFF2");break}return;case 12:switch(P=N[te],te+=1,P){case 35:r=p+u.shift(),a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),me=o+u.shift(),Le=l+u.shift(),Oe=me+u.shift(),Y=Le+u.shift(),J=Oe+u.shift(),ue=Y+u.shift(),p=J+u.shift(),v=ue+u.shift(),u.shift(),c.curveTo(r,a,o,l,me,Le),c.curveTo(Oe,Y,J,ue,p,v);break;case 34:r=p+u.shift(),a=v,o=r+u.shift(),l=a+u.shift(),me=o+u.shift(),Le=l,Oe=me+u.shift(),Y=l,J=Oe+u.shift(),ue=v,p=J+u.shift(),c.curveTo(r,a,o,l,me,Le),c.curveTo(Oe,Y,J,ue,p,v);break;case 36:r=p+u.shift(),a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),me=o+u.shift(),Le=l,Oe=me+u.shift(),Y=l,J=Oe+u.shift(),ue=Y+u.shift(),p=J+u.shift(),c.curveTo(r,a,o,l,me,Le),c.curveTo(Oe,Y,J,ue,p,v);break;case 37:r=p+u.shift(),a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),me=o+u.shift(),Le=l+u.shift(),Oe=me+u.shift(),Y=Le+u.shift(),J=Oe+u.shift(),ue=Y+u.shift(),Math.abs(J-p)>Math.abs(ue-v)?p=J+u.shift():v=ue+u.shift(),c.curveTo(r,a,o,l,me,Le),c.curveTo(Oe,Y,J,ue,p,v);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+P),u.length=0}break;case 14:if(i>1){console.error("CFF CharString operator endchar (14) is not supported in CFF2");break}if(u.length>=4){const vt=zo[u.pop()],ke=zo[u.pop()],Xe=u.pop(),we=u.pop();if(vt&&ke){e.isComposite=!0,e.components=[];const it=n.cffEncoding.charset.indexOf(vt),Re=n.cffEncoding.charset.indexOf(ke);e.components.push({glyphIndex:Re,dx:0,dy:0}),e.components.push({glyphIndex:it,dx:we,dy:Xe}),c.extend(n.glyphs.get(Re).path);const E=n.glyphs.get(it),x=JSON.parse(JSON.stringify(E.path.commands));for(let B=0;B<x.length;B+=1){const j=x[B];j.type!=="Z"&&(j.x+=we,j.y+=Xe),(j.type==="Q"||j.type==="C")&&(j.x1+=we,j.y1+=Xe),j.type==="C"&&(j.x2+=we,j.y2+=Xe)}c.extend(x)}}else u.length>0&&!h&&(_=u.shift()+S,h=!0);d&&M!==2&&(c.closePath(),d=!1);break;case 15:if(i<2){console.error("CFF2 CharString operator vsindex (15) is not supported in CFF");break}y=u.pop();break;case 16:if(i<2){console.error("CFF2 CharString operator blend (16) is not supported in CFF");break}C||(C=n.variation&&s&&n.variation.process.getBlendVector(R,y,s));var le=u.pop(),Ee=C?C.length:R.itemVariationSubtables[y].regionIndexes.length,Pe=le*Ee,qe=u.length-Pe,Ne=qe-le;if(C)for(let vt=0;vt<le;vt++){var ut=u[Ne+vt];for(let ke=0;ke<Ee;ke++)ut+=C[ke]*u[qe++];u[Ne+vt]=ut}for(;Pe--;)u.pop();break;case 18:W();break;case 19:case 20:W(),te+=f+7>>3;break;case 21:u.length>2&&!h&&(_=u.shift()+S,h=!0),v+=u.pop(),p+=u.pop(),w(p,v);break;case 22:u.length>1&&!h&&(_=u.shift()+S,h=!0),p+=u.pop(),w(p,v);break;case 23:W();break;case 24:for(;u.length>2;)r=p+u.shift(),a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),p=o+u.shift(),v=l+u.shift(),c.curveTo(r,a,o,l,p,v);p+=u.shift(),v+=u.shift(),c.lineTo(p,v);break;case 25:for(;u.length>6;)p+=u.shift(),v+=u.shift(),c.lineTo(p,v);r=p+u.shift(),a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),p=o+u.shift(),v=l+u.shift(),c.curveTo(r,a,o,l,p,v);break;case 26:for(u.length&1&&(p+=u.shift());u.length>0;)r=p,a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),p=o,v=l+u.shift(),c.curveTo(r,a,o,l,p,v);break;case 27:for(u.length&1&&(v+=u.shift());u.length>0;)r=p+u.shift(),a=v,o=r+u.shift(),l=a+u.shift(),p=o+u.shift(),v=l,c.curveTo(r,a,o,l,p,v);break;case 28:k=N[te],q=N[te+1],u.push((k<<24|q<<16)>>16),te+=2;break;case 29:if(re=u.pop()+n.gsubrsBias,ae=n.gsubrs[re],ae){if(A>=Gc){console.warn("CFF charstring subroutine call depth exceeded, skipping callgsubr");break}A++,D(ae),A--}break;case 30:for(;u.length>0&&(r=p,a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),p=o+u.shift(),v=l+(u.length===1?u.shift():0),c.curveTo(r,a,o,l,p,v),u.length!==0);)r=p+u.shift(),a=v,o=r+u.shift(),l=a+u.shift(),v=l+u.shift(),p=o+(u.length===1?u.shift():0),c.curveTo(r,a,o,l,p,v);break;case 31:for(;u.length>0&&(r=p+u.shift(),a=v,o=r+u.shift(),l=a+u.shift(),v=l+u.shift(),p=o+(u.length===1?u.shift():0),c.curveTo(r,a,o,l,p,v),u.length!==0);)r=p,a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),p=o+u.shift(),v=l+(u.length===1?u.shift():0),c.curveTo(r,a,o,l,p,v);break;default:P<32?console.log("Glyph "+e.index+": unknown operator "+P):P<247?u.push(P-139):P<251?(k=N[te],te+=1,u.push((P-247)*256+k+108)):P<255?(k=N[te],te+=1,u.push(-(P-251)*256-k-108)):(k=N[te],q=N[te+1],K=N[te+2],V=N[te+3],te+=4,u.push((k<<24|q<<16|K<<8|V)/65536))}}}return D(t),n.variation&&s&&(c.commands=c.commands.map(N=>{const k=Object.keys(N);for(let q=0;q<k.length;q++){const K=k[q];K!=="type"&&(N[K]=Math.round(N[K]))}return N})),h&&(e.advanceWidth=_),c}function Vc(n,e,t,i,s){const r=[];let a;const o=new oe.Parser(n,e),l=o.parseCard8();if(l===0)for(let c=0;c<t;c++){if(a=o.parseCard8(),a>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+a+" (FD count "+i+")");r.push(a)}else if(l===3||s>1&&l===4){const c=l===4?o.parseULong():o.parseCard16();let u=l===4?o.parseULong():o.parseCard16();if(u!==0)throw new Error(`CFF Table CID Font FDSelect format ${l} range has bad initial GID ${u}`);let f;for(let h=0;h<c;h++){if(a=l===4?o.parseUShort():o.parseCard8(),f=l===4?o.parseULong():o.parseCard16(),a>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+a+" (FD count "+i+")");if(f>t)throw new Error(`CFF Table CID Font FDSelect format ${s} range has bad GID ${f}`);for(;u<f;u++)r.push(a);u=f}if(f!==t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final (Sentinal) GID "+f)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+l);return r}function c_(n,e,t,i){let s;const r=Qx(n,e);r.formatMajor===2?s=t.tables.cff2={}:s=t.tables.cff={};const a=r.formatMajor>1?null:pn(n,r.endOffset,oe.bytesToString),o=r.formatMajor>1?null:pn(n,a.endOffset),l=r.formatMajor>1?null:pn(n,o.endOffset,oe.bytesToString),c=pn(n,r.formatMajor>1?e+r.size+r.topDictLength:l.endOffset,void 0,r.formatMajor);t.gsubrs=c.objects,t.gsubrsBias=Xr(t.gsubrs);let u;if(r.formatMajor>1){const h=e+r.size,d=oe.getBytes(n,h,h+r.topDictLength);u=Ba(n,0,[d],void 0,r.formatMajor)[0]}else{const h=Ba(n,e,o.objects,l.objects,r.formatMajor);if(h.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+h.length);u=h[0]}if(s.topDict=u,u._privateDict&&(t.defaultWidthX=u._privateDict.defaultWidthX,t.nominalWidthX=u._privateDict.nominalWidthX),r.formatMajor<2&&u.ros[0]!==void 0&&u.ros[1]!==void 0&&(t.isCIDFont=!0),r.formatMajor>1){let h=u.fdArray,d=u.fdSelect;if(!h)throw new Error("This is a CFF2 font, but FDArray information is missing");const p=pn(n,e+h,null,r.formatMajor),v=r_(n,e,p.objects);u._fdArray=v,d&&(u._fdSelect=Vc(n,e+d,t.numGlyphs,v.length,r.formatMajor))}else if(t.isCIDFont){let h=u.fdArray,d=u.fdSelect;if(h===0||d===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");h+=e;const p=pn(n,h),v=Ba(n,e,p.objects,l.objects,r.formatMajor);u._fdArray=v,d+=e,u._fdSelect=Vc(n,d,t.numGlyphs,v.length,r.formatMajor)}if(r.formatMajor<2){const h=e+u.private[1],d=dl(n,h,u.private[0],l.objects,r.formatMajor);if(t.defaultWidthX=d.defaultWidthX,t.nominalWidthX=d.nominalWidthX,d.subrs!==0){const p=h+d.subrs,v=pn(n,p);t.subrs=v.objects,t.subrsBias=Xr(t.subrs)}else t.subrs=[],t.subrsBias=0}let f;if(i.lowMemory?(f=jx(n,e+u.charStrings,r.formatMajor),t.nGlyphs=f.offsets.length-(r.formatMajor>1?1:0)):(f=pn(n,e+u.charStrings,null,r.formatMajor),t.nGlyphs=f.objects.length),r.formatMajor>1&&t.tables.maxp&&t.nGlyphs!==t.tables.maxp.numGlyphs&&console.error(`Glyph count in the CFF2 table (${t.nGlyphs}) must correspond to the glyph count in the maxp table (${t.tables.maxp.numGlyphs})`),r.formatMajor<2){let h=[],d=[];u.charset===0?h=Px:u.charset===1?h=Ux:u.charset===2?h=Ix:h=a_(n,e+u.charset,t.nGlyphs,l.objects,t.isCIDFont),u.encoding===0?d=zo:u.encoding===1?d=Ox:d=o_(n,e+u.encoding),t.cffEncoding=new Dh(d,h),t.encoding=t.encoding||t.cffEncoding}if(t.glyphs=new _n.GlyphSet(t),i.lowMemory)t._push=function(h){const d=$x(h,f.offsets,n,e+u.charStrings,void 0,r.formatMajor);t.glyphs.push(h,_n.cffGlyphLoader(t,h,Ho,d,r.formatMajor))};else for(let h=0;h<t.nGlyphs;h+=1){const d=f.objects[h];t.glyphs.push(h,_n.cffGlyphLoader(t,h,Ho,d,r.formatMajor))}if(u.vstore){const h=new oe.Parser(n,e+u.vstore);u._vstore=h.parseVariationStore()}}function kh(n,e){let t,i=Cr.indexOf(n);return i>=0&&(t=i),i=e.indexOf(n),i>=0?t=i+Cr.length:(t=Cr.length+e.length,e.push(n)),t}function u_(){return new Q.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function h_(n){const e=new Q.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(let t=0;t<n.length;t+=1)e.names.push({name:"name_"+t,type:"NAME",value:n[t]});return e}function Bh(n,e,t){const i={};for(let s=0;s<n.length;s+=1){const r=n[s];let a=e[r.name];a!==void 0&&!Ih(a,r.value)&&(r.type==="SID"&&(a=kh(a,t)),i[r.op]={name:r.name,type:r.type,value:a})}return i}function Wc(n,e,t){const i=new Q.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return i.dict=Bh(Oh,n,e),i}function Xc(n){const e=new Q.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:n}],e}function f_(n){const e=new Q.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(let t=0;t<n.length;t+=1)e.strings.push({name:"string_"+t,type:"STRING",value:n[t]});return e}function d_(){return new Q.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function p_(n,e){const t=new Q.Record("Charsets",[{name:"format",type:"Card8",value:0}]);for(let i=0;i<n.length;i+=1){const s=n[i],r=kh(s,e);t.fields.push({name:"glyph_"+i,type:"SID",value:r})}return t}function m_(n,e){const t=[],i=n.path;t.push({name:"width",type:"NUMBER",value:n.advanceWidth});let s=0,r=0;for(let a=0;a<i.commands.length;a+=1){let o,l,c=i.commands[a];if(c.type==="Q"){const u=.3333333333333333,f=2/3;c={type:"C",x:c.x,y:c.y,x1:Math.round(u*s+f*c.x1),y1:Math.round(u*r+f*c.y1),x2:Math.round(u*c.x+f*c.x1),y2:Math.round(u*c.y+f*c.y1)}}if(c.type==="M")o=Math.round(c.x-s),l=Math.round(c.y-r),t.push({name:"dx",type:"NUMBER",value:o}),t.push({name:"dy",type:"NUMBER",value:l}),t.push({name:"rmoveto",type:"OP",value:21}),s=Math.round(c.x),r=Math.round(c.y);else if(c.type==="L")o=Math.round(c.x-s),l=Math.round(c.y-r),t.push({name:"dx",type:"NUMBER",value:o}),t.push({name:"dy",type:"NUMBER",value:l}),t.push({name:"rlineto",type:"OP",value:5}),s=Math.round(c.x),r=Math.round(c.y);else if(c.type==="C"){const u=Math.round(c.x1-s),f=Math.round(c.y1-r),h=Math.round(c.x2-c.x1),d=Math.round(c.y2-c.y1);o=Math.round(c.x-c.x2),l=Math.round(c.y-c.y2),t.push({name:"dx1",type:"NUMBER",value:u}),t.push({name:"dy1",type:"NUMBER",value:f}),t.push({name:"dx2",type:"NUMBER",value:h}),t.push({name:"dy2",type:"NUMBER",value:d}),t.push({name:"dx",type:"NUMBER",value:o}),t.push({name:"dy",type:"NUMBER",value:l}),t.push({name:"rrcurveto",type:"OP",value:8}),s=Math.round(c.x),r=Math.round(c.y)}}return t.push({name:"endchar",type:"OP",value:14}),t}function g_(n,e){const t=new Q.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]);for(let i=0;i<n.length;i+=1){const s=n.get(i),r=m_(s);t.charStrings.push({name:s.name,type:"CHARSTRING",value:r})}return t}function v_(n,e,t){const i=new Q.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return i.dict=Bh(Fh,n,e),i}function x_(n,e){const t=new Q.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),i=1/e.unitsPerEm,s={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[i,0,0,i,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},r=e&&e.topDict||{};r.paintType&&(s.paintType=r.paintType,s.strokeWidth=r.strokeWidth||0);const a={},o=[];let l;for(let h=1;h<n.length;h+=1)l=n.get(h),o.push(l.name);const c=[];t.header=u_(),t.nameIndex=h_([e.postScriptName]);let u=Wc(s,c);t.topDictIndex=Xc(u),t.globalSubrIndex=d_(),t.charsets=p_(o,c),t.charStringsIndex=g_(n),t.privateDict=v_(a,c),t.stringIndex=f_(c);const f=t.header.sizeOf()+t.nameIndex.sizeOf()+t.topDictIndex.sizeOf()+t.stringIndex.sizeOf()+t.globalSubrIndex.sizeOf();return s.charset=f,s.encoding=0,s.charStrings=s.charset+t.charsets.sizeOf(),s.private[1]=s.charStrings+t.charStringsIndex.sizeOf(),u=Wc(s,c),t.topDictIndex=Xc(u),t}var Go={parse:c_,make:x_};function __(n,e){const t={},i=new oe.Parser(n,e);return t.version=i.parseVersion(),t.fontRevision=Math.round(i.parseFixed()*1e3)/1e3,t.checkSumAdjustment=i.parseULong(),t.magicNumber=i.parseULong(),Se.argument(t.magicNumber===1594834165,"Font header has wrong magic number."),t.flags=i.parseUShort(),t.unitsPerEm=i.parseUShort(),t.created=i.parseLongDateTime(),t.modified=i.parseLongDateTime(),t.xMin=i.parseShort(),t.yMin=i.parseShort(),t.xMax=i.parseShort(),t.yMax=i.parseShort(),t.macStyle=i.parseUShort(),t.lowestRecPPEM=i.parseUShort(),t.fontDirectionHint=i.parseShort(),t.indexToLocFormat=i.parseShort(),t.glyphDataFormat=i.parseShort(),t}function y_(n){const e=Math.round(new Date().getTime()/1e3)+2082844800;let t=e,i=n.macStyle||0;return n.createdTimestamp&&(t=n.createdTimestamp+2082844800),new Q.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:t},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:i},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],n)}var zh={parse:__,make:y_};function S_(n,e){const t={},i=new oe.Parser(n,e);return t.version=i.parseVersion(),t.ascender=i.parseShort(),t.descender=i.parseShort(),t.lineGap=i.parseShort(),t.advanceWidthMax=i.parseUShort(),t.minLeftSideBearing=i.parseShort(),t.minRightSideBearing=i.parseShort(),t.xMaxExtent=i.parseShort(),t.caretSlopeRise=i.parseShort(),t.caretSlopeRun=i.parseShort(),t.caretOffset=i.parseShort(),i.relativeOffset+=8,t.metricDataFormat=i.parseShort(),t.numberOfHMetrics=i.parseUShort(),t}function b_(n){return new Q.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],n)}var Hh={parse:S_,make:b_};function M_(n,e,t,i,s){let r,a;const o=new oe.Parser(n,e);for(let l=0;l<i;l+=1){l<t&&(r=o.parseUShort(),a=o.parseShort());const c=s.get(l);c.advanceWidth=r,c.leftSideBearing=a}}function T_(n,e,t,i,s){n._hmtxTableData={};let r,a;const o=new oe.Parser(e,t);for(let l=0;l<s;l+=1)l<i&&(r=o.parseUShort(),a=o.parseShort()),n._hmtxTableData[l]={advanceWidth:r,leftSideBearing:a}}function E_(n,e,t,i,s,r,a){a.lowMemory?T_(n,e,t,i,s):M_(e,t,i,s,r)}function A_(n){const e=new Q.Table("hmtx",[]);for(let t=0;t<n.length;t+=1){const i=n.get(t),s=i.advanceWidth||0,r=i.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+t,type:"USHORT",value:s}),e.fields.push({name:"leftSideBearing_"+t,type:"SHORT",value:r})}return e}var Gh={parse:E_,make:A_};function C_(n){const e=new Q.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:n.length}]);let t="";const i=12+n.length*4;for(let s=0;s<n.length;++s){let r=t.indexOf(n[s]);r<0&&(r=t.length,t+=n[s]),e.fields.push({name:"offset "+s,type:"USHORT",value:i+r}),e.fields.push({name:"length "+s,type:"USHORT",value:n[s].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),e}function w_(n,e){const t=new oe.Parser(n,e),i=t.parseULong();Se.argument(i===1,"Unsupported ltag table version."),t.skip("uLong",1);const s=t.parseULong(),r=[];for(let a=0;a<s;a++){let o="";const l=e+t.parseUShort(),c=t.parseUShort();for(let u=l;u<l+c;++u)o+=String.fromCharCode(n.getInt8(u));r.push(o)}return r}var Vh={make:C_,parse:w_};function R_(n,e){const t={},i=new oe.Parser(n,e);return t.version=i.parseVersion(),t.numGlyphs=i.parseUShort(),t.version===1&&(t.maxPoints=i.parseUShort(),t.maxContours=i.parseUShort(),t.maxCompositePoints=i.parseUShort(),t.maxCompositeContours=i.parseUShort(),t.maxZones=i.parseUShort(),t.maxTwilightPoints=i.parseUShort(),t.maxStorage=i.parseUShort(),t.maxFunctionDefs=i.parseUShort(),t.maxInstructionDefs=i.parseUShort(),t.maxStackElements=i.parseUShort(),t.maxSizeOfInstructions=i.parseUShort(),t.maxComponentElements=i.parseUShort(),t.maxComponentDepth=i.parseUShort()),t}function D_(n){return new Q.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:n}])}var Wh={parse:R_,make:D_},Vo=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function L_(n){for(let e=0;e<Vo.length;e+=1){const t=Vo[e];if(n>=t.begin&&n<t.end)return e}return-1}function P_(n,e){const t={},i=new oe.Parser(n,e);t.version=i.parseUShort(),t.xAvgCharWidth=i.parseShort(),t.usWeightClass=i.parseUShort(),t.usWidthClass=i.parseUShort(),t.fsType=i.parseUShort(),t.ySubscriptXSize=i.parseShort(),t.ySubscriptYSize=i.parseShort(),t.ySubscriptXOffset=i.parseShort(),t.ySubscriptYOffset=i.parseShort(),t.ySuperscriptXSize=i.parseShort(),t.ySuperscriptYSize=i.parseShort(),t.ySuperscriptXOffset=i.parseShort(),t.ySuperscriptYOffset=i.parseShort(),t.yStrikeoutSize=i.parseShort(),t.yStrikeoutPosition=i.parseShort(),t.sFamilyClass=i.parseShort(),t.panose=[];for(let s=0;s<10;s++)t.panose[s]=i.parseByte();return t.ulUnicodeRange1=i.parseULong(),t.ulUnicodeRange2=i.parseULong(),t.ulUnicodeRange3=i.parseULong(),t.ulUnicodeRange4=i.parseULong(),t.achVendID=String.fromCharCode(i.parseByte(),i.parseByte(),i.parseByte(),i.parseByte()),t.fsSelection=i.parseUShort(),t.usFirstCharIndex=i.parseUShort(),t.usLastCharIndex=i.parseUShort(),t.sTypoAscender=i.parseShort(),t.sTypoDescender=i.parseShort(),t.sTypoLineGap=i.parseShort(),t.usWinAscent=i.parseUShort(),t.usWinDescent=i.parseUShort(),t.version>=1&&(t.ulCodePageRange1=i.parseULong(),t.ulCodePageRange2=i.parseULong()),t.version>=2&&(t.sxHeight=i.parseShort(),t.sCapHeight=i.parseShort(),t.usDefaultChar=i.parseUShort(),t.usBreakChar=i.parseUShort(),t.usMaxContent=i.parseUShort()),t}function U_(n){return new Q.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],n)}var Wo={parse:P_,make:U_,unicodeRanges:Vo,getUnicodeRange:L_};function I_(n,e){const t={},i=new oe.Parser(n,e);switch(t.version=i.parseVersion(),t.italicAngle=i.parseFixed(),t.underlinePosition=i.parseShort(),t.underlineThickness=i.parseShort(),t.isFixedPitch=i.parseULong(),t.minMemType42=i.parseULong(),t.maxMemType42=i.parseULong(),t.minMemType1=i.parseULong(),t.maxMemType1=i.parseULong(),t.version){case 1:t.names=pi.slice();break;case 2:t.numberOfGlyphs=i.parseUShort(),t.glyphNameIndex=new Array(t.numberOfGlyphs);for(let s=0;s<t.numberOfGlyphs;s++)t.glyphNameIndex[s]=i.parseUShort();t.names=[];for(let s=0;s<t.numberOfGlyphs;s++)if(t.glyphNameIndex[s]>=pi.length){const r=i.parseChar();t.names.push(i.parseString(r))}break;case 2.5:t.numberOfGlyphs=i.parseUShort(),t.offset=new Array(t.numberOfGlyphs);for(let s=0;s<t.numberOfGlyphs;s++)t.offset[s]=i.parseChar();break}return t}function O_(n){const{italicAngle:e=Math.round((n.italicAngle||0)*65536),underlinePosition:t=0,underlineThickness:i=0,isFixedPitch:s=0,minMemType42:r=0,maxMemType42:a=0,minMemType1:o=0,maxMemType1:l=0}=n.tables.post||{};return new Q.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:e},{name:"underlinePosition",type:"FWORD",value:t},{name:"underlineThickness",type:"FWORD",value:i},{name:"isFixedPitch",type:"ULONG",value:s},{name:"minMemType42",type:"ULONG",value:r},{name:"maxMemType42",type:"ULONG",value:a},{name:"minMemType1",type:"ULONG",value:o},{name:"maxMemType1",type:"ULONG",value:l}])}var Xh={parse:I_,make:O_},ln=new Array(9);ln[1]=function(){const e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(I.coverage),deltaGlyphId:this.parseShort()};if(t===2)return{substFormat:2,coverage:this.parsePointer(I.coverage),substitute:this.parseOffset16List()};Se.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")};ln[2]=function(){const e=this.parseUShort();return Se.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(I.coverage),sequences:this.parseListOfLists()}};ln[3]=function(){const e=this.parseUShort();return Se.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(I.coverage),alternateSets:this.parseListOfLists()}};ln[4]=function(){const e=this.parseUShort();return Se.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(I.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var Ki={sequenceIndex:I.uShort,lookupListIndex:I.uShort};ln[5]=function(){const e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:t,coverage:this.parsePointer(I.coverage),ruleSets:this.parseListOfLists(function(){const i=this.parseUShort(),s=this.parseUShort();return{input:this.parseUShortList(i-1),lookupRecords:this.parseRecordList(s,Ki)}})};if(t===2)return{substFormat:t,coverage:this.parsePointer(I.coverage),classDef:this.parsePointer(I.classDef),classSets:this.parseListOfLists(function(){const i=this.parseUShort(),s=this.parseUShort();return{classes:this.parseUShortList(i-1),lookupRecords:this.parseRecordList(s,Ki)}})};if(t===3){const i=this.parseUShort(),s=this.parseUShort();return{substFormat:t,coverages:this.parseList(i,I.pointer(I.coverage)),lookupRecords:this.parseRecordList(s,Ki)}}Se.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};ln[6]=function(){const e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(I.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Ki)}})};if(t===2)return{substFormat:2,coverage:this.parsePointer(I.coverage),backtrackClassDef:this.parsePointer(I.classDef),inputClassDef:this.parsePointer(I.classDef),lookaheadClassDef:this.parsePointer(I.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Ki)}})};if(t===3)return{substFormat:3,backtrackCoverage:this.parseList(I.pointer(I.coverage)),inputCoverage:this.parseList(I.pointer(I.coverage)),lookaheadCoverage:this.parseList(I.pointer(I.coverage)),lookupRecords:this.parseRecordList(Ki)};Se.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};ln[7]=function(){const e=this.parseUShort();Se.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");const t=this.parseUShort(),i=new I(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:ln[t].call(i)}};ln[8]=function(){const e=this.parseUShort();return Se.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(I.coverage),backtrackCoverage:this.parseList(I.pointer(I.coverage)),lookaheadCoverage:this.parseList(I.pointer(I.coverage)),substitutes:this.parseUShortList()}};function F_(n,e){e=e||0;const t=new I(n,e),i=t.parseVersion(1);return Se.argument(i===1||i===1.1,"Unsupported GSUB table version."),i===1?{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(ln)}:{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(ln),variations:t.parseFeatureVariationsList()}}var Ei=new Array(9);Ei[1]=function(e){if(e.substFormat===1)return new Q.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Q.Coverage(e.coverage)},{name:"deltaGlyphID",type:"SHORT",value:e.deltaGlyphId}]);if(e.substFormat===2)return new Q.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new Q.Coverage(e.coverage)}].concat(Q.ushortList("substitute",e.substitute)));Se.fail("Lookup type 1 substFormat must be 1 or 2.")};Ei[2]=function(e){return Se.assert(e.substFormat===1,"Lookup type 2 substFormat must be 1."),new Q.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Q.Coverage(e.coverage)}].concat(Q.tableList("seqSet",e.sequences,function(t){return new Q.Table("sequenceSetTable",Q.ushortList("sequence",t))})))};Ei[3]=function(e){return Se.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new Q.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Q.Coverage(e.coverage)}].concat(Q.tableList("altSet",e.alternateSets,function(t){return new Q.Table("alternateSetTable",Q.ushortList("alternate",t))})))};Ei[4]=function(e){return Se.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new Q.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Q.Coverage(e.coverage)}].concat(Q.tableList("ligSet",e.ligatureSets,function(t){return new Q.Table("ligatureSetTable",Q.tableList("ligature",t,function(i){return new Q.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:i.ligGlyph}].concat(Q.ushortList("component",i.components,i.components.length+1)))}))})))};Ei[5]=function(e){if(e.substFormat===1)return new Q.Table("contextualSubstitutionTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new Q.Coverage(e.coverage)}].concat(Q.tableList("sequenceRuleSet",e.ruleSets,function(t){return t?new Q.Table("sequenceRuleSetTable",Q.tableList("sequenceRule",t,function(i){let s=Q.ushortList("seqLookup",[],i.lookupRecords.length).concat(Q.ushortList("inputSequence",i.input,i.input.length+1));[s[0],s[1]]=[s[1],s[0]];for(let r=0;r<i.lookupRecords.length;r++){const a=i.lookupRecords[r];s=s.concat({name:"sequenceIndex"+r,type:"USHORT",value:a.sequenceIndex}).concat({name:"lookupListIndex"+r,type:"USHORT",value:a.lookupListIndex})}return new Q.Table("sequenceRuleTable",s)})):new Q.Table("NULL",null)})));if(e.substFormat===2)return new Q.Table("contextualSubstitutionTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new Q.Coverage(e.coverage)},{name:"classDef",type:"TABLE",value:new Q.ClassDef(e.classDef)}].concat(Q.tableList("classSeqRuleSet",e.classSets,function(t){return t?new Q.Table("classSeqRuleSetTable",Q.tableList("classSeqRule",t,function(i){let s=Q.ushortList("classes",i.classes,i.classes.length+1).concat(Q.ushortList("seqLookupCount",[],i.lookupRecords.length));for(let r=0;r<i.lookupRecords.length;r++){const a=i.lookupRecords[r];s=s.concat({name:"sequenceIndex"+r,type:"USHORT",value:a.sequenceIndex}).concat({name:"lookupListIndex"+r,type:"USHORT",value:a.lookupListIndex})}return new Q.Table("classSeqRuleTable",s)})):new Q.Table("NULL",null)})));if(e.substFormat===3){let t=[{name:"substFormat",type:"USHORT",value:e.substFormat}];t.push({name:"inputGlyphCount",type:"USHORT",value:e.coverages.length}),t.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length});for(let s=0;s<e.coverages.length;s++){const r=e.coverages[s];t.push({name:"inputCoverage"+s,type:"TABLE",value:new Q.Coverage(r)})}for(let s=0;s<e.lookupRecords.length;s++){const r=e.lookupRecords[s];t=t.concat({name:"sequenceIndex"+s,type:"USHORT",value:r.sequenceIndex}).concat({name:"lookupListIndex"+s,type:"USHORT",value:r.lookupListIndex})}return new Q.Table("contextualSubstitutionTable",t)}Se.assert(!1,"lookup type 5 format must be 1, 2 or 3.")};Ei[6]=function(e){if(e.substFormat===1)return new Q.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new Q.Coverage(e.coverage)}].concat(Q.tableList("chainRuleSet",e.chainRuleSets,function(i){return new Q.Table("chainRuleSetTable",Q.tableList("chainRule",i,function(s){let r=Q.ushortList("backtrackGlyph",s.backtrack,s.backtrack.length).concat(Q.ushortList("inputGlyph",s.input,s.input.length+1)).concat(Q.ushortList("lookaheadGlyph",s.lookahead,s.lookahead.length)).concat(Q.ushortList("substitution",[],s.lookupRecords.length));for(let a=0;a<s.lookupRecords.length;a++){const o=s.lookupRecords[a];r=r.concat({name:"sequenceIndex"+a,type:"USHORT",value:o.sequenceIndex}).concat({name:"lookupListIndex"+a,type:"USHORT",value:o.lookupListIndex})}return new Q.Table("chainRuleTable",r)}))})));if(e.substFormat===2)Se.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(e.substFormat===3){let t=[{name:"substFormat",type:"USHORT",value:e.substFormat}];t.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length});for(let s=0;s<e.backtrackCoverage.length;s++){const r=e.backtrackCoverage[s];t.push({name:"backtrackCoverage"+s,type:"TABLE",value:new Q.Coverage(r)})}t.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length});for(let s=0;s<e.inputCoverage.length;s++){const r=e.inputCoverage[s];t.push({name:"inputCoverage"+s,type:"TABLE",value:new Q.Coverage(r)})}t.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length});for(let s=0;s<e.lookaheadCoverage.length;s++){const r=e.lookaheadCoverage[s];t.push({name:"lookaheadCoverage"+s,type:"TABLE",value:new Q.Coverage(r)})}t.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length});for(let s=0;s<e.lookupRecords.length;s++){const r=e.lookupRecords[s];t=t.concat({name:"sequenceIndex"+s,type:"USHORT",value:r.sequenceIndex}).concat({name:"lookupListIndex"+s,type:"USHORT",value:r.lookupListIndex})}return new Q.Table("chainContextTable",t)}Se.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function N_(n){return new Q.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new Q.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new Q.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new Q.LookupList(n.lookups,Ei)}])}var qh={parse:F_,make:N_};function k_(n,e){const t=new oe.Parser(n,e),i=t.parseULong();Se.argument(i===1,"Unsupported META table version."),t.parseULong(),t.parseULong();const s=t.parseULong(),r={};for(let a=0;a<s;a++){const o=t.parseTag(),l=t.parseULong(),c=t.parseULong();if(o==="appl"||o==="bild")continue;const u=rs.UTF8(n,e+l,c);r[o]=u}return r}function B_(n){const e=Object.keys(n).length;let t="";const i=16+e*12,s=new Q.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:i},{name:"numTags",type:"ULONG",value:e}]);for(let r in n){const a=t.length;t+=n[r],s.fields.push({name:"tag "+r,type:"TAG",value:r}),s.fields.push({name:"offset "+r,type:"ULONG",value:i+a}),s.fields.push({name:"length "+r,type:"ULONG",value:n[r].length})}return s.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),s}var Yh={parse:k_,make:B_};function z_(n,e){const t=new I(n,e),i=t.parseUShort();i!==0&&console.warn("Only COLRv0 is currently fully supported. A subset of color glyphs might be available in this font if provided in the v0 format.");const s=t.parseUShort(),r=t.parseOffset32(),a=t.parseOffset32(),o=t.parseUShort();t.relativeOffset=r;const l=t.parseRecordList(s,{glyphID:I.uShort,firstLayerIndex:I.uShort,numLayers:I.uShort});t.relativeOffset=a;const c=t.parseRecordList(o,{glyphID:I.uShort,paletteIndex:I.uShort});return{version:i,baseGlyphRecords:l,layerRecords:c}}function H_({version:n=0,baseGlyphRecords:e=[],layerRecords:t=[]}){Se.argument(n===0,"Only COLRv0 supported.");const i=14,s=i+e.length*6;return new Q.Table("COLR",[{name:"version",type:"USHORT",value:n},{name:"numBaseGlyphRecords",type:"USHORT",value:e.length},{name:"baseGlyphRecordsOffset",type:"ULONG",value:i},{name:"layerRecordsOffset",type:"ULONG",value:s},{name:"numLayerRecords",type:"USHORT",value:t.length},...e.map((r,a)=>[{name:"glyphID_"+a,type:"USHORT",value:r.glyphID},{name:"firstLayerIndex_"+a,type:"USHORT",value:r.firstLayerIndex},{name:"numLayers_"+a,type:"USHORT",value:r.numLayers}]).flat(),...t.map((r,a)=>[{name:"LayerGlyphID_"+a,type:"USHORT",value:r.glyphID},{name:"paletteIndex_"+a,type:"USHORT",value:r.paletteIndex}]).flat()])}var jh={parse:z_,make:H_};function G_(n,e){return[{name:"tag_"+n,type:"TAG",value:e.tag},{name:"minValue_"+n,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+n,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+n,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+n,type:"USHORT",value:0},{name:"nameID_"+n,type:"USHORT",value:e.axisNameID}]}function V_(n,e,t){const i={},s=new oe.Parser(n,e);i.tag=s.parseTag(),i.minValue=s.parseFixed(),i.defaultValue=s.parseFixed(),i.maxValue=s.parseFixed(),s.skip("uShort",1);const r=s.parseUShort();return i.axisNameID=r,i.name=Vr(t,r),i}function W_(n,e,t,i={}){const s=[{name:"nameID_"+n,type:"USHORT",value:e.subfamilyNameID},{name:"flags_"+n,type:"USHORT",value:0}];for(let r=0;r<t.length;++r){const a=t[r].tag;s.push({name:"axis_"+n+" "+a,type:"FIXED",value:e.coordinates[a]<<16})}return i&&i.postScriptNameID&&s.push({name:"postScriptNameID_",type:"USHORT",value:e.postScriptNameID!==void 0?e.postScriptNameID:65535}),s}function X_(n,e,t,i,s){const r={},a=new oe.Parser(n,e),o=a.parseUShort();r.subfamilyNameID=o,r.name=Vr(i,o,[2,17]),a.skip("uShort",1),r.coordinates={};for(let c=0;c<t.length;++c)r.coordinates[t[c].tag]=a.parseFixed();if(a.relativeOffset===s)return r.postScriptNameID=void 0,r.postScriptName=void 0,r;const l=a.parseUShort();return r.postScriptNameID=l==65535?void 0:l,r.postScriptName=r.postScriptNameID!==void 0?Vr(i,l,[6]):"",r}function q_(n,e){const t=new Q.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:n.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:n.instances.length},{name:"instanceSize",type:"USHORT",value:4+n.axes.length*4}]);t.offsetToData=t.sizeOf();for(let s=0;s<n.axes.length;s++)t.fields=t.fields.concat(G_(s,n.axes[s]));const i={};for(let s=0;s<n.instances.length;s++)if(n.instances[s].postScriptNameID!==void 0){t.instanceSize+=2,i.postScriptNameID=!0;break}for(let s=0;s<n.instances.length;s++)t.fields=t.fields.concat(W_(s,n.instances[s],n.axes,i));return t}function Y_(n,e,t){const i=new oe.Parser(n,e),s=i.parseULong();Se.argument(s===65536,"Unsupported fvar table version.");const r=i.parseOffset16();i.skip("uShort",1);const a=i.parseUShort(),o=i.parseUShort(),l=i.parseUShort(),c=i.parseUShort(),u=[];for(let d=0;d<a;d++)u.push(V_(n,e+r+d*o,t));const f=[],h=e+r+a*o;for(let d=0;d<l;d++)f.push(X_(n,h+d*c,u,t,c));return{axes:u,instances:f}}var $h={make:q_,parse:Y_},j_={tag:I.tag,nameID:I.uShort,ordering:I.uShort},Ns=new Array(5);Ns[1]=function(){return{axisIndex:this.parseUShort(),flags:this.parseUShort(),valueNameID:this.parseUShort(),value:this.parseFixed()}};Ns[2]=function(){return{axisIndex:this.parseUShort(),flags:this.parseUShort(),valueNameID:this.parseUShort(),nominalValue:this.parseFixed(),rangeMinValue:this.parseFixed(),rangeMaxValue:this.parseFixed()}};Ns[3]=function(){return{axisIndex:this.parseUShort(),flags:this.parseUShort(),valueNameID:this.parseUShort(),value:this.parseFixed(),linkedValue:this.parseFixed()}};Ns[4]=function(){const e=this.parseUShort();return{flags:this.parseUShort(),valueNameID:this.parseUShort(),axisValues:this.parseList(e,function(){return{axisIndex:this.parseUShort(),value:this.parseFixed()}})}};function $_(){const n=this.parseUShort(),e=Ns[n],t={format:n};return e===void 0?(console.warn(`Unknown axis value table format ${n}`),t):Object.assign(t,this.parseStruct(e.bind(this)))}function Z_(n,e,t){e||(e=0);const i=new oe.Parser(n,e),s=i.parseUShort(),r=i.parseUShort();s!==1&&console.warn(`Unsupported STAT table version ${s}.${r}`);const a=[s,r],o=i.parseUShort(),l=i.parseUShort(),c=i.parseOffset32(),u=i.parseUShort(),f=i.parseOffset32(),h=s>1||r>0?i.parseUShort():void 0;t!==void 0&&Se.argument(l>=t.axes.length,"STAT axis count must be greater than or equal to fvar axis count"),u>0&&Se.argument(l>=0,"STAT axis count must be greater than 0 if STAT axis value count is greater than 0");const d=[];for(let m=0;m<l;m++)i.offset=e+c,i.relativeOffset=m*o,d.push(i.parseStruct(j_));i.offset=e,i.relativeOffset=f;const p=i.parseUShortList(u),v=[];for(let m=0;m<u;m++)i.offset=e+f,i.relativeOffset=p[m],v.push($_.apply(i));return{version:a,axes:d,values:v,elidedFallbackNameID:h}}var ks=new Array(5);ks[1]=function(e,t){return[{name:`format${e}`,type:"USHORT",value:1},{name:`axisIndex${e}`,type:"USHORT",value:t.axisIndex},{name:`flags${e}`,type:"USHORT",value:t.flags},{name:`valueNameID${e}`,type:"USHORT",value:t.valueNameID},{name:`value${e}`,type:"FLOAT",value:t.value}]};ks[2]=function(e,t){return[{name:`format${e}`,type:"USHORT",value:2},{name:`axisIndex${e}`,type:"USHORT",value:t.axisIndex},{name:`flags${e}`,type:"USHORT",value:t.flags},{name:`valueNameID${e}`,type:"USHORT",value:t.valueNameID},{name:`nominalValue${e}`,type:"FLOAT",value:t.nominalValue},{name:`rangeMinValue${e}`,type:"FLOAT",value:t.rangeMinValue},{name:`rangeMaxValue${e}`,type:"FLOAT",value:t.rangeMaxValue}]};ks[3]=function(e,t){return[{name:`format${e}`,type:"USHORT",value:3},{name:`axisIndex${e}`,type:"USHORT",value:t.axisIndex},{name:`flags${e}`,type:"USHORT",value:t.flags},{name:`valueNameID${e}`,type:"USHORT",value:t.valueNameID},{name:`value${e}`,type:"FLOAT",value:t.value},{name:`linkedValue${e}`,type:"FLOAT",value:t.linkedValue}]};ks[4]=function(e,t){let i=[{name:`format${e}`,type:"USHORT",value:4},{name:`axisCount${e}`,type:"USHORT",value:t.axisValues.length},{name:`flags${e}`,type:"USHORT",value:t.flags},{name:`valueNameID${e}`,type:"USHORT",value:t.valueNameID}];for(let s=0;s<t.axisValues.length;s++)i=i.concat([{name:`format${e}axisIndex${s}`,type:"USHORT",value:t.axisValues[s].axisIndex},{name:`format${e}value${s}`,type:"FLOAT",value:t.axisValues[s].value}]);return i};function K_(n,e){return new Q.Record("axisRecord_"+n,[{name:"axisTag_"+n,type:"TAG",value:e.tag},{name:"axisNameID_"+n,type:"USHORT",value:e.nameID},{name:"axisOrdering_"+n,type:"USHORT",value:e.ordering}])}function J_(n,e){const t=e.format,i=ks[t];Se.argument(i!==void 0,`Unknown axis value table format ${t}`);const s=i(n,e);return new Q.Table("axisValueTable_"+n,s)}function Q_(n){const e=new Q.Table("STAT",[{name:"majorVersion",type:"USHORT",value:1},{name:"minorVersion",type:"USHORT",value:2},{name:"designAxisSize",type:"USHORT",value:8},{name:"designAxisCount",type:"USHORT",value:n.axes.length},{name:"designAxesOffset",type:"ULONG",value:0},{name:"axisValueCount",type:"USHORT",value:n.values.length},{name:"offsetToAxisValueOffsets",type:"ULONG",value:0},{name:"elidedFallbackNameID",type:"USHORT",value:n.elidedFallbackNameID}]);e.designAxesOffset=e.offsetToAxisValueOffsets=e.sizeOf();for(let r=0;r<n.axes.length;r++){const a=K_(r,n.axes[r]);e.offsetToAxisValueOffsets+=a.sizeOf(),e.fields=e.fields.concat(a.fields)}const t=[];let i=[],s=n.values.length*2;for(let r=0;r<n.values.length;r++){const a=J_(r,n.values[r]);t.push({name:"offset_"+r,type:"USHORT",value:s}),s+=a.sizeOf(),i=i.concat(a.fields)}return e.fields=e.fields.concat(t),e.fields=e.fields.concat(i),e}var Zh={make:Q_,parse:Z_};function ey(n,e){return new Q.Record("axisValueMap_"+n,[{name:"fromCoordinate_"+n,type:"F2DOT14",value:e.fromCoordinate},{name:"toCoordinate_"+n,type:"F2DOT14",value:e.toCoordinate}])}function ty(n,e){const t=new Q.Record("segmentMap_"+n,[{name:"positionMapCount_"+n,type:"USHORT",value:e.axisValueMaps.length}]);let i=[];for(let s=0;s<e.axisValueMaps.length;s++){const r=ey(`${n}_${s}`,e.axisValueMaps[s]);i=i.concat(r.fields)}return t.fields=t.fields.concat(i),t}function ny(n,e){Se.argument(n.axisSegmentMaps.length===e.axes.length,"avar axis count must correspond to fvar axis count");const t=new Q.Table("avar",[{name:"majorVersion",type:"USHORT",value:1},{name:"minorVersion",type:"USHORT",value:0},{name:"reserved",type:"USHORT",value:0},{name:"axisCount",type:"USHORT",value:n.axisSegmentMaps.length}]);for(let i=0;i<n.axisSegmentMaps.length;i++){const s=ty(i,n.axisSegmentMaps[i]);t.fields=t.fields.concat(s.fields)}return t}function iy(n,e,t){e||(e=0);const i=new I(n,e),s=i.parseUShort(),r=i.parseUShort();s!==1&&console.warn(`Unsupported avar table version ${s}.${r}`),i.skip("uShort",1);const a=i.parseUShort();Se.argument(a===t.axes.length,"avar axis count must correspond to fvar axis count");const o=[];for(let l=0;l<a;l++){const c=[],u=i.parseUShort();for(let f=0;f<u;f++){const h=i.parseF2Dot14(),d=i.parseF2Dot14();c.push({fromCoordinate:h,toCoordinate:d})}o.push({axisValueMaps:c})}return{version:[s,r],axisSegmentMaps:o}}var Kh={make:ny,parse:iy};function sy(n,e,t,i){const s=new oe.Parser(n,e),r=s.parseTupleVariationStore(s.relativeOffset,t.axes.length,"cvar",i),a=s.parseUShort(),o=s.parseUShort();return a!==1&&console.warn(`Unsupported cvar table version ${a}.${o}`),{version:[a,o],...r}}function ry(){console.warn("Writing of cvar tables is not yet supported.")}var Jh={make:ry,parse:sy};function ay(n,e,t,i){const s=new oe.Parser(n,e),r=s.parseUShort(),a=s.parseUShort();r!==1&&console.warn(`Unsupported gvar table version ${r}.${a}`);const o=s.parseUShort();o!==t.axes.length&&console.warn(`axisCount ${o} in gvar table does not match the number of axes ${t.axes.length} in the fvar table!`);const l=s.parseUShort(),c=s.parsePointer32(function(){return this.parseTupleRecords(l,o)}),u=s.parseTupleVariationStoreList(o,"gvar",i);return{version:[r,a],sharedTuples:c,glyphVariations:u}}function oy(){console.warn("Writing of gvar tables is not yet supported.")}var Qh={make:oy,parse:ay};function ly(n,e){const t={},i=new oe.Parser(n,e);t.version=i.parseUShort(),Se.argument(t.version<=1,"Unsupported gasp table version."),t.numRanges=i.parseUShort(),t.gaspRanges=[];for(let s=0;s<t.numRanges;s++)t.gaspRanges[s]={rangeMaxPPEM:i.parseUShort(),rangeGaspBehavior:i.parseUShort()};return t}function cy(n){const e=new Q.Table("gasp",[{name:"version",type:"USHORT",value:1},{name:"numRanges",type:"USHORT",value:n.numRanges}]);for(let t in n.gaspRanges)e.fields.push({name:"rangeMaxPPEM",type:"USHORT",value:n.gaspRanges[t].rangeMaxPPEM}),e.fields.push({name:"rangeGaspBehavior",type:"USHORT",value:n.gaspRanges[t].rangeGaspBehavior});return e}var ef={parse:ly,make:cy};function uy(n,e){const t=new Map,i=n.buffer,s=new I(n,e);if(s.parseUShort()!==0)return t;s.relativeOffset=s.parseOffset32();const a=n.byteOffset+e+s.relativeOffset,o=s.parseUShort(),l=new Map;for(let c=0;c<o;c++){const u=s.parseUShort(),f=s.parseUShort(),h=a+s.parseOffset32(),d=s.parseULong();let p=l.get(h);p===void 0&&(p=new Uint8Array(i,h,d),l.set(h,p));for(let v=u;v<=f;v++)t.set(v,p)}return t}function hy(n){const e=Array.from(n.keys()).sort(),t=[],i=[],s=new Map;let r=0,a={endGlyphID:null};for(let h=0,d=e.length;h<d;h++){const p=e[h],v=n.get(p);let m=s.get(v);m===void 0&&(m=r,i.push(v),s.set(v,m),r+=v.byteLength),p-1===a.endGlyphID&&m===a.svgDocOffset?a.endGlyphID=p:(a={startGlyphID:p,endGlyphID:p,svgDocOffset:m,svgDocLength:v.byteLength},t.push(a))}const o=t.length,l=i.length,c=2+o*12,u=new Array(4+o*4+l);let f=0;u[f++]={name:"version",type:"USHORT",value:0},u[f++]={name:"svgDocumentListOffset",type:"ULONG",value:10},u[f++]={name:"reserved",type:"ULONG",value:0},u[f++]={name:"numEntries",type:"USHORT",value:o};for(let h=0;h<o;h++){const d="documentRecord_"+h,{startGlyphID:p,endGlyphID:v,svgDocOffset:m,svgDocLength:g}=t[h];u[f++]={name:d+"_startGlyphID",type:"USHORT",value:p},u[f++]={name:d+"_endGlyphID",type:"USHORT",value:v},u[f++]={name:d+"_svgDocOffset",type:"ULONG",value:c+m},u[f++]={name:d+"_svgDocLength",type:"ULONG",value:g}}for(let h=0;h<l;h++)u[f++]={name:"svgDoc_"+h,type:"LITERAL",value:i[h]};return new Q.Table("SVG ",u)}var tf={make:hy,parse:uy};function qc(n){return Math.log(n)/Math.log(2)|0}function pl(n){for(;n.length%4!==0;)n.push(0);let e=0;for(let t=0;t<n.length;t+=4)e+=(n[t]<<24)+(n[t+1]<<16)+(n[t+2]<<8)+n[t+3];return e%=Math.pow(2,32),e}function Yc(n,e,t,i){return new Q.Record("Table Record",[{name:"tag",type:"TAG",value:n!==void 0?n:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:t!==void 0?t:0},{name:"length",type:"ULONG",value:i!==void 0?i:0}])}function nf(n){const e=new Q.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=n,e.numTables=n.length;const t=Math.pow(2,qc(e.numTables));e.searchRange=16*t,e.entrySelector=qc(t),e.rangeShift=e.numTables*16-e.searchRange;const i=[],s=[];let r=e.sizeOf()+Yc().sizeOf()*e.numTables;for(;r%4!==0;)r+=1,s.push({name:"padding",type:"BYTE",value:0});for(let a=0;a<n.length;a+=1){const o=n[a];Se.argument(o.tableName.length===4,"Table name"+o.tableName+" is invalid.");const l=o.sizeOf(),c=Yc(o.tableName,pl(o.encode()),r,l);for(i.push({name:c.tag+" Table Record",type:"RECORD",value:c}),s.push({name:o.tableName+" table",type:"RECORD",value:o}),r+=l,Se.argument(!isNaN(r),"Something went wrong calculating the offset.");r%4!==0;)r+=1,s.push({name:"padding",type:"BYTE",value:0})}return i.sort(function(a,o){return a.value.tag>o.value.tag?1:-1}),e.fields=e.fields.concat(i),e.fields=e.fields.concat(s),e}function jc(n,e,t){for(let i=0;i<e.length;i+=1){const s=n.charToGlyphIndex(e[i]);if(s>0)return n.glyphs.get(s).getMetrics()}return t}function fy(n){let e=0;for(let t=0;t<n.length;t+=1)e+=n[t];return e/n.length}function dy(n){const e=[],t=[],i=[],s=[],r=[],a=[],o=[];let l,c=0,u=0,f=0,h=0,d=0;for(let le=0;le<n.glyphs.length;le+=1){const Ee=n.glyphs.get(le),Pe=Ee.unicode|0;if(isNaN(Ee.advanceWidth))throw new Error("Glyph "+Ee.name+" ("+le+"): advanceWidth is not a number.");(l>Pe||l===void 0)&&Pe>0&&(l=Pe),c<Pe&&(c=Pe);const qe=Wo.getUnicodeRange(Pe);if(qe<32)u|=1<<qe;else if(qe<64)f|=1<<qe-32;else if(qe<96)h|=1<<qe-64;else if(qe<123)d|=1<<qe-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(Ee.name===".notdef")continue;const Ne=Ee.getMetrics();e.push(Ne.xMin),t.push(Ne.yMin),i.push(Ne.xMax),s.push(Ne.yMax),a.push(Ne.leftSideBearing),o.push(Ne.rightSideBearing),r.push(Ee.advanceWidth)}const p={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,i),yMax:Math.max.apply(null,s),advanceWidthMax:Math.max.apply(null,r),advanceWidthAvg:fy(r),minLeftSideBearing:Math.min.apply(null,a),maxLeftSideBearing:Math.max.apply(null,a),minRightSideBearing:Math.min.apply(null,o)};p.ascender=n.ascender,p.descender=n.descender;let v=0;n.weightClass>=600&&(v|=n.macStyleValues.BOLD),n.italicAngle<0&&(v|=n.macStyleValues.ITALIC);const m=zh.make({flags:3,unitsPerEm:n.unitsPerEm,xMin:p.xMin,yMin:p.yMin,xMax:p.xMax,yMax:p.yMax,lowestRecPPEM:3,macStyle:v,createdTimestamp:n.createdTimestamp}),g=Hh.make({ascender:p.ascender,descender:p.descender,advanceWidthMax:p.advanceWidthMax,minLeftSideBearing:p.minLeftSideBearing,minRightSideBearing:p.minRightSideBearing,xMaxExtent:p.maxLeftSideBearing+(p.xMax-p.xMin),numberOfHMetrics:n.glyphs.length}),T=Wh.make(n.glyphs.length),S=Wo.make(Object.assign({xAvgCharWidth:Math.round(p.advanceWidthAvg),usFirstCharIndex:l,usLastCharIndex:c,ulUnicodeRange1:u,ulUnicodeRange2:f,ulUnicodeRange3:h,ulUnicodeRange4:d,sTypoAscender:p.ascender,sTypoDescender:p.descender,sTypoLineGap:0,usWinAscent:p.yMax,usWinDescent:Math.abs(p.yMin),ulCodePageRange1:1,sxHeight:jc(n,"xyvw",{yMax:Math.round(p.ascender/2)}).yMax,sCapHeight:jc(n,"HIKLEFJMNTZBDPRAGOQSUVWXY",p).yMax,usDefaultChar:n.hasChar(" ")?32:0,usBreakChar:n.hasChar(" ")?32:0},n.tables.os2)),y=Gh.make(n.glyphs),R=Ch.make(n.glyphs),C=n.getEnglishName("fontFamily"),A=n.getEnglishName("fontSubfamily"),L=C+" "+A;let M=n.getEnglishName("postScriptName");M||(M=C.replace(/\s/g,"")+"-"+A);const _={};for(let le in n.names)_[le]=n.names[le];_.unicode=_.unicode||{},_.macintosh=_.macintosh||{},_.windows=_.windows||{};const w=n.names.unicode||{},W=n.names.macintosh||{},D=n.names.windows||{};for(const le in _){if(_[le]=_[le]||{},!_[le].uniqueID){const Ee=n.getEnglishName("manufacturer")||"";_[le].uniqueID={en:`${Ee}: ${L}`}}_[le].postScriptName||(_[le].postScriptName={en:M})}_.unicode.preferredFamily||(_.unicode.preferredFamily=w.fontFamily||W.fontFamily||D.fontFamily),_.macintosh.preferredFamily||(_.macintosh.preferredFamily=W.fontFamily||w.fontFamily||D.fontFamily),_.windows.preferredFamily||(_.windows.preferredFamily=D.fontFamily||w.fontFamily||W.fontFamily),_.unicode.preferredSubfamily||(_.unicode.preferredSubfamily=w.fontSubfamily||W.fontSubfamily||D.fontSubfamily),_.macintosh.preferredSubfamily||(_.macintosh.preferredSubfamily=W.fontSubfamily||w.fontSubfamily||D.fontSubfamily),_.windows.preferredSubfamily||(_.windows.preferredSubfamily=D.fontSubfamily||w.fontSubfamily||W.fontSubfamily);const N=[],k=Ah.make(_,N),q=N.length>0?Vh.make(N):void 0,K=Xh.make(n),V=Go.make(n.glyphs,{version:n.getEnglishName("version"),fullName:L,familyName:C,weightName:A,postScriptName:M,unitsPerEm:n.unitsPerEm,fontBBox:[0,p.yMin,p.ascender,p.advanceWidthMax],topDict:n.tables.cff&&n.tables.cff.topDict||{}}),re=n.metas&&Object.keys(n.metas).length>0?Yh.make(n.metas):void 0,ae=[m,g,T,S,k,R,K,V,y];q&&ae.push(q);const me={gsub:qh,cpal:Uh,colr:jh,stat:Zh,avar:Kh,cvar:Jh,fvar:$h,gvar:Qh,gasp:ef,svg:tf},Le={avar:[n.tables.fvar],fvar:[n.names]};for(let le in me){const Ee=n.tables[le];if(Ee){const Pe=me[le].make.call(n,Ee,...Le[le]||[]);Pe&&ae.push(Pe)}}re&&ae.push(re);const Oe=nf(ae),Y=Oe.encode(),J=pl(Y),ue=Oe.fields;let te=!1;for(let le=0;le<ue.length;le+=1)if(ue[le].name==="head table"){ue[le].value.checkSumAdjustment=2981146554-J,te=!0;break}if(!te)throw new Error("Could not find head table with checkSum to adjust.");return Oe}var py={make:nf,fontToTable:dy,computeCheckSum:pl};function za(n,e){let t=0,i=n.length-1;for(;t<=i;){const s=t+i>>>1,r=n[s].tag;if(r===e)return s;r<e?t=s+1:i=s-1}return-t-1}function $c(n,e){let t=0,i=n.length-1;for(;t<=i;){const s=t+i>>>1,r=n[s];if(r===e)return s;r<e?t=s+1:i=s-1}return-t-1}function Zc(n,e){let t,i=0,s=n.length-1;for(;i<=s;){const r=i+s>>>1;t=n[r];const a=t.start;if(a===e)return t;a<e?i=r+1:s=r-1}if(i>0)return t=n[i-1],e>t.end?0:t}function sf(n,e){this.font=n,this.tableName=e}sf.prototype={searchTag:za,binSearch:$c,getTable:function(n){let e=this.font.tables[this.tableName];return!e&&n&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){let n=this.getTable();return n?n.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){let n=this.getTable();if(!n)return;let e=!1;for(let t=0;t<n.scripts.length;t++){const i=n.scripts[t].tag;if(i==="DFLT")return i;i==="latn"&&(e=!0)}if(e)return"latn"},getScriptTable:function(n,e){const t=this.getTable(e);if(t){n=n||"DFLT";const i=t.scripts,s=za(t.scripts,n);if(s>=0)return i[s].script;if(e){const r={tag:n,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return i.splice(-1-s,0,r),r.script}}},getLangSysTable:function(n,e,t){const i=this.getScriptTable(n,t);if(i){if(!e||e==="dflt"||e==="DFLT")return i.defaultLangSys;const s=za(i.langSysRecords,e);if(s>=0)return i.langSysRecords[s].langSys;if(t){const r={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return i.langSysRecords.splice(-1-s,0,r),r.langSys}}},getFeatureTable:function(n,e,t,i){const s=this.getLangSysTable(n,e,i);if(s){let r;const a=s.featureIndexes,o=this.font.tables[this.tableName].features;for(let l=0;l<a.length;l++)if(r=o[a[l]],r.tag===t)return r.feature;if(i){const l=o.length;return Se.assert(l===0||t>=o[l-1].tag,"Features must be added in alphabetical order."),r={tag:t,feature:{params:0,lookupListIndexes:[]}},o.push(r),a.push(l),r.feature}}},getLookupTables:function(n,e,t,i,s){const r=this.getFeatureTable(n,e,t,s),a=[];if(r){let o;const l=r.lookupListIndexes,c=this.font.tables[this.tableName].lookups;for(let u=0;u<l.length;u++)o=c[l[u]],o.lookupType===i&&a.push(o);if(a.length===0&&s){o={lookupType:i,lookupFlag:0,subtables:[],markFilteringSet:void 0};const u=c.length;return c.push(o),l.push(u),[o]}}return a},getGlyphClass:function(n,e){switch(n.format){case 1:return n.startGlyph<=e&&e<n.startGlyph+n.classes.length?n.classes[e-n.startGlyph]:0;case 2:{const t=Zc(n.ranges,e);return t?t.classId:0}}},getCoverageIndex:function(n,e){switch(n.format){case 1:{const t=$c(n.glyphs,e);return t>=0?t:-1}case 2:{const t=Zc(n.ranges,e);return t?t.index+e-t.start:-1}}},expandCoverage:function(n){if(n.format===1)return n.glyphs;{const e=[],t=n.ranges;for(let i=0;i<t.length;i++){const s=t[i],r=s.start,a=s.end;for(let o=r;o<=a;o++)e.push(o)}return e}}};var na=sf;function Bs(n){na.call(this,n,"gpos")}Bs.prototype=na.prototype;Bs.prototype.init=function(){const n=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(n)};Bs.prototype.getKerningValue=function(n,e,t){for(let i=0;i<n.length;i++){const s=n[i].subtables;for(let r=0;r<s.length;r++){const a=s[r],o=this.getCoverageIndex(a.coverage,e);if(!(o<0))switch(a.posFormat){case 1:{let l=a.pairSets[o];for(let c=0;c<l.length;c++){let u=l[c];if(u.secondGlyph===t)return u.value1&&u.value1.xAdvance||0}break}case 2:{const l=this.getGlyphClass(a.classDef1,e),c=this.getGlyphClass(a.classDef2,t),u=a.classRecords[l][c];return u.value1&&u.value1.xAdvance||0}}}}return 0};Bs.prototype.getKerningTables=function(n,e){if(this.font.tables.gpos)return this.getLookupTables(n,e,"kern",2)};var my=Bs;function gy(n,e){const t=n.length;if(t!==e.length)return!1;for(let i=0;i<t;i++)if(n[i]!==e[i])return!1;return!0}function vy(n,e,t){let i=0,s=n.length-1,r=null;for(;i<=s;){const a=Math.floor((i+s)/2),o=n[a],l=o[e];if(l<t)i=a+1;else if(l>t)s=a-1;else{r=o;break}}return r}function xy(n,e,t){let i=0,s=n.length-1;for(;i<=s;){const r=Math.floor((i+s)/2),a=n[r];if(a[e]<t)i=r+1;else if(a[e]>t)s=r-1;else return r}return-1}function _y(n,e,t){let i=0,s=n.length;const r=(a,o)=>a[e]-o[e];for(;i<s;){const a=i+s>>>1;r(n[a],t)<0?i=a+1:s=a}return n.splice(i,0,t),i}function rf(n){return n[0]===31&&n[1]===139&&n[2]===8}function yy(n){const e=new DataView(n.buffer,n.byteOffset,n.byteLength);let t=10;const i=n.byteLength-8,s=e.getInt8(3);if(s&4&&(t+=2+e.getUint16(t,!0)),s&8)for(;t<i&&n[t++]!==0;);if(s&16)for(;t<i&&n[t++]!==0;);if(s&2&&(t+=2),t>=i)throw new Error("Can't find compressed blocks");const r=e.getUint32(e.byteLength-4,!0);return gh(n.subarray(t,i),new Uint8Array(r))}function Kc(n){return{x:n.x,y:n.y,onCurve:n.onCurve,lastPointOfContour:n.lastPointOfContour}}function Sy(n){return{glyphIndex:n.glyphIndex,xScale:n.xScale,scale01:n.scale01,scale10:n.scale10,yScale:n.yScale,dx:n.dx,dy:n.dy}}function Vt(n){na.call(this,n,"gsub")}function ml(n,e,t){const i=n.subtables;for(let s=0;s<i.length;s++){const r=i[s];if(r.substFormat===e)return r}if(t)return i.push(t),t}Vt.prototype=na.prototype;Vt.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};Vt.prototype.getSingle=function(n,e,t){const i=[],s=this.getLookupTables(e,t,n,1);for(let r=0;r<s.length;r++){const a=s[r].subtables;for(let o=0;o<a.length;o++){const l=a[o],c=this.expandCoverage(l.coverage);let u;if(l.substFormat===1){const f=l.deltaGlyphId;for(u=0;u<c.length;u++){const h=c[u];i.push({sub:h,by:h+f})}}else{const f=l.substitute;for(u=0;u<c.length;u++)i.push({sub:c[u],by:f[u]})}}}return i};Vt.prototype.getMultiple=function(n,e,t){const i=[],s=this.getLookupTables(e,t,n,2);for(let r=0;r<s.length;r++){const a=s[r].subtables;for(let o=0;o<a.length;o++){const l=a[o],c=this.expandCoverage(l.coverage);let u;for(u=0;u<c.length;u++){const f=c[u],h=l.sequences[u];i.push({sub:f,by:h})}}}return i};Vt.prototype.getAlternates=function(n,e,t){const i=[],s=this.getLookupTables(e,t,n,3);for(let r=0;r<s.length;r++){const a=s[r].subtables;for(let o=0;o<a.length;o++){const l=a[o],c=this.expandCoverage(l.coverage),u=l.alternateSets;for(let f=0;f<c.length;f++)i.push({sub:c[f],by:u[f]})}}return i};Vt.prototype.getLigatures=function(n,e,t){const i=[],s=this.getLookupTables(e,t,n,4);for(let r=0;r<s.length;r++){const a=s[r].subtables;for(let o=0;o<a.length;o++){const l=a[o],c=this.expandCoverage(l.coverage),u=l.ligatureSets;for(let f=0;f<c.length;f++){const h=c[f],d=u[f];for(let p=0;p<d.length;p++){const v=d[p];i.push({sub:[h].concat(v.components),by:v.ligGlyph})}}}}return i};Vt.prototype.addSingle=function(n,e,t,i){const s=this.getLookupTables(t,i,n,1,!0)[0],r=ml(s,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});Se.assert(r.coverage.format===1,"Single: unable to modify coverage table format "+r.coverage.format);const a=e.sub;let o=this.binSearch(r.coverage.glyphs,a);o<0&&(o=-1-o,r.coverage.glyphs.splice(o,0,a),r.substitute.splice(o,0,0)),r.substitute[o]=e.by};Vt.prototype.addMultiple=function(n,e,t,i){Se.assert(e.by instanceof Array&&e.by.length>1,'Multiple: "by" must be an array of two or more ids');const s=this.getLookupTables(t,i,n,2,!0)[0],r=ml(s,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});Se.assert(r.coverage.format===1,"Multiple: unable to modify coverage table format "+r.coverage.format);const a=e.sub;let o=this.binSearch(r.coverage.glyphs,a);o<0&&(o=-1-o,r.coverage.glyphs.splice(o,0,a),r.sequences.splice(o,0,0)),r.sequences[o]=e.by};Vt.prototype.addAlternate=function(n,e,t,i){const s=this.getLookupTables(t,i,n,3,!0)[0],r=ml(s,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});Se.assert(r.coverage.format===1,"Alternate: unable to modify coverage table format "+r.coverage.format);const a=e.sub;let o=this.binSearch(r.coverage.glyphs,a);o<0&&(o=-1-o,r.coverage.glyphs.splice(o,0,a),r.alternateSets.splice(o,0,0)),r.alternateSets[o]=e.by};Vt.prototype.addLigature=function(n,e,t,i){const s=this.getLookupTables(t,i,n,4,!0)[0];let r=s.subtables[0];r||(r={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},s.subtables[0]=r),Se.assert(r.coverage.format===1,"Ligature: unable to modify coverage table format "+r.coverage.format);const a=e.sub[0],o=e.sub.slice(1),l={ligGlyph:e.by,components:o};let c=this.binSearch(r.coverage.glyphs,a);if(c>=0){const u=r.ligatureSets[c];for(let f=0;f<u.length;f++)if(gy(u[f].components,o))return;u.push(l)}else c=-1-c,r.coverage.glyphs.splice(c,0,a),r.ligatureSets.splice(c,0,[l])};Vt.prototype.getFeature=function(n,e,t){if(/ss\d\d/.test(n))return this.getSingle(n,e,t);switch(n){case"aalt":case"salt":return this.getSingle(n,e,t).concat(this.getAlternates(n,e,t));case"dlig":case"liga":case"rlig":return this.getLigatures(n,e,t);case"ccmp":return this.getMultiple(n,e,t).concat(this.getLigatures(n,e,t));case"stch":return this.getMultiple(n,e,t)}};Vt.prototype.add=function(n,e,t,i){if(/ss\d\d/.test(n))return this.addSingle(n,e,t,i);switch(n){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(n,e,t,i):this.addAlternate(n,e,t,i);case"dlig":case"liga":case"rlig":return this.addLigature(n,e,t,i);case"ccmp":return e.by instanceof Array?this.addMultiple(n,e,t,i):this.addLigature(n,e,t,i)}};var by=Vt,af=class{constructor(n){this.defaultValue=255,this.font=n}cpal(){return this.font.tables&&this.font.tables.cpal?this.font.tables.cpal:!1}getAll(n){const e=[],t=this.cpal();if(!t)return e;for(let i=0;i<t.colorRecordIndices.length;i++){const s=t.colorRecordIndices[i],r=[];for(let a=s;a<s+t.numPaletteEntries;a++)r.push(ls(t.colorRecords[a],n||"hexa"));e.push(r)}return e}toCPALcolor(n){return Array.isArray(n)?n.map(e=>Wr(e,"raw")):Wr(n,"raw")}fillPalette(n,e=[],t=this.cpal().numPaletteEntries){return n=Number.isInteger(n)?this.get(n,"raw"):n,Object.assign(Array(t).fill(this.defaultValue),this.toCPALcolor(n).concat(this.toCPALcolor(e)))}extend(n){if(this.ensureCPAL(Array(n).fill(this.defaultValue)))return;const e=this.cpal(),t=e.numPaletteEntries+n,i=this.getAll().map(s=>this.fillPalette(s,[],t));e.numPaletteEntries=t,e.colorRecords=this.toCPALcolor(i.flat()),this.updateIndices()}get(n,e="hexa"){return this.getAll(e)[n]||null}getColor(n,e=0,t="hexa"){return ul(this.font,n,e,t)}setColor(n,e,t=0){n=parseInt(n),t=parseInt(t);let i=this.getAll("raw"),s=i[t];if(!s)throw Error(`paletteIndex ${t} out of range`);const r=this.cpal(),a=r.numPaletteEntries;Array.isArray(e)||(e=[e]),e.length+n>a&&(this.extend(e.length+n-a),i=this.getAll("raw"),s=i[t]);for(let o=0;o<e.length;o++)s[o+n]=this.toCPALcolor(e[o]);r.colorRecords=i.flat(),this.updateIndices()}add(n){if(this.ensureCPAL(n))return;const e=this.cpal(),t=e.numPaletteEntries;n&&n.length?(n=this.toCPALcolor(n),n.length>t?this.extend(n.length-t):n.length<t&&(n=this.fillPalette(n)),e.colorRecordIndices.push(e.colorRecords.length),e.colorRecords.push(...n)):(e.colorRecordIndices.push(e.colorRecords.length),e.colorRecords.push(...Array(t).fill(this.defaultValue)))}delete(n){const e=this.getAll("raw");delete e[n];const t=this.cpal();t.colorRecordIndices.pop(),t.colorRecords=e.flat()}deleteColor(n,e){if(n===e)throw Error("replacementIndex cannot be the same as colorIndex");const t=this.cpal(),i=this.getAll("raw"),s=[];if(e>t.numPaletteEntries-1)throw Error(`Replacement index out of range: numPaletteEntries after deletion: ${t.numPaletteEntries-1}, replacementIndex: ${e})`);for(let o=0;o<i.length;o++){const c=i[o].filter((u,f)=>f!==n);s.push(c)}const r=this.font.tables.colr;if(r){const o=r.layerRecords;for(let l=0;l<o.length;l++){const c=o[l].paletteIndex;if(c>n)o[l].paletteIndex-=1;else if(c===n){let u=0;for(let f=0;f<i.length;f++)if(e>n&&e<=n+i[f].length){u++;break}o[l].paletteIndex=e-u}}this.font.tables.colr={...r,layerRecords:o}}const a=s.flat();for(let o=0;o<i.length;o++)t.colorRecordIndices[o]-=o;t.numPaletteEntries=Math.max(0,t.numPaletteEntries-1),t.colorRecords=this.toCPALcolor(a)}ensureCPAL(n){return this.cpal()?!1:(!n||!n.length?n=[this.defaultValue]:n=this.toCPALcolor(n),this.font.tables.cpal={version:0,numPaletteEntries:n.length,colorRecords:n,colorRecordIndices:[0]},!0)}updateIndices(){const n=this.cpal(),e=Math.ceil(n.colorRecords.length/n.numPaletteEntries);n.colorRecordIndices=[];for(let t=0;t<e;t++)n.colorRecordIndices.push(t*n.numPaletteEntries)}},My=class{constructor(n){this.font=n}ensureCOLR(){return this.font.tables.colr||(this.font.tables.colr={version:0,baseGlyphRecords:[],layerRecords:[]}),this.font}get(n){const e=this.font,t=[],i=e.tables.colr,s=e.tables.cpal;if(!i||!s)return t;const r=vy(i.baseGlyphRecords,"glyphID",n);if(!r)return t;const a=r.firstLayerIndex,o=r.numLayers;for(let l=0;l<o;l++){const c=i.layerRecords[a+l];t.push({glyph:e.glyphs.get(c.glyphID),paletteIndex:c.paletteIndex})}return t}add(n,e,t){const i=this.get(n);e=Array.isArray(e)?e:[e],t===void 0||t===1/0||t>i.length?t=i.length:t<0&&(t=i.length+1+t%(i.length+1),t>=i.length+1&&(t-=i.length+1));const s=[];for(let r=0;r<t;r++){const a=Number.isInteger(i[r].glyph)?i[r].glyph:i[r].glyph.index;s.push({glyphID:a,paletteIndex:i[r].paletteIndex})}for(const r of e){const a=Number.isInteger(r.glyph)?r.glyph:r.glyph.index;s.push({glyphID:a,paletteIndex:r.paletteIndex})}for(let r=t;r<i.length;r++){const a=Number.isInteger(i[r].glyph)?i[r].glyph:i[r].glyph.index;s.push({glyphID:a,paletteIndex:i[r].paletteIndex})}this.updateColrTable(n,s)}setPaletteIndex(n,e,t){let i=this.get(n);i[e]?(i=i.map((s,r)=>({glyphID:s.glyph.index,paletteIndex:r===e?t:s.paletteIndex})),this.updateColrTable(n,i)):console.error("Invalid layer index")}remove(n,e,t=e){let i=this.get(n);i=i.map(s=>({glyphID:s.glyph.index,paletteIndex:s.paletteIndex})),i.splice(e,t-e+1),this.updateColrTable(n,i)}updateColrTable(n,e){this.ensureCOLR();const i=this.font.tables.colr;let s=xy(i.baseGlyphRecords,"glyphID",n);if(s===-1){const u={glyphID:n,firstLayerIndex:i.layerRecords.length,numLayers:0};s=_y(i.baseGlyphRecords,"glyphID",u)}const a=i.baseGlyphRecords[s],o=a.numLayers,l=e.length,c=l-o;if(c>0){const u=e.slice(o).map(f=>({glyphID:f.glyphID,paletteIndex:f.paletteIndex}));i.layerRecords.splice(a.firstLayerIndex+o,0,...u)}else c<0&&i.layerRecords.splice(a.firstLayerIndex+l,-c);for(let u=0;u<Math.min(o,l);u++)i.layerRecords[a.firstLayerIndex+u]={glyphID:e[u].glyphID,paletteIndex:e[u].paletteIndex};if(a.numLayers=l,c!==0)for(let u=0;u<i.baseGlyphRecords.length;u++){const f=i.baseGlyphRecords[u];u===s||f.firstLayerIndex<a.firstLayerIndex||(i.baseGlyphRecords[u].firstLayerIndex+=c)}}},Ty=class{constructor(n){this.font=n,this.cache=new WeakMap}get(n){const e=this.getOrCreateSvgImageCacheEntry(n);return e&&e.image}getAsync(n){const e=this.getOrCreateSvgImageCacheEntry(n);return e&&e.promise}getOrCreateSvgImageCacheEntry(n){const e=this.font.tables.svg;if(e===void 0)return;const t=e.get(n);if(t===void 0)return;let i=this.cache.get(t);i===void 0&&(i=Ey(t),this.cache.set(t,i));let s=i.images.get(n);return s===void 0&&(s=Ay(this.font,i.template,n),s.promise.then(r=>{if(s.image=r,typeof this.font.onGlyphUpdated=="function")try{this.font.onGlyphUpdated(n)}catch(a){console.error("font.onGlyphUpdated",n,a)}}),i.images.set(n,s)),s}};function Ey(n){return{template:Cy(n).then(Dy),images:new Map}}function Ay(n,e,t){return{promise:e.then(i=>{let s;typeof i=="string"?s=i:(i[4]=t,s=i.join(""));const r=Ly(s,n.unitsPerEm);return r.image.decode().then(()=>r)}),image:void 0}}var Cy=typeof DecompressionStream=="function"?Ry:wy;function wy(n){try{return Promise.resolve(new TextDecoder().decode(rf(n)?yy(n):n))}catch(e){return Promise.reject(e)}}function Ry(n){if(rf(n))return new Response(new Response(n).body.pipeThrough(new DecompressionStream("gzip"))).text();try{return Promise.resolve(new TextDecoder().decode(n))}catch(e){return Promise.reject(e)}}function Dy(n){const e=n.indexOf("<svg"),t=n.indexOf(">",e+4)+1;if(/ id=['"]glyph\d+['"]/.test(n.substring(e,t)))return n;const i=n.lastIndexOf("</svg>");return[n.substring(0,t),"<defs>",n.substring(t,i),'</defs><use href="#glyph',"",'"/>',n.substring(i)]}function Ly(n,e){const i=new DOMParser().parseFromString(n,"image/svg+xml").documentElement,s=i.viewBox.baseVal,r=i.width.baseVal,a=i.height.baseVal;let o=1,l=1;s.width>0&&s.height>0&&(r.unitType===1?(o=r.valueInSpecifiedUnits/s.width,l=a.unitType===1?a.valueInSpecifiedUnits/s.height:o):a.unitType===1?(l=a.valueInSpecifiedUnits/s.height,o=l):e&&(o=e/s.width,l=e/s.height));const c=document.createElement("div");c.style.position="fixed",c.style.visibility="hidden",c.appendChild(i),document.body.appendChild(c);const u=i.getBBox();document.body.removeChild(c);const f=(u.x-s.x)*o,h=(s.y-u.y)*l,d=u.width*o,p=u.height*l;i.setAttribute("viewBox",[u.x,u.y,u.width,u.height].join(" ")),o!==1&&i.setAttribute("width",d),l!==1&&i.setAttribute("height",p);const v=new Image(d,p);return v.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(i.outerHTML),{leftSideBearing:f,baseline:h,image:v}}var Ha=new WeakMap;function Jc(n,e,t,i,s){let r;return(e&i)>0?(r=n.parseByte(),(e&s)===0&&(r=-r),r=t+r):(e&s)>0?r=t:r=t+n.parseShort(),r}function of(n,e,t){const i=new oe.Parser(e,t);n._numberOfContours=i.parseShort(),n._xMin=i.parseShort(),n._yMin=i.parseShort(),n._xMax=i.parseShort(),n._yMax=i.parseShort();let s,r;if(n._numberOfContours>0){const a=n.endPointIndices=[];for(let l=0;l<n._numberOfContours;l+=1)a.push(i.parseUShort());n.instructionLength=i.parseUShort(),n.instructions=[];for(let l=0;l<n.instructionLength;l+=1)n.instructions.push(i.parseByte());const o=a[a.length-1]+1;s=[];for(let l=0;l<o;l+=1)if(r=i.parseByte(),s.push(r),(r&8)>0){const c=i.parseByte();for(let u=0;u<c;u+=1)s.push(r),l+=1}if(Se.argument(s.length===o,"Bad flags."),a.length>0){const l=[];let c;if(o>0){for(let h=0;h<o;h+=1)r=s[h],c={},c.onCurve=!!(r&1),c.lastPointOfContour=a.indexOf(h)>=0,l.push(c);let u=0;for(let h=0;h<o;h+=1)r=s[h],c=l[h],c.x=Jc(i,r,u,2,16),u=c.x;let f=0;for(let h=0;h<o;h+=1)r=s[h],c=l[h],c.y=Jc(i,r,f,4,32),f=c.y}n.points=l}else n.points=[]}else if(n._numberOfContours===0)n.points=[];else{n.isComposite=!0,n.points=[],n.components=[];let a=!0;for(;a;){s=i.parseUShort();const o={glyphIndex:i.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(s&1)>0?(s&2)>0?(o.dx=i.parseShort(),o.dy=i.parseShort()):o.matchedPoints=[i.parseUShort(),i.parseUShort()]:(s&2)>0?(o.dx=i.parseChar(),o.dy=i.parseChar()):o.matchedPoints=[i.parseByte(),i.parseByte()],(s&8)>0?o.xScale=o.yScale=i.parseF2Dot14():(s&64)>0?(o.xScale=i.parseF2Dot14(),o.yScale=i.parseF2Dot14()):(s&128)>0&&(o.xScale=i.parseF2Dot14(),o.scale01=i.parseF2Dot14(),o.scale10=i.parseF2Dot14(),o.yScale=i.parseF2Dot14()),n.components.push(o),a=!!(s&32)}if(s&256){n.instructionLength=i.parseUShort(),n.instructions=[];for(let o=0;o<n.instructionLength;o+=1)n.instructions.push(i.parseByte())}}}function wr(n,e){const t=[];for(let i=0;i<n.length;i+=1){const s=n[i],r={x:e.xScale*s.x+e.scale10*s.y+e.dx,y:e.scale01*s.x+e.yScale*s.y+e.dy,onCurve:s.onCurve,lastPointOfContour:s.lastPointOfContour};t.push(r)}return t}function Py(n){const e=[];let t=[];for(let i=0;i<n.length;i+=1){const s=n[i];t.push(s),s.lastPointOfContour&&(e.push(t),t=[])}return Se.argument(t.length===0,"There are still points left in the current contour."),e}function gl(n){const e=new ss;if(!n)return e;const t=Py(n);for(let i=0;i<t.length;++i){const s=t[i];let r=s[s.length-1],a=s[0];if(r.onCurve)e.moveTo(r.x,r.y);else if(a.onCurve)e.moveTo(a.x,a.y);else{const o={x:(r.x+a.x)*.5,y:(r.y+a.y)*.5};e.moveTo(o.x,o.y)}for(let o=0;o<s.length;++o)if(r=a,a=s[(o+1)%s.length],r.onCurve)e.lineTo(r.x,r.y);else{let l=a;a.onCurve||(l={x:(r.x+a.x)*.5,y:(r.y+a.y)*.5}),e.quadraticCurveTo(r.x,r.y,l.x,l.y)}e.closePath()}return e}function lf(n,e){if(e.isComposite){Ha.has(n)||Ha.set(n,new Set);const t=Ha.get(n);t.add(e.index);try{for(let i=0;i<e.components.length;i+=1){const s=e.components[i];if(t.has(s.glyphIndex))continue;const r=n.get(s.glyphIndex);if(r.getPath(),r.points){let a;if(s.matchedPoints===void 0)a=wr(r.points,s);else{if(s.matchedPoints[0]>e.points.length-1||s.matchedPoints[1]>r.points.length-1)throw Error("Matched points out of range in "+e.name);const o=e.points[s.matchedPoints[0]];let l=r.points[s.matchedPoints[1]];const c={xScale:s.xScale,scale01:s.scale01,scale10:s.scale10,yScale:s.yScale,dx:0,dy:0};l=wr([l],c)[0],c.dx=o.x-l.x,c.dy=o.y-l.y,a=wr(r.points,c)}e.points=e.points.concat(a)}}}finally{t.delete(e.index)}}return gl(e.points)}function Uy(n,e,t,i){const s=new _n.GlyphSet(i);for(let r=0;r<t.length-1;r+=1){const a=t[r],o=t[r+1];a!==o?s.push(r,_n.ttfGlyphLoader(i,r,of,n,e+a,lf)):s.push(r,_n.glyphLoader(i,r))}return s}function Iy(n,e,t,i){const s=new _n.GlyphSet(i);return i._push=function(r){const a=t[r],o=t[r+1];a!==o?s.push(r,_n.ttfGlyphLoader(i,r,of,n,e+a,lf)):s.push(r,_n.glyphLoader(i,r))},s}function Oy(n,e,t,i,s){return s.lowMemory?Iy(n,e,t,i):Uy(n,e,t,i)}var cf={getPath:gl,parse:Oy},Fy=class{constructor(n){this.font=n}normalizeCoordTags(n){for(const e in n)if(e.length<4){const t=e.padEnd(4," ");n[t]===void 0&&(n[t]=n[e]),delete n[e]}}getNormalizedCoords(n){n||(n=this.font.variation.get());let e=[];this.normalizeCoordTags(n);for(let t=0;t<this.fvar().axes.length;t++){const i=this.fvar().axes[t];let s=n[i.tag];s===void 0&&(s=i.defaultValue),s<i.defaultValue?e.push((s-i.defaultValue+Number.EPSILON)/(i.defaultValue-i.minValue+Number.EPSILON)):e.push((s-i.defaultValue+Number.EPSILON)/(i.maxValue-i.defaultValue+Number.EPSILON))}if(this.avar())for(let t=0;t<this.avar().axisSegmentMaps.length;t++){let i=this.avar().axisSegmentMaps[t];for(let s=0;s<i.axisValueMaps.length;s++){let r=i.axisValueMaps[s];if(s>=1&&e[t]<r.fromCoordinate){let a=i.axisValueMaps[s-1];e[t]=((e[t]-a.fromCoordinate)*(r.toCoordinate-a.toCoordinate)+Number.EPSILON)/(r.fromCoordinate-a.fromCoordinate+Number.EPSILON)+a.toCoordinate;break}}}return e}interpolatePoints(n,e,t){if(n.length===0)return;let i=0;for(;i<n.length;){let s=i,r=i,a=n[r];for(;!a.lastPointOfContour;)a=n[++r];for(;i<=r&&!t[i];)i++;if(i>r)continue;let o=i,l=i;for(i++;i<=r;)t[i]&&(this.deltaInterpolate(l+1,i-1,l,i,e,n),l=i),i++;l===o?this.deltaShift(s,r,l,e,n):(this.deltaInterpolate(l+1,r,l,o,e,n),o>0&&this.deltaInterpolate(s,o-1,l,o,e,n)),i=r+1}}deltaInterpolate(n,e,t,i,s,r){if(n>e)return;let a=["x","y"];for(let l=0;l<a.length;l++){let c=a[l];if(s[t][c]>s[i][c]){var o=t;t=i,i=o}let u=s[t][c],f=s[i][c],h=r[t][c],d=r[i][c];if(u!==f||h===d){let p=u===f?0:(d-h)/(f-u);for(let v=n;v<=e;v++){let m=s[v][c];m<=u?m+=h-u:m>=f?m+=d-f:m=h+(m-u)*p,r[v][c]=m}}}}deltaShift(n,e,t,i,s){let r=s[t].x-i[t].x,a=s[t].y-i[t].y;if(!(r===0&&a===0))for(let o=n;o<=e;o++)o!==t&&(s[o].x+=r,s[o].y+=a)}transformComponents(n,e,t,i,s,r){let a=0;for(let o=0;o<n.components.length;o++){const l=n.components[o],c=this.font.glyphs.get(l.glyphIndex),u=Sy(l),f=i.indexOf(o);f>-1&&(u.dx+=Math.round(s.deltas[f]*r),u.dy+=Math.round(s.deltasY[f]*r));const h=wr(this.getTransform(c,t).points,u);e.splice(a,h.length,...h),a+=c.points.length}}applyTupleVariationStore(n,e,t,i="gvar",s={}){t||(t=this.font.variation.get());const r=this.getNormalizedCoords(t),{headers:a,sharedPoints:o}=n,l=this.fvar().axes.length;let c;i==="gvar"?c=e.map(Kc):i==="cvar"&&(c=[...e]);for(let u=0;u<a.length;u++){const f=a[u];let h=1;for(let p=0;p<l;p++){let v=[0];switch(i){case"gvar":v=f.peakTuple?f.peakTuple:this.gvar().sharedTuples[f.sharedTupleRecordsIndex];break;case"cvar":v=f.peakTuple;break}if(v[p]!==0){if(r[p]===0){h=0;break}if(f.intermediateStartTuple)if(r[p]<f.intermediateStartTuple[p]||r[p]>f.intermediateEndTuple[p]){h=0;break}else r[p]<v[p]?h=h*(r[p]-f.intermediateStartTuple[p]+Number.EPSILON)/(v[p]-f.intermediateStartTuple[p]+Number.EPSILON):h=h*(f.intermediateEndTuple[p]-r[p]+Number.EPSILON)/(f.intermediateEndTuple[p]-v[p]+Number.EPSILON);else{if(r[p]<Math.min(0,v[p])||r[p]>Math.max(0,v[p])){h=0;break}h=(h*r[p]+Number.EPSILON)/(v[p]+Number.EPSILON)}}}if(h===0)continue;const d=f.privatePoints.length?f.privatePoints:o;if(i==="gvar"&&s.glyph&&s.glyph.isComposite)this.transformComponents(s.glyph,c,t,d,f,h);else if(d.length===0)for(let p=0;p<c.length;p++){const v=c[p];i==="gvar"?c[p]={x:Math.round(v.x+f.deltas[p]*h),y:Math.round(v.y+f.deltasY[p]*h),onCurve:v.onCurve,lastPointOfContour:v.lastPointOfContour}:i==="cvar"&&(c[p]=Math.round(v+f.deltas[p]*h))}else{let p;i==="gvar"?p=c.map(Kc):i==="cvar"&&(p=c);const v=Array(e.length).fill(!1);for(let m=0;m<d.length;m++){let g=d[m];if(g<e.length){let T=p[g];i==="gvar"?(v[g]=!0,T.x+=f.deltas[m]*h,T.y+=f.deltasY[m]*h):i==="cvar"&&(c[g]=Math.round(T+f.deltas[m]*h))}}if(i==="gvar"){this.interpolatePoints(p,c,v);for(let m=0;m<e.length;m++){let g=p[m].x-c[m].x,T=p[m].y-c[m].y;c[m].x=Math.round(c[m].x+g),c[m].y=Math.round(c[m].y+T)}}}}return c}getTransform(n,e){Number.isInteger(n)&&(n=this.font.glyphs.get(n));const t=n.getBlendPath,i=!!(n.points&&n.points.length);let s=n;if(t||i){if(e||(e=this.font.variation.get()),i){const r=this.gvar()&&this.gvar().glyphVariations[n.index];if(r){const a=n.points;let o=this.applyTupleVariationStore(r,a,e,"gvar",{glyph:n});s=new Ls(Object.assign({},n,{points:o,path:gl(o)}))}}else if(t){const r=n.getBlendPath(e);s=new Ls(Object.assign({},n,{path:r}))}}return this.font.tables.hvar&&(n._advanceWidth=typeof n._advanceWidth<"u"?n._advanceWidth:n.advanceWidth,n.advanceWidth=s.advanceWidth=Math.round(n._advanceWidth+this.getVariableAdjustment(s.index,"hvar","advanceWidth",e)),n._leftSideBearing=typeof n._leftSideBearing<"u"?n._leftSideBearing:n.leftSideBearing,n.leftSideBearing=s.leftSideBearing=Math.round(n._leftSideBearing+this.getVariableAdjustment(s.index,"hvar","lsb",e))),s}getCvarTransform(n){const e=this.font.tables.cvt,t=this.cvar();return!e||!e.length||!t||!t.headers.length?e:this.applyTupleVariationStore(t,e,n,"cvar")}getVariableAdjustment(n,e,t,i){i=i||this.font.variation.get();let s,r;const a=this.font.tables[e];if(!a)throw Error(`trying to get variation adjustment from non-existent table "${a}"`);if(!a.itemVariationStore)throw Error(`trying to get variation adjustment from table "${a}" which does not have an itemVariationStore`);const o=a[t]&&a[t].map.length;if(o){let l=n;l>=o&&(l=o-1),{outerIndex:s,innerIndex:r}=a[t].map[l]}else s=0,r=n;return this.getDelta(a.itemVariationStore,s,r,i)}getDelta(n,e,t,i){if(e>=n.itemVariationSubtables.length)return 0;let s=n.itemVariationSubtables[e];if(t>=s.deltaSets.length)return 0;let r=s.deltaSets[t],a=this.getBlendVector(n,e,i),o=0;for(let l=0;l<s.regionIndexes.length;l++)o+=r[l]*a[l];return o}getBlendVector(n,e,t){t||(t=this.font.variation.get());let i=n.itemVariationSubtables[e];const s=this.getNormalizedCoords(t);let r=[];for(let a=0;a<i.regionIndexes.length;a++){let o=1,l=i.regionIndexes[a],c=n.variationRegions[l].regionAxes;for(let u=0;u<c.length;u++){let f=c[u],h;f.startCoord>f.peakCoord||f.peakCoord>f.endCoord||f.startCoord<0&&f.endCoord>0&&f.peakCoord!==0||f.peakCoord===0?h=1:s[u]<f.startCoord||s[u]>f.endCoord?h=0:s[u]===f.peakCoord?h=1:s[u]<f.peakCoord?h=(s[u]-f.startCoord+Number.EPSILON)/(f.peakCoord-f.startCoord+Number.EPSILON):h=(f.endCoord-s[u]+Number.EPSILON)/(f.endCoord-f.peakCoord+Number.EPSILON),o*=h}r[a]=o}return r}avar(){return this.font.tables.avar}cvar(){return this.font.tables.cvar}fvar(){return this.font.tables.fvar}gvar(){return this.font.tables.gvar}hvar(){return this.font.tables.hvar}},Ny=class{constructor(n){this.font=n,this.process=new Fy(this.font),this.activateDefaultVariation(),this.getTransform=this.process.getTransform.bind(this.process)}activateDefaultVariation(){const n=this.getDefaultInstanceIndex();n>-1?this.set(n):this.set(this.getDefaultCoordinates())}getDefaultCoordinates(){return this.fvar().axes.reduce((n,e)=>(n[e.tag]=e.defaultValue,n),{})}getDefaultInstanceIndex(){const n=this.getDefaultCoordinates();let e=this.getInstanceIndex(n);return e<0&&(e=this.fvar().instances.findIndex(t=>t.name&&t.name.en==="Regular")),e}getInstanceIndex(n){return this.fvar().instances.findIndex(e=>Object.keys(n).every(t=>e.coordinates[t]===n[t]))}getInstance(n){return this.fvar().instances&&this.fvar().instances[n]}set(n){let e;if(Number.isInteger(n)){const t=this.getInstance(n);if(!t)throw Error(`Invalid instance index ${n}`);e={...t.coordinates}}else e=n,this.process.normalizeCoordTags(e);e=Object.assign({},this.font.defaultRenderOptions.variation,e),this.font.defaultRenderOptions=Object.assign({},this.font.defaultRenderOptions,{variation:e})}get(){return Object.assign({},this.font.defaultRenderOptions.variation)}avar(){return this.font.tables.avar}cvar(){return this.font.tables.cvar}fvar(){return this.font.tables.fvar}gvar(){return this.font.tables.gvar}hvar(){return this.font.tables.hvar}},Qc=1e6,qr=64,Yr=1e4,uf,Si,hf,Xo;function ff(n){this.font=n,this.getCommands=function(e){return cf.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function ky(n){return n}function df(n){return Math.sign(n)*Math.round(Math.abs(n))}function By(n){return Math.sign(n)*Math.round(Math.abs(n*2))/2}function zy(n){return Math.sign(n)*(Math.round(Math.abs(n)+.5)-.5)}function Hy(n){return Math.sign(n)*Math.ceil(Math.abs(n))}function Gy(n){return Math.sign(n)*Math.floor(Math.abs(n))}var pf=function(n){const e=this.srPeriod;let t=this.srPhase;const i=this.srThreshold;let s=1;return n<0&&(n=-n,s=-1),n+=i-t,n=Math.trunc(n/e)*e,n+=t,n<0?t*s:n*s},xn={x:1,y:0,axis:"x",distance:function(n,e,t,i){return(t?n.xo:n.x)-(i?e.xo:e.x)},interpolate:function(n,e,t,i){let s,r,a,o,l,c,u;if(!i||i===this){if(s=n.xo-e.xo,r=n.xo-t.xo,l=e.x-e.xo,c=t.x-t.xo,a=Math.abs(s),o=Math.abs(r),u=a+o,u===0){n.x=n.xo+(l+c)/2;return}n.x=n.xo+(l*o+c*a)/u;return}if(s=i.distance(n,e,!0,!0),r=i.distance(n,t,!0,!0),l=i.distance(e,e,!1,!0),c=i.distance(t,t,!1,!0),a=Math.abs(s),o=Math.abs(r),u=a+o,u===0){xn.setRelative(n,n,(l+c)/2,i,!0);return}xn.setRelative(n,n,(l*o+c*a)/u,i,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(n,e,t,i,s){if(!i||i===this){n.x=(s?e.xo:e.x)+t;return}const r=s?e.xo:e.x,a=s?e.yo:e.y,o=r+t*i.x,l=a+t*i.y;n.x=o+(n.y-l)/i.normalSlope},slope:0,touch:function(n){n.xTouched=!0},touched:function(n){return n.xTouched},untouch:function(n){n.xTouched=!1}},Ln={x:0,y:1,axis:"y",distance:function(n,e,t,i){return(t?n.yo:n.y)-(i?e.yo:e.y)},interpolate:function(n,e,t,i){let s,r,a,o,l,c,u;if(!i||i===this){if(s=n.yo-e.yo,r=n.yo-t.yo,l=e.y-e.yo,c=t.y-t.yo,a=Math.abs(s),o=Math.abs(r),u=a+o,u===0){n.y=n.yo+(l+c)/2;return}n.y=n.yo+(l*o+c*a)/u;return}if(s=i.distance(n,e,!0,!0),r=i.distance(n,t,!0,!0),l=i.distance(e,e,!1,!0),c=i.distance(t,t,!1,!0),a=Math.abs(s),o=Math.abs(r),u=a+o,u===0){Ln.setRelative(n,n,(l+c)/2,i,!0);return}Ln.setRelative(n,n,(l*o+c*a)/u,i,!0)},normalSlope:0,setRelative:function(n,e,t,i,s){if(!i||i===this){n.y=(s?e.yo:e.y)+t;return}const r=s?e.xo:e.x,a=s?e.yo:e.y,o=r+t*i.x,l=a+t*i.y;n.y=l+i.normalSlope*(n.x-o)},slope:Number.POSITIVE_INFINITY,touch:function(n){n.yTouched=!0},touched:function(n){return n.yTouched},untouch:function(n){n.yTouched=!1}};Object.freeze(xn);Object.freeze(Ln);function zs(n,e){this.x=n,this.y=e,this.axis=void 0,this.slope=e/n,this.normalSlope=-n/e,Object.freeze(this)}zs.prototype.distance=function(n,e,t,i){return this.x*xn.distance(n,e,t,i)+this.y*Ln.distance(n,e,t,i)};zs.prototype.interpolate=function(n,e,t,i){let s,r,a,o,l,c,u;if(a=i.distance(n,e,!0,!0),o=i.distance(n,t,!0,!0),s=i.distance(e,e,!1,!0),r=i.distance(t,t,!1,!0),l=Math.abs(a),c=Math.abs(o),u=l+c,u===0){this.setRelative(n,n,(s+r)/2,i,!0);return}this.setRelative(n,n,(s*c+r*l)/u,i,!0)};zs.prototype.setRelative=function(n,e,t,i,s){i=i||this;const r=s?e.xo:e.x,a=s?e.yo:e.y,o=r+t*i.x,l=a+t*i.y,c=i.normalSlope,u=this.slope,f=n.x,h=n.y;n.x=(u*f-c*o+l-h)/(u-c),n.y=u*(n.x-f)+h};zs.prototype.touch=function(n){n.xTouched=!0,n.yTouched=!0};function Hs(n,e){const t=Math.sqrt(n*n+e*e);return n/=t,e/=t,n===1&&e===0?xn:n===0&&e===1?Ln:new zs(n,e)}function Un(n,e,t,i){this.x=this.xo=Math.round(n*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=t,this.onCurve=i,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}Un.prototype.nextTouched=function(n){let e=this.nextPointOnContour;for(;!n.touched(e)&&e!==this;)e=e.nextPointOnContour;return e};Un.prototype.prevTouched=function(n){let e=this.prevPointOnContour;for(;!n.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var Ps=Object.freeze(new Un(0,0)),Vy={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function jn(n,e){switch(this.env=n,this.stack=[],this.prog=e,n){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=xn,this.round=df}}ff.prototype.exec=function(n,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(this._errorState>2)return;const t=this.font;let i=this._prepState;if(!i||i.ppem!==e){let s=this._fpgmState;if(!s){jn.prototype=Vy,s=this._fpgmState=new jn("fpgm",t.tables.fpgm),s.funcs=[],s.font=t,s.instructionCount=0,s.callDepth=0;try{Si(s)}catch(a){console.log("Hinting error in FPGM:"+a),this._errorState=3;return}}jn.prototype=s,i=this._prepState=new jn("prep",t.tables.prep),i.ppem=e,i.instructionCount=0,i.callDepth=0;const r=t.variation&&t.variation.process.getCvarTransform()||t.tables.cvt;if(r){const a=i.cvt=new Array(r.length),o=e/t.unitsPerEm;for(let l=0;l<r.length;l++)a[l]=r[l]*o}else i.cvt=[];try{Si(i)}catch(a){this._errorState<2&&console.log("Hinting error in PREP:"+a),this._errorState=2}}if(!(this._errorState>1))try{return hf(n,i)}catch(s){this._errorState<1&&(console.log("Hinting error:"+s),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}};hf=function(n,e){const t=e.ppem/e.font.unitsPerEm,i=t;let s=n.components,r,a,o;if(jn.prototype=e,!s)o=new jn("glyf",n.instructions),o.instructionCount=0,o.callDepth=0,Xo(n,o,t,i),a=o.gZone;else{const l=e.font;a=[],r=[];for(let c=0;c<s.length;c++){const u=s[c],f=l.glyphs.get(u.glyphIndex);o=new jn("glyf",f.instructions),o.instructionCount=0,o.callDepth=0,Xo(f,o,t,i);const h=Math.round(u.dx*t),d=Math.round(u.dy*i),p=o.gZone,v=o.contours;for(let g=0;g<p.length;g++){const T=p[g];T.xTouched=T.yTouched=!1,T.xo=T.x=T.x+h,T.yo=T.y=T.y+d}const m=a.length;a.push.apply(a,p);for(let g=0;g<v.length;g++)r.push(v[g]+m)}n.instructions&&!o.inhibitGridFit&&(o=new jn("glyf",n.instructions),o.gZone=o.z0=o.z1=o.z2=a,o.contours=r,a.push(new Un(0,0),new Un(Math.round(n.advanceWidth*t),0)),Si(o),a.length-=2)}return a};Xo=function(n,e,t,i){const s=n.points||[],r=s.length,a=e.gZone=e.z0=e.z1=e.z2=[],o=e.contours=[];let l;for(let f=0;f<r;f++)l=s[f],a[f]=new Un(l.x*t,l.y*i,l.lastPointOfContour,l.onCurve);let c,u;for(let f=0;f<r;f++)l=a[f],c||(c=l,o.push(f)),l.lastPointOfContour?(l.nextPointOnContour=c,c.prevPointOnContour=l,c=void 0):(u=a[f+1],l.nextPointOnContour=u,u.prevPointOnContour=l);e.inhibitGridFit||(a.push(new Un(0,0),new Un(Math.round(n.advanceWidth*t),0)),Si(e),a.length-=2)};Si=function(n){let e=n.prog;if(!e)return;const t=e.length;let i;for(n.ip=0;n.ip<t;n.ip++){if(++n.instructionCount>Qc)throw new Error("Hinting instructions exceeded maximum of "+Qc);if(i=uf[e[n.ip]],!i)throw new Error("unknown instruction: 0x"+Number(e[n.ip]).toString(16));i(n)}};function ia(n){const e=n.tZone=new Array(n.gZone.length);for(let t=0;t<e.length;t++)e[t]=new Un(0,0)}function mf(n,e){const t=n.prog;let i=n.ip,s=1,r;do if(r=t[++i],r===88)s++;else if(r===89)s--;else if(r===64)i+=t[i+1]+1;else if(r===65)i+=2*t[i+1]+1;else if(r>=176&&r<=183)i+=r-176+1;else if(r>=184&&r<=191)i+=(r-184+1)*2;else if(e&&s===1&&r===27)break;while(s>0);n.ip=i}function eu(n,e){e.fv=e.pv=e.dpv=n}function tu(n,e){e.pv=e.dpv=n}function nu(n,e){e.fv=n}function iu(n,e){const t=e.stack,i=t.pop(),s=t.pop(),r=e.z2[i],a=e.z1[s];let o,l;n?(o=r.y-a.y,l=a.x-r.x):(o=a.x-r.x,l=a.y-r.y),e.pv=e.dpv=Hs(o,l)}function su(n,e){const t=e.stack,i=t.pop(),s=t.pop(),r=e.z2[i],a=e.z1[s];let o,l;n?(o=r.y-a.y,l=a.x-r.x):(o=a.x-r.x,l=a.y-r.y),e.fv=Hs(o,l)}function Wy(n){const e=n.stack,t=e.pop(),i=e.pop();n.pv=n.dpv=Hs(i,t)}function Xy(n){const e=n.stack,t=e.pop(),i=e.pop();n.fv=Hs(i,t)}function qy(n){const e=n.stack,t=n.pv;e.push(t.x*16384),e.push(t.y*16384)}function Yy(n){const e=n.stack,t=n.fv;e.push(t.x*16384),e.push(t.y*16384)}function jy(n){n.fv=n.pv}function $y(n){const e=n.stack,t=e.pop(),i=e.pop(),s=e.pop(),r=e.pop(),a=e.pop(),o=n.z0,l=n.z1,c=o[t],u=o[i],f=l[s],h=l[r],d=n.z2[a],p=c.x,v=c.y,m=u.x,g=u.y,T=f.x,S=f.y,y=h.x,R=h.y,C=(p-m)*(S-R)-(v-g)*(T-y),A=p*g-v*m,L=T*R-S*y;d.x=(A*(T-y)-L*(p-m))/C,d.y=(A*(S-R)-L*(v-g))/C}function Zy(n){n.rp0=n.stack.pop()}function Ky(n){n.rp1=n.stack.pop()}function Jy(n){n.rp2=n.stack.pop()}function Qy(n){const e=n.stack.pop();switch(n.zp0=e,e){case 0:n.tZone||ia(n),n.z0=n.tZone;break;case 1:n.z0=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function eS(n){const e=n.stack.pop();switch(n.zp1=e,e){case 0:n.tZone||ia(n),n.z1=n.tZone;break;case 1:n.z1=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function tS(n){const e=n.stack.pop();switch(n.zp2=e,e){case 0:n.tZone||ia(n),n.z2=n.tZone;break;case 1:n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function nS(n){const e=n.stack.pop();switch(n.zp0=n.zp1=n.zp2=e,e){case 0:n.tZone||ia(n),n.z0=n.z1=n.z2=n.tZone;break;case 1:n.z0=n.z1=n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function iS(n){n.loop=n.stack.pop(),n.loop>Yr&&(n.loop=Yr)}function sS(n){n.round=df}function rS(n){n.round=zy}function aS(n){const e=n.stack.pop();n.minDis=e/64}function oS(n){mf(n,!1)}function lS(n){const e=n.stack.pop();n.ip+=e-1}function cS(n){const e=n.stack.pop();n.cvCutIn=e/64}function uS(n){const e=n.stack;e.push(e[e.length-1])}function Ga(n){n.stack.pop()}function hS(n){n.stack.length=0}function fS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(t),e.push(i)}function dS(n){const e=n.stack;e.push(e.length)}function pS(n){const e=n.stack,t=e.pop();let i=e.pop();if(i>Yr&&(i=Yr),++n.callDepth>qr)throw new Error("Hinting call depth exceeded maximum of "+qr);const s=n.ip,r=n.prog;n.prog=n.funcs[t];for(let a=0;a<i;a++)Si(n);n.ip=s,n.prog=r,n.callDepth--}function mS(n){const e=n.stack.pop();if(++n.callDepth>qr)throw new Error("Hinting call depth exceeded maximum of "+qr);const t=n.ip,i=n.prog;n.prog=n.funcs[e],Si(n),n.ip=t,n.prog=i,n.callDepth--}function gS(n){const e=n.stack,t=e.pop();e.push(e[e.length-t])}function vS(n){const e=n.stack,t=e.pop();e.push(e.splice(e.length-t,1)[0])}function xS(n){if(n.env!=="fpgm")throw new Error("FDEF not allowed here");const e=n.stack,t=n.prog;let i=n.ip;const s=e.pop(),r=i;for(;t[++i]!==45;);n.ip=i,n.funcs[s]=t.slice(r+1,i)}function ru(n,e){const t=e.stack.pop(),i=e.z0[t],s=e.fv,r=e.pv;let a=r.distance(i,Ps);n&&(a=e.round(a)),s.setRelative(i,Ps,a,r),s.touch(i),e.rp0=e.rp1=t}function au(n,e){const t=e.z2,i=t.length-2;let s,r,a;for(let o=0;o<i;o++)s=t[o],!n.touched(s)&&(r=s.prevTouched(n),r!==s&&(a=s.nextTouched(n),r===a&&n.setRelative(s,s,n.distance(r,r,!1,!0),n,!0),n.interpolate(s,r,a,n)))}function ou(n,e){const t=e.stack,i=n?e.rp1:e.rp2,s=(n?e.z0:e.z1)[i],r=e.fv,a=e.pv;let o=e.loop;const l=e.z2;for(;o--;){const c=t.pop(),u=l[c],f=a.distance(s,s,!1,!0);r.setRelative(u,u,f,a),r.touch(u)}e.loop=1}function lu(n,e){const t=e.stack,i=n?e.rp1:e.rp2,s=(n?e.z0:e.z1)[i],r=e.fv,a=e.pv,o=t.pop(),l=e.z2[e.contours[o]];let c=l;const u=a.distance(s,s,!1,!0);do c!==s&&r.setRelative(c,c,u,a),c=c.nextPointOnContour;while(c!==l)}function cu(n,e){const t=e.stack,i=n?e.rp1:e.rp2,s=(n?e.z0:e.z1)[i],r=e.fv,a=e.pv,o=t.pop();let l;switch(o){case 0:l=e.tZone;break;case 1:l=e.gZone;break;default:throw new Error("Invalid zone")}let c;const u=a.distance(s,s,!1,!0),f=l.length-2;for(let h=0;h<f;h++)c=l[h],r.setRelative(c,c,u,a)}function _S(n){const e=n.stack;let t=n.loop;const i=n.fv,s=e.pop()/64,r=n.z2;for(;t--;){const a=e.pop(),o=r[a];i.setRelative(o,o,s),i.touch(o)}n.loop=1}function yS(n){const e=n.stack,t=n.rp1,i=n.rp2;let s=n.loop;const r=n.z0[t],a=n.z1[i],o=n.fv,l=n.dpv,c=n.z2;for(;s--;){const u=e.pop(),f=c[u];o.interpolate(f,r,a,l),o.touch(f)}n.loop=1}function uu(n,e){const t=e.stack,i=t.pop()/64,s=t.pop(),r=e.z1[s],a=e.z0[e.rp0],o=e.fv,l=e.pv;o.setRelative(r,a,i,l),o.touch(r),e.rp1=e.rp0,e.rp2=s,n&&(e.rp0=s)}function SS(n){const e=n.stack,t=n.rp0,i=n.z0[t];let s=n.loop;const r=n.fv,a=n.pv,o=n.z1;for(;s--;){const l=e.pop(),c=o[l];r.setRelative(c,i,0,a),r.touch(c)}n.loop=1}function bS(n){n.round=By}function hu(n,e){const t=e.stack,i=t.pop(),s=t.pop(),r=e.z0[s],a=e.fv,o=e.pv;let l=e.cvt[i],c=o.distance(r,Ps);n&&(Math.abs(c-l)<e.cvCutIn&&(c=l),c=e.round(c)),a.setRelative(r,Ps,c,o),e.zp0===0&&(r.xo=r.x,r.yo=r.y),a.touch(r),e.rp0=e.rp1=s}function MS(n){const e=n.prog;let t=n.ip;const i=n.stack,s=e[++t];for(let r=0;r<s;r++)i.push(e[++t]);n.ip=t}function TS(n){let e=n.ip;const t=n.prog,i=n.stack,s=t[++e];for(let r=0;r<s;r++){let a=t[++e]<<8|t[++e];a&32768&&(a=-((a^65535)+1)),i.push(a)}n.ip=e}function ES(n){const e=n.stack;let t=n.store;t||(t=n.store=[]);const i=e.pop(),s=e.pop();t[s]=i}function AS(n){const e=n.stack,t=n.store,i=e.pop(),s=t&&t[i]||0;e.push(s)}function CS(n){const e=n.stack,t=e.pop(),i=e.pop();n.cvt[i]=t/64}function wS(n){const e=n.stack,t=e.pop();e.push(n.cvt[t]*64)}function fu(n,e){const t=e.stack,i=t.pop(),s=e.z2[i];t.push(e.dpv.distance(s,Ps,n,!1)*64)}function du(n,e){const t=e.stack,i=t.pop(),s=t.pop(),r=e.z1[i],a=e.z0[s],o=e.dpv.distance(a,r,n,n);e.stack.push(Math.round(o*64))}function RS(n){n.stack.push(n.ppem)}function DS(n){n.autoFlip=!0}function LS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i<t?1:0)}function PS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i<=t?1:0)}function US(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i>t?1:0)}function IS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i>=t?1:0)}function OS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(t===i?1:0)}function FS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(t!==i?1:0)}function NS(n){const e=n.stack,t=e.pop();e.push(Math.trunc(t)&1?1:0)}function kS(n){const e=n.stack,t=e.pop();e.push(Math.trunc(t)&1?0:1)}function BS(n){n.stack.pop()||mf(n,!0)}function zS(n){}function HS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(t&&i?1:0)}function GS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(t||i?1:0)}function VS(n){const e=n.stack,t=e.pop();e.push(t?0:1)}function Va(n,e){const t=e.stack,i=t.pop(),s=e.fv,r=e.pv,a=e.ppem,o=e.deltaBase+(n-1)*16,l=e.deltaShift,c=e.z0;for(let u=0;u<i;u++){const f=t.pop(),h=t.pop();if(o+((h&240)>>4)!==a)continue;let p=(h&15)-8;p>=0&&p++;const v=c[f];s.setRelative(v,v,p*l,r)}}function WS(n){const t=n.stack.pop();n.deltaBase=t}function XS(n){const t=n.stack.pop();n.deltaShift=Math.pow(.5,t)}function qS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i+t)}function YS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i-t)}function jS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i*64/t)}function $S(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i*t/64)}function ZS(n){const e=n.stack,t=e.pop();e.push(Math.abs(t))}function KS(n){const e=n.stack;let t=e.pop();e.push(-t)}function JS(n){const e=n.stack,t=e.pop();e.push(Math.floor(t/64)*64)}function QS(n){const e=n.stack,t=e.pop();e.push(Math.ceil(t/64)*64)}function _r(n,e){const t=e.stack,i=t.pop();t.push(e.round(i/64)*64)}function e1(n){const e=n.stack,t=e.pop(),i=e.pop();n.cvt[i]=t*n.ppem/n.font.unitsPerEm}function Wa(n,e){const t=e.stack,i=t.pop(),s=e.ppem,r=e.deltaBase+(n-1)*16,a=e.deltaShift;for(let o=0;o<i;o++){const l=t.pop(),c=t.pop();if(r+((c&240)>>4)!==s)continue;let f=(c&15)-8;f>=0&&f++;const h=f*a;e.cvt[l]+=h}}function t1(n){let e=n.stack.pop();n.round=pf;let t;switch(e&192){case 0:t=.5;break;case 64:t=1;break;case 128:t=2;break;default:throw new Error("invalid SROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function n1(n){let e=n.stack.pop();n.round=pf;let t;switch(e&192){case 0:t=Math.sqrt(2)/2;break;case 64:t=Math.sqrt(2);break;case 128:t=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function i1(n){n.round=ky}function s1(n){n.round=Hy}function r1(n){n.round=Gy}function a1(n){n.stack.pop()}function pu(n,e){const t=e.stack,i=t.pop(),s=t.pop(),r=e.z2[i],a=e.z1[s];let o,l;n?(o=r.y-a.y,l=a.x-r.x):(o=a.x-r.x,l=a.y-r.y),e.dpv=Hs(o,l)}function o1(n){const e=n.stack,t=e.pop();let i=0;t&1&&(i=35),t&32&&(i|=4096),e.push(i)}function l1(n){const e=n.stack,t=e.pop(),i=e.pop(),s=e.pop();e.push(i),e.push(t),e.push(s)}function c1(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(Math.max(i,t))}function u1(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(Math.min(i,t))}function h1(n){n.stack.pop()}function f1(n){const e=n.stack.pop();let t=n.stack.pop();switch(e){case 1:n.inhibitGridFit=!!t;return;case 2:n.ignoreCvt=!!t;return;default:throw new Error("invalid INSTCTRL[] selector")}}function Vn(n,e){const t=e.stack,i=e.prog;let s=e.ip;for(let r=0;r<n;r++)t.push(i[++s]);e.ip=s}function Wn(n,e){let t=e.ip;const i=e.prog,s=e.stack;for(let r=0;r<n;r++){let a=i[++t]<<8|i[++t];a&32768&&(a=-((a^65535)+1)),s.push(a)}e.ip=t}function xe(n,e,t,i,s,r){const a=r.stack,o=n&&a.pop(),l=a.pop(),c=r.rp0,u=r.z0[c],f=r.z1[l],h=r.minDis,d=r.fv,p=r.dpv;let v,m,g;v=p.distance(f,u,!0,!0),m=v>=0?1:-1,v=Math.abs(v),n&&(g=r.cvt[o],i&&Math.abs(v-g)<r.cvCutIn&&(v=g)),t&&v<h&&(v=h),i&&(v=r.round(v)),d.setRelative(f,u,m*v,p),d.touch(f),r.rp1=r.rp0,r.rp2=l,e&&(r.rp0=l)}uf=[eu.bind(void 0,Ln),eu.bind(void 0,xn),tu.bind(void 0,Ln),tu.bind(void 0,xn),nu.bind(void 0,Ln),nu.bind(void 0,xn),iu.bind(void 0,0),iu.bind(void 0,1),su.bind(void 0,0),su.bind(void 0,1),Wy,Xy,qy,Yy,jy,$y,Zy,Ky,Jy,Qy,eS,tS,nS,iS,sS,rS,aS,oS,lS,cS,void 0,void 0,uS,Ga,hS,fS,dS,gS,vS,void 0,void 0,void 0,pS,mS,xS,void 0,ru.bind(void 0,0),ru.bind(void 0,1),au.bind(void 0,Ln),au.bind(void 0,xn),ou.bind(void 0,0),ou.bind(void 0,1),lu.bind(void 0,0),lu.bind(void 0,1),cu.bind(void 0,0),cu.bind(void 0,1),_S,yS,uu.bind(void 0,0),uu.bind(void 0,1),SS,bS,hu.bind(void 0,0),hu.bind(void 0,1),MS,TS,ES,AS,CS,wS,fu.bind(void 0,0),fu.bind(void 0,1),void 0,du.bind(void 0,0),du.bind(void 0,1),RS,void 0,DS,void 0,void 0,LS,PS,US,IS,OS,FS,NS,kS,BS,zS,HS,GS,VS,Va.bind(void 0,1),WS,XS,qS,YS,jS,$S,ZS,KS,JS,QS,_r.bind(void 0,0),_r.bind(void 0,1),_r.bind(void 0,2),_r.bind(void 0,3),void 0,void 0,void 0,void 0,e1,Va.bind(void 0,2),Va.bind(void 0,3),Wa.bind(void 0,1),Wa.bind(void 0,2),Wa.bind(void 0,3),t1,n1,void 0,void 0,i1,void 0,s1,r1,Ga,Ga,void 0,void 0,void 0,void 0,void 0,a1,pu.bind(void 0,0),pu.bind(void 0,1),o1,void 0,l1,c1,u1,h1,f1,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,Vn.bind(void 0,1),Vn.bind(void 0,2),Vn.bind(void 0,3),Vn.bind(void 0,4),Vn.bind(void 0,5),Vn.bind(void 0,6),Vn.bind(void 0,7),Vn.bind(void 0,8),Wn.bind(void 0,1),Wn.bind(void 0,2),Wn.bind(void 0,3),Wn.bind(void 0,4),Wn.bind(void 0,5),Wn.bind(void 0,6),Wn.bind(void 0,7),Wn.bind(void 0,8),xe.bind(void 0,0,0,0,0,0),xe.bind(void 0,0,0,0,0,1),xe.bind(void 0,0,0,0,0,2),xe.bind(void 0,0,0,0,0,3),xe.bind(void 0,0,0,0,1,0),xe.bind(void 0,0,0,0,1,1),xe.bind(void 0,0,0,0,1,2),xe.bind(void 0,0,0,0,1,3),xe.bind(void 0,0,0,1,0,0),xe.bind(void 0,0,0,1,0,1),xe.bind(void 0,0,0,1,0,2),xe.bind(void 0,0,0,1,0,3),xe.bind(void 0,0,0,1,1,0),xe.bind(void 0,0,0,1,1,1),xe.bind(void 0,0,0,1,1,2),xe.bind(void 0,0,0,1,1,3),xe.bind(void 0,0,1,0,0,0),xe.bind(void 0,0,1,0,0,1),xe.bind(void 0,0,1,0,0,2),xe.bind(void 0,0,1,0,0,3),xe.bind(void 0,0,1,0,1,0),xe.bind(void 0,0,1,0,1,1),xe.bind(void 0,0,1,0,1,2),xe.bind(void 0,0,1,0,1,3),xe.bind(void 0,0,1,1,0,0),xe.bind(void 0,0,1,1,0,1),xe.bind(void 0,0,1,1,0,2),xe.bind(void 0,0,1,1,0,3),xe.bind(void 0,0,1,1,1,0),xe.bind(void 0,0,1,1,1,1),xe.bind(void 0,0,1,1,1,2),xe.bind(void 0,0,1,1,1,3),xe.bind(void 0,1,0,0,0,0),xe.bind(void 0,1,0,0,0,1),xe.bind(void 0,1,0,0,0,2),xe.bind(void 0,1,0,0,0,3),xe.bind(void 0,1,0,0,1,0),xe.bind(void 0,1,0,0,1,1),xe.bind(void 0,1,0,0,1,2),xe.bind(void 0,1,0,0,1,3),xe.bind(void 0,1,0,1,0,0),xe.bind(void 0,1,0,1,0,1),xe.bind(void 0,1,0,1,0,2),xe.bind(void 0,1,0,1,0,3),xe.bind(void 0,1,0,1,1,0),xe.bind(void 0,1,0,1,1,1),xe.bind(void 0,1,0,1,1,2),xe.bind(void 0,1,0,1,1,3),xe.bind(void 0,1,1,0,0,0),xe.bind(void 0,1,1,0,0,1),xe.bind(void 0,1,1,0,0,2),xe.bind(void 0,1,1,0,0,3),xe.bind(void 0,1,1,0,1,0),xe.bind(void 0,1,1,0,1,1),xe.bind(void 0,1,1,0,1,2),xe.bind(void 0,1,1,0,1,3),xe.bind(void 0,1,1,1,0,0),xe.bind(void 0,1,1,1,0,1),xe.bind(void 0,1,1,1,0,2),xe.bind(void 0,1,1,1,0,3),xe.bind(void 0,1,1,1,1,0),xe.bind(void 0,1,1,1,1,1),xe.bind(void 0,1,1,1,1,2),xe.bind(void 0,1,1,1,1,3)];var d1=ff;function ds(n){this.char=n,this.state={},this.activeState=null}function vl(n,e,t){this.contextName=t,this.startIndex=n,this.endOffset=e}function p1(n,e,t){this.contextName=n,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=t}function It(n,e){this.context=n,this.index=e,this.length=n.length,this.current=n[e],this.backtrack=n.slice(0,e),this.lookahead=n.slice(e+1)}function sa(n){this.eventId=n,this.subscribers=[]}function m1(n){const e=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];for(let i=0;i<e.length;i++){const s=e[i];Object.defineProperty(this.events,s,{value:new sa(s)})}if(n)for(let i=0;i<e.length;i++){const s=e[i],r=n[s];typeof r=="function"&&this.events[s].subscribe(r)}const t=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];for(let i=0;i<t.length;i++){const s=t[i];this.events[s].subscribe(this.updateContextsRanges)}}function mt(n){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],m1.call(this,n)}ds.prototype.setState=function(n,e){return this.state[n]=e,this.activeState={key:n,value:this.state[n]},this.activeState};ds.prototype.getState=function(n){return this.state[n]||null};mt.prototype.inboundIndex=function(n){return n>=0&&n<this.tokens.length};mt.prototype.composeRUD=function(n){const t=n.map(s=>this[s[0]].apply(this,s.slice(1).concat(!0))),i=s=>typeof s=="object"&&Object.prototype.hasOwnProperty.call(s,"FAIL");if(t.every(i))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:t.filter(i)};this.dispatch("composeRUD",[t.filter(s=>!i(s))])};mt.prototype.replaceRange=function(n,e,t,i){e=e!==null?e:this.tokens.length;const s=t.every(r=>r instanceof ds);if(!isNaN(n)&&this.inboundIndex(n)&&s){const r=this.tokens.splice.apply(this.tokens,[n,e].concat(t));return i||this.dispatch("replaceToken",[n,e,t]),[r,t]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};mt.prototype.replaceToken=function(n,e,t){if(!isNaN(n)&&this.inboundIndex(n)&&e instanceof ds){const i=this.tokens.splice(n,1,e);return t||this.dispatch("replaceToken",[n,e]),[i[0],e]}else return{FAIL:"replaceToken: invalid token or index."}};mt.prototype.removeRange=function(n,e,t){e=isNaN(e)?this.tokens.length:e;const i=this.tokens.splice(n,e);return t||this.dispatch("removeRange",[i,n,e]),i};mt.prototype.removeToken=function(n,e){if(!isNaN(n)&&this.inboundIndex(n)){const t=this.tokens.splice(n,1);return e||this.dispatch("removeToken",[t,n]),t}else return{FAIL:"removeToken: invalid token index."}};mt.prototype.insertToken=function(n,e,t){return n.every(s=>s instanceof ds)?(this.tokens.splice.apply(this.tokens,[e,0].concat(n)),t||this.dispatch("insertToken",[n,e]),n):{FAIL:"insertToken: invalid token(s)."}};mt.prototype.registerModifier=function(n,e,t){this.events.newToken.subscribe(function(i,s){const r=[i,s],a=e===null||e.apply(this,r)===!0,o=[i,s];if(a){let l=t.apply(this,o);i.setState(n,l)}}),this.registeredModifiers.push(n)};sa.prototype.subscribe=function(n){return typeof n=="function"?this.subscribers.push(n)-1:{FAIL:`invalid '${this.eventId}' event handler`}};sa.prototype.unsubscribe=function(n){this.subscribers.splice(n,1)};It.prototype.setCurrentIndex=function(n){this.index=n,this.current=this.context[n],this.backtrack=this.context.slice(0,n),this.lookahead=this.context.slice(n+1)};It.prototype.get=function(n){switch(!0){case n===0:return this.current;case(n<0&&Math.abs(n)<=this.backtrack.length):return this.backtrack.slice(n)[0];case(n>0&&n<=this.lookahead.length):return this.lookahead[n-1];default:return null}};mt.prototype.rangeToText=function(n){if(n instanceof vl)return this.getRangeTokens(n).map(e=>e.char).join("")};mt.prototype.getText=function(){return this.tokens.map(n=>n.char).join("")};mt.prototype.getContext=function(n){let e=this.registeredContexts[n];return e||null};mt.prototype.on=function(n,e){const t=this.events[n];return t?t.subscribe(e):null};mt.prototype.dispatch=function(n,e){const t=this.events[n];if(t instanceof sa)for(let i=0;i<t.subscribers.length;i++)t.subscribers[i].apply(this,e||[])};mt.prototype.registerContextChecker=function(n,e,t){if(this.getContext(n))return{FAIL:`context name '${n}' is already registered.`};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof t!="function")return{FAIL:"missing context end check."};const i=new p1(n,e,t);return this.registeredContexts[n]=i,this.contextCheckers.push(i),i};mt.prototype.getRangeTokens=function(n){const e=n.startIndex+n.endOffset;return[].concat(this.tokens.slice(n.startIndex,e))};mt.prototype.getContextRanges=function(n){const e=this.getContext(n);return e?e.ranges:{FAIL:`context checker '${n}' is not registered.`}};mt.prototype.resetContextsRanges=function(){const n=this.registeredContexts;for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)){const t=n[e];t.ranges=[]}};mt.prototype.updateContextsRanges=function(){this.resetContextsRanges();const n=this.tokens.map(e=>e.char);for(let e=0;e<n.length;e++){const t=new It(n,e);this.runContextCheck(t)}this.dispatch("updateContextsRanges",[this.registeredContexts])};mt.prototype.setEndOffset=function(n,e){const t=this.getContext(e).openRange.startIndex;let i=new vl(t,n,e);const s=this.getContext(e).ranges;return i.rangeId=`${e}.${s.length}`,s.push(i),this.getContext(e).openRange=null,i};mt.prototype.runContextCheck=function(n){const e=n.index;for(let t=0;t<this.contextCheckers.length;t++){const i=this.contextCheckers[t];let s=i.contextName,r=this.getContext(s).openRange;if(!r&&i.checkStart(n)&&(r=new vl(e,null,s),this.getContext(s).openRange=r,this.dispatch("contextStart",[s,e])),r&&i.checkEnd(n)){const a=e-r.startIndex+1,o=this.setEndOffset(a,s);this.dispatch("contextEnd",[s,o])}}};mt.prototype.tokenize=function(n){this.tokens=[],this.resetContextsRanges();let e=Array.from(n);this.dispatch("start");for(let t=0;t<e.length;t++){const i=e[t],s=new It(e,t);this.dispatch("next",[s]),this.runContextCheck(s);let r=new ds(i);this.tokens.push(r),this.dispatch("newToken",[r,s])}return this.dispatch("end",[this.tokens]),this.tokens};var g1=mt;function Jn(n){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(n)}function gf(n){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(n)}function ti(n){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(n)}function Rr(n){return/[\u0E00-\u0E7F]/.test(n)}function Dr(n){return/[A-z]/.test(n)}function v1(n){return/\s/.test(n)}function Wt(n){this.font=n,this.features={}}function qn(n){this.id=n.id,this.tag=n.tag,this.substitution=n.substitution}function ni(n,e){if(!n)return-1;switch(e.format){case 1:return e.glyphs.indexOf(n);case 2:{let t=e.ranges;for(let i=0;i<t.length;i++){const s=t[i];if(n>=s.start&&n<=s.end){let r=n-s.start;return s.index+r}}break}default:return-1}return-1}function x1(n,e){return ni(n,e.coverage)===-1?null:n+e.deltaGlyphId}function _1(n,e){let t=ni(n,e.coverage);return t===-1?null:e.substitute[t]}function Xa(n,e){let t=[];for(let i=0;i<n.length;i++){const s=n[i];let r=e.current;r=Array.isArray(r)?r[0]:r;const a=ni(r,s);a!==-1&&t.push(a)}return t.length!==n.length?-1:t}function y1(n,e){const t=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(n.context.length<t)return[];let i=Xa(e.inputCoverage,n);if(i===-1)return[];const s=e.inputCoverage.length-1;if(n.lookahead.length<e.lookaheadCoverage.length)return[];let r=n.lookahead.slice(s);for(;r.length&&ti(r[0].char);)r.shift();const a=new It(r,0);let o=Xa(e.lookaheadCoverage,a),l=[].concat(n.backtrack);for(l.reverse();l.length&&ti(l[0].char);)l.shift();if(l.length<e.backtrackCoverage.length)return[];const c=new It(l,0);let u=Xa(e.backtrackCoverage,c);const f=i.length===e.inputCoverage.length&&o.length===e.lookaheadCoverage.length&&u.length===e.backtrackCoverage.length;let h=[];if(f)for(let d=0;d<e.lookupRecords.length;d++){const p=e.lookupRecords[d],v=p.lookupListIndex,m=this.getLookupByIndex(v);for(let g=0;g<m.subtables.length;g++){let T=m.subtables[g],S,y=this.getSubstitutionType(m,T);if(y==="71"?(y=this.getSubstitutionType(T,T.extension),S=this.getLookupMethod(T,T.extension),T=T.extension):S=this.getLookupMethod(m,T),y==="12"){const R=n.get(p.sequenceIndex),C=S(R);C&&h.push(C)}else if(y==="21"){const R=n.get(p.sequenceIndex),C=S(R);C&&h.push(C)}else throw new Error(`Substitution type ${y} is not supported in chaining substitution`)}}return h}function S1(n,e){let t=n.current,i=ni(t,e.coverage);if(i===-1)return null;let s,r=e.ligatureSets[i];for(let a=0;a<r.length;a++){s=r[a];for(let o=0;o<s.components.length;o++){const l=n.lookahead[o],c=s.components[o];if(l!==c)break;if(o===s.components.length-1)return s}}return null}function b1(n,e){let t=n.current;if(ni(t,e.coverage)===-1)return null;for(const s of e.ruleSets)for(const r of s){let a=!0;for(let o=0;o<r.input.length;o++)if(n.lookahead[o]!==r.input[o]){a=!1;break}if(a){let o=[];o.push(t);for(let c=0;c<r.input.length;c++)o.push(r.input[c]);const l=(c,u)=>{const{lookupListIndex:f,sequenceIndex:h}=u,{subtables:d}=this.getLookupByIndex(f);for(const p of d)ni(c[h],p.coverage)!==-1&&(c[h]=p.deltaGlyphId)};for(let c=0;c<r.lookupRecords.length;c++){const u=r.lookupRecords[c];l(o,u)}return o}}return null}function M1(n,e){if(n.context.length<e.coverages.length)return[];for(let i=0;i<e.coverages.length;i++){let s=n.get(i);if(s=Array.isArray(s)?s[0]:s,ni(s,e.coverages[i])===-1)return[]}let t=[];for(let i=0;i<e.lookupRecords.length;i++){const s=e.lookupRecords[i],r=s.lookupListIndex,a=this.getLookupByIndex(r);for(let o=0;o<a.subtables.length;o++){let l=a.subtables[o],c,u=this.getSubstitutionType(a,l);if(u==="71"?(u=this.getSubstitutionType(l,l.extension),c=this.getLookupMethod(l,l.extension),l=l.extension):c=this.getLookupMethod(a,l),u==="12"){const f=n.get(s.sequenceIndex),h=c(f);h&&t.push(h)}else if(u==="21"){const f=n.get(s.sequenceIndex),h=c(f);h&&t.push(h)}}}return t}function T1(n,e){let t=ni(n,e.coverage);return t===-1?null:e.sequences[t]}Wt.prototype.getDefaultScriptFeaturesIndexes=function(){const n=this.font.tables.gsub.scripts;for(let e=0;e<n.length;e++){const t=n[e];if(t.tag==="DFLT")return t.script.defaultLangSys.featureIndexes}return[]};Wt.prototype.getScriptFeaturesIndexes=function(n){if(!this.font.tables.gsub)return[];if(!n)return this.getDefaultScriptFeaturesIndexes();const t=this.font.tables.gsub.scripts;for(let i=0;i<t.length;i++){const s=t[i];if(s.tag===n&&s.script.defaultLangSys)return s.script.defaultLangSys.featureIndexes;{let r=s.langSysRecords;if(r)for(let a=0;a<r.length;a++){const o=r[a];if(o.tag===n)return o.langSys.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};Wt.prototype.mapTagsToFeatures=function(n,e){let t={};for(let i=0;i<n.length;i++){const s=n[i].tag,r=n[i].feature;t[s]=r}this.features[e].tags=t};Wt.prototype.getScriptFeatures=function(n){let e=this.features[n];if(Object.prototype.hasOwnProperty.call(this.features,n))return e;const t=this.getScriptFeaturesIndexes(n);if(!t)return null;const i=this.font.tables.gsub;return e=t.map(s=>i.features[s]),this.features[n]=e,this.mapTagsToFeatures(e,n),e};Wt.prototype.getSubstitutionType=function(n,e){const t=n.lookupType.toString(),i=e.substFormat.toString();return t+i};Wt.prototype.getLookupMethod=function(n,e){let t=this.getSubstitutionType(n,e);switch(t){case"11":return i=>x1.apply(this,[i,e]);case"12":return i=>_1.apply(this,[i,e]);case"63":return i=>y1.apply(this,[i,e]);case"41":return i=>S1.apply(this,[i,e]);case"21":return i=>T1.apply(this,[i,e]);case"51":return i=>b1.apply(this,[i,e]);case"53":return i=>M1.apply(this,[i,e]);default:throw new Error(`substitutionType : ${t} lookupType: ${n.lookupType} - substFormat: ${e.substFormat} is not yet supported`)}};Wt.prototype.lookupFeature=function(n){let e=n.contextParams,t=e.index;const i=this.getFeature({tag:n.tag,script:n.script});if(!i)return new Error(`font '${(this.font.names.unicode||this.font.names.windows||this.font.names.macintosh).fullName.en}' doesn't support feature '${n.tag}' for script '${n.script}'.`);const s=this.getFeatureLookups(i),r=[].concat(e.context);for(let a=0;a<s.length;a++){const o=s[a],l=this.getLookupSubtables(o);for(let c=0;c<l.length;c++){let u=l[c],f=this.getSubstitutionType(o,u),h;f==="71"?(f=this.getSubstitutionType(u,u.extension),h=this.getLookupMethod(u,u.extension),u=u.extension):h=this.getLookupMethod(o,u);let d;switch(f){case"11":d=h(e.current),d&&r.splice(t,1,new qn({id:11,tag:n.tag,substitution:d}));break;case"12":d=h(e.current),d&&r.splice(t,1,new qn({id:12,tag:n.tag,substitution:d}));break;case"63":d=h(e),Array.isArray(d)&&d.length&&r.splice(t,1,new qn({id:63,tag:n.tag,substitution:d}));break;case"41":d=h(e),d&&r.splice(t,1,new qn({id:41,tag:n.tag,substitution:d}));break;case"21":d=h(e.current),d&&r.splice(t,1,new qn({id:21,tag:n.tag,substitution:d}));break;case"51":case"53":d=h(e),Array.isArray(d)&&d.length&&r.splice(t,1,new qn({id:parseInt(f),tag:n.tag,substitution:d}));break}e=new It(r,t),!(Array.isArray(d)&&!d.length)&&(d=null)}}return r.length?r:null};Wt.prototype.supports=function(n){if(!n.script)return!1;this.getScriptFeatures(n.script);const e=Object.prototype.hasOwnProperty.call(this.features,n.script);if(!n.tag)return e;const t=this.features[n.script].some(i=>i.tag===n.tag);return e&&t};Wt.prototype.getLookupSubtables=function(n){return n.subtables||null};Wt.prototype.getLookupByIndex=function(n){return this.font.tables.gsub.lookups[n]||null};Wt.prototype.getFeatureLookups=function(n){return n.lookupListIndexes.map(this.getLookupByIndex.bind(this))};Wt.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};Object.prototype.hasOwnProperty.call(this.features,e.script)||this.getScriptFeatures(e.script);const t=this.features[e.script];return t?t.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:`No feature for script ${e.script}`}};var E1=Wt;function A1(n){const e=n.current,t=n.get(-1);return t===null&&Jn(e)||!Jn(t)&&Jn(e)}function C1(n){const e=n.get(1);return e===null||!Jn(e)}var w1={startCheck:A1,endCheck:C1};function R1(n){const e=n.current,t=n.get(-1);return(Jn(e)||ti(e))&&!Jn(t)}function D1(n){const e=n.get(1);switch(!0){case e===null:return!0;case(!Jn(e)&&!ti(e)):{const t=v1(e);if(!t)return!0;if(t){let i=!1;if(i=n.lookahead.some(s=>Jn(s)||ti(s)),!i)return!0}break}default:return!1}}var L1={startCheck:R1,endCheck:D1};function P1(n,e,t){e[t].setState(n.tag,n.substitution)}function U1(n,e,t){e[t].setState(n.tag,n.substitution)}function qa(n,e,t){for(let i=0;i<n.substitution.length;i++){const s=n.substitution[i],r=e[t+i];if(Array.isArray(s)){s.length?r.setState(n.tag,s[0]):r.setState("deleted",!0);continue}r.setState(n.tag,s)}}function I1(n,e,t){let i=e[t];i.setState(n.tag,n.substitution.ligGlyph);const s=n.substitution.components.length;for(let r=0;r<s;r++)i=e[t+r+1],i.setState("deleted",!0)}var mu={11:P1,12:U1,63:qa,41:I1,51:qa,53:qa};function O1(n,e,t){n instanceof qn&&mu[n.id]&&mu[n.id](n,e,t)}var Ai=O1;function F1(n){let e=[].concat(n.backtrack);for(let t=e.length-1;t>=0;t--){const i=e[t],s=gf(i),r=ti(i);if(!s&&!r)return!0;if(s)return!1}return!1}function N1(n){if(gf(n.current))return!1;for(let e=0;e<n.lookahead.length;e++){const t=n.lookahead[e];if(!ti(t))return!0}return!1}function k1(n){const e="arab",t=this.featuresTags[e],i=this.tokenizer.getRangeTokens(n);if(i.length===1)return;let s=new It(i.map(a=>a.getState("glyphIndex")),0);const r=new It(i.map(a=>a.char),0);for(let a=0;a<i.length;a++){const o=i[a];if(ti(o.char))continue;s.setCurrentIndex(a),r.setCurrentIndex(a);let l=0;F1(r)&&(l|=1),N1(r)&&(l|=2);let c;switch(l){case 1:c="fina";break;case 2:c="init";break;case 3:c="medi";break}if(t.indexOf(c)===-1)continue;let u=this.query.lookupFeature({tag:c,script:e,contextParams:s});if(u instanceof Error){console.info(u.message);continue}for(let f=0;f<u.length;f++){const h=u[f];h instanceof qn&&(Ai(h,i,f),s.context[f]=h.substitution)}}}var B1=k1;function gu(n,e){const t=n.map(i=>i.activeState.value);return new It(t,0)}function z1(n){const e="arab";let t=this.tokenizer.getRangeTokens(n),i=gu(t);for(let s=0;s<i.context.length;s++){i.setCurrentIndex(s);let r=this.query.lookupFeature({tag:"rlig",script:e,contextParams:i});if(r.length){for(let a=0;a<r.length;a++){const o=r[a];Ai(o,t,s)}i=gu(t)}}}var H1=z1;function G1(n){return n.index===0&&n.context.length>1}function V1(n){return n.index===n.context.length-1}var W1={startCheck:G1,endCheck:V1};function vu(n,e){const t=n.map(i=>i.activeState.value);return new It(t,0)}function X1(n){const e="delf",t="ccmp";let i=this.tokenizer.getRangeTokens(n),s=vu(i);for(let r=0;r<s.context.length;r++){if(!this.query.getFeature({tag:t,script:e,contextParams:s}))continue;s.setCurrentIndex(r);let a=this.query.lookupFeature({tag:t,script:e,contextParams:s});if(a.length){for(let o=0;o<a.length;o++){const l=a[o];Ai(l,i,r)}s=vu(i)}}}var q1=X1;function Y1(n){const e=n.current,t=n.get(-1);return t===null&&Dr(e)||!Dr(t)&&Dr(e)}function j1(n){const e=n.get(1);return e===null||!Dr(e)}var $1={startCheck:Y1,endCheck:j1};function xu(n,e){const t=n.map(i=>i.activeState.value);return new It(t,0)}function Z1(n){const e="latn";let t=this.tokenizer.getRangeTokens(n),i=xu(t);for(let s=0;s<i.context.length;s++){i.setCurrentIndex(s);let r=this.query.lookupFeature({tag:"liga",script:e,contextParams:i});if(r.length){for(let a=0;a<r.length;a++){const o=r[a];Ai(o,t,s)}i=xu(t)}}}var K1=Z1;function J1(n){const e=n.current,t=n.get(-1);return t===null&&Rr(e)||!Rr(t)&&Rr(e)}function Q1(n){const e=n.get(1);return e===null||!Rr(e)}var eb={startCheck:J1,endCheck:Q1};function _u(n,e){const t=n.map(i=>i.activeState.value);return new It(t,e||0)}function tb(n){const e="thai";let t=this.tokenizer.getRangeTokens(n),i=_u(t,0);for(let s=0;s<i.context.length;s++){i.setCurrentIndex(s);let r=this.query.lookupFeature({tag:"ccmp",script:e,contextParams:i});if(r.length){for(let a=0;a<r.length;a++){const o=r[a];Ai(o,t,s)}i=_u(t,s)}}}var nb=tb;function yu(n,e){const t=n.map(i=>i.activeState.value);return new It(t,e||0)}function ib(n){const e="thai";let t=this.tokenizer.getRangeTokens(n),i=yu(t,0);for(let s=0;s<i.context.length;s++){i.setCurrentIndex(s);let r=this.query.lookupFeature({tag:"liga",script:e,contextParams:i});if(r.length){for(let a=0;a<r.length;a++){const o=r[a];Ai(o,t,s)}i=yu(t,s)}}}var sb=ib;function Su(n,e){const t=n.map(i=>i.activeState.value);return new It(t,e||0)}function rb(n){const e="thai";let t=this.tokenizer.getRangeTokens(n),i=Su(t,0);for(let s=0;s<i.context.length;s++){i.setCurrentIndex(s);let r=this.query.lookupFeature({tag:"rlig",script:e,contextParams:i});if(r.length){for(let a=0;a<r.length;a++){const o=r[a];Ai(o,t,s)}i=Su(t,s)}}}var ab=rb;function qo(n){if(n===null)return!1;const e=n.codePointAt(0);return e>=6155&&e<=6157||e>=65024&&e<=65039||e>=917760&&e<=917999}function ob(n){const e=n.current,t=n.get(1);return t===null&&qo(e)||qo(t)}function lb(n){const e=n.get(1);return e===null||!qo(e)}var cb={startCheck:ob,endCheck:lb};function ub(n){const e=this.query.font,t=this.tokenizer.getRangeTokens(n);if(t[1].setState("deleted",!0),e.tables.cmap&&e.tables.cmap.varSelectorList){const i=t[0].char.codePointAt(0),s=t[1].char.codePointAt(0),r=e.tables.cmap.varSelectorList[s];if(r!==void 0&&r.nonDefaultUVS){const a=r.nonDefaultUVS.uvsMappings;if(a[i]){const o=a[i].glyphID;e.glyphs.glyphs[o]!==void 0&&t[0].setState("glyphIndex",o)}}}}var hb=ub;function $t(n){this.baseDir=n||"ltr",this.tokenizer=new g1,this.featuresTags={}}$t.prototype.setText=function(n){this.text=n};$t.prototype.contextChecks={ccmpReplacementCheck:W1,latinWordCheck:$1,arabicWordCheck:w1,arabicSentenceCheck:L1,thaiWordCheck:eb,unicodeVariationSequenceCheck:cb};function Wi(n){const e=this.contextChecks[`${n}Check`];return this.tokenizer.registerContextChecker(n,e.startCheck,e.endCheck)}function fb(){return Wi.call(this,"ccmpReplacement"),Wi.call(this,"latinWord"),Wi.call(this,"arabicWord"),Wi.call(this,"arabicSentence"),Wi.call(this,"thaiWord"),Wi.call(this,"unicodeVariationSequence"),this.tokenizer.tokenize(this.text)}function db(){const n=this.tokenizer.getContextRanges("arabicSentence");for(let e=0;e<n.length;e++){const t=n[e];let i=this.tokenizer.getRangeTokens(t);this.tokenizer.replaceRange(t.startIndex,t.endOffset,i.reverse())}}$t.prototype.registerFeatures=function(n,e){const t=e.filter(i=>this.query.supports({script:n,tag:i}));Object.prototype.hasOwnProperty.call(this.featuresTags,n)?this.featuresTags[n]=this.featuresTags[n].concat(t):this.featuresTags[n]=t};$t.prototype.applyFeatures=function(n,e){if(!n)throw new Error("No valid font was provided to apply features");this.query||(this.query=new E1(n));for(let t=0;t<e.length;t++){const i=e[t];this.query.supports({script:i.script})&&this.registerFeatures(i.script,i.tags)}};$t.prototype.registerModifier=function(n,e,t){this.tokenizer.registerModifier(n,e,t)};function Gs(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function pb(){if(!Object.prototype.hasOwnProperty.call(this.featuresTags,"arab"))return;Gs.call(this);const e=this.tokenizer.getContextRanges("arabicWord");for(let t=0;t<e.length;t++){const i=e[t];B1.call(this,i)}}function mb(){Gs.call(this);const n=this.tokenizer.getContextRanges("ccmpReplacement");for(let e=0;e<n.length;e++){const t=n[e];q1.call(this,t)}}function gb(){if(!this.hasFeatureEnabled("arab","rlig"))return;Gs.call(this);const n=this.tokenizer.getContextRanges("arabicWord");for(let e=0;e<n.length;e++){const t=n[e];H1.call(this,t)}}function vb(){if(!this.hasFeatureEnabled("latn","liga"))return;Gs.call(this);const n=this.tokenizer.getContextRanges("latinWord");for(let e=0;e<n.length;e++){const t=n[e];K1.call(this,t)}}function xb(){const n=this.tokenizer.getContextRanges("unicodeVariationSequence");for(let e=0;e<n.length;e++){const t=n[e];hb.call(this,t)}}function _b(){Gs.call(this);const n=this.tokenizer.getContextRanges("thaiWord");for(let e=0;e<n.length;e++){const t=n[e];this.hasFeatureEnabled("thai","liga")&&sb.call(this,t),this.hasFeatureEnabled("thai","rlig")&&ab.call(this,t),this.hasFeatureEnabled("thai","ccmp")&&nb.call(this,t)}}$t.prototype.checkContextReady=function(n){return!!this.tokenizer.getContext(n)};$t.prototype.applyFeaturesToContexts=function(){this.checkContextReady("ccmpReplacement")&&mb.call(this),this.checkContextReady("arabicWord")&&(pb.call(this),gb.call(this)),this.checkContextReady("latinWord")&&vb.call(this),this.checkContextReady("arabicSentence")&&db.call(this),this.checkContextReady("thaiWord")&&_b.call(this),this.checkContextReady("unicodeVariationSequence")&&xb.call(this)};$t.prototype.hasFeatureEnabled=function(n,e){return(this.featuresTags[n]||[]).indexOf(e)!==-1};$t.prototype.processText=function(n){(!this.text||this.text!==n)&&(this.setText(n),fb.call(this),this.applyFeaturesToContexts())};$t.prototype.getBidiText=function(n){return this.processText(n),this.tokenizer.getText()};$t.prototype.getTextGlyphs=function(n){this.processText(n);let e=[];for(let t=0;t<this.tokenizer.tokens.length;t++){const i=this.tokenizer.tokens[t];if(i.state.deleted)continue;const s=i.activeState.value;e.push(Array.isArray(s)?s[0]:s)}return e};var yb=$t;function Ya(n){return{fontFamily:{en:n.familyName||" "},fontSubfamily:{en:n.styleName||" "},fullName:{en:n.fullName||n.familyName+" "+n.styleName},postScriptName:{en:n.postScriptName||(n.familyName+n.styleName).replace(/\s/g,"")},designer:{en:n.designer||" "},designerURL:{en:n.designerURL||" "},manufacturer:{en:n.manufacturer||" "},manufacturerURL:{en:n.manufacturerURL||" "},license:{en:n.license||" "},licenseURL:{en:n.licenseURL||" "},version:{en:n.version||"Version 0.1"},description:{en:n.description||" "},copyright:{en:n.copyright||" "},trademark:{en:n.trademark||" "}}}function nt(n){if(n=n||{},n.tables=n.tables||{},!n.empty){if(!n.familyName)throw new Error("When creating a new Font object, familyName is required.");if(!n.styleName)throw new Error("When creating a new Font object, styleName is required.");if(!n.unitsPerEm)throw new Error("When creating a new Font object, unitsPerEm is required.");if(!n.ascender)throw new Error("When creating a new Font object, ascender is required.");if(n.descender>0)throw new Error("When creating a new Font object, negative descender value is required.");this.names={},this.names.unicode=Ya(n),this.names.macintosh=Ya(n),this.names.windows=Ya(n),this.unitsPerEm=n.unitsPerEm||1e3,this.ascender=n.ascender,this.descender=n.descender,this.createdTimestamp=n.createdTimestamp,this.italicAngle=n.italicAngle||0,this.weightClass=n.weightClass||0;let e=0;n.fsSelection?e=n.fsSelection:(this.italicAngle<0?e|=this.fsSelectionValues.ITALIC:this.italicAngle>0&&(e|=this.fsSelectionValues.OBLIQUE),this.weightClass>=600&&(e|=this.fsSelectionValues.BOLD),e===0&&(e=this.fsSelectionValues.REGULAR)),(!n.panose||!Array.isArray(n.panose))&&(n.panose=[0,0,0,0,0,0,0,0,0]),this.tables=Object.assign(n.tables,{os2:Object.assign({usWeightClass:n.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:n.widthClass||this.usWidthClasses.MEDIUM,bFamilyType:n.panose[0]||0,bSerifStyle:n.panose[1]||0,bWeight:n.panose[2]||0,bProportion:n.panose[3]||0,bContrast:n.panose[4]||0,bStrokeVariation:n.panose[5]||0,bArmStyle:n.panose[6]||0,bLetterform:n.panose[7]||0,bMidline:n.panose[8]||0,bXHeight:n.panose[9]||0,fsSelection:e},n.tables.os2)})}this.supported=!0,this.glyphs=new _n.GlyphSet(this,n.glyphs||[]),this.encoding=new wh(this),this.position=new my(this),this.substitution=new by(this),this.tables=this.tables||{},this.tables=new Proxy(this.tables,{set:(e,t,i)=>(e[t]=i,e.fvar&&(e.gvar||e.cff2)&&!this.variation&&(this.variation=new Ny(this)),!0)}),this.palettes=new af(this),this.layers=new My(this),this.svgImages=new Ty(this),this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){return this._hinting?this._hinting:this.outlinesFormat==="truetype"?this._hinting=new d1(this):null}})}nt.prototype.hasChar=function(n){return this.encoding.charToGlyphIndex(n)>0};nt.prototype.charToGlyphIndex=function(n){return this.encoding.charToGlyphIndex(n)};nt.prototype.charToGlyph=function(n){const e=this.charToGlyphIndex(n);let t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};nt.prototype.updateFeatures=function(n){return this.defaultRenderOptions.features.map(e=>e.script==="latn"?{script:"latn",tags:e.tags.filter(t=>n[t])}:e)};nt.prototype.stringToGlyphIndexes=function(n,e){const t=new yb,i=r=>this.charToGlyphIndex(r.char);t.registerModifier("glyphIndex",null,i);let s=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;return t.applyFeatures(this,s),t.getTextGlyphs(n)};nt.prototype.stringToGlyphs=function(n,e){const t=this.stringToGlyphIndexes(n,e);let i=t.length;const s=new Array(i),r=this.glyphs.get(0);for(let a=0;a<i;a+=1)s[a]=this.glyphs.get(t[a])||r;return s};nt.prototype.nameToGlyphIndex=function(n){return this.glyphNames.nameToGlyphIndex(n)};nt.prototype.nameToGlyph=function(n){const e=this.nameToGlyphIndex(n);let t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};nt.prototype.glyphIndexToName=function(n){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(n):""};nt.prototype.getKerningValue=function(n,e){n=n.index||n,e=e.index||e;const t=this.position.defaultKerningTables;return t?this.position.getKerningValue(t,n,e):this.kerningPairs[n+","+e]||0};nt.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]},{script:"thai",tags:["liga","rlig","ccmp"]}],hinting:!1,usePalette:0,drawLayers:!0,drawSVG:!0};nt.prototype.forEachGlyph=function(n,e,t,i,s,r){e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:72,s=Object.assign({},this.defaultRenderOptions,s);const a=1/this.unitsPerEm*i,o=this.stringToGlyphs(n,s);let l;if(s.kerning){const c=s.script||this.position.getDefaultScriptName();l=this.position.getKerningTables(c,s.language)}for(let c=0;c<o.length;c+=1){const u=o[c];if(r.call(this,u,e,t,i,s),u.advanceWidth&&(e+=u.advanceWidth*a),s.kerning&&c<o.length-1){const f=l?this.position.getKerningValue(l,u.index,o[c+1].index):this.getKerningValue(u,o[c+1]);e+=f*a}s.letterSpacing?e+=s.letterSpacing*i:s.tracking&&(e+=s.tracking/1e3*i)}return e};nt.prototype.getPath=function(n,e,t,i,s){s=Object.assign({},this.defaultRenderOptions,s);const r=new ss;if(r._layers=[],Nh(this,r),r.stroke){const a=1/(r.unitsPerEm||1e3)*i;r.strokeWidth*=a}return this.forEachGlyph(n,e,t,i,s,(a,o,l,c)=>{const u=a.getPath(o,l,c,s,this);if(s.drawSVG||s.drawLayers){const f=u._layers;if(f&&f.length){for(let h=0;h<f.length;h++){const d=f[h];r._layers.push(d)}return}}r.extend(u)}),r};nt.prototype.getPaths=function(n,e,t,i,s){s=Object.assign({},this.defaultRenderOptions,s);const r=[];return this.forEachGlyph(n,e,t,i,s,function(a,o,l,c){const u=a.getPath(o,l,c,s,this);r.push(u)}),r};nt.prototype.getAdvanceWidth=function(n,e,t){return t=Object.assign({},this.defaultRenderOptions,t),this.forEachGlyph(n,0,0,e,t,function(){})};nt.prototype.draw=function(n,e,t,i,s,r){this.getPath(e,t,i,s,r).draw(n)};nt.prototype.drawPoints=function(n,e,t,i,s,r){r=Object.assign({},this.defaultRenderOptions,r),this.forEachGlyph(e,t,i,s,r,function(a,o,l,c){a.drawPoints(n,o,l,c,r,this)})};nt.prototype.drawMetrics=function(n,e,t,i,s,r){r=Object.assign({},this.defaultRenderOptions,r),this.forEachGlyph(e,t,i,s,r,function(a,o,l,c){a.drawMetrics(n,o,l,c)})};nt.prototype.getEnglishName=function(n){const e=(this.names.unicode||this.names.macintosh||this.names.windows)[n];if(e)return e.en};nt.prototype.validate=function(){const n=[],e=this;function t(s,r){s||(console.warn(`[opentype.js] ${r}`),n.push(r))}function i(s){const r=e.getEnglishName(s);t(r&&r.trim().length>0,"No English "+s+" specified.")}if(i("fontFamily"),i("weightName"),i("manufacturer"),i("copyright"),i("version"),t(this.unitsPerEm>0,"No unitsPerEm specified."),this.tables.colr){const s=this.tables.colr.baseGlyphRecords;let r=-1;for(let a=0;a<s.length;a++){const o=s[a].glyphID;if(t(r<s[a].glyphID,`baseGlyphs must be sorted by GlyphID in ascending order, but glyphID ${o} comes after ${r}`),r>s[a].glyphID)break;r=o}}return n};nt.prototype.toTables=function(){return py.fontToTable(this)};nt.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};nt.prototype.toArrayBuffer=function(){const e=this.toTables().encode(),t=new ArrayBuffer(e.length),i=new Uint8Array(t);for(let s=0;s<e.length;s++)i[s]=e[s];return t};nt.prototype.download=function(){console.error("DEPRECATED: platform-specific actions are to be implemented on user-side")};nt.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};nt.prototype.macStyleValues={BOLD:1,ITALIC:2,UNDERLINE:4,OUTLINED:8,SHADOW:16,CONDENSED:32,EXTENDED:64};nt.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};nt.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};var Sb=nt;function bb(n,e){const t=new oe.Parser(n,e),i=t.parseUShort(),s=t.parseUShort();i!==1&&console.warn(`Unsupported hvar table version ${i}.${s}`);const r=[i,s],a=t.parsePointer32(function(){return this.parseItemVariationStore()}),o=t.parsePointer32(function(){return this.parseDeltaSetIndexMap()}),l=t.parsePointer32(function(){return this.parseDeltaSetIndexMap()}),c=t.parsePointer32(function(){return this.parseDeltaSetIndexMap()});return{version:r,itemVariationStore:a,advanceWidth:o,lsb:l,rsb:c}}function Mb(){console.warn("Writing of hvar tables is not yet supported.")}var Tb={make:Mb,parse:bb},Eb=function(){return{coverage:this.parsePointer(I.coverage),attachPoints:this.parseList(I.pointer(I.uShortList))}},Ab=function(){var n=this.parseUShort();if(Se.argument(n===1||n===2||n===3,"Unsupported CaretValue table version."),n===1)return{coordinate:this.parseShort()};if(n===2)return{pointindex:this.parseShort()};if(n===3)return{coordinate:this.parseShort()}},Cb=function(){return this.parseList(I.pointer(Ab))},wb=function(){return{coverage:this.parsePointer(I.coverage),ligGlyphs:this.parseList(I.pointer(Cb))}},Rb=function(){return this.parseUShort(),this.parseList(I.pointer(I.coverage))};function Db(n,e){e=e||0;const t=new I(n,e),i=t.parseVersion(1);Se.argument(i===1||i===1.2||i===1.3,"Unsupported GDEF table version.");var s={version:i,classDef:t.parsePointer(I.classDef),attachList:t.parsePointer(Eb),ligCaretList:t.parsePointer(wb),markAttachClassDef:t.parsePointer(I.classDef)};return i>=1.2&&(s.markGlyphSets=t.parsePointer(Rb)),s}var Lb={parse:Db},cn=new Array(10);cn[1]=function(){const e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{posFormat:1,coverage:this.parsePointer(I.coverage),value:this.parseValueRecord()};if(t===2)return{posFormat:2,coverage:this.parsePointer(I.coverage),values:this.parseValueRecordList()};Se.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};cn[2]=function(){const e=this.offset+this.relativeOffset,t=this.parseUShort();Se.assert(t===1||t===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");const i=this.parsePointer(I.coverage),s=this.parseUShort(),r=this.parseUShort();if(t===1)return{posFormat:t,coverage:i,valueFormat1:s,valueFormat2:r,pairSets:this.parseList(I.pointer(I.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(s),value2:this.parseValueRecord(r)}})))};if(t===2){const a=this.parsePointer(I.classDef),o=this.parsePointer(I.classDef),l=this.parseUShort(),c=this.parseUShort();return{posFormat:t,coverage:i,valueFormat1:s,valueFormat2:r,classDef1:a,classDef2:o,class1Count:l,class2Count:c,classRecords:this.parseList(l,I.list(c,function(){return{value1:this.parseValueRecord(s),value2:this.parseValueRecord(r)}}))}}};cn[3]=function(){return{error:"GPOS Lookup 3 not supported"}};cn[4]=function(){return{error:"GPOS Lookup 4 not supported"}};cn[5]=function(){return{error:"GPOS Lookup 5 not supported"}};cn[6]=function(){return{error:"GPOS Lookup 6 not supported"}};cn[7]=function(){return{error:"GPOS Lookup 7 not supported"}};cn[8]=function(){return{error:"GPOS Lookup 8 not supported"}};cn[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function Pb(n,e){e=e||0;const t=new I(n,e),i=t.parseVersion(1);return Se.argument(i===1||i===1.1,"Unsupported GPOS table version "+i),i===1?{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(cn)}:{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(cn),variations:t.parseFeatureVariationsList()}}var Ub=new Array(10);function Ib(n){return new Q.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new Q.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new Q.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new Q.LookupList(n.lookups,Ub)}])}var Ob={parse:Pb,make:Ib};function Fb(n){const e={};n.skip("uShort");const t=n.parseUShort();Se.argument(t===0,"Unsupported kern sub-table version."),n.skip("uShort",2);const i=n.parseUShort();n.skip("uShort",3);for(let s=0;s<i;s+=1){const r=n.parseUShort(),a=n.parseUShort(),o=n.parseShort();e[r+","+a]=o}return e}function Nb(n){const e={};n.skip("uShort"),n.parseULong()>1&&console.warn("Only the first kern subtable is supported."),n.skip("uLong");const s=n.parseUShort()&255;if(n.skip("uShort"),s===0){const r=n.parseUShort();n.skip("uShort",3);for(let a=0;a<r;a+=1){const o=n.parseUShort(),l=n.parseUShort(),c=n.parseShort();e[o+","+l]=c}}return e}function kb(n,e){const t=new oe.Parser(n,e),i=t.parseUShort();if(i===0)return Fb(t);if(i===1)return Nb(t);throw new Error("Unsupported kern table version ("+i+").")}var Bb={parse:kb};function zb(n,e,t,i){const s=new oe.Parser(n,e),r=i?s.parseUShort:s.parseULong,a=[];for(let o=0;o<t+1;o+=1){let l=r.call(s);i&&(l*=2),a.push(l)}return a}var Hb={parse:zb};function bu(n,e){const t=[];let i=12;for(let s=0;s<e;s+=1){const r=oe.getTag(n,i),a=oe.getULong(n,i+4),o=oe.getULong(n,i+8),l=oe.getULong(n,i+12);t.push({tag:r,checksum:a,offset:o,length:l,compression:!1}),i+=16}return t}function Gb(n,e){const t=[];let i=44;for(let s=0;s<e;s+=1){const r=oe.getTag(n,i),a=oe.getULong(n,i+4),o=oe.getULong(n,i+8),l=oe.getULong(n,i+12);let c;o<l?c="WOFF":c=!1,t.push({tag:r,offset:a,compression:c,compressedLength:o,length:l}),i+=20}return t}function Je(n,e){if(e.compression==="WOFF"){const t=new Uint8Array(n.buffer,e.offset+2,e.compressedLength-2),i=new Uint8Array(e.length);if(gh(t,i),i.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");return{data:new DataView(i.buffer,0),offset:0}}else return{data:n,offset:e.offset}}function Vb(n,e={}){let t,i;const s=new Sb({empty:!0});n.constructor!==ArrayBuffer&&(n=new Uint8Array(n).buffer);const r=new DataView(n,0);let a,o=[];const l=oe.getTag(r,0);if(l==="\0\0\0"||l==="true"||l==="typ1")s.outlinesFormat="truetype",a=oe.getUShort(r,4),o=bu(r,a);else if(l==="OTTO")s.outlinesFormat="cff",a=oe.getUShort(r,4),o=bu(r,a);else if(l==="wOFF"){const D=oe.getTag(r,4);if(D==="\0\0\0")s.outlinesFormat="truetype";else if(D==="OTTO")s.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+l);a=oe.getUShort(r,12),o=Gb(r,a)}else if(l==="wOF2"){const D="https://github.com/opentypejs/opentype.js/issues/183#issuecomment-1147228025";throw new Error("WOFF2 require an external decompressor library, see examples at: "+D)}else throw new Error("Unsupported OpenType signature "+l);let c,u,f,h,d,p,v,m,g,T,S,y,R,C,A,L,M,_;for(let D=0;D<a;D+=1){const N=o[D];let k;switch(N.tag){case"avar":v=N;break;case"cmap":k=Je(r,N),s.tables.cmap=Ch.parse(k.data,k.offset),s.encoding=new Rh(s.tables.cmap);break;case"cvt ":k=Je(r,N),_=new oe.Parser(k.data,k.offset),s.tables.cvt=_.parseShortList(N.length/2);break;case"fvar":f=N;break;case"STAT":h=N;break;case"gvar":d=N;break;case"cvar":p=N;break;case"fpgm":k=Je(r,N),_=new oe.Parser(k.data,k.offset),s.tables.fpgm=_.parseByteList(N.length);break;case"head":k=Je(r,N),s.tables.head=zh.parse(k.data,k.offset),s.unitsPerEm=s.tables.head.unitsPerEm,t=s.tables.head.indexToLocFormat;break;case"hhea":k=Je(r,N),s.tables.hhea=Hh.parse(k.data,k.offset),s.ascender=s.tables.hhea.ascender,s.descender=s.tables.hhea.descender,s.numberOfHMetrics=s.tables.hhea.numberOfHMetrics;break;case"HVAR":R=N;break;case"hmtx":y=N;break;case"ltag":k=Je(r,N),i=Vh.parse(k.data,k.offset);break;case"COLR":k=Je(r,N),s.tables.colr=jh.parse(k.data,k.offset);break;case"CPAL":k=Je(r,N),s.tables.cpal=Uh.parse(k.data,k.offset);break;case"maxp":k=Je(r,N),s.tables.maxp=Wh.parse(k.data,k.offset),s.numGlyphs=s.tables.maxp.numGlyphs;break;case"name":L=N;break;case"OS/2":k=Je(r,N),s.tables.os2=Wo.parse(k.data,k.offset);break;case"post":k=Je(r,N),s.tables.post=Xh.parse(k.data,k.offset),s.glyphNames=new cl(s.tables.post);break;case"prep":k=Je(r,N),_=new oe.Parser(k.data,k.offset),s.tables.prep=_.parseByteList(N.length);break;case"glyf":m=N;break;case"loca":A=N;break;case"CFF ":c=N;break;case"CFF2":u=N;break;case"kern":C=N;break;case"GDEF":g=N;break;case"GPOS":T=N;break;case"GSUB":S=N;break;case"meta":M=N;break;case"gasp":try{k=Je(r,N),s.tables.gasp=ef.parse(k.data,k.offset)}catch(q){console.warn("Failed to parse gasp table, skipping."),console.warn(q)}break;case"SVG ":k=Je(r,N),s.tables.svg=tf.parse(k.data,k.offset);break}}const w=Je(r,L);if(s.tables.name=Ah.parse(w.data,w.offset,i),s.names=s.tables.name,m&&A){const D=t===0,N=Je(r,A),k=Hb.parse(N.data,N.offset,s.numGlyphs,D),q=Je(r,m);s.glyphs=cf.parse(q.data,q.offset,k,s,e)}else if(c){const D=Je(r,c);Go.parse(D.data,D.offset,s,e)}else if(u){const D=Je(r,u);Go.parse(D.data,D.offset,s,e)}else throw new Error("Font doesn't contain TrueType, CFF or CFF2 outlines.");const W=Je(r,y);if(Gh.parse(s,W.data,W.offset,s.numberOfHMetrics,s.numGlyphs,s.glyphs,e),kx(s,e),C){const D=Je(r,C);s.kerningPairs=Bb.parse(D.data,D.offset)}else s.kerningPairs={};if(g){const D=Je(r,g);s.tables.gdef=Lb.parse(D.data,D.offset)}if(T){const D=Je(r,T);s.tables.gpos=Ob.parse(D.data,D.offset),s.position.init()}if(S){const D=Je(r,S);s.tables.gsub=qh.parse(D.data,D.offset)}if(f){const D=Je(r,f);s.tables.fvar=$h.parse(D.data,D.offset,s.names)}if(h){const D=Je(r,h);s.tables.stat=Zh.parse(D.data,D.offset,s.tables.fvar)}if(d){f||console.warn("This font provides a gvar table, but no fvar table, which is required for variable fonts."),m||console.warn("This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.");const D=Je(r,d);s.tables.gvar=Qh.parse(D.data,D.offset,s.tables.fvar,s.glyphs)}if(p){f||console.warn("This font provides a cvar table, but no fvar table, which is required for variable fonts."),s.tables.cvt||console.warn("This font provides a cvar table, but no cvt table which could be made variable."),m||console.warn("This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.");const D=Je(r,p);s.tables.cvar=Jh.parse(D.data,D.offset,s.tables.fvar,s.tables.cvt||[])}if(v){f||console.warn("This font provides an avar table, but no fvar table, which is required for variable fonts.");const D=Je(r,v);s.tables.avar=Kh.parse(D.data,D.offset,s.tables.fvar)}if(R){f||console.warn("This font provides an HVAR table, but no fvar table, which is required for variable fonts."),y||console.warn("This font provides an HVAR table, but no hmtx table to vary.");const D=Je(r,R);s.tables.hvar=Tb.parse(D.data,D.offset,s.tables.fvar)}if(M){const D=Je(r,M);s.tables.meta=Yh.parse(D.data,D.offset),s.metas=s.tables.meta}return s.palettes=new af(s),s}let Mt=null;async function Wb(){Mt=await GeometryModule()}function jr(n){const e=n.size(),t=new Float32Array(e);for(let i=0;i<e;i++)t[i]=n.get(i);return t}function vf(n){const e=n.size(),t=new Uint32Array(e);for(let i=0;i<e;i++)t[i]=n.get(i);return t}function Xb(n,e,t=.1){if(!Mt)throw new Error("Not initialized.");const i=Mt.occMakeCylinder(n,e,t);return{positions:jr(i.positions),normals:jr(i.normals),indices:vf(i.indices)}}function qb(n,e){if(!Mt)throw new Error("Not initialized.");return Mt.occCreateCylinderShape(n,e)}function Yb(n){if(!Mt)throw new Error("Not initialized.");Mt.occReleaseShapeHandle(n)}function xf(n,e){const t=Mt.occGetFaceInfo(n,e);return{surfaceType:t.surfaceType,uMin:t.uMin,uMax:t.uMax,vMin:t.vMin,vMax:t.vMax}}function jb(n){return Mt.occGetWireInfo(n)}function $b(n,e){const t=Mt.occSampleWire3D(n,e),i=t.length,s=new Float32Array(i);for(let r=0;r<i;r++)s[r]=t[r];return s}function Zb(n){Mt.occReleaseWireHandle(n)}const _f={0:"Plane",1:"Cylinder",2:"Cone",3:"Sphere",4:"Torus",5:"Bezier",6:"BSpline",7:"Revolution",8:"Extrusion",9:"Offset",10:"Other"};function Kb(n,e){const t=Mt.occTessellateShape(n,e);return{positions:jr(t.positions),normals:jr(t.normals),indices:vf(t.indices)}}function Jb(n){const e=Mt.occGetTopologyInfo(n);return{numSolids:e.numSolids,numShells:e.numShells,numFaces:e.numFaces,numWires:e.numWires,numEdges:e.numEdges,numVertices:e.numVertices}}function Qb(n,e,t,i){if(!Mt)throw new Error("Not initialized.");return Mt.occMakeWireFromUVCurves(n,e,t,i)}function eM(n,e,t){if(!Mt)throw new Error("Not initialized.");const i=Mt.occBuildFacesFromWires(n,e,t),s=i.length,r=new Array(s);for(let a=0;a<s;a++)r[a]=i[a];return r}function tM(n,e){if(!Mt)throw new Error("Not initialized.");return Mt.occBuildSolidFromFace(n,e)}const bi=new wv;bi.background=new Ze(1710638);const cs=new jt(45,window.innerWidth/window.innerHeight,.1,100);cs.position.set(4,.5,5);cs.lookAt(0,0,0);const ps=new Cv({antialias:!0});ps.setSize(window.innerWidth,window.innerHeight);ps.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(ps.domElement);const xl=new Ov(cs,ps.domElement);xl.enableDamping=!0;xl.dampingFactor=.08;bi.add(new Pv(6710886));const yf=new lh(16777215,1);yf.position.set(5,8,5);bi.add(yf);const Sf=new lh(8947967,.4);Sf.position.set(-3,2,-5);bi.add(Sf);const ht={text:"CAD",offsetU:.8,offsetV:0,uvScale:2.5,embossDepth:.12,solidThickness:.08,letterSpacing:0,deflection:.05,angle:0},Mu=1,Tu=2.2;function nM(n,e,t,i,s,r,a,o){const l=r*Math.PI/180,c=Math.cos(l),u=Math.sin(l),f=(S,y)=>{const R=S/72*i,C=y/72*i;return[t+a+R*c-C*u,s+o+R*u+C*c]},h=n.getPath(0,0,e),d=[];let p=[],v=0,m=0,g=0,T=0;for(const S of h.commands)switch(S.type){case"M":p.length>0&&d.push(p),p=[],[g,T]=f(S.x,S.y),v=S.x,m=S.y;break;case"L":{const[y,R]=f(v,m),[C,A]=f(S.x,S.y);p.push([1,2,y,R,C,A]),v=S.x,m=S.y;break}case"Q":{const[y,R]=f(v,m),[C,A]=f(S.x1,S.y1),[L,M]=f(S.x,S.y);p.push([2,3,y,R,C,A,L,M]),v=S.x,m=S.y;break}case"C":{const[y,R]=f(v,m),[C,A]=f(S.x1,S.y1),[L,M]=f(S.x2,S.y2),[_,w]=f(S.x,S.y);p.push([3,4,y,R,C,A,L,M,_,w]),v=S.x,m=S.y;break}case"Z":{if(p.length>0){const[y,R]=f(v,m),C=y-g,A=R-T;Math.hypot(C,A)>1e-9&&p.push([1,2,y,R,g,T])}break}}return p.length>0&&d.push(p),d.map(S=>{const y=S.filter(C=>{const A=C[1],L=C[2],M=C[3],_=C[2+(A-1)*2],w=C[3+(A-1)*2];return Math.hypot(_-L,w-M)>1e-9});if(y.length===0)return null;const R=[y.length];for(const C of y)R.push(...C);return new Float64Array(R)}).filter(S=>S!==null)}function Eu(n,e,t,i,s,r,a=!1){const o=new un;o.setAttribute("position",new At(n,3)),o.setAttribute("normal",new At(e,3)),o.setIndex(new At(t,1));const l=new ah({color:i,roughness:.4,metalness:.05,side:nn,transparent:!1,wireframe:r});return a&&(l.polygonOffset=!0,l.polygonOffsetFactor=-1,l.polygonOffsetUnits=-1),new an(o,l)}const vi=new As;bi.add(vi);let $r=[],ws=[];function iM(){for(const n of $r)Zb(n);for(const n of ws)Yb(n);for($r=[],ws=[];vi.children.length>0;)vi.remove(vi.children[0])}function sM(n,e,t){iM();const i=72,s=ht.angle*Math.PI/180,r=Math.cos(s),a=Math.sin(s);let o=0,l=0;const c=58879,u=16739904;console.log(`
${"═".repeat(60)}`),console.log(`Face Split: Wire(pcurve) → BRepFeat_SplitShape  "${ht.text}"`),console.log(`${"═".repeat(60)}`);for(const f of ht.text){const h=t.charToGlyph(f);if(!h||!h.path)continue;const d=ht.offsetU,p=nM(h,i,d,ht.uvScale,ht.offsetV,ht.angle,o,l),v=[];if(p.forEach((S,y)=>{const R=S[0];if(R<1)return;console.log(`  glyph '${f}' contour[${y}]: ${R} UV curve segments`);const C=Qb(S,n,0,!0);if(C<0)return;$r.push(C),v.push(C);const A=jb(C),L=y===0?c:u;console.log(`  Wire[${C}] '${f}' c${y}: edges=${A.edgeCount} closed=${A.isClosed}`),rM(C,L,8)}),v.length===0)continue;const m=eM(v,n,0);console.log(`  '${f}': ${v.length} wires → ${m.length} faces`),m.forEach((S,y)=>{ws.push(S);const R=xf(S,0),C=_f[R.surfaceType]??"?";console.log(`  Face[${S}] '${f}': ${C} UV=[${R.uMin.toFixed(3)},${R.uMax.toFixed(3)}]x[${R.vMin.toFixed(3)},${R.vMax.toFixed(3)}]`);const A=tM(S,ht.solidThickness);if(A>=0){ws.push(A),console.log(`  Solid[${A}] '${f}': thickness=${ht.solidThickness}`);const L=Jb(A);console.log(`  Solid[${A}] topo: faces=${L.numFaces} edges=${L.numEdges} shells=${L.numShells}`);const M=Kb(A,ht.deflection);console.log(`  Solid[${A}] mesh: ${M.positions.length/3} vertices, ${M.indices.length/3} triangles`),M.positions.length>0?(vi.add(Eu(M.positions,M.normals,M.indices,16746564,1,!1,!0)),vi.add(Eu(M.positions,M.normals,M.indices,2232576,1,!0,!0))):console.log(`  Solid[${A}]: empty tessellation!`)}else console.log(`  Solid '${f}': FAILED`)});const T=((h.advanceWidth??0)/(t.unitsPerEm||1e3)*i+ht.letterSpacing)/72*ht.uvScale;o+=T*r,l+=T*a}console.log(`
  wires: ${$r.length}  shapes: ${ws.length}
`)}function rM(n,e,t){const i=$b(n,t),s=[];for(let a=0;a<i.length;a++)s.push(i[a]);if(s.length<6)return;const r=new un;r.setAttribute("position",new At(new Float32Array(s),3)),vi.add(new Rv(r,new rh({color:e})))}function bf(n,e,t,i){const s=document.getElementById("panel");s&&s.remove();const r=document.createElement("div");r.id="panel",r.style.cssText=`
    position:fixed; top:16px; right:16px;
    background:rgba(10,10,20,0.88); color:#ccc;
    padding:16px 18px; border-radius:8px;
    font:13px monospace; z-index:100; min-width:250px;
  `;const a=document.createElement("div");a.textContent="Face Split (BRepFeat)",a.style.cssText="color:#fff; font-weight:bold; margin-bottom:12px; font-size:14px;",r.appendChild(a);const o=document.createElement("div");o.style.cssText="margin-bottom:12px;";const l=document.createElement("span");l.textContent="text: ",l.style.cssText="color:#aaa;";const c=document.createElement("input");c.type="text",c.value=ht.text,c.style.cssText="width:100%; margin-top:4px; padding:4px 8px; font:14px monospace; background:#222; color:#fff; border:1px solid #555; border-radius:3px; outline:none; box-sizing:border-box;",c.addEventListener("input",()=>{ht.text=c.value||"CAD",i()}),o.appendChild(l),o.appendChild(c),r.appendChild(o);function u(d,p,v,m,g){const T=document.createElement("div");T.style.cssText="margin-bottom:10px;";const S=document.createElement("div");S.style.cssText="display:flex; justify-content:space-between;";const y=document.createElement("span");y.textContent=d,y.style.cssText="color:#aaa;";const R=document.createElement("span");R.textContent=ht[p].toFixed(3),R.style.cssText="color:#00e5ff;",S.appendChild(y),S.appendChild(R),T.appendChild(S);const C=document.createElement("input");C.type="range",C.min=String(v),C.max=String(m),C.step=String(g),C.value=String(ht[p]),C.style.cssText="width:100%; margin-top:2px; cursor:pointer;",C.addEventListener("input",()=>{ht[p]=parseFloat(C.value),R.textContent=ht[p].toFixed(3),i()}),T.appendChild(C),r.appendChild(T)}u("offsetU","offsetU",.1,6.18,.02),u("offsetV","offsetV",-.9,.9,.02),u("uvScale","uvScale",.5,5,.05),u("angle","angle",-180,180,1),u("emboss depth","embossDepth",.02,.5,.005),u("letterSpacing","letterSpacing",-10,40,.5),u("solid thickness","solidThickness",.01,.3,.005),u("mesh deflection","deflection",.01,.3,.005);function f(d,p,v,m,g,T,S){const y=document.createElement("button");return y.textContent=d,y.style.cssText="padding:3px 8px; font:11px monospace; cursor:pointer; background:#333; color:#ccc; border:1px solid #555; border-radius:3px;",y.addEventListener("click",()=>{ht.text=p,ht.offsetU=v,ht.offsetV=m,ht.uvScale=g,ht.embossDepth=T,ht.letterSpacing=S,c.value=p,bf(n,e,t,i),i()}),y}const h=document.createElement("div");h.style.cssText="margin-top:10px; display:flex; flex-wrap:wrap; gap:4px;",h.appendChild(f('"CAD"',"CAD",.8,0,2.5,.12,0)),h.appendChild(f('"AB"',"AB",.5,0,2,.1,5)),h.appendChild(f('"你好"',"你好",1.5,0,2,.15,5)),h.appendChild(f('"Hi"',"Hi",.6,0,2.5,.1,0)),r.appendChild(h),document.body.appendChild(r)}function aM(){const n=document.createElement("div");n.style.cssText=`
    position:fixed; bottom:16px; left:16px;
    background:rgba(0,0,0,0.7); color:#888;
    padding:10px 14px; border-radius:6px;
    font:11px monospace; line-height:1.7; pointer-events:none; z-index:10;
  `,n.innerHTML=`
    <span style="color:#00e5ff">━━</span> cylinder wire (pcurve) &nbsp;
    <span style="color:#ff6e40">━━</span> hole wire<br>
    <span style="color:#44aaff">■</span> text region &nbsp;
    <span style="color:#ff8844">■</span> rest of cylinder<br>
    glyph → UV→3D → CylWire(pcurve) → BRepFeat_SplitShape → sub-faces
  `,document.body.appendChild(n)}async function oM(){var c,u;console.time("init"),await Wb(),console.timeEnd("init"),console.log("╔══════════════════════════════════════╗"),console.log("║  Face Split: BRepFeat_SplitShape    ║"),console.log("╚══════════════════════════════════════╝"),console.log(""),console.log("Pipeline:"),console.log("  1. opentype.js → glyph bezier → UV analytic curves"),console.log("  2. Geom2d_BezierCurve → BRepBuilderAPI_MakeEdge(curve2d, surface)"),console.log("  3. BRepBuilderAPI_MakeWire → TopoDS_Wire (edges truly on surface)"),console.log("  4. BRepFeat_SplitShape → split cylinder face"),console.log("  5. Sub-faces retain original Geom_CylindricalSurface"),console.log("  6. BRepMesh_IncrementalMesh → tessellation"),console.log("  7. Three.js rendering"),console.log(""),console.time("font");const e=await(await fetch("/simhei.ttf")).arrayBuffer(),t=Vb(e);console.timeEnd("font"),console.log(`Font: ${((u=(c=t.names)==null?void 0:c.fontFamily)==null?void 0:u.en)??"SimHei"}
`);const i=qb(Mu,Tu),s=xf(i,0);console.log(`Cylinder face 0: ${_f[s.surfaceType]}  UV=[${s.uMin.toFixed(3)},${s.uMax.toFixed(3)}] x [${s.vMin.toFixed(3)},${s.vMax.toFixed(3)}]
`);const r=Xb(Mu,Tu,.06),a=new un;a.setAttribute("position",new At(r.positions,3)),a.setAttribute("normal",new At(r.normals,3)),a.setIndex(new At(r.indices,1)),bi.add(new an(a,new ah({color:3359829,roughness:.5,metalness:.1,side:nn,transparent:!1,opacity:.25})));const o=()=>sM(i,0,t);bf(i,0,t,o),aM(),o();function l(){requestAnimationFrame(l),xl.update(),ps.render(bi,cs)}l()}oM().catch(n=>{document.body.innerHTML=`<pre style="color:red;padding:2em">${n.stack||n}</pre>`,console.error(n)});window.addEventListener("resize",()=>{cs.aspect=window.innerWidth/window.innerHeight,cs.updateProjectionMatrix(),ps.setSize(window.innerWidth,window.innerHeight)});
