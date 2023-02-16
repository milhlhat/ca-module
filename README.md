
## Usage

### npx

```js
npx ca-module
```

### npm

```js
npm install -g ca-module
```

```js
ca
```
or

```
ca-module
```

## Option

#### `module name`
> Type: String

> Default: MyModule


#### `layers`
> Type: checkbox

> Default: ["domains", "use-cases", "adapters", "presentations"]

---
## Output
```
.
├── my-module
│   ├── adapters
│   │   └── index.ts
│   ├── domains
│   │   ├── my-module.entity.ts
│   │   ├── my-module.model.ts
│   │   └── my-module.repository.ts
│   ├── presentations
│   │   └── index.ts
│   └── use-cases
│       └── index.ts
```