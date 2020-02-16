console.log('=== задание 8 ===');

let arr8=[12,false,'Текст',4,2,-5,0];

arr8.reverse();
console.log(arr8);



console.log('=== while ===');

arr8=[12,false,'Текст',4,2,-5,0];
i=arr8.length-1;
let arrNew=[],
    j=0;
while(i>=0){
    arrNew[j]=arr8[i];
    i--;
    j++;
}
console.log(arrNew);
