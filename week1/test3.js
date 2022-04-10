document.write("<h1>do-while 문으로 0에서 n까지 합</h1>");
document.write("<hr>");
var num = prompt("0보다 큰 정수를 입력하세요");
var n = Number(num);
var hap = 0
do{
    hap +=n;
    n--;
}while(n  > 0)
document.write("0에서 ",num,"까지 합은 ",hap);