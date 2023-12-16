const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" }
  ];
  
  // 1. Print Developers
  function printDeveloper() {
  data.forEach( (item) => item.profession=="developer" ?
   console.log("Develpers:",item) : null );
  }
  
  // 2. Add Data
  function addData() {
    const name=prompt("Enter the name:");
    const age=parseInt(prompt("Enter the age:"));
    const profession=prompt("Enter the profession:");
    data.push({
        name,
        age,
        profession
    });
    console.log("Added data:",data);  
  }
  
  // 3. Remove Admins
  function removeAdmin() {
   const newFiltered = data.filter(
    (person) => person.profession!=="admin"
   );
   console.log("Data after remove Admins:",newFiltered);

  }
  
  // 4. Concatenate Array
  function concatenateArray(){
    const additionalData=[
        {name:"Lucifer",age:22, profession:"developer"},
        {name:"arvind", age:20, professsion:"designer"},
    ];
    const concatenatedArray=data.concat(additionalData);
    console.log("Concatenated Array:", concatenatedArray);
}
  
  // 5. Average Age
  function averageAge() {
    let  sum = 0;
    data.forEach(item => sum+=parseInt(item.age));
   const avgAge=sum/data.length;
   console.log(avgAge);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(let val of data){
        if(val.age>25){
            console.log(val);
        }
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
     let uniqueProfessionsarr=[];
     data.forEach(item =>{
        if(!uniqueProfessionsarr.includes(item.profession)){
            uniqueProfessionsarr.push(item.profession)
        }
     })
     console.log("Unique professions:", uniqueProfessionsarr)
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach(item=>{
        if(item.name=="john"){
            item.profession="Manager";
        }
    })
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let devcount=data.filter(item=>item.profession=="developer").length;
    let admincount=data.filter(item=>item.profession=="admin").length;
    console.log(`Developer: ${devcount} | Admins: ${admincount}`);
  }