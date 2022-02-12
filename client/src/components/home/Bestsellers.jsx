import React from "react";
import './bestsellers.scss';
import faker from "faker";
import {v4} from "uuid";
import SupplyProduct from "./SupplyProduct";

export default function Bestsellers() {
    const bestsellerProducts = [
        {
            "title": "Clean Code",
            "longTitle": "Clean Code : A Handbook of Agile Software Craftsmanship",
            "description": "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.",
            "author": "Robert Martin",
            "price": 10265,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg",
            "type": "Paperback",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Architecture",
            "longTitle": "Clean Architecture : A Craftsman's Guide to Software Structure and Design",
            "description": "Building upon the success of best-sellers The Clean Coder and Clean Code, legendary software craftsman Robert C. \"Uncle Bob\" Martin shows how to bring greater professionalism and discipline to application architecture and design.",
            "author": "Robert Martin",
            "price": 8735,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1344/9780134494166.jpg",
            "type": "Robert Martin",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Coder",
            "longTitle": "Clean Coder, The : A Code of Conduct for Professional Programmers",
            "description": "Programmers who endure and succeed amidst swirling uncertainty and nonstop pressure share a common attribute: They care deeply about the practice of creating software. They treat it as a craft. They are professionals.\n",
            "author": "Robert Martin",
            "price": 9693,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1370/9780137081073.jpg",
            "type": "Paperback",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Agile",
            "longTitle": "Clean Agile : Back to Basics",
            "description": "Agile Values and Principles for a New Generation\n\"In the journey to all things Agile, Uncle Bob has been there, done that, and has the both the t-shirt and the scars to show for it. This delightful book is part history, part personal stories, and all wisdom. If you want to understand what Agile is and how it came to be, this is the book for you.\"\n-Grady Booch",
            "author": "Robert Martin",
            "price": 8915,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1357/9780135781869.jpg",
            "type": "Paperback",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Craftsmanship",
            "longTitle": "Clean Craftsmanship : Disciplines, Standards, and Ethics",
            "description": "ow to Write Code You're Proud of . . . Every Single Day\n\". . . [A] timely and humble reminder of the ever-increasing complexity of our programmatic world and how we owe it to the legacy of humankind--and to ourselves--to practice ethical development. Take your time reading Clean Craftsmanship. . . . Keep this book on your go-to bookshelf. Let this book be your old friend--your Uncle Bob, your guide--as you make your way through this world with curiosity and courage.\"\n--From the Foreword by Stacia Heimgartner Viscardi, CST & Agile Mentor",
            "author": "Robert Martin",
            "price": 11283,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1369/9780136915713.jpg",
            "type": "Paperback",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Code",
            "longTitle": "Clean Code : A Handbook of Agile Software Craftsmanship",
            "description": "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.",
            "author": "Robert Martin",
            "price": 10265,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg",
            "type": "Paperback",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Architecture",
            "longTitle": "Clean Architecture : A Craftsman's Guide to Software Structure and Design",
            "description": "Building upon the success of best-sellers The Clean Coder and Clean Code, legendary software craftsman Robert C. \"Uncle Bob\" Martin shows how to bring greater professionalism and discipline to application architecture and design.",
            "author": "Robert Martin",
            "price": 8735,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1344/9780134494166.jpg",
            "type": "Robert Martin",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Coder",
            "longTitle": "Clean Coder, The : A Code of Conduct for Professional Programmers",
            "description": "Programmers who endure and succeed amidst swirling uncertainty and nonstop pressure share a common attribute: They care deeply about the practice of creating software. They treat it as a craft. They are professionals.\n",
            "author": "Robert Martin",
            "price": 9693,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1370/9780137081073.jpg",
            "type": "Paperback",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Agile",
            "longTitle": "Clean Agile : Back to Basics",
            "description": "Agile Values and Principles for a New Generation\n\"In the journey to all things Agile, Uncle Bob has been there, done that, and has the both the t-shirt and the scars to show for it. This delightful book is part history, part personal stories, and all wisdom. If you want to understand what Agile is and how it came to be, this is the book for you.\"\n-Grady Booch",
            "author": "Robert Martin",
            "price": 8915,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1357/9780135781869.jpg",
            "type": "Paperback",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Craftsmanship",
            "longTitle": "Clean Craftsmanship : Disciplines, Standards, and Ethics",
            "description": "ow to Write Code You're Proud of . . . Every Single Day\n\". . . [A] timely and humble reminder of the ever-increasing complexity of our programmatic world and how we owe it to the legacy of humankind--and to ourselves--to practice ethical development. Take your time reading Clean Craftsmanship. . . . Keep this book on your go-to bookshelf. Let this book be your old friend--your Uncle Bob, your guide--as you make your way through this world with curiosity and courage.\"\n--From the Foreword by Stacia Heimgartner Viscardi, CST & Agile Mentor",
            "author": "Robert Martin",
            "price": 11283,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1369/9780136915713.jpg",
            "type": "Paperback",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Code",
            "longTitle": "Clean Code : A Handbook of Agile Software Craftsmanship",
            "description": "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.",
            "author": "Robert Martin",
            "price": 10265,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg",
            "type": "Paperback",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Architecture",
            "longTitle": "Clean Architecture : A Craftsman's Guide to Software Structure and Design",
            "description": "Building upon the success of best-sellers The Clean Coder and Clean Code, legendary software craftsman Robert C. \"Uncle Bob\" Martin shows how to bring greater professionalism and discipline to application architecture and design.",
            "author": "Robert Martin",
            "price": 8735,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1344/9780134494166.jpg",
            "type": "Robert Martin",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Coder",
            "longTitle": "Clean Coder, The : A Code of Conduct for Professional Programmers",
            "description": "Programmers who endure and succeed amidst swirling uncertainty and nonstop pressure share a common attribute: They care deeply about the practice of creating software. They treat it as a craft. They are professionals.\n",
            "author": "Robert Martin",
            "price": 9693,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1370/9780137081073.jpg",
            "type": "Paperback",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Agile",
            "longTitle": "Clean Agile : Back to Basics",
            "description": "Agile Values and Principles for a New Generation\n\"In the journey to all things Agile, Uncle Bob has been there, done that, and has the both the t-shirt and the scars to show for it. This delightful book is part history, part personal stories, and all wisdom. If you want to understand what Agile is and how it came to be, this is the book for you.\"\n-Grady Booch",
            "author": "Robert Martin",
            "price": 8915,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1357/9780135781869.jpg",
            "type": "Paperback",
            "language": "English",
            "quantity": 1
        },
        {
            "title": "Clean Craftsmanship",
            "longTitle": "Clean Craftsmanship : Disciplines, Standards, and Ethics",
            "description": "ow to Write Code You're Proud of . . . Every Single Day\n\". . . [A] timely and humble reminder of the ever-increasing complexity of our programmatic world and how we owe it to the legacy of humankind--and to ourselves--to practice ethical development. Take your time reading Clean Craftsmanship. . . . Keep this book on your go-to bookshelf. Let this book be your old friend--your Uncle Bob, your guide--as you make your way through this world with curiosity and courage.\"\n--From the Foreword by Stacia Heimgartner Viscardi, CST & Agile Mentor",
            "author": "Robert Martin",
            "price": 11283,
            "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1369/9780136915713.jpg",
            "type": "Paperback",
            "language": "English",
            "quantity": 1
        },
    ]

    shuffleArray(bestsellerProducts)

    return (
        <div className="bestsellers-wrap">
            <h1>Bestsellers</h1>

            <div className="bestsellers-product-container">
                <div className="bestsellers-product-wrap">
                    {bestsellerProducts.map(product => <SupplyProduct product={product} key={v4()}/>)}
                </div>
            </div>

        </div>
    )
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}