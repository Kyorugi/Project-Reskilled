## Advanced TS generics

Stwórz branch na bazie gałęzi main:
`git checkout -b feature/advanced-ts-generics`

## Subtaski

- Uwaga: zadanie jest dosyć trudne w implementacji
- React posiada wbudowanego hooka:

```tsx
const navigate = useNavigate();
navigate('...');
```

- Często budując aplikację tworzymy obiekt/enum z dostępnymi stronami dzięki
  czemu możemy odwoływać się po zmiennej zamiast używać stringa

```tsx
const ROUTES = {
  home: '/home',
  userById: '/users/:id',
} as const;

navigate(ROUTES.home);
navigate(ROUTES.userById); // ups, co z id?
```

- Stwórz abstrakcję na hooka useNavigate która wykryje, że przekazana wartość
  posiada jakiś parametr np. `/:id`, jeżeli jakikolwiek parametr występuje w
  url-u to typescript powinien wymusić przekazanie go w opcjach navigate oraz
  podmienić :id na przekazaną wartość
- Api abstrakcji powinno wyglądać tak:

```tsx
const navigate = useCustomNavigate();
navigate('/home'); // ok
navigate('/users/:id'); // error, spodziewano się parametrów
navigate('/users/:id', { params: { id: '123' } }); // ok, implementacja useNavigate sprawia, że końcowy url to '/users/123'
navigate('/profile/:name', { params: { name: 'John' } }); // ok, implementacja useNavigate sprawia, że końcowy url to '/profile/John'
```

- Autocomplete powinien działać dla `params`
- Obiekt z opcjami w którym znajduje się `params` powinien dalej umożliwiać
  korzystanie z podstawowych opcji navigate
- Jeżeli w url-u nie ma żadnego parametru to nie można przekazać params

## Szacunkowa estymacja: 8h

## Pre code review checklist

W folderze `/tasks/pre-code-review` znajdziesz listę z punktami, które należy sprawdzić przed stworzeniem każdego merge requestu. To pozwoli Ci wychwycić błędy lub dodatkowe miejsca do usprawnienia przed procesem code review.
