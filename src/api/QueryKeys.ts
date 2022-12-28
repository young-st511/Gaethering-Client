export const QueryKeys = {
  /** 펫 프로필 이미지 URL*/
  petProfileImg: ['pet', 'profile', 'image'],
  /** 대표 반려동물 이름 */
  petProfileName: ['pet', 'profile', 'name'],
  /** 엑세스 토큰 */
  accessToken: 'accessToken',
  /** 리프레시 토큰 */
  refreshToken: 'refreshToken',
  /** 로그인 여부 */
  auth: 'auth',
  /** NavBar 유저 정보 */
  navInfo: ['user', 'navBar'],
  /** 사용자 프로필 정보 */
  userProfile: ['user', 'profile'],
  user: 'user',
} as const;
