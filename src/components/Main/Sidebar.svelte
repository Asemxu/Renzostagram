<script>
    import Profile from './Sidebar/Profile.svelte';
    import Stories from './Sidebar/Stories.svelte';
    import Footer from './Sidebar/Footer.svelte';

</script>
<style>
    .sidebar {
      position: relative;
      padding: 4.5em 0 0 0;
    }
    .sidebar_container {
      position: fixed;
    }
    @media screen and (max-width:768px){
      .sidebar{
        display:none
      }
    }
  </style>
<div class="sidebar">
    <div class="sidebar_container">
        <Profile />
        <Stories />
        <Footer />
    </div>
</div>