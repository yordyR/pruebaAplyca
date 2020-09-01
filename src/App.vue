<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }  
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bl-addUser{
  height: 5rem;
}
.bl-addUser .icon-more{
  margin: 1rem 1.5rem 1rem 1rem;
  position: relative;
}
.bl-addUser .icon-more:after{
  position: absolute;
  border-bottom: 2px solid white;
  width: 16px;
  height: 2px;
  top: 35%;
  left: 0;
  margin-left: -7px;
}
.bl-content{
  position: absolute;
  right: 0;
  width: 80%;
}
.bl-content-width{
  position: absolute;
  right: 0;
  width: 96%;
}
.bl-header{
  background-color: white;
  padding: 0.6rem 2.5rem 0.8rem 2rem;
  margin-right: 2rem;
}

.bl-header-toogle .icon-toggles {
  position: absolute;
  width: 15px;
  height: 3rem;
}
.bl-header-toogle .icon-toggle {
  position: absolute;
  left: 0%;
  right: 0;
  top: 40.38%;
  bottom: 57.69%;
  border: 0.4px solid #A0A5BA;
}
.bl-header-toogle .icon-toggle1 {
  position: absolute;
  left: 0%;
  right: 0px;
  top: 50%;
  bottom: 48.08%;
  border: 0.4px solid #A0A5BA;
}
.bl-header-toogle .icon-toggle2 {
  position: absolute;
  left: 45.93%;
  right: 0%;
  top: 62.62%;
  bottom: 38.46%;
  border: 0.4px solid #A0A5BA;
}
.bl-header-toogle{
  width: 70%;
  display: inline-block;
}
.bl-header-avatar{
  width: 30%;
  display: inline-block;
  text-align: right;
}
.bl-header-avatar .img-avatar{
  background: #F4E6AD;
  border-radius: 50%;
  padding: .2rem .2rem 0 0;
  vertical-align: middle;
}
.bl-menu{
  height: 100vh;
  left: 0px;
  top: 0px;
  padding: 1rem 2rem;
  background: #FFFFFF;
  box-shadow: 4px 0px 4px rgba(43, 45, 55, 0.01);
}
.bl-sidebar{
  position: fixed;
  width: 17%;
  z-index: 5;
}
.bl-sidebar--hiden{
  display: none;
}
.bl-table{
  background-color: white;
  padding: 1.5rem 1.5rem;
  margin: 1rem 2rem 0rem 0rem;
  border-top-right-radius: .3rem;
  border-top-left-radius: .3rem;
}
body{
  background-color: #F2F2F2;
  margin-top: 0px;
}
.btn-add{
  border-radius: 8px;
  padding: 1rem 3rem 1rem 1rem;
  color: white;
  text-decoration: none;
  position: absolute;
  left: 0;
  margin-top: 1.5rem;
}
.btn-azul{
  background: #0054FE;
}

.icon-user i{
  position: absolute;
  padding-right: .5rem
}
.icon-user .icon-user-2{
  font-size: 12px;
  margin-left: 8px;
  margin-top: -3px;
}

.m-0{
  margin: 0;
}
.nav-list--menu{
  list-style: none;
  padding: 0;
}

.nav-list--menu li{
  text-align: left;
  padding-left: 3rem;
  position: relative;
  font-weight: 600;
  font-size: 14px;
  padding-bottom: 1rem;
}
.nav-list--menu li a{
  color: #000000;
  text-decoration: none;
}
.nav-list--menu .icon-user{
  position: absolute;
  left: 0;
}

table{
  width: 100%;
  margin-right: 2rem;
  text-align: left;
  border-spacing: 0px;
}
table thead{
  color: #9B9EAC;
  font-size: 14px;
}
table tbody td {
  padding: 2rem 1rem 2rem 1rem;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
  color: #20253A;
}
table tbody tr:nth-of-type(odd){
  background-color:#F5F6FA;
}
table thead tr th{
  padding: 2rem 1rem;
}
.table-responsive{
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.text-left{
  text-align: left;
}
.text-logo{
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 52px;
  text-align: left;
}
.text-titulo{
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  color: #20253A;
  padding-left: 1rem;
}
.text-tituloDashboard{
  font-weight: 500;
  font-size: 14px;
  line-height: 52px;
  /* identical to box height, or 371% */
  color: #74798C;
  padding-left: 2rem;
}
.text-usuario{
  font-weight: 500;
  font-size: 14px;
  line-height: 52px;
  color: #74798C;
  vertical-align: middle;
  padding-left: 1rem;
}


/* Libraria icomon */
@font-face {
  font-family: 'icomoon';
  src:  url('./assets/icommon/fonts/icomoon.eot?b3ll1i');
  src:  url('./assets/icommon/fonts/icomoon.eot?b3ll1i#iefix') format('embedded-opentype'),
    url('./assets/icommon/fonts/icomoon.ttf?b3ll1i') format('truetype'),
    url('./assets/icommon/fonts/icomoon.woff?b3ll1i') format('woff'),
    url('./assets/icommon/fonts/icomoon.svg?b3ll1i#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-Oval:before {
  content: "\e900";
  color: #a0a5ba;
}

.icon-user-1:before {
  content: "\e904";
  color: #3b5ce7;
}
.icon-user-2:before {
  content: "\e905";
  color: #3b5ce7;
}
.icon-more:before {
  content: "\e906";
  color: white;
  background-color: white;
}
.icon-more:after {
  content: "";
  color: white;
}



/* RESPONSIVE */


/* Para 800px */  
@media only screen and (max-width: 820px) {  
  .bl-sidebar{
    width: 50%;
    right: 0;
    border-left: 1px solid #80808066;
  }
  .bl-content{
    width: 96%;
  }

}

/* Para 800px */  
@media only screen and (max-width: 500px) {  

  .bl-header{
    padding: 0.6rem 1rem 0.8rem 1rem;
    margin-right: 0rem;
  }
  .bl-header-toogle{
    width: 40%;
  }
  .bl-header-avatar {
    width: 60%;
  }
  .bl-content-width, .bl-content{
    width: 100%;
  }
  .bl-sidebar{
    width: 70%;
  }
  .bl-table{
    margin: 1rem 0rem 0rem 0rem;
  }
}
</style>
