# Pre code review checklist

Przed stworzeniem merge requestu upewnij się czy Twój kod spełnia poniższe wytyczne.
Po przejściu przez te punkty, będziesz lepiej przygotowany do stworzenia merge requesta i przesłania go do code review.

## Ogólne
- DRY (Don’t Repeat Yourself). Czy ten sam kod jest powielany więcej niż dwa razy?
- Usunięto nieużywane pakiety z NPM
- Upewnij się, że nie ma żadnych nie pożądanych błędów w konsoli
- Upewnij się, że wszystkie zależności są zainstalowane i działają poprawnie

## Podatność na błędy
- Upewnij się, że nie ma żadnych błędów z TypeScript
- Upewnij się, że nie ma błędów ESLint (`npm run lint`)
- Upewnij się, że nie używasz `any` w TypeScript bez konkretnego powodu

## Code Style
- Sprawdź, czy kod jest sformatowany zgodnie z Prettier
- Upewnij się, że używasz jednolitych cudzysłowów i spacji
- Upewnij się, że nazwy zmiennych i funkcji są zrozumiałe i adekwatne do kontekstu

## Best Practice
- Upewnij się, że wszelkie zasoby są czyszczone, na przykład subskrypcje Observable w Angularze, useEffect cleanup w - React lub beforeDestroy w Vue.
- Sprawdź, czy używasz struktury folderów i architektury zgodnej z logiką biznesową
- Upewnij się, że komponenty są małe i mają jedno zadanie
- Sprawdź, czy używasz zagnieżdżonych warunków i pętli z umiarem

## Safety
- Upewnij się, że nie ma błędów związanych z typami danych
- Upewnij się, że wszelkie dane wejściowe są walidowane

## Security
- Upewnij się, że nie ma danych wrażliwych w kodzie (takich jak klucze API)
- Upewnij się, że zapytania do API są autoryzowane jeśli jest to wymagane

## Design
- Upewnij się, że design jest zgodny z wytycznymi UX/UI
- Upewnij się, że strona jest responsywna

## Performance
- Upewnij się, że obrazy i inne zasoby są zoptymalizowane
- Sprawdź wydajność aplikacji za pomocą narzędzi jak Google Lighthouse

## Accessibility
- Upewnij się, że nagłówki są używane w logicznej kolejności, począwszy od H1 do H6
- Każdy obrazek powinien mieć atrybut alt opisujący go, o ile obrazek nie jest czysto dekoracyjny, w przeciwnym wypadku przekaż pustego stringa do atrybutu alt
- Jeżeli element ma dodatkowe style lub zachowanie dla `:hover`, to te same reguły powinny być stosowane dla `:focus`, aby użytkownicy korzystający z klawiatury mieli tę samą funkcjonalność
- Porządek Tabindex'ów jest logiczny i intuicyjny. Upewnij się, że elementy formularzy, linki i inne elementy interaktywne są dostępne w logicznej kolejności
- Każdy element formularza powinien być związany z etykietą, która opisuje jego funkcję

## Dokumentacja
- Upewnij się, że komentarze w kodzie są aktualne i pomagają w zrozumieniu kodu
- Upewnij się, że README jest aktualne i zawiera wszystkie potrzebne informacje dla nowych developerów
