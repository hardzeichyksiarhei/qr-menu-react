// export type MenusProps = {
//   menus: {
//     id: number,
//     title: string,
//     photo: string,
//     categories: {id:string, title: string, photo: any, dishes: { id:string, internalId:number, title: string, photo: any, isPublished: boolean,isEnabledToOrder: boolean, tags: [], options: [], optionsType: string, extras: [], description: string,ingredients:[], allergens: [], categoryId: string, vatRates: {}}[] }[],
//   }[],
//   menu:{id: number,
//     title: string,
//     photo: string,
//     categories: {id:string, title: string, photo: any, dishes: { id:string, internalId:number, title: string, photo: any, isPublished: boolean,isEnabledToOrder: boolean, tags: [], options: [], optionsType: string, extras: [], description: string,ingredients:[], allergens: [], categoryId: string, vatRates: {}}[] }[],
//   }
// }

export type Dish = {
  id: string,
  internalId: string,
  title: string,
  photo: any,
  isPublished: boolean,
  isEnabledToOrder: boolean,
  tags: [],
  options: {}[],
  optionsType: string,
  extras: {}[],
  description: string,
  ingredients: any,
  allergens: any,
  categoryId: string,
  vatRates: {},
}

export type CategoryProps = {
  visibility: boolean
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
