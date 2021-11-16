import conectarDB from "./db/db";
import { UserModel } from './models/user';
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { ProyectoModel } from "./models/project";
import { ObjectiveModel } from "./models/objective";

const CrearProyectoConObjetivos = async () => {
    const usuarioInicial = await UserModel.create({
        nombre:"Juan",
        apellido: "Vaquiro",
        correo: "juan@gmail.com",
        identificacion: "12111",
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado,
    });

    const proyectoCreado = await ProyectoModel.create({
        nombre: "proyecto Mision Tic",
        fechaInicio: new Date('2021/12/24'),
        fechaFin: new Date('2022/12/24'),
        presupuesto: 120000,
        lider: usuarioInicial.id,
    });

    const objetivoGeneral = await ObjectiveModel.create({
        descripcion:"este el el objetivo general",
        tipo: Enum_TipoObjetivo.general,
        proyecto: proyectoCreado._id,
    });

    const objetivoSpecifico1 = await ObjectiveModel.create({
        descripcion:"este el el objetivo especifico 1",
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id,
    });

    const objetivoSpecifico2 = await ObjectiveModel.create({
        descripcion:"este el el objetivo especifico 2",
        tipo: Enum_TipoObjetivo,
        proyecto: proyectoCreado._id,
    });

    console.log ('proyecto creado', proyectoCreado);
    
};

const main = async () => {
    await conectarDB ();

    const proyecto = await ProyectoModel.findOne({_id:"6193bb6995386181efe41bda"});
        console.log("el proyecto que econtrado es ", proyecto);

    const objetivos = await ObjectiveModel.find({project: "6193bb6995386181efe41bda"});
        console.log("los objetivos del proyecto son ", objetivos);

    const proyectoConOnjetivos = { ...proyecto, objetivos:objetivos };
        console.log("proyecto con objetivos es ", proyectoConOnjetivos);
};

main ();

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
    // const proyecto = await ProyectoModel.find({ nombre: 'Proyecto 4'  })
    // .populate('lider')
    // .populate('objetivos');    
    //     console.log('el proyecto es: ', JSON.stringify(proyecto));

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

    
