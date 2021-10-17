import { NgModule } from '@angular/core'
import { DevAppComponent } from './dev-app.component'
import { WebComponentAppModule } from './web-component-app.module'

@NgModule({
  declarations: [
  ],
  imports: [
    WebComponentAppModule
  ],
  providers: [],
  bootstrap: [DevAppComponent]
})
export class DevAppModule {
}
