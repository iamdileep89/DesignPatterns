/*
This pattern focuses on ability to add behavior or functionalities to existing class dynamically 
*/


class Book{
    constructor(title, author, price){
        this.title = title;
        this.author = author;
        this.price = price;
    }
    getDetails(){
        return `${this.title} by ${this.author}`;
    }
}

// decorator 1
function giftWrap(book){
    book.isGiftWrapped = true
    book.unwrap = function(){
        return `Unwrapped ${book.getDetails()}`
    }
    return book;
}

// decorator 2
function hardbindBook(book){
    book.isHardBound = true;
    book.price += 5;
    return book;
}

// usage

const alchemist = new giftWrap(new Book("The Alchemist", "Paulo Coelho", 10));
console.log(alchemist.isGiftWrapped);
console.log(alchemist.unwrap());

const inferno = new hardbindBook(new Book('Inferno', 'Dan Brown', 15));
console.log(inferno.isHardBound);
console.log(inferno.price)