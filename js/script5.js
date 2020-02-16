console.log('=== задание 5 ===');

let arr5=['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
for(i=0;i<arr5.length;i++){
    arr5[i]=='СБ' || arr5[i]=='ВС' ? console.log("<b>"+arr5[i]+"</b>"): console.log(arr5[i]);
}
// 2 вариант
for(i=0;i<arr5.length;i++){
    arr5[i]=='СБ' || arr5[i]=='ВС' ? document.write('<b>'+arr5[i]+'</b>'+'</br>'): document.write(arr5[i]+'</br>');
}

