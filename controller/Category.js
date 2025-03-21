import { Category } from "../model/Category.js"

const fetchCategory = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).json(categories)
    }
    catch (err) {
        res.status(400).json(err)
    }
}
export {fetchCategory}