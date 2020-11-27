export const categoryFilter = (arr, category) => {
    if (!category) return arr;

    // console.log("From Category Filter")
    // console.log(category)

    return arr.filter(product => category.includes(product.category));
}