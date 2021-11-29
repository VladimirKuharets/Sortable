import React from 'react'
import DB from './DB'

export default function App() {
    
let firstnames = ["Alex", "David", "Bob", "Karlos", "Alisa"];
let lastnames = ["Smith", "Jonas", "Black", "White", "Brown"];

const UserList = generateUserArr(12);

function generateUserArr(userCount) {
    let users = [];
    for (let i = 0; i < userCount; i++) {
        users.push(generateUser());
    }
    return users;
}

function generateUser() {
    let getYear = rnd(2021,1900);
    let getMonth = rnd(12,1);
    let getDay = rnd(new Date(getYear, getMonth+1,0).getDate(),1);
    let giveYear = rnd(2021,getYear);
    let giveMonth;
    if(getYear === giveYear) {
        giveMonth =  rnd(12, getMonth);
    }
    else{
        giveMonth =  rnd(12,1);
    }
    let giveDay;
    if(getYear === giveYear && getMonth === giveMonth){
        giveDay =  rnd(new Date(getYear, getMonth+1,0).getDate(), getDay);
    }
    else{
        giveDay = rnd(new Date(giveYear, giveMonth+1,0).getDate(),1);
    }

    return {
        Firstnames: firstnames[rnd(firstnames.length,0)],
        Lastnames: lastnames[rnd(lastnames.length,0)],
        'Give money': `${getYear},${getMonth},${getDay}`,
        'Get money':`${giveYear},${giveMonth},${giveDay}`,
    }
}


function rnd(max, min){
    return Math.floor(min + Math.random() * (max - min));
}

    return (
            <DB UserList = {UserList}/> 
    )
}
