## Add employee of month

Stwórz branch na bazie gałęzi main:
`git checkout -b feature/employee-of-month main`

## Subtaski
- Stwórz setup wybranego przez siebie klienta graphql (proponuję ReactQuery lub Apollo), tutaj przykład jak umożliwić code-gen przy ReactQuery, analogicznie można znaleźć taką informację dla Apollo: https://nhost.io/blog/how-to-use-graphql-code-generator-with-react-query
- Cały setup powinien zostać stworzony w taki sposób, że w package.json pojawi się skrypt dzięki któremu można generować kod na podstawie schemy GraphQL
- Bardzo dobrze jeżeli te generowanie kodu będzie tworzyć od razu gotowe hooki, w naszym przypadku będzie to hook typu `useEmployeeOfMonth`
- Możesz uzyskać dostęp do GraphQL Playground po uruchomieniu backendu, wchodząc na url `localhost:9595/graphql`
- Pobierz dane z query `employeeOfMonth`, wyświetl imię i nazwisko pracownika miesiąca w górnym pasku aplikacji zaraz obok avatara użytkownika w formacie `Pracownik miesiąca: {firstName} {lastName}`
- Query za każdym razem zwraca inne dane dla pracownika miesiąca, jest to świadome rozwiązanie żeby nie komplikować implementacji. Zadanie polega na zapoznaniu się z działaniem GraphQL oraz przejściem przez początkowy setup dla generacji kodu frontendowego

## Szacunkowa estymacja: 4h

## Pre code review checklist

W folderze `/tasks/pre-code-review` znajdziesz listę z punktami, które należy sprawdzić przed stworzeniem każdego merge requestu. To pozwoli Ci wychwycić błędy lub dodatkowe miejsca do usprawnienia przed procesem code review.

## Przykłady
Query:

```graphql
query GetEmployeeOfMonth{
  employeeOfMonth {
    id
    firstName
    lastName
  }
}
```
