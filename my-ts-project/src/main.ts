export {}
import dayjs from 'dayjs'
interface ListItem {
  count: number;
  time: string;
}

type Refresh = () => void
const refresh: Refresh = () => {
  const list: ListItem[] = JSON.parse(localStorage.getItem('list') || '[]')

// 声明一个新对象，用来存储当前时间time和次数count
const newItem: ListItem = {
  count: list.length === 0 ? 1 : list[list.length - 1].count + 1,
  time: dayjs().format('HH:mm:ss')
}
// 将新对象添加到list中
list.push(newItem)
// 遍历list创建p标签，将count和time添加到p标签中
list.forEach((item) => {
  const p: HTMLParagraphElement = document.createElement('p')
  p.textContent = `刷新次数为：${item.count}，刷新时的时间约为 ${item.time}`
// 将p标签添加到app中
  document.querySelector('#app')?.appendChild(p)
})
// 再将新的list存储到localStorage中
localStorage.setItem('list', JSON.stringify(list))

}
// 监听页面刷新事件，每次刷新完成后，调用refresh函数
window.addEventListener('load', refresh)



