//tooooodo esto debe consumir el padre ya que no solo se puede hacer con pokemon sino con lo que sea
const obtenerPokemons = async () => {
  // metodo que nos retornaria el array de pokemons, siempre el metodo que tenga la funcionalidad debe tener un metodo fachada
  console.log("Aleatorio");
  // console.log(getNumeroAleatorio(1,3))
  // console.log(obtenerVectorNumerico())
  // obtenerNombresPokemon(obtenerVectorNumerico())
  // await consumirApi(1)
  const vectorObj = await obtenerNombresPokemon(obtenerVectorNumerico());
  console.log(vectorObj);
  return vectorObj;
};
//metodo que nos retornara un numero aleatoriod dentro de un rango
function getNumeroAleatorio(min, max) {
  max++;
  return Math.floor(Math.random() * (max - min) + min);
}

//creamos el vector con el numero de opciones
const obtenerVectorNumerico = () => {
  const vector = [
    getNumeroAleatorio(1, 600),
    getNumeroAleatorio(1, 600),
    getNumeroAleatorio(1, 600),
    getNumeroAleatorio(1, 600),
  ];
  return vector;
};

//ahora con el array vamos a consumir el api para obetenr los nombres de los pokemon
const consumirApi = async (id) => {
  //si usamos funciones lambdas el metodo async se lo pone asi
  //el nombre del result o r puede ser lo que sea
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (result) => result.json()
  );
  // console.log(data.name)
  // console.log(data.id)
  return data;
};

//una vez tenemos un array con valores aleatorios aqui obtendremos el nombre, entonces a partir de un arreglo lo desestructuramos
const obtenerNombresPokemon = async ([id1, id2, id3, id4] = []) => {
  const data1 = await consumirApi(id1); //siempre debemos poner await si el metodo es asincrono
  const data2 = await consumirApi(id2);
  const data3 = await consumirApi(id3);
  const data4 = await consumirApi(id4);
  //esto va a imprimir todo el objeto
  // console.log(data1)
  // console.log(data2)
  // console.log(data3)
  // console.log(data4)
  //esto va a imprimir solo el nombre
  // console.log(data1.name)
  // console.log(data2.name)
  // console.log(data3.name)
  // console.log(data4.name)
  //ahora vamos a poner un arreglo de obtejos de nombre y el id
  const obj1 = {
    nombre: data1.name,
    id: data1.id,
  };
  const obj2 = {
    nombre: data2.name,
    id: data2.id,
  };
  const obj3 = {
    nombre: data3.name,
    id: data3.id,
  };
  const obj4 = {
    nombre: data4.name,
    id: data4.id,
  };

  const vectorObjetos = [obj1, obj2, obj3, obj4];
  return vectorObjetos;
};
//otra forma
//una vez tenemos un array con valores aleatorios aqui obtendremos el nombre, entonces a partir de un arreglo lo desestructuramos
// const obtenerNombresPokemonOForma=(arreglo)=>{
//     const id1 = arreglo[0]
//     const id2 = arreglo[2] // y asi
// }

const obtenerFachadaPokemons = async () => {
  //este metodo se podra usar desde el componente y tenemos que exportarlo con la parte final
  return await obtenerPokemons();
};

//para exportar y siempre va al ultimo
export default obtenerFachadaPokemons;
