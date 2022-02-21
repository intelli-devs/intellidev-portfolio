import { ref } from "vue"

const getMemebers = () => {
    const members = ref([])
    const error = ref(null)
    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/members')
            if (!data.ok) {
                throw Error("No Data Found")
            }
            members.value = await data.json()
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    return { members, error, load }

}
export default getMemebers