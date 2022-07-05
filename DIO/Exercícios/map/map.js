// Atividade 1: Maps
// Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
// 1 - Crie uma função getADMINs que recebe um Map;
// 2 - Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'ADMIN');
// 3 - Dentro de getADMINs, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são ADMINistradores.

//FEITO PELA INSTRUTORA - NÃO TEM O MESMO CONFLITO QUE O MEU
const getAdmins = (map) => {
  let admins = [];

  for ([key, value] of map) {
    if (value === 'ADMIN') {
      admins.push(key)
    }
  }
  return admins
}

// FEITO POR MIM - COM O MAP DE MEMBROS EMBAIXO DA ERRO - POSSIVELMENTE PQ EU CHAMEI A FUNÇÃO ANTES DOS MEMBRROS
// function getAdmins () {
//   for (const [key, value] of members) {
//     if (value == 'ADMIN') {
//     console.log(`${key} é ADMIN`)
//     }
//   }
// }; getAdmins();

const members = new Map()

members.set('Eliane', 'ADMIN');
members.set('Isaque', 'ADMIN');
members.set('Everton', 'ADMIN');

members.set('Carlos', 'USER');
members.set('Evelyn', 'USER');
members.set('Patricia', 'USER');
members.set('Julia', 'USER');
members.set('Roberto', 'USER');
members.set('Marcelo', 'USER');

console.log(getAdmins(members));
//console.log(members);