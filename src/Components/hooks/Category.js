import {useFetchdata} from './fetchdata'


const useCategory= () => {
 // console.log('data in usecategory',useFetchdata())
  const category = []
  const elements=useFetchdata()
  elements && elements.map(element => {
    if (category.includes(element.category)) {
      return category
    }
    else {
      category.push(element.category)

    }
  })
  return category
   
}

export default useCategory
