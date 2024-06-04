import React from 'react';
import Food_image from '/assets/images/image-omelette.jpeg';
import './App.css';

function App() {
  return (
    <>

    <div className='recipe-container'>
      <div>
        <div>
          <img src={Food_image} alt="image-omelette" />
        </div>
        <div className='recipe-information'>
        <div className='recipe-page-title'>
          <p className='recipe-page-header'>Simple Omelette Recipe</p>
          <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
        </div>
        
        <div className='preparation-duration'>
          <p>Preparation time</p>
          <ul>
            <li><strong>Total:</strong> Approximately 10 minutes</li>
            <li><strong>Preparation:</strong> 5 minutes</li>
            <li><strong>Cooking:</strong> 5 minutes</li>
          </ul>
        </div>
        
        <div className='ingredients'>
          <h3>Ingredients</h3>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>
        <hr />
        
        <div className='instructions'>
          <h3>Instructions</h3>
          <ul>
            <li> <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li> <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li> <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
            <li> <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li> <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li> <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</li>
          </ul>
        </div>
        <hr />
        <div className='nutritions'>
          <h3>Nutrition</h3>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <table>
            <tbody>
              <tr>
                <td className='first-column'>Calories</td>
                <td className='second-column'>277kcal</td>
              </tr>
              <tr>
                <td className='first-column'>Carbs</td>
                <td className='second-column'>0g</td>
              </tr>
              <tr>
                <td className='first-column'>Protein</td>
                <td className='second-column'>20g</td>
              </tr>
              <tr>
                <td className='first-column'>Fat</td>
                <td className='second-column'>22g</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
    <div className="attribution" style={{textAlign: 'center'}}>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/abmanaf">Alibaba</a>.
  </div>
  
    </>
  );
}

export default App;
