import { dbService } from './db.service.js'
import { storageService } from './storage.service.js'

const KEY = 'loggedinUser'

// const user = {
//     name: "Puki Ben David",
//     balance: 100,
//     transactions: [
//         {
//             toId: "d99e3u2ih329",
//             to: "Moshiko",
//             at: 2652712571,
//             amount: 2
//         }
//     ]
// }

export const userService = {
    getLoggedinUser,
    transferFunds,
    getTransactions,
    signup,
    logout
}

async function transferFunds({ name, _id } = toContact, amount) {
    const user = getLoggedinUser()[0]
    if (!user) throw new Error('Not loggedin')
    user.balance = user.balance - amount
    user.transactions.unshift({ toId: _id, to: name, at: Date.now(), amount })
    await dbService.put(KEY, user)
    return user
}

function getTransactions() {

}

async function signup(userName) {
    const newUser = {
        name: userName,
        balance: 100,
        transactions: [],
        imgUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    }
    // const user = await storageService.save(KEY, newUser)
    const user = await dbService.post(KEY, newUser)
    return user
}

function logout() {
    storageService.remove(KEY)
}

function getLoggedinUser() {
    return storageService.load(KEY)
}