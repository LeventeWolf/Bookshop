--------------------------------------------------------
--  File created - Wednesday-March-30-2022   
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
	"IMAGEURL" VARCHAR2(2000 BYTE), 
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
Insert into WOLF.ADDRESS (ID,CITY,ZIPCODE,STREET,HOUSE_NUMBER) values (3,'Budapest',4001,'Bab u.',1);
Insert into WOLF.ADDRESS (ID,CITY,ZIPCODE,STREET,HOUSE_NUMBER) values (4,'Budapest',4002,'Ferenc u.',2);
Insert into WOLF.ADDRESS (ID,CITY,ZIPCODE,STREET,HOUSE_NUMBER) values (5,'Budapest',4003,'Márk u.',3);
Insert into WOLF.ADDRESS (ID,CITY,ZIPCODE,STREET,HOUSE_NUMBER) values (1,'Szeged',6725,'Kiss u.', 53);
Insert into WOLF.ADDRESS (ID,CITY,ZIPCODE,STREET,HOUSE_NUMBER) values (2,'Budapest',4000,'Sajt u.',10);
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
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('peter','asd','yolo','firstname','lastname','avatar',null,0,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('wolf','wolf@gmail.com','yolo','Levente','Wolf','Wolf.jfif',null,1,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('Sanyi','sanyi@gmail.com','Asd','firstname','lastname','avatar',null,0,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('gabor','antal@gabi.com','antalg','firstname','lastname','avatar',null,0,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('wolff','wolf2@gmail.com','yolo','firstname','lastname','avatar',null,0,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('wolffy','asd','asd','firstname','lastname','avatar',null,0,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('asd','asd','asd','firstname','lastname','avatar',null,0,0);
Insert into WOLF.CLIENT (USERNAME,EMAIL,PPASSWORD,FIRSTNAME,LASTNAME,AVATAR,ADDRESS_ID,IS_ADMIN,IS_MEMBER) values ('addam','asd','asd','firstname','lastname','avatar',null,0,0);
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
REM INSERTING into WOLF.PRODUCT
SET DEFINE OFF;
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (2,8735,'Clean Architecture','Programming','2022-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1344/9780134494166.jpg','English','Building upon the success of best-sellers The Clean Coder and Clean Code, legendary software craftsman Robert C. "Uncle Bob" Martin shows how to bring greater professionalism and discipline to application architecture and design.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (3,9693,'Clean Coder','Programming','2022-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1370/9780137081073.jpg','English','Programmers who endure and succeed amidst swirling uncertainty and nonstop pressure share a common attribute: They care deeply about the practice of creating software. They treat it as a craft. They are professionals.
',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (4,8915,'Clean Agile','Programming','2022-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1357/9780135781869.jpg','English','Agile Values and Principles for a New Generation
"In the journey to all things Agile, Uncle Bob has been there, done that, and has the both the t-shirt and the scars to show for it. This delightful book is part history, part personal stories, and all wisdom. If you want to understand what Agile is and how it came to be, this is the book for you."
-Grady Booch',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (5,11283,'Clean Craftsmanship','Programming','2022-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1369/9780136915713.jpg','English','ow to Write Code You''re Proud of . . . Every Single Day
". . . [A] timely and humble reminder of the ever-increasing complexity of our programmatic world and how we owe it to the legacy of humankind--and to ourselves--to practice ethical development. Take your time reading Clean Craftsmanship. . . . Keep this book on your go-to bookshelf. Let this book be your old friend--your Uncle Bob, your guide--as you make your way through this world with curiosity and courage."
--From the Foreword by Stacia Heimgartner Viscardi, CST & Agile Mentor',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (6,18836,'Refactoring','Programming','2022-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1347/9780134757599.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (7,21975,'Patterns of Enterprise Application Architecture','Programming','2022-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3211/9780321127426.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (8,15696,'UML Distilled','Programming','2022-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3211/9780321193681.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (9,18836,'Domain-Specific Languages','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3217/9780321712943.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (10,12556,'User Story Mapping','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4919/9781491904909.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (11,14126,'NoSQL Distilled','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3218/9780321826626.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (12,14126,'Refactoring','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2014/9780201485677.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (13,17266,'Refactoring','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3219/9780321984135.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (14,25746,'Advanced Object-Oriented Analysis and Design Using UML','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5216/9780521648196.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (15,25746,'Refaktoryzacja','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9788/3283/9788328355637.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (1,10265,'Clean Code','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg','English','Even bad code can function. But if code isn''t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn''t have to be that way.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (16,25746,'Lines of the Times','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9259/9781925949957.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (17,25746,'You Always Belonged and You Always Will','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6159/9780615931326.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (18,25746,'John Fowler','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7112/9780711227118.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (19,25746,'Analysis Patterns','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1341/9780134186054.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (20,25746,'Refaktoryzacja Ulepszanie struktury istniejącego kodu','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9788/3246/9788324632435.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (21,25746,'Refactoring','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9783/9584/9783958459410.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (22,25746,'Planning Extreme Programming','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2017/9780201710915.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (23,25746,'Refactoring','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3216/9780321603500.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (24,25746,'Martin Hussingtree saves Liverpool!','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5397/9781539706793.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (25,9416,'The Gospel of Education','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9520/9781952025419.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (26,9416,'Readers, Texts and Compilers in the Earlier Middle Ages','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7546/9780754662358.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (27,9416,'Prevention of Cardiovascular Disease','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1926/9780192623973.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (28,9416,'Lectures on Localization in Diseases of the Brain','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/3403/9781340389925.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (29,9416,'Improving Learning in College','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4154/9780415469128.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (30,10672,'Readers, Texts and Compilers in the Earlier Middle Ages','Programming','2020-02-19','https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/1382/9781138257313.jpg','English','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Velit aliquet sagittis id consectetur purus ut. ',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (31,1795,'Smells Like Teen Spirit','Jazz',null,'https://img.youtube.com/vi/hTWKbfoikeg/0.jpg',null,'Starting off we have “Smells Like Teen Spirit”, which was written by the late Kurt Cobain, Krist Novoselic, and Dave Grohl. Performed by the famous and legendary band Nirvana (founded in 1987), this song became part of the top songs of the 1990s. Released in September of 1991, “Smells Like Teen Spirit” took the #1 spot on the Billboard’s Alternative Songs Chart. It is now one of the few songs that have gotten a whopping 1 billion views on YouTube.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (32,1377,'Billie Jean','Classical',null,'https://img.youtube.com/vi/Zi_XLOBDo_Y/0.jpg',null,'Going to #2 we have “Billie Jean” by the loved and missed Michael Jackson. Jackson released “Billie Jean” in his iconic album Thriller. Released by Epic Records in 1982, Thriller has now been certified as 34x platinum, which means this album sold more than 34 million times. Other popular songs from Michael Jackson’s Thriller include “P.Y.T.”, “Beat It,” and “Thriller.”',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (33,1940,'Stayin’ Alive','Classical',null,'https://img.youtube.com/vi/fNFzfwLM72c/0.jpg',null,'Heading over to the disco era of America, #3 on this list is Stayin’ Alive by the Bee Gees. Released in 1977, “Stayin’ Alive” peaked at #28 on the billboards and stayed on the charts for 13 weeks. This song is most famously known from the 1977 movie Saturday Night Fever, which stars John Travolta. An album with only one song on it, The Bee Gees was still able to pull platinum on it, selling more than 3 million copies.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (34,274,'I Will Survive','Classical',null,'https://img.youtube.com/vi/FHhZPp08s74/0.jpg',null,'One of the most beloved and well-known songs of all time, repeated by artists like Cake and Demi Lovato, coming down next to the best playlist of all time is Gloria Gaynor’s “I Will Survive.” Released in 1978 on her album Love Tracks, “I Will Survive” tells the story of being able to move on after a bad relationship. Originally written by Freddie Perren and Dino Fekaris, Gloria Gaynor ended up singing this song because her record company called Perren to see if they had any songs for them.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (35,207,'Whole Lotta Love','New era',null,'https://img.youtube.com/vi/HQmmM_qwG4k/0.jpg',null,'One of the most well-known bands to date, Led Zeppelin with their song “Whole Lotta Love” created a whirlpool of fanaticism at the height of their popularity. “Whole Lotta Love” came out in 1969 and was featured in the movie ‘The Song Remains the Same.’ An interesting fact about Led Zeppelin and how they got their name: one time while performing as the New Yardbirds, there were conversations about them saying they would “go down like a lead balloon.” From then on they named themselves Led Zeppelin and have become a household name that almost everyone knows.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (36,1207,'Sweet Child O’Mine','Classical',null,'https://img.youtube.com/vi/1w7OgIMMRc4/0.jpg',null,'If you have heard of the band Guns N’ Roses before, I am willing to bet money you have heard “Sweet Child O’Mine” before. From their album Appetite for Destruction in 1987, “Sweet Child O’Mine” has won several awards, including the MTV Video Music Award for Best Rock Video and the American Music Award for Favorite Pop/Rock Single. This song was so popular in 1988 that it hit the #1 spot on the charts. If you have never listened to this song, I encourage you to get your rock on.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (37,1194,'Scream and Shout','New era',null,'https://img.youtube.com/vi/J9W-_W50ChE/0.jpg',null,'Going into a more modern-age song, released in 2012 coming in on this list is a song by Will.I.Am and Brittney Spears, “Scream and Shout.” A common sound now used on social media for their intro which ends in “bring the action,” “Scream and Shout” reached the #1 spot on the US Hot Dance/Electronic Songs Billboard. Not only that but “Scream and Shout” hit the #1 spot in 29 different countries around the world. This is a perfect song to party to and jam out to. Whether you are hanging out with friends, creating a social media post, or working out at the gym, you should check out “Scream and Shout” and find out for yourself.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (38,820,'Santeria','New era',null,'https://img.youtube.com/vi/AEYN5w4T_aM/0.jpg',null,'Moving over to a slower pace, written by the hit 1990s rock band Sublime, we have Santeria at #8 for the playlist. Originally formed in Long Beach California, Sublime is a rock band that also dabbled in performing reggae and pop, hence their song “Santeria.” “Santeria” was one of their last songs released, which was in 1996. After that, the band broke up following the tragic death of one of its members. Other prominent songs to listen to by Sublime include “Smoke Two Joints,” “5446/Ball and Chain,” “Pawn Shop,” “40oz to Freedom,” and “Summertime.”',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (39,742,'Alright','Classical',null,'https://img.youtube.com/vi/Z-48u_uWMHY/0.jpg',null,'Changing genres once again, we start with our first rap song on this playlist. In 2015, Grammy award-winning artist Kendrick Lamar came out with his song “Alright” from his album To Pimp a Butterfly. Lamar’s song “Alright” peaked on the charts at #14 and lasted for 17 weeks there. Whether you like listening to Pop Smoke, Ski Mask the Slump God, or Drake, Kendrick Lamar should be at the top of your list, especially with this banger.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (40,1250,'Thrift Shop','New era',null,'https://img.youtube.com/vi/QK8mJJJvaes/0.jpg',null,'Sliding in with another rap song, this time from 2012, we have “Thrift Shop” by Macklemore and Ryan Lewis. From their album The Heist, “Thrift Shop” became a sensation not only within the United States but within over twenty countries as well. Thrift shop even was the #1 spot on 4 US billboards. Macklemore received a Grammy award in 2014 for Best Rap Performance and Best Rap Song. If you have got five minutes to spare, check out their music video on YouTube!',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (41,993,'Blurred Lines','Jazz',null,'https://img.youtube.com/vi/yyDUC1LUXSU/0.jpg',null,'Moving forward one year into 2013, we have “Blurred Lines” by Robin Thicke and Pharrell Williams. This suggestive song centered around “getting lucky,” (not to be confused with Daft Punk’s song “Get Lucky”) was released in 2013 and had some initial backlash from the populace for being misogynistic. There was even a lawsuit regarding this song due to the singers’ “noticeably ripping off Marvin Gaye’s “Got to Give it Up.” Despite all of the bad press this song received, it still hit the #1 position on the billboards and stayed on the billboards for 51 weeks.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (42,478,'Stairway to Heaven','Jazz',null,'https://img.youtube.com/vi/QkF3oxziUI4/0.jpg',null,'Commonly known as the forbidden riff in guitar stores, “Stairway to Heaven” is one of the most known songs in the entire world. A little just over 8 minutes of guitars, drums, and singing, Stairway to Heaven has been debated by multiple people what its true meaning actually is. And this is the true beauty of art when there are multiple meanings to the same lyrics everyone has heard before. Another huge hit for Led Zeppelin, Stairway surprisingly never hit the charts, yet is one of the most iconic songs to date.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (43,1159,'Iron Man','Classical',null,'https://img.youtube.com/vi/F01UTYg79KY/0.jpg',null,'Not to be confused with Marvel’s character Iron Man played by Robert Downy Jr., this Iron Man comes from another huge rock band that started in 1968 and is still going strong. Black Sabbath released “Iron Man” in 1970, a whopping amount of years in the distance! Among the original members of Black Sabbath were Ozzy Osbourne (singer), Tony Lommi (guitarist), Geezer Butler (bassist), and Bill Ward (drummer). Over the course of many years though, the band cycled through 21 more people, replacing each other. Ozzy Osbourne was fired from the band in 1979. It would not be until 1998 that Osbourne would reunite with his fellow original members of the band. Iron Man at its peak time placed in #52 and was on the charts for 10 weeks. Today, it is one of the most known songs of Black Sabbath, along with “War Pigs” and “Paranoid.”',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (44,613,'September','Classical',null,'https://img.youtube.com/vi/Gs069dndIYk/0.jpg',null,'Played in several movies throughout the 2000s and more disco clubs than anyone can count, “September” by Earth, Wind, and Fire were some of the hottest songs throughout the disco era. Released in 1978, “September” hit the #1 spot on the US Hot R&B/Hip Hop Songs Billboard. With over 530 million views on YouTube, this song is now most celebrated in, you guessed it, the month of September. Specifically, on the 21st night of the month.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (45,1109,'Come As You Are','Jazz',null,'https://img.youtube.com/vi/vabnZ9-ex7o/0.jpg',null,'Back with another Kurt Cobain song, “Come As You Are” basically tells the audience that even if you are messed up and confused, you are still welcomed. Some argue the song is about substances, and others argue it is about what people are expected to act like. Overall though, the meaning is up to the person listening. From the album Nevermind (which was almost called Sheep), Cobain wooed audiences with his song, making the album become platinum by selling millions of copies. Nevermind’s album picture is one of the most-known album covers in music history with a naked baby underwater fishing for a dollar bill. The other famous song from Nevermind is “Smells Like Teen Spirit”, which was previously mentioned on this list.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (46,1308,'Welcome to The Jungle','Jazz',null,'https://img.youtube.com/vi/o1tj2zJ2Wvg/0.jpg',null,'Another hit Guns N’ Roses song, “Welcome to The Jungle” comes from the same album as #6 “Sweet Child O’Mine.” In the 2017 movie Jumanji: Welcome to the Jungle, the producers decided to add Guns N’ Roses #7 hit song on the charts. After all, this song is the movie’s namesake.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (47,1926,'Mirrors','Classical',null,'https://img.youtube.com/vi/uuZE_IRwLNI/0.jpg',null,'If you are a Justin Timberlake fan, you’ll love the next song on this playlist. Justin Timberlake’s 2013 “Mirrors” is a love song that shows that your significant other, whoever they may be, ends up being your other half. That the person who you did not know for a long time has now become so important in your life that you are not complete without them. “Mirrors” is without a doubt a good song to get you in your feels. If you are having one of those nights, or even if you are madly in love with someone and want to relate to them how much they mean to you, this is the song for that.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (48,853,'Let’s Groove','Jazz',null,'https://img.youtube.com/vi/Lrle0x_DHBM/0.jpg',null,'Back into the disco era, another hit by the beloved Earth, Wind, and Fire, is #18 “Let’s Groove.” Now a famous audio clip on social media platforms, everyone is partaking in the “spice of life” that the band sings about. Released in 1981, “Let’s Groove” peaked at #3 on the charts and stayed on the charts for 24 weeks. Let’s Groove also managed to take the #1 spot on the US Billboard Hot Soul Singles. In spite of all the backlash that was happening to the disco industry, Earth, Wind, and Fire still managed to create a hit piece that is still listened to today. Now, it has been put onto social media and has millions of new listeners.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (49,803,'Despacito','New era',null,'https://img.youtube.com/vi/kJQP7kiw5Fk/0.jpg',null,'Coming on as our first foreign language song, “Despacito,” meaning “slowly” in Spanish, became a huge hit among younger generations. Luis Fonsi and Daddy Yankee originally sang this song when it came out in 2017, and a later version came out with Justin Bieber singing along, creating an English-Spanish version of the song. “Despacito” is all about desiring a relationship with someone but in a romantic way. Both the Spanish and English versions can be found on YouTube and are fun to dance to.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (50,1944,'Kashmir','Classical',null,'https://img.youtube.com/vi/tzVJPgCn-Z8/0.jpg',null,'Moving on back to 1970s rock, we have another hit from Led Zeppelin, which, like “Stairway to Heaven,” is also around 8 minutes long. Not to be confused with the rock band Kashmir, the song “Kashmir” has been known not only to be replayed by many cover bands but even high school orchestras. Although at first, the lyrics might seem a bit overwhelming, once they are broken down, you learn that the song is about a journey through the roads of Southern Morocco. The next time you listen to “Kashmir,” try to imagine yourself driving along a sandy long stretch of road with desert on either side.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (51,1561,'War Pigs','New era',null,'https://img.youtube.com/vi/bc5Nk1DXyEY/0.jpg',null,'Moving back to Black Sabbath but still staying in the 1970s, “War Pigs” is the ultimate anti-establishment song meant for everyone. Released in 1970 in protest to the Vietnam War raging on, “War Pigs” addressed the problem with society. That being that the rich have the poor fight their battles and the ones who start the wars never fight in them, but instead send young men in their stead to die, and for what? “War Pigs” was one of the songs that made Black Sabbath so famous because they were able to get the anti-war activists and some of the counterculture people on their side, which gave them rising fame and popularity.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (52,1563,'Shake Your Groove Thing','Classical',null,'https://img.youtube.com/vi/e-LeujZNV08/0.jpg',null,'If you are looking to hype your night up and release some endorphins, you should listen to “Shake Your Groove Thing.” Recorded and released in 1978, Peaches and Herb show people how to shake their groove thing (their rear ends). Peaches and Herb’s “Shake Your Groove Thing” at its height reached the #5 spot on the U.S. Hot 100 Billboard. The same people that wrote #4, “I Will Survive,” which was Freddie Perren and Dino Fekaris also wrote this popular disco song.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (53,636,'Jailhouse Rock','Jazz',null,'https://img.youtube.com/vi/PpsUOOfb-vE/0.jpg',null,'From the 1957 film Jailhouse Rock also comes to the classic song “Jailhouse Rock”. In both the movie and the song, Elvis Presley absolutely crushes his performance. Known as the “King of Rock and Roll”, how can we go down this playlist without mentioning the essential listen piece from the talented Elvis Presley. Even though Elvis Presley died in 1977, his music still lives on today.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (54,1908,'Hey Jude','New era',null,'https://img.youtube.com/vi/A_MjCqQoLLA/0.jpg',null,'Likewise with the Late Elvis Presley, one cannot possibly go through a list of the best songs ever and not mention something from one of the most famous bands of all time, The Beatles. The Beatles formed in Liverpool, England in 1957. It was only until 1960 they cemented their name into history which we all know them as today. Even though The Beatles were only active for 10 years until 1970, they made massive shockwaves throughout the world with their songs, including “Hey Jude.” “Hey Jude” earned the #1 spot in 18 countries and the #1 spot on 3 different US billboards. Like many of the most iconic Beatles songs, “Hey Jude” was and still is a sensational hit.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (55,734,'New York, New York','Jazz',null,'https://img.youtube.com/vi/le1QF3uoQNg/0.jpg',null,'Originally recorded by Liza Minelli in 1977 for the movie New York, New York, Frank Sinatra recorded a cover of the song in 1979 and now is most notable for the person who sings this song. Among the most well-known of singers from the 1900s, Frank Sinatra has had his songs and covers in many movies throughout the decades. This is one of the most well-known songs about New York of all time!',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (56,1086,'I Shot the Sheriff','Jazz',null,'https://img.youtube.com/vi/sG52YAe8Crg/0.jpg',null,'A common phrase that used to be used, “I shot the sheriff, but I did not shoot the deputy,” Bob Marley’s 1973 song “I Shot the Sheriff” is a combination of rock, reggae, soft rock, and pop all in one. Throughout the years there have been many covers of this song, but none other so famous than the Eric Clapton version. Bob Marley is a legend in the reggae world and is considered the king of reggae. “I Shot the Sheriff” hit the #1 spot on the US Billboard Hot 100 as well as many other countries.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (57,926,'Chop Suey','Classical',null,'https://img.youtube.com/vi/CSvFpBOe8eY/0.jpg',null,'This list is full of all types of genres, from rap to reggae, pop to rock. One genre that has not been mentioned yet though is metal/heavy metal. That is until now. Up next on our list is “Chop Suey” by System of a Down. System of a Down has been active from the years of 1994-2006 and 2010 to the present. Some of System of a Down’s other prominent songs include “B.Y.O.B.,” “Ariels,” “Toxicity,” and “Spiders.” “Chop Suey” now has over 1 billion views on YouTube and is headed by lead singer Serj Tankian. The other members of the band include Daron Malakian (guitarist), Shavo Odadjian (bassist), and John Dolmayan (drummer).',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (58,713,'American Pie','Jazz',null,'https://img.youtube.com/vi/iX_TFkut1PM/0.jpg',null,'The last 8-minute song in the queue of best songs of all time, “American Pie” is up next on the list. “American Pie” came out in 1971 by Don McLean. “American Pie,” tells the story of the tragic deaths of Buddy Holly, J.P. Richardson (The Big Bopper), and Ritchie Valens. As McLean mentions many times in the song, it was “the day the music died.” A somewhat somber song in its meaning, the song has an upbeat and catchy tune to sing along to.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (59,1501,'Buffalo Soldier','Jazz',null,'https://img.youtube.com/vi/QiESgCu9Ehw/0.jpg',null,'Another hit by “King of Reggae” Bob Marley, is the song “Buffalo Soldier.” “Buffalo Soldier” is a term given to African Americans by Native Americans, who thought their hair and dreadlocks felt like that of a buffalo’s pelt. Although the late king of reggae is no longer with us, no matter what song he sang, he always kept the same chill vibe throughout.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (60,629,'Come Together','New era',null,'https://img.youtube.com/vi/45cYwDMibGo/0.jpg',null,'Back to the table is The Beatles. This time, with their song, “Come Together.” “Come Together” was released in 1969 as a single on the album Abbey Road. Similar to #11 “Blurred Lines,” there was a lawsuit regarding “Come Together” because it sounded too similar to Chuck Berry’s “You Can’t Catch Me.”',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (61,259,'Bohemian Rhapsody','Classical',null,'https://img.youtube.com/vi/fJ9rUzIMcZQ/0.jpg',null,'If you would like to know what existentialism sounds like, look no further. The late Freddie Mercury (1946-1991) wrote “Bohemian Rhapsody” for Queen’s album A Night at the Opera in 1975. Bohemian Rhapsody was able to sell more than a million copies, making it Queen’s most famous song. The song is split up into 6 sections, consisting of the intro, ballad, guitar solo, opera, hard rock, and outro.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (62,1920,'Smooth Criminal','Classical',null,'https://img.youtube.com/vi/h_D3VFfhvs4/0.jpg',null,'From the movie This Is It, the king of pop strikes again on this list with his absolute banger “Smooth Criminal.” Not only is this song famous for its catchy tune and words, but for its dancing, choreographed by Jeffery Daniel. The move that catches people off guard and that always amazes people is Michael Jackson’s leaning trick where he stands on the floor and leans more than 45 degrees. For scale, the normal human body cannot usually lean more than 30-35 degrees without a considerable amount of training.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (63,252,'Ring of Fire','Classical',null,'https://img.youtube.com/vi/1WaV2x8GXj0/0.jpg',null,'Changing genres again, this list has not hit on a country song. All the way back in 1967, Johnny Cash released his song “Ring of Fire” in his album Greatest Hits, Vol. 1. Even though “Ring of Fire” only peaked at #45 on the US Hot Country Songs, Johnny Cash is a staple of country music in America, and “Ring of Fire” is short, relatable, and all-around fun to jam out to.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (64,1740,'Latch','Jazz',null,'https://img.youtube.com/vi/k0jLE7tTwjY/0.jpg',null,'Jumping forward about 50 years, a more modern piece of music that is among the best of all time is “Latch.” Here, Disclosure and Sam Smith in their album Settle sing “Latch,” which is a love song focused on truly loving someone to the point of never wanting to let go of that person.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (65,1856,'Bad and Boujee','Classical',null,'https://img.youtube.com/vi/S-sJp1FfG7Q/0.jpg',null,'Moving on to another rap song that most people have probably heard before is none other than Migos’ “Bad and Boujee.” “Bad and Boujee” features Lil Uzi Vert, most notable nowadays for putting a 24 million dollar diamond on his forehead to wear as jewelry. If you are a fan of rap or Migos, this song is a must on any playlist.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (66,1509,'Lean on Me','Classical',null,'https://img.youtube.com/vi/fOZ-MySzAac/0.jpg',null,'Shifting to a different genre and slower pace of the song, “Lean on Me” is the perfect feel-good song to get the emotions going and want to help others out in your life. Bill Withers wrote and released Lean on Me in 1972, and won a Grammy for Best R&B Song. Recently deceased (1938-2020), Bill Withers lives on in his songs, especially this one.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (67,258,'Dream On','Jazz',null,'https://img.youtube.com/vi/89dGC8de0CA/0.jpg',null,'Aerosmith released “Dream On” in 1973 and it has become known for its iconic loud scream near the end. Dream On is sung by the vocalist Steven Tyler, who also plays the piano. Other members of the original band include Joe Perry (lead guitarist), Brad Whitford (guitarist), Tom Hamilton (bassist), and Joey Kramer (drummer). Other songs by Aeormsith include Livin’ On The Edge, Cryin’, Crazy, and What It Takes.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (68,961,'Paint It, Black','New era',null,'https://img.youtube.com/vi/EBUFtoC2oj4/0.jpg',null,'An oldie but a goodie, this 1966 hit became a sensation among most generations alive today and without a doubt belongs on this list. The Rolling stones wrote and released “Paint It Black” in 1966 in their album Aftermath. Over the years, “Paint It Black” became associated as a song relating to the Vietnam War. Since “Paint It Black” was played at the end credits of the 1987 movie Full Metal Jacket, which was about the Vietnam War, this made the song guilty by association one may say.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (69,1104,'Hotel California','Jazz',null,'https://img.youtube.com/vi/BciS5krYL80/0.jpg',null,'A classic song if ever there were any is “Hotel California.” In 1976, the Eagles released “Hotel California” from their album Hotel California. They ended up winning a Grammy award for Record of the Year. Supposedly, “Hotel California” is about a first-hand experience at a mental hospital. Some argue it is about substance addiction, and others argue it is about the world below. I will leave that meaning up to you though based on what you hear.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (70,467,'Somebody That I Used To Know','New era',null,'https://img.youtube.com/vi/8UVNT4wvIGY/0.jpg',null,'“Somebody That I Used To Know” is one of the best-known one-hit wonders of the Gen Z generation. Released in 2011, Gotye sang the iconic song that became a sensation across the U.S. and over twenty countries. In the U.S. alone, it hit the #1 spot for 10 separate billboards! Gotye is a Belgian-Australian musician born in 1980. His full name is Wouter De Backer.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (71,1632,'Somewhere Over the Rainbow','New era',null,'https://img.youtube.com/vi/V1bFr2SWP1I/0.jpg',null,'“Somewhere Over the Rainbow” is one of those feel-good songs you put on when you are just enjoying life or want to rally up your spirits. “Somewhere Over the Rainbow” was sung by the late Israel Kamakawiwo’ole (1959-1997). Unfortunately, Kamakawiwo’ole passed away due to respiratory failure at the age of 38, but he lives on through his ukulele-played song.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (72,752,'Fortunate Son','Jazz',null,'https://img.youtube.com/vi/ec0XKhAHR5I/0.jpg',null,'Another solid gold oldie and one of the most famous songs in existence is “Fortunate Son.” “Fortunate Son” is a 1969 rock song written by Creedence Clearwater Revival and is most notorious for being associated with the Vietnam War. The song is a protest song that tells the story of rich people starting wars but never having to experience the horrors of war, so much so that even their children are guarded against it. However, the rich will make the poor fight their wars. It has the same theme as “War Pigs,” but is sung a bit more upbeat.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (73,241,'Let Her Go','Classical',null,'https://img.youtube.com/vi/RBumgq5yVrA/0.jpg',null,'Transitioning into a more somber song is #43 “Let Her Go.” In 2012, Passenger wrote “Let Her Go” in his Album All the Little Lights. “Let Her Go’s” meaning is exactly what it sounds like. If you are not in a good spot with your significant other and constantly fight then you will let them go because you two are not good for each other. It is only after you let them go that you realize you loved them. It happens to the best of us.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (74,345,'Take Me Home, Country Roads','Classical',null,'https://img.youtube.com/vi/1vrEljMfXYo/0.jpg',null,'A signature song is still sung today, Artist John Denver wrote “Take Me Home, Country Roads” all the way back in 1970. This song has been bringing joy to millions over the past so many decades. The best part about this song is that it is based on the real geography of roads that lead into West Virginia. The road is known as Clopper Road which leads into West Virginia from Maryland.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (75,646,'What A Wonderful World','Jazz',null,'https://img.youtube.com/vi/VqhCQZaH4Vs/0.jpg',null,'If you’ve ever watched the original Toy Story Movie, then you have most likely heard Louis Armstrong’s “What a Wonderful World.” Louis Armstrong always had a positive outlook on life, and this song is exactly about that. There is nothing but positive vibes that come from this song and we all need happiness in our lives, so if you’re feeling a bit down, I encourage you to listen to this.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (76,856,'Africa','Jazz',null,'https://img.youtube.com/vi/FTQbiNvZqaY/0.jpg',null,'Most notably a meme song as of 2018, Toto’s “Africa” was already a popular song before its revival back in the late 2010s. “Africa” originally came out in 1982 and hit the #1 spot on the US Billboard Hot 200. Toto ended up selling over 6 million albums in the US alone and millions more worldwide.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (77,1235,'Beat It','Classical',null,'https://img.youtube.com/vi/oRdxUFDoQe0/0.jpg',null,'Our final king of pop songs for this playlist, Michael Jackson kills it again with his 1982 hit “Beat It.” On the same album as “P.Y.T.,” “Billie Jean,” and “Thriller,” “Beat It” is a song that tells you to basically be the bigger person and avoid fights as much as you can. A key strategy from Sun Tzu’s Art of War, Jackson sings us the same principle of the best fight is no fight.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (78,222,'Thunder','New era',null,'https://img.youtube.com/vi/fKopy74weus/0.jpg',null,'Coming in with a more modern song as we draw near the end of our list is #48 “Thunder.” One of the biggest bands of today, Imagine Dragons released “Thunder” in 2017 and it did not take long for the song to hit not 1, but 3 US billboards. This song is all about coming over all of the challenges in your life and being able to achieve the lifelong goals you have set for yourself. In order to reap the rewards of life, one must face great trial and tribulation, hence the lightning and thunder that is constantly referred to.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (79,1513,'Can’t Help Falling In Love','Classical',null,'https://img.youtube.com/vi/vGJTaP6anOU/0.jpg',null,'“Can’t Help Falling in Love” is a song that has been played countless times at weddings, I can assure you that. In his 1961 song, Elvis Presley sang this little tune that conveys all of the love someone might have for someone as if they were in a perpetual honeymoon phase. This song has become so popular, it has had cover after cover done on it. One of the most famous covers is by Pentatonix.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (80,257,'Piano Man','Jazz',null,'https://img.youtube.com/vi/gxEPV4kolz0/0.jpg',null,'Another infamous wedding song that we can’t get out of my head anymore: up next is Billy Joel’s, “Piano Man.” Billy Joel released “Piano Man” all the way back in 1973 and it is still going strong as ever. At its peak, “Piano Man” hit the #1 spot on the US Billboard Hot 100. In the current years, there is a joke going around about “Piano Man,” which states something along the lines of “for a song that’s called Piano Man the guy with the harmonica seems to never shut up.” Still though, nothing can truly deteriorate the epic nature of this classic hit.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (81,1374,'Careless Whisper','Classical',null,'https://img.youtube.com/vi/izGwDsrQ1eQ/0.jpg',null,'Last, but certainly not least by a long shot, we have on our list of best songs of all time George Michael’s “Careless Whisper.” “Careless Whisper” was able to snatch the #1 spot on the US Billboards and stayed on for 22 weeks in 1985. Sadly, like many of the great artists in this lineup, George Micheals died on Christmas day in 2016 in Goring, United Kingdom. He passed away due to heart and liver disease at the age of 53.',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (82,725,'John Wick','Action','2014','https://media.port.hu/images/000/666/448.jpg','English','Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep ...',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (83,999,'The Lord of the Rings','Fantasy','2008','https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg','English','The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some ...',null,1);
Insert into WOLF.PRODUCT (ID,PRICE,NAME,GENRE,RELEASE,IMAGEURL,LANGUAGE,DESCRIPTION,LONGNAME,QUANTITY) values (84,495,'Inception','Action','2014','https://images-na.ssl-images-amazon.com/images/S/pv-target-images/70d11a78e989809e22a5f7a275e6bb2f5011836407edf0d1cad9ab1fcd1c47e2._RI_V_TTW_.jpg','English','A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., ...',null,1);
REM INSERTING into WOLF.PURCHASE
SET DEFINE OFF;
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (1,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (2,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (3,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (4,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (5,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (6,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (7,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (8,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (9,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (10,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (11,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (12,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (13,null,null,null,null,null);
Insert into WOLF.PURCHASE (ID,DELIVERY_OPTION,DDATE,STATUS,CLIENT_PURCHASE_ID,PURCHASE_INFO_ID) values (14,null,null,null,null,null);
REM INSERTING into WOLF.PURCHASE_INFO
SET DEFINE OFF;
Insert into WOLF.PURCHASE_INFO (PURCHASE_ID,PRODUCT_ID,QUANTITY,ID) values (1,1,1,1);
REM INSERTING into WOLF.SONG
SET DEFINE OFF;
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (31,'2:54','Nirvana');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (32,'1:21','Michael Jackson');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (33,'1:11','Bee Gees');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (34,'1:2','Gloria Gaynor');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (35,'2:17','Led Zeppelin');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (36,'2:46','Guns N’ Roses');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (37,'1:42','Will.I.Am & Brittney Spears');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (38,'2:47','Sublime');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (39,'2:59','Kendrick Lamar');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (40,'1:18','Macklemore & Ryan Lewis');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (41,'1:50','Robin Thicke & Pharrell Williams');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (42,'2:21','Led Zeppelin');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (43,'2:55','Black Sabbath');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (44,'1:36','Earth, Wind, & Fire');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (45,'2:0','Nirvana');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (46,'1:43','Guns N’Roses');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (47,'1:57','Justin Timberlake');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (48,'1:26','Earth, Wind, & Fire');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (49,'2:25','Luis Fonsi & Daddy Yankee');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (50,'2:20','Led Zeppelin');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (51,'1:15','Black Sabbath');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (52,'2:21','Peaches and Herb');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (53,'1:9','Elvis Presley');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (54,'1:33','The Beatles');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (55,'1:1','Frank Sinatra');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (56,'2:20','Bob Marley');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (57,'2:45','System of a Down');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (58,'1:7','Don McLean');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (59,'1:10','Bob Marley');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (60,'2:55','The Beatles');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (61,'2:19','Queen');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (62,'2:34','Michael Jackson');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (63,'2:34','Johnny Cash');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (64,'1:16','Disclosure & Sam Smith');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (65,'2:18','Migos & Lil Uzi Vert');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (66,'1:22','Bill Withers');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (67,'1:21','Aerosmith');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (68,'2:23','The Rolling Stones');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (69,'1:17','The Eagles');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (70,'1:4','Gotye');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (71,'2:45','Israel Kamakawiwo’ole');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (72,'2:32','Creedence Clearwater Revival');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (73,'1:51','Passenger');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (74,'1:34','John Denver');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (75,'2:26','Louis Armstrong');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (76,'1:45','Toto');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (77,'1:11','Michael Jackson');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (78,'1:28','Imagine Dragons');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (79,'2:45','Elvis Presley');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (80,'2:8','Billy Joel');
Insert into WOLF.SONG (ID,LENGTH,PRODUCER) values (81,'2:47','George Michael');
REM INSERTING into WOLF.STORAGE
SET DEFINE OFF;
Insert into WOLF.STORAGE (ID,NAME,CAPACITY,CITY) values (1,'Szeged Ujszeged',4000,'Szeged');
Insert into WOLF.STORAGE (ID,NAME,CAPACITY,CITY) values (2,'Szeged Centrum',300,'Szeged');
Insert into WOLF.STORAGE (ID,NAME,CAPACITY,CITY) values (3,'Budapest 1.',20000,'Budapest');
Insert into WOLF.STORAGE (ID,NAME,CAPACITY,CITY) values (4,'Budapest 2.',13000,'Budapest');
REM INSERTING into WOLF.STORED_PRODUCTS
SET DEFINE OFF;
REM INSERTING into WOLF.WISHLIST
SET DEFINE OFF;
Insert into WOLF.WISHLIST (USERNAME,PRODUCT_ID) values ('wolf',2);
Insert into WOLF.WISHLIST (USERNAME,PRODUCT_ID) values ('wolf',31);
--------------------------------------------------------
--  DDL for Index PRODUCT_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "WOLF"."PRODUCT_PK" ON "WOLF"."PRODUCT" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index STORAGE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "WOLF"."STORAGE_PK" ON "WOLF"."STORAGE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index ADDRESS_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "WOLF"."ADDRESS_PK" ON "WOLF"."ADDRESS" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index PURCHASE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "WOLF"."PURCHASE_PK" ON "WOLF"."PURCHASE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index PURCHASE_INFO_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "WOLF"."PURCHASE_INFO_PK" ON "WOLF"."PURCHASE_INFO" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index CLIENT_PURCHACES_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "WOLF"."CLIENT_PURCHACES_PK" ON "WOLF"."CLIENT_PURCHACES" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index CLIENT_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "WOLF"."CLIENT_PK" ON "WOLF"."CLIENT" ("USERNAME") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Trigger ADDRESS_ID_TRG
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "WOLF"."ADDRESS_ID_TRG" 
BEFORE INSERT ON ADDRESS 
FOR EACH ROW 
BEGIN
  <<COLUMN_SEQUENCES>>
  BEGIN
    IF INSERTING AND :NEW.ID IS NULL THEN
      SELECT ADDRESS_SEQ.NEXTVAL INTO :NEW.ID FROM SYS.DUAL;
    END IF;
  END COLUMN_SEQUENCES;
END;
/
ALTER TRIGGER "WOLF"."ADDRESS_ID_TRG" ENABLE;
--------------------------------------------------------
--  DDL for Trigger STORAGE__ID_TRG
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "WOLF"."STORAGE__ID_TRG" 
BEFORE INSERT ON STORAGE 
FOR EACH ROW 
BEGIN
  <<COLUMN_SEQUENCES>>
  BEGIN
    IF INSERTING AND :NEW.ID IS NULL THEN
      SELECT STORAGE_SEQ.NEXTVAL INTO :NEW.ID FROM SYS.DUAL;
    END IF;
  END COLUMN_SEQUENCES;
END;
/
ALTER TRIGGER "WOLF"."STORAGE__ID_TRG" ENABLE;
--------------------------------------------------------
--  Constraints for Table CLIENT_PURCHACES
--------------------------------------------------------

  ALTER TABLE "WOLF"."CLIENT_PURCHACES" ADD CONSTRAINT "CLIENT_PURCHACES_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
  ALTER TABLE "WOLF"."CLIENT_PURCHACES" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."CLIENT_PURCHACES" MODIFY ("PURCHASE_ID" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."CLIENT_PURCHACES" MODIFY ("CLIENT_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table STORAGE
--------------------------------------------------------

  ALTER TABLE "WOLF"."STORAGE" ADD CONSTRAINT "STORAGE_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
  ALTER TABLE "WOLF"."STORAGE" MODIFY ("CITY" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."STORAGE" MODIFY ("CAPACITY" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."STORAGE" MODIFY ("NAME" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."STORAGE" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table BOOK
--------------------------------------------------------

  ALTER TABLE "WOLF"."BOOK" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table GENRE
--------------------------------------------------------

  ALTER TABLE "WOLF"."GENRE" MODIFY ("GENRE" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."GENRE" MODIFY ("PRODUCT" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table SONG
--------------------------------------------------------

  ALTER TABLE "WOLF"."SONG" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table PURCHASE
--------------------------------------------------------

  ALTER TABLE "WOLF"."PURCHASE" ADD CONSTRAINT "PURCHASE_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
  ALTER TABLE "WOLF"."PURCHASE" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table PURCHASE_INFO
--------------------------------------------------------

  ALTER TABLE "WOLF"."PURCHASE_INFO" ADD CONSTRAINT "PURCHASE_INFO_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
  ALTER TABLE "WOLF"."PURCHASE_INFO" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."PURCHASE_INFO" MODIFY ("PRODUCT_ID" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."PURCHASE_INFO" MODIFY ("PURCHASE_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table WISHLIST
--------------------------------------------------------

  ALTER TABLE "WOLF"."WISHLIST" MODIFY ("PRODUCT_ID" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."WISHLIST" MODIFY ("USERNAME" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table CLIENT
--------------------------------------------------------

  ALTER TABLE "WOLF"."CLIENT" ADD CONSTRAINT "CLIENT_PK" PRIMARY KEY ("USERNAME")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
  ALTER TABLE "WOLF"."CLIENT" MODIFY ("PPASSWORD" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."CLIENT" MODIFY ("EMAIL" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."CLIENT" MODIFY ("USERNAME" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table ADDRESS
--------------------------------------------------------

  ALTER TABLE "WOLF"."ADDRESS" ADD CONSTRAINT "ADDRESS_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
  ALTER TABLE "WOLF"."ADDRESS" MODIFY ("HOUSE_NUMBER" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."ADDRESS" MODIFY ("STREET" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."ADDRESS" MODIFY ("ZIPCODE" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."ADDRESS" MODIFY ("CITY" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."ADDRESS" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table CUSTOMER
--------------------------------------------------------

  ALTER TABLE "WOLF"."CUSTOMER" MODIFY ("USERNAME" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table ADMIN
--------------------------------------------------------

  ALTER TABLE "WOLF"."ADMIN" MODIFY ("USERNAME" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table PRODUCT
--------------------------------------------------------

  ALTER TABLE "WOLF"."PRODUCT" MODIFY ("QUANTITY" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."PRODUCT" ADD CONSTRAINT "PRODUCT_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
  ALTER TABLE "WOLF"."PRODUCT" MODIFY ("IMAGEURL" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."PRODUCT" MODIFY ("NAME" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."PRODUCT" MODIFY ("PRICE" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."PRODUCT" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table STORED_PRODUCTS
--------------------------------------------------------

  ALTER TABLE "WOLF"."STORED_PRODUCTS" MODIFY ("PRODUCT_ID" NOT NULL ENABLE);
  ALTER TABLE "WOLF"."STORED_PRODUCTS" MODIFY ("STORAGE_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Ref Constraints for Table ADMIN
--------------------------------------------------------

  ALTER TABLE "WOLF"."ADMIN" ADD CONSTRAINT "ADMIN_FK1" FOREIGN KEY ("USERNAME")
	  REFERENCES "WOLF"."CLIENT" ("USERNAME") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table BOOK
--------------------------------------------------------

  ALTER TABLE "WOLF"."BOOK" ADD CONSTRAINT "BOOK_ID_FK" FOREIGN KEY ("ID")
	  REFERENCES "WOLF"."PRODUCT" ("ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table CLIENT
--------------------------------------------------------

  ALTER TABLE "WOLF"."CLIENT" ADD CONSTRAINT "C_ADDRESS_ID_FK" FOREIGN KEY ("ADDRESS_ID")
	  REFERENCES "WOLF"."ADDRESS" ("ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table CLIENT_PURCHACES
--------------------------------------------------------

  ALTER TABLE "WOLF"."CLIENT_PURCHACES" ADD CONSTRAINT "CLIENT_PURCHACES_FK1" FOREIGN KEY ("CLIENT_ID")
	  REFERENCES "WOLF"."CLIENT" ("USERNAME") ENABLE;
  ALTER TABLE "WOLF"."CLIENT_PURCHACES" ADD CONSTRAINT "CLIENT_PURCHACES_FK2" FOREIGN KEY ("PURCHASE_ID")
	  REFERENCES "WOLF"."PURCHASE" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table CREDIT_CARD
--------------------------------------------------------

  ALTER TABLE "WOLF"."CREDIT_CARD" ADD CONSTRAINT "CREDIT_CARD_FK1" FOREIGN KEY ("USERNAME")
	  REFERENCES "WOLF"."CLIENT" ("USERNAME") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table CUSTOMER
--------------------------------------------------------

  ALTER TABLE "WOLF"."CUSTOMER" ADD CONSTRAINT "CUSTOMER_FK1" FOREIGN KEY ("USERNAME")
	  REFERENCES "WOLF"."CLIENT" ("USERNAME") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table GENRE
--------------------------------------------------------

  ALTER TABLE "WOLF"."GENRE" ADD CONSTRAINT "GENRE_FK1" FOREIGN KEY ("PRODUCT")
	  REFERENCES "WOLF"."PRODUCT" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table PURCHASE_INFO
--------------------------------------------------------

  ALTER TABLE "WOLF"."PURCHASE_INFO" ADD CONSTRAINT "PI_PRODUCT_FK" FOREIGN KEY ("PURCHASE_ID")
	  REFERENCES "WOLF"."PRODUCT" ("ID") ENABLE;
  ALTER TABLE "WOLF"."PURCHASE_INFO" ADD CONSTRAINT "PI_PURCHASE_FK" FOREIGN KEY ("PURCHASE_ID")
	  REFERENCES "WOLF"."PURCHASE" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SONG
--------------------------------------------------------

  ALTER TABLE "WOLF"."SONG" ADD CONSTRAINT "SONG_FK1" FOREIGN KEY ("ID")
	  REFERENCES "WOLF"."PRODUCT" ("ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table STORED_PRODUCTS
--------------------------------------------------------

  ALTER TABLE "WOLF"."STORED_PRODUCTS" ADD CONSTRAINT "SP_PRODUCT_ID_FK" FOREIGN KEY ("STORAGE_ID")
	  REFERENCES "WOLF"."PRODUCT" ("ID") ON DELETE CASCADE ENABLE;
  ALTER TABLE "WOLF"."STORED_PRODUCTS" ADD CONSTRAINT "SP_STORAGE_ID_FK" FOREIGN KEY ("STORAGE_ID")
	  REFERENCES "WOLF"."STORAGE" ("ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table WISHLIST
--------------------------------------------------------

  ALTER TABLE "WOLF"."WISHLIST" ADD CONSTRAINT "WISHLIST_PRODUCT_ID_FK" FOREIGN KEY ("PRODUCT_ID")
	  REFERENCES "WOLF"."PRODUCT" ("ID") ON DELETE CASCADE ENABLE;
  ALTER TABLE "WOLF"."WISHLIST" ADD CONSTRAINT "WISHLIST_USERNAME_FK" FOREIGN KEY ("USERNAME")
	  REFERENCES "WOLF"."CLIENT" ("USERNAME") ENABLE;
