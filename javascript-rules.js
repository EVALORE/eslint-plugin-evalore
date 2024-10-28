import bestPractices from "./javascript-rules/best-practices"
import codeStyle from './javascript-rules/code-style'
import maintainability from "./javascript-rules/maintainability"
import performance from "./javascript-rules/performance"
import security from "./javascript-rules/security"

export default [
  ...bestPractices,
  ...codeStyle,
  ...maintainability,
  ...performance,
  ...security
]
