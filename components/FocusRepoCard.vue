<script setup lang="ts">
// import  { VPButton } from 'vitepress/theme'
import type { Repo } from "./types" 

const { repo } =  defineProps<{repo:Repo}>()
 </script>

<template>
  <div class="focus-repo">
    <div class="left">
        <div class="title">{{repo.title}}</div>
        <div class="description">{{ repo.description }}</div>
        <!-- <div class="notes">{{ repo.notes }}</div> -->
        <div class="actions">
            <a class="home" :href="repo.homepage.length ==0 ? repo.url : repo.homepage">Home</a>
            <a class="repo" :href="repo.url">Github</a>
<!-- 
            <VPButton text="Home" :href="repo.homepage.length ==0 ? repo.url : repo.homepage" ></VPButton>
            <VPButton text="Github" :href="repo.url" theme="alt"/> -->
        </div>
    </div>
    <div class="right">

    </div> 
  </div>
</template>

<style scoped>
 
.focus-repo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em 2em 2em;
  border: 1px solid var(--vp-code-block-divider-color);
  border-radius: 12px;
  height: 100%;
  transition: border-color 0.25s, background-color 0.25s;
  margin-top: 2em;
  margin-bottom: 2em;
  color: white;
}
.focus-repo .VPButton{
    text-decoration: none;
}

.focus-repo .actions>.home{
    text-decoration: none;
    border-color: var(--vp-button-brand-border);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
    display: inline-block;
    border: 1px solid transparent;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    transition: color 0.25s, border-color 0.25s, background-color 0.25s;
    border-radius: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;
    margin-right: 1em;
}
 

.focus-repo .actions>.repo{
    text-decoration: none;
    border-color: var(--vp-button-alt-border);
    color: var(--vp-button-alt-text);
    background-color: var(--vp-button-alt-bg);
    display: inline-block;
    border: 1px solid transparent;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    transition: color 0.25s, border-color 0.25s, background-color 0.25s;
    border-radius: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;
}


.focus-repo .left {
  display: flex;  
  flex-grow: 1;
  flex-direction: column;
  padding: 2em;
  text-align: left;  
}

.focus-repo .left .title{
    font-size: 3em;
    line-height: 100%;
    background: var(--vp-home-hero-name-background);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: var(--vp-home-hero-name-color);
    line-height: 64px;
    font-size: 56px;
    text-align: left;
}
.focus-repo .left .description{
    line-height: 120%;
    max-width: 392px;
    letter-spacing: -.4px;
    line-height: 40px;
    font-size: 32px;
    font-weight: 700;
    white-space: pre-wrap;
    color: var(--vp-c-text-1);
}
.focus-repo .left .notes{
    padding-top: 8px;
    line-height: 28px;
    font-size: 16px;
    font-weight: 500;
    white-space: pre-wrap;
    color: var(--vp-c-text-2);
}

.focus-repo .left .tag{
    padding-top: 8px;
    max-width: 392px;
    line-height: 28px;
    font-size: 18px;
    font-weight: 500;
    white-space: pre-wrap;
    color: var(--vp-c-text-2);
}
.focus-repo .left .actions{
    padding: 1em 0 0 0;
}
.focus-repo .left .actions > .VPButton{
    margin-right:1em;
}

.focus-repo .right {
  display: flex;
  align-items: center; 
}

@media (min-width: 640px) { 
}

@media (min-width: 960px) { 
}
 
</style>