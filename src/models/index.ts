//iremos tratar as associações nesse arquivo e sempre importaremos os models a partir dele


import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'
import { Favorite } from './Favorite'
import { User } from './User'

Category.hasMany(Course, { as: 'courses'})

Course.belongsTo(Category)

Course.hasMany(Episode, {as: 'episodes'})

Episode.belongsTo(Course)

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, {through: Favorite})
User.hasMany(Favorite, {as: 'favoriteCourses', foreignKey: 'user_id'})

export {
  Course,
  Category,
  Episode,
  Favorite,
  User
}