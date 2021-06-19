const age = 18;
const isFemale = true;
const driverStatus='bob';
const name='Bram';
const totalAmount=26;
//Opdracht 3 deel 1
if (age>17){
    console.log("U bent 18 jaar of ouder, welkom in deze kroeg!");
} else {
    console.log("U bent helaas nog te jong om u welkom te mogen heten in deze kroeg!");
}
//Opdracht 3 deel 2
if (isFemale){
    console.log("Welkom op de ladiesnight!");
} else {
    console.log("Helaas zijn alleen dames welkom op de ladiesnight!");
}
//Opdracht 3 deel 3
if (driverStatus==='bob'){
    console.log("Beste bob; We zullen uw auto voorrijden en wensen u een veilige reis naar huis!");
} else {
    console.log("Na zo'n mooie avond laat u zich lekker naar huis rijden; we zullen een taxi voor u bellen!");
}
//Opdracht 4 deel 1
if (age >=18 && age <=25){
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Helaas geen speciale akties");
}
//Opdracht 4 deel 2
if (name === 'Sarah' || name === 'Bram'){
    console.log("Lieve Sarah of Bram, je krijgt een gratis biertje!");
} else {
    console.log("Helaas voor jou geen gratis bier");
}
//Opdracht 4 deel 3
if (totalAmount>100){
    console.log("Bij meer dan 100 euro gratis flesje champagne!");
} else if (totalAmount>50){
    console.log("Bij meer dan 50 euro gratis portie nachos!");
} else if (totalAmount>25){
    console.log("Bij meer dan 25 euro gratis (vega)bitterballen!");
} else {
    console.log("Besteed ietsje meer voor gratis lekkernijen!");
}