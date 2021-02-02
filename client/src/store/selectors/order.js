const order = (state) => state.order

const quantity = (state) => state.order.items.reduce((acc, curr) => acc + curr.quantity, 0)

export default { order, quantity }
