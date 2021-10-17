<script>
    import { user } from '../../../store/store';
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
            <img src={$user.avatar} alt="avatar" class="avatar">
        </div>
        <div class="profile_info">
            <h2>{$user.username}</h2>
            <span>{$user.nombres} {$user.apellidos} </span>
        </div>
    </div>
</div>
