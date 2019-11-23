import {observable} from 'mobx';
class esStore {
  @observable phrases = [];
  @observable searchPageLoading = false;

  updatePhrases(newPhrases) {
    this.phrases = newPhrases;
    this.searchPageLoading = false;
  }
}
export default new esStore();
