import styles from './DinnerMenu.module.css'
import { dinnerMeals } from './data'

export const DinnerMenu = () => {
  return(
    <div className={styles.dinnerMenuContainer}>
      <h2>Kvällsmeny</h2>
      {dinnerMeals.map((category) => (
        <div key={category.mealCategory}>
          <h3 className={styles.mealCategory}>{category.mealCategory}</h3>
          {category.meals.map((meal) => (
            <p key={meal.text}>{meal.text}</p>
          ))}
        </div>
      ))}
    </div>
   
  )
}