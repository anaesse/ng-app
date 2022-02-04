import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  posts: any = [];
  sends: any = [];
  postForm = this.formBuilder.group({
    title: "",
    userId: "",
    body: ""
  });

  constructor(private post: PostService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.post.get().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    })
  }

  sendPosts() {
    this.post.create(JSON.stringify(this.postForm.value)).subscribe(data => {
      this.sends = data;
      console.log(this.sends);
    })
  }
  onFormSubmit() {
    if (this.postForm.value.title !== '' || this.postForm.value.userId !== '' || this.postForm.value.body !== '') {
      this.sendPosts();
      this.postForm.reset();
    }
  }
  

}

