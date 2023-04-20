import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { Wrapper } from 'components/theme/GlobalContainer';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipe } from 'redux/recipes/recipesOperations';
import { fetchOneRecipe } from 'redux/recipes/recipesOperations';
import { selectCurrentRecipe } from 'redux/recipes/recipesSelectors';
import { selectOneOwnRecipe } from 'redux/recipes/recipesSelectors';
import { fetchShoppingList } from 'redux/shoppingList/shoppingListOperations';
import { selectShoppingList } from 'redux/shoppingList/shoppingListSelectors';

// /recipe/640cd5ac2d9fecf12e8898a6 --- to test
// 640cd5ac2d9fecf12e8898a3 ---- to test time in hours
// 640cd5ac2d9fecf12e8898ae --- to test no time and no description
const RecipePage = props => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { recipeId } = useParams();
  const prevPage = location.state && location.state.pathname;
  const products = useSelector(selectShoppingList);

  useEffect(() => {
    console.log(prevPage);
    if (prevPage === '/my') {
      dispatch(fetchOneRecipe(recipeId));
    } else {
      dispatch(fetchRecipe(recipeId));
    }
  }, [dispatch, prevPage, recipeId]);

  useEffect(() => {
    if (products.length < 1) {
      dispatch(fetchShoppingList());
    }
  }, [dispatch, products]);

  const currentRecipe = useSelector(
    prevPage === '/my' ? selectOneOwnRecipe : selectCurrentRecipe
  );

  if (currentRecipe !== null) {
    const {
      title,
      description,
      time,
      instructions,
      ingredients,
      favorite,
      previewImg,
      preview,
    } = currentRecipe;

    return (
      <>
        <RecipePageHero
          title={title}
          description={description}
          time={time}
          favorite={favorite}
          id={recipeId}
        />
        <Wrapper>
          <RecipeInngredientsList ingredients={ingredients} />
          {instructions && (
            <RecipePreparation
              instructions={instructions}
              previewImg={previewImg || preview}
              alt={title}
            />
          )}
        </Wrapper>
      </>
    );
  }
};

export default RecipePage;
