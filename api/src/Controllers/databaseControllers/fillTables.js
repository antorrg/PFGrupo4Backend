// En un archivo donde manejas las operaciones relacionadas con el llenado de datos (por ejemplo, fillData.js)
const dataBulk = require('./dataBulk');
const { Genre, Platform,  } = require('../../database'); // Importa tus modelos de tablas
const {genresData, platformsData} = require('../../../Data/indexData'); // Ruta relativa al archivo indexData (reune la informacion y la exporta en un objeto)
const vgBulk = require('./vgBulk');


// Usa la función dataBulk para diferentes tablas y conjuntos de datos
const fillTables =async (table, data)=>{
    await dataBulk(Genre, genresData);
   await dataBulk(Platform, platformsData);
   await vgBulk();

}
module.exports= fillTables;