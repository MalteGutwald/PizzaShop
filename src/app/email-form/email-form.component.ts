import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {
  dismiss: string | undefined;

  emailForm: FormGroup = this.fb.group({
    name: [''],
    content: [''],
    email: ['']
  })

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    ) { }

  	open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {
      }, (reason) => {
        this.dismiss = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if(reason ==='Submit'){
        
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
