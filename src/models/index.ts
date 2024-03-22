//iremos tratar as associações nesse arquivo e sempre importaremos os models a partir dele


import { Category } from './Category'
import { Course } from './Course'

Category.hasMany(Course)

Course.belongsTo(Category)

export {
  Course,
  Category
}