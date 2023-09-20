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

  calculateDifference(transaction: ITransaction){
    let result =0;
    if(transaction.category == "Dépense"){
      result = result + transaction.value;
    }else{
      result = result - transaction.value
    }
    
    return result
  }
}
