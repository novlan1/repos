
<template>
    <div class="repo-card"  target="_blank">
        <div class="header">
            <span class="title">  {{ repo.title  }} </span>   
            <span class="info"><ForkIcon/>{{ repo.forks }}</span>
            <span class="info"><StarIcon/>{{ repo.stars }}</span>            
        </div>
        <div class="body">
            {{ repo.description  }}   
        </div>         
        <div class="actions">
            <VPButton text="Home" :href="repo.homepage && repo.homepage.length ==0 ? repo.url : repo.homepage" ></VPButton>
            <VPButton text="Github" :href="repo.url" theme="alt"/>
        </div>
    </div>
</template>

<script setup lang="ts"> 
import type { Repo } from './types'; 
import ForkIcon from './icons/ForkIcon.vue'
import StarIcon from './icons/StarIcon.vue'
import { VPButton } from 'vitepress/theme'

const { repo } =  defineProps<{repo:Repo}>()

</script>

<script lang="ts"> 

export default {}
</script>

<style scoped>

div.repo-card{
    display: block;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    height: 100%;
    background-color: var(--vp-c-bg-soft);
    transition: border-color 0.25s, background-color 0.25s;
    padding: 1em 2em 2em 2em; 
}

.repo-card:hover {
  border-color: var(--vp-c-brand-1);
}



.repo-card > .header{
    line-height: 24px;
    font-size: 1.2em;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;    

}
.repo-card > .header > .title{
    flex-grow: 1;
    align-items: center;
    text-align: left;
    padding: 0.2em 1em 0.5em 0;
    color:var(--vp-c-brand-1);
}

.repo-card > .header > .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8em;
    color: var(--vp-c-text-soft);
    margin-left: 0.2em;
} 
.repo-card > .header > .info > * {
    margin-left: 0.2em;
    margin-right: 0.2em;
}
.repo-card > .body {
    font-size: 1em;
    color: var(--vp-c-text-soft);
    line-height: 150%;
    min-height: 4em;
}
.repo-card > .actions{
    display: flex;
    align-items: center;
    padding: 1em 0 0 0em;
}
.repo-card > .actions a{
    text-decoration: none;
    margin-right: 0.5em;
}

.repo_stats{
    display: flex;
    justify-content: space-between;
    margin-top:4px;
    font-size: 14px;
    color: var(--vp-c-text-soft);
    flex-direction: row;
}

.repo_stats > .author{
    flex-grow: 1;
}
.repo_stats >.item{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 12px;
}
.repo_stats >.item > svg{
    margin-right: 8px;
}


</style>