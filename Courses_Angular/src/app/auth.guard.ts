// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   console.log('fdfdffd')
//   const user = sessionStorage.getItem('currentUser');
//   debugger
// return false
//   // if (user) return true;
//   // return false;
// };
 
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const user = sessionStorage.getItem("currentUser");

  return !!user;
  // if (user)
  //   return true;
  //   // const lecturer = localStorage.getItem("lecturer");
  //   // if (lecturer)
  //   //   return true;
  // return false;
};