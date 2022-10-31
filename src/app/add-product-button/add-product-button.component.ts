import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'add-product-button',
  templateUrl: './add-product-button.component.html',
  styleUrls: ['./add-product-button.component.scss']
})
export class AddProductButtonComponent{
  dismiss: string | undefined;
 
  addForm: FormGroup = this.fb.group({
    name: [''],
    info: [''],
    description: [''],
    price: [''],
  })
  
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private http: HttpClient
    ) {}

  	open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.dismiss = `Closed with: ${result}`;
      }, (reason) => {
        this.dismiss = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    submit(name: string, info: string, description: string, price: string){
      
      this.http.post(
        'https://maltestore-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
         {name: name, info: info, description: description, price:price}
       ).subscribe();
    }

    private getDismissReason(reason: any): string {
      if(reason ==='Submit'){
        this.submit(this.addForm.value.name, this.addForm.value.info, this.addForm.value.description, this.addForm.value.price);
      }
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
}
