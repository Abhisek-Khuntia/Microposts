import{http} from './http';
import {ui} from './ui';

//get posts on Dom load
document.addEventListener('DOMContentLoaded', getPosts);
//add post
document.querySelector('.post-submit').addEventListener('click',submitPost);

//remove posts

document.querySelector('#posts').addEventListener('click',deletePost);

//enable edit

document.querySelector('#posts').addEventListener('click', enableEdit);

//getPosts

function getPosts(){
  http.get('http//localhost:3000/posts')
  .then(data=>ui.showPosts(data))
  .catch(err=>console.log(err));
}

//submit Post

function submitPost(){
  const title= documentquerySelector('#title').value;
  const body= documentquerySelector('#body').value;
  const id= documentquerySelector('#id').value;

  const data={
    title,
    body
  }

  if(title ==='' || body===''){
    ui.showAlert('please fill in the blanks','alert alert-danger');
  }else{

    if(id ===''){
      http.post('http://localhost:3000/posts',data)
      .then(data=>{
        ui.showAlert('Post-added' , 'alert alert-success')
        ui.clearFeilds();
        getPosts();
      })
      .catch(err=>console.log(err));
    }else{
      http.put(`http://localhost:3000/posts/${id}`,data)
      .then(data=>{
        ui.showAlert('post updated','alert alert-success');
        ui.changeFormState('add');
        getPosts();
      })
      .catch(err=> console.log(err));
    }
  }

  http.post(`http://locathost:300/posts/${id}`, data)
  .then(data=> {
    ui.showAlerts();
    ui.clearFeilds();
     getPosts();})
  .catch(err=>console.log(err));
}

function deletePost(e){
  if(e.target.parentElement.classlist.contains('delete')){
    const id= e.target.parentElement.dataset.id;
    if(confirm('Are you Sure ?')){
      http.delete(`http://localhost:3000/posts/${id}`)
      .then(data=>{
        ui.showAlert('Post Removed','alert alert-success');
        getPosts();
      }).catch(err=>console.log(err));
    }
  }
  e.preventDefault();
}

function enableEdit(e){
  if(e.target.parentElement.classlist.contains('edit')){
    const id= e.target.parentElement.dataset.id;
    const title= e.target.parentElement.previousElementSibling.previousElementSibling.textcontent;
    const body= e.target.previousElement.previousElementSibling.textcontent;

    const data={
      id,
      title,
      body
    }

    ui.fillForm(data);
  }

  e.preventDefault();

}