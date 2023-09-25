import { PostList } from './index';
import { Post } from '~/types';

interface PostSearchResultProps {
  parsedPostResults: Post[];
}

const PostSearchResult = ({ parsedPostResults }: PostSearchResultProps) => {
  return (
    <section className="relative h-full w-full overflow-hidden">
      <section className="relative mb-6 flex h-full flex-col justify-evenly overflow-hidden rounded-xl border-[1px]">
        {parsedPostResults.length > 0 ? (
          <>
            <span className="px-4 py-2 text-sm">포스트</span>
            <section className="flex h-full flex-col overflow-y-auto overflow-x-hidden">
              <PostList parsedPostResults={parsedPostResults} />
            </section>
          </>
        ) : (
          <span className="flex h-full w-full items-center justify-center">
            {' '}
            결과 없음
          </span>
        )}
      </section>
    </section>
  );
};

export default PostSearchResult;