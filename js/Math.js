function p(s){
  document.write(s);
  document.write("<br>");
}
p(Math.PI);
p(Math.E);
p(Math.abs(-564));
p(Math.min(3,34,5,3,2,23));
p(Math.max(3,4,5,6,7));
for(var i=0;i<10;i++)
p(Math.round(Math.random()*10)+5);