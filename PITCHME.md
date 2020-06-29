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

# CAP

consistency, availability, partition tolerance

spójność, dostępność, odporność na partycjonowanie

systemy rozproszone

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

Oracle, MySQL

---

# CP

spójność + odporność na partycjonowanie

Mongo, Redis, HBase

---

# AP

dostępność + odporność na partycjonowanie

Cassandra, Dynamo, CouchDB

---

# Zbytnie uproszczenie?

[Please stop calling databases CP or AP](https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html)
by Martin Kleppmann

---

[Difference between CouchDB and Couchbase
](https://stackoverflow.com/a/15184612/613198)
(my answer on Stack Overflow)

---

# ACID

atomicity, consistency, isolation, durability

niepodzielność, spójność, izolacja, trwałość

---

# Niepodzielność

Atomicity

---

# Spójność

Consistency

---

# Izolacja

Isolation

---

# Trwałość

Durability

---

```js
function f(x) {
  return x(x);
}
```
---

@code[js zoom-13 code-max code-shadow](example-01.js)

---

# Slajdy

<big><big> <a class="black" href="https://pocztarski.com/kir">pocztarski.com/kir</a> </big></big>

---

# Pytania?

Slajdy: <a class="black" href="https://pocztarski.com/kir">pocztarski.com/kir</a>

## <a class="black" href="https://pocztarski.com/">Rafał Pocztarski</a>

## <a class="black" href="https://pocztarski.com/">pocztarski.com</a>
