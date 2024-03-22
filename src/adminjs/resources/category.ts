//como o nome diz, aqui estão os recursos e configuração do model dentro do AdminJs

import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'position'],
  filterProperties: ['name', 'position', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'position'],
  showProperties: ['id', 'name', 'position', 'createdAt', 'updatedAt']
}