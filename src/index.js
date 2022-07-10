// клиент
// 1 минификация - webpack
// 2 поддержка браузерами - babel
// 3 импорт изображенийб стилей - модули webpack
// гарячая перезагрузка для дев режима - модуль/плагин webpack

import { sum } from './math'
import './style.css'

const result = sum(5, 10)

console.log('result', result)
