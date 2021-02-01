export type Dish = {
  id: string,
  categoryId: string,
  title: string,
  internalId: string,
  description: string,
  photo: string,
  isPublished: boolean,
  isEnabledToOrder: boolean,
  tags: [],
  priceValue: number,
  ingredients: any,
  allergens: any,
}
export type CategoryProps = {
  isVisible: boolean
  id: string,
  title: string,
  photo: any,
  dishes: Dish[],
}
export type MenuProps = {
  id: string,
  title: string,
  photo: string,
  categories: CategoryProps[],
  priceCurrency: string,
  createdAt: any,
}
export type HeaderProps = { countOrder: number }
export type MenuListProps = {
  menus: MenuProps[],
}
export type MenuDishProps = { dish: Dish, addDish: (dish: Dish) => void, priceCurrency:string }
export type DishProps = { dish: Dish }
export type CardMenuProps = {
  menu: MenuProps,
}
export type CardDishProps = {
  dish: Dish,
  priceCurrency: string
}
export type CardCategoryProps = {
  category: CategoryProps,
  menuId: string,
  priceCurrency: string
}
export type MenuCategoryProps = {
  categoryMenu: CategoryProps[],
  menuId: string,
  priceCurrency: string,

}
export type OrderUserProps ={
dish:Dish, 
count: number
}
export type CartProps ={
  orederUser:{dish:Dish, count: number}[],
  dishCountIncrease: (dish: Dish) => void ,
  dishCountReduce: (dish: Dish) => void,
  deleteDish:(dish: Dish)=>void,
}
export type OrderDishProps={
  dish:{dish:Dish, count: number} ,
  dishCountIncrease: (dish: Dish) => void ,
  dishCountReduce: (dish: Dish) => void,
  deleteDish:(dish: Dish)=>void,
}

export type DefaultLayoutProps={
  children: any[]
}