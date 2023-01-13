import axios from 'axios'
export const FetchApi = async (setLoad, setError) => {
    let url = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    try {
        setLoad(true)
        let {
            data
        } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error);
        setLoad(false)
        setError(true)
    }
}

export function Get_Data_Base_Catogery(data, catogery, setLoad, setError) {
    try {
        //console.log(catogery);
        let filtered = data.entries.filter((item) => item.releaseYear >= 2010 && item.programType == catogery)
        if (filtered.length == 0) {
            setError(true)
        }
        setLoad(false)
        return filtered.slice(0, 21)
    } catch (error) {

    }
}

//releaseYear
//programType