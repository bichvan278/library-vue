import axios from "axios";

const urlAPI = "http://localhost:3000/books";


// Get all books
const getAllbooks = async () => {
    try {
        const res = await axios.get(urlAPI);
        const bookItem = res.data;
        console.log(bookItem);
        return bookItem;
    } catch (err) {
        console.error(err);
    }
}
export default getAllbooks;


