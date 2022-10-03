/**
 * Agrupar por la propiedad de la colección
 * @param collection
 * @param property
 *
 * @example
 * const collection = [
 *  { type: 'fruit', name: 'name-fruit-1' },
 *  { type: 'vegetable', name: 'name-vegetable-1' },
 *  { type: 'fruit', name: 'name-fruit-1' }
 * ];
 *
 * const group = groupBy(collection, 'type');
 *
 * [
 *  [
 *    { "type": "fruit", "name": "name-fruit-1" },
 *    { "type": "fruit", "name": "name-fruit-1" }
 *  ],
 *  [
 *    { "type": "vegetable", "name": "name-vegetable-1" }
 *  ]
 * ]
 * @returns
 */
export const groupBy = (collection: any[], property: string): any[] => {
  let i = 0; let val; let index
  const values = []; const result = []

  for (; i < collection.length; i++) {
    val = collection[i][property]
    index = values.indexOf(val)

    if (index > -1) {
      result[index].push(collection[i])
    } else {
      values.push(val)
      result.push([collection[i]])
    }
  }

  return result
}

export function groupMatriz<T> (collection: T[], property: keyof T): T[][] {
  return collection.reduce((acc:Array<Array<T>>, value, i) => {
    if (acc.length === 0) {
      acc.push([value]) // la primera vez el acumulador está vacío y colocamos un array con el primer valor
    } else {
      const prevElement = collection[i - 1] // obtenemos el elemento anterior de la colección

      if (prevElement[property] === value[property]) { // comparamos el elemento anterior con el actual si son iguales en "propiedad"
        const lastGroup = acc[acc.length - 1] // obtenemos el último array del acumulador
        lastGroup.push(value) // metemos el valor en ese array
      } else {
        acc.push([value]) // creamos un nuevo array en el acumulador con el valor
      }
    }

    return acc
  }, [])
}
