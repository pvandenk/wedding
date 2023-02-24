import eventTypes from "./eventTypes";

const invitees = [
    {
        event: eventTypes.diner,
        name: "Dirk Verthe",
        partner: "Inge Roelstraete",
    },
    {
        event: eventTypes.diner,
        name: "Guido VandenKerckhove",
        partner: "Greta Delbaere",
    },
    {
        event: eventTypes.diner,
        name: "Petra VandenKerckhove",
        children: [
            {
                id: 1,
                name: "Maura",
            },
        ]
    },
    {
        event: eventTypes.diner,
        name: "Ellen VandenKerckhove",
        partner: "Cedric Dekeyster",
    },
    {
        event: eventTypes.diner,
        name: "Tom Pype",
        partner: "Amy Tanghe",
        children: [
            {
                id: 1,
                name: "Lotte",
            },
            {
                id: 2,
                name: "Ferre",
            },
        ]
    },
    {
        event: eventTypes.reception,
        name: "Jari Goemaere",
    },
]

export default invitees;