import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'ngx-dialogue-prompt',
  templateUrl: './dialogue-prompt.component.html',
  styleUrls: ['./dialogue-prompt.component.scss']
})
export class DialoguePromptComponent {

  role;

  constructor(protected ref: NbDialogRef<DialoguePromptComponent>, public loginService: LoginService) {
    this.role = loginService.getUserRole()?.role;
  }

  cancel(comment) {
    this.ref.close(comment);
  }

  submit(comment) {
    this.ref.close(comment);
  }

}
