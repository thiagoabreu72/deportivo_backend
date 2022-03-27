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

create table jogos(
    idJogo serial primary key,
    idTimeCasa int not null,    
    idTimeFora int not null,
	dataJogo date not null,
    golsCasa int not null ,
    golsFora int not null ,
    FOREIGN KEY (idTimeCasa) REFERENCES time (idTime),
    FOREIGN KEY (idTimeFora) REFERENCES time (idTime)
);

create table artilheiros(
    idArtilharia serial primary key,
    idJogo int not null,
    idTime int not null,  
    idJogador int not null, 
    qtdGols int not null,
    craque int,
    FOREIGN KEY (idJogo) REFERENCES jogos(idJogo),
    FOREIGN KEY (idTime) REFERENCES time(idTime),
    FOREIGN KEY (idJogador) REFERENCES jogador(idJogador)
); 



insert into jogador( nome, apelido, foto, numero, posicao ) values ('Thiago','','',13,'lateral, meio-campo');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Allan','','',33,'zagueiro');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Eduardo Bertollo','Bertollo','',14,'meio-campo');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Eduardo Ribeiro','Duh','',22,'lateral');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Eduardo','','',9,'atacante');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Zamara','','',2,'lateral, meio-campo');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('João','Joãozinho','',10,'meio-campo');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Nattan','','',6,'meio-campo, atacante');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Carlos Hannusch','','',7,'atacante');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Donnavan','','',11,'atacante');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Vinicius','Vini','',14,'goleiro');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Erik','','',17,'meio-campo');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Paulo Henrique','','',19,'zagueiro');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Bruno Pagliarini','Pagliarini','',12,'meio-campo, atacante');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Bruno Henrique','','',5,'meio-campo');
insert into jogador( nome, apelido, foto, numero, posicao ) values ('Tiago','','',20,'zagueiro');

insert into time values (1,'Deportivo FC','',0); // 0 - ativo, 1 - inativo

insert into elenco values (1,1,1);
insert into elenco values (2,1,2);
insert into elenco values (3,1,3);

select * from time_jogador;
select * from time;
select * from jogador;

update time set nome = 'Adversário' where idtime = 2