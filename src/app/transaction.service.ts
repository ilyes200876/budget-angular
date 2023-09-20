import { Injectable } from '@angular/core';
import { TRANSACTIONS } from './mock-transaction';
import { ITransaction } from './itransaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  fetch(){
    console.log(TRANSACTIONS);
    
    return TRANSACTIONS;
  }
  fetchById(i: number){
    return TRANSACTIONS[i-1];
  }
}
