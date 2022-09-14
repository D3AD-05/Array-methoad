

const data = [
    {
        "full_name": "hello hai ",
        "id": 1,
        "email": "test@test.com",
        "gender": 'Male',
        "department": "Services",
        "age": 28
    },
    {
        "full_name": "sasi sasa",
        "id": 1,
        "email": "test@test.com",
        "gender": 'Male',
        "department": "Services",
        "age": 29
    },
    {
        "full_name": "dam dom",
        "id": 1,
        "email": "test@test.com",
        "gender": 'Male',
        "department": "Services",
        "age": 29
    },
    {
        "full_name": "sasi kulam",
        "id": 1,
        "email": "test@test.com",
        "gender": 'Male',
        "department": "Legal",
        "age": 31
    },
    {
        "full_name": "aravi kulam",
        "id": 1,
        "email": "test@test.com",
        "gender": 'Male',
        "department": "Legal",
        "age": 21
    },
    {
        "full_name": "judy vcat",
        "id": 1,
        "email": "test@test.com",
        "gender": 'female',
        "department": "Services",
        "age": 32
    },
]


//   const getResult = (data, dep, gender) => {
//     const filteredData = data.filter((data) => (data.department == dep && data.gender == gender));
//      console.log(filteredData.sort((a,b) => a.age - b.age));


//   }

//   getResult(data, "Services", "Male")


// const fullName = 'ello World';
// const [first, b] = fullName.split(' ');
//  first.toString();

// console.log(first[0]); 
// console.log(b.toString());



// const getdata =(data,dep)=>{
//     for (var key in data){
//         if(data[key].department===dep){
//             var sortedList=data[key]
//             console.log(sortedList);
//         }
//     }
// }
// getdata(data, "Services")

// 
// const dept= data.map((item)=>item.department )
// console.log(dept);
// let sortdept= dept.filter((item,index)=>dept.indexOf(item)===index)                                              
// console.log(sortdept);

// const gen= data.map((item)=>item.gender)
// console.log(gen);
// const genSorted = [new Set(gen)]
// console.log(genSorted);


// [q w e e] 


const fd = {}

for (const d of data) {
    fd[d.department] = fd[d.department] || {}
  

    fd[d.department][d.gender] = fd[d.department][d.gender] || []
    // fd[d.department][d.gender].push({ ...d })

    const [first, last] = d.full_name.split(' ')
    const initial = first[0] + " " + last[0]
    fd[d.department][d.gender].push({...d, initial})
    fd[d.department][d.gender].sort((a,b)=>a.age-b.age);

}
console.log(fd)

