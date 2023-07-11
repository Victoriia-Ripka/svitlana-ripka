/* eslint-disable no-unused-vars */
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
import image from '../../images/images/exp_x1.jpg';

const Articles = () => {
  const [articlesArray, setArticlesArray] = useState([]);

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
