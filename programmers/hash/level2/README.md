# 정리

## 조합

- 조합은 곱으로 계산하자
- 없을 경우의 수는 1을 더하고 나중에 1을 빼자
- 객체는 Obj[key] = value

```js
for (let i = 0; i < clothes.length; i++) {
  obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  console.log(obj);
}

for (let key in obj) {
  answer *= obj[key];
}
```
