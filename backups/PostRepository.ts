import axios from 'axios';

type Post = any;

export class PostRepository {

  private _pageNumber: number = 1;
  private _posts: any;

  postList() {
    console.log('this.posts', this._posts);
    console.log('this.url', this.getUrl());
    console.log('this.pageNumber', this._pageNumber);
    return this._posts;
  }

  getUrl() {
    return `https://jsonplaceholder.typicode.com/posts?_page=${this._pageNumber}`;
  }

  async initialLoad() {
    this._posts = await axios.get(this.getUrl());
  }

  getNextPage($state: any) {
    setTimeout(() => {
      this._pageNumber++;
      const self = this;
      axios.get(this.getUrl())
        .then((response) => {
          if (response.data.length > 1) {
            // response.data.forEach((item: any) => {
            //   self._posts.data.push(item)
            // });
            debugger
            console.warn('posts antes', self._posts.data);
            self._posts.data = [...self._posts.data, ...response.data];
            console.warn('posts despues', self._posts.data);
            $state.loaded();
          } else {
            $state.complete()
          }
        })
        .catch((err) => {console.error(err)})
    }, 500)
  }
}