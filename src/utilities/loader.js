export const recipeData = async (id) => {
    const recipeData = await fetch(`https://chefs-table-server-evo264714.vercel.app/recipes/${id}`)
    const recipes = await recipeData.json()

    const chefData = await fetch(`https://chefs-table-server-evo264714.vercel.app/chef/${id}`)
    const chef = await chefData.json()

    return {recipes, chef};
}