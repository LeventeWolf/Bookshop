# import web grabbing client and
# HTML parser
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import json


def init():
    url = 'https://www.bookdepository.com/search?searchTerm=Martin+Fowler&search=Find+book'

    # grab website and store in variable uclient
    uClient = uReq(url)

    # read and close HTML
    page_html = uClient.read()
    uClient.close()

    # call BeautifulSoup for parsing
    global page_soup
    page_soup = soup(page_html, "html.parser")


def get_books():
    result = []

    related_shelf = page_soup.findAll("div", {'class': 'book-item'})

    for book in related_shelf:
        title = book.find("h3").find("a").text.strip()
        imageUrl = book.findAll("img")[0]['data-lazy'].replace('mid', 'lrg')
        if book.find("span", {"class": "rrp"}):
            price = book.find("span", {"class": "rrp"}).text.replace(' Ft', '').replace('\u00a0', '')
        format = book.find("p", {"class": "format"}).text.strip()
        published = book.find("p", {"class": "published"}).text.strip()
        author = book.find("p", {"class": "author"}).text.strip()


        book_json = {
            'title': title,
            'longTitle': title,
            'author': author,
            'imageUrl': imageUrl,
            'price': price,
            'type': format,
            'published': published,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',
            'language': 'English',
            'quantity': 1
        }

        result.append(book_json)

    return result


def write_result_to_json(result):
    with open("../database/books-scraped.json", 'w') as json_out:
        json.dump(result, json_out, indent=4)

    print(f'Successfully wrote {len(result)} to books.json!')


if __name__ == '__main__':
    init()

    books = get_books()

    write_result_to_json(books)
