//responsável por fazer a integração com o adminjs na aplicação

import AdminJS from "adminjs";
import AdminJSSequelize from "@adminjs/sequelize"
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { locale } from "./locals";
import { authenticationOptions } from "./authentication";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import AdminJsExpress from '@adminjs/express'

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: "/admin",
    resources:adminJsResources,
    locale: locale,
    dashboard: dashboardOptions,
    branding: brandingOptions
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs,
  authenticationOptions,
  null,
  { resave: false, saveUninitialized: false }
)
//constroi rotas e insere no express