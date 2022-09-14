//array methoad

const items = [
    { name: 'bike',   price: 1067, brand : 'tvs' },
    { name: 'scooter',   price: 105 , brand : 'honda'   },
    { name: 'bike', price: 10 , brand : 'tvs'  },
    { name: 'scooter', price: 105  , brand : 'tvs' },
    { name: 'bike',   price: 1067, brand : 'yamaha' },
    { name: 'scooter',   price: 105 , brand : 'tvs'   },
    { name: 'bike', price: 10 , brand : 'yamaha'  },
    { name: 'scooter', price: 105  , brand : 'tvs' }
]

// //filter()
//  const fitem = item.filter((item) => item.name === 'bike' && item.price <=10 )
// // //filter method is used to filter using specific condition

//  console.log(fitem);

// //map
// let itemName =item.map((a) =>   a.name)
// // //map -> for key//
//  console.log(itemName);

// //find()
// let finditem = item.find((item) =>item.name === 'bike')
// console.log(finditem);

// //foreach  ===forloop
// item.forEach((item)=>{
//     console.log(item.price)
// })

// //some  t/f 
//{returns true if any of the element is true}
let inExpensiveItem =item.some((item)=>item.price<=100)
console.log(inExpensiveItem)

// //every t/f
// //{returns true only if all of the element is true}

// let ExpensiveItem =item.every((item)=>item.price<=100)
// console.log(ExpensiveItem)

// //includes

// let lit=[1,2,3,4,5]

// let includeItem= lit.includes(2)
// console.log('include '+ includeItem);