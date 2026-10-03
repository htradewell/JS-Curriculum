function calculateFine(daysOverdue){
    if (daysOverdue>30){
        return(20);
    }
    else if (daysOverdue>=8){
        return(1.4+ 0.5*(daysOverdue-7));
    }
    else if (daysOverdue>=1){
        return(0.2*daysOverdue);
    }
    else{
        return(0);
    }
}
const something = calculateFine(12);
console.log(something);

function processBooks(books){
    books.forEach(book => {
        console.log(`${book.title}: ${calculateFine(book.daysOverdue)}`);
    });
}
const books = [
  { title: "Dune", daysOverdue: 3 },
  { title: "Neuromancer", daysOverdue: 12 },
  { title: "Snow Crash", daysOverdue: 45 },
  { title: "Foundation", daysOverdue: 0 }
];
processBooks(books);

function totalFine(books){
    let fineTotal = 0;
    books.forEach(book=>{
        const individualFine = calculateFine(book.daysOverdue);
        fineTotal = fineTotal+individualFine;
    });
    return fineTotal;
}
console.log(totalFine(books));
