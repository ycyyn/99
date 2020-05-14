var timestamp = new Date();
var ycyyn=new Date(2020,2,18);
var ycyynt=(ycyyn.getTime())/1000;
var time = (timestamp.getTime())/1000 - ycyynt;

console.log(timestamp.getMonth());

function timedCount()
{
document.getElementById('shijian').innerHTML = fmoney(time,0);
time = time + 1;
t = setTimeout("timedCount()",1000);
}

/** ÿ��λ��������һ�����ţ������Ķ� **/

function fmoney(s, n)   
{   
   n = n > 0 && n <= 20 ? n : 2;   
   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
   var l = s.split(".")[0].split("").reverse(),   
   r = s.split(".")[1];   
   t = "";   
   for(i = 0; i < l.length; i ++ )   
   {   
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
   }   
   return t.split("").reverse().join("") /*+ "." + r*/;   
}