import { ref } from "@vue/reactivity";
const getSingleMember = (id) => {
    const m = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            let data = await fetch("http://localhost:3000/members/" + id);
            if (!data.ok) {
                throw Error("Member not Found");
            }
            m.value = await data.json();
        } catch (error) {
            error.value = error.message;
        }
    }

    return { m, error, load }
}
export default getSingleMember