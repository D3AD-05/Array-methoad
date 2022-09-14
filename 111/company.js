const empData = require('./User Details.json');
const companyData = require('./Company Details.json');


function Company(data){
const comp = companyData.filter((d)=>d.company_name == data || d.id == data);
for(const cmp of comp){
const emp = empData.filter((id)=>id.company_id == cmp.id)

const display = [...comp,emp]
console.log(display);



    
}
const employee =empData.filter((d)=>d.company_id)



}
Company('Twinder')
