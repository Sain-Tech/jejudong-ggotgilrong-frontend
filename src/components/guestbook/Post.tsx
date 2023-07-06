import styled from 'styled-components';

export const Post = () => {
  const random_id = Math.floor(Math.random() * 6) + 1;

  return (
    <PostContainer>
      <Content>
        <Icon_Box>
          <img
            src={
              import.meta.env.BASE_URL + './icon/post_' + random_id + '_1.svg'
            }
          />
        </Icon_Box>
        <TextBox>
          <div className="comment">
            커피맛집, 인생 커피를 찾았어요. 커피맛집, 인생 커피를
            찾았어요.커피맛집, 인생 커피를 찾았어요.커피맛집, 인생 커피를
            찾았어요.커피맛집, 인생 커피를 찾았어요.커피맛집, 인생 커피를
            찾았어요.
          </div>
          <div className="date">2023.07.07</div>
          <div className="nickname">멘도롱또똣</div>
        </TextBox>
        <Icon_Box>
          <img
            src={
              import.meta.env.BASE_URL + './icon/post_' + random_id + '_2.svg'
            }
          />
        </Icon_Box>
      </Content>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  width: 45%;
  border-radius: 10px;
  margin: 8px 0;
  position: relative;

  background-color: ${({ theme }) => theme.colors.gray_100};

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Icon_Box = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`;

const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  font-family: 'Pretendard';
  font-weight: 400;
  text-align: center;

  padding: 0 5px;

  div.comment {
    width: 100%;
    height: 40px;
    font-size: 12px;
    line-height: 13px;
    color: ${({ theme }) => theme.colors.gray_900};
    margin-bottom: 9px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
  div.date,
  div.nickname {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.gray_700};
    margin: 2px 0;
  }
  div.date {
    margin-top: 4px;
  }
`;
