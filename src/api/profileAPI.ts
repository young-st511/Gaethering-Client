import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '../data/API_ENV';
import { ProfileApiUrl, ProfileResponse } from './profileAPI.typs';
import { getRequest } from './requests';

export const getUserProfile = async () => {
  const response = await getRequest<ProfileResponse>(
    ProfileApiUrl.PROFILE_MYPAGE, 
  );
  return response;
};
