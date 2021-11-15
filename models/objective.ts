import { Schema, model } from 'mongoose';
import { Enum_TipoObjetivo } from './enums';
import { ProyectoModel } from "./project"


interface Objective{
    descripcion: string;
    tipo: Enum_TipoObjetivo;
    // proyecto: Schema.Types.ObjectId;
}

const  objectiveSchema = new Schema<Objective>({
    descripcion:{
        type: String,
        required: true,
    },
    tipo:{
        type: String,
        enum: Enum_TipoObjetivo,
        required: true,
    },
    // proyecto:{
    //     type: Schema.Types.ObjectId,
    //     ref: ProyectoModel,
    // },
});

export const ObjectiveModel = model("Objetivo", objectiveSchema);