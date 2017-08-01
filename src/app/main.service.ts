import { Injectable } from '@angular/core';

@Injectable()

export class MainService {

  parseLocalStorage(method: string, obj?) {
    switch (method) {
      case 'add':
        for (var key in obj) {
          sessionStorage.setItem(key, obj[key]);
        };
        var a = JSON.parse(localStorage.getItem('users'))
        a.push(obj)
        localStorage.setItem('users', JSON.stringify(a))
        console.log(localStorage.getItem('users'))
        return true;
      case 'get':
        if (sessionStorage.length) {
          return sessionStorage;
        } else {
          alert('User list is empty');
          return false;
        };
      case 'all': 
        if ((localStorage.length)&&(localStorage.getItem('users'))) { 
          return JSON.parse(localStorage.getItem('users'));
        } else {
          alert('User list is empty');
          return false;
        };
    }
  }

  
  checkValid(users, type, email?, password?) {
    let res = null;
    switch (type) {
      case 'email':
        users.forEach(function (elem) {
          if (elem.email == email) {
            res = elem;
          }
        });
        return res;
      case 'password':
        users.forEach(function (elem) {
          if ((elem.email == email)&&(elem.password == password)) {
            res = elem;
          }
        });
        return res;
    }
  }

}
