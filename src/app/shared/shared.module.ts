import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderNewComponent } from './components/header-new/header-new.component';
import { WhatsappbtnComponent } from './components/whatsappbtn/whatsappbtn.component';

const components = [FooterComponent, HeaderNewComponent,WhatsappbtnComponent];

@NgModule({
  declarations: [components, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [components],
})
export class SharedModule {}  
