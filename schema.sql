create table notes (
    -> id integer primary key AUTO_INCREMENT,
    -> title varchar(255) NOT NULL,
    -> contents TEXT NOT NULL,
    -> created TIMESTAMP NOT NULL DEFAULT NOW()
    -> );




     insert into notes (title, contents) 
     values ('My first Not ', 'A note about something'),
            ('My second Note', 'A note about something else');