<script>
    import Storie from './Storie.svelte';
    let stories = [
        {
            "id":1,
            "img":"https://www.gstatic.com/webp/gallery/1.webp",
            "description":"Primera historia",
            "date":"08/10/2021 08:00:00",
        },
        {
            "id":2,
            "img":"https://www.gstatic.com/webp/gallery/1.webp",
            "description":"Segunda historia",
            "date":"08/10/2021 09:00:00"
        },
        {
            "id":3,
            "img":"https://www.gstatic.com/webp/gallery/1.webp",
            "description":"Tercera historia",
            "date":"08/10/2021 010:00:00"
        }
    ]
</script>
<style>
    .stories {
      border: 1px solid rgba(219, 219, 219, 1);
      border-radius: 4px;
      margin: 1em 0;
      padding: 0.5em 1em;
      background-color: white;
    }
    .stories_items {
      margin: 0.5em 0 0.5em 0;
    }
    .stories_head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5em 0 0 0;
    }
    .stories_head h2 {
      font-size: 12px;
      font-weight: 600;
    }
    .stories_head span {
      font-size: 12px;
      font-weight: normal;
      color: black;
    }
   
    
  </style>
<div class="stories">
    <div class="stories_container">
        <div class="stories_head">
            <h2 class="lato">Historias </h2>
            <span  class="lato">Ver todas </span>
        </div>
        <div class="stories_items">
            {#each stories as storie }
                <Storie {storie} />
            {/each}        
        </div>
    </div>
</div>