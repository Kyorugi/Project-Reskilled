## Profile
Stwórz branch na bazie gałęzi main:
`git checkout -b feature/profile main`

## Subtaski
- Stwórz nowy route `/profile` 
- Tytuł strony w przeglądarce: `HR Dashboard - Profile`
- Dodaj przekierowanie na ten route po wciśnięciu "Profile" w menu rozwijanym z avataru usera w górnym pasku dashboardu
- Strona wyświetla nagłówek `Profile`
- Strona wyświetla informacje o obecnie zalogowanym użytkowniku
- Potrzebne dane pobierzesz za pomocą requestu `GET /users/me`
- na stronie profilu dodaj 2 formularze, jeden do zmiany hasła a drugi do zmiany imienia i nazwiska
- request do zmiany hasła: `PUT /auth/change-password`, body: `oldPassword: string; newPassword: string`, walidacja taka sama jak przy rejestracji
- zmiana hasła powoduje unieważnienie refresh-tokenu w związku z czym użytkownik nie będzie w stanie używać aplikacji po wygaśnięciu access tokenu. W związku z tym po zmianie hasła wyloguj użytkownika i przekieruj na stronę logowania w celu otrzymania nowej pary tokenów.
- formularz zmiany hasła powinien wymagać powtórzenia nowego hasła a poprawność powinna zostać zwalidowana po stronie front-endu
- po poprawnej zmianie hasła wyloguj użytkownika i przenieś go na stronę logowania celem otrzymania nowego tokenu użytkownika
- request do zmiany imienia i nazwiska: `PUT /users/me`, body: `firstName: string, lastName: string`, walidacja taka sama jak przy rejestracji
- po poprawnej zmianie imienia i nazwiska frontend powinien od razu odzwierciedlać tę zmianę na stronie profilu użytkownika

## Nice to have
- wszelkie błędy z api powinny zostać obsłużone

## Szacunkowa estymacja: 6h

## Pre code review checklist

W folderze `/tasks/pre-code-review` znajdziesz listę z punktami, które należy sprawdzić przed stworzeniem każdego merge requestu. To pozwoli Ci wychwycić błędy lub dodatkowe miejsca do usprawnienia przed procesem code review.

## Przykłady:
![Profile](./profile.png "Profile")

