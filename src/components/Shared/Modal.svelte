<style>
    .modal {
      position: absolute;
      width:100%;
      height:100vh;
      display:flex;
      justify-content: center;
      align-items: center;
    }
    .modal_overlay {
      background-color: rgba(0, 0, 0, 0.7);
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 8;
      cursor: pointer;
    }
  </style>
<div class="modal">
    <div class="modal_overlay"/>
    <slot></slot>
</div>