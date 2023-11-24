## Readers

Stwórz branch na bazie gałęzi main:
`git checkout -b feature/readers`

## Subtaski
- Wejścia do naszego biura strzeże ochroniarz a samo wejście jest zabezpieczone czytnikiem do kart. Nasz backend otrzymuje informację kiedy jakiś pracownik wchodzi lub wychodzi z biura (są to dwa osobne zdarzenia). Ochroniarz potrzebuje szybko otrzymać informację o imieniu i nazwisku osoby która wywołuje zdarzenie wejścia lub wyjścia.
- W związku z powyższym backend umożliwia podłączenie się za pomocą websockets (socket.io) w celu nasłuchiwania na te zdarzenia. Dzięki temu możemy na frontendzie wyświetlić takie zdarzenie w czasie rzeczywistym.
- Podłącz się przez websockets i nasłuchuj na zdarzenia wejścia i wyjścia, po każdym otrzymaniu takiego zdarzenia na front-endzie wyświetlaj notyfikację zawierającą komunikat "XYZ wszedł do biura" lub "XYZ wyszedł z biura" zależnie od rodzaju zdarzenia.
- Nazwa eventu dla wejścia to `ENTRY` a wyjścia to `EXIT`
- Imię i nazwisko pracownika wywołującego zdarzenie przychodzi w websocketowym evencie jako string
- Nasłuchwiać na zdarzenia możesz na osobnej stronie lub w całej aplikacji, wybór należy do Ciebie
- Adres url dla połączenia się przez websockets to `localhost:9595/readers`

## Nice to have
- Czasem dochodzi do sytuacji gdzie pracownik zapomniał karty umożliwiającej wejście do biura. W takiej sytuacji chcemy aby ochroniarz zidentyfikował pracownika po jakimś innym dokumencie. W celu zachowania takiej informacji w systemie backend umożliwia ręczne oznaczenie wejścia lub wyjścia danego pracownika. Dodaj osobną stronę (z dowolnym UI), strona ma wyświetlić input na wpisanie imienia i nazwiska pracownika, radio input do wyboru rodzaju eventu (wejście lub wyjście z biura) oraz przycisk wywołujący zdarzenie.
- Zdarzenie wywołuje się również poprzez websockety, nazwa zdarzenia to `MANUAL_READ`
- Dane jakich spodziewa się backend to:
```ts
    {
      employeeName: string;
      eventName: 'ENTRY' | 'EXIT';
    }
```
- Jako potwierdzenie zapisania zdarzenia otrzymasz zdarzenie `ENTRY` lub `EXIT` z podanym przez Ciebie imieniem i nazwiskiem pracownika tak samo jak jest to opisane wcześniej w tym zadaniu.
- Przydatny link: https://socket.io/how-to/use-with-react

## Szacunkowa estymacja: 6h

## Pre code review checklist

W folderze `/tasks/pre-code-review` znajdziesz listę z punktami, które należy sprawdzić przed stworzeniem każdego merge requestu. To pozwoli Ci wychwycić błędy lub dodatkowe miejsca do usprawnienia przed procesem code review.
