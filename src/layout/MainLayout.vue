////////////////////////////////////////HTML////////////////////////////////////////////
<template>
  <v-app class="dashboard">
    <v-navigation-drawer 
    class="dashboard__aside"
    v-model="drawer"
    fixed
    bottom
    temporary>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      <v-list
        nav
        dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!--navigation drawer end-->
    <div class="dashboard__header">
      <v-toolbar dark height="55">
        <div class="dashboard__header-menu">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="btn-show-drawer"/>
          <span class="menu-text .text-{caption}">Menu</span>
        </div>  
        <div class="dashboard__search-bar-container">
          <v-text-field
            class="search-bar"
            hide-details
            label="Search Here"
            prepend-icon="mdi-magnify"
            single-line>
          </v-text-field>
        </div>
        <div class="d-flex pr-3 pl-3">
          <v-btn class="mr-1" elevation="0" small>
            <v-icon>notifications_none</v-icon>
          </v-btn>
          <v-btn elevation="0" small>
            <v-icon>email</v-icon>
          </v-btn>
        </div>
        <v-divider vertical class="mr-2  ml-2 " inset></v-divider>
        <v-btn elevation="0" small>
          <v-icon style="transform: rotate(180deg)">login</v-icon>
        </v-btn>
        <div class="profile d-flex align-center">
          <span class="profile__name mr-2 text-caption">John Foreman</span>
          <v-avatar class="profile__picture" size="40" style="border: 2px solid white">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </v-avatar>
        </div>
      </v-toolbar>
    </div>
    <!--dashboard header end-->
    <div class="dashboard-content">
      <v-container class="grey lighten-5">
        <v-row style="padding-bottom: 0!important, margin-bottom: 0!important">
          <v-col class="dashboard-content--header xs-12 sm-12 md-12 lg-12 xl-12">
            <div style="height: 50px" class="d-flex align-center">
              <h1>Dashboard</h1>
              <v-breadcrumbs class="ml-auto">Dashboard/dash</v-breadcrumbs>
            </div>
          </v-col>  
        </v-row><!--ROW end-->
        <v-row style="padding-top: 0!important, margin-top: 0!important">
          <v-col class="xs-12 sm-12 md-12 lg-12 xl-12">
            <!--Welcome Container-->
            <v-card class="welcome-container d-flex align-center pa-3 rounded-pill" elevation="2" tile>
              <!--Welcome Text-->
              <span  style="color: #04b17d, font-size: 1rem" class="welcome-text font-weight-black ml-2">Welcome John Foreman</span>
              <v-spacer></v-spacer>
              <!--Date Span-->
              <div style="height: 50px" class="date-span d-flex ml-auto mr-5">
              <!--Initial Date-->
                <v-menu class="initial-date"
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Initial Date"
                      prepend-icon="today"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="menu = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
                <!--Final Date-->
                <v-menu class="Final-date"
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Final Date"
                      prepend-icon="insert_invitation"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="menu = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </div>
              <!--Date Span-->
              <div style="margin-left: auto" class="welcome-icons d-flex align-center mr-2">
                <v-btn style="background-color: transparent"  small elevation="0">
                  <v-icon style="color: #04b17d">forward_to_inbox</v-icon>
                </v-btn>
                <v-btn style="background-color: transparent, margin-rigth: 2rem" small elevation="0">
                  <v-icon class="welcome-icons__bug" style="color: red">bug_report</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>  
        </v-row><!--ROW end-->
        <v-row>
            <v-col class="xs-12 sm-12 md-6 lg-4 xl-4">
              <v-card class="pa-1" elevation="2" tile>CARD CARD CARD CARD</v-card>
            </v-col>
            <v-col class="xs-12 sm-12 md-6 lg-4 xl-4">
              <v-card class="pa-1" elevation="2" tile>CARD CARD CARD CARD</v-card>
            </v-col>
            <v-col class="xs-12 sm-12 md-6 lg-4 xl-4">
              <v-card class="pa-1" elevation="2" tile>CARD CARD CARD CARD</v-card>
            </v-col>
            <v-col class="xs-12 sm-12 md-6 lg-4 xl-4">
              <v-card class="pa-1" elevation="2" tile>CARD CARD CARD CARD</v-card>
          </v-col>  
        </v-row><!--ROW end-->
        <v-row>
          <v-col>
            <v-card class="pa-6" elevation="2" tile>CARD CARD CARD CARD</v-card>
          </v-col>
          <v-col>
            <v-card class="pa-6" elevation="2" tile>CARD CARD CARD CARD</v-card>
          </v-col>  
        </v-row><!--ROW end-->
      </v-container>
    </div>
    <!--dashboard content end-->
    <div class="dashboard-content">
    </div>
    <!--dashboard footer end-->
  </v-app>
  <!--dashboard end-->
</template>





////////////////////////////////////////SCRIPT/////////////////////////////////////////
<script>
export default {
  name: "MainLayout",
  data() {
    return {
      drawer: false,
      group: null
    } 
  },
  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>

/////////////////////////////////////////STYLE//////////////////////////////////////////
<style lang="scss">
  /*Color*/
  $blue-grey-darken-4: #263238;
  $grey-lighten-1: #BDBDBD;
  $light-green: #8BC34A;
  $green-neon-2: #04b17d;
  //
  /*Icon-Size*/ 
  $icon-size: 10px!important;
  //
  $color-pack: true;
  $sideLeftActive: 256px;
  $sideLeft: 65px; 
  $sideRightActive:  calc(100% - $sideLeftActive);
  $sideRight:  calc(100% - $sideLeft);
  //

  /*Reset*/
  * {
    font-family: 'Roboto', 'Open Sans' ,sans-serif;
  }
  html {
    overflow: hidden!important;
  }
  html,
  body {
    width: 100%;
    min-height: 100vh;
  }
  .container {
    max-width: 100%!important;
    padding-right: 2rem;
    padding-left: 2rem;
    padding-top: 1.2rem;
  };
  .col {
    padding: 1rem;
  }

  /*De-Facto*/
  .dashboard {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    min-height: 100vh;

    /*Aside*/
    &__aside {
      width: 256px;
      height: 100%;
    }

    /*Header*/
    &__header {
      
    }

    &__header-menu {
      display: flex;
      height: 100%;
      align-items: center;
    }
    
    &__search-bar-container {
      flex: 1;
      margin-left: 2rem;
    }

    /*Content*/
    &__content {

    }
    
    /*Footer*/
    &__footer {

    }
  }

  ////////////////////////////MEDIA SCREENS/////////////////////////////////////////////
  @media only screen and (max-width: 644px) {
    .menu-text {
      display: none;
    }
  };
  @media only screen and (max-width: 588px) {
    .profile__picture, .profile__name {
      display: none;
    }
  };
  @media only screen and (max-width: 464px) {
    .search-bar {
      display: none;
    }
  };
   @media only screen and (max-width: 390px) {
    .welcome-container {
      flex-wrap: wrap;
      justify-content: center;
    };
    .welcome-icons {
      margin-left: 0!important;
      &__bug {
        margin-right: 0!important
      }
    }
  }
</style>