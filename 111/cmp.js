const empData = require('./User Details.json');
const companyData = require('./Company Details.json');

const obj = {}

function companyD(data){
    const company = companyData.find((comp) => comp.id === data)
    const users = empData.filter((user) => user.company_id === data)
    var job = users.map((user) => user.job_title)
    const jobTitle = [...job]

    for(var user of users){
    if(jobTitle.includes(user.job_title)){
        obj[user.job_title] =  obj[user.job_title] || []
        obj[user.job_title].push (user);
    }
    company.finaldata = obj
    console.log(company.finaldata);


    
}

    



}
companyD(5) 