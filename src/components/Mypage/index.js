import React, {PureComponent} from 'react';
import { Card, CardBody, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBlock } from 'reactstrap';
import './start.css';

export default class Mypage extends PureComponent{

      render() {
        return(
            <CardGroup>
                <Card>
                     <CardBlock>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardTitle>위치</CardTitle>
                        <CardSubtitle>제목</CardSubtitle>
                        <CardText>내용</CardText>
                        <CardText>댓글내용</CardText>
                        <Button>삭제</Button>
                     </CardBlock>
                </Card>

                <Card>
                    <CardBlock>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardTitle>위치</CardTitle>
                        <CardSubtitle>제목</CardSubtitle>
                        <CardText>내용</CardText>
                        <CardText>댓글내용</CardText>
                        <Button>삭제</Button>
                    </CardBlock>
                </Card>

                <Card>
                    <CardBlock>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardTitle>위치</CardTitle>
                        <CardSubtitle>제목</CardSubtitle>
                        <CardText>내용</CardText>
                        <CardText>댓글내용</CardText>
                        <Button>삭제</Button>
                    </CardBlock>
                </Card>
            </CardGroup>
          );
      };
  }
