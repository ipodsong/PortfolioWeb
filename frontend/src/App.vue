<template>
  <div>
    <header>
      <home>Song's Portfolio</home>
      <div class="nav-container">
        <nav class="topbar-main">
          <menu>
            <router-link to="profile" class="link">프로필</router-link>
          </menu>
          <menu>
            <router-link to="stack" class="link">기술스택</router-link>
          </menu>
          <menu>
            <router-link to="project" class="link">프로젝트</router-link>
          </menu>
        </nav>
        <nav class="topbar-sidemenu" v-on:click="toggleSideBar()">
          <svg viewBox="0 0 100 80" width="40" height="40" style="fill:hsl(214deg 100% 15%)">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </nav>
      </div>
    </header>
    <div id="side-bar" class="side-bar">
      <menu class="side-item">
        <router-link to="profile" class="link">프로필</router-link>
      </menu>
      <menu class="side-item">
        <router-link to="stack" class="link">기술스택</router-link>
      </menu>
      <menu class="side-item">
        <router-link to="project" class="link">프로젝트</router-link>
      </menu>
  </div>
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    let menuClass = document.querySelectorAll('menu');
    for(let i=0;i<menuClass.length;i++){
      menuClass[i].addEventListener('click', this.closeSideBar);
    }
  },
  methods: {
    toggleSideBar: function (event) {
      let sidebar = document.getElementById('side-bar');
      if(sidebar.classList.length == 1)
        sidebar.setAttribute('class', 'side-bar slide-animation')
      else
        sidebar.setAttribute('class', 'side-bar')
    },
    closeSideBar: function (event) {
      let sidebar = document.getElementById('side-bar');
      sidebar.setAttribute('class', 'side-bar')
    }
  }
}
</script>

<style>
  body{
    margin: 0;
  }
  header{
    position: sticky;
    z-index: 1;
    width: 100%;
    height: 75px;
    padding: 1rem;
    color: black;
    background: hsl(210deg 19% 96%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.8;
  }
  home{
    min-width: 250px;
    font-size: 2rem;
    color: hsl(214deg 100% 15%);
    font-weight: bold;
  }
  nav{
    display: flex;
    margin-right: 50px;
  }
  menu{
    font-size: 1.2rem;
    font-weight: bold;
    color: hsl(214deg 100% 15%);
    cursor: pointer;
  }
  .nav-container{
    display: flex;

  }
  .topbar-sidemenu{
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .link{
    text-decoration-line: none;
    color: inherit;
  }
  .side-bar{
    position: absolute;
    right: 0px;
    display: none;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 25%;
    height: 88%;
    padding-top: 3rem;
    background-color: hsl(210deg 19% 96%);
  }
  .side-item{
    padding: 0px;
  }
  .slide-animation{
    display: flex;
  }

  @media screen and (max-width: 800px) {
    .topbar-main{
      display: none;
    }
  }
</style>
