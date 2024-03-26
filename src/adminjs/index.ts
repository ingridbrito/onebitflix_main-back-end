//responsável por fazer a integração com o adminjs na aplicação

import AdminJS from "adminjs";
import AdminJsExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { User } from "../models";
import bcryptjs from "bcryptjs";
import { locale } from "./locals";

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: "/admin",
    resources:adminJsResources,
    locale: locale,
    branding: {
        companyName: 'OneBitFlix',
        logo: '/onebitflix.svg',
        theme: {
          colors: {
            primary100: '#ff0043',
              primary80: '#ff1a57',
              primary60: '#ff3369',
              primary40: '#ff4d7c',
                primary20: '#ff668f',
              grey100: '#151515',
              grey80: '#333333',
              grey60: '#4d4d4d',
              grey40: '#666666',
              grey20: '#dddddd',
              filterBg: '#333333',
              accent: '#151515',
              hoverBg: '#151515',
          }
        }
      }
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async(email, password) => {
    const user = await User.findOne({where: { email }})

    if (user && user.role === 'admin'){
      const matched = await bcryptjs.compare(password, user.password)

      if (matched) {
        return user
      }
    }
    return false
  }, 
  cookiePassword: 'senha-do-cookie'
}, null, {
  resave: false, 
  saveUninitialized: false
});

//constroi rotas e insere no express