import { Component, Prop } from '@stencil/core';
import { formatTime } from '../../utils/format-time';

@Component({
  tag: 'ddd-speakers',
  styleUrl: 'ddd-speakers.scss'
})
export class Speakers {
  @Prop() speakers: any[] = [];
  @Prop() sessions: any[] = [];

  render() {
    return (
      <div class="container-fluid mt-5">
        <h2 id="speakers">Speakers</h2>
        <ul class="list-unstyled">
          {this.speakers.map(speaker => {
            return (
              <li class="media mb-3">
                <img class="mr-3 small" src={speaker.imgUrl} alt={speaker.fullName} />
                <div class="media-body">
                  <h5 class="mt-0 mb-1">{speaker.fullName}</h5>
                  <p class="text-justify">{speaker.bio}</p>

                  {this.sessions
                    .filter(session => {
                      return session.speakers.find(x => x.id === speaker.id);
                    })
                    .map(session => {
                      return (
                        <p>
                          <a href="#ss-ddb">{session.title}</a>
                          <br />
                          <a href="#sc-ddb">
                            {formatTime(session.time)}, {session.room}
                          </a>
                        </p>
                      );
                    })
                  }
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


