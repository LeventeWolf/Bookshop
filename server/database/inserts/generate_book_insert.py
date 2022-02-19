import json
import random

books_raw_path = '../raw_json/books.json'
books_insert_path = 'book-insert.sql'


def insert_to_books(id, book):
    template = "INSERT INTO WOLF.BOOK (ID, PAGENUMBER, TYPE, AUTHOR) " \
               "VALUES ({id}, {pagenumber}, '{type}', '{author}');"

    result = template.format(
        id=id,
        pagenumber=random.randint(1, 500),
        type=book['type'],
        author=book['author'],
    )

    return result


def insert_to_products(id, book):
    template = "INSERT INTO WOLF.PRODUCT (ID, PRICE, NAME, GENRE, RELEASE, IMAGEURL) " \
               "VALUES ({id}, {price}, '{name}', '{genre}', '{date}', '{imageURL}');"

    result = template.format(
        id=id,
        price=book['price'],
        name=book['title'],
        date='2020-02-19',
        genre='Programming',
        imageURL=book['imageUrl'],
    )

    return result


def get_books():
    with open(books_raw_path, 'r') as books_json:
        return json.load(books_json)


def generate_book_inserts():
    books = get_books()

    id = 1

    with open(books_insert_path, 'w') as books_sql:
        for book in books:
            books_sql.write(insert_to_products(id, book) + '\n')
            books_sql.write(insert_to_books(id, book) + '\n\n')

            print(insert_to_products(id, book))
            print(insert_to_books(id, book))
            id += 1
            print()


if __name__ == '__main__':
    generate_book_inserts()
