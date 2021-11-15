import conectarDB from "./db/db";
import { UserModel } from './models/user';
import { Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { ProyectoModel } from "./models/project";
import { ObjectiveModel } from "./models/objective";

const main = async () => {
    await conectarDB ();

     //generar objetivos
    // const objet = await ObjectiveModel.create({
    //     descripcion: "Este el objetivo especifico",
    //     tipo: Enum_TipoObjetivo.especifico,
    // });

   
    // ProyectoModel.create ({
    //     nombre: 'Proyecto 4',
    //     presupuesto: 120,
    //     fechaInicio: Date.now(), //fecha actual
    //     fechaFin: new Date("2022/2/10"), //año-mes-dia
    //     lider: '619148082e64cbefb1b7d9c5', //referencia 
    //     objetivos: ['619265309fc77f347b1abcc8', '6192664f817eb5c2901283c4']
    // })
    // .then((u) =>{
    //     console.log('Proyecto creado', u);
    //     })   
    // .catch((e) =>{
    //     console.error('Error creando el Proyecto', e);
    //     });
    
    //QUERY func populate (modelo objetivos:many,   usuarios:one)
    const proyecto = await ProyectoModel.find({ nombre: 'Proyecto 4'  })
    .populate('lider')
    .populate('objetivos');    
        console.log('el proyecto es: ', JSON.stringify(proyecto));

    // referencia debil querys
    // const proyecto = await ProyectoModel.find({ nombre: 'Proyecto 3' }); //modelo base
    //     console.log('el proyecto es :', proyecto, proyecto[0].lider); 
    
    // const lider = await UserModel.find ({ _id: proyecto[0].lider }) //campo
    //     console.log( 'el lider del proyecto es: ', lider);

    //CREAR USUARIO
    // UserModel.create({
    //     correo:"skymotionUser4@gmail.com",
    //     identificacion:"1070222",
    //     nombre: "sky4",
    //     apellido: "motion4",
    //     rol: Enum_Rol.lider,
    // })
    // .then((u) =>{
    //      console.log('usuario creado', u);
    // })  
    // .catch((e) =>{
    //     console.error('Error creando el usuario', e);
    // });

    //leer OBTENER LOS USUARIOS
    // await UserModel.find()  //Dentro del fn find se puede filtrar y hacer la consulta
    //     .then((u) =>{
    //         console.log('usuario', u);
    //     })
    //     .catch((e) =>{
    //         console.error('error obtenido los usuarios', e)
    //     });

    //OBTENER UN SOLO USUARIO
    // await UserModel.findOne( 
    //     { identificacion: '1070123' }) //filtrar
    //     .then((u) =>{
    //         console.log('usuario encontrado', u);
    //     })
    //     .catch((e) =>{
    //         console.error(e);
    //     });
    
    //Actualizar EDITAR(parametro) UN USUARIO 
    // await UserModel.findOneAndUpdate(
    //     { correo: 'skymotion@.com' }, //filtro
    //     { //cambios
    //         nombre: 'juan',
    //         apellido: 'vaquiro',
    //         rol: Enum_Rol.lider,
    //     }
    // ).then((u) => {
    //     console.log('usuario actualizado', u);
    // }).catch((e) => {
    //     console.error('Error Actualizar', e); 
    // });

    //ELIMINAR USUARIO
    // await UserModel.findOneAndDelete( 
    //     { correo: 'skymotion@.com' }) //filtro
    //     .then((u) => {
    //         console.log('usuario eliminado', u);
    //     })
    //     .catch((e) =>{
    //         console.error('error eliminar', e);
    //     });

    
};

main ();