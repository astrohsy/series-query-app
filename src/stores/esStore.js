import {observable} from 'mobx';
class esStore {
  @observable phrases = [];

  updatePhrases(newPhrases) {
    this.phrases = newPhrases;
    console.log(22, this.phrases);
    console.log('increment', this.phrases);
  }
}
export default new esStore();
