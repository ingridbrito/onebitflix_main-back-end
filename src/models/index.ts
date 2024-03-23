//iremos tratar as associações nesse arquivo e sempre importaremos os models a partir dele


import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'

Category.hasMany(Course)

Course.belongsTo(Category)

Course.hasMany(Episode)

Episode.belongsTo(Course)

export {
  Course,
  Category,
  Episode
}