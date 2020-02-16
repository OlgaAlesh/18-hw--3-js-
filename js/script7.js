console.log('=== задание 7 ===');

let arr7=[],
    data=true;
while(data!=''){
    data=prompt('Введите число');
    arr7.push(+data);    
}
console.log(arr7);

arr7.sort(function(a,b){
    return(a-b);
})
console.log(arr7);


