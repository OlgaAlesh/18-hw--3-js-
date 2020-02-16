console.log('=== задание 11 ===');

let h=5,
    s='';
    let row="";
for(i=1;i<=h;i++){
    s='';
    for(let j=1;j<=h-i;j++){
        s+=' ';        
    }
    for(let j=1;j<=i+i-1;j++){
        s+='^';
    }
    console.log(s);
}
