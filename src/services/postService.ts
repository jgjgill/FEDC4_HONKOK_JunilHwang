import { useMutation } from '@tanstack/react-query';
import { snsApiClient } from '~/api';

interface CreatePost {
  title: string;
  content: string;
  image?: BinaryType;
  channelId: string;
}

interface EditPost {
  postId: string;
  title: string;
  content: string;
  image: BinaryType | null;
  imageToDeletePublicId?: string;
  channelId: string;
}

const createPost = async ({ title, content, image, channelId }: CreatePost) => {
  const customPost = JSON.stringify({ title, content });

  return await snsApiClient.post('/posts/create', {
    title: customPost,
    image,
    channelId
  });
};

const getPost = async (postId: string) => {
  return await snsApiClient.get(`/posts/${postId}`);
};

const editPost = async ({
  postId,
  title,
  content,
  image,
  imageToDeletePublicId,
  channelId
}: EditPost) => {
  const customPost = JSON.stringify({ title, content });

  return await snsApiClient.put('/posts/update', {
    postId,
    title: customPost,
    image,
    imageToDeletePublicId,
    channelId
  });
};

const deletePost = async (id: string) => {
  return await snsApiClient.delete('/posts/delete', { data: { id } });
};

const likePost = async (postId: string) => {
  return await snsApiClient.post('/likes/create', { postId });
};

const unlikePost = async (id: string) => {
  return await snsApiClient.delete('/likes/delete', { data: { id } });
};

export const useCreatePost = () => {
  return useMutation({ mutationFn: createPost });
};

export const useGetPost = () => {
  return useMutation({ mutationFn: getPost });
};

export const useEditPost = () => {
  return useMutation({ mutationFn: editPost });
};

export const useDeletePost = () => {
  return useMutation({ mutationFn: deletePost });
};

export const useLikePost = () => {
  return useMutation({ mutationFn: likePost });
};

export const useUnLikePost = () => {
  return useMutation({ mutationFn: unlikePost });
};