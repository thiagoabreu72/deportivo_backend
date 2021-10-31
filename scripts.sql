create table jogador(
    idJogador serial primary key,
    nome text not null,
    foto bytea,
    numero int 
);

create table time(
    idTime serial primary key,
    nome text not null,
    emblema bytea
);

create table time_jogador(
    idTimeJogador serial primary key,    
    idTime int not null,
    idJogador int not null ,
    FOREIGN KEY (idTime) REFERENCES time (idTime),
    FOREIGN KEY (idJogador) REFERENCES jogador (idJogador)
);

insert into jogador( nome, foto, numero ) values ('Thiago','',13);
insert into jogador( nome, foto, numero ) values ('Allan','',33);
insert into jogador( nome, foto, numero ) values ('Eduardo Bertollo','',14);

insert into time values (1,'Deportivo FC','');

insert into time_jogador values (1,1,1);
insert into time_jogador values (2,1,2);
insert into time_jogador values (3,1,3);

select * from time_jogador;
select * from time;
select * from jogador;
