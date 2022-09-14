const empData = require('./User Details.json');
const companyData = require('./Company Details.json');
function getEmployee(data){
    const employee = empData.filter((d)=>d.company_id == data || d.company_name ==data );
    for(const emp of employee){    
        const idi = emp.id
        console.log('heloo',idi);
         const cmpnydetail = companyData.find((user)=> user.id == idi);
         const cmpny = ({...emp,cmpnydetail});
        //  emp.c=cmpny;
        return cmpny
    }
} 
console.log(getEmployee(5));
// getEmployee(5); 








//  data = empData.concat(companyData);
//  const fd={}

//  const user = {}

//  for(const emp of empData){
//     console.log("emp====>",emp);
//      }
// function getAllEmployees( empData,companyData,id,company_id){

// //  for(const emp of empData){
// // console.log("emp====>",emp);
// //  }
//     for(const empD of data){
//         fd[empD.company_name] = fd[empD.company_name]||{}

//         if(company_id = id){

//         }
//         fd[empD.company_name][empD.id] = fd[empD.company_name][empD.id]||[]       

//        // fd[empD.id][empD.companyData]= fd[empD.id][empD.companyData]||{}
//        // const company = data.map((id) => id =company_id)
//        fd[empD.company_name][empD.id].push({...empD})
        

//    }
// console.log(fd)
// // 

// }

// getAllEmployees();
// //console.log(fd);
