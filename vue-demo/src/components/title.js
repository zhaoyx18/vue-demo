import Vue from 'vue'
var getChildrenTextContent = function (children) {
  return children.map(function (node) {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}
Vue.component('anchored-heading', {
  render: function (createElement) {
    // 创建 kebab-case 风格的 ID
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '')

    return createElement(
      'h' + this.level,
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
          }
        }, this.$slots.default)
      ]
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

Vue.component('com-array', {
  render: function (createElement) {
    if (this.items.length) {
      return createElement(
        'ul',
        this.items.map(item => {
          return createElement('li', item)
        })
      )
    } else {
      return createElement('p', 'it empty')
    }
  },
  props: {
    items: Array
  }
})

Vue.component('value-model', {
  props: ['value'],
  render: function (createElement) {
    let self = this
    return createElement('input', {
      domProps: {
        value: self.value
      },
      on: {
        input: function (event) {
          self.$emit('input', event.target.value)
        }
      }
    })
  }
})

Vue.component('com-slot', {
  render: function (createElement) {
    return createElement(
      'div',
      [createElement(
        'p',
        {
          scopedSlots: {
            default: function (props) {
              console.log(props)
              return createElement('span', props.text)
            }
          }
        }
      )]
    )
  }
})
