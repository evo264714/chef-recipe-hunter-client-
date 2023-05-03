export const recipeData = async (id) =>{
    const recipeData = await fetch(`http://localhost:2000/recipes/${id}`)
    const recipes = await recipeData.json()
    return recipes;
}