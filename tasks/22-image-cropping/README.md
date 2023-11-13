## Readers

Stwórz branch na bazie gałęzi main:
`git checkout -b feature/image-cropping`

## Subtaski
- Do strony profilu użytkownika chcemy dodać funkcjonalność uploadowania zdjęcia
- Stwórz funkcjonalność uploadu zdjęcia, użytkownik powinien móc to zrobić przeciągając plik lub klikając przycisk
- Użytkownik może zuploadować 1 plik który waży maksymalnie 1MB
- Po wrzuceniu zdjęcia do aplikacji zdjęcie powinno zostać otwarte w modalu służącym do cropowania zdjęcia
- Wymagane proporcje zdjęcia to 1:1 w związku z czym cropowanie musi takie proporcje na użytkowniku wymusić
- Cała funkcjonalność cropowania została wymyślona po to aby z jakiegolowiek zdjęcia użytkownik mógł wyciąć swoją twarz
- Po zatwierdzeniu zdjęcia w modalu zdjęcie powinno zostać przekonwertowane do formatu `base64`
- Backend póki co nie jest pod to gotowy więc finalizacja taska polega na zrobieniu console.log z tym base64

## Nice to have
- Zamockuj endpoint na który ma być wysyłany `base64`, zaproponuj endpoint oraz to w jaki sposób obrazek ma być przesłany

## Szacunkowa estymacja: 10h

## Pre code review checklist

W folderze `/tasks/pre-code-review` znajdziesz listę z punktami, które należy sprawdzić przed stworzeniem każdego merge requestu. To pozwoli Ci wychwycić błędy lub dodatkowe miejsca do usprawnienia przed procesem code review.
