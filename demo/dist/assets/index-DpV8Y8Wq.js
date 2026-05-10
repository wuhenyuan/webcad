(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="170",qi={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wf=0,Pl=1,Rf=2,Fu=1,Lf=2,Cn=3,Qn=0,Nt=1,wn=2,Zn=0,Yi=1,Ul=2,Il=3,Ol=4,Df=5,di=100,Pf=101,Uf=102,If=103,Of=104,Ff=200,Nf=201,kf=202,Bf=203,$a=204,Za=205,zf=206,Hf=207,Gf=208,Vf=209,Wf=210,Xf=211,qf=212,Yf=213,jf=214,Ka=0,Ja=1,Qa=2,Ki=3,eo=4,to=5,no=6,io=7,Ko=0,$f=1,Zf=2,Kn=0,Kf=1,Jf=2,Qf=3,ed=4,td=5,nd=6,id=7,Nu=300,Ji=301,Qi=302,so=303,ro=304,Kr=306,ao=1e3,gi=1001,oo=1002,rn=1003,sd=1004,Gs=1005,mn=1006,aa=1007,vi=1008,On=1009,ku=1010,Bu=1011,Ts=1012,Jo=1013,xi=1014,Rn=1015,ws=1016,Qo=1017,el=1018,es=1020,zu=35902,Hu=1021,Gu=1022,sn=1023,Vu=1024,Wu=1025,ji=1026,ts=1027,Xu=1028,tl=1029,qu=1030,nl=1031,il=1033,Mr=33776,Tr=33777,Er=33778,Ar=33779,lo=35840,co=35841,uo=35842,ho=35843,fo=36196,po=37492,mo=37496,go=37808,vo=37809,xo=37810,_o=37811,yo=37812,So=37813,bo=37814,Mo=37815,To=37816,Eo=37817,Ao=37818,Co=37819,wo=37820,Ro=37821,Cr=36492,Lo=36494,Do=36495,Yu=36283,Po=36284,Uo=36285,Io=36286,rd=3200,ad=3201,sl=0,od=1,jn="",Yt="srgb",ls="srgb-linear",Jr="linear",st="srgb",Ci=7680,Fl=519,ld=512,cd=513,ud=514,ju=515,hd=516,fd=517,dd=518,pd=519,Nl=35044,kl="300 es",Ln=2e3,Ur=2001;class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bs=Math.PI/180,Oo=180/Math.PI;function Rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function md(n,e){return(n%e+e)%e}function oa(n,e,t){return(1-t)*n+t*e}function ds(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gd={DEG2RAD:bs};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],v=s[0],g=s[3],m=s[6],M=s[1],b=s[4],S=s[7],N=s[2],A=s[5],C=s[8];return r[0]=a*v+o*M+l*N,r[3]=a*g+o*b+l*A,r[6]=a*m+o*S+l*C,r[1]=c*v+u*M+h*N,r[4]=c*g+u*b+h*A,r[7]=c*m+u*S+h*C,r[2]=f*v+d*M+p*N,r[5]=f*g+d*b+p*A,r[8]=f*m+d*S+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,p=t*h+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Ge;function $u(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vd(){const n=Ir("canvas");return n.style.display="block",n}const Bl={};function ys(n){n in Bl||(Bl[n]=!0,console.warn(n))}function xd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function _d(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yd(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(n.r=Un(n.r),n.g=Un(n.g),n.b=Un(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(n.r=$i(n.r),n.g=$i(n.g),n.b=$i(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===jn?Jr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $i(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const zl=[.64,.33,.3,.6,.15,.06],Hl=[.2126,.7152,.0722],Gl=[.3127,.329],Vl=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[ls]:{primaries:zl,whitePoint:Gl,transfer:Jr,toXYZ:Vl,fromXYZ:Wl,luminanceCoefficients:Hl,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:zl,whitePoint:Gl,transfer:st,toXYZ:Vl,fromXYZ:Wl,luminanceCoefficients:Hl,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}});let wi;class Sd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=Ir("canvas")),wi.width=e.width,wi.height=e.height;const i=wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bd=0;class Zu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ca(s[a].image)):r.push(ca(s[a]))}else r=ca(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Md=0;class kt extends bi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=gi,s=gi,r=mn,a=vi,o=sn,l=On,c=kt.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Rs(),this.name="",this.source=new Zu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ao:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ao:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Nu;kt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(d+1)/2,N=(m+1)/2,A=(u+f)/4,C=(h+v)/4,I=(p+g)/4;return b>S&&b>N?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=C/i):S>N?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=I/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=C/r,s=I/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(h-v)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Td extends bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new kt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends Td{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ku extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ed extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==p){let g=1-o;const m=l*f+c*d+u*p+h*v,M=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const N=Math.sqrt(b),A=Math.atan2(N,m*M);g=Math.sin(g*A)/N,o=Math.sin(o*A)/N}const S=o*M;if(l=l*g+f*S,c=c*g+d*S,u=u*g+p*S,h=h*g+v*S,g===1-o){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-o*d,e[t+2]=c*p+u*d+o*f-l*h,e[t+3]=u*p-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new k,Xl=new yi;class Ls{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(r,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vs.copy(i.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Ws.subVectors(this.max,ps),Ri.subVectors(e.a,ps),Li.subVectors(e.b,ps),Di.subVectors(e.c,ps),kn.subVectors(Li,Ri),Bn.subVectors(Di,Li),ri.subVectors(Ri,Di);let t=[0,-kn.z,kn.y,0,-Bn.z,Bn.y,0,-ri.z,ri.y,kn.z,0,-kn.x,Bn.z,0,-Bn.x,ri.z,0,-ri.x,-kn.y,kn.x,0,-Bn.y,Bn.x,0,-ri.y,ri.x,0];return!ha(t,Ri,Li,Di,Ws)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,Ri,Li,Di,Ws))?!1:(Xs.crossVectors(kn,Bn),t=[Xs.x,Xs.y,Xs.z],ha(t,Ri,Li,Di,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new k,new k,new k,new k,new k,new k,new k,new k],Jt=new k,Vs=new Ls,Ri=new k,Li=new k,Di=new k,kn=new k,Bn=new k,ri=new k,ps=new k,Ws=new k,Xs=new k,ai=new k;function ha(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ai.fromArray(n,r);const o=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),u=i.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ad=new Ls,ms=new k,fa=new k;class Ds{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ad.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ms,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(fa)),this.expandByPoint(ms.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new k,da=new k,qs=new k,zn=new k,pa=new k,Ys=new k,ma=new k;class Ps{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){da.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,a=-this.direction.dot(qs),o=zn.dot(this.direction),l=-zn.dot(qs),c=zn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,p;if(u>0)if(h=a*l-o,f=a*o-l,p=r*u,h>=0)if(f>=-p)if(f<=p){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(da).addScaledVector(qs,f),d}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const i=bn.dot(this.direction),s=bn.dot(bn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,i,s,r){pa.subVectors(t,e),Ys.subVectors(i,e),ma.crossVectors(pa,Ys);let a=this.direction.dot(ma),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=o*this.direction.dot(Ys.crossVectors(zn,Ys));if(l<0)return null;const c=o*this.direction.dot(pa.cross(zn));if(c<0||l+c>a)return null;const u=-o*zn.dot(ma);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,s,r,a,o,l,c,u,h,f,d,p,v,g){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,f,d,p,v,g)}set(e,t,i,s,r,a,o,l,c,u,h,f,d,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,p=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,p=c*u,v=c*h;t[0]=f+v*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-p,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,p=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,p=o*u,v=o*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=p*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,wd)}lookAt(e,t,i){const s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Hn.crossVectors(i,Ht),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Hn.crossVectors(i,Ht)),Hn.normalize(),js.crossVectors(Ht,Hn),s[0]=Hn.x,s[4]=js.x,s[8]=Ht.x,s[1]=Hn.y,s[5]=js.y,s[9]=Ht.y,s[2]=Hn.z,s[6]=js.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],v=i[6],g=i[10],m=i[14],M=i[3],b=i[7],S=i[11],N=i[15],A=s[0],C=s[4],I=s[8],T=s[12],_=s[1],w=s[5],X=s[9],R=s[13],U=s[2],B=s[6],V=s[10],te=s[14],W=s[3],re=s[7],ae=s[11],me=s[15];return r[0]=a*A+o*_+l*U+c*W,r[4]=a*C+o*w+l*B+c*re,r[8]=a*I+o*X+l*V+c*ae,r[12]=a*T+o*R+l*te+c*me,r[1]=u*A+h*_+f*U+d*W,r[5]=u*C+h*w+f*B+d*re,r[9]=u*I+h*X+f*V+d*ae,r[13]=u*T+h*R+f*te+d*me,r[2]=p*A+v*_+g*U+m*W,r[6]=p*C+v*w+g*B+m*re,r[10]=p*I+v*X+g*V+m*ae,r[14]=p*T+v*R+g*te+m*me,r[3]=M*A+b*_+S*U+N*W,r[7]=M*C+b*w+S*B+N*re,r[11]=M*I+b*X+S*V+N*ae,r[15]=M*T+b*R+S*te+N*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+r*l*h-s*c*h-r*o*f+i*c*f+s*o*d-i*l*d)+v*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*u-r*l*u)+g*(+t*c*h-t*o*d-r*a*h+i*a*d+r*o*u-i*c*u)+m*(-s*o*u-t*l*h+t*o*f+s*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],v=e[13],g=e[14],m=e[15],M=h*g*c-v*f*c+v*l*d-o*g*d-h*l*m+o*f*m,b=p*f*c-u*g*c-p*l*d+a*g*d+u*l*m-a*f*m,S=u*v*c-p*h*c+p*o*d-a*v*d-u*o*m+a*h*m,N=p*h*l-u*v*l-p*o*f+a*v*f+u*o*g-a*h*g,A=t*M+i*b+s*S+r*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=M*C,e[1]=(v*f*r-h*g*r-v*s*d+i*g*d+h*s*m-i*f*m)*C,e[2]=(o*g*r-v*l*r+v*s*c-i*g*c-o*s*m+i*l*m)*C,e[3]=(h*l*r-o*f*r-h*s*c+i*f*c+o*s*d-i*l*d)*C,e[4]=b*C,e[5]=(u*g*r-p*f*r+p*s*d-t*g*d-u*s*m+t*f*m)*C,e[6]=(p*l*r-a*g*r-p*s*c+t*g*c+a*s*m-t*l*m)*C,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*d+t*l*d)*C,e[8]=S*C,e[9]=(p*h*r-u*v*r-p*i*d+t*v*d+u*i*m-t*h*m)*C,e[10]=(a*v*r-p*o*r+p*i*c-t*v*c-a*i*m+t*o*m)*C,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*d-t*o*d)*C,e[12]=N*C,e[13]=(u*v*s-p*h*s+p*i*f-t*v*f-u*i*g+t*h*g)*C,e[14]=(p*o*s-a*v*s-p*i*l+t*v*l+a*i*g-t*o*g)*C,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*f+t*o*f)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,p=r*h,v=a*u,g=a*h,m=o*h,M=l*c,b=l*u,S=l*h,N=i.x,A=i.y,C=i.z;return s[0]=(1-(v+m))*N,s[1]=(d+S)*N,s[2]=(p-b)*N,s[3]=0,s[4]=(d-S)*A,s[5]=(1-(f+m))*A,s[6]=(g+M)*A,s[7]=0,s[8]=(p+b)*C,s[9]=(g-M)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qt.copy(this);const c=1/r,u=1/a,h=1/o;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=h,Qt.elements[9]*=h,Qt.elements[10]*=h,t.setFromRotationMatrix(Qt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Ln){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,p;if(o===Ln)d=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Ur)d=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ln){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(a-r),f=(t+e)*c,d=(i+s)*u;let p,v;if(o===Ln)p=(a+r)*h,v=-2*h;else if(o===Ur)p=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pi=new k,Qt=new ut,Cd=new k(0,0,0),wd=new k(1,1,1),Hn=new k,js=new k,Ht=new k,ql=new ut,Yl=new yi;class an{constructor(e=0,t=0,i=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class rl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rd=0;const jl=new k,Ui=new yi,Mn=new ut,$s=new k,gs=new k,Ld=new k,Dd=new yi,$l=new k(1,0,0),Zl=new k(0,1,0),Kl=new k(0,0,1),Jl={type:"added"},Pd={type:"removed"},Ii={type:"childadded",child:null},ga={type:"childremoved",child:null};class Tt extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new k,t=new an,i=new yi,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis(Kl,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis(Kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$s.copy(e):$s.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(gs,$s,this.up):Mn.lookAt($s,gs,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jl),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pd),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jl),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,Ld),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Dd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new k(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new k,Tn=new k,va=new k,En=new k,Oi=new k,Fi=new k,Ql=new k,xa=new k,_a=new k,ya=new k,Sa=new pt,ba=new pt,Ma=new pt;class jt{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),en.subVectors(e,t),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){en.subVectors(s,t),Tn.subVectors(i,t),va.subVectors(e,t);const a=en.dot(en),o=en.dot(Tn),l=en.dot(va),c=Tn.dot(Tn),u=Tn.dot(va),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,p=(a*u-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Sa.setScalar(0),ba.setScalar(0),Ma.setScalar(0),Sa.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,i),Ma.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Sa,r.x),a.addScaledVector(ba,r.y),a.addScaledVector(Ma,r.z),a}static isFrontFacing(e,t,i,s){return en.subVectors(i,t),Tn.subVectors(e,t),en.cross(Tn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),en.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Oi.subVectors(s,i),Fi.subVectors(r,i),xa.subVectors(e,i);const l=Oi.dot(xa),c=Fi.dot(xa);if(l<=0&&c<=0)return t.copy(i);_a.subVectors(e,s);const u=Oi.dot(_a),h=Fi.dot(_a);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Oi,a);ya.subVectors(e,r);const d=Oi.dot(ya),p=Fi.dot(ya);if(p>=0&&d<=p)return t.copy(r);const v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Fi,o);const g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return Ql.subVectors(r,s),o=(h-u)/(h-u+(d-p)),t.copy(s).addScaledVector(Ql,o);const m=1/(g+v+f);return a=v*m,o=f*m,t.copy(i).addScaledVector(Oi,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function Ta(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=md(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ta(a,r,e+1/3),this.g=Ta(a,r,e),this.b=Ta(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=Ju[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Ze.fromWorkingColorSpace(wt.copy(this),e),Math.round(Pt(wt.r*255,0,255))*65536+Math.round(Pt(wt.g*255,0,255))*256+Math.round(Pt(wt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(wt.copy(this),t);const i=wt.r,s=wt.g,r=wt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Yt){Ze.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,i=wt.g,s=wt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Zs);const i=oa(Gn.h,Zs.h,t),s=oa(Gn.s,Zs.s,t),r=oa(Gn.l,Zs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new qe;qe.NAMES=Ju;let Ud=0;class ii extends bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Rs(),this.name="",this.blending=Yi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Za,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$a&&(i.blendSrc=this.blendSrc),this.blendDst!==Za&&(i.blendDst=this.blendDst),this.blendEquation!==di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qu extends ii{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new k,Ks=new ke;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ds(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}}class eh extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class th extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Et extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Id=0;const qt=new ut,Ea=new Tt,Ni=new k,Gt=new Ls,vs=new Ls,Mt=new k;class Bt extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($u(e)?th:eh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Gt.min,vs.min),Gt.expandByPoint(Mt),Mt.addVectors(Gt.max,vs.max),Gt.expandByPoint(Mt)):(Gt.expandByPoint(vs.min),Gt.expandByPoint(vs.max))}Gt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),Mt.add(Ni)),s=Math.max(s,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new k,l[I]=new k;const c=new k,u=new k,h=new k,f=new ke,d=new ke,p=new ke,v=new k,g=new k;function m(I,T,_){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,_),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,_),u.sub(c),h.sub(c),d.sub(f),p.sub(f);const w=1/(d.x*p.y-p.x*d.y);isFinite(w)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(w),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(w),o[I].add(v),o[T].add(v),o[_].add(v),l[I].add(g),l[T].add(g),l[_].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,T=M.length;I<T;++I){const _=M[I],w=_.start,X=_.count;for(let R=w,U=w+X;R<U;R+=3)m(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const b=new k,S=new k,N=new k,A=new k;function C(I){N.fromBufferAttribute(s,I),A.copy(N);const T=o[I];b.copy(T),b.sub(N.multiplyScalar(N.dot(T))).normalize(),S.crossVectors(A,T);const w=S.dot(l[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,w)}for(let I=0,T=M.length;I<T;++I){const _=M[I],w=_.start,X=_.count;for(let R=w,U=w+X;R<U;R+=3)C(e.getX(R+0)),C(e.getX(R+1)),C(e.getX(R+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let m=0;m<u;m++)f[p++]=c[d++]}return new vn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new ut,oi=new Ps,Js=new Ds,tc=new k,Qs=new k,er=new k,tr=new k,Aa=new k,nr=new k,nc=new k,ir=new k;class Dn extends Tt{constructor(e=new Bt,t=new Qu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Aa.fromBufferAttribute(h,e),a?nr.addScaledVector(Aa,u):nr.addScaledVector(Aa.sub(t),u))}t.add(nr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(r),oi.copy(e.ray).recast(e.near),!(Js.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Js,tc)===null||oi.origin.distanceToSquared(tc)>(e.far-e.near)**2))&&(ec.copy(r).invert(),oi.copy(e.ray).applyMatrix4(ec),!(i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){const g=f[p],m=a[g.materialIndex],M=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=M,N=b;S<N;S+=3){const A=o.getX(S),C=o.getX(S+1),I=o.getX(S+2);s=sr(this,m,e,i,c,u,h,A,C,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){const M=o.getX(g),b=o.getX(g+1),S=o.getX(g+2);s=sr(this,a,e,i,c,u,h,M,b,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){const g=f[p],m=a[g.materialIndex],M=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let S=M,N=b;S<N;S+=3){const A=S,C=S+1,I=S+2;s=sr(this,m,e,i,c,u,h,A,C,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){const M=g,b=g+1,S=g+2;s=sr(this,a,e,i,c,u,h,M,b,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Od(n,e,t,i,s,r,a,o){let l;if(e.side===Nt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Qn,o),l===null)return null;ir.copy(o),ir.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ir);return c<t.near||c>t.far?null:{distance:c,point:ir.clone(),object:n}}function sr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Qs),n.getVertexPosition(l,er),n.getVertexPosition(c,tr);const u=Od(n,e,t,i,Qs,er,tr,nc);if(u){const h=new k;jt.getBarycoord(nc,Qs,er,tr,h),s&&(u.uv=jt.getInterpolatedAttribute(s,o,l,c,h,new ke)),r&&(u.uv1=jt.getInterpolatedAttribute(r,o,l,c,h,new ke)),a&&(u.normal=jt.getInterpolatedAttribute(a,o,l,c,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new k,materialIndex:0};jt.getNormal(Qs,er,tr,f.normal),u.face=f,u.barycoord=h}return u}class Us extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2));function p(v,g,m,M,b,S,N,A,C,I,T){const _=S/C,w=N/I,X=S/2,R=N/2,U=A/2,B=C+1,V=I+1;let te=0,W=0;const re=new k;for(let ae=0;ae<V;ae++){const me=ae*w-R;for(let De=0;De<B;De++){const Oe=De*_-X;re[v]=Oe*M,re[g]=me*b,re[m]=U,c.push(re.x,re.y,re.z),re[v]=0,re[g]=0,re[m]=A>0?1:-1,u.push(re.x,re.y,re.z),h.push(De/C),h.push(1-ae/I),te+=1}}for(let ae=0;ae<I;ae++)for(let me=0;me<C;me++){const De=f+me+B*ae,Oe=f+me+B*(ae+1),Y=f+(me+1)+B*(ae+1),K=f+(me+1)+B*ae;l.push(De,Oe,K),l.push(Oe,Y,K),W+=6}o.addGroup(d,W,T),d+=W,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=ns(n[t]);for(const s in i)e[s]=i[s]}return e}function Fd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Nd={clone:ns,merge:Dt};var kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends ii{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=Fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ih extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new k,ic=new ke,sc=new ke;class nn extends ih{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,ic,sc),t.subVectors(sc,ic)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Bi=1;class zd extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(ki,Bi,e,t);s.layers=this.layers,this.add(s);const r=new nn(ki,Bi,e,t);r.layers=this.layers,this.add(r);const a=new nn(ki,Bi,e,t);a.layers=this.layers,this.add(a);const o=new nn(ki,Bi,e,t);o.layers=this.layers,this.add(o);const l=new nn(ki,Bi,e,t);l.layers=this.layers,this.add(l);const c=new nn(ki,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class sh extends kt{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hd extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Us(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:Zn});r.uniforms.tEquirect.value=t;const a=new Dn(s,r),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=mn),new zd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Ca=new k,Gd=new k,Vd=new Ge;class qn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ca.subVectors(i,t).cross(Gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ca),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vd.getNormalMatrix(e),s=this.coplanarPoint(Ca).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Ds,rr=new k;class al{constructor(e=new qn,t=new qn,i=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],p=s[9],v=s[10],g=s[11],m=s[12],M=s[13],b=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,g-d,S-m).normalize(),i[1].setComponents(l+r,f+c,g+d,S+m).normalize(),i[2].setComponents(l+a,f+u,g+p,S+M).normalize(),i[3].setComponents(l-a,f-u,g-p,S-M).normalize(),i[4].setComponents(l-o,f-h,g-v,S-b).normalize(),t===Ln)i[5].setComponents(l+o,f+h,g+v,S+b).normalize();else if(t===Ur)i[5].setComponents(o,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(rr.x=s.normal.x>0?e.max.x:e.min.x,rr.y=s.normal.y>0?e.max.y:e.min.y,rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rh(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Wd(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){const p=h[f],v=h[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Qr extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,d=[],p=[],v=[],g=[];for(let m=0;m<u;m++){const M=m*f-a;for(let b=0;b<c;b++){const S=b*h-r;p.push(S,-M,0),v.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const b=M+c*m,S=M+c*(m+1),N=M+1+c*(m+1),A=M+1+c*m;d.push(b,S,A),d.push(S,N,A)}this.setIndex(d),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
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
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
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
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sp=`#ifdef USE_IRIDESCENCE
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
#endif`,rp=`#ifdef USE_BUMPMAP
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pp=`#define PI 3.141592653589793
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
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gp=`vec3 transformedNormal = objectNormal;
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
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
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
}`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fp=`uniform bool receiveShadow;
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
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
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
#endif`,Vp=`struct PhysicalMaterial {
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
}`,Wp=`
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,em=`#if defined( USE_POINTS_UV )
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
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rm=`float getShadowMask() {
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
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
}`,Jm=`#define DISTANCE
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
}`,Qm=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,lg=`#define MATCAP
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
}`,cg=`#define MATCAP
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
}`,ug=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
}`,gg=`#define TOON
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
}`,vg=`#define TOON
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
}`,xg=`uniform float size;
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
}`,_g=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,Sg=`uniform vec3 color;
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
}`,bg=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Xd,alphahash_pars_fragment:qd,alphamap_fragment:Yd,alphamap_pars_fragment:jd,alphatest_fragment:$d,alphatest_pars_fragment:Zd,aomap_fragment:Kd,aomap_pars_fragment:Jd,batching_pars_vertex:Qd,batching_vertex:ep,begin_vertex:tp,beginnormal_vertex:np,bsdfs:ip,iridescence_fragment:sp,bumpmap_pars_fragment:rp,clipping_planes_fragment:ap,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:lp,clipping_planes_vertex:cp,color_fragment:up,color_pars_fragment:hp,color_pars_vertex:fp,color_vertex:dp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:vp,displacementmap_vertex:xp,emissivemap_fragment:_p,emissivemap_pars_fragment:yp,colorspace_fragment:Sp,colorspace_pars_fragment:bp,envmap_fragment:Mp,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Ep,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Np,envmap_vertex:Cp,fog_vertex:wp,fog_pars_vertex:Rp,fog_fragment:Lp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Up,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Op,lights_pars_begin:Fp,lights_toon_fragment:kp,lights_toon_pars_fragment:Bp,lights_phong_fragment:zp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Zp,map_fragment:Kp,map_pars_fragment:Jp,map_particle_fragment:Qp,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:sm,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:um,normal_pars_vertex:hm,normal_vertex:fm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:vm,opaque_fragment:xm,packing:_m,premultiplied_alpha_fragment:ym,project_vertex:Sm,dithering_fragment:bm,dithering_pars_fragment:Mm,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Cm,shadowmap_vertex:wm,shadowmask_pars_fragment:Rm,skinbase_vertex:Lm,skinning_pars_vertex:Dm,skinning_vertex:Pm,skinnormal_vertex:Um,specularmap_fragment:Im,specularmap_pars_fragment:Om,tonemapping_fragment:Fm,tonemapping_pars_fragment:Nm,transmission_fragment:km,transmission_pars_fragment:Bm,uv_pars_fragment:zm,uv_pars_vertex:Hm,uv_vertex:Gm,worldpos_vertex:Vm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:jm,cube_frag:$m,depth_vert:Zm,depth_frag:Km,distanceRGBA_vert:Jm,distanceRGBA_frag:Qm,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:ug,meshnormal_frag:hg,meshphong_vert:fg,meshphong_frag:dg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:vg,points_vert:xg,points_frag:_g,shadow_vert:yg,shadow_frag:Sg,sprite_vert:bg,sprite_frag:Mg},ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},pn={basic:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Dt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Dt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Dt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Dt([ce.points,ce.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Dt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Dt([ce.common,ce.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Dt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Dt([ce.sprite,ce.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Dt([ce.common,ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Dt([ce.lights,ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};pn.physical={uniforms:Dt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ar={r:0,b:0,g:0},ci=new an,Tg=new ut;function Eg(n,e,t,i,s,r,a){const o=new qe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function p(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function v(M){let b=!1;const S=p(M);S===null?m(o,l):S&&S.isColor&&(m(S,1),b=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,b){const S=p(b);S&&(S.isCubeTexture||S.mapping===Kr)?(u===void 0&&(u=new Dn(new Us(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ns(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ci.copy(b.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(ci)),u.material.toneMapped=Ze.getTransfer(S.colorSpace)!==st,(h!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Dn(new Qr(2,2),new ei({name:"BackgroundMaterial",uniforms:ns(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,b){M.getRGB(ar,nh(n)),i.buffers.color.setClear(ar.r,ar.g,ar.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),l=b,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:v,addToRenderList:g}}function Ag(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(_,w,X,R,U){let B=!1;const V=h(R,X,w);r!==V&&(r=V,c(r.object)),B=d(_,R,X,U),B&&p(_,R,X,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,S(_,w,X,R),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,w,X){const R=X.wireframe===!0;let U=i[_.id];U===void 0&&(U={},i[_.id]=U);let B=U[w.id];B===void 0&&(B={},U[w.id]=B);let V=B[R];return V===void 0&&(V=f(l()),B[R]=V),V}function f(_){const w=[],X=[],R=[];for(let U=0;U<t;U++)w[U]=0,X[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:X,attributeDivisors:R,object:_,attributes:{},index:null}}function d(_,w,X,R){const U=r.attributes,B=w.attributes;let V=0;const te=X.getAttributes();for(const W in te)if(te[W].location>=0){const ae=U[W];let me=B[W];if(me===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),ae===void 0||ae.attribute!==me||me&&ae.data!==me.data)return!0;V++}return r.attributesNum!==V||r.index!==R}function p(_,w,X,R){const U={},B=w.attributes;let V=0;const te=X.getAttributes();for(const W in te)if(te[W].location>=0){let ae=B[W];ae===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor));const me={};me.attribute=ae,ae&&ae.data&&(me.data=ae.data),U[W]=me,V++}r.attributes=U,r.attributesNum=V,r.index=R}function v(){const _=r.newAttributes;for(let w=0,X=_.length;w<X;w++)_[w]=0}function g(_){m(_,0)}function m(_,w){const X=r.newAttributes,R=r.enabledAttributes,U=r.attributeDivisors;X[_]=1,R[_]===0&&(n.enableVertexAttribArray(_),R[_]=1),U[_]!==w&&(n.vertexAttribDivisor(_,w),U[_]=w)}function M(){const _=r.newAttributes,w=r.enabledAttributes;for(let X=0,R=w.length;X<R;X++)w[X]!==_[X]&&(n.disableVertexAttribArray(X),w[X]=0)}function b(_,w,X,R,U,B,V){V===!0?n.vertexAttribIPointer(_,w,X,U,B):n.vertexAttribPointer(_,w,X,R,U,B)}function S(_,w,X,R){v();const U=R.attributes,B=X.getAttributes(),V=w.defaultAttributeValues;for(const te in B){const W=B[te];if(W.location>=0){let re=U[te];if(re===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(re=_.instanceColor)),re!==void 0){const ae=re.normalized,me=re.itemSize,De=e.get(re);if(De===void 0)continue;const Oe=De.buffer,Y=De.type,K=De.bytesPerElement,ue=Y===n.INT||Y===n.UNSIGNED_INT||re.gpuType===Jo;if(re.isInterleavedBufferAttribute){const ee=re.data,le=ee.stride,Ee=re.offset;if(ee.isInstancedInterleavedBuffer){for(let Pe=0;Pe<W.locationSize;Pe++)m(W.location+Pe,ee.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Pe=0;Pe<W.locationSize;Pe++)g(W.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Pe=0;Pe<W.locationSize;Pe++)b(W.location+Pe,me/W.locationSize,Y,ae,le*K,(Ee+me/W.locationSize*Pe)*K,ue)}else{if(re.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)m(W.location+ee,re.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ee=0;ee<W.locationSize;ee++)g(W.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ee=0;ee<W.locationSize;ee++)b(W.location+ee,me/W.locationSize,Y,ae,me*K,me/W.locationSize*ee*K,ue)}}else if(V!==void 0){const ae=V[te];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(W.location,ae);break;case 3:n.vertexAttrib3fv(W.location,ae);break;case 4:n.vertexAttrib4fv(W.location,ae);break;default:n.vertexAttrib1fv(W.location,ae)}}}}M()}function N(){I();for(const _ in i){const w=i[_];for(const X in w){const R=w[X];for(const U in R)u(R[U].object),delete R[U];delete w[X]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;const w=i[_.id];for(const X in w){const R=w[X];for(const U in R)u(R[U].object),delete R[U];delete w[X]}delete i[_.id]}function C(_){for(const w in i){const X=i[w];if(X[_.id]===void 0)continue;const R=X[_.id];for(const U in R)u(R[U].object),delete R[U];delete X[_.id]}}function I(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function Cg(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v]*f[v];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==sn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==On&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Rn&&!I)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:N,maxSamples:A}}function Rg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new qn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{const M=r?0:i,b=M*4;let S=m.clippingState||null;l.value=S,S=u(p,f,b,d);for(let N=0;N!==b;++N)S[N]=t[N];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,p){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=d+v*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,S=d;b!==v;++b,S+=4)a.copy(h[b]).applyMatrix4(M,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Lg(n){let e=new WeakMap;function t(a,o){return o===so?a.mapping=Ji:o===ro&&(a.mapping=Qi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===so||o===ro)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hd(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ah extends ih{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,rc=[.125,.215,.35,.446,.526,.582],pi=20,wa=new ah,ac=new qe;let Ra=null,La=0,Da=0,Pa=!1;const fi=(1+Math.sqrt(5))/2,zi=1/fi,oc=[new k(-fi,zi,0),new k(fi,zi,0),new k(-zi,0,fi),new k(zi,0,fi),new k(0,fi,-zi),new k(0,fi,zi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ra=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,La,Da),this._renderer.xr.enabled=Pa,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:ws,format:sn,colorSpace:ls,depthBuffer:!1},s=cc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(r)),this._blurMaterial=Pg(r,e,t)}return s}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,i,s){const o=new nn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ac),u.toneMapping=Kn,u.autoClear=!1;const d=new Qu({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),p=new Dn(new Us,d);let v=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(ac),v=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const b=this._cubeSize;or(s,M*b,m>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(p,o),u.render(e,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ji||e.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Dn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;or(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=oc[(s-r-1)%oc.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Dn(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*pi-1),v=r/p,g=isFinite(r)?1+Math.floor(u*v):pi;g>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pi}`);const m=[];let M=0;for(let C=0;C<pi;++C){const I=C/v,T=Math.exp(-I*I/2);m.push(T),C===0?M+=T:C<g&&(M+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=p,f.mipInt.value=b-i;const S=this._sizeLods[s],N=3*S*(s>b-Xi?s-b+Xi:0),A=4*(this._cubeSize-S);or(t,N,A,3*S,2*S),l.setRenderTarget(t),l.render(h,wa)}}function Dg(n){const e=[],t=[],i=[];let s=n;const r=n-Xi+1+rc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Xi?l=rc[a-n+Xi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,v=3,g=2,m=1,M=new Float32Array(v*p*d),b=new Float32Array(g*p*d),S=new Float32Array(m*p*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,I=A>2?0:-1,T=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];M.set(T,v*p*A),b.set(f,g*p*A);const _=[A,A,A,A,A,A];S.set(_,m*p*A)}const N=new Bt;N.setAttribute("position",new vn(M,v)),N.setAttribute("uv",new vn(b,g)),N.setAttribute("faceIndex",new vn(S,m)),e.push(N),s>Xi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cc(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=Kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Pg(n,e,t){const i=new Float32Array(pi),s=new k(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function uc(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function hc(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function Ug(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===so||l===ro,u=l===Ji||l===Qi;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new lc(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new lc(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ig(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Og(n,e,t,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const v=f.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const p in d){const v=d[p];for(let g=0,m=v.length;g<m;g++)e.update(v[g],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,p=h.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let b=0,S=M.length;b<S;b+=3){const N=M[b+0],A=M[b+1],C=M[b+2];f.push(N,A,A,C,C,N)}}else if(p!==void 0){const M=p.array;v=p.version;for(let b=0,S=M.length/3-1;b<S;b+=3){const N=b+0,A=b+1,C=b+2;f.push(N,A,A,C,C,N)}}else return;const g=new($u(f)?th:eh)(f,1);g.version=v;const m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Fg(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,f*a,p),t.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,i,1)}function h(f,d,p,v){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,p);let m=0;for(let M=0;M<p;M++)m+=d[M]*v[M];t.update(m,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ng(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kg(n,e,t){const i=new WeakMap,s=new pt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let T=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;d===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let S=o.attributes.position.count*b,N=1;S>e.maxTextureSize&&(N=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*N*4*h),C=new Ku(A,S,N,h);C.type=Rn,C.needsUpdate=!0;const I=b*4;for(let _=0;_<h;_++){const w=g[_],X=m[_],R=M[_],U=S*N*4*_;for(let B=0;B<w.count;B++){const V=B*I;d===!0&&(s.fromBufferAttribute(w,B),A[U+V+0]=s.x,A[U+V+1]=s.y,A[U+V+2]=s.z,A[U+V+3]=0),p===!0&&(s.fromBufferAttribute(X,B),A[U+V+4]=s.x,A[U+V+5]=s.y,A[U+V+6]=s.z,A[U+V+7]=0),v===!0&&(s.fromBufferAttribute(R,B),A[U+V+8]=s.x,A[U+V+9]=s.y,A[U+V+10]=s.z,A[U+V+11]=R.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new ke(S,N)},i.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Bg(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class oh extends kt{constructor(e,t,i,s,r,a,o,l,c,u=ji){if(u!==ji&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ji&&(i=xi),i===void 0&&u===ts&&(i=es),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lh=new kt,fc=new oh(1,1),ch=new Ku,uh=new Ed,hh=new sh,dc=[],pc=[],mc=new Float32Array(16),gc=new Float32Array(9),vc=new Float32Array(4);function cs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=dc[s];if(r===void 0&&(r=new Float32Array(s),dc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ea(n,e){let t=pc[e];t===void 0&&(t=new Int32Array(e),pc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function Wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;vc.set(i),n.uniformMatrix2fv(this.addr,!1,vc),St(t,i)}}function Xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;gc.set(i),n.uniformMatrix3fv(this.addr,!1,gc),St(t,i)}}function qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;mc.set(i),n.uniformMatrix4fv(this.addr,!1,mc),St(t,i)}}function Yg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function Kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function t0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(fc.compareFunction=ju,r=fc):r=lh,t.setTexture2D(e||r,s)}function n0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||uh,s)}function i0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hh,s)}function s0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ch,s)}function r0(n){switch(n){case 5126:return zg;case 35664:return Hg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return jg;case 35668:case 35672:return $g;case 35669:case 35673:return Zg;case 5125:return Kg;case 36294:return Jg;case 36295:return Qg;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function a0(n,e){n.uniform1fv(this.addr,e)}function o0(n,e){const t=cs(e,this.size,2);n.uniform2fv(this.addr,t)}function l0(n,e){const t=cs(e,this.size,3);n.uniform3fv(this.addr,t)}function c0(n,e){const t=cs(e,this.size,4);n.uniform4fv(this.addr,t)}function u0(n,e){const t=cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function h0(n,e){const t=cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function f0(n,e){const t=cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function d0(n,e){n.uniform1iv(this.addr,e)}function p0(n,e){n.uniform2iv(this.addr,e)}function m0(n,e){n.uniform3iv(this.addr,e)}function g0(n,e){n.uniform4iv(this.addr,e)}function v0(n,e){n.uniform1uiv(this.addr,e)}function x0(n,e){n.uniform2uiv(this.addr,e)}function _0(n,e){n.uniform3uiv(this.addr,e)}function y0(n,e){n.uniform4uiv(this.addr,e)}function S0(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||lh,r[a])}function b0(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||uh,r[a])}function M0(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||hh,r[a])}function T0(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ch,r[a])}function E0(n){switch(n){case 5126:return a0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return u0;case 35675:return h0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return v0;case 36294:return x0;case 36295:return _0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return T0}}class A0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=r0(t.type)}}class C0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E0(t.type)}}class w0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function xc(n,e){n.seq.push(e),n.map[e.id]=e}function R0(n,e,t){const i=n.name,s=i.length;for(Ua.lastIndex=0;;){const r=Ua.exec(i),a=Ua.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xc(t,c===void 0?new A0(o,n,e):new C0(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new w0(o),xc(t,h)),t=h}}}class wr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);R0(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function _c(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const L0=37297;let D0=0;function P0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const yc=new Ge;function U0(n){Ze._getMatrix(yc,Ze.workingColorSpace,n);const e=`mat3( ${yc.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Jr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+P0(n.getShaderSource(e),a)}else return s}function I0(n,e){const t=U0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function O0(n,e){let t;switch(e){case Kf:t="Linear";break;case Jf:t="Reinhard";break;case Qf:t="Cineon";break;case ed:t="ACESFilmic";break;case nd:t="AgX";break;case id:t="Neutral";break;case td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lr=new k;function F0(){Ze.getLuminanceCoefficients(lr);const n=lr.x.toFixed(4),e=lr.y.toFixed(4),t=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function k0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function B0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ss(n){return n!==""}function bc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(n){return n.replace(z0,G0)}const H0=new Map;function G0(n,e){let t=We[e];if(t===void 0){const i=H0.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fo(t)}const V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(n){return n.replace(V0,W0)}function W0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ec(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function X0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function q0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case Kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function j0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ko:e="ENVMAP_BLENDING_MULTIPLY";break;case $f:e="ENVMAP_BLENDING_MIX";break;case Zf:e="ENVMAP_BLENDING_ADD";break}return e}function $0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Z0(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=X0(t),c=q0(t),u=Y0(t),h=j0(t),f=$0(t),d=N0(t),p=k0(r),v=s.createProgram();let g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ss).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ss).join(`
`),m.length>0&&(m+=`
`)):(g=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),m=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?We.tonemapping_pars_fragment:"",t.toneMapping!==Kn?O0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,I0("linearToOutputTexel",t.outputColorSpace),F0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Fo(a),a=bc(a,t),a=Mc(a,t),o=Fo(o),o=bc(o,t),o=Mc(o,t),a=Tc(a),o=Tc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=M+g+a,S=M+m+o,N=_c(s,s.VERTEX_SHADER,b),A=_c(s,s.FRAGMENT_SHADER,S);s.attachShader(v,N),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(w){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(v).trim(),R=s.getShaderInfoLog(N).trim(),U=s.getShaderInfoLog(A).trim();let B=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,N,A);else{const te=Sc(s,N,"vertex"),W=Sc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+X+`
`+te+`
`+W)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(R===""||U==="")&&(V=!1);V&&(w.diagnostics={runnable:B,programLog:X,vertexShader:{log:R,prefix:g},fragmentShader:{log:U,prefix:m}})}s.deleteShader(N),s.deleteShader(A),I=new wr(s,v),T=B0(s,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,L0)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=A,this}let K0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Q0(e),t.set(e,i)),i}}class Q0{constructor(e){this.id=K0++,this.code=e,this.usedTimes=0}}function ev(n,e,t,i,s,r,a){const o=new rl,l=new J0,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,_,w,X,R){const U=X.fog,B=R.geometry,V=T.isMeshStandardMaterial?X.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||V),W=te&&te.mapping===Kr?te.image.height:null,re=p[T.type];T.precision!==null&&(d=s.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,me=ae!==void 0?ae.length:0;let De=0;B.morphAttributes.position!==void 0&&(De=1),B.morphAttributes.normal!==void 0&&(De=2),B.morphAttributes.color!==void 0&&(De=3);let Oe,Y,K,ue;if(re){const tt=pn[re];Oe=tt.vertexShader,Y=tt.fragmentShader}else Oe=T.vertexShader,Y=T.fragmentShader,l.update(T),K=l.getVertexShaderID(T),ue=l.getFragmentShaderID(T);const ee=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),Ee=R.isInstancedMesh===!0,Pe=R.isBatchedMesh===!0,Ye=!!T.map,Ne=!!T.matcap,ft=!!te,L=!!T.aoMap,vt=!!T.lightMap,Be=!!T.bumpMap,Xe=!!T.normalMap,we=!!T.displacementMap,it=!!T.emissiveMap,Re=!!T.metalnessMap,E=!!T.roughnessMap,x=T.anisotropy>0,z=T.clearcoat>0,j=T.dispersion>0,Q=T.iridescence>0,$=T.sheen>0,Ae=T.transmission>0,fe=x&&!!T.anisotropyMap,ve=z&&!!T.clearcoatMap,$e=z&&!!T.clearcoatNormalMap,ne=z&&!!T.clearcoatRoughnessMap,_e=Q&&!!T.iridescenceMap,Ue=Q&&!!T.iridescenceThicknessMap,Ie=$&&!!T.sheenColorMap,ye=$&&!!T.sheenRoughnessMap,je=!!T.specularMap,Ve=!!T.specularColorMap,at=!!T.specularIntensityMap,D=Ae&&!!T.transmissionMap,he=Ae&&!!T.thicknessMap,q=!!T.gradientMap,Z=!!T.alphaMap,ge=T.alphaTest>0,de=!!T.alphaHash,ze=!!T.extensions;let dt=Kn;T.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(dt=n.toneMapping);const At={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:Oe,fragmentShader:Y,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:ue,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&R._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&R.instanceColor!==null,instancingMorph:Ee&&R.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ls,alphaToCoverage:!!T.alphaToCoverage,map:Ye,matcap:Ne,envMap:ft,envMapMode:ft&&te.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:vt,bumpMap:Be,normalMap:Xe,displacementMap:f&&we,emissiveMap:it,normalMapObjectSpace:Xe&&T.normalMapType===od,normalMapTangentSpace:Xe&&T.normalMapType===sl,metalnessMap:Re,roughnessMap:E,anisotropy:x,anisotropyMap:fe,clearcoat:z,clearcoatMap:ve,clearcoatNormalMap:$e,clearcoatRoughnessMap:ne,dispersion:j,iridescence:Q,iridescenceMap:_e,iridescenceThicknessMap:Ue,sheen:$,sheenColorMap:Ie,sheenRoughnessMap:ye,specularMap:je,specularColorMap:Ve,specularIntensityMap:at,transmission:Ae,transmissionMap:D,thicknessMap:he,gradientMap:q,opaque:T.transparent===!1&&T.blending===Yi&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:ge,alphaHash:de,combine:T.combine,mapUv:Ye&&v(T.map.channel),aoMapUv:L&&v(T.aoMap.channel),lightMapUv:vt&&v(T.lightMap.channel),bumpMapUv:Be&&v(T.bumpMap.channel),normalMapUv:Xe&&v(T.normalMap.channel),displacementMapUv:we&&v(T.displacementMap.channel),emissiveMapUv:it&&v(T.emissiveMap.channel),metalnessMapUv:Re&&v(T.metalnessMap.channel),roughnessMapUv:E&&v(T.roughnessMap.channel),anisotropyMapUv:fe&&v(T.anisotropyMap.channel),clearcoatMapUv:ve&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(T.sheenRoughnessMap.channel),specularMapUv:je&&v(T.specularMap.channel),specularColorMapUv:Ve&&v(T.specularColorMap.channel),specularIntensityMapUv:at&&v(T.specularIntensityMap.channel),transmissionMapUv:D&&v(T.transmissionMap.channel),thicknessMapUv:he&&v(T.thicknessMap.channel),alphaMapUv:Z&&v(T.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Xe||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!B.attributes.uv&&(Ye||Z),fog:!!U,useFog:T.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:le,skinning:R.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:De,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:Ye&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===st,decodeVideoTextureEmissive:it&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===wn,flipSided:T.side===Nt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function m(T){const _=[];if(T.shaderID?_.push(T.shaderID):(_.push(T.customVertexShaderID),_.push(T.customFragmentShaderID)),T.defines!==void 0)for(const w in T.defines)_.push(w),_.push(T.defines[w]);return T.isRawShaderMaterial===!1&&(M(_,T),b(_,T),_.push(n.outputColorSpace)),_.push(T.customProgramCacheKey),_.join()}function M(T,_){T.push(_.precision),T.push(_.outputColorSpace),T.push(_.envMapMode),T.push(_.envMapCubeUVHeight),T.push(_.mapUv),T.push(_.alphaMapUv),T.push(_.lightMapUv),T.push(_.aoMapUv),T.push(_.bumpMapUv),T.push(_.normalMapUv),T.push(_.displacementMapUv),T.push(_.emissiveMapUv),T.push(_.metalnessMapUv),T.push(_.roughnessMapUv),T.push(_.anisotropyMapUv),T.push(_.clearcoatMapUv),T.push(_.clearcoatNormalMapUv),T.push(_.clearcoatRoughnessMapUv),T.push(_.iridescenceMapUv),T.push(_.iridescenceThicknessMapUv),T.push(_.sheenColorMapUv),T.push(_.sheenRoughnessMapUv),T.push(_.specularMapUv),T.push(_.specularColorMapUv),T.push(_.specularIntensityMapUv),T.push(_.transmissionMapUv),T.push(_.thicknessMapUv),T.push(_.combine),T.push(_.fogExp2),T.push(_.sizeAttenuation),T.push(_.morphTargetsCount),T.push(_.morphAttributeCount),T.push(_.numDirLights),T.push(_.numPointLights),T.push(_.numSpotLights),T.push(_.numSpotLightMaps),T.push(_.numHemiLights),T.push(_.numRectAreaLights),T.push(_.numDirLightShadows),T.push(_.numPointLightShadows),T.push(_.numSpotLightShadows),T.push(_.numSpotLightShadowsWithMaps),T.push(_.numLightProbes),T.push(_.shadowMapType),T.push(_.toneMapping),T.push(_.numClippingPlanes),T.push(_.numClipIntersection),T.push(_.depthPacking)}function b(T,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),T.push(o.mask)}function S(T){const _=p[T.type];let w;if(_){const X=pn[_];w=Nd.clone(X.uniforms)}else w=T.uniforms;return w}function N(T,_){let w;for(let X=0,R=u.length;X<R;X++){const U=u[X];if(U.cacheKey===_){w=U,++w.usedTimes;break}}return w===void 0&&(w=new Z0(n,_,T,r),u.push(w)),w}function A(T){if(--T.usedTimes===0){const _=u.indexOf(T);u[_]=u[u.length-1],u.pop(),T.destroy()}}function C(T){l.remove(T)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:N,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:I}}function tv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function nv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ac(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,f,d,p,v,g){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:v,group:g},n[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=v,m.group=g),e++,m}function o(h,f,d,p,v,g){const m=a(h,f,d,p,v,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(h,f,d,p,v,g){const m=a(h,f,d,p,v,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||nv),i.length>1&&i.sort(f||Ac),s.length>1&&s.sort(f||Ac)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function iv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Cc,n.set(i,[a])):s>=r.length?(a=new Cc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function sv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new qe};break;case"SpotLight":t={position:new k,direction:new k,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function rv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let av=0;function ov(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lv(n){const e=new sv,t=rv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new ut,a=new ut;function o(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,M=0,b=0,S=0,N=0,A=0,C=0;c.sort(ov);for(let T=0,_=c.length;T<_;T++){const w=c[T],X=w.color,R=w.intensity,U=w.distance,B=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=X.r*R,h+=X.g*R,f+=X.b*R;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],R);C++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const te=w.shadow,W=t.get(w);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=B,i.directionalShadowMatrix[d]=w.shadow.matrix,M++}i.directional[d]=V,d++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(X).multiplyScalar(R),V.distance=U,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[v]=V;const te=w.shadow;if(w.map&&(i.spotLightMap[N]=w.map,N++,te.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[v]=te.matrix,w.castShadow){const W=t.get(w);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=B,S++}v++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(X).multiplyScalar(R),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=V,g++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const te=w.shadow,W=t.get(w);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,i.pointShadow[p]=W,i.pointShadowMap[p]=B,i.pointShadowMatrix[p]=w.shadow.matrix,b++}i.point[p]=V,p++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(R),V.groundColor.copy(w.groundColor).multiplyScalar(R),i.hemi[m]=V,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==d||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==M||I.numPointShadows!==b||I.numSpotShadows!==S||I.numSpotMaps!==N||I.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+N-A,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,I.directionalLength=d,I.pointLength=p,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=M,I.numPointShadows=b,I.numSpotShadows=S,I.numSpotMaps=N,I.numLightProbes=C,i.version=av++)}function l(c,u){let h=0,f=0,d=0,p=0,v=0;const g=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const b=c[m];if(b.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),h++}else if(b.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(b.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function wc(n){const e=new lv(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cv(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new wc(n),e.set(s,[o])):r>=a.length?(o=new wc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class uv extends ii{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hv extends ii{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
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
}`;function pv(n,e,t){let i=new al;const s=new ke,r=new ke,a=new pt,o=new uv({depthPacking:ad}),l=new hv,c={},u=t.maxTextureSize,h={[Qn]:Nt,[Nt]:Qn,[wn]:wn},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:fv,fragmentShader:dv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Bt;p.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dn(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let m=this.type;this.render=function(A,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const T=n.getRenderTarget(),_=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Zn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const R=m!==Cn&&this.type===Cn,U=m===Cn&&this.type!==Cn;for(let B=0,V=A.length;B<V;B++){const te=A[B],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const re=W.getFrameExtents();if(s.multiply(re),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,W.mapSize.y=r.y)),W.map===null||R===!0||U===!0){const me=this.type!==Cn?{minFilter:rn,magFilter:rn}:{};W.map!==null&&W.map.dispose(),W.map=new _i(s.x,s.y,me),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ae=W.getViewportCount();for(let me=0;me<ae;me++){const De=W.getViewport(me);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),X.viewport(a),W.updateMatrices(te,me),i=W.getFrustum(),S(C,I,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===Cn&&M(W,I),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(T,_,w)};function M(A,C){const I=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _i(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,I,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,I,d,v,null)}function b(A,C,I,T){let _=null;const w=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)_=w;else if(_=I.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=_.uuid,R=C.uuid;let U=c[X];U===void 0&&(U={},c[X]=U);let B=U[R];B===void 0&&(B=_.clone(),U[R]=B,C.addEventListener("dispose",N)),_=B}if(_.visible=C.visible,_.wireframe=C.wireframe,T===Cn?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:h[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const X=n.properties.get(_);X.light=I}return _}function S(A,C,I,T,_){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Cn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const R=e.update(A),U=A.material;if(Array.isArray(U)){const B=R.groups;for(let V=0,te=B.length;V<te;V++){const W=B[V],re=U[W.materialIndex];if(re&&re.visible){const ae=b(A,re,T,_);A.onBeforeShadow(n,A,C,I,R,ae,W),n.renderBufferDirect(I,null,R,ae,A,W),A.onAfterShadow(n,A,C,I,R,ae,W)}}}else if(U.visible){const B=b(A,U,T,_);A.onBeforeShadow(n,A,C,I,R,B,null),n.renderBufferDirect(I,null,R,B,A,null),A.onAfterShadow(n,A,C,I,R,B,null)}}const X=A.children;for(let R=0,U=X.length;R<U;R++)S(X[R],C,I,T,_)}function N(A){A.target.removeEventListener("dispose",N);for(const I in c){const T=c[I],_=A.target.uuid;_ in T&&(T[_].dispose(),delete T[_])}}}const mv={[Ka]:Ja,[Qa]:no,[eo]:io,[Ki]:to,[Ja]:Ka,[no]:Qa,[io]:eo,[to]:Ki};function gv(n,e){function t(){let D=!1;const he=new pt;let q=null;const Z=new pt(0,0,0,0);return{setMask:function(ge){q!==ge&&!D&&(n.colorMask(ge,ge,ge,ge),q=ge)},setLocked:function(ge){D=ge},setClear:function(ge,de,ze,dt,At){At===!0&&(ge*=dt,de*=dt,ze*=dt),he.set(ge,de,ze,dt),Z.equals(he)===!1&&(n.clearColor(ge,de,ze,dt),Z.copy(he))},reset:function(){D=!1,q=null,Z.set(-1,0,0,0)}}}function i(){let D=!1,he=!1,q=null,Z=null,ge=null;return{setReversed:function(de){if(he!==de){const ze=e.get("EXT_clip_control");he?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const dt=ge;ge=null,this.setClear(dt)}he=de},getReversed:function(){return he},setTest:function(de){de?ee(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(de){q!==de&&!D&&(n.depthMask(de),q=de)},setFunc:function(de){if(he&&(de=mv[de]),Z!==de){switch(de){case Ka:n.depthFunc(n.NEVER);break;case Ja:n.depthFunc(n.ALWAYS);break;case Qa:n.depthFunc(n.LESS);break;case Ki:n.depthFunc(n.LEQUAL);break;case eo:n.depthFunc(n.EQUAL);break;case to:n.depthFunc(n.GEQUAL);break;case no:n.depthFunc(n.GREATER);break;case io:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=de}},setLocked:function(de){D=de},setClear:function(de){ge!==de&&(he&&(de=1-de),n.clearDepth(de),ge=de)},reset:function(){D=!1,q=null,Z=null,ge=null,he=!1}}}function s(){let D=!1,he=null,q=null,Z=null,ge=null,de=null,ze=null,dt=null,At=null;return{setTest:function(tt){D||(tt?ee(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(tt){he!==tt&&!D&&(n.stencilMask(tt),he=tt)},setFunc:function(tt,Zt,_n){(q!==tt||Z!==Zt||ge!==_n)&&(n.stencilFunc(tt,Zt,_n),q=tt,Z=Zt,ge=_n)},setOp:function(tt,Zt,_n){(de!==tt||ze!==Zt||dt!==_n)&&(n.stencilOp(tt,Zt,_n),de=tt,ze=Zt,dt=_n)},setLocked:function(tt){D=tt},setClear:function(tt){At!==tt&&(n.clearStencil(tt),At=tt)},reset:function(){D=!1,he=null,q=null,Z=null,ge=null,de=null,ze=null,dt=null,At=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],p=null,v=!1,g=null,m=null,M=null,b=null,S=null,N=null,A=null,C=new qe(0,0,0),I=0,T=!1,_=null,w=null,X=null,R=null,U=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,te=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=te>=2);let re=null,ae={};const me=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),Oe=new pt().fromArray(me),Y=new pt().fromArray(De);function K(D,he,q,Z){const ge=new Uint8Array(4),de=n.createTexture();n.bindTexture(D,de),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<q;ze++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(he+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return de}const ue={};ue[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(Ki),Be(!1),Xe(Pl),ee(n.CULL_FACE),L(Zn);function ee(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function le(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ee(D,he){return h[D]!==he?(n.bindFramebuffer(D,he),h[D]=he,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=he),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Pe(D,he){let q=d,Z=!1;if(D){q=f.get(he),q===void 0&&(q=[],f.set(he,q));const ge=D.textures;if(q.length!==ge.length||q[0]!==n.COLOR_ATTACHMENT0){for(let de=0,ze=ge.length;de<ze;de++)q[de]=n.COLOR_ATTACHMENT0+de;q.length=ge.length,Z=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,Z=!0);Z&&n.drawBuffers(q)}function Ye(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const Ne={[di]:n.FUNC_ADD,[Pf]:n.FUNC_SUBTRACT,[Uf]:n.FUNC_REVERSE_SUBTRACT};Ne[If]=n.MIN,Ne[Of]=n.MAX;const ft={[Ff]:n.ZERO,[Nf]:n.ONE,[kf]:n.SRC_COLOR,[$a]:n.SRC_ALPHA,[Wf]:n.SRC_ALPHA_SATURATE,[Gf]:n.DST_COLOR,[zf]:n.DST_ALPHA,[Bf]:n.ONE_MINUS_SRC_COLOR,[Za]:n.ONE_MINUS_SRC_ALPHA,[Vf]:n.ONE_MINUS_DST_COLOR,[Hf]:n.ONE_MINUS_DST_ALPHA,[Xf]:n.CONSTANT_COLOR,[qf]:n.ONE_MINUS_CONSTANT_COLOR,[Yf]:n.CONSTANT_ALPHA,[jf]:n.ONE_MINUS_CONSTANT_ALPHA};function L(D,he,q,Z,ge,de,ze,dt,At,tt){if(D===Zn){v===!0&&(le(n.BLEND),v=!1);return}if(v===!1&&(ee(n.BLEND),v=!0),D!==Df){if(D!==g||tt!==T){if((m!==di||S!==di)&&(n.blendEquation(n.FUNC_ADD),m=di,S=di),tt)switch(D){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ul:n.blendFunc(n.ONE,n.ONE);break;case Il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ol:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ul:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ol:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,b=null,N=null,A=null,C.set(0,0,0),I=0,g=D,T=tt}return}ge=ge||he,de=de||q,ze=ze||Z,(he!==m||ge!==S)&&(n.blendEquationSeparate(Ne[he],Ne[ge]),m=he,S=ge),(q!==M||Z!==b||de!==N||ze!==A)&&(n.blendFuncSeparate(ft[q],ft[Z],ft[de],ft[ze]),M=q,b=Z,N=de,A=ze),(dt.equals(C)===!1||At!==I)&&(n.blendColor(dt.r,dt.g,dt.b,At),C.copy(dt),I=At),g=D,T=!1}function vt(D,he){D.side===wn?le(n.CULL_FACE):ee(n.CULL_FACE);let q=D.side===Nt;he&&(q=!q),Be(q),D.blending===Yi&&D.transparent===!1?L(Zn):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),it(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){_!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),_=D)}function Xe(D){D!==wf?(ee(n.CULL_FACE),D!==w&&(D===Pl?n.cullFace(n.BACK):D===Rf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),w=D}function we(D){D!==X&&(V&&n.lineWidth(D),X=D)}function it(D,he,q){D?(ee(n.POLYGON_OFFSET_FILL),(R!==he||U!==q)&&(n.polygonOffset(he,q),R=he,U=q)):le(n.POLYGON_OFFSET_FILL)}function Re(D){D?ee(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function E(D){D===void 0&&(D=n.TEXTURE0+B-1),re!==D&&(n.activeTexture(D),re=D)}function x(D,he,q){q===void 0&&(re===null?q=n.TEXTURE0+B-1:q=re);let Z=ae[q];Z===void 0&&(Z={type:void 0,texture:void 0},ae[q]=Z),(Z.type!==D||Z.texture!==he)&&(re!==q&&(n.activeTexture(q),re=q),n.bindTexture(D,he||ue[D]),Z.type=D,Z.texture=he)}function z(){const D=ae[re];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(D){Oe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Oe.copy(D))}function ye(D){Y.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function je(D,he){let q=c.get(he);q===void 0&&(q=new WeakMap,c.set(he,q));let Z=q.get(D);Z===void 0&&(Z=n.getUniformBlockIndex(he,D.name),q.set(D,Z))}function Ve(D,he){const Z=c.get(he).get(D);l.get(he)!==Z&&(n.uniformBlockBinding(he,Z,D.__bindingPointIndex),l.set(he,Z))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,ae={},h={},f=new WeakMap,d=[],p=null,v=!1,g=null,m=null,M=null,b=null,S=null,N=null,A=null,C=new qe(0,0,0),I=0,T=!1,_=null,w=null,X=null,R=null,U=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:le,bindFramebuffer:Ee,drawBuffers:Pe,useProgram:Ye,setBlending:L,setMaterial:vt,setFlipSided:Be,setCullFace:Xe,setLineWidth:we,setPolygonOffset:it,setScissorTest:Re,activeTexture:E,bindTexture:x,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:_e,texImage3D:Ue,updateUBOMapping:je,uniformBlockBinding:Ve,texStorage2D:$e,texStorage3D:ne,texSubImage2D:$,texSubImage3D:Ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ie,viewport:ye,reset:at}}function Rc(n,e,t,i){const s=vv(i);switch(t){case Hu:return n*e;case Vu:return n*e;case Wu:return n*e*2;case Xu:return n*e/s.components*s.byteLength;case tl:return n*e/s.components*s.byteLength;case qu:return n*e*2/s.components*s.byteLength;case nl:return n*e*2/s.components*s.byteLength;case Gu:return n*e*3/s.components*s.byteLength;case sn:return n*e*4/s.components*s.byteLength;case il:return n*e*4/s.components*s.byteLength;case Mr:case Tr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Er:case Ar:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case co:case ho:return Math.max(n,16)*Math.max(e,8)/4;case lo:case uo:return Math.max(n,8)*Math.max(e,8)/2;case fo:case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case So:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Co:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cr:case Lo:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yu:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Uo:case Io:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vv(n){switch(n){case On:case ku:return{byteLength:1,components:1};case Ts:case Bu:case ws:return{byteLength:2,components:1};case Qo:case el:return{byteLength:2,components:4};case xi:case Jo:case Rn:return{byteLength:4,components:1};case zu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xv(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,x){return d?new OffscreenCanvas(E,x):Ir("canvas")}function v(E,x,z){let j=1;const Q=Re(E);if((Q.width>z||Q.height>z)&&(j=z/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(j*Q.width),Ae=Math.floor(j*Q.height);h===void 0&&(h=p($,Ae));const fe=x?p($,Ae):h;return fe.width=$,fe.height=Ae,fe.getContext("2d").drawImage(E,0,0,$,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Ae+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){n.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,x,z,j,Q=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=x;if(x===n.RED&&(z===n.FLOAT&&($=n.R32F),z===n.HALF_FLOAT&&($=n.R16F),z===n.UNSIGNED_BYTE&&($=n.R8)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.R8UI),z===n.UNSIGNED_SHORT&&($=n.R16UI),z===n.UNSIGNED_INT&&($=n.R32UI),z===n.BYTE&&($=n.R8I),z===n.SHORT&&($=n.R16I),z===n.INT&&($=n.R32I)),x===n.RG&&(z===n.FLOAT&&($=n.RG32F),z===n.HALF_FLOAT&&($=n.RG16F),z===n.UNSIGNED_BYTE&&($=n.RG8)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RG8UI),z===n.UNSIGNED_SHORT&&($=n.RG16UI),z===n.UNSIGNED_INT&&($=n.RG32UI),z===n.BYTE&&($=n.RG8I),z===n.SHORT&&($=n.RG16I),z===n.INT&&($=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGB8UI),z===n.UNSIGNED_SHORT&&($=n.RGB16UI),z===n.UNSIGNED_INT&&($=n.RGB32UI),z===n.BYTE&&($=n.RGB8I),z===n.SHORT&&($=n.RGB16I),z===n.INT&&($=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGBA8UI),z===n.UNSIGNED_SHORT&&($=n.RGBA16UI),z===n.UNSIGNED_INT&&($=n.RGBA32UI),z===n.BYTE&&($=n.RGBA8I),z===n.SHORT&&($=n.RGBA16I),z===n.INT&&($=n.RGBA32I)),x===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),x===n.RGBA){const Ae=Q?Jr:Ze.getTransfer(j);z===n.FLOAT&&($=n.RGBA32F),z===n.HALF_FLOAT&&($=n.RGBA16F),z===n.UNSIGNED_BYTE&&($=Ae===st?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(E,x){let z;return E?x===null||x===xi||x===es?z=n.DEPTH24_STENCIL8:x===Rn?z=n.DEPTH32F_STENCIL8:x===Ts&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xi||x===es?z=n.DEPTH_COMPONENT24:x===Rn?z=n.DEPTH_COMPONENT32F:x===Ts&&(z=n.DEPTH_COMPONENT16),z}function N(E,x){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==rn&&E.minFilter!==mn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function A(E){const x=E.target;x.removeEventListener("dispose",A),I(x),x.isVideoTexture&&u.delete(x)}function C(E){const x=E.target;x.removeEventListener("dispose",C),_(x)}function I(E){const x=i.get(E);if(x.__webglInit===void 0)return;const z=E.source,j=f.get(z);if(j){const Q=j[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(E),Object.keys(j).length===0&&f.delete(z)}i.remove(E)}function T(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const z=E.source,j=f.get(z);delete j[x.__cacheKey],a.memory.textures--}function _(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let Q=0;Q<x.__webglFramebuffer[j].length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[j][Q]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=E.textures;for(let j=0,Q=z.length;j<Q;j++){const $=i.get(z[j]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(z[j])}i.remove(E)}let w=0;function X(){w=0}function R(){const E=w;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),w+=1,E}function U(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function B(E,x){const z=i.get(E);if(E.isVideoTexture&&we(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,E,x);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function V(E,x){const z=i.get(E);if(E.version>0&&z.__version!==E.version){Y(z,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function te(E,x){const z=i.get(E);if(E.version>0&&z.__version!==E.version){Y(z,E,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function W(E,x){const z=i.get(E);if(E.version>0&&z.__version!==E.version){K(z,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}const re={[ao]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[oo]:n.MIRRORED_REPEAT},ae={[rn]:n.NEAREST,[sd]:n.NEAREST_MIPMAP_NEAREST,[Gs]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[aa]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},me={[ld]:n.NEVER,[pd]:n.ALWAYS,[cd]:n.LESS,[ju]:n.LEQUAL,[ud]:n.EQUAL,[dd]:n.GEQUAL,[hd]:n.GREATER,[fd]:n.NOTEQUAL};function De(E,x){if(x.type===Rn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===mn||x.magFilter===aa||x.magFilter===Gs||x.magFilter===vi||x.minFilter===mn||x.minFilter===aa||x.minFilter===Gs||x.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,re[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,re[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,re[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ae[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===rn||x.minFilter!==Gs&&x.minFilter!==vi||x.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Oe(E,x){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",A));const j=x.source;let Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));const $=U(x);if($!==E.__cacheKey){Q[$]===void 0&&(Q[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[$].usedTimes++;const Ae=Q[E.__cacheKey];Ae!==void 0&&(Q[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(x)),E.__cacheKey=$,E.__webglTexture=Q[$].texture}return z}function Y(E,x,z){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);const Q=Oe(E,x),$=x.source;t.bindTexture(j,E.__webglTexture,n.TEXTURE0+z);const Ae=i.get($);if($.version!==Ae.__version||Q===!0){t.activeTexture(n.TEXTURE0+z);const fe=Ze.getPrimaries(Ze.workingColorSpace),ve=x.colorSpace===jn?null:Ze.getPrimaries(x.colorSpace),$e=x.colorSpace===jn||fe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ne=v(x.image,!1,s.maxTextureSize);ne=it(x,ne);const _e=r.convert(x.format,x.colorSpace),Ue=r.convert(x.type);let Ie=b(x.internalFormat,_e,Ue,x.colorSpace,x.isVideoTexture);De(j,x);let ye;const je=x.mipmaps,Ve=x.isVideoTexture!==!0,at=Ae.__version===void 0||Q===!0,D=$.dataReady,he=N(x,ne);if(x.isDepthTexture)Ie=S(x.format===ts,x.type),at&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ie,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ne.width,ne.height,0,_e,Ue,null));else if(x.isDataTexture)if(je.length>0){Ve&&at&&t.texStorage2D(n.TEXTURE_2D,he,Ie,je[0].width,je[0].height);for(let q=0,Z=je.length;q<Z;q++)ye=je[q],Ve?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ye.width,ye.height,_e,Ue,ye.data):t.texImage2D(n.TEXTURE_2D,q,Ie,ye.width,ye.height,0,_e,Ue,ye.data);x.generateMipmaps=!1}else Ve?(at&&t.texStorage2D(n.TEXTURE_2D,he,Ie,ne.width,ne.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,_e,Ue,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,ne.width,ne.height,0,_e,Ue,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ie,je[0].width,je[0].height,ne.depth);for(let q=0,Z=je.length;q<Z;q++)if(ye=je[q],x.format!==sn)if(_e!==null)if(Ve){if(D)if(x.layerUpdates.size>0){const ge=Rc(ye.width,ye.height,x.format,x.type);for(const de of x.layerUpdates){const ze=ye.data.subarray(de*ge/ye.data.BYTES_PER_ELEMENT,(de+1)*ge/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,de,ye.width,ye.height,1,_e,ze)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ye.width,ye.height,ne.depth,_e,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ie,ye.width,ye.height,ne.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ye.width,ye.height,ne.depth,_e,Ue,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ie,ye.width,ye.height,ne.depth,0,_e,Ue,ye.data)}else{Ve&&at&&t.texStorage2D(n.TEXTURE_2D,he,Ie,je[0].width,je[0].height);for(let q=0,Z=je.length;q<Z;q++)ye=je[q],x.format!==sn?_e!==null?Ve?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ye.width,ye.height,_e,Ue,ye.data):t.texImage2D(n.TEXTURE_2D,q,Ie,ye.width,ye.height,0,_e,Ue,ye.data)}else if(x.isDataArrayTexture)if(Ve){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ie,ne.width,ne.height,ne.depth),D)if(x.layerUpdates.size>0){const q=Rc(ne.width,ne.height,x.format,x.type);for(const Z of x.layerUpdates){const ge=ne.data.subarray(Z*q/ne.data.BYTES_PER_ELEMENT,(Z+1)*q/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,_e,Ue,ge)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,_e,Ue,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ne.width,ne.height,ne.depth,0,_e,Ue,ne.data);else if(x.isData3DTexture)Ve?(at&&t.texStorage3D(n.TEXTURE_3D,he,Ie,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,_e,Ue,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ne.width,ne.height,ne.depth,0,_e,Ue,ne.data);else if(x.isFramebufferTexture){if(at)if(Ve)t.texStorage2D(n.TEXTURE_2D,he,Ie,ne.width,ne.height);else{let q=ne.width,Z=ne.height;for(let ge=0;ge<he;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ie,q,Z,0,_e,Ue,null),q>>=1,Z>>=1}}else if(je.length>0){if(Ve&&at){const q=Re(je[0]);t.texStorage2D(n.TEXTURE_2D,he,Ie,q.width,q.height)}for(let q=0,Z=je.length;q<Z;q++)ye=je[q],Ve?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,_e,Ue,ye):t.texImage2D(n.TEXTURE_2D,q,Ie,_e,Ue,ye);x.generateMipmaps=!1}else if(Ve){if(at){const q=Re(ne);t.texStorage2D(n.TEXTURE_2D,he,Ie,q.width,q.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ue,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ie,_e,Ue,ne);g(x)&&m(j),Ae.__version=$.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function K(E,x,z){if(x.image.length!==6)return;const j=Oe(E,x),Q=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+z);const $=i.get(Q);if(Q.version!==$.__version||j===!0){t.activeTexture(n.TEXTURE0+z);const Ae=Ze.getPrimaries(Ze.workingColorSpace),fe=x.colorSpace===jn?null:Ze.getPrimaries(x.colorSpace),ve=x.colorSpace===jn||Ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const $e=x.isCompressedTexture||x.image[0].isCompressedTexture,ne=x.image[0]&&x.image[0].isDataTexture,_e=[];for(let Z=0;Z<6;Z++)!$e&&!ne?_e[Z]=v(x.image[Z],!0,s.maxCubemapSize):_e[Z]=ne?x.image[Z].image:x.image[Z],_e[Z]=it(x,_e[Z]);const Ue=_e[0],Ie=r.convert(x.format,x.colorSpace),ye=r.convert(x.type),je=b(x.internalFormat,Ie,ye,x.colorSpace),Ve=x.isVideoTexture!==!0,at=$.__version===void 0||j===!0,D=Q.dataReady;let he=N(x,Ue);De(n.TEXTURE_CUBE_MAP,x);let q;if($e){Ve&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,je,Ue.width,Ue.height);for(let Z=0;Z<6;Z++){q=_e[Z].mipmaps;for(let ge=0;ge<q.length;ge++){const de=q[ge];x.format!==sn?Ie!==null?Ve?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,de.width,de.height,Ie,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,je,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,de.width,de.height,Ie,ye,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,je,de.width,de.height,0,Ie,ye,de.data)}}}else{if(q=x.mipmaps,Ve&&at){q.length>0&&he++;const Z=Re(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,je,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){Ve?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,_e[Z].width,_e[Z].height,Ie,ye,_e[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,je,_e[Z].width,_e[Z].height,0,Ie,ye,_e[Z].data);for(let ge=0;ge<q.length;ge++){const ze=q[ge].image[Z].image;Ve?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,ze.width,ze.height,Ie,ye,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,je,ze.width,ze.height,0,Ie,ye,ze.data)}}else{Ve?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ie,ye,_e[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,je,Ie,ye,_e[Z]);for(let ge=0;ge<q.length;ge++){const de=q[ge];Ve?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,Ie,ye,de.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,je,Ie,ye,de.image[Z])}}}g(x)&&m(n.TEXTURE_CUBE_MAP),$.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ue(E,x,z,j,Q,$){const Ae=r.convert(z.format,z.colorSpace),fe=r.convert(z.type),ve=b(z.internalFormat,Ae,fe,z.colorSpace),$e=i.get(x),ne=i.get(z);if(ne.__renderTarget=x,!$e.__hasExternalTextures){const _e=Math.max(1,x.width>>$),Ue=Math.max(1,x.height>>$);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,ve,_e,Ue,x.depth,0,Ae,fe,null):t.texImage2D(Q,$,ve,_e,Ue,0,Ae,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Q,ne.__webglTexture,0,Be(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Q,ne.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(E,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){const j=x.depthTexture,Q=j&&j.isDepthTexture?j.type:null,$=S(x.stencilBuffer,Q),Ae=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Be(x);Xe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,$,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,$,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,$,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,E)}else{const j=x.textures;for(let Q=0;Q<j.length;Q++){const $=j[Q],Ae=r.convert($.format,$.colorSpace),fe=r.convert($.type),ve=b($.internalFormat,Ae,fe,$.colorSpace),$e=Be(x);z&&Xe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,ve,x.width,x.height):Xe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,ve,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ve,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),B(x.depthTexture,0);const Q=j.__webglTexture,$=Be(x);if(x.depthTexture.format===ji)Xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(x.depthTexture.format===ts)Xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ee(E){const x=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=j}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");le(x.__webglFramebuffer,E)}else if(z){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=n.createRenderbuffer(),ee(x.__webglDepthbuffer[j],E,!1);else{const Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ee(x.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(E,x,z){const j=i.get(E);x!==void 0&&ue(j.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ee(E)}function Ye(E){const x=E.texture,z=i.get(E),j=i.get(x);E.addEventListener("dispose",C);const Q=E.textures,$=E.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let ve=0;ve<x.mipmaps.length;ve++)z.__webglFramebuffer[fe][ve]=n.createFramebuffer()}else z.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)z.__webglFramebuffer[fe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let fe=0,ve=Q.length;fe<ve;fe++){const $e=i.get(Q[fe]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Xe(E)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const ve=Q[fe];z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const $e=r.convert(ve.format,ve.colorSpace),ne=r.convert(ve.type),_e=b(ve.internalFormat,$e,ne,ve.colorSpace,E.isXRRenderTarget===!0),Ue=Be(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,_e,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),De(n.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)ue(z.__webglFramebuffer[fe][ve],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else ue(z.__webglFramebuffer[fe],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(x)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let fe=0,ve=Q.length;fe<ve;fe++){const $e=Q[fe],ne=i.get($e);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),De(n.TEXTURE_2D,$e),ue(z.__webglFramebuffer,E,$e,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g($e)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),De(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)ue(z.__webglFramebuffer[ve],E,x,n.COLOR_ATTACHMENT0,fe,ve);else ue(z.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,fe,0);g(x)&&m(fe),t.unbindTexture()}E.depthBuffer&&Ee(E)}function Ne(E){const x=E.textures;for(let z=0,j=x.length;z<j;z++){const Q=x[z];if(g(Q)){const $=M(E),Ae=i.get(Q).__webglTexture;t.bindTexture($,Ae),m($),t.unbindTexture()}}}const ft=[],L=[];function vt(E){if(E.samples>0){if(Xe(E)===!1){const x=E.textures,z=E.width,j=E.height;let Q=n.COLOR_BUFFER_BIT;const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(E),fe=x.length>1;if(fe)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);const $e=i.get(x[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,z,j,0,0,z,j,Q,n.NEAREST),l===!0&&(ft.length=0,L.length=0,ft.push(n.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ft.push($),L.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);const $e=i.get(x[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Be(E){return Math.min(s.maxSamples,E.samples)}function Xe(E){const x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function we(E){const x=a.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function it(E,x){const z=E.colorSpace,j=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==ls&&z!==jn&&(Ze.getTransfer(z)===st?(j!==sn||Q!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Re(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=X,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=te,this.setTextureCube=W,this.rebindTextures=Pe,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Xe}function _v(n,e){function t(i,s=jn){let r;const a=Ze.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===Qo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===el)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ku)return n.BYTE;if(i===Bu)return n.SHORT;if(i===Ts)return n.UNSIGNED_SHORT;if(i===Jo)return n.INT;if(i===xi)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===ws)return n.HALF_FLOAT;if(i===Hu)return n.ALPHA;if(i===Gu)return n.RGB;if(i===sn)return n.RGBA;if(i===Vu)return n.LUMINANCE;if(i===Wu)return n.LUMINANCE_ALPHA;if(i===ji)return n.DEPTH_COMPONENT;if(i===ts)return n.DEPTH_STENCIL;if(i===Xu)return n.RED;if(i===tl)return n.RED_INTEGER;if(i===qu)return n.RG;if(i===nl)return n.RG_INTEGER;if(i===il)return n.RGBA_INTEGER;if(i===Mr||i===Tr||i===Er||i===Ar)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lo||i===co||i===uo||i===ho)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fo||i===po||i===mo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fo||i===po)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===go||i===vo||i===xo||i===_o||i===yo||i===So||i===bo||i===Mo||i===To||i===Eo||i===Ao||i===Co||i===wo||i===Ro)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===go)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_o)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===So)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===To)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Eo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ao)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Co)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ro)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cr||i===Lo||i===Do)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Cr)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Do)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yu||i===Po||i===Uo||i===Io)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class yv extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cr extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new cr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mv=`
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

}`;class Tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ei({vertexShader:bv,fragmentShader:Mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new Qr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ev extends bi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null;const v=new Tv,g=t.getContextAttributes();let m=null,M=null;const b=[],S=[],N=new ke;let A=null;const C=new nn;C.viewport=new pt;const I=new nn;I.viewport=new pt;const T=[C,I],_=new yv;let w=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=b[Y];return K===void 0&&(K=new Ia,b[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=b[Y];return K===void 0&&(K=new Ia,b[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=b[Y];return K===void 0&&(K=new Ia,b[Y]=K),K.getHandSpace()};function R(Y){const K=S.indexOf(Y.inputSource);if(K===-1)return;const ue=b[K];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,c||a),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",B);for(let Y=0;Y<b.length;Y++){const K=S[Y];K!==null&&(S[Y]=null,b[Y].disconnect(K))}w=null,X=null,v.reset(),e.setRenderTarget(m),d=null,f=null,h=null,s=null,M=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",U),s.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){const K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new _i(d.framebufferWidth,d.framebufferHeight,{format:sn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ue=null,ee=null;g.depth&&(ee=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?ts:ji,ue=g.stencil?es:xi);const le={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new _i(f.textureWidth,f.textureHeight,{format:sn,type:On,depthTexture:new oh(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(Y){for(let K=0;K<Y.removed.length;K++){const ue=Y.removed[K],ee=S.indexOf(ue);ee>=0&&(S[ee]=null,b[ee].disconnect(ue))}for(let K=0;K<Y.added.length;K++){const ue=Y.added[K];let ee=S.indexOf(ue);if(ee===-1){for(let Ee=0;Ee<b.length;Ee++)if(Ee>=S.length){S.push(ue),ee=Ee;break}else if(S[Ee]===null){S[Ee]=ue,ee=Ee;break}if(ee===-1)break}const le=b[ee];le&&le.connect(ue)}}const V=new k,te=new k;function W(Y,K,ue){V.setFromMatrixPosition(K.matrixWorld),te.setFromMatrixPosition(ue.matrixWorld);const ee=V.distanceTo(te),le=K.projectionMatrix.elements,Ee=ue.projectionMatrix.elements,Pe=le[14]/(le[10]-1),Ye=le[14]/(le[10]+1),Ne=(le[9]+1)/le[5],ft=(le[9]-1)/le[5],L=(le[8]-1)/le[0],vt=(Ee[8]+1)/Ee[0],Be=Pe*L,Xe=Pe*vt,we=ee/(-L+vt),it=we*-L;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(it),Y.translateZ(we),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),le[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Re=Pe+we,E=Ye+we,x=Be-it,z=Xe+(ee-it),j=Ne*Ye/E*Re,Q=ft*Ye/E*Re;Y.projectionMatrix.makePerspective(x,z,j,Q,Re,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let K=Y.near,ue=Y.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(ue=v.depthFar)),_.near=I.near=C.near=K,_.far=I.far=C.far=ue,(w!==_.near||X!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,X=_.far),C.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,_.layers.mask=C.layers.mask|I.layers.mask;const ee=Y.parent,le=_.cameras;re(_,ee);for(let Ee=0;Ee<le.length;Ee++)re(le[Ee],ee);le.length===2?W(_,C,I):_.projectionMatrix.copy(C.projectionMatrix),ae(Y,_,ee)};function ae(Y,K,ue){ue===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Oo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let me=null;function De(Y,K){if(u=K.getViewerPose(c||a),p=K,u!==null){const ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let ee=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,ee=!0);for(let Ee=0;Ee<ue.length;Ee++){const Pe=ue[Ee];let Ye=null;if(d!==null)Ye=d.getViewport(Pe);else{const ft=h.getViewSubImage(f,Pe);Ye=ft.viewport,Ee===0&&(e.setRenderTargetTextures(M,ft.colorTexture,f.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(M))}let Ne=T[Ee];Ne===void 0&&(Ne=new nn,Ne.layers.enable(Ee),Ne.viewport=new pt,T[Ee]=Ne),Ne.matrix.fromArray(Pe.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Pe.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ee===0&&(_.matrix.copy(Ne.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ee===!0&&_.cameras.push(Ne)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")){const Ee=h.getDepthInformation(ue[0]);Ee&&Ee.isValid&&Ee.texture&&v.init(e,Ee,s.renderState)}}for(let ue=0;ue<b.length;ue++){const ee=S[ue],le=b[ue];ee!==null&&le!==void 0&&le.update(ee,K,c||a)}me&&me(Y,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),p=null}const Oe=new rh;Oe.setAnimationLoop(De),this.setAnimationLoop=function(Y){me=Y},this.dispose=function(){}}}const ui=new an,Av=new ut;function Cv(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,nh(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,b,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Nt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Nt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=e.get(m),b=M.envMap,S=M.envMapRotation;b&&(g.envMap.value=b,ui.copy(S),ui.x*=-1,ui.y*=-1,ui.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),g.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(ui)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wv(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const S=b.program;i.uniformBlockBinding(M,S)}function c(M,b){let S=s[M.id];S===void 0&&(p(M),S=u(M),s[M.id]=S,M.addEventListener("dispose",g));const N=b.program;i.updateUBOMapping(M,N);const A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function u(M){const b=h();M.__bindingPointIndex=b;const S=n.createBuffer(),N=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,N,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const b=s[M.id],S=M.uniforms,N=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,C=S.length;A<C;A++){const I=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,_=I.length;T<_;T++){const w=I[T];if(d(w,A,T,N)===!0){const X=w.__offset,R=Array.isArray(w.value)?w.value:[w.value];let U=0;for(let B=0;B<R.length;B++){const V=R[B],te=v(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,X+U,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,U),U+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,b,S,N){const A=M.value,C=b+"_"+S;if(N[C]===void 0)return typeof A=="number"||typeof A=="boolean"?N[C]=A:N[C]=A.clone(),!0;{const I=N[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return N[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function p(M){const b=M.uniforms;let S=0;const N=16;for(let C=0,I=b.length;C<I;C++){const T=Array.isArray(b[C])?b[C]:[b[C]];for(let _=0,w=T.length;_<w;_++){const X=T[_],R=Array.isArray(X.value)?X.value:[X.value];for(let U=0,B=R.length;U<B;U++){const V=R[U],te=v(V),W=S%N,re=W%te.boundary,ae=W+re;S+=re,ae!==0&&N-ae<te.storage&&(S+=N-ae),X.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=te.storage}}}const A=S%N;return A>0&&(S+=N-A),M.__size=S,M.__cache={},this}function v(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function g(M){const b=M.target;b.removeEventListener("dispose",g);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Xb{constructor(e={}){const{canvas:t=vd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=Kn,this.toneMappingExposure=1;const S=this;let N=!1,A=0,C=0,I=null,T=-1,_=null;const w=new pt,X=new pt;let R=null;const U=new qe(0);let B=0,V=t.width,te=t.height,W=1,re=null,ae=null;const me=new pt(0,0,V,te),De=new pt(0,0,V,te);let Oe=!1;const Y=new al;let K=!1,ue=!1;const ee=new ut,le=new ut,Ee=new k,Pe=new pt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function ft(){return I===null?W:1}let L=i;function vt(y,O){return t.getContext(y,O)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zo}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){const O="webgl2";if(L=vt(O,y),L===null)throw vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Be,Xe,we,it,Re,E,x,z,j,Q,$,Ae,fe,ve,$e,ne,_e,Ue,Ie,ye,je,Ve,at,D;function he(){Be=new Ig(L),Be.init(),Ve=new _v(L,Be),Xe=new wg(L,Be,e,Ve),we=new gv(L,Be),Xe.reverseDepthBuffer&&f&&we.buffers.depth.setReversed(!0),it=new Ng(L),Re=new tv,E=new xv(L,Be,we,Re,Xe,Ve,it),x=new Lg(S),z=new Ug(S),j=new Wd(L),at=new Ag(L,j),Q=new Og(L,j,it,at),$=new Bg(L,Q,j,it),Ie=new kg(L,Xe,E),ne=new Rg(Re),Ae=new ev(S,x,z,Be,Xe,at,ne),fe=new Cv(S,Re),ve=new iv,$e=new cv(Be),Ue=new Eg(S,x,z,we,$,d,l),_e=new pv(S,$,Xe),D=new wv(L,it,Xe,we),ye=new Cg(L,Be,it),je=new Fg(L,Be,it),it.programs=Ae.programs,S.capabilities=Xe,S.extensions=Be,S.properties=Re,S.renderLists=ve,S.shadowMap=_e,S.state=we,S.info=it}he();const q=new Ev(S,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Be.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Be.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize(V,te,!1))},this.getSize=function(y){return y.set(V,te)},this.setSize=function(y,O,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,te=O,t.width=Math.floor(y*W),t.height=Math.floor(O*W),H===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(V*W,te*W).floor()},this.setDrawingBufferSize=function(y,O,H){V=y,te=O,W=H,t.width=Math.floor(y*H),t.height=Math.floor(O*H),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(me)},this.setViewport=function(y,O,H,G){y.isVector4?me.set(y.x,y.y,y.z,y.w):me.set(y,O,H,G),we.viewport(w.copy(me).multiplyScalar(W).round())},this.getScissor=function(y){return y.copy(De)},this.setScissor=function(y,O,H,G){y.isVector4?De.set(y.x,y.y,y.z,y.w):De.set(y,O,H,G),we.scissor(X.copy(De).multiplyScalar(W).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(y){we.setScissorTest(Oe=y)},this.setOpaqueSort=function(y){re=y},this.setTransparentSort=function(y){ae=y},this.getClearColor=function(y){return y.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(y=!0,O=!0,H=!0){let G=0;if(y){let F=!1;if(I!==null){const ie=I.texture.format;F=ie===il||ie===nl||ie===tl}if(F){const ie=I.texture.type,pe=ie===On||ie===xi||ie===Ts||ie===es||ie===Qo||ie===el,be=Ue.getClearColor(),Me=Ue.getClearAlpha(),Fe=be.r,He=be.g,Te=be.b;pe?(p[0]=Fe,p[1]=He,p[2]=Te,p[3]=Me,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=Fe,v[1]=He,v[2]=Te,v[3]=Me,L.clearBufferiv(L.COLOR,0,v))}else G|=L.COLOR_BUFFER_BIT}O&&(G|=L.DEPTH_BUFFER_BIT),H&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ve.dispose(),$e.dispose(),Re.dispose(),x.dispose(),z.dispose(),$.dispose(),at.dispose(),D.dispose(),Ae.dispose(),q.dispose(),q.removeEventListener("sessionstart",Tl),q.removeEventListener("sessionend",El),si.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const y=it.autoReset,O=_e.enabled,H=_e.autoUpdate,G=_e.needsUpdate,F=_e.type;he(),it.autoReset=y,_e.enabled=O,_e.autoUpdate=H,_e.needsUpdate=G,_e.type=F}function de(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ze(y){const O=y.target;O.removeEventListener("dispose",ze),dt(O)}function dt(y){At(y),Re.remove(y)}function At(y){const O=Re.get(y).programs;O!==void 0&&(O.forEach(function(H){Ae.releaseProgram(H)}),y.isShaderMaterial&&Ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,H,G,F,ie){O===null&&(O=Ye);const pe=F.isMesh&&F.matrixWorld.determinant()<0,be=Ef(y,O,H,G,F);we.setMaterial(G,pe);let Me=H.index,Fe=1;if(G.wireframe===!0){if(Me=Q.getWireframeAttribute(H),Me===void 0)return;Fe=2}const He=H.drawRange,Te=H.attributes.position;let Ke=He.start*Fe,ot=(He.start+He.count)*Fe;ie!==null&&(Ke=Math.max(Ke,ie.start*Fe),ot=Math.min(ot,(ie.start+ie.count)*Fe)),Me!==null?(Ke=Math.max(Ke,0),ot=Math.min(ot,Me.count)):Te!=null&&(Ke=Math.max(Ke,0),ot=Math.min(ot,Te.count));const lt=ot-Ke;if(lt<0||lt===1/0)return;at.setup(F,G,be,H,Me);let It,Qe=ye;if(Me!==null&&(It=j.get(Me),Qe=je,Qe.setIndex(It)),F.isMesh)G.wireframe===!0?(we.setLineWidth(G.wireframeLinewidth*ft()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(F.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),we.setLineWidth(Ce*ft()),F.isLineSegments?Qe.setMode(L.LINES):F.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else F.isPoints?Qe.setMode(L.POINTS):F.isSprite&&Qe.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ce=F._multiDrawStarts,yn=F._multiDrawCounts,et=F._multiDrawCount,Kt=Me?j.get(Me).bytesPerElement:1,Ai=Re.get(G).currentProgram.getUniforms();for(let zt=0;zt<et;zt++)Ai.setValue(L,"_gl_DrawID",zt),Qe.render(Ce[zt]/Kt,yn[zt])}else if(F.isInstancedMesh)Qe.renderInstances(Ke,lt,F.count);else if(H.isInstancedBufferGeometry){const Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,yn=Math.min(H.instanceCount,Ce);Qe.renderInstances(Ke,lt,yn)}else Qe.render(Ke,lt)};function tt(y,O,H){y.transparent===!0&&y.side===wn&&y.forceSinglePass===!1?(y.side=Nt,y.needsUpdate=!0,Hs(y,O,H),y.side=Qn,y.needsUpdate=!0,Hs(y,O,H),y.side=wn):Hs(y,O,H)}this.compile=function(y,O,H=null){H===null&&(H=y),m=$e.get(H),m.init(O),b.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),y!==H&&y.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const G=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ie=F.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const be=ie[pe];tt(be,H,F),G.add(be)}else tt(ie,H,F),G.add(ie)}),b.pop(),m=null,G},this.compileAsync=function(y,O,H=null){const G=this.compile(y,O,H);return new Promise(F=>{function ie(){if(G.forEach(function(pe){Re.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){F(y);return}setTimeout(ie,10)}Be.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Zt=null;function _n(y){Zt&&Zt(y)}function Tl(){si.stop()}function El(){si.start()}const si=new rh;si.setAnimationLoop(_n),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(y){Zt=y,q.setAnimationLoop(y),y===null?si.stop():si.start()},q.addEventListener("sessionstart",Tl),q.addEventListener("sessionend",El),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,O,I),m=$e.get(y,b.length),m.init(O),b.push(m),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(le),ue=this.localClippingEnabled,K=ne.init(this.clippingPlanes,ue),g=ve.get(y,M.length),g.init(),M.push(g),q.enabled===!0&&q.isPresenting===!0){const ie=S.xr.getDepthSensingMesh();ie!==null&&ra(ie,O,-1/0,S.sortObjects)}ra(y,O,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(re,ae),Ne=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ne&&Ue.addToRenderList(g,y),this.info.render.frame++,K===!0&&ne.beginShadows();const H=m.state.shadowsArray;_e.render(H,y,O),K===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,F=g.transmissive;if(m.setupLights(),O.isArrayCamera){const ie=O.cameras;if(F.length>0)for(let pe=0,be=ie.length;pe<be;pe++){const Me=ie[pe];Cl(G,F,y,Me)}Ne&&Ue.render(y);for(let pe=0,be=ie.length;pe<be;pe++){const Me=ie[pe];Al(g,y,Me,Me.viewport)}}else F.length>0&&Cl(G,F,y,O),Ne&&Ue.render(y),Al(g,y,O);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(S,y,O),at.resetDefaultState(),T=-1,_=null,b.pop(),b.length>0?(m=b[b.length-1],K===!0&&ne.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function ra(y,O,H,G){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){G&&Pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(le);const pe=$.update(y),be=y.material;be.visible&&g.push(y,pe,be,H,Pe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const pe=$.update(y),be=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pe.copy(y.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(y.matrixWorld).applyMatrix4(le)),Array.isArray(be)){const Me=pe.groups;for(let Fe=0,He=Me.length;Fe<He;Fe++){const Te=Me[Fe],Ke=be[Te.materialIndex];Ke&&Ke.visible&&g.push(y,pe,Ke,H,Pe.z,Te)}}else be.visible&&g.push(y,pe,be,H,Pe.z,null)}}const ie=y.children;for(let pe=0,be=ie.length;pe<be;pe++)ra(ie[pe],O,H,G)}function Al(y,O,H,G){const F=y.opaque,ie=y.transmissive,pe=y.transparent;m.setupLightsView(H),K===!0&&ne.setGlobalState(S.clippingPlanes,H),G&&we.viewport(w.copy(G)),F.length>0&&zs(F,O,H),ie.length>0&&zs(ie,O,H),pe.length>0&&zs(pe,O,H),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Cl(y,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new _i(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?ws:On,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ie=m.state.transmissionRenderTarget[G.id],pe=G.viewport||w;ie.setSize(pe.z,pe.w);const be=S.getRenderTarget();S.setRenderTarget(ie),S.getClearColor(U),B=S.getClearAlpha(),B<1&&S.setClearColor(16777215,.5),S.clear(),Ne&&Ue.render(H);const Me=S.toneMapping;S.toneMapping=Kn;const Fe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),K===!0&&ne.setGlobalState(S.clippingPlanes,G),zs(y,H,G),E.updateMultisampleRenderTarget(ie),E.updateRenderTargetMipmap(ie),Be.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Te=0,Ke=O.length;Te<Ke;Te++){const ot=O[Te],lt=ot.object,It=ot.geometry,Qe=ot.material,Ce=ot.group;if(Qe.side===wn&&lt.layers.test(G.layers)){const yn=Qe.side;Qe.side=Nt,Qe.needsUpdate=!0,wl(lt,H,G,It,Qe,Ce),Qe.side=yn,Qe.needsUpdate=!0,He=!0}}He===!0&&(E.updateMultisampleRenderTarget(ie),E.updateRenderTargetMipmap(ie))}S.setRenderTarget(be),S.setClearColor(U,B),Fe!==void 0&&(G.viewport=Fe),S.toneMapping=Me}function zs(y,O,H){const G=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ie=y.length;F<ie;F++){const pe=y[F],be=pe.object,Me=pe.geometry,Fe=G===null?pe.material:G,He=pe.group;be.layers.test(H.layers)&&wl(be,O,H,Me,Fe,He)}}function wl(y,O,H,G,F,ie){y.onBeforeRender(S,O,H,G,F,ie),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(S,O,H,G,y,ie),F.transparent===!0&&F.side===wn&&F.forceSinglePass===!1?(F.side=Nt,F.needsUpdate=!0,S.renderBufferDirect(H,O,G,F,y,ie),F.side=Qn,F.needsUpdate=!0,S.renderBufferDirect(H,O,G,F,y,ie),F.side=wn):S.renderBufferDirect(H,O,G,F,y,ie),y.onAfterRender(S,O,H,G,F,ie)}function Hs(y,O,H){O.isScene!==!0&&(O=Ye);const G=Re.get(y),F=m.state.lights,ie=m.state.shadowsArray,pe=F.state.version,be=Ae.getParameters(y,F.state,ie,O,H),Me=Ae.getProgramCacheKey(be);let Fe=G.programs;G.environment=y.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(y.isMeshStandardMaterial?z:x).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Fe===void 0&&(y.addEventListener("dispose",ze),Fe=new Map,G.programs=Fe);let He=Fe.get(Me);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===pe)return Ll(y,be),He}else be.uniforms=Ae.getUniforms(y),y.onBeforeCompile(be,S),He=Ae.acquireProgram(be,Me),Fe.set(Me,He),G.uniforms=be.uniforms;const Te=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=ne.uniform),Ll(y,be),G.needsLights=Cf(y),G.lightsStateVersion=pe,G.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function Rl(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=wr.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Ll(y,O){const H=Re.get(y);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Ef(y,O,H,G,F){O.isScene!==!0&&(O=Ye),E.resetTextureUnits();const ie=O.fog,pe=G.isMeshStandardMaterial?O.environment:null,be=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ls,Me=(G.isMeshStandardMaterial?z:x).get(G.envMap||pe),Fe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,ot=!!H.morphAttributes.color;let lt=Kn;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(lt=S.toneMapping);const It=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qe=It!==void 0?It.length:0,Ce=Re.get(G),yn=m.state.lights;if(K===!0&&(ue===!0||y!==_)){const Xt=y===_&&G.id===T;ne.setState(G,y,Xt)}let et=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==yn.state.version||Ce.outputColorSpace!==be||F.isBatchedMesh&&Ce.batching===!1||!F.isBatchedMesh&&Ce.batching===!0||F.isBatchedMesh&&Ce.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ce.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ce.instancing===!1||!F.isInstancedMesh&&Ce.instancing===!0||F.isSkinnedMesh&&Ce.skinning===!1||!F.isSkinnedMesh&&Ce.skinning===!0||F.isInstancedMesh&&Ce.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ce.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ce.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ce.instancingMorph===!1&&F.morphTexture!==null||Ce.envMap!==Me||G.fog===!0&&Ce.fog!==ie||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ne.numPlanes||Ce.numIntersection!==ne.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==He||Ce.morphTargets!==Te||Ce.morphNormals!==Ke||Ce.morphColors!==ot||Ce.toneMapping!==lt||Ce.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ce.__version=G.version);let Kt=Ce.currentProgram;et===!0&&(Kt=Hs(G,O,F));let Ai=!1,zt=!1,hs=!1;const ct=Kt.getUniforms(),un=Ce.uniforms;if(we.useProgram(Kt.program)&&(Ai=!0,zt=!0,hs=!0),G.id!==T&&(T=G.id,zt=!0),Ai||_!==y){we.buffers.depth.getReversed()?(ee.copy(y.projectionMatrix),_d(ee),yd(ee),ct.setValue(L,"projectionMatrix",ee)):ct.setValue(L,"projectionMatrix",y.projectionMatrix),ct.setValue(L,"viewMatrix",y.matrixWorldInverse);const Fn=ct.map.cameraPosition;Fn!==void 0&&Fn.setValue(L,Ee.setFromMatrixPosition(y.matrixWorld)),Xe.logarithmicDepthBuffer&&ct.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),_!==y&&(_=y,zt=!0,hs=!0)}if(F.isSkinnedMesh){ct.setOptional(L,F,"bindMatrix"),ct.setOptional(L,F,"bindMatrixInverse");const Xt=F.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),ct.setValue(L,"boneTexture",Xt.boneTexture,E))}F.isBatchedMesh&&(ct.setOptional(L,F,"batchingTexture"),ct.setValue(L,"batchingTexture",F._matricesTexture,E),ct.setOptional(L,F,"batchingIdTexture"),ct.setValue(L,"batchingIdTexture",F._indirectTexture,E),ct.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&ct.setValue(L,"batchingColorTexture",F._colorsTexture,E));const fs=H.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&Ie.update(F,H,Kt),(zt||Ce.receiveShadow!==F.receiveShadow)&&(Ce.receiveShadow=F.receiveShadow,ct.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(un.envMap.value=Me,un.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(un.envMapIntensity.value=O.environmentIntensity),zt&&(ct.setValue(L,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&Af(un,hs),ie&&G.fog===!0&&fe.refreshFogUniforms(un,ie),fe.refreshMaterialUniforms(un,G,W,te,m.state.transmissionRenderTarget[y.id]),wr.upload(L,Rl(Ce),un,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(wr.upload(L,Rl(Ce),un,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(L,"center",F.center),ct.setValue(L,"modelViewMatrix",F.modelViewMatrix),ct.setValue(L,"normalMatrix",F.normalMatrix),ct.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Xt=G.uniformsGroups;for(let Fn=0,Nn=Xt.length;Fn<Nn;Fn++){const Dl=Xt[Fn];D.update(Dl,Kt),D.bind(Dl,Kt)}}return Kt}function Af(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Cf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,O,H){Re.get(y.texture).__webglTexture=O,Re.get(y.depthTexture).__webglTexture=H;const G=Re.get(y);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,O){const H=Re.get(y);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,H=0){I=y,A=O,C=H;let G=!0,F=null,ie=!1,pe=!1;if(y){const Me=Re.get(y);if(Me.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(Me.__hasExternalTextures)E.rebindTextures(y,Re.get(y.texture).__webglTexture,Re.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Te=y.depthTexture;if(Me.__boundDepthTexture!==Te){if(Te!==null&&Re.has(Te)&&(y.width!==Te.image.width||y.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}const Fe=y.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const He=Re.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(He[O])?F=He[O][H]:F=He[O],ie=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?F=Re.get(y).__webglMultisampledFramebuffer:Array.isArray(He)?F=He[H]:F=He,w.copy(y.viewport),X.copy(y.scissor),R=y.scissorTest}else w.copy(me).multiplyScalar(W).floor(),X.copy(De).multiplyScalar(W).floor(),R=Oe;if(we.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&we.drawBuffers(y,F),we.viewport(w),we.scissor(X),we.setScissorTest(R),ie){const Me=Re.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,H)}else if(pe){const Me=Re.get(y.texture),Fe=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,H||0,Fe)}T=-1},this.readRenderTargetPixels=function(y,O,H,G,F,ie,pe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(be=be[pe]),be){we.bindFramebuffer(L.FRAMEBUFFER,be);try{const Me=y.texture,Fe=Me.format,He=Me.type;if(!Xe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-G&&H>=0&&H<=y.height-F&&L.readPixels(O,H,G,F,Ve.convert(Fe),Ve.convert(He),ie)}finally{const Me=I!==null?Re.get(I).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(y,O,H,G,F,ie,pe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(be=be[pe]),be){const Me=y.texture,Fe=Me.format,He=Me.type;if(!Xe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=y.width-G&&H>=0&&H<=y.height-F){we.bindFramebuffer(L.FRAMEBUFFER,be);const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),L.readPixels(O,H,G,F,Ve.convert(Fe),Ve.convert(He),0);const Ke=I!==null?Re.get(I).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Ke);const ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await xd(L,ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer(Te),L.deleteSync(ot),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,O=null,H=0){y.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1]);const G=Math.pow(2,-H),F=Math.floor(y.image.width*G),ie=Math.floor(y.image.height*G),pe=O!==null?O.x:0,be=O!==null?O.y:0;E.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,pe,be,F,ie),we.unbindTexture()},this.copyTextureToTexture=function(y,O,H=null,G=null,F=0){y.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,y=arguments[1],O=arguments[2],F=arguments[3]||0,H=null);let ie,pe,be,Me,Fe,He,Te,Ke,ot;const lt=y.isCompressedTexture?y.mipmaps[F]:y.image;H!==null?(ie=H.max.x-H.min.x,pe=H.max.y-H.min.y,be=H.isBox3?H.max.z-H.min.z:1,Me=H.min.x,Fe=H.min.y,He=H.isBox3?H.min.z:0):(ie=lt.width,pe=lt.height,be=lt.depth||1,Me=0,Fe=0,He=0),G!==null?(Te=G.x,Ke=G.y,ot=G.z):(Te=0,Ke=0,ot=0);const It=Ve.convert(O.format),Qe=Ve.convert(O.type);let Ce;O.isData3DTexture?(E.setTexture3D(O,0),Ce=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),Ce=L.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),Ce=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const yn=L.getParameter(L.UNPACK_ROW_LENGTH),et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Kt=L.getParameter(L.UNPACK_SKIP_PIXELS),Ai=L.getParameter(L.UNPACK_SKIP_ROWS),zt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,He);const hs=y.isDataArrayTexture||y.isData3DTexture,ct=O.isDataArrayTexture||O.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const un=Re.get(y),fs=Re.get(O),Xt=Re.get(un.__renderTarget),Fn=Re.get(fs.__renderTarget);we.bindFramebuffer(L.READ_FRAMEBUFFER,Xt.__webglFramebuffer),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let Nn=0;Nn<be;Nn++)hs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(y).__webglTexture,F,He+Nn),y.isDepthTexture?(ct&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,F,ot+Nn),L.blitFramebuffer(Me,Fe,ie,pe,Te,Ke,ie,pe,L.DEPTH_BUFFER_BIT,L.NEAREST)):ct?L.copyTexSubImage3D(Ce,F,Te,Ke,ot+Nn,Me,Fe,ie,pe):L.copyTexSubImage2D(Ce,F,Te,Ke,ot+Nn,Me,Fe,ie,pe);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ct?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Ce,F,Te,Ke,ot,ie,pe,be,It,Qe,lt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Ce,F,Te,Ke,ot,ie,pe,be,It,lt.data):L.texSubImage3D(Ce,F,Te,Ke,ot,ie,pe,be,It,Qe,lt):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Te,Ke,ie,pe,It,Qe,lt.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Te,Ke,lt.width,lt.height,It,lt.data):L.texSubImage2D(L.TEXTURE_2D,F,Te,Ke,ie,pe,It,Qe,lt);L.pixelStorei(L.UNPACK_ROW_LENGTH,yn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Kt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ai),L.pixelStorei(L.UNPACK_SKIP_IMAGES,zt),F===0&&O.generateMipmaps&&L.generateMipmap(Ce),we.unbindTexture()},this.copyTextureToTexture3D=function(y,O,H=null,G=null,F=0){return y.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,y=arguments[2],O=arguments[3],F=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,H,G,F)},this.initRenderTarget=function(y){Re.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),we.unbindTexture()},this.resetState=function(){A=0,C=0,I=null,we.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class qb extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ll extends ii{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Or=new k,Fr=new k,Lc=new ut,xs=new Ps,ur=new Ds,Oa=new k,Dc=new k;class Rv extends Tt{constructor(e=new Bt,t=new ll){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Or.fromBufferAttribute(t,s-1),Fr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Or.distanceTo(Fr);e.setAttribute("lineDistance",new Et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(s),ur.radius+=r,e.ray.intersectsSphere(ur)===!1)return;Lc.copy(s).invert(),xs.copy(e.ray).applyMatrix4(Lc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=d,g=p-1;v<g;v+=c){const m=u.getX(v),M=u.getX(v+1),b=hr(this,e,xs,l,m,M);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(p-1),g=u.getX(d),m=hr(this,e,xs,l,v,g);m&&t.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=d,g=p-1;v<g;v+=c){const m=hr(this,e,xs,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=hr(this,e,xs,l,p-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function hr(n,e,t,i,s,r){const a=n.geometry.attributes.position;if(Or.fromBufferAttribute(a,s),Fr.fromBufferAttribute(a,r),t.distanceSqToSegment(Or,Fr,Oa,Dc)>i)return;Oa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Oa);if(!(l<e.near||l>e.far))return{distance:l,point:Dc.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Pc=new k,Uc=new k;class fh extends Rv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Pc.fromBufferAttribute(t,s),Uc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pc.distanceTo(Uc);e.setAttribute("lineDistance",new Et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lv extends ii{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ic=new ut,No=new Ps,fr=new Ds,dr=new k;class Yb extends Tt{constructor(e=new Bt,t=new Lv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,e.ray.intersectsSphere(fr)===!1)return;Ic.copy(s).invert(),No.copy(e.ray).applyMatrix4(Ic);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,v=d;p<v;p++){const g=c.getX(p);dr.fromBufferAttribute(h,g),Oc(dr,g,l,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let p=f,v=d;p<v;p++)dr.fromBufferAttribute(h,p),Oc(dr,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Oc(n,e,t,i,s,r,a){const o=No.distanceSqToPoint(n);if(o<t){const l=new k;No.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}const pr=new k,mr=new k,Fa=new k,gr=new jt;class jb extends Bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(bs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:g,c:m}=gr;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),gr.getNormal(Fa),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const b=(M+1)%3,S=h[M],N=h[b],A=gr[u[M]],C=gr[u[b]],I=`${S}_${N}`,T=`${N}_${S}`;T in f&&f[T]?(Fa.dot(f[T].normal)<=r&&(d.push(A.x,A.y,A.z),d.push(C.x,C.y,C.z)),f[T]=null):I in f||(f[I]={index0:c[M],index1:c[b],normal:Fa.clone()})}}for(const p in f)if(f[p]){const{index0:v,index1:g}=f[p];pr.fromBufferAttribute(o,v),mr.fromBufferAttribute(o,g),d.push(pr.x,pr.y,pr.z),d.push(mr.x,mr.y,mr.z)}this.setAttribute("position",new Et(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class dh extends Bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new k,f=new k,d=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){const M=[],b=m/i;let S=0;m===0&&a===0?S=.5/t:m===i&&l===Math.PI&&(S=-.5/t);for(let N=0;N<=t;N++){const A=N/t;h.x=-e*Math.cos(s+A*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(s+A*r)*Math.sin(a+b*o),p.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),g.push(A+S,1-b),M.push(c++)}u.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){const b=u[m][M+1],S=u[m][M],N=u[m+1][M],A=u[m+1][M+1];(m!==0||a>0)&&d.push(b,S,A),(m!==i-1||l<Math.PI)&&d.push(S,N,A)}this.setIndex(d),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $b extends Bt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new k,r=new k;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,d=h.count;for(let p=f,v=f+d;p<v;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),M=o.getX(p+(g+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,M),Fc(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,h=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),Fc(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Et(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Fc(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}class Zb extends ii{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kb extends ii{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Nc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Dv{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}}const Pv=new Dv;class ph{constructor(e){this.manager=e!==void 0?e:Pv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ph.DEFAULT_MATERIAL_NAME="__DEFAULT";const An={};class Uv extends Error{constructor(e,t){super(e),this.response=t}}class Jb extends ph{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Nc.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(An[e]!==void 0){An[e].push({onLoad:t,onProgress:i,onError:s});return}An[e]=[],An[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=An[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let v=0;const g=new ReadableStream({start(m){M();function M(){h.read().then(({done:b,value:S})=>{if(b)m.close();else{v+=S.byteLength;const N=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let A=0,C=u.length;A<C;A++){const I=u[A];I.onProgress&&I.onProgress(N)}m.enqueue(S),M()}},b=>{m.error(b)})}}});return new Response(g)}else throw new Uv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Nc.add(e,c);const u=An[e];delete An[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=An[e];if(u===void 0)throw this.manager.itemError(e),c;delete An[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class mh extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Na=new ut,kc=new k,Bc=new k;class Iv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new al,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ov extends Iv{constructor(){super(new ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qb extends mh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Ov}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eM extends mh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const zc=new ut;class tM{constructor(e,t,i=0,s=1/0){this.ray=new Ps(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zc),this}intersectObject(e,t=!0,i=[]){return ko(e,this,i,t),i.sort(Hc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ko(e[s],this,i,t);return i.sort(Hc),i}}function Hc(n,e){return n.distance-e.distance}function ko(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)ko(r[a],e,t,!0)}}class Gc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nM extends fh{constructor(e=10,t=10,i=4473924,s=8947848){i=new qe(i),s=new qe(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,p=-o;f<=t;f++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const v=f===r?i:s;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const u=new Bt;u.setAttribute("position",new Et(l,3)),u.setAttribute("color",new Et(c,3));const h=new ll({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class iM extends fh{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Bt;s.setAttribute("position",new Et(t,3)),s.setAttribute("color",new Et(i,3));const r=new ll({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new qe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Fv extends bi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);const Vc={type:"change"},cl={type:"start"},gh={type:"end"},vr=new Ps,Wc=new qn,Nv=Math.cos(70*gd.DEG2RAD),_t=new k,Ft=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ka=1e-6;class sM extends Fv{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new yi,this._lastTargetPosition=new k,this._quat=new yi().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gc,this._sphericalDelta=new Gc,this._scale=1,this._panOffset=new k,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new k,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bv.bind(this),this._onPointerDown=kv.bind(this),this._onPointerUp=zv.bind(this),this._onContextMenu=Yv.bind(this),this._onMouseWheel=Vv.bind(this),this._onKeyDown=Wv.bind(this),this._onTouchStart=Xv.bind(this),this._onTouchMove=qv.bind(this),this._onMouseDown=Hv.bind(this),this._onMouseMove=Gv.bind(this),this._interceptControlDown=jv.bind(this),this._interceptControlUp=$v.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vc),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;_t.copy(t).sub(this.target),_t.applyQuaternion(this._quat),this._spherical.setFromVector3(_t),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ft:i>Math.PI&&(i-=Ft),s<-Math.PI?s+=Ft:s>Math.PI&&(s-=Ft),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(_t.setFromSpherical(this._spherical),_t.applyQuaternion(this._quatInverse),t.copy(this.target).add(_t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=_t.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=_t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vr.origin.copy(this.object.position),vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vr.direction))<Nv?this.object.lookAt(this.target):(Wc.setFromNormalAndCoplanarPoint(this.object.up,this.target),vr.intersectPlane(Wc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ka||this._lastTargetPosition.distanceToSquared(this.target)>ka?(this.dispatchEvent(Vc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ft/60*this.autoRotateSpeed*e:Ft/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_t.setFromMatrixColumn(t,0),_t.multiplyScalar(-e),this._panOffset.add(_t)}_panUp(e,t){this.screenSpacePanning===!0?_t.setFromMatrixColumn(t,1):(_t.setFromMatrixColumn(t,0),_t.crossVectors(this.object.up,_t)),_t.multiplyScalar(e),this._panOffset.add(_t)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_t.copy(s).sub(this.target);let r=_t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function kv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Bv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function zv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gh),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hv(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=rt.DOLLY;break;case qi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}break;case qi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(cl)}function Gv(n){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Vv(n){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(n.preventDefault(),this.dispatchEvent(cl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(gh))}function Wv(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Xv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=rt.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=rt.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(cl)}function qv(n){switch(this._trackPointer(n),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=rt.NONE}}function Yv(n){this.enabled!==!1&&n.preventDefault()}function jv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $v(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ul=0,vh=-3;function Es(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function Zv(n,e){this.source=n,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new Es,this.dtree=new Es}var xh=new Es,_h=new Es,hl=new Uint8Array(30),fl=new Uint16Array(30),yh=new Uint8Array(30),Sh=new Uint16Array(30),Kv=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Xc=new Es,hn=new Uint8Array(320);function bh(n,e,t,i){var s,r;for(s=0;s<t;++s)n[s]=0;for(s=0;s<30-t;++s)n[s+t]=s/t|0;for(r=i,s=0;s<30;++s)e[s]=r,r+=1<<n[s]}function Jv(n,e){var t;for(t=0;t<7;++t)n.table[t]=0;for(n.table[7]=24,n.table[8]=152,n.table[9]=112,t=0;t<24;++t)n.trans[t]=256+t;for(t=0;t<144;++t)n.trans[24+t]=t;for(t=0;t<8;++t)n.trans[168+t]=280+t;for(t=0;t<112;++t)n.trans[176+t]=144+t;for(t=0;t<5;++t)e.table[t]=0;for(e.table[5]=32,t=0;t<32;++t)e.trans[t]=t}var qc=new Uint16Array(16);function Ba(n,e,t,i){var s,r;for(s=0;s<16;++s)n.table[s]=0;for(s=0;s<i;++s)n.table[e[t+s]]++;for(n.table[0]=0,r=0,s=0;s<16;++s)qc[s]=r,r+=n.table[s];for(s=0;s<i;++s)e[t+s]&&(n.trans[qc[e[t+s]]++]=s)}function Qv(n){n.bitcount--||(n.tag=n.source[n.sourceIndex++],n.bitcount=7);var e=n.tag&1;return n.tag>>>=1,e}function dn(n,e,t){if(!e)return t;for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var i=n.tag&65535>>>16-e;return n.tag>>>=e,n.bitcount-=e,i+t}function Bo(n,e){for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var t=0,i=0,s=0,r=n.tag;do i=2*i+(r&1),r>>>=1,++s,t+=e.table[s],i-=e.table[s];while(i>=0);return n.tag=r,n.bitcount-=s,e.trans[t+i]}function ex(n,e,t){var i,s,r,a,o,l;for(i=dn(n,5,257),s=dn(n,5,1),r=dn(n,4,4),a=0;a<19;++a)hn[a]=0;for(a=0;a<r;++a){var c=dn(n,3,0);hn[Kv[a]]=c}for(Ba(Xc,hn,0,19),o=0;o<i+s;){var u=Bo(n,Xc);switch(u){case 16:var h=hn[o-1];for(l=dn(n,2,3);l;--l)hn[o++]=h;break;case 17:for(l=dn(n,3,3);l;--l)hn[o++]=0;break;case 18:for(l=dn(n,7,11);l;--l)hn[o++]=0;break;default:hn[o++]=u;break}}Ba(e,hn,0,i),Ba(t,hn,i,s)}function Yc(n,e,t){for(;;){var i=Bo(n,e);if(i===256)return ul;if(i<256)n.dest[n.destLen++]=i;else{var s,r,a,o;for(i-=257,s=dn(n,hl[i],fl[i]),r=Bo(n,t),a=n.destLen-dn(n,yh[r],Sh[r]),o=a;o<a+s;++o)n.dest[n.destLen++]=n.dest[o]}}}function tx(n){for(var e,t,i;n.bitcount>8;)n.sourceIndex--,n.bitcount-=8;if(e=n.source[n.sourceIndex+1],e=256*e+n.source[n.sourceIndex],t=n.source[n.sourceIndex+3],t=256*t+n.source[n.sourceIndex+2],e!==(~t&65535))return vh;for(n.sourceIndex+=4,i=e;i;--i)n.dest[n.destLen++]=n.source[n.sourceIndex++];return n.bitcount=0,ul}function Mh(n,e){var t=new Zv(n,e),i,s,r;do{switch(i=Qv(t),s=dn(t,2,0),s){case 0:r=tx(t);break;case 1:r=Yc(t,xh,_h);break;case 2:ex(t,t.ltree,t.dtree),r=Yc(t,t.ltree,t.dtree);break;default:r=vh}if(r!==ul)throw new Error("Data error")}while(!i);return t.destLen<t.dest.length?typeof t.dest.slice=="function"?t.dest.slice(0,t.destLen):t.dest.subarray(0,t.destLen):t.dest}Jv(xh,_h);bh(hl,fl,4,3);bh(yh,Sh,2,1);hl[28]=0;fl[28]=258;function Hi(n,e,t,i,s){return Math.pow(1-s,3)*n+3*Math.pow(1-s,2)*s*e+3*(1-s)*Math.pow(s,2)*t+Math.pow(s,3)*i}function Mi(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}Mi.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};Mi.prototype.addPoint=function(n,e){typeof n=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=n,this.x2=n),n<this.x1&&(this.x1=n),n>this.x2&&(this.x2=n)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))};Mi.prototype.addX=function(n){this.addPoint(n,null)};Mi.prototype.addY=function(n){this.addPoint(null,n)};Mi.prototype.addBezier=function(n,e,t,i,s,r,a,o){const l=[n,e],c=[t,i],u=[s,r],h=[a,o];this.addPoint(n,e),this.addPoint(a,o);for(let f=0;f<=1;f++){const d=6*l[f]-12*c[f]+6*u[f],p=-3*l[f]+9*c[f]-9*u[f]+3*h[f],v=3*c[f]-3*l[f];if(p===0){if(d===0)continue;const b=-v/d;0<b&&b<1&&(f===0&&this.addX(Hi(l[f],c[f],u[f],h[f],b)),f===1&&this.addY(Hi(l[f],c[f],u[f],h[f],b)));continue}const g=Math.pow(d,2)-4*v*p;if(g<0)continue;const m=(-d+Math.sqrt(g))/(2*p);0<m&&m<1&&(f===0&&this.addX(Hi(l[f],c[f],u[f],h[f],m)),f===1&&this.addY(Hi(l[f],c[f],u[f],h[f],m)));const M=(-d-Math.sqrt(g))/(2*p);0<M&&M<1&&(f===0&&this.addX(Hi(l[f],c[f],u[f],h[f],M)),f===1&&this.addY(Hi(l[f],c[f],u[f],h[f],M)))}};Mi.prototype.addQuad=function(n,e,t,i,s,r){const a=n+.6666666666666666*(t-n),o=e+2/3*(i-e),l=a+1/3*(s-n),c=o+1/3*(r-e);this.addBezier(n,e,a,o,l,c,s,r)};var Th=Mi;function bt(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}var _s={};function Eh(n,e){const t=Math.floor(n),i=n-t;if(_s[e]||(_s[e]={}),_s[e][i]!==void 0){const r=_s[e][i];return t+r}const s=+(Math.round(i+"e+"+e)+"e-"+e);return _s[e][i]=s,t+s}function Ah(n){let e=[[]],t=0,i=0;for(let s=0;s<n.length;s+=1){const r=e[e.length-1],a=n[s],o=r[0],l=r[1],c=r[r.length-1],u=n[s+1];r.push(a),a.type==="M"?(t=a.x,i=a.y):a.type==="L"&&(!u||u.type==="Z")?Math.abs(a.x-t)>1||Math.abs(a.y-i)>1||r.pop():a.type==="L"&&c&&c.x===a.x&&c.y===a.y?r.pop():a.type==="Z"&&(o&&l&&c&&o.type==="M"&&l.type==="L"&&c.type==="L"&&c.x===o.x&&c.y===o.y&&(r.shift(),r[0].type="M"),s+1<n.length&&e.push([]))}return n=[].concat.apply([],e),n}function nx(n){return Object.assign({},{decimalPlaces:2,optimize:!0,flipY:!0,flipYBase:void 0,scale:1,x:0,y:0},n)}function ix(n){return parseInt(n)===n&&(n={decimalPlaces:n,flipY:!1}),Object.assign({},{decimalPlaces:2,optimize:!0,flipY:!0,flipYBase:void 0},n)}bt.prototype.fromSVG=function(n,e={}){typeof SVGPathElement<"u"&&n instanceof SVGPathElement&&(n=n.getAttribute("d")),e=nx(e),this.commands=[];const t="0123456789",i="MmLlQqCcZzHhVv",s="SsTtAa",r="-+";let a={},o=[""],l=!1;function c(p){return p.filter(v=>v.length).map(v=>{let g=parseFloat(v);return(e.decimalPlaces||e.decimalPlaces===0)&&(g=Eh(g,e.decimalPlaces)),g})}function u(p){if(!this.commands.length)return p;const v=this.commands[this.commands.length-1];for(let g=0;g<p.length;g++)p[g]+=v[g&1?"y":"x"];return p}function h(){if(a.type===void 0)return;const p=a.type.toUpperCase(),v=p!=="Z"&&a.type.toUpperCase()!==a.type;let g=c(o);if(o=[""],!g.length&&p!=="Z")return;v&&p!=="H"&&p!=="V"&&(g=u.apply(this,[g]));const m=this.commands.length&&this.commands[this.commands.length-1].x||0,M=this.commands.length&&this.commands[this.commands.length-1].y||0;switch(p){case"M":this.moveTo(...g);break;case"L":this.lineTo(...g);break;case"V":for(let b=0;b<g.length;b++){let S=0;v&&(S=this.commands.length&&this.commands[this.commands.length-1].y||0),this.lineTo(m,g[b]+S)}break;case"H":for(let b=0;b<g.length;b++){let S=0;v&&(S=this.commands.length&&this.commands[this.commands.length-1].x||0),this.lineTo(g[b]+S,M)}break;case"C":this.bezierCurveTo(...g);break;case"Q":this.quadraticCurveTo(...g);break;case"Z":(this.commands.length<1||this.commands[this.commands.length-1].type!=="Z")&&this.close();break}if(this.commands.length)for(const b in this.commands[this.commands.length-1])this.commands[this.commands.length-1][b]===void 0&&(this.commands[this.commands.length-1][b]=0)}for(let p=0;p<n.length;p++){const v=n.charAt(p),g=o[o.length-1];if(t.indexOf(v)>-1)o[o.length-1]+=v;else if(r.indexOf(v)>-1)if(!a.type&&!this.commands.length&&(a.type="L"),v==="-")!a.type||g.indexOf("-")>0?l=!0:g.length?o.push("-"):o[o.length-1]=v;else if(!a.type||g.length>0)l=!0;else continue;else if(i.indexOf(v)>-1)a.type?(h.apply(this),a={type:v}):a.type=v;else{if(s.indexOf(v)>-1)throw new Error("Unsupported path command: "+v+". Currently supported commands are "+i.split("").join(", ")+".");` ,	
\r\f\v`.indexOf(v)>-1?o.push(""):v==="."?!a.type||g.indexOf(v)>-1?l=!0:o[o.length-1]+=v:l=!0}if(l)throw new Error("Unexpected character: "+v+" at offset "+p)}h.apply(this),e.optimize&&(this.commands=Ah(this.commands));const f=e.flipY;let d=e.flipYBase;if(f===!0&&e.flipYBase===void 0){const p=this.getBoundingBox();d=p.y1+p.y2}for(const p in this.commands){const v=this.commands[p];for(const g in v)["x","x1","x2"].includes(g)?this.commands[p][g]=e.x+v[g]*e.scale:["y","y1","y2"].includes(g)&&(this.commands[p][g]=e.y+(f?d-v[g]:v[g])*e.scale)}return this};bt.fromSVG=function(n,e){return new bt().fromSVG(n,e)};bt.prototype.moveTo=function(n,e){this.commands.push({type:"M",x:n,y:e})};bt.prototype.lineTo=function(n,e){this.commands.push({type:"L",x:n,y:e})};bt.prototype.curveTo=bt.prototype.bezierCurveTo=function(n,e,t,i,s,r){this.commands.push({type:"C",x1:n,y1:e,x2:t,y2:i,x:s,y:r})};bt.prototype.quadTo=bt.prototype.quadraticCurveTo=function(n,e,t,i){this.commands.push({type:"Q",x1:n,y1:e,x:t,y:i})};bt.prototype.close=bt.prototype.closePath=function(){this.commands.push({type:"Z"})};bt.prototype.extend=function(n){if(n.commands)n=n.commands;else if(n instanceof Th){const e=n;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,n)};bt.prototype.getBoundingBox=function(){const n=new Th;let e=0,t=0,i=0,s=0;for(let r=0;r<this.commands.length;r++){const a=this.commands[r];switch(a.type){case"M":n.addPoint(a.x,a.y),e=i=a.x,t=s=a.y;break;case"L":n.addPoint(a.x,a.y),i=a.x,s=a.y;break;case"Q":n.addQuad(i,s,a.x1,a.y1,a.x,a.y),i=a.x,s=a.y;break;case"C":n.addBezier(i,s,a.x1,a.y1,a.x2,a.y2,a.x,a.y),i=a.x,s=a.y;break;case"Z":i=e,s=t;break;default:throw new Error("Unexpected path command "+a.type)}}return n.isEmpty()&&n.addPoint(0,0),n};bt.prototype.draw=function(n){const e=this._layers;if(e&&e.length){for(let i=0;i<e.length;i++)this.draw.call(e[i],n);return}const t=this._image;if(t){n.drawImage(t.image,t.x,t.y,t.width,t.height);return}n.beginPath();for(let i=0;i<this.commands.length;i+=1){const s=this.commands[i];s.type==="M"?n.moveTo(s.x,s.y):s.type==="L"?n.lineTo(s.x,s.y):s.type==="C"?n.bezierCurveTo(s.x1,s.y1,s.x2,s.y2,s.x,s.y):s.type==="Q"?n.quadraticCurveTo(s.x1,s.y1,s.x,s.y):s.type==="Z"&&this.stroke&&this.strokeWidth&&n.closePath()}this.fill&&(n.fillStyle=this.fill,n.fill()),this.stroke&&(n.strokeStyle=this.stroke,n.lineWidth=this.strokeWidth,n.stroke())};bt.prototype.toPathData=function(n){n=ix(n);function e(o){const l=Eh(o,n.decimalPlaces);return Math.round(o)===l?""+l:l.toFixed(n.decimalPlaces)}function t(){let o="";for(let l=0;l<arguments.length;l+=1){const c=arguments[l];c>=0&&l>0&&(o+=" "),o+=e(c)}return o}let i=this.commands;n.optimize&&(i=JSON.parse(JSON.stringify(this.commands)),i=Ah(i));const s=n.flipY;let r=n.flipYBase;if(s===!0&&r===void 0){const o=new bt;o.extend(i);const l=o.getBoundingBox();r=l.y1+l.y2}let a="";for(let o=0;o<i.length;o+=1){const l=i[o];l.type==="M"?a+="M"+t(l.x,s?r-l.y:l.y):l.type==="L"?a+="L"+t(l.x,s?r-l.y:l.y):l.type==="C"?a+="C"+t(l.x1,s?r-l.y1:l.y1,l.x2,s?r-l.y2:l.y2,l.x,s?r-l.y:l.y):l.type==="Q"?a+="Q"+t(l.x1,s?r-l.y1:l.y1,l.x,s?r-l.y:l.y):l.type==="Z"&&(a+="Z")}return a};bt.prototype.toSVG=function(n,e){this._layers&&this._layers.length&&console.warn("toSVG() does not support colr font layers yet"),this._image&&console.warn("toSVG() does not support SVG glyphs yet"),e||(e=this.toPathData(n));let t='<path d="';return t+=e,t+='"',this.fill!==void 0&&this.fill!=="black"&&(this.fill===null?t+=' fill="none"':t+=' fill="'+this.fill+'"'),this.stroke&&(t+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),t+="/>",t};bt.prototype.toDOMElement=function(n,e){this._layers&&this._layers.length&&console.warn("toDOMElement() does not support colr font layers yet"),e||(e=this.toPathData(n));const t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d",e),this.fill!==void 0&&this.fill!=="black"&&(this.fill===null?t.setAttribute("fill","none"):t.setAttribute("fill",this.fill)),this.stroke&&(t.setAttribute("stroke",this.stroke),t.setAttribute("stroke-width",this.strokeWidth)),t};var is=bt;function Ch(n){throw new Error(n)}function jc(n,e){n||Ch(e)}var Se={fail:Ch,argument:jc,assert:jc},$c=32768,Zc=2147483648,sx=-32768,rx=32767+1/65536,ss={},se={},Le={};function cn(n){return function(){return n}}se.BYTE=function(n){return Se.argument(n>=0&&n<=255,"Byte value should be between 0 and 255."),[n]};Le.BYTE=cn(1);se.CHAR=function(n){return[n.charCodeAt(0)]};Le.CHAR=cn(1);se.CHARARRAY=function(n){(n===null||typeof n>"u")&&(n="",console.warn("CHARARRAY with undefined or null value encountered and treated as an empty string. This is probably caused by a missing glyph name."));const e=[];for(let t=0;t<n.length;t+=1)e[t]=n.charCodeAt(t);return e};Le.CHARARRAY=function(n){return typeof n>"u"?0:n.length};se.USHORT=function(n){return[n>>8&255,n&255]};Le.USHORT=cn(2);se.SHORT=function(n){return n>=$c&&(n=-(2*$c-n)),[n>>8&255,n&255]};Le.SHORT=cn(2);se.UINT24=function(n){return[n>>16&255,n>>8&255,n&255]};Le.UINT24=cn(3);se.ULONG=function(n){return[n>>24&255,n>>16&255,n>>8&255,n&255]};Le.ULONG=cn(4);se.LONG=function(n){return n>=Zc&&(n=-(2*Zc-n)),[n>>24&255,n>>16&255,n>>8&255,n&255]};Le.LONG=cn(4);se.FLOAT=function(n){if(n>rx||n<sx)throw new Error(`Value ${n} is outside the range of representable values in 16.16 format`);const e=Math.round(n*65536)<<0;return se.ULONG(e)};Le.FLOAT=Le.ULONG;se.FIXED=se.ULONG;Le.FIXED=Le.ULONG;se.FWORD=se.SHORT;Le.FWORD=Le.SHORT;se.UFWORD=se.USHORT;Le.UFWORD=Le.USHORT;se.F2DOT14=function(n){return se.USHORT(n*16384)};Le.F2DOT14=Le.USHORT;se.LONGDATETIME=function(n){return[0,0,0,0,n>>24&255,n>>16&255,n>>8&255,n&255]};Le.LONGDATETIME=cn(8);se.TAG=function(n){return Se.argument(n.length===4,"Tag should be exactly 4 ASCII characters."),[n.charCodeAt(0),n.charCodeAt(1),n.charCodeAt(2),n.charCodeAt(3)]};Le.TAG=cn(4);se.Card8=se.BYTE;Le.Card8=Le.BYTE;se.Card16=se.USHORT;Le.Card16=Le.USHORT;se.OffSize=se.BYTE;Le.OffSize=Le.BYTE;se.SID=se.USHORT;Le.SID=Le.USHORT;se.NUMBER=function(n){return n>=-107&&n<=107?[n+139]:n>=108&&n<=1131?(n=n-108,[(n>>8)+247,n&255]):n>=-1131&&n<=-108?(n=-n-108,[(n>>8)+251,n&255]):n>=-32768&&n<=32767?se.NUMBER16(n):se.NUMBER32(n)};Le.NUMBER=function(n){return se.NUMBER(n).length};se.NUMBER16=function(n){return[28,n>>8&255,n&255]};Le.NUMBER16=cn(3);se.NUMBER32=function(n){return[29,n>>24&255,n>>16&255,n>>8&255,n&255]};Le.NUMBER32=cn(5);se.REAL=function(n){let e=n.toString();const t=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(t){const r=parseFloat("1e"+((t[2]?+t[2]:0)+t[1].length));e=(Math.round(n*r)/r).toString()}let i="";for(let r=0,a=e.length;r<a;r+=1){const o=e[r];o==="e"?i+=e[++r]==="-"?"c":"b":o==="."?i+="a":o==="-"?i+="e":i+=o}i+=i.length&1?"f":"ff";const s=[30];for(let r=0,a=i.length;r<a;r+=2)s.push(parseInt(i.substr(r,2),16));return s};Le.REAL=function(n){return se.REAL(n).length};se.NAME=se.CHARARRAY;Le.NAME=Le.CHARARRAY;se.STRING=se.CHARARRAY;Le.STRING=Le.CHARARRAY;ss.UTF8=function(n,e,t){const i=[],s=t;for(let r=0;r<s;r++,e+=1)i[r]=n.getUint8(e);return String.fromCharCode.apply(null,i)};ss.UTF16=function(n,e,t){const i=[],s=t/2;for(let r=0;r<s;r++,e+=2)i[r]=n.getUint16(e);return String.fromCharCode.apply(null,i)};se.UTF16=function(n){const e=[];for(let t=0;t<n.length;t+=1){const i=n.charCodeAt(t);e[e.length]=i>>8&255,e[e.length]=i&255}return e};Le.UTF16=function(n){return n.length*2};var Nr={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};ss.MACSTRING=function(n,e,t,i){const s=Nr[i];if(s===void 0)return;let r="";for(let a=0;a<t;a++){const o=n.getUint8(e+a);o<=127?r+=String.fromCharCode(o):r+=s[o&127]}return r};var xr=typeof WeakMap=="function"&&new WeakMap,_r,ax=function(n){if(!_r){_r={};for(let s in Nr)_r[s]=new String(s)}const e=_r[n];if(e===void 0)return;if(xr){const s=xr.get(e);if(s!==void 0)return s}const t=Nr[n];if(t===void 0)return;const i={};for(let s=0;s<t.length;s++)i[t.charCodeAt(s)]=s+128;return xr&&xr.set(e,i),i};se.MACSTRING=function(n,e){const t=ax(e);if(t===void 0)return;const i=[];for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=128&&(r=t[r],r===void 0))return;i[s]=r}return i};Le.MACSTRING=function(n,e){const t=se.MACSTRING(n,e);return t!==void 0?t.length:0};function zo(n){return n>=-128&&n<=127}function ox(n,e,t){let i=0;const s=n.length;for(;e<s&&i<64&&n[e]===0;)++e,++i;return t.push(128|i-1),e}function lx(n,e,t){let i=0;const s=n.length;let r=e;for(;r<s&&i<64;){const a=n[r];if(!zo(a)||a===0&&r+1<s&&n[r+1]===0)break;++r,++i}t.push(i-1);for(let a=e;a<r;++a)t.push(n[a]+256&255);return r}function cx(n,e,t){let i=0;const s=n.length;let r=e;for(;r<s&&i<64;){const a=n[r];if(a===0||zo(a)&&r+1<s&&zo(n[r+1]))break;++r,++i}t.push(64|i-1);for(let a=e;a<r;++a){const o=n[a];t.push(o+65536>>8&255,o+256&255)}return r}se.VARDELTAS=function(n){let e=0;const t=[];for(;e<n.length;){const i=n[e];i===0?e=ox(n,e,t):i>=-128&&i<=127?e=lx(n,e,t):e=cx(n,e,t)}return t};se.INDEX=function(n){let e=1;const t=[e],i=[];for(let o=0;o<n.length;o+=1){const l=se.OBJECT(n[o]);Array.prototype.push.apply(i,l),e+=l.length,t.push(e)}if(i.length===0)return[0,0];const s=[],r=1+Math.floor(Math.log(e)/Math.log(2))/8|0,a=[void 0,se.BYTE,se.USHORT,se.UINT24,se.ULONG][r];for(let o=0;o<t.length;o+=1){const l=a(t[o]);Array.prototype.push.apply(s,l)}return Array.prototype.concat(se.Card16(n.length),se.OffSize(r),s,i)};Le.INDEX=function(n){return se.INDEX(n).length};se.DICT=function(n){let e=[];const t=Object.keys(n),i=t.length;for(let s=0;s<i;s+=1){const r=parseInt(t[s],0),a=n[r],o=se.OPERAND(a.value,a.type),l=se.OPERATOR(r);for(let c=0;c<o.length;c++)e.push(o[c]);for(let c=0;c<l.length;c++)e.push(l[c])}return e};Le.DICT=function(n){return se.DICT(n).length};se.OPERATOR=function(n){return n<1200?[n]:[12,n-1200]};se.OPERAND=function(n,e){let t=[];if(Array.isArray(e))for(let i=0;i<e.length;i+=1){Se.argument(n.length===e.length,"Not enough arguments given for type"+e);const s=se.OPERAND(n[i],e[i]);for(let r=0;r<s.length;r++)t.push(s[r])}else if(e==="SID"){const i=se.NUMBER(n);for(let s=0;s<i.length;s++)t.push(i[s])}else if(e==="offset"){const i=se.NUMBER32(n);for(let s=0;s<i.length;s++)t.push(i[s])}else if(e==="number"){const i=se.NUMBER(n);for(let s=0;s<i.length;s++)t.push(i[s])}else if(e==="real"){const i=se.REAL(n);for(let s=0;s<i.length;s++)t.push(i[s])}else throw new Error("Unknown operand type "+e);return t};se.OP=se.BYTE;Le.OP=Le.BYTE;var yr=typeof WeakMap=="function"&&new WeakMap;se.CHARSTRING=function(n){if(yr){const i=yr.get(n);if(i!==void 0)return i}let e=[];const t=n.length;for(let i=0;i<t;i+=1){const s=n[i],r=se[s.type](s.value);for(let a=0;a<r.length;a++)e.push(r[a])}return yr&&yr.set(n,e),e};Le.CHARSTRING=function(n){return se.CHARSTRING(n).length};se.OBJECT=function(n){const e=se[n.type];return Se.argument(e!==void 0,"No encoding function for type "+n.type),e(n.value)};Le.OBJECT=function(n){const e=Le[n.type];return Se.argument(e!==void 0,"No sizeOf function for type "+n.type),e(n.value)};se.TABLE=function(n){let e=[];const t=(n.fields||[]).length,i=[],s=[];for(let r=0;r<t;r+=1){const a=n.fields[r],o=se[a.type];Se.argument(o!==void 0,"No encoding function for field type "+a.type+" ("+a.name+")");let l=n[a.name];l===void 0&&(l=a.value);const c=o(l);if(a.type==="TABLE")l.fields!==null&&(s.push(e.length),i.push(c)),e.push(0,0);else for(let u=0;u<c.length;u++)e.push(c[u])}for(let r=0;r<i.length;r+=1){const a=s[r],o=e.length;Se.argument(o<65536,"Table "+n.tableName+" too big."),e[a]=o>>8,e[a+1]=o&255;for(let l=0;l<i[r].length;l++)e.push(i[r][l])}return e};Le.TABLE=function(n){let e=0;const t=(n.fields||[]).length;for(let i=0;i<t;i+=1){const s=n.fields[i],r=Le[s.type];Se.argument(r!==void 0,"No sizeOf function for field type "+s.type+" ("+s.name+")");let a=n[s.name];a===void 0&&(a=s.value),e+=r(a),s.type==="TABLE"&&(e+=2)}return e};se.RECORD=se.TABLE;Le.RECORD=Le.TABLE;se.LITERAL=function(n){return n};Le.LITERAL=function(n){return n.length};function gt(n,e,t){if(e&&e.length)for(let i=0;i<e.length;i+=1){const s=e[i];this[s.name]=s.value}if(this.tableName=n,this.fields=e,t){const i=Object.keys(t);for(let s=0;s<i.length;s+=1){const r=i[s],a=t[r];this[r]!==void 0&&(this[r]=a)}}}gt.prototype.encode=function(){return se.TABLE(this)};gt.prototype.sizeOf=function(){return Le.TABLE(this)};function rs(n,e,t){t===void 0&&(t=e.length);const i=new Array(e.length+1);i[0]={name:n+"Count",type:"USHORT",value:t};for(let s=0;s<e.length;s++)i[s+1]={name:n+s,type:"USHORT",value:e[s]};return i}function Ho(n,e,t){const i=e.length,s=new Array(i+1);s[0]={name:n+"Count",type:"USHORT",value:i};for(let r=0;r<i;r++)s[r+1]={name:n+r,type:"TABLE",value:t(e[r],r)};return s}function as(n,e,t){const i=e.length;let s=[];s[0]={name:n+"Count",type:"USHORT",value:i};for(let r=0;r<i;r++)s=s.concat(t(e[r],r));return s}function kr(n){n.format===1?gt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(rs("glyph",n.glyphs))):n.format===2?gt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(as("rangeRecord",n.ranges,function(e,t){return[{name:"startGlyphID"+t,type:"USHORT",value:e.start},{name:"endGlyphID"+t,type:"USHORT",value:e.end},{name:"startCoverageIndex"+t,type:"USHORT",value:e.index}]}))):Se.assert(!1,"Coverage format must be 1 or 2.")}kr.prototype=Object.create(gt.prototype);kr.prototype.constructor=kr;function Br(n){gt.call(this,"scriptListTable",as("scriptRecord",n,function(e,t){const i=e.script;let s=i.defaultLangSys;return Se.assert(!!s,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+t,type:"TAG",value:e.tag},{name:"script"+t,type:"TABLE",value:new gt("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new gt("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:s.reqFeatureIndex}].concat(rs("featureIndex",s.featureIndexes)))}].concat(as("langSys",i.langSysRecords,function(r,a){const o=r.langSys;return[{name:"langSysTag"+a,type:"TAG",value:r.tag},{name:"langSys"+a,type:"TABLE",value:new gt("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:o.reqFeatureIndex}].concat(rs("featureIndex",o.featureIndexes)))}]})))}]}))}Br.prototype=Object.create(gt.prototype);Br.prototype.constructor=Br;function zr(n){gt.call(this,"featureListTable",as("featureRecord",n,function(e,t){const i=e.feature;return[{name:"featureTag"+t,type:"TAG",value:e.tag},{name:"feature"+t,type:"TABLE",value:new gt("featureTable",[{name:"featureParams",type:"USHORT",value:i.featureParams}].concat(rs("lookupListIndex",i.lookupListIndexes)))}]}))}zr.prototype=Object.create(gt.prototype);zr.prototype.constructor=zr;function Hr(n,e){gt.call(this,"lookupListTable",Ho("lookup",n,function(t){let i=e[t.lookupType];return Se.assert(!!i,"Unable to write GSUB lookup type "+t.lookupType+" tables."),new gt("lookupTable",[{name:"lookupType",type:"USHORT",value:t.lookupType},{name:"lookupFlag",type:"USHORT",value:t.lookupFlag}].concat(Ho("subtable",t.subtables,i)))}))}Hr.prototype=Object.create(gt.prototype);Hr.prototype.constructor=Hr;function Gr(n){n.format===1?gt.call(this,"classDefTable",[{name:"classFormat",type:"USHORT",value:1},{name:"startGlyphID",type:"USHORT",value:n.startGlyph}].concat(rs("glyph",n.classes))):n.format===2?gt.call(this,"classDefTable",[{name:"classFormat",type:"USHORT",value:2}].concat(as("rangeRecord",n.ranges,function(e,t){return[{name:"startGlyphID"+t,type:"USHORT",value:e.start},{name:"endGlyphID"+t,type:"USHORT",value:e.end},{name:"class"+t,type:"USHORT",value:e.classId}]}))):Se.assert(!1,"Class format must be 1 or 2.")}Gr.prototype=Object.create(gt.prototype);Gr.prototype.constructor=Gr;var J={Table:gt,Record:gt,Coverage:kr,ClassDef:Gr,ScriptList:Br,FeatureList:zr,LookupList:Hr,ushortList:rs,tableList:Ho,recordList:as};function Kc(n,e){return n.getUint8(e)}function Vr(n,e){return n.getUint16(e,!1)}function ux(n,e){return n.getInt16(e,!1)}function wh(n,e){return(n.getUint16(e)<<8)+n.getUint8(e+2)}function dl(n,e){return n.getUint32(e,!1)}function hx(n,e){return n.getInt32(e,!1)}function Rh(n,e){const t=n.getInt16(e,!1),i=n.getUint16(e+2,!1);return t+i/65535}function fx(n,e){let t="";for(let i=e;i<e+4;i+=1)t+=String.fromCharCode(n.getInt8(i));return t}function dx(n,e,t){let i=0;for(let s=0;s<t;s+=1)i<<=8,i+=n.getUint8(e+s);return i}function px(n,e,t){const i=[];for(let s=e;s<t;s+=1)i.push(n.getUint8(s));return i}function mx(n){let e="";for(let t=0;t<n.length;t+=1)e+=String.fromCharCode(n[t]);return e}var gx={byte:1,uShort:2,f2dot14:2,short:2,uInt24:3,uLong:4,fixed:4,longDateTime:8,tag:4},Rt={LONG_WORDS:32768,WORD_DELTA_COUNT_MASK:32767,SHARED_POINT_NUMBERS:32768,COUNT_MASK:4095,EMBEDDED_PEAK_TUPLE:32768,INTERMEDIATE_REGION:16384,PRIVATE_POINT_NUMBERS:8192,TUPLE_INDEX_MASK:4095,POINTS_ARE_WORDS:128,POINT_RUN_COUNT_MASK:127,DELTAS_ARE_ZERO:128,DELTAS_ARE_WORDS:64,DELTA_RUN_COUNT_MASK:63,INNER_INDEX_BIT_COUNT_MASK:15,MAP_ENTRY_SIZE_MASK:48};function P(n,e){this.data=n,this.offset=e,this.relativeOffset=0}P.prototype.parseByte=function(){const n=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n};P.prototype.parseChar=function(){const n=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n};P.prototype.parseCard8=P.prototype.parseByte;P.prototype.parseUShort=function(){const n=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n};P.prototype.parseCard16=P.prototype.parseUShort;P.prototype.parseSID=P.prototype.parseUShort;P.prototype.parseOffset16=P.prototype.parseUShort;P.prototype.parseShort=function(){const n=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n};P.prototype.parseF2Dot14=function(){const n=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,n};P.prototype.parseUInt24=function(){const n=wh(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=3,n};P.prototype.parseULong=function(){const n=dl(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};P.prototype.parseLong=function(){const n=hx(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};P.prototype.parseOffset32=P.prototype.parseULong;P.prototype.parseFixed=function(){const n=Rh(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};P.prototype.parseString=function(n){const e=this.data,t=this.offset+this.relativeOffset;let i="";this.relativeOffset+=n;for(let s=0;s<n;s++)i+=String.fromCharCode(e.getUint8(t+s));return i};P.prototype.parseTag=function(){return this.parseString(4)};P.prototype.parseLongDateTime=function(){let n=dl(this.data,this.offset+this.relativeOffset+4);return n-=2082844800,this.relativeOffset+=8,n};P.prototype.parseVersion=function(n){const e=Vr(this.data,this.offset+this.relativeOffset),t=Vr(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,n===void 0&&(n=4096),e+t/n/10};P.prototype.skip=function(n,e){e===void 0&&(e=1),this.relativeOffset+=gx[n]*e};P.prototype.parseULongList=function(n){n===void 0&&(n=this.parseULong());const e=new Array(n),t=this.data;let i=this.offset+this.relativeOffset;for(let s=0;s<n;s++)e[s]=t.getUint32(i),i+=4;return this.relativeOffset+=n*4,e};P.prototype.parseOffset16List=P.prototype.parseUShortList=function(n){n===void 0&&(n=this.parseUShort());const e=new Array(n),t=this.data;let i=this.offset+this.relativeOffset;for(let s=0;s<n;s++)e[s]=t.getUint16(i),i+=2;return this.relativeOffset+=n*2,e};P.prototype.parseShortList=function(n){const e=new Array(n),t=this.data;let i=this.offset+this.relativeOffset;for(let s=0;s<n;s++)e[s]=t.getInt16(i),i+=2;return this.relativeOffset+=n*2,e};P.prototype.parseByteList=function(n){const e=new Array(n),t=this.data;let i=this.offset+this.relativeOffset;for(let s=0;s<n;s++)e[s]=t.getUint8(i++);return this.relativeOffset+=n,e};P.prototype.parseList=function(n,e){e||(e=n,n=this.parseUShort());const t=new Array(n);for(let i=0;i<n;i++)t[i]=e.call(this);return t};P.prototype.parseList32=function(n,e){e||(e=n,n=this.parseULong());const t=new Array(n);for(let i=0;i<n;i++)t[i]=e.call(this);return t};P.prototype.parseRecordList=function(n,e){e||(e=n,n=this.parseUShort());const t=new Array(n),i=Object.keys(e);for(let s=0;s<n;s++){const r={};for(let a=0;a<i.length;a++){const o=i[a],l=e[o];r[o]=l.call(this)}t[s]=r}return t};P.prototype.parseRecordList32=function(n,e){e||(e=n,n=this.parseULong());const t=new Array(n),i=Object.keys(e);for(let s=0;s<n;s++){const r={};for(let a=0;a<i.length;a++){const o=i[a],l=e[o];r[o]=l.call(this)}t[s]=r}return t};P.prototype.parseTupleRecords=function(n,e){let t=[];for(let i=0;i<n;i++){let s=[];for(let r=0;r<e;r++)s.push(this.parseF2Dot14());t.push(s)}return t};P.prototype.parseStruct=function(n){if(typeof n=="function")return n.call(this);{const e=Object.keys(n),t={};for(let i=0;i<e.length;i++){const s=e[i],r=n[s];t[s]=r.call(this)}return t}};P.prototype.parseValueRecord=function(n){if(n===void 0&&(n=this.parseUShort()),n===0)return;const e={};return n&1&&(e.xPlacement=this.parseShort()),n&2&&(e.yPlacement=this.parseShort()),n&4&&(e.xAdvance=this.parseShort()),n&8&&(e.yAdvance=this.parseShort()),n&16&&(e.xPlaDevice=void 0,this.parseShort()),n&32&&(e.yPlaDevice=void 0,this.parseShort()),n&64&&(e.xAdvDevice=void 0,this.parseShort()),n&128&&(e.yAdvDevice=void 0,this.parseShort()),e};P.prototype.parseValueRecordList=function(){const n=this.parseUShort(),e=this.parseUShort(),t=new Array(e);for(let i=0;i<e;i++)t[i]=this.parseValueRecord(n);return t};P.prototype.parsePointer=function(n){const e=this.parseOffset16();if(e>0)return new P(this.data,this.offset+e).parseStruct(n)};P.prototype.parsePointer32=function(n){const e=this.parseOffset32();if(e>0)return new P(this.data,this.offset+e).parseStruct(n)};P.prototype.parseListOfLists=function(n){const e=this.parseOffset16List(),t=e.length,i=this.relativeOffset,s=new Array(t);for(let r=0;r<t;r++){const a=e[r];if(a===0){s[r]=void 0;continue}if(this.relativeOffset=a,n){const o=this.parseOffset16List(),l=new Array(o.length);for(let c=0;c<o.length;c++)this.relativeOffset=a+o[c],l[c]=n.call(this);s[r]=l}else s[r]=this.parseUShortList()}return this.relativeOffset=i,s};P.prototype.parseCoverage=function(){const n=this.offset+this.relativeOffset,e=this.parseUShort(),t=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(t)};if(e===2){const i=new Array(t);for(let s=0;s<t;s++)i[s]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:i}}throw new Error("0x"+n.toString(16)+": Coverage format must be 1 or 2.")};P.prototype.parseClassDef=function(){const n=this.offset+this.relativeOffset,e=this.parseUShort();return e===1?{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()}:e===2?{format:2,ranges:this.parseRecordList({start:P.uShort,end:P.uShort,classId:P.uShort})}:(console.warn(`0x${n.toString(16)}: This font file uses an invalid ClassDef format of ${e}. It might be corrupted and should be reacquired if it doesn't display as intended.`),{format:e})};P.list=function(n,e){return function(){return this.parseList(n,e)}};P.list32=function(n,e){return function(){return this.parseList32(n,e)}};P.recordList=function(n,e){return function(){return this.parseRecordList(n,e)}};P.recordList32=function(n,e){return function(){return this.parseRecordList32(n,e)}};P.pointer=function(n){return function(){return this.parsePointer(n)}};P.pointer32=function(n){return function(){return this.parsePointer32(n)}};P.tag=P.prototype.parseTag;P.byte=P.prototype.parseByte;P.uShort=P.offset16=P.prototype.parseUShort;P.uShortList=P.prototype.parseUShortList;P.uInt24=P.prototype.parseUInt24;P.uLong=P.offset32=P.prototype.parseULong;P.uLongList=P.prototype.parseULongList;P.fixed=P.prototype.parseFixed;P.f2Dot14=P.prototype.parseF2Dot14;P.struct=P.prototype.parseStruct;P.coverage=P.prototype.parseCoverage;P.classDef=P.prototype.parseClassDef;var Jc={reserved:P.uShort,reqFeatureIndex:P.uShort,featureIndexes:P.uShortList};P.prototype.parseScriptList=function(){return this.parsePointer(P.recordList({tag:P.tag,script:P.pointer({defaultLangSys:P.pointer(Jc),langSysRecords:P.recordList({tag:P.tag,langSys:P.pointer(Jc)})})}))||[]};P.prototype.parseFeatureList=function(){return this.parsePointer(P.recordList({tag:P.tag,feature:P.pointer({featureParams:P.offset16,lookupListIndexes:P.uShortList})}))||[]};P.prototype.parseLookupList=function(n){return this.parsePointer(P.list(P.pointer(function(){const e=this.parseUShort();Se.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");const t=this.parseUShort(),i=t&16;return{lookupType:e,lookupFlag:t,subtables:this.parseList(P.pointer(n[e])),markFilteringSet:i?this.parseUShort():void 0}})))||[]};P.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){const n=this.parseUShort(),e=this.parseUShort();return Se.argument(n===1&&e<1,"GPOS/GSUB feature variations table unknown."),this.parseRecordList32({conditionSetOffset:P.offset32,featureTableSubstitutionOffset:P.offset32})})||[]};P.prototype.parseVariationStore=function(){const n=this.relativeOffset,e=this.parseUShort(),t={itemVariationStore:this.parseItemVariationStore()};return this.relativeOffset=n+e+2,t};P.prototype.parseItemVariationStore=function(){const n=this.relativeOffset,e={format:this.parseUShort(),variationRegions:[],itemVariationSubtables:[]},t=this.parseOffset32(),i=this.parseUShort(),s=this.parseULongList(i);this.relativeOffset=n+t,e.variationRegions=this.parseVariationRegionList();for(let r=0;r<i;r++){const a=s[r];this.relativeOffset=n+a,e.itemVariationSubtables.push(this.parseItemVariationSubtable())}return e};P.prototype.parseVariationRegionList=function(){const n=this.parseUShort(),e=this.parseUShort();return this.parseRecordList(e,{regionAxes:P.recordList(n,{startCoord:P.f2Dot14,peakCoord:P.f2Dot14,endCoord:P.f2Dot14})})};P.prototype.parseItemVariationSubtable=function(){const n=this.parseUShort(),e=this.parseUShort(),t=this.parseUShortList(),i=t.length;return{regionIndexes:t,deltaSets:n&&i?this.parseDeltaSets(n,e,i):[]}};P.prototype.parseDeltaSetIndexMap=function(){const n=this.parseByte(),e=this.parseByte(),t=[];let i=0;switch(n){case 0:i=this.parseUShort();break;case 1:i=this.parseULong();break;default:console.error(`unsupported DeltaSetIndexMap format ${n}`)}if(!i)return{format:n,entryFormat:e};const s=(e&Rt.INNER_INDEX_BIT_COUNT_MASK)+1,r=((e&Rt.MAP_ENTRY_SIZE_MASK)>>4)+1;for(let a=0;a<i;a++){let o;if(r===1)o=this.parseByte();else if(r===2)o=this.parseUShort();else if(r===3)o=this.parseUInt24();else if(r===4)o=this.parseULong();else throw new Error(`Invalid entry size of ${r}`);const l=o>>s,c=o&(1<<s)-1;t.push({outerIndex:l,innerIndex:c})}return{format:n,entryFormat:e,map:t}};P.prototype.parseDeltaSets=function(n,e,t){const i=Array.from({length:n},()=>[]),s=e&Rt.LONG_WORDS,r=e&Rt.WORD_DELTA_COUNT_MASK;if(r>t)throw Error("wordCount must be less than or equal to regionIndexCount");const a=(s?this.parseLong:this.parseShort).bind(this),o=(s?this.parseShort:this.parseChar).bind(this);for(let l=0;l<n;l++)for(let c=0;c<t;c++)c<r?i[l].push(a()):i[l].push(o());return i};P.prototype.parseTupleVariationStoreList=function(n,e,t){const i=this.parseUShort(),r=this.parseUShort()&1,a=this.parseOffset32(),o=(r?this.parseULong:this.parseUShort).bind(this),l={};let c=o();r||(c*=2);let u;for(let h=0;h<i;h++){u=o(),r||(u*=2);const f=u-c;l[h]=f?this.parseTupleVariationStore(a+c,n,e,t,h):void 0,c=u}return l};P.prototype.parseTupleVariationStore=function(n,e,t,i,s){const r=this.relativeOffset;this.relativeOffset=n,t==="cvar"&&(this.relativeOffset+=4);const a=this.parseUShort(),o=!!(a&Rt.SHARED_POINT_NUMBERS),l=a&Rt.COUNT_MASK;let c=this.parseOffset16();const u=[];let h=[];for(let p=0;p<l;p++){const v=this.parseTupleVariationHeader(e,t);u.push(v)}this.relativeOffset!==n+c&&(console.warn(`Unexpected offset after parsing tuple variation headers! Expected ${n+c}, actually ${this.relativeOffset}`),this.relativeOffset=n+c),o&&(h=this.parsePackedPointNumbers());let f=this.relativeOffset;for(let p=0;p<l;p++){const v=u[p];v.privatePoints=[],this.relativeOffset=f,t==="cvar"&&!v.peakTuple&&console.warn("An embedded peak tuple is required in TupleVariationHeaders for the cvar table."),v.flags.privatePointNumbers&&(v.privatePoints=this.parsePackedPointNumbers()),delete v.flags;const g=this.offset,m=this.relativeOffset,M=b=>{let S,N;const A=()=>{let C=0;if(t==="gvar"){if(C=v.privatePoints.length||h.length,!C){const I=i.get(s);I.path,C=I.points.length,C+=4}}else t==="cvar"&&(C=i.length);this.offset=g,this.relativeOffset=m,S=this.parsePackedDeltas(C),t==="gvar"&&(N=this.parsePackedDeltas(C))};return{configurable:!0,get:function(){return S===void 0&&A(),b==="deltasY"?N:S},set:function(C){S===void 0&&A(),b==="deltasY"?N=C:S=C}}};Object.defineProperty(v,"deltas",M.call(this,"deltas")),t==="gvar"&&Object.defineProperty(v,"deltasY",M.call(this,"deltasY")),f+=v.variationDataSize,delete v.variationDataSize}this.relativeOffset=r;const d={headers:u};return d.sharedPoints=h,d};P.prototype.parseTupleVariationHeader=function(n,e){const t=this.parseUShort(),i=this.parseUShort(),s=!!(i&Rt.EMBEDDED_PEAK_TUPLE),r=!!(i&Rt.INTERMEDIATE_REGION),a=!!(i&Rt.PRIVATE_POINT_NUMBERS),o=s?void 0:i&Rt.TUPLE_INDEX_MASK,l=s?this.parseTupleRecords(1,n)[0]:void 0,c=r?this.parseTupleRecords(1,n)[0]:void 0,u=r?this.parseTupleRecords(1,n)[0]:void 0,h={variationDataSize:t,peakTuple:l,intermediateStartTuple:c,intermediateEndTuple:u,flags:{embeddedPeakTuple:s,intermediateRegion:r,privatePointNumbers:a}};return e==="gvar"&&(h.sharedTupleRecordsIndex=o),h};P.prototype.parsePackedPointNumbers=function(){const n=this.parseByte(),e=[];let t=n;if(n>=128){const s=this.parseByte();t=(n&Rt.POINT_RUN_COUNT_MASK)<<8|s}let i=0;for(;e.length<t;){const s=this.parseByte(),r=!!(s&Rt.POINTS_ARE_WORDS);let a=(s&Rt.POINT_RUN_COUNT_MASK)+1;for(let o=0;o<a&&e.length<t;o++){let l;r?l=this.parseUShort():l=this.parseByte(),i=i+l,e.push(i)}}return e};P.prototype.parsePackedDeltas=function(n){const e=[];for(;e.length<n;){const t=this.parseByte(),i=!!(t&Rt.DELTAS_ARE_ZERO),s=!!(t&Rt.DELTAS_ARE_WORDS),r=(t&Rt.DELTA_RUN_COUNT_MASK)+1;for(let a=0;a<r&&e.length<n;a++)i?e.push(0):s?e.push(this.parseShort()):e.push(this.parseChar())}return e};var oe={getByte:Kc,getCard8:Kc,getUShort:Vr,getCard16:Vr,getShort:ux,getUInt24:wh,getULong:dl,getFixed:Rh,getTag:fx,getOffset:dx,getBytes:px,bytesToString:mx,Parser:P},Wr=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],Lh={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},vx={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},Dh={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function xx(n,e,t){switch(n){case 0:if(e===65535)return"und";if(t)return t[e];break;case 1:return Lh[e];case 3:return Dh[e]}}var Go="utf-16",_x={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},yx={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function pl(n,e,t){switch(n){case 0:return Go;case 1:return yx[t]||_x[e];case 3:if(e===1||e===10)return Go;break}}var Ph={0:"unicode",1:"macintosh",2:"reserved",3:"windows"};function Sx(n){return Ph[n]}function bx(n,e,t){const i={},s=new oe.Parser(n,e),r=s.parseUShort(),a=s.parseUShort(),o=s.offset+s.parseUShort();for(let l=0;l<a;l++){const c=s.parseUShort(),u=s.parseUShort(),h=s.parseUShort(),f=s.parseUShort(),d=Wr[f]||f,p=s.parseUShort(),v=s.parseUShort(),g=xx(c,h,t),m=pl(c,u,h),M=Sx(c);if(m!==void 0&&g!==void 0&&M!==void 0){let b;if(m===Go?b=ss.UTF16(n,o+v,p):b=ss.MACSTRING(n,o+v,p,m),b){let S=i[M];S===void 0&&(S=i[M]={});let N=S[d];N===void 0&&(N=S[d]={}),N[g]=b}}}return r===1&&s.parseUShort(),i}function Sr(n){const e={};for(let t in n)e[n[t]]=parseInt(t);return e}function Qc(n,e,t,i,s,r){return new J.Record("NameRecord",[{name:"platformID",type:"USHORT",value:n},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:t},{name:"nameID",type:"USHORT",value:i},{name:"length",type:"USHORT",value:s},{name:"offset",type:"USHORT",value:r}])}function Mx(n,e){const t=n.length,i=e.length-t+1;e:for(let s=0;s<i;s++)for(;s<i;s++){for(let r=0;r<t;r++)if(e[s+r]!==n[r])continue e;return s}return-1}function eu(n,e){let t=Mx(n,e);if(t<0){t=e.length;let i=0;const s=n.length;for(;i<s;++i)e.push(n[i])}return t}function Tx(n,e){const t=Sr(Ph),i=Sr(Lh),s=Sr(Dh),r=[],a=[];for(let l in n){let c;const u=[],h={},f=Sr(Wr),d=t[l];for(let p in n[l]){let v=f[p];if(v===void 0&&(v=p),c=parseInt(v),isNaN(c))throw new Error('Name table entry "'+p+'" does not exist, see nameTableNames for complete list.');h[c]=n[l][p],u.push(c)}for(let p=0;p<u.length;p++){c=u[p];const v=h[c];for(let g in v){const m=v[g];if(d===1||d===0){let M=i[g],b=vx[M];const S=pl(d,b,M);let N=se.MACSTRING(m,S);if(d===0&&(M=e.indexOf(g),M<0&&(M=e.length,e.push(g)),b=4,N=se.UTF16(m)),N!==void 0){const A=eu(N,a);r.push(Qc(d,b,M,c,N.length,A))}}if(d===3){const M=s[g];if(M!==void 0){const b=se.UTF16(m),S=eu(b,a);r.push(Qc(3,1,M,c,b.length,S))}}}}}r.sort(function(l,c){return l.platformID-c.platformID||l.encodingID-c.encodingID||l.languageID-c.languageID||l.nameID-c.nameID});const o=new J.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:r.length},{name:"stringOffset",type:"USHORT",value:6+r.length*12}]);for(let l=0;l<r.length;l++)o.fields.push({name:"record_"+l,type:"RECORD",value:r[l]});return o.fields.push({name:"strings",type:"LITERAL",value:a}),o}function Xr(n,e,t=[]){if(e<256&&e in Wr){if(t.length&&!t.includes(parseInt(e)))return;e=Wr[e]}for(let i in n)for(let s in n[i])if(s===e||parseInt(s)===e)return n[i][s]}var Uh={parse:bx,make:Tx,getNameByID:Xr};function Ex(n,e,t,i){n.length=e.parseUShort(),n.language=e.parseUShort()-1;const s=e.parseByteList(n.length),r=Object.assign({},s),a=pl(t,i,n.language),o=Nr[a];for(let l=0;l<o.length;l++)r[o.charCodeAt(l)]=s[128+l];n.glyphIndexMap=r}function Ax(n,e,t){e.parseUShort(),n.length=e.parseULong(),n.language=e.parseULong();let i;n.groupCount=i=e.parseULong(),n.glyphIndexMap={};for(let s=0;s<i;s+=1){const r=e.parseULong(),a=e.parseULong();let o=e.parseULong();for(let l=r;l<=a;l+=1)n.glyphIndexMap[l]=o,t===12&&o++}}function Cx(n,e,t,i,s){n.length=e.parseUShort(),n.language=e.parseUShort();let r;n.segCount=r=e.parseUShort()>>1,e.skip("uShort",3),n.glyphIndexMap={};const a=new oe.Parser(t,i+s+14),o=new oe.Parser(t,i+s+16+r*2),l=new oe.Parser(t,i+s+16+r*4),c=new oe.Parser(t,i+s+16+r*6);let u=i+s+16+r*8;for(let h=0;h<r-1;h+=1){let f;const d=a.parseUShort(),p=o.parseUShort(),v=l.parseShort(),g=c.parseUShort();for(let m=p;m<=d;m+=1)g!==0?(u=c.offset+c.relativeOffset-2,u+=g,u+=(m-p)*2,f=oe.getUShort(t,u),f!==0&&(f=f+v&65535)):f=m+v&65535,n.glyphIndexMap[m]=f}}function wx(n,e){const t={};e.skip("uLong");const i=e.parseULong();for(let s=0;s<i;s+=1){const r=e.parseUInt24(),a={varSelector:r},o=e.parseOffset32(),l=e.parseOffset32(),c=e.relativeOffset;o&&(e.relativeOffset=o,a.defaultUVS=e.parseStruct({ranges:function(){return e.parseRecordList32({startUnicodeValue:e.parseUInt24,additionalCount:e.parseByte})}})),l&&(e.relativeOffset=l,a.nonDefaultUVS=e.parseStruct({uvsMappings:function(){const u={},h=e.parseRecordList32({unicodeValue:e.parseUInt24,glyphID:e.parseUShort});for(let f=0;f<h.length;f+=1)u[h[f].unicodeValue]=h[f];return u}})),t[r]=a,e.relativeOffset=c}n.varSelectorList=t}function Rx(n,e){const t={};t.version=oe.getUShort(n,e),Se.argument(t.version===0,"cmap table version should be 0."),t.numTables=oe.getUShort(n,e+2);let i=null,s=-1,r=-1,a=null,o=null;const l=[0,1,2,3,4,6],c=[0,1,10];for(let h=t.numTables-1;h>=0;h-=1)if(a=oe.getUShort(n,e+4+h*8),o=oe.getUShort(n,e+4+h*8+2),a===3&&c.includes(o)||a===0&&l.includes(o)||a===1&&o===0){if(r>0)continue;if(r=oe.getULong(n,e+4+h*8+4),i)break}else if(a===0&&o===5){if(s=oe.getULong(n,e+4+h*8+4),i=new oe.Parser(n,e+s),i.parseUShort()!==14)s=-1,i=null;else if(r>0)break}if(r===-1)throw new Error("No valid cmap sub-tables found.");const u=new oe.Parser(n,e+r);if(t.format=u.parseUShort(),t.format===0)Ex(t,u,a,o);else if(t.format===12||t.format===13)Ax(t,u,t.format);else if(t.format===4)Cx(t,u,n,e,r);else throw new Error("Only format 0 (platformId 1, encodingId 0), 4, 12 and 14 cmap tables are supported (found format "+t.format+", platformId "+a+", encodingId "+o+").");return i&&wx(t,i),t}function Lx(n,e,t){n.segments.push({end:e,start:e,delta:-(e-t),offset:0,glyphIndex:t})}function Dx(n){n.segments.push({end:65535,start:65535,delta:1,offset:0})}function Px(n){if(n.length===0)return n;const e=[n[0]];for(let t=1;t<n.length;t++){const i=e[e.length-1],s=n[t];i.end+1===s.start&&i.delta===s.delta&&s.end!==65535?i.end=s.end:e.push(s)}return e}function Ux(n){let e=!0,t;for(t=n.length-1;t>0;t-=1)if(n.get(t).unicode>65535){e=!1;break}let i=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||i.push({name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}),i.push({name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0});const s=new J.Table("cmap",i);for(s.segments=[],t=0;t<n.length;t+=1){const d=n.get(t);for(let p=0;p<d.unicodes.length;p+=1)Lx(s,d.unicodes[p],t)}s.segments.sort(function(d,p){return d.start-p.start}),s.segments=Px(s.segments),Dx(s);const r=s.segments.length;let a=0,o=[],l=[],c=[],u=[],h=[],f=[];for(t=0;t<r;t+=1){const d=s.segments[t];d.end<=65535&&d.start<=65535?(o.push({name:"end_"+t,type:"USHORT",value:d.end}),l.push({name:"start_"+t,type:"USHORT",value:d.start}),c.push({name:"idDelta_"+t,type:"SHORT",value:d.delta}),u.push({name:"idRangeOffset_"+t,type:"USHORT",value:d.offset}),d.glyphId!==void 0&&h.push({name:"glyph_"+t,type:"USHORT",value:d.glyphId})):a+=1,!e&&d.glyphIndex!==void 0&&(f.push({name:"cmap12Start_"+t,type:"ULONG",value:d.start}),f.push({name:"cmap12End_"+t,type:"ULONG",value:d.end}),f.push({name:"cmap12Glyph_"+t,type:"ULONG",value:d.glyphIndex}))}s.segCountX2=(r-a)*2,s.searchRange=Math.pow(2,Math.floor(Math.log(r-a)/Math.log(2)))*2,s.entrySelector=Math.log(s.searchRange/2)/Math.log(2),s.rangeShift=s.segCountX2-s.searchRange;for(let d=0;d<o.length;d++)s.fields.push(o[d]);s.fields.push({name:"reservedPad",type:"USHORT",value:0});for(let d=0;d<l.length;d++)s.fields.push(l[d]);for(let d=0;d<c.length;d++)s.fields.push(c[d]);for(let d=0;d<u.length;d++)s.fields.push(u[d]);for(let d=0;d<h.length;d++)s.fields.push(h[d]);if(s.cmap4Length=14+o.length*2+2+l.length*2+c.length*2+u.length*2+h.length*2,!e){const d=16+f.length*4;s.cmap12Offset=20+s.cmap4Length,s.fields.push({name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:d},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:f.length/3});for(let p=0;p<f.length;p++)s.fields.push(f[p])}return s}var Ih={parse:Rx,make:Ux},Rr=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],Ix=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron"],Ox=[".notdef","space","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],Fx=[".notdef","space","dollaroldstyle","dollarsuperior","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","hyphensuperior","colonmonetary","onefitted","rupiah","centoldstyle","figuredash","hypheninferior","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior"],Vo=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],Nx=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],mi=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function Oh(n){this.font=n}Oh.prototype.charToGlyphIndex=function(n){const e=n.codePointAt(0),t=this.font.glyphs;if(t)for(let i=0;i<t.length;i+=1){const s=t.get(i);for(let r=0;r<s.unicodes.length;r+=1)if(s.unicodes[r]===e)return i}return null};function Fh(n){this.cmap=n}Fh.prototype.charToGlyphIndex=function(n){return this.cmap.glyphIndexMap[n.codePointAt(0)]||0};function Nh(n,e){this.encoding=n,this.charset=e}Nh.prototype.charToGlyphIndex=function(n){const e=n.codePointAt(0),t=this.encoding[e];return this.charset.indexOf(t)};function ml(n){switch(n.version){case 1:this.names=mi.slice();break;case 2:this.names=new Array(n.numberOfGlyphs);for(let e=0;e<n.numberOfGlyphs;e++)n.glyphNameIndex[e]<mi.length?this.names[e]=mi[n.glyphNameIndex[e]]:this.names[e]=n.names[n.glyphNameIndex[e]-mi.length];break;case 2.5:this.names=new Array(n.numberOfGlyphs);for(let e=0;e<n.numberOfGlyphs;e++)this.names[e]=mi[e+n.glyphNameIndex[e]];break;case 3:this.names=[];break;default:this.names=[];break}}ml.prototype.nameToGlyphIndex=function(n){return this.names.indexOf(n)};ml.prototype.glyphIndexToName=function(n){return this.names[n]};function kx(n){let e;const t=n.tables.cmap.glyphIndexMap,i=Object.keys(t);for(let s=0;s<i.length;s+=1){const r=i[s],a=t[r];e=n.glyphs.get(a),e.addUnicode(parseInt(r))}for(let s=0;s<n.glyphs.length;s+=1)e=n.glyphs.get(s),n.cffEncoding?e.name=n.cffEncoding.charset[s]:n.glyphNames.names&&(e.name=n.glyphNames.glyphIndexToName(s))}function Bx(n){n._IndexToUnicodeMap={};const e=n.tables.cmap.glyphIndexMap,t=Object.keys(e);for(let i=0;i<t.length;i+=1){const s=t[i];let r=e[s];n._IndexToUnicodeMap[r]===void 0?n._IndexToUnicodeMap[r]={unicodes:[parseInt(s)]}:n._IndexToUnicodeMap[r].unicodes.push(parseInt(s))}}function zx(n,e){e.lowMemory?Bx(n):kx(n)}function Hx(n,e,t,i,s){n.beginPath(),n.moveTo(e,t),n.lineTo(i,s),n.stroke()}var hi={line:Hx};function Gx(n,e){const t=new P(n,e),i=t.parseShort();i!==0&&console.warn("Only CPALv0 is currently fully supported.");const s=t.parseShort(),r=t.parseShort(),a=t.parseShort(),o=t.parseOffset32(),l=t.parseUShortList(r);t.relativeOffset=o;const c=t.parseULongList(a);return t.relativeOffset=o,{version:i,numPaletteEntries:s,colorRecords:c,colorRecordIndices:l}}function Vx({version:n=0,numPaletteEntries:e=0,colorRecords:t=[],colorRecordIndices:i=[0]}){return Se.argument(n===0,"Only CPALv0 are supported."),Se.argument(t.length,"No colorRecords given."),Se.argument(i.length,"No colorRecordIndices given."),i.length>1&&Se.argument(e,"Can't infer numPaletteEntries on multiple colorRecordIndices"),new J.Table("CPAL",[{name:"version",type:"USHORT",value:n},{name:"numPaletteEntries",type:"USHORT",value:e||t.length},{name:"numPalettes",type:"USHORT",value:i.length},{name:"numColorRecords",type:"USHORT",value:t.length},{name:"colorRecordsArrayOffset",type:"ULONG",value:12+2*i.length},...i.map((s,r)=>({name:"colorRecordIndices_"+r,type:"USHORT",value:s})),...t.map((s,r)=>({name:"colorRecords_"+r,type:"ULONG",value:s}))])}function kh(n){var e=(n&4278190080)>>24,t=(n&16711680)>>16,i=(n&65280)>>8,s=n&255;return e=e+256&255,t=t+256&255,i=i+256&255,s=(s+256&255)/255,{b:e,g:t,r:i,a:s}}function gl(n,e,t=0,i="hexa"){if(e==65535)return"currentColor";const s=n&&n.tables&&n.tables.cpal;if(!s)return"currentColor";if(t>s.colorRecordIndices.length-1)throw new Error(`Palette index out of range (colorRecordIndices.length: ${s.colorRecordIndices.length}, index: ${e})`);if(e>s.numPaletteEntries)throw new Error(`Color index out of range (numPaletteEntries: ${s.numPaletteEntries}, index: ${e})`);const r=s.colorRecordIndices[t]+e;if(r>s.colorRecords)throw new Error(`Color index out of range (colorRecords.length: ${s.colorRecords.length}, lookupIndex: ${r})`);const a=kh(s.colorRecords[r]);return i==="bgra"?a:os(a,i)}function tn(n){return("0"+parseInt(n).toString(16)).slice(-2)}function Wx(n){const e=n.r/255,t=n.g/255,i=n.b/255,s=Math.max(e,t,i),r=Math.min(e,t,i);let a,o,l=(s+r)/2;if(s===r)a=o=0;else{const c=s-r;switch(o=l>.5?c/(2-s-r):c/(s+r),s){case e:a=(t-i)/c+(t<i?6:0);break;case t:a=(i-e)/c+2;break;case i:a=(e-t)/c+4;break}a/=6}return{h:a*360,s:o*100,l:l*100}}function Xx(n){let{h:e,s:t,l:i,a:s}=n;e=e%360,t/=100,i/=100;const r=(1-Math.abs(2*i-1))*t,a=r*(1-Math.abs(e/60%2-1)),o=i-r/2;let l=0,c=0,u=0;return 0<=e&&e<60?(l=r,c=a,u=0):60<=e&&e<120?(l=a,c=r,u=0):120<=e&&e<180?(l=0,c=r,u=a):180<=e&&e<240?(l=0,c=a,u=r):240<=e&&e<300?(l=a,c=0,u=r):300<=e&&e<=360&&(l=r,c=0,u=a),{r:Math.round((l+o)*255),g:Math.round((c+o)*255),b:Math.round((u+o)*255),a:s}}function Bh(n){return parseInt(`0x${tn(n.b)}${tn(n.g)}${tn(n.r)}${tn(n.a*255)}`,16)}function qr(n,e="hexa"){const t=e=="raw"||e=="cpal",i=Number.isInteger(n);let s=!0;if(i&&t||n==="currentColor")return n;if(typeof n=="object"){if(e=="bgra")return n;if(t)return Bh(n)}else if(!i&&/^#([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})$/i.test(n.trim())){switch(n=n.trim().substring(1),n.length){case 3:n={r:parseInt(n[0].repeat(2),16),g:parseInt(n[1].repeat(2),16),b:parseInt(n[2].repeat(2),16),a:1};break;case 4:n={r:parseInt(n[0].repeat(2),16),g:parseInt(n[1].repeat(2),16),b:parseInt(n[2].repeat(2),16),a:parseInt(n[3].repeat(2),16)/255};break;case 6:n={r:parseInt(n[0]+n[1],16),g:parseInt(n[2]+n[3],16),b:parseInt(n[4]+n[5],16),a:1};break;case 8:n={r:parseInt(n[0]+n[1],16),g:parseInt(n[2]+n[3],16),b:parseInt(n[4]+n[5],16),a:parseInt(n[6]+n[7],16)/255};break}if(e=="bgra")return n}else if(typeof document<"u"&&/^[a-z]+$/i.test(n)){const r=document.createElement("canvas").getContext("2d");r.fillStyle=n;const a=os(r.fillStyle,"hexa");a==="#000000ff"&&n.toLowerCase()!=="black"?s=!1:n=a}else{n=n.trim();const r=/rgba?\(\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:,|\s*)\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:,|\s*)\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:(?:,|\s|\/)\s*(?:(0*(?:\.\d+)?()|0*1(?:\.0+)?())|(?:\.\d+)|(\d+)(%)|(\d*\.\d+)(%)))?\s*\)/;if(r.test(n)){const a=n.match(r).filter(o=>typeof o<"u");n={r:Math.round(parseFloat(a[1])/(a[2]?100/255:1)),g:Math.round(parseFloat(a[3])/(a[4]?100/255:1)),b:Math.round(parseFloat(a[5])/(a[6]?100/255:1)),a:a[7]?parseFloat(a[7])/(a[8]?100:1):1}}else{const a=/hsla?\(\s*(?:(\d*\.\d+|\d+)(deg|turn|))\s*(?:,|\s*)\s*(?:(\d*\.\d+)%?|(\d+)%?)\s*(?:,|\s*)\s*(?:(\d*\.\d+)%?|(\d+)%?)\s*(?:(?:,|\s|\/)\s*(?:(0*(?:\.\d+)?()|0*1(?:\.0+)?())|(?:\.\d+)|(\d+)(%)|(\d*\.\d+)(%)))?\s*\)/;if(a.test(n)){const o=n.match(a).filter(l=>typeof l<"u");n=Xx({h:parseFloat(o[1])*(o[2]==="turn"?360:1),s:parseFloat(o[3]),l:parseFloat(o[4]),a:o[5]?parseFloat(o[5])/(o[6]?100:1):1})}else s=!1}}if(!s)throw new Error(`Invalid color format: ${n}`);return os(n,e)}function os(n,e="hexa"){if(n==="currentColor")return n;if(Number.isInteger(n)){if(e=="raw"||e=="cpal")return n;n=kh(n)}else typeof n!="object"&&(n=qr(n,"bgra"));let t=["hsl","hsla"].includes(e)?Wx(n):null;switch(e){case"rgba":return`rgba(${n.r}, ${n.g}, ${n.b}, ${parseFloat(n.a.toFixed(3))})`;case"rgb":return`rgb(${n.r}, ${n.g}, ${n.b})`;case"hex":case"hex6":case"hex-6":return`#${tn(n.r)}${tn(n.g)}${tn(n.b)}`;case"hexa":case"hex8":case"hex-8":return`#${tn(n.r)}${tn(n.g)}${tn(n.b)}${tn(n.a*255)}`;case"hsl":return`hsl(${t.h.toFixed(2)}, ${t.s.toFixed(2)}%, ${t.l.toFixed(2)}%)`;case"hsla":return`hsla(${t.h.toFixed(2)}, ${t.s.toFixed(2)}%, ${t.l.toFixed(2)}%, ${parseFloat(n.a.toFixed(3))})`;case"bgra":return n;case"raw":case"cpal":return Bh(n);default:throw new Error("Unknown color format: "+e)}}var zh={parse:Gx,make:Vx,getPaletteColor:gl,parseColor:qr,formatColor:os};function qx(n,e){let t=e||new is;return{configurable:!0,get:function(){return typeof t=="function"&&(t=t()),t},set:function(i){t=i}}}function Lt(n){this.bindConstructorValues(n)}Lt.prototype.bindConstructorValues=function(n){if(this.index=n.index||0,n.name===".notdef"?n.unicode=void 0:n.name===".null"&&(n.unicode=0),n.unicode===0&&n.name!==".null")throw new Error('The unicode value "0" is reserved for the glyph name ".null" and cannot be used by any other glyph.');this.name=n.name||null,this.unicode=n.unicode,this.unicodes=n.unicodes||(n.unicode!==void 0?[n.unicode]:[]),"xMin"in n&&(this.xMin=n.xMin),"yMin"in n&&(this.yMin=n.yMin),"xMax"in n&&(this.xMax=n.xMax),"yMax"in n&&(this.yMax=n.yMax),"advanceWidth"in n&&(this.advanceWidth=n.advanceWidth),"leftSideBearing"in n&&(this.leftSideBearing=n.leftSideBearing),"points"in n&&(this.points=n.points),Object.defineProperty(this,"path",qx(this,n.path))};Lt.prototype.addUnicode=function(n){this.unicodes.length===0&&(this.unicode=n),this.unicodes.push(n)};Lt.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};Lt.prototype.getPath=function(n,e,t,i,s){n=n!==void 0?n:0,e=e!==void 0?e:0,t=t!==void 0?t:72,i=Object.assign({},s&&s.defaultRenderOptions,i);let r,a,o=i.xScale,l=i.yScale;const c=1/(this.path.unitsPerEm||1e3)*t;let u=this;s&&s.variation&&(u=s.variation.getTransform(this,i.variation),r=u.path.commands),i.hinting&&s&&s.hinting&&(a=u.path&&s.hinting.exec(u,t,i)),a?(r=s.hinting.getCommands(a),n=Math.round(n),e=Math.round(e),o=l=1):(r=u.path.commands,o===void 0&&(o=c),l===void 0&&(l=c));const h=new is;if(i.drawSVG){const f=this.getSvgImage(s);if(f){const d=new is;return d._image={image:f.image,x:n+f.leftSideBearing*c,y:e-f.baseline*c,width:f.image.width*c,height:f.image.height*c},h._layers=[d],h}}if(i.drawLayers){const f=this.getLayers(s);if(f&&f.length){h._layers=[];for(let d=0;d<f.length;d+=1){const p=f[d];let v=gl(s,p.paletteIndex,i.usePalette);v==="currentColor"?v=i.fill||"black":v=os(v,i.colorFormat||"rgba"),i=Object.assign({},i,{fill:v}),h._layers.push(this.getPath.call(p.glyph,n,e,t,i,s))}return h}}h.fill=i.fill||this.path.fill,h.stroke=this.path.stroke,h.strokeWidth=this.path.strokeWidth*c;for(let f=0;f<r.length;f+=1){const d=r[f];d.type==="M"?h.moveTo(n+d.x*o,e+-d.y*l):d.type==="L"?h.lineTo(n+d.x*o,e+-d.y*l):d.type==="Q"?h.quadraticCurveTo(n+d.x1*o,e+-d.y1*l,n+d.x*o,e+-d.y*l):d.type==="C"?h.curveTo(n+d.x1*o,e+-d.y1*l,n+d.x2*o,e+-d.y2*l,n+d.x*o,e+-d.y*l):d.type==="Z"&&h.stroke&&h.strokeWidth&&h.closePath()}return h};Lt.prototype.getLayers=function(n){if(!n)throw new Error("The font object is required to read the colr/cpal tables in order to get the layers.");return n.layers.get(this.index)};Lt.prototype.getSvgImage=function(n){if(!n)throw new Error("The font object is required to read the svg table in order to get the image.");return n.svgImages.get(this.index)};Lt.prototype.getContours=function(n=null){if(this.points===void 0&&!n)return[];const e=[];let t=[],i=n||this.points;for(let s=0;s<i.length;s+=1){const r=i[s];t.push(r),r.lastPointOfContour&&(e.push(t),t=[])}return Se.argument(t.length===0,"There are still points left in the current contour."),e};Lt.prototype.getMetrics=function(){const n=this.path.commands,e=[],t=[];for(let s=0;s<n.length;s+=1){const r=n[s];r.type!=="Z"&&(e.push(r.x),t.push(r.y)),(r.type==="Q"||r.type==="C")&&(e.push(r.x1),t.push(r.y1)),r.type==="C"&&(e.push(r.x2),t.push(r.y2))}const i={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,t),leftSideBearing:this.leftSideBearing};return isFinite(i.xMin)||(i.xMin=0),isFinite(i.xMax)||(i.xMax=this.advanceWidth),isFinite(i.yMin)||(i.yMin=0),isFinite(i.yMax)||(i.yMax=0),i.rightSideBearing=this.advanceWidth-i.leftSideBearing-(i.xMax-i.xMin),i};Lt.prototype.draw=function(n,e,t,i,s,r){s=Object.assign({},r&&r.defaultRenderOptions,s),this.getPath(e,t,i,s,r).draw(n)};Lt.prototype.drawPoints=function(n,e,t,i,s,r){if(s=Object.assign({},r&&r.defaultRenderOptions,s),s.drawLayers){const f=this.getLayers(r);if(f&&f.length){for(let d=0;d<f.length;d+=1)f[d].glyph.index!==this.index&&this.drawPoints.call(f[d].glyph,n,e,t,i);return}}function a(f,d,p,v){n.beginPath();for(let g=0;g<f.length;g+=1)n.moveTo(d+f[g].x*v,p+f[g].y*v),n.arc(d+f[g].x*v,p+f[g].y*v,2,0,Math.PI*2,!1);n.fill()}e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:24;const o=1/this.path.unitsPerEm*i,l=[],c=[];let h=this.path.commands;r&&r.variation&&(h=r.variation.getTransform(this,s.variation).path.commands);for(let f=0;f<h.length;f+=1){const d=h[f];d.x!==void 0&&l.push({x:d.x,y:-d.y}),d.x1!==void 0&&c.push({x:d.x1,y:-d.y1}),d.x2!==void 0&&c.push({x:d.x2,y:-d.y2})}n.fillStyle="blue",a(l,e,t,o),n.fillStyle="red",a(c,e,t,o)};Lt.prototype.drawMetrics=function(n,e,t,i){let s;e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:24,s=1/this.path.unitsPerEm*i,n.lineWidth=1,n.strokeStyle="black",hi.line(n,e,-1e4,e,1e4),hi.line(n,-1e4,t,1e4,t);const r=this.xMin||0;let a=this.yMin||0;const o=this.xMax||0;let l=this.yMax||0;const c=this.advanceWidth||0;n.strokeStyle="blue",hi.line(n,e+r*s,-1e4,e+r*s,1e4),hi.line(n,e+o*s,-1e4,e+o*s,1e4),hi.line(n,-1e4,t+-a*s,1e4,t+-a*s),hi.line(n,-1e4,t+-l*s,1e4,t+-l*s),n.strokeStyle="green",hi.line(n,e+c*s,-1e4,e+c*s,1e4)};Lt.prototype.toPathData=function(n,e){n=Object.assign({},{variation:e&&e.defaultRenderOptions.variation},n);let t=this;e&&e.variation&&(t=e.variation.getTransform(this,n.variation));let i=t.points&&n.pointsTransform?n.pointsTransform(t.points):t.path;return n.pathTransform&&(i=n.pathTransform(i)),i.toPathData(n)};Lt.prototype.fromSVG=function(n,e={}){return this.path.fromSVG(n,e)};Lt.prototype.toSVG=function(n,e){const t=this.toPathData.apply(this,[n,e]);return this.path.toSVG(n,t)};Lt.prototype.toDOMElement=function(n,e){n=Object.assign({},{variation:e&&e.defaultRenderOptions.variation},n);let t=this.path;return e&&e.variation&&(t=e.variation.getTransform(this,n.variation).path),t.toDOMElement(n)};var As=Lt;function Gi(n,e,t){Object.defineProperty(n,e,{get:function(){return typeof n[t]>"u"&&n.path,n[t]},set:function(i){n[t]=i},enumerable:!0,configurable:!0})}function ta(n,e){if(this.font=n,this.glyphs={},Array.isArray(e))for(let t=0;t<e.length;t++){const i=e[t];i.path.unitsPerEm=n.unitsPerEm,this.glyphs[t]=i}this.length=e&&e.length||0}typeof Symbol<"u"&&Symbol.iterator&&(ta.prototype[Symbol.iterator]=function(){let n=-1;return{next:(function(){n++;const e=n>=this.length-1;return{value:this.get(n),done:e}}).bind(this)}});ta.prototype.get=function(n){if(this.font._push&&this.glyphs[n]===void 0){this.font._push(n),typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());let e=this.glyphs[n],t=this.font._IndexToUnicodeMap[n];if(t)for(let i=0;i<t.unicodes.length;i++)e.addUnicode(t.unicodes[i]);this.font.cffEncoding?e.name=this.font.cffEncoding.charset[n]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(n)),this.glyphs[n].advanceWidth=this.font._hmtxTableData[n].advanceWidth,this.glyphs[n].leftSideBearing=this.font._hmtxTableData[n].leftSideBearing}else typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());return this.glyphs[n]};ta.prototype.push=function(n,e){this.glyphs[n]=e,this.length++};function Yx(n,e){return new As({index:e,font:n})}function jx(n,e,t,i,s,r){return function(){const a=new As({index:e,font:n});return a.path=function(){t(a,i,s);const o=r(n.glyphs,a);return o.unitsPerEm=n.unitsPerEm,o},Gi(a,"numberOfContours","_numberOfContours"),Gi(a,"xMin","_xMin"),Gi(a,"xMax","_xMax"),Gi(a,"yMin","_yMin"),Gi(a,"yMax","_yMax"),Gi(a,"points","_points"),a}}function $x(n,e,t,i,s){return function(){const r=new As({index:e,font:n});return r.path=function(){const a=t(n,r,i,s);return a.unitsPerEm=n.unitsPerEm,a},r}}var xn={GlyphSet:ta,glyphLoader:Yx,ttfGlyphLoader:jx,cffGlyphLoader:$x};function Hh(n,e){if(n===e)return!0;if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t+=1)if(!Hh(n[t],e[t]))return!1;return!0}else return!1}var tu=10;function Yr(n){let e;return n.length<1240?e=107:n.length<33900?e=1131:e=32768,e}function fn(n,e,t,i){const s=[],r=[],a=i>1?oe.getULong(n,e):oe.getCard16(n,e),o=i>1?4:2;let l,c;if(a!==0){const u=oe.getByte(n,e+o);l=e+(a+1)*u+o;let h=e+o+1;for(let f=0;f<a+1;f+=1)s.push(oe.getOffset(n,h,u)),h+=u;c=l+s[a]}else c=e+o;for(let u=0;u<s.length-1;u+=1){let h=oe.getBytes(n,l+s[u],l+s[u+1]);t&&(h=t(h,n,e,i)),r.push(h)}return{objects:r,startOffset:e,endOffset:c}}function Zx(n,e,t){const i=[],s=t>1?oe.getULong(n,e):oe.getCard16(n,e),r=t>1?4:2;let a,o;if(s!==0){const l=oe.getByte(n,e+r);a=e+(s+1)*l+r;let c=e+r+1;for(let u=0;u<s+1;u+=1)i.push(oe.getOffset(n,c,l)),c+=l;o=a+i[s]}else o=e+r;return{offsets:i,startOffset:e,endOffset:o}}function Kx(n,e,t,i,s,r){const a=r>1?oe.getULong(t,i):oe.getCard16(t,i),o=r>1?4:2;let l=0;if(a!==0){const u=oe.getByte(t,i+o);l=i+(a+1)*u+o}return oe.getBytes(t,l+e[n],l+e[n+1])}function Jx(n){let e="";const i=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];for(;;){const s=n.parseByte(),r=s>>4,a=s&15;if(r===15||(e+=i[r],a===15))break;e+=i[a]}return parseFloat(e)}function Qx(n,e){let t,i,s,r;if(e===28)return t=n.parseByte(),i=n.parseByte(),t<<8|i;if(e===29)return t=n.parseByte(),i=n.parseByte(),s=n.parseByte(),r=n.parseByte(),t<<24|i<<16|s<<8|r;if(e===30)return Jx(n);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return t=n.parseByte(),(e-247)*256+t+108;if(e>=251&&e<=254)return t=n.parseByte(),-(e-251)*256-t-108;throw new Error("Invalid b0 "+e)}function e_(n){const e={};for(let t=0;t<n.length;t+=1){const i=n[t][0],s=n[t][1];let r;if(s.length===1?r=s[0]:r=s,Object.prototype.hasOwnProperty.call(e,i)&&!isNaN(e[i]))throw new Error("Object "+e+" already has key "+i);e[i]=r}return e}function vl(n,e,t,i){e=e!==void 0?e:0;const s=new oe.Parser(n,e),r=[];let a=[];t=t!==void 0?t:n.byteLength;let o=i<2?22:28;for(;s.relativeOffset<t;){let l=s.parseByte();if(l<o){if(l===12&&(l=1200+s.parseByte()),i>1&&l===23){u_(a);continue}r.push([l,a]),a=[]}else a.push(Qx(s,l))}return e_(r)}function Ms(n,e){return e<=390?e=Rr[e]:n?e=n[e-391]:e=void 0,e}function xl(n,e,t){const i={};let s;for(let r=0;r<e.length;r+=1){const a=e[r];if(Array.isArray(a.type)){const o=[];o.length=a.type.length;for(let l=0;l<a.type.length;l++)s=n[a.op]!==void 0?n[a.op][l]:void 0,s===void 0&&(s=a.value!==void 0&&a.value[l]!==void 0?a.value[l]:null),a.type[l]==="SID"&&(s=Ms(t,s)),o[l]=s;i[a.name]=o}else s=n[a.op],s===void 0&&(s=a.value!==void 0?a.value:null),a.type==="SID"&&(s=Ms(t,s)),i[a.name]=s}return i}function t_(n,e){const t={};if(t.formatMajor=oe.getCard8(n,e),t.formatMinor=oe.getCard8(n,e+1),t.formatMajor>2)throw new Error(`Unsupported CFF table version ${t.formatMajor}.${t.formatMinor}`);return t.size=oe.getCard8(n,e+2),t.formatMajor<2?(t.offsetSize=oe.getCard8(n,e+3),t.startOffset=e,t.endOffset=e+4):(t.topDictLength=oe.getCard16(n,e+3),t.endOffset=e+8),t}var Gh=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],n_=[{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"charStrings",op:17,type:"offset"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"vstore",op:24,type:"offset"}],Vh=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}],i_=[{name:"blueValues",op:6,type:"delta"},{name:"otherBlues",op:7,type:"delta"},{name:"familyBlues",op:7,type:"delta"},{name:"familyBlues",op:8,type:"delta"},{name:"familyOtherBlues",op:9,type:"delta"},{name:"blueScale",op:1209,type:"number",value:.039625},{name:"blueShift",op:1210,type:"number",value:7},{name:"blueFuzz",op:1211,type:"number",value:1},{name:"stdHW",op:10,type:"number"},{name:"stdVW",op:11,type:"number"},{name:"stemSnapH",op:1212,type:"number"},{name:"stemSnapV",op:1213,type:"number"},{name:"languageGroup",op:1217,type:"number",value:0},{name:"expansionFactor",op:1218,type:"number",value:.06},{name:"vsindex",op:22,type:"number",value:0},{name:"subrs",op:19,type:"offset"}],s_=[{name:"private",op:18,type:["number","offset"],value:[0,0]}];function r_(n,e,t,i){const s=vl(n,e,n.byteLength,i);return xl(s,i>1?n_:Gh,t)}function _l(n,e,t,i,s){const r=vl(n,e,t,s);return xl(r,s>1?i_:Vh,i)}function a_(n,e,t){const i=vl(n,e,void 0,t);return xl(i,s_)}function o_(n,e,t){const i=[];for(let s=0;s<t.length;s++){const r=new DataView(new Uint8Array(t[s]).buffer),a=a_(r,0,2),o=a.private[0],l=a.private[1];if(o!==0&&l!==0){const c=_l(n,l+e,o,[],2);if(c.subrs){const u=l+c.subrs,h=fn(n,u+e,void 0,2);a._subrs=h.objects,a._subrsBias=Yr(a._subrs)}a._privateDict=c}i.push(a)}return i}function za(n,e,t,i,s){const r=[];for(let a=0;a<t.length;a+=1){const o=new DataView(new Uint8Array(t[a]).buffer),l=r_(o,0,i,s);l._subrs=[],l._subrsBias=0,l._defaultWidthX=0,l._nominalWidthX=0;const c=s<2?l.private[0]:0,u=s<2?l.private[1]:0;if(c!==0&&u!==0){const h=_l(n,u+e,c,i,s);if(l._defaultWidthX=h.defaultWidthX,l._nominalWidthX=h.nominalWidthX,h.subrs!==0){const f=u+h.subrs,d=fn(n,f+e,void 0,s);l._subrs=d.objects,l._subrsBias=Yr(l._subrs)}l._privateDict=h}r.push(l)}return r}function l_(n,e,t,i,s){let r,a;const o=new oe.Parser(n,e);t-=1;const l=[".notdef"],c=o.parseCard8();if(c===0)for(let u=0;u<t;u+=1)r=o.parseSID(),s?l.push(r):l.push(Ms(i,r)||r);else if(c===1)for(;l.length<=t;){r=o.parseSID(),a=o.parseCard8();for(let u=0;u<=a;u+=1)s?l.push("cid"+("00000"+r).slice(-5)):l.push(Ms(i,r)||r),r+=1}else if(c===2)for(;l.length<=t;){r=o.parseSID(),a=o.parseCard16();for(let u=0;u<=a;u+=1)s?l.push("cid"+("00000"+r).slice(-5)):l.push(Ms(i,r)||r),r+=1}else throw new Error("Unknown charset format "+c);return l}function c_(n,e){let t;const i={},s=new oe.Parser(n,e),r=s.parseCard8();if(r===0){const a=s.parseCard8();for(let o=0;o<a;o+=1)t=s.parseCard8(),i[t]=o}else if(r===1){const a=s.parseCard8();t=1;for(let o=0;o<a;o+=1){const l=s.parseCard8(),c=s.parseCard8();for(let u=l;u<=l+c;u+=1)i[u]=t,t+=1}}else throw new Error("Unknown encoding format "+r);return i}function u_(n){let e=n.pop();for(;n.length>e;)n.pop()}function Wh(n,e){const t=n.tables.cff&&n.tables.cff.topDict&&n.tables.cff.topDict.paintType||0;return t===2&&(e.fill=null,e.stroke="black",e.strokeWidth=n.tables.cff.topDict.strokeWidth||0),t}function Wo(n,e,t,i,s){let r,a,o,l;const c=new is,u=[];let h=0,f=!1,d=!1,p=0,v=0,g,m,M,b,S=0,N=[],A,C=0;const I=n.tables.cff2||n.tables.cff;if(M=I.topDict._defaultWidthX,b=I.topDict._nominalWidthX,s=s||n.variation&&n.variation.get(),e.getBlendPath||(e.getBlendPath=function(U){return Wo(n,e,t,i,U)}),n.isCIDFont||i>1){const U=I.topDict._fdSelect?I.topDict._fdSelect[e.index]:0,B=I.topDict._fdArray[U];g=B._subrs,m=B._subrsBias,i>1?(N=I.topDict._vstore.itemVariationStore,S=B._privateDict.vsindex):(M=B._defaultWidthX,b=B._nominalWidthX)}else g=I.topDict._subrs,m=I.topDict._subrsBias;const T=Wh(n,c);let _=M;function w(U,B){d&&T!==2&&c.closePath(),c.moveTo(U,B),d=!0}function X(){let U;U=(u.length&1)!==0,U&&!f&&(_=u.shift()+b),h+=u.length>>1,u.length=0,f=!0}function R(U){let B,V,te,W,re,ae,me,De,Oe,Y,K,ue,ee=0;for(;ee<U.length;){let L=U[ee];switch(ee+=1,L){case 1:X();break;case 3:X();break;case 4:u.length>1&&!f&&(_=u.shift()+b,f=!0),v+=u.pop(),w(p,v);break;case 5:for(;u.length>0;)p+=u.shift(),v+=u.shift(),c.lineTo(p,v);break;case 6:for(;u.length>0&&(p+=u.shift(),c.lineTo(p,v),u.length!==0);)v+=u.shift(),c.lineTo(p,v);break;case 7:for(;u.length>0&&(v+=u.shift(),c.lineTo(p,v),u.length!==0);)p+=u.shift(),c.lineTo(p,v);break;case 8:for(;u.length>0;)r=p+u.shift(),a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),p=o+u.shift(),v=l+u.shift(),c.curveTo(r,a,o,l,p,v);break;case 10:if(re=u.pop()+m,ae=g[re],ae){if(C>=tu){console.warn("CFF charstring subroutine call depth exceeded, skipping callsubr");break}C++,R(ae),C--}break;case 11:if(i>1){console.error("CFF CharString operator return (11) is not supported in CFF2");break}return;case 12:switch(L=U[ee],ee+=1,L){case 35:r=p+u.shift(),a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),me=o+u.shift(),De=l+u.shift(),Oe=me+u.shift(),Y=De+u.shift(),K=Oe+u.shift(),ue=Y+u.shift(),p=K+u.shift(),v=ue+u.shift(),u.shift(),c.curveTo(r,a,o,l,me,De),c.curveTo(Oe,Y,K,ue,p,v);break;case 34:r=p+u.shift(),a=v,o=r+u.shift(),l=a+u.shift(),me=o+u.shift(),De=l,Oe=me+u.shift(),Y=l,K=Oe+u.shift(),ue=v,p=K+u.shift(),c.curveTo(r,a,o,l,me,De),c.curveTo(Oe,Y,K,ue,p,v);break;case 36:r=p+u.shift(),a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),me=o+u.shift(),De=l,Oe=me+u.shift(),Y=l,K=Oe+u.shift(),ue=Y+u.shift(),p=K+u.shift(),c.curveTo(r,a,o,l,me,De),c.curveTo(Oe,Y,K,ue,p,v);break;case 37:r=p+u.shift(),a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),me=o+u.shift(),De=l+u.shift(),Oe=me+u.shift(),Y=De+u.shift(),K=Oe+u.shift(),ue=Y+u.shift(),Math.abs(K-p)>Math.abs(ue-v)?p=K+u.shift():v=ue+u.shift(),c.curveTo(r,a,o,l,me,De),c.curveTo(Oe,Y,K,ue,p,v);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+L),u.length=0}break;case 14:if(i>1){console.error("CFF CharString operator endchar (14) is not supported in CFF2");break}if(u.length>=4){const vt=Vo[u.pop()],Be=Vo[u.pop()],Xe=u.pop(),we=u.pop();if(vt&&Be){e.isComposite=!0,e.components=[];const it=n.cffEncoding.charset.indexOf(vt),Re=n.cffEncoding.charset.indexOf(Be);e.components.push({glyphIndex:Re,dx:0,dy:0}),e.components.push({glyphIndex:it,dx:we,dy:Xe}),c.extend(n.glyphs.get(Re).path);const E=n.glyphs.get(it),x=JSON.parse(JSON.stringify(E.path.commands));for(let z=0;z<x.length;z+=1){const j=x[z];j.type!=="Z"&&(j.x+=we,j.y+=Xe),(j.type==="Q"||j.type==="C")&&(j.x1+=we,j.y1+=Xe),j.type==="C"&&(j.x2+=we,j.y2+=Xe)}c.extend(x)}}else u.length>0&&!f&&(_=u.shift()+b,f=!0);d&&T!==2&&(c.closePath(),d=!1);break;case 15:if(i<2){console.error("CFF2 CharString operator vsindex (15) is not supported in CFF");break}S=u.pop();break;case 16:if(i<2){console.error("CFF2 CharString operator blend (16) is not supported in CFF");break}A||(A=n.variation&&s&&n.variation.process.getBlendVector(N,S,s));var le=u.pop(),Ee=A?A.length:N.itemVariationSubtables[S].regionIndexes.length,Pe=le*Ee,Ye=u.length-Pe,Ne=Ye-le;if(A)for(let vt=0;vt<le;vt++){var ft=u[Ne+vt];for(let Be=0;Be<Ee;Be++)ft+=A[Be]*u[Ye++];u[Ne+vt]=ft}for(;Pe--;)u.pop();break;case 18:X();break;case 19:case 20:X(),ee+=h+7>>3;break;case 21:u.length>2&&!f&&(_=u.shift()+b,f=!0),v+=u.pop(),p+=u.pop(),w(p,v);break;case 22:u.length>1&&!f&&(_=u.shift()+b,f=!0),p+=u.pop(),w(p,v);break;case 23:X();break;case 24:for(;u.length>2;)r=p+u.shift(),a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),p=o+u.shift(),v=l+u.shift(),c.curveTo(r,a,o,l,p,v);p+=u.shift(),v+=u.shift(),c.lineTo(p,v);break;case 25:for(;u.length>6;)p+=u.shift(),v+=u.shift(),c.lineTo(p,v);r=p+u.shift(),a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),p=o+u.shift(),v=l+u.shift(),c.curveTo(r,a,o,l,p,v);break;case 26:for(u.length&1&&(p+=u.shift());u.length>0;)r=p,a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),p=o,v=l+u.shift(),c.curveTo(r,a,o,l,p,v);break;case 27:for(u.length&1&&(v+=u.shift());u.length>0;)r=p+u.shift(),a=v,o=r+u.shift(),l=a+u.shift(),p=o+u.shift(),v=l,c.curveTo(r,a,o,l,p,v);break;case 28:B=U[ee],V=U[ee+1],u.push((B<<24|V<<16)>>16),ee+=2;break;case 29:if(re=u.pop()+n.gsubrsBias,ae=n.gsubrs[re],ae){if(C>=tu){console.warn("CFF charstring subroutine call depth exceeded, skipping callgsubr");break}C++,R(ae),C--}break;case 30:for(;u.length>0&&(r=p,a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),p=o+u.shift(),v=l+(u.length===1?u.shift():0),c.curveTo(r,a,o,l,p,v),u.length!==0);)r=p+u.shift(),a=v,o=r+u.shift(),l=a+u.shift(),v=l+u.shift(),p=o+(u.length===1?u.shift():0),c.curveTo(r,a,o,l,p,v);break;case 31:for(;u.length>0&&(r=p+u.shift(),a=v,o=r+u.shift(),l=a+u.shift(),v=l+u.shift(),p=o+(u.length===1?u.shift():0),c.curveTo(r,a,o,l,p,v),u.length!==0);)r=p,a=v+u.shift(),o=r+u.shift(),l=a+u.shift(),p=o+u.shift(),v=l+(u.length===1?u.shift():0),c.curveTo(r,a,o,l,p,v);break;default:L<32?console.log("Glyph "+e.index+": unknown operator "+L):L<247?u.push(L-139):L<251?(B=U[ee],ee+=1,u.push((L-247)*256+B+108)):L<255?(B=U[ee],ee+=1,u.push(-(L-251)*256-B-108)):(B=U[ee],V=U[ee+1],te=U[ee+2],W=U[ee+3],ee+=4,u.push((B<<24|V<<16|te<<8|W)/65536))}}}return R(t),n.variation&&s&&(c.commands=c.commands.map(U=>{const B=Object.keys(U);for(let V=0;V<B.length;V++){const te=B[V];te!=="type"&&(U[te]=Math.round(U[te]))}return U})),f&&(e.advanceWidth=_),c}function nu(n,e,t,i,s){const r=[];let a;const o=new oe.Parser(n,e),l=o.parseCard8();if(l===0)for(let c=0;c<t;c++){if(a=o.parseCard8(),a>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+a+" (FD count "+i+")");r.push(a)}else if(l===3||s>1&&l===4){const c=l===4?o.parseULong():o.parseCard16();let u=l===4?o.parseULong():o.parseCard16();if(u!==0)throw new Error(`CFF Table CID Font FDSelect format ${l} range has bad initial GID ${u}`);let h;for(let f=0;f<c;f++){if(a=l===4?o.parseUShort():o.parseCard8(),h=l===4?o.parseULong():o.parseCard16(),a>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+a+" (FD count "+i+")");if(h>t)throw new Error(`CFF Table CID Font FDSelect format ${s} range has bad GID ${h}`);for(;u<h;u++)r.push(a);u=h}if(h!==t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final (Sentinal) GID "+h)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+l);return r}function h_(n,e,t,i){let s;const r=t_(n,e);r.formatMajor===2?s=t.tables.cff2={}:s=t.tables.cff={};const a=r.formatMajor>1?null:fn(n,r.endOffset,oe.bytesToString),o=r.formatMajor>1?null:fn(n,a.endOffset),l=r.formatMajor>1?null:fn(n,o.endOffset,oe.bytesToString),c=fn(n,r.formatMajor>1?e+r.size+r.topDictLength:l.endOffset,void 0,r.formatMajor);t.gsubrs=c.objects,t.gsubrsBias=Yr(t.gsubrs);let u;if(r.formatMajor>1){const f=e+r.size,d=oe.getBytes(n,f,f+r.topDictLength);u=za(n,0,[d],void 0,r.formatMajor)[0]}else{const f=za(n,e,o.objects,l.objects,r.formatMajor);if(f.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+f.length);u=f[0]}if(s.topDict=u,u._privateDict&&(t.defaultWidthX=u._privateDict.defaultWidthX,t.nominalWidthX=u._privateDict.nominalWidthX),r.formatMajor<2&&u.ros[0]!==void 0&&u.ros[1]!==void 0&&(t.isCIDFont=!0),r.formatMajor>1){let f=u.fdArray,d=u.fdSelect;if(!f)throw new Error("This is a CFF2 font, but FDArray information is missing");const p=fn(n,e+f,null,r.formatMajor),v=o_(n,e,p.objects);u._fdArray=v,d&&(u._fdSelect=nu(n,e+d,t.numGlyphs,v.length,r.formatMajor))}else if(t.isCIDFont){let f=u.fdArray,d=u.fdSelect;if(f===0||d===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");f+=e;const p=fn(n,f),v=za(n,e,p.objects,l.objects,r.formatMajor);u._fdArray=v,d+=e,u._fdSelect=nu(n,d,t.numGlyphs,v.length,r.formatMajor)}if(r.formatMajor<2){const f=e+u.private[1],d=_l(n,f,u.private[0],l.objects,r.formatMajor);if(t.defaultWidthX=d.defaultWidthX,t.nominalWidthX=d.nominalWidthX,d.subrs!==0){const p=f+d.subrs,v=fn(n,p);t.subrs=v.objects,t.subrsBias=Yr(t.subrs)}else t.subrs=[],t.subrsBias=0}let h;if(i.lowMemory?(h=Zx(n,e+u.charStrings,r.formatMajor),t.nGlyphs=h.offsets.length-(r.formatMajor>1?1:0)):(h=fn(n,e+u.charStrings,null,r.formatMajor),t.nGlyphs=h.objects.length),r.formatMajor>1&&t.tables.maxp&&t.nGlyphs!==t.tables.maxp.numGlyphs&&console.error(`Glyph count in the CFF2 table (${t.nGlyphs}) must correspond to the glyph count in the maxp table (${t.tables.maxp.numGlyphs})`),r.formatMajor<2){let f=[],d=[];u.charset===0?f=Ix:u.charset===1?f=Ox:u.charset===2?f=Fx:f=l_(n,e+u.charset,t.nGlyphs,l.objects,t.isCIDFont),u.encoding===0?d=Vo:u.encoding===1?d=Nx:d=c_(n,e+u.encoding),t.cffEncoding=new Nh(d,f),t.encoding=t.encoding||t.cffEncoding}if(t.glyphs=new xn.GlyphSet(t),i.lowMemory)t._push=function(f){const d=Kx(f,h.offsets,n,e+u.charStrings,void 0,r.formatMajor);t.glyphs.push(f,xn.cffGlyphLoader(t,f,Wo,d,r.formatMajor))};else for(let f=0;f<t.nGlyphs;f+=1){const d=h.objects[f];t.glyphs.push(f,xn.cffGlyphLoader(t,f,Wo,d,r.formatMajor))}if(u.vstore){const f=new oe.Parser(n,e+u.vstore);u._vstore=f.parseVariationStore()}}function Xh(n,e){let t,i=Rr.indexOf(n);return i>=0&&(t=i),i=e.indexOf(n),i>=0?t=i+Rr.length:(t=Rr.length+e.length,e.push(n)),t}function f_(){return new J.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function d_(n){const e=new J.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(let t=0;t<n.length;t+=1)e.names.push({name:"name_"+t,type:"NAME",value:n[t]});return e}function qh(n,e,t){const i={};for(let s=0;s<n.length;s+=1){const r=n[s];let a=e[r.name];a!==void 0&&!Hh(a,r.value)&&(r.type==="SID"&&(a=Xh(a,t)),i[r.op]={name:r.name,type:r.type,value:a})}return i}function iu(n,e,t){const i=new J.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return i.dict=qh(Gh,n,e),i}function su(n){const e=new J.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:n}],e}function p_(n){const e=new J.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(let t=0;t<n.length;t+=1)e.strings.push({name:"string_"+t,type:"STRING",value:n[t]});return e}function m_(){return new J.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function g_(n,e){const t=new J.Record("Charsets",[{name:"format",type:"Card8",value:0}]);for(let i=0;i<n.length;i+=1){const s=n[i],r=Xh(s,e);t.fields.push({name:"glyph_"+i,type:"SID",value:r})}return t}function v_(n,e){const t=[],i=n.path;t.push({name:"width",type:"NUMBER",value:n.advanceWidth});let s=0,r=0;for(let a=0;a<i.commands.length;a+=1){let o,l,c=i.commands[a];if(c.type==="Q"){const u=.3333333333333333,h=2/3;c={type:"C",x:c.x,y:c.y,x1:Math.round(u*s+h*c.x1),y1:Math.round(u*r+h*c.y1),x2:Math.round(u*c.x+h*c.x1),y2:Math.round(u*c.y+h*c.y1)}}if(c.type==="M")o=Math.round(c.x-s),l=Math.round(c.y-r),t.push({name:"dx",type:"NUMBER",value:o}),t.push({name:"dy",type:"NUMBER",value:l}),t.push({name:"rmoveto",type:"OP",value:21}),s=Math.round(c.x),r=Math.round(c.y);else if(c.type==="L")o=Math.round(c.x-s),l=Math.round(c.y-r),t.push({name:"dx",type:"NUMBER",value:o}),t.push({name:"dy",type:"NUMBER",value:l}),t.push({name:"rlineto",type:"OP",value:5}),s=Math.round(c.x),r=Math.round(c.y);else if(c.type==="C"){const u=Math.round(c.x1-s),h=Math.round(c.y1-r),f=Math.round(c.x2-c.x1),d=Math.round(c.y2-c.y1);o=Math.round(c.x-c.x2),l=Math.round(c.y-c.y2),t.push({name:"dx1",type:"NUMBER",value:u}),t.push({name:"dy1",type:"NUMBER",value:h}),t.push({name:"dx2",type:"NUMBER",value:f}),t.push({name:"dy2",type:"NUMBER",value:d}),t.push({name:"dx",type:"NUMBER",value:o}),t.push({name:"dy",type:"NUMBER",value:l}),t.push({name:"rrcurveto",type:"OP",value:8}),s=Math.round(c.x),r=Math.round(c.y)}}return t.push({name:"endchar",type:"OP",value:14}),t}function x_(n,e){const t=new J.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]);for(let i=0;i<n.length;i+=1){const s=n.get(i),r=v_(s);t.charStrings.push({name:s.name,type:"CHARSTRING",value:r})}return t}function __(n,e,t){const i=new J.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return i.dict=qh(Vh,n,e),i}function y_(n,e){const t=new J.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),i=1/e.unitsPerEm,s={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[i,0,0,i,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},r=e&&e.topDict||{};r.paintType&&(s.paintType=r.paintType,s.strokeWidth=r.strokeWidth||0);const a={},o=[];let l;for(let f=1;f<n.length;f+=1)l=n.get(f),o.push(l.name);const c=[];t.header=f_(),t.nameIndex=d_([e.postScriptName]);let u=iu(s,c);t.topDictIndex=su(u),t.globalSubrIndex=m_(),t.charsets=g_(o,c),t.charStringsIndex=x_(n),t.privateDict=__(a,c),t.stringIndex=p_(c);const h=t.header.sizeOf()+t.nameIndex.sizeOf()+t.topDictIndex.sizeOf()+t.stringIndex.sizeOf()+t.globalSubrIndex.sizeOf();return s.charset=h,s.encoding=0,s.charStrings=s.charset+t.charsets.sizeOf(),s.private[1]=s.charStrings+t.charStringsIndex.sizeOf(),u=iu(s,c),t.topDictIndex=su(u),t}var Xo={parse:h_,make:y_};function S_(n,e){const t={},i=new oe.Parser(n,e);return t.version=i.parseVersion(),t.fontRevision=Math.round(i.parseFixed()*1e3)/1e3,t.checkSumAdjustment=i.parseULong(),t.magicNumber=i.parseULong(),Se.argument(t.magicNumber===1594834165,"Font header has wrong magic number."),t.flags=i.parseUShort(),t.unitsPerEm=i.parseUShort(),t.created=i.parseLongDateTime(),t.modified=i.parseLongDateTime(),t.xMin=i.parseShort(),t.yMin=i.parseShort(),t.xMax=i.parseShort(),t.yMax=i.parseShort(),t.macStyle=i.parseUShort(),t.lowestRecPPEM=i.parseUShort(),t.fontDirectionHint=i.parseShort(),t.indexToLocFormat=i.parseShort(),t.glyphDataFormat=i.parseShort(),t}function b_(n){const e=Math.round(new Date().getTime()/1e3)+2082844800;let t=e,i=n.macStyle||0;return n.createdTimestamp&&(t=n.createdTimestamp+2082844800),new J.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:t},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:i},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],n)}var Yh={parse:S_,make:b_};function M_(n,e){const t={},i=new oe.Parser(n,e);return t.version=i.parseVersion(),t.ascender=i.parseShort(),t.descender=i.parseShort(),t.lineGap=i.parseShort(),t.advanceWidthMax=i.parseUShort(),t.minLeftSideBearing=i.parseShort(),t.minRightSideBearing=i.parseShort(),t.xMaxExtent=i.parseShort(),t.caretSlopeRise=i.parseShort(),t.caretSlopeRun=i.parseShort(),t.caretOffset=i.parseShort(),i.relativeOffset+=8,t.metricDataFormat=i.parseShort(),t.numberOfHMetrics=i.parseUShort(),t}function T_(n){return new J.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],n)}var jh={parse:M_,make:T_};function E_(n,e,t,i,s){let r,a;const o=new oe.Parser(n,e);for(let l=0;l<i;l+=1){l<t&&(r=o.parseUShort(),a=o.parseShort());const c=s.get(l);c.advanceWidth=r,c.leftSideBearing=a}}function A_(n,e,t,i,s){n._hmtxTableData={};let r,a;const o=new oe.Parser(e,t);for(let l=0;l<s;l+=1)l<i&&(r=o.parseUShort(),a=o.parseShort()),n._hmtxTableData[l]={advanceWidth:r,leftSideBearing:a}}function C_(n,e,t,i,s,r,a){a.lowMemory?A_(n,e,t,i,s):E_(e,t,i,s,r)}function w_(n){const e=new J.Table("hmtx",[]);for(let t=0;t<n.length;t+=1){const i=n.get(t),s=i.advanceWidth||0,r=i.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+t,type:"USHORT",value:s}),e.fields.push({name:"leftSideBearing_"+t,type:"SHORT",value:r})}return e}var $h={parse:C_,make:w_};function R_(n){const e=new J.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:n.length}]);let t="";const i=12+n.length*4;for(let s=0;s<n.length;++s){let r=t.indexOf(n[s]);r<0&&(r=t.length,t+=n[s]),e.fields.push({name:"offset "+s,type:"USHORT",value:i+r}),e.fields.push({name:"length "+s,type:"USHORT",value:n[s].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),e}function L_(n,e){const t=new oe.Parser(n,e),i=t.parseULong();Se.argument(i===1,"Unsupported ltag table version."),t.skip("uLong",1);const s=t.parseULong(),r=[];for(let a=0;a<s;a++){let o="";const l=e+t.parseUShort(),c=t.parseUShort();for(let u=l;u<l+c;++u)o+=String.fromCharCode(n.getInt8(u));r.push(o)}return r}var Zh={make:R_,parse:L_};function D_(n,e){const t={},i=new oe.Parser(n,e);return t.version=i.parseVersion(),t.numGlyphs=i.parseUShort(),t.version===1&&(t.maxPoints=i.parseUShort(),t.maxContours=i.parseUShort(),t.maxCompositePoints=i.parseUShort(),t.maxCompositeContours=i.parseUShort(),t.maxZones=i.parseUShort(),t.maxTwilightPoints=i.parseUShort(),t.maxStorage=i.parseUShort(),t.maxFunctionDefs=i.parseUShort(),t.maxInstructionDefs=i.parseUShort(),t.maxStackElements=i.parseUShort(),t.maxSizeOfInstructions=i.parseUShort(),t.maxComponentElements=i.parseUShort(),t.maxComponentDepth=i.parseUShort()),t}function P_(n){return new J.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:n}])}var Kh={parse:D_,make:P_},qo=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function U_(n){for(let e=0;e<qo.length;e+=1){const t=qo[e];if(n>=t.begin&&n<t.end)return e}return-1}function I_(n,e){const t={},i=new oe.Parser(n,e);t.version=i.parseUShort(),t.xAvgCharWidth=i.parseShort(),t.usWeightClass=i.parseUShort(),t.usWidthClass=i.parseUShort(),t.fsType=i.parseUShort(),t.ySubscriptXSize=i.parseShort(),t.ySubscriptYSize=i.parseShort(),t.ySubscriptXOffset=i.parseShort(),t.ySubscriptYOffset=i.parseShort(),t.ySuperscriptXSize=i.parseShort(),t.ySuperscriptYSize=i.parseShort(),t.ySuperscriptXOffset=i.parseShort(),t.ySuperscriptYOffset=i.parseShort(),t.yStrikeoutSize=i.parseShort(),t.yStrikeoutPosition=i.parseShort(),t.sFamilyClass=i.parseShort(),t.panose=[];for(let s=0;s<10;s++)t.panose[s]=i.parseByte();return t.ulUnicodeRange1=i.parseULong(),t.ulUnicodeRange2=i.parseULong(),t.ulUnicodeRange3=i.parseULong(),t.ulUnicodeRange4=i.parseULong(),t.achVendID=String.fromCharCode(i.parseByte(),i.parseByte(),i.parseByte(),i.parseByte()),t.fsSelection=i.parseUShort(),t.usFirstCharIndex=i.parseUShort(),t.usLastCharIndex=i.parseUShort(),t.sTypoAscender=i.parseShort(),t.sTypoDescender=i.parseShort(),t.sTypoLineGap=i.parseShort(),t.usWinAscent=i.parseUShort(),t.usWinDescent=i.parseUShort(),t.version>=1&&(t.ulCodePageRange1=i.parseULong(),t.ulCodePageRange2=i.parseULong()),t.version>=2&&(t.sxHeight=i.parseShort(),t.sCapHeight=i.parseShort(),t.usDefaultChar=i.parseUShort(),t.usBreakChar=i.parseUShort(),t.usMaxContent=i.parseUShort()),t}function O_(n){return new J.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],n)}var Yo={parse:I_,make:O_,unicodeRanges:qo,getUnicodeRange:U_};function F_(n,e){const t={},i=new oe.Parser(n,e);switch(t.version=i.parseVersion(),t.italicAngle=i.parseFixed(),t.underlinePosition=i.parseShort(),t.underlineThickness=i.parseShort(),t.isFixedPitch=i.parseULong(),t.minMemType42=i.parseULong(),t.maxMemType42=i.parseULong(),t.minMemType1=i.parseULong(),t.maxMemType1=i.parseULong(),t.version){case 1:t.names=mi.slice();break;case 2:t.numberOfGlyphs=i.parseUShort(),t.glyphNameIndex=new Array(t.numberOfGlyphs);for(let s=0;s<t.numberOfGlyphs;s++)t.glyphNameIndex[s]=i.parseUShort();t.names=[];for(let s=0;s<t.numberOfGlyphs;s++)if(t.glyphNameIndex[s]>=mi.length){const r=i.parseChar();t.names.push(i.parseString(r))}break;case 2.5:t.numberOfGlyphs=i.parseUShort(),t.offset=new Array(t.numberOfGlyphs);for(let s=0;s<t.numberOfGlyphs;s++)t.offset[s]=i.parseChar();break}return t}function N_(n){const{italicAngle:e=Math.round((n.italicAngle||0)*65536),underlinePosition:t=0,underlineThickness:i=0,isFixedPitch:s=0,minMemType42:r=0,maxMemType42:a=0,minMemType1:o=0,maxMemType1:l=0}=n.tables.post||{};return new J.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:e},{name:"underlinePosition",type:"FWORD",value:t},{name:"underlineThickness",type:"FWORD",value:i},{name:"isFixedPitch",type:"ULONG",value:s},{name:"minMemType42",type:"ULONG",value:r},{name:"maxMemType42",type:"ULONG",value:a},{name:"minMemType1",type:"ULONG",value:o},{name:"maxMemType1",type:"ULONG",value:l}])}var Jh={parse:F_,make:N_},on=new Array(9);on[1]=function(){const e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(P.coverage),deltaGlyphId:this.parseShort()};if(t===2)return{substFormat:2,coverage:this.parsePointer(P.coverage),substitute:this.parseOffset16List()};Se.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")};on[2]=function(){const e=this.parseUShort();return Se.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(P.coverage),sequences:this.parseListOfLists()}};on[3]=function(){const e=this.parseUShort();return Se.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(P.coverage),alternateSets:this.parseListOfLists()}};on[4]=function(){const e=this.parseUShort();return Se.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(P.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var Zi={sequenceIndex:P.uShort,lookupListIndex:P.uShort};on[5]=function(){const e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:t,coverage:this.parsePointer(P.coverage),ruleSets:this.parseListOfLists(function(){const i=this.parseUShort(),s=this.parseUShort();return{input:this.parseUShortList(i-1),lookupRecords:this.parseRecordList(s,Zi)}})};if(t===2)return{substFormat:t,coverage:this.parsePointer(P.coverage),classDef:this.parsePointer(P.classDef),classSets:this.parseListOfLists(function(){const i=this.parseUShort(),s=this.parseUShort();return{classes:this.parseUShortList(i-1),lookupRecords:this.parseRecordList(s,Zi)}})};if(t===3){const i=this.parseUShort(),s=this.parseUShort();return{substFormat:t,coverages:this.parseList(i,P.pointer(P.coverage)),lookupRecords:this.parseRecordList(s,Zi)}}Se.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};on[6]=function(){const e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(P.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Zi)}})};if(t===2)return{substFormat:2,coverage:this.parsePointer(P.coverage),backtrackClassDef:this.parsePointer(P.classDef),inputClassDef:this.parsePointer(P.classDef),lookaheadClassDef:this.parsePointer(P.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Zi)}})};if(t===3)return{substFormat:3,backtrackCoverage:this.parseList(P.pointer(P.coverage)),inputCoverage:this.parseList(P.pointer(P.coverage)),lookaheadCoverage:this.parseList(P.pointer(P.coverage)),lookupRecords:this.parseRecordList(Zi)};Se.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};on[7]=function(){const e=this.parseUShort();Se.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");const t=this.parseUShort(),i=new P(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:on[t].call(i)}};on[8]=function(){const e=this.parseUShort();return Se.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(P.coverage),backtrackCoverage:this.parseList(P.pointer(P.coverage)),lookaheadCoverage:this.parseList(P.pointer(P.coverage)),substitutes:this.parseUShortList()}};function k_(n,e){e=e||0;const t=new P(n,e),i=t.parseVersion(1);return Se.argument(i===1||i===1.1,"Unsupported GSUB table version."),i===1?{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(on)}:{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(on),variations:t.parseFeatureVariationsList()}}var Ti=new Array(9);Ti[1]=function(e){if(e.substFormat===1)return new J.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new J.Coverage(e.coverage)},{name:"deltaGlyphID",type:"SHORT",value:e.deltaGlyphId}]);if(e.substFormat===2)return new J.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new J.Coverage(e.coverage)}].concat(J.ushortList("substitute",e.substitute)));Se.fail("Lookup type 1 substFormat must be 1 or 2.")};Ti[2]=function(e){return Se.assert(e.substFormat===1,"Lookup type 2 substFormat must be 1."),new J.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new J.Coverage(e.coverage)}].concat(J.tableList("seqSet",e.sequences,function(t){return new J.Table("sequenceSetTable",J.ushortList("sequence",t))})))};Ti[3]=function(e){return Se.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new J.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new J.Coverage(e.coverage)}].concat(J.tableList("altSet",e.alternateSets,function(t){return new J.Table("alternateSetTable",J.ushortList("alternate",t))})))};Ti[4]=function(e){return Se.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new J.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new J.Coverage(e.coverage)}].concat(J.tableList("ligSet",e.ligatureSets,function(t){return new J.Table("ligatureSetTable",J.tableList("ligature",t,function(i){return new J.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:i.ligGlyph}].concat(J.ushortList("component",i.components,i.components.length+1)))}))})))};Ti[5]=function(e){if(e.substFormat===1)return new J.Table("contextualSubstitutionTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new J.Coverage(e.coverage)}].concat(J.tableList("sequenceRuleSet",e.ruleSets,function(t){return t?new J.Table("sequenceRuleSetTable",J.tableList("sequenceRule",t,function(i){let s=J.ushortList("seqLookup",[],i.lookupRecords.length).concat(J.ushortList("inputSequence",i.input,i.input.length+1));[s[0],s[1]]=[s[1],s[0]];for(let r=0;r<i.lookupRecords.length;r++){const a=i.lookupRecords[r];s=s.concat({name:"sequenceIndex"+r,type:"USHORT",value:a.sequenceIndex}).concat({name:"lookupListIndex"+r,type:"USHORT",value:a.lookupListIndex})}return new J.Table("sequenceRuleTable",s)})):new J.Table("NULL",null)})));if(e.substFormat===2)return new J.Table("contextualSubstitutionTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new J.Coverage(e.coverage)},{name:"classDef",type:"TABLE",value:new J.ClassDef(e.classDef)}].concat(J.tableList("classSeqRuleSet",e.classSets,function(t){return t?new J.Table("classSeqRuleSetTable",J.tableList("classSeqRule",t,function(i){let s=J.ushortList("classes",i.classes,i.classes.length+1).concat(J.ushortList("seqLookupCount",[],i.lookupRecords.length));for(let r=0;r<i.lookupRecords.length;r++){const a=i.lookupRecords[r];s=s.concat({name:"sequenceIndex"+r,type:"USHORT",value:a.sequenceIndex}).concat({name:"lookupListIndex"+r,type:"USHORT",value:a.lookupListIndex})}return new J.Table("classSeqRuleTable",s)})):new J.Table("NULL",null)})));if(e.substFormat===3){let t=[{name:"substFormat",type:"USHORT",value:e.substFormat}];t.push({name:"inputGlyphCount",type:"USHORT",value:e.coverages.length}),t.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length});for(let s=0;s<e.coverages.length;s++){const r=e.coverages[s];t.push({name:"inputCoverage"+s,type:"TABLE",value:new J.Coverage(r)})}for(let s=0;s<e.lookupRecords.length;s++){const r=e.lookupRecords[s];t=t.concat({name:"sequenceIndex"+s,type:"USHORT",value:r.sequenceIndex}).concat({name:"lookupListIndex"+s,type:"USHORT",value:r.lookupListIndex})}return new J.Table("contextualSubstitutionTable",t)}Se.assert(!1,"lookup type 5 format must be 1, 2 or 3.")};Ti[6]=function(e){if(e.substFormat===1)return new J.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new J.Coverage(e.coverage)}].concat(J.tableList("chainRuleSet",e.chainRuleSets,function(i){return new J.Table("chainRuleSetTable",J.tableList("chainRule",i,function(s){let r=J.ushortList("backtrackGlyph",s.backtrack,s.backtrack.length).concat(J.ushortList("inputGlyph",s.input,s.input.length+1)).concat(J.ushortList("lookaheadGlyph",s.lookahead,s.lookahead.length)).concat(J.ushortList("substitution",[],s.lookupRecords.length));for(let a=0;a<s.lookupRecords.length;a++){const o=s.lookupRecords[a];r=r.concat({name:"sequenceIndex"+a,type:"USHORT",value:o.sequenceIndex}).concat({name:"lookupListIndex"+a,type:"USHORT",value:o.lookupListIndex})}return new J.Table("chainRuleTable",r)}))})));if(e.substFormat===2)Se.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(e.substFormat===3){let t=[{name:"substFormat",type:"USHORT",value:e.substFormat}];t.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length});for(let s=0;s<e.backtrackCoverage.length;s++){const r=e.backtrackCoverage[s];t.push({name:"backtrackCoverage"+s,type:"TABLE",value:new J.Coverage(r)})}t.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length});for(let s=0;s<e.inputCoverage.length;s++){const r=e.inputCoverage[s];t.push({name:"inputCoverage"+s,type:"TABLE",value:new J.Coverage(r)})}t.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length});for(let s=0;s<e.lookaheadCoverage.length;s++){const r=e.lookaheadCoverage[s];t.push({name:"lookaheadCoverage"+s,type:"TABLE",value:new J.Coverage(r)})}t.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length});for(let s=0;s<e.lookupRecords.length;s++){const r=e.lookupRecords[s];t=t.concat({name:"sequenceIndex"+s,type:"USHORT",value:r.sequenceIndex}).concat({name:"lookupListIndex"+s,type:"USHORT",value:r.lookupListIndex})}return new J.Table("chainContextTable",t)}Se.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function B_(n){return new J.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new J.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new J.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new J.LookupList(n.lookups,Ti)}])}var Qh={parse:k_,make:B_};function z_(n,e){const t=new oe.Parser(n,e),i=t.parseULong();Se.argument(i===1,"Unsupported META table version."),t.parseULong(),t.parseULong();const s=t.parseULong(),r={};for(let a=0;a<s;a++){const o=t.parseTag(),l=t.parseULong(),c=t.parseULong();if(o==="appl"||o==="bild")continue;const u=ss.UTF8(n,e+l,c);r[o]=u}return r}function H_(n){const e=Object.keys(n).length;let t="";const i=16+e*12,s=new J.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:i},{name:"numTags",type:"ULONG",value:e}]);for(let r in n){const a=t.length;t+=n[r],s.fields.push({name:"tag "+r,type:"TAG",value:r}),s.fields.push({name:"offset "+r,type:"ULONG",value:i+a}),s.fields.push({name:"length "+r,type:"ULONG",value:n[r].length})}return s.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),s}var ef={parse:z_,make:H_};function G_(n,e){const t=new P(n,e),i=t.parseUShort();i!==0&&console.warn("Only COLRv0 is currently fully supported. A subset of color glyphs might be available in this font if provided in the v0 format.");const s=t.parseUShort(),r=t.parseOffset32(),a=t.parseOffset32(),o=t.parseUShort();t.relativeOffset=r;const l=t.parseRecordList(s,{glyphID:P.uShort,firstLayerIndex:P.uShort,numLayers:P.uShort});t.relativeOffset=a;const c=t.parseRecordList(o,{glyphID:P.uShort,paletteIndex:P.uShort});return{version:i,baseGlyphRecords:l,layerRecords:c}}function V_({version:n=0,baseGlyphRecords:e=[],layerRecords:t=[]}){Se.argument(n===0,"Only COLRv0 supported.");const i=14,s=i+e.length*6;return new J.Table("COLR",[{name:"version",type:"USHORT",value:n},{name:"numBaseGlyphRecords",type:"USHORT",value:e.length},{name:"baseGlyphRecordsOffset",type:"ULONG",value:i},{name:"layerRecordsOffset",type:"ULONG",value:s},{name:"numLayerRecords",type:"USHORT",value:t.length},...e.map((r,a)=>[{name:"glyphID_"+a,type:"USHORT",value:r.glyphID},{name:"firstLayerIndex_"+a,type:"USHORT",value:r.firstLayerIndex},{name:"numLayers_"+a,type:"USHORT",value:r.numLayers}]).flat(),...t.map((r,a)=>[{name:"LayerGlyphID_"+a,type:"USHORT",value:r.glyphID},{name:"paletteIndex_"+a,type:"USHORT",value:r.paletteIndex}]).flat()])}var tf={parse:G_,make:V_};function W_(n,e){return[{name:"tag_"+n,type:"TAG",value:e.tag},{name:"minValue_"+n,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+n,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+n,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+n,type:"USHORT",value:0},{name:"nameID_"+n,type:"USHORT",value:e.axisNameID}]}function X_(n,e,t){const i={},s=new oe.Parser(n,e);i.tag=s.parseTag(),i.minValue=s.parseFixed(),i.defaultValue=s.parseFixed(),i.maxValue=s.parseFixed(),s.skip("uShort",1);const r=s.parseUShort();return i.axisNameID=r,i.name=Xr(t,r),i}function q_(n,e,t,i={}){const s=[{name:"nameID_"+n,type:"USHORT",value:e.subfamilyNameID},{name:"flags_"+n,type:"USHORT",value:0}];for(let r=0;r<t.length;++r){const a=t[r].tag;s.push({name:"axis_"+n+" "+a,type:"FIXED",value:e.coordinates[a]<<16})}return i&&i.postScriptNameID&&s.push({name:"postScriptNameID_",type:"USHORT",value:e.postScriptNameID!==void 0?e.postScriptNameID:65535}),s}function Y_(n,e,t,i,s){const r={},a=new oe.Parser(n,e),o=a.parseUShort();r.subfamilyNameID=o,r.name=Xr(i,o,[2,17]),a.skip("uShort",1),r.coordinates={};for(let c=0;c<t.length;++c)r.coordinates[t[c].tag]=a.parseFixed();if(a.relativeOffset===s)return r.postScriptNameID=void 0,r.postScriptName=void 0,r;const l=a.parseUShort();return r.postScriptNameID=l==65535?void 0:l,r.postScriptName=r.postScriptNameID!==void 0?Xr(i,l,[6]):"",r}function j_(n,e){const t=new J.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:n.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:n.instances.length},{name:"instanceSize",type:"USHORT",value:4+n.axes.length*4}]);t.offsetToData=t.sizeOf();for(let s=0;s<n.axes.length;s++)t.fields=t.fields.concat(W_(s,n.axes[s]));const i={};for(let s=0;s<n.instances.length;s++)if(n.instances[s].postScriptNameID!==void 0){t.instanceSize+=2,i.postScriptNameID=!0;break}for(let s=0;s<n.instances.length;s++)t.fields=t.fields.concat(q_(s,n.instances[s],n.axes,i));return t}function $_(n,e,t){const i=new oe.Parser(n,e),s=i.parseULong();Se.argument(s===65536,"Unsupported fvar table version.");const r=i.parseOffset16();i.skip("uShort",1);const a=i.parseUShort(),o=i.parseUShort(),l=i.parseUShort(),c=i.parseUShort(),u=[];for(let d=0;d<a;d++)u.push(X_(n,e+r+d*o,t));const h=[],f=e+r+a*o;for(let d=0;d<l;d++)h.push(Y_(n,f+d*c,u,t,c));return{axes:u,instances:h}}var nf={make:j_,parse:$_},Z_={tag:P.tag,nameID:P.uShort,ordering:P.uShort},Is=new Array(5);Is[1]=function(){return{axisIndex:this.parseUShort(),flags:this.parseUShort(),valueNameID:this.parseUShort(),value:this.parseFixed()}};Is[2]=function(){return{axisIndex:this.parseUShort(),flags:this.parseUShort(),valueNameID:this.parseUShort(),nominalValue:this.parseFixed(),rangeMinValue:this.parseFixed(),rangeMaxValue:this.parseFixed()}};Is[3]=function(){return{axisIndex:this.parseUShort(),flags:this.parseUShort(),valueNameID:this.parseUShort(),value:this.parseFixed(),linkedValue:this.parseFixed()}};Is[4]=function(){const e=this.parseUShort();return{flags:this.parseUShort(),valueNameID:this.parseUShort(),axisValues:this.parseList(e,function(){return{axisIndex:this.parseUShort(),value:this.parseFixed()}})}};function K_(){const n=this.parseUShort(),e=Is[n],t={format:n};return e===void 0?(console.warn(`Unknown axis value table format ${n}`),t):Object.assign(t,this.parseStruct(e.bind(this)))}function J_(n,e,t){e||(e=0);const i=new oe.Parser(n,e),s=i.parseUShort(),r=i.parseUShort();s!==1&&console.warn(`Unsupported STAT table version ${s}.${r}`);const a=[s,r],o=i.parseUShort(),l=i.parseUShort(),c=i.parseOffset32(),u=i.parseUShort(),h=i.parseOffset32(),f=s>1||r>0?i.parseUShort():void 0;t!==void 0&&Se.argument(l>=t.axes.length,"STAT axis count must be greater than or equal to fvar axis count"),u>0&&Se.argument(l>=0,"STAT axis count must be greater than 0 if STAT axis value count is greater than 0");const d=[];for(let g=0;g<l;g++)i.offset=e+c,i.relativeOffset=g*o,d.push(i.parseStruct(Z_));i.offset=e,i.relativeOffset=h;const p=i.parseUShortList(u),v=[];for(let g=0;g<u;g++)i.offset=e+h,i.relativeOffset=p[g],v.push(K_.apply(i));return{version:a,axes:d,values:v,elidedFallbackNameID:f}}var Os=new Array(5);Os[1]=function(e,t){return[{name:`format${e}`,type:"USHORT",value:1},{name:`axisIndex${e}`,type:"USHORT",value:t.axisIndex},{name:`flags${e}`,type:"USHORT",value:t.flags},{name:`valueNameID${e}`,type:"USHORT",value:t.valueNameID},{name:`value${e}`,type:"FLOAT",value:t.value}]};Os[2]=function(e,t){return[{name:`format${e}`,type:"USHORT",value:2},{name:`axisIndex${e}`,type:"USHORT",value:t.axisIndex},{name:`flags${e}`,type:"USHORT",value:t.flags},{name:`valueNameID${e}`,type:"USHORT",value:t.valueNameID},{name:`nominalValue${e}`,type:"FLOAT",value:t.nominalValue},{name:`rangeMinValue${e}`,type:"FLOAT",value:t.rangeMinValue},{name:`rangeMaxValue${e}`,type:"FLOAT",value:t.rangeMaxValue}]};Os[3]=function(e,t){return[{name:`format${e}`,type:"USHORT",value:3},{name:`axisIndex${e}`,type:"USHORT",value:t.axisIndex},{name:`flags${e}`,type:"USHORT",value:t.flags},{name:`valueNameID${e}`,type:"USHORT",value:t.valueNameID},{name:`value${e}`,type:"FLOAT",value:t.value},{name:`linkedValue${e}`,type:"FLOAT",value:t.linkedValue}]};Os[4]=function(e,t){let i=[{name:`format${e}`,type:"USHORT",value:4},{name:`axisCount${e}`,type:"USHORT",value:t.axisValues.length},{name:`flags${e}`,type:"USHORT",value:t.flags},{name:`valueNameID${e}`,type:"USHORT",value:t.valueNameID}];for(let s=0;s<t.axisValues.length;s++)i=i.concat([{name:`format${e}axisIndex${s}`,type:"USHORT",value:t.axisValues[s].axisIndex},{name:`format${e}value${s}`,type:"FLOAT",value:t.axisValues[s].value}]);return i};function Q_(n,e){return new J.Record("axisRecord_"+n,[{name:"axisTag_"+n,type:"TAG",value:e.tag},{name:"axisNameID_"+n,type:"USHORT",value:e.nameID},{name:"axisOrdering_"+n,type:"USHORT",value:e.ordering}])}function ey(n,e){const t=e.format,i=Os[t];Se.argument(i!==void 0,`Unknown axis value table format ${t}`);const s=i(n,e);return new J.Table("axisValueTable_"+n,s)}function ty(n){const e=new J.Table("STAT",[{name:"majorVersion",type:"USHORT",value:1},{name:"minorVersion",type:"USHORT",value:2},{name:"designAxisSize",type:"USHORT",value:8},{name:"designAxisCount",type:"USHORT",value:n.axes.length},{name:"designAxesOffset",type:"ULONG",value:0},{name:"axisValueCount",type:"USHORT",value:n.values.length},{name:"offsetToAxisValueOffsets",type:"ULONG",value:0},{name:"elidedFallbackNameID",type:"USHORT",value:n.elidedFallbackNameID}]);e.designAxesOffset=e.offsetToAxisValueOffsets=e.sizeOf();for(let r=0;r<n.axes.length;r++){const a=Q_(r,n.axes[r]);e.offsetToAxisValueOffsets+=a.sizeOf(),e.fields=e.fields.concat(a.fields)}const t=[];let i=[],s=n.values.length*2;for(let r=0;r<n.values.length;r++){const a=ey(r,n.values[r]);t.push({name:"offset_"+r,type:"USHORT",value:s}),s+=a.sizeOf(),i=i.concat(a.fields)}return e.fields=e.fields.concat(t),e.fields=e.fields.concat(i),e}var sf={make:ty,parse:J_};function ny(n,e){return new J.Record("axisValueMap_"+n,[{name:"fromCoordinate_"+n,type:"F2DOT14",value:e.fromCoordinate},{name:"toCoordinate_"+n,type:"F2DOT14",value:e.toCoordinate}])}function iy(n,e){const t=new J.Record("segmentMap_"+n,[{name:"positionMapCount_"+n,type:"USHORT",value:e.axisValueMaps.length}]);let i=[];for(let s=0;s<e.axisValueMaps.length;s++){const r=ny(`${n}_${s}`,e.axisValueMaps[s]);i=i.concat(r.fields)}return t.fields=t.fields.concat(i),t}function sy(n,e){Se.argument(n.axisSegmentMaps.length===e.axes.length,"avar axis count must correspond to fvar axis count");const t=new J.Table("avar",[{name:"majorVersion",type:"USHORT",value:1},{name:"minorVersion",type:"USHORT",value:0},{name:"reserved",type:"USHORT",value:0},{name:"axisCount",type:"USHORT",value:n.axisSegmentMaps.length}]);for(let i=0;i<n.axisSegmentMaps.length;i++){const s=iy(i,n.axisSegmentMaps[i]);t.fields=t.fields.concat(s.fields)}return t}function ry(n,e,t){e||(e=0);const i=new P(n,e),s=i.parseUShort(),r=i.parseUShort();s!==1&&console.warn(`Unsupported avar table version ${s}.${r}`),i.skip("uShort",1);const a=i.parseUShort();Se.argument(a===t.axes.length,"avar axis count must correspond to fvar axis count");const o=[];for(let l=0;l<a;l++){const c=[],u=i.parseUShort();for(let h=0;h<u;h++){const f=i.parseF2Dot14(),d=i.parseF2Dot14();c.push({fromCoordinate:f,toCoordinate:d})}o.push({axisValueMaps:c})}return{version:[s,r],axisSegmentMaps:o}}var rf={make:sy,parse:ry};function ay(n,e,t,i){const s=new oe.Parser(n,e),r=s.parseTupleVariationStore(s.relativeOffset,t.axes.length,"cvar",i),a=s.parseUShort(),o=s.parseUShort();return a!==1&&console.warn(`Unsupported cvar table version ${a}.${o}`),{version:[a,o],...r}}function oy(){console.warn("Writing of cvar tables is not yet supported.")}var af={make:oy,parse:ay};function ly(n,e,t,i){const s=new oe.Parser(n,e),r=s.parseUShort(),a=s.parseUShort();r!==1&&console.warn(`Unsupported gvar table version ${r}.${a}`);const o=s.parseUShort();o!==t.axes.length&&console.warn(`axisCount ${o} in gvar table does not match the number of axes ${t.axes.length} in the fvar table!`);const l=s.parseUShort(),c=s.parsePointer32(function(){return this.parseTupleRecords(l,o)}),u=s.parseTupleVariationStoreList(o,"gvar",i);return{version:[r,a],sharedTuples:c,glyphVariations:u}}function cy(){console.warn("Writing of gvar tables is not yet supported.")}var of={make:cy,parse:ly};function uy(n,e){const t={},i=new oe.Parser(n,e);t.version=i.parseUShort(),Se.argument(t.version<=1,"Unsupported gasp table version."),t.numRanges=i.parseUShort(),t.gaspRanges=[];for(let s=0;s<t.numRanges;s++)t.gaspRanges[s]={rangeMaxPPEM:i.parseUShort(),rangeGaspBehavior:i.parseUShort()};return t}function hy(n){const e=new J.Table("gasp",[{name:"version",type:"USHORT",value:1},{name:"numRanges",type:"USHORT",value:n.numRanges}]);for(let t in n.gaspRanges)e.fields.push({name:"rangeMaxPPEM",type:"USHORT",value:n.gaspRanges[t].rangeMaxPPEM}),e.fields.push({name:"rangeGaspBehavior",type:"USHORT",value:n.gaspRanges[t].rangeGaspBehavior});return e}var lf={parse:uy,make:hy};function fy(n,e){const t=new Map,i=n.buffer,s=new P(n,e);if(s.parseUShort()!==0)return t;s.relativeOffset=s.parseOffset32();const a=n.byteOffset+e+s.relativeOffset,o=s.parseUShort(),l=new Map;for(let c=0;c<o;c++){const u=s.parseUShort(),h=s.parseUShort(),f=a+s.parseOffset32(),d=s.parseULong();let p=l.get(f);p===void 0&&(p=new Uint8Array(i,f,d),l.set(f,p));for(let v=u;v<=h;v++)t.set(v,p)}return t}function dy(n){const e=Array.from(n.keys()).sort(),t=[],i=[],s=new Map;let r=0,a={endGlyphID:null};for(let f=0,d=e.length;f<d;f++){const p=e[f],v=n.get(p);let g=s.get(v);g===void 0&&(g=r,i.push(v),s.set(v,g),r+=v.byteLength),p-1===a.endGlyphID&&g===a.svgDocOffset?a.endGlyphID=p:(a={startGlyphID:p,endGlyphID:p,svgDocOffset:g,svgDocLength:v.byteLength},t.push(a))}const o=t.length,l=i.length,c=2+o*12,u=new Array(4+o*4+l);let h=0;u[h++]={name:"version",type:"USHORT",value:0},u[h++]={name:"svgDocumentListOffset",type:"ULONG",value:10},u[h++]={name:"reserved",type:"ULONG",value:0},u[h++]={name:"numEntries",type:"USHORT",value:o};for(let f=0;f<o;f++){const d="documentRecord_"+f,{startGlyphID:p,endGlyphID:v,svgDocOffset:g,svgDocLength:m}=t[f];u[h++]={name:d+"_startGlyphID",type:"USHORT",value:p},u[h++]={name:d+"_endGlyphID",type:"USHORT",value:v},u[h++]={name:d+"_svgDocOffset",type:"ULONG",value:c+g},u[h++]={name:d+"_svgDocLength",type:"ULONG",value:m}}for(let f=0;f<l;f++)u[h++]={name:"svgDoc_"+f,type:"LITERAL",value:i[f]};return new J.Table("SVG ",u)}var cf={make:dy,parse:fy};function ru(n){return Math.log(n)/Math.log(2)|0}function yl(n){for(;n.length%4!==0;)n.push(0);let e=0;for(let t=0;t<n.length;t+=4)e+=(n[t]<<24)+(n[t+1]<<16)+(n[t+2]<<8)+n[t+3];return e%=Math.pow(2,32),e}function au(n,e,t,i){return new J.Record("Table Record",[{name:"tag",type:"TAG",value:n!==void 0?n:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:t!==void 0?t:0},{name:"length",type:"ULONG",value:i!==void 0?i:0}])}function uf(n){const e=new J.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=n,e.numTables=n.length;const t=Math.pow(2,ru(e.numTables));e.searchRange=16*t,e.entrySelector=ru(t),e.rangeShift=e.numTables*16-e.searchRange;const i=[],s=[];let r=e.sizeOf()+au().sizeOf()*e.numTables;for(;r%4!==0;)r+=1,s.push({name:"padding",type:"BYTE",value:0});for(let a=0;a<n.length;a+=1){const o=n[a];Se.argument(o.tableName.length===4,"Table name"+o.tableName+" is invalid.");const l=o.sizeOf(),c=au(o.tableName,yl(o.encode()),r,l);for(i.push({name:c.tag+" Table Record",type:"RECORD",value:c}),s.push({name:o.tableName+" table",type:"RECORD",value:o}),r+=l,Se.argument(!isNaN(r),"Something went wrong calculating the offset.");r%4!==0;)r+=1,s.push({name:"padding",type:"BYTE",value:0})}return i.sort(function(a,o){return a.value.tag>o.value.tag?1:-1}),e.fields=e.fields.concat(i),e.fields=e.fields.concat(s),e}function ou(n,e,t){for(let i=0;i<e.length;i+=1){const s=n.charToGlyphIndex(e[i]);if(s>0)return n.glyphs.get(s).getMetrics()}return t}function py(n){let e=0;for(let t=0;t<n.length;t+=1)e+=n[t];return e/n.length}function my(n){const e=[],t=[],i=[],s=[],r=[],a=[],o=[];let l,c=0,u=0,h=0,f=0,d=0;for(let le=0;le<n.glyphs.length;le+=1){const Ee=n.glyphs.get(le),Pe=Ee.unicode|0;if(isNaN(Ee.advanceWidth))throw new Error("Glyph "+Ee.name+" ("+le+"): advanceWidth is not a number.");(l>Pe||l===void 0)&&Pe>0&&(l=Pe),c<Pe&&(c=Pe);const Ye=Yo.getUnicodeRange(Pe);if(Ye<32)u|=1<<Ye;else if(Ye<64)h|=1<<Ye-32;else if(Ye<96)f|=1<<Ye-64;else if(Ye<123)d|=1<<Ye-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(Ee.name===".notdef")continue;const Ne=Ee.getMetrics();e.push(Ne.xMin),t.push(Ne.yMin),i.push(Ne.xMax),s.push(Ne.yMax),a.push(Ne.leftSideBearing),o.push(Ne.rightSideBearing),r.push(Ee.advanceWidth)}const p={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,i),yMax:Math.max.apply(null,s),advanceWidthMax:Math.max.apply(null,r),advanceWidthAvg:py(r),minLeftSideBearing:Math.min.apply(null,a),maxLeftSideBearing:Math.max.apply(null,a),minRightSideBearing:Math.min.apply(null,o)};p.ascender=n.ascender,p.descender=n.descender;let v=0;n.weightClass>=600&&(v|=n.macStyleValues.BOLD),n.italicAngle<0&&(v|=n.macStyleValues.ITALIC);const g=Yh.make({flags:3,unitsPerEm:n.unitsPerEm,xMin:p.xMin,yMin:p.yMin,xMax:p.xMax,yMax:p.yMax,lowestRecPPEM:3,macStyle:v,createdTimestamp:n.createdTimestamp}),m=jh.make({ascender:p.ascender,descender:p.descender,advanceWidthMax:p.advanceWidthMax,minLeftSideBearing:p.minLeftSideBearing,minRightSideBearing:p.minRightSideBearing,xMaxExtent:p.maxLeftSideBearing+(p.xMax-p.xMin),numberOfHMetrics:n.glyphs.length}),M=Kh.make(n.glyphs.length),b=Yo.make(Object.assign({xAvgCharWidth:Math.round(p.advanceWidthAvg),usFirstCharIndex:l,usLastCharIndex:c,ulUnicodeRange1:u,ulUnicodeRange2:h,ulUnicodeRange3:f,ulUnicodeRange4:d,sTypoAscender:p.ascender,sTypoDescender:p.descender,sTypoLineGap:0,usWinAscent:p.yMax,usWinDescent:Math.abs(p.yMin),ulCodePageRange1:1,sxHeight:ou(n,"xyvw",{yMax:Math.round(p.ascender/2)}).yMax,sCapHeight:ou(n,"HIKLEFJMNTZBDPRAGOQSUVWXY",p).yMax,usDefaultChar:n.hasChar(" ")?32:0,usBreakChar:n.hasChar(" ")?32:0},n.tables.os2)),S=$h.make(n.glyphs),N=Ih.make(n.glyphs),A=n.getEnglishName("fontFamily"),C=n.getEnglishName("fontSubfamily"),I=A+" "+C;let T=n.getEnglishName("postScriptName");T||(T=A.replace(/\s/g,"")+"-"+C);const _={};for(let le in n.names)_[le]=n.names[le];_.unicode=_.unicode||{},_.macintosh=_.macintosh||{},_.windows=_.windows||{};const w=n.names.unicode||{},X=n.names.macintosh||{},R=n.names.windows||{};for(const le in _){if(_[le]=_[le]||{},!_[le].uniqueID){const Ee=n.getEnglishName("manufacturer")||"";_[le].uniqueID={en:`${Ee}: ${I}`}}_[le].postScriptName||(_[le].postScriptName={en:T})}_.unicode.preferredFamily||(_.unicode.preferredFamily=w.fontFamily||X.fontFamily||R.fontFamily),_.macintosh.preferredFamily||(_.macintosh.preferredFamily=X.fontFamily||w.fontFamily||R.fontFamily),_.windows.preferredFamily||(_.windows.preferredFamily=R.fontFamily||w.fontFamily||X.fontFamily),_.unicode.preferredSubfamily||(_.unicode.preferredSubfamily=w.fontSubfamily||X.fontSubfamily||R.fontSubfamily),_.macintosh.preferredSubfamily||(_.macintosh.preferredSubfamily=X.fontSubfamily||w.fontSubfamily||R.fontSubfamily),_.windows.preferredSubfamily||(_.windows.preferredSubfamily=R.fontSubfamily||w.fontSubfamily||X.fontSubfamily);const U=[],B=Uh.make(_,U),V=U.length>0?Zh.make(U):void 0,te=Jh.make(n),W=Xo.make(n.glyphs,{version:n.getEnglishName("version"),fullName:I,familyName:A,weightName:C,postScriptName:T,unitsPerEm:n.unitsPerEm,fontBBox:[0,p.yMin,p.ascender,p.advanceWidthMax],topDict:n.tables.cff&&n.tables.cff.topDict||{}}),re=n.metas&&Object.keys(n.metas).length>0?ef.make(n.metas):void 0,ae=[g,m,M,b,B,N,te,W,S];V&&ae.push(V);const me={gsub:Qh,cpal:zh,colr:tf,stat:sf,avar:rf,cvar:af,fvar:nf,gvar:of,gasp:lf,svg:cf},De={avar:[n.tables.fvar],fvar:[n.names]};for(let le in me){const Ee=n.tables[le];if(Ee){const Pe=me[le].make.call(n,Ee,...De[le]||[]);Pe&&ae.push(Pe)}}re&&ae.push(re);const Oe=uf(ae),Y=Oe.encode(),K=yl(Y),ue=Oe.fields;let ee=!1;for(let le=0;le<ue.length;le+=1)if(ue[le].name==="head table"){ue[le].value.checkSumAdjustment=2981146554-K,ee=!0;break}if(!ee)throw new Error("Could not find head table with checkSum to adjust.");return Oe}var gy={make:uf,fontToTable:my,computeCheckSum:yl};function Ha(n,e){let t=0,i=n.length-1;for(;t<=i;){const s=t+i>>>1,r=n[s].tag;if(r===e)return s;r<e?t=s+1:i=s-1}return-t-1}function lu(n,e){let t=0,i=n.length-1;for(;t<=i;){const s=t+i>>>1,r=n[s];if(r===e)return s;r<e?t=s+1:i=s-1}return-t-1}function cu(n,e){let t,i=0,s=n.length-1;for(;i<=s;){const r=i+s>>>1;t=n[r];const a=t.start;if(a===e)return t;a<e?i=r+1:s=r-1}if(i>0)return t=n[i-1],e>t.end?0:t}function hf(n,e){this.font=n,this.tableName=e}hf.prototype={searchTag:Ha,binSearch:lu,getTable:function(n){let e=this.font.tables[this.tableName];return!e&&n&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){let n=this.getTable();return n?n.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){let n=this.getTable();if(!n)return;let e=!1;for(let t=0;t<n.scripts.length;t++){const i=n.scripts[t].tag;if(i==="DFLT")return i;i==="latn"&&(e=!0)}if(e)return"latn"},getScriptTable:function(n,e){const t=this.getTable(e);if(t){n=n||"DFLT";const i=t.scripts,s=Ha(t.scripts,n);if(s>=0)return i[s].script;if(e){const r={tag:n,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return i.splice(-1-s,0,r),r.script}}},getLangSysTable:function(n,e,t){const i=this.getScriptTable(n,t);if(i){if(!e||e==="dflt"||e==="DFLT")return i.defaultLangSys;const s=Ha(i.langSysRecords,e);if(s>=0)return i.langSysRecords[s].langSys;if(t){const r={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return i.langSysRecords.splice(-1-s,0,r),r.langSys}}},getFeatureTable:function(n,e,t,i){const s=this.getLangSysTable(n,e,i);if(s){let r;const a=s.featureIndexes,o=this.font.tables[this.tableName].features;for(let l=0;l<a.length;l++)if(r=o[a[l]],r.tag===t)return r.feature;if(i){const l=o.length;return Se.assert(l===0||t>=o[l-1].tag,"Features must be added in alphabetical order."),r={tag:t,feature:{params:0,lookupListIndexes:[]}},o.push(r),a.push(l),r.feature}}},getLookupTables:function(n,e,t,i,s){const r=this.getFeatureTable(n,e,t,s),a=[];if(r){let o;const l=r.lookupListIndexes,c=this.font.tables[this.tableName].lookups;for(let u=0;u<l.length;u++)o=c[l[u]],o.lookupType===i&&a.push(o);if(a.length===0&&s){o={lookupType:i,lookupFlag:0,subtables:[],markFilteringSet:void 0};const u=c.length;return c.push(o),l.push(u),[o]}}return a},getGlyphClass:function(n,e){switch(n.format){case 1:return n.startGlyph<=e&&e<n.startGlyph+n.classes.length?n.classes[e-n.startGlyph]:0;case 2:{const t=cu(n.ranges,e);return t?t.classId:0}}},getCoverageIndex:function(n,e){switch(n.format){case 1:{const t=lu(n.glyphs,e);return t>=0?t:-1}case 2:{const t=cu(n.ranges,e);return t?t.index+e-t.start:-1}}},expandCoverage:function(n){if(n.format===1)return n.glyphs;{const e=[],t=n.ranges;for(let i=0;i<t.length;i++){const s=t[i],r=s.start,a=s.end;for(let o=r;o<=a;o++)e.push(o)}return e}}};var na=hf;function Fs(n){na.call(this,n,"gpos")}Fs.prototype=na.prototype;Fs.prototype.init=function(){const n=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(n)};Fs.prototype.getKerningValue=function(n,e,t){for(let i=0;i<n.length;i++){const s=n[i].subtables;for(let r=0;r<s.length;r++){const a=s[r],o=this.getCoverageIndex(a.coverage,e);if(!(o<0))switch(a.posFormat){case 1:{let l=a.pairSets[o];for(let c=0;c<l.length;c++){let u=l[c];if(u.secondGlyph===t)return u.value1&&u.value1.xAdvance||0}break}case 2:{const l=this.getGlyphClass(a.classDef1,e),c=this.getGlyphClass(a.classDef2,t),u=a.classRecords[l][c];return u.value1&&u.value1.xAdvance||0}}}}return 0};Fs.prototype.getKerningTables=function(n,e){if(this.font.tables.gpos)return this.getLookupTables(n,e,"kern",2)};var vy=Fs;function xy(n,e){const t=n.length;if(t!==e.length)return!1;for(let i=0;i<t;i++)if(n[i]!==e[i])return!1;return!0}function _y(n,e,t){let i=0,s=n.length-1,r=null;for(;i<=s;){const a=Math.floor((i+s)/2),o=n[a],l=o[e];if(l<t)i=a+1;else if(l>t)s=a-1;else{r=o;break}}return r}function yy(n,e,t){let i=0,s=n.length-1;for(;i<=s;){const r=Math.floor((i+s)/2),a=n[r];if(a[e]<t)i=r+1;else if(a[e]>t)s=r-1;else return r}return-1}function Sy(n,e,t){let i=0,s=n.length;const r=(a,o)=>a[e]-o[e];for(;i<s;){const a=i+s>>>1;r(n[a],t)<0?i=a+1:s=a}return n.splice(i,0,t),i}function ff(n){return n[0]===31&&n[1]===139&&n[2]===8}function by(n){const e=new DataView(n.buffer,n.byteOffset,n.byteLength);let t=10;const i=n.byteLength-8,s=e.getInt8(3);if(s&4&&(t+=2+e.getUint16(t,!0)),s&8)for(;t<i&&n[t++]!==0;);if(s&16)for(;t<i&&n[t++]!==0;);if(s&2&&(t+=2),t>=i)throw new Error("Can't find compressed blocks");const r=e.getUint32(e.byteLength-4,!0);return Mh(n.subarray(t,i),new Uint8Array(r))}function uu(n){return{x:n.x,y:n.y,onCurve:n.onCurve,lastPointOfContour:n.lastPointOfContour}}function My(n){return{glyphIndex:n.glyphIndex,xScale:n.xScale,scale01:n.scale01,scale10:n.scale10,yScale:n.yScale,dx:n.dx,dy:n.dy}}function Vt(n){na.call(this,n,"gsub")}function Sl(n,e,t){const i=n.subtables;for(let s=0;s<i.length;s++){const r=i[s];if(r.substFormat===e)return r}if(t)return i.push(t),t}Vt.prototype=na.prototype;Vt.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};Vt.prototype.getSingle=function(n,e,t){const i=[],s=this.getLookupTables(e,t,n,1);for(let r=0;r<s.length;r++){const a=s[r].subtables;for(let o=0;o<a.length;o++){const l=a[o],c=this.expandCoverage(l.coverage);let u;if(l.substFormat===1){const h=l.deltaGlyphId;for(u=0;u<c.length;u++){const f=c[u];i.push({sub:f,by:f+h})}}else{const h=l.substitute;for(u=0;u<c.length;u++)i.push({sub:c[u],by:h[u]})}}}return i};Vt.prototype.getMultiple=function(n,e,t){const i=[],s=this.getLookupTables(e,t,n,2);for(let r=0;r<s.length;r++){const a=s[r].subtables;for(let o=0;o<a.length;o++){const l=a[o],c=this.expandCoverage(l.coverage);let u;for(u=0;u<c.length;u++){const h=c[u],f=l.sequences[u];i.push({sub:h,by:f})}}}return i};Vt.prototype.getAlternates=function(n,e,t){const i=[],s=this.getLookupTables(e,t,n,3);for(let r=0;r<s.length;r++){const a=s[r].subtables;for(let o=0;o<a.length;o++){const l=a[o],c=this.expandCoverage(l.coverage),u=l.alternateSets;for(let h=0;h<c.length;h++)i.push({sub:c[h],by:u[h]})}}return i};Vt.prototype.getLigatures=function(n,e,t){const i=[],s=this.getLookupTables(e,t,n,4);for(let r=0;r<s.length;r++){const a=s[r].subtables;for(let o=0;o<a.length;o++){const l=a[o],c=this.expandCoverage(l.coverage),u=l.ligatureSets;for(let h=0;h<c.length;h++){const f=c[h],d=u[h];for(let p=0;p<d.length;p++){const v=d[p];i.push({sub:[f].concat(v.components),by:v.ligGlyph})}}}}return i};Vt.prototype.addSingle=function(n,e,t,i){const s=this.getLookupTables(t,i,n,1,!0)[0],r=Sl(s,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});Se.assert(r.coverage.format===1,"Single: unable to modify coverage table format "+r.coverage.format);const a=e.sub;let o=this.binSearch(r.coverage.glyphs,a);o<0&&(o=-1-o,r.coverage.glyphs.splice(o,0,a),r.substitute.splice(o,0,0)),r.substitute[o]=e.by};Vt.prototype.addMultiple=function(n,e,t,i){Se.assert(e.by instanceof Array&&e.by.length>1,'Multiple: "by" must be an array of two or more ids');const s=this.getLookupTables(t,i,n,2,!0)[0],r=Sl(s,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});Se.assert(r.coverage.format===1,"Multiple: unable to modify coverage table format "+r.coverage.format);const a=e.sub;let o=this.binSearch(r.coverage.glyphs,a);o<0&&(o=-1-o,r.coverage.glyphs.splice(o,0,a),r.sequences.splice(o,0,0)),r.sequences[o]=e.by};Vt.prototype.addAlternate=function(n,e,t,i){const s=this.getLookupTables(t,i,n,3,!0)[0],r=Sl(s,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});Se.assert(r.coverage.format===1,"Alternate: unable to modify coverage table format "+r.coverage.format);const a=e.sub;let o=this.binSearch(r.coverage.glyphs,a);o<0&&(o=-1-o,r.coverage.glyphs.splice(o,0,a),r.alternateSets.splice(o,0,0)),r.alternateSets[o]=e.by};Vt.prototype.addLigature=function(n,e,t,i){const s=this.getLookupTables(t,i,n,4,!0)[0];let r=s.subtables[0];r||(r={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},s.subtables[0]=r),Se.assert(r.coverage.format===1,"Ligature: unable to modify coverage table format "+r.coverage.format);const a=e.sub[0],o=e.sub.slice(1),l={ligGlyph:e.by,components:o};let c=this.binSearch(r.coverage.glyphs,a);if(c>=0){const u=r.ligatureSets[c];for(let h=0;h<u.length;h++)if(xy(u[h].components,o))return;u.push(l)}else c=-1-c,r.coverage.glyphs.splice(c,0,a),r.ligatureSets.splice(c,0,[l])};Vt.prototype.getFeature=function(n,e,t){if(/ss\d\d/.test(n))return this.getSingle(n,e,t);switch(n){case"aalt":case"salt":return this.getSingle(n,e,t).concat(this.getAlternates(n,e,t));case"dlig":case"liga":case"rlig":return this.getLigatures(n,e,t);case"ccmp":return this.getMultiple(n,e,t).concat(this.getLigatures(n,e,t));case"stch":return this.getMultiple(n,e,t)}};Vt.prototype.add=function(n,e,t,i){if(/ss\d\d/.test(n))return this.addSingle(n,e,t,i);switch(n){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(n,e,t,i):this.addAlternate(n,e,t,i);case"dlig":case"liga":case"rlig":return this.addLigature(n,e,t,i);case"ccmp":return e.by instanceof Array?this.addMultiple(n,e,t,i):this.addLigature(n,e,t,i)}};var Ty=Vt,df=class{constructor(n){this.defaultValue=255,this.font=n}cpal(){return this.font.tables&&this.font.tables.cpal?this.font.tables.cpal:!1}getAll(n){const e=[],t=this.cpal();if(!t)return e;for(let i=0;i<t.colorRecordIndices.length;i++){const s=t.colorRecordIndices[i],r=[];for(let a=s;a<s+t.numPaletteEntries;a++)r.push(os(t.colorRecords[a],n||"hexa"));e.push(r)}return e}toCPALcolor(n){return Array.isArray(n)?n.map(e=>qr(e,"raw")):qr(n,"raw")}fillPalette(n,e=[],t=this.cpal().numPaletteEntries){return n=Number.isInteger(n)?this.get(n,"raw"):n,Object.assign(Array(t).fill(this.defaultValue),this.toCPALcolor(n).concat(this.toCPALcolor(e)))}extend(n){if(this.ensureCPAL(Array(n).fill(this.defaultValue)))return;const e=this.cpal(),t=e.numPaletteEntries+n,i=this.getAll().map(s=>this.fillPalette(s,[],t));e.numPaletteEntries=t,e.colorRecords=this.toCPALcolor(i.flat()),this.updateIndices()}get(n,e="hexa"){return this.getAll(e)[n]||null}getColor(n,e=0,t="hexa"){return gl(this.font,n,e,t)}setColor(n,e,t=0){n=parseInt(n),t=parseInt(t);let i=this.getAll("raw"),s=i[t];if(!s)throw Error(`paletteIndex ${t} out of range`);const r=this.cpal(),a=r.numPaletteEntries;Array.isArray(e)||(e=[e]),e.length+n>a&&(this.extend(e.length+n-a),i=this.getAll("raw"),s=i[t]);for(let o=0;o<e.length;o++)s[o+n]=this.toCPALcolor(e[o]);r.colorRecords=i.flat(),this.updateIndices()}add(n){if(this.ensureCPAL(n))return;const e=this.cpal(),t=e.numPaletteEntries;n&&n.length?(n=this.toCPALcolor(n),n.length>t?this.extend(n.length-t):n.length<t&&(n=this.fillPalette(n)),e.colorRecordIndices.push(e.colorRecords.length),e.colorRecords.push(...n)):(e.colorRecordIndices.push(e.colorRecords.length),e.colorRecords.push(...Array(t).fill(this.defaultValue)))}delete(n){const e=this.getAll("raw");delete e[n];const t=this.cpal();t.colorRecordIndices.pop(),t.colorRecords=e.flat()}deleteColor(n,e){if(n===e)throw Error("replacementIndex cannot be the same as colorIndex");const t=this.cpal(),i=this.getAll("raw"),s=[];if(e>t.numPaletteEntries-1)throw Error(`Replacement index out of range: numPaletteEntries after deletion: ${t.numPaletteEntries-1}, replacementIndex: ${e})`);for(let o=0;o<i.length;o++){const c=i[o].filter((u,h)=>h!==n);s.push(c)}const r=this.font.tables.colr;if(r){const o=r.layerRecords;for(let l=0;l<o.length;l++){const c=o[l].paletteIndex;if(c>n)o[l].paletteIndex-=1;else if(c===n){let u=0;for(let h=0;h<i.length;h++)if(e>n&&e<=n+i[h].length){u++;break}o[l].paletteIndex=e-u}}this.font.tables.colr={...r,layerRecords:o}}const a=s.flat();for(let o=0;o<i.length;o++)t.colorRecordIndices[o]-=o;t.numPaletteEntries=Math.max(0,t.numPaletteEntries-1),t.colorRecords=this.toCPALcolor(a)}ensureCPAL(n){return this.cpal()?!1:(!n||!n.length?n=[this.defaultValue]:n=this.toCPALcolor(n),this.font.tables.cpal={version:0,numPaletteEntries:n.length,colorRecords:n,colorRecordIndices:[0]},!0)}updateIndices(){const n=this.cpal(),e=Math.ceil(n.colorRecords.length/n.numPaletteEntries);n.colorRecordIndices=[];for(let t=0;t<e;t++)n.colorRecordIndices.push(t*n.numPaletteEntries)}},Ey=class{constructor(n){this.font=n}ensureCOLR(){return this.font.tables.colr||(this.font.tables.colr={version:0,baseGlyphRecords:[],layerRecords:[]}),this.font}get(n){const e=this.font,t=[],i=e.tables.colr,s=e.tables.cpal;if(!i||!s)return t;const r=_y(i.baseGlyphRecords,"glyphID",n);if(!r)return t;const a=r.firstLayerIndex,o=r.numLayers;for(let l=0;l<o;l++){const c=i.layerRecords[a+l];t.push({glyph:e.glyphs.get(c.glyphID),paletteIndex:c.paletteIndex})}return t}add(n,e,t){const i=this.get(n);e=Array.isArray(e)?e:[e],t===void 0||t===1/0||t>i.length?t=i.length:t<0&&(t=i.length+1+t%(i.length+1),t>=i.length+1&&(t-=i.length+1));const s=[];for(let r=0;r<t;r++){const a=Number.isInteger(i[r].glyph)?i[r].glyph:i[r].glyph.index;s.push({glyphID:a,paletteIndex:i[r].paletteIndex})}for(const r of e){const a=Number.isInteger(r.glyph)?r.glyph:r.glyph.index;s.push({glyphID:a,paletteIndex:r.paletteIndex})}for(let r=t;r<i.length;r++){const a=Number.isInteger(i[r].glyph)?i[r].glyph:i[r].glyph.index;s.push({glyphID:a,paletteIndex:i[r].paletteIndex})}this.updateColrTable(n,s)}setPaletteIndex(n,e,t){let i=this.get(n);i[e]?(i=i.map((s,r)=>({glyphID:s.glyph.index,paletteIndex:r===e?t:s.paletteIndex})),this.updateColrTable(n,i)):console.error("Invalid layer index")}remove(n,e,t=e){let i=this.get(n);i=i.map(s=>({glyphID:s.glyph.index,paletteIndex:s.paletteIndex})),i.splice(e,t-e+1),this.updateColrTable(n,i)}updateColrTable(n,e){this.ensureCOLR();const i=this.font.tables.colr;let s=yy(i.baseGlyphRecords,"glyphID",n);if(s===-1){const u={glyphID:n,firstLayerIndex:i.layerRecords.length,numLayers:0};s=Sy(i.baseGlyphRecords,"glyphID",u)}const a=i.baseGlyphRecords[s],o=a.numLayers,l=e.length,c=l-o;if(c>0){const u=e.slice(o).map(h=>({glyphID:h.glyphID,paletteIndex:h.paletteIndex}));i.layerRecords.splice(a.firstLayerIndex+o,0,...u)}else c<0&&i.layerRecords.splice(a.firstLayerIndex+l,-c);for(let u=0;u<Math.min(o,l);u++)i.layerRecords[a.firstLayerIndex+u]={glyphID:e[u].glyphID,paletteIndex:e[u].paletteIndex};if(a.numLayers=l,c!==0)for(let u=0;u<i.baseGlyphRecords.length;u++){const h=i.baseGlyphRecords[u];u===s||h.firstLayerIndex<a.firstLayerIndex||(i.baseGlyphRecords[u].firstLayerIndex+=c)}}},Ay=class{constructor(n){this.font=n,this.cache=new WeakMap}get(n){const e=this.getOrCreateSvgImageCacheEntry(n);return e&&e.image}getAsync(n){const e=this.getOrCreateSvgImageCacheEntry(n);return e&&e.promise}getOrCreateSvgImageCacheEntry(n){const e=this.font.tables.svg;if(e===void 0)return;const t=e.get(n);if(t===void 0)return;let i=this.cache.get(t);i===void 0&&(i=Cy(t),this.cache.set(t,i));let s=i.images.get(n);return s===void 0&&(s=wy(this.font,i.template,n),s.promise.then(r=>{if(s.image=r,typeof this.font.onGlyphUpdated=="function")try{this.font.onGlyphUpdated(n)}catch(a){console.error("font.onGlyphUpdated",n,a)}}),i.images.set(n,s)),s}};function Cy(n){return{template:Ry(n).then(Py),images:new Map}}function wy(n,e,t){return{promise:e.then(i=>{let s;typeof i=="string"?s=i:(i[4]=t,s=i.join(""));const r=Uy(s,n.unitsPerEm);return r.image.decode().then(()=>r)}),image:void 0}}var Ry=typeof DecompressionStream=="function"?Dy:Ly;function Ly(n){try{return Promise.resolve(new TextDecoder().decode(ff(n)?by(n):n))}catch(e){return Promise.reject(e)}}function Dy(n){if(ff(n))return new Response(new Response(n).body.pipeThrough(new DecompressionStream("gzip"))).text();try{return Promise.resolve(new TextDecoder().decode(n))}catch(e){return Promise.reject(e)}}function Py(n){const e=n.indexOf("<svg"),t=n.indexOf(">",e+4)+1;if(/ id=['"]glyph\d+['"]/.test(n.substring(e,t)))return n;const i=n.lastIndexOf("</svg>");return[n.substring(0,t),"<defs>",n.substring(t,i),'</defs><use href="#glyph',"",'"/>',n.substring(i)]}function Uy(n,e){const i=new DOMParser().parseFromString(n,"image/svg+xml").documentElement,s=i.viewBox.baseVal,r=i.width.baseVal,a=i.height.baseVal;let o=1,l=1;s.width>0&&s.height>0&&(r.unitType===1?(o=r.valueInSpecifiedUnits/s.width,l=a.unitType===1?a.valueInSpecifiedUnits/s.height:o):a.unitType===1?(l=a.valueInSpecifiedUnits/s.height,o=l):e&&(o=e/s.width,l=e/s.height));const c=document.createElement("div");c.style.position="fixed",c.style.visibility="hidden",c.appendChild(i),document.body.appendChild(c);const u=i.getBBox();document.body.removeChild(c);const h=(u.x-s.x)*o,f=(s.y-u.y)*l,d=u.width*o,p=u.height*l;i.setAttribute("viewBox",[u.x,u.y,u.width,u.height].join(" ")),o!==1&&i.setAttribute("width",d),l!==1&&i.setAttribute("height",p);const v=new Image(d,p);return v.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(i.outerHTML),{leftSideBearing:h,baseline:f,image:v}}var Ga=new WeakMap;function hu(n,e,t,i,s){let r;return(e&i)>0?(r=n.parseByte(),(e&s)===0&&(r=-r),r=t+r):(e&s)>0?r=t:r=t+n.parseShort(),r}function pf(n,e,t){const i=new oe.Parser(e,t);n._numberOfContours=i.parseShort(),n._xMin=i.parseShort(),n._yMin=i.parseShort(),n._xMax=i.parseShort(),n._yMax=i.parseShort();let s,r;if(n._numberOfContours>0){const a=n.endPointIndices=[];for(let l=0;l<n._numberOfContours;l+=1)a.push(i.parseUShort());n.instructionLength=i.parseUShort(),n.instructions=[];for(let l=0;l<n.instructionLength;l+=1)n.instructions.push(i.parseByte());const o=a[a.length-1]+1;s=[];for(let l=0;l<o;l+=1)if(r=i.parseByte(),s.push(r),(r&8)>0){const c=i.parseByte();for(let u=0;u<c;u+=1)s.push(r),l+=1}if(Se.argument(s.length===o,"Bad flags."),a.length>0){const l=[];let c;if(o>0){for(let f=0;f<o;f+=1)r=s[f],c={},c.onCurve=!!(r&1),c.lastPointOfContour=a.indexOf(f)>=0,l.push(c);let u=0;for(let f=0;f<o;f+=1)r=s[f],c=l[f],c.x=hu(i,r,u,2,16),u=c.x;let h=0;for(let f=0;f<o;f+=1)r=s[f],c=l[f],c.y=hu(i,r,h,4,32),h=c.y}n.points=l}else n.points=[]}else if(n._numberOfContours===0)n.points=[];else{n.isComposite=!0,n.points=[],n.components=[];let a=!0;for(;a;){s=i.parseUShort();const o={glyphIndex:i.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(s&1)>0?(s&2)>0?(o.dx=i.parseShort(),o.dy=i.parseShort()):o.matchedPoints=[i.parseUShort(),i.parseUShort()]:(s&2)>0?(o.dx=i.parseChar(),o.dy=i.parseChar()):o.matchedPoints=[i.parseByte(),i.parseByte()],(s&8)>0?o.xScale=o.yScale=i.parseF2Dot14():(s&64)>0?(o.xScale=i.parseF2Dot14(),o.yScale=i.parseF2Dot14()):(s&128)>0&&(o.xScale=i.parseF2Dot14(),o.scale01=i.parseF2Dot14(),o.scale10=i.parseF2Dot14(),o.yScale=i.parseF2Dot14()),n.components.push(o),a=!!(s&32)}if(s&256){n.instructionLength=i.parseUShort(),n.instructions=[];for(let o=0;o<n.instructionLength;o+=1)n.instructions.push(i.parseByte())}}}function Lr(n,e){const t=[];for(let i=0;i<n.length;i+=1){const s=n[i],r={x:e.xScale*s.x+e.scale10*s.y+e.dx,y:e.scale01*s.x+e.yScale*s.y+e.dy,onCurve:s.onCurve,lastPointOfContour:s.lastPointOfContour};t.push(r)}return t}function Iy(n){const e=[];let t=[];for(let i=0;i<n.length;i+=1){const s=n[i];t.push(s),s.lastPointOfContour&&(e.push(t),t=[])}return Se.argument(t.length===0,"There are still points left in the current contour."),e}function bl(n){const e=new is;if(!n)return e;const t=Iy(n);for(let i=0;i<t.length;++i){const s=t[i];let r=s[s.length-1],a=s[0];if(r.onCurve)e.moveTo(r.x,r.y);else if(a.onCurve)e.moveTo(a.x,a.y);else{const o={x:(r.x+a.x)*.5,y:(r.y+a.y)*.5};e.moveTo(o.x,o.y)}for(let o=0;o<s.length;++o)if(r=a,a=s[(o+1)%s.length],r.onCurve)e.lineTo(r.x,r.y);else{let l=a;a.onCurve||(l={x:(r.x+a.x)*.5,y:(r.y+a.y)*.5}),e.quadraticCurveTo(r.x,r.y,l.x,l.y)}e.closePath()}return e}function mf(n,e){if(e.isComposite){Ga.has(n)||Ga.set(n,new Set);const t=Ga.get(n);t.add(e.index);try{for(let i=0;i<e.components.length;i+=1){const s=e.components[i];if(t.has(s.glyphIndex))continue;const r=n.get(s.glyphIndex);if(r.getPath(),r.points){let a;if(s.matchedPoints===void 0)a=Lr(r.points,s);else{if(s.matchedPoints[0]>e.points.length-1||s.matchedPoints[1]>r.points.length-1)throw Error("Matched points out of range in "+e.name);const o=e.points[s.matchedPoints[0]];let l=r.points[s.matchedPoints[1]];const c={xScale:s.xScale,scale01:s.scale01,scale10:s.scale10,yScale:s.yScale,dx:0,dy:0};l=Lr([l],c)[0],c.dx=o.x-l.x,c.dy=o.y-l.y,a=Lr(r.points,c)}e.points=e.points.concat(a)}}}finally{t.delete(e.index)}}return bl(e.points)}function Oy(n,e,t,i){const s=new xn.GlyphSet(i);for(let r=0;r<t.length-1;r+=1){const a=t[r],o=t[r+1];a!==o?s.push(r,xn.ttfGlyphLoader(i,r,pf,n,e+a,mf)):s.push(r,xn.glyphLoader(i,r))}return s}function Fy(n,e,t,i){const s=new xn.GlyphSet(i);return i._push=function(r){const a=t[r],o=t[r+1];a!==o?s.push(r,xn.ttfGlyphLoader(i,r,pf,n,e+a,mf)):s.push(r,xn.glyphLoader(i,r))},s}function Ny(n,e,t,i,s){return s.lowMemory?Fy(n,e,t,i):Oy(n,e,t,i)}var gf={getPath:bl,parse:Ny},ky=class{constructor(n){this.font=n}normalizeCoordTags(n){for(const e in n)if(e.length<4){const t=e.padEnd(4," ");n[t]===void 0&&(n[t]=n[e]),delete n[e]}}getNormalizedCoords(n){n||(n=this.font.variation.get());let e=[];this.normalizeCoordTags(n);for(let t=0;t<this.fvar().axes.length;t++){const i=this.fvar().axes[t];let s=n[i.tag];s===void 0&&(s=i.defaultValue),s<i.defaultValue?e.push((s-i.defaultValue+Number.EPSILON)/(i.defaultValue-i.minValue+Number.EPSILON)):e.push((s-i.defaultValue+Number.EPSILON)/(i.maxValue-i.defaultValue+Number.EPSILON))}if(this.avar())for(let t=0;t<this.avar().axisSegmentMaps.length;t++){let i=this.avar().axisSegmentMaps[t];for(let s=0;s<i.axisValueMaps.length;s++){let r=i.axisValueMaps[s];if(s>=1&&e[t]<r.fromCoordinate){let a=i.axisValueMaps[s-1];e[t]=((e[t]-a.fromCoordinate)*(r.toCoordinate-a.toCoordinate)+Number.EPSILON)/(r.fromCoordinate-a.fromCoordinate+Number.EPSILON)+a.toCoordinate;break}}}return e}interpolatePoints(n,e,t){if(n.length===0)return;let i=0;for(;i<n.length;){let s=i,r=i,a=n[r];for(;!a.lastPointOfContour;)a=n[++r];for(;i<=r&&!t[i];)i++;if(i>r)continue;let o=i,l=i;for(i++;i<=r;)t[i]&&(this.deltaInterpolate(l+1,i-1,l,i,e,n),l=i),i++;l===o?this.deltaShift(s,r,l,e,n):(this.deltaInterpolate(l+1,r,l,o,e,n),o>0&&this.deltaInterpolate(s,o-1,l,o,e,n)),i=r+1}}deltaInterpolate(n,e,t,i,s,r){if(n>e)return;let a=["x","y"];for(let l=0;l<a.length;l++){let c=a[l];if(s[t][c]>s[i][c]){var o=t;t=i,i=o}let u=s[t][c],h=s[i][c],f=r[t][c],d=r[i][c];if(u!==h||f===d){let p=u===h?0:(d-f)/(h-u);for(let v=n;v<=e;v++){let g=s[v][c];g<=u?g+=f-u:g>=h?g+=d-h:g=f+(g-u)*p,r[v][c]=g}}}}deltaShift(n,e,t,i,s){let r=s[t].x-i[t].x,a=s[t].y-i[t].y;if(!(r===0&&a===0))for(let o=n;o<=e;o++)o!==t&&(s[o].x+=r,s[o].y+=a)}transformComponents(n,e,t,i,s,r){let a=0;for(let o=0;o<n.components.length;o++){const l=n.components[o],c=this.font.glyphs.get(l.glyphIndex),u=My(l),h=i.indexOf(o);h>-1&&(u.dx+=Math.round(s.deltas[h]*r),u.dy+=Math.round(s.deltasY[h]*r));const f=Lr(this.getTransform(c,t).points,u);e.splice(a,f.length,...f),a+=c.points.length}}applyTupleVariationStore(n,e,t,i="gvar",s={}){t||(t=this.font.variation.get());const r=this.getNormalizedCoords(t),{headers:a,sharedPoints:o}=n,l=this.fvar().axes.length;let c;i==="gvar"?c=e.map(uu):i==="cvar"&&(c=[...e]);for(let u=0;u<a.length;u++){const h=a[u];let f=1;for(let p=0;p<l;p++){let v=[0];switch(i){case"gvar":v=h.peakTuple?h.peakTuple:this.gvar().sharedTuples[h.sharedTupleRecordsIndex];break;case"cvar":v=h.peakTuple;break}if(v[p]!==0){if(r[p]===0){f=0;break}if(h.intermediateStartTuple)if(r[p]<h.intermediateStartTuple[p]||r[p]>h.intermediateEndTuple[p]){f=0;break}else r[p]<v[p]?f=f*(r[p]-h.intermediateStartTuple[p]+Number.EPSILON)/(v[p]-h.intermediateStartTuple[p]+Number.EPSILON):f=f*(h.intermediateEndTuple[p]-r[p]+Number.EPSILON)/(h.intermediateEndTuple[p]-v[p]+Number.EPSILON);else{if(r[p]<Math.min(0,v[p])||r[p]>Math.max(0,v[p])){f=0;break}f=(f*r[p]+Number.EPSILON)/(v[p]+Number.EPSILON)}}}if(f===0)continue;const d=h.privatePoints.length?h.privatePoints:o;if(i==="gvar"&&s.glyph&&s.glyph.isComposite)this.transformComponents(s.glyph,c,t,d,h,f);else if(d.length===0)for(let p=0;p<c.length;p++){const v=c[p];i==="gvar"?c[p]={x:Math.round(v.x+h.deltas[p]*f),y:Math.round(v.y+h.deltasY[p]*f),onCurve:v.onCurve,lastPointOfContour:v.lastPointOfContour}:i==="cvar"&&(c[p]=Math.round(v+h.deltas[p]*f))}else{let p;i==="gvar"?p=c.map(uu):i==="cvar"&&(p=c);const v=Array(e.length).fill(!1);for(let g=0;g<d.length;g++){let m=d[g];if(m<e.length){let M=p[m];i==="gvar"?(v[m]=!0,M.x+=h.deltas[g]*f,M.y+=h.deltasY[g]*f):i==="cvar"&&(c[m]=Math.round(M+h.deltas[g]*f))}}if(i==="gvar"){this.interpolatePoints(p,c,v);for(let g=0;g<e.length;g++){let m=p[g].x-c[g].x,M=p[g].y-c[g].y;c[g].x=Math.round(c[g].x+m),c[g].y=Math.round(c[g].y+M)}}}}return c}getTransform(n,e){Number.isInteger(n)&&(n=this.font.glyphs.get(n));const t=n.getBlendPath,i=!!(n.points&&n.points.length);let s=n;if(t||i){if(e||(e=this.font.variation.get()),i){const r=this.gvar()&&this.gvar().glyphVariations[n.index];if(r){const a=n.points;let o=this.applyTupleVariationStore(r,a,e,"gvar",{glyph:n});s=new As(Object.assign({},n,{points:o,path:bl(o)}))}}else if(t){const r=n.getBlendPath(e);s=new As(Object.assign({},n,{path:r}))}}return this.font.tables.hvar&&(n._advanceWidth=typeof n._advanceWidth<"u"?n._advanceWidth:n.advanceWidth,n.advanceWidth=s.advanceWidth=Math.round(n._advanceWidth+this.getVariableAdjustment(s.index,"hvar","advanceWidth",e)),n._leftSideBearing=typeof n._leftSideBearing<"u"?n._leftSideBearing:n.leftSideBearing,n.leftSideBearing=s.leftSideBearing=Math.round(n._leftSideBearing+this.getVariableAdjustment(s.index,"hvar","lsb",e))),s}getCvarTransform(n){const e=this.font.tables.cvt,t=this.cvar();return!e||!e.length||!t||!t.headers.length?e:this.applyTupleVariationStore(t,e,n,"cvar")}getVariableAdjustment(n,e,t,i){i=i||this.font.variation.get();let s,r;const a=this.font.tables[e];if(!a)throw Error(`trying to get variation adjustment from non-existent table "${a}"`);if(!a.itemVariationStore)throw Error(`trying to get variation adjustment from table "${a}" which does not have an itemVariationStore`);const o=a[t]&&a[t].map.length;if(o){let l=n;l>=o&&(l=o-1),{outerIndex:s,innerIndex:r}=a[t].map[l]}else s=0,r=n;return this.getDelta(a.itemVariationStore,s,r,i)}getDelta(n,e,t,i){if(e>=n.itemVariationSubtables.length)return 0;let s=n.itemVariationSubtables[e];if(t>=s.deltaSets.length)return 0;let r=s.deltaSets[t],a=this.getBlendVector(n,e,i),o=0;for(let l=0;l<s.regionIndexes.length;l++)o+=r[l]*a[l];return o}getBlendVector(n,e,t){t||(t=this.font.variation.get());let i=n.itemVariationSubtables[e];const s=this.getNormalizedCoords(t);let r=[];for(let a=0;a<i.regionIndexes.length;a++){let o=1,l=i.regionIndexes[a],c=n.variationRegions[l].regionAxes;for(let u=0;u<c.length;u++){let h=c[u],f;h.startCoord>h.peakCoord||h.peakCoord>h.endCoord||h.startCoord<0&&h.endCoord>0&&h.peakCoord!==0||h.peakCoord===0?f=1:s[u]<h.startCoord||s[u]>h.endCoord?f=0:s[u]===h.peakCoord?f=1:s[u]<h.peakCoord?f=(s[u]-h.startCoord+Number.EPSILON)/(h.peakCoord-h.startCoord+Number.EPSILON):f=(h.endCoord-s[u]+Number.EPSILON)/(h.endCoord-h.peakCoord+Number.EPSILON),o*=f}r[a]=o}return r}avar(){return this.font.tables.avar}cvar(){return this.font.tables.cvar}fvar(){return this.font.tables.fvar}gvar(){return this.font.tables.gvar}hvar(){return this.font.tables.hvar}},By=class{constructor(n){this.font=n,this.process=new ky(this.font),this.activateDefaultVariation(),this.getTransform=this.process.getTransform.bind(this.process)}activateDefaultVariation(){const n=this.getDefaultInstanceIndex();n>-1?this.set(n):this.set(this.getDefaultCoordinates())}getDefaultCoordinates(){return this.fvar().axes.reduce((n,e)=>(n[e.tag]=e.defaultValue,n),{})}getDefaultInstanceIndex(){const n=this.getDefaultCoordinates();let e=this.getInstanceIndex(n);return e<0&&(e=this.fvar().instances.findIndex(t=>t.name&&t.name.en==="Regular")),e}getInstanceIndex(n){return this.fvar().instances.findIndex(e=>Object.keys(n).every(t=>e.coordinates[t]===n[t]))}getInstance(n){return this.fvar().instances&&this.fvar().instances[n]}set(n){let e;if(Number.isInteger(n)){const t=this.getInstance(n);if(!t)throw Error(`Invalid instance index ${n}`);e={...t.coordinates}}else e=n,this.process.normalizeCoordTags(e);e=Object.assign({},this.font.defaultRenderOptions.variation,e),this.font.defaultRenderOptions=Object.assign({},this.font.defaultRenderOptions,{variation:e})}get(){return Object.assign({},this.font.defaultRenderOptions.variation)}avar(){return this.font.tables.avar}cvar(){return this.font.tables.cvar}fvar(){return this.font.tables.fvar}gvar(){return this.font.tables.gvar}hvar(){return this.font.tables.hvar}},fu=1e6,jr=64,$r=1e4,vf,Si,xf,jo;function _f(n){this.font=n,this.getCommands=function(e){return gf.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function zy(n){return n}function yf(n){return Math.sign(n)*Math.round(Math.abs(n))}function Hy(n){return Math.sign(n)*Math.round(Math.abs(n*2))/2}function Gy(n){return Math.sign(n)*(Math.round(Math.abs(n)+.5)-.5)}function Vy(n){return Math.sign(n)*Math.ceil(Math.abs(n))}function Wy(n){return Math.sign(n)*Math.floor(Math.abs(n))}var Sf=function(n){const e=this.srPeriod;let t=this.srPhase;const i=this.srThreshold;let s=1;return n<0&&(n=-n,s=-1),n+=i-t,n=Math.trunc(n/e)*e,n+=t,n<0?t*s:n*s},gn={x:1,y:0,axis:"x",distance:function(n,e,t,i){return(t?n.xo:n.x)-(i?e.xo:e.x)},interpolate:function(n,e,t,i){let s,r,a,o,l,c,u;if(!i||i===this){if(s=n.xo-e.xo,r=n.xo-t.xo,l=e.x-e.xo,c=t.x-t.xo,a=Math.abs(s),o=Math.abs(r),u=a+o,u===0){n.x=n.xo+(l+c)/2;return}n.x=n.xo+(l*o+c*a)/u;return}if(s=i.distance(n,e,!0,!0),r=i.distance(n,t,!0,!0),l=i.distance(e,e,!1,!0),c=i.distance(t,t,!1,!0),a=Math.abs(s),o=Math.abs(r),u=a+o,u===0){gn.setRelative(n,n,(l+c)/2,i,!0);return}gn.setRelative(n,n,(l*o+c*a)/u,i,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(n,e,t,i,s){if(!i||i===this){n.x=(s?e.xo:e.x)+t;return}const r=s?e.xo:e.x,a=s?e.yo:e.y,o=r+t*i.x,l=a+t*i.y;n.x=o+(n.y-l)/i.normalSlope},slope:0,touch:function(n){n.xTouched=!0},touched:function(n){return n.xTouched},untouch:function(n){n.xTouched=!1}},Pn={x:0,y:1,axis:"y",distance:function(n,e,t,i){return(t?n.yo:n.y)-(i?e.yo:e.y)},interpolate:function(n,e,t,i){let s,r,a,o,l,c,u;if(!i||i===this){if(s=n.yo-e.yo,r=n.yo-t.yo,l=e.y-e.yo,c=t.y-t.yo,a=Math.abs(s),o=Math.abs(r),u=a+o,u===0){n.y=n.yo+(l+c)/2;return}n.y=n.yo+(l*o+c*a)/u;return}if(s=i.distance(n,e,!0,!0),r=i.distance(n,t,!0,!0),l=i.distance(e,e,!1,!0),c=i.distance(t,t,!1,!0),a=Math.abs(s),o=Math.abs(r),u=a+o,u===0){Pn.setRelative(n,n,(l+c)/2,i,!0);return}Pn.setRelative(n,n,(l*o+c*a)/u,i,!0)},normalSlope:0,setRelative:function(n,e,t,i,s){if(!i||i===this){n.y=(s?e.yo:e.y)+t;return}const r=s?e.xo:e.x,a=s?e.yo:e.y,o=r+t*i.x,l=a+t*i.y;n.y=l+i.normalSlope*(n.x-o)},slope:Number.POSITIVE_INFINITY,touch:function(n){n.yTouched=!0},touched:function(n){return n.yTouched},untouch:function(n){n.yTouched=!1}};Object.freeze(gn);Object.freeze(Pn);function Ns(n,e){this.x=n,this.y=e,this.axis=void 0,this.slope=e/n,this.normalSlope=-n/e,Object.freeze(this)}Ns.prototype.distance=function(n,e,t,i){return this.x*gn.distance(n,e,t,i)+this.y*Pn.distance(n,e,t,i)};Ns.prototype.interpolate=function(n,e,t,i){let s,r,a,o,l,c,u;if(a=i.distance(n,e,!0,!0),o=i.distance(n,t,!0,!0),s=i.distance(e,e,!1,!0),r=i.distance(t,t,!1,!0),l=Math.abs(a),c=Math.abs(o),u=l+c,u===0){this.setRelative(n,n,(s+r)/2,i,!0);return}this.setRelative(n,n,(s*c+r*l)/u,i,!0)};Ns.prototype.setRelative=function(n,e,t,i,s){i=i||this;const r=s?e.xo:e.x,a=s?e.yo:e.y,o=r+t*i.x,l=a+t*i.y,c=i.normalSlope,u=this.slope,h=n.x,f=n.y;n.x=(u*h-c*o+l-f)/(u-c),n.y=u*(n.x-h)+f};Ns.prototype.touch=function(n){n.xTouched=!0,n.yTouched=!0};function ks(n,e){const t=Math.sqrt(n*n+e*e);return n/=t,e/=t,n===1&&e===0?gn:n===0&&e===1?Pn:new Ns(n,e)}function In(n,e,t,i){this.x=this.xo=Math.round(n*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=t,this.onCurve=i,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}In.prototype.nextTouched=function(n){let e=this.nextPointOnContour;for(;!n.touched(e)&&e!==this;)e=e.nextPointOnContour;return e};In.prototype.prevTouched=function(n){let e=this.prevPointOnContour;for(;!n.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var Cs=Object.freeze(new In(0,0)),Xy={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function $n(n,e){switch(this.env=n,this.stack=[],this.prog=e,n){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=gn,this.round=yf}}_f.prototype.exec=function(n,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(this._errorState>2)return;const t=this.font;let i=this._prepState;if(!i||i.ppem!==e){let s=this._fpgmState;if(!s){$n.prototype=Xy,s=this._fpgmState=new $n("fpgm",t.tables.fpgm),s.funcs=[],s.font=t,s.instructionCount=0,s.callDepth=0;try{Si(s)}catch(a){console.log("Hinting error in FPGM:"+a),this._errorState=3;return}}$n.prototype=s,i=this._prepState=new $n("prep",t.tables.prep),i.ppem=e,i.instructionCount=0,i.callDepth=0;const r=t.variation&&t.variation.process.getCvarTransform()||t.tables.cvt;if(r){const a=i.cvt=new Array(r.length),o=e/t.unitsPerEm;for(let l=0;l<r.length;l++)a[l]=r[l]*o}else i.cvt=[];try{Si(i)}catch(a){this._errorState<2&&console.log("Hinting error in PREP:"+a),this._errorState=2}}if(!(this._errorState>1))try{return xf(n,i)}catch(s){this._errorState<1&&(console.log("Hinting error:"+s),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}};xf=function(n,e){const t=e.ppem/e.font.unitsPerEm,i=t;let s=n.components,r,a,o;if($n.prototype=e,!s)o=new $n("glyf",n.instructions),o.instructionCount=0,o.callDepth=0,jo(n,o,t,i),a=o.gZone;else{const l=e.font;a=[],r=[];for(let c=0;c<s.length;c++){const u=s[c],h=l.glyphs.get(u.glyphIndex);o=new $n("glyf",h.instructions),o.instructionCount=0,o.callDepth=0,jo(h,o,t,i);const f=Math.round(u.dx*t),d=Math.round(u.dy*i),p=o.gZone,v=o.contours;for(let m=0;m<p.length;m++){const M=p[m];M.xTouched=M.yTouched=!1,M.xo=M.x=M.x+f,M.yo=M.y=M.y+d}const g=a.length;a.push.apply(a,p);for(let m=0;m<v.length;m++)r.push(v[m]+g)}n.instructions&&!o.inhibitGridFit&&(o=new $n("glyf",n.instructions),o.gZone=o.z0=o.z1=o.z2=a,o.contours=r,a.push(new In(0,0),new In(Math.round(n.advanceWidth*t),0)),Si(o),a.length-=2)}return a};jo=function(n,e,t,i){const s=n.points||[],r=s.length,a=e.gZone=e.z0=e.z1=e.z2=[],o=e.contours=[];let l;for(let h=0;h<r;h++)l=s[h],a[h]=new In(l.x*t,l.y*i,l.lastPointOfContour,l.onCurve);let c,u;for(let h=0;h<r;h++)l=a[h],c||(c=l,o.push(h)),l.lastPointOfContour?(l.nextPointOnContour=c,c.prevPointOnContour=l,c=void 0):(u=a[h+1],l.nextPointOnContour=u,u.prevPointOnContour=l);e.inhibitGridFit||(a.push(new In(0,0),new In(Math.round(n.advanceWidth*t),0)),Si(e),a.length-=2)};Si=function(n){let e=n.prog;if(!e)return;const t=e.length;let i;for(n.ip=0;n.ip<t;n.ip++){if(++n.instructionCount>fu)throw new Error("Hinting instructions exceeded maximum of "+fu);if(i=vf[e[n.ip]],!i)throw new Error("unknown instruction: 0x"+Number(e[n.ip]).toString(16));i(n)}};function ia(n){const e=n.tZone=new Array(n.gZone.length);for(let t=0;t<e.length;t++)e[t]=new In(0,0)}function bf(n,e){const t=n.prog;let i=n.ip,s=1,r;do if(r=t[++i],r===88)s++;else if(r===89)s--;else if(r===64)i+=t[i+1]+1;else if(r===65)i+=2*t[i+1]+1;else if(r>=176&&r<=183)i+=r-176+1;else if(r>=184&&r<=191)i+=(r-184+1)*2;else if(e&&s===1&&r===27)break;while(s>0);n.ip=i}function du(n,e){e.fv=e.pv=e.dpv=n}function pu(n,e){e.pv=e.dpv=n}function mu(n,e){e.fv=n}function gu(n,e){const t=e.stack,i=t.pop(),s=t.pop(),r=e.z2[i],a=e.z1[s];let o,l;n?(o=r.y-a.y,l=a.x-r.x):(o=a.x-r.x,l=a.y-r.y),e.pv=e.dpv=ks(o,l)}function vu(n,e){const t=e.stack,i=t.pop(),s=t.pop(),r=e.z2[i],a=e.z1[s];let o,l;n?(o=r.y-a.y,l=a.x-r.x):(o=a.x-r.x,l=a.y-r.y),e.fv=ks(o,l)}function qy(n){const e=n.stack,t=e.pop(),i=e.pop();n.pv=n.dpv=ks(i,t)}function Yy(n){const e=n.stack,t=e.pop(),i=e.pop();n.fv=ks(i,t)}function jy(n){const e=n.stack,t=n.pv;e.push(t.x*16384),e.push(t.y*16384)}function $y(n){const e=n.stack,t=n.fv;e.push(t.x*16384),e.push(t.y*16384)}function Zy(n){n.fv=n.pv}function Ky(n){const e=n.stack,t=e.pop(),i=e.pop(),s=e.pop(),r=e.pop(),a=e.pop(),o=n.z0,l=n.z1,c=o[t],u=o[i],h=l[s],f=l[r],d=n.z2[a],p=c.x,v=c.y,g=u.x,m=u.y,M=h.x,b=h.y,S=f.x,N=f.y,A=(p-g)*(b-N)-(v-m)*(M-S),C=p*m-v*g,I=M*N-b*S;d.x=(C*(M-S)-I*(p-g))/A,d.y=(C*(b-N)-I*(v-m))/A}function Jy(n){n.rp0=n.stack.pop()}function Qy(n){n.rp1=n.stack.pop()}function eS(n){n.rp2=n.stack.pop()}function tS(n){const e=n.stack.pop();switch(n.zp0=e,e){case 0:n.tZone||ia(n),n.z0=n.tZone;break;case 1:n.z0=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function nS(n){const e=n.stack.pop();switch(n.zp1=e,e){case 0:n.tZone||ia(n),n.z1=n.tZone;break;case 1:n.z1=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function iS(n){const e=n.stack.pop();switch(n.zp2=e,e){case 0:n.tZone||ia(n),n.z2=n.tZone;break;case 1:n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function sS(n){const e=n.stack.pop();switch(n.zp0=n.zp1=n.zp2=e,e){case 0:n.tZone||ia(n),n.z0=n.z1=n.z2=n.tZone;break;case 1:n.z0=n.z1=n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function rS(n){n.loop=n.stack.pop(),n.loop>$r&&(n.loop=$r)}function aS(n){n.round=yf}function oS(n){n.round=Gy}function lS(n){const e=n.stack.pop();n.minDis=e/64}function cS(n){bf(n,!1)}function uS(n){const e=n.stack.pop();n.ip+=e-1}function hS(n){const e=n.stack.pop();n.cvCutIn=e/64}function fS(n){const e=n.stack;e.push(e[e.length-1])}function Va(n){n.stack.pop()}function dS(n){n.stack.length=0}function pS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(t),e.push(i)}function mS(n){const e=n.stack;e.push(e.length)}function gS(n){const e=n.stack,t=e.pop();let i=e.pop();if(i>$r&&(i=$r),++n.callDepth>jr)throw new Error("Hinting call depth exceeded maximum of "+jr);const s=n.ip,r=n.prog;n.prog=n.funcs[t];for(let a=0;a<i;a++)Si(n);n.ip=s,n.prog=r,n.callDepth--}function vS(n){const e=n.stack.pop();if(++n.callDepth>jr)throw new Error("Hinting call depth exceeded maximum of "+jr);const t=n.ip,i=n.prog;n.prog=n.funcs[e],Si(n),n.ip=t,n.prog=i,n.callDepth--}function xS(n){const e=n.stack,t=e.pop();e.push(e[e.length-t])}function _S(n){const e=n.stack,t=e.pop();e.push(e.splice(e.length-t,1)[0])}function yS(n){if(n.env!=="fpgm")throw new Error("FDEF not allowed here");const e=n.stack,t=n.prog;let i=n.ip;const s=e.pop(),r=i;for(;t[++i]!==45;);n.ip=i,n.funcs[s]=t.slice(r+1,i)}function xu(n,e){const t=e.stack.pop(),i=e.z0[t],s=e.fv,r=e.pv;let a=r.distance(i,Cs);n&&(a=e.round(a)),s.setRelative(i,Cs,a,r),s.touch(i),e.rp0=e.rp1=t}function _u(n,e){const t=e.z2,i=t.length-2;let s,r,a;for(let o=0;o<i;o++)s=t[o],!n.touched(s)&&(r=s.prevTouched(n),r!==s&&(a=s.nextTouched(n),r===a&&n.setRelative(s,s,n.distance(r,r,!1,!0),n,!0),n.interpolate(s,r,a,n)))}function yu(n,e){const t=e.stack,i=n?e.rp1:e.rp2,s=(n?e.z0:e.z1)[i],r=e.fv,a=e.pv;let o=e.loop;const l=e.z2;for(;o--;){const c=t.pop(),u=l[c],h=a.distance(s,s,!1,!0);r.setRelative(u,u,h,a),r.touch(u)}e.loop=1}function Su(n,e){const t=e.stack,i=n?e.rp1:e.rp2,s=(n?e.z0:e.z1)[i],r=e.fv,a=e.pv,o=t.pop(),l=e.z2[e.contours[o]];let c=l;const u=a.distance(s,s,!1,!0);do c!==s&&r.setRelative(c,c,u,a),c=c.nextPointOnContour;while(c!==l)}function bu(n,e){const t=e.stack,i=n?e.rp1:e.rp2,s=(n?e.z0:e.z1)[i],r=e.fv,a=e.pv,o=t.pop();let l;switch(o){case 0:l=e.tZone;break;case 1:l=e.gZone;break;default:throw new Error("Invalid zone")}let c;const u=a.distance(s,s,!1,!0),h=l.length-2;for(let f=0;f<h;f++)c=l[f],r.setRelative(c,c,u,a)}function SS(n){const e=n.stack;let t=n.loop;const i=n.fv,s=e.pop()/64,r=n.z2;for(;t--;){const a=e.pop(),o=r[a];i.setRelative(o,o,s),i.touch(o)}n.loop=1}function bS(n){const e=n.stack,t=n.rp1,i=n.rp2;let s=n.loop;const r=n.z0[t],a=n.z1[i],o=n.fv,l=n.dpv,c=n.z2;for(;s--;){const u=e.pop(),h=c[u];o.interpolate(h,r,a,l),o.touch(h)}n.loop=1}function Mu(n,e){const t=e.stack,i=t.pop()/64,s=t.pop(),r=e.z1[s],a=e.z0[e.rp0],o=e.fv,l=e.pv;o.setRelative(r,a,i,l),o.touch(r),e.rp1=e.rp0,e.rp2=s,n&&(e.rp0=s)}function MS(n){const e=n.stack,t=n.rp0,i=n.z0[t];let s=n.loop;const r=n.fv,a=n.pv,o=n.z1;for(;s--;){const l=e.pop(),c=o[l];r.setRelative(c,i,0,a),r.touch(c)}n.loop=1}function TS(n){n.round=Hy}function Tu(n,e){const t=e.stack,i=t.pop(),s=t.pop(),r=e.z0[s],a=e.fv,o=e.pv;let l=e.cvt[i],c=o.distance(r,Cs);n&&(Math.abs(c-l)<e.cvCutIn&&(c=l),c=e.round(c)),a.setRelative(r,Cs,c,o),e.zp0===0&&(r.xo=r.x,r.yo=r.y),a.touch(r),e.rp0=e.rp1=s}function ES(n){const e=n.prog;let t=n.ip;const i=n.stack,s=e[++t];for(let r=0;r<s;r++)i.push(e[++t]);n.ip=t}function AS(n){let e=n.ip;const t=n.prog,i=n.stack,s=t[++e];for(let r=0;r<s;r++){let a=t[++e]<<8|t[++e];a&32768&&(a=-((a^65535)+1)),i.push(a)}n.ip=e}function CS(n){const e=n.stack;let t=n.store;t||(t=n.store=[]);const i=e.pop(),s=e.pop();t[s]=i}function wS(n){const e=n.stack,t=n.store,i=e.pop(),s=t&&t[i]||0;e.push(s)}function RS(n){const e=n.stack,t=e.pop(),i=e.pop();n.cvt[i]=t/64}function LS(n){const e=n.stack,t=e.pop();e.push(n.cvt[t]*64)}function Eu(n,e){const t=e.stack,i=t.pop(),s=e.z2[i];t.push(e.dpv.distance(s,Cs,n,!1)*64)}function Au(n,e){const t=e.stack,i=t.pop(),s=t.pop(),r=e.z1[i],a=e.z0[s],o=e.dpv.distance(a,r,n,n);e.stack.push(Math.round(o*64))}function DS(n){n.stack.push(n.ppem)}function PS(n){n.autoFlip=!0}function US(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i<t?1:0)}function IS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i<=t?1:0)}function OS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i>t?1:0)}function FS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i>=t?1:0)}function NS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(t===i?1:0)}function kS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(t!==i?1:0)}function BS(n){const e=n.stack,t=e.pop();e.push(Math.trunc(t)&1?1:0)}function zS(n){const e=n.stack,t=e.pop();e.push(Math.trunc(t)&1?0:1)}function HS(n){n.stack.pop()||bf(n,!0)}function GS(n){}function VS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(t&&i?1:0)}function WS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(t||i?1:0)}function XS(n){const e=n.stack,t=e.pop();e.push(t?0:1)}function Wa(n,e){const t=e.stack,i=t.pop(),s=e.fv,r=e.pv,a=e.ppem,o=e.deltaBase+(n-1)*16,l=e.deltaShift,c=e.z0;for(let u=0;u<i;u++){const h=t.pop(),f=t.pop();if(o+((f&240)>>4)!==a)continue;let p=(f&15)-8;p>=0&&p++;const v=c[h];s.setRelative(v,v,p*l,r)}}function qS(n){const t=n.stack.pop();n.deltaBase=t}function YS(n){const t=n.stack.pop();n.deltaShift=Math.pow(.5,t)}function jS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i+t)}function $S(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i-t)}function ZS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i*64/t)}function KS(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(i*t/64)}function JS(n){const e=n.stack,t=e.pop();e.push(Math.abs(t))}function QS(n){const e=n.stack;let t=e.pop();e.push(-t)}function e1(n){const e=n.stack,t=e.pop();e.push(Math.floor(t/64)*64)}function t1(n){const e=n.stack,t=e.pop();e.push(Math.ceil(t/64)*64)}function br(n,e){const t=e.stack,i=t.pop();t.push(e.round(i/64)*64)}function n1(n){const e=n.stack,t=e.pop(),i=e.pop();n.cvt[i]=t*n.ppem/n.font.unitsPerEm}function Xa(n,e){const t=e.stack,i=t.pop(),s=e.ppem,r=e.deltaBase+(n-1)*16,a=e.deltaShift;for(let o=0;o<i;o++){const l=t.pop(),c=t.pop();if(r+((c&240)>>4)!==s)continue;let h=(c&15)-8;h>=0&&h++;const f=h*a;e.cvt[l]+=f}}function i1(n){let e=n.stack.pop();n.round=Sf;let t;switch(e&192){case 0:t=.5;break;case 64:t=1;break;case 128:t=2;break;default:throw new Error("invalid SROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function s1(n){let e=n.stack.pop();n.round=Sf;let t;switch(e&192){case 0:t=Math.sqrt(2)/2;break;case 64:t=Math.sqrt(2);break;case 128:t=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function r1(n){n.round=zy}function a1(n){n.round=Vy}function o1(n){n.round=Wy}function l1(n){n.stack.pop()}function Cu(n,e){const t=e.stack,i=t.pop(),s=t.pop(),r=e.z2[i],a=e.z1[s];let o,l;n?(o=r.y-a.y,l=a.x-r.x):(o=a.x-r.x,l=a.y-r.y),e.dpv=ks(o,l)}function c1(n){const e=n.stack,t=e.pop();let i=0;t&1&&(i=35),t&32&&(i|=4096),e.push(i)}function u1(n){const e=n.stack,t=e.pop(),i=e.pop(),s=e.pop();e.push(i),e.push(t),e.push(s)}function h1(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(Math.max(i,t))}function f1(n){const e=n.stack,t=e.pop(),i=e.pop();e.push(Math.min(i,t))}function d1(n){n.stack.pop()}function p1(n){const e=n.stack.pop();let t=n.stack.pop();switch(e){case 1:n.inhibitGridFit=!!t;return;case 2:n.ignoreCvt=!!t;return;default:throw new Error("invalid INSTCTRL[] selector")}}function Wn(n,e){const t=e.stack,i=e.prog;let s=e.ip;for(let r=0;r<n;r++)t.push(i[++s]);e.ip=s}function Xn(n,e){let t=e.ip;const i=e.prog,s=e.stack;for(let r=0;r<n;r++){let a=i[++t]<<8|i[++t];a&32768&&(a=-((a^65535)+1)),s.push(a)}e.ip=t}function xe(n,e,t,i,s,r){const a=r.stack,o=n&&a.pop(),l=a.pop(),c=r.rp0,u=r.z0[c],h=r.z1[l],f=r.minDis,d=r.fv,p=r.dpv;let v,g,m;v=p.distance(h,u,!0,!0),g=v>=0?1:-1,v=Math.abs(v),n&&(m=r.cvt[o],i&&Math.abs(v-m)<r.cvCutIn&&(v=m)),t&&v<f&&(v=f),i&&(v=r.round(v)),d.setRelative(h,u,g*v,p),d.touch(h),r.rp1=r.rp0,r.rp2=l,e&&(r.rp0=l)}vf=[du.bind(void 0,Pn),du.bind(void 0,gn),pu.bind(void 0,Pn),pu.bind(void 0,gn),mu.bind(void 0,Pn),mu.bind(void 0,gn),gu.bind(void 0,0),gu.bind(void 0,1),vu.bind(void 0,0),vu.bind(void 0,1),qy,Yy,jy,$y,Zy,Ky,Jy,Qy,eS,tS,nS,iS,sS,rS,aS,oS,lS,cS,uS,hS,void 0,void 0,fS,Va,dS,pS,mS,xS,_S,void 0,void 0,void 0,gS,vS,yS,void 0,xu.bind(void 0,0),xu.bind(void 0,1),_u.bind(void 0,Pn),_u.bind(void 0,gn),yu.bind(void 0,0),yu.bind(void 0,1),Su.bind(void 0,0),Su.bind(void 0,1),bu.bind(void 0,0),bu.bind(void 0,1),SS,bS,Mu.bind(void 0,0),Mu.bind(void 0,1),MS,TS,Tu.bind(void 0,0),Tu.bind(void 0,1),ES,AS,CS,wS,RS,LS,Eu.bind(void 0,0),Eu.bind(void 0,1),void 0,Au.bind(void 0,0),Au.bind(void 0,1),DS,void 0,PS,void 0,void 0,US,IS,OS,FS,NS,kS,BS,zS,HS,GS,VS,WS,XS,Wa.bind(void 0,1),qS,YS,jS,$S,ZS,KS,JS,QS,e1,t1,br.bind(void 0,0),br.bind(void 0,1),br.bind(void 0,2),br.bind(void 0,3),void 0,void 0,void 0,void 0,n1,Wa.bind(void 0,2),Wa.bind(void 0,3),Xa.bind(void 0,1),Xa.bind(void 0,2),Xa.bind(void 0,3),i1,s1,void 0,void 0,r1,void 0,a1,o1,Va,Va,void 0,void 0,void 0,void 0,void 0,l1,Cu.bind(void 0,0),Cu.bind(void 0,1),c1,void 0,u1,h1,f1,d1,p1,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,Wn.bind(void 0,1),Wn.bind(void 0,2),Wn.bind(void 0,3),Wn.bind(void 0,4),Wn.bind(void 0,5),Wn.bind(void 0,6),Wn.bind(void 0,7),Wn.bind(void 0,8),Xn.bind(void 0,1),Xn.bind(void 0,2),Xn.bind(void 0,3),Xn.bind(void 0,4),Xn.bind(void 0,5),Xn.bind(void 0,6),Xn.bind(void 0,7),Xn.bind(void 0,8),xe.bind(void 0,0,0,0,0,0),xe.bind(void 0,0,0,0,0,1),xe.bind(void 0,0,0,0,0,2),xe.bind(void 0,0,0,0,0,3),xe.bind(void 0,0,0,0,1,0),xe.bind(void 0,0,0,0,1,1),xe.bind(void 0,0,0,0,1,2),xe.bind(void 0,0,0,0,1,3),xe.bind(void 0,0,0,1,0,0),xe.bind(void 0,0,0,1,0,1),xe.bind(void 0,0,0,1,0,2),xe.bind(void 0,0,0,1,0,3),xe.bind(void 0,0,0,1,1,0),xe.bind(void 0,0,0,1,1,1),xe.bind(void 0,0,0,1,1,2),xe.bind(void 0,0,0,1,1,3),xe.bind(void 0,0,1,0,0,0),xe.bind(void 0,0,1,0,0,1),xe.bind(void 0,0,1,0,0,2),xe.bind(void 0,0,1,0,0,3),xe.bind(void 0,0,1,0,1,0),xe.bind(void 0,0,1,0,1,1),xe.bind(void 0,0,1,0,1,2),xe.bind(void 0,0,1,0,1,3),xe.bind(void 0,0,1,1,0,0),xe.bind(void 0,0,1,1,0,1),xe.bind(void 0,0,1,1,0,2),xe.bind(void 0,0,1,1,0,3),xe.bind(void 0,0,1,1,1,0),xe.bind(void 0,0,1,1,1,1),xe.bind(void 0,0,1,1,1,2),xe.bind(void 0,0,1,1,1,3),xe.bind(void 0,1,0,0,0,0),xe.bind(void 0,1,0,0,0,1),xe.bind(void 0,1,0,0,0,2),xe.bind(void 0,1,0,0,0,3),xe.bind(void 0,1,0,0,1,0),xe.bind(void 0,1,0,0,1,1),xe.bind(void 0,1,0,0,1,2),xe.bind(void 0,1,0,0,1,3),xe.bind(void 0,1,0,1,0,0),xe.bind(void 0,1,0,1,0,1),xe.bind(void 0,1,0,1,0,2),xe.bind(void 0,1,0,1,0,3),xe.bind(void 0,1,0,1,1,0),xe.bind(void 0,1,0,1,1,1),xe.bind(void 0,1,0,1,1,2),xe.bind(void 0,1,0,1,1,3),xe.bind(void 0,1,1,0,0,0),xe.bind(void 0,1,1,0,0,1),xe.bind(void 0,1,1,0,0,2),xe.bind(void 0,1,1,0,0,3),xe.bind(void 0,1,1,0,1,0),xe.bind(void 0,1,1,0,1,1),xe.bind(void 0,1,1,0,1,2),xe.bind(void 0,1,1,0,1,3),xe.bind(void 0,1,1,1,0,0),xe.bind(void 0,1,1,1,0,1),xe.bind(void 0,1,1,1,0,2),xe.bind(void 0,1,1,1,0,3),xe.bind(void 0,1,1,1,1,0),xe.bind(void 0,1,1,1,1,1),xe.bind(void 0,1,1,1,1,2),xe.bind(void 0,1,1,1,1,3)];var m1=_f;function us(n){this.char=n,this.state={},this.activeState=null}function Ml(n,e,t){this.contextName=t,this.startIndex=n,this.endOffset=e}function g1(n,e,t){this.contextName=n,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=t}function Ut(n,e){this.context=n,this.index=e,this.length=n.length,this.current=n[e],this.backtrack=n.slice(0,e),this.lookahead=n.slice(e+1)}function sa(n){this.eventId=n,this.subscribers=[]}function v1(n){const e=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];for(let i=0;i<e.length;i++){const s=e[i];Object.defineProperty(this.events,s,{value:new sa(s)})}if(n)for(let i=0;i<e.length;i++){const s=e[i],r=n[s];typeof r=="function"&&this.events[s].subscribe(r)}const t=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];for(let i=0;i<t.length;i++){const s=t[i];this.events[s].subscribe(this.updateContextsRanges)}}function mt(n){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],v1.call(this,n)}us.prototype.setState=function(n,e){return this.state[n]=e,this.activeState={key:n,value:this.state[n]},this.activeState};us.prototype.getState=function(n){return this.state[n]||null};mt.prototype.inboundIndex=function(n){return n>=0&&n<this.tokens.length};mt.prototype.composeRUD=function(n){const t=n.map(s=>this[s[0]].apply(this,s.slice(1).concat(!0))),i=s=>typeof s=="object"&&Object.prototype.hasOwnProperty.call(s,"FAIL");if(t.every(i))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:t.filter(i)};this.dispatch("composeRUD",[t.filter(s=>!i(s))])};mt.prototype.replaceRange=function(n,e,t,i){e=e!==null?e:this.tokens.length;const s=t.every(r=>r instanceof us);if(!isNaN(n)&&this.inboundIndex(n)&&s){const r=this.tokens.splice.apply(this.tokens,[n,e].concat(t));return i||this.dispatch("replaceToken",[n,e,t]),[r,t]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};mt.prototype.replaceToken=function(n,e,t){if(!isNaN(n)&&this.inboundIndex(n)&&e instanceof us){const i=this.tokens.splice(n,1,e);return t||this.dispatch("replaceToken",[n,e]),[i[0],e]}else return{FAIL:"replaceToken: invalid token or index."}};mt.prototype.removeRange=function(n,e,t){e=isNaN(e)?this.tokens.length:e;const i=this.tokens.splice(n,e);return t||this.dispatch("removeRange",[i,n,e]),i};mt.prototype.removeToken=function(n,e){if(!isNaN(n)&&this.inboundIndex(n)){const t=this.tokens.splice(n,1);return e||this.dispatch("removeToken",[t,n]),t}else return{FAIL:"removeToken: invalid token index."}};mt.prototype.insertToken=function(n,e,t){return n.every(s=>s instanceof us)?(this.tokens.splice.apply(this.tokens,[e,0].concat(n)),t||this.dispatch("insertToken",[n,e]),n):{FAIL:"insertToken: invalid token(s)."}};mt.prototype.registerModifier=function(n,e,t){this.events.newToken.subscribe(function(i,s){const r=[i,s],a=e===null||e.apply(this,r)===!0,o=[i,s];if(a){let l=t.apply(this,o);i.setState(n,l)}}),this.registeredModifiers.push(n)};sa.prototype.subscribe=function(n){return typeof n=="function"?this.subscribers.push(n)-1:{FAIL:`invalid '${this.eventId}' event handler`}};sa.prototype.unsubscribe=function(n){this.subscribers.splice(n,1)};Ut.prototype.setCurrentIndex=function(n){this.index=n,this.current=this.context[n],this.backtrack=this.context.slice(0,n),this.lookahead=this.context.slice(n+1)};Ut.prototype.get=function(n){switch(!0){case n===0:return this.current;case(n<0&&Math.abs(n)<=this.backtrack.length):return this.backtrack.slice(n)[0];case(n>0&&n<=this.lookahead.length):return this.lookahead[n-1];default:return null}};mt.prototype.rangeToText=function(n){if(n instanceof Ml)return this.getRangeTokens(n).map(e=>e.char).join("")};mt.prototype.getText=function(){return this.tokens.map(n=>n.char).join("")};mt.prototype.getContext=function(n){let e=this.registeredContexts[n];return e||null};mt.prototype.on=function(n,e){const t=this.events[n];return t?t.subscribe(e):null};mt.prototype.dispatch=function(n,e){const t=this.events[n];if(t instanceof sa)for(let i=0;i<t.subscribers.length;i++)t.subscribers[i].apply(this,e||[])};mt.prototype.registerContextChecker=function(n,e,t){if(this.getContext(n))return{FAIL:`context name '${n}' is already registered.`};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof t!="function")return{FAIL:"missing context end check."};const i=new g1(n,e,t);return this.registeredContexts[n]=i,this.contextCheckers.push(i),i};mt.prototype.getRangeTokens=function(n){const e=n.startIndex+n.endOffset;return[].concat(this.tokens.slice(n.startIndex,e))};mt.prototype.getContextRanges=function(n){const e=this.getContext(n);return e?e.ranges:{FAIL:`context checker '${n}' is not registered.`}};mt.prototype.resetContextsRanges=function(){const n=this.registeredContexts;for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)){const t=n[e];t.ranges=[]}};mt.prototype.updateContextsRanges=function(){this.resetContextsRanges();const n=this.tokens.map(e=>e.char);for(let e=0;e<n.length;e++){const t=new Ut(n,e);this.runContextCheck(t)}this.dispatch("updateContextsRanges",[this.registeredContexts])};mt.prototype.setEndOffset=function(n,e){const t=this.getContext(e).openRange.startIndex;let i=new Ml(t,n,e);const s=this.getContext(e).ranges;return i.rangeId=`${e}.${s.length}`,s.push(i),this.getContext(e).openRange=null,i};mt.prototype.runContextCheck=function(n){const e=n.index;for(let t=0;t<this.contextCheckers.length;t++){const i=this.contextCheckers[t];let s=i.contextName,r=this.getContext(s).openRange;if(!r&&i.checkStart(n)&&(r=new Ml(e,null,s),this.getContext(s).openRange=r,this.dispatch("contextStart",[s,e])),r&&i.checkEnd(n)){const a=e-r.startIndex+1,o=this.setEndOffset(a,s);this.dispatch("contextEnd",[s,o])}}};mt.prototype.tokenize=function(n){this.tokens=[],this.resetContextsRanges();let e=Array.from(n);this.dispatch("start");for(let t=0;t<e.length;t++){const i=e[t],s=new Ut(e,t);this.dispatch("next",[s]),this.runContextCheck(s);let r=new us(i);this.tokens.push(r),this.dispatch("newToken",[r,s])}return this.dispatch("end",[this.tokens]),this.tokens};var x1=mt;function Jn(n){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(n)}function Mf(n){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(n)}function ti(n){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(n)}function Dr(n){return/[\u0E00-\u0E7F]/.test(n)}function Pr(n){return/[A-z]/.test(n)}function _1(n){return/\s/.test(n)}function Wt(n){this.font=n,this.features={}}function Yn(n){this.id=n.id,this.tag=n.tag,this.substitution=n.substitution}function ni(n,e){if(!n)return-1;switch(e.format){case 1:return e.glyphs.indexOf(n);case 2:{let t=e.ranges;for(let i=0;i<t.length;i++){const s=t[i];if(n>=s.start&&n<=s.end){let r=n-s.start;return s.index+r}}break}default:return-1}return-1}function y1(n,e){return ni(n,e.coverage)===-1?null:n+e.deltaGlyphId}function S1(n,e){let t=ni(n,e.coverage);return t===-1?null:e.substitute[t]}function qa(n,e){let t=[];for(let i=0;i<n.length;i++){const s=n[i];let r=e.current;r=Array.isArray(r)?r[0]:r;const a=ni(r,s);a!==-1&&t.push(a)}return t.length!==n.length?-1:t}function b1(n,e){const t=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(n.context.length<t)return[];let i=qa(e.inputCoverage,n);if(i===-1)return[];const s=e.inputCoverage.length-1;if(n.lookahead.length<e.lookaheadCoverage.length)return[];let r=n.lookahead.slice(s);for(;r.length&&ti(r[0].char);)r.shift();const a=new Ut(r,0);let o=qa(e.lookaheadCoverage,a),l=[].concat(n.backtrack);for(l.reverse();l.length&&ti(l[0].char);)l.shift();if(l.length<e.backtrackCoverage.length)return[];const c=new Ut(l,0);let u=qa(e.backtrackCoverage,c);const h=i.length===e.inputCoverage.length&&o.length===e.lookaheadCoverage.length&&u.length===e.backtrackCoverage.length;let f=[];if(h)for(let d=0;d<e.lookupRecords.length;d++){const p=e.lookupRecords[d],v=p.lookupListIndex,g=this.getLookupByIndex(v);for(let m=0;m<g.subtables.length;m++){let M=g.subtables[m],b,S=this.getSubstitutionType(g,M);if(S==="71"?(S=this.getSubstitutionType(M,M.extension),b=this.getLookupMethod(M,M.extension),M=M.extension):b=this.getLookupMethod(g,M),S==="12"){const N=n.get(p.sequenceIndex),A=b(N);A&&f.push(A)}else if(S==="21"){const N=n.get(p.sequenceIndex),A=b(N);A&&f.push(A)}else throw new Error(`Substitution type ${S} is not supported in chaining substitution`)}}return f}function M1(n,e){let t=n.current,i=ni(t,e.coverage);if(i===-1)return null;let s,r=e.ligatureSets[i];for(let a=0;a<r.length;a++){s=r[a];for(let o=0;o<s.components.length;o++){const l=n.lookahead[o],c=s.components[o];if(l!==c)break;if(o===s.components.length-1)return s}}return null}function T1(n,e){let t=n.current;if(ni(t,e.coverage)===-1)return null;for(const s of e.ruleSets)for(const r of s){let a=!0;for(let o=0;o<r.input.length;o++)if(n.lookahead[o]!==r.input[o]){a=!1;break}if(a){let o=[];o.push(t);for(let c=0;c<r.input.length;c++)o.push(r.input[c]);const l=(c,u)=>{const{lookupListIndex:h,sequenceIndex:f}=u,{subtables:d}=this.getLookupByIndex(h);for(const p of d)ni(c[f],p.coverage)!==-1&&(c[f]=p.deltaGlyphId)};for(let c=0;c<r.lookupRecords.length;c++){const u=r.lookupRecords[c];l(o,u)}return o}}return null}function E1(n,e){if(n.context.length<e.coverages.length)return[];for(let i=0;i<e.coverages.length;i++){let s=n.get(i);if(s=Array.isArray(s)?s[0]:s,ni(s,e.coverages[i])===-1)return[]}let t=[];for(let i=0;i<e.lookupRecords.length;i++){const s=e.lookupRecords[i],r=s.lookupListIndex,a=this.getLookupByIndex(r);for(let o=0;o<a.subtables.length;o++){let l=a.subtables[o],c,u=this.getSubstitutionType(a,l);if(u==="71"?(u=this.getSubstitutionType(l,l.extension),c=this.getLookupMethod(l,l.extension),l=l.extension):c=this.getLookupMethod(a,l),u==="12"){const h=n.get(s.sequenceIndex),f=c(h);f&&t.push(f)}else if(u==="21"){const h=n.get(s.sequenceIndex),f=c(h);f&&t.push(f)}}}return t}function A1(n,e){let t=ni(n,e.coverage);return t===-1?null:e.sequences[t]}Wt.prototype.getDefaultScriptFeaturesIndexes=function(){const n=this.font.tables.gsub.scripts;for(let e=0;e<n.length;e++){const t=n[e];if(t.tag==="DFLT")return t.script.defaultLangSys.featureIndexes}return[]};Wt.prototype.getScriptFeaturesIndexes=function(n){if(!this.font.tables.gsub)return[];if(!n)return this.getDefaultScriptFeaturesIndexes();const t=this.font.tables.gsub.scripts;for(let i=0;i<t.length;i++){const s=t[i];if(s.tag===n&&s.script.defaultLangSys)return s.script.defaultLangSys.featureIndexes;{let r=s.langSysRecords;if(r)for(let a=0;a<r.length;a++){const o=r[a];if(o.tag===n)return o.langSys.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};Wt.prototype.mapTagsToFeatures=function(n,e){let t={};for(let i=0;i<n.length;i++){const s=n[i].tag,r=n[i].feature;t[s]=r}this.features[e].tags=t};Wt.prototype.getScriptFeatures=function(n){let e=this.features[n];if(Object.prototype.hasOwnProperty.call(this.features,n))return e;const t=this.getScriptFeaturesIndexes(n);if(!t)return null;const i=this.font.tables.gsub;return e=t.map(s=>i.features[s]),this.features[n]=e,this.mapTagsToFeatures(e,n),e};Wt.prototype.getSubstitutionType=function(n,e){const t=n.lookupType.toString(),i=e.substFormat.toString();return t+i};Wt.prototype.getLookupMethod=function(n,e){let t=this.getSubstitutionType(n,e);switch(t){case"11":return i=>y1.apply(this,[i,e]);case"12":return i=>S1.apply(this,[i,e]);case"63":return i=>b1.apply(this,[i,e]);case"41":return i=>M1.apply(this,[i,e]);case"21":return i=>A1.apply(this,[i,e]);case"51":return i=>T1.apply(this,[i,e]);case"53":return i=>E1.apply(this,[i,e]);default:throw new Error(`substitutionType : ${t} lookupType: ${n.lookupType} - substFormat: ${e.substFormat} is not yet supported`)}};Wt.prototype.lookupFeature=function(n){let e=n.contextParams,t=e.index;const i=this.getFeature({tag:n.tag,script:n.script});if(!i)return new Error(`font '${(this.font.names.unicode||this.font.names.windows||this.font.names.macintosh).fullName.en}' doesn't support feature '${n.tag}' for script '${n.script}'.`);const s=this.getFeatureLookups(i),r=[].concat(e.context);for(let a=0;a<s.length;a++){const o=s[a],l=this.getLookupSubtables(o);for(let c=0;c<l.length;c++){let u=l[c],h=this.getSubstitutionType(o,u),f;h==="71"?(h=this.getSubstitutionType(u,u.extension),f=this.getLookupMethod(u,u.extension),u=u.extension):f=this.getLookupMethod(o,u);let d;switch(h){case"11":d=f(e.current),d&&r.splice(t,1,new Yn({id:11,tag:n.tag,substitution:d}));break;case"12":d=f(e.current),d&&r.splice(t,1,new Yn({id:12,tag:n.tag,substitution:d}));break;case"63":d=f(e),Array.isArray(d)&&d.length&&r.splice(t,1,new Yn({id:63,tag:n.tag,substitution:d}));break;case"41":d=f(e),d&&r.splice(t,1,new Yn({id:41,tag:n.tag,substitution:d}));break;case"21":d=f(e.current),d&&r.splice(t,1,new Yn({id:21,tag:n.tag,substitution:d}));break;case"51":case"53":d=f(e),Array.isArray(d)&&d.length&&r.splice(t,1,new Yn({id:parseInt(h),tag:n.tag,substitution:d}));break}e=new Ut(r,t),!(Array.isArray(d)&&!d.length)&&(d=null)}}return r.length?r:null};Wt.prototype.supports=function(n){if(!n.script)return!1;this.getScriptFeatures(n.script);const e=Object.prototype.hasOwnProperty.call(this.features,n.script);if(!n.tag)return e;const t=this.features[n.script].some(i=>i.tag===n.tag);return e&&t};Wt.prototype.getLookupSubtables=function(n){return n.subtables||null};Wt.prototype.getLookupByIndex=function(n){return this.font.tables.gsub.lookups[n]||null};Wt.prototype.getFeatureLookups=function(n){return n.lookupListIndexes.map(this.getLookupByIndex.bind(this))};Wt.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};Object.prototype.hasOwnProperty.call(this.features,e.script)||this.getScriptFeatures(e.script);const t=this.features[e.script];return t?t.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:`No feature for script ${e.script}`}};var C1=Wt;function w1(n){const e=n.current,t=n.get(-1);return t===null&&Jn(e)||!Jn(t)&&Jn(e)}function R1(n){const e=n.get(1);return e===null||!Jn(e)}var L1={startCheck:w1,endCheck:R1};function D1(n){const e=n.current,t=n.get(-1);return(Jn(e)||ti(e))&&!Jn(t)}function P1(n){const e=n.get(1);switch(!0){case e===null:return!0;case(!Jn(e)&&!ti(e)):{const t=_1(e);if(!t)return!0;if(t){let i=!1;if(i=n.lookahead.some(s=>Jn(s)||ti(s)),!i)return!0}break}default:return!1}}var U1={startCheck:D1,endCheck:P1};function I1(n,e,t){e[t].setState(n.tag,n.substitution)}function O1(n,e,t){e[t].setState(n.tag,n.substitution)}function Ya(n,e,t){for(let i=0;i<n.substitution.length;i++){const s=n.substitution[i],r=e[t+i];if(Array.isArray(s)){s.length?r.setState(n.tag,s[0]):r.setState("deleted",!0);continue}r.setState(n.tag,s)}}function F1(n,e,t){let i=e[t];i.setState(n.tag,n.substitution.ligGlyph);const s=n.substitution.components.length;for(let r=0;r<s;r++)i=e[t+r+1],i.setState("deleted",!0)}var wu={11:I1,12:O1,63:Ya,41:F1,51:Ya,53:Ya};function N1(n,e,t){n instanceof Yn&&wu[n.id]&&wu[n.id](n,e,t)}var Ei=N1;function k1(n){let e=[].concat(n.backtrack);for(let t=e.length-1;t>=0;t--){const i=e[t],s=Mf(i),r=ti(i);if(!s&&!r)return!0;if(s)return!1}return!1}function B1(n){if(Mf(n.current))return!1;for(let e=0;e<n.lookahead.length;e++){const t=n.lookahead[e];if(!ti(t))return!0}return!1}function z1(n){const e="arab",t=this.featuresTags[e],i=this.tokenizer.getRangeTokens(n);if(i.length===1)return;let s=new Ut(i.map(a=>a.getState("glyphIndex")),0);const r=new Ut(i.map(a=>a.char),0);for(let a=0;a<i.length;a++){const o=i[a];if(ti(o.char))continue;s.setCurrentIndex(a),r.setCurrentIndex(a);let l=0;k1(r)&&(l|=1),B1(r)&&(l|=2);let c;switch(l){case 1:c="fina";break;case 2:c="init";break;case 3:c="medi";break}if(t.indexOf(c)===-1)continue;let u=this.query.lookupFeature({tag:c,script:e,contextParams:s});if(u instanceof Error){console.info(u.message);continue}for(let h=0;h<u.length;h++){const f=u[h];f instanceof Yn&&(Ei(f,i,h),s.context[h]=f.substitution)}}}var H1=z1;function Ru(n,e){const t=n.map(i=>i.activeState.value);return new Ut(t,0)}function G1(n){const e="arab";let t=this.tokenizer.getRangeTokens(n),i=Ru(t);for(let s=0;s<i.context.length;s++){i.setCurrentIndex(s);let r=this.query.lookupFeature({tag:"rlig",script:e,contextParams:i});if(r.length){for(let a=0;a<r.length;a++){const o=r[a];Ei(o,t,s)}i=Ru(t)}}}var V1=G1;function W1(n){return n.index===0&&n.context.length>1}function X1(n){return n.index===n.context.length-1}var q1={startCheck:W1,endCheck:X1};function Lu(n,e){const t=n.map(i=>i.activeState.value);return new Ut(t,0)}function Y1(n){const e="delf",t="ccmp";let i=this.tokenizer.getRangeTokens(n),s=Lu(i);for(let r=0;r<s.context.length;r++){if(!this.query.getFeature({tag:t,script:e,contextParams:s}))continue;s.setCurrentIndex(r);let a=this.query.lookupFeature({tag:t,script:e,contextParams:s});if(a.length){for(let o=0;o<a.length;o++){const l=a[o];Ei(l,i,r)}s=Lu(i)}}}var j1=Y1;function $1(n){const e=n.current,t=n.get(-1);return t===null&&Pr(e)||!Pr(t)&&Pr(e)}function Z1(n){const e=n.get(1);return e===null||!Pr(e)}var K1={startCheck:$1,endCheck:Z1};function Du(n,e){const t=n.map(i=>i.activeState.value);return new Ut(t,0)}function J1(n){const e="latn";let t=this.tokenizer.getRangeTokens(n),i=Du(t);for(let s=0;s<i.context.length;s++){i.setCurrentIndex(s);let r=this.query.lookupFeature({tag:"liga",script:e,contextParams:i});if(r.length){for(let a=0;a<r.length;a++){const o=r[a];Ei(o,t,s)}i=Du(t)}}}var Q1=J1;function eb(n){const e=n.current,t=n.get(-1);return t===null&&Dr(e)||!Dr(t)&&Dr(e)}function tb(n){const e=n.get(1);return e===null||!Dr(e)}var nb={startCheck:eb,endCheck:tb};function Pu(n,e){const t=n.map(i=>i.activeState.value);return new Ut(t,e||0)}function ib(n){const e="thai";let t=this.tokenizer.getRangeTokens(n),i=Pu(t,0);for(let s=0;s<i.context.length;s++){i.setCurrentIndex(s);let r=this.query.lookupFeature({tag:"ccmp",script:e,contextParams:i});if(r.length){for(let a=0;a<r.length;a++){const o=r[a];Ei(o,t,s)}i=Pu(t,s)}}}var sb=ib;function Uu(n,e){const t=n.map(i=>i.activeState.value);return new Ut(t,e||0)}function rb(n){const e="thai";let t=this.tokenizer.getRangeTokens(n),i=Uu(t,0);for(let s=0;s<i.context.length;s++){i.setCurrentIndex(s);let r=this.query.lookupFeature({tag:"liga",script:e,contextParams:i});if(r.length){for(let a=0;a<r.length;a++){const o=r[a];Ei(o,t,s)}i=Uu(t,s)}}}var ab=rb;function Iu(n,e){const t=n.map(i=>i.activeState.value);return new Ut(t,e||0)}function ob(n){const e="thai";let t=this.tokenizer.getRangeTokens(n),i=Iu(t,0);for(let s=0;s<i.context.length;s++){i.setCurrentIndex(s);let r=this.query.lookupFeature({tag:"rlig",script:e,contextParams:i});if(r.length){for(let a=0;a<r.length;a++){const o=r[a];Ei(o,t,s)}i=Iu(t,s)}}}var lb=ob;function $o(n){if(n===null)return!1;const e=n.codePointAt(0);return e>=6155&&e<=6157||e>=65024&&e<=65039||e>=917760&&e<=917999}function cb(n){const e=n.current,t=n.get(1);return t===null&&$o(e)||$o(t)}function ub(n){const e=n.get(1);return e===null||!$o(e)}var hb={startCheck:cb,endCheck:ub};function fb(n){const e=this.query.font,t=this.tokenizer.getRangeTokens(n);if(t[1].setState("deleted",!0),e.tables.cmap&&e.tables.cmap.varSelectorList){const i=t[0].char.codePointAt(0),s=t[1].char.codePointAt(0),r=e.tables.cmap.varSelectorList[s];if(r!==void 0&&r.nonDefaultUVS){const a=r.nonDefaultUVS.uvsMappings;if(a[i]){const o=a[i].glyphID;e.glyphs.glyphs[o]!==void 0&&t[0].setState("glyphIndex",o)}}}}var db=fb;function $t(n){this.baseDir=n||"ltr",this.tokenizer=new x1,this.featuresTags={}}$t.prototype.setText=function(n){this.text=n};$t.prototype.contextChecks={ccmpReplacementCheck:q1,latinWordCheck:K1,arabicWordCheck:L1,arabicSentenceCheck:U1,thaiWordCheck:nb,unicodeVariationSequenceCheck:hb};function Vi(n){const e=this.contextChecks[`${n}Check`];return this.tokenizer.registerContextChecker(n,e.startCheck,e.endCheck)}function pb(){return Vi.call(this,"ccmpReplacement"),Vi.call(this,"latinWord"),Vi.call(this,"arabicWord"),Vi.call(this,"arabicSentence"),Vi.call(this,"thaiWord"),Vi.call(this,"unicodeVariationSequence"),this.tokenizer.tokenize(this.text)}function mb(){const n=this.tokenizer.getContextRanges("arabicSentence");for(let e=0;e<n.length;e++){const t=n[e];let i=this.tokenizer.getRangeTokens(t);this.tokenizer.replaceRange(t.startIndex,t.endOffset,i.reverse())}}$t.prototype.registerFeatures=function(n,e){const t=e.filter(i=>this.query.supports({script:n,tag:i}));Object.prototype.hasOwnProperty.call(this.featuresTags,n)?this.featuresTags[n]=this.featuresTags[n].concat(t):this.featuresTags[n]=t};$t.prototype.applyFeatures=function(n,e){if(!n)throw new Error("No valid font was provided to apply features");this.query||(this.query=new C1(n));for(let t=0;t<e.length;t++){const i=e[t];this.query.supports({script:i.script})&&this.registerFeatures(i.script,i.tags)}};$t.prototype.registerModifier=function(n,e,t){this.tokenizer.registerModifier(n,e,t)};function Bs(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function gb(){if(!Object.prototype.hasOwnProperty.call(this.featuresTags,"arab"))return;Bs.call(this);const e=this.tokenizer.getContextRanges("arabicWord");for(let t=0;t<e.length;t++){const i=e[t];H1.call(this,i)}}function vb(){Bs.call(this);const n=this.tokenizer.getContextRanges("ccmpReplacement");for(let e=0;e<n.length;e++){const t=n[e];j1.call(this,t)}}function xb(){if(!this.hasFeatureEnabled("arab","rlig"))return;Bs.call(this);const n=this.tokenizer.getContextRanges("arabicWord");for(let e=0;e<n.length;e++){const t=n[e];V1.call(this,t)}}function _b(){if(!this.hasFeatureEnabled("latn","liga"))return;Bs.call(this);const n=this.tokenizer.getContextRanges("latinWord");for(let e=0;e<n.length;e++){const t=n[e];Q1.call(this,t)}}function yb(){const n=this.tokenizer.getContextRanges("unicodeVariationSequence");for(let e=0;e<n.length;e++){const t=n[e];db.call(this,t)}}function Sb(){Bs.call(this);const n=this.tokenizer.getContextRanges("thaiWord");for(let e=0;e<n.length;e++){const t=n[e];this.hasFeatureEnabled("thai","liga")&&ab.call(this,t),this.hasFeatureEnabled("thai","rlig")&&lb.call(this,t),this.hasFeatureEnabled("thai","ccmp")&&sb.call(this,t)}}$t.prototype.checkContextReady=function(n){return!!this.tokenizer.getContext(n)};$t.prototype.applyFeaturesToContexts=function(){this.checkContextReady("ccmpReplacement")&&vb.call(this),this.checkContextReady("arabicWord")&&(gb.call(this),xb.call(this)),this.checkContextReady("latinWord")&&_b.call(this),this.checkContextReady("arabicSentence")&&mb.call(this),this.checkContextReady("thaiWord")&&Sb.call(this),this.checkContextReady("unicodeVariationSequence")&&yb.call(this)};$t.prototype.hasFeatureEnabled=function(n,e){return(this.featuresTags[n]||[]).indexOf(e)!==-1};$t.prototype.processText=function(n){(!this.text||this.text!==n)&&(this.setText(n),pb.call(this),this.applyFeaturesToContexts())};$t.prototype.getBidiText=function(n){return this.processText(n),this.tokenizer.getText()};$t.prototype.getTextGlyphs=function(n){this.processText(n);let e=[];for(let t=0;t<this.tokenizer.tokens.length;t++){const i=this.tokenizer.tokens[t];if(i.state.deleted)continue;const s=i.activeState.value;e.push(Array.isArray(s)?s[0]:s)}return e};var bb=$t;function ja(n){return{fontFamily:{en:n.familyName||" "},fontSubfamily:{en:n.styleName||" "},fullName:{en:n.fullName||n.familyName+" "+n.styleName},postScriptName:{en:n.postScriptName||(n.familyName+n.styleName).replace(/\s/g,"")},designer:{en:n.designer||" "},designerURL:{en:n.designerURL||" "},manufacturer:{en:n.manufacturer||" "},manufacturerURL:{en:n.manufacturerURL||" "},license:{en:n.license||" "},licenseURL:{en:n.licenseURL||" "},version:{en:n.version||"Version 0.1"},description:{en:n.description||" "},copyright:{en:n.copyright||" "},trademark:{en:n.trademark||" "}}}function nt(n){if(n=n||{},n.tables=n.tables||{},!n.empty){if(!n.familyName)throw new Error("When creating a new Font object, familyName is required.");if(!n.styleName)throw new Error("When creating a new Font object, styleName is required.");if(!n.unitsPerEm)throw new Error("When creating a new Font object, unitsPerEm is required.");if(!n.ascender)throw new Error("When creating a new Font object, ascender is required.");if(n.descender>0)throw new Error("When creating a new Font object, negative descender value is required.");this.names={},this.names.unicode=ja(n),this.names.macintosh=ja(n),this.names.windows=ja(n),this.unitsPerEm=n.unitsPerEm||1e3,this.ascender=n.ascender,this.descender=n.descender,this.createdTimestamp=n.createdTimestamp,this.italicAngle=n.italicAngle||0,this.weightClass=n.weightClass||0;let e=0;n.fsSelection?e=n.fsSelection:(this.italicAngle<0?e|=this.fsSelectionValues.ITALIC:this.italicAngle>0&&(e|=this.fsSelectionValues.OBLIQUE),this.weightClass>=600&&(e|=this.fsSelectionValues.BOLD),e===0&&(e=this.fsSelectionValues.REGULAR)),(!n.panose||!Array.isArray(n.panose))&&(n.panose=[0,0,0,0,0,0,0,0,0]),this.tables=Object.assign(n.tables,{os2:Object.assign({usWeightClass:n.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:n.widthClass||this.usWidthClasses.MEDIUM,bFamilyType:n.panose[0]||0,bSerifStyle:n.panose[1]||0,bWeight:n.panose[2]||0,bProportion:n.panose[3]||0,bContrast:n.panose[4]||0,bStrokeVariation:n.panose[5]||0,bArmStyle:n.panose[6]||0,bLetterform:n.panose[7]||0,bMidline:n.panose[8]||0,bXHeight:n.panose[9]||0,fsSelection:e},n.tables.os2)})}this.supported=!0,this.glyphs=new xn.GlyphSet(this,n.glyphs||[]),this.encoding=new Oh(this),this.position=new vy(this),this.substitution=new Ty(this),this.tables=this.tables||{},this.tables=new Proxy(this.tables,{set:(e,t,i)=>(e[t]=i,e.fvar&&(e.gvar||e.cff2)&&!this.variation&&(this.variation=new By(this)),!0)}),this.palettes=new df(this),this.layers=new Ey(this),this.svgImages=new Ay(this),this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){return this._hinting?this._hinting:this.outlinesFormat==="truetype"?this._hinting=new m1(this):null}})}nt.prototype.hasChar=function(n){return this.encoding.charToGlyphIndex(n)>0};nt.prototype.charToGlyphIndex=function(n){return this.encoding.charToGlyphIndex(n)};nt.prototype.charToGlyph=function(n){const e=this.charToGlyphIndex(n);let t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};nt.prototype.updateFeatures=function(n){return this.defaultRenderOptions.features.map(e=>e.script==="latn"?{script:"latn",tags:e.tags.filter(t=>n[t])}:e)};nt.prototype.stringToGlyphIndexes=function(n,e){const t=new bb,i=r=>this.charToGlyphIndex(r.char);t.registerModifier("glyphIndex",null,i);let s=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;return t.applyFeatures(this,s),t.getTextGlyphs(n)};nt.prototype.stringToGlyphs=function(n,e){const t=this.stringToGlyphIndexes(n,e);let i=t.length;const s=new Array(i),r=this.glyphs.get(0);for(let a=0;a<i;a+=1)s[a]=this.glyphs.get(t[a])||r;return s};nt.prototype.nameToGlyphIndex=function(n){return this.glyphNames.nameToGlyphIndex(n)};nt.prototype.nameToGlyph=function(n){const e=this.nameToGlyphIndex(n);let t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};nt.prototype.glyphIndexToName=function(n){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(n):""};nt.prototype.getKerningValue=function(n,e){n=n.index||n,e=e.index||e;const t=this.position.defaultKerningTables;return t?this.position.getKerningValue(t,n,e):this.kerningPairs[n+","+e]||0};nt.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]},{script:"thai",tags:["liga","rlig","ccmp"]}],hinting:!1,usePalette:0,drawLayers:!0,drawSVG:!0};nt.prototype.forEachGlyph=function(n,e,t,i,s,r){e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:72,s=Object.assign({},this.defaultRenderOptions,s);const a=1/this.unitsPerEm*i,o=this.stringToGlyphs(n,s);let l;if(s.kerning){const c=s.script||this.position.getDefaultScriptName();l=this.position.getKerningTables(c,s.language)}for(let c=0;c<o.length;c+=1){const u=o[c];if(r.call(this,u,e,t,i,s),u.advanceWidth&&(e+=u.advanceWidth*a),s.kerning&&c<o.length-1){const h=l?this.position.getKerningValue(l,u.index,o[c+1].index):this.getKerningValue(u,o[c+1]);e+=h*a}s.letterSpacing?e+=s.letterSpacing*i:s.tracking&&(e+=s.tracking/1e3*i)}return e};nt.prototype.getPath=function(n,e,t,i,s){s=Object.assign({},this.defaultRenderOptions,s);const r=new is;if(r._layers=[],Wh(this,r),r.stroke){const a=1/(r.unitsPerEm||1e3)*i;r.strokeWidth*=a}return this.forEachGlyph(n,e,t,i,s,(a,o,l,c)=>{const u=a.getPath(o,l,c,s,this);if(s.drawSVG||s.drawLayers){const h=u._layers;if(h&&h.length){for(let f=0;f<h.length;f++){const d=h[f];r._layers.push(d)}return}}r.extend(u)}),r};nt.prototype.getPaths=function(n,e,t,i,s){s=Object.assign({},this.defaultRenderOptions,s);const r=[];return this.forEachGlyph(n,e,t,i,s,function(a,o,l,c){const u=a.getPath(o,l,c,s,this);r.push(u)}),r};nt.prototype.getAdvanceWidth=function(n,e,t){return t=Object.assign({},this.defaultRenderOptions,t),this.forEachGlyph(n,0,0,e,t,function(){})};nt.prototype.draw=function(n,e,t,i,s,r){this.getPath(e,t,i,s,r).draw(n)};nt.prototype.drawPoints=function(n,e,t,i,s,r){r=Object.assign({},this.defaultRenderOptions,r),this.forEachGlyph(e,t,i,s,r,function(a,o,l,c){a.drawPoints(n,o,l,c,r,this)})};nt.prototype.drawMetrics=function(n,e,t,i,s,r){r=Object.assign({},this.defaultRenderOptions,r),this.forEachGlyph(e,t,i,s,r,function(a,o,l,c){a.drawMetrics(n,o,l,c)})};nt.prototype.getEnglishName=function(n){const e=(this.names.unicode||this.names.macintosh||this.names.windows)[n];if(e)return e.en};nt.prototype.validate=function(){const n=[],e=this;function t(s,r){s||(console.warn(`[opentype.js] ${r}`),n.push(r))}function i(s){const r=e.getEnglishName(s);t(r&&r.trim().length>0,"No English "+s+" specified.")}if(i("fontFamily"),i("weightName"),i("manufacturer"),i("copyright"),i("version"),t(this.unitsPerEm>0,"No unitsPerEm specified."),this.tables.colr){const s=this.tables.colr.baseGlyphRecords;let r=-1;for(let a=0;a<s.length;a++){const o=s[a].glyphID;if(t(r<s[a].glyphID,`baseGlyphs must be sorted by GlyphID in ascending order, but glyphID ${o} comes after ${r}`),r>s[a].glyphID)break;r=o}}return n};nt.prototype.toTables=function(){return gy.fontToTable(this)};nt.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};nt.prototype.toArrayBuffer=function(){const e=this.toTables().encode(),t=new ArrayBuffer(e.length),i=new Uint8Array(t);for(let s=0;s<e.length;s++)i[s]=e[s];return t};nt.prototype.download=function(){console.error("DEPRECATED: platform-specific actions are to be implemented on user-side")};nt.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};nt.prototype.macStyleValues={BOLD:1,ITALIC:2,UNDERLINE:4,OUTLINED:8,SHADOW:16,CONDENSED:32,EXTENDED:64};nt.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};nt.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};var Mb=nt;function Tb(n,e){const t=new oe.Parser(n,e),i=t.parseUShort(),s=t.parseUShort();i!==1&&console.warn(`Unsupported hvar table version ${i}.${s}`);const r=[i,s],a=t.parsePointer32(function(){return this.parseItemVariationStore()}),o=t.parsePointer32(function(){return this.parseDeltaSetIndexMap()}),l=t.parsePointer32(function(){return this.parseDeltaSetIndexMap()}),c=t.parsePointer32(function(){return this.parseDeltaSetIndexMap()});return{version:r,itemVariationStore:a,advanceWidth:o,lsb:l,rsb:c}}function Eb(){console.warn("Writing of hvar tables is not yet supported.")}var Ab={make:Eb,parse:Tb},Cb=function(){return{coverage:this.parsePointer(P.coverage),attachPoints:this.parseList(P.pointer(P.uShortList))}},wb=function(){var n=this.parseUShort();if(Se.argument(n===1||n===2||n===3,"Unsupported CaretValue table version."),n===1)return{coordinate:this.parseShort()};if(n===2)return{pointindex:this.parseShort()};if(n===3)return{coordinate:this.parseShort()}},Rb=function(){return this.parseList(P.pointer(wb))},Lb=function(){return{coverage:this.parsePointer(P.coverage),ligGlyphs:this.parseList(P.pointer(Rb))}},Db=function(){return this.parseUShort(),this.parseList(P.pointer(P.coverage))};function Pb(n,e){e=e||0;const t=new P(n,e),i=t.parseVersion(1);Se.argument(i===1||i===1.2||i===1.3,"Unsupported GDEF table version.");var s={version:i,classDef:t.parsePointer(P.classDef),attachList:t.parsePointer(Cb),ligCaretList:t.parsePointer(Lb),markAttachClassDef:t.parsePointer(P.classDef)};return i>=1.2&&(s.markGlyphSets=t.parsePointer(Db)),s}var Ub={parse:Pb},ln=new Array(10);ln[1]=function(){const e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{posFormat:1,coverage:this.parsePointer(P.coverage),value:this.parseValueRecord()};if(t===2)return{posFormat:2,coverage:this.parsePointer(P.coverage),values:this.parseValueRecordList()};Se.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};ln[2]=function(){const e=this.offset+this.relativeOffset,t=this.parseUShort();Se.assert(t===1||t===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");const i=this.parsePointer(P.coverage),s=this.parseUShort(),r=this.parseUShort();if(t===1)return{posFormat:t,coverage:i,valueFormat1:s,valueFormat2:r,pairSets:this.parseList(P.pointer(P.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(s),value2:this.parseValueRecord(r)}})))};if(t===2){const a=this.parsePointer(P.classDef),o=this.parsePointer(P.classDef),l=this.parseUShort(),c=this.parseUShort();return{posFormat:t,coverage:i,valueFormat1:s,valueFormat2:r,classDef1:a,classDef2:o,class1Count:l,class2Count:c,classRecords:this.parseList(l,P.list(c,function(){return{value1:this.parseValueRecord(s),value2:this.parseValueRecord(r)}}))}}};ln[3]=function(){return{error:"GPOS Lookup 3 not supported"}};ln[4]=function(){return{error:"GPOS Lookup 4 not supported"}};ln[5]=function(){return{error:"GPOS Lookup 5 not supported"}};ln[6]=function(){return{error:"GPOS Lookup 6 not supported"}};ln[7]=function(){return{error:"GPOS Lookup 7 not supported"}};ln[8]=function(){return{error:"GPOS Lookup 8 not supported"}};ln[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function Ib(n,e){e=e||0;const t=new P(n,e),i=t.parseVersion(1);return Se.argument(i===1||i===1.1,"Unsupported GPOS table version "+i),i===1?{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(ln)}:{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(ln),variations:t.parseFeatureVariationsList()}}var Ob=new Array(10);function Fb(n){return new J.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new J.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new J.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new J.LookupList(n.lookups,Ob)}])}var Nb={parse:Ib,make:Fb};function kb(n){const e={};n.skip("uShort");const t=n.parseUShort();Se.argument(t===0,"Unsupported kern sub-table version."),n.skip("uShort",2);const i=n.parseUShort();n.skip("uShort",3);for(let s=0;s<i;s+=1){const r=n.parseUShort(),a=n.parseUShort(),o=n.parseShort();e[r+","+a]=o}return e}function Bb(n){const e={};n.skip("uShort"),n.parseULong()>1&&console.warn("Only the first kern subtable is supported."),n.skip("uLong");const s=n.parseUShort()&255;if(n.skip("uShort"),s===0){const r=n.parseUShort();n.skip("uShort",3);for(let a=0;a<r;a+=1){const o=n.parseUShort(),l=n.parseUShort(),c=n.parseShort();e[o+","+l]=c}}return e}function zb(n,e){const t=new oe.Parser(n,e),i=t.parseUShort();if(i===0)return kb(t);if(i===1)return Bb(t);throw new Error("Unsupported kern table version ("+i+").")}var Hb={parse:zb};function Gb(n,e,t,i){const s=new oe.Parser(n,e),r=i?s.parseUShort:s.parseULong,a=[];for(let o=0;o<t+1;o+=1){let l=r.call(s);i&&(l*=2),a.push(l)}return a}var Vb={parse:Gb};function Ou(n,e){const t=[];let i=12;for(let s=0;s<e;s+=1){const r=oe.getTag(n,i),a=oe.getULong(n,i+4),o=oe.getULong(n,i+8),l=oe.getULong(n,i+12);t.push({tag:r,checksum:a,offset:o,length:l,compression:!1}),i+=16}return t}function Wb(n,e){const t=[];let i=44;for(let s=0;s<e;s+=1){const r=oe.getTag(n,i),a=oe.getULong(n,i+4),o=oe.getULong(n,i+8),l=oe.getULong(n,i+12);let c;o<l?c="WOFF":c=!1,t.push({tag:r,offset:a,compression:c,compressedLength:o,length:l}),i+=20}return t}function Je(n,e){if(e.compression==="WOFF"){const t=new Uint8Array(n.buffer,e.offset+2,e.compressedLength-2),i=new Uint8Array(e.length);if(Mh(t,i),i.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");return{data:new DataView(i.buffer,0),offset:0}}else return{data:n,offset:e.offset}}function rM(n,e={}){let t,i;const s=new Mb({empty:!0});n.constructor!==ArrayBuffer&&(n=new Uint8Array(n).buffer);const r=new DataView(n,0);let a,o=[];const l=oe.getTag(r,0);if(l==="\0\0\0"||l==="true"||l==="typ1")s.outlinesFormat="truetype",a=oe.getUShort(r,4),o=Ou(r,a);else if(l==="OTTO")s.outlinesFormat="cff",a=oe.getUShort(r,4),o=Ou(r,a);else if(l==="wOFF"){const R=oe.getTag(r,4);if(R==="\0\0\0")s.outlinesFormat="truetype";else if(R==="OTTO")s.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+l);a=oe.getUShort(r,12),o=Wb(r,a)}else if(l==="wOF2"){const R="https://github.com/opentypejs/opentype.js/issues/183#issuecomment-1147228025";throw new Error("WOFF2 require an external decompressor library, see examples at: "+R)}else throw new Error("Unsupported OpenType signature "+l);let c,u,h,f,d,p,v,g,m,M,b,S,N,A,C,I,T,_;for(let R=0;R<a;R+=1){const U=o[R];let B;switch(U.tag){case"avar":v=U;break;case"cmap":B=Je(r,U),s.tables.cmap=Ih.parse(B.data,B.offset),s.encoding=new Fh(s.tables.cmap);break;case"cvt ":B=Je(r,U),_=new oe.Parser(B.data,B.offset),s.tables.cvt=_.parseShortList(U.length/2);break;case"fvar":h=U;break;case"STAT":f=U;break;case"gvar":d=U;break;case"cvar":p=U;break;case"fpgm":B=Je(r,U),_=new oe.Parser(B.data,B.offset),s.tables.fpgm=_.parseByteList(U.length);break;case"head":B=Je(r,U),s.tables.head=Yh.parse(B.data,B.offset),s.unitsPerEm=s.tables.head.unitsPerEm,t=s.tables.head.indexToLocFormat;break;case"hhea":B=Je(r,U),s.tables.hhea=jh.parse(B.data,B.offset),s.ascender=s.tables.hhea.ascender,s.descender=s.tables.hhea.descender,s.numberOfHMetrics=s.tables.hhea.numberOfHMetrics;break;case"HVAR":N=U;break;case"hmtx":S=U;break;case"ltag":B=Je(r,U),i=Zh.parse(B.data,B.offset);break;case"COLR":B=Je(r,U),s.tables.colr=tf.parse(B.data,B.offset);break;case"CPAL":B=Je(r,U),s.tables.cpal=zh.parse(B.data,B.offset);break;case"maxp":B=Je(r,U),s.tables.maxp=Kh.parse(B.data,B.offset),s.numGlyphs=s.tables.maxp.numGlyphs;break;case"name":I=U;break;case"OS/2":B=Je(r,U),s.tables.os2=Yo.parse(B.data,B.offset);break;case"post":B=Je(r,U),s.tables.post=Jh.parse(B.data,B.offset),s.glyphNames=new ml(s.tables.post);break;case"prep":B=Je(r,U),_=new oe.Parser(B.data,B.offset),s.tables.prep=_.parseByteList(U.length);break;case"glyf":g=U;break;case"loca":C=U;break;case"CFF ":c=U;break;case"CFF2":u=U;break;case"kern":A=U;break;case"GDEF":m=U;break;case"GPOS":M=U;break;case"GSUB":b=U;break;case"meta":T=U;break;case"gasp":try{B=Je(r,U),s.tables.gasp=lf.parse(B.data,B.offset)}catch(V){console.warn("Failed to parse gasp table, skipping."),console.warn(V)}break;case"SVG ":B=Je(r,U),s.tables.svg=cf.parse(B.data,B.offset);break}}const w=Je(r,I);if(s.tables.name=Uh.parse(w.data,w.offset,i),s.names=s.tables.name,g&&C){const R=t===0,U=Je(r,C),B=Vb.parse(U.data,U.offset,s.numGlyphs,R),V=Je(r,g);s.glyphs=gf.parse(V.data,V.offset,B,s,e)}else if(c){const R=Je(r,c);Xo.parse(R.data,R.offset,s,e)}else if(u){const R=Je(r,u);Xo.parse(R.data,R.offset,s,e)}else throw new Error("Font doesn't contain TrueType, CFF or CFF2 outlines.");const X=Je(r,S);if($h.parse(s,X.data,X.offset,s.numberOfHMetrics,s.numGlyphs,s.glyphs,e),zx(s,e),A){const R=Je(r,A);s.kerningPairs=Hb.parse(R.data,R.offset)}else s.kerningPairs={};if(m){const R=Je(r,m);s.tables.gdef=Ub.parse(R.data,R.offset)}if(M){const R=Je(r,M);s.tables.gpos=Nb.parse(R.data,R.offset),s.position.init()}if(b){const R=Je(r,b);s.tables.gsub=Qh.parse(R.data,R.offset)}if(h){const R=Je(r,h);s.tables.fvar=nf.parse(R.data,R.offset,s.names)}if(f){const R=Je(r,f);s.tables.stat=sf.parse(R.data,R.offset,s.tables.fvar)}if(d){h||console.warn("This font provides a gvar table, but no fvar table, which is required for variable fonts."),g||console.warn("This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.");const R=Je(r,d);s.tables.gvar=of.parse(R.data,R.offset,s.tables.fvar,s.glyphs)}if(p){h||console.warn("This font provides a cvar table, but no fvar table, which is required for variable fonts."),s.tables.cvt||console.warn("This font provides a cvar table, but no cvt table which could be made variable."),g||console.warn("This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.");const R=Je(r,p);s.tables.cvar=af.parse(R.data,R.offset,s.tables.fvar,s.tables.cvt||[])}if(v){h||console.warn("This font provides an avar table, but no fvar table, which is required for variable fonts.");const R=Je(r,v);s.tables.avar=rf.parse(R.data,R.offset,s.tables.fvar)}if(N){h||console.warn("This font provides an HVAR table, but no fvar table, which is required for variable fonts."),S||console.warn("This font provides an HVAR table, but no hmtx table to vary.");const R=Je(r,N);s.tables.hvar=Ab.parse(R.data,R.offset,s.tables.fvar)}if(T){const R=Je(r,T);s.tables.meta=ef.parse(R.data,R.offset),s.metas=s.tables.meta}return s.palettes=new df(s),s}let ht=null;async function aM(){ht=await GeometryModule()}function Zr(n){const e=n.size(),t=new Float32Array(e);for(let i=0;i<e;i++)t[i]=n.get(i);return t}function Tf(n){const e=n.size(),t=new Uint32Array(e);for(let i=0;i<e;i++)t[i]=n.get(i);return t}function oM(n,e,t=.1){if(!ht)throw new Error("Not initialized.");const i=ht.occMakeCylinder(n,e,t);return{positions:Zr(i.positions),normals:Zr(i.normals),indices:Tf(i.indices)}}function lM(n,e){if(!ht)throw new Error("Not initialized.");return ht.occCreateCylinderShape(n,e)}function cM(n){if(!ht)throw new Error("Not initialized.");ht.occReleaseShapeHandle(n)}function uM(n,e){const t=ht.occGetFaceInfo(n,e);return{surfaceType:t.surfaceType,uMin:t.uMin,uMax:t.uMax,vMin:t.vMin,vMax:t.vMax}}function hM(n){return ht.occGetWireInfo(n)}function fM(n,e){const t=ht.occSampleWire3D(n,e),i=t.length,s=new Float32Array(i);for(let r=0;r<i;r++)s[r]=t[r];return s}function dM(n){ht.occReleaseWireHandle(n)}const pM={0:"Plane",1:"Cylinder",2:"Cone",3:"Sphere",4:"Torus",5:"Bezier",6:"BSpline",7:"Revolution",8:"Extrusion",9:"Offset",10:"Other"};function mM(n,e){const t=ht.occTessellateShape(n,e);return{positions:Zr(t.positions),normals:Zr(t.normals),indices:Tf(t.indices)}}function gM(n){const e=ht.occGetTopologyInfo(n);return{numSolids:e.numSolids,numShells:e.numShells,numFaces:e.numFaces,numWires:e.numWires,numEdges:e.numEdges,numVertices:e.numVertices}}function vM(n,e,t,i){if(!ht)throw new Error("Not initialized.");return ht.occMakeWireFromUVCurves(n,e,t,i)}function xM(n,e,t){if(!ht)throw new Error("Not initialized.");const i=ht.occBuildFacesFromWires(n,e,t),s=i.length,r=new Array(s);for(let a=0;a<s;a++)r[a]=i[a];return r}function _M(n,e){if(!ht)throw new Error("Not initialized.");return ht.occBuildSolidFromFace(n,e)}function yM(n,e){if(!ht)throw new Error("Not initialized.");return ht.occRegisterTriangleMesh(n,e)}function SM(n){if(!ht)throw new Error("Not initialized.");ht.occReleaseMeshHandle(n)}function bM(n,e,t,i,s,r,a,o,l,c,u,h,f,d,p,v,g){if(!ht)throw new Error("Not initialized.");return ht.occProjectTextOnMesh(n,e,t,i,s,r,a,o,l,c,u,h,f,d,p,v,g)}export{eM as A,Bt as B,qe as C,Qb as D,Yb as E,Jb as F,cr as G,yM as H,$b as I,Qu as J,iM as K,Rv as L,Dn as M,nM as N,sM as O,nn as P,Us as Q,tM as R,qb as S,jb as T,ke as U,k as V,Xb as W,dh as X,bM as Y,SM as Z,pM as a,vn as b,lM as c,Zb as d,wn as e,hM as f,uM as g,xM as h,aM as i,_M as j,gM as k,cM as l,vM as m,ll as n,oM as o,rM as p,ph as q,dM as r,fM as s,mM as t,Yt as u,Et as v,ii as w,Lv as x,Kb as y,fh as z};
