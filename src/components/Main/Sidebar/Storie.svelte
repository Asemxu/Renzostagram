<script>
    import { user } from '../../../store/store';
    export let storie
</script>
<style>
    .storie_item img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .storie_item {
      display: flex;
      align-items: center;
      margin: 0 0 0.5em 0;
    }
    .storie_item h2 {
      font-size: 14px;
      color: black;
      margin: 0 0 0 0.5em;
    }
    .storie_item h2 span {
      display: block;
      font-size: 9px;
      text-transform: uppercase;
      color: gray;
    }
    
    .storie_item_box {
      width: 32px;
      height: 32px;
      border: double 2px transparent;
      border-radius: 100%;
      background-image: linear-gradient(#fff, #fff),
        radial-gradient(circle at top left, #f09433, #bc1888);
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
</style>
<div class="storie_item">
    <div class="storie_item_box">
        <img src={storie.img} alt={storie.desription}/>
    </div>
    <h2>{$user.username} <span>{storie.date}</span></h2>
</div>