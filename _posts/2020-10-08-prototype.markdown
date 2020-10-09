---
layout: post
title:  "Prototype에 대한 이해"
date:   2019-10-8 21:03:36 +0530
categories: JavaScript Prototype
---

프로토타입을 알고나면, 자바스크립트의 대한 시야가 넓어진 느낌을 받을 수 있다. 그 이유는, 처음 코딩 시작했을 때 그냥 무심코 지나가던 것들에 대한 존재의 이유를 알았으니 말이다. 
---


```javascript
const Razorpay = require('razorpay');

let rzp = Razorpay({
	key_id: 'KEY_ID',
	secret: 'name'
});

// capture request
rzp.capture(payment_id, cost)
	.then(function (data) {
		return 2;
	})
```

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
