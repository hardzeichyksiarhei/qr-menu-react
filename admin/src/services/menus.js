import axios from 'axios'

import { API_URL } from '../config'

// const MENUS = [
//   {
//     id: 1,
//     title: 'Menu title 1',
//     photo:
//       'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     categories: [],
//     createdAt: new Date(),
//   },
//   {
//     id: 2,
//     title: 'Menu title 2',
//     photo:
//       'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     categories: [
//       {
//         id: 'a946a5ae-1583-4e3a-8b74-b11952462e68',
//         title: 'Today`S Specials',
//         isVisible: true,
//         photo:
//           'https://images.unsplash.com/photo-1597315083776-7a6145780ed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//         dishes: [
//           {
//             id: '15293994-4cd3-4fbc-92d0-a73b83c8c2e7',
//             categoryId: 'a946a5ae-1583-4e3a-8b74-b11952462e68',
//             title: 'Dish 1 1',
//             internalId: '',
//             description:
//               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             photo:
//               'https://images.unsplash.com/photo-1551504734-b464946bb7f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//             isPublished: true,
//             isEnabledToOrder: true,
//             tags: [],
//             ingredients: [],
//             allergens: [],
//           },
//           {
//             id: '9cabe36a-a814-488d-9f33-041dc70f08db',
//             categoryId: 'a946a5ae-1583-4e3a-8b74-b11952462e68',
//             title: 'Dish 2 1',
//             internalId: '',
//             description:
//               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             photo:
//               'https://images.unsplash.com/photo-1542197745-c70e10f66af8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
//             isPublished: true,
//             isEnabledToOrder: true,
//             tags: [],
//             ingredients: [],
//             allergens: [],
//           },
//           {
//             id: 'd09990b2-b3d4-495f-837a-1e1daf5c4cb9',
//             categoryId: 'a946a5ae-1583-4e3a-8b74-b11952462e68',
//             title: 'Dish 3 1',
//             internalId: '',
//             description:
//               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             photo:
//               'https://images.unsplash.com/photo-1588566565463-180a5b2090d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//             isPublished: true,
//             isEnabledToOrder: true,
//             tags: [],
//             ingredients: [],
//             allergens: [],
//           },
//         ],
//       },
//       {
//         id: 'd2412173-6a77-4168-8c3f-c7a608014c74',
//         title: 'Soups',
//         isVisible: true,
//         photo:
//           'https://images.unsplash.com/photo-1599077971981-99c35aa835e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//         dishes: [
//           {
//             id: '15293994-4cd3-4fbc-92d0-a73b63c8c2e7',
//             categoryId: 'd2412173-6a77-4168-8c3f-c7a608014c74',
//             title: 'Dish 1',
//             internalId: '',
//             description:
//               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             photo:
//               'https://images.unsplash.com/photo-1551504734-b464946bb7f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//             isPublished: true,
//             isEnabledToOrder: true,
//             tags: [],
//             ingredients: [],
//             allergens: [],
//           },
//           {
//             id: '9cabe36a-a814-488d-9f33-041dc72f08db',
//             categoryId: 'd2412173-6a77-4168-8c3f-c7a608014c74',
//             title: 'Dish 2',
//             internalId: '',
//             description:
//               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             photo:
//               'https://images.unsplash.com/photo-1542197745-c70e10f66af8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
//             isPublished: true,
//             isEnabledToOrder: true,
//             tags: [],
//             ingredients: [],
//             allergens: [],
//           },
//           {
//             id: 'd09990b2-b3d4-493f-837a-1e1daf5c4cb9',
//             categoryId: 'd2412173-6a77-4168-8c3f-c7a608014c74',
//             title: 'Dish 3',
//             internalId: '',
//             description:
//               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             photo:
//               'https://images.unsplash.com/photo-1588566565463-180a5b2090d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//             isPublished: true,
//             isEnabledToOrder: true,
//             tags: [],
//             ingredients: [],
//             allergens: [],
//           },
//         ],
//       },
//       {
//         id: 'c4e3cfe8-bcbd-4e59-b6a0-621d0c9bf07e',
//         title: 'Deserts',
//         isVisible: true,
//         photo:
//           'https://images.unsplash.com/photo-1597315083776-7a6145780ed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//         dishes: [
//           {
//             id: '15293994-4cd3-4fbc-92d0-a73b63c8c2e7',
//             categoryId: 'c4e3cfe8-bcbd-4e59-b6a0-621d0c9bf07e',
//             title: 'Dish 1',
//             internalId: '',
//             description:
//               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//             photo:
//               'https://images.unsplash.com/photo-1551504734-b464946bb7f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//             isPublished: true,
//             isEnabledToOrder: true,
//             tags: [],
//             ingredients: [],
//             allergens: [],
//           },
//         ],
//       },
//       {
//         id: '29e36f86-39d2-475a-90c7-0d72d20b6013',
//         title: 'Main Course',
//         isVisible: true,
//         photo:
//           'https://images.unsplash.com/photo-1599077971981-99c35aa835e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//         dishes: [],
//       },
//     ],
//     createdAt: new Date(),
//   },
//   {
//     id: 3,
//     title: 'Menu title 3',
//     photo:
//       'https://images.unsplash.com/photo-1588566565463-180a5b2090d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     categories: [],
//     createdAt: new Date(),
//   },
//   {
//     id: 4,
//     title: 'Menu title 4',
//     photo:
//       'https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     categories: [],
//     createdAt: new Date(),
//   },
// ]

const getAll = async () => {
  const { data, status } = await axios.get(`${API_URL}/menus`)
  return status === 200 && data ? data : []
}

const getById = async ({ menuId }) => {
  const { data, status } = await axios.get(`${API_URL}/menus/${menuId}`)
  return status === 200 && data ? data : null
}

const save = async (menu) => {
  const { data, status } = await axios.post(`${API_URL}/menus`, menu)
  return [200, 201].includes(status) && data ? data : null
}

export default {
  getAll,
  getById,
  save,
}
