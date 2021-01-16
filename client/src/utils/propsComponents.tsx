export type menuProps = {
  menus: {
    id: number,
    title: string,
    photo: string,
    categories: { dish: { title: string }[], title: string, photo: string }[],
  }[],
}
export type MenuDishProps = { dish: any, addDish: (dish: any) => void }
export type dishProps = { dish: any }
export type CardMenuProps = {
  card: {
    id: number,
    title: string,
    photo: string,
    categories: any[],
  },
  clickMenu: (card: any) => void,
}
export type CardDishProps = {
  dish: any,
  choiceDish: (dish: any) => void,
}
export type CardCategoryProps = {
  category: { dish: {}[], title: string, photo: string }
  choiceDish: (dish: any) => void,
}
export type MenuCategoryProps = {
  categoryMenu: { dish: {}[], title: string, photo: string }[]
  choiceDish: (dish: any) => void,
}
