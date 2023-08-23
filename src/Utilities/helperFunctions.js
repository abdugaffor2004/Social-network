
export const updateObjectInArray = (array, objectPropForCompare, customDataForCompare, newObjProps ) =>{
  return  array.map((items) => {
        if (items[objectPropForCompare] === customDataForCompare) {
          return { ...items, ...newObjProps };
        }
        return items;
      })
}