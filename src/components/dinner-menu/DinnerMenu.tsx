import styles from './DinnerMenu.module.css'
import { dinnerMeals } from './data'

export const DinnerMenu = () => {
  return(
    <div className={styles.dinnerMenuContainer}>
      <h2>Kvällsmeny</h2>
      <div className={styles.gridContainer}>
        {dinnerMeals.map((category) => (
          <div key={category.mealCategory} className={styles.gridItem}>
            <div className={styles.mealCategory}>{category.mealCategory}</div>
            {category.meals.map((meal) => (
              <div>
                <div key={meal.text} className={styles.menuItem}>
                  {meal.text}
                  <span>{meal.price ? `${meal.price}kr` : ''}</span>
                </div>
                {meal.variants && (
                  meal.variants.map((variant) => (
                    <ul>
                      <li>{variant}</li>
                    </ul>
                  ))
                )}

                
              </div>
            ))}
          </div>
        ))}
      </div>
      
    </div>
   
  )
}