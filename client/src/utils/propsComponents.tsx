export type menuProps = {
  menus: {
    id: number,
    title: string,
    photo: string,
    categories: { dish: { title: string }[], title: string, photo: string }[],
  }[],
}
export type categoriesProps = { categoryMenu: { dish: {}[], title: string, photo: string }[] }
export type categoryProps = { category: { dish: {}[], title: string, photo: string } }
export type dishProps = { dish: any }
