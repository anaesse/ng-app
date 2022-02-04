import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  posts: any = [];
  updates: any = [];
  deletes: any = [];

  constructor(private post: PostService) { }
  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.post.get().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    })
  }

  onTitleUpdate(postId: number){
    const updatePost = { id : postId, title: 'updated'};
    this.post.update(postId,updatePost).subscribe(data =>{
      this.updates= data
     console.log(this.updates);
      });
    ;
  }

  onTitleDelete(postId:number, i:number){
    this.posts.splice(i,1);
    this.post.remove(postId).subscribe(data =>{
      this.deletes= data
     console.log(this.deletes);
      });;
  }
}
