import ToyReact, {Component} from './ToyReact.js'

// let a = <div id="ida">
//   <span>1</span>
//   <span>2</span>
//   <span></span>
// </div>
// console.log(a)

/**
 * 被翻译成
 * var a = ToyReact.createElement(MyComponent, {name: 'a'})
 *
 */

class MyComponent extends Component {
  render() {
    return <div>
      <span>1</span>
      <span>2</span>
      {this.childeren}
    </div>
  }
}

let b = <MyComponent name="mycom" id="my">
  <div>2312</div>
  <div>2312</div>
  <div>2312</div>
  <div>2312</div>
</MyComponent>

console.log(b)

ToyReact.render(b, document.body)



