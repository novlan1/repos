

import { GithubRepo, Repo } from '../components/types';
import defaultGithubRepos  from '../data/myrepos.json' 


/**
 * 提取需要的仓库信息
 * @param repos 
 * @returns 
 */
export function pickRepoInfos(repos:GithubRepo[]) {
    return repos.map(repo =>{
        return {
          name      : repo.name,
          language  : repo.language,
          forks     : repo.forks_count,
          stars     : repo.stargazers_count,
          lastUpdate: repo.updated_at,
          url       : repo.html_url,
          // homepage  : repo.homepage,
          topics    : repo.topics,
          private   : repo.private,
        }
      })
}


export const defaultRepoInfos = pickRepoInfos(defaultGithubRepos as  GithubRepo[])
  
export function updateRepos(repos:Repo[],githubRepoInfos:GithubRepo[]) {
    repos.forEach((repo) => {
      const info = githubRepoInfos.find(info => info.name === repo.name)
      if (info){
        Object.assign(repo,info)
      }
    })  
}
  /**
   * 
   * 调用https://api.github.com/users/novlan1/repos
   * 读取数据保存到data/myrepos.json
   * 
   * 
   */ 
export async function fetchRepos() {
    try {
      const response = await fetch('https://api.github.com/users/novlan1/repos?per_page=100');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const reposData = await response.json();
      return pickRepoInfos(reposData);
    } catch (error) {
      console.error('Error fetching repos:', error);
      return defaultRepoInfos;
    }
}
  


