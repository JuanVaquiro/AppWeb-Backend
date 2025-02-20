import { gql } from 'apollo-server-express';

const tiposProyectos = gql`
 
type Objetivo {
  _id: ID!
  descripcion: String!
  tipo: Enum_TipoObjetivo!
}
input crearObjetivo {
  descripcion: String!
  tipo: Enum_TipoObjetivo!
}

input editarObjetivo {
  _id: ID!
  descripcion: String!
  tipo: Enum_TipoObjetivo!
}

type Proyecto {
  _id: ID!
  nombre: String!
  presupuesto: Float!
  fechaInicio: Date!
  fechaFin: Date!
  estado: Enum_EstadoProyecto
  fase: Enum_FaseProyecto
  lider: Usuario
  objetivos: [Objetivo]
}
type Query {
  Proyectos: [Proyecto]
}
type Mutation {
  crearProyecto(
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: String!
    objetivos: [crearObjetivo]
  ): Proyecto

  eliminarProyecto(_id: String): Proyecto

  editarProyecto(
    _id: String!
    nombre: String!
    presupuesto: Float
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    objetivos: [editarObjetivo]
   
  ): Proyecto
  
}
`;

export { tiposProyectos };