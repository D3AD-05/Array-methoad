const userTickets = require('./user_tickets.json');
const users = require('./Users (2) (1).json');
const tickets = require('./Tickets.json')

function user(id) {



    const userDetails = users.find((user) => user.id == id)
    console.log('user', userDetails);
    // const ticketOfUser =  userTickets.filter((ticket)=> ticket.user_id == userDetails.id)
    // const ticket = ticketOfUser.map((ticket) => ticket.ticket_id)
    const ticket = userTickets.filter((item) => item.user_id == id).map(item => item.ticket_id)

    console.log(ticket);
    //ticket.map(item)=>item.id == ticketId
    
    for (ticketId of ticket) {
        const ticketDetail = tickets.filter((item) => item.id == ticketId).map((ticketDetail) => ({ ...userDetails, ticketDetail }))
        console.log(ticketDetail);
        
    }





    // const userTicketId = userTickets.filter((user) => user.user_id == id)
    // console.log(userTicketId);
    // for (ids of userTicketId) {
    //     const ticket = tickets.filter((t) => t.id == ids.ticket_id)
    //     const user = users.filter((u) => u.id == ids.user_id)
    //     const output = [...user, ticket]
    //     console.log(output);
    // }






    // // const userId = userTicketId.map
    // const ticketId = userTicketId.map((d)=>d.ticket_id)
    // for(tid of ticketId){
    // const ticket = tickets.filter((t)=>t.id == tid )
    // console.log(userTicketId);
    // }

    // const user = [...userId,ticketId]

    // for(id in userId){

    // }

    // const user = users.find((user)=>user.id == id)

    // const ticket = tickets.filter((tick)=>tick.id==)



}

user(1)