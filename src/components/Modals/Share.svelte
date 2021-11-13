<style>
  .modal {
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 4px;
    background-color: white;
    width: 300px;
    height: 80px;
    position: fixed;
    z-index: 9;
    padding: 1em;
  }
  .modal-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-head h2 {
    font-size: 16px;
  }
 
  .modal-content a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 14px;
    margin: 2em 0 0 0;
  }
  
</style>

<div class="modal">
  <div class="modal-head lato">
    <h2>Compartir</h2>
    <span class="pointer pacifico" on:click>X</span>
  </div>
  <div class="modal-content lato">
    <a href="https://www.facebook.com/sharer/sharer.php?&u=https://pugstagram.co/" target="_blank">
      Compartir en facebook
    </a>
  </div>
</div>