## Blacklisted candidates

Stwórz branch na bazie gałęzi main:
`git checkout -b feature/blacklisted-candidates main`

## Subtaski

- Stwórz nowy route `/blacklist`
- Tytuł strony w przeglądarce: `HR Dashboard - Blacklist`
- Dodaj nowy element w sidebarze przekierowujący na ten route
- Potrzebne dane otrzymasz wysyłając request `GET /blacklist/candidates?take=20&skip=80&sortBy=name&order=asc`
- Zwróć uwagę na parametry query - są potrzebne do prawidłowej paginacji po stronie backendu
  - take - ilość elementów per strona paginacji, minimum 5 max 20
  - skip - ilość elementów do pominięcia, minimum 0
  - sortBy - kolumna po której chcesz przesortować - `name` lub `reason`
  - order - kolejność sortowania - `asc` lub `desc`
- Przykład query - pierwsza strona paginacji, 10 elementów per strona, sortowanie po reason w kolejności ascending:
`?take=10&skip=0&sortBy=reason&order=asc`
- Przykład query - trzecia strona paginacji, 10 elementów per strona, sortowanie po reason w kolejności ascending:
`?take=10&skip=20&sortBy=reason&order=asc`
- W odpowiedzi otrzymasz obiekt z 2 polami: `data` - lista elementów, `count` - łączna ilość wszystkich elementów w bazie
- Wyświetl tabelkę z możliwością paginacji oraz sortowania, tabelka powinna zawierać następujące kolumnamy:
  - `Name` - użyj pola `name` z response
  - `Reason` - użyj pola `reason` z response

## Nice to have
- tabelka umożliwia zmianę ilości elementów per strona
- po zmianie sortowania tabelka wraca na 1 stronę paginacji
- wyświetl informację na której stronie paginacji jesteś obecnie
- wykorzystaj pole `count` do wyświetlenia informacji takich jak: łączna ilość elementów, łączna ilość stron
- Obsłuż błąd z api

## Szacunkowa estymacja: 8h

## Pre code review checklist

W folderze `/tasks/pre-code-review` znajdziesz listę z punktami, które należy sprawdzić przed stworzeniem każdego merge requestu. To pozwoli Ci wychwycić błędy lub dodatkowe miejsca do usprawnienia przed procesem code review.
