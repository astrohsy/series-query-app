import {observable} from 'mobx';
class esStore {
  @observable phrases = [];

  updatePhrases(newPhrases) {
    this.phrases = newPhrases;
  }
}
export default new esStore();
