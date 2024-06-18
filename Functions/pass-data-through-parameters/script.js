
const tipCAlculator = (sum, percentage) =>{
    let tip = sum * percentage/100;
    let total = sum +tip;

    console.log(`
        Sum berfore tip :Rs. ${sum}
        Percentage : ${percentage}%
        Tip :Rs. ${tip}
        Total :Rs. ${total}
        `)
}


tipCAlculator(100, 10)