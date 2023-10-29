import { motion } from 'framer-motion'

// 用來顯示待辦事項的元件
export const TodoItem = () => {
  return (
    // motion 的 layout 屬性可以讓元件在變化時，有動畫效果
    <motion.li layout className="p-5 rounded-xl bg-zinc-900">
      <motion.span layout></motion.span>
    </motion.li>
  )
}
