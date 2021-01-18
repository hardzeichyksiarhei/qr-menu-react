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
  id: number,
  title: string,
  photo: string,
  categories: CategoryProps[],
  createdAt: any,
}

export type MenuListProps = {
  menus: MenuProps[],
  choiceMenu: (menu: MenuProps) => void,
}

export type MenuDishProps = { dish: Dish, addDish: (dish: Dish) => void }
export type DishProps = { dish: Dish }
export type CardMenuProps = {
  menu: MenuProps,
  clickMenu: (menu: MenuProps) => void,
}
export type CardDishProps = {
  dish: any,
  choiceDish: (dish: Dish) => void,
}
export type CardCategoryProps = {
  category: CategoryProps,
  choiceDish: (dish: Dish) => void,
}
export type MenuCategoryProps = {
  categoryMenu: CategoryProps[],
  choiceDish: (dish: Dish) => void,
}
