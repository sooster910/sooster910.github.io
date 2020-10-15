---
layout: post
title:  "++x, x++의 쉬운 이해 😁"
date:  2020-10-13
tags: #JavaScript #DataType
categories: JavaScript
---

처음 자바스크립트 배울 때, 조금 헷갈렸던 부분이 있었는데 
++x , x++ 에 대한 이해이다. 

일단 예제를 보자면, 
```javascript
ex1)
const x = 3;
const y =x++;

console.log(x); // 4
console.log(y); // 3

ex2)
const x=3
const y=++x;  
console.log(x)  // 4 
console.log(y)  // 4

```

중요하게 봐야 할 부분은,  +,- operator 의 위치에 따라 값이 달라 지는 것인데. 
y = ++ x 는 ++ 가 앞에 있으니,  먼저 x값에 ++를 한 다음 y에 그 값을 대입하는 것이고, 
y = x ++  x 가 y에 더 가까우므로, x를 먼저 y에 대입한 다음, ++ 해준다. 

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
