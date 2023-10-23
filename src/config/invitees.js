import eventTypes from "./eventTypes";

const familyXandrien = [
    {
        event: eventTypes.all,
        name: "Dirk Verthe",
        partner: "Inge Roelstraete",
    },
    {
        event: eventTypes.all,
        name: "Lise Verthe",
    },
];

const familyPeter = [
    {
        event: eventTypes.all,
        name: "Guido VandenKerckhove",
        partner: "Greta Delbaere",
    },
    {
        event: eventTypes.all,
        name: "Ellen VandenKerckhove",
        partner: "Cedric Dekeyster",
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
        name: "Gerda VandenKerckhove",
        partner: "Jozef Pype",
    },
    {
        event: eventTypes.all,
        name: "José Quiñones",
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
        event: eventTypes.all,
        name: "Rita Delbaere",
    },
];

const colleaguesXandrien = [
    {
        event: eventTypes.all,
        name: "Victor Ducatelle",
        partner: "Lobbe Denijs"
    },
];

const colleaguesPeter = [
    {
        event: eventTypes.all,
        name: "Aaron Caenepeel",
    },
    {
        event: eventTypes.all,
        name: "Benedikt Beun",
    },
    {
        event: eventTypes.all,
        name: "Erik Boon",
    },
    {
        event: eventTypes.all,
        name: "Frederik Vermeiren",
    },
    {
        event: eventTypes.all,
        name: "Els Vergison",
    },
    {
        event: eventTypes.all,
        name: "Hilde Doise",
    },
    {
        event: eventTypes.all,
        name: "Nele Vannobel",
    },
    {
        event: eventTypes.all,
        name: "Jo Tytgat",
    },
    {
        event: eventTypes.all,
        name: "Christophe Laloo",
    },
    {
        event: eventTypes.all,
        name: "Johan Vanoeteren",
    }
];

const friends = [
    {
        event: eventTypes.all,
        name: "Xenia Loosvelt",
        partner: "Pieter Deprez"
    },
    {
        event: eventTypes.all,
        name: "Kayleigh Robson",
        partner: "Louis Demuynck"
    },
    {
        event: eventTypes.all,
        name: "Nikita Wyllemet",
        partner: "Thomas De Loof"
    },
    {
        event: eventTypes.all,
        name: "Evelyne Taillieu",
        partner: "Nicolas Vandekerckhove"
    },
    {
        event: eventTypes.all,
        name: "Vincent Taillieu",
    },
    {
        event: eventTypes.all,
        name: "Tim Libbrecht",
    },
    {
        event: eventTypes.all,
        name: "Melissa Byttebier",
        partner: "Nordin Manhaeghe"
    },
    {
        event: eventTypes.all,
        name: "Natasja Maes",
        partner: "Thomas Engerie"
    },
    {
        event: eventTypes.all,
        name: "Bram Swyngedauw",
        partner: "Tille Descheemaeker"
    },
    {
        event: eventTypes.all,
        name: "Jana Ossieur",
    },
    {
        event: eventTypes.all,
        name: "Sven Demeyere",
        partner: "Angie Delbeke"
    },
    {
        event: eventTypes.all,
        name: "Chris Swyngedauw",
    },
    {
        event: eventTypes.all,
        name: "Geert Swyngedauw",
        partner: "Katrien Vandamme"
    },
]

const invitees = [
    ...familyXandrien,
    ...familyPeter,
    ...colleaguesXandrien,
    ...colleaguesPeter,
    ...friends,
    {
        event: eventTypes.reception,
        name: "Jari Goemaere",
    },
    {
        event: eventTypes.reception,
        name: "Philippe Delmotte",
    },
    {
        event: eventTypes.reception,
        name: "Rino Casier",
    },
    {
        event: eventTypes.reception,
        name: "Arne Vandorpe",
    },
    {
        event: eventTypes.reception,
        name: "Joeri",
    },
    {
        event: eventTypes.reception,
        name: "Jan Taillieu",
        partner: "Nathalie Deleu"
    },
]

export default invitees;