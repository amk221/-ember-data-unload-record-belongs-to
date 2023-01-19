import Route from '@ember/routing/route';
import { service } from '@ember/service';
import pushPayload from 'example/utils/push';

export default class ApplicationRoute extends Route {
  @service store;

  beforeModel() {
    pushPayload(this.store, 'foo', {
      foos: [
        {
          id: 1,
          name: 'Foo 1',
          bar: 1,
        },
        {
          id: 2,
          name: 'Foo 2',
          bar: 2,
        },
        {
          id: 3,
          name: 'Foo 3',
          bar: 3,
        },
      ],
      bars: [
        {
          name: 'Bar 1',
          id: 1,
        },
        {
          name: 'Bar 2',
          id: 2,
        },
        {
          name: 'Bar 3',
          id: 3,
        },
      ],
    });
  }
}
