// function rendercategories(cat) {

//   return (
//     <div class="form-check">
//       <input
//         class="form-check-input"
//         type="checkbox"
//         name={cat.id}
//         onChange={(e) => {
//           loadcategory(e);
//         }}
//       />
//       <label class="form-check-label" for="gridCheck1">
//         {cat.name}
//       </label>
//     </div>
//   );
// }

// function loadcategory(e) {
//   //esta funcion agrega a un arreglo de las categorias seleccionadas
//   console.log(e.target.checked); //detecta en que estado el checkbox , si esta true agregamos la categorias
//   //si esta false quitamos la categoria

//   if (e.target.checked === true) {
//     setcateselect([...selectedcategories, e.target.name]);
//   }

//   if (e.target.checked === false) {
//     setcateselect(selectedcategories.filter((c) => c !== e.target.name));
//   }
// }
