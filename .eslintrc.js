/**
 * @Author: Blake He
 * @Date: 2020-11-24 14:03:11
 * @Description:
 */
module.exports = {
    root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
    env: {
        // 预定义的全局变量，这里是浏览器环境
        browser: true,
        node: true,
        es6: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser', // 'babel-eslint'
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    globals: {},
    extends: [
        // 来自@vue/eslint-config-standard
        '@vue/standard',
        // 来自@vue/eslint-config-typescript
        '@vue/typescript',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        // 'prettier/@typescript-eslint',
        // '@vue/prettier',
        // '@vue/prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    rules: {
        // 禁止在 case/default 子句中使用词法声明
        'no-case-declarations': 'off',
        // 禁止直接使用 Object.prototypes 内置函数
        'no-prototype-builtins': 'off',
        'vue/no-unused-components': [
            'error',
            {
                ignoreWhenBindingPresent: true
            }
        ],
        'vue/no-unused-vars': [
            'error',
            {
                ignorePattern: '^_'
            }
        ],
        'vue/no-deprecated-data-object-declaration': 'error',
        'vue/no-v-for-template-key-on-child': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 使用单引号
        quotes: [1, 'single'],
        // 不检查属性的驼峰命名
        camelcase: [2, { properties: 'never', ignoreDestructuring: true }],
        // 单行的最大长度设置
        'max-len': [2, 250, 4, { ignoreUrls: true }],
        // 缩进默认使用4个空格
        '@typescript-eslint/indent': 'off',
        // 禁止重复导入 (no-duplicate-imports)
        'no-duplicate-imports': ['error', { includeExports: true }],
        //  html关闭标签自动闭合  测试下
        'vue/html-self-closing': 'off',
        // html标签有三个属性才换行显示
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 10,
                multiline: {
                    max: 1,
                    allowFirstLine: false
                }
            }
        ],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        // 禁止出现空函数 (no-empty-function)
        // "functions" - 常规函数。
        // "arrowFunctions" - 箭头函数。
        // "generatorFunctions" - Generator 函数。
        // "methods" - 类方法和对象的方法简写
        // "generatorMethods" - 类方法和带有 generator 的对象的方法简写。
        // "getters" - Getters。
        // "setters" - Setters。
        // "constructors" - 类的构造函数
        '@typescript-eslint/no-empty-function': ['error', { allow: ['functions', 'arrowFunctions'] }],
        // function 指定返回类型 Missing return type on function
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // <!-- ✓ GOOD -->
        // <MyComponent my-prop="prop" />

        //   <!-- ✗ BAD -->
        //   <MyComponent myProp="prop" />
        // 属性的写法要求
        'vue/attribute-hyphenation': 'off',
        // 强制要求属性顺序
        'vue/attributes-order': 'off',
        // 禁用未声明的变量 (no-undef) moment 需要全局注释
        'no-undef': 'off',
        // 不允许props的改变 [props]
        'vue/no-mutating-props': 'off'
    }
}
