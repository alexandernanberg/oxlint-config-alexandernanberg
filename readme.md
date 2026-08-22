# oxlint-config-alexandernanberg

> Oxlint and oxfmt config according to my personal preference

Sibling project to
[eslint-config-alexandernanberg](https://github.com/alexandernanberg/eslint-config-alexandernanberg),
migrating the same rule intent to [oxlint](https://oxc.rs/docs/guide/usage/linter)
and [oxfmt](https://oxc.rs/docs/guide/usage/formatter).

## Usage

```bash
pnpm add -D oxlint-config-alexandernanberg oxlint oxfmt
```

`oxlint.config.ts`:

```ts
import { defineConfig } from 'oxlint'
import config from 'oxlint-config-alexandernanberg/oxlint/react'

export default defineConfig({
  extends: [config],
})
```

`oxfmt.config.ts`:

```ts
import { defineConfig } from 'oxfmt'
import config from 'oxlint-config-alexandernanberg/oxfmt/base'

export default defineConfig(config)
```

For type-aware rules (`options.typeAware`, enabled in `oxlint/base.ts`),
also install `oxlint-tsgolint` and make sure your `tsconfig.json` doesn't
rely on legacy options like `baseUrl` — see
[Type-Aware Linting](https://oxc.rs/docs/guide/usage/linter/type-aware.html).

## Known gaps vs. the ESLint config

oxlint has no equivalent yet for `import/order` (handled by oxfmt's
`sortImports` instead), `import/no-extraneous-dependencies`,
`import/no-useless-path-segments`, or `no-octal`.

## License

MIT
