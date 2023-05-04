export const recipeData = async (id) => {
    const recipeData = await fetch(`http://localhost:2000/recipes/${id}`)
    const recipes = await recipeData.json()

    const chefData = await fetch(`http://localhost:2000/chef/${id}`)
    const chef = await chefData.json()

    return {recipes, chef};
}