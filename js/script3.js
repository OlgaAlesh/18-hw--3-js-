console.log('=== задание 3 ===');

let arr3=[];
for(i=23;i<58;i++) arr3.push(i);
console.log(arr3);


arr3=[];
i=0;
while(i<58){
    if(i>22) arr3.push(i); 
    i++;  
}
console.log(arr3);


let result=0;
for(i=0;i<arr3.length;i++) result+=arr3[i];
console.log(result);
