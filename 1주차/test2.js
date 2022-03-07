document.write("<h1>if-else를 이용한 학점 매기기</h1>");
document.write("<hr>");

var num = prompt("이선홍 님 점수를 입력하세요");
if (num >= 100 && num <=90){
    c = 'A';
}
else if(num >= 80){
    c = 'B';
}
else if(num >= 70){
    c = 'C';
}
else if(num >= 60){
    c = 'D';
}
else{
    c='F';
}
document.write(num,"는 ",c,"입니다.");