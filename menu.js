window.menu=[
{id:'calientes',name:'Bebidas calientes',note:'Tu pausa empieza con una taza.',items:[['Americano',27],['Espresso',27],['Cappuccino Clásico',42],['Cappuccino Moka',52],['Cappuccino Rompope',62],['Lechero',42],['Latte',42],['Chocolate',42]]},
{id:'frias',name:'Bebidas frías',note:'Un break muy refrescante.',items:[['Frappuccino Clásico',58],['Frappuccino Chips',74],['Frappuccino Moka',64],['Frappuccino Oreo',74],['Ice Latte',45],['Ice Americano',35],['Smoothie Frutos rojos o Fresa',65],['Chocomilk',40],['Malteada de Fresa',45],['Limonada Natural',28],['Limonada Mineral',35],['Horchata',28],['Refresco',28],['Agua Embotellada',10]]},
{id:'baguettes',name:'Baguettes',note:'Algo rico entre cada pausa.',items:[['La Classica',58,'Jamón y queso en una baguette, perfecta para disfrutar de un sabor simple y delicioso.'],['Pizzerola',53,'Salsa de pizza, queso fundido y peperoni en una baguette. El sabor de una pizza, pero en formato único y delicioso. ¡No podrás resistirte!'],['Jamón y Pepperoni',62,'Jamón fresco y pepperoni sabroso, acompañados de queso derretido. ¡Una mezcla irresistible que te conquistará!'],['Pechuga Asada',69,'Jugosa pechuga de pollo asada, acompañada de verduras frescas. ¡Sabor ahumado y delicioso en cada bocado!'],['Supreme',84,'Jamón, pepperoni, pechuga asada y queso derretido, todo dentro de una baguette. ¡Una combinación irresistible!']]},
{id:'otros',name:'Para comer',note:'Quédate un poquito más.',items:[['Club Sándwich con Papas',110],['Sándwich Clásico',30],['Sándwich BLT',40],['Ensalada Mixta',70],['Ensalada de la Casa',80],['Chilaquiles con Pollo',85],['Chilaquiles con Carne Asada',150],['Enchiladas / Enfrijoladas Rellenas (4)',65],['Hotcakes Buttermilk (3)',65],['Molletes (2)',85],['Picaditas Sencillas',36],['Picaditas Preparadas',45]]}
];
// Descripciones breves de la carta; las baguettes conservan su texto original.
const descripciones={
calientes:[
'Café espresso al que se añade agua caliente: una taza aromática, de sabor equilibrado, para disfrutar sin prisa.',
'Una extracción corta y concentrada de café, con aroma intenso y un sabor que se queda contigo. Un pequeño break con carácter.',
'Espresso con leche y una capa de espuma suave. El equilibrio entre el carácter del café y una textura cremosa.',
'Café, leche y el toque dulce del chocolate. Una combinación cálida para cuando se antoja algo más que café.',
'El sabor del café con leche, espuma y un toque de rompope. Una pausa dulce y aromática.',
'Café con leche caliente, suave y reconfortante. Ideal para acompañar el pan o disfrutar a cualquier hora.',
'Espresso con una buena porción de leche y una textura suave. Para quienes disfrutan el café con un toque más cremoso.',
'Chocolate caliente de sabor dulce y reconfortante. Una taza para saborear con calma.'
],
frias:[
'Café en una bebida fría y cremosa, con textura de frappé. Una forma refrescante de hacer tu pausa.',
'Un frappuccino frío y cremoso con chips que le dan un toque dulce a cada sorbo.',
'El encuentro del café y el chocolate en una bebida fría, cremosa y con textura de frappé.',
'El sabor de la galleta Oreo en una bebida fría y cremosa. Un antojo para disfrutar a sorbitos.',
'Café espresso con leche y hielo: suave, fresco y con el sabor del café presente.',
'Espresso con agua y hielo, ligero al beber y con el aroma del café. Refrescante sin perder su carácter.',
'Elige frutos rojos o fresa y disfruta una bebida fría de sabor frutal y textura de smoothie.',
'La combinación de leche y chocolate de toda la vida. Dulce, suave y fácil de disfrutar.',
'Una malteada de fresa, fría y cremosa, para darle un toque dulce a tu break.',
'El sabor cítrico del limón en una bebida refrescante. Una compañía sencilla para tu comida.',
'Limón con agua mineral: una combinación cítrica y burbujeante para refrescar el momento.',
'Una bebida dulce y refrescante con el sabor clásico de la horchata. Va muy bien con algo rico de la carta.',
'Una opción fría y con burbujas para acompañar tu platillo. Pregúntanos por los sabores disponibles.',
'Agua embotellada para refrescarte y acompañar tu comida de forma sencilla.'
],
otros:[
'Un club sándwich acompañado de papas para una pausa con más antojo. Una combinación que invita a quedarse un rato.',
'Un sándwich de sabor sencillo, ideal cuando quieres algo práctico para acompañar tu bebida.',
'Tocino, lechuga y tomate entre pan: el contraste fresco y sabroso del clásico BLT.',
'Una mezcla de verduras para una pausa fresca. Una opción para acompañar tu día con algo ligero.',
'La ensalada de la casa, una opción fresca para cambiar de antojo. Pregúntanos por los ingredientes de nuestra preparación.',
'Totopos bañados en salsa y acompañados de pollo. El sabor de un clásico que siempre se antoja.',
'Chilaquiles con carne asada: totopos, salsa y el sabor de la carne en una combinación para disfrutar con hambre.',
'Cuatro piezas rellenas para elegir entre enchiladas o enfrijoladas. Salsa o frijoles: dos maneras de disfrutar un clásico.',
'Tres hotcakes estilo buttermilk, suaves y esponjosos. Una pausa dulce para acompañar con tu bebida favorita.',
'Dos molletes para disfrutar bocado a bocado. Un antojo salado que combina muy bien con un café.',
'Picaditas sencillas para disfrutar el sabor de un antojito tradicional. Pequeñas pausas que saben a casa.',
'La versión preparada de nuestras picaditas, para cuando se te antoja algo más. Pregúntanos por su preparación.'
]};
window.menu.forEach(c=>{if(descripciones[c.id])c.items.forEach((item,i)=>{item[2]=descripciones[c.id][i]})});
