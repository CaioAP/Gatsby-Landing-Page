import styled from 'styled-components';

export const Container = styled.div`
    max-width: 60vw;
    margin: 0 auto;
    margin-top: 12vh;
`;

export const PostImage = styled.div`
    .post-image {
        max-height: 40vh;
    }
`;

export const PostArticle = styled.article`
    min-height: 38vh;


`;

export const PostHeader = styled.header``;

export const PostTitle = styled.h1`
    font-size: 32px;
`;

export const PageNavigation = styled.nav``;

export const PageList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
`;

export const PageListItem = styled.li`
    > a {
        text-decoration: none;

        :hover {
        text-decoration: underline;
        }
    }
`;