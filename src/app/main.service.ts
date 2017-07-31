import { Injectable } from '@angular/core';

@Injectable()

export class MainService {

  parseLocalStorage(method?: string, obj?) {
    switch (method) {
      case 'add':
        for (var key in obj) {
          localStorage.setItem(key, obj[key]);
        };
        return true;
      case 'get':
        if (localStorage.length) {
          return localStorage;
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

  
  checkValid(users, type, email, password?) {
    let res = false;
    switch (type) {
      case 'email':
        users.forEach(function (elem) {
          if (elem.email == email) {
            res = true;
            console.log('true')
          }
        });
        return res;
      case 'password':
        users.forEach(function (elem) {
          if ((elem.email == email)&&(elem.password == password)) {
            res = true;
          }
        });
        return res;
    }
  }

}
