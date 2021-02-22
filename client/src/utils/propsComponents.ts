type Tag = {
  icon: String,
  label: String
}

type Allergen = {
  number: Number,
  label: String
}


export type Dish = {
  id: string,
  categoryId: string,
  title: string,
  internalId: string,
  description: string,
  photo: {
    id: string,
    userId:string,
    sizes: any
  },
  isPublished: boolean,
  isEnabledToOrder: boolean,
  tags: Tag[],
  priceValue: number,
  ingredients: String[],
  allergens: Allergen[],
  priceCurrency: String,
  rating: [
    {key: number, value: number},
    {key: number, value: number},
    {key: number, value: number},
    {key: number, value: number},
    {key: number, value: number},
  ] 
}
export type CategoryProps = {
  isVisible: boolean
  id: string,
  
  title: string,
  photo:{
    id: string,
    sizes: any,
    userId: string,
  },
  dishes: Dish[],
}
export type MenuProps = {
  id: string,
  title: string,
  isEnabledToOrder: Boolean,
  userId: string,
  photo: {
    id: string,
    userId:string,
    sizes: any
  },
  categories: CategoryProps[],
  priceCurrency: string,
  createdAt: any,
}
export type HeaderProps = { countOrder: number }
export type MenuListProps = {
  menus: MenuProps[],
}
export type MenuDishProps = { dish: Dish, addDish: (dish: Dish) => void, priceCurrency: String | undefined }
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
  priceCurrency: string,
  // photo: {
  //   id: string,
  //   userId:string,
  //   sizes: any
  // },
}
export type MenuCategoryProps = {
  categoryMenu: CategoryProps[],
  menuId: string,
  priceCurrency: string,

}
export type OrderUserProps ={
  dish: Dish, 
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