import { Container } from 'components/styles.styled';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ExtraContainer,
  Title,
  Image,
  Text,
} from './Article.styled';
import { useParams } from 'react-router-dom';
import image from "../../images/images/exp_x1.jpg"

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/articles/${id}`
        );
        setArticle(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTextWithLineBreaks = text => {
    const textWithLineBreaks = text.replace(/\\n/g, '<br>');
    return textWithLineBreaks;
  };

  return (
    <Container>
      <ExtraContainer>
        <Title>{article.title}</Title>
        <Image src={image} alt={article.title} />
          {article.content ? (
            <Text
              dangerouslySetInnerHTML={{
                __html: changeTextWithLineBreaks(article.content),
              }}
            ></Text>
          ) : (
            <div></div>
          )}
      </ExtraContainer>
    </Container>
  );
};

export default Article;
