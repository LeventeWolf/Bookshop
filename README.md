# Bookshop

Bookshop site in React (redux) + NodeJS + Express + Oracle

### Disclaimer!

The design of the page was taken from the https://www.bookdepository.com/. This project was created for only educational purposes. We do **NOT** intend to produce any commercial content from this!

### Insights

Home page

<img src="./documentation/screenshots/Home.png">

More: [documentation/screenshots](https://github.com/LeventeWolf/Bookshop/tree/master/documentation/screenshots)


## Setup & Run

### Prerequisites:
Client & Server
- NodeJS version: 16 (not supported: 17)
- Web browser: Chrome, Mozilla firefox,

Database
- Docker
- Oracle [db] version: oracle-12c
- Xampp

<hr>

### Installation

#### React & Nodejs
To install the dependencies go to /client & /server then run: <br>

`npm install`

#### Oracle

Detailed installation: https://github.com/MaksymBilenko/docker-oracle-12c

1. Download docker image:  <br>
    ```
    docker pull truevoly/oracle-12c
    ```

2. Download **oracle-client** [Version 19.14.0.0.0] <br>
    https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html <br>
    [Windows/MacOS]: Change `libPath` location in **server/src/dao/main_dao.js** to your downloaded oracle-client path <br>
    [Linux]: download libaio1 && export oracle-client to path 
    ```
    sudo apt-get install libaio1
    ```
    ```
    export LD_LIBRARY_PATH=/home/user/oracle/instantclient_19_14:$LD_LIBRARY_PATH
    ``` 
<hr>

### Run

#### Webserver

/server -> `npm start`

#### Client

/client -> `npm start`

#### Database

##### Run docker image

**[Windows]:** <br> 
Start oracle-12c in your Docker desktop app

**[Linux]:** 
```
docker run -p 8080:8080 -p 1521:1521 truevoly/oracle-12c
```
