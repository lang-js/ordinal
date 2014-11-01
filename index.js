var e = exports;

function augment(fn, list) {
  fn.count = list.length;
  fn.formats = list;
}

augment(e.af =
 e.am =
 e.ar =
 e.bg =
 e.cs =
 e.da =
 e.de =
 e.el =
 e.es =
 e.et =
 e.eu =
 e.fa =
 e.fi =
 e.fy =
 e.gl =
 e.he =
 e.hr =
 e.id =
 e.is =
 e.ja =
 e.km =
 e.kn =
 e.ko =
 e.ky =
 e.lt =
 e.lv =
 e.ml =
 e.mn =
 e.my =
 e.nb =
 e.nl =
 e.pa =
 e.pl =
 e.pt =
 e.root =
 e.ru =
 e.si =
 e.sk =
 e.sl =
 e.sr =
 e.sw =
 e.ta =
 e.te =
 e.th =
 e.tr =
 e.uk =
 e.ur =
 e.uz =
 e.zh =
 e.zu = function af(n) {
return"other"
}, ["other"]);

augment(e.az = function az(n) {
var i=Math.floor(Math.abs(n));if(typeof n==="string")n=parseInt(n,10);if(i%10===1||i%10===2||i%10===5||i%10===7||i%10===8||i%100===20||i%100===50||i%100===70||i%100===80)return"one";if(i%10===3||i%10===4||i%1e3===100||i%1e3===200||i%1e3===300||i%1e3===400||i%1e3===500||i%1e3===600||i%1e3===700||i%1e3===800||i%1e3===900)return"few";if(i===0||i%10===6||i%100===40||i%100===60||i%100===90)return"many";return"other"
}, ["one","few","many","other"]);

augment(e.bn = function bn(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===1||n===5||n===7||n===8||n===9||n===10)return"one";if(n===2||n===3)return"two";if(n===4)return"few";if(n===6)return"many";return"other"
}, ["one","two","few","many","other"]);

augment(e.ca = function ca(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===1||n===3)return"one";if(n===2)return"two";if(n===4)return"few";return"other"
}, ["one","two","few","other"]);

augment(e.cy = function cy(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===0||n===7||n===8||n===9)return"zero";if(n===1)return"one";if(n===2)return"two";if(n===3||n===4)return"few";if(n===5||n===6)return"many";return"other"
}, ["zero","one","two","few","many","other"]);

augment(e.en = function en(n) {
if(typeof n==="string")n=parseInt(n,10);if(n%10===1&&!(n%100===11))return"one";if(n%10===2&&!(n%100===12))return"two";if(n%10===3&&!(n%100===13))return"few";return"other"
}, ["one","two","few","other"]);

augment(e.fil =
 e.fr =
 e.hy =
 e.lo =
 e.ms =
 e.ro =
 e.vi = function fil(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===1)return"one";return"other"
}, ["one","other"]);

augment(e.gu =
 e.hi = function gu(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===1)return"one";if(n===2||n===3)return"two";if(n===4)return"few";if(n===6)return"many";return"other"
}, ["one","two","few","many","other"]);

augment(e.hu = function hu(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===1||n===5)return"one";return"other"
}, ["one","other"]);

augment(e.it = function it(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===11||n===8||n===80||n===800)return"many";return"other"
}, ["many","other"]);

augment(e.ka = function ka(n) {
var i=Math.floor(Math.abs(n));if(typeof n==="string")n=parseInt(n,10);if(i===1)return"one";if(i===0||i%100===Math.floor(i%100)&&(i%100>=2&&i%100<=20||i%100===40||i%100===60||i%100===80))return"many";return"other"
}, ["one","many","other"]);

augment(e.kk = function kk(n) {
if(typeof n==="string")n=parseInt(n,10);if(n%10===6||n%10===9||n%10===0&&!(n===0))return"many";return"other"
}, ["many","other"]);

augment(e.mk = function mk(n) {
var i=Math.floor(Math.abs(n));if(typeof n==="string")n=parseInt(n,10);if(i%10===1&&!(i%100===11))return"one";if(i%10===2&&!(i%100===12))return"two";if((i%10===7||i%10===8)&&!(i%100===17||i%100===18))return"many";return"other"
}, ["one","two","many","other"]);

augment(e.mr = function mr(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===1)return"one";if(n===2||n===3)return"two";if(n===4)return"few";return"other"
}, ["one","two","few","other"]);

augment(e.ne = function ne(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===Math.floor(n)&&n>=1&&n<=4)return"one";return"other"
}, ["one","other"]);

augment(e.sq = function sq(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===1)return"one";if(n%10===4&&!(n%100===14))return"many";return"other"
}, ["one","many","other"]);

augment(e.sv = function sv(n) {
if(typeof n==="string")n=parseInt(n,10);if((n%10===1||n%10===2)&&!(n%100===11||n%100===12))return"one";return"other"
}, ["one","other"]);