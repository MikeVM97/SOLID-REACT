// Un sistema no debe depender en cosas que no necesita.

import { FC } from "react";

type PostType = {
  title: string;
  author: {
    name: string;
    age: number;
  };
  createdAt: Date;
};

type TitleProps = {
  title: string;
};

type DateProps = {
  createdAt: string;
};

// Pasar por props solo lo que el componente necesita
const PostTitle: FC<TitleProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

// Pasar por props solo lo que el componente necesita
const PostDate: FC<DateProps> = ({ createdAt }) => {
  return <time>{createdAt}</time>;
};

export default function App({ post }: { post: PostType }) {
  return (
    <div>
      <PostTitle title={post.title} />
      <span>author: {post.author.name}</span>
      <PostDate createdAt={post.createdAt.toString()} />
    </div>
  );
}
