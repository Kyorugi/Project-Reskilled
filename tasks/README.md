# HR Dashboard
W tym folderze znajdziesz opisy zadań potrzebnych do zrealizowania projektu HR Dashboard.
Każde zadanie powinno zostać dostarczone jako osobny Pull Request.

Zdjęcia dołączone do zadań są tylko przykładami implementacji, nie musi być to odwzorowane 1 do 1.

Jeżeli dane zadanie zawiera sekcję "Nice to have" to oznacza to, że jest to coś dodatkowego i nie było uwzględnione w estymacji zadania.

Pamiętaj, że estymacja nie oznacza, że powinieneś coś zrobić w daną ilość godzin. Może Ci to zająć mniej lub więcej czasu. Estymacja była tworzona z myślą o osobach na poziomie Junior Developer-a.

## Uruchomienie backendu
Zainstaluj paczki za pomocą wybranego package managera (domyślnie yarn - patrz lockfile).
Zainicjuj bazę danych uruchamiając komendę z folderu backendowego `yarn db:reset` (więcej informacji w sekcji `Baza danych`).
Uruchom backend za pomocą komendy `yarn start:dev`.

## Dokumentacja API
Dokumentacja API jest dostępna po uruchomieniu serwera backendowego pod adresem `http://localhost:9595/docs`.

Wszystkie requesty zostały dokładnie opisane, zarówno to czego endpoint oczekuję jak i to co zwraca z uwzględnieniem możliwych błędów.

Opisy schemy dla requestów również uwzględniają walidację (minimalna i maksymalna ilość znaków).

## Baza danych
Repozytorium backendowe korzysta z bazy danych `sqlite`. W celu stworzenia bazy danych oraz wygenerowania początkowych danych wejdź do folderu z backendem, upewnij się, że serwer jest wyłączony i uruchom komendę:
```
yarn db:reset
```

Ta komenda usunie bazę jeżeli takowa istnieje, stworzy nową i uruchomi migrację danych.

Uwaga - ta komenda usunie dane zmodyfikowane przez Ciebie w bazie danych!

## Komunikacja z API
W celu autoryzacji po stronie Backend-u powinieneś do każdego zapytania dołączyć Bearer Token do nagłówka Authorization. Przykład:
```
Authorization: Bearer eyJhbGc3OiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RAZXhhbXBsZS5jb20iLCJzd1IiOjE2NzQxMjcvMzcxMzEsImZpcnN0bmFtZSI6InRlc3QiLCJsYXN0bmFtZSI6InRlc3QiLCJpYXQiOjE2NzQxNDE4ODcsImV4cCI6MTY3NDE0aTQ4N30.SOU2GqpndnREZsrSiEbx7_cwcqXkA1jG5jkvDLX5emw
```

Gdzie token występujący po słowie Bearer to token zwracany przez endpoint logowania.

W celu weryfikacji czy użytkownik jest obecnie zalogowany możesz wysłać request na endpoint `/users/me` z odpowiednim tokenem. Jeżeli otrzymasz odpowiedź to znaczy, że posiadany przez Ciebie token jest prawidłowy.

Pamiętaj o obsłudze stanów komunikacji z serwerem (stan ładowania oraz stan błędu).

## Rekomendacja stosu technologicznego
Ze względu na wymagania tego projektu oraz najpopularniejszy obecnie stack technologiczny w obszarze tworzenia aplikacji biznesowych rekomenduję następujący stos technologiczny:
- MUI lub Tailwind do stylowania UI
- Axios + React Query do komunikacji z API
- React Hook Form do obsługi formularzy
- Yup do walidacji formularzy
- Do obsługi stanu aplikacji powinien wystarczyć Ci zwykły state i context.

Oczywiście masz dowolność. Powyższe jest tylko rekomdenacją. 
