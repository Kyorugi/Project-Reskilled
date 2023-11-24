## Our offices

Stwórz branch na bazie gałęzi main:
`git checkout -b feature/our-offices`

## Subtaski
- Dodaj stronę, która wyświetli listę biur naszej firmy HR.
- Wyobraź sobie sytuację, że backend jest rozwijany znacznie wolniej niż front-end w związku z czym zadanie wymaga zamockowania komunikacji z backendem, zrób to w wybrany przez siebie sposób
- Wygląd UI jest dowolny, w zadaniu chodzi o przećwiczenie mockowania backendu
- Przyjmij, że między backendem a frontendem został ustalony kontrakt w postaci jsona:
```ts
offices: [{
  name: string, // nazwa biura
  street: string, // ulica
  unit: string, // nr. mieszkania
  building: string, // nr. budynku
  zipCode: string, // kod pocztowy
  city: string, // miasto
  capacity: number, // maksymalna ilość ludzi w biurze
  openHour: string, // godzina otwarcia w formacie hh:mm
  closeHour: string, // godzina zamknięcia w formacie hh:mm
}]
```
- W przyszłości zostanie dodany endpoint do powyższej funkcjonalności pod adresem `GET /offices`


## Szacunkowa estymacja: 4h

## Pre code review checklist

W folderze `/tasks/pre-code-review` znajdziesz listę z punktami, które należy sprawdzić przed stworzeniem każdego merge requestu. To pozwoli Ci wychwycić błędy lub dodatkowe miejsca do usprawnienia przed procesem code review.
