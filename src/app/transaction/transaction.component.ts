import { Component, OnInit } from '@angular/core';
import { ITransaction } from '../itransaction';
import { TransactionService } from '../transaction.service';
import {NgForm} from "@angular/forms";
import { FormGroup } from '@angular/forms';
import { TRANSACTIONS } from '../mock-transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{

  transactions: ITransaction[] = [];
  transactiont: ITransaction|undefined;
  result: number = 1000;

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

  balance(transaction: ITransaction){
    this.result = this.transactionService.calculateDifference(transaction)
  }

  public form: FormGroup = new FormGroup({
    title: new FormGroup(''),
    value: new FormGroup(''),
    category: new FormGroup('')
  })

  
  onSubmit(form: NgForm){
    TRANSACTIONS.push(form.value);
    form.reset();
    this.getAll();
  }



  
 

}
