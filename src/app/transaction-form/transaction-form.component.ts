import { Component, Input } from '@angular/core';
import { ITransaction } from '../itransaction';
import { FormGroup } from '@angular/forms';
import { TRANSACTIONS } from '../mock-transaction';
import { TransactionService } from '../transaction.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {

  @Input() transactionAdd: ITransaction|undefined;

  constructor(private transactionService: TransactionService){

  }
  public form: FormGroup = new FormGroup({
    title: new FormGroup(''),
    value: new FormGroup(''),
    category: new FormGroup('')
  })

  // onSubmit(){
  //   if (this.form.valid){
      
  //     TRANSACTIONS.push(this.form.value);
  //     console.log(TRANSACTIONS);
  //     this.form.reset();
  //     this.transactionService.fetch();
      
  //   }else{
  //     console.log("nonononononono");
  //   }
  // }

  onSubmit(form: NgForm){
      TRANSACTIONS.push(this.form.value);
      this.form.reset();
      this.transactionService.fetch();
    }

}
