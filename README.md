Sajt na kome se prikazuje ponuda polovnih automobila

Link ka github projektu https://github.com/Jazz-NZ/domaci2


STRANICA POCETNA:
U index.html nalazi se header se menijem koji referencira ostale stranice sajta.Kratak opis karakteristika ovih stranica dat je u tekstu ispod.Prikazan je heading auto placa pod nazivom FonCar. U footeru nalazi se kratak pregled usluga koje se nude.U okviru klase "pocetna" prisutan je i logo veb stranice.
U fajlu index.css odradjeno je formatiranje elemenata kao i definisanje izgleda stranice index.html



STRANICA PONUDA:

U ponuda.html nalazi se iframe tag koji prikazuje ponudu polovnih automobila odredjenog auto placa. Iframe prikazuje ponudu automobila sa sajta polovniautomobili tj. odredjenu stranu njihovog html-a.
Sa desne strane se nalazi kursna lista koja se takodje prikazuje iframe tagom.
Na desnoj strani se nalazi i konvertor koji se sastoji iz dva text boxa u kojima se unosi iznos u evrima i trenutni kurs. Kliknom na dugme iznos se kovertuje.
U ponuda.js se nalazi funkcija konvertor koja ucitava stringove iz text box-ova proverava da li su prazni i da li su stringovi brojevi. Zatim se stringovi konvertuju u brojeve i proverava se da li su veci od 0. Ako su veci od 0 prikazuje se rezultat umesto teksta "Rezultat"
U ponuda.js se nalazi i jquery koji klikom na dugme sakrij sakriva ceo div sa id-ijem koverzija u kome se nalazi kursna lista i kovertor

STRANICA SLIKE:

U slike.html se nalazi deo sa menijem i logom FonCar-a koji je isti kao i za sve ostale stranice i nalazi se u sklopu header-a. 
U glavnom delu stranice se nalazi div tag u kome je smesten paragraf sa uputstvom kako da se prikazu slike uvecano, kao i 24 fotografije koje su uredjenje preko flex-a kako bi se pravilno rasporedjivale. Omogucena je putem jquery-a funkcionalnost da se klikom na sliku ona duplo poveca a novim klikom vrati na prethodne dimenzije. Kod za ovu funkciju se nalazi u slike.js fajlu. U slike.css je moguce videti kako je preko flex-a uredjena ova stranica. 

STRANICA KONTAKT:
U kontakt.html se takodje nalazi meni sa linkovima ka ostalim stranama. Pored toga u sklopu ove strane su dva div taga ispunjena razlicitim formama i slikama koji su zahvaljujuci flex funkcionalnosti postavljeni jedan do drugog, sto se moze videti u kontakt.css.
Na levom divu se nalazi forma za popunjavanje sadrzaja poruke koja ce biti poslana FonCar-u. U kontakt.js je napravljena funkcija koja proverava da li su obavezna polja ostala prazna prilikom slanja koja se obavlja potvrdom na dugme, i izbacuje alert sa upozorenjem da se polja koja su obavezna popune ako ima potrebe za tim. Koriscenjem plug ina iz jquery-a postavlja se upozorenje da se popune sva obavezna polja i pre popunjavanja. Ovo upozorenje se moze iksirati ili razvlaciti. 
U desnom divu se nalaze naslovi i slike glavnih partnera FonCar-a. Klikom na sliku otvara se novi tab sa stranicom te organizacije a klikom na naslov ostvara se stranica u postojecem tabu.

Domaci zadatak radili: 

Nikola Zivanovic 418/18
Boris Elez 458/18
Lazar Jovanovic 228/18