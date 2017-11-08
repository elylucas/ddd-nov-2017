import { Component, State } from '@stencil/core';

@Component({
  tag: 'ddd-section',
  styleUrl: 'ddd-section.scss'
})
export class Section {
  @State() speakers: any[] = [];
  @State() sessions: any[] = [];

  componentDidLoad() {
    fetch('http://codecampserver-prod.azurewebsites.net/events/denver-dev-day/details')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.speakers = data.speakers;
        this.sessions = data.sessions;
      });
  }

  render() {
    return (
      <div class="container-fluid mt-5">
        <ddd-speakers speakers={this.speakers} sessions={this.sessions} />
        <ddd-sessions speakers={this.speakers} sessions={this.sessions} />
      </div>
    );
  }
}
