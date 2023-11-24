## Homepage

Stwórz branch na bazie gałęzi main: `git checkout -b feature/homepage main`

## Subtaski

- Ustaw routing w aplikacji
  `Postaraj się to zrobić w taki sposób aby móc odwoływać się do routów za pomocą jakiejś zmiennej a nie za każdym razem za pomocą zwykłego stringa.`
- Tytuł strony w przeglądarce: `HR Analytics`
- Strona powinna wyświetlać tytuł `HR Analytics` za pomocą tagu `h1`
- Strona powinna wyświetlić dwa przyciski "Sign up" i "Sign in", które na tę
  chwilę nic nie muszą robić ponieważ routy do nich jeszcze nie są gotowe na tym
  etapie.
  `Z racji tego, że te przyciski mają przekierowywać na inną stronę to spróbuj użyć linku, nie buttona.`
- Tytuł oraz przyciski powinny znajdować się w kontenerze który za pomocą
  `box-shadow` nada ładny cień
- Kontener powinien być wycentrowany
- Pod tagiem h1 i buttonami dodajemy tag h5 z frazą
  `We're looking for specialists in those technologies:`
- Poniżej ma znajdować się lista technologii, zawierająca zagnieżdżenia, które
  początkowo są ukryte/zwinięte
- Dane do wyświetlenia w liście należy pobrać za pomocą requestu
  `GET /jobs/public`
- Przykładowy output:

  ```
  {
    "languages": [
        { "name": "Java", "frameworks": [{ "name": "Spring" }] },
        {
        "name": "TypeScript",
        "frameworks": [
            {
            "name": "React",
            "levels": [
                { "name": "junior" },
                { "name": "mid" },
                { "name": "senior" }
            ]
            },
            {
            "name": "Angular",
            "levels": [
                {
                "name": "junior",
                "projects": [
                    { "name": "pharmacy project" },
                    { "name": "banking system" },
                    { "name": "mobile games app" }
                ]
                },
                { "name": "mid" },
                { "name": "senior" }
            ]
            }
        ]
        }
    ]
  }
  ```

- Przy wykorzystywaniu danych z API należy uwzględnić zwracane potencjalne
  wartości `null/undefined` i odpowiednio zabezpieczyć kod na te przypadki
- W liście każdy element posiadający dzieci (zagnieżdzenia) musi mieć
  wyświetlaną ikonę strzałki skierowaną w dół przy zwiniętej liście i skierowaną
  do góry przy rozwiniętym zagnieżdzeniu

## Nice to have

- Zadbaj o wygląd dla urządeń mobilnych (np. na ekranach o szerokości 320px)
- Weź pod uwagę potencjalną zmienność w strukturze danych i przygotuj listę
  technologii na znacznie większą liczbę zagnieżdzeń, wykorzystaj do tego
  algorytm rekurencji

## Szacunkowa estymacja: 12h

## Pre code review checklist

W folderze `/tasks/pre-code-review` znajdziesz listę z punktami, które należy sprawdzić przed stworzeniem każdego merge requestu. To pozwoli Ci wychwycić błędy lub dodatkowe miejsca do usprawnienia przed procesem code review.

## Przykłady

Widok domyślny:

![Mobile](./new-homepage-with-nestedList.png 'mockup1')

Rozwinięte drzewko:

![Mobile](./expanded-nested-list.png 'mockup2')
