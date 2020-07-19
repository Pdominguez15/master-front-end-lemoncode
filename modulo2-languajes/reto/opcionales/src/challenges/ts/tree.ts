//Arbol
//¿Cómo generarías con TypeScript un tipado para estructuras en forma de árbol?
//Un árbol es una estructura que parte de un nodo raiz, a partir del cual salen más nodos.
//Cada nodo en un árbol puede tener hijos (más nodos) o no tenerlos (convirtiendose en un nodo final o una "hoja").

console.log("-------------------- Tree ----------------------------");

console.log(`
type Tree<T> = {
  value: T;
  children?: Tree<T>[];
};

const tree: Tree<number> = {
  value: 2,
  children: [
    { value: 9, children: [{ value: 2 }] },
    { value: 12, children: [{ value: 1 }, { value: 7 }, { value: 2 }] },
    { value: 8 },
    { value: 99, children: [{ value: 44 }, { value: 11 }] },
    { value: 10, children: [{ value: 55 }, { value: 87 }] },
  ],
};
`);

console.log("------------------------------------------------------");
