import AdminJS, { PageHandler }from "adminjs"
import { Episode, Course, Category, User } from "../models"


export const dashboardOptions:{
    handler?: PageHandler
    component?: string
} = {
    component: AdminJS.bundle("./components/Dashboard"),
    handler: async (req, res, context) => {
      const courses = await Course.count()
      const episodes = await Episode.count()
      const categories = await Category.count() 
      const standartUsers = await User.count()

      res.json({
        'Cursos': courses,
        'Episódios': episodes, 
        'Categorias': categories,
        'Usuários': standartUsers
      })
    }
  }

//o handler é uma função que lida com a requisição do dashboard, que vai deixar disponível no front