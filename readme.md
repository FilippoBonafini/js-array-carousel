# Consegna:
### Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.



----------------------

## MILESTONE 1
#### Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

- Creaiamo la truttura base HTML e CSS del progetto
- Inseriamo un immagine e la rendiamo adattiva

----------------------

## MILESTONE 2
#### Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

- Eliminamo gli elementi HTML all'interno del container 
- Passiamo a js
- Creiamo un array che contenga i nomi e le estensioni delle immagini
- Grazie al ``` for ``` creiamo una struttura html contente le immagini
- creiamo una classe css ``` .show ``` che faccia mostrare le immagini che di default sono 'nascoste'

-----------------------

## MILESTONE 3
#### Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.



--------------------------

## BONUS 1:
#### Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.



-------------------------

## BONUS 2:
#### Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.