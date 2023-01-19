import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service store;

  get foo() {
    return this.store.peekRecord('foo', 1);
  }

  get foos() {
    return this.store.peekAll('foo');
  }

  get filteredFoos() {
    return this.foos.filter((foo) => {
      console.log(foo.id, !!this.foo?.bar);
      return foo.id !== this.foo.bar.id;
    });
  }

  @action
  destroyFoo() {
    this.foo.destroyRecord();
  }
}
