<script>
    import Card from './Timeline/Card.svelte';
    import  { user} from '../../store/store';
    let isLoading = false;
    let items = [
        {
            "id":1,
            "image":"https://www.gstatic.com/webp/gallery/1.webp",
            "description":"Este es un post genial",
            "username":"nataly",
            "ubicacion":"Cajamarca, Perú",
            "comentarios":[
                {
                    "id":1,
                    "comentario":"Este es un comentario",
                    "username":"Ivanny" 
                },
                {
                    "id":2,
                    "comentario":"Este es un comentario",
                    "username":"Renzo" 
                }
            ]
        },
        {
            "id":2,
            "image":"https://www.gstatic.com/webp/gallery/1.webp",
            "description":"Este es un post genial",
            "username":"nataly",
            "ubicacion":"Cajamarca, Perú",
            "comentarios":[
                {
                    "id":1,
                    "comentario":"Este es un comentario",
                    "username":"Ivanny" 
                }
            ]
        },
        {
            "id":3,
            "image":"https://www.gstatic.com/webp/gallery/1.webp",
            "description":"Este es un post genial",
            "username":"nataly",
            "ubicacion":"Cajamarca, Perú",
            "comentarios":[
                {
                    "id":1,
                    "comentario":"Este es un comentario",
                    "username":"Ivanny" 
                }
            ]
        },
        {
            "id":4,
            "image":"https://www.gstatic.com/webp/gallery/1.webp",
            "description":"Este es un post genial",
            "username":"nataly",
            "ubicacion":"Cajamarca, Perú",
            "comentarios":[
                {
                    "id":1,
                    "comentario":"Este es un comentario",
                    "username":"Ivanny" 
                }
            ]
        },
        {
            "id":5,
            "image":"https://www.gstatic.com/webp/gallery/1.webp",
            "description":"Este es un post genial",
            "username":"nataly",
            "ubicacion":"Cajamarca, Perú",
            "comentarios":[
                {
                    "id":1,
                    "comentario":"Este es un comentario",
                    "username":"Ivanny" 
                }
            ]
        }
    ]
    const handleAddComment = (inputComment,comentario,idPost) => {
        isLoading = true;
        inputComment.value = "";
        let postUser = items.find(item => item.id === idPost);
        let postUserIndex = items.findIndex(item => item.id === idPost);
        let newComment = {"id" : postUser.comentarios.length + 1 , "comentario" : comentario ,"username" : $user.username  , "isNew": true }
        items[postUserIndex].comentarios = [ ...items[postUserIndex].comentarios , newComment];
        isLoading = false;
    }
    
    const handleDeleteComment = (idPost,idComment) =>{
        isLoading = true;
        let postUser = items.find(item => item.id === idPost);
        let postUserIndex = items.findIndex(item => item.id === idPost);
        let commentsUser= postUser.comentarios.filter(item => item.id !== idComment);
        items[postUserIndex].comentarios = commentsUser;
        isLoading = false;
g    }

</script>
<style>
  .timeline {
    padding: 4em 0 0 0;
  }
</style>
<div class="timeline">
    <div class="timeline_container">

        {#each items as item}
           <Card {handleAddComment} {handleDeleteComment} {isLoading} {item} /> 
        {/each}
    </div>
</div>