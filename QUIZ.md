React Counter Quiz
===

Please read the testing requirements before you begin as it may influence how you construct your app.

## App

Using `create-react-app`, create a counter app:

![image](https://user-images.githubusercontent.com/478864/29787788-0bbe70d4-8be5-11e7-8021-f74e317f4406.png)

* When the right button is clicked, the count increments.
* When the left button is clicked, the count decrements.
* When the count is 0, the left button should be disabled:

![image](https://user-images.githubusercontent.com/478864/29787853-56fa8452-8be5-11e7-9810-1c32d940c704.png)

You may style the app however you choose.

## Testing

For the quiz, you need to have two snapshot tests that cover the following cases:

1. Render with a positive count
2. Render with a zero count

The intent is to capture the difference in rendering for a normal versus disabled left decrement button.

**HINT**: It will be much easier to test if you split into:

* Container component (owns state)
* Presentation component (renders the view)

This can be accomplished via separate components:

```js
export default class CounterContainer {

  // intialization including state
  
  // whatever other methods you need
  
  render() {
    // any other logic you might need
    
    return <Counter {/* whatever props you need to pass */}/>;
  }
}

export function Counter(props) {  // just takes props, has not state
  // render logic
}
```
