import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators';
import axios from 'axios';

type PostEntity = any;

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

@Module({
  name: 'PostsModule',
  namespaced: true,
  stateFactory: true,
})
export default class PostsModule extends VuexModule {

  private _posts: PostEntity[] = [];
  private _page: number = 0;

  get posts() {
    return this._posts;
  }

  get uri(): string {
    return `/posts?_page=${this._page}`
  }

  @Mutation
  mutationSetPosts(posts: PostEntity[]) {
    this._posts = posts;
  }

  @Mutation
  mutationIncrementPage() {
    this._page = this._page + 1;
  }

  @Action
  async fetchPosts() {
    try {
      this.mutationIncrementPage();
      const {data} = await axios.get(this.uri);
      this.mutationSetPosts(data);
    } catch (e) {
      console.error(e);
    }
  }
}