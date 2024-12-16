"use-client"
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg =() =>{

    return (
      <FacebookProvider appId="1549832952332596" chatSupport>
        <CustomChat pageId="444584762082106" minimized={false}/>
      </FacebookProvider>    
    );
  
}
export default FacebookMsg;