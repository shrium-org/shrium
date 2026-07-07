# Interview Prep — setup

## 1. Drop this folder in
Copy `interview-prep/` into `src/app/` (or wherever your feature folders live).

## 2. Move the JSON data
Copy `interview-prep/data/` into `src/assets/data/`. Final layout:

```
src/assets/data/
  technologies.json
  questions/
    java.json
    react.json
    angular.json
    sql.json
```

`InterviewPrepService` fetches from `assets/data` — add more `questions/<technologyId>.json`
files and a matching entry in `technologies.json` to add a new stack, no code changes needed.

## 3. Provide HttpClient
If it isn't already, add it in `app.config.ts`:

```ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    // ...your existing providers
  ],
};
```

## 4. Wire the routes
In your top-level routes file (e.g. `app.routes.ts`):

```ts
{
  path: 'interview-prep',
  loadChildren: () =>
    import('./interview-prep/interview-prep.routes').then(
      (m) => m.INTERVIEW_PREP_ROUTES
    ),
}
```

This gives you:
- `/interview-prep` → landing page, grid of technology cards
- `/interview-prep/java` → detail page for that technology's questions

## 5. Icons
Templates use Tabler icon classes (`ti ti-*`), matching the `@tabler/icons-webfont`
link already in your `index.html`. Swap `icon` values in `technologies.json` to any
other Tabler icon name if you want different glyphs per stack.

## Moving to a real backend later
Only `InterviewPrepService` changes. Update `baseUrl` to your API root and drop the
`.json` suffix / client-side `.find()` filtering — the two components, the templates,
and the `Technology` / `Question` interfaces stay exactly as they are, since the JSON
shape already mirrors what a REST endpoint would return.
