const fileHandler = require('../src/lib/fileHandler');

test('getWishlistProducts: Should get Selim\'s wishlist', () => {
    const result = fileHandler.getWishlistProducts('selim');
    const expected = [
        {
            "title": "John Fowler",
            "longTitle": "John Fowler",
            "author": "Martin Wood",
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7112/9780711227118.jpg",
            "price": "25746",
            "type": "Hardback",
            "published": "15 Dec 2007",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Refaktoryzacja",
            "longTitle": "Refaktoryzacja",
            "author": "Martin Fowler",
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9788/3283/9788328355637.jpg",
            "price": "25746",
            "type": "Paperback",
            "published": "",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ",
            "language": "English",
            "quantity": 1
        }
    ]

    expect(result).toStrictEqual(expected);
});

test('getProductByTitle: should return book: \'Clean Code\' details', () => {
    const result = fileHandler.getProductByTitle('Clean Code');
    const expected = {
        "title": "Clean Code",
        "longTitle": "Clean Code : A Handbook of Agile Software Craftsmanship",
        "description": "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.",
        "author": "Robert Martin",
        "price": 10265,
        "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg",
        "type": "Paperback",
        "language": "English",
        "quantity": 1
    }

    expect(result).toStrictEqual(expected);
});

test('getProductByTitle: should return undefined', () => {
    const result = fileHandler.getProductByTitle('NO-BOOK-NAMED-THIS');
    const expected = undefined;

    expect(result).toBe(expected);
});