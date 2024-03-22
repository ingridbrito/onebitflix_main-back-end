import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface Category {
    id: number
    name: string
    position: number
}

export interface CategoryCreationAttributes extends Optional<Category, 'id'>{ }
/*estamos falando para o programa como deve ser criada a categoria e que não
 há necessidade de criar um id, pois ele será criado automaticamente */
 
export interface CategoryInstance extends Model<Category, CategoryCreationAttributes>, Category {}

export const Category = sequelize.define<CategoryInstance, Category>('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    position: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER
    }
  })