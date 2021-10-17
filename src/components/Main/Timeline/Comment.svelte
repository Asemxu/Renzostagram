<script>
  import Button from '../../Shared/Button.svelte';
  export let comentario
  export let handleDeleteComment
  export let idComment
</script>
<style>
  .comment{
    display:flex;
    justify-content: space-between;
  }
  .comment_info{
      display:flex;
      margin:0.25rem 0;
  }
  .comment_info h3 {
    font-size: 14px;
    color: black;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  .comment_info span {
    font-size: 14px;
    margin: 0 0 0 0.5em;
    font-weight: normal;
    color: rgba(black, 0.9);
  }
</style>
<div class="comment">
  <div class="comment_info">
    <h3>{comentario.username}</h3>
    <span>{comentario.comentario}</span>
  </div>
  {#if comentario.isNew}
     <Button text={"Eliminar"}  action={() => handleDeleteComment(idComment,comentario.id)} className={"btn"}  />
  {/if}
</div>