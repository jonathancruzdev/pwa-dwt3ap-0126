export function getUsers(callback) {
 console.log("⏳ Obteniendo usuarios...");

 setTimeout(() => {
   const users = [
     { id: 1, name: "Juan" },
     { id: 2, name: "Ana" }
   ];

   console.log("✅ Usuarios obtenidos");
   callback(users);
 }, 1500);
}


export function getCartsByUser(userId, callback) {
 console.log(`⏳ Obteniendo carrito del usuario ${userId}...`);

 setTimeout(() => {
   const carts = {
     1: { userId: 1, products: [101, 102] },
     2: { userId: 2, products: [103] }
   };

   console.log("✅ Carrito obtenido");
   callback(carts[userId]);
 }, 1500);
}

export function getProductsByIds(productIds, callback) {
 console.log("⏳ Obteniendo productos...");

 setTimeout(() => {
   const allProducts = {
     101: { id: 101, name: "Notebook", price: 1000 },
     102: { id: 102, name: "Mouse", price: 50 },
     103: { id: 103, name: "Teclado", price: 80 }
   };

   const products = productIds.map(id => allProducts[id]);

   console.log("✅ Productos obtenidos");
   callback(products);
 }, 1500);
}

