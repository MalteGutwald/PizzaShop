import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'edit-product-button',
  templateUrl: './edit-product-button.component.html',
  styleUrls: ['./edit-product-button.component.scss']
})
export class EditProductButtonComponent {
  @Input() key: string | undefined;
  dismiss: string | undefined;

  editForm: FormGroup = this.fb.group({
    name: [''],
    info: [''],
    description: [''],
    price: [''],
  })

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private http: HttpClient) { }

  	open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.dismiss = `Closed with: ${result}`;
      }, (reason) => {
        this.dismiss = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    edit(name: string, info: string, description: string, price: string){
        this.http.put(
          'https://maltestore-default-rtdb.europe-west1.firebasedatabase.app/posts/' + this.key + '.json',
          {name: name, info: info, description: description, price:price}
         ).subscribe();
    }
    delete(){
      this.http
      .delete(
        'https://maltestore-default-rtdb.europe-west1.firebasedatabase.app/posts/'+ this.key +'.json').subscribe()
    }

    private getDismissReason(reason: any): string {
      if(reason ==='Submit'){
        this.edit(this.editForm.value.name, this.editForm.value.info, this.editForm.value.description, this.editForm.value.price);
      }
      if(reason ==='Delete'){
        this.delete();
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
