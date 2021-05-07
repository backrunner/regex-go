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

**If you are using Node.js, you may need to import this package from `regex-go/umd`, the default one is es moudle.**

## API Reference

### Domain

`isDomain(s: string): boolean`

If the string is a domain.

### Email

`isEmail(s: string): boolean`

If the string is an email address.

### String

`containsEmoji(s: string): boolean`
Test if the string contains emoji. (the pattern comes from [`emoji-regex`](https://github.com/mathiasbynens/emoji-regex))

`containsChinese(s: string): boolean`
Test if the string contains Chinese characters.

## Build

Just install the dependencies and run `npm run build`.

## License

MIT
