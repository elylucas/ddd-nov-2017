import { Component, Prop } from '@stencil/core';
import { formatTime } from '../../utils/format-time';

@Component({
  tag: 'ddd-sessions',
  styleUrl: 'ddd-sessions.scss'
})
export class Sessions {
  @Prop() sessions: any[] = [];
  @Prop() speakers: any[] = [];

  render() {
    return (
      <div>
        <h2 id="sessions">Sessions</h2>

        <ul class="list-unstyled">
          {this.sessions.map(session => {
            let speaker = this.speakers.find(s => s.id === session.speakers[0].id);
            return (
              <li class="media mb-3">
                <a id="ss-ai" />
                <div class="media-body">
                  <h5 class="mt-0 mb-1">{session.title}</h5>
                  <div class="media">
                    <img class="mr-3 ssmall" src={speaker.imgUrl} title={speaker.fullName} />
                    <div class="media-body">
                      <p>
                        <a href="#sp-jnixon">{speaker.fullName}</a>
                        <br />
                        <a href="#sc-ai">
                          {formatTime(session.time)}, {session.room}
                        </a>
                      </p>
                    </div>
                  </div>
                  <p class="text-justify">{session.abstract}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
