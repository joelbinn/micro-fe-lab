import { Injector, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { DevAppComponent } from './dev-app.component'
import { TeamDoodlePageComponent } from './team-doodle-page/team-doodle-page.component'
import { TeamDoodleWidgetComponent } from './team-doodle-widget/team-doodle-widget.component'
import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [
    DevAppComponent,
    TeamDoodlePageComponent,
    TeamDoodleWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // DO NOT BOOTSTRAP!!! We only want to start WebComponentAppModule and register components
  // bootstrap: [DevAppComponent],
  entryComponents:[TeamDoodlePageComponent, TeamDoodlePageComponent] // These should be added dynamically
})
export class WebComponentAppModule {

  constructor(private readonly injector: Injector) {
    console.log("Team Doodle - WebComponentAppModule")
    // Convert `TeamDoodlePageComponent` to a custom element.
    const TeamDoodlePageElement = createCustomElement(TeamDoodlePageComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('tdo-page', TeamDoodlePageElement);

    // Convert `TeamDoodlePageComponent` to a custom element.
    const TeamDoodleWidgetElement = createCustomElement(TeamDoodleWidgetComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('tdo-widget', TeamDoodleWidgetElement);

    console.log("Initialized team doodle")
  }

  ngDoBootstrap() {
  }
}
