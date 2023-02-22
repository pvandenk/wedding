import eventTypes from "./eventTypes";

const invitees = [
    {
        event: eventTypes.diner,
        name: "Peter VandenKerckhove",
        partner: "Xandrien Verthe",
        children: [
            {
                id: 1,
                name: "Jef",
            },
            {
                id: 2,
                name: "Jos",
            },
            {
                id: 3,
                name: "Marie",
            }
        ]
    },
    {
        event: eventTypes.reception,
        name: "Single",
    },
    {
        event: eventTypes.diner,
        name: "Diner",
    }
]

export default invitees;