import { FaRegObjectUngroup } from 'react-icons/fa';
import RootPathways from './Config'

export function reducer (state, action) {
    switch(action.type) {
      case 'setUser':
        return { ...state, user: action.user, loading: false }
      case 'loaded':
        return { ...state, loading: false }
      default:
        return state
    }
  }
  
  export function checkHost(){
    var hasLocalhost  = (hostname) => Boolean(hostname.match(/localhost/) || hostname.match(/127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/));
    var hasHostname   = (hostname) => Boolean(hostname.includes(window.location.hostname));
    var isLocalhost   = hasLocalhost(window.location.hostname);
    var isHost = hasHostname(window.location.hostname);

    if (isLocalhost) {
      return(RootPathways.localhost)
    }
    else if (isHost) {
      var isProdBuild = (hostname) => Boolean(hostname.includes("crossover2x.net"));
      if(isProdBuild){
        return(RootPathways.prodBuild);
      } else{
        return(RootPathways.devBuild)
      }
    } else{
      return("nohost://nohost");
    }
  }