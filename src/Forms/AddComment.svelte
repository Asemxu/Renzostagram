<script>
    import Button from '../components/Shared/Button.svelte';
    import Input from '../components/Shared/Input.svelte';
    export let addComment = ""
    export let handleAddComment;
    export let idComment;
    let addCommentDom;

    const setComment = (e) =>{
        addComment =  e.target.value;
        addCommentDom = e.target;
    }
  
</script>
<style>
     .comments_add {
      padding: 1em 1em 1em 1em;
      border-top: 1px solid rgba(219, 219, 219, 0.8);
    }
    .comments_add form {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
</style>
<div class="comments_add">
    <form  on:submit={ (e) => e.preventDefault()}>
        <Input className={"addComment"} type={"text"} handleInput={setComment} placeholder={"Agregar comentario..."} />
        <Button className={ addComment.length > 0 ? "btn active" : "btn disabled"} action={() => handleAddComment(addCommentDom,addComment,idComment)} text={"Post"}/>
    </form>
</div>