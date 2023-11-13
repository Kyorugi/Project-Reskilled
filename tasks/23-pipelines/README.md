## Pipelines

Stwórz branch na bazie gałęzi main:
`git checkout -b feature/pipelines`

## Subtaski
- Dodaj CI pipelines za pomocą gitlab-ci
- Wymagane pipeline-y to: `type-check`, `lint`, `test` oraz `build`
- Komenda lint powinna być ustawiona tak aby nie tolerowała ani jednego warningu
- Build

## Nice to have
- Postaraj się jak najlepiej zoptymalizować pipeliny (cache dla `node_modules`, czy pole `needs`)
- Dodaj pipeline który sprawdzi ciruclar-dependencies w projekcie (możesz użyć do tego biblioteki `dependency-cruiser`)
- Jeżeli dodałeś translacje do projektu to napisz skrypt CI który upewni się, że nie ma różnicy w kluczach translacji między różnymi językami
- Popularnym serwisem do trzymania repozytoriów jest github, napisz CI dla githuba które zrobi to samo
- Zadanie dla dla bardzo chętnych: zmigruj projekt na `pnpm`, uwaga - setup pipelines dla `pnpm` może być trudniejszy niż dla npm/yarn. Dodatkowo optymalizacja pnpm odbywa się z reguły inaczej niż poprzez cache dla `node_modules`. Migracja na `pnpm` może znacznie utrudnić te zadanie.

## Szacunkowa estymacja: 10h

## Pre code review checklist

W folderze `/tasks/pre-code-review` znajdziesz listę z punktami, które należy sprawdzić przed stworzeniem każdego merge requestu. To pozwoli Ci wychwycić błędy lub dodatkowe miejsca do usprawnienia przed procesem code review.
