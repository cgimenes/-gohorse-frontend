<template>
  <div class="notfound">
    <v-container justify-center>
      <v-layout row="row">
        <v-flex xs12>
          <v-flex id="content">
            <h1>Erro 404</h1>
            <h2>Página não encontrada</h2>
          </v-flex>
          <v-flex class="notfound__img"><img width="200px" src="/static/404dog.jpg" /></v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
  #content{
    width: 400px;
    justify-content: center;
  }
  .notfound {
    display: table;
    margin: 100px auto;
    justify-content: center;
  }
  .notfound .notfound__img img{
    display: block;
    margin: 10px auto;
  }
  h1,h2{
    text-align: center;
    color: #424242;
  }

</style>
