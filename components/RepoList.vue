<script setup lang="ts"> 
import type { Repo } from './types';
 
const props = defineProps<{
  repos:Repo[], 
}>()

 
</script>
<script lang="ts">
import RepoCard from './RepoCard.vue'

export default {
  data(){
    return {

    }
  }
}
</script>
<template>
  <div  class="repolist">
    <div class="container">
      <div class="items">
        <div
          v-for="repo of repos"
          :key="repo.name"
          class="item" 
        > 
          <RepoCard :repo="repo" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.repolist {
  position: relative;   
  padding: 0 4px;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item{
    width: 100%;
  }
}

@media (min-width: 768px) {
  .item{
    width: calc(100% / 2);
  }
}

@media (min-width: 960px) {
  .item {
    width: calc(100% / 3);
  }
}
 
</style>