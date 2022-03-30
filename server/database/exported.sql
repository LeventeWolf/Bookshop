--------------------------------------------------------
--  File created - Sunday-March-27-2022   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Sequence ADDRESS_SEQ
--------------------------------------------------------

CREATE SEQUENCE  "WOLF"."ADDRESS_SEQ"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 21 CACHE 20 NOORDER  NOCYCLE   ;
--------------------------------------------------------
--  DDL for Sequence STORAGE_SEQ
--------------------------------------------------------

CREATE SEQUENCE  "WOLF"."STORAGE_SEQ"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE   ;
--------------------------------------------------------
--  DDL for Table ADDRESS
--------------------------------------------------------

CREATE TABLE "WOLF"."ADDRESS"
(	"ID" NUMBER,
     "CITY" VARCHAR2(300 BYTE),
     "ZIPCODE" NUMBER,
     "STREET" VARCHAR2(300 BYTE),
     "HOUSE_NUMBER" NUMBER
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table ADMIN
--------------------------------------------------------

CREATE TABLE "WOLF"."ADMIN"
(	"USERNAME" VARCHAR2(200 BYTE),
     "POWER" NUMBER(10,0),
     "AUTHORITY" VARCHAR2(200 BYTE)
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table BOOK
--------------------------------------------------------

CREATE TABLE "WOLF"."BOOK"
(	"ID" NUMBER,
     "PAGENUMBER" NUMBER(20,0),
     "TYPE" VARCHAR2(100 BYTE),
     "AUTHOR" VARCHAR2(100 BYTE)
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table CLIENT
--------------------------------------------------------

CREATE TABLE "WOLF"."CLIENT"
(	"USERNAME" VARCHAR2(20 BYTE),
     "EMAIL" VARCHAR2(22 BYTE),
     "PPASSWORD" VARCHAR2(20 BYTE),
     "FIRSTNAME" VARCHAR2(20 BYTE),
     "LASTNAME" VARCHAR2(20 BYTE),
     "AVATAR" VARCHAR2(20 BYTE),
     "ADDRESS_ID" NUMBER,
     "IS_ADMIN" NUMBER(1,0) DEFAULT 0,
     "IS_MEMBER" NUMBER(1,0) DEFAULT 0
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table CLIENT_PURCHACES
--------------------------------------------------------

CREATE TABLE "WOLF"."CLIENT_PURCHACES"
(	"CLIENT_ID" VARCHAR2(200 BYTE),
     "PURCHASE_ID" NUMBER,
     "ID" NUMBER
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table CREDIT_CARD
--------------------------------------------------------

CREATE TABLE "WOLF"."CREDIT_CARD"
(	"NAME" VARCHAR2(200 BYTE),
     "USERNAME" VARCHAR2(200 BYTE),
     "CVC" NUMBER(3,0),
     "EXPIRATION_DATE" DATE
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table CUSTOMER
--------------------------------------------------------

CREATE TABLE "WOLF"."CUSTOMER"
(	"USERNAME" VARCHAR2(200 BYTE)
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table FILM
--------------------------------------------------------

CREATE TABLE "WOLF"."FILM"
(	"ID" NUMBER,
     "DIRECTOR" VARCHAR2(500 BYTE),
     "LENGTH" NUMBER
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table GENRE
--------------------------------------------------------

CREATE TABLE "WOLF"."GENRE"
(	"PRODUCT" NUMBER,
     "GENRE" VARCHAR2(200 BYTE)
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PRODUCT
--------------------------------------------------------

CREATE TABLE "WOLF"."PRODUCT"
(	"ID" NUMBER(20,0),
     "PRICE" NUMBER(20,0) DEFAULT 0,
     "NAME" VARCHAR2(100 BYTE),
     "GENRE" VARCHAR2(100 BYTE),
     "RELEASE" VARCHAR2(100 BYTE),
     "IMAGEURL" VARCHAR2(100 BYTE),
     "LANGUAGE" VARCHAR2(300 BYTE),
     "DESCRIPTION" VARCHAR2(2000 BYTE),
     "LONGNAME" VARCHAR2(20 BYTE),
     "QUANTITY" NUMBER(20,0) DEFAULT 1
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PURCHASE
--------------------------------------------------------

CREATE TABLE "WOLF"."PURCHASE"
(	"ID" NUMBER GENERATED ALWAYS AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE ,
     "DELIVERY_OPTION" VARCHAR2(200 BYTE),
     "DDATE" DATE,
     "STATUS" VARCHAR2(200 BYTE),
     "CLIENT_PURCHASE_ID" NUMBER,
     "PURCHASE_INFO_ID" NUMBER
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PURCHASE_INFO
--------------------------------------------------------

CREATE TABLE "WOLF"."PURCHASE_INFO"
(	"PURCHASE_ID" NUMBER,
     "PRODUCT_ID" NUMBER,
     "QUANTITY" NUMBER DEFAULT 1,
     "ID" NUMBER GENERATED ALWAYS AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table SONG
--------------------------------------------------------

CREATE TABLE "WOLF"."SONG"
(	"ID" NUMBER,
     "LENGTH" VARCHAR2(400 BYTE),
     "PRODUCER" VARCHAR2(400 BYTE)
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table STORAGE
--------------------------------------------------------

CREATE TABLE "WOLF"."STORAGE"
(	"ID" NUMBER,
     "NAME" VARCHAR2(500 BYTE),
     "CAPACITY" NUMBER,
     "CITY" VARCHAR2(300 BYTE)
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table STORED_PRODUCTS
--------------------------------------------------------

CREATE TABLE "WOLF"."STORED_PRODUCTS"
(	"STORAGE_ID" NUMBER,
     "PRODUCT_ID" NUMBER,
     "QUANTITY" NUMBER DEFAULT 0
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table WISHLIST
--------------------------------------------------------

CREATE TABLE "WOLF"."WISHLIST"
(	"USERNAME" VARCHAR2(300 BYTE),
     "PRODUCT_ID" NUMBER
) SEGMENT CREATION IMMEDIATE
    PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
    NOCOMPRESS LOGGING
    STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
    BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
    TABLESPACE "USERS" ;
REM INSERTING into WOLF.ADDRESS
SET DEFINE OFF;
Insert into WOLF.ADDRESS (ID,CITY,ZIPCODE,STREET,HOUSE_NUMBER) values (1,'Szeged',6750,'Kiss u.',10);
Insert into WOLF.ADDRESS (ID,CITY,ZIPCODE,STREET,HOUSE_NUMBER) values (2,'Budapest',4000,'Sajt u.',10);
Insert into WOLF.ADDRESS (ID,CITY,ZIPCODE,STREET,HOUSE_NUMBER) values (3,'Budapest',4001,'Bab u.',1);
Insert into WOLF.ADDRESS (ID,CITY,ZIPCODE,STREET,HOUSE_NUMBER) values (4,'Budapest',4002,'Ferenc u.',2);
Insert into WOLF.ADDRESS (ID,CITY,ZIPCODE,STREET,HOUSE_NUMBER) values (5,'Budapest',4003,'Márk u.',3);
REM INSERTING into WOLF.ADMIN
SET DEFINE OFF;
Insert into WOLF.ADMIN (USERNAME,POWER,AUTHORITY) values ('peter',1,'admin');
Insert into WOLF.ADMIN (USERNAME,POWER,AUTHORITY) values ('wolf',3,'owner');
Insert into WOLF.ADMIN (USERNAME,POWER,AUTHORITY) values ('asd',1,'moderator');
REM INSERTING into WOLF.BOOK
SET DEFINE OFF;
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (1,303,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (2,329,'Robert Martin','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (3,17,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (4,484,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (5,249,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (6,200,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (7,287,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (8,229,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (9,137,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (10,112,'Paperback','Jeff Patton');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (11,62,'Paperback','Pramod Sadalage');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (12,179,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (13,407,'Paperback','Jay Fields');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (14,214,'Paperback','James J. Odell');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (15,50,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (16,131,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (17,313,'Paperback','Martin Clay Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (18,370,'Hardback','Martin Wood');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (19,177,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (20,346,'Hardback','John Brant');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (21,197,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (22,400,'Paperback','Kent Beck');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (23,220,'Hardback','Jay Fields');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (24,53,'Paperback','John Michael Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (25,421,'Paperback','Martin Zschoche');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (26,150,'Hardback','Martin Brett');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (27,363,'Paperback','Martin Lawrence');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (28,259,'Hardback','Dr Jean Martin Charcot');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (29,73,'Paperback','Roz Ivanic');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (30,318,'Paperback','Martin Brett');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (1,303,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (2,329,'Robert Martin','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (3,17,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (4,484,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (5,249,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (6,200,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (7,287,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (8,229,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (9,137,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (10,112,'Paperback','Jeff Patton');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (11,62,'Paperback','Pramod Sadalage');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (12,179,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (13,407,'Paperback','Jay Fields');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (14,214,'Paperback','James J. Odell');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (15,50,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (16,131,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (17,313,'Paperback','Martin Clay Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (18,370,'Hardback','Martin Wood');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (19,177,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (20,346,'Hardback','John Brant');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (21,197,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (22,400,'Paperback','Kent Beck');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (23,220,'Hardback','Jay Fields');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (24,53,'Paperback','John Michael Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (25,421,'Paperback','Martin Zschoche');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (26,150,'Hardback','Martin Brett');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (27,363,'Paperback','Martin Lawrence');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (28,259,'Hardback','Dr Jean Martin Charcot');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (29,73,'Paperback','Roz Ivanic');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (30,318,'Paperback','Martin Brett');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (1,303,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (2,329,'Robert Martin','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (3,17,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (4,484,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (5,249,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (6,200,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (7,287,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (8,229,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (9,137,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (10,112,'Paperback','Jeff Patton');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (11,62,'Paperback','Pramod Sadalage');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (12,179,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (13,407,'Paperback','Jay Fields');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (14,214,'Paperback','James J. Odell');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (15,50,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (16,131,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (17,313,'Paperback','Martin Clay Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (18,370,'Hardback','Martin Wood');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (19,177,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (20,346,'Hardback','John Brant');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (21,197,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (22,400,'Paperback','Kent Beck');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (23,220,'Hardback','Jay Fields');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (24,53,'Paperback','John Michael Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (25,421,'Paperback','Martin Zschoche');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (26,150,'Hardback','Martin Brett');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (27,363,'Paperback','Martin Lawrence');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (28,259,'Hardback','Dr Jean Martin Charcot');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (29,73,'Paperback','Roz Ivanic');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (30,318,'Paperback','Martin Brett');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (1,303,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (2,329,'Robert Martin','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (3,17,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (4,484,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (5,249,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (6,200,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (7,287,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (8,229,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (9,137,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (10,112,'Paperback','Jeff Patton');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (11,62,'Paperback','Pramod Sadalage');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (12,179,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (13,407,'Paperback','Jay Fields');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (14,214,'Paperback','James J. Odell');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (15,50,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (16,131,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (17,313,'Paperback','Martin Clay Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (18,370,'Hardback','Martin Wood');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (19,177,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (20,346,'Hardback','John Brant');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (21,197,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (22,400,'Paperback','Kent Beck');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (23,220,'Hardback','Jay Fields');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (24,53,'Paperback','John Michael Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (25,421,'Paperback','Martin Zschoche');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (26,150,'Hardback','Martin Brett');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (27,363,'Paperback','Martin Lawrence');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (28,259,'Hardback','Dr Jean Martin Charcot');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (29,73,'Paperback','Roz Ivanic');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (30,318,'Paperback','Martin Brett');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (1,303,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (2,329,'Robert Martin','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (3,17,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (4,484,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (5,249,'Paperback','Robert Martin');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (6,200,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (7,287,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (8,229,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (9,137,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (10,112,'Paperback','Jeff Patton');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (11,62,'Paperback','Pramod Sadalage');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (12,179,'Hardback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (13,407,'Paperback','Jay Fields');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (14,214,'Paperback','James J. Odell');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (15,50,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (16,131,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (17,313,'Paperback','Martin Clay Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (18,370,'Hardback','Martin Wood');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (19,177,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (20,346,'Hardback','John Brant');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (21,197,'Paperback','Martin Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (22,400,'Paperback','Kent Beck');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (23,220,'Hardback','Jay Fields');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (24,53,'Paperback','John Michael Fowler');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (25,421,'Paperback','Martin Zschoche');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (26,150,'Hardback','Martin Brett');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (27,363,'Paperback','Martin Lawrence');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (28,259,'Hardback','Dr Jean Martin Charcot');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (29,73,'Paperback','Roz Ivanic');
Insert into WOLF.BOOK (ID,PAGENUMBER,TYPE,AUTHOR) values (30,318,'Paperback','Martin Brett');
REM INSERTING into WOLF.CLIENT
SET DEFINE OFF;
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('peter','asd','yolo','firstname','lastname','avatar',1,0,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('wolf','wolf@gmail.com','yolo','Levente','Wolf','Wolf.jfif',2,1,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('Sanyi','sanyi@gmail.com','Asd','firstname','lastname','avatar',3,0,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('wolff','wolf2@gmail.com','yolo','firstname','lastname','avatar',4,0,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('wolffy','asd','asd','firstname','lastname','avatar',5,0,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('asd','asd','asd','firstname','lastname','avatar',1,0,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('addam','asd','asd','firstname','lastname','avatar',2,0,0);
REM INSERTING into WOLF.CLIENT_PURCHACES
SET DEFINE OFF;
REM INSERTING into WOLF.CREDIT_CARD
SET DEFINE OFF;
Insert into WOLF.CREDIT_CARD (NAME,USERNAME,CVC,EXPIRATION_DATE) values ('1234-4567-7890-1234','wolf',111,to_date('27-MAR-25','DD-MON-RR'));
Insert into WOLF.CREDIT_CARD (NAME,USERNAME,CVC,EXPIRATION_DATE) values ('4321-4567-7890-1234','asd',222,to_date('27-MAR-25','DD-MON-RR'));
REM INSERTING into WOLF.CUSTOMER
SET DEFINE OFF;
Insert into WOLF.CUSTOMER (USERNAME) values ('asd');
Insert into WOLF.CUSTOMER (USERNAME) values ('addam');
REM INSERTING into WOLF.FILM
SET DEFINE OFF;
Insert into WOLF.FILM (ID,DIRECTOR,LENGTH) values (82,'Chad Stahelski',102);
Insert into WOLF.FILM (ID,DIRECTOR,LENGTH) values (83,'Peter Jackson',140);
Insert into WOLF.FILM (ID,DIRECTOR,LENGTH) values (84,'Christopher Nolan',112);
REM INSERTING into WOLF.GENRE
SET DEFINE OFF;
Insert into WOLF.GENRE (PRODUCT,GENRE) values (82,'action');
Insert into WOLF.GENRE (PRODUCT,GENRE) values (83,'sci-fi');
Insert into WOLF.GENRE (PRODUCT,GENRE) values (84,'action');
Insert into WOLF.GENRE (PRODUCT,GENRE) values (82,'action');
Insert into WOLF.GENRE (PRODUCT,GENRE) values (83,'sci-fi');
Insert into WOLF.GENRE (PRODUCT,GENRE) values (84,'action');
REM INSERTING into WOLF.PRODUCT
SET DEFINE OFF;
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (43,1159,'Iron Man','Classical','2020-02-20','https://img.youtube.com/vi/F01UTYg79KY/0.jpg',null,'Not to be confused with Marvel’s character Iron Man played by Robert Downy Jr., this Iron Man comes from another huge rock band that started in 1968 and is still going strong. Black Sabbath released “Iron Man” in 1970, a whopping amount of years in the distance! Among the original members of Black Sabbath were Ozzy Osbourne (singer), Tony Lommi (guitarist), Geezer Butler (bassist), and Bill Ward (drummer). Over the course of many years though, the band cycled through 21 more people, replacing each other. Ozzy Osbourne was fired from the band in 1979. It would not be until 1998 that Osbourne would reunite with his fellow original members of the band. Iron Man at its peak time placed in #52 and was on the charts for 10 weeks. Today, it is one of the most known songs of Black Sabbath, along with “War Pigs” and “Paranoid.”',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (44,613,'September','Classical','2020-02-19','https://img.youtube.com/vi/Gs069dndIYk/0.jpg',null,'Played in several movies throughout the 2000s and more disco clubs than anyone can count, “September” by Earth, Wind, and Fire were some of the hottest songs throughout the disco era. Released in 1978, “September” hit the #1 spot on the US Hot R&B/Hip Hop Songs Billboard. With over 530 million views on YouTube, this song is now most celebrated in, you guessed it, the month of September. Specifically, on the 21st night of the month.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (45,1109,'Come As You Are','Jazz','2020-02-17','https://img.youtube.com/vi/vabnZ9-ex7o/0.jpg',null,'Back with another Kurt Cobain song, “Come As You Are” basically tells the audience that even if you are messed up and confused, you are still welcomed. Some argue the song is about substances, and others argue it is about what people are expected to act like. Overall though, the meaning is up to the person listening. From the album Nevermind (which was almost called Sheep), Cobain wooed audiences with his song, making the album become platinum by selling millions of copies. Nevermind’s album picture is one of the most-known album covers in music history with a naked baby underwater fishing for a dollar bill. The other famous song from Nevermind is “Smells Like Teen Spirit”, which was previously mentioned on this list.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (46,1308,'Welcome to The Jungle','Jazz','2020-02-16','https://img.youtube.com/vi/o1tj2zJ2Wvg/0.jpg',null,'Another hit Guns N’ Roses song, “Welcome to The Jungle” comes from the same album as #6 “Sweet Child O’Mine.” In the 2017 movie Jumanji: Welcome to the Jungle, the producers decided to add Guns N’ Roses #7 hit song on the charts. After all, this song is the movie’s namesake.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (47,1926,'Mirrors','Classical','2020-02-15','https://img.youtube.com/vi/uuZE_IRwLNI/0.jpg',null,'If you are a Justin Timberlake fan, you’ll love the next song on this playlist. Justin Timberlake’s 2013 “Mirrors” is a love song that shows that your significant other, whoever they may be, ends up being your other half. That the person who you did not know for a long time has now become so important in your life that you are not complete without them. “Mirrors” is without a doubt a good song to get you in your feels. If you are having one of those nights, or even if you are madly in love with someone and want to relate to them how much they mean to you, this is the song for that.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (48,853,'Let’s Groove','Jazz','2020-02-14','https://img.youtube.com/vi/Lrle0x_DHBM/0.jpg',null,'Back into the disco era, another hit by the beloved Earth, Wind, and Fire, is #18 “Let’s Groove.” Now a famous audio clip on social media platforms, everyone is partaking in the “spice of life” that the band sings about. Released in 1981, “Let’s Groove” peaked at #3 on the charts and stayed on the charts for 24 weeks. Let’s Groove also managed to take the #1 spot on the US Billboard Hot Soul Singles. In spite of all the backlash that was happening to the disco industry, Earth, Wind, and Fire still managed to create a hit piece that is still listened to today. Now, it has been put onto social media and has millions of new listeners.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (49,803,'Despacito','New era','2020-02-13','https://img.youtube.com/vi/kJQP7kiw5Fk/0.jpg',null,'Coming on as our first foreign language song, “Despacito,” meaning “slowly” in Spanish, became a huge hit among younger generations. Luis Fonsi and Daddy Yankee originally sang this song when it came out in 2017, and a later version came out with Justin Bieber singing along, creating an English-Spanish version of the song. “Despacito” is all about desiring a relationship with someone but in a romantic way. Both the Spanish and English versions can be found on YouTube and are fun to dance to.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (50,1944,'Kashmir','Classical','2020-02-12','https://img.youtube.com/vi/tzVJPgCn-Z8/0.jpg',null,'Moving on back to 1970s rock, we have another hit from Led Zeppelin, which, like “Stairway to Heaven,” is also around 8 minutes long. Not to be confused with the rock band Kashmir, the song “Kashmir” has been known not only to be replayed by many cover bands but even high school orchestras. Although at first, the lyrics might seem a bit overwhelming, once they are broken down, you learn that the song is about a journey through the roads of Southern Morocco. The next time you listen to “Kashmir,” try to imagine yourself driving along a sandy long stretch of road with desert on either side.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (51,1561,'War Pigs','New era','2020-02-11','https://img.youtube.com/vi/bc5Nk1DXyEY/0.jpg',null,'Moving back to Black Sabbath but still staying in the 1970s, “War Pigs” is the ultimate anti-establishment song meant for everyone. Released in 1970 in protest to the Vietnam War raging on, “War Pigs” addressed the problem with society. That being that the rich have the poor fight their battles and the ones who start the wars never fight in them, but instead send young men in their stead to die, and for what? “War Pigs” was one of the songs that made Black Sabbath so famous because they were able to get the anti-war activists and some of the counterculture people on their side, which gave them rising fame and popularity.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (52,1563,'Shake Your Groove Thing','Classical','2020-02-10','https://img.youtube.com/vi/e-LeujZNV08/0.jpg',null,'If you are looking to hype your night up and release some endorphins, you should listen to “Shake Your Groove Thing.” Recorded and released in 1978, Peaches and Herb show people how to shake their groove thing (their rear ends). Peaches and Herb’s “Shake Your Groove Thing” at its height reached the #5 spot on the U.S. Hot 100 Billboard. The same people that wrote #4, “I Will Survive,” which was Freddie Perren and Dino Fekaris also wrote this popular disco song.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (53,636,'Jailhouse Rock','Jazz','2020-02-01','https://img.youtube.com/vi/PpsUOOfb-vE/0.jpg',null,'From the 1957 film Jailhouse Rock also comes to the classic song “Jailhouse Rock”. In both the movie and the song, Elvis Presley absolutely crushes his performance. Known as the “King of Rock and Roll”, how can we go down this playlist without mentioning the essential listen piece from the talented Elvis Presley. Even though Elvis Presley died in 1977, his music still lives on today.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (54,1908,'Hey Jude','New era','2020-02-02','https://img.youtube.com/vi/A_MjCqQoLLA/0.jpg',null,'Likewise with the Late Elvis Presley, one cannot possibly go through a list of the best songs ever and not mention something from one of the most famous bands of all time, The Beatles. The Beatles formed in Liverpool, England in 1957. It was only until 1960 they cemented their name into history which we all know them as today. Even though The Beatles were only active for 10 years until 1970, they made massive shockwaves throughout the world with their songs, including “Hey Jude.” “Hey Jude” earned the #1 spot in 18 countries and the #1 spot on 3 different US billboards. Like many of the most iconic Beatles songs, “Hey Jude” was and still is a sensational hit.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (55,734,'New York, New York','Jazz','2020-03-19','https://img.youtube.com/vi/le1QF3uoQNg/0.jpg',null,'Originally recorded by Liza Minelli in 1977 for the movie New York, New York, Frank Sinatra recorded a cover of the song in 1979 and now is most notable for the person who sings this song. Among the most well-known of singers from the 1900s, Frank Sinatra has had his songs and covers in many movies throughout the decades. This is one of the most well-known songs about New York of all time!',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (56,1086,'I Shot the Sheriff','Jazz','2020-04-19','https://img.youtube.com/vi/sG52YAe8Crg/0.jpg',null,'A common phrase that used to be used, “I shot the sheriff, but I did not shoot the deputy,” Bob Marley’s 1973 song “I Shot the Sheriff” is a combination of rock, reggae, soft rock, and pop all in one. Throughout the years there have been many covers of this song, but none other so famous than the Eric Clapton version. Bob Marley is a legend in the reggae world and is considered the king of reggae. “I Shot the Sheriff” hit the #1 spot on the US Billboard Hot 100 as well as many other countries.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (57,926,'Chop Suey','Classical','2020-05-19','https://img.youtube.com/vi/CSvFpBOe8eY/0.jpg',null,'This list is full of all types of genres, from rap to reggae, pop to rock. One genre that has not been mentioned yet though is metal/heavy metal. That is until now. Up next on our list is “Chop Suey” by System of a Down. System of a Down has been active from the years of 1994-2006 and 2010 to the present. Some of System of a Down’s other prominent songs include “B.Y.O.B.,” “Ariels,” “Toxicity,” and “Spiders.” “Chop Suey” now has over 1 billion views on YouTube and is headed by lead singer Serj Tankian. The other members of the band include Daron Malakian (guitarist), Shavo Odadjian (bassist), and John Dolmayan (drummer).',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (58,713,'American Pie','Jazz','2020-06-19','https://img.youtube.com/vi/iX_TFkut1PM/0.jpg',null,'The last 8-minute song in the queue of best songs of all time, “American Pie” is up next on the list. “American Pie” came out in 1971 by Don McLean. “American Pie,” tells the story of the tragic deaths of Buddy Holly, J.P. Richardson (The Big Bopper), and Ritchie Valens. As McLean mentions many times in the song, it was “the day the music died.” A somewhat somber song in its meaning, the song has an upbeat and catchy tune to sing along to.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (59,1501,'Buffalo Soldier','Jazz','2020-07-19','https://img.youtube.com/vi/QiESgCu9Ehw/0.jpg',null,'Another hit by “King of Reggae” Bob Marley, is the song “Buffalo Soldier.” “Buffalo Soldier” is a term given to African Americans by Native Americans, who thought their hair and dreadlocks felt like that of a buffalo’s pelt. Although the late king of reggae is no longer with us, no matter what song he sang, he always kept the same chill vibe throughout.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (60,629,'Come Together','New era','2020-07-01','https://img.youtube.com/vi/45cYwDMibGo/0.jpg',null,'Back to the table is The Beatles. This time, with their song, “Come Together.” “Come Together” was released in 1969 as a single on the album Abbey Road. Similar to #11 “Blurred Lines,” there was a lawsuit regarding “Come Together” because it sounded too similar to Chuck Berry’s “You Can’t Catch Me.”',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (61,259,'Bohemian Rhapsody','Classical','2020-02-01','https://img.youtube.com/vi/fJ9rUzIMcZQ/0.jpg',null,'If you would like to know what existentialism sounds like, look no further. The late Freddie Mercury (1946-1991) wrote “Bohemian Rhapsody” for Queen’s album A Night at the Opera in 1975. Bohemian Rhapsody was able to sell more than a million copies, making it Queen’s most famous song. The song is split up into 6 sections, consisting of the intro, ballad, guitar solo, opera, hard rock, and outro.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (62,1920,'Smooth Criminal','Classical','2020-02-19','https://img.youtube.com/vi/h_D3VFfhvs4/0.jpg',null,'From the movie This Is It, the king of pop strikes again on this list with his absolute banger “Smooth Criminal.” Not only is this song famous for its catchy tune and words, but for its dancing, choreographed by Jeffery Daniel. The move that catches people off guard and that always amazes people is Michael Jackson’s leaning trick where he stands on the floor and leans more than 45 degrees. For scale, the normal human body cannot usually lean more than 30-35 degrees without a considerable amount of training.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (63,252,'Ring of Fire','Classical','2020-02-19','https://img.youtube.com/vi/1WaV2x8GXj0/0.jpg',null,'Changing genres again, this list has not hit on a country song. All the way back in 1967, Johnny Cash released his song “Ring of Fire” in his album Greatest Hits, Vol. 1. Even though “Ring of Fire” only peaked at #45 on the US Hot Country Songs, Johnny Cash is a staple of country music in America, and “Ring of Fire” is short, relatable, and all-around fun to jam out to.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (64,1740,'Latch','Jazz','2020-02-19','https://img.youtube.com/vi/k0jLE7tTwjY/0.jpg',null,'Jumping forward about 50 years, a more modern piece of music that is among the best of all time is “Latch.” Here, Disclosure and Sam Smith in their album Settle sing “Latch,” which is a love song focused on truly loving someone to the point of never wanting to let go of that person.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (65,1856,'Bad and Boujee','Classical','2020-02-19','https://img.youtube.com/vi/S-sJp1FfG7Q/0.jpg',null,'Moving on to another rap song that most people have probably heard before is none other than Migos’ “Bad and Boujee.” “Bad and Boujee” features Lil Uzi Vert, most notable nowadays for putting a 24 million dollar diamond on his forehead to wear as jewelry. If you are a fan of rap or Migos, this song is a must on any playlist.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (66,1509,'Lean on Me','Classical','2020-02-19','https://img.youtube.com/vi/fOZ-MySzAac/0.jpg',null,'Shifting to a different genre and slower pace of the song, “Lean on Me” is the perfect feel-good song to get the emotions going and want to help others out in your life. Bill Withers wrote and released Lean on Me in 1972, and won a Grammy for Best R&B Song. Recently deceased (1938-2020), Bill Withers lives on in his songs, especially this one.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (2,8735,'Clean Architecture','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1344/9780134494166.jpg','English','Building upon the success of best-sellers The Clean Coder and Clean Code, legendary software craftsman Robert C. "Uncle Bob" Martin shows how to bring greater professionalism and discipline to application architecture and design.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (3,9693,'Clean Coder','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1370/9780137081073.jpg','English','Programmers who endure and succeed amidst swirling uncertainty and nonstop pressure share a common attribute: They care deeply about the practice of creating software. They treat it as a craft. They are professionals.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (4,8915,'Clean Agile','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1357/9780135781869.jpg','English','Agile Values and Principles for a New Generation "In the journey to all things Agile, Uncle Bob has been there, done that, and has the both the t-shirt and the scars to show for it. This delightful book is part history, part personal stories, and all wisdom. If you want to understand what Agile is and how it came to be, this is the book for you."-Grady Booch',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (5,11283,'Clean Craftsmanship','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1369/9780136915713.jpg','English','ow to Write Code You''re Proud of . . . Every Single Day ". . . [A] timely and humble reminder of the ever-increasing complexity of our programmatic world and how we owe it to the legacy of humankind--and to ourselves--to practice ethical development. Take your time reading Clean Craftsmanship. . . . Keep this book on your go-to bookshelf. Let this book be your old friend--your Uncle Bob, your guide--as you make your way through this world with curiosity and courage." --From the Foreword by Stacia Heimgartner Viscardi, CST & Agile Mentor',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (6,18836,'Refactoring','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1347/9780134757599.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (7,21975,'Patterns of Enterprise Application Architecture','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3211/9780321127426.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (8,15696,'UML Distilled','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3211/9780321193681.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);