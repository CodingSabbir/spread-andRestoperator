// spread operator
// const product=['apple','banana','mango'];
// const anathor=['salt']
// const updatePdc=[...product,'orange',...anathor]

// console.log(updatePdc);


// rest operator

function saybio(firstName,age, ...value){ // ai khane rest operator bebohar korci
    return {
        firstName:firstName,
        age:age,
        rest:[...value,'sakib al hasan'] // spread operator bebohar korci
    }
}
console.log(saybio('sabbir',20,'web developer','progmming'));



// const name= ['sabbir','sakib','al amin','sohan'];
// const newname=['Bangladesh'];
// const updateName=[...name,'Allah Mohan',...newname];
// console.log(updateName);


// function info(id,name,cse,...cuntry){
//     return{
//         id: id,
//         name:name,
//         subject:cse,
//         cuntry:[...cuntry,'india','pakistan']
//     }
// }
// console.log(info(100,'sabbir','cse','progmming'));

