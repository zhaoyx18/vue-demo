// 全局组件自动注册
import Vue from 'vue'

// lodash 是一个js实用工具库
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

/**
 * require.context是webpack的api，返回获取指定文件中的文件
 */
const requireComponent = require.context(
  // 其组件目录的相对路径
  '@/components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取export的模块信息
  const componentConfig = requireComponent(fileName)
  // 获取组件的 PascalCase 命名 转为驼峰
  // console.log(fileName, 'fileName')
  // const componentName = upperFirst(
  //   camelCase(
  //     // 获取和目录深度无关的文件名
  //     fileName
  //       .split('/')
  //       .pop()
  //       .replace(/\.\w+$/, '')
  //   )
  // )
  // console.log(componentName, 'componentName')
  /**
   * 兼容import export 和 module.export
   */
  const componentModule = componentConfig.default || componentConfig
  // 全局注册组件
  Vue.component(
    componentModule.name,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentModule
  )
})

export default requireComponent
