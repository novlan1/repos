import fs from "node:fs"
/**
 * 
 * 调用https://api.github.com/users/novlan1/repos
 * 读取数据保存到data/myrepos.json
 * 
 * 
 */ 
async function fetchRepos() {
    try {
      const response = await fetch('https://api.github.com/users/novlan1/repos');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const reposData = await response.json();
      return reposData;
    } catch (error) {
      console.error('Error fetching repos:', error);
      return [];
    }
  }
  
  fetchRepos().then(repos => {
    // 将获取到的repos数据保存到data/myrepos.json文件中
    // 这里需要使用文件系统模块fs来实现
    const filePath = './data/myrepos.json';
    fs.writeFileSync(filePath, JSON.stringify(repos,null,4));
    console.log('Repos saved to', filePath);
  }).catch(error => {
    console.error('Error saving repos to file:', error);
  });