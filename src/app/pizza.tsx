export const pizzaPrices = {
  pizza: 85,
  material: 5,
}

export const calculateTotalPrice = (count: number, materials: string[]) => {
  return count * pizzaPrices.pizza + calculateMaterialsPrice(materials)
}

export const calculateMaterialsPrice = (materials: string[]) => {
  return materials.length * pizzaPrices.material
}
