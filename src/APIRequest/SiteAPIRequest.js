import axios from  'axios'

export async function fetchCategories(){
    try {
        const url = 'https://mehedipata.com/wp-json/wp/v2/categories'
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        console.error(error)
        return []
    }
}

export default fetchCategories