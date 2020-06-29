RAFAŁ POCZTARSKI

# Krotki i relacje

Czyli dlaczego w relacyjnych bazach danych
<br>nie ma tabel a SQL kłamie

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

A Relational Model of Data for Large Shared Data Banks
([PDF](https://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf)) -
Codd, 1970

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

---

# Rodzaje<br>baz danych

---

# In-memory database

Aerospike,
Apache Ignite,
ArangoDB,
Memcached,
Redis...

---

# Document-oriented database

Couchbase Server,
CouchDB,
MongoDB,
RethinkDB...

---

# Embedded database

Berkeley DB,
SQLite...

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
Derby,
Firebird,
IBM DB2,
MariaDB,
Microsoft SQL Server,
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

# Slajdy

<big><big> <a class="black" href="https://pocztarski.com/kir">pocztarski.com/kir</a> </big></big>

---

# Pytania?

Slajdy: <a class="black" href="https://pocztarski.com/kir">pocztarski.com/kir</a>

## <a class="black" href="https://pocztarski.com/">Rafał Pocztarski</a>

## <a class="black" href="https://pocztarski.com/">pocztarski.com</a>
