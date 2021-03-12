# Regex Go

Regex Go is a convenient package that provides some common regular expressions.

## Usage

Install this package:

```bash
npm install regex-go --save
```

Use the APIs you need in your program, e.g.:

```js
import { isDomain } from 'regex-go';

if (isDomain('google.com')) {
  console.log('This is a domain!');
}
```

**If you are using Node.js, you may need to import this package from `regex-go/dist/regex-go.umd.js`, the default one is es moudle.**

## API Reference

`isDomain(s: string): boolean`

If the string is a domain.

`isEmail(s: string): boolean`

If the string is an email address.

## Build

Just install the dependencies and run `npm run build`.

## License

MIT
