import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticleDetail } from '../../api/boardAPI';
import { CategoryID, GetArticleDetailResponse } from '../../api/boardAPI.type';
import { QueryKeys } from '../../api/QueryKeys';
import CommentLogo from '../../assets/CommentLogo';
import Logo from '../../assets/Logo';
import useRelativeTime, { getRelativeTime } from '../../Hooks/useRelativeTime';
import { useCategory } from '../../pages/Community';
import * as S from './ArticleDetail.style';

function ArticleDetail() {
  const navigate = useNavigate();
  const { postId } = useParams<'postId'>();
  const { category } = useCategory();
  const categoryId = CategoryID[category];

  const { data: article, isLoading } = useQuery(
    [QueryKeys.ArticleDetail, postId],
    () => {
      if (!postId) {
        return;
      }
      return getArticleDetail(categoryId, postId);
    }
  );

  const contentsArr = article?.content.split('\n');
  const relTime = useRelativeTime(article?.createdAt ?? '');

  return (
    <S.StyledWrapper>
      <S.Title>
        <S.CategoryTag>동네정보</S.CategoryTag>
        {article?.title}
      </S.Title>

      <S.Contents>
        <S.Image>
          {/* {imageUrl && <img src={imageUrl} alt={'게시글 이미지'} />} */}
        </S.Image>
        <p className="contents-body">{contentsArr}</p>
        <div className="time">{relTime}</div>
      </S.Contents>

      <S.Bottom>
        <div className="btn-container">
          <S.Button type="button">
            {/* {hasHeart ? <Logo /> : <Logo color={gray} />}
            추천해요 {heartCnt} */}
            <Logo />
            추천해요 {article?.heartCnt}
          </S.Button>
        </div>
        <div className="btn-container">
          {/* <S.Button type="button">
            <CommentLogo />
            댓글 {article.commentCnt}
          </S.Button> */}
        </div>
      </S.Bottom>
    </S.StyledWrapper>
  );
}

export default ArticleDetail;
