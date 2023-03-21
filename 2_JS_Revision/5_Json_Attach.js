let response=require('./4_JsonConversion.json');
//console.log(response)
// let userList=[];

// for(let i=0;i<response.data.length;i++){
//     let obj={
//         first_name:"",
//         last_name:""
//     }
//     obj.first_name=response.data[i].first_name;
//     obj.last_name=response.data[i].last_name;
//     userList.push(obj);
// }

// console.log(userList)
let str_response=JSON.stringify(response);
console.log(str_response)   