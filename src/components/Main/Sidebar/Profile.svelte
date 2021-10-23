<script>
    import { user } from '../../../store/store';
    import Lazy from 'svelte-lazy';

</script>
<style>
    .profile_content {
      display: flex;
      align-items: center;
    }
    .profile_avatar img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    .profile_info {
      margin: 0 0 0 0.5em;
    }
    .profile_info h2 {
      font-size: 14px;
      color: black;
      margin: 0;
      padding: 0;
    }
    .profile_info span {
      font-size: 12px;
      font-weight: normal;
    }
  </style>
<div class="profile">
    <div class="profile_content">
        <div class="profile_avatar">
          <Lazy height={100} fadeOption={{delay:0,duration:300}} placeholder={"Cargando..."}>
            <figure>
              <img src={$user.avatar} alt="avatar" width="100%" height="100%" class="avatar">
            </figure>
          </Lazy>
        </div>
        <div class="profile_info lato">
            <h2>{$user.username}</h2>
            <span>{$user.nombres} {$user.apellidos} </span>
        </div>
    </div>
</div>
