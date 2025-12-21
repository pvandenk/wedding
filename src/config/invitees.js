import eventTypes from "./eventTypes";

const receptionInvitees = [
    {
        event: eventTypes.reception,
        name: "Carine Migneau",
    },
    {
        event: eventTypes.reception,
        name: "Johan Debal",
    },
    {
        event: eventTypes.reception,
        name: "Françoise Monard",
    },
    {
        event: eventTypes.reception,
        name: "Jean Paul Rombeau",
    },
    {
        event: eventTypes.reception,
        name: "Marleen",
    },
    {
        event: eventTypes.reception,
        name: "Patrick Houtekier",
    },
    {
        event: eventTypes.reception,
        name: "Veerle Verlinde",
    },
    {
        event: eventTypes.reception,
        name: "Andy Deseure",
    },
    {
        event: eventTypes.reception,
        name: "Marc Christiaens",
    },
    {
        event: eventTypes.reception,
        name: "Nathalie Tandt",
    },
    {
        event: eventTypes.reception,
        name: "Mathias Christiaens",
    },
    {
        event: eventTypes.reception,
        name: "Aniana Lamon",
    },
    {
        event: eventTypes.reception,
        name: "Jonas Christiaens",
    },
    {
        event: eventTypes.reception,
        name: "Isabo Van Fleteren",
    },
    {
        event: eventTypes.reception,
        name: "Johanna Wylin",
    },
    {
        event: eventTypes.reception,
        name: "Jacques Abeel",
    },
    {
        event: eventTypes.reception,
        name: "Krista Wylin",
    },
    {
        event: eventTypes.reception,
        name: "Johan Demasure",
    },
    {
        event: eventTypes.reception,
        name: "Greet Saelens",
    },
    {
        event: eventTypes.reception,
        name: "Filip Leenknegt",
    },
    {
        event: eventTypes.reception,
        name: "Sonja Declercq",
    },
    {
        event: eventTypes.reception,
        name: "Didier Debonne",
    }
];

const dinerInvitees = [
    { event: eventTypes.all, name: "Elsy Claeys" },
    { event: eventTypes.all, name: "Krist Mylle" },
    { event: eventTypes.all, name: "Wout Mylle" },
    { event: eventTypes.all, name: "Stephanie Delameilleure" },
    { event: eventTypes.all, name: "Heiko Martin" },
    { event: eventTypes.all, name: "Barbara Desmet" },
    { event: eventTypes.all, name: "Guillaume Mareel" },
    { event: eventTypes.all, name: "Victoria Martin" },
    { event: eventTypes.all, name: "Rita Wylin" },
    { event: eventTypes.all, name: "Ria Quaghebeur" },
    { event: eventTypes.all, name: "Luc Piepers" },
    { event: eventTypes.all, name: "Liliane Desmedt" },
    { event: eventTypes.all, name: "Sabine Mylle" },
    { event: eventTypes.all, name: "Rudy Vanhaelewyn" },
    { event: eventTypes.all, name: "Manon Vanhaelewyn" },
    { event: eventTypes.all, name: "Jules Vandamme" },
    { event: eventTypes.all, name: "Reinout Vanhaelewyn" },
    { event: eventTypes.all, name: "Ellen Cools" },
    { event: eventTypes.all, name: "Marie Vanhaelewyn" },
    { event: eventTypes.all, name: "Tibo Strubbe" },
    { event: eventTypes.all, name: "Patsy Grimonprez" },
    { event: eventTypes.all, name: "Bart Mylle" },
    { event: eventTypes.all, name: "Alexander Mylle" },
    { event: eventTypes.all, name: "Jonathan Mylle" },
    { event: eventTypes.all, name: "Imani Tanghe" },
    { event: eventTypes.all, name: "Anniek Gryp" },
    { event: eventTypes.all, name: "Andy Claeys" },
    { event: eventTypes.all, name: "Zoë Claeys" },
    { event: eventTypes.all, name: "Uwe Claeys" },
    { event: eventTypes.all, name: "Johan Claeys" },
    { event: eventTypes.all, name: "Sandy Lannoo" },
    { event: eventTypes.all, name: "Ellen Claeys" },
    { event: eventTypes.all, name: "Sharon Claeys" },
    { event: eventTypes.all, name: "jamien Tack" },
    { event: eventTypes.all, name: "Els Desmet" },
    { event: eventTypes.all, name: "Vincent Lampole" },
    { event: eventTypes.all, name: "Manou Devogelaere" },
    { event: eventTypes.all, name: "Leon Devogelaere" },
    { event: eventTypes.all, name: "Viktor Vanden Berghe" },
    { event: eventTypes.all, name: "Babette Pauwelyn" },
    { event: eventTypes.all, name: "Helene Gruyaert" },
    { event: eventTypes.all, name: "Michiel Caenepeel" },
    { event: eventTypes.all, name: "Hugo Gentenaar" },
    { event: eventTypes.all, name: "Jade Christiaens" },
    { event: eventTypes.all, name: "Rune Grimmelprez" },
    { event: eventTypes.all, name: "Toon Van Hove" },
    { event: eventTypes.all, name: "Kato Meeuws" },
    { event: eventTypes.all, name: "Meredith Huyghebaert" },
    { event: eventTypes.all, name: "Marijn Vervaecke" },
    { event: eventTypes.all, name: "Xandrien Verthe", partner: "Peter VandenKerckhove" },
    { event: eventTypes.all, name: "Victor Ducatelle", partner: "Lobbe Denijs" },
    { event: eventTypes.all, name: "Gianni Vullers" },
    { event: eventTypes.all, name: "Alana Popelier" },
    { event: eventTypes.all, name: "Pieter Lammens" },
    { event: eventTypes.all, name: "Ine Neerinck" },
    { event: eventTypes.all, name: "Xanthippe Maes" },
    { event: eventTypes.all, name: "Laura Vandamme" },
    { event: eventTypes.all, name: "Jonas Christiaens" },
    { event: eventTypes.all, name: "Romy Lenoor" },
    { event: eventTypes.all, name: "Aïsha Miya" },
    { event: eventTypes.all, name: "Alex Vanlauwe" },
    { event: eventTypes.all, name: "Leen Decroos" },
    { event: eventTypes.all, name: "Emile Tytgat" },
    { event: eventTypes.all, name: "Korneel Decroos" },
    { event: eventTypes.all, name: "Marlies Lievens" },
    { event: eventTypes.all, name: "Fabien Francken" }
];
//test
const invitees = [
    ...receptionInvitees,
    ...dinerInvitees
]

export default invitees;