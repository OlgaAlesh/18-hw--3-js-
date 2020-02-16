console.log('=== задание 10 ===');

let arr10=[48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];

let f=arr10.indexOf(0),
    l=arr10.lastIndexOf(0),
    sum7=0;

if(f!=-1 || l!=-1) {
    for(i=f+1;i<l;i++){
        sum7+=+arr10[i];
    }
}
console.log(sum7);

console.log('--------------');

arr10=[1,8,0,13,76,8,7,0,22,0,2,3,2];
sum7=0;
f=arr10.indexOf(0);
l=arr10.lastIndexOf(0);
if(f!=-1 || l!=-1) {
    for(i=f+1;i<l;i++){
        sum7+=+arr10[i];
    }
}
console.log(sum7);