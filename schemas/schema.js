import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      name: 'author',
      title: 'Autor',
      type: 'document',
      fields: [
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug'
        },
        {
          name: 'profilePicture',
          title: 'Foto de Perfil',
          type: 'image'
        },
        {
          name: 'fullName',
          title: 'Nome Completo',
          type: 'string'
        },
        {
          name: 'bio',
          title: 'Bio',
          type: 'string'
        }
      ]
    },
    {
      name: 'post',
      title: 'Postagem',
      type: 'document',
      fields: [
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug'
        },
        {
          name: 'title',
          title: 'Título',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string'
        },
        {
          name: 'date',
          title: 'Data',
          type: 'date'
        },
        {
          name: 'coverImage',
          title: 'Imagem de Capa',
          type: 'image'
        }
      ]
    }
  ])
})