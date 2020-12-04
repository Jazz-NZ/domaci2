Sajt na kome se prikazuje ponuda polovnih automobila

Link ka github projektu https://github.com/Jazz-NZ/domaci2

Napisite karakteristicne delove za vase delove

U ponuda.html nalazi se iframe tag koji prikazuje ponudu polovnih automobila odredjenog auto placa. Iframe prikazuje ponudu automobila sa sajta polovniautomobili tj. odredjenu stranu njihovog html-a.
Sa desne strane se nalazi kursna lista koja se takodje prikazuje iframe tagom.
Na desnoj strani se nalazi i kovertor koji se sastoji iz dva text boxa u kojima se unosi iznos u evrima i trenutni kurs. Kliknom na dugme iznos se kovertuje.
U ponuda.js se nalazi funkcija konvertor koja ucitava stringove iz text box-ova proverava da li su prazni i da li su stringovi brojevi. Zatim se stringovi konvertuju u brojeve i proverava se da li su veci od 0. Ako su veci od 0 prikazuje se rezultat umesto teksta "Rezultat"
U ponuda.js se nalazi i jquery koji klikom na dugme sakrij sakriva ceo div sa id-ijem koverzija u kome se nalazi kursna lista i kovertor