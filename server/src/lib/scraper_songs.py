# import web grabbing client and
# HTML parser
import random
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
from urllib.request import Request, urlopen
import json


result_json = 'songs.json'

genres = ['Jazz', 'Classical', 'New era']


def init():
    url = 'https://www.musicgrotto.com/best-songs-of-all-time/'

    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()

    # read and close HTML

    # call BeautifulSoup for parsing
    global page_soup
    page_soup = soup(webpage, "html.parser")


def get_songs():
    result = {}

    songs_shelf = page_soup.findAll("div", {'class': 'entry-content'})[0]

    scrape_title_and_producer(result, songs_shelf)
    scrape_thumbnail(result, songs_shelf)
    scrape_description(result, songs_shelf)

    append_length(result)
    append_price(result)
    append_genre(result)
    append_language(result)

    # append_release (result) should do this manually

    # for k, v in result.items():
    #     print(v)
    #     pass

    return [value for k, value in result.items()]


def scrape_description(result, songs_shelf):
    descriptions = songs_shelf.findAll("p")
    id = 0
    for desc in descriptions[3:]:
        if desc.text[:5] == 'Next:':
            continue

        if id in result:
            result[id]['description'] = desc.text
        id += 1


def scrape_thumbnail(result, songs_shelf):
    images_wrap = songs_shelf.findAll("div", {'class': 'wp-block-embed__wrapper'})
    thumbnail_template = 'https://img.youtube.com/vi/{}/0.jpg'
    # scrape thumbnail
    for id, image in enumerate(images_wrap):
        youtube_link = image.findAll("div", {'class': 'rll-youtube-player'})[0]['data-src']
        youtube_id = youtube_link.split('/')[-1]
        image_url = thumbnail_template.format(youtube_id)
        result[id]['imageUrl'] = image_url


def scrape_title_and_producer(result, songs_shelf):
    h2 = songs_shelf.findAll("h2")
    # scrape title & producer
    for id, h2 in enumerate(h2):
        if id not in result:
            result[id] = {}

        text = h2.text.split(' – ')
        title = text[0].split('. ')[1][1:-1]
        producer = text[1]

        result[id]['title'] = title
        result[id]['longTitle'] = title
        result[id]['producer'] = producer


def append_length(result):
    for k, v in result.items():
        v['length'] = f"{random.randint(1, 2)}:{random.randint(0, 59)}"


def append_language(result):
    for k, v in result.items():
        v['language'] = 'English'


def append_price(result):
    for k, v in result.items():
        v['price'] = random.randint(200, 2000)


def append_genre(result):
    for k, v in result.items():
        v['genre'] = genres[random.randint(0, len(genres) - 1)]


def write_result_to_json(result):
    with open(f"../../database/raw_json/{result_json}", 'w') as json_out:
        json.dump(result, json_out, indent=4)

    print(f'Successfully wrote {len(result)} to {result_json}!')


if __name__ == '__main__':
    init()

    songs = get_songs()

    write_result_to_json(songs)
