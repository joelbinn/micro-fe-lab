import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';

const style = {
  backgroundColor: "#ace6c7",
  border: "solid #829dae 1px"
}

export interface TeamNoodlePageProps {

}

/**
 *
 */
const TeamNoodlePage: React.FC<TeamNoodlePageProps> = ({}) => {
  return (
    <div style={style}>TeamNoodlePage works!</div>
  )
}

export class TeamNoodlePageElement extends HTMLElement {
  private observer: MutationObserver;
  private shadow: ShadowRoot;

  constructor() {
    super();
    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, { attributes: true });
    this.shadow = this.attachShadow({mode: "open"});
  }

  connectedCallback() {
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  update() {
    this.unmount();
    this.mount();
  }

  mount() {
    render(<TeamNoodlePage />, this.shadow);
  }

  unmount() {
    unmountComponentAtNode(this);
  }
}

export default TeamNoodlePage
