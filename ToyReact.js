
class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }

  setAttribute(name, val) {
    this.root.setAttribute(name, val)
  }

  appendChild(vChild) {
    vChild.mountTo(this.root)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
  }
}


export class Component {
  constructor() {
    this.childeren = []
  }

  setAttribute(name, val) {
    this[name] = val
  }

  mountTo(parent) {
    let vdom = this.render()
    vdom.mountTo(parent)
  }

  appendChild(vChild) {
    this.childeren.push(vChild)
  }
}


// react
export default {
  createElement(type, attributes, ...children) {
    let element
    if (typeof type === 'string') {
      element = new ElementWrapper(type)
    } else {
      element = new type
    }

    for (let attr in attributes) {
      element.setAttribute(attr, attributes[attr])
    }

    const insertChildren = children => {
      for (let child of children) {
        if (typeof child === 'object' && child instanceof Array) {
          insertChildren(child)
        } else {
          if (typeof child === 'string') {
            child = new TextWrapper(child)
          } else if (!child instanceof TextWrapper
            && !child instanceof ElementWrapper
            && !child instanceof Component){
              child = String(child)
            }
          element.appendChild(child)
        }
      }

    }


    insertChildren(children)

    return element
  },

  render(vdom, el) {
    vdom.mountTo(el)
  }
}
