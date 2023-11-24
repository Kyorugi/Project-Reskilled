## Add meeting

Stwórz branch na bazie gałęzi main:
`git checkout -b feature/add-meeting main`

## Subtaski
- Na stronie spotkań wyświetl przycisk `Dodaj spotkanie`, który otwiera modal z formularzem oraz 2 przyciskami `Anuluj` oraz `Dodaj`
- Wyświetl formularz a w nim pola:
  - data spotkania - użyj do tego datetime picker-a, czyli możliwość zmiany jest tylko poprzez kliknięcie ikonki kalendarza, która otwiera kalendarz z wyborem dnia, miesiąca, roku oraz godziny. Możliwość wyboru tylko przyszłej daty/godziny.
  - rodzaj spotkania (type) - select z 2 opcjami `offline` i `online`
  - miejsce spotkania (place) (tylko w przypadku offline) - zwykły input tekstowy
  - URL do spotkania (place) (tylko w przypadku online) - walidacja adresu url
  - kandydat (candiadteId) - select z imionami oraz nazwiskami kandydatów (skorzystaj z requestu do pobierania kandydatów), value to id kandydata
  - oferta pracy (jobId) - select z nazwami ofert pracy (skorzystaj z requestu do pobierania ofert), value to id oferty pracy
- Wyślij request `POST /meetings`, przykład body:
```
{
	"type": "online",
	"date": "2023-02-01T20:35:50.333Z",
	"place": "https://google.meets.com",
	"candidateId": "63c19f20-3f97-4276-8e49-a3825b634931",
	"jobId": "1c34b1e8-9667-4814-9474-fc7d16bed548"
}
```
- W razie wątpliwości zerknij na dokumentację API `/docs`

## Szacunkowa estymacja: 6h

## Pre code review checklist

W folderze `/tasks/pre-code-review` znajdziesz listę z punktami, które należy sprawdzić przed stworzeniem każdego merge requestu. To pozwoli Ci wychwycić błędy lub dodatkowe miejsca do usprawnienia przed procesem code review.

## Przykłady
![Add meeting](./add-meeting.png "Add meeting")
