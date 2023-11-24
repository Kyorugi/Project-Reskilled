## Meetings

Stwórz branch na bazie gałęzi main:
`git checkout -b feature/meetings main`

## Subtaski
- Stwórz nowy route `/meetings` 
- Tytuł strony w przeglądarce: `HR Dashboard - Meetings`
- Dodaj przekierowanie na ten route za pomocą elementu nawigacji w sidebarze
- Potrzebne dane otrzymasz wysyłając request `GET /meetings?month=2&year=2023`
  - month to numer miesiąca (od 1 do 12)
  - year to rok (minimum 2022)
- Wyświetl na górze strony strzałki zmieniające miesiąc `< > January 2023`, domyślna wartość po wejściu na stronę to obecny miesiąc i rok, zmiana miesiąca powoduje wysłanie nowego requestu z nowym miesiącem/rokiem co skutkuje pokazaniem się innych spotkań. Z racji tego, że minimalny rok to 2022 upewnij się, że front-end tego również pilnuje (najmniejsza możliwa data to styczeń 2022).
- Wyświetl listę spotkań w danym miesiącu, każde spotkanie w formacie `<GODZINA_SPOTKANIA> <DATA> SPOTKANIE Z <IMIE_NAZWISKO_KANDYDATA>`
- Obok każdego ze spotkań wyświetl przycisk `(i)`, po kliknięciu otwiera się modal z większą ilością informacji na temat spotkania. Wyświetl tam informacje na temat spotkania, oferty pracy oraz kandydata. Wszelkie informacje będziesz mieć dostępne w zwrotce z `GET /meetings?...`
- Obok przycisku `(i)` wyświetl ikonkę kosza na śmieci, po kliknięciu wyświetl modal z pytaniem `Czy na pewno chcesz usunąć spotkanie?` z 2 przyciskami `Anuluj` oraz `Usuń`. Po kliknięciu w `Usuń` wyślij request `DELETE /meetings/:id` oraz zamknij modal. Usunięcie powinno być odzwierciedlone na front-endzie więc po zamknięciu modalu dana oferta pracy powinna zniknąć.
- Spotkania posiadają relację z kandydatami oraz ofertami pracy. Oznacza to, że usunięcie danego kandydata lub oferty pracy spowoduje automatyczne usunięcie spotkania. W związku z tym dodaj modal potwierdzający usunięcie kandydata/oferty pracy z informacją, że usunięcie spowoduje usunięcie wszystkich spotkań w których dany kandydat ma brać udział lub które dotyczą danej oferty pracy.

## Nice to have
- miesiąc i rok odzwierciedlone w adresie url przeglądarki
- przekreślenie zakończonych spotkań przekreślone czerwoną kreską, spotkanie jest zakończone kiedy data spotkania jest datą przeszłą
- dodaj checkbox "Pokaż zakończone", jeżeli checkbox nie jest zakończony to przefiltruj dane zwrócone z backendu porównując daty

## Szacunkowa estymacja: 10h

## Pre code review checklist

W folderze `/tasks/pre-code-review` znajdziesz listę z punktami, które należy sprawdzić przed stworzeniem każdego merge requestu. To pozwoli Ci wychwycić błędy lub dodatkowe miejsca do usprawnienia przed procesem code review.

## Przykłady
![Meetings](./meetings.png "Meetings")
