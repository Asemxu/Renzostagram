<script>
    import Comments from './Comments.svelte';                   
    import { settings , heart_like , heart , book , book_mark, share } from '../../../Images/assets';
    import Loader from '../../../components/Layout/Loader.svelte'
    import { user } from '../../../store/store';
    export let item;
    export let handleAddComment;
    export let handleDeleteComment;
    export let isLoading;
    export let title = "Cargando ......"
    let isLiked = false;
    let isBook = false;
    let idComment = item.id;
    const isClickLiked = () =>{
        !isLiked ? user.update( n =>{
          n.likes++;
          return n;
        }) : user.update(n =>{
          n.likes--;
          return n;
        });
        isLiked = !isLiked;
    }
    
</script>
<style>
    .card{
      border: 1px solid rgba(219, 219, 219, 1);
      border-radius: 4px;
      background-color: white;
      margin: 0 0 2em 0;
    }
    .card_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1em;
    }
    .card_user {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .card_user img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .card_user h2 {
      margin: 0;
      padding: 0;
      font-size: 14px;
      font-weight: 600;
      margin: 0 0 0 1em;
      color: black;
    }
    .card_user h2 span {
      display: block;
      font-size: 12px;
      font-weight: normal;
      color: rgba(38, 38, 38, 0.7);
    }
    .card_photo {
      padding: 0;
      margin: 0;
    }
    .card_photo img {
      width: 100%;
      height: auto;
    }
    .card_photo figure {
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
    .card_settings img {
      cursor: pointer;
    }
    .card_icons {
      padding: 1em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card_icons img {
      margin: 0 1em 0 0;
      cursor: pointer;
      font-size: 20px;
    }
    .card_icons img:last-child {
      margin: 0;
    }
    .card_description {
      padding: 0 1em 1em 1em;
    }
    .card_description h3 {
      font-size: 14px;
      font-weight: bold;
      color: black;
    }
    .card_description span {
      font-size: 14px;
    }
 
  
    @keyframes bounce {
      0% {
        transform: translate(0px, 0px);
      }
      15% {
        transform: translate(0px, -25px);
      }
      30% {
        transform: translate(0px, 0px);
      }
      45% {
        transform: translate(0px, -15px);
      }
      60% {
        transform: translate(0px, 0px);
      }
      75% {
        transform: translate(0px, -5px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }
  </style>
  

<div class="card">
    <div class="card_container">
        <div class="card_header">
            <div class="card_user">
                <img src={item.image} width height alt={item.description} />
                <h2>
                    {item.username}
                    <span>{item.ubicacion}</span>
                </h2>
            </div>
            <div class="card_settings">
                <img class="icon" src={settings} alt="font awesome"/>
            </div>
        </div>
        <div class="card_photo">
            <figure>
                <img src={item.image} alt={item.description} />
            </figure>
        </div>
        <div class="card_icons">
            <div class="card_icons_first">
                <img on:click={isClickLiked} src={!isLiked ? heart_like : heart} alt="fontawesome" class="icon" />
                <img src={share} alt="fontawesome" class="icon" />
            </div>
            <div class="card_icons_second">
                <img on:click={()=>{ isBook = !isBook }} src={!isBook ? book : book_mark} class="icon" alt="fontawesome" />
            </div>
        </div>
        <div class="card_description">
            <h3>{item.username}</h3>
            <span>{item.description}</span>
        </div>
        {#if isLoading}
            <Loader {title}/>
        {:else}
            <Comments {idComment} {handleDeleteComment} {handleAddComment} comentarios={item.comentarios} />
        {/if}
    </div> 
</div>