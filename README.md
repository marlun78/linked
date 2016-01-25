# Linked

To show a potential problem with [babelify v6.4.0](https://github.com/babel/babelify/tree/v6.4.0) and maybe v7.x?

### How to reproduce

1. Clone repo `git clone git@github.com:marlun78/linked.git`
1. Install packages `npm i`
1. Build without link `npm run build:regular` (should finish successfully)
1. Build with link `npm run build:linked` (error)

### Error

```
export function map(array, fn) {
^
ParseError: 'import' and 'export' may appear only with 'sourceType: module'
```
