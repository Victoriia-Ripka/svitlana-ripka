/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import {
  Container,
  ExtraContainer,
  Title,
  ArticlesList,
  Item,
  LinkToArticle,
  Image,
  TextContainer,
  ArticleTitle,
  PrevieText,
} from './Articles.styled';
// import axios from 'axios';
import image from '../../images/images/exp_x1.jpg';

const Articles = () => {
  const [articlesArray, setArticlesArray] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8080/api/articles');
  //       setArticlesArray(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const cutText = text => {
    const textWithLineBreaks = text.replace(/\\n/g, '<br>');
    const newText = textWithLineBreaks.slice(0, 120) + '...';
    return newText;
  };

  return (
    <Container>
      <ExtraContainer>
        <Title>Статті мого авторста</Title>
        <ArticlesList>
          {articlesArray.map(article => {
            const text = article.content;
            const previewText = cutText(text);
            return (
              <Item key={article._id}>
                <Image src={image} alt={article.title} />
                <TextContainer>
                  <LinkToArticle to={`/articles/${article._id}`}>
                    <ArticleTitle>{article.title}</ArticleTitle>
                  </LinkToArticle>
                  <PrevieText
                    dangerouslySetInnerHTML={{
                      __html: previewText,
                    }}
                  ></PrevieText>
                </TextContainer>
              </Item>
            );
          })}
        </ArticlesList>
      </ExtraContainer>
    </Container>
  );
};

export default Articles;
