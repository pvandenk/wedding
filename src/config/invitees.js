import eventTypes from "./eventTypes";

const invitees = [
    {
        event: eventTypes.all,
        name: "Dirk Verthe",
        partner: "Inge Roelstraete",
    },
    {
        event: eventTypes.all,
        name: "Guido VandenKerckhove",
        partner: "Greta Delbaere",
    },
    {
        event: eventTypes.all,
        name: "Petra VandenKerckhove",
        children: [
            {
                name: "Maura",
            },
        ]
    },
    {
        event: eventTypes.all,
        name: "Ellen VandenKerckhove",
        partner: "Cedric Dekeyster",
    },
    {
        event: eventTypes.all,
        name: "Tom Pype",
        partner: "Amy Tanghe",
        children: [
            {
                name: "Lotte",
            },
            {
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