const breakfastDishes=[
['Huevos al gusto','Con jamón, tocino, a la mexicana o longaniza, acompañados de frijoles refritos. Elige tu manera favorita de empezar el día.'],
['Omelette','Relleno de jamón y queso, champiñones con queso, o verduras salteadas y queso. Tres combinaciones para un desayuno a tu gusto.'],
['Chilaquiles','Totopos bañados en salsa, con dos huevos al gusto —revueltos o estrellados— y frijoles refritos. Un clásico para empezar con antojo.'],
['Chilaquiles con pollo','Totopos bañados en salsa, con pollo deshebrado y frijoles refritos. Una combinación reconfortante, llena de sabor.'],
['Enchiladas (4)','Cuatro enchiladas acompañadas de salsa roja o verde, cebolla, crema y un toque de queso. Elige la salsa que más se te antoje.'],
['Enfrijoladas (4)','Cuatro piezas bañadas en salsa de frijoles, con queso y cebolla. Un desayuno suave y reconfortante.'],
['Picaditas con pollo','Con pollo, lechuga, cebolla, queso y tu elección de salsa verde, roja o frijoles. Un antojo tradicional para tu mañana.'],
['Hotcakes (3)','Tres hotcakes esponjosos estilo buttermilk, servidos con jarabe de maple o mermelada de fresa. Para empezar el día con algo dulce.']
];
const breakfastList=document.querySelector('#breakfast-dishes');
breakfastDishes.forEach(([name,description])=>{const item=document.createElement('article');item.className='breakfast-dish';const title=document.createElement('h4');title.textContent=name;const text=document.createElement('p');text.textContent=description;item.append(title,text);breakfastList.append(item)});
