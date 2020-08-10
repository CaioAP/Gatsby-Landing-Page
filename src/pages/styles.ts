import styled from 'styled-components';

export const LayoutContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Background = styled.div`
  .background-image {
    position: fixed !important;
    top: 0;
    left: 0;
    /* z-index: 0; */
    margin: 0;
    width: 100%;
    height: 100%;
  }
  
  @keyframes leftToRight {
    0% {
      transform: translate(0, 0);    
    }
    100% {
      transform: translate(100%, 0px);
    }
  }

  .background-logo {
    position: fixed !important;
    top: 0;
    left: -35%;
    /* z-index: 1; */
    margin: 0;
    width: 35%;
    height: 100%;
    animation: leftToRight 1.5s linear;
    animation-fill-mode: forwards;
  }
`;

export const SideBarMenu = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 2vw;
    height: 3vh;
    left: 2vw;
    top: 3vh;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #17223C;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #17223Cff;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 2vw;
    width: 3vh;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #17223C;
    padding: 3vh 1vw;
    font-size: 1.5vw;
    
    ::-webkit-scrollbar {
      width: 0px;
    }
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #ffffff;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    color: #ffffff;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 8px 0px; 
    padding: 4px;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
  }
`;

export const Header = styled.div`
  width: 100%;
  
  .header-logo {
    position: fixed !important;
    top: 0;
    left: calc(60vw - 12.5vw);
    margin: 0 auto;
    width: 25vw;
    height: 17vh;
    animation: fadeIn 1s linear;
    animation-fill-mode: forwards;
    z-index: 1;
  }
  .header-logo-dark {
    position: absolute !important;
    top: 0vh;
    left: 44vw;
    margin: 0 auto;
    width: 14vw;
    height: 8vh;
    z-index: 1;
  }

  > hr {
    position: absolute;
    top: 8vh;
    width: 98vw;
    z-index: 1;
    border-style: solid;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-flow: row;
  flex-shrink: unset;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 16vh;
  left: calc(60vw - 5vw);
`;

export const Social = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;    
    }
    100% {
      opacity: 1;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  margin: 0px 8px;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  border: 1px groove #fff;
  animation: fadeIn 1.5s linear;
  animation-fill-mode: forwards;

  .social-link {
    width: 24px;
    height: 24px;
  }
`;

export const Container = styled.article`
  position: fixed;
  display: flex;
  flex-flow: column;
  left: 42.5vw;
  top: 25vh;
  justify-content: start;
  align-items: center;
  width: 35vw;
  height: 60vh;
  background: #fff;
  border-radius: 25px;
  padding: 16px;
  overflow-y: auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-flow: column;
  margin: 12px 24px;
  width: 80%;
  /* border: 1px solid #88888888; */
  border-radius: 12px;
  box-shadow: 0px 4px 6px 1px #88888888;

  > a {
    text-decoration: none;
  }
`;

export const PostImage = styled.div`
  .post-image {
    margin: 0 auto;
    width: 100%;
    max-height: 250px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background: #fff;
}
`;

export const PostText = styled.div`
  > header {
    padding: 12px;
    background: #383838;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    > h3 {
      margin: 0;
      color: #fff;
      text-decoration: none;
      box-shadow: none;
      outline: none;
      font-weight: 400;
    }
  }
`;

export const InDevelopment = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

export const FooterContact = styled.p`
  position: fixed;
  left: 48vw;
  bottom: 2vh;
  margin: 0;
  color: #ffffff;
  text-align: center;
  font-size: 1vw;
  font-family: 'Spartan', monospace;
`;