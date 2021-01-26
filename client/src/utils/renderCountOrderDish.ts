import { Dish } from './propsComponents'

export const renderCountOrderDish = (orderUser: { dish: Dish, count: number }[]) => {
  let count: number = 0
  orderUser.forEach((item: { dish: Dish, count: number }) => (count += item.count))
  return count
}
