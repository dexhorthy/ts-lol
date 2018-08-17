ts-lol
========

When the typescript compiler gets you down, don't get mad -- get even! Express your distaste for static types and show `tsc` that you mean business with `ts-lol`!

Geting started
-------

```
npm install --save-dev ts-lol
```

Then, use ts-lol's expressive type library to cast your way to a successful compile!


```typescript
import { lol } from "ts-lol";
const x: number = <lol> "not a number";
```

```typescript
let y = ["what", "a", "cool", "string", "array"];
y = <nope> {"not": "anymore!"};
y = <nah> {"huh?": "still no"};
```


```typescript
interface Spam {
  eggs(howMany: string): number;
}

const spam: Spam = <welcometotypescriptwhereeverythingsmadeupandthetypesdontmatter> 5;
console.log(spam.eggs("100")); // We'll have to find out at runtime!
```

Contributions welcome, many more types coming soon!

License
-------
[JSON](https://www.json.org/license.html)