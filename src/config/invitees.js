import eventTypes from "./eventTypes";

const receptionInvitees = [];

const dinerInvitees = [
    {event: eventTypes.all, name: "Elsy Claeys", partner: "Krist Mylle"},
    {event: eventTypes.all, name: "Wout Mylle", partner: "Stephanie Delameilleure"},
    {
        event: eventTypes.all, name: "Heiko Martin", partner: "Barbara Desmet", children: [
            {name: "Guillaume Mareel"}, {name: "Victoria Martin"}]
    },
    {event: eventTypes.all, name: "Guillaume Mareel"},
    {event: eventTypes.all, name: "Victoria Martin"},
    {event: eventTypes.all, name: "Rita Wylin"},
    {event: eventTypes.all, name: "Ria Quaghebeur", partner: "Luc Piepers"},
    {event: eventTypes.all, name: "Liliane Desmedt"},
    {event: eventTypes.all, name: "Sabine Mylle", partner: "Rudy Vanhaelewyn"},
    {event: eventTypes.all, name: "Manon Vanhaelewyn", partner: "Jules Vandamme"},
    {event: eventTypes.all, name: "Reinout Vanhaelewyn", partner: "Ellen Cools"},
    {event: eventTypes.all, name: "Marie Vanhaelewyn", partner: "Tibo Strubbe"},
    {event: eventTypes.all, name: "Patsy Grimonprez", partner: "Bart Mylle"},
    {event: eventTypes.all, name: "Alexander Mylle", partner: "Justine Vens"},
    {event: eventTypes.all, name: "Jonathan Mylle", partner: "Imani Tanghe"},
    {
        event: eventTypes.all, name: "Anniek Gryp", partner: "Andy Claeys", children: [
            {name: "Zoë Claeys"}, {name: "Uwe Claeys"}]
    },
    {event: eventTypes.all, name: "Zoë Claeys"},
    {event: eventTypes.all, name: "Uwe Claeys"},
    {event: eventTypes.all, name: "Johan Claeys", partner: "Sandy Lannoo"},
    {event: eventTypes.all, name: "Ellen Claeys"},
    {event: eventTypes.all, name: "Sharon Claeys", partner: "Jamien Tack"},
    {
        event: eventTypes.all, name: "Els Desmet", partner: "Vincent Lampole", children: [
            {name: "Manou Devogelaere"}, {name: "Leon Devogelaere"}]
    },
    {event: eventTypes.all, name: "Manou Devogelaere"},
    {event: eventTypes.all, name: "Leon Devogelaere"},
    {event: eventTypes.all, name: "Viktor Vanden Berghe", partner: "Babette Pauwelyn"},
    {event: eventTypes.all, name: "Helene Gruyaert", partner: "Michiel Caenepeel"},
    {event: eventTypes.all, name: "Hugo Gentenaar", partner: "Jade Christiaens"},
    {event: eventTypes.all, name: "Rune Grimmelprez", partner: "Toon Van Hove"},
    {event: eventTypes.all, name: "Kato Meeuws"},
    {event: eventTypes.all, name: "Meredith Huyghebaert", partner: "Marijn Vervaecke"},
    {event: eventTypes.all, name: "Xandrien Verthe", partner: "Peter VandenKerckhove"},
    {event: eventTypes.all, name: "Victor Ducatelle", partner: "Lobbe Denijs"},
    {event: eventTypes.all, name: "Gianni Vullers"},
    {event: eventTypes.all, name: "Alana Popelier", partner: "Pieter Lammens"},
    {event: eventTypes.all, name: "Ine Neerinck"},
    {event: eventTypes.all, name: "Xanthippe Maes"},
    {event: eventTypes.all, name: "Laura Vandamme", partner: "Jonas Christiaens"},
    {event: eventTypes.all, name: "Romy Lenoor", partner: "Tobia Baert"},
    {event: eventTypes.all, name: "Aïsha Miya"},
    {event: eventTypes.all, name: "Alex Vanlauwe"},
    {event: eventTypes.all, name: "Leen Decroos", partner: "Emile Tytgat"},
    {event: eventTypes.all, name: "Korneel Decroos", partner: "Annelies Lowie"},
    {event: eventTypes.all, name: "Marlies Lievens", partner: "Fabien Francken"},
];

const invitees = [
    ...receptionInvitees,
    ...dinerInvitees
]

export default invitees;