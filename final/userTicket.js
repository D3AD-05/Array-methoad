const userTickets = require('./user_tickets.json');
const users = require('./Users (2) (1).json');
const tickets = require('./Tickets.json')

obj ={}

function allUsers(){
for (const id of userTickets){
    
    // const userobj = [user]
    const user = users.filter((d)=>d.user_id == id.user_id)
    const ticket = tickets.filter((d)=>d.ticket_id== id.ticket_id)

    // obj[user]=obj[user] ||
       
    // const data =[...user,ticket]
   
    // obj[id.user_id] =  obj[id.user_id]|| {}
    // obj[id.user_id][id.ticket_id]= obj[id.user_id][id.ticket_id]||[]
    // obj[id.user_id][id.ticket_id].push({...users,tickets})
    
    

    console.log(ticket)

}




}

allUsers()
