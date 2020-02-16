console.log('=== задание 9 ===');

let arr9=[5,9,21,,,9,78,,,,6],
    n=0;
for(i=0;i<arr9.length;i++){
    if(arr9[i]==undefined) n+=1; 
}
console.log(n);
