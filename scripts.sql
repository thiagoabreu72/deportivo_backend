create table jogador(
    idJogador serial primary key,
    nome text not null,
	apelido text,
    foto bytea,
    numero int,
    posicao text
);

create table time(
    idTime serial primary key,
    nome text not null,
    emblema bytea,
    statusTime int not null
);

create table elenco(
    idElenco serial primary key,    
    idTime int not null,
    idJogador int not null ,
    FOREIGN KEY (idTime) REFERENCES time (idTime),
    FOREIGN KEY (idJogador) REFERENCES jogador (idJogador)
);

insert into jogador( nome, foto, numero ) values ('Thiago','',13);
insert into jogador( nome, foto, numero ) values ('Allan','',33);
insert into jogador( nome, foto, numero ) values ('Eduardo Bertollo','',14);

insert into time values (1,'Deportivo FC','',0); // 0 - ativo, 1 - inativo

insert into elenco values (1,1,1);
insert into elenco values (2,1,2);
insert into elenco values (3,1,3);

select * from time_jogador;
select * from time;
select * from jogador;
