interface Report{
    summary():string;
}

const civic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name ${this.name}`
    }
}

const drink = {
    color: "brown",
    carbonate: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
}

const printSummary = (item: Report):void => {
    console.log(item.summary())
}

printSummary(civic)
printSummary(drink)

// Name civic
// My drink has 40 grams of sugar