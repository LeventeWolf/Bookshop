import json
import random

songs_raw_path = '../raw_json/songs.json'
songs_insert_path = 'songs-insert.sql'


def insert_to_songs(id, book):
    template = "INSERT INTO WOLF.SONG (ID, LENGTH, PRODUCER) " \
               "VALUES ({id}, '{length}', '{producer}');"

    result = template.format(
        id=id,
        length=book['length'],
        producer=book['producer'],
    )

    return result


def insert_to_products(id, song):
    template = "INSERT INTO WOLF.PRODUCT (ID, PRICE, NAME, GENRE, RELEASE, IMAGEURL, DESCRIPTION) " \
               "VALUES ({id}, {price}, '{name}', '{genre}', '{date}', '{imageURL}', '{description}');"

    result = template.format(
        id=id,
        price=song['price'],
        name=song['title'],
        date='',
        genre=song['genre'],
        imageURL=song['imageUrl'],
        description=song['description'],
    )

    return result


def get_songs():
    with open(songs_raw_path, 'r') as books_json:
        return json.load(books_json)


def generate_book_inserts():
    songs = get_songs()

    id = 31

    with open(songs_insert_path, 'w') as songs_sql:
        for song in songs:
            songs_sql.write(insert_to_products(id, song) + '\n')
            songs_sql.write(insert_to_songs(id, song) + '\n\n')

            print(insert_to_products(id, song))
            print(insert_to_songs(id, song))
            id += 1
            print()


if __name__ == '__main__':
    generate_book_inserts()
