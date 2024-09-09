import { Repo } from "../components/types";
import { getUrlHash } from "./getUrlHash";

export function getFocusRepo(repos:Repo[],defaultRepo:string='voerka-i18n'){
    let repoName = getUrlHash()
    if(repoName.trim()=='') repoName = defaultRepo
    let repo = repos.find(repo => repo.name === repoName)
    if(!repo){
        repo = repos.find(repo => repo.name === defaultRepo)
    }
    console.log("focus repo :",repoName, repo)    
    return repo
}  