var list=[0,1,2,3,4,5,6,7,8,9];
var Number = [];
for(i=0;i<4;i++){
    var select = Math.floor(Math.random()*list.length)
    Number.push(list.splice(select,1)[0]);
}
var count = 0;
var strike = 0;
var ball = 0;
while(count<10){
    var input = prompt ( " 숫자를입력해주세요 ");
    var inputArr = input.split('');
    strike = 0;
    ball = 0;
    count++;
     for(var j=0;j<4;j++){
         for(var k=0;k<4;k++){
             if(Number[j]==inputArr[k]){
                 if(j==k){
                     strike++
                 }else{ball++}
                 break;
             }
         }
     }
    if(strike===4){
        console.log("홈런"+(count-1)+'번째만에 맞췃노')
    break}else if(count>=10){
        console.log('시도실패')
    }else{console.log(inputArr.join('')+':'+strike+'스트라이크'+ball+'볼')}
    console.log(Number)
}