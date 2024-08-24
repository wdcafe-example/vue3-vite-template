<template>
  <div class="intro">
    <v-container>
      <v-row>
        <v-col>
          <div class="intro-content">
            <h2>STUDY GROUPS</h2>
            <p class="mb-15">더 깊이 탐구하고, 더욱 풍성하게 만들어보세요!</p>
            <v-btn to="/home" class="btn border" variant="tonal" append-icon="mdi-arrow-right-thin-circle-outline" size="large">시작하기</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .intro {
    height: 100vh;
    overflow: hidden;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #942EFB;
  }
  .intro .intro-content {
    color: #fff;
    text-align: center;

    img{
      width: 100px;
    }
    h2{
      margin:30px 0 50px;
    }
  }

  @media (max-width: 768px) {
    .intro .intro-content h2 {
      font-size: 1.5rem;
    }
    .intro .intro-content p {
      font-size: 1.2rem;

      br{
        display: none;
      }
    }
  }
</style>
