# RAFAŁ POCZTARSKI <
br> <img src="rsp-gravatar-s800-200-bq95-circle.png"> <
br> Krotki i relacje

Czyli dlaczego w relacyjnych bazach<br>danych
nie ma tabel a SQL kłamie

---

# <a class="black" href="https://pocztarski.com/">Rafał Pocztarski</a>

Możecie mnie znać ze Stack Overflow

[<img alt="rsp on Stack Overflow" src="https://stackexchange.com/users/flair/303952.png" height="116">](https://stackoverflow.com/users/613198/rsp)

# <a class="black" href="https://pocztarski.com/">pocztarski.com</a>

<small>(oraz Medium, Quora, Wikipedia, etc.)</small>

---

# Slajdy

<big><big> <a class="black" href="https://pocztarski.com/kir">pocztarski.com/kir</a> </big></big>

---

# Rys historyczny

"Ludziom powinno się zabronić dotykania baz danych,
dopóki nie poznają 
algebry relacyjnej,
teorii zbiorów
i rachunku predykatów pierwszego rzędu."

(ja, w późnych latach '90)

---

# IRONIA

*Ironically, relational databases<br>deal poorly with relationships.*

(zbyt wielu ludzi przez zbyt wiele lat)

---

# SARKAZM

*Yes, for anyone who doesn’t understand the meaning of both “relational” **and** “irony.”*

(ja, wiele lat później)

---

# NO TABLES

[What if I told you there are no tables<br>in relational databases?](https://medium.com/@pocztarski/what-if-i-told-you-there-are-no-tables-in-relational-databases-13d31a2f9677)

(my article from 2015)

---

# ORM

[ORM Is an Offensive Anti-Pattern](https://www.yegor256.com/2014/12/01/orm-offensive-anti-pattern.html)
<br>by Yegor Bugayenko

[What ORMs have taught me: just learn SQL](https://wozniak.ca/blog/2014/08/03/What-ORMs-have-taught-me-just-learn-SQL/index.html)
<br>by Geoff Wozniak

---

# Model relacyjny

Edgar F. Codd (1969)

[A Relational Model of Data for
Large Shared Data Banks](https://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf) -
Codd, 1970

---

# SQL

Donald D. Chamberlin i Raymond F. Boyce (wczesne lata '70)

Najpierw jako SEQUEL ale naruszało znak towarowy i zmieniono na SQL

SQL-86 (ANSI in 1986, ISO in 1987)

---

# DEBATA

"SQL deviates in several ways from its theoretical foundation, [...]
Critics argue that SQL should be replaced [...]
it's quite possible that SQL can be "fixed" [...]
Debate on this remains open." (Wikipedia)

Od wczesnych lat '70 minęło pół wieku

---

# SQL IS JUST ENGLISH

Więc nieprogramiści mogą sami pisać SQL bez
żadnego zrozumienia modelu relacyjnego
komunikując się bezpośrednio z bazą danych

---

# Tabele

Jaki jest SQL zwracający pierwszy wiersz z tabeli?

---

# Nie ma tabel

W bazie danych nie ma tabel

Ale dane dostajemy jako tabele

I w SQL jest &nbsp;&nbsp; `CREATE TABLE`

---

# CREATE TABLE

`CREATE TABLE` &nbsp;&nbsp; tworzy relacje

---

# Relacja

Relacja to zbiór krotek

---

# Krotka

Krotka to uporządkowany ciąg<br>wartości różnych typów

---

# Zbiór krotek

Niebylejaki zbiór

Podzbiór iloczynu kartezjańskiego dziedzin elementów krotek

---

# Konsekwencje

Kolejność

Unikalność

Łączenie

Podzbiory

---

# Kolejność

Krotki w relacji nie mają kolejności
<br>(wiersze w tabeli by miały)</br>

Relacja to zbiór krotek

Elementy w zbiorze nie mają kolejności

---

# Unikalność

Krotki w relacji nie mogą się powtarzać
<br>(wiersze w tabeli by mogły)

Relacja to zbiór krotek

Elementy w zbiorze nie powtarzają się

---

# Łączenie

Aby połączyć dane z dwóch zbiorów
<br>używamy iloczynu kartezjańskiego

`JOIN` &nbsp;&nbsp; w SQL

---

# Podzbiory

Iloczyn kartezjański to też zbiór krotek<br>tylko większych krotek

Caly ten zbiór jest zbyt duży<br>więc potrzebujemy jego podzbiór

---

# Predykaty

`WHERE` &nbsp;&nbsp; w SQL

---

# Terminologia

~~TABELE / tables~~ &nbsp;&nbsp; RELACJE / relations

~~WIERSZE / rows~~ &nbsp;&nbsp; KROTKI / tuples

~~KOLUMNY / columns~~ &nbsp;&nbsp; POZYCJE KROTEK?

ZBIORY, PODZBIORY, PREDYKATY

---

# Szczegóły

# NO TABLES

Więcej szczegółów w moim artykule:

[What if I told you there are no tables<br>in relational databases?](https://medium.com/@pocztarski/what-if-i-told-you-there-are-no-tables-in-relational-databases-13d31a2f9677)

---

# Logika

Dwuwartościowa
<br>(True, False)

Trójwartościowa
<br>(True, False, Missing)

Czworowartościowa
<br>(True, False, Missing/Applicable, Missing/Inapplicable)

(Edgar F. Codd)

---

# Normalizacja

UNF (1970),
1NF (1970),
2NF (1971),
3NF (1971),
EKNF (1982),
BCNF (1974),
4NF (1977),
ETNF (2012),
5NF (1979),
DKNF (1981),
6NF (2003)

1NF - pierwsza postać normalna itd.

---

# Rodzaje<br>baz danych

---

# In-memory database

Aerospike,
Apache Ignite,
ArangoDB,
<br>
Memcached,
Redis...

---

# Document-oriented database

Couchbase Server,
CouchDB,
<br>
MongoDB,
RethinkDB...

---

# Embedded database

Berkeley DB,
SQLite...

Wbudowane bazy danych?

---

# Column-oriented database

Apache Kudu,
Amazon Redshift,
Snowflake...

---

# Graph database

Neo4j,
RedisGraph,
JanusGraph,
Amazon Neptune,
ArangoDB,
TerminusDB...

---

# Map-Reduce database

Apache Hadoop,
Apache CouchDB,
Riak...

---

# Relational database

Apache Derby,
Amazon Aurora,
dBase,
<br>
Firebird,
IBM DB2,
MariaDB,
Microsoft SQL Server,
<br>
MySQL,
Oracle,
PostgreSQL,
SQLite...

---

# Systemy rozproszone

sieci, protokoły, problemy

---

# CAP

consistency, availability, partition tolerance

spójność, dostępność, odporność na partycjonowanie

---

# Spójność

Consistency

Każdy odczyt zwraca najbardziej niedawno zapisane dane lub błąd

---

# Dostępność

Availability

Każdy odczyt zwraca dane (nie błąd ani timeout)

Bez gwarancji, że dane odpowiadają najbardziej niedawnemu zapisowi

---

# Odporność na partycjonowanie

Partition tolerance

System działa pomimo dowolnej liczby zgubionych lub opóźnionych pakietów między węzłami

---

# CA

spójność + dostępność

Oracle, PostgreSQL, MySQL

(Couchbase?)

---

# CP

spójność + odporność na partycjonowanie

Mongo, Redis, HBase

(Couchbase?)

---

# AP

dostępność + odporność na partycjonowanie

Cassandra, Dynamo, CouchDB

---

# Zbytnie uproszczenie

[Please stop calling databases CP or AP](https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html)
<br>by Martin Kleppmann

---

# Sprzeczne dane

[Difference between CouchDB and Couchbase
](https://stackoverflow.com/a/15184612/613198) (2013)

(my highest-ranked answer on Stack Overflow)

---

# ACID

atomicity, consistency, isolation, durability

niepodzielność, spójność, izolacja, trwałość

---

# Niepodzielność

Atomicity

Transakcja albo wykona się w w całości albo wcale

---

# Spójność

Consistency

Transakcja nie wykona się jeśli miałaby naruszyć więzy spójności

---

# Izolacja

Isolation

Transakcje wykonywane współbieżnie mają taki sam rezultat jak gdyby były wykonywane sekwencyjnie

---

# Trwałość

Durability

Jeśli transakcja została wykonana to jej efekt będzie trwały nawet w przypadku awarii systemu, np. braku zasilania

---

# Typy danych

w SQL-owych bazach danych - wszędzie inne

Mój projekt:
<a class="black" href="https://github.com/rsp/pg-scott">github.com/rsp/pg-scott</a>
(2015)

Klasyczna [Scott database](http://www.orafaq.com/wiki/SCOTT)
(EMP, DEPT, BONUS, SALGRADE)
używana w przykładach od zarania dziejów
w wersji na Postgres

---

# Systemy typów

static / dynamic <br>
manifest / inferred <br>
nominal / structural <br>
strong / weak <br>
duck typing

---

# Serializacja

JSON,
BSON,
XML,
CSV,
Protocol Buffers,
FlatBuffers,
Cap'n Proto

---

# Polecam

[Segfault audio](https://anchor.fm/segfault-audio)

---

# RAFAŁ POCZTARSKI

<!-- <small> -->

  <a class="black" href="https://twitter.com/pocztarski" target="_blank"><i class="fab fa-twitter"></i> Twitter: @pocztarski</a>
<br>
  <a class="black" href="https://medium.com/@pocztarski" target="_blank"><i class="fab fa-medium-m"></i> Medium: @pocztarski</a>
<br>
  <a class="black" href="https://www.facebook.com/pocztarski" target="_blank"><i class="fab fa-facebook-f"></i> Facebook: @pocztarski</a>
<br>
  <a class="black" href="https://angel.co/pocztarski" target="_blank"><i class="fab fa-angellist"></i> AngelList: @pocztarski</a>
<br>
  <a class="black" href="https://www.linkedin.com/in/pocztarski" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn: @pocztarski</a>
<br>
  <a class="black" href="https://stackoverflow.com/users/613198/rsp" target="_blank"><i class="fab fa-stack-overflow"></i> Stack Overflow: rsp</a>
<br>
  <a class="black" href="https://crossweb.pl/en/profile/rafal-pocztarski/29326/" target="_blank"><i class="fas fa-hand-point-right"></i> Crossweb: 29326</a>
<br>
  <a class="black" href="https://github.com/rsp" target="_blank"><i class="fab fa-github"></i> GitHub: rsp</a>

<!-- </small> -->





Slajdy: <a class="black" href="https://pocztarski.com/kir">pocztarski.com/kir</a>

## <a class="black" href="https://pocztarski.com/">Rafał Pocztarski</a>

## <a class="black" href="https://pocztarski.com/">pocztarski.com</a>
