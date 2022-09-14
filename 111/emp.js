const empData = require('./User Details.json');
const Address = require('./Address.json')


function getAddress(city){
    
    const addCity = Address.filter((add)=> add.city === city);
    // console.log(addCity);
    // for(const a of addCity){
    //     console.log(a.id);
    // }
    // addId = addCity.id    
    const userDetail = empData.filter((user)=> addCity.some((address) => address.id === user.address_id));
    // userDetail.push(addCity)
    // const arr = []
    // arr.push(addCity)
    const addres = userDetail.map((details) => ({ ...details, "address": addCity.find((item) => item.id === details.address_id)}))
    // console.log(Addres);
    return addres;


}

console.log(getAddress('Aurora'));