import { Component, OnInit } from '@angular/core';
import { ITransaction } from '../itransaction';
import { TransactionService } from '../transaction.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{

  transactions: ITransaction[] = [];
  transactionParent: ITransaction|undefined;

  constructor(private transactionService: TransactionService){}

  ngOnInit(): void {
    this.getAll();
    this.getById(0);
  }

  getAll(){
    this.transactions = this.transactionService.fetch();
  }

  getById(i: number){
    this.transactionService.fetchById(i)
  }

  
  



  
 

}
