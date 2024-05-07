// Task: Show the cat names that contains the given keyword. (It can be case sensitive).

// Execute: node search-by-name.js Cir

// Example: node searcg-by-name.js irm
//  it will outputs:
//    Cirmi
//    Cirmos



const catNames = ['Cirmi', 'Cirmos', 'Vakarcs', 'Butyok', 'Bubu']

function main(keyword) {
    const matches = catNames.filter(name => name.includes(keyword));
    console.log(matches);
}

main(process.argv[2])

