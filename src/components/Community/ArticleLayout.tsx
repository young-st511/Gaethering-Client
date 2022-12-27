import { useMutation } from 'react-query';
import { useTheme } from 'styled-components';
import { BoardArticleList } from '../../api/boardAPI.type';
import CommentLogo from '../../assets/CommentLogo';
import Logo from '../../assets/Logo';
import useRelativeTime from '../../Hooks/useRelativeTime';
import * as S from './Article.style';

function ArticleLayout({
  title,
  commentCnt,
  content,
  createdAt,
  hasHeart,
  heartCnt,
  imageUrl,
}: BoardArticleList) {
  const gray = useTheme().color.gray2;
  const time = Date.parse(createdAt).toString();
  const relTime = useRelativeTime(time);
  const contentsArr = content.split('\n');
  const splitContents = contentsArr.slice(0, 4).map((elem) => (
    <>
      {elem}
      <br />
    </>
  ));

  // const heart = useMutation()

  return (
    <S.ArticleLayout>
      <S.Title>
        <div className="title_logo">
          <S.CategoryTag>동네정보</S.CategoryTag>
        </div>
        <h3>{title}</h3>
      </S.Title>

      <S.Contents>
        <S.Image>
          {imageUrl && <img src={imageUrl} alt={'게시글 이미지'} />}
        </S.Image>
        <p className="contents-body">{splitContents}</p>
        {contentsArr.length > 4 && <S.More>더보기</S.More>}
        <div className="time">{relTime}</div>
      </S.Contents>

      <S.Bottom>
        <div className="btn-container">
          <S.Button type="button">
            {hasHeart ? <Logo /> : <Logo color={gray} />}
            추천해요 {heartCnt}
          </S.Button>
        </div>
        <div className="btn-container">
          <S.Button type="button">
            <CommentLogo />
            댓글 {commentCnt}
          </S.Button>
        </div>
      </S.Bottom>
    </S.ArticleLayout>
  );
}

export default ArticleLayout;
