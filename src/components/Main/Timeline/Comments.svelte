<script>
	import AddComment from './../../../Forms/AddComment.svelte';
    import Comment from './Comment.svelte'
    export let handleAddComment;
    export let comentarios;
    export let idComment;
    export let handleDeleteComment;
    let addComment
</script>

<style>
    .comments_content {
      padding: 0 1em 0.5em 1em;
    }
    .comments_users {
      margin: 0.25rem 0 0 0.25rem;
      display: block;
    }
  </style>
  
<div class="comments">
    <div class="comments_content">
        <div class="comments_users">
            {#each comentarios as comentario}
                <Comment {idComment} {handleDeleteComment} {comentario}/>
            {/each}
        </div>
        <AddComment {idComment} {handleAddComment} {addComment}/>
    </div>
    
</div> 