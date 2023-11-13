## Translacje

Stwórz branch na bazie gałęzi main:
`git checkout -b feature/translations main`

## Subtaski
- Przetłumacz wszelkie teksty w aplikacji za pomocą wybranej biblioteki dot. tłumaczeń w reakcie
- Tłumaczenie w 2 językach: pl i en

## Nice to have
- Stwórz własny hook do obsługi translacji w aplikacji zamiast korzystania z gotowej biblioteki
- Typesafety - zdefiniuj typy w taki sposób, że mając zestaw tłumaczeń dla danego języka typescript wykryje brak translacji oraz podpowie brakujące
- Mechanizm wykrywania języka użytkownika (np. po języku przeglądarki), fallback na `en`

## Szacunkowa estymacja: 6h

## Pre code review checklist

W folderze `/tasks/pre-code-review` znajdziesz listę z punktami, które należy sprawdzić przed stworzeniem każdego merge requestu. To pozwoli Ci wychwycić błędy lub dodatkowe miejsca do usprawnienia przed procesem code review.
