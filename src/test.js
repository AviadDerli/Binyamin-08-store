
// fetch('get electronics items')
//     .then(() => {
//         res.map(<></>);
//         calc()
//     })




async function getOrder(userId){ 
    let user = await getUserById(userId)
    let userOrders  = await getOrdersOfUser(user.email)
    return userOrders.filter(o=>o.totalPrice > 100 )
}

