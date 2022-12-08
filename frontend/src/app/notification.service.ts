import { Injectable } from '@angular/core';


import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  message: string = '';
  title: string = '';


  showSuccess(message: any, title: any){
      this.toastr.success(message, title)
  }

  /*showError(message, title){
      this.toastr.error(message, title)
  }

  showInfo(message, title){
      this.toastr.info(message, title)
  }

  showWarning(message, title){
      this.toastr.warning(message, title)
  }*/
}
