const baseUrl='http://192.168.1.34/forestry/api/index.php';
const Helper=(url,method,body)=>{
if(body!==undefined){
return(
fetch(baseUrl+url,{
method:method,
headers:{
'Content-Type':'application/json'
},
body:body
})
.then((response)=>{
return response.json();
})
.catch((err)=>{
return err;
})
);
}
else{
return(
fetch(baseUrl+url,{
method:method,
headers:{
'Content-Type':'application/json'
}
})
.then((response)=>{
return response.json();
})
.catch((err)=>{
return err;
})
);
}
}

export default Helper;
