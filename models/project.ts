import { Schema, model } from 'mongoose';
import { Enum_EstadoProyecto, Enum_FaseProyecto } from './enums';
import { ObjectiveModel } from './objective';
import { UserModel } from './user';

interface Proyecto {
    nombre: string;
    presupuesto: number; //float
    fechaInicio: Date;
    fechaFin: Date,
    estado: Enum_EstadoProyecto,
    fase: Enum_FaseProyecto,
    lider: Schema.Types.ObjectId;
    objetivos: [Schema.Types.ObjectId];
}

const projectSchema = new Schema<Proyecto>({
    nombre:{
        type: String,
        required: true,
        unique: true,
    },
    presupuesto:{
        type: Number,
        required: true,
    },
    fechaInicio: {
        type: Date,
        required: true,
    },
    fechaFin: {
        type: Date,
        required: true,
    },
    estado:{
        type: String,
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.inactivo,
    },
    fase:{
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.nulo,
    },
    lider: {
        //referencia fuerte
        type: Schema.Types.ObjectId, //Campo ObjectID 
        required: true,
        ref: UserModel,
    },
    objetivos:[ 
        {
         type: Schema.Types.ObjectId,
         ref: ObjectiveModel,   
        },
    ],
});

export const ProyectoModel = model('Proyecto', projectSchema );